import{R as w}from"./index-iyxIYZmR.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *
 * Modified version of `@lit/react` for vanilla custom elements with support for SSR.
 */const bn=new Set(["style","children","ref","key","suppressContentEditableWarning","suppressHydrationWarning","dangerouslySetInnerHTML"]),An={className:"class",htmlFor:"for"};function Tn(t){return t.toLowerCase()}function _s(t){if(typeof t=="boolean")return t?"":void 0;if(typeof t!="function"&&!(typeof t=="object"&&t!==null))return t}function L({react:t,tagName:e,elementClass:i,events:a,displayName:r,defaultProps:s,toAttributeName:n=Tn,toAttributeValue:d=_s}){const u=Number.parseInt(t.version)>=19,k=t.forwardRef((y,b)=>{var Q,Fe;const m=t.useRef(null),h=t.useRef(new Map),_={},f={},A={},T={};for(const[R,x]of Object.entries(y)){if(bn.has(R)){A[R]=x;continue}const U=n(An[R]??R);if(i.prototype&&R in i.prototype&&!(R in(((Q=globalThis.HTMLElement)==null?void 0:Q.prototype)??{}))&&!((Fe=i.observedAttributes)!=null&&Fe.some(re=>re===U))){T[R]=x;continue}if(R.startsWith("on")){_[R]=x;continue}const Y=d(x);if(U&&Y!=null&&(f[U]=String(Y),u||(A[U]=Y)),U&&u){const re=_s(x);Y!==re?A[U]=Y:A[U]=x}}if(typeof window<"u"){for(const R in _){const x=_[R],U=R.endsWith("Capture"),Y=((a==null?void 0:a[R])??R.slice(2).toLowerCase()).slice(0,U?-7:void 0);t.useLayoutEffect(()=>{const re=m==null?void 0:m.current;if(!(!re||typeof x!="function"))return re.addEventListener(Y,x,U),()=>{re.removeEventListener(Y,x,U)}},[m==null?void 0:m.current,x])}t.useLayoutEffect(()=>{if(m.current===null)return;const R=new Map;for(const x in T)bs(m.current,x,T[x]),h.current.delete(x),R.set(x,T[x]);for(const[x,U]of h.current)bs(m.current,x,void 0);h.current=R})}if(typeof window>"u"&&(i!=null&&i.getTemplateHTML)&&(i!=null&&i.shadowRootOptions)){const{mode:R,delegatesFocus:x}=i.shadowRootOptions,U=t.createElement("template",{shadowrootmode:R,shadowrootdelegatesfocus:x,dangerouslySetInnerHTML:{__html:i.getTemplateHTML(f,y)},key:"ce-la-react-ssr-template-shadow-root"});A.children=[U,A.children]}return t.createElement(e,{...s,...A,ref:t.useCallback(R=>{m.current=R,typeof b=="function"?b(R):b!==null&&(b.current=R)},[b])},A.children)});return k.displayName=r??i.name,k}function bs(t,e,i){var a;t[e]=i,i==null&&e in(((a=globalThis.HTMLElement)==null?void 0:a.prototype)??{})&&t.removeAttribute(e)}const p={MEDIA_PLAY_REQUEST:"mediaplayrequest",MEDIA_PAUSE_REQUEST:"mediapauserequest",MEDIA_MUTE_REQUEST:"mediamuterequest",MEDIA_UNMUTE_REQUEST:"mediaunmuterequest",MEDIA_LOOP_REQUEST:"medialooprequest",MEDIA_VOLUME_REQUEST:"mediavolumerequest",MEDIA_SEEK_REQUEST:"mediaseekrequest",MEDIA_AIRPLAY_REQUEST:"mediaairplayrequest",MEDIA_ENTER_FULLSCREEN_REQUEST:"mediaenterfullscreenrequest",MEDIA_EXIT_FULLSCREEN_REQUEST:"mediaexitfullscreenrequest",MEDIA_PREVIEW_REQUEST:"mediapreviewrequest",MEDIA_ENTER_PIP_REQUEST:"mediaenterpiprequest",MEDIA_EXIT_PIP_REQUEST:"mediaexitpiprequest",MEDIA_ENTER_CAST_REQUEST:"mediaentercastrequest",MEDIA_EXIT_CAST_REQUEST:"mediaexitcastrequest",MEDIA_SHOW_TEXT_TRACKS_REQUEST:"mediashowtexttracksrequest",MEDIA_HIDE_TEXT_TRACKS_REQUEST:"mediahidetexttracksrequest",MEDIA_SHOW_SUBTITLES_REQUEST:"mediashowsubtitlesrequest",MEDIA_DISABLE_SUBTITLES_REQUEST:"mediadisablesubtitlesrequest",MEDIA_TOGGLE_SUBTITLES_REQUEST:"mediatogglesubtitlesrequest",MEDIA_PLAYBACK_RATE_REQUEST:"mediaplaybackraterequest",MEDIA_RENDITION_REQUEST:"mediarenditionrequest",MEDIA_AUDIO_TRACK_REQUEST:"mediaaudiotrackrequest",MEDIA_SEEK_TO_LIVE_REQUEST:"mediaseektoliverequest",REGISTER_MEDIA_STATE_RECEIVER:"registermediastatereceiver",UNREGISTER_MEDIA_STATE_RECEIVER:"unregistermediastatereceiver"},C={MEDIA_CHROME_ATTRIBUTES:"mediachromeattributes",MEDIA_CONTROLLER:"mediacontroller"},Js={MEDIA_AIRPLAY_UNAVAILABLE:"mediaAirplayUnavailable",MEDIA_AUDIO_TRACK_ENABLED:"mediaAudioTrackEnabled",MEDIA_AUDIO_TRACK_LIST:"mediaAudioTrackList",MEDIA_AUDIO_TRACK_UNAVAILABLE:"mediaAudioTrackUnavailable",MEDIA_BUFFERED:"mediaBuffered",MEDIA_CAST_UNAVAILABLE:"mediaCastUnavailable",MEDIA_CHAPTERS_CUES:"mediaChaptersCues",MEDIA_CURRENT_TIME:"mediaCurrentTime",MEDIA_DURATION:"mediaDuration",MEDIA_ENDED:"mediaEnded",MEDIA_ERROR:"mediaError",MEDIA_ERROR_CODE:"mediaErrorCode",MEDIA_ERROR_MESSAGE:"mediaErrorMessage",MEDIA_FULLSCREEN_UNAVAILABLE:"mediaFullscreenUnavailable",MEDIA_HAS_PLAYED:"mediaHasPlayed",MEDIA_HEIGHT:"mediaHeight",MEDIA_IS_AIRPLAYING:"mediaIsAirplaying",MEDIA_IS_CASTING:"mediaIsCasting",MEDIA_IS_FULLSCREEN:"mediaIsFullscreen",MEDIA_IS_PIP:"mediaIsPip",MEDIA_LOADING:"mediaLoading",MEDIA_MUTED:"mediaMuted",MEDIA_LOOP:"mediaLoop",MEDIA_PAUSED:"mediaPaused",MEDIA_PIP_UNAVAILABLE:"mediaPipUnavailable",MEDIA_PLAYBACK_RATE:"mediaPlaybackRate",MEDIA_PREVIEW_CHAPTER:"mediaPreviewChapter",MEDIA_PREVIEW_COORDS:"mediaPreviewCoords",MEDIA_PREVIEW_IMAGE:"mediaPreviewImage",MEDIA_PREVIEW_TIME:"mediaPreviewTime",MEDIA_RENDITION_LIST:"mediaRenditionList",MEDIA_RENDITION_SELECTED:"mediaRenditionSelected",MEDIA_RENDITION_UNAVAILABLE:"mediaRenditionUnavailable",MEDIA_SEEKABLE:"mediaSeekable",MEDIA_STREAM_TYPE:"mediaStreamType",MEDIA_SUBTITLES_LIST:"mediaSubtitlesList",MEDIA_SUBTITLES_SHOWING:"mediaSubtitlesShowing",MEDIA_TARGET_LIVE_WINDOW:"mediaTargetLiveWindow",MEDIA_TIME_IS_LIVE:"mediaTimeIsLive",MEDIA_VOLUME:"mediaVolume",MEDIA_VOLUME_LEVEL:"mediaVolumeLevel",MEDIA_VOLUME_UNAVAILABLE:"mediaVolumeUnavailable",MEDIA_LANG:"mediaLang",MEDIA_WIDTH:"mediaWidth"},js=Object.entries(Js),o=js.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{}),yn={USER_INACTIVE_CHANGE:"userinactivechange",BREAKPOINTS_CHANGE:"breakpointchange",BREAKPOINTS_COMPUTED:"breakpointscomputed"},Rt=js.reduce((t,[e,i])=>(t[e]=i.toLowerCase(),t),{...yn});Object.entries(Rt).reduce((t,[e,i])=>{const a=o[e];return a&&(t[i]=a),t},{userinactivechange:"userinactive"});const kn=Object.entries(o).reduce((t,[e,i])=>{const a=Rt[e];return a&&(t[i]=a),t},{userinactive:"userinactivechange"}),De={SUBTITLES:"subtitles",CAPTIONS:"captions",CHAPTERS:"chapters",METADATA:"metadata"},Lt={DISABLED:"disabled",SHOWING:"showing"},Ba={MOUSE:"mouse",PEN:"pen",TOUCH:"touch"},oe={UNAVAILABLE:"unavailable",UNSUPPORTED:"unsupported"},Pe={LIVE:"live",ON_DEMAND:"on-demand",UNKNOWN:"unknown"},Sn={FULLSCREEN:"fullscreen"};function In(t){return t==null?void 0:t.map(Mn).join(" ")}function Mn(t){if(t){const{id:e,width:i,height:a}=t;return[e,i,a].filter(r=>r!=null).join(":")}}function wn(t){return t==null?void 0:t.map(Ln).join(" ")}function Ln(t){if(t){const{id:e,kind:i,language:a,label:r}=t;return[e,i,a,r].filter(s=>s!=null).join(":")}}function Ar(t){return typeof t=="number"&&!Number.isNaN(t)&&Number.isFinite(t)}const eo=t=>new Promise(e=>setTimeout(e,t)),Dn={"Start airplay":"Start airplay","Stop airplay":"Stop airplay",Audio:"Audio",Captions:"Captions","Enable captions":"Enable captions","Disable captions":"Disable captions","Start casting":"Start casting","Stop casting":"Stop casting","Enter fullscreen mode":"Enter fullscreen mode","Exit fullscreen mode":"Exit fullscreen mode",Mute:"Mute",Unmute:"Unmute",Loop:"Loop","Enter picture in picture mode":"Enter picture in picture mode","Exit picture in picture mode":"Exit picture in picture mode",Play:"Play",Pause:"Pause","Playback rate":"Playback rate","Playback rate {playbackRate}":"Playback rate {playbackRate}",Quality:"Quality","Seek backward":"Seek backward","Seek forward":"Seek forward",Settings:"Settings",Auto:"Auto","audio player":"audio player","video player":"video player",volume:"volume",seek:"seek","closed captions":"closed captions","current playback rate":"current playback rate","playback time":"playback time","media loading":"media loading",settings:"settings","audio tracks":"audio tracks",quality:"quality",play:"play",pause:"pause",mute:"mute",unmute:"unmute","chapter: {chapterName}":"chapter: {chapterName}",live:"live",Off:"Off","start airplay":"start airplay","stop airplay":"stop airplay","start casting":"start casting","stop casting":"stop casting","enter fullscreen mode":"enter fullscreen mode","exit fullscreen mode":"exit fullscreen mode","enter picture in picture mode":"enter picture in picture mode","exit picture in picture mode":"exit picture in picture mode","seek to live":"seek to live","playing live":"playing live","seek back {seekOffset} seconds":"seek back {seekOffset} seconds","seek forward {seekOffset} seconds":"seek forward {seekOffset} seconds","Network Error":"Network Error","Decode Error":"Decode Error","Source Not Supported":"Source Not Supported","Encryption Error":"Encryption Error","A network error caused the media download to fail.":"A network error caused the media download to fail.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"An unsupported error occurred. The server or network failed, or your browser does not support this format.","The media is encrypted and there are no keys to decrypt it.":"The media is encrypted and there are no keys to decrypt it.",hour:"hour",hours:"hours",minute:"minute",minutes:"minutes",second:"second",seconds:"seconds","{time} remaining":"{time} remaining","{currentTime} of {totalTime}":"{currentTime} of {totalTime}","video not loaded, unknown time.":"video not loaded, unknown time."};var As;const Dt={en:Dn};let Ct=((As=globalThis.navigator)==null?void 0:As.language)||"en";const Cn=t=>{Ct=t},Ot=(t,e)=>{Dt[t]=e},Rn=t=>{var e,i,a;const[r]=Ct.split("-");return((e=Dt[Ct])==null?void 0:e[t])||((i=Dt[r])==null?void 0:i[t])||((a=Dt.en)==null?void 0:a[t])||t},xn=()=>{const[t]=Ct.split("-");return Dt[Ct]?Ct:Dt[t]?t:"en"},E=(t,e={})=>Rn(t).replace(/\{(\w+)\}/g,(i,a)=>a in e?String(e[a]):`{${a}}`),Ts=[{singular:"hour",plural:"hours"},{singular:"minute",plural:"minutes"},{singular:"second",plural:"seconds"}],Pn=(t,e)=>{const i=E(t===1?Ts[e].singular:Ts[e].plural);return`${t} ${i}`},ti=t=>{if(!Ar(t))return"";const e=Math.abs(t),i=e!==t,a=new Date(0,0,0,0,0,e,0),s=[a.getHours(),a.getMinutes(),a.getSeconds()].map((n,d)=>n&&Pn(n,d)).filter(n=>n).join(", ");return i?E("{time} remaining",{time:s}):s};function Ye(t,e){let i=!1;t<0&&(i=!0,t=0-t),t=t<0?0:t;let a=Math.floor(t%60),r=Math.floor(t/60%60),s=Math.floor(t/3600);const n=Math.floor(e/60%60),d=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(s=r=a="0"),s=s>0||d>0?s+":":"",r=((s||n>=10)&&r<10?"0"+r:r)+":",a=a<10?"0"+a:a,(i?"-":"")+s+r+a}class to{addEventListener(){}removeEventListener(){}dispatchEvent(){return!0}}class io extends to{}class ys extends io{constructor(){super(...arguments),this.role=null}}class On{observe(){}unobserve(){}disconnect(){}}const ao={createElement:function(){return new si.HTMLElement},createElementNS:function(){return new si.HTMLElement},addEventListener(){},removeEventListener(){},dispatchEvent(t){return!1}},si={ResizeObserver:On,document:ao,Node:io,Element:ys,HTMLElement:class extends ys{constructor(){super(...arguments),this.innerHTML=""}get content(){return new si.DocumentFragment}},DocumentFragment:class extends to{},customElements:{get:function(){},define:function(){},whenDefined:function(){}},localStorage:{getItem(t){return null},setItem(t,e){},removeItem(t){}},CustomEvent:function(){},getComputedStyle:function(){},navigator:{languages:[],get userAgent(){return""}},matchMedia(t){return{matches:!1,media:t}},DOMParser:class{parseFromString(e,i){return{body:{textContent:e}}}}},ro="global"in globalThis&&(globalThis==null?void 0:globalThis.global)===globalThis||typeof window>"u"||typeof window.customElements>"u",so=Object.keys(si).every(t=>t in globalThis),l=ro&&!so?si:globalThis,ae=ro&&!so?ao:globalThis.document,ks=new WeakMap,Tr=t=>{let e=ks.get(t);return e||ks.set(t,e=new Set),e},oo=new l.ResizeObserver(t=>{for(const e of t)for(const i of Tr(e.target))i(e)});function no(t,e){Tr(t).add(e),oo.observe(t)}function lo(t,e){const i=Tr(t);i.delete(e),i.size||oo.unobserve(t)}function _e(t){const e={};for(const i of t)e[i.name]=i.value;return e}function Un(t){var e;return(e=Fn(t))!=null?e:hi(t,"media-controller")}function Fn(t){var e;const{MEDIA_CONTROLLER:i}=C,a=t.getAttribute(i);if(a)return(e=$n(t))==null?void 0:e.getElementById(a)}const uo=(t,e,i=".value")=>{const a=t.querySelector(i);a&&(a.textContent=e)},Nn=(t,e)=>{const i=`slot[name="${e}"]`,a=t.shadowRoot.querySelector(i);return a?a.children:[]},co=(t,e)=>Nn(t,e)[0],Ut=(t,e)=>!t||!e?!1:t!=null&&t.contains(e)?!0:Ut(t,e.getRootNode().host),hi=(t,e)=>{if(!t)return null;const i=t.closest(e);return i||hi(t.getRootNode().host,e)};function ho(t=document){var e;const i=t==null?void 0:t.activeElement;return i?(e=ho(i.shadowRoot))!=null?e:i:null}function $n(t){var e;const i=(e=t==null?void 0:t.getRootNode)==null?void 0:e.call(t);return i instanceof ShadowRoot||i instanceof Document?i:null}function mo(t,{depth:e=3,checkOpacity:i=!0,checkVisibilityCSS:a=!0}={}){if(t.checkVisibility)return t.checkVisibility({checkOpacity:i,checkVisibilityCSS:a});let r=t;for(;r&&e>0;){const s=getComputedStyle(r);if(i&&s.opacity==="0"||a&&s.visibility==="hidden"||s.display==="none")return!1;r=r.parentElement,e--}return!0}function Bn(t,e,i,a){const r=a.x-i.x,s=a.y-i.y,n=r*r+s*s;if(n===0)return 0;const d=((t-i.x)*r+(e-i.y)*s)/n;return Math.max(0,Math.min(1,d))}function q(t,e){const i=Hn(t,a=>a===e);return i||po(t,e)}function Hn(t,e){var i,a;let r;for(r of(i=t.querySelectorAll("style:not([media])"))!=null?i:[]){let s;try{s=(a=r.sheet)==null?void 0:a.cssRules}catch{continue}for(const n of s??[])if(e(n.selectorText))return n}}function po(t,e){var i,a;const r=(i=t.querySelectorAll("style:not([media])"))!=null?i:[],s=r==null?void 0:r[r.length-1];if(!(s!=null&&s.sheet))return console.warn("Media Chrome: No style sheet found on style tag of",t),{style:{setProperty:()=>{},removeProperty:()=>"",getPropertyValue:()=>""}};const n=s==null?void 0:s.sheet.insertRule(`${e}{}`,s.sheet.cssRules.length);return(a=s.sheet.cssRules)==null?void 0:a[n]}function $(t,e,i=Number.NaN){const a=t.getAttribute(e);return a!=null?+a:i}function J(t,e,i){const a=+i;if(i==null||Number.isNaN(a)){t.hasAttribute(e)&&t.removeAttribute(e);return}$(t,e,void 0)!==a&&t.setAttribute(e,`${a}`)}function I(t,e){return t.hasAttribute(e)}function M(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}I(t,e)!=i&&t.toggleAttribute(e,i)}function W(t,e,i=null){var a;return(a=t.getAttribute(e))!=null?a:i}function B(t,e,i){if(i==null){t.hasAttribute(e)&&t.removeAttribute(e);return}const a=`${i}`;W(t,e,void 0)!==a&&t.setAttribute(e,a)}var Eo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},he=(t,e,i)=>(Eo(t,e,"read from private field"),i?i.call(t):e.get(t)),Wn=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ei=(t,e,i,a)=>(Eo(t,e,"write to private field"),e.set(t,i),i),te;function Vn(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
        box-sizing: border-box;
      }
    </style>
  `}class Ea extends l.HTMLElement{constructor(){if(super(),Wn(this,te,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PAUSED]}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===C.MEDIA_CONTROLLER&&(i&&((s=(r=he(this,te))==null?void 0:r.unassociateElement)==null||s.call(r,this),Ei(this,te,null)),a&&this.isConnected&&(Ei(this,te,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=he(this,te))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i;this.tabIndex=-1,this.setAttribute("aria-hidden","true"),Ei(this,te,Kn(this)),this.getAttribute(C.MEDIA_CONTROLLER)&&((i=(e=he(this,te))==null?void 0:e.associateElement)==null||i.call(e,this)),he(this,te)&&(he(this,te).addEventListener("pointerdown",this),he(this,te).addEventListener("click",this),he(this,te).hasAttribute("tabindex")||(he(this,te).tabIndex=0))}disconnectedCallback(){var e,i,a,r;this.getAttribute(C.MEDIA_CONTROLLER)&&((i=(e=he(this,te))==null?void 0:e.unassociateElement)==null||i.call(e,this)),(a=he(this,te))==null||a.removeEventListener("pointerdown",this),(r=he(this,te))==null||r.removeEventListener("click",this),Ei(this,te,null)}handleEvent(e){var i;const a=(i=e.composedPath())==null?void 0:i[0];if(["video","media-controller"].includes(a==null?void 0:a.localName)){if(e.type==="pointerdown")this._pointerType=e.pointerType;else if(e.type==="click"){const{clientX:s,clientY:n}=e,{left:d,top:u,width:k,height:y}=this.getBoundingClientRect(),b=s-d,m=n-u;if(b<0||m<0||b>k||m>y||k===0&&y===0)return;const h=this._pointerType||"mouse";if(this._pointerType=void 0,h===Ba.TOUCH){this.handleTap(e);return}else if(h===Ba.MOUSE||h===Ba.PEN){this.handleMouseClick(e);return}}}}get mediaPaused(){return I(this,o.MEDIA_PAUSED)}set mediaPaused(e){M(this,o.MEDIA_PAUSED,e)}handleTap(e){}handleMouseClick(e){const i=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(i,{composed:!0,bubbles:!0}))}}te=new WeakMap;Ea.shadowRootOptions={mode:"open"};Ea.getTemplateHTML=Vn;function Kn(t){var e;const i=t.getAttribute(C.MEDIA_CONTROLLER);return i?(e=t.getRootNode())==null?void 0:e.getElementById(i):hi(t,"media-controller")}l.customElements.get("media-gesture-receiver")||l.customElements.define("media-gesture-receiver",Ea);var Ka=Ea,yr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},H=(t,e,i)=>(yr(t,e,"read from private field"),i?i.call(t):e.get(t)),ie=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},me=(t,e,i,a)=>(yr(t,e,"write to private field"),e.set(t,i),i),ge=(t,e,i)=>(yr(t,e,"access private method"),i),Vt,ta,mt,xt,Mt,Ga,pt,Mi,qa,vo,Qa,fo,oi,va,fa,kr,Pt,ni,Be,wi;const g={AUDIO:"audio",AUTOHIDE:"autohide",BREAKPOINTS:"breakpoints",GESTURES_DISABLED:"gesturesdisabled",KEYBOARD_CONTROL:"keyboardcontrol",NO_AUTOHIDE:"noautohide",USER_INACTIVE:"userinactive",AUTOHIDE_OVER_CONTROLS:"autohideovercontrols"};function Gn(t){return`
    <style>
      
      :host([${o.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
        outline: none;
      }

      :host {
        box-sizing: border-box;
        position: relative;
        display: inline-block;
        line-height: 0;
        background-color: var(--media-background-color, #000);
        overflow: hidden;
      }

      :host(:not([${g.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-flow: column nowrap;
        align-items: start;
        pointer-events: none;
        background: none;
      }

      slot[name=media] {
        display: var(--media-slot-display, contents);
      }

      
      :host([${g.AUDIO}]) slot[name=media] {
        display: var(--media-slot-display, none);
      }

      
      :host([${g.AUDIO}]) [part~=layer][part~=gesture-layer] {
        height: 0;
        display: block;
      }

      
      :host(:not([${g.AUDIO}])[${g.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
          :host(:not([${g.AUDIO}])[${g.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
        display: none;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
        pointer-events: auto;
      }

      :host(:not([${g.AUDIO}])) *[part~=layer][part~=centered-layer] {
        align-items: center;
        justify-content: center;
      }

      :host(:not([${g.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
      :host(:not([${g.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
        align-self: stretch;
        flex-grow: 1;
      }

      slot[name=middle-chrome] {
        display: inline;
        flex-grow: 1;
        pointer-events: none;
        background: none;
      }

      
      ::slotted([slot=media]),
      ::slotted([slot=poster]) {
        width: 100%;
        height: 100%;
      }

      
      :host(:not([${g.AUDIO}])) .spacer {
        flex-grow: 1;
      }

      
      :host(:-webkit-full-screen) {
        
        width: 100% !important;
        height: 100% !important;
      }

      
      ::slotted(:not([slot=media]):not([slot=poster]):not([${g.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
        opacity: 1;
        transition: var(--media-control-transition-in, opacity 0.25s);
      }

      
      :host([${g.USER_INACTIVE}]:not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_AIRPLAYING}]):not([${o.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${g.NO_AUTOHIDE}]):not([role=dialog])) {
        opacity: 0;
        transition: var(--media-control-transition-out, opacity 1s);
      }

      :host([${g.USER_INACTIVE}]:not([${g.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) ::slotted([slot=media]) {
        cursor: none;
      }

      :host([${g.USER_INACTIVE}][${g.AUTOHIDE_OVER_CONTROLS}]:not([${g.NO_AUTOHIDE}]):not([${o.MEDIA_PAUSED}]):not([${o.MEDIA_IS_CASTING}]):not([${g.AUDIO}])) * {
        --media-cursor: none;
        cursor: none;
      }


      ::slotted(media-control-bar)  {
        align-self: stretch;
      }

      
      :host(:not([${g.AUDIO}])[${o.MEDIA_HAS_PLAYED}]) slot[name=poster] {
        display: none;
      }

      ::slotted([role=dialog]) {
        width: 100%;
        height: 100%;
        align-self: center;
      }

      ::slotted([role=menu]) {
        align-self: end;
      }
    </style>

    <slot name="media" part="layer media-layer"></slot>
    <slot name="poster" part="layer poster-layer"></slot>
    <slot name="gestures-chrome" part="layer gesture-layer">
      <media-gesture-receiver slot="gestures-chrome">
        <template shadowrootmode="${Ka.shadowRootOptions.mode}">
          ${Ka.getTemplateHTML({})}
        </template>
      </media-gesture-receiver>
    </slot>
    <span part="layer vertical-layer">
      <slot name="top-chrome" part="top chrome"></slot>
      <slot name="middle-chrome" part="middle chrome"></slot>
      <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
      
      <slot part="bottom chrome"></slot>
    </span>
    <slot name="dialog" part="layer dialog-layer"></slot>
  `}const qn=Object.values(o),Qn="sm:384 md:576 lg:768 xl:960";function Yn(t){go(t.target,t.contentRect.width)}function go(t,e){var i;if(!t.isConnected)return;const a=(i=t.getAttribute(g.BREAKPOINTS))!=null?i:Qn,r=zn(a),s=Zn(r,e);let n=!1;if(Object.keys(r).forEach(d=>{if(s.includes(d)){t.hasAttribute(`breakpoint${d}`)||(t.setAttribute(`breakpoint${d}`,""),n=!0);return}t.hasAttribute(`breakpoint${d}`)&&(t.removeAttribute(`breakpoint${d}`),n=!0)}),n){const d=new CustomEvent(Rt.BREAKPOINTS_CHANGE,{detail:s});t.dispatchEvent(d)}t.breakpointsComputed||(t.breakpointsComputed=!0,t.dispatchEvent(new CustomEvent(Rt.BREAKPOINTS_COMPUTED,{bubbles:!0,composed:!0})))}function zn(t){const e=t.split(/\s+/);return Object.fromEntries(e.map(i=>i.split(":")))}function Zn(t,e){return Object.keys(t).filter(i=>e>=parseInt(t[i]))}class mi extends l.HTMLElement{constructor(){if(super(),ie(this,qa),ie(this,Qa),ie(this,oi),ie(this,fa),ie(this,Pt),ie(this,Vt,void 0),ie(this,ta,0),ie(this,mt,null),ie(this,xt,null),ie(this,Mt,void 0),this.breakpointsComputed=!1,ie(this,Ga,e=>{const i=this.media;for(const a of e){if(a.type!=="childList")continue;const r=a.removedNodes;for(const s of r){if(s.slot!="media"||a.target!=this)continue;let n=a.previousSibling&&a.previousSibling.previousElementSibling;if(!n||!i)this.mediaUnsetCallback(s);else{let d=n.slot!=="media";for(;(n=n.previousSibling)!==null;)n.slot=="media"&&(d=!1);d&&this.mediaUnsetCallback(s)}}if(i)for(const s of a.addedNodes)s===i&&this.handleMediaUpdated(i)}}),ie(this,pt,!1),ie(this,Mi,e=>{H(this,pt)||(setTimeout(()=>{Yn(e),me(this,pt,!1)},0),me(this,pt,!0))}),ie(this,Be,void 0),ie(this,wi,()=>{if(!H(this,Be).assignedElements({flatten:!0}).length){H(this,mt)&&this.mediaUnsetCallback(H(this,mt));return}this.handleMediaUpdated(this.media)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}me(this,Vt,new MutationObserver(H(this,Ga)))}static get observedAttributes(){return[g.AUTOHIDE,g.GESTURES_DISABLED].concat(qn).filter(e=>![o.MEDIA_RENDITION_LIST,o.MEDIA_AUDIO_TRACK_LIST,o.MEDIA_CHAPTERS_CUES,o.MEDIA_WIDTH,o.MEDIA_HEIGHT,o.MEDIA_ERROR,o.MEDIA_ERROR_MESSAGE].includes(e))}attributeChangedCallback(e,i,a){e.toLowerCase()==g.AUTOHIDE&&(this.autohide=a)}get media(){let e=this.querySelector(":scope > [slot=media]");return(e==null?void 0:e.nodeName)=="SLOT"&&(e=e.assignedElements({flatten:!0})[0]),e}async handleMediaUpdated(e){e&&(me(this,mt,e),e.localName.includes("-")&&await l.customElements.whenDefined(e.localName),this.mediaSetCallback(e))}connectedCallback(){var e;H(this,Vt).observe(this,{childList:!0,subtree:!0}),no(this,H(this,Mi));const i=this.getAttribute(g.AUDIO)!=null,a=E(i?"audio player":"video player");this.setAttribute("role","region"),this.setAttribute("aria-label",a),this.handleMediaUpdated(this.media),this.setAttribute(g.USER_INACTIVE,""),go(this,this.getBoundingClientRect().width);const r=this.querySelector(":scope > slot[slot=media]");r&&(me(this,Be,r),H(this,Be).addEventListener("slotchange",H(this,wi))),this.addEventListener("pointerdown",this),this.addEventListener("pointermove",this),this.addEventListener("pointerup",this),this.addEventListener("mouseleave",this),this.addEventListener("keyup",this),(e=l.window)==null||e.addEventListener("mouseup",this)}disconnectedCallback(){var e;lo(this,H(this,Mi)),clearTimeout(H(this,xt)),H(this,Vt).disconnect(),this.media&&this.mediaUnsetCallback(this.media),(e=l.window)==null||e.removeEventListener("mouseup",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointermove",this),this.removeEventListener("pointerup",this),this.removeEventListener("mouseleave",this),this.removeEventListener("keyup",this),H(this,Be)&&(H(this,Be).removeEventListener("slotchange",H(this,wi)),me(this,Be,null)),me(this,pt,!1)}mediaSetCallback(e){}mediaUnsetCallback(e){me(this,mt,null)}handleEvent(e){switch(e.type){case"pointerdown":me(this,ta,e.timeStamp);break;case"pointermove":ge(this,qa,vo).call(this,e);break;case"pointerup":ge(this,Qa,fo).call(this,e);break;case"mouseleave":ge(this,oi,va).call(this);break;case"mouseup":this.removeAttribute(g.KEYBOARD_CONTROL);break;case"keyup":ge(this,Pt,ni).call(this),this.setAttribute(g.KEYBOARD_CONTROL,"");break}}set autohide(e){const i=Number(e);me(this,Mt,isNaN(i)?0:i)}get autohide(){return(H(this,Mt)===void 0?2:H(this,Mt)).toString()}get breakpoints(){return W(this,g.BREAKPOINTS)}set breakpoints(e){B(this,g.BREAKPOINTS,e)}get audio(){return I(this,g.AUDIO)}set audio(e){M(this,g.AUDIO,e)}get gesturesDisabled(){return I(this,g.GESTURES_DISABLED)}set gesturesDisabled(e){M(this,g.GESTURES_DISABLED,e)}get keyboardControl(){return I(this,g.KEYBOARD_CONTROL)}set keyboardControl(e){M(this,g.KEYBOARD_CONTROL,e)}get noAutohide(){return I(this,g.NO_AUTOHIDE)}set noAutohide(e){M(this,g.NO_AUTOHIDE,e)}get autohideOverControls(){return I(this,g.AUTOHIDE_OVER_CONTROLS)}set autohideOverControls(e){M(this,g.AUTOHIDE_OVER_CONTROLS,e)}get userInteractive(){return I(this,g.USER_INACTIVE)}set userInteractive(e){M(this,g.USER_INACTIVE,e)}}Vt=new WeakMap;ta=new WeakMap;mt=new WeakMap;xt=new WeakMap;Mt=new WeakMap;Ga=new WeakMap;pt=new WeakMap;Mi=new WeakMap;qa=new WeakSet;vo=function(t){if(t.pointerType!=="mouse"&&t.timeStamp-H(this,ta)<250)return;ge(this,fa,kr).call(this),clearTimeout(H(this,xt));const e=this.hasAttribute(g.AUTOHIDE_OVER_CONTROLS);([this,this.media].includes(t.target)||e)&&ge(this,Pt,ni).call(this)};Qa=new WeakSet;fo=function(t){if(t.pointerType==="touch"){const e=!this.hasAttribute(g.USER_INACTIVE);[this,this.media].includes(t.target)&&e?ge(this,oi,va).call(this):ge(this,Pt,ni).call(this)}else t.composedPath().some(e=>["media-play-button","media-fullscreen-button"].includes(e==null?void 0:e.localName))&&ge(this,Pt,ni).call(this)};oi=new WeakSet;va=function(){if(H(this,Mt)<0||this.hasAttribute(g.USER_INACTIVE))return;this.setAttribute(g.USER_INACTIVE,"");const t=new l.CustomEvent(Rt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!0});this.dispatchEvent(t)};fa=new WeakSet;kr=function(){if(!this.hasAttribute(g.USER_INACTIVE))return;this.removeAttribute(g.USER_INACTIVE);const t=new l.CustomEvent(Rt.USER_INACTIVE_CHANGE,{composed:!0,bubbles:!0,detail:!1});this.dispatchEvent(t)};Pt=new WeakSet;ni=function(){ge(this,fa,kr).call(this),clearTimeout(H(this,xt));const t=parseInt(this.autohide);t<0||me(this,xt,setTimeout(()=>{ge(this,oi,va).call(this)},t*1e3))};Be=new WeakMap;wi=new WeakMap;mi.shadowRootOptions={mode:"open"};mi.getTemplateHTML=Gn;l.customElements.get("media-container")||l.customElements.define("media-container",mi);var Xn=mi,_o=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},X=(t,e,i)=>(_o(t,e,"read from private field"),i?i.call(t):e.get(t)),Nt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},vi=(t,e,i,a)=>(_o(t,e,"write to private field"),e.set(t,i),i),Et,vt,ia,et,xe,He;class bo{constructor(e,i,{defaultValue:a}={defaultValue:void 0}){Nt(this,xe),Nt(this,Et,void 0),Nt(this,vt,void 0),Nt(this,ia,void 0),Nt(this,et,new Set),vi(this,Et,e),vi(this,vt,i),vi(this,ia,new Set(a))}[Symbol.iterator](){return X(this,xe,He).values()}get length(){return X(this,xe,He).size}get value(){var e;return(e=[...X(this,xe,He)].join(" "))!=null?e:""}set value(e){var i;e!==this.value&&(vi(this,et,new Set),this.add(...(i=e==null?void 0:e.split(" "))!=null?i:[]))}toString(){return this.value}item(e){return[...X(this,xe,He)][e]}values(){return X(this,xe,He).values()}forEach(e,i){X(this,xe,He).forEach(e,i)}add(...e){var i,a;e.forEach(r=>X(this,et).add(r)),!(this.value===""&&!((i=X(this,Et))!=null&&i.hasAttribute(`${X(this,vt)}`)))&&((a=X(this,Et))==null||a.setAttribute(`${X(this,vt)}`,`${this.value}`))}remove(...e){var i;e.forEach(a=>X(this,et).delete(a)),(i=X(this,Et))==null||i.setAttribute(`${X(this,vt)}`,`${this.value}`)}contains(e){return X(this,xe,He).has(e)}toggle(e,i){return typeof i<"u"?i?(this.add(e),!0):(this.remove(e),!1):this.contains(e)?(this.remove(e),!1):(this.add(e),!0)}replace(e,i){return this.remove(e),this.add(i),e===i}}Et=new WeakMap;vt=new WeakMap;ia=new WeakMap;et=new WeakMap;xe=new WeakSet;He=function(){return X(this,et).size?X(this,et):X(this,ia)};const Jn=(t="")=>t.split(/\s+/),Ao=(t="")=>{const[e,i,a]=t.split(":"),r=a?decodeURIComponent(a):void 0;return{kind:e==="cc"?De.CAPTIONS:De.SUBTITLES,language:i,label:r}},To=(t="",e={})=>Jn(t).map(i=>{const a=Ao(i);return{...e,...a}}),yo=t=>t?Array.isArray(t)?t.map(e=>typeof e=="string"?Ao(e):e):typeof t=="string"?To(t):[t]:[],jn=({kind:t,label:e,language:i}={kind:"subtitles"})=>e?`${t==="captions"?"cc":"sb"}:${i}:${encodeURIComponent(e)}`:i,Ya=(t=[])=>Array.prototype.map.call(t,jn).join(" "),el=(t,e)=>i=>i[t]===e,ko=t=>{const e=Object.entries(t).map(([i,a])=>el(i,a));return i=>e.every(a=>a(i))},ii=(t,e=[],i=[])=>{const a=yo(i).map(ko),r=s=>a.some(n=>n(s));Array.from(e).filter(r).forEach(s=>{s.mode=t})},ga=(t,e=()=>!0)=>{if(!(t!=null&&t.textTracks))return[];const i=typeof e=="function"?e:ko(e);return Array.from(t.textTracks).filter(i)},tl=t=>{var e;return!!((e=t.mediaSubtitlesShowing)!=null&&e.length)||t.hasAttribute(o.MEDIA_SUBTITLES_SHOWING)},il=t=>{var e;const{media:i,fullscreenElement:a}=t;try{const r=a&&"requestFullscreen"in a?"requestFullscreen":a&&"webkitRequestFullScreen"in a?"webkitRequestFullScreen":void 0;if(r){const s=(e=a[r])==null?void 0:e.call(a);if(s instanceof Promise)return s.catch(()=>{})}else i!=null&&i.webkitEnterFullscreen?i.webkitEnterFullscreen():i!=null&&i.requestFullscreen&&i.requestFullscreen()}catch(r){console.error(r)}},Ss="exitFullscreen"in ae?"exitFullscreen":"webkitExitFullscreen"in ae?"webkitExitFullscreen":"webkitCancelFullScreen"in ae?"webkitCancelFullScreen":void 0,al=t=>{var e;const{documentElement:i}=t;if(Ss){const a=(e=i==null?void 0:i[Ss])==null?void 0:e.call(i);if(a instanceof Promise)return a.catch(()=>{})}},Kt="fullscreenElement"in ae?"fullscreenElement":"webkitFullscreenElement"in ae?"webkitFullscreenElement":void 0,rl=t=>{const{documentElement:e,media:i}=t,a=e==null?void 0:e[Kt];return!a&&"webkitDisplayingFullscreen"in i&&"webkitPresentationMode"in i&&i.webkitDisplayingFullscreen&&i.webkitPresentationMode===Sn.FULLSCREEN?i:a},sl=t=>{var e;const{media:i,documentElement:a,fullscreenElement:r=i}=t;if(!i||!a)return!1;const s=rl(t);if(!s)return!1;if(s===r||s===i)return!0;if(s.localName.includes("-")){let n=s.shadowRoot;if(!(Kt in n))return Ut(s,r);for(;n!=null&&n[Kt];){if(n[Kt]===r)return!0;n=(e=n[Kt])==null?void 0:e.shadowRoot}}return!1},ol="fullscreenEnabled"in ae?"fullscreenEnabled":"webkitFullscreenEnabled"in ae?"webkitFullscreenEnabled":void 0,nl=t=>{const{documentElement:e,media:i}=t;return!!(e!=null&&e[ol])||i&&"webkitSupportsFullscreen"in i};let fi;const Sr=()=>{var t,e;return fi||(fi=(e=(t=ae)==null?void 0:t.createElement)==null?void 0:e.call(t,"video"),fi)},ll=async(t=Sr())=>{if(!t)return!1;const e=t.volume;t.volume=e/2+.1;const i=new AbortController,a=await Promise.race([dl(t,i.signal),ul(t,e)]);return i.abort(),a},dl=(t,e)=>new Promise(i=>{t.addEventListener("volumechange",()=>i(!0),{signal:e})}),ul=async(t,e)=>{for(let i=0;i<10;i++){if(t.volume===e)return!1;await eo(10)}return t.volume!==e},cl=/.*Version\/.*Safari\/.*/.test(l.navigator.userAgent),So=(t=Sr())=>l.matchMedia("(display-mode: standalone)").matches&&cl?!1:typeof(t==null?void 0:t.requestPictureInPicture)=="function",Io=(t=Sr())=>nl({documentElement:ae,media:t}),hl=Io(),ml=So(),pl=!!l.WebKitPlaybackTargetAvailabilityEvent,El=!!l.chrome,aa=t=>ga(t.media,e=>[De.SUBTITLES,De.CAPTIONS].includes(e.kind)).sort((e,i)=>e.kind>=i.kind?1:-1),Mo=t=>ga(t.media,e=>e.mode===Lt.SHOWING&&[De.SUBTITLES,De.CAPTIONS].includes(e.kind)),wo=(t,e)=>{const i=aa(t),a=Mo(t),r=!!a.length;if(i.length){if(e===!1||r&&e!==!0)ii(Lt.DISABLED,i,a);else if(e===!0||!r&&e!==!1){let s=i[0];const{options:n}=t;if(!(n!=null&&n.noSubtitlesLangPref)){const y=l.localStorage.getItem("media-chrome-pref-subtitles-lang"),b=y?[y,...l.navigator.languages]:l.navigator.languages,m=i.filter(h=>b.some(_=>h.language.toLowerCase().startsWith(_.split("-")[0]))).sort((h,_)=>{const f=b.findIndex(T=>h.language.toLowerCase().startsWith(T.split("-")[0])),A=b.findIndex(T=>_.language.toLowerCase().startsWith(T.split("-")[0]));return f-A});m[0]&&(s=m[0])}const{language:d,label:u,kind:k}=s;ii(Lt.DISABLED,i,a),ii(Lt.SHOWING,i,[{language:d,label:u,kind:k}])}}},Ir=(t,e)=>t===e?!0:t==null||e==null||typeof t!=typeof e?!1:typeof t=="number"&&Number.isNaN(t)&&Number.isNaN(e)?!0:typeof t!="object"?!1:Array.isArray(t)?vl(t,e):Object.entries(t).every(([i,a])=>i in e&&Ir(a,e[i])),vl=(t,e)=>{const i=Array.isArray(t),a=Array.isArray(e);return i!==a?!1:i||a?t.length!==e.length?!1:t.every((r,s)=>Ir(r,e[s])):!0},fl=Object.values(Pe);let ra;const gl=ll().then(t=>(ra=t,ra)),_l=async(...t)=>{await Promise.all(t.filter(e=>e).map(async e=>{if(!("localName"in e&&e instanceof l.HTMLElement))return;const i=e.localName;if(!i.includes("-"))return;const a=l.customElements.get(i);a&&e instanceof a||(await l.customElements.whenDefined(i),l.customElements.upgrade(e))}))},bl=new l.DOMParser,Al=t=>t&&(bl.parseFromString(t,"text/html").body.textContent||t),Gt={mediaError:{get(t,e){const{media:i}=t;if((e==null?void 0:e.type)!=="playing")return i==null?void 0:i.error},mediaEvents:["emptied","error","playing"]},mediaErrorCode:{get(t,e){var i;const{media:a}=t;if((e==null?void 0:e.type)!=="playing")return(i=a==null?void 0:a.error)==null?void 0:i.code},mediaEvents:["emptied","error","playing"]},mediaErrorMessage:{get(t,e){var i,a;const{media:r}=t;if((e==null?void 0:e.type)!=="playing")return(a=(i=r==null?void 0:r.error)==null?void 0:i.message)!=null?a:""},mediaEvents:["emptied","error","playing"]},mediaWidth:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoWidth)!=null?e:0},mediaEvents:["resize"]},mediaHeight:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.videoHeight)!=null?e:0},mediaEvents:["resize"]},mediaPaused:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.paused)!=null?e:!0},set(t,e){var i;const{media:a}=e;a&&(t?a.pause():(i=a.play())==null||i.catch(()=>{}))},mediaEvents:["play","playing","pause","emptied"]},mediaHasPlayed:{get(t,e){const{media:i}=t;return i?e?e.type==="playing":!i.paused:!1},mediaEvents:["playing","emptied"]},mediaEnded:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.ended)!=null?e:!1},mediaEvents:["seeked","ended","emptied"]},mediaPlaybackRate:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.playbackRate)!=null?e:1},set(t,e){const{media:i}=e;i&&Number.isFinite(+t)&&(i.playbackRate=+t)},mediaEvents:["ratechange","loadstart"]},mediaMuted:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.muted)!=null?e:!1},set(t,e){const{media:i,options:{noMutedPref:a}={}}=e;if(i){i.muted=t;try{const r=l.localStorage.getItem("media-chrome-pref-muted")!==null,s=i.hasAttribute("muted");if(a){r&&l.localStorage.removeItem("media-chrome-pref-muted");return}if(s&&!r)return;l.localStorage.setItem("media-chrome-pref-muted",t?"true":"false")}catch(r){console.debug("Error setting muted pref",r)}}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noMutedPref:i}}=e,{media:a}=e;if(!(!a||a.muted||i))try{const r=l.localStorage.getItem("media-chrome-pref-muted")==="true";Gt.mediaMuted.set(r,e),t(r)}catch(r){console.debug("Error getting muted pref",r)}}]},mediaLoop:{get(t){const{media:e}=t;return e==null?void 0:e.loop},set(t,e){const{media:i}=e;i&&(i.loop=t)},mediaEvents:["medialooprequest"]},mediaVolume:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.volume)!=null?e:1},set(t,e){const{media:i,options:{noVolumePref:a}={}}=e;if(i){try{t==null?l.localStorage.removeItem("media-chrome-pref-volume"):!i.hasAttribute("muted")&&!a&&l.localStorage.setItem("media-chrome-pref-volume",t.toString())}catch(r){console.debug("Error setting volume pref",r)}Number.isFinite(+t)&&(i.volume=+t)}},mediaEvents:["volumechange"],stateOwnersUpdateHandlers:[(t,e)=>{const{options:{noVolumePref:i}}=e;if(!i)try{const{media:a}=e;if(!a)return;const r=l.localStorage.getItem("media-chrome-pref-volume");if(r==null)return;Gt.mediaVolume.set(+r,e),t(+r)}catch(a){console.debug("Error getting volume pref",a)}}]},mediaVolumeLevel:{get(t){const{media:e}=t;return typeof(e==null?void 0:e.volume)>"u"?"high":e.muted||e.volume===0?"off":e.volume<.5?"low":e.volume<.75?"medium":"high"},mediaEvents:["volumechange"]},mediaCurrentTime:{get(t){var e;const{media:i}=t;return(e=i==null?void 0:i.currentTime)!=null?e:0},set(t,e){const{media:i}=e;!i||!Ar(t)||(i.currentTime=t)},mediaEvents:["timeupdate","loadedmetadata"]},mediaDuration:{get(t){const{media:e,options:{defaultDuration:i}={}}=t;return i&&(!e||!e.duration||Number.isNaN(e.duration)||!Number.isFinite(e.duration))?i:Number.isFinite(e==null?void 0:e.duration)?e.duration:Number.NaN},mediaEvents:["durationchange","loadedmetadata","emptied"]},mediaLoading:{get(t){const{media:e}=t;return(e==null?void 0:e.readyState)<3},mediaEvents:["waiting","playing","emptied"]},mediaSeekable:{get(t){var e;const{media:i}=t;if(!((e=i==null?void 0:i.seekable)!=null&&e.length))return;const a=i.seekable.start(0),r=i.seekable.end(i.seekable.length-1);if(!(!a&&!r))return[Number(a.toFixed(3)),Number(r.toFixed(3))]},mediaEvents:["loadedmetadata","emptied","progress","seekablechange"]},mediaBuffered:{get(t){var e;const{media:i}=t,a=(e=i==null?void 0:i.buffered)!=null?e:[];return Array.from(a).map((r,s)=>[Number(a.start(s).toFixed(3)),Number(a.end(s).toFixed(3))])},mediaEvents:["progress","emptied"]},mediaStreamType:{get(t){const{media:e,options:{defaultStreamType:i}={}}=t,a=[Pe.LIVE,Pe.ON_DEMAND].includes(i)?i:void 0;if(!e)return a;const{streamType:r}=e;if(fl.includes(r))return r===Pe.UNKNOWN?a:r;const s=e.duration;return s===1/0?Pe.LIVE:Number.isFinite(s)?Pe.ON_DEMAND:a},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange"]},mediaTargetLiveWindow:{get(t){const{media:e}=t;if(!e)return Number.NaN;const{targetLiveWindow:i}=e,a=Gt.mediaStreamType.get(t);return(i==null||Number.isNaN(i))&&a===Pe.LIVE?0:i},mediaEvents:["emptied","durationchange","loadedmetadata","streamtypechange","targetlivewindowchange"]},mediaTimeIsLive:{get(t){const{media:e,options:{liveEdgeOffset:i=10}={}}=t;if(!e)return!1;if(typeof e.liveEdgeStart=="number")return Number.isNaN(e.liveEdgeStart)?!1:e.currentTime>=e.liveEdgeStart;if(!(Gt.mediaStreamType.get(t)===Pe.LIVE))return!1;const r=e.seekable;if(!r)return!0;if(!r.length)return!1;const s=r.end(r.length-1)-i;return e.currentTime>=s},mediaEvents:["playing","timeupdate","progress","waiting","emptied"]},mediaSubtitlesList:{get(t){return aa(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack"]},mediaSubtitlesShowing:{get(t){return Mo(t).map(({kind:e,label:i,language:a})=>({kind:e,label:i,language:a}))},mediaEvents:["loadstart"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i,a;const{media:r,options:s}=e;if(!r)return;const n=d=>{var u;!s.defaultSubtitles||d&&![De.CAPTIONS,De.SUBTITLES].includes((u=d==null?void 0:d.track)==null?void 0:u.kind)||wo(e,!0)};return r.addEventListener("loadstart",n),(i=r.textTracks)==null||i.addEventListener("addtrack",n),(a=r.textTracks)==null||a.addEventListener("removetrack",n),()=>{var d,u;r.removeEventListener("loadstart",n),(d=r.textTracks)==null||d.removeEventListener("addtrack",n),(u=r.textTracks)==null||u.removeEventListener("removetrack",n)}}]},mediaChaptersCues:{get(t){var e;const{media:i}=t;if(!i)return[];const[a]=ga(i,{kind:De.CHAPTERS});return Array.from((e=a==null?void 0:a.cues)!=null?e:[]).map(({text:r,startTime:s,endTime:n})=>({text:Al(r),startTime:s,endTime:n}))},mediaEvents:["loadstart","loadedmetadata"],textTracksEvents:["addtrack","removetrack","change"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;if(!a)return;const r=a.querySelector('track[kind="chapters"][default][src]'),s=(i=a.shadowRoot)==null?void 0:i.querySelector(':is(video,audio) > track[kind="chapters"][default][src]');return r==null||r.addEventListener("load",t),s==null||s.addEventListener("load",t),()=>{r==null||r.removeEventListener("load",t),s==null||s.removeEventListener("load",t)}}]},mediaIsPip:{get(t){var e,i;const{media:a,documentElement:r}=t;if(!a||!r||!r.pictureInPictureElement)return!1;if(r.pictureInPictureElement===a)return!0;if(r.pictureInPictureElement instanceof HTMLMediaElement)return(e=a.localName)!=null&&e.includes("-")?Ut(a,r.pictureInPictureElement):!1;if(r.pictureInPictureElement.localName.includes("-")){let s=r.pictureInPictureElement.shadowRoot;for(;s!=null&&s.pictureInPictureElement;){if(s.pictureInPictureElement===a)return!0;s=(i=s.pictureInPictureElement)==null?void 0:i.shadowRoot}}return!1},set(t,e){const{media:i}=e;if(i)if(t){if(!ae.pictureInPictureEnabled){console.warn("MediaChrome: Picture-in-picture is not enabled");return}if(!i.requestPictureInPicture){console.warn("MediaChrome: The current media does not support picture-in-picture");return}const a=()=>{console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.")};i.requestPictureInPicture().catch(r=>{if(r.code===11){if(!i.src){console.warn("MediaChrome: The media is not ready for picture-in-picture. It must have a src set.");return}if(i.readyState===0&&i.preload==="none"){const s=()=>{i.removeEventListener("loadedmetadata",n),i.preload="none"},n=()=>{i.requestPictureInPicture().catch(a),s()};i.addEventListener("loadedmetadata",n),i.preload="metadata",setTimeout(()=>{i.readyState===0&&a(),s()},1e3)}else throw r}else throw r})}else ae.pictureInPictureElement&&ae.exitPictureInPicture()},mediaEvents:["enterpictureinpicture","leavepictureinpicture"]},mediaRenditionList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.videoRenditions)!=null?e:[]].map(a=>({...a}))},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaRenditionSelected:{get(t){var e,i,a;const{media:r}=t;return(a=(i=r==null?void 0:r.videoRenditions)==null?void 0:i[(e=r.videoRenditions)==null?void 0:e.selectedIndex])==null?void 0:a.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.videoRenditions)){console.warn("MediaController: Rendition selection not supported by this media.");return}const a=t,r=Array.prototype.findIndex.call(i.videoRenditions,s=>s.id==a);i.videoRenditions.selectedIndex!=r&&(i.videoRenditions.selectedIndex=r)},mediaEvents:["emptied"],videoRenditionsEvents:["addrendition","removerendition","change"]},mediaAudioTrackList:{get(t){var e;const{media:i}=t;return[...(e=i==null?void 0:i.audioTracks)!=null?e:[]]},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaAudioTrackEnabled:{get(t){var e,i;const{media:a}=t;return(i=[...(e=a==null?void 0:a.audioTracks)!=null?e:[]].find(r=>r.enabled))==null?void 0:i.id},set(t,e){const{media:i}=e;if(!(i!=null&&i.audioTracks)){console.warn("MediaChrome: Audio track selection not supported by this media.");return}const a=t;for(const r of i.audioTracks)r.enabled=a==r.id},mediaEvents:["emptied"],audioTracksEvents:["addtrack","removetrack","change"]},mediaIsFullscreen:{get(t){return sl(t)},set(t,e,i){var a,r;t?(il(e),i.detail&&!((a=e.media)!=null&&a.inert)&&((r=e.media)==null||r.focus())):al(e)},rootEvents:["fullscreenchange","webkitfullscreenchange"],mediaEvents:["webkitbeginfullscreen","webkitendfullscreen","webkitpresentationmodechanged"]},mediaIsCasting:{get(t){var e;const{media:i}=t;return!(i!=null&&i.remote)||((e=i.remote)==null?void 0:e.state)==="disconnected"?!1:i.remote.state==="connected"},set(t,e){var i,a;const{media:r}=e;if(r&&!(t&&((i=r.remote)==null?void 0:i.state)!=="disconnected")&&!(!t&&((a=r.remote)==null?void 0:a.state)!=="connected")){if(typeof r.remote.prompt!="function"){console.warn("MediaChrome: Casting is not supported in this environment");return}r.remote.prompt().catch(()=>{})}},remoteEvents:["connect","connecting","disconnect"]},mediaIsAirplaying:{get(){return!1},set(t,e){const{media:i}=e;if(i){if(!(i.webkitShowPlaybackTargetPicker&&l.WebKitPlaybackTargetAvailabilityEvent)){console.error("MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment");return}i.webkitShowPlaybackTargetPicker()}},mediaEvents:["webkitcurrentplaybacktargetiswirelesschanged"]},mediaFullscreenUnavailable:{get(t){const{media:e}=t;if(!hl||!Io(e))return oe.UNSUPPORTED}},mediaPipUnavailable:{get(t){const{media:e}=t;if(!ml||!So(e))return oe.UNSUPPORTED;if(e!=null&&e.disablePictureInPicture)return oe.UNAVAILABLE}},mediaVolumeUnavailable:{get(t){const{media:e}=t;if(ra===!1||(e==null?void 0:e.volume)==null)return oe.UNSUPPORTED},stateOwnersUpdateHandlers:[t=>{ra==null&&gl.then(e=>t(e?void 0:oe.UNSUPPORTED))}]},mediaCastUnavailable:{get(t,{availability:e="not-available"}={}){var i;const{media:a}=t;if(!El||!((i=a==null?void 0:a.remote)!=null&&i.state))return oe.UNSUPPORTED;if(!(e==null||e==="available"))return oe.UNAVAILABLE},stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a==null?void 0:a.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaAirplayUnavailable:{get(t,e){if(!pl)return oe.UNSUPPORTED;if((e==null?void 0:e.availability)==="not-available")return oe.UNAVAILABLE},mediaEvents:["webkitplaybacktargetavailabilitychanged"],stateOwnersUpdateHandlers:[(t,e)=>{var i;const{media:a}=e;return a?(a.disableRemotePlayback||a.hasAttribute("disableremoteplayback")||(i=a==null?void 0:a.remote)==null||i.watchAvailability(s=>{t({availability:s?"available":"not-available"})}).catch(s=>{s.name==="NotSupportedError"?t({availability:null}):t({availability:"not-available"})}),()=>{var s;(s=a==null?void 0:a.remote)==null||s.cancelWatchAvailability().catch(()=>{})}):void 0}]},mediaRenditionUnavailable:{get(t){var e;const{media:i}=t;if(!(i!=null&&i.videoRenditions))return oe.UNSUPPORTED;if(!((e=i.videoRenditions)!=null&&e.length))return oe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],videoRenditionsEvents:["addrendition","removerendition"]},mediaAudioTrackUnavailable:{get(t){var e,i;const{media:a}=t;if(!(a!=null&&a.audioTracks))return oe.UNSUPPORTED;if(((i=(e=a.audioTracks)==null?void 0:e.length)!=null?i:0)<=1)return oe.UNAVAILABLE},mediaEvents:["emptied","loadstart"],audioTracksEvents:["addtrack","removetrack"]},mediaLang:{get(t){const{options:{mediaLang:e}={}}=t;return e??"en"}}},Tl={[p.MEDIA_PREVIEW_REQUEST](t,e,{detail:i}){var a,r,s;const{media:n}=e,d=i??void 0;let u,k;if(n&&d!=null){const[h]=ga(n,{kind:De.METADATA,label:"thumbnails"}),_=Array.prototype.find.call((a=h==null?void 0:h.cues)!=null?a:[],(f,A,T)=>A===0?f.endTime>d:A===T.length-1?f.startTime<=d:f.startTime<=d&&f.endTime>d);if(_){const f=/'^(?:[a-z]+:)?\/\//i.test(_.text)||(r=n==null?void 0:n.querySelector('track[label="thumbnails"]'))==null?void 0:r.src,A=new URL(_.text,f);k=new URLSearchParams(A.hash).get("#xywh").split(",").map(Q=>+Q),u=A.href}}const y=t.mediaDuration.get(e);let m=(s=t.mediaChaptersCues.get(e).find((h,_,f)=>_===f.length-1&&y===h.endTime?h.startTime<=d&&h.endTime>=d:h.startTime<=d&&h.endTime>d))==null?void 0:s.text;return i!=null&&m==null&&(m=""),{mediaPreviewTime:d,mediaPreviewImage:u,mediaPreviewCoords:k,mediaPreviewChapter:m}},[p.MEDIA_PAUSE_REQUEST](t,e){t["mediaPaused"].set(!0,e)},[p.MEDIA_PLAY_REQUEST](t,e){var i,a,r,s;const n="mediaPaused",u=t.mediaStreamType.get(e)===Pe.LIVE,k=!((i=e.options)!=null&&i.noAutoSeekToLive),y=t.mediaTargetLiveWindow.get(e)>0;if(u&&k&&!y){const b=(a=t.mediaSeekable.get(e))==null?void 0:a[1];if(b){const m=(s=(r=e.options)==null?void 0:r.seekToLiveOffset)!=null?s:0,h=b-m;t.mediaCurrentTime.set(h,e)}}t[n].set(!1,e)},[p.MEDIA_PLAYBACK_RATE_REQUEST](t,e,{detail:i}){const a="mediaPlaybackRate",r=i;t[a].set(r,e)},[p.MEDIA_MUTE_REQUEST](t,e){t["mediaMuted"].set(!0,e)},[p.MEDIA_UNMUTE_REQUEST](t,e){const i="mediaMuted";t.mediaVolume.get(e)||t.mediaVolume.set(.25,e),t[i].set(!1,e)},[p.MEDIA_LOOP_REQUEST](t,e,{detail:i}){const a="mediaLoop",r=!!i;return t[a].set(r,e),{mediaLoop:r}},[p.MEDIA_VOLUME_REQUEST](t,e,{detail:i}){const a="mediaVolume",r=i;r&&t.mediaMuted.get(e)&&t.mediaMuted.set(!1,e),t[a].set(r,e)},[p.MEDIA_SEEK_REQUEST](t,e,{detail:i}){const a="mediaCurrentTime",r=i;t[a].set(r,e)},[p.MEDIA_SEEK_TO_LIVE_REQUEST](t,e){var i,a,r;const s="mediaCurrentTime",n=(i=t.mediaSeekable.get(e))==null?void 0:i[1];if(Number.isNaN(Number(n)))return;const d=(r=(a=e.options)==null?void 0:a.seekToLiveOffset)!=null?r:0,u=n-d;t[s].set(u,e)},[p.MEDIA_SHOW_SUBTITLES_REQUEST](t,e,{detail:i}){var a;const{options:r}=e,s=aa(e),n=yo(i),d=(a=n[0])==null?void 0:a.language;d&&!r.noSubtitlesLangPref&&l.localStorage.setItem("media-chrome-pref-subtitles-lang",d),ii(Lt.SHOWING,s,n)},[p.MEDIA_DISABLE_SUBTITLES_REQUEST](t,e,{detail:i}){const a=aa(e),r=i??[];ii(Lt.DISABLED,a,r)},[p.MEDIA_TOGGLE_SUBTITLES_REQUEST](t,e,{detail:i}){wo(e,i)},[p.MEDIA_RENDITION_REQUEST](t,e,{detail:i}){const a="mediaRenditionSelected",r=i;t[a].set(r,e)},[p.MEDIA_AUDIO_TRACK_REQUEST](t,e,{detail:i}){const a="mediaAudioTrackEnabled",r=i;t[a].set(r,e)},[p.MEDIA_ENTER_PIP_REQUEST](t,e){const i="mediaIsPip";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[p.MEDIA_EXIT_PIP_REQUEST](t,e){t["mediaIsPip"].set(!1,e)},[p.MEDIA_ENTER_FULLSCREEN_REQUEST](t,e,i){const a="mediaIsFullscreen";t.mediaIsPip.get(e)&&t.mediaIsPip.set(!1,e),t[a].set(!0,e,i)},[p.MEDIA_EXIT_FULLSCREEN_REQUEST](t,e){t["mediaIsFullscreen"].set(!1,e)},[p.MEDIA_ENTER_CAST_REQUEST](t,e){const i="mediaIsCasting";t.mediaIsFullscreen.get(e)&&t.mediaIsFullscreen.set(!1,e),t[i].set(!0,e)},[p.MEDIA_EXIT_CAST_REQUEST](t,e){t["mediaIsCasting"].set(!1,e)},[p.MEDIA_AIRPLAY_REQUEST](t,e){t["mediaIsAirplaying"].set(!0,e)}},yl=({media:t,fullscreenElement:e,documentElement:i,stateMediator:a=Gt,requestMap:r=Tl,options:s={},monitorStateOwnersOnlyWithSubscriptions:n=!0})=>{const d=[],u={options:{...s}};let k=Object.freeze({mediaPreviewTime:void 0,mediaPreviewImage:void 0,mediaPreviewCoords:void 0,mediaPreviewChapter:void 0});const y=f=>{f!=null&&(Ir(f,k)||(k=Object.freeze({...k,...f}),d.forEach(A=>A(k))))},b=()=>{const f=Object.entries(a).reduce((A,[T,{get:Q}])=>(A[T]=Q(u),A),{});y(f)},m={};let h;const _=async(f,A)=>{var T,Q,Fe,R,x,U,Y,re,ze,Qr,Yr,zr,Zr,Xr,Jr,jr;const hn=!!h;if(h={...u,...h??{},...f},hn)return;await _l(...Object.values(f));const ot=d.length>0&&A===0&&n,es=u.media!==h.media,ts=((T=u.media)==null?void 0:T.textTracks)!==((Q=h.media)==null?void 0:Q.textTracks),is=((Fe=u.media)==null?void 0:Fe.videoRenditions)!==((R=h.media)==null?void 0:R.videoRenditions),as=((x=u.media)==null?void 0:x.audioTracks)!==((U=h.media)==null?void 0:U.audioTracks),rs=((Y=u.media)==null?void 0:Y.remote)!==((re=h.media)==null?void 0:re.remote),ss=u.documentElement!==h.documentElement,os=!!u.media&&(es||ot),ns=!!((ze=u.media)!=null&&ze.textTracks)&&(ts||ot),ls=!!((Qr=u.media)!=null&&Qr.videoRenditions)&&(is||ot),ds=!!((Yr=u.media)!=null&&Yr.audioTracks)&&(as||ot),us=!!((zr=u.media)!=null&&zr.remote)&&(rs||ot),cs=!!u.documentElement&&(ss||ot),$a=os||ns||ls||ds||us||cs,nt=d.length===0&&A===1&&n,hs=!!h.media&&(es||nt),ms=!!((Zr=h.media)!=null&&Zr.textTracks)&&(ts||nt),ps=!!((Xr=h.media)!=null&&Xr.videoRenditions)&&(is||nt),Es=!!((Jr=h.media)!=null&&Jr.audioTracks)&&(as||nt),vs=!!((jr=h.media)!=null&&jr.remote)&&(rs||nt),fs=!!h.documentElement&&(ss||nt),gs=hs||ms||ps||Es||vs||fs;if(!($a||gs)){Object.entries(h).forEach(([P,Ft])=>{u[P]=Ft}),b(),h=void 0;return}Object.entries(a).forEach(([P,{get:Ft,mediaEvents:mn=[],textTracksEvents:pn=[],videoRenditionsEvents:En=[],audioTracksEvents:vn=[],remoteEvents:fn=[],rootEvents:gn=[],stateOwnersUpdateHandlers:_n=[]}])=>{m[P]||(m[P]={});const se=F=>{const V=Ft(u,F);y({[P]:V})};let z;z=m[P].mediaEvents,mn.forEach(F=>{z&&os&&(u.media.removeEventListener(F,z),m[P].mediaEvents=void 0),hs&&(h.media.addEventListener(F,se),m[P].mediaEvents=se)}),z=m[P].textTracksEvents,pn.forEach(F=>{var V,ce;z&&ns&&((V=u.media.textTracks)==null||V.removeEventListener(F,z),m[P].textTracksEvents=void 0),ms&&((ce=h.media.textTracks)==null||ce.addEventListener(F,se),m[P].textTracksEvents=se)}),z=m[P].videoRenditionsEvents,En.forEach(F=>{var V,ce;z&&ls&&((V=u.media.videoRenditions)==null||V.removeEventListener(F,z),m[P].videoRenditionsEvents=void 0),ps&&((ce=h.media.videoRenditions)==null||ce.addEventListener(F,se),m[P].videoRenditionsEvents=se)}),z=m[P].audioTracksEvents,vn.forEach(F=>{var V,ce;z&&ds&&((V=u.media.audioTracks)==null||V.removeEventListener(F,z),m[P].audioTracksEvents=void 0),Es&&((ce=h.media.audioTracks)==null||ce.addEventListener(F,se),m[P].audioTracksEvents=se)}),z=m[P].remoteEvents,fn.forEach(F=>{var V,ce;z&&us&&((V=u.media.remote)==null||V.removeEventListener(F,z),m[P].remoteEvents=void 0),vs&&((ce=h.media.remote)==null||ce.addEventListener(F,se),m[P].remoteEvents=se)}),z=m[P].rootEvents,gn.forEach(F=>{z&&cs&&(u.documentElement.removeEventListener(F,z),m[P].rootEvents=void 0),fs&&(h.documentElement.addEventListener(F,se),m[P].rootEvents=se)});const pi=m[P].stateOwnersUpdateHandlers;if(pi&&$a&&(Array.isArray(pi)?pi:[pi]).forEach(V=>{typeof V=="function"&&V()}),gs){const F=_n.map(V=>V(se,h)).filter(V=>typeof V=="function");m[P].stateOwnersUpdateHandlers=F.length===1?F[0]:F}else $a&&(m[P].stateOwnersUpdateHandlers=void 0)}),Object.entries(h).forEach(([P,Ft])=>{u[P]=Ft}),b(),h=void 0};return _({media:t,fullscreenElement:e,documentElement:i,options:s}),{dispatch(f){const{type:A,detail:T}=f;if(r[A]&&k.mediaErrorCode==null){y(r[A](a,u,f));return}A==="mediaelementchangerequest"?_({media:T}):A==="fullscreenelementchangerequest"?_({fullscreenElement:T}):A==="documentelementchangerequest"?_({documentElement:T}):A==="optionschangerequest"&&(Object.entries(T??{}).forEach(([Q,Fe])=>{u.options[Q]=Fe}),b())},getState(){return k},subscribe(f){return _({},d.length+1),d.push(f),f(k),()=>{const A=d.indexOf(f);A>=0&&(_({},d.length-1),d.splice(A,1))}}}};var Mr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},v=(t,e,i)=>(Mr(t,e,"read from private field"),i?i.call(t):e.get(t)),le=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pe=(t,e,i,a)=>(Mr(t,e,"write to private field"),e.set(t,i),i),$t=(t,e,i)=>(Mr(t,e,"access private method"),i),Oe,qt,S,Le,Qt,Te,Li,Yt,Di,za,tt,Ci,Za,Xa,Lo;const Do=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Enter"," ","f","m","k","c","l","j",">","<","p"],Is=10,Ms=.025,ws=.25,kl=.25,Sl=2,c={DEFAULT_SUBTITLES:"defaultsubtitles",DEFAULT_STREAM_TYPE:"defaultstreamtype",DEFAULT_DURATION:"defaultduration",FULLSCREEN_ELEMENT:"fullscreenelement",HOTKEYS:"hotkeys",KEYBOARD_BACKWARD_SEEK_OFFSET:"keyboardbackwardseekoffset",KEYBOARD_FORWARD_SEEK_OFFSET:"keyboardforwardseekoffset",KEYBOARD_DOWN_VOLUME_STEP:"keyboarddownvolumestep",KEYBOARD_UP_VOLUME_STEP:"keyboardupvolumestep",KEYS_USED:"keysused",LANG:"lang",LOOP:"loop",LIVE_EDGE_OFFSET:"liveedgeoffset",NO_AUTO_SEEK_TO_LIVE:"noautoseektolive",NO_DEFAULT_STORE:"nodefaultstore",NO_HOTKEYS:"nohotkeys",NO_MUTED_PREF:"nomutedpref",NO_SUBTITLES_LANG_PREF:"nosubtitleslangpref",NO_VOLUME_PREF:"novolumepref",SEEK_TO_LIVE_OFFSET:"seektoliveoffset"};let Co=class extends mi{constructor(){super(),le(this,Di),le(this,Ci),le(this,Xa),this.mediaStateReceivers=[],this.associatedElementSubscriptions=new Map,le(this,Oe,new bo(this,c.HOTKEYS)),le(this,qt,void 0),le(this,S,void 0),le(this,Le,null),le(this,Qt,void 0),le(this,Te,void 0),le(this,Li,i=>{var a;(a=v(this,S))==null||a.dispatch(i)}),le(this,Yt,void 0),le(this,tt,i=>{const{key:a,shiftKey:r}=i;if(!(r&&(a==="/"||a==="?")||Do.includes(a))){this.removeEventListener("keyup",v(this,tt));return}this.keyboardShortcutHandler(i)}),this.associateElement(this);let e={};pe(this,Qt,i=>{Object.entries(i).forEach(([a,r])=>{if(a in e&&e[a]===r)return;this.propagateMediaState(a,r);const s=a.toLowerCase(),n=new l.CustomEvent(kn[s],{composed:!0,detail:r});this.dispatchEvent(n)}),e=i})}static get observedAttributes(){return super.observedAttributes.concat(c.NO_HOTKEYS,c.HOTKEYS,c.DEFAULT_STREAM_TYPE,c.DEFAULT_SUBTITLES,c.DEFAULT_DURATION,c.NO_MUTED_PREF,c.NO_VOLUME_PREF,c.LANG,c.LOOP,c.LIVE_EDGE_OFFSET,c.SEEK_TO_LIVE_OFFSET,c.NO_AUTO_SEEK_TO_LIVE)}get mediaStore(){return v(this,S)}set mediaStore(e){var i,a;if(v(this,S)&&((i=v(this,Te))==null||i.call(this),pe(this,Te,void 0)),pe(this,S,e),!v(this,S)&&!this.hasAttribute(c.NO_DEFAULT_STORE)){$t(this,Di,za).call(this);return}pe(this,Te,(a=v(this,S))==null?void 0:a.subscribe(v(this,Qt)))}get fullscreenElement(){var e;return(e=v(this,qt))!=null?e:this}set fullscreenElement(e){var i;this.hasAttribute(c.FULLSCREEN_ELEMENT)&&this.removeAttribute(c.FULLSCREEN_ELEMENT),pe(this,qt,e),(i=v(this,S))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}get defaultSubtitles(){return I(this,c.DEFAULT_SUBTITLES)}set defaultSubtitles(e){M(this,c.DEFAULT_SUBTITLES,e)}get defaultStreamType(){return W(this,c.DEFAULT_STREAM_TYPE)}set defaultStreamType(e){B(this,c.DEFAULT_STREAM_TYPE,e)}get defaultDuration(){return $(this,c.DEFAULT_DURATION)}set defaultDuration(e){J(this,c.DEFAULT_DURATION,e)}get noHotkeys(){return I(this,c.NO_HOTKEYS)}set noHotkeys(e){M(this,c.NO_HOTKEYS,e)}get keysUsed(){return W(this,c.KEYS_USED)}set keysUsed(e){B(this,c.KEYS_USED,e)}get liveEdgeOffset(){return $(this,c.LIVE_EDGE_OFFSET)}set liveEdgeOffset(e){J(this,c.LIVE_EDGE_OFFSET,e)}get noAutoSeekToLive(){return I(this,c.NO_AUTO_SEEK_TO_LIVE)}set noAutoSeekToLive(e){M(this,c.NO_AUTO_SEEK_TO_LIVE,e)}get noVolumePref(){return I(this,c.NO_VOLUME_PREF)}set noVolumePref(e){M(this,c.NO_VOLUME_PREF,e)}get noMutedPref(){return I(this,c.NO_MUTED_PREF)}set noMutedPref(e){M(this,c.NO_MUTED_PREF,e)}get noSubtitlesLangPref(){return I(this,c.NO_SUBTITLES_LANG_PREF)}set noSubtitlesLangPref(e){M(this,c.NO_SUBTITLES_LANG_PREF,e)}get noDefaultStore(){return I(this,c.NO_DEFAULT_STORE)}set noDefaultStore(e){M(this,c.NO_DEFAULT_STORE,e)}get resolvedLang(){return xn()}attributeChangedCallback(e,i,a){var r,s,n,d,u,k,y,b,m,h,_,f;if(super.attributeChangedCallback(e,i,a),e===c.NO_HOTKEYS)a!==i&&a===""?(this.hasAttribute(c.HOTKEYS)&&console.warn("Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled."),this.disableHotkeys()):a!==i&&a===null&&this.enableHotkeys();else if(e===c.HOTKEYS)v(this,Oe).value=a;else if(e===c.DEFAULT_SUBTITLES&&a!==i)(r=v(this,S))==null||r.dispatch({type:"optionschangerequest",detail:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES)}});else if(e===c.DEFAULT_STREAM_TYPE)(n=v(this,S))==null||n.dispatch({type:"optionschangerequest",detail:{defaultStreamType:(s=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?s:void 0}});else if(e===c.LIVE_EDGE_OFFSET&&a!==i)(d=v(this,S))==null||d.dispatch({type:"optionschangerequest",detail:{liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.SEEK_TO_LIVE_OFFSET&&a!==i)(u=v(this,S))==null||u.dispatch({type:"optionschangerequest",detail:{seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0}});else if(e===c.NO_AUTO_SEEK_TO_LIVE)(k=v(this,S))==null||k.dispatch({type:"optionschangerequest",detail:{noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE)}});else if(e===c.FULLSCREEN_ELEMENT){const A=a?(y=this.getRootNode())==null?void 0:y.getElementById(a):void 0;pe(this,qt,A),(b=v(this,S))==null||b.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement})}else e===c.LANG&&a!==i?(Cn(a),(m=v(this,S))==null||m.dispatch({type:"optionschangerequest",detail:{mediaLang:a}})):e===c.LOOP&&a!==i?(h=v(this,S))==null||h.dispatch({type:p.MEDIA_LOOP_REQUEST,detail:a!=null}):e===c.NO_VOLUME_PREF&&a!==i?(_=v(this,S))==null||_.dispatch({type:"optionschangerequest",detail:{noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF)}}):e===c.NO_MUTED_PREF&&a!==i&&((f=v(this,S))==null||f.dispatch({type:"optionschangerequest",detail:{noMutedPref:this.hasAttribute(c.NO_MUTED_PREF)}}))}connectedCallback(){var e,i,a;this.associateElement(this),!v(this,S)&&!this.hasAttribute(c.NO_DEFAULT_STORE)&&$t(this,Di,za).call(this),(e=v(this,S))==null||e.dispatch({type:"documentelementchangerequest",detail:ae}),(i=v(this,S))==null||i.dispatch({type:"fullscreenelementchangerequest",detail:this.fullscreenElement}),super.connectedCallback(),v(this,S)&&!v(this,Te)&&pe(this,Te,(a=v(this,S))==null?void 0:a.subscribe(v(this,Qt))),v(this,Yt)!==void 0&&v(this,S)&&this.media&&setTimeout(()=>{var r,s,n;(s=(r=this.media)==null?void 0:r.textTracks)!=null&&s.length&&((n=v(this,S))==null||n.dispatch({type:p.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:v(this,Yt)}))},0),this.hasAttribute(c.NO_HOTKEYS)?this.disableHotkeys():this.enableHotkeys()}disconnectedCallback(){var e,i,a,r,s,n;if((e=super.disconnectedCallback)==null||e.call(this),this.disableHotkeys(),v(this,S)){const d=v(this,S).getState();pe(this,Yt,!!((i=d.mediaSubtitlesShowing)!=null&&i.length)),(a=v(this,S))==null||a.dispatch({type:"fullscreenelementchangerequest",detail:void 0}),(r=v(this,S))==null||r.dispatch({type:"documentelementchangerequest",detail:void 0}),(s=v(this,S))==null||s.dispatch({type:p.MEDIA_TOGGLE_SUBTITLES_REQUEST,detail:!1})}v(this,Te)&&((n=v(this,Te))==null||n.call(this),pe(this,Te,void 0)),this.unassociateElement(this),v(this,Le)&&(v(this,Le).remove(),pe(this,Le,null))}mediaSetCallback(e){var i;super.mediaSetCallback(e),(i=v(this,S))==null||i.dispatch({type:"mediaelementchangerequest",detail:e}),e.hasAttribute("tabindex")||(e.tabIndex=-1)}mediaUnsetCallback(e){var i;super.mediaUnsetCallback(e),(i=v(this,S))==null||i.dispatch({type:"mediaelementchangerequest",detail:void 0})}propagateMediaState(e,i){Cs(this.mediaStateReceivers,e,i)}associateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(i.has(e))return;const a=this.registerMediaStateReceiver.bind(this),r=this.unregisterMediaStateReceiver.bind(this),s=Cl(e,a,r);Object.values(p).forEach(n=>{e.addEventListener(n,v(this,Li))}),i.set(e,s)}unassociateElement(e){if(!e)return;const{associatedElementSubscriptions:i}=this;if(!i.has(e))return;i.get(e)(),i.delete(e),Object.values(p).forEach(r=>{e.removeEventListener(r,v(this,Li))})}registerMediaStateReceiver(e){if(!e)return;const i=this.mediaStateReceivers;i.indexOf(e)>-1||(i.push(e),v(this,S)&&Object.entries(v(this,S).getState()).forEach(([r,s])=>{Cs([e],r,s)}))}unregisterMediaStateReceiver(e){const i=this.mediaStateReceivers,a=i.indexOf(e);a<0||i.splice(a,1)}enableHotkeys(){this.addEventListener("keydown",$t(this,Ci,Za))}disableHotkeys(){this.removeEventListener("keydown",$t(this,Ci,Za)),this.removeEventListener("keyup",v(this,tt))}get hotkeys(){return v(this,Oe)}set hotkeys(e){B(this,c.HOTKEYS,e)}keyboardShortcutHandler(e){var i,a,r,s,n,d,u,k,y;const b=e.target;if(((r=(a=(i=b.getAttribute(c.KEYS_USED))==null?void 0:i.split(" "))!=null?a:b==null?void 0:b.keysUsed)!=null?r:[]).map(T=>T==="Space"?" ":T).filter(Boolean).includes(e.key))return;let h,_,f;if(!(v(this,Oe).contains(`no${e.key.toLowerCase()}`)||e.key===" "&&v(this,Oe).contains("nospace")||e.shiftKey&&(e.key==="/"||e.key==="?")&&v(this,Oe).contains("noshift+/")))switch(e.key){case" ":case"k":h=v(this,S).getState().mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"m":h=this.mediaStore.getState().mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"f":h=this.mediaStore.getState().mediaIsFullscreen?p.MEDIA_EXIT_FULLSCREEN_REQUEST:p.MEDIA_ENTER_FULLSCREEN_REQUEST,this.dispatchEvent(new l.CustomEvent(h,{composed:!0,bubbles:!0}));break;case"c":this.dispatchEvent(new l.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}));break;case"ArrowLeft":case"j":{const T=this.hasAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_BACKWARD_SEEK_OFFSET):Is;_=Math.max(((s=this.mediaStore.getState().mediaCurrentTime)!=null?s:0)-T,0),f=new l.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case"ArrowRight":case"l":{const T=this.hasAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET)?+this.getAttribute(c.KEYBOARD_FORWARD_SEEK_OFFSET):Is;_=Math.max(((n=this.mediaStore.getState().mediaCurrentTime)!=null?n:0)+T,0),f=new l.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case"ArrowUp":{const T=this.hasAttribute(c.KEYBOARD_UP_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_UP_VOLUME_STEP):Ms;_=Math.min(((d=this.mediaStore.getState().mediaVolume)!=null?d:1)+T,1),f=new l.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case"ArrowDown":{const T=this.hasAttribute(c.KEYBOARD_DOWN_VOLUME_STEP)?+this.getAttribute(c.KEYBOARD_DOWN_VOLUME_STEP):Ms;_=Math.max(((u=this.mediaStore.getState().mediaVolume)!=null?u:1)-T,0),f=new l.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case"<":{const T=(k=this.mediaStore.getState().mediaPlaybackRate)!=null?k:1;_=Math.max(T-ws,kl).toFixed(2),f=new l.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case">":{const T=(y=this.mediaStore.getState().mediaPlaybackRate)!=null?y:1;_=Math.min(T+ws,Sl).toFixed(2),f=new l.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:_}),this.dispatchEvent(f);break}case"/":case"?":{e.shiftKey&&$t(this,Xa,Lo).call(this);break}case"p":{h=this.mediaStore.getState().mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST,f=new l.CustomEvent(h,{composed:!0,bubbles:!0}),this.dispatchEvent(f);break}}}};Oe=new WeakMap;qt=new WeakMap;S=new WeakMap;Le=new WeakMap;Qt=new WeakMap;Te=new WeakMap;Li=new WeakMap;Yt=new WeakMap;Di=new WeakSet;za=function(){var t;this.mediaStore=yl({media:this.media,fullscreenElement:this.fullscreenElement,options:{defaultSubtitles:this.hasAttribute(c.DEFAULT_SUBTITLES),defaultDuration:this.hasAttribute(c.DEFAULT_DURATION)?+this.getAttribute(c.DEFAULT_DURATION):void 0,defaultStreamType:(t=this.getAttribute(c.DEFAULT_STREAM_TYPE))!=null?t:void 0,liveEdgeOffset:this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,seekToLiveOffset:this.hasAttribute(c.SEEK_TO_LIVE_OFFSET)?+this.getAttribute(c.SEEK_TO_LIVE_OFFSET):this.hasAttribute(c.LIVE_EDGE_OFFSET)?+this.getAttribute(c.LIVE_EDGE_OFFSET):void 0,noAutoSeekToLive:this.hasAttribute(c.NO_AUTO_SEEK_TO_LIVE),noVolumePref:this.hasAttribute(c.NO_VOLUME_PREF),noMutedPref:this.hasAttribute(c.NO_MUTED_PREF),noSubtitlesLangPref:this.hasAttribute(c.NO_SUBTITLES_LANG_PREF)}})};tt=new WeakMap;Ci=new WeakSet;Za=function(t){var e;const{metaKey:i,altKey:a,key:r,shiftKey:s}=t,n=s&&(r==="/"||r==="?");if(n&&((e=v(this,Le))!=null&&e.open)){this.removeEventListener("keyup",v(this,tt));return}if(i||a||!n&&!Do.includes(r)){this.removeEventListener("keyup",v(this,tt));return}const d=t.target,u=d instanceof HTMLElement&&(d.tagName.toLowerCase()==="media-volume-range"||d.tagName.toLowerCase()==="media-time-range");[" ","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r)&&!(v(this,Oe).contains(`no${r.toLowerCase()}`)||r===" "&&v(this,Oe).contains("nospace"))&&!u&&t.preventDefault(),this.addEventListener("keyup",v(this,tt),{once:!0})};Xa=new WeakSet;Lo=function(){v(this,Le)||(pe(this,Le,ae.createElement("media-keyboard-shortcuts-dialog")),this.appendChild(v(this,Le))),v(this,Le).open=!0};const Il=Object.values(o),Ml=Object.values(Js),Ro=t=>{var e,i,a,r;let{observedAttributes:s}=t.constructor;!s&&((e=t.nodeName)!=null&&e.includes("-"))&&(l.customElements.upgrade(t),{observedAttributes:s}=t.constructor);const n=(r=(a=(i=t==null?void 0:t.getAttribute)==null?void 0:i.call(t,C.MEDIA_CHROME_ATTRIBUTES))==null?void 0:a.split)==null?void 0:r.call(a,/\s+/);return Array.isArray(s||n)?(s||n).filter(d=>Il.includes(d)):[]},wl=t=>{var e,i;return(e=t.nodeName)!=null&&e.includes("-")&&l.customElements.get((i=t.nodeName)==null?void 0:i.toLowerCase())&&!(t instanceof l.customElements.get(t.nodeName.toLowerCase()))&&l.customElements.upgrade(t),Ml.some(a=>a in t)},Ja=t=>wl(t)||!!Ro(t).length,Ls=t=>{var e;return(e=t==null?void 0:t.join)==null?void 0:e.call(t,":")},Ds={[o.MEDIA_SUBTITLES_LIST]:Ya,[o.MEDIA_SUBTITLES_SHOWING]:Ya,[o.MEDIA_SEEKABLE]:Ls,[o.MEDIA_BUFFERED]:t=>t==null?void 0:t.map(Ls).join(" "),[o.MEDIA_PREVIEW_COORDS]:t=>t==null?void 0:t.join(" "),[o.MEDIA_RENDITION_LIST]:In,[o.MEDIA_AUDIO_TRACK_LIST]:wn},Ll=async(t,e,i)=>{var a,r;if(t.isConnected||await eo(0),typeof i=="boolean"||i==null)return M(t,e,i);if(typeof i=="number")return J(t,e,i);if(typeof i=="string")return B(t,e,i);if(Array.isArray(i)&&!i.length)return t.removeAttribute(e);const s=(r=(a=Ds[e])==null?void 0:a.call(Ds,i))!=null?r:i;return t.setAttribute(e,s)},Dl=t=>{var e;return!!((e=t.closest)!=null&&e.call(t,'*[slot="media"]'))},Je=(t,e)=>{if(Dl(t))return;const i=(r,s)=>{var n,d;Ja(r)&&s(r);const{children:u=[]}=r??{},k=(d=(n=r==null?void 0:r.shadowRoot)==null?void 0:n.children)!=null?d:[];[...u,...k].forEach(b=>Je(b,s))},a=t==null?void 0:t.nodeName.toLowerCase();if(a.includes("-")&&!Ja(t)){l.customElements.whenDefined(a).then(()=>{i(t,e)});return}i(t,e)},Cs=(t,e,i)=>{t.forEach(a=>{if(e in a){a[e]=i;return}const r=Ro(a),s=e.toLowerCase();r.includes(s)&&Ll(a,s,i)})},Cl=(t,e,i)=>{Je(t,e);const a=y=>{var b;const m=(b=y==null?void 0:y.composedPath()[0])!=null?b:y.target;e(m)},r=y=>{var b;const m=(b=y==null?void 0:y.composedPath()[0])!=null?b:y.target;i(m)};t.addEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),t.addEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r);const s=y=>{y.forEach(b=>{const{addedNodes:m=[],removedNodes:h=[],type:_,target:f,attributeName:A}=b;_==="childList"?(Array.prototype.forEach.call(m,T=>Je(T,e)),Array.prototype.forEach.call(h,T=>Je(T,i))):_==="attributes"&&A===C.MEDIA_CHROME_ATTRIBUTES&&(Ja(f)?e(f):i(f))})};let n=[];const d=y=>{const b=y.target;b.name!=="media"&&(n.forEach(m=>Je(m,i)),n=[...b.assignedElements({flatten:!0})],n.forEach(m=>Je(m,e)))};t.addEventListener("slotchange",d);const u=new MutationObserver(s);return u.observe(t,{childList:!0,attributes:!0,subtree:!0}),()=>{Je(t,i),t.removeEventListener("slotchange",d),u.disconnect(),t.removeEventListener(p.REGISTER_MEDIA_STATE_RECEIVER,a),t.removeEventListener(p.UNREGISTER_MEDIA_STATE_RECEIVER,r)}};l.customElements.get("media-controller")||l.customElements.define("media-controller",Co);var Rl=Co;const lt={PLACEMENT:"placement",BOUNDS:"bounds"};function xl(t){return`
    <style>
      :host {
        --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
        --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
        --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
        --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
        --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
        position: relative;
        pointer-events: none;
        display: var(--media-tooltip-display, inline-flex);
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        z-index: var(--media-tooltip-z-index, 1);
        background: var(--_tooltip-background);
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        font: var(--media-font,
          var(--media-font-weight, 400)
          var(--media-font-size, 13px) /
          var(--media-text-content-height, var(--media-control-height, 18px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        padding: var(--media-tooltip-padding, .35em .7em);
        border: var(--media-tooltip-border, none);
        border-radius: var(--media-tooltip-border-radius, 5px);
        filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
        white-space: var(--media-tooltip-white-space, nowrap);
      }

      :host([hidden]) {
        display: none;
      }

      img, svg {
        display: inline-block;
      }

      #arrow {
        position: absolute;
        width: 0px;
        height: 0px;
        border-style: solid;
        display: var(--media-tooltip-arrow-display, block);
      }

      :host(:not([placement])),
      :host([placement="top"]) {
        position: absolute;
        bottom: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host(:not([placement])) #arrow,
      :host([placement="top"]) #arrow {
        top: 100%;
        left: 50%;
        border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
        border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="right"]) {
        position: absolute;
        left: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="right"]) #arrow {
        top: 50%;
        right: 100%;
        border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
        border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
        transform: translate(0, -50%);
      }

      :host([placement="bottom"]) {
        position: absolute;
        top: calc(100% + var(--media-tooltip-distance, 12px));
        left: 50%;
        transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
      }
      :host([placement="bottom"]) #arrow {
        bottom: 100%;
        left: 50%;
        border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
        border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
        transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
      }

      :host([placement="left"]) {
        position: absolute;
        right: calc(100% + var(--media-tooltip-distance, 12px));
        top: 50%;
        transform: translate(0, -50%);
      }
      :host([placement="left"]) #arrow {
        top: 50%;
        left: 100%;
        border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
        border-color: transparent transparent transparent var(--_tooltip-arrow-background);
        transform: translate(0, -50%);
      }
      
      :host([placement="none"]) #arrow {
        display: none;
      }
    </style>
    <slot></slot>
    <div id="arrow"></div>
  `}class _a extends l.HTMLElement{constructor(){if(super(),this.updateXOffset=()=>{var e;if(!mo(this,{checkOpacity:!1,checkVisibilityCSS:!1}))return;const i=this.placement;if(i==="left"||i==="right"){this.style.removeProperty("--media-tooltip-offset-x");return}const a=getComputedStyle(this),r=(e=hi(this,"#"+this.bounds))!=null?e:Un(this);if(!r)return;const{x:s,width:n}=r.getBoundingClientRect(),{x:d,width:u}=this.getBoundingClientRect(),k=d+u,y=s+n,b=a.getPropertyValue("--media-tooltip-offset-x"),m=b?parseFloat(b.replace("px","")):0,h=a.getPropertyValue("--media-tooltip-container-margin"),_=h?parseFloat(h.replace("px","")):0,f=d-s+m-_,A=k-y+m+_;if(f<0){this.style.setProperty("--media-tooltip-offset-x",`${f}px`);return}if(A>0){this.style.setProperty("--media-tooltip-offset-x",`${A}px`);return}this.style.removeProperty("--media-tooltip-offset-x")},!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}if(this.arrowEl=this.shadowRoot.querySelector("#arrow"),Object.prototype.hasOwnProperty.call(this,"placement")){const e=this.placement;delete this.placement,this.placement=e}}static get observedAttributes(){return[lt.PLACEMENT,lt.BOUNDS]}get placement(){return W(this,lt.PLACEMENT)}set placement(e){B(this,lt.PLACEMENT,e)}get bounds(){return W(this,lt.BOUNDS)}set bounds(e){B(this,lt.BOUNDS,e)}}_a.shadowRootOptions={mode:"open"};_a.getTemplateHTML=xl;l.customElements.get("media-tooltip")||l.customElements.define("media-tooltip",_a);var ja=_a,wr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},K=(t,e,i)=>(wr(t,e,"read from private field"),i?i.call(t):e.get(t)),dt=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gi=(t,e,i,a)=>(wr(t,e,"write to private field"),e.set(t,i),i),Pl=(t,e,i)=>(wr(t,e,"access private method"),i),ye,wt,Qe,ft,Ri,er,xo;const Ne={TOOLTIP_PLACEMENT:"tooltipplacement",DISABLED:"disabled",NO_TOOLTIP:"notooltip"};function Ol(t,e={}){return`
    <style>
      :host {
        position: relative;
        font: var(--media-font,
          var(--media-font-weight, bold)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        padding: var(--media-button-padding, var(--media-control-padding, 10px));
        justify-content: var(--media-button-justify-content, center);
        display: inline-flex;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        transition: background .15s linear;
        pointer-events: auto;
        cursor: var(--media-cursor, pointer);
        -webkit-tap-highlight-color: transparent;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }
      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgba(50 50 70 / .7));
      }

      slot[name="icon"] {
        display: inline-flex;
        align-items: center;
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-button-icon-width);
        height: var(--media-button-icon-height, var(--media-control-height, 24px));
        transform: var(--media-button-icon-transform);
        transition: var(--media-button-icon-transition);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
      }

      media-tooltip {
        
        max-width: 0;
        overflow-x: clip;
        opacity: 0;
        transition: opacity .3s, max-width 0s 9s;
      }

      :host(:hover) media-tooltip,
      :host(:focus-visible) media-tooltip {
        max-width: 100vw;
        opacity: 1;
        transition: opacity .3s;
      }

      :host([notooltip]) slot[name="tooltip"] {
        display: none;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}

    <slot name="tooltip">
      <media-tooltip part="tooltip" aria-hidden="true">
        <template shadowrootmode="${ja.shadowRootOptions.mode}">
          ${ja.getTemplateHTML({})}
        </template>
        <slot name="tooltip-content">
          ${this.getTooltipContentHTML(t)}
        </slot>
      </media-tooltip>
    </slot>
  `}function Ul(t,e){return`
    <slot></slot>
  `}function Fl(){return""}class j extends l.HTMLElement{constructor(){if(super(),dt(this,er),dt(this,ye,void 0),this.preventClick=!1,this.tooltipEl=null,dt(this,wt,e=>{this.preventClick||this.handleClick(e),setTimeout(K(this,Qe),0)}),dt(this,Qe,()=>{var e,i;(i=(e=this.tooltipEl)==null?void 0:e.updateXOffset)==null||i.call(e)}),dt(this,ft,e=>{const{key:i}=e;if(!this.keysUsed.includes(i)){this.removeEventListener("keyup",K(this,ft));return}this.preventClick||this.handleClick(e)}),dt(this,Ri,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!this.keysUsed.includes(r)){this.removeEventListener("keyup",K(this,ft));return}this.addEventListener("keyup",K(this,ft),{once:!0})}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.tooltipEl=this.shadowRoot.querySelector("media-tooltip")}static get observedAttributes(){return["disabled",Ne.TOOLTIP_PLACEMENT,C.MEDIA_CONTROLLER,o.MEDIA_LANG]}enable(){this.addEventListener("click",K(this,wt)),this.addEventListener("keydown",K(this,Ri)),this.tabIndex=0}disable(){this.removeEventListener("click",K(this,wt)),this.removeEventListener("keydown",K(this,Ri)),this.removeEventListener("keyup",K(this,ft)),this.tabIndex=-1}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===C.MEDIA_CONTROLLER?(i&&((s=(r=K(this,ye))==null?void 0:r.unassociateElement)==null||s.call(r,this),gi(this,ye,null)),a&&this.isConnected&&(gi(this,ye,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=K(this,ye))==null?void 0:d.associateElement)==null||u.call(d,this))):e==="disabled"&&a!==i?a==null?this.enable():this.disable():e===Ne.TOOLTIP_PLACEMENT&&this.tooltipEl&&a!==i?this.tooltipEl.placement=a:e===o.MEDIA_LANG&&(this.shadowRoot.querySelector('slot[name="tooltip-content"]').innerHTML=this.constructor.getTooltipContentHTML()),K(this,Qe).call(this)}connectedCallback(){var e,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),this.hasAttribute("disabled")?this.disable():this.enable(),this.setAttribute("role","button");const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(gi(this,ye,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=K(this,ye))==null?void 0:i.associateElement)==null||a.call(i,this)),l.customElements.whenDefined("media-tooltip").then(()=>Pl(this,er,xo).call(this))}disconnectedCallback(){var e,i;this.disable(),(i=(e=K(this,ye))==null?void 0:e.unassociateElement)==null||i.call(e,this),gi(this,ye,null),this.removeEventListener("mouseenter",K(this,Qe)),this.removeEventListener("focus",K(this,Qe)),this.removeEventListener("click",K(this,wt))}get keysUsed(){return["Enter"," "]}get tooltipPlacement(){return W(this,Ne.TOOLTIP_PLACEMENT)}set tooltipPlacement(e){B(this,Ne.TOOLTIP_PLACEMENT,e)}get mediaController(){return W(this,C.MEDIA_CONTROLLER)}set mediaController(e){B(this,C.MEDIA_CONTROLLER,e)}get disabled(){return I(this,Ne.DISABLED)}set disabled(e){M(this,Ne.DISABLED,e)}get noTooltip(){return I(this,Ne.NO_TOOLTIP)}set noTooltip(e){M(this,Ne.NO_TOOLTIP,e)}handleClick(e){}}ye=new WeakMap;wt=new WeakMap;Qe=new WeakMap;ft=new WeakMap;Ri=new WeakMap;er=new WeakSet;xo=function(){this.addEventListener("mouseenter",K(this,Qe)),this.addEventListener("focus",K(this,Qe)),this.addEventListener("click",K(this,wt));const t=this.tooltipPlacement;t&&this.tooltipEl&&(this.tooltipEl.placement=t)};j.shadowRootOptions={mode:"open"};j.getTemplateHTML=Ol;j.getSlotTemplateHTML=Ul;j.getTooltipContentHTML=Fl;l.customElements.get("media-chrome-button")||l.customElements.define("media-chrome-button",j);var Nl=j;const Rs=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`;function $l(t){return`
    <style>
      :host([${o.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Rs}</slot>
      <slot name="exit">${Rs}</slot>
    </slot>
  `}function Bl(){return`
    <slot name="tooltip-enter">${E("start airplay")}</slot>
    <slot name="tooltip-exit">${E("stop airplay")}</slot>
  `}const xs=t=>{const e=t.mediaIsAirplaying?E("stop airplay"):E("start airplay");t.setAttribute("aria-label",e)};class ba extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_AIRPLAYING,o.MEDIA_AIRPLAY_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),xs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_AIRPLAYING&&xs(this)}get mediaIsAirplaying(){return I(this,o.MEDIA_IS_AIRPLAYING)}set mediaIsAirplaying(e){M(this,o.MEDIA_IS_AIRPLAYING,e)}get mediaAirplayUnavailable(){return W(this,o.MEDIA_AIRPLAY_UNAVAILABLE)}set mediaAirplayUnavailable(e){B(this,o.MEDIA_AIRPLAY_UNAVAILABLE,e)}handleClick(){const e=new l.CustomEvent(p.MEDIA_AIRPLAY_REQUEST,{composed:!0,bubbles:!0});this.dispatchEvent(e)}}ba.getSlotTemplateHTML=$l;ba.getTooltipContentHTML=Bl;l.customElements.get("media-airplay-button")||l.customElements.define("media-airplay-button",ba);var Hl=ba;const Wl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,Vl=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`;function Kl(t){return`
    <style>
      :host([aria-checked="true"]) slot[name=off] {
        display: none !important;
      }

      
      :host(:not([aria-checked="true"])) slot[name=on] {
        display: none !important;
      }

      :host([aria-checked="true"]) slot[name=tooltip-enable],
      :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="on">${Wl}</slot>
      <slot name="off">${Vl}</slot>
    </slot>
  `}function Gl(){return`
    <slot name="tooltip-enable">${E("Enable captions")}</slot>
    <slot name="tooltip-disable">${E("Disable captions")}</slot>
  `}const Ps=t=>{t.setAttribute("aria-checked",tl(t).toString())};class Aa extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_SUBTITLES_LIST,o.MEDIA_SUBTITLES_SHOWING]}connectedCallback(){super.connectedCallback(),this.setAttribute("role","button"),this.setAttribute("aria-label",E("closed captions")),Ps(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_SUBTITLES_SHOWING&&Ps(this)}get mediaSubtitlesList(){return Os(this,o.MEDIA_SUBTITLES_LIST)}set mediaSubtitlesList(e){Us(this,o.MEDIA_SUBTITLES_LIST,e)}get mediaSubtitlesShowing(){return Os(this,o.MEDIA_SUBTITLES_SHOWING)}set mediaSubtitlesShowing(e){Us(this,o.MEDIA_SUBTITLES_SHOWING,e)}handleClick(){this.dispatchEvent(new l.CustomEvent(p.MEDIA_TOGGLE_SUBTITLES_REQUEST,{composed:!0,bubbles:!0}))}}Aa.getSlotTemplateHTML=Kl;Aa.getTooltipContentHTML=Gl;const Os=(t,e)=>{const i=t.getAttribute(e);return i?To(i):[]},Us=(t,e,i)=>{if(!(i!=null&&i.length)){t.removeAttribute(e);return}const a=Ya(i);t.getAttribute(e)!==a&&t.setAttribute(e,a)};l.customElements.get("media-captions-button")||l.customElements.define("media-captions-button",Aa);var ql=Aa;const Ql='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg>',Yl='<svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>';function zl(t){return`
    <style>
      :host([${o.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Ql}</slot>
      <slot name="exit">${Yl}</slot>
    </slot>
  `}function Zl(){return`
    <slot name="tooltip-enter">${E("Start casting")}</slot>
    <slot name="tooltip-exit">${E("Stop casting")}</slot>
  `}const Fs=t=>{const e=t.mediaIsCasting?E("stop casting"):E("start casting");t.setAttribute("aria-label",e)};class Ta extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_CASTING,o.MEDIA_CAST_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Fs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_CASTING&&Fs(this)}get mediaIsCasting(){return I(this,o.MEDIA_IS_CASTING)}set mediaIsCasting(e){M(this,o.MEDIA_IS_CASTING,e)}get mediaCastUnavailable(){return W(this,o.MEDIA_CAST_UNAVAILABLE)}set mediaCastUnavailable(e){B(this,o.MEDIA_CAST_UNAVAILABLE,e)}handleClick(){const e=this.mediaIsCasting?p.MEDIA_EXIT_CAST_REQUEST:p.MEDIA_ENTER_CAST_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}}Ta.getSlotTemplateHTML=zl;Ta.getTooltipContentHTML=Zl;l.customElements.get("media-cast-button")||l.customElements.define("media-cast-button",Ta);var Xl=Ta,Lr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},it=(t,e,i)=>(Lr(t,e,"read from private field"),e.get(t)),Re=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Dr=(t,e,i,a)=>(Lr(t,e,"write to private field"),e.set(t,i),i),Ze=(t,e,i)=>(Lr(t,e,"access private method"),i),sa,li,at,xi,tr,ir,Po,ar,Oo,rr,Uo,sr,Fo,or,No;function Jl(t){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(t)}
  `}function jl(t){return`
    <slot id="content"></slot>
  `}const Bt={OPEN:"open",ANCHOR:"anchor"};class rt extends l.HTMLElement{constructor(){super(),Re(this,xi),Re(this,ir),Re(this,ar),Re(this,rr),Re(this,sr),Re(this,or),Re(this,sa,!1),Re(this,li,null),Re(this,at,null)}static get observedAttributes(){return[Bt.OPEN,Bt.ANCHOR]}get open(){return I(this,Bt.OPEN)}set open(e){M(this,Bt.OPEN,e)}handleEvent(e){switch(e.type){case"invoke":Ze(this,rr,Uo).call(this,e);break;case"focusout":Ze(this,sr,Fo).call(this,e);break;case"keydown":Ze(this,or,No).call(this,e);break}}connectedCallback(){Ze(this,xi,tr).call(this),this.role||(this.role="dialog"),this.addEventListener("invoke",this),this.addEventListener("focusout",this),this.addEventListener("keydown",this)}disconnectedCallback(){this.removeEventListener("invoke",this),this.removeEventListener("focusout",this),this.removeEventListener("keydown",this)}attributeChangedCallback(e,i,a){Ze(this,xi,tr).call(this),e===Bt.OPEN&&a!==i&&(this.open?Ze(this,ir,Po).call(this):Ze(this,ar,Oo).call(this))}focus(){Dr(this,li,ho());const e=!this.dispatchEvent(new Event("focus",{composed:!0,cancelable:!0})),i=!this.dispatchEvent(new Event("focusin",{composed:!0,bubbles:!0,cancelable:!0}));if(e||i)return;const a=this.querySelector('[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]');a==null||a.focus()}get keysUsed(){return["Escape","Tab"]}}sa=new WeakMap;li=new WeakMap;at=new WeakMap;xi=new WeakSet;tr=function(){if(!it(this,sa)&&(Dr(this,sa,!0),!this.shadowRoot)){this.attachShadow(this.constructor.shadowRootOptions);const t=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(t),queueMicrotask(()=>{const{style:e}=q(this.shadowRoot,":host");e.setProperty("transition","display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in")})}};ir=new WeakSet;Po=function(){var t;(t=it(this,at))==null||t.setAttribute("aria-expanded","true"),this.dispatchEvent(new Event("open",{composed:!0,bubbles:!0})),this.addEventListener("transitionend",()=>this.focus(),{once:!0})};ar=new WeakSet;Oo=function(){var t;(t=it(this,at))==null||t.setAttribute("aria-expanded","false"),this.dispatchEvent(new Event("close",{composed:!0,bubbles:!0}))};rr=new WeakSet;Uo=function(t){Dr(this,at,t.relatedTarget),Ut(this,t.relatedTarget)||(this.open=!this.open)};sr=new WeakSet;Fo=function(t){var e;Ut(this,t.relatedTarget)||((e=it(this,li))==null||e.focus(),it(this,at)&&it(this,at)!==t.relatedTarget&&this.open&&(this.open=!1))};or=new WeakSet;No=function(t){var e,i,a,r,s;const{key:n,ctrlKey:d,altKey:u,metaKey:k}=t;d||u||k||this.keysUsed.includes(n)&&(t.preventDefault(),t.stopPropagation(),n==="Tab"?(t.shiftKey?(i=(e=this.previousElementSibling)==null?void 0:e.focus)==null||i.call(e):(r=(a=this.nextElementSibling)==null?void 0:a.focus)==null||r.call(a),this.blur()):n==="Escape"&&((s=it(this,li))==null||s.focus(),this.open=!1))};rt.shadowRootOptions={mode:"open"};rt.getTemplateHTML=Jl;rt.getSlotTemplateHTML=jl;l.customElements.get("media-chrome-dialog")||l.customElements.define("media-chrome-dialog",rt);var ed=rt,Cr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},N=(t,e,i)=>(Cr(t,e,"read from private field"),i?i.call(t):e.get(t)),ee=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},We=(t,e,i,a)=>(Cr(t,e,"write to private field"),e.set(t,i),i),Ee=(t,e,i)=>(Cr(t,e,"access private method"),i),ke,ya,Pi,Oi,ve,oa,Ui,Fi,Ni,Rr,$o,$i,nr,Bi,lr,na,xr,dr,Bo,ur,Ho,cr,Wo,hr,Vo;function td(t){return`
    <style>
      :host {
        --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

        box-shadow: var(--_focus-visible-box-shadow, none);
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
        display: inline-flex;
        align-items: center;
        
        vertical-align: middle;
        box-sizing: border-box;
        position: relative;
        width: 100px;
        transition: background .15s linear;
        cursor: var(--media-cursor, pointer);
        pointer-events: auto;
        touch-action: none; 
      }

      
      input[type=range]:focus {
        outline: 0;
      }
      input[type=range]:focus::-webkit-slider-runnable-track {
        outline: 0;
      }

      :host(:hover) {
        background: var(--media-control-hover-background, rgb(50 50 70 / .7));
      }

      #leftgap {
        padding-left: var(--media-range-padding-left, var(--_media-range-padding));
      }

      #rightgap {
        padding-right: var(--media-range-padding-right, var(--_media-range-padding));
      }

      #startpoint,
      #endpoint {
        position: absolute;
      }

      #endpoint {
        right: 0;
      }

      #container {
        
        width: var(--media-range-track-width, 100%);
        transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        min-width: 40px;
      }

      #range {
        
        display: var(--media-time-range-hover-display, block);
        bottom: var(--media-time-range-hover-bottom, 0);
        height: var(--media-time-range-hover-height, max(100% , 25px));
        width: 100%;
        position: absolute;
        cursor: var(--media-cursor, pointer);

        -webkit-appearance: none; 
        -webkit-tap-highlight-color: transparent;
        background: transparent; 
        margin: 0;
        z-index: 1;
      }

      @media (hover: hover) {
        #range {
          bottom: var(--media-time-range-hover-bottom, 0);
          height: var(--media-time-range-hover-height, max(100%, 20px));
        }
      }

      
      
      #range::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        width: .1px;
        height: .1px;
      }

      
      #range::-moz-range-thumb {
        background: transparent;
        border: transparent;
        width: .1px;
        height: .1px;
      }

      #appearance {
        height: var(--media-range-track-height, 4px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        position: absolute;
        
        will-change: transform;
      }

      #track {
        background: var(--media-range-track-background, rgb(255 255 255 / .2));
        border-radius: var(--media-range-track-border-radius, 1px);
        border: var(--media-range-track-border, none);
        outline: var(--media-range-track-outline);
        outline-offset: var(--media-range-track-outline-offset);
        backdrop-filter: var(--media-range-track-backdrop-filter);
        -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
        box-shadow: var(--media-range-track-box-shadow, none);
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }

      #progress,
      #pointer {
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #progress {
        background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
        transition: var(--media-range-track-transition);
      }

      #pointer {
        background: var(--media-range-track-pointer-background);
        border-right: var(--media-range-track-pointer-border-right);
        transition: visibility .25s, opacity .25s;
        visibility: hidden;
        opacity: 0;
      }

      @media (hover: hover) {
        :host(:hover) #pointer {
          transition: visibility .5s, opacity .5s;
          visibility: visible;
          opacity: 1;
        }
      }

      #thumb,
      ::slotted([slot=thumb]) {
        width: var(--media-range-thumb-width, 10px);
        height: var(--media-range-thumb-height, 10px);
        transition: var(--media-range-thumb-transition);
        transform: var(--media-range-thumb-transform, none);
        opacity: var(--media-range-thumb-opacity, 1);
        translate: -50%;
        position: absolute;
        left: 0;
        cursor: var(--media-cursor, pointer);
      }

      #thumb {
        border-radius: var(--media-range-thumb-border-radius, 10px);
        background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
        box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
        border: var(--media-range-thumb-border, none);
      }

      :host([disabled]) #thumb {
        background-color: #777;
      }

      .segments #appearance {
        height: var(--media-range-segment-hover-height, 7px);
      }

      #track {
        clip-path: url(#segments-clipping);
      }

      #segments {
        --segments-gap: var(--media-range-segments-gap, 2px);
        position: absolute;
        width: 100%;
        height: 100%;
      }

      #segments-clipping {
        transform: translateX(calc(var(--segments-gap) / 2));
      }

      #segments-clipping:empty {
        display: none;
      }

      #segments-clipping rect {
        height: var(--media-range-track-height, 4px);
        y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
        transition: var(--media-range-segment-transition, transform .1s ease-in-out);
        transform: var(--media-range-segment-transform, scaleY(1));
        transform-origin: center;
      }

      /* Visible label for accessibility - positioned off-screen but technically visible (Firefox requires visible labels) */
      #range-label {
        position: absolute;
        left: -10000px;
        background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        pointer-events: none;
      }
    </style>
    <div id="leftgap"></div>
    <div id="container">
      <div id="startpoint"></div>
      <div id="endpoint"></div>
      <div id="appearance">
        <div id="track" part="track">
          <div id="pointer"></div>
          <div id="progress" part="progress"></div>
        </div>
        <slot name="thumb">
          <div id="thumb" part="thumb"></div>
        </slot>
        <svg id="segments" aria-hidden="true"><clipPath id="segments-clipping"></clipPath></svg>
      </div>
        <input id="range" type="range" min="0" max="1" step="any" value="0">
        <label for="range" id="range-label"></label>

      ${this.getContainerTemplateHTML(t)}
    </div>
    <div id="rightgap"></div>
  `}function id(t){return""}class st extends l.HTMLElement{constructor(){if(super(),ee(this,Rr),ee(this,$i),ee(this,Bi),ee(this,na),ee(this,dr),ee(this,ur),ee(this,cr),ee(this,hr),ee(this,ke,void 0),ee(this,ya,void 0),ee(this,Pi,void 0),ee(this,Oi,void 0),ee(this,ve,{}),ee(this,oa,[]),ee(this,Ui,()=>{if(this.range.matches(":focus-visible")){const{style:e}=q(this.shadowRoot,":host");e.setProperty("--_focus-visible-box-shadow","var(--_focus-box-shadow)")}}),ee(this,Fi,()=>{const{style:e}=q(this.shadowRoot,":host");e.removeProperty("--_focus-visible-box-shadow")}),ee(this,Ni,()=>{const e=this.shadowRoot.querySelector("#segments-clipping");e&&e.parentNode.append(e)}),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes),i=this.constructor.getTemplateHTML(e);this.shadowRoot.setHTMLUnsafe?this.shadowRoot.setHTMLUnsafe(i):this.shadowRoot.innerHTML=i}this.container=this.shadowRoot.querySelector("#container"),We(this,Pi,this.shadowRoot.querySelector("#startpoint")),We(this,Oi,this.shadowRoot.querySelector("#endpoint")),this.range=this.shadowRoot.querySelector("#range"),this.appearance=this.shadowRoot.querySelector("#appearance")}static get observedAttributes(){return["disabled","aria-disabled",C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===C.MEDIA_CONTROLLER?(i&&((s=(r=N(this,ke))==null?void 0:r.unassociateElement)==null||s.call(r,this),We(this,ke,null)),a&&this.isConnected&&(We(this,ke,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=N(this,ke))==null?void 0:d.associateElement)==null||u.call(d,this))):(e==="disabled"||e==="aria-disabled"&&i!==a)&&(a==null?(this.range.removeAttribute(e),Ee(this,$i,nr).call(this)):(this.range.setAttribute(e,a),Ee(this,Bi,lr).call(this)))}connectedCallback(){var e,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`),N(this,ve).pointer=q(this.shadowRoot,"#pointer"),N(this,ve).progress=q(this.shadowRoot,"#progress"),N(this,ve).thumb=q(this.shadowRoot,'#thumb, ::slotted([slot="thumb"])'),N(this,ve).activeSegment=q(this.shadowRoot,"#segments-clipping rect:nth-child(0)");const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(We(this,ke,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=N(this,ke))==null?void 0:i.associateElement)==null||a.call(i,this)),this.updateBar(),this.shadowRoot.addEventListener("focusin",N(this,Ui)),this.shadowRoot.addEventListener("focusout",N(this,Fi)),Ee(this,$i,nr).call(this),no(this.container,N(this,Ni))}disconnectedCallback(){var e,i;Ee(this,Bi,lr).call(this),(i=(e=N(this,ke))==null?void 0:e.unassociateElement)==null||i.call(e,this),We(this,ke,null),this.shadowRoot.removeEventListener("focusin",N(this,Ui)),this.shadowRoot.removeEventListener("focusout",N(this,Fi)),lo(this.container,N(this,Ni))}updatePointerBar(e){var i;(i=N(this,ve).pointer)==null||i.style.setProperty("width",`${this.getPointerRatio(e)*100}%`)}updateBar(){var e,i;const a=this.range.valueAsNumber*100;(e=N(this,ve).progress)==null||e.style.setProperty("width",`${a}%`),(i=N(this,ve).thumb)==null||i.style.setProperty("left",`${a}%`)}updateSegments(e){const i=this.shadowRoot.querySelector("#segments-clipping");if(i.textContent="",this.container.classList.toggle("segments",!!(e!=null&&e.length)),!(e!=null&&e.length))return;const a=[...new Set([+this.range.min,...e.flatMap(s=>[s.start,s.end]),+this.range.max])];We(this,oa,[...a]);const r=a.pop();for(const[s,n]of a.entries()){const[d,u]=[s===0,s===a.length-1],k=d?"calc(var(--segments-gap) / -1)":`${n*100}%`,b=`calc(${((u?r:a[s+1])-n)*100}%${d||u?"":" - var(--segments-gap)"})`,m=ae.createElementNS("http://www.w3.org/2000/svg","rect"),h=po(this.shadowRoot,`#segments-clipping rect:nth-child(${s+1})`);h.style.setProperty("x",k),h.style.setProperty("width",b),i.append(m)}}getPointerRatio(e){return Bn(e.clientX,e.clientY,N(this,Pi).getBoundingClientRect(),N(this,Oi).getBoundingClientRect())}get dragging(){return this.hasAttribute("dragging")}handleEvent(e){switch(e.type){case"pointermove":Ee(this,hr,Vo).call(this,e);break;case"input":this.updateBar();break;case"pointerenter":Ee(this,dr,Bo).call(this,e);break;case"pointerdown":Ee(this,na,xr).call(this,e);break;case"pointerup":Ee(this,ur,Ho).call(this);break;case"pointerleave":Ee(this,cr,Wo).call(this);break}}get keysUsed(){return["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"]}}ke=new WeakMap;ya=new WeakMap;Pi=new WeakMap;Oi=new WeakMap;ve=new WeakMap;oa=new WeakMap;Ui=new WeakMap;Fi=new WeakMap;Ni=new WeakMap;Rr=new WeakSet;$o=function(t){const e=N(this,ve).activeSegment;if(!e)return;const i=this.getPointerRatio(t),r=`#segments-clipping rect:nth-child(${N(this,oa).findIndex((s,n,d)=>{const u=d[n+1];return u!=null&&i>=s&&i<=u})+1})`;(e.selectorText!=r||!e.style.transform)&&(e.selectorText=r,e.style.setProperty("transform","var(--media-range-segment-hover-transform, scaleY(2))"))};$i=new WeakSet;nr=function(){this.hasAttribute("disabled")||!this.isConnected||(this.addEventListener("input",this),this.addEventListener("pointerdown",this),this.addEventListener("pointerenter",this))};Bi=new WeakSet;lr=function(){var t,e;this.removeEventListener("input",this),this.removeEventListener("pointerdown",this),this.removeEventListener("pointerenter",this),this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointerup",this),(e=l.window)==null||e.removeEventListener("pointermove",this)};na=new WeakSet;xr=function(t){var e;We(this,ya,t.composedPath().includes(this.range)),(e=l.window)==null||e.addEventListener("pointerup",this,{once:!0})};dr=new WeakSet;Bo=function(t){var e;t.pointerType!=="mouse"&&Ee(this,na,xr).call(this,t),this.addEventListener("pointerleave",this,{once:!0}),(e=l.window)==null||e.addEventListener("pointermove",this)};ur=new WeakSet;Ho=function(){var t;(t=l.window)==null||t.removeEventListener("pointerup",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled")};cr=new WeakSet;Wo=function(){var t,e;this.removeEventListener("pointerleave",this),(t=l.window)==null||t.removeEventListener("pointermove",this),this.toggleAttribute("dragging",!1),this.range.disabled=this.hasAttribute("disabled"),(e=N(this,ve).activeSegment)==null||e.style.removeProperty("transform")};hr=new WeakSet;Vo=function(t){t.pointerType==="pen"&&t.buttons===0||(this.toggleAttribute("dragging",t.buttons===1||t.pointerType!=="mouse"),this.updatePointerBar(t),Ee(this,Rr,$o).call(this,t),this.dragging&&(t.pointerType!=="mouse"||!N(this,ya))&&(this.range.disabled=!0,this.range.valueAsNumber=this.getPointerRatio(t),this.range.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))))};st.shadowRootOptions={mode:"open"};st.getTemplateHTML=td;st.getContainerTemplateHTML=id;l.customElements.get("media-chrome-range")||l.customElements.define("media-chrome-range",st);var ad=st,Ko=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},_i=(t,e,i)=>(Ko(t,e,"read from private field"),i?i.call(t):e.get(t)),rd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},bi=(t,e,i,a)=>(Ko(t,e,"write to private field"),e.set(t,i),i),Se;function sd(t){return`
    <style>
      :host {
        
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        --media-loading-indicator-icon-height: 44px;
      }

      ::slotted(media-time-range),
      ::slotted(media-volume-range) {
        min-height: 100%;
      }

      ::slotted(media-time-range),
      ::slotted(media-clip-selector) {
        flex-grow: 1;
      }

      ::slotted([role="menu"]) {
        position: absolute;
      }
    </style>

    <slot></slot>
  `}let ka=class extends l.HTMLElement{constructor(){if(super(),rd(this,Se,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===C.MEDIA_CONTROLLER&&(i&&((s=(r=_i(this,Se))==null?void 0:r.unassociateElement)==null||s.call(r,this),bi(this,Se,null)),a&&this.isConnected&&(bi(this,Se,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=_i(this,Se))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(C.MEDIA_CONTROLLER);r&&(bi(this,Se,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=_i(this,Se))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=_i(this,Se))==null?void 0:e.unassociateElement)==null||i.call(e,this),bi(this,Se,null)}};Se=new WeakMap;ka.shadowRootOptions={mode:"open"};ka.getTemplateHTML=sd;l.customElements.get("media-control-bar")||l.customElements.define("media-control-bar",ka);var od=ka,Go=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ai=(t,e,i)=>(Go(t,e,"read from private field"),i?i.call(t):e.get(t)),nd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ti=(t,e,i,a)=>(Go(t,e,"write to private field"),e.set(t,i),i),Ie;function ld(t,e={}){return`
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
        padding: var(--media-control-padding, 10px);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        pointer-events: auto;
      }

      
      :host(:focus-visible) {
        box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
        outline: 0;
      }

      
      :host(:where(:focus)) {
        box-shadow: none;
        outline: 0;
      }
    </style>

    ${this.getSlotTemplateHTML(t,e)}
  `}function dd(t,e){return`
    <slot></slot>
  `}class Ue extends l.HTMLElement{constructor(){if(super(),nd(this,Ie,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER]}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===C.MEDIA_CONTROLLER&&(i&&((s=(r=Ai(this,Ie))==null?void 0:r.unassociateElement)==null||s.call(r,this),Ti(this,Ie,null)),a&&this.isConnected&&(Ti(this,Ie,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=Ai(this,Ie))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const{style:r}=q(this.shadowRoot,":host");r.setProperty("display",`var(--media-control-display, var(--${this.localName}-display, inline-flex))`);const s=this.getAttribute(C.MEDIA_CONTROLLER);s&&(Ti(this,Ie,(e=this.getRootNode())==null?void 0:e.getElementById(s)),(a=(i=Ai(this,Ie))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ai(this,Ie))==null?void 0:e.unassociateElement)==null||i.call(e,this),Ti(this,Ie,null)}}Ie=new WeakMap;Ue.shadowRootOptions={mode:"open"};Ue.getTemplateHTML=ld;Ue.getSlotTemplateHTML=dd;l.customElements.get("media-text-display")||l.customElements.define("media-text-display",Ue);var ud=Ue,qo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ns=(t,e,i)=>(qo(t,e,"read from private field"),i?i.call(t):e.get(t)),cd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},hd=(t,e,i,a)=>(qo(t,e,"write to private field"),e.set(t,i),i),zt;function md(t,e){return`
    <slot>${Ye(e.mediaDuration)}</slot>
  `}class Pr extends Ue{constructor(){var e;super(),cd(this,zt,void 0),hd(this,zt,this.shadowRoot.querySelector("slot")),Ns(this,zt).textContent=Ye((e=this.mediaDuration)!=null?e:0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_DURATION]}attributeChangedCallback(e,i,a){e===o.MEDIA_DURATION&&(Ns(this,zt).textContent=Ye(+a)),super.attributeChangedCallback(e,i,a)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){J(this,o.MEDIA_DURATION,e)}}zt=new WeakMap;Pr.getSlotTemplateHTML=md;l.customElements.get("media-duration-display")||l.customElements.define("media-duration-display",Pr);var pd=Pr;const Ed={2:E("Network Error"),3:E("Decode Error"),4:E("Source Not Supported"),5:E("Encryption Error")},vd={2:E("A network error caused the media download to fail."),3:E("A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format."),4:E("An unsupported error occurred. The server or network failed, or your browser does not support this format."),5:E("The media is encrypted and there are no keys to decrypt it.")},Or=t=>{var e,i;return t.code===1?null:{title:(e=Ed[t.code])!=null?e:`Error ${t.code}`,message:(i=vd[t.code])!=null?i:t.message}};var Qo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fd=(t,e,i)=>(Qo(t,e,"read from private field"),i?i.call(t):e.get(t)),gd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_d=(t,e,i,a)=>(Qo(t,e,"write to private field"),e.set(t,i),i),Hi;function bd(t){return`
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${t.mediaerrorcode}" id="content">
      ${Yo({code:+t.mediaerrorcode,message:t.mediaerrormessage})}
    </slot>
  `}function Ad(t){return t.code&&Or(t)!==null}function Yo(t){var e;const{title:i,message:a}=(e=Or(t))!=null?e:{};let r="";return i&&(r+=`<slot name="error-${t.code}-title"><h3>${i}</h3></slot>`),a&&(r+=`<slot name="error-${t.code}-message"><p>${a}</p></slot>`),r}const $s=[o.MEDIA_ERROR_CODE,o.MEDIA_ERROR_MESSAGE];class Sa extends rt{constructor(){super(...arguments),gd(this,Hi,null)}static get observedAttributes(){return[...super.observedAttributes,...$s]}formatErrorMessage(e){return this.constructor.formatErrorMessage(e)}attributeChangedCallback(e,i,a){var r;if(super.attributeChangedCallback(e,i,a),!$s.includes(e))return;const s=(r=this.mediaError)!=null?r:{code:this.mediaErrorCode,message:this.mediaErrorMessage};if(this.open=Ad(s),this.open&&(this.shadowRoot.querySelector("slot").name=`error-${this.mediaErrorCode}`,this.shadowRoot.querySelector("#content").innerHTML=this.formatErrorMessage(s),!this.hasAttribute("aria-label"))){const{title:n}=Or(s);n&&this.setAttribute("aria-label",n)}}get mediaError(){return fd(this,Hi)}set mediaError(e){_d(this,Hi,e)}get mediaErrorCode(){return $(this,"mediaerrorcode")}set mediaErrorCode(e){J(this,"mediaerrorcode",e)}get mediaErrorMessage(){return W(this,"mediaerrormessage")}set mediaErrorMessage(e){B(this,"mediaerrormessage",e)}}Hi=new WeakMap;Sa.getSlotTemplateHTML=bd;Sa.formatErrorMessage=Yo;l.customElements.get("media-error-dialog")||l.customElements.define("media-error-dialog",Sa);var Td=Sa,yd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},$e=(t,e,i)=>(yd(t,e,"read from private field"),i?i.call(t):e.get(t)),Bs=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},gt,_t;function kd(t){return`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgb(20 20 30 / .8);
        backdrop-filter: blur(10px);
      }

      #content {
        display: block;
        width: clamp(400px, 40vw, 700px);
        max-width: 90vw;
        text-align: left;
      }

      h2 {
        margin: 0 0 1.5rem 0;
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
      }

      .shortcuts-table {
        width: 100%;
        border-collapse: collapse;
      }

      .shortcuts-table tr {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .shortcuts-table tr:last-child {
        border-bottom: none;
      }

      .shortcuts-table td {
        padding: 0.75rem 0.5rem;
      }

      .shortcuts-table td:first-child {
        text-align: right;
        padding-right: 1rem;
        width: 40%;
        min-width: 120px;
      }

      .shortcuts-table td:last-child {
        padding-left: 1rem;
      }

      .key {
        display: inline-block;
        background: rgba(255, 255, 255, 0.15);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        font-weight: 500;
        min-width: 1.5rem;
        text-align: center;
        margin: 0 0.2rem;
      }

      .description {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.95rem;
      }

      .key-combo {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.3rem;
      }

      .key-separator {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
      }
    </style>
    <slot id="content">
      ${Sd()}
    </slot>
  `}function Sd(){return`
    <h2>Keyboard Shortcuts</h2>
    <table class="shortcuts-table">${[{keys:["Space","k"],description:"Toggle Playback"},{keys:["m"],description:"Toggle mute"},{keys:["f"],description:"Toggle fullscreen"},{keys:["c"],description:"Toggle captions or subtitles, if available"},{keys:["p"],description:"Toggle Picture in Picture"},{keys:["←","j"],description:"Seek back 10s"},{keys:["→","l"],description:"Seek forward 10s"},{keys:["↑"],description:"Turn volume up"},{keys:["↓"],description:"Turn volume down"},{keys:["< (SHIFT+,)"],description:"Decrease playback rate"},{keys:["> (SHIFT+.)"],description:"Increase playback rate"}].map(({keys:i,description:a})=>`
      <tr>
        <td>
          <div class="key-combo">${i.map((s,n)=>n>0?`<span class="key-separator">or</span><span class="key">${s}</span>`:`<span class="key">${s}</span>`).join("")}</div>
        </td>
        <td class="description">${a}</td>
      </tr>
    `).join("")}</table>
  `}class Ur extends rt{constructor(){super(...arguments),Bs(this,gt,e=>{var i;if(!this.open)return;const a=(i=this.shadowRoot)==null?void 0:i.querySelector("#content");if(!a)return;const r=e.composedPath(),s=r[0]===this||r.includes(this),n=r.includes(a);s&&!n&&(this.open=!1)}),Bs(this,_t,e=>{if(!this.open)return;const i=e.shiftKey&&(e.key==="/"||e.key==="?");(e.key==="Escape"||i)&&!e.ctrlKey&&!e.altKey&&!e.metaKey&&(this.open=!1,e.preventDefault(),e.stopPropagation())})}connectedCallback(){super.connectedCallback(),this.open&&(this.addEventListener("click",$e(this,gt)),document.addEventListener("keydown",$e(this,_t)))}disconnectedCallback(){this.removeEventListener("click",$e(this,gt)),document.removeEventListener("keydown",$e(this,_t))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e==="open"&&(this.open?(this.addEventListener("click",$e(this,gt)),document.addEventListener("keydown",$e(this,_t))):(this.removeEventListener("click",$e(this,gt)),document.removeEventListener("keydown",$e(this,_t))))}}gt=new WeakMap;_t=new WeakMap;Ur.getSlotTemplateHTML=kd;l.customElements.get("media-keyboard-shortcuts-dialog")||l.customElements.define("media-keyboard-shortcuts-dialog",Ur);var Id=Ur,zo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Md=(t,e,i)=>(zo(t,e,"read from private field"),e.get(t)),wd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ld=(t,e,i,a)=>(zo(t,e,"write to private field"),e.set(t,i),i),Wi;const Dd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,Cd=`<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`;function Rd(t){return`
    <style>
      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${Dd}</slot>
      <slot name="exit">${Cd}</slot>
    </slot>
  `}function xd(){return`
    <slot name="tooltip-enter">${E("Enter fullscreen mode")}</slot>
    <slot name="tooltip-exit">${E("Exit fullscreen mode")}</slot>
  `}const Hs=t=>{const e=t.mediaIsFullscreen?E("exit fullscreen mode"):E("enter fullscreen mode");t.setAttribute("aria-label",e)};let Ia=class extends j{constructor(){super(...arguments),wd(this,Wi,null)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_FULLSCREEN,o.MEDIA_FULLSCREEN_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Hs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_FULLSCREEN&&Hs(this)}get mediaFullscreenUnavailable(){return W(this,o.MEDIA_FULLSCREEN_UNAVAILABLE)}set mediaFullscreenUnavailable(e){B(this,o.MEDIA_FULLSCREEN_UNAVAILABLE,e)}get mediaIsFullscreen(){return I(this,o.MEDIA_IS_FULLSCREEN)}set mediaIsFullscreen(e){M(this,o.MEDIA_IS_FULLSCREEN,e)}handleClick(e){Ld(this,Wi,e);const i=Md(this,Wi)instanceof PointerEvent,a=this.mediaIsFullscreen?new l.CustomEvent(p.MEDIA_EXIT_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0}):new l.CustomEvent(p.MEDIA_ENTER_FULLSCREEN_REQUEST,{composed:!0,bubbles:!0,detail:i});this.dispatchEvent(a)}};Wi=new WeakMap;Ia.getSlotTemplateHTML=Rd;Ia.getTooltipContentHTML=xd;l.customElements.get("media-fullscreen-button")||l.customElements.define("media-fullscreen-button",Ia);var Pd=Ia;const{MEDIA_TIME_IS_LIVE:Vi,MEDIA_PAUSED:ai}=o,{MEDIA_SEEK_TO_LIVE_REQUEST:Od,MEDIA_PLAY_REQUEST:Ud}=p,Fd='<svg viewBox="0 0 6 12" aria-hidden="true"><circle cx="3" cy="6" r="2"></circle></svg>';function Nd(t){return`
    <style>
      :host { --media-tooltip-display: none; }
      
      slot[name=indicator] > *,
      :host ::slotted([slot=indicator]) {
        
        min-width: auto;
        fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
        color: var(--media-live-button-icon-color, rgb(140, 140, 140));
      }

      :host([${Vi}]:not([${ai}])) slot[name=indicator] > *,
      :host([${Vi}]:not([${ai}])) ::slotted([slot=indicator]) {
        fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
        color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
      }

      :host([${Vi}]:not([${ai}])) {
        cursor: var(--media-cursor, not-allowed);
      }

      slot[name=text]{
        text-transform: uppercase;
      }

    </style>

    <slot name="indicator">${Fd}</slot>
    
    <slot name="spacer">&nbsp;</slot><slot name="text">${E("live")}</slot>
  `}const Ws=t=>{var e;const i=t.mediaPaused||!t.mediaTimeIsLive,a=E(i?"seek to live":"playing live");t.setAttribute("aria-label",a);const r=(e=t.shadowRoot)==null?void 0:e.querySelector('slot[name="text"]');r&&(r.textContent=E("live")),i?t.removeAttribute("aria-disabled"):t.setAttribute("aria-disabled","true")};class Fr extends j{static get observedAttributes(){return[...super.observedAttributes,Vi,ai]}connectedCallback(){super.connectedCallback(),Ws(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Ws(this)}get mediaPaused(){return I(this,o.MEDIA_PAUSED)}set mediaPaused(e){M(this,o.MEDIA_PAUSED,e)}get mediaTimeIsLive(){return I(this,o.MEDIA_TIME_IS_LIVE)}set mediaTimeIsLive(e){M(this,o.MEDIA_TIME_IS_LIVE,e)}handleClick(){!this.mediaPaused&&this.mediaTimeIsLive||(this.dispatchEvent(new l.CustomEvent(Od,{composed:!0,bubbles:!0})),this.hasAttribute(ai)&&this.dispatchEvent(new l.CustomEvent(Ud,{composed:!0,bubbles:!0})))}}Fr.getSlotTemplateHTML=Nd;l.customElements.get("media-live-button")||l.customElements.define("media-live-button",Fr);var $d=Fr,Zo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Ht=(t,e,i)=>(Zo(t,e,"read from private field"),i?i.call(t):e.get(t)),Vs=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Wt=(t,e,i,a)=>(Zo(t,e,"write to private field"),e.set(t,i),i),Me,Ki;const yi={LOADING_DELAY:"loadingdelay",NO_AUTOHIDE:"noautohide"},Xo=500,Bd=`
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;function Hd(t){return`
    <style>
      :host {
        display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
        vertical-align: middle;
        box-sizing: border-box;
        --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, ${Xo}ms);
      }

      #status {
        color: rgba(0,0,0,0);
        width: 0px;
        height: 0px;
      }

      :host slot[name=icon] > *,
      :host ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 0);
        transition: opacity 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) slot[name=icon] > *,
      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
        opacity: var(--media-loading-indicator-opacity, 1);
        transition: opacity 0.15s var(--_loading-indicator-delay);
      }

      :host #status {
        visibility: var(--media-loading-indicator-opacity, hidden);
        transition: visibility 0.15s;
      }

      :host([${o.MEDIA_LOADING}]:not([${o.MEDIA_PAUSED}])) #status {
        visibility: var(--media-loading-indicator-opacity, visible);
        transition: visibility 0.15s var(--_loading-indicator-delay);
      }

      svg, img, ::slotted(svg), ::slotted(img) {
        width: var(--media-loading-indicator-icon-width);
        height: var(--media-loading-indicator-icon-height, 100px);
        fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
        vertical-align: middle;
      }
    </style>

    <slot name="icon">${Bd}</slot>
    <div id="status" role="status" aria-live="polite">${E("media loading")}</div>
  `}let Ma=class extends l.HTMLElement{constructor(){if(super(),Vs(this,Me,void 0),Vs(this,Ki,Xo),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PAUSED,o.MEDIA_LOADING,yi.LOADING_DELAY]}attributeChangedCallback(e,i,a){var r,s,n,d,u;e===yi.LOADING_DELAY&&i!==a?this.loadingDelay=Number(a):e===C.MEDIA_CONTROLLER&&(i&&((s=(r=Ht(this,Me))==null?void 0:r.unassociateElement)==null||s.call(r,this),Wt(this,Me,null)),a&&this.isConnected&&(Wt(this,Me,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=Ht(this,Me))==null?void 0:d.associateElement)==null||u.call(d,this)))}connectedCallback(){var e,i,a;const r=this.getAttribute(C.MEDIA_CONTROLLER);r&&(Wt(this,Me,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=Ht(this,Me))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=Ht(this,Me))==null?void 0:e.unassociateElement)==null||i.call(e,this),Wt(this,Me,null)}get loadingDelay(){return Ht(this,Ki)}set loadingDelay(e){Wt(this,Ki,e);const{style:i}=q(this.shadowRoot,":host");i.setProperty("--_loading-indicator-delay",`var(--media-loading-indicator-transition-delay, ${e}ms)`)}get mediaPaused(){return I(this,o.MEDIA_PAUSED)}set mediaPaused(e){M(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,o.MEDIA_LOADING)}set mediaLoading(e){M(this,o.MEDIA_LOADING,e)}get mediaController(){return W(this,C.MEDIA_CONTROLLER)}set mediaController(e){B(this,C.MEDIA_CONTROLLER,e)}get noAutohide(){return I(this,yi.NO_AUTOHIDE)}set noAutohide(e){M(this,yi.NO_AUTOHIDE,e)}};Me=new WeakMap;Ki=new WeakMap;Ma.shadowRootOptions={mode:"open"};Ma.getTemplateHTML=Hd;l.customElements.get("media-loading-indicator")||l.customElements.define("media-loading-indicator",Ma);var Wd=Ma;const Vd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,Ks=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,Kd=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`;function Gd(t){return`
    <style>
      :host(:not([${o.MEDIA_VOLUME_LEVEL}])) slot[name=icon] slot:not([name=high]),
      :host([${o.MEDIA_VOLUME_LEVEL}=high]) slot[name=icon] slot:not([name=high]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=icon] slot:not([name=off]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=low]) slot[name=icon] slot:not([name=low]) {
        display: none !important;
      }

      :host([${o.MEDIA_VOLUME_LEVEL}=medium]) slot[name=icon] slot:not([name=medium]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_VOLUME_LEVEL}=off])) slot[name=tooltip-unmute],
      :host([${o.MEDIA_VOLUME_LEVEL}=off]) slot[name=tooltip-mute] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="off">${Vd}</slot>
      <slot name="low">${Ks}</slot>
      <slot name="medium">${Ks}</slot>
      <slot name="high">${Kd}</slot>
    </slot>
  `}function qd(){return`
    <slot name="tooltip-mute">${E("Mute")}</slot>
    <slot name="tooltip-unmute">${E("Unmute")}</slot>
  `}const Gs=t=>{const e=t.mediaVolumeLevel==="off",i=E(e?"unmute":"mute");t.setAttribute("aria-label",i)};let wa=class extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME_LEVEL]}connectedCallback(){super.connectedCallback(),Gs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_VOLUME_LEVEL&&Gs(this)}get mediaVolumeLevel(){return W(this,o.MEDIA_VOLUME_LEVEL)}set mediaVolumeLevel(e){B(this,o.MEDIA_VOLUME_LEVEL,e)}handleClick(){const e=this.mediaVolumeLevel==="off"?p.MEDIA_UNMUTE_REQUEST:p.MEDIA_MUTE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};wa.getSlotTemplateHTML=Gd;wa.getTooltipContentHTML=qd;l.customElements.get("media-mute-button")||l.customElements.define("media-mute-button",wa);var Qd=wa;const qs=`<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`;function Yd(t){return`
    <style>
      :host([${o.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
        display: none !important;
      }

      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
        display: none !important;
      }

      :host([${o.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
      :host(:not([${o.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="enter">${qs}</slot>
      <slot name="exit">${qs}</slot>
    </slot>
  `}function zd(){return`
    <slot name="tooltip-enter">${E("Enter picture in picture mode")}</slot>
    <slot name="tooltip-exit">${E("Exit picture in picture mode")}</slot>
  `}const Qs=t=>{const e=t.mediaIsPip?E("exit picture in picture mode"):E("enter picture in picture mode");t.setAttribute("aria-label",e)};let La=class extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_IS_PIP,o.MEDIA_PIP_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),Qs(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_IS_PIP&&Qs(this)}get mediaPipUnavailable(){return W(this,o.MEDIA_PIP_UNAVAILABLE)}set mediaPipUnavailable(e){B(this,o.MEDIA_PIP_UNAVAILABLE,e)}get mediaIsPip(){return I(this,o.MEDIA_IS_PIP)}set mediaIsPip(e){M(this,o.MEDIA_IS_PIP,e)}handleClick(){const e=this.mediaIsPip?p.MEDIA_EXIT_PIP_REQUEST:p.MEDIA_ENTER_PIP_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};La.getSlotTemplateHTML=Yd;La.getTooltipContentHTML=zd;l.customElements.get("media-pip-button")||l.customElements.define("media-pip-button",La);var Zd=La,Xd=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ut=(t,e,i)=>(Xd(t,e,"read from private field"),i?i.call(t):e.get(t)),Jd=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Ve;const Ha={RATES:"rates"},jd=[1,1.2,1.5,1.7,2],Zt=1;function mr(t){return Math.round(t*100)/100}function eu(t){return`
    <style>
      :host {
        min-width: 5ch;
        padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
      }
    </style>
    <slot name="icon">${t.mediaplaybackrate?mr(+t.mediaplaybackrate):Zt}x</slot>
  `}function tu(){return E("Playback rate")}let Da=class extends j{constructor(){var e;super(),Jd(this,Ve,new bo(this,Ha.RATES,{defaultValue:jd})),this.container=this.shadowRoot.querySelector('slot[name="icon"]'),this.container.innerHTML=`${mr((e=this.mediaPlaybackRate)!=null?e:Zt)}x`}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PLAYBACK_RATE,Ha.RATES]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),e===Ha.RATES&&(ut(this,Ve).value=a),e===o.MEDIA_PLAYBACK_RATE){const r=a?+a:Number.NaN,s=mr(Number.isNaN(r)?Zt:r);this.container.innerHTML=`${s}x`,this.setAttribute("aria-label",E("Playback rate {playbackRate}",{playbackRate:s}))}}get rates(){return ut(this,Ve)}set rates(e){e?Array.isArray(e)?ut(this,Ve).value=e.join(" "):typeof e=="string"&&(ut(this,Ve).value=e):ut(this,Ve).value=""}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,Zt)}set mediaPlaybackRate(e){J(this,o.MEDIA_PLAYBACK_RATE,e)}handleClick(){var e,i;const a=Array.from(ut(this,Ve).values(),n=>+n).sort((n,d)=>n-d),r=(i=(e=a.find(n=>n>this.mediaPlaybackRate))!=null?e:a[0])!=null?i:Zt,s=new l.CustomEvent(p.MEDIA_PLAYBACK_RATE_REQUEST,{composed:!0,bubbles:!0,detail:r});this.dispatchEvent(s)}};Ve=new WeakMap;Da.getSlotTemplateHTML=eu;Da.getTooltipContentHTML=tu;l.customElements.get("media-playback-rate-button")||l.customElements.define("media-playback-rate-button",Da);var iu=Da;const au=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,ru=`<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`;function su(t){return`
    <style>
      :host([${o.MEDIA_PAUSED}]) slot[name=pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=play] {
        display: none !important;
      }

      :host([${o.MEDIA_PAUSED}]) slot[name=tooltip-pause],
      :host(:not([${o.MEDIA_PAUSED}])) slot[name=tooltip-play] {
        display: none;
      }
    </style>

    <slot name="icon">
      <slot name="play">${au}</slot>
      <slot name="pause">${ru}</slot>
    </slot>
  `}function ou(){return`
    <slot name="tooltip-play">${E("Play")}</slot>
    <slot name="tooltip-pause">${E("Pause")}</slot>
  `}const Ys=t=>{const e=t.mediaPaused?E("play"):E("pause");t.setAttribute("aria-label",e)};let Ca=class extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_ENDED]}connectedCallback(){super.connectedCallback(),Ys(this)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PAUSED||e===o.MEDIA_LANG)&&Ys(this)}get mediaPaused(){return I(this,o.MEDIA_PAUSED)}set mediaPaused(e){M(this,o.MEDIA_PAUSED,e)}handleClick(){const e=this.mediaPaused?p.MEDIA_PLAY_REQUEST:p.MEDIA_PAUSE_REQUEST;this.dispatchEvent(new l.CustomEvent(e,{composed:!0,bubbles:!0}))}};Ca.getSlotTemplateHTML=su;Ca.getTooltipContentHTML=ou;l.customElements.get("media-play-button")||l.customElements.define("media-play-button",Ca);var nu=Ca;const be={PLACEHOLDER_SRC:"placeholdersrc",SRC:"src"};function lu(t){return`
    <style>
      :host {
        pointer-events: none;
        display: var(--media-poster-image-display, inline-block);
        box-sizing: border-box;
      }

      img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        background-repeat: no-repeat;
        background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
        background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, center);
      }
    </style>

    <img part="poster img" aria-hidden="true" id="image"/>
  `}const du=t=>{t.style.removeProperty("background-image")},uu=(t,e)=>{t.style["background-image"]=`url('${e}')`};class Ra extends l.HTMLElement{static get observedAttributes(){return[be.PLACEHOLDER_SRC,be.SRC]}constructor(){if(super(),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}this.image=this.shadowRoot.querySelector("#image")}attributeChangedCallback(e,i,a){e===be.SRC&&(a==null?this.image.removeAttribute(be.SRC):this.image.setAttribute(be.SRC,a)),e===be.PLACEHOLDER_SRC&&(a==null?du(this.image):uu(this.image,a))}get placeholderSrc(){return W(this,be.PLACEHOLDER_SRC)}set placeholderSrc(e){B(this,be.SRC,e)}get src(){return W(this,be.SRC)}set src(e){B(this,be.SRC,e)}}Ra.shadowRootOptions={mode:"open"};Ra.getTemplateHTML=lu;l.customElements.get("media-poster-image")||l.customElements.define("media-poster-image",Ra);var cu=Ra,Jo=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},hu=(t,e,i)=>(Jo(t,e,"read from private field"),i?i.call(t):e.get(t)),mu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},pu=(t,e,i,a)=>(Jo(t,e,"write to private field"),e.set(t,i),i),Gi;class jo extends Ue{constructor(){super(),mu(this,Gi,void 0),pu(this,Gi,this.shadowRoot.querySelector("slot"))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_LANG]}attributeChangedCallback(e,i,a){if(super.attributeChangedCallback(e,i,a),(e===o.MEDIA_PREVIEW_CHAPTER||e===o.MEDIA_LANG)&&a!==i&&a!=null)if(hu(this,Gi).textContent=a,a!==""){const r=E("chapter: {chapterName}",{chapterName:a});this.setAttribute("aria-valuetext",r)}else this.removeAttribute("aria-valuetext")}get mediaPreviewChapter(){return W(this,o.MEDIA_PREVIEW_CHAPTER)}set mediaPreviewChapter(e){B(this,o.MEDIA_PREVIEW_CHAPTER,e)}}Gi=new WeakMap;l.customElements.get("media-preview-chapter-display")||l.customElements.define("media-preview-chapter-display",jo);var Eu=jo,en=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},ki=(t,e,i)=>(en(t,e,"read from private field"),i?i.call(t):e.get(t)),vu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},Si=(t,e,i,a)=>(en(t,e,"write to private field"),e.set(t,i),i),we;function fu(t){return`
    <style>
      :host {
        box-sizing: border-box;
        display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
        overflow: hidden;
      }

      img {
        display: none;
        position: relative;
      }
    </style>
    <img crossorigin loading="eager" decoding="async">
  `}class xa extends l.HTMLElement{constructor(){if(super(),vu(this,we,void 0),!this.shadowRoot){this.attachShadow(this.constructor.shadowRootOptions);const e=_e(this.attributes);this.shadowRoot.innerHTML=this.constructor.getTemplateHTML(e)}}static get observedAttributes(){return[C.MEDIA_CONTROLLER,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS]}connectedCallback(){var e,i,a;const r=this.getAttribute(C.MEDIA_CONTROLLER);r&&(Si(this,we,(e=this.getRootNode())==null?void 0:e.getElementById(r)),(a=(i=ki(this,we))==null?void 0:i.associateElement)==null||a.call(i,this))}disconnectedCallback(){var e,i;(i=(e=ki(this,we))==null?void 0:e.unassociateElement)==null||i.call(e,this),Si(this,we,null)}attributeChangedCallback(e,i,a){var r,s,n,d,u;[o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_COORDS].includes(e)&&this.update(),e===C.MEDIA_CONTROLLER&&(i&&((s=(r=ki(this,we))==null?void 0:r.unassociateElement)==null||s.call(r,this),Si(this,we,null)),a&&this.isConnected&&(Si(this,we,(n=this.getRootNode())==null?void 0:n.getElementById(a)),(u=(d=ki(this,we))==null?void 0:d.associateElement)==null||u.call(d,this)))}get mediaPreviewImage(){return W(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){B(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewCoords(){const e=this.getAttribute(o.MEDIA_PREVIEW_COORDS);if(e)return e.split(/\s+/).map(i=>+i)}set mediaPreviewCoords(e){if(!e){this.removeAttribute(o.MEDIA_PREVIEW_COORDS);return}this.setAttribute(o.MEDIA_PREVIEW_COORDS,e.join(" "))}update(){const e=this.mediaPreviewCoords,i=this.mediaPreviewImage;if(!(e&&i))return;const[a,r,s,n]=e,d=i.split("#")[0],u=getComputedStyle(this),{maxWidth:k,maxHeight:y,minWidth:b,minHeight:m}=u,h=u.getPropertyValue("--media-preview-thumbnail-object-fit").trim()||"contain";let _,f;if(h==="fill"){const U=parseInt(k)/s,Y=parseInt(y)/n,re=parseInt(b)/s,ze=parseInt(m)/n;_=U<1?U:Math.max(U,re),f=Y<1?Y:Math.max(Y,ze)}else{const U=Math.min(parseInt(k)/s,parseInt(y)/n),Y=Math.max(parseInt(b)/s,parseInt(m)/n),ze=U<1?U:Y>1?Y:1;_=ze,f=ze}const{style:A}=q(this.shadowRoot,":host"),T=q(this.shadowRoot,"img").style,Q=this.shadowRoot.querySelector("img"),R=Math.min(_,f)<1?"min":"max";A.setProperty(`${R}-width`,"initial","important"),A.setProperty(`${R}-height`,"initial","important"),A.width=`${s*_}px`,A.height=`${n*f}px`;const x=()=>{T.width=`${this.imgWidth*_}px`,T.height=`${this.imgHeight*f}px`,T.display="block"};Q.src!==d&&(Q.onload=()=>{this.imgWidth=Q.naturalWidth,this.imgHeight=Q.naturalHeight,x(),Q.onload=null},Q.src=d,x()),x(),T.transform=`translate(-${a*_}px, -${r*f}px)`}}we=new WeakMap;xa.shadowRootOptions={mode:"open"};xa.getTemplateHTML=fu;l.customElements.get("media-preview-thumbnail")||l.customElements.define("media-preview-thumbnail",xa);var pr=xa,tn=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},zs=(t,e,i)=>(tn(t,e,"read from private field"),i?i.call(t):e.get(t)),gu=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},_u=(t,e,i,a)=>(tn(t,e,"write to private field"),e.set(t,i),i),Xt;class an extends Ue{constructor(){super(),gu(this,Xt,void 0),_u(this,Xt,this.shadowRoot.querySelector("slot")),zs(this,Xt).textContent=Ye(0)}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PREVIEW_TIME]}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_PREVIEW_TIME&&a!=null&&(zs(this,Xt).textContent=Ye(parseFloat(a)))}get mediaPreviewTime(){return $(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){J(this,o.MEDIA_PREVIEW_TIME,e)}}Xt=new WeakMap;l.customElements.get("media-preview-time-display")||l.customElements.define("media-preview-time-display",an);var bu=an;const ct={SEEK_OFFSET:"seekoffset"},Wa=30,Au=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(2.18 19.87)">${t}</text>
    <path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/>
  </svg>`;function Tu(t,e){return`
    <slot name="icon">${Au(e.seekOffset)}</slot>
  `}const yu=(t,e)=>{t.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:e}))};function ku(){return E("Seek backward")}const Su=0;class Pa extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,ct.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=$(this,ct.SEEK_OFFSET,Wa)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),yu(this,this.seekOffset),e===ct.SEEK_OFFSET&&(this.seekOffset=$(this,ct.SEEK_OFFSET,Wa))}get seekOffset(){return $(this,ct.SEEK_OFFSET,Wa)}set seekOffset(e){J(this,ct.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek back {seekOffset} seconds",{seekOffset:this.seekOffset})),uo(co(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME,Su)}set mediaCurrentTime(e){J(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){const e=Math.max(this.mediaCurrentTime-this.seekOffset,0),i=new l.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Pa.getSlotTemplateHTML=Tu;Pa.getTooltipContentHTML=ku;l.customElements.get("media-seek-backward-button")||l.customElements.define("media-seek-backward-button",Pa);var Iu=Pa;const ht={SEEK_OFFSET:"seekoffset"},Va=30,Mu=t=>`
  <svg aria-hidden="true" viewBox="0 0 20 24">
    <defs>
      <style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style>
    </defs>
    <text class="text value" transform="translate(8.9 19.87)">${t}</text>
    <path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/>
  </svg>`;function wu(t,e){return`
    <slot name="icon">${Mu(e.seekOffset)}</slot>
  `}const Lu=(t,e)=>{t.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:e}))};function Du(){return E("Seek forward")}const Cu=0;class Oa extends j{static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_CURRENT_TIME,ht.SEEK_OFFSET]}connectedCallback(){super.connectedCallback(),this.seekOffset=$(this,ht.SEEK_OFFSET,Va)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),Lu(this,this.seekOffset),e===ht.SEEK_OFFSET&&(this.seekOffset=$(this,ht.SEEK_OFFSET,Va))}get seekOffset(){return $(this,ht.SEEK_OFFSET,Va)}set seekOffset(e){J(this,ht.SEEK_OFFSET,e),this.setAttribute("aria-label",E("seek forward {seekOffset} seconds",{seekOffset:this.seekOffset})),uo(co(this,"icon"),this.seekOffset)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME,Cu)}set mediaCurrentTime(e){J(this,o.MEDIA_CURRENT_TIME,e)}handleClick(){const e=this.mediaCurrentTime+this.seekOffset,i=new l.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Oa.getSlotTemplateHTML=wu;Oa.getTooltipContentHTML=Du;l.customElements.get("media-seek-forward-button")||l.customElements.define("media-seek-forward-button",Oa);var Ru=Oa,Nr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},fe=(t,e,i)=>(Nr(t,e,"read from private field"),i?i.call(t):e.get(t)),Xe=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},$r=(t,e,i,a)=>(Nr(t,e,"write to private field"),e.set(t,i),i),Ge=(t,e,i)=>(Nr(t,e,"access private method"),i),bt,Ce,Ua,Br,rn,la,Hr,Jt,qi,Qi,Er;const Ke={REMAINING:"remaining",SHOW_DURATION:"showduration",NO_TOGGLE:"notoggle"},Zs=[...Object.values(Ke),o.MEDIA_CURRENT_TIME,o.MEDIA_DURATION,o.MEDIA_SEEKABLE],sn=["Enter"," "],xu="&nbsp;/&nbsp;",vr=(t,{timesSep:e=xu}={})=>{var i,a;const r=(i=t.mediaCurrentTime)!=null?i:0,[,s]=(a=t.mediaSeekable)!=null?a:[];let n=0;Number.isFinite(t.mediaDuration)?n=t.mediaDuration:Number.isFinite(s)&&(n=s);const d=t.remaining?Ye(0-(n-r)):Ye(r);return t.showDuration?`${d}${e}${Ye(n)}`:d},Pu=t=>{var e;const i=t.mediaCurrentTime,[,a]=(e=t.mediaSeekable)!=null?e:[];let r=null;if(Number.isFinite(t.mediaDuration)?r=t.mediaDuration:Number.isFinite(a)&&(r=a),i==null||r===null){t.setAttribute("aria-description",E("video not loaded, unknown time."));return}const s=t.remaining?ti(0-(r-i)):ti(i);if(!t.showDuration){t.setAttribute("aria-description",s);return}const n=ti(r),d=E("{currentTime} of {totalTime}",{currentTime:s,totalTime:n});t.setAttribute("aria-description",d)};function Ou(t,e){return`
    <slot>${vr(e)}</slot>
  `}const Uu=t=>{t.setAttribute("aria-label",E("playback time"))};let Wr=class extends Ue{constructor(){super(),Xe(this,Br),Xe(this,la),Xe(this,Jt),Xe(this,Qi),Xe(this,bt,void 0),Xe(this,Ce,null),Xe(this,Ua,e=>{const{metaKey:i,altKey:a,key:r}=e;if(i||a||!sn.includes(r)){this.removeEventListener("keyup",fe(this,Ce));return}this.addEventListener("keyup",fe(this,Ce))}),$r(this,bt,this.shadowRoot.querySelector("slot")),fe(this,bt).innerHTML=`${vr(this)}`}static get observedAttributes(){return[...super.observedAttributes,...Zs,"disabled"]}connectedCallback(){const{style:e}=q(this.shadowRoot,":host(:hover:not([notoggle]))");e.setProperty("cursor","var(--media-cursor, pointer)"),e.setProperty("background","var(--media-control-hover-background, rgba(50 50 70 / .7))"),this.setAttribute("aria-label",E("playback time")),Ge(this,Jt,qi).call(this),super.connectedCallback()}toggleTimeDisplay(){this.noToggle||(this.hasAttribute("remaining")?this.removeAttribute("remaining"):this.setAttribute("remaining",""))}disconnectedCallback(){this.disable(),Ge(this,la,Hr).call(this),super.disconnectedCallback()}attributeChangedCallback(e,i,a){Uu(this),Zs.includes(e)?this.update():e==="disabled"&&a!==i?a==null?Ge(this,Jt,qi).call(this):Ge(this,Qi,Er).call(this):e===Ke.NO_TOGGLE&&a!==i&&(this.noToggle?Ge(this,Qi,Er).call(this):Ge(this,Jt,qi).call(this)),super.attributeChangedCallback(e,i,a)}enable(){this.noToggle||(this.tabIndex=0)}disable(){this.tabIndex=-1}get remaining(){return I(this,Ke.REMAINING)}set remaining(e){M(this,Ke.REMAINING,e)}get showDuration(){return I(this,Ke.SHOW_DURATION)}set showDuration(e){M(this,Ke.SHOW_DURATION,e)}get noToggle(){return I(this,Ke.NO_TOGGLE)}set noToggle(e){M(this,Ke.NO_TOGGLE,e)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){J(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){J(this,o.MEDIA_CURRENT_TIME,e)}get mediaSeekable(){const e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}update(){const e=vr(this);Pu(this),e!==fe(this,bt).innerHTML&&(fe(this,bt).innerHTML=e)}};bt=new WeakMap;Ce=new WeakMap;Ua=new WeakMap;Br=new WeakSet;rn=function(){fe(this,Ce)||($r(this,Ce,t=>{const{key:e}=t;if(!sn.includes(e)){this.removeEventListener("keyup",fe(this,Ce));return}this.toggleTimeDisplay()}),this.addEventListener("keydown",fe(this,Ua)),this.addEventListener("click",this.toggleTimeDisplay))};la=new WeakSet;Hr=function(){fe(this,Ce)&&(this.removeEventListener("keyup",fe(this,Ce)),this.removeEventListener("keydown",fe(this,Ua)),this.removeEventListener("click",this.toggleTimeDisplay),$r(this,Ce,null))};Jt=new WeakSet;qi=function(){!this.noToggle&&!this.hasAttribute("disabled")&&(this.setAttribute("role","button"),this.enable(),Ge(this,Br,rn).call(this))};Qi=new WeakSet;Er=function(){this.removeAttribute("role"),this.disable(),Ge(this,la,Hr).call(this)};Wr.getSlotTemplateHTML=Ou;l.customElements.get("media-time-display")||l.customElements.define("media-time-display",Wr);var Fu=Wr,on=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Z=(t,e,i)=>(on(t,e,"read from private field"),e.get(t)),Ae=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ne=(t,e,i,a)=>(on(t,e,"write to private field"),e.set(t,i),i),Nu=(t,e,i,a)=>({set _(r){ne(t,e,r)},get _(){return Z(t,e)}}),At,Yi,Tt,jt,zi,Zi,Xi,yt,je,Ji;class $u{constructor(e,i,a){Ae(this,At,void 0),Ae(this,Yi,void 0),Ae(this,Tt,void 0),Ae(this,jt,void 0),Ae(this,zi,void 0),Ae(this,Zi,void 0),Ae(this,Xi,void 0),Ae(this,yt,void 0),Ae(this,je,0),Ae(this,Ji,(r=performance.now())=>{ne(this,je,requestAnimationFrame(Z(this,Ji))),ne(this,jt,performance.now()-Z(this,Tt));const s=1e3/this.fps;if(Z(this,jt)>s){ne(this,Tt,r-Z(this,jt)%s);const n=1e3/((r-Z(this,Yi))/++Nu(this,zi)._),d=(r-Z(this,Zi))/1e3/this.duration;let u=Z(this,Xi)+d*this.playbackRate;u-Z(this,At).valueAsNumber>0?ne(this,yt,this.playbackRate/this.duration/n):(ne(this,yt,.995*Z(this,yt)),u=Z(this,At).valueAsNumber+Z(this,yt)),this.callback(u)}}),ne(this,At,e),this.callback=i,this.fps=a}start(){Z(this,je)===0&&(ne(this,Tt,performance.now()),ne(this,Yi,Z(this,Tt)),ne(this,zi,0),Z(this,Ji).call(this))}stop(){Z(this,je)!==0&&(cancelAnimationFrame(Z(this,je)),ne(this,je,0))}update({start:e,duration:i,playbackRate:a}){const r=e-Z(this,At).valueAsNumber,s=Math.abs(i-this.duration);(r>0||r<-.03||s>=.5)&&this.callback(e),ne(this,Xi,e),ne(this,Zi,performance.now()),this.duration=i,this.playbackRate=a}}At=new WeakMap;Yi=new WeakMap;Tt=new WeakMap;jt=new WeakMap;zi=new WeakMap;Zi=new WeakMap;Xi=new WeakMap;yt=new WeakMap;je=new WeakMap;Ji=new WeakMap;var Vr=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},O=(t,e,i)=>(Vr(t,e,"read from private field"),i?i.call(t):e.get(t)),G=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},de=(t,e,i,a)=>(Vr(t,e,"write to private field"),e.set(t,i),i),ue=(t,e,i)=>(Vr(t,e,"access private method"),i),kt,qe,da,ri,ua,ji,di,ui,St,It,ei,fr,nn,gr,ca,Kr,ha,Gr,ma,qr,_r,ln,ci,pa,br,dn;const Bu=t=>{const e=t.range,i=ti(+un(t)),a=ti(+t.mediaSeekableEnd),r=i&&a?E("{currentTime} of {totalTime}",{currentTime:i,totalTime:a}):E("video not loaded, unknown time.");e.setAttribute("aria-valuetext",r)};function Hu(t){return`
    <style>
      :host {
        --media-box-border-radius: 4px;
        --media-box-padding-left: 10px;
        --media-box-padding-right: 10px;
        --media-preview-border-radius: var(--media-box-border-radius);
        --media-box-arrow-offset: var(--media-box-border-radius);
        --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
        --_preview-background: var(--media-preview-background, var(--_control-background));

        
        contain: layout;
      }

      #buffered {
        background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
        position: absolute;
        height: 100%;
        will-change: width;
      }

      #preview-rail,
      #current-rail {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 100%;
        pointer-events: none;
        will-change: transform;
      }

      [part~="box"] {
        width: min-content;
        
        position: absolute;
        bottom: 100%;
        flex-direction: column;
        align-items: center;
        transform: translateX(-50%);
      }

      [part~="current-box"] {
        display: var(--media-current-box-display, var(--media-box-display, flex));
        margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
        visibility: hidden;
      }

      [part~="preview-box"] {
        display: var(--media-preview-box-display, var(--media-box-display, flex));
        margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
        transition-property: var(--media-preview-transition-property, visibility, opacity);
        transition-duration: var(--media-preview-transition-duration-out, .25s);
        transition-delay: var(--media-preview-transition-delay-out, 0s);
        visibility: hidden;
        opacity: 0;
      }

      :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }

      @media (hover: hover) {
        :host(:is([${o.MEDIA_PREVIEW_IMAGE}], [${o.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
          transition-duration: var(--media-preview-transition-duration-in, .5s);
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
          opacity: 1;
        }
      }

      media-preview-thumbnail,
      ::slotted(media-preview-thumbnail) {
        visibility: hidden;
        
        transition: visibility 0s .25s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-thumbnail-background, var(--_preview-background));
        box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
        max-width: var(--media-preview-thumbnail-max-width, 180px);
        max-height: var(--media-preview-thumbnail-max-height, 160px);
        min-width: var(--media-preview-thumbnail-min-width, 120px);
        min-height: var(--media-preview-thumbnail-min-height, 80px);
        border: var(--media-preview-thumbnail-border);
        border-radius: var(--media-preview-thumbnail-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
      :host([${o.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      @media (hover: hover) {
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
        :host([${o.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
          transition-delay: var(--media-preview-transition-delay-in, .25s);
          visibility: visible;
        }

        :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
          --media-time-range-hover-display: block;
        }
      }

      media-preview-chapter-display,
      ::slotted(media-preview-chapter-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        visibility: hidden;
        
        transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-chapter-background, var(--_preview-background));
        border-radius: var(--media-preview-chapter-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-chapter-padding, 3.5px 9px);
        margin: var(--media-preview-chapter-margin, 0 0 5px);
        text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-chapter-border-radius, 0);
        padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
        margin: var(--media-preview-chapter-margin, 0);
        min-width: 100%;
      }

      media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}],
      ::slotted(media-preview-chapter-display[${o.MEDIA_PREVIEW_CHAPTER}]) {
        visibility: visible;
      }

      media-preview-chapter-display:not([aria-valuetext]),
      ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
        display: none;
      }

      media-preview-time-display,
      ::slotted(media-preview-time-display),
      media-time-display,
      ::slotted(media-time-display) {
        font-size: var(--media-font-size, 13px);
        line-height: 17px;
        min-width: 0;
        
        transition: min-width 0s, border-radius 0s;
        transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
        background: var(--media-preview-time-background, var(--_preview-background));
        border-radius: var(--media-preview-time-border-radius,
          var(--media-preview-border-radius) var(--media-preview-border-radius)
          var(--media-preview-border-radius) var(--media-preview-border-radius));
        padding: var(--media-preview-time-padding, 3.5px 9px);
        margin: var(--media-preview-time-margin, 0);
        text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50%)
        ));
      }

      :host([${o.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
      :host([${o.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        border-radius: var(--media-preview-time-border-radius,
          0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
        min-width: 100%;
      }

      :host([${o.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }

      [part~="arrow"],
      ::slotted([part~="arrow"]) {
        display: var(--media-box-arrow-display, inline-block);
        transform: translateX(min(
          max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
          calc(var(--_box-shift, 0))),
          calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
        ));
        
        border-color: transparent;
        border-top-color: var(--media-box-arrow-background, var(--_control-background));
        border-width: var(--media-box-arrow-border-width,
          var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
        border-style: solid;
        justify-content: center;
        height: 0;
      }
    </style>
    <div id="preview-rail">
      <slot name="preview" part="box preview-box">
        <media-preview-thumbnail>
          <template shadowrootmode="${pr.shadowRootOptions.mode}">
            ${pr.getTemplateHTML({})}
          </template>
        </media-preview-thumbnail>
        <media-preview-chapter-display></media-preview-chapter-display>
        <media-preview-time-display></media-preview-time-display>
        <slot name="preview-arrow"><div part="arrow"></div></slot>
      </slot>
    </div>
    <div id="current-rail">
      <slot name="current" part="box current-box">
        
      </slot>
    </div>
  `}const Ii=(t,e=t.mediaCurrentTime)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;if(Number.isNaN(a))return 0;const r=(e-i)/(a-i);return Math.max(0,Math.min(r,1))},un=(t,e=t.range.valueAsNumber)=>{const i=Number.isFinite(t.mediaSeekableStart)?t.mediaSeekableStart:0,a=Number.isFinite(t.mediaDuration)?t.mediaDuration:t.mediaSeekableEnd;return Number.isNaN(a)?0:e*(a-i)+i};let Fa=class extends st{constructor(){super(),G(this,fr),G(this,ca),G(this,ha),G(this,ma),G(this,_r),G(this,ci),G(this,br),G(this,kt,null),G(this,qe,void 0),G(this,da,void 0),G(this,ri,void 0),G(this,ua,void 0),G(this,ji,void 0),G(this,di,void 0),G(this,ui,void 0),G(this,St,void 0),G(this,It,void 0),G(this,ei,()=>{ue(this,fr,nn).call(this)?O(this,qe).start():O(this,qe).stop()}),G(this,gr,a=>{this.dragging||(Ar(a)&&(this.range.valueAsNumber=a),O(this,It)||this.updateBar())}),this.shadowRoot.querySelector("#track").insertAdjacentHTML("afterbegin",'<div id="buffered" part="buffered"></div>'),de(this,da,this.shadowRoot.querySelectorAll('[part~="box"]')),de(this,ua,this.shadowRoot.querySelector('[part~="preview-box"]')),de(this,ji,this.shadowRoot.querySelector('[part~="current-box"]'));const i=getComputedStyle(this);de(this,di,parseInt(i.getPropertyValue("--media-box-padding-left"))),de(this,ui,parseInt(i.getPropertyValue("--media-box-padding-right"))),de(this,qe,new $u(this.range,O(this,gr),60))}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_PAUSED,o.MEDIA_DURATION,o.MEDIA_SEEKABLE,o.MEDIA_CURRENT_TIME,o.MEDIA_PREVIEW_IMAGE,o.MEDIA_PREVIEW_TIME,o.MEDIA_PREVIEW_CHAPTER,o.MEDIA_BUFFERED,o.MEDIA_PLAYBACK_RATE,o.MEDIA_LOADING,o.MEDIA_ENDED]}connectedCallback(){var e;super.connectedCallback(),this.range.setAttribute("aria-label",E("seek")),O(this,ei).call(this),de(this,kt,this.getRootNode()),(e=O(this,kt))==null||e.addEventListener("transitionstart",this)}disconnectedCallback(){var e;super.disconnectedCallback(),O(this,qe).stop(),(e=O(this,kt))==null||e.removeEventListener("transitionstart",this),de(this,kt,null)}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),i!=a&&(e===o.MEDIA_CURRENT_TIME||e===o.MEDIA_PAUSED||e===o.MEDIA_ENDED||e===o.MEDIA_LOADING||e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE?(O(this,qe).update({start:Ii(this),duration:this.mediaSeekableEnd-this.mediaSeekableStart,playbackRate:this.mediaPlaybackRate}),O(this,ei).call(this),Bu(this)):e===o.MEDIA_BUFFERED&&this.updateBufferedBar(),(e===o.MEDIA_DURATION||e===o.MEDIA_SEEKABLE)&&(this.mediaChaptersCues=O(this,St),this.updateBar()))}get mediaChaptersCues(){return O(this,St)}set mediaChaptersCues(e){var i;de(this,St,e),this.updateSegments((i=O(this,St))==null?void 0:i.map(a=>({start:Ii(this,a.startTime),end:Ii(this,a.endTime)})))}get mediaPaused(){return I(this,o.MEDIA_PAUSED)}set mediaPaused(e){M(this,o.MEDIA_PAUSED,e)}get mediaLoading(){return I(this,o.MEDIA_LOADING)}set mediaLoading(e){M(this,o.MEDIA_LOADING,e)}get mediaDuration(){return $(this,o.MEDIA_DURATION)}set mediaDuration(e){J(this,o.MEDIA_DURATION,e)}get mediaCurrentTime(){return $(this,o.MEDIA_CURRENT_TIME)}set mediaCurrentTime(e){J(this,o.MEDIA_CURRENT_TIME,e)}get mediaPlaybackRate(){return $(this,o.MEDIA_PLAYBACK_RATE,1)}set mediaPlaybackRate(e){J(this,o.MEDIA_PLAYBACK_RATE,e)}get mediaBuffered(){const e=this.getAttribute(o.MEDIA_BUFFERED);return e?e.split(" ").map(i=>i.split(":").map(a=>+a)):[]}set mediaBuffered(e){if(!e){this.removeAttribute(o.MEDIA_BUFFERED);return}const i=e.map(a=>a.join(":")).join(" ");this.setAttribute(o.MEDIA_BUFFERED,i)}get mediaSeekable(){const e=this.getAttribute(o.MEDIA_SEEKABLE);if(e)return e.split(":").map(i=>+i)}set mediaSeekable(e){if(e==null){this.removeAttribute(o.MEDIA_SEEKABLE);return}this.setAttribute(o.MEDIA_SEEKABLE,e.join(":"))}get mediaSeekableEnd(){var e;const[,i=this.mediaDuration]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaSeekableStart(){var e;const[i=0]=(e=this.mediaSeekable)!=null?e:[];return i}get mediaPreviewImage(){return W(this,o.MEDIA_PREVIEW_IMAGE)}set mediaPreviewImage(e){B(this,o.MEDIA_PREVIEW_IMAGE,e)}get mediaPreviewTime(){return $(this,o.MEDIA_PREVIEW_TIME)}set mediaPreviewTime(e){J(this,o.MEDIA_PREVIEW_TIME,e)}get mediaEnded(){return I(this,o.MEDIA_ENDED)}set mediaEnded(e){M(this,o.MEDIA_ENDED,e)}updateBar(){super.updateBar(),this.updateBufferedBar(),this.updateCurrentBox()}updateBufferedBar(){var e;const i=this.mediaBuffered;if(!i.length)return;let a;if(this.mediaEnded)a=1;else{const s=this.mediaCurrentTime,[,n=this.mediaSeekableStart]=(e=i.find(([d,u])=>d<=s&&s<=u))!=null?e:[];a=Ii(this,n)}const{style:r}=q(this.shadowRoot,"#buffered");r.setProperty("width",`${a*100}%`)}updateCurrentBox(){if(!this.shadowRoot.querySelector('slot[name="current"]').assignedElements().length)return;const i=q(this.shadowRoot,"#current-rail"),a=q(this.shadowRoot,'[part~="current-box"]'),r=ue(this,ca,Kr).call(this,O(this,ji)),s=ue(this,ha,Gr).call(this,r,this.range.valueAsNumber),n=ue(this,ma,qr).call(this,r,this.range.valueAsNumber);i.style.transform=`translateX(${s})`,i.style.setProperty("--_range-width",`${r.range.width}`),a.style.setProperty("--_box-shift",`${n}`),a.style.setProperty("--_box-width",`${r.box.width}px`),a.style.setProperty("visibility","initial")}handleEvent(e){switch(super.handleEvent(e),e.type){case"input":ue(this,br,dn).call(this);break;case"pointermove":ue(this,_r,ln).call(this,e);break;case"pointerup":O(this,It)&&de(this,It,!1);break;case"pointerdown":de(this,It,!0);break;case"pointerleave":ue(this,ci,pa).call(this,null);break;case"transitionstart":Ut(e.target,this)&&setTimeout(()=>O(this,ei).call(this),0);break}}};kt=new WeakMap;qe=new WeakMap;da=new WeakMap;ri=new WeakMap;ua=new WeakMap;ji=new WeakMap;di=new WeakMap;ui=new WeakMap;St=new WeakMap;It=new WeakMap;ei=new WeakMap;fr=new WeakSet;nn=function(){return this.isConnected&&!this.mediaPaused&&!this.mediaLoading&&!this.mediaEnded&&this.mediaSeekableEnd>0&&mo(this)};gr=new WeakMap;ca=new WeakSet;Kr=function(t){var e;const a=((e=this.getAttribute("bounds")?hi(this,`#${this.getAttribute("bounds")}`):this.parentElement)!=null?e:this).getBoundingClientRect(),r=this.range.getBoundingClientRect(),s=t.offsetWidth,n=-(r.left-a.left-s/2),d=a.right-r.left-s/2;return{box:{width:s,min:n,max:d},bounds:a,range:r}};ha=new WeakSet;Gr=function(t,e){let i=`${e*100}%`;const{width:a,min:r,max:s}=t.box;if(!a)return i;if(Number.isNaN(r)||(i=`max(${`calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`}, ${i})`),!Number.isNaN(s)){const d=`calc(1 / var(--_range-width) * 100 * ${s}% - var(--media-box-padding-right))`;i=`min(${i}, ${d})`}return i};ma=new WeakSet;qr=function(t,e){const{width:i,min:a,max:r}=t.box,s=e*t.range.width;if(s<a+O(this,di)){const n=t.range.left-t.bounds.left-O(this,di);return`${s-i/2+n}px`}if(s>r-O(this,ui)){const n=t.bounds.right-t.range.right-O(this,ui);return`${s+i/2-n-t.range.width}px`}return 0};_r=new WeakSet;ln=function(t){const e=[...O(this,da)].some(y=>t.composedPath().includes(y));if(!this.dragging&&(e||!t.composedPath().includes(this))){ue(this,ci,pa).call(this,null);return}const i=this.mediaSeekableEnd;if(!i)return;const a=q(this.shadowRoot,"#preview-rail"),r=q(this.shadowRoot,'[part~="preview-box"]'),s=ue(this,ca,Kr).call(this,O(this,ua));let n=(t.clientX-s.range.left)/s.range.width;n=Math.max(0,Math.min(1,n));const d=ue(this,ha,Gr).call(this,s,n),u=ue(this,ma,qr).call(this,s,n);a.style.transform=`translateX(${d})`,a.style.setProperty("--_range-width",`${s.range.width}`),r.style.setProperty("--_box-shift",`${u}`),r.style.setProperty("--_box-width",`${s.box.width}px`);const k=Math.round(O(this,ri))-Math.round(n*i);Math.abs(k)<1&&n>.01&&n<.99||(de(this,ri,n*i),ue(this,ci,pa).call(this,O(this,ri)))};ci=new WeakSet;pa=function(t){this.dispatchEvent(new l.CustomEvent(p.MEDIA_PREVIEW_REQUEST,{composed:!0,bubbles:!0,detail:t}))};br=new WeakSet;dn=function(){O(this,qe).stop();const t=un(this);this.dispatchEvent(new l.CustomEvent(p.MEDIA_SEEK_REQUEST,{composed:!0,bubbles:!0,detail:t}))};Fa.shadowRootOptions={mode:"open"};Fa.getContainerTemplateHTML=Hu;l.customElements.get("media-time-range")||l.customElements.define("media-time-range",Fa);var Wu=Fa,Vu=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)},Xs=(t,e,i)=>(Vu(t,e,"read from private field"),i?i.call(t):e.get(t)),Ku=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},ea;const Gu=1,qu=t=>t.mediaMuted?0:t.mediaVolume,Qu=t=>`${Math.round(t*100)}%`;let cn=class extends st{constructor(){super(...arguments),Ku(this,ea,()=>{const e=this.range.value,i=new l.CustomEvent(p.MEDIA_VOLUME_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)})}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_VOLUME,o.MEDIA_MUTED,o.MEDIA_VOLUME_UNAVAILABLE]}connectedCallback(){super.connectedCallback(),this.range.setAttribute("aria-label",E("volume")),this.range.addEventListener("input",Xs(this,ea))}disconnectedCallback(){this.range.removeEventListener("input",Xs(this,ea)),super.disconnectedCallback()}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),(e===o.MEDIA_VOLUME||e===o.MEDIA_MUTED)&&(this.range.valueAsNumber=qu(this),this.range.setAttribute("aria-valuetext",Qu(this.range.valueAsNumber)),this.updateBar())}get mediaVolume(){return $(this,o.MEDIA_VOLUME,Gu)}set mediaVolume(e){J(this,o.MEDIA_VOLUME,e)}get mediaMuted(){return I(this,o.MEDIA_MUTED)}set mediaMuted(e){M(this,o.MEDIA_MUTED,e)}get mediaVolumeUnavailable(){return W(this,o.MEDIA_VOLUME_UNAVAILABLE)}set mediaVolumeUnavailable(e){B(this,o.MEDIA_VOLUME_UNAVAILABLE,e)}};ea=new WeakMap;l.customElements.get("media-volume-range")||l.customElements.define("media-volume-range",cn);var Yu=cn;function zu(t){return`
      <style>
        :host {
          min-width: 4ch;
          padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
          width: 100%;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1rem;
          font-weight: var(--media-button-font-weight, normal);
        }

        #checked-indicator {
          display: none;
        }

        :host([${o.MEDIA_LOOP}]) #checked-indicator {
          display: block;
        }
      </style>
      
      <span id="icon">
     </span>

      <div id="checked-indicator">
        <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
          <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
        </svg>
      </div>
    `}function Zu(){return E("Loop")}class Na extends j{constructor(){super(...arguments),this.container=null}static get observedAttributes(){return[...super.observedAttributes,o.MEDIA_LOOP]}connectedCallback(){var e;super.connectedCallback(),this.container=((e=this.shadowRoot)==null?void 0:e.querySelector("#icon"))||null,this.container&&(this.container.textContent=E("Loop"))}attributeChangedCallback(e,i,a){super.attributeChangedCallback(e,i,a),e===o.MEDIA_LOOP&&this.container&&this.setAttribute("aria-checked",this.mediaLoop?"true":"false")}get mediaLoop(){return I(this,o.MEDIA_LOOP)}set mediaLoop(e){M(this,o.MEDIA_LOOP,e)}handleClick(){const e=!this.mediaLoop,i=new l.CustomEvent(p.MEDIA_LOOP_REQUEST,{composed:!0,bubbles:!0,detail:e});this.dispatchEvent(i)}}Na.getSlotTemplateHTML=zu;Na.getTooltipContentHTML=Zu;l.customElements.get("media-loop-button")||l.customElements.define("media-loop-button",Na);var Xu=Na;function D(t){if(typeof t=="boolean")return t?"":void 0;if(typeof t=="function")return;const e=i=>typeof i=="string"||typeof i=="number"||typeof i=="boolean";if(Array.isArray(t)&&t.every(e))return t.join(" ");if(!(typeof t=="object"&&t!==null))return t}L({tagName:"media-gesture-receiver",elementClass:Ka,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-container",elementClass:Xn,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const bc=L({tagName:"media-controller",elementClass:Rl,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-tooltip",elementClass:ja,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-button",elementClass:Nl,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-airplay-button",elementClass:Hl,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-captions-button",elementClass:ql,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-cast-button",elementClass:Xl,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-dialog",elementClass:ed,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-chrome-range",elementClass:ad,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const Ac=L({tagName:"media-control-bar",elementClass:od,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-text-display",elementClass:ud,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-duration-display",elementClass:pd,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-error-dialog",elementClass:Td,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-keyboard-shortcuts-dialog",elementClass:Id,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const Tc=L({tagName:"media-fullscreen-button",elementClass:Pd,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-live-button",elementClass:$d,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const yc=L({tagName:"media-loading-indicator",elementClass:Wd,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),kc=L({tagName:"media-mute-button",elementClass:Qd,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),Sc=L({tagName:"media-pip-button",elementClass:Zd,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),Ic=L({tagName:"media-playback-rate-button",elementClass:iu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),Mc=L({tagName:"media-play-button",elementClass:nu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-poster-image",elementClass:cu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-chapter-display",elementClass:Eu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-thumbnail",elementClass:pr,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-preview-time-display",elementClass:bu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-seek-backward-button",elementClass:Iu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-seek-forward-button",elementClass:Ru,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const wc=L({tagName:"media-time-display",elementClass:Fu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),Lc=L({tagName:"media-time-range",elementClass:Wu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}}),Dc=L({tagName:"media-volume-range",elementClass:Yu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});L({tagName:"media-loop-button",elementClass:Xu,react:w,toAttributeValue:D,defaultProps:{suppressHydrationWarning:!0}});const Ju={"Start airplay":"AirPlay starten","Stop airplay":"AirPlay stoppen",Audio:"Audio",Captions:"Untertitel","Enable captions":"Untertitel aktivieren","Disable captions":"Untertitel deaktivieren","Start casting":"Casting starten","Stop casting":"Casting stoppen","Enter fullscreen mode":"Vollbildmodus aktivieren","Exit fullscreen mode":"Vollbildmodus beenden",Mute:"Stumm schalten",Unmute:"Stummschaltung aufheben",Loop:"Endlosschleife","Enter picture in picture mode":"Bild-im-Bild-Modus aktivieren","Exit picture in picture mode":"Bild-im-Bild-Modus beenden",Play:"Abspielen",Pause:"Pause","Playback rate":"Wiedergabegeschwindigkeit","Playback rate {playbackRate}":"Wiedergabegeschwindigkeit {playbackRate}",Quality:"Qualität","Seek backward":"Zurückspulen","Seek forward":"Vorspulen",Settings:"Einstellungen",Auto:"Auto","audio player":"Audioplayer","video player":"Videoplayer",volume:"Lautstärke",seek:"Springen","closed captions":"Untertitel","current playback rate":"aktuelle Wiedergabegeschwindigkeit","playback time":"Wiedergabezeit","media loading":"Medien werden geladen",settings:"Einstellungen","audio tracks":"Audiospuren",quality:"Qualität",play:"abspielen",pause:"pause",mute:"stumm schalten",unmute:"Stummschaltung aufheben","chapter: {chapterName}":"Kapitel: {chapterName}",live:"live",Off:"Aus","start airplay":"AirPlay starten","stop airplay":"AirPlay stoppen","start casting":"Casting starten","stop casting":"Casting stoppen","enter fullscreen mode":"Vollbildmodus aktivieren","exit fullscreen mode":"Vollbildmodus beenden","enter picture in picture mode":"Bild-im-Bild-Modus aktivieren","exit picture in picture mode":"Bild-im-Bild-Modus beenden","seek to live":"Zum Live-Stream springen","playing live":"Live-Wiedergabe","seek back {seekOffset} seconds":"{seekOffset} Sekunden zurückspulen","seek forward {seekOffset} seconds":"{seekOffset} Sekunden vorspulen","Network Error":"Netzwerkfehler","Decode Error":"Dekodierungsfehler","Source Not Supported":"Quelle nicht unterstützt","Encryption Error":"Verschlüsselungsfehler","A network error caused the media download to fail.":"Ein Netzwerkfehler hat dazu geführt, dass der Medien-Download fehlgeschlagen ist.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"Ein Medienfehler hat die Wiedergabe abgebrochen. Das Medium könnte beschädigt sein oder Ihr Browser unterstützt dieses Format nicht.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"Ein nicht unterstützter Fehler ist aufgetreten. Der Server oder das Netzwerk ist fehlgeschlagen, oder Ihr Browser unterstützt dieses Format nicht.","The media is encrypted and there are no keys to decrypt it.":"Das Medium ist verschlüsselt und es sind keine Schlüssel zum Entschlüsseln vorhanden.",hour:"Stunde",hours:"Stunden",minute:"Minute",minutes:"Minuten",second:"Sekunde",seconds:"Sekunden","{time} remaining":"{time} verbleibend","{currentTime} of {totalTime}":"{currentTime} von {totalTime}","video not loaded, unknown time.":"Video nicht geladen, unbekannte Zeit."};Ot("de",Ju);const ju={"Start airplay":"Iniciar AirPlay","Stop airplay":"Detener AirPlay",Audio:"Audio",Captions:"Subtítulos","Enable captions":"Activar subtítulos","Disable captions":"Desactivar subtítulos","Start casting":"Iniciar transmisión","Stop casting":"Detener transmisión","Enter fullscreen mode":"Entrar en modo pantalla completa","Exit fullscreen mode":"Salir del modo pantalla completa",Mute:"Silenciar",Unmute:"Reactivar sonido",Loop:"Bucle","Enter picture in picture mode":"Entrar en modo imagen en imagen","Exit picture in picture mode":"Salir del modo imagen en imagen",Play:"Reproducir",Pause:"Pausar","Playback rate":"Velocidad de reproducción","Playback rate {playbackRate}":"Velocidad de reproducción {playbackRate}",Quality:"Calidad","Seek backward":"Retroceder","Seek forward":"Avanzar",Settings:"Configuración",Auto:"Auto","audio player":"reproductor de audio","video player":"reproductor de video",volume:"volumen",seek:"búsqueda","closed captions":"subtítulos","current playback rate":"velocidad de reproducción actual","playback time":"tiempo de reproducción","media loading":"cargando medios",settings:"configuración","audio tracks":"pistas de audio",quality:"calidad",play:"reproducir",pause:"pausar",mute:"silenciar",unmute:"reactivar sonido","chapter: {chapterName}":"capítulo: {chapterName}",live:"en vivo",Off:"Apagado","start airplay":"iniciar AirPlay","stop airplay":"detener AirPlay","start casting":"iniciar transmisión","stop casting":"detener transmisión","enter fullscreen mode":"entrar en modo pantalla completa","exit fullscreen mode":"salir del modo pantalla completa","enter picture in picture mode":"entrar en modo imagen en imagen","exit picture in picture mode":"salir del modo imagen en imagen","seek to live":"ir a la transmisión en vivo","playing live":"reproduciendo en vivo","seek back {seekOffset} seconds":"retroceder {seekOffset} segundos","seek forward {seekOffset} seconds":"avanzar {seekOffset} segundos","Network Error":"Error de red","Decode Error":"Error de decodificación","Source Not Supported":"Fuente no compatible","Encryption Error":"Error de cifrado","A network error caused the media download to fail.":"Un error de red causó la falla en la descarga del contenido.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"Un error de medios causó la interrupción de la reproducción. El contenido podría estar dañado o tu navegador no admite este formato.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"Ocurrió un error de incompatibilidad. El servidor o la red fallaron, o tu navegador no admite este formato.","The media is encrypted and there are no keys to decrypt it.":"El contenido está cifrado y no hay claves disponibles para descifrarlo.",hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",second:"segundo",seconds:"segundos","{time} remaining":"{time} restante","{currentTime} of {totalTime}":"{currentTime} de {totalTime}","video not loaded, unknown time.":"video no cargado, tiempo desconocido."};Ot("es",ju);const ec={"Start airplay":"Démarrer la diffusion AirPlay","Stop airplay":"Arrêter la diffusion AirPlay",Audio:"Audio",Captions:"Sous-titres","Enable captions":"Activer les sous-titres","Disable captions":"Désactiver les sous-titres","Start casting":"Démarrer la diffusion (cast)","Stop casting":"Arrêter la diffusion (cast)","Enter fullscreen mode":"Mettre en mode plein écran","Exit fullscreen mode":"Quitter le mode plein écran",Mute:"Désactiver le son",Unmute:"Activer le son",Loop:"Lire en boucle","Enter picture in picture mode":"Mettre en mode image-en-image (PiP)","Exit picture in picture mode":"Quitter le mode image-en-image (PiP)",Play:"Lire",Pause:"Pause","Playback rate":"Taux de lecture","Playback rate {playbackRate}":"Taux de lecture {playbackRate}",Quality:"Qualité","Seek backward":"Reculer","Seek forward":"Avancer",Settings:"Paramètres",Auto:"Auto","audio player":"lecteur audio","video player":"lecteur vidéo",volume:"volume",seek:"se déplacer","closed captions":"sous-titres codés","current playback rate":"taux de lecture actuel","playback time":"durée de lecture","media loading":"chargement des médias",settings:"paramètres","audio tracks":"pistes audio",quality:"qualité",play:"lire",pause:"pause",mute:"désactiver le son",unmute:"activer le son","chapter: {chapterName}":"chapitre: {chapterName}",live:"en direct",Off:"Désactivé","start airplay":"démarrer la diffusion AirPlay","stop airplay":"arrêter la diffusion AirPlay","start casting":"démarrer la diffusion (cast)","stop casting":"arrêter la diffusion (cast)","enter fullscreen mode":"mettre en mode plein écran","exit fullscreen mode":"quitter le mode plein écran","enter picture in picture mode":"mettre en mode image-en-image (PiP)","exit picture in picture mode":"quitter le mode image-en-image (PiP)","seek to live":"aller au direct","playing live":"lecture en direct","seek back {seekOffset} seconds":"reculer {seekOffset} secondes","seek forward {seekOffset} seconds":"avancer {seekOffset} secondes","Network Error":"Erreur réseau","Decode Error":"Erreur de décodage","Source Not Supported":"Source non supportée","Encryption Error":"Erreur de chiffrement","A network error caused the media download to fail.":"Une erreur réseau a causé l’échec du téléchargement du média.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"Une erreur de média a provoqué l’interruption de la lecture. Le média peut être corrompu ou votre navigateur ne prend pas en charge ce format.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"Une erreur non supportée s’est produite. Le serveur ou le réseau a échoué, ou votre navigateur ne prend pas en charge ce format.","The media is encrypted and there are no keys to decrypt it.":"Le média est chiffré et il n’y a pas de clés pour le déchiffrer.",hour:"heure",hours:"heures",minute:"minute",minutes:"minutes",second:"seconde",seconds:"secondes","{time} remaining":"{time} restant","{currentTime} of {totalTime}":"{currentTime} sur {totalTime}","video not loaded, unknown time.":"vidéo non chargée, durée inconnue."};Ot("fr",ec);const tc={"Start airplay":"Iniciar AirPlay","Stop airplay":"Parar AirPlay",Audio:"Áudio",Captions:"Legendas","Enable captions":"Ativar legendas","Disable captions":"Desativar legendas","Start casting":"Iniciar transmissão","Stop casting":"Parar transmissão","Enter fullscreen mode":"Entrar no modo de tela cheia","Exit fullscreen mode":"Sair do modo de tela cheia",Mute:"Silenciar",Unmute:"Ativar som",Loop:"Loop","Enter picture in picture mode":"Entrar no modo PiP (Imagem na tela)","Exit picture in picture mode":"Sair do modo PiP",Play:"Reproduzir",Pause:"Pausar","Playback rate":"Taxa de reprodução","Playback rate {playbackRate}":"Taxa de reprodução {playbackRate}",Quality:"Qualidade","Seek backward":"Retroceder","Seek forward":"Avançar",Settings:"Configurações",Auto:"Auto","audio player":"reprodutor de áudio","video player":"reprodutor de vídeo",volume:"volume",seek:"buscar","closed captions":"legendas ocultas","current playback rate":"taxa de reprodução atual","playback time":"tempo de reprodução","media loading":"carregando mídia",settings:"configurações","audio tracks":"faixas de áudio",quality:"qualidade",play:"reproduzir",pause:"pausar",mute:"silenciar",unmute:"ativar som","chapter: {chapterName}":"capítulo: {chapterName}",live:"ao vivo",Off:"Desativado","start airplay":"iniciar AirPlay","stop airplay":"parar AirPlay","start casting":"iniciar transmissão","stop casting":"parar transmissão","enter fullscreen mode":"entrar no modo de tela cheia","exit fullscreen mode":"sair do modo de tela cheia","enter picture in picture mode":"entrar no modo PiP","exit picture in picture mode":"sair do modo PiP","seek to live":"buscar ao vivo","playing live":"reproduzindo ao vivo","seek back {seekOffset} seconds":"voltar {seekOffset} segundos","seek forward {seekOffset} seconds":"avançar {seekOffset} segundos","Network Error":"Erro de rede","Decode Error":"Erro de decodificação","Source Not Supported":"Fonte não suportada","Encryption Error":"Erro de criptografia","A network error caused the media download to fail.":"Um erro de rede causou a falha no download do conteúdo.","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"Um erro de mídia fez com que a reprodução fosse interrompida. O conteúdo pode estar corrompido ou seu navegador não suporta este formato.","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"Ocorreu um erro de incompatibilidade. O servidor ou a rede falharam, ou seu navegador não suporta este formato.","The media is encrypted and there are no keys to decrypt it.":"O conteúdo está criptografado e não há chaves disponíveis para descriptografá-lo.",hour:"hora",hours:"horas",minute:"minuto",minutes:"minutos",second:"segundo",seconds:"segundos","{time} remaining":"{time} restante","{currentTime} of {totalTime}":"{currentTime} de {totalTime}","video not loaded, unknown time.":"vídeo não carregado, tempo desconhecido."};Ot("pt",tc);const ic={"Start airplay":"开始 AirPlay","Stop airplay":"停止 AirPlay",Audio:"音频",Captions:"字幕","Enable captions":"开启字幕","Disable captions":"关闭字幕","Start casting":"开始投屏","Stop casting":"停止投屏","Enter fullscreen mode":"进入全屏","Exit fullscreen mode":"退出全屏",Mute:"静音",Unmute:"恢复音量",Loop:"循环播放","Enter picture in picture mode":"开启画中画","Exit picture in picture mode":"关闭画中画",Play:"播放",Pause:"暂停","Playback rate":"播放速度","Playback rate {playbackRate}":"播放速度：{playbackRate}",Quality:"清晰度","Seek backward":"快退","Seek forward":"快进",Settings:"设置",Auto:"自动","audio player":"音频播放器","video player":"视频播放器",volume:"音量",seek:"跳转","closed captions":"隐藏式辅助字幕","current playback rate":"当前播放速度","playback time":"播放时间","media loading":"媒体加载中...",settings:"设置","audio tracks":"音轨",quality:"清晰度",play:"播放",pause:"暂停",mute:"静音",unmute:"恢复音量","chapter: {chapterName}":"章节: {chapterName}",live:"直播",Off:"关闭","start airplay":"开始 AirPlay","stop airplay":"停止 AirPlay","start casting":"开始投屏","stop casting":"停止投屏","enter fullscreen mode":"进入全屏","exit fullscreen mode":"退出全屏","enter picture in picture mode":"开启画中画","exit picture in picture mode":"关闭画中画","seek to live":"跳转至直播进度","playing live":"正在直播中","seek back {seekOffset} seconds":"快退 {seekOffset} 秒","seek forward {seekOffset} seconds":"快进 {seekOffset} 秒","Network Error":"网络错误","Decode Error":"解码失败","Source Not Supported":"不支持的媒体来源","Encryption Error":"加密错误","A network error caused the media download to fail.":"媒体下载失败，请检查网络连接。","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"媒体错误导致播放中止。可能是文件损坏，或浏览器不支持该格式。","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"发生未支持的错误，可能是服务器或网络故障，或浏览器不支持该格式。","The media is encrypted and there are no keys to decrypt it.":"媒体已加密，缺少解密密钥。",hour:"小时",hours:"小时",minute:"分钟",minutes:"分钟",second:"秒",seconds:"秒","{time} remaining":"剩余 {time}","{currentTime} of {totalTime}":"{currentTime} / {totalTime}","video not loaded, unknown time.":"视频未加载，时间未知。"};Ot("zh-CN",ic);const ac={"Start airplay":"開始 AirPlay 投放","Stop airplay":"停止 AirPlay 投放",Audio:"音訊",Captions:"字幕","Enable captions":"開啟字幕","Disable captions":"關閉字幕","Start casting":"開始投放","Stop casting":"停止投放","Enter fullscreen mode":"全螢幕","Exit fullscreen mode":"離開全螢幕",Mute:"靜音",Unmute:"取消靜音",Loop:"循環播放","Enter picture in picture mode":"開啟子母畫面","Exit picture in picture mode":"關閉子母畫面",Play:"播放",Pause:"暫停","Playback rate":"播放速度","Playback rate {playbackRate}":"播放速度：{playbackRate}",Quality:"畫質","Seek backward":"倒轉","Seek forward":"快轉",Settings:"設定",Auto:"自動","audio player":"音訊播放器","video player":"影片播放器",volume:"音量",seek:"快轉/倒轉","closed captions":"隱藏式輔助字幕","current playback rate":"目前播放速度","playback time":"播放時間","media loading":"載入中⋯",settings:"設定","audio tracks":"音軌",quality:"畫質",play:"播放",pause:"暫停",mute:"靜音",unmute:"取消靜音","chapter: {chapterName}":"章節: {chapterName}",live:"直播",Off:"關閉","start airplay":"開始 AirPlay 投放","stop airplay":"停止 AirPlay 投放","start casting":"開始投放","stop casting":"停止投放","enter fullscreen mode":"全螢幕","exit fullscreen mode":"離開全螢幕","enter picture in picture mode":"開啟子母畫面","exit picture in picture mode":"關閉子母畫面","seek to live":"跳到直播","playing live":"正在直播","seek back {seekOffset} seconds":"倒轉 {seekOffset} 秒","seek forward {seekOffset} seconds":"快轉 {seekOffset} 秒","Network Error":"網路錯誤","Decode Error":"解碼錯誤","Source Not Supported":"不支援的媒體來源","Encryption Error":"加密錯誤","A network error caused the media download to fail.":"網路錯誤導致媒體下載失敗。","A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":"媒體錯誤導致播放中止，可能是檔案損毀，或瀏覽器不支援這個格式。","An unsupported error occurred. The server or network failed, or your browser does not support this format.":"發生不支援的錯誤。伺服器或網路可能有問題，或瀏覽器不支援這個格式。","The media is encrypted and there are no keys to decrypt it.":"媒體已加密，但找不到解密金鑰。",hour:"小時",hours:"小時",minute:"分鐘",minutes:"分鐘",second:"秒",seconds:"秒","{time} remaining":"剩餘 {time}","{currentTime} of {totalTime}":"{currentTime} / {totalTime}","video not loaded, unknown time.":"影片未載入，時間未知。"};Ot("zh-TW",ac);export{bc as M,Ac as a,Mc as b,wc as c,Lc as d,kc as e,yc as f,Ic as g,Dc as h,Sc as i,Tc as j};
