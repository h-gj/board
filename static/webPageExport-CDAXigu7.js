import{s as $}from"./presentationSlideHtml-COkXap2n.js";import{cn as M,aq as k,cv as N,gL as A,k4 as z,ao as q}from"./index-iyxIYZmR.js";import{optimizePngBlob as j}from"./optimizePng-DZANkYcR.js";import{p as F,g as R,c as B,W as Y}from"./buildWebPageElement-CSTa4tWl.js";import{p as H,c as X}from"./projectPageScope-DabzJm3P.js";import{_ as K}from"./index-DLsZT56_.js";import{w as U}from"./webPageViewports-Ch4JFFRR.js";import"./presentationSlideLayout-sigZRS8x.js";import"./projectProtocol-CUlpZyWX.js";const O=15e3,S="ai-page-snapshot",G=5e3,V=4e7,D=32767,P=2,I="data-1nx-snapshot-freeze",J="*,*::before,*::after{animation:none!important;transition:none!important}",C=e=>{if(e.querySelector(`[${I}]`))return;const t=e.createElement("style");t.setAttribute(I,"true"),t.textContent=J,e.head.prepend(t)},Z=e=>{const t=new DOMParser().parseFromString(e,"text/html");return C(t),`<!DOCTYPE html>${t.documentElement.outerHTML}`},_=(e,t,a)=>{Object.assign(e.style,{position:"fixed",inset:"0 auto auto -10000px",width:`${t}px`,height:`${a}px`,border:"0",opacity:"0",pointerEvents:"none",zIndex:"-1"})},Q=e=>/<script(?:\s|>)/i.test(e)||/\son[a-z]+\s*=/i.test(e),ee=(e,t,a)=>Q(e)?new Promise((n,s)=>{const r=`${Date.now()}-${Math.random().toString(36).slice(2)}`,c=new DOMParser().parseFromString(e,"text/html"),l=c.createElement("script");l.setAttribute("data-ai-page-snapshot-bridge","true"),l.textContent=`
(() => {
  const token = ${JSON.stringify(r)};
  const bridge = document.currentScript;
  const capture = () => {
    try {
      document.querySelectorAll("input, textarea, select").forEach((control) => {
        if (control instanceof HTMLInputElement) {
          if (control.type === "checkbox" || control.type === "radio") {
            control.toggleAttribute("checked", control.checked);
          } else {
            control.setAttribute("value", control.value);
          }
        } else if (control instanceof HTMLTextAreaElement) {
          control.textContent = control.value;
        } else if (control instanceof HTMLSelectElement) {
          Array.from(control.options).forEach((option) =>
            option.toggleAttribute("selected", option.selected),
          );
        }
      });
      document.querySelectorAll("canvas").forEach((canvas) => {
        try {
          const image = document.createElement("img");
          image.src = canvas.toDataURL("image/png");
          image.width = canvas.width;
          image.height = canvas.height;
          image.setAttribute("style", canvas.getAttribute("style") || "");
          canvas.replaceWith(image);
        } catch {}
      });
      bridge?.remove();
      parent.postMessage({
        type: ${JSON.stringify(S)},
        token,
        html: "<!DOCTYPE html>" + document.documentElement.outerHTML,
      }, "*");
    } catch (error) {
      parent.postMessage({
        type: ${JSON.stringify(S)},
        token,
        error: error instanceof Error ? error.message : String(error),
      }, "*");
    }
  };
  // 不用 setTimeout(0)：后台标签页会被钳到 1 秒，整张快照白等
  var channel = new MessageChannel();
  channel.port1.onmessage = function () { channel.port1.close(); capture(); };
  channel.port2.postMessage(0);
})();
`,c.head.prepend(l);const i=document.createElement("iframe"),m=()=>{window.clearTimeout(f),window.removeEventListener("message",p),i.remove()},p=d=>{var u,o;d.source!==i.contentWindow||((u=d.data)==null?void 0:u.type)!==S||((o=d.data)==null?void 0:o.token)!==r||(m(),typeof d.data.error=="string"?s(new Error(d.data.error)):typeof d.data.html=="string"?n(d.data.html):s(new Error("网页快照返回了无效内容")))},f=window.setTimeout(()=>{m(),s(new Error("网页动态内容加载超时"))},O);i.dataset.webPageRuntime="true",i.dataset.snapshotToken=r,i.setAttribute("sandbox","allow-scripts"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1,_(i,t,a),window.addEventListener("message",p),i.srcdoc=`<!DOCTYPE html>${c.documentElement.outerHTML}`,document.body.append(i)}):e,te=({html:e,width:t,height:a})=>new Promise((n,s)=>{const r=document.createElement("iframe"),c=window.setTimeout(()=>{r.remove(),s(new Error("网页快照加载超时"))},O);r.dataset.webPageSnapshot="true",r.setAttribute("sandbox","allow-same-origin"),r.setAttribute("aria-hidden","true"),r.tabIndex=-1,_(r,t,a),r.onload=()=>{window.clearTimeout(c),n(r)},r.onerror=()=>{window.clearTimeout(c),r.remove(),s(new Error("网页快照加载失败"))},r.srcdoc=e,document.body.append(r)}),ae=e=>new Promise((t,a)=>{e.toBlob(n=>{n?t(n):a(new Error("PNG 编码失败"))},"image/png")}),ne=async e=>{var p,f,d,u;const t=(p=e.customData)==null?void 0:p.webPage;if(!t)throw new Error("元素不是可导出的网页");const{width:a,height:n}=M(e),s=K(()=>import("./html2canvas-pro.esm-BSBdhORn.js"),__vite__mapDeps([])),r=ee(k(e),a,n),c=typeof r=="string"?r:await r,l=Z(F(c,U(t.kind),{width:a,height:n})),i=await N({html:l,width:a,height:n,scale:P});if(i)return i;const m=await te({html:l,width:a,height:n});try{const o=m.contentDocument;if(!(o!=null&&o.documentElement))throw new Error("无法读取网页快照");let g;try{await Promise.race([Promise.resolve((f=o.fonts)==null?void 0:f.ready).catch(()=>{}),new Promise(w=>{g=window.setTimeout(w,G)})])}finally{window.clearTimeout(g)}const h=Math.max(a,o.documentElement.scrollWidth,((d=o.body)==null?void 0:d.scrollWidth)??0),x=Math.max(n,o.documentElement.scrollHeight,((u=o.body)==null?void 0:u.scrollHeight)??0),b=Math.ceil(h*P),v=Math.ceil(x*P);if(b>D||v>D||b*v>V)throw new Error(`2× PNG 尺寸为 ${b}×${v}px，超出浏览器安全上限；请改用 HTML 导出保留完整页面`);const{default:y}=await s,E=await y(o.documentElement,{width:h,height:x,windowWidth:a,windowHeight:n,scale:P,backgroundColor:"#ffffff",allowTaint:!1,useCORS:!1,foreignObjectRendering:!1,logging:!1,removeContainer:!0,onclone:w=>{C(w)}});return ae(E)}finally{m.remove()}},ve=e=>{var t,a,n,s;return z((a=(t=e.customData)==null?void 0:t.webPage)==null?void 0:a.pageTitle,(s=(n=e.customData)==null?void 0:n.webPage)==null?void 0:s.projectTitle)},we=async(e,t)=>{const a=await j(await ne(e));return A(a,{name:t,extension:"png"})},be=async(e,t)=>A(new Blob([k(e)],{type:"text/html;charset=utf-8"}),{name:t,extension:"html"}),oe=(e,t)=>{var c,l;const a=(l=(c=e.customData)==null?void 0:c.webPage)==null?void 0:l.projectId;if(!a)throw new Error("当前页面不属于可导出的页面项目");const n=X(e,t,q);if(!n.length)throw new Error("页面项目没有可导出的页面");const s=n.find(i=>{var m,p;return((p=(m=i.customData)==null?void 0:m.webPage)==null?void 0:p.route)==="/"})??n[0],r=n.map(i=>({element:i,pageId:H(i)}));return{projectId:a,pages:n,entry:s,exported:r}},re=(e,t)=>{const a=t==="presentation-slide"?$(e):e,n=new DOMParser().parseFromString(R(a),"text/html");B(n);const s=n.createElement("meta");return s.setAttribute("http-equiv","Content-Security-Policy"),s.setAttribute("content",Y),n.head.prepend(s),`<!DOCTYPE html>${n.documentElement.outerHTML}`},se=e=>e.replace(/&/g,"&amp;").replace(/"/g,"&quot;"),T=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ie=(e,t)=>{const a=new DOMParser().parseFromString(e,"text/html");a.documentElement.setAttribute("data-1nx-page-id",t);const n=a.createElement("script");return n.setAttribute("data-1nx-deck-bridge","true"),n.textContent=`
document.addEventListener("click", (event) => {
  const target = event.target instanceof Element
    ? event.target.closest("[data-navigate]")
    : null;
  const pageId = target && target.getAttribute("data-navigate");
  if (!target || !pageId || !window.parent || window.parent === window) return;
  event.preventDefault();
  window.parent.postMessage({ type: "1nx-deck-navigate", pageId: pageId }, "*");
});
`,a.body.append(n),`<!DOCTYPE html>${a.documentElement.outerHTML}`},W=(e,t)=>{var f,d,u;const{projectId:a,entry:n,exported:s}=oe(e,t),r=((u=(d=(f=e.customData)==null?void 0:f.webPage)==null?void 0:d.projectTitle)==null?void 0:u.trim())||a,c=s.map((o,g)=>{var v,y,E,w,L;const h=M(o.element),x=ie(re(k(o.element),(y=(v=o.element.customData)==null?void 0:v.webPage)==null?void 0:y.kind),o.pageId),b=((L=(w=(E=o.element.customData)==null?void 0:E.webPage)==null?void 0:w.pageTitle)==null?void 0:L.trim())||o.pageId||`第 ${g+1} 页`;return{pageId:o.pageId,title:b,width:h.width,height:h.height,source:x}}),l=H(n),i=Math.max(0,c.findIndex(o=>o.pageId===l)),m=s.every(o=>{var g,h;return((h=(g=o.element.customData)==null?void 0:g.webPage)==null?void 0:h.kind)==="presentation-slide"}),p=c.map((o,g)=>`<iframe title="${T(o.title)}" data-page-id="${T(o.pageId)}" data-1nx-page-id="${T(o.pageId)}" data-slide-width="${o.width}" data-slide-height="${o.height}"${g===i?' class="is-active"':""} srcdoc="${se(o.source)}"></iframe>`).join("");return`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${T(r)}</title>
<style>
html,body{margin:0;width:100%;min-height:100vh;background:#000;color:#fff;font:13px/1.3 system-ui,sans-serif}
body{display:flex;flex-direction:column}
.deck{position:relative;width:100%;margin-block:auto}
.viewport{position:relative;width:100%;overflow:hidden}
.stage{position:absolute;top:0;left:0;overflow:hidden;transform-origin:0 0}
.stage iframe{position:absolute;inset:0;width:100%;height:100%;border:0;background:transparent;opacity:0;pointer-events:none;transform:translateX(2.5%);transition:opacity 240ms cubic-bezier(0.77, 0, 0.175, 1),transform 240ms cubic-bezier(0.77, 0, 0.175, 1)}
.deck[data-dir="prev"] .stage iframe{transform:translateX(-2.5%)}
.stage iframe.is-active{opacity:1;pointer-events:auto;transform:translateX(0);z-index:1}
.stage iframe.is-leave-next{opacity:0;transform:translateX(-2.5%);z-index:0}
.stage iframe.is-leave-prev{opacity:0;transform:translateX(2.5%);z-index:0}
.chrome{position:absolute;left:0;right:0;bottom:20px;z-index:2;display:flex;align-items:center;justify-content:center;gap:10px;pointer-events:none;opacity:1;transition:opacity 200ms cubic-bezier(0.23, 1, 0.32, 1)}
.chrome.is-idle{opacity:0}
.chrome.is-idle button{pointer-events:none}
.chrome button,.chrome [data-deck="status"]{pointer-events:auto;appearance:none;border:0;background:rgba(16,16,16,.42);color:#fff;backdrop-filter:blur(10px);font:inherit;border-radius:999px}
.chrome button{padding:10px 14px;cursor:pointer}
.chrome button:disabled{opacity:.28;cursor:default;pointer-events:none}
.chrome [data-deck="status"]{padding:6px 10px;font-variant-numeric:tabular-nums;pointer-events:none;color:rgba(255,255,255,.86)}
@media (hover:hover) and (pointer:fine){
  .chrome button:hover:not(:disabled){background:rgba(16,16,16,.7)}
}
@media (prefers-reduced-motion:reduce){
  .stage iframe{transition:opacity 160ms ease;transform:none}
  .deck[data-dir="prev"] .stage iframe,.stage iframe.is-leave-next,.stage iframe.is-leave-prev{transform:none}
  .chrome{transition:opacity 160ms ease}
}
</style>
</head>
<body>
<div class="deck" data-1nx-deck data-1nx-project-navigation="true">
  <div class="viewport" data-deck="viewport">
    <div class="stage" data-deck="stage">${p}</div>
  </div>
  <nav class="chrome" aria-label="翻页">
    <button type="button" data-deck="prev">上一页</button>
    <span data-deck="status"></span>
    <button type="button" data-deck="next">下一页</button>
  </nav>
</div>
<script>
(() => {
  const deck = document.querySelector("[data-1nx-deck]");
  const frames = Array.from(document.querySelectorAll(".stage iframe"));
  const viewport = document.querySelector("[data-deck=viewport]");
  const stage = document.querySelector("[data-deck=stage]");
  const chrome = document.querySelector(".chrome");
  const status = document.querySelector("[data-deck=status]");
  const prev = document.querySelector("[data-deck=prev]");
  const next = document.querySelector("[data-deck=next]");
  const ids = frames.map((frame) => frame.getAttribute("data-page-id") || "");
  const allowKeys = ${m?"true":"false"};
  const boundDocs = new WeakSet();
  let hideTimer = 0;
  let index = Math.max(0, frames.findIndex((frame) => frame.classList.contains("is-active")));
  let ready = false;
  const fit = () => {
    const frame = frames[index] || frames[0];
    const width = Number(frame.getAttribute("data-slide-width")) || 1280;
    const height = Number(frame.getAttribute("data-slide-height")) || 720;
    const scale = document.documentElement.clientWidth / width;
    viewport.style.width = "100%";
    viewport.style.height = height * scale + "px";
    stage.style.width = width + "px";
    stage.style.height = height + "px";
    stage.style.transform = "scale(" + scale + ")";
  };
  const clearLeave = (frame) => {
    frame.classList.remove("is-leave-next", "is-leave-prev");
  };
  const paintChrome = () => {
    status.textContent = index + 1 + " / " + frames.length;
    prev.disabled = index <= 0;
    next.disabled = index >= frames.length - 1;
    const pageId = ids[index];
    if (pageId && location.hash !== "#" + pageId) {
      history.replaceState(null, "", "#" + pageId);
    }
    fit();
  };
  const show = (nextIndex) => {
    const target = Math.max(0, Math.min(frames.length - 1, nextIndex));
    if (!ready) {
      frames.forEach((frame, frameIndex) => {
        frame.classList.toggle("is-active", frameIndex === target);
        clearLeave(frame);
      });
      index = target;
      ready = true;
      paintChrome();
      return;
    }
    if (target === index) return;
    const dir = target > index ? "next" : "prev";
    const leaving = frames[index];
    deck.setAttribute("data-dir", dir);
    frames.forEach((frame) => {
      frame.classList.remove("is-active");
      if (frame !== leaving) clearLeave(frame);
    });
    leaving.classList.add(dir === "next" ? "is-leave-next" : "is-leave-prev");
    leaving.addEventListener("transitionend", () => clearLeave(leaving), { once: true });
    void frames[target].offsetWidth;
    frames[target].classList.add("is-active");
    index = target;
    paintChrome();
  };
  const resolve = (value) => {
    const raw = String(value || "");
    const normalized = raw.split(/[?#]/, 1)[0]
      .replace(/^\\.?\\//, "")
      .replace(/\\.html?$/i, "");
    const hit = ids.indexOf(raw);
    if (hit >= 0) return hit;
    return ids.indexOf(normalized);
  };
  const editing = (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return false;
    return Boolean(target.closest("input, textarea, select, [contenteditable=true]"));
  };
  const revealChrome = () => {
    chrome.classList.remove("is-idle");
    window.clearTimeout(hideTimer);
    hideTimer = window.setTimeout(() => chrome.classList.add("is-idle"), 2000);
  };
  const onKey = (event) => {
    if (editing(event)) return;
    const nextPage =
      event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === "PageDown" ||
      (allowKeys && event.key === " " && !(event.target instanceof Element && event.target.closest("button, a, [role=button]")));
    const prevPage =
      event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "PageUp";
    if (!nextPage && !prevPage) return;
    event.preventDefault();
    revealChrome();
    show(index + (nextPage ? 1 : -1));
  };
  const bindDoc = (doc) => {
    if (!doc || boundDocs.has(doc)) return;
    boundDocs.add(doc);
    doc.addEventListener("keydown", onKey);
    doc.addEventListener("mousemove", revealChrome);
  };
  const bindFrame = (frame) => {
    const attach = () => bindDoc(frame.contentDocument);
    frame.addEventListener("load", attach);
    attach();
  };
  prev.addEventListener("click", () => show(index - 1));
  next.addEventListener("click", () => show(index + 1));
  [prev, next].forEach((button) => {
    button.addEventListener("mouseenter", () => window.clearTimeout(hideTimer));
    button.addEventListener("mouseleave", revealChrome);
  });
  bindDoc(document);
  frames.forEach(bindFrame);
  window.addEventListener("message", (event) => {
    if (!event.data || event.data.type !== "1nx-deck-navigate") return;
    const hit = resolve(event.data.pageId);
    if (hit >= 0) show(hit);
  });
  window.addEventListener("resize", fit);
  const fromHash = resolve(location.hash.replace(/^#/, ""));
  show(fromHash >= 0 ? fromHash : index);
  revealChrome();
})();
<\/script>
</body>
</html>`},xe=(e,t)=>W(e,t),ye=async(e,t,a)=>A(new Blob([W(e,t)],{type:"text/html;charset=utf-8"}),{name:a,extension:"html"});export{xe as buildWebPageProjectArchive,W as buildWebPageProjectHtml,be as downloadWebPageAsHtml,we as downloadWebPageAsPng,ye as downloadWebPageProject,ne as exportWebPageToPngBlob,ve as getWebPageExportName,k as getWebPageHTML,M as getWebPageViewport,q as isWebPageElement};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
