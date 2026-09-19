import{_ as t}from"./index-DLsZT56_.js";import{ProfessionalCanvasKitLoadError as a,createProfessionalCanvasKitLoader as o}from"./professional-renderer-BYl7pI7g.js";import"./index-iyxIYZmR.js";import"./professional-DXUALGih.js";const n=()=>{if(typeof WebAssembly>"u"||typeof document>"u")return!1;try{const e=document.createElement("canvas");return!!(e.getContext("webgl2")||e.getContext("webgl"))}catch{return!1}},r=o(async()=>await t(()=>import("./professional-renderer-CHc1Fa9O.js").then(e=>e.c),__vite__mapDeps([0,1,2,3,4,5])),async()=>(await t(()=>import("./professional-renderer-UAsZPjeG.js"),__vite__mapDeps([]))).default),d=e=>n()?r(e):Promise.reject(new a("unsupported","当前环境不支持 CanvasKit WebGL 运行时"));export{d as loadProfessionalCanvasKit,n as probeProfessionalCanvasKitCapabilities};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["static/professional-renderer-CHc1Fa9O.js","static/index-iyxIYZmR.js","static/index-DLsZT56_.js","static/index-DujjqDmm.css","static/index-MCGlVOG5.css","static/__vite-browser-external-D7Ct-6yo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
