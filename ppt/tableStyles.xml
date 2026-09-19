<!doctype html><html lang="en" translate="no"><head><meta charset="utf-8"/><meta name="google" content="notranslate"/><title>1NX - One Workspace, Infinite (N) Connections, Multiplied (X) Efficiency.</title><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover,shrink-to-fit=no"/><meta name="referrer" content="origin"/><meta name="mobile-web-app-capable" content="yes"/><meta name="theme-color" content="#121212"/><meta name="title" content="1NX - One Workspace, Infinite (N) Connections, Multiplied (X) Efficiency."/><meta name="description" content="1NX is a collaborative whiteboard for prototyping, planning and process design — wireframe components, flowcharts, swimlanes and tables on one infinite canvas."/><meta name="image" content="https://1nx.net/og-image-1nx-20260724.png"/><meta property="og:site_name" content=""/><meta property="og:type" content="website"/><meta property="og:url" content="https://1nx.net/?share=20260724-1"/><meta property="og:title" content="1NX - One Workspace, Infinite (N) Connections, Multiplied (X) Efficiency."/><meta property="og:image:alt" content=" logo"/><meta property="og:description" content="1NX is a collaborative whiteboard for prototyping, planning and process design — wireframe components, flowcharts, swimlanes and tables on one infinite canvas."/><meta property="og:image" content="https://1nx.net/og-image-1nx-20260724.png"/><meta property="og:image:secure_url" content="https://1nx.net/og-image-1nx-20260724.png"/><meta property="og:image:type" content="image/png"/><meta property="og:image:width" content="1200"/><meta property="og:image:height" content="675"/><meta property="twitter:card" content="summary_large_image"/><meta property="twitter:url" content="https://1nx.net/?share=20260724-1"/><meta property="twitter:title" content="1NX - One Workspace, Infinite (N) Connections, Multiplied (X) Efficiency."/><meta property="twitter:description" content="1NX is a collaborative whiteboard for prototyping, planning and process design — wireframe components, flowcharts, swimlanes and tables on one infinite canvas."/><meta property="twitter:image" content="https://1nx.net/og-image-1nx-20260724.png"/><link rel="canonical" href="https://1nx.net"/><script>try {
        function setTheme(theme) {
          if (theme === "dark") {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        }

        function getTheme() {
          const theme = window.localStorage.getItem("excalidraw-theme");

          if (theme && theme === "system") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches
              ? "dark"
              : "light";
          } else {
            return theme || "light";
          }
        }

        setTheme(getTheme());
      } catch (e) {
        console.error("Error setting dark mode", e);
      }</script><script>// 启动屏迟入阈值按"是否回访"分档（见 BootLoading 样式的
      // --boot-reveal）：回访大概率秒开，宁可白屏也不闪屏；首访必然要
      // 下载主包，尽早亮出品牌屏和进度。装过 Service Worker 即回访，
      // SW 被清掉时用 localStorage 标记兜底。LoadingMessage 的
      // bootSplashRevealMs 读同一个 class，两侧时间轴必须同步。
      try {
        if (
          (navigator.serviceWorker && navigator.serviceWorker.controller) ||
          localStorage.getItem("1nx:visited") === "1"
        ) {
          document.documentElement.classList.add("boot-returning");
        }
        localStorage.setItem("1nx:visited", "1");
      } catch (e) {
        // 隐私模式禁用存储时按首访处理即可
      }</script><style>html{background-color:#fff}html.dark{background-color:#121212;color:#fff}</style><script>// 字体随应用部署，生产环境不依赖外部 CDN。
        window.EXCALIDRAW_ASSET_PATH = "/";</script><link rel="preload" href="/fonts/Assistant/Assistant-Regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"/><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/><meta name="version" content="2026-09-18T05:48:04Z-9a8e3a83b"/><script data-entry-recovery>(() => {
        let entryMounted = false;
        let recoveryStarted = false;

        const isDynamicImportError = (error) => {
          const message =
            error instanceof Error
              ? error.message
              : typeof error === "string"
              ? error
              : "";
          // 最后一条是资源回落成 index.html 时浏览器给的措辞：模块请求拿到
          // text/html 会被 MIME 检查拒绝，而它既不是 rejection 也不带 Error，
          // 只在 console 留下这一句，漏掉它就等于漏掉整条回落链路。
          return /failed to fetch dynamically imported module|importing a module script failed|error loading dynamically imported module|failed to load \d+ external diagrams|failed to load module script/i.test(
            message,
          );
        };

        const showRecoveryMessage = () => {
          const root = document.getElementById("root");
          if (!root || entryMounted) {
            return;
          }

          const message = document.createElement("span");
          message.textContent = "部分资源加载失败，请检查网络后重试。";
          const retry = document.createElement("button");
          retry.type = "button";
          retry.textContent = "重新加载";
          retry.addEventListener("click", () => window.location.reload());
          const status = document.createElement("div");
          status.role = "alert";
          status.style.cssText =
            "box-sizing:border-box;display:grid;height:100%;place-content:center;gap:12px;padding:24px;font:14px/1.6 sans-serif;color:#666";
          status.append(message, retry);
          root.replaceChildren(status);
        };

        // Pages 对缺失路径返回 200 + index.html，Service Worker 会把这份 HTML
        // 当成合法资源写进预缓存。workbox 以「URL + revision」为 key，哈希文件
        // 名的 revision 为 null，新 SW 安装时 key 相同便复用旧条目、不再重新
        // 下载——污染就此固化。清理缓存，但不主动刷新当前页面；画布数据在
        // IndexedDB，不受影响。
        const purgeServiceWorkerCaches = async () => {
          if (
            !("serviceWorker" in navigator) ||
            !navigator.serviceWorker.controller
          ) {
            return false;
          }

          try {
            const registrations =
              await navigator.serviceWorker.getRegistrations();
            await Promise.all(
              registrations.map((registration) => registration.unregister()),
            );

            if ("caches" in window) {
              const cacheNames = await window.caches.keys();
              await Promise.all(
                cacheNames.map((name) => window.caches.delete(name)),
              );
            }

            return true;
          } catch {
            return false;
          }
        };

        const recoverEntry = () => {
          if (entryMounted || recoveryStarted) {
            return;
          }
          recoveryStarted = true;
          void purgeServiceWorkerCaches().then(showRecoveryMessage);
        };

        window.addEventListener(
          "1nx:app-ready",
          () => {
            entryMounted = true;
          },
          { once: true },
        );
        window.addEventListener("1nx:asset-load-error", recoverEntry);

        // 主动检查部署更新，避免长期打开的页面只能等待浏览器自己的更新周期。
        // 新 Worker 激活后会由 sw-takeover.js 提醒用户刷新到新外壳。
        const updateServiceWorker = () => {
          if (!("serviceWorker" in navigator)) {
            return;
          }
          void navigator.serviceWorker
            .getRegistration()
            .then((registration) => registration?.update())
            .catch(() => {});
        };
        updateServiceWorker();
        window.addEventListener("focus", updateServiceWorker);
        window.setInterval(updateServiceWorker, 5 * 60 * 1000);

        // 兼容已经安装的上一版 SW；过渡期间它仍会发送握手消息。
        navigator.serviceWorker?.addEventListener("message", (event) => {
          if (event.data?.type !== "1nx:sw-takeover") {
            return;
          }
          event.ports[0]?.postMessage({ type: "1nx:sw-takeover" });
          // 装机不是更新：新访客跑的就是本次发布的外壳，没有东西可刷新
          if (event.data.updated) {
            window.dispatchEvent(new Event("1nx:sw-took-over"));
          }
        });

        window.addEventListener("unhandledrejection", (event) => {
          // iframe srcdoc swap / effect cleanup abort() — not a crash.
          if (event.reason?.name === "AbortError") {
            event.preventDefault();
            return;
          }
          if (isDynamicImportError(event.reason)) {
            event.preventDefault();
            recoverEntry();
          }
        });
        window.addEventListener(
          "error",
          (event) => {
            const target = event.target;
            // 样式表同样是首屏资源：新版本切换途中它可能回落成 index.html 而被
            // MIME 检查拒绝，只监听 script 会漏掉这半边，页面留在无样式状态。
            // modulepreload 更早——分片还没被 import 就已经在预载阶段失败，此时
            // 既没有 rejection 也没有渲染错误，只有这里能接住。
            if (
              (target instanceof HTMLScriptElement &&
                target.type === "module") ||
              (target instanceof HTMLLinkElement &&
                (target.rel === "stylesheet" ||
                  target.rel === "modulepreload")) ||
              isDynamicImportError(event.error || event.message)
            ) {
              recoverEntry();
            }
          },
          true,
        );
      })();</script><script>// setting this so that libraries installation reuses this window tab.
      window.name = "_excalidraw";</script><style>@font-face{font-family:"Loading Brand";src:url("/fonts/Nunito/Nunito-Upright-200-1000-009.woff2") format("woff2");font-weight:200 1000;font-style:normal;font-display:optional}@font-face{font-family:"Loading Brand CJK";src:url("/fonts/Xiaolai/Xiaolai-Regular-79d494361ae093b69e74ee9dbe65bfd4.woff2") format("woff2");font-weight:400;font-style:normal;font-display:optional;unicode-range:U+8F7B}@font-face{font-family:"Loading Brand CJK";src:url("/fonts/Xiaolai/Xiaolai-Regular-f8ee5d36068a42b51d0e4a1116cfcec1.woff2") format("woff2");font-weight:400;font-style:normal;font-display:optional;unicode-range:U+60F3}body,html{margin:0;-webkit-text-size-adjust:100%;width:100%;height:100%;overflow:hidden}.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap;user-select:none}#root{height:100%;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.BootLoading{box-sizing:border-box;position:absolute;inset:0;z-index:999;display:flex;align-items:center;justify-content:center;pointer-events:none;background:#fff;color:#57546f}.BootLoading-layout{width:min(19rem,calc(100vw - 2rem));display:flex;flex-direction:column;gap:1rem}:root{--boot-reveal:400ms}html.boot-returning{--boot-reveal:1500ms}.BootLoading-brand,.BootLoading-progress,.BootLoading-text{animation:BootLoading-appear 240ms cubic-bezier(.23,1,.32,1) backwards;animation-delay:var(--boot-reveal)}.BootLoading-progress{animation-delay:calc(var(--boot-reveal) + 50ms)}.BootLoading-text{animation-delay:calc(var(--boot-reveal) + 100ms)}@keyframes BootLoading-appear{from{opacity:0;transform:translateY(var(--boot-appear-shift,6px))}}.BootLoading-mark .BootLoading-chase{animation:BootLoading-chase 5.4s ease-in-out var(--boot-chase-stagger,0ms) infinite}.BootLoading-mark .BootLoading-chase--2{--boot-chase-stagger:-3600ms}.BootLoading-mark .BootLoading-chase--3{--boot-chase-stagger:-1800ms}@keyframes BootLoading-chase{0%,100%,33.33%{stroke:var(--boot-mark-ink)}25.93%,7.41%{stroke:var(--boot-mark-lit)}}.BootLoading-brand{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:clamp(.625rem,2vw,.875rem)}.BootLoading-mark{width:clamp(4rem,20vw,5.5rem);shape-rendering:geometricPrecision}.BootLoading{--boot-mark-ink:#57546f;--boot-mark-lit:#8d89df}.BootLoading-mark path{stroke:var(--boot-mark-ink);stroke-width:4;stroke-linecap:round;stroke-linejoin:round}.BootLoading-mark circle{fill:#ffffff;stroke:var(--boot-mark-ink);stroke-width:4}.BootLoading-name{color:#403d55;font-family:"Loading Brand CJK","Loading Brand",sans-serif;font-size:clamp(2.75rem, 14vw, 4rem);font-weight:700;letter-spacing:-.035em}.BootLoading-text{margin-top:1.25rem;text-align:center;color:#77748b;font-family:"Loading Brand CJK","Loading Brand",sans-serif;font-size:.875rem}.BootLoading-progress{width:100%;height:3px;overflow:hidden;border-radius:999px;background:#ecebfa}.BootLoading-brand,.BootLoading-content{box-sizing:border-box}.BootLoading-content{width:100%}.BootLoading-progress-value{display:block;width:100%;height:100%;border-radius:inherit;background:#8d89df;position:relative;overflow:hidden;transform:scaleX(.05);transform-origin:left center;animation:BootLoading-ramp .6s cubic-bezier(.23,1,.32,1) forwards,BootLoading-crawl 40s linear forwards;animation-delay:var(--boot-reveal),calc(var(--boot-reveal) + 600ms)}@keyframes BootLoading-ramp{to{transform:scaleX(.16)}}@keyframes BootLoading-crawl{from{transform:scaleX(.16)}to{transform:scaleX(.34)}}.BootLoading-progress-value::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(90deg,transparent 20%,rgba(255,255,255,.45) 50%,transparent 80%);transform:translateX(-100%);animation:BootLoading-sheen 1.8s linear infinite}@keyframes BootLoading-sheen{to{transform:translateX(100%)}}@media (prefers-reduced-motion:reduce){.BootLoading-progress-value{animation:none;transform:scaleX(.2)}.BootLoading-progress-value::after{display:none}.BootLoading-brand,.BootLoading-progress,.BootLoading-text{--boot-appear-shift:0px}.BootLoading-mark .BootLoading-chase{animation:none}}html.dark .BootLoading{background:#17161d;color:#d8d6ee}html.dark .BootLoading-name{color:#eeedf8}html.dark .BootLoading{--boot-mark-ink:#6e6b85}html.dark .BootLoading-mark circle{fill:#17161d}html.dark .BootLoading-text{color:#aaa7bd}html.dark .BootLoading-progress{background:#302e3d}@media screen and (min-width:1200px){#root{-webkit-touch-callout:default;-webkit-user-select:auto;-khtml-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}}</style><script type="module" crossorigin src="/static/index-DLsZT56_.js"></script><link rel="stylesheet" crossorigin href="/static/index-DujjqDmm.css"><link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"><link rel="modulepreload" crossorigin href="/static/index-iyxIYZmR.js"><link rel="modulepreload" crossorigin href="/static/index-DLsZT56_.js"><link rel="preload" as="style" href="/static/index-MCGlVOG5.css"><link rel="preload" as="style" href="/static/index-DujjqDmm.css"><meta name="release-tag" content="v0.20.18"><meta name="release-commit" content="9a8e3a83bd562779d38cc1a6735dca5838e5fc4d"><meta name="release-deployedAt" content="2026-09-18T05:48:10.702Z"><link rel="manifest" href="/manifest.webmanifest"><script id="vite-plugin-pwa:inline-sw">if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/sw.js', { scope: '/' })})}</script></head><body><noscript>You need to enable JavaScript to run this app.</noscript><header><h1 class="visually-hidden">1NX - One Workspace, Infinite (N) Connections, Multiplied (X) Efficiency.</h1></header><div id="root"><div class="BootLoading" role="status" aria-live="polite"><div class="BootLoading-layout"><div class="BootLoading-brand" aria-hidden="true"><svg class="BootLoading-mark" viewBox="0 0 120 96" fill="none"><path d="M25 50L69 22"/><path d="M69 22L73 75L25 50"/><circle class="BootLoading-chase" cx="25" cy="50" r="11"/><circle class="BootLoading-chase BootLoading-chase--2" cx="69" cy="22" r="11"/><circle class="BootLoading-chase BootLoading-chase--3" cx="73" cy="75" r="11"/></svg><div class="BootLoading-name">1NX</div></div><div class="BootLoading-content"><div class="BootLoading-progress" role="progressbar" aria-label="" aria-valuemin="0" aria-valuemax="100" aria-valuenow="20"><div class="BootLoading-progress-value"></div></div><div class="BootLoading-text"></div></div></div></div></div><script>(() => {
        const messages = {"ar-SA":{"message":"جارٍ تحميل المشهد…"},"az-AZ":{"message":"Səhnə yüklənir..."},"bg-BG":{"message":"Зареждане на сцена…"},"bn-BD":{"message":"দৃশ্য তৈরি হচ্ছে"},"bn-IN":{"message":"দৃশ্য তৈরি হচ্ছে"},"ca-ES":{"message":"S'està carregant l'escena…"},"cs-CZ":{"message":"Načítání scény…"},"da-DK":{"message":"Indlæser scene…"},"de-CH":{"message":"Lade Zeichnung…"},"de-DE":{"message":"Lade Zeichnung…"},"el-GR":{"message":"Φόρτωση σκηνής…"},"en":{"message":"Loading scene…","slow":"Slow network — still downloading…","first":"First visit needs to download the editor. Hang tight…"},"es-ES":{"message":"Cargando escena…"},"eu-ES":{"message":"Eszena kargatzen…"},"fa-IR":{"message":"باگذاری صحنه…"},"fi-FI":{"message":"Ladataan työtä…"},"fr-FR":{"message":"Chargement de la scène…"},"gl-ES":{"message":"Cargando escena…"},"he-IL":{"message":"הסצנה נטענת…"},"hi-IN":{"message":"दृश्य खुल रहा है"},"hu-HU":{"message":"Jelenet betöltése…"},"id-ID":{"message":"Memuat pemandangan…"},"it-IT":{"message":"Caricamento della scena…"},"ja-JP":{"message":"シーンを読み込み中…","slow":"ネットワークが低速です。ダウンロードを続けています…","first":"初回はエディターのダウンロードが必要です。しばらくお待ちください…"},"kaa":{"message":"Saxna júklenbekte…"},"kab-KAB":{"message":"Asali n usayes…"},"kk-KZ":{"message":"Сахна жүктелуде…"},"km-KH":{"message":"កំពុង​ផ្ទុក​ស៊ីន..."},"ko-KR":{"message":"화면 불러오는 중…"},"ku-TR":{"message":"...بارکردنی دیمەنەکە"},"lt-LT":{"message":"Įkeliama scena…"},"lv-LV":{"message":"Ielādē ainu…"},"mr-IN":{"message":"दृश्य लोड होत आहे…"},"my-MM":{"message":"မြင်ကွင်းဖော်နေသည်…"},"nb-NO":{"message":"Laster inn scene…"},"nl-NL":{"message":"Scène laden…"},"nn-NO":{"message":"Laster scene…"},"oc-FR":{"message":"Cargament de la scèna…"},"pa-IN":{"message":"ਦ੍ਰਿਸ਼ ਲੋਡ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ…"},"pl-PL":{"message":"Wczytywanie sceny…"},"pt-BR":{"message":"Carregando cena…"},"pt-PT":{"message":"A carregar a cena…"},"ro-RO":{"message":"Se încarcă scena…"},"ru-RU":{"message":"Загрузка сцены…"},"si-LK":{"message":"දර්ශනය පූරණය වෙමින්"},"sk-SK":{"message":"Načítavanie scény…"},"sl-SI":{"message":"Nalaganje scene..."},"sv-SE":{"message":"Laddar skiss…"},"ta-IN":{"message":"காட்சியை ஏற்றுகிறது…"},"th-TH":{"message":"กำลังโหลดฉาก"},"tr-TR":{"message":"Sahne yükleniyor…"},"uk-UA":{"message":"Завантаження сцени…"},"uz-UZ":{"message":"Sahna yuklanmoqda…"},"vi-VN":{"message":"Đang tải về…"},"zh-CN":{"message":"正在加载绘图…","slow":"网络较慢，仍在下载…","first":"首次打开需要下载编辑器，请稍候…"},"zh-HK":{"message":"載入畫布中…","slow":"網絡較慢，仍在下載…","first":"首次開啟需要下載編輯器，請稍候…"},"zh-TW":{"message":"場景讀取中…","slow":"網路較慢，仍在下載…","first":"首次開啟需要下載編輯器，請稍候…"}};
        const resolveLocale = (language) => {
          const normalized = language
            ?.trim()
            .toLowerCase()
            .replace(/^zh-hant-hk$/, "zh-hk");
          return (
            Object.keys(messages).find(
              (locale) => locale.toLowerCase() === normalized,
            ) ||
            Object.keys(messages).find((locale) => {
              const code = locale.toLowerCase();
              return (
                code.startsWith(`${normalized}-`) ||
                normalized?.startsWith(`${code}-`)
              );
            })
          );
        };
        let locale;
        try {
          locale = resolveLocale(localStorage.getItem("i18nextLng"));
        } catch {}
        locale ||=
          "en" === "zh-CN"
            ? "zh-CN"
            : resolveLocale(navigator.languages?.[0] || navigator.language) ||
              "en";
        const entry = messages[locale] || messages.en;
        const fallback = messages.en || {};
        const message = entry.message;
        const slowMessage = entry.slow || fallback.slow;
        const firstVisitMessage = entry.first || fallback.first;
        document.documentElement.lang = locale;
        const dataset = document.documentElement.dataset;
        dataset.loadingMessage = message;
        if (slowMessage) {
          dataset.loadingMessageSlow = slowMessage;
        }
        if (firstVisitMessage) {
          dataset.loadingMessageFirstVisit = firstVisitMessage;
        }
        document.querySelector(".BootLoading-text").textContent = message;
        document
          .querySelector(".BootLoading-progress")
          .setAttribute("aria-label", message);
        // 长等待分级：8s 提示网络较慢、25s 解释首次访问要下载编辑器。
        // 阈值与 LoadingMessage 侧保持一致；挂载后 BootLoading 已被替换，
        // 查询不到元素即自然停止。
        const escalate = (text) => {
          const element = document.querySelector(".BootLoading-text");
          if (element && text) {
            element.textContent = text;
          }
        };
        window.setTimeout(() => escalate(slowMessage), 8000);
        window.setTimeout(() => escalate(firstVisitMessage), 25000);
      })();</script></body></html>