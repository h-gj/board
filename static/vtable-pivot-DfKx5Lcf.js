import{v as j}from"./vtable-pivot-DAka94u8.js";import{TABLE_EVENT_TYPE as D}from"./vtable-pivot-DgkvqHZw.js";import{c as K}from"./vtable-pivot-CtDJ3DX-.js";import{r as B}from"./vtable-pivot-C1VO7FFz.js";import{b as O}from"./vtable-pivot-DNSY-bnI.js";class _{static get mode(){return _._mode||(_._mode=$()),_._mode}static set mode(e){_._mode=e}static RegisterCreateCanvas(e){_.CreateCanvas=e}static RegisterLoadImage(e){_.LoadImage=e}static GetCreateCanvasFunc(){return _.CreateCanvas?_.CreateCanvas:_.mode==="worker"?(e=200,t=200)=>new OffscreenCanvas(e,t):void 0}static RegisterRequestAnimationFrame(e){_.RequestAnimationFrame=e()}static GetRequestAnimationFrame(){if(_.RequestAnimationFrame)return _.RequestAnimationFrame}static RegisterCancelAnimationFrame(e){_.CancelAnimationFrame=e()}static GetCancelAnimationFrame(){if(_.CancelAnimationFrame)return _.CancelAnimationFrame}}function $(){let i="browser";try{window.type==="node"?i="node":typeof window>"u"||window.performance?typeof window>"u"&&(i="node"):i="miniApp"}catch{i="node"}return i}_.dpr=0;function he(){try{const i=window.getSelection();if(i){if(typeof i.removeAllRanges=="function")return void i.removeAllRanges();if(typeof i.empty=="function")return void i.empty();if(typeof i.collapse=="function")return void i.collapse(document.body,0)}}catch{}}const U=i=>{switch(Object.prototype.toString.call(i)){case"[object Object]":return"object";case"[object Function]":return"function";case"[object Array]":return"array";case"[object String]":return"string";case"[object Number]":return"number";case"[object RegExp]":return"regExp";case"[object Boolean]":return"boolean";case"[object Symbol]":return"symbol";case"[object Date]":return"date";case"[object Undefined]":return"undefined";case"[object Null]":return"null";case"[object Error]":return"error";case"[object HTMLDocument]":return"document";case"[object global]":return"global";default:return null}},q=(i,e)=>U(i)===e,G=i=>q(i,"object");function V(i,e,t){let r,a,o,d,s,l,g=0,p=!1,c=!1,y=!0;const n=!e&&e!==0&&typeof j.getRequestAnimationFrame()=="function";if(typeof i!="function")throw new TypeError("Expected a function");function u(v){const f=r,C=a;return a=void 0,r=void 0,g=v,d=i.apply(C,f),d}function h(v,f){return n?j.getRequestAnimationFrame()(v):setTimeout(v,f)}function L(v){const f=v-l;return l===void 0||f>=e||f<0||p&&v-g>=o}function E(){const v=Date.now();if(L(v))return function(f){return s=void 0,y&&r?u(f):(a=void 0,r=void 0,d)}(v);s=h(E,function(f){const C=f-g,m=e&&-(f-l);return p?Math.min(m,o-C):m}(v))}return e=+e||0,G(t)&&(c=!!t.leading,p="maxWait"in t,p&&(o=Math.max(+t.maxWait||0,e)),y="trailing"in t?!!t.trailing:y),function(...v){const f=Date.now(),C=L(f);if(r=v,a=this,l=f,C){if(s===void 0)return function(m){return g=m,s=h(E,e),c?u(m):d}(l);if(p)return s=h(E,e),u(l)}return s===void 0&&(s=h(E,e)),d}}let X=1;class Y{constructor(e,t,r){var a;if(this.resizeTime=100,this.lastSize={width:0,height:0},this.mutationResize=()=>{this.onResize()},this.callBack=()=>{const o=this.getSize();let d=!1;o.width===this.lastSize.width&&o.height===this.lastSize.height&&(d=!0),this.lastSize=o,this.cb&&this.cb(Object.assign(Object.assign({},this.lastSize),{windowSizeNotChange:d}))},this.onResize=()=>{this.callBackDebounce()},this.element=e,this.cb=t,this.lastSize=this.getSize(),r&&(this.resizeTime=Math.max(r,16)),this.callBackDebounce=V(this.callBack,this.resizeTime),window==null||window.addEventListener("resize",this.onResize),"ResizeObserver"in window){const o=window.ResizeObserver;this.observer=new o(this.mutationResize),(a=this.observer)===null||a===void 0||a.observe(this.element)}else"MutationObserver"in window&&(this.observer=new MutationObserver(this.mutationResize),this.observer.observe(this.element,{attributes:!0,attributeFilter:["style"]}))}disConnect(){window.removeEventListener("resize",this.onResize),this.observer&&(this.observer.disconnect(),this.observer=void 0)}setSize(e){this.lastSize=e}checkSize(){const e=this.getSize();return e.width!==this.lastSize.width||e.height!==this.lastSize.height}getSize(){return this.element?{width:Math.floor(this.element.clientWidth),height:Math.floor(this.element.clientHeight)}:Object.assign({},this.lastSize)}}class Z{constructor(){this.listeners={},this.reseizeListeners={}}on(e,t,r,...a){if(_.mode==="node")return-1;const o=X++;if(e!=null&&e.addEventListener)if(t!=="resize"||e===window)e==null||e.addEventListener(t,r,...a);else{const s=new Y(e,r,this.resizeTime);this.reseizeListeners[o]=s}const d={target:e,type:t,listener:r,options:a};return this.listeners[o]=d,o}once(e,t,r,...a){if(_.mode==="node")return-1;const o=this.on(e,t,(...d)=>{this.off(o),r(...d)},...a);return o}off(e){var t;if(_.mode==="node"||e===null)return;const r=(t=this.listeners)===null||t===void 0?void 0:t[e];r&&(delete this.listeners[e],r.target.removeEventListener&&r.target.removeEventListener(r.type,r.listener,...r.options))}fire(e,t,...r){if(_.mode!=="node")for(const a in this.listeners){const o=this.listeners[a];o.target===e&&o.type===t&&o.listener.call(o.target,...r)}}hasListener(e,t){if(_.mode==="node")return!1;let r=!1;for(const a in this.listeners){const o=this.listeners[a];o.target===e&&o.type===t&&(r=!0)}return r}clear(){if(_.mode!=="node"){for(const e in this.listeners){const t=this.listeners[e];t.target.removeEventListener&&t.target.removeEventListener(t.type,t.listener,...t.options)}for(const e in this.reseizeListeners){const t=this.reseizeListeners[e];t==null||t.disConnect()}this.listeners={}}}release(){_.mode!=="node"&&(this.clear(),this.listeners={})}}function z(i,e){const t=document.createElement(i);return e&&t.classList.add(...e),t}function J(){if(_.mode==="node")return;const i=document.createElement("style");i.id="vtable-menu-styleSheet",i.textContent=`
@keyframes vtable__menu-element--shown-animation {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.vtable__menu-element {
	position: absolute;
	box-sizing: border-box;
	border-radius: 4px;
	background-color: #fff;
	padding: 6px 0;
	/* pointer-events: none; */
	user-select: none;
	color: #000;
	max-width: 300px;
	z-index: 99999;
	border: #CCC 0.5px solid;
	cursor: default;
	width: max-content;
	box-shadow: 0px 8px 16px rgba(27, 31, 35, 0.12);
  max-height: 100%;
  overflow-y: auto;
}
.vtable__menu-element--hidden {
	opacity: 0;
	/* transform: translate(-50%, -50%); */
	transition: opacity 75ms linear;
	z-index: -9999;
}
.vtable__menu-element--shown {
	opacity: 1;
	/* transform: translate(-50%, -50%); */
	animation: vtable__menu-element--shown-animation 150ms ease-out;
}
.vtable__menu-element__content {
	font-family: Roboto;
	font-size: 12px;
	overflow: hidden;
	display: inline-block;
	/* height: 100%; */
	line-height: 30px;
}
.vtable__menu-element__item {
	height: 32px;
	padding: 0px 12px;
	cursor: pointer;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
.vtable__menu-element__item:hover {
	background-color: rgba(27, 31, 35, 0.06);
}
.vtable__menu-element__icon{
	/* vertical-align: top; */
	display: flex;
	/* line-height: 30px; */
	margin-right: 6px;
}
.vtable__menu-element__no-event {
	pointer-events: none;
}
.vtable__menu-element--select {
	color: #2E68CF;
}
.vtable__menu-element--normal {
	color: rgba(20, 20, 20, 0.9);;
}
.vtable__menu-element__item-disabled {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
	  background-color: #fff;
}
.vtable__menu-element__item-disabled:hover {
	  background-color: #fff;
}
.vtable__menu-element__split {
	height: 0px;
	border: 1px solid rgb(209, 213, 218);
	margin: 5px 0;
}
.vtable__menu-element__title {
	color: rgb(149, 149, 149);
}
.vtable__menu-element__arrow {
	position: absolute;
	right: 3px;
	font-weight: bold;
	margin-top: 1px;
}
.vtable__menu-element__item-text {
	margin-right: 15px;
}
`,document.head.appendChild(i)}J();const S="vtable__menu-element",Q=`${S}__item`,N=`${S}__content`,b=`${S}--hidden`,I=`${S}--shown`,ee=`${S}--normal`,te=`${S}--select`,ne=`${S}__icon`,ie=`${S}__split`,oe=`${S}__title`,se=`${S}__arrow`,T=`${S}__no-event`,W=`${S}__item-text`,P=`${S}__item-disabled`;function F(){return z("div",[S,b])}function H(i,e,t,r,a,o){const d=i.getCellRange(r,a);for(let s=0;s<e.length;s++){const l=e[s];let{col:g,row:p}=l;const{field:c,menuKey:y}=l;if(typeof g!="number"||typeof p!="number")if(i.isPivotTable()){const n=i.internalProps.layoutMap.getPivotCellAdress(c);if(!n)continue;g=n.col,p=n.row}else{const n=i.internalProps.layoutMap.getHeaderCellAddressByField(c);if(!n)continue;g=n.col,p=n.row}if(O(g)&&O(p)&&K(d,g,p)&&t===y)return!0}return!1}class ue{constructor(e){var t,r,a,o,d,s,l,g,p,c,y;this._handler=new Z,this._rootElement=F(),this._secondElement=F(),this._secondElement.sub=!0,this._showChildrenIndex=-1,this._rootElement.addEventListener("wheel",n=>{n.stopPropagation()}),(t=this._rootElement)===null||t===void 0||t.addEventListener("mousedown",n=>{n.stopPropagation(),n.preventDefault()}),(r=this._rootElement)===null||r===void 0||r.addEventListener("contextmenu",n=>{n.stopPropagation(),n.preventDefault()}),(a=this._rootElement)===null||a===void 0||a.addEventListener("touchend",n=>{if(n.stopPropagation(),n.preventDefault(),n.target.classList.contains(P)||this._rootElement.classList.contains(b))return;const{col:u,row:h,dropDownIndex:L,menuKey:E,text:v,hasChildren:f}=n.target;if(typeof L!="number"||f)return void n.stopPropagation();const C=e.isPivotTable()?e.internalProps.layoutMap.getPivotDimensionInfo(u,h):e.getHeaderField(u,h),m=e._dropDownMenuIsHighlight(u,h,L);e.fireListeners(D.DROPDOWN_MENU_CLICK,{col:u,row:h,field:C,menuKey:E,text:v,highlight:m,cellLocation:e.getCellLocation(u,h),event:n}),e.fireListeners(D.DROPDOWN_MENU_CLEAR,null),e.fireListeners(D.HIDE_MENU,null),n.stopPropagation()}),(o=this._rootElement)===null||o===void 0||o.addEventListener("click",n=>{if(n.stopPropagation(),n.preventDefault(),n.target.classList.contains(P)||this._rootElement.classList.contains(b))return;const{col:u,row:h,dropDownIndex:L,menuKey:E,text:v,hasChildren:f}=n.target;if(typeof L!="number"||f)return void n.stopPropagation();const C=e.isPivotTable()?e.internalProps.layoutMap.getPivotDimensionInfo(u,h):e.getHeaderField(u,h),m=e._dropDownMenuIsHighlight(u,h,L);e.fireListeners(D.DROPDOWN_MENU_CLICK,{col:u,row:h,field:C,menuKey:E,text:v,highlight:m,cellLocation:e.getCellLocation(u,h),event:n}),e.fireListeners(D.DROPDOWN_MENU_CLEAR,null),e.fireListeners(D.HIDE_MENU,null),n.stopPropagation()}),(d=this._rootElement)===null||d===void 0||d.addEventListener("mousemove",n=>{var u,h;if(this._rootElement.classList.contains(b))return;n.stopPropagation();const{hasChildren:L,dropDownIndex:E,col:v,row:f,sub:C}=n.target;if(L){this._showChildrenIndex=E;const m=this._secondElement;m==null||m.classList.remove(b),m==null||m.classList.add(I),m.innerHTML="";const x=(u=this._menuInstanceInfo.content[E])===null||u===void 0?void 0:u.children;for(let A=0;A<x.length;A++){const w=x[A],R=k(w,!!e.stateManager.menu.dropDownMenuHighlight&&H(e,e.stateManager.menu.dropDownMenuHighlight,typeof w=="object"?(w==null?void 0:w.menuKey)||(w==null?void 0:w.text):w,v,f));R.col=v,R.row=f,R.dropDownIndex=A,typeof w=="string"?(R.text=w,R.menuKey=w):typeof w=="object"&&(R.text=w.text,R.menuKey=w.menuKey||w.text),R.sub=!0,R.sub=!0,m.appendChild(R)}const M=n.target.getBoundingClientRect();this._bindSecondElement(e,v,f,M.right,M.top)}else if(L&&this._showChildrenIndex===E){const m=this._secondElement;m==null||m.classList.remove(b),m==null||m.classList.add(I)}else!C&&(!((h=this._secondElement)===null||h===void 0)&&h.classList.contains(I))&&setTimeout(()=>{if(this._mouseEnterSecondElement!==!0){this._showChildrenIndex=-1;const m=this._secondElement;m==null||m.classList.remove(I),m==null||m.classList.add(b)}},300)}),(s=this._secondElement)===null||s===void 0||s.addEventListener("wheel",n=>{n.stopPropagation()}),(l=this._secondElement)===null||l===void 0||l.addEventListener("mousemove",n=>{this._rootElement.classList.contains(b)||n.stopPropagation()}),(g=this._secondElement)===null||g===void 0||g.addEventListener("mouseenter",n=>{this._mouseEnterSecondElement=!0}),(p=this._secondElement)===null||p===void 0||p.addEventListener("mouseleave",n=>{this._mouseEnterSecondElement=!1}),(c=this._secondElement)===null||c===void 0||c.addEventListener("mousedown",n=>{n.stopPropagation(),n.preventDefault()}),(y=this._secondElement)===null||y===void 0||y.addEventListener("click",n=>{if(n.stopPropagation(),n.preventDefault(),n.target.classList.contains(P)||this._secondElement.classList.contains(b))return;const{col:u,row:h,dropDownIndex:L,menuKey:E,text:v,hasChildren:f}=n.target;if(typeof L!="number"||f)return void n.stopPropagation();const C=e.isPivotTable()?e.internalProps.layoutMap.getPivotDimensionInfo(u,h):e.getHeaderField(u,h);let m=!1;this._menuInstanceInfo.content.forEach((x,M)=>{if(typeof x=="object"&&x.children&&x.children.length)for(let A=0;A<x.children.length;A++){const w=x.children[A];if(H(e,e.stateManager.menu.dropDownMenuHighlight,typeof w=="object"?w==null?void 0:w.menuKey:w,u,h)&&E===(typeof w=="object"?w==null?void 0:w.menuKey:w))return void(m=!0)}}),e.fireListeners(D.DROPDOWN_MENU_CLICK,{col:u,row:h,field:C,cellHeaderPaths:e.isPivotTable()?e.getCellHeaderPaths(u,h):void 0,menuKey:E,text:v,highlight:m,cellLocation:e.getCellLocation(u,h),event:n}),e.fireListeners(D.DROPDOWN_MENU_CLEAR,null),e.fireListeners(D.HIDE_MENU,null),n.stopPropagation()})}get rootElement(){return this._rootElement}release(){this.unbindFromCell();const e=this._rootElement;e!=null&&e.parentElement&&e.parentElement.removeChild(e),this._handler.release(),delete this._rootElement}bindToCell(e,t,r,a){var o,d;const s=this._rootElement,l=this._secondElement;if(this._menuInstanceInfo=a,s==null||s.classList.remove(I),s==null||s.classList.add(b),l==null||l.classList.remove(I),l==null||l.classList.add(b),this._canBindToCell(e,t,r)){if(s.innerHTML="",Array.isArray(a.content)){const g=a.content;for(let p=0;(o=p<(g==null?void 0:g.length))!==null&&o!==void 0&&o;p++){const c=g[p];let y=!!e.stateManager.menu.dropDownMenuHighlight&&H(e,e.stateManager.menu.dropDownMenuHighlight,typeof c=="object"?(c==null?void 0:c.menuKey)||(c==null?void 0:c.text):c,t,r);if(e.stateManager.menu.dropDownMenuHighlight&&typeof c=="object"&&Array.isArray(c.children)&&c.children.length)for(let u=0;u<c.children.length;u++){const h=c.children[u];if(H(e,e.stateManager.menu.dropDownMenuHighlight,typeof h=="object"?(h==null?void 0:h.menuKey)||(h==null?void 0:h.text):h,t,r)){y=!0;break}}const n=k(c,y);n.col=t,n.row=r,n.dropDownIndex=p,typeof c=="string"?(n.text=c,n.menuKey=c):typeof c=="object"&&(n.text=c.text,n.menuKey=c.menuKey||c.text,!((d=c.children)===null||d===void 0)&&d.length&&(n.hasChildren=!0)),s.appendChild(n)}}if(this._bindToCell(e,t,r,a.position,a.referencePosition))return s==null||s.classList.add(I),s==null||s.classList.remove(b),!0}else this.unbindFromCell();return!1}unbindFromCell(){const e=this._rootElement,t=this._secondElement;this._menuInstanceInfo=void 0,e!=null&&e.parentElement&&(e.classList.remove(I),e.classList.add(b)),t!=null&&t.parentElement&&(t.classList.remove(I),t.classList.add(b))}_canBindToCell(e,t,r){var a;const o=e.getCellRangeRelativeRect({col:t,row:r}),d=(a=e.internalProps.menu.parentElement)!==null&&a!==void 0?a:e.getElement(),{top:s,bottom:l,left:g,right:p}=o;if(t===-1&&r===-1||e.isFrozenCell(t,r))return!0;if(l<e.getFrozenRowsHeight()||p<e.getFrozenColsWidth()||g>e.tableNoFrameWidth-e.getRightFrozenColsWidth()||s>e.tableNoFrameHeight-e.getBottomFrozenRowsHeight())return!1;const{offsetHeight:c,offsetWidth:y}=d;return!(c<s)&&!(y<g)}_bindToCell(e,t,r,a,o){var d;const s=this._rootElement,l=(d=e.internalProps.menu.parentElement)!==null&&d!==void 0?d:e.getElement(),{width:g,height:p,left:c,top:y}=l.getBoundingClientRect();if(s){s.parentElement!==l&&l.appendChild(s),s.style.left="0px";const n=.8*g;s.style.maxWidth=`${n}px`;const u=s.offsetWidth,h=s.offsetHeight;let L,E;a?(L=a.x,E=a.y):o&&(L=o.rect.right-u,E=o.rect.bottom);const v=l.getBoundingClientRect(),f=v.width/l.offsetWidth,C=v.height/l.offsetHeight;E*C+h>p&&(E=(p-h)/C),E<0&&(E/=2);let m=0,x=0;if(e.getElement()!==l){const{left:M,top:A}=e.getElement().getBoundingClientRect();m=A-y,x=M-c}return s.style.top=`${E+m}px`,L<0?L=0:L*f+u>g&&(L=(g-u)/f),s.style.left=`${L+x}px`,!0}return!1}_bindSecondElement(e,t,r,a,o){var d;const s=this._secondElement,l=this._rootElement,g=(d=e.internalProps.menu.parentElement)!==null&&d!==void 0?d:e.getElement(),{width:p,height:c,left:y,top:n}=g.getBoundingClientRect(),{x:u,y:h,width:L,height:E}=l.getBoundingClientRect();if(s){s.parentElement!==g&&g.appendChild(s),s.style.left="0px";const v=.8*p;s.style.maxWidth=`${v}px`;const f=s.clientWidth,C=s.clientHeight,m=a-y;let x=o-4-n;x+C>c&&(x=x-C+s.firstElementChild.clientHeight+4),s.style.top=`${x}px`;let M=m;return M+f>p?M=M-f-L:M+=4,s.style.left=`${M}px`,!0}return!1}pointInMenuElement(e,t){const r=this._rootElement,{x:a,y:o,width:d,height:s}=r.getBoundingClientRect();if(e>a-5&&e<a+d+5&&t>o-5&&t<o+s+5)return!0;const l=this._secondElement;if(l){const{x:g,y:p,width:c,height:y}=l.getBoundingClientRect();if(e>g-5&&e<g+c+5&&t>p-5&&t<p+y+5)return!0}return!1}}function k(i,e){var t,r,a;const o=z("div",[Q,e?te:ee]);if(typeof i=="object"&&i.disabled&&o.classList.add(P),typeof i=="string"){const d=z("span",[N,T,W]);d.innerHTML=i,o.appendChild(d)}else if(typeof i=="object"){const d=(t=i.type)!==null&&t!==void 0?t:"item";if(d==="split")return o==null||o.classList.add(ie),o;if(!((r=i==null?void 0:i.icon)===null||r===void 0)&&r.svg)if(B.test(i.icon.svg)){const l=new Image;i.icon.width?l.style.width=i.icon.width.toString()+"px":l.style.width="16px",i.icon.height?l.style.height=i.icon.height.toString()+"px":l.style.height="16px",l.src=i.icon.svg,o.appendChild(l)}else{const l=z("span",[ne,T]);l.innerHTML=e&&i.selectedIcon&&i.selectedIcon.svg?i.selectedIcon.svg:i.icon.svg,i.icon.width&&l.children[0].setAttribute("width",i.icon.width.toString()),i.icon.height&&l.children[0].setAttribute("height",i.icon.height.toString()),o.appendChild(l)}const s=z("span",[N,T,W]);if(s.innerHTML=i.text,o.appendChild(s),d==="title")o==null||o.classList.add(T,oe);else if(!((a=i==null?void 0:i.children)===null||a===void 0)&&a.length){const l=z("span",[N,T,se]);l.innerHTML=e?'<svg width="8" height="12" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: baseline"><path d="M1.78186 16.7729L0.300378 15.2915L6.8189 8.77295L0.300377 2.25443L1.78186 0.77295L9.78186 8.77295L1.78186 16.7729Z" fill="#2E68CF" fill-opacity="0.65"></path></svg>':'<svg width="8" height="12" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align: baseline"><path d="M1.78186 16.7729L0.300378 15.2915L6.8189 8.77295L0.300377 2.25443L1.78186 0.77295L9.78186 8.77295L1.78186 16.7729Z" fill="#141414" fill-opacity="0.65"></path></svg>',o.appendChild(l)}}return o}export{Z as E,ue as M,_ as a,he as b,z as c,V as d,H as i};
