import{gO as c}from"./index-iyxIYZmR.js";import{serializeMindmapBibliography as l}from"./mindmapExport-CteYRJrq.js";import"./index-DLsZT56_.js";const p=6,h=n=>n.replace(/\s+/g," ").trim()||"未命名主题",o=n=>(n??"").replace(/\r\n?/g,`
`).split(/\n{2,}/).map(t=>t.replace(/\n/g," ").trim()).filter(Boolean),f=n=>(n.citations??[]).map(t=>{var i;const r=(i=c(t)[0])==null?void 0:i.key;return r?`[@${r}]`:"[@?]"}).join(""),m=n=>"#".repeat(Math.min(n,p)),a=(n,t,r,i=!1)=>{const e=f(n),s=`${h(n.title)}${e}`;if(n.children.length||i){r.push(`${m(t)} ${s}`),r.push(...o(n.note)),g(n.children,t+1,r);return}r.push(n.link?`[${s}](${n.link})`:s),r.push(...o(n.note))},g=(n,t,r)=>{const i=n.some(e=>e.children.length>0);for(const e of n)a(e,t,r,i)},M=n=>{const t=[];a(n,1,t);const r=l([n],"list");return r&&t.push("## 参考文献",r),`${t.join(`

`)}
`},u=(n,t)=>{for(const r of n){if(r.id===t)return r;const i=u(r.children,t);if(i)return i}return null};export{u as findMindmapExportNode,M as serializeMindmapChapterDraft};
