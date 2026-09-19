/* 本页 JS 只补充必要交互；没有 JS 时页面静态可读，不缺信息。 */
(() => {
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const languageMenu = document.querySelector("[data-language-menu]");
  if (languageMenu) {
    document.addEventListener("click", (event) => {
      if (!languageMenu.contains(event.target)) {
        languageMenu.open = false;
      }
    });
  }

  /* ---------- 搬得进：转换回放 + 可拖拽的「出库」节点 ---------- */

  const swap = document.getElementById("swap");
  if (swap) {
    // 先归零再播放；reduced motion 或不支持 IO 时直接呈现终态
    swap.classList.add("swap-armed");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      swap.classList.add("is-live");
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            swap.classList.add("is-live");
            io.disconnect();
          }
        },
        { threshold: 0.35 },
      );
      io.observe(swap);
    }

    const svg = document.getElementById("swap-svg");
    const node = document.getElementById("ship-node");
    const link = document.getElementById("ship-link");
    const tip = document.getElementById("ship-tip");
    if (svg && node && link && tip) {
      // 基准几何来自 SVG 里的初始布局：菱形出口在 (162,57)，节点矩形 (182,11,46,26)
      const JX = 162;
      const JY = 57;
      const BASE_X = 182;
      const BASE_Y = 11;
      const NODE_W = 46;
      const NODE_H = 26;
      let dx = 0;
      let dy = 0;

      const applyPosition = () => {
        node.setAttribute("transform", `translate(${dx} ${dy})`);
        const left = BASE_X + dx;
        const right = BASE_X + NODE_W + dx;
        const cy = BASE_Y + NODE_H / 2 + dy;
        if (left >= JX + 11) {
          link.setAttribute("d", `M${JX} ${JY}V${cy}H${left - 7}`);
          tip.setAttribute("d", `M${left - 7} ${cy - 4}l5 4-5 4`);
        } else {
          link.setAttribute("d", `M${JX} ${JY}V${cy}H${right + 7}`);
          tip.setAttribute("d", `M${right + 7} ${cy - 4}l-5 4 5 4`);
        }
      };

      let pointerId = null;
      let startX = 0;
      let startY = 0;
      let grabDx = 0;
      let grabDy = 0;

      node.addEventListener("pointerdown", (event) => {
        pointerId = event.pointerId;
        startX = event.clientX;
        startY = event.clientY;
        grabDx = dx;
        grabDy = dy;
        node.classList.add("dragging");
        node.setPointerCapture(event.pointerId);
        event.preventDefault();
      });

      node.addEventListener("pointermove", (event) => {
        if (pointerId !== event.pointerId) {
          return;
        }
        // client 像素 → viewBox 单位
        const scale = 238 / svg.getBoundingClientRect().width;
        dx = grabDx + (event.clientX - startX) * scale;
        dy = grabDy + (event.clientY - startY) * scale;
        dx = Math.min(6, Math.max(-176, dx));
        dy = Math.min(75, Math.max(-7, dy));
        applyPosition();
      });

      const release = (event) => {
        if (pointerId === event.pointerId) {
          pointerId = null;
          node.classList.remove("dragging");
        }
      };
      node.addEventListener("pointerup", release);
      node.addEventListener("pointercancel", release);
    }
  }

  /* ---------- 首屏：重播按钮，清空动画再放开让整幕从 0 重跑 ---------- */

  const replay = document.querySelector(".replay");
  const hero = document.querySelector(".hero");
  if (replay && hero && !reducedMotion) {
    replay.addEventListener("click", () => {
      hero.classList.add("anim-reset");
      void hero.offsetWidth;
      hero.classList.remove("anim-reset");
    });
  }

  /* ---------- 扛得住：一万个元素的实时画布 ---------- */

  const bench = document.getElementById("bench");
  const canvas = document.getElementById("bench-canvas");
  const fpsLabel = document.getElementById("bench-fps");
  if (!bench || !canvas || !canvas.getContext) {
    return;
  }
  const reducedMotionLabel = bench.dataset.reducedMotionLabel || "—";
  const liveLabel = bench.dataset.liveLabel || "—";
  bench.hidden = false;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  // 世界坐标里铺 10,000 个元素。确定性伪随机：每次刷新长一样，方便对照。
  const WORLD_W = 5200;
  const WORLD_H = 2600;
  const COUNT = 10000;

  const mulberry32 = (seed) => () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const rand = mulberry32(20260804);

  // 颜色沿用页面的元素配色；faint 是画布上的「普通墨」，占大头
  const COLOR_VARS = [
    "--ink-faint",
    "--blue",
    "--green",
    "--amber",
    "--red",
    "--brand",
  ];
  const COLOR_WEIGHTS = [0.62, 0.1, 0.09, 0.08, 0.05, 0.06];
  const pickColor = () => {
    let roll = rand();
    for (let i = 0; i < COLOR_WEIGHTS.length; i++) {
      roll -= COLOR_WEIGHTS[i];
      if (roll <= 0) {
        return i;
      }
    }
    return 0;
  };

  // 按颜色各建一条 Path2D：一帧 12 次 stroke 而不是一万次，帧预算花在
  // 元素规模上，不花在 API 开销上
  const rectPaths = COLOR_VARS.map(() => new Path2D());
  const ellipsePaths = COLOR_VARS.map(() => new Path2D());
  const linePaths = COLOR_VARS.map(() => new Path2D());

  let placed = 0;
  while (placed < COUNT) {
    // 成簇摆放：一簇像一小张流程图，比均匀噪点更像真的画布
    const cx = 140 + rand() * (WORLD_W - 280);
    const cyc = 140 + rand() * (WORLD_H - 280);
    const clusterSize = Math.min(COUNT - placed, 40 + Math.floor(rand() * 40));
    const cols = 3 + Math.floor(rand() * 4);
    let prevX = 0;
    let prevY = 0;
    for (let i = 0; i < clusterSize; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = cx + col * 64 + (rand() - 0.5) * 26;
      const y = cyc + row * 46 + (rand() - 0.5) * 20;
      const color = pickColor();
      const kind = rand();
      if (kind < 0.44) {
        rectPaths[color].rect(x, y, 26 + rand() * 22, 14 + rand() * 12);
      } else if (kind < 0.68) {
        const rx = 12 + rand() * 8;
        const ry = 8 + rand() * 5;
        ellipsePaths[color].moveTo(x + 12 + rx, y + 10);
        ellipsePaths[color].ellipse(x + 12, y + 10, rx, ry, 0, 0, Math.PI * 2);
      } else if (i > 0) {
        linePaths[color].moveTo(prevX + 20, prevY + 10);
        linePaths[color].lineTo(x, y + 10);
      } else {
        rectPaths[color].rect(x, y, 30, 16);
      }
      prevX = x;
      prevY = y;
      placed++;
    }
  }

  let colors = [];
  const resolveColors = () => {
    const styles = getComputedStyle(document.documentElement);
    colors = COLOR_VARS.map(
      (name) => styles.getPropertyValue(name).trim() || "#888",
    );
  };
  resolveColors();

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let viewW = 0;
  let zoom = 1;
  let fitZoom = 1;
  let offsetX = 0;
  let offsetY = 0;

  const draw = () => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(
      dpr * zoom,
      0,
      0,
      dpr * zoom,
      dpr * offsetX,
      dpr * offsetY,
    );
    ctx.lineWidth = 1.1 / zoom;
    for (let i = 0; i < colors.length; i++) {
      ctx.strokeStyle = colors[i];
      ctx.stroke(rectPaths[i]);
      ctx.stroke(ellipsePaths[i]);
      ctx.stroke(linePaths[i]);
    }
  };

  const resize = () => {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) {
      return;
    }
    const firstLayout = viewW === 0;
    viewW = width;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    fitZoom = Math.min(width / WORLD_W, height / WORLD_H);
    if (firstLayout) {
      zoom = fitZoom;
      offsetX = (width - WORLD_W * zoom) / 2;
      offsetY = (height - WORLD_H * zoom) / 2;
    }
    draw();
  };
  resize();
  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(canvas);
  } else {
    window.addEventListener("resize", resize);
  }

  matchMedia("(prefers-color-scheme: dark)").addEventListener?.(
    "change",
    () => {
      resolveColors();
      draw();
    },
  );

  // fps 是当场量出来的，不是写死的：EMA 平滑，半秒刷一次
  let running = false;
  let lastTs = 0;
  let emaMs = 0;
  let lastHud = 0;
  const tick = (ts) => {
    if (!running) {
      return;
    }
    if (lastTs) {
      const delta = ts - lastTs;
      // 超长间隔是标签页被挂起后恢复，不是真实帧耗时，不进平均
      if (delta < 250) {
        emaMs = emaMs ? emaMs * 0.9 + delta * 0.1 : delta;
      }
      if (emaMs && ts - lastHud > 500 && fpsLabel) {
        const fps = Math.min(999, Math.round(1000 / emaMs));
        fpsLabel.textContent = `${fps} fps · ${emaMs.toFixed(1)} ms`;
        lastHud = ts;
      }
    }
    lastTs = ts;
    draw();
    requestAnimationFrame(tick);
  };

  const start = () => {
    if (running || reducedMotion) {
      return;
    }
    running = true;
    lastTs = 0;
    requestAnimationFrame(tick);
  };
  const stop = () => {
    running = false;
  };

  if (reducedMotion || !("IntersectionObserver" in window)) {
    if (fpsLabel) {
      fpsLabel.textContent = reducedMotion ? reducedMotionLabel : liveLabel;
    }
    if (!reducedMotion) {
      start();
    }
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? start() : stop()));
      },
      { threshold: 0.15 },
    );
    io.observe(bench);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stop();
    } else if (bench.getBoundingClientRect().top < window.innerHeight) {
      start();
    }
  });

  const zoomAt = (px, py, factor) => {
    const next = Math.min(5, Math.max(fitZoom * 0.5, zoom * factor));
    const applied = next / zoom;
    offsetX = px - (px - offsetX) * applied;
    offsetY = py - (py - offsetY) * applied;
    zoom = next;
    draw();
  };

  const pointers = new Map();
  let pinchDist = 0;

  canvas.addEventListener("pointerdown", (event) => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    canvas.classList.add("dragging");
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinchDist = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });

  canvas.addEventListener("pointermove", (event) => {
    const prev = pointers.get(event.pointerId);
    if (!prev) {
      return;
    }
    const current = { x: event.clientX, y: event.clientY };
    if (pointers.size === 2) {
      pointers.set(event.pointerId, current);
      const [a, b] = [...pointers.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinchDist > 0) {
        const rect = canvas.getBoundingClientRect();
        zoomAt(
          (a.x + b.x) / 2 - rect.left,
          (a.y + b.y) / 2 - rect.top,
          dist / pinchDist,
        );
      }
      pinchDist = dist;
    } else {
      offsetX += current.x - prev.x;
      offsetY += current.y - prev.y;
      pointers.set(event.pointerId, current);
      if (!running) {
        draw();
      }
    }
  });

  const endPointer = (event) => {
    pointers.delete(event.pointerId);
    pinchDist = 0;
    if (pointers.size === 0) {
      canvas.classList.remove("dragging");
    }
  };
  canvas.addEventListener("pointerup", endPointer);
  canvas.addEventListener("pointercancel", endPointer);

  canvas.addEventListener(
    "wheel",
    (event) => {
      // 裸滚轮留给页面滚动；捏合（浏览器映射为 ctrl+wheel）与 ⌘/Ctrl+滚轮缩放
      if (!event.ctrlKey && !event.metaKey) {
        return;
      }
      event.preventDefault();
      const rect = canvas.getBoundingClientRect();
      zoomAt(
        event.clientX - rect.left,
        event.clientY - rect.top,
        Math.exp(-event.deltaY * 0.01),
      );
    },
    { passive: false },
  );
})();
