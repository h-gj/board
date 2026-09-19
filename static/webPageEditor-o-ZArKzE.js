import{cl as L,cm as k,aq as C,cn as M}from"./index-iyxIYZmR.js";import{co as ue,cp as pe,cq as me}from"./index-iyxIYZmR.js";import{W as c}from"./webPageViewports-Ch4JFFRR.js";import{p as fe}from"./placeInlineEditor-CHmuVYn9.js";import"./index-DLsZT56_.js";const Q=(e,t,r)=>{var a;return((a=Array.from(e.matchAll(new RegExp(`<${t}(?=[\\s/>])`,"gi")))[r])==null?void 0:a.index)??null},P=(e,t,r)=>r<e+t/2?"before":"after",H=(e,t)=>{var o,i,n,d;if((o=t==null?void 0:t.display)!=null&&o.includes("flex"))return(i=t.flexDirection)!=null&&i.startsWith("row")?"horizontal":"vertical";if((n=t==null?void 0:t.display)!=null&&n.includes("grid")){if(e.length>1){const s=Math.abs(e[1].left-e[0].left),l=Math.abs(e[1].top-e[0].top);return s>l?"horizontal":"vertical"}return(d=t.gridAutoFlow)!=null&&d.startsWith("column")?"vertical":"horizontal"}if(e.length<2)return"vertical";const r=Math.max(...e.map(({left:s})=>s))-Math.min(...e.map(({left:s})=>s)),a=Math.max(...e.map(({top:s})=>s))-Math.min(...e.map(({top:s})=>s));return r>a?"horizontal":"vertical"},D=(e,t)=>{const r=t==="horizontal"?"left":"top";for(let a=1;a<e.length;a++){const o=e[a][r]-e[a-1][r];if(o)return o<0}return!1},N=(e,t,r,a="vertical",o=!1)=>{const i=t+(r==="after"?1:0),n=i-(e<i?1:0);return n<e?{direction:a==="horizontal"?o?"left":"right":o?"up":"down",from:n,to:e-1}:n>e?{direction:a==="horizontal"?o?"right":"left":o?"down":"up",from:e+1,to:n}:null},B=e=>Math.min(200,Math.max(8,Math.round(e))),R=e=>{const t=e.tagName;return t==="TEXTAREA"?!0:t!=="INPUT"?!1:/^(?:text|search|tel|url|email|password|number|date|datetime-local|month|week|time|button|submit|reset)$/.test((e.getAttribute("type")||"text").toLowerCase())},$=e=>!e.matches("input, textarea, select, option, img, video, audio, canvas, iframe, object, embed, br, hr, svg, [data-icon]")&&!e.querySelector("input, textarea, select")&&(e.childElementCount===0||Array.from(e.childNodes).some(t=>{var r;return t.nodeType===3&&!!((r=t.textContent)!=null&&r.trim())})),z=e=>e instanceof HTMLElement?e:e instanceof Node?e.parentElement:null,E=(e,t)=>{if(!(e instanceof HTMLElement))return null;if(t(e))return e;const r=Array.from(e.querySelectorAll("*")).filter(a=>a instanceof HTMLElement&&t(a));return r.length===1?r[0]:null},O=e=>{const t=e.closest("button, a, input, textarea");if(!(t instanceof HTMLElement)||t.hasAttribute("data-1nx-editor-control-host")||t.hasAttribute("data-1nx-editor-control-tag"))return e;const r=t.tagName,a=r==="TEXTAREA"||r==="INPUT"&&/^(?:text|search|tel|url|email|password|number|date|datetime-local|month|week|time|button|submit|reset)$/.test((t.getAttribute("type")||"text").toLowerCase());if((r==="INPUT"||r==="TEXTAREA")&&!a)return e;const o=t.getBoundingClientRect(),i=r==="TEXTAREA",n=t.ownerDocument.createElement(i?"textarea":"input");i||n.setAttribute("type","text"),n.setAttribute("data-1nx-editor-control-tag",r.toLowerCase()),n.setAttribute("spellcheck","false");const d=(t.ownerDocument.defaultView||window).getComputedStyle(t);if("padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style border-top-color border-right-color border-bottom-color border-left-color border-top-left-radius border-top-right-radius border-bottom-right-radius border-bottom-left-radius background-color color font-family font-size font-weight font-style line-height letter-spacing text-align box-shadow".split(" ").forEach(l=>{n.style.setProperty(l,d.getPropertyValue(l))}),n.style.position="fixed",n.style.left=`${o.left}px`,n.style.top=`${o.top}px`,n.style.width=`${Math.max(o.width,1)}px`,n.style.height=`${Math.max(o.height,1)}px`,n.style.margin="0",n.style.boxSizing="border-box",n.style.display="block",n.style.appearance="none",n.style.resize="none",n.style.overflow="hidden",n.style.whiteSpace=i?"pre-wrap":"nowrap",n.style.zIndex="2147483645",a){const l=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.value:"",p=t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement?t.placeholder:"";n.value=l||p,!l&&p&&n.setAttribute("data-1nx-editor-control-empty-value","placeholder")}else n.value=t.textContent??"";return t.setAttribute("data-1nx-editor-control-host",r.toLowerCase()),t.style.visibility="hidden",t.ownerDocument.body.append(n),n},F=e=>{const t=e.getAttribute("data-1nx-editor-control-tag");if(!t)return e;const r=e.getRootNode(),o=(r instanceof Element?r:e.ownerDocument).querySelector("[data-1nx-editor-control-host]"),i=e.getAttribute("data-1nx-editor-control-empty-value")==="placeholder",n=e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:e.textContent??"";if(o instanceof HTMLElement){if(t==="textarea")i?(o.setAttribute("placeholder",n),o.textContent="",o instanceof HTMLTextAreaElement&&(o.value="")):(o.textContent=n,o instanceof HTMLTextAreaElement&&(o.value=n));else if(t==="input")i?(o.setAttribute("placeholder",n),o.removeAttribute("value"),o instanceof HTMLInputElement&&(o.value="")):(o.setAttribute("value",n),o instanceof HTMLInputElement&&(o.value=n));else if(o.childElementCount===0)o.textContent=n;else{const d=Array.from(o.childNodes).find(s=>{var l;return s.nodeType===3&&!!((l=s.textContent)!=null&&l.trim())});d?d.textContent=n:o.textContent=n}return o.style.removeProperty("visibility"),o.getAttribute("style")||o.removeAttribute("style"),o.removeAttribute("data-1nx-editor-control-host"),e.remove(),o}return e.remove(),e},ee=e=>e.hasAttribute("data-section")||e.hasAttribute("data-section-id")||e.hasAttribute("data-page-artifact"),I=e=>e.hasAttribute("data-section")||e.hasAttribute("data-section-id")||e.hasAttribute("data-page-artifact")||e.hasAttribute("data-component")||e.matches("section, article, header, footer, nav, main, aside"),w=(e,t)=>{let r=e instanceof HTMLElement?e:null;for(;r&&r.tagName!=="BODY"&&r.tagName!=="HTML";){if(t(r))return r;r=r.parentElement}return null},te=(e,t,r,a={has:o=>["HTML","HEAD","BODY","SCRIPT","STYLE","META","LINK"].includes(o)})=>{if(!(e instanceof HTMLElement)||a.has(e.tagName))return null;if(t(e))return e;const o=e.closest("button, a, [role='button'], input, textarea");if(o instanceof HTMLElement)return o;const i=E(e,t);return i||w(e,r)||e},W=(e,t,r)=>{const a=[];let o=e instanceof Element?e:null;for(;o&&o.tagName!=="BODY"&&o.tagName!=="HTML";){if(o===e||r(o)){const i=(o.getAttribute("data-section-id")||o.getAttribute("data-section")||o.getAttribute("data-component")||o.getAttribute("aria-label")||"").replace(/\s+/g," ").trim();let n="";o.childNodes.forEach(l=>{l.nodeType===3&&(n+=l.textContent||"")}),n=n.replace(/\s+/g," ").trim();const d=o.tagName.toLowerCase(),s=i?i.slice(0,12):n?n.slice(0,12):/^h[1-6]$/.test(d)||d==="b"||d==="strong"?"标题":d==="button"?"按钮":d==="a"?"链接":d==="nav"?"导航":d==="section"||d==="article"||d==="main"||d==="aside"?"区块":d==="div"?"卡片":d;(!a.length||a[a.length-1].label!==s)&&a.push({path:t(o),label:s,tagName:d})}o=o.parentElement}return a.reverse()},re=(e,t=3)=>e.length<=t?e:[e[0],{path:"",label:"…",tagName:""},e[e.length-1]],Y=e=>{const t=e.parentElement,r=(o,i)=>{let n=o;for(;n;){if(n instanceof HTMLElement&&!n.hidden)return n;n=i==="next"?n.nextElementSibling:n.previousElementSibling}return null},a=r(e.nextElementSibling,"next")||r(e.previousElementSibling,"prev")||t;return e.hasAttribute("data-section")||e.hasAttribute("data-section-id")||e.hasAttribute("data-page-artifact")?(e.hidden=!0,e.setAttribute("data-1nx-editor-hidden","true")):e.remove(),a instanceof HTMLElement?a:null},q=e=>{const t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return null;const r=`copy-${Date.now().toString(36)}`,a=o=>{o.id&&(o.id=`${o.id}-${r}`);const i=o.getAttribute("data-section-id");i&&o.setAttribute("data-section-id",`${i}-${r}`)};return a(t),t.querySelectorAll("[id], [data-section-id]").forEach(a),e.after(t),t},A=e=>e==="transparent"||e.startsWith("rgba")&&/,\s*0(?:\.0+)?\s*\)$/.test(e)||/\/\s*0(?:%|(?:\.0+)?)?\s*\)$/.test(e),X=(e,t=getComputedStyle(e))=>{const r=!A(t.backgroundColor);return e.matches('button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]')||r||e.childElementCount>0&&(parseFloat(t.borderWidth)>0||parseFloat(t.borderRadius)>0||t.boxShadow!=="none")},oe=(e,t=getComputedStyle(e))=>X(e,t),ne=e=>{try{return{left:(e==null?void 0:e.scrollX)??0,top:(e==null?void 0:e.scrollY)??0}}catch{return{left:0,top:0}}},U=e=>{const t=e.split(".").map(Number);if(t.length!==4||t.some(o=>!Number.isInteger(o)||o<0||o>255))return!1;const[r,a]=t;return r===0||r===10||r===127||r===100&&a>=64&&a<=127||r===169&&a===254||r===172&&a>=16&&a<=31||r===192&&a===168},V=e=>{const t=e.replace(/^\[|\]$/g,"").toLowerCase(),r=Number.parseInt(t.split(":",1)[0]||"0",16);return t==="::"||t==="::1"||t.startsWith("::ffff:")||(r&65024)===64512||(r&65472)===65152},K=e=>{const t=e.toLowerCase().replace(/^\[|\]$/g,"");return t==="localhost"||t.endsWith(".localhost")||t==="127.0.0.1"||t==="::1"},ae=(e,t=(r=>(r=globalThis.location)==null?void 0:r.hostname)()??"")=>{let a;try{a=new URL(e)}catch{return!1}if(a.protocol!=="http:"&&a.protocol!=="https:")return!1;const o=a.hostname.toLowerCase().replace(/^\[|\]$/g,"");if(K(o))return!0;const i=t.toLowerCase();return!(U(o)||o.includes(":")&&V(o)||i&&(o===i||o.endsWith(`.${i}`)))},_=(e,t)=>{const r=e.trim();if(!r||/^(?:#|\/(?!\/)|\.{1,2}\/)/.test(r))return r;try{const a=new URL(r);if(a.protocol==="http:"||a.protocol==="https:"||t==="link"&&["mailto:","tel:"].includes(a.protocol)||t==="image"&&/^data:image\//i.test(r))return r}catch{}return null},ie=()=>{const e=document.implementation.createHTMLDocument("");e.head.replaceChildren();const t=e.createElement("style");t.setAttribute("data-1nx-page-editor","true"),t.textContent=`
[data-1nx-editor-selected] { outline: 2px solid #6965db !important; outline-offset: 2px !important; cursor: move !important; touch-action: auto !important; }
[data-1nx-editor-hover-box] { position: fixed; pointer-events: none; z-index: 2147483644; display: none; box-sizing: border-box; outline: 1px solid #6965db; outline-offset: 2px; }
[data-1nx-editor-drag-container] > * { transition: translate 180ms cubic-bezier(.16, 1, .3, 1) !important; }
[data-1nx-editor-dragging] { cursor: move !important; opacity: .68 !important; pointer-events: none !important; translate: var(--1nx-editor-drag-x, 0px) var(--1nx-editor-drag-y, 0px) !important; z-index: 1 !important; }
[data-1nx-editor-avoid-up] { translate: 0 calc(-1 * var(--1nx-editor-drag-slot)) !important; will-change: translate; }
[data-1nx-editor-avoid-down] { translate: 0 var(--1nx-editor-drag-slot) !important; will-change: translate; }
[data-1nx-editor-avoid-left] { translate: calc(-1 * var(--1nx-editor-drag-slot)) 0 !important; will-change: translate; }
[data-1nx-editor-avoid-right] { translate: var(--1nx-editor-drag-slot) 0 !important; will-change: translate; }
[data-1nx-editor-drop-before], [data-1nx-editor-drop-after] { outline: 2px dashed #6965db !important; outline-offset: 3px !important; }
[data-1nx-editor-text] { outline: 2px solid #6965db !important; outline-offset: 2px !important; caret-color: #6965db !important; cursor: text !important; user-select: text !important; }
[data-1nx-editor-control-tag] { appearance: none !important; -webkit-appearance: none !important; }
[data-1nx-editor-status] { position: fixed; z-index: 2147483647; left: 50%; bottom: 16px; translate: -50% 0; padding: 7px 12px; border-radius: 999px; background: rgb(27 27 31 / .92); box-shadow: 0 4px 16px rgb(0 0 0 / .2); color: #fff; font: 600 12px/1.2 system-ui, sans-serif; pointer-events: none; }
@media (prefers-reduced-motion: reduce) { [data-1nx-editor-selected] { scroll-behavior: auto !important; } [data-1nx-editor-drag-container] > * { transition: none !important; } }
`;const r=e.createElement("script");return r.setAttribute("data-1nx-page-editor","true"),r.textContent=`
(() => {
  const MESSAGE = ${JSON.stringify(L)};
  const COMMAND = ${JSON.stringify(k)};
  const blocked = new Set(["HTML", "HEAD", "BODY", "SCRIPT", "STYLE", "META", "LINK"]);
  const insertionSide = ${P.toString()};
  const reorderAxis = ${H.toString()};
  const reorderReversed = ${D.toString()};
  const reorderPreview = ${N.toString()};
  const canEditText = ${$.toString()};
  const isValueControl = ${R.toString()};
  const canEditOrValue = (element) => canEditText(element) || isValueControl(element);
  const eventElement = ${z.toString()};
  const resolveTextEditTarget = ${E.toString()};
  const resolveBlockTarget = ${w.toString()};
  const isStructuralBlock = ${I.toString()};
  const buildBreadcrumb = ${W.toString()};
  const hideOrRemove = ${Y.toString()};
  const duplicateNode = ${q.toString()};
  const softenControl = ${O.toString()};
  const restoreControl = ${F.toString()};
  const normalizeEditableUrl = ${_.toString()};
  const isWebPageTransparentColor = ${A.toString()};
  // Keep this local. toString() of canEditWebPageElementBackground closes over a
  // module binding that production minify renames (eZ / dZ ReferenceError).
  const canEditBackground = (element, computed = getComputedStyle(element)) => {
    const hasBackground = !isWebPageTransparentColor(computed.backgroundColor);
    return (
      element.matches(
        'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]',
      ) ||
      hasBackground ||
      (element.childElementCount > 0 &&
        (parseFloat(computed.borderWidth) > 0 ||
          parseFloat(computed.borderRadius) > 0 ||
          computed.boxShadow !== "none"))
    );
  };
  const canEditBorder = (element, computed) => canEditBackground(element, computed);
  const isBlock = (element) => isStructuralBlock(element) || canEditBackground(element);
  const clickTarget = (element) => {
    if (!element || blocked.has(element.tagName)) return null;
    if (canEditOrValue(element)) return element;
    const control = element.closest("button, a, [role='button'], input, textarea");
    if (control instanceof HTMLElement) return control;
    const text = resolveTextEditTarget(element, canEditOrValue);
    if (text) return text;
    return resolveBlockTarget(element, isBlock) || element;
  };
  const clampFontSize = ${B.toString()};
  let selected = null;
  let hovered = null;
  let drag = null;
  let suppressClick = false;
  let reportFrame = 0;
  let dragFrame = 0;
  let syncFrame = 0;
  let syncTimer = 0;
  let documentDoctype = "<!DOCTYPE html>";
  let sourceHeadNodes = [];
  const isEditingText = () => selected?.hasAttribute("data-1nx-editor-text");
  const ensureHoverBox = () => {
    let box = document.querySelector("[data-1nx-editor-hover-box]");
    if (box instanceof HTMLElement) return box;
    box = document.createElement("div");
    box.setAttribute("data-1nx-page-editor", "true");
    box.setAttribute("data-1nx-editor-hover-box", "true");
    document.documentElement.append(box);
    return box;
  };
  const hideHover = () => {
    hovered = null;
    const box = document.querySelector("[data-1nx-editor-hover-box]");
    if (box instanceof HTMLElement) box.style.display = "none";
  };
  const showHover = (node) => {
    if (isEditingText() || !node || node === selected || selected?.contains(node) || blocked.has(node.tagName) || node.closest("[data-1nx-page-editor]")) {
      hideHover();
      return;
    }
    if (node === hovered) return;
    hovered = node;
    const box = ensureHoverBox();
    const rect = node.getBoundingClientRect();
    box.style.display = "block";
    box.style.left = rect.left + "px";
    box.style.top = rect.top + "px";
    box.style.width = Math.max(rect.width, 1) + "px";
    box.style.height = Math.max(rect.height, 1) + "px";
  };

  const pathOf = (node) => {
    if (node?.getAttribute?.("data-1nx-editor-control-tag")) {
      node = document.querySelector("[data-1nx-editor-control-host]") || node;
    }
    const path = [];
    while (node && node !== document.body) {
      path.unshift(Array.prototype.indexOf.call(node.parentElement.children, node));
      node = node.parentElement;
    }
    return path.join(".");
  };
  const fromPath = (path) => String(path || "").trim()
    ? String(path).split(".").reduce((node, index) => node?.children[Number(index)], document.body)
    : null;
  const toHex = (color) => {
    const values = color.match(/\\d+(?:\\.\\d+)?/g);
    return values && values.length >= 3
      ? "#" + values.slice(0, 3).map((value) => Math.round(Number(value)).toString(16).padStart(2, "0")).join("")
      : "#000000";
  };
  const toEditableColor = (color) => isWebPageTransparentColor(color) ? "transparent" : toHex(color);
  const cleanClone = () => {
    const clone = document.documentElement.cloneNode(true);
    clone.querySelectorAll("[data-1nx-editor-control-tag]").forEach((node) => restoreControl(node));
    clone.querySelectorAll("[data-1nx-editor-control-host]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-control-host");
      if (node instanceof HTMLElement) {
        node.style.removeProperty("visibility");
        if (!node.getAttribute("style")) node.removeAttribute("style");
      }
    });
    clone.querySelectorAll("[data-1nx-page-editor]").forEach((node) => node.remove());
    clone.querySelectorAll("[data-1nx-editor-selected]").forEach((node) => node.removeAttribute("data-1nx-editor-selected"));
    clone.querySelectorAll("[data-1nx-editor-hover]").forEach((node) => node.removeAttribute("data-1nx-editor-hover"));
    clone.querySelectorAll("[data-1nx-editor-dragging]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-dragging");
      node.style.removeProperty("--1nx-editor-drag-x");
      node.style.removeProperty("--1nx-editor-drag-y");
    });
    clone.querySelectorAll("[data-1nx-editor-drag-container]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-drag-container");
      node.style.removeProperty("--1nx-editor-drag-slot");
    });
    clone.querySelectorAll("[data-1nx-editor-avoid-up], [data-1nx-editor-avoid-down], [data-1nx-editor-avoid-left], [data-1nx-editor-avoid-right]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-avoid-up");
      node.removeAttribute("data-1nx-editor-avoid-down");
      node.removeAttribute("data-1nx-editor-avoid-left");
      node.removeAttribute("data-1nx-editor-avoid-right");
    });
    clone.querySelectorAll("[data-1nx-editor-drop-before]").forEach((node) => node.removeAttribute("data-1nx-editor-drop-before"));
    clone.querySelectorAll("[data-1nx-editor-drop-after]").forEach((node) => node.removeAttribute("data-1nx-editor-drop-after"));
    clone.querySelectorAll("[data-1nx-editor-text]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-text");
      if (node.getAttribute("data-1nx-editor-text-added") === "true") node.removeAttribute("contenteditable");
      node.removeAttribute("data-1nx-editor-text-added");
    });
    clone.querySelectorAll("[data-1nx-editor-tabindex]").forEach((node) => {
      node.removeAttribute("data-1nx-editor-tabindex");
      node.removeAttribute("tabindex");
    });
    return documentDoctype + clone.outerHTML;
  };
  const state = () => {
    if (!selected) return null;
    const rect = selected.getBoundingClientRect();
    const computed = getComputedStyle(selected);
    const textAlign = computed.textAlign === "center" || computed.textAlign === "right" ? computed.textAlign : "left";
    return {
      path: pathOf(selected),
      tagName: selected.tagName.toLowerCase(),
      tagIndex: Array.prototype.indexOf.call(document.getElementsByTagName(selected.tagName), selected),
      canEditText: canEditOrValue(selected),
      canEditBackground: canEditBackground(selected, computed),
      canEditBorder: canEditBorder(selected, computed),
      canSelectParent: Boolean(selected.parentElement && !blocked.has(selected.parentElement.tagName) && selected.parentElement.tagName !== "BODY"),
      breadcrumb: buildBreadcrumb(selected, pathOf, isStructuralBlock),
      color: toHex(computed.color),
      backgroundColor: toEditableColor(computed.backgroundColor),
      borderColor: toEditableColor(computed.borderColor),
      fontSize: Math.round(parseFloat(computed.fontSize)),
      textAlign,
      bold: Number(computed.fontWeight) >= 600 || computed.fontWeight === "bold",
      italic: computed.fontStyle === "italic",
      underline: computed.textDecorationLine.includes("underline"),
      strike: computed.textDecorationLine.includes("line-through"),
      linkHref: selected instanceof HTMLAnchorElement ? selected.getAttribute("href") || "" : undefined,
      imageSrc: selected instanceof HTMLImageElement ? selected.getAttribute("src") || "" : undefined,
      imageAlt: selected instanceof HTMLImageElement ? selected.getAttribute("alt") || "" : undefined,
      editingText: isEditingText(),
      rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
    };
  };
  const send = (action, extra = {}) => parent.postMessage({ type: MESSAGE, action, ...extra }, "*");
  const report = (reveal = false) => send("selection", { selection: state(), reveal });
  const scheduleReport = () => {
    if (isEditingText() || reportFrame) return;
    reportFrame = requestAnimationFrame(() => {
      reportFrame = 0;
      report();
    });
  };
  const sync = () => send("sync", { source: cleanClone(), selection: state() });
  const scheduleSync = () => {
    if (isEditingText() || syncTimer) return;
    syncTimer = window.setTimeout(() => {
      syncTimer = 0;
      sync();
    }, 360);
  };
  const commit = () => {
    if (syncTimer) {
      window.clearTimeout(syncTimer);
      syncTimer = 0;
    }
    cancelAnimationFrame(syncFrame);
    syncFrame = 0;
    send("commit", { source: cleanClone(), selection: state() });
  };
  const finishTextEditing = () => {
    if (!selected?.hasAttribute("data-1nx-editor-text")) return;
    document.querySelector("[data-1nx-editor-status]")?.remove();
    selected.removeAttribute("data-1nx-editor-text");
    if (selected.getAttribute("data-1nx-editor-text-added") === "true") selected.removeAttribute("contenteditable");
    selected.removeAttribute("data-1nx-editor-text-added");
    const control = selected.closest("[data-1nx-editor-control-tag]");
    if (control) {
      const restored = restoreControl(control);
      if (selected === control) selected = restored;
      selected?.setAttribute("data-1nx-editor-selected", "true");
    }
    commit();
  };
  const saveTextEditing = () => {
    if (isEditingText()) finishTextEditing();
  };
  const applyAttributes = (element, attributes) => {
    Array.from(element.attributes).forEach(({ name }) => element.removeAttribute(name));
    if (!Array.isArray(attributes)) return;
    attributes.forEach((entry) => {
      if (!Array.isArray(entry) || entry.length !== 2) return;
      try { element.setAttribute(String(entry[0]), String(entry[1])); } catch {}
    });
  };
  const loadDocument = (model, path, reveal, scrollLeft, scrollTop) => {
    if (!model || typeof model !== "object") return;
    cancelAnimationFrame(reportFrame);
    cancelAnimationFrame(dragFrame);
    cancelAnimationFrame(syncFrame);
    if (syncTimer) {
      window.clearTimeout(syncTimer);
      syncTimer = 0;
    }
    reportFrame = dragFrame = syncFrame = 0;
    selected = drag = null;
    hideHover();
    sourceHeadNodes.forEach((node) => node.remove());
    const template = document.createElement("template");
    template.innerHTML = typeof model.headHTML === "string" ? model.headHTML : "";
    sourceHeadNodes = Array.from(template.content.childNodes);
    document.head.insertBefore(
      template.content,
      document.head.querySelector("style[data-1nx-page-editor]"),
    );
    applyAttributes(document.documentElement, model.htmlAttributes);
    applyAttributes(document.body, model.bodyAttributes);
    document.body.innerHTML = typeof model.bodyHTML === "string" ? model.bodyHTML : "";
    documentDoctype = typeof model.doctype === "string" ? model.doctype : "<!DOCTYPE html>";
    const left = Number.isFinite(scrollLeft) ? scrollLeft : window.scrollX;
    const top = Number.isFinite(scrollTop) ? scrollTop : window.scrollY;
    requestAnimationFrame(() => {
      window.scrollTo(left, top);
      const node = fromPath(path);
      if (node) {
        select(node, Boolean(reveal), Boolean(reveal));
        if (reveal) editText();
      }
      else report();
    });
  };
  const deselect = () => {
    if (!selected) return;
    finishTextEditing();
    selected.removeAttribute("data-1nx-editor-selected");
    selected = null;
    report();
  };
  const selectParent = () => {
    const parent = selected?.parentElement;
    if (!(parent instanceof HTMLElement) || blocked.has(parent.tagName) || parent.tagName === "BODY") return;
    select(parent, false, true);
  };
  const removeSelected = () => {
    if (!selected) return;
    finishTextEditing();
    const next = hideOrRemove(selected);
    selected.removeAttribute?.("data-1nx-editor-selected");
    selected = null;
    if (next instanceof HTMLElement && !blocked.has(next.tagName) && !next.hidden) select(next, false, true);
    else report();
    commit();
  };
  const duplicateSelected = () => {
    if (!selected) return;
    finishTextEditing();
    const clone = duplicateNode(selected);
    if (clone instanceof HTMLElement) select(clone, false, true);
    commit();
  };
  const select = (node, focus = false, reveal = false) => {
    if (!(node instanceof HTMLElement) || blocked.has(node.tagName)) return;
    if (node !== selected) finishTextEditing();
    hideHover();
    selected?.removeAttribute("data-1nx-editor-selected");
    selected = node;
    selected.setAttribute("data-1nx-editor-selected", "true");
    if (focus) {
      if (!selected.hasAttribute("tabindex")) {
        selected.setAttribute("data-1nx-editor-tabindex", "true");
        selected.tabIndex = -1;
      }
      selected.focus({ preventScroll: true });
    }
    report(reveal);
  };
  const editText = () => {
    const target = resolveTextEditTarget(selected, canEditOrValue);
    if (!target) return;
    if (target !== selected) select(target, false, false);
    selected = softenControl(selected);
    selected.setAttribute("data-1nx-editor-selected", "true");
    selected.setAttribute("data-1nx-editor-text", "true");
    if (!document.querySelector("[data-1nx-editor-status]")) {
      const status = document.createElement("div");
      status.setAttribute("data-1nx-page-editor", "true");
      status.setAttribute("data-1nx-editor-status", "true");
      status.setAttribute("role", "status");
      status.textContent = "正在编辑文字 · 点击外部保存";
      document.body.append(status);
    }
    const isControlOverlay = selected.hasAttribute("data-1nx-editor-control-tag") && (selected.tagName === "INPUT" || selected.tagName === "TEXTAREA");
    if (!isControlOverlay) {
      if (!selected.hasAttribute("contenteditable")) selected.setAttribute("data-1nx-editor-text-added", "true");
      selected.contentEditable = "true";
    }
    hideHover();
    selected.focus({ preventScroll: true });
    if (isControlOverlay && (selected instanceof HTMLInputElement || selected instanceof HTMLTextAreaElement)) {
      const len = selected.value.length;
      selected.setSelectionRange(0, len);
    }
    report();
  };
  const moveByKey = (key) => {
    const parentNode = selected?.parentElement;
    if (!selected || !parentNode) return false;
    const slots = Array.from(parentNode.children).map((node) => {
      const rect = node.getBoundingClientRect();
      return { left: rect.left, top: rect.top };
    });
    const axis = reorderAxis(slots, getComputedStyle(parentNode));
    const negativeKey = axis === "horizontal" ? "ArrowLeft" : "ArrowUp";
    const positiveKey = axis === "horizontal" ? "ArrowRight" : "ArrowDown";
    if (key !== negativeKey && key !== positiveKey) return false;
    const moveToPrevious = (key === negativeKey) !== reorderReversed(slots, axis);
    const sibling = moveToPrevious ? selected.previousElementSibling : selected.nextElementSibling;
    if (!sibling) return false;
    parentNode.insertBefore(selected, moveToPrevious ? sibling : sibling.nextElementSibling);
    report();
    commit();
    return true;
  };

  document.addEventListener("pointerover", (event) => {
    showHover(event.target instanceof HTMLElement ? event.target : null);
  }, true);
  document.addEventListener("pointerleave", hideHover, true);

  document.addEventListener("click", (event) => {
    if (suppressClick) {
      suppressClick = false;
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    const target = clickTarget(eventElement(event.target));
    if (!target) return;
    if (isEditingText() && (selected === target || selected.contains(target))) {
      event.stopPropagation();
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const shouldEditText = Boolean(selected?.contains(target) && resolveTextEditTarget(target, canEditOrValue));
    select(target, false, true);
    if (shouldEditText) editText();
  }, true);
  document.addEventListener("dblclick", (event) => {
    const target = clickTarget(eventElement(event.target));
    if (!target) return;
    if (isEditingText() && (selected === target || selected.contains(target))) return;
    event.preventDefault();
    event.stopPropagation();
    select(target, false, true);
    editText();
  }, true);
  document.addEventListener("input", scheduleReport, true);
  document.addEventListener("scroll", () => {
    hideHover();
    scheduleReport();
  }, true);
  window.addEventListener("resize", () => {
    hideHover();
    scheduleReport();
  });
  window.addEventListener("blur", saveTextEditing);
  document.addEventListener("focusout", (event) => {
    if (event.target === selected) saveTextEditing();
  }, true);
  document.addEventListener("submit", (event) => event.preventDefault(), true);
  document.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || isEditingText()) return;
    const candidate = event.target instanceof Element ? event.target.closest("[data-1nx-editor-selected]") : null;
    if (candidate?.hasAttribute("data-1nx-editor-control-tag")) return;
    const parentNode = candidate?.parentElement;
    if (!candidate || !parentNode || event.button !== 0) return;
    const slots = Array.from(parentNode.children).map((node) => {
      const rect = node.getBoundingClientRect();
      return { node, top: rect.top, bottom: rect.bottom, left: rect.left, right: rect.right, width: rect.width, height: rect.height };
    });
    const sourceIndex = slots.findIndex(({ node }) => node === candidate);
    const source = slots[sourceIndex];
    const axis = reorderAxis(slots, getComputedStyle(parentNode));
    const horizontal = axis === "horizontal";
    const start = horizontal ? "left" : "top";
    const end = horizontal ? "right" : "bottom";
    const size = horizontal ? "width" : "height";
    drag = {
      node: candidate, parentNode, pointerId: event.pointerId,
      x: event.clientX, y: event.clientY, clientX: event.clientX, clientY: event.clientY,
      scrollX: window.scrollX, scrollY: window.scrollY, parentRect: parentNode.getBoundingClientRect(), slots, sourceIndex,
      axis, reversed: reorderReversed(slots, axis),
      shiftForward: Math.abs((slots[sourceIndex + 1]?.[start] ?? source[end]) - source[start]) || source[size],
      shiftBackward: Math.abs(source[end] - (slots[sourceIndex - 1]?.[end] ?? source[start])) || source[size],
      moved: false, target: null, side: null, shifted: [],
    };
  }, true);
  const clearDropTarget = () => {
    drag?.target?.removeAttribute("data-1nx-editor-drop-before");
    drag?.target?.removeAttribute("data-1nx-editor-drop-after");
    drag?.shifted.forEach((node) => {
      node.removeAttribute("data-1nx-editor-avoid-up");
      node.removeAttribute("data-1nx-editor-avoid-down");
      node.removeAttribute("data-1nx-editor-avoid-left");
      node.removeAttribute("data-1nx-editor-avoid-right");
    });
    if (drag) { drag.target = null; drag.side = null; drag.shifted = []; }
  };
  const updateDropTarget = () => {
    dragFrame = 0;
    if (!drag?.moved) return;
    drag.node.style.setProperty("--1nx-editor-drag-x", (drag.clientX - drag.x) + "px");
    drag.node.style.setProperty("--1nx-editor-drag-y", (drag.clientY - drag.y) + "px");
    const scrollXDelta = window.scrollX - drag.scrollX;
    const scrollYDelta = window.scrollY - drag.scrollY;
    const parentLeft = drag.parentRect.left - scrollXDelta;
    const parentRight = drag.parentRect.right - scrollXDelta;
    const parentTop = drag.parentRect.top - scrollYDelta;
    const parentBottom = drag.parentRect.bottom - scrollYDelta;
    if (drag.clientX < parentLeft || drag.clientX > parentRight || drag.clientY < parentTop || drag.clientY > parentBottom) {
      clearDropTarget();
      return;
    }
    const source = drag.slots[drag.sourceIndex];
    const horizontal = drag.axis === "horizontal";
    const scrollDelta = horizontal ? scrollXDelta : scrollYDelta;
    const pointerPosition = horizontal ? drag.clientX : drag.clientY;
    if (drag.clientX >= source.left - scrollXDelta && drag.clientX <= source.right - scrollXDelta && drag.clientY >= source.top - scrollYDelta && drag.clientY <= source.bottom - scrollYDelta) {
      clearDropTarget();
      return;
    }
    const candidates = drag.slots.filter(({ node }) => node !== drag.node);
    if (!candidates.length) {
      clearDropTarget();
      return;
    }
    const distance = (item) => Math.hypot(
      (item.left + item.right) / 2 - scrollXDelta - drag.clientX,
      (item.top + item.bottom) / 2 - scrollYDelta - drag.clientY,
    );
    const slot = candidates.reduce((nearest, item) => distance(item) < distance(nearest) ? item : nearest);
    const target = slot.node;
    const physicalSide = insertionSide((horizontal ? slot.left : slot.top) - scrollDelta, horizontal ? slot.width : slot.height, pointerPosition);
    const side = drag.reversed ? (physicalSide === "before" ? "after" : "before") : physicalSide;
    if (target === drag.target && side === drag.side) return;
    clearDropTarget();
    drag.target = target;
    drag.side = side;
    target.setAttribute("data-1nx-editor-drop-" + side, "true");
    const preview = reorderPreview(drag.sourceIndex, drag.slots.indexOf(slot), side, drag.axis, drag.reversed);
    if (!preview) return;
    drag.parentNode.style.setProperty("--1nx-editor-drag-slot", (["up", "left"].includes(preview.direction) !== drag.reversed ? drag.shiftForward : drag.shiftBackward) + "px");
    for (let index = preview.from; index <= preview.to; index++) {
      const node = drag.slots[index].node;
      node.setAttribute("data-1nx-editor-avoid-" + preview.direction, "true");
      drag.shifted.push(node);
    }
  };
  document.addEventListener("pointermove", (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (!drag.moved && Math.hypot(event.clientX - drag.x, event.clientY - drag.y) < 6) return;
    if (!drag.moved) drag.node.setPointerCapture?.(event.pointerId);
    drag.moved = true;
    drag.clientX = event.clientX;
    drag.clientY = event.clientY;
    drag.parentNode.setAttribute("data-1nx-editor-drag-container", "true");
    drag.node.setAttribute("data-1nx-editor-dragging", "true");
    event.preventDefault();
    if (!dragFrame) dragFrame = requestAnimationFrame(updateDropTarget);
  }, true);
  const finishDrag = (event) => {
    if (!drag || drag.pointerId !== event.pointerId) return;
    if (dragFrame) cancelAnimationFrame(dragFrame);
    dragFrame = 0;
    updateDropTarget();
    drag.parentNode.removeAttribute("data-1nx-editor-drag-container");
    drag.node.removeAttribute("data-1nx-editor-dragging");
    drag.node.style.removeProperty("--1nx-editor-drag-x");
    drag.node.style.removeProperty("--1nx-editor-drag-y");
    if (drag.moved) {
      suppressClick = true;
      const { node, target, side } = drag;
      clearDropTarget();
      if (event.type !== "pointercancel" && target) {
        node.parentElement.insertBefore(node, side === "before" ? target : target.nextElementSibling);
      }
      select(drag.node);
      if (event.type !== "pointercancel" && target) commit();
    }
    drag.parentNode.style.removeProperty("--1nx-editor-drag-slot");
    drag = null;
  };
  document.addEventListener("pointerup", finishDrag, true);
  document.addEventListener("pointercancel", finishDrag, true);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && event.target === selected) {
      if (isEditingText()) {
        if (selected.tagName === "INPUT") {
          event.preventDefault();
          finishTextEditing();
        }
        return;
      }
      editText();
    }
    if (event.key === "Escape") {
      event.preventDefault();
      if (selected?.hasAttribute("data-1nx-editor-text")) {
        finishTextEditing();
        return;
      }
      if (selected) {
        deselect();
        return;
      }
      send("requestClose");
      return;
    }
    if (selected?.hasAttribute("data-1nx-editor-text")) return;
    if ((event.key === "Backspace" || event.key === "Delete") && selected) {
      event.preventDefault();
      removeSelected();
      return;
    }
    if (event.altKey && event.code === "KeyD" && selected) {
      event.preventDefault();
      duplicateSelected();
      return;
    }
    if (event.altKey && moveByKey(event.key)) event.preventDefault();
  }, true);
  window.addEventListener("message", (event) => {
    const message = event.data;
    if (event.source !== parent || !message || message.type !== COMMAND) return;
    if (message.action === "loadDocument") {
      loadDocument(message.model, message.path, message.reveal, message.scrollLeft, message.scrollTop);
      return;
    }
    if (message.action === "restoreScroll") {
      window.scrollTo(Number(message.left) || 0, Number(message.top) || 0);
      return;
    }
    if (message.action === "close") {
      finishTextEditing();
      send("requestClose");
      return;
    }
    if (message.action === "select") select(fromPath(message.path) || document.body.firstElementChild, true, Boolean(message.reveal));
    if (message.action === "selectParent") selectParent();
    if (message.action === "duplicate") duplicateSelected();
    if (message.action === "remove") removeSelected();
    if (!selected) return;
    const paint = (property, value) => {
      const targets = [selected];
      const host = document.querySelector("[data-1nx-editor-control-host]");
      if (host instanceof HTMLElement && host !== selected) targets.push(host);
      targets.forEach((node) => {
        if (value) node.style.setProperty(property, value);
        else node.style.removeProperty(property);
      });
    };
    if (["setColor", "setBackgroundColor", "setBorderColor"].includes(message.action) && typeof message.value === "string" && (!message.value || CSS.supports("color", message.value))) {
      const property = message.action === "setColor" ? "color" : message.action === "setBackgroundColor" ? "background-color" : "border-color";
      paint(property, message.value);
      if (message.action === "setBorderColor") {
        if (message.value) {
          const computed = getComputedStyle(selected);
          if (parseFloat(computed.borderWidth) === 0 || computed.borderStyle === "none") {
            paint("border-width", "1px");
            paint("border-style", "solid");
          }
        } else {
          paint("border-width", "");
          paint("border-style", "");
        }
      }
      report();
      scheduleSync();
    }
    if (message.action === "setFontSize" && Number.isFinite(Number(message.value))) {
      paint("font-size", clampFontSize(Number(message.value)) + "px");
      report();
    }
    if (message.action === "setTextAlign" && ["left", "center", "right"].includes(message.value)) {
      paint("text-align", message.value);
      report();
    }
    if (message.action === "setTextMark" && message.mark) {
      const computed = getComputedStyle(selected);
      if (message.mark === "bold") {
        paint("font-weight", message.value ? "700" : "400");
      } else if (message.mark === "italic") {
        paint("font-style", message.value ? "italic" : "normal");
      } else if (message.mark === "underline" || message.mark === "strikethrough") {
        const underline = message.mark === "underline" ? Boolean(message.value) : computed.textDecorationLine.includes("underline");
        const strike = message.mark === "strikethrough" ? Boolean(message.value) : computed.textDecorationLine.includes("line-through");
        const marks = [underline ? "underline" : "", strike ? "line-through" : ""].filter(Boolean);
        paint("text-decoration", marks.join(" ") || "none");
      }
      report();
    }
    if (message.action === "setLinkHref" && selected instanceof HTMLAnchorElement && typeof message.value === "string") {
      const value = normalizeEditableUrl(message.value, "link");
      if (value !== null) {
        value ? selected.setAttribute("href", value) : selected.removeAttribute("href");
        report();
      }
    }
    if (message.action === "setImageSrc" && selected instanceof HTMLImageElement && typeof message.value === "string") {
      const value = normalizeEditableUrl(message.value, "image");
      if (value !== null) {
        value ? selected.setAttribute("src", value) : selected.removeAttribute("src");
        report();
      }
    }
    if (message.action === "setImageAlt" && selected instanceof HTMLImageElement && typeof message.value === "string") {
      selected.setAttribute("alt", message.value.slice(0, 500));
      report();
    }
    if (message.action === "commit") commit();
  });
  send("ready");
})();
`,e.head.append(t,r),`<!DOCTYPE html>${e.documentElement.outerHTML}`},j=e=>{var f,h,b,v;const t=new DOMParser().parseFromString(C(e),"text/html");t.documentElement.style.width="100%";const{width:r}=M(e);if(((h=(f=e.customData)==null?void 0:f.webPage)==null?void 0:h.kind)==="presentation-slide")return t.documentElement.style.width=`${c.presentation.width}px`,`<!DOCTYPE html>${t.documentElement.outerHTML}`;const a=(v=(b=e.customData)==null?void 0:b.webPage)==null?void 0:v.deviceMode,o=a==="mobile"||a==="tablet"||a==="desktop"?a:r<=600?"mobile":r<=1024?"tablet":"desktop",i=document.implementation.createHTMLDocument("网页预览"),n=i.createElement("meta");n.name="viewport",n.content="width=device-width, initial-scale=1",i.head.append(n);const d=i.createElement("style");d.textContent=`
* { box-sizing: border-box; }
html, body { margin: 0; width: 100%; min-height: 100%; }
body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 4px;
  background: #f4f5f7;
}
[data-preview-switcher] {
  position: fixed;
  top: 50%;
  right: 8px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 2px;
  border: 1px solid rgb(15 23 42 / 10%);
  border-radius: 10px;
  background: rgb(255 255 255 / 94%);
  box-shadow: 0 4px 14px rgb(15 23 42 / 8%);
  transform: translateY(-50%);
}
[data-preview-mode] {
  display: grid;
  width: 36px;
  height: 36px;
  padding: 0;
  place-items: center;
  border: 0;
  border-radius: 8px;
  color: #64748b;
  background: transparent;
  cursor: pointer;
  transition: color 120ms, background-color 120ms, transform 120ms;
}
[data-preview-mode] svg { width: 18px; height: 18px; }
[data-preview-mode][aria-pressed="true"] {
  color: #0f172a;
  background: white;
  box-shadow: 0 1px 3px rgb(15 23 42 / 8%), inset 0 0 0 1px rgb(15 23 42 / 10%);
}
[data-preview-mode]:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; }
[data-preview-mode]:active { transform: scale(.96); }
[data-preview-device] {
  --frame-inset: 0px;
  --frame-top: 30px;
  position: relative;
  width: min(calc(var(--preview-width) + var(--frame-inset) + var(--frame-inset)), 100%);
  padding: var(--frame-top) var(--frame-inset) var(--frame-inset);
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 12%);
  background: white;
  box-shadow: 0 8px 24px rgb(15 23 42 / 9%);
}
[data-preview-device]::before,
[data-preview-device]::after {
  content: "";
  position: absolute;
  z-index: 1;
  pointer-events: none;
}
[data-preview-device]::before {
  top: 12px;
  left: 14px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff5f57;
  box-shadow: 12px 0 #febc2e, 24px 0 #28c840;
}
[data-preview-device]::after {
  top: 8px;
  left: 50%;
  width: min(42%, 420px);
  height: 14px;
  border: 1px solid rgb(15 23 42 / 8%);
  border-radius: 999px;
  background: rgb(255 255 255 / 72%);
  transform: translateX(-50%);
}
[data-preview-screen] {
  overflow: hidden;
  aspect-ratio: var(--preview-ratio);
  background: white;
}
iframe { display: block; width: 100%; height: 100%; border: 0; }
[data-preview-device="mobile"] {
  --preview-width: ${c["app-page"].width}px;
  --preview-ratio: ${c["app-page"].width} / ${c["app-page"].height};
  border-radius: 10px;
  background: #eef0f3;
}
[data-preview-device="tablet"] {
  --preview-width: ${c["tablet-page"].width}px;
  --preview-ratio: ${c["tablet-page"].width} / ${c["tablet-page"].height};
  border-radius: 10px;
  background: #eef0f3;
}
[data-preview-device="desktop"] {
  --preview-width: ${c["pc-page"].width}px;
  --preview-ratio: ${c["pc-page"].width} / ${c["pc-page"].height};
  border-radius: 10px;
  background: #eef0f3;
}
[data-preview-screen] { border-radius: 0 0 9px 9px; }
@media (hover: hover) and (pointer: fine) {
  [data-preview-mode]:hover { color: #0f172a; background: #f1f5f9; }
}
@media (max-width: 700px) {
  [data-preview-switcher] {
    top: auto;
    right: 8px;
    bottom: 8px;
    flex-direction: row;
    transform: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  [data-preview-mode] { transition: none; }
  [data-preview-mode]:active { transform: none; }
}
@media (pointer: coarse) {
  [data-preview-mode] { width: 44px; height: 44px; }
}`,i.head.append(d);const s=i.createElement("div");s.dataset.previewSwitcher="true",s.setAttribute("role","group"),s.setAttribute("aria-label","预览视口");for(const[x,y,S]of[["mobile","手机视口",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><rect x="8" y="3" width="8" height="18" rx="1.5"/></svg>'],["tablet","PAD 视口",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><rect x="5" y="3" width="14" height="18" rx="1.5"/></svg>'],["desktop","PC 视口",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" focusable="false"><rect x="2.5" y="5" width="19" height="14" rx="1.5"/></svg>']]){const u=i.createElement("button");u.type="button",u.dataset.previewMode=x,u.title=y,u.setAttribute("aria-label",y),u.setAttribute("aria-pressed",String(x===o)),u.innerHTML=S,s.append(u)}const l=i.createElement("main");l.dataset.previewDevice=o;const p=i.createElement("div");p.dataset.previewScreen="true";const m=i.createElement("iframe");m.title="网页内容预览",m.srcdoc=`<!DOCTYPE html>${t.documentElement.outerHTML}`,p.append(m),l.append(p);const g=i.createElement("script");return g.textContent=`
const frame = document.querySelector("[data-preview-device]");
const buttons = document.querySelectorAll("[data-preview-mode]");
for (const button of buttons) {
  button.addEventListener("click", () => {
    frame.dataset.previewDevice = button.dataset.previewMode;
    for (const item of buttons) {
      item.setAttribute("aria-pressed", String(item === button));
    }
  });
}`,i.body.append(s,l,g),`<!DOCTYPE html>${i.documentElement.outerHTML}`},T=e=>URL.createObjectURL(new Blob([j(e)],{type:"text/html;charset=utf-8"})),de=async e=>{const t=document.createElement("div"),r=document.createElement("iframe"),a=T(e);t.dataset.webPageFullscreenPreview="true",Object.assign(t.style,{position:"fixed",inset:"0",width:"100vw",height:"100vh",background:"#f4f5f7",opacity:"0",pointerEvents:"none"}),r.title="网页响应式预览",r.setAttribute("sandbox","allow-scripts"),r.src=a,Object.assign(r.style,{display:"block",width:"100%",height:"100%",border:"0"}),t.append(r),document.body.append(t);const o=()=>{document.removeEventListener("fullscreenchange",i),URL.revokeObjectURL(a),t.remove()},i=()=>{document.fullscreenElement===t?(t.style.opacity="1",t.style.pointerEvents="auto"):o()};document.addEventListener("fullscreenchange",i);try{await t.requestFullscreen()}catch(n){throw o(),n}},se=e=>{const t=T(e),r=document.createElement("a");r.href=t,r.target="_blank",r.rel="noopener noreferrer",document.body.append(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(t),6e4)};export{ue as CODE_BLOCK_REVEAL_EVENT,k as WEB_PAGE_EDITOR_COMMAND,L as WEB_PAGE_EDITOR_MESSAGE,W as buildWebPageEditorBreadcrumb,X as canEditWebPageElementBackground,oe as canEditWebPageElementBorder,$ as canEditWebPageElementText,B as clampWebPageFontSize,q as duplicateWebPageElement,z as eventTargetElement,de as fullscreenWebPagePreview,Q as getHTMLTagOffset,j as getResponsiveWebPagePreviewHTML,P as getSiblingInsertionSide,H as getSiblingReorderAxis,N as getSiblingReorderPreview,ie as getVisualWebPageEditorHTML,pe as getWebPageEditorEntryHTML,Y as hideOrRemoveWebPageElement,ae as isAllowedWebPageBrowseUrl,D as isSiblingReorderReversed,ee as isWebPageProtectedStructure,I as isWebPageStructuralBlock,R as isWebPageTextValuedControl,A as isWebPageTransparentColor,_ as normalizeWebPageEditableUrl,se as openWebPagePreview,me as parseWebPageHTMLModel,fe as placeWebPageInlineEditor,ne as readSandboxedWindowScroll,w as resolveWebPageBlockTarget,te as resolveWebPageClickTarget,E as resolveWebPageTextEditTarget,F as restoreWebPageNativeTextControl,O as softenWebPageNativeTextControl,re as visibleWebPageEditorBreadcrumb};
