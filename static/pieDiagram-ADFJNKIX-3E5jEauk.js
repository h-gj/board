import{g as U,s as H,a as V,b as Z,p as j,o as q,_ as o,l as w,c as J,B as K,F as Q,H as X,d as Y,x as tt,C as et}from"./mermaid-to-excalidraw-hxmKdq5w.js";import{p as at}from"./chunk-4BX2VUAB-tSUatZQ7.js";import{p as rt}from"./treemap-KMMF4GRG-B7q96vdD.js";import"./Serializer-CTT1QDJS.js";import{d as G}from"./arc-BpRm2m_v.js";import{o as it}from"./ordinal-Cboi1Yqb.js";import{d as ot}from"./pie-s0I-xP6E.js";import"./index-DLsZT56_.js";import"./_baseRest-D3Mf0FGz.js";import"./merge-DcqQBAyC.js";import"./keysIn-BunQCnyq.js";import"./bundle-Cse4-oBy.js";import"./rough.esm-GtHDBO_d.js";import"./isEmpty-BJ3VckpK.js";import"./map-sNRfZM0e.js";import"./get-DrnvE09i.js";import"./_baseUniq-4Ykdgh6p.js";import"./min-BoVv6piq.js";import"./index-iyxIYZmR.js";import"./init-Gi6I4Gst.js";var st=et.pie,C={sections:new Map,showData:!1},g=C.sections,D=C.showData,lt=structuredClone(st),nt=o(()=>structuredClone(lt),"getConfig"),ct=o(()=>{g=new Map,D=C.showData,tt()},"clear"),pt=o(({label:t,value:a})=>{if(a<0)throw new Error(`"${t}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);g.has(t)||(g.set(t,a),w.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),dt=o(()=>g,"getSections"),gt=o(t=>{D=t},"setShowData"),mt=o(()=>D,"getShowData"),W={getConfig:nt,clear:ct,setDiagramTitle:q,getDiagramTitle:j,setAccTitle:Z,getAccTitle:V,setAccDescription:H,getAccDescription:U,addSection:pt,getSections:dt,setShowData:gt,getShowData:mt},ut=o((t,a)=>{at(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ft={parse:o(async t=>{const a=await rt("pie",t);w.debug(a),ut(a,W)},"parse")},ht=o(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),vt=ht,St=o(t=>{const a=[...t.values()].reduce((r,s)=>r+s,0),$=[...t.entries()].map(([r,s])=>({label:r,value:s})).filter(r=>r.value/a*100>=1).sort((r,s)=>s.value-r.value);return ot().value(r=>r.value)($)},"createPieArcs"),xt=o((t,a,$,y)=>{w.debug(`rendering pie chart
`+t);const r=y.db,s=J(),T=K(r.getConfig(),s.pie),A=40,l=18,p=4,c=450,m=c,u=Q(a),n=u.append("g");n.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:i}=s;let[b]=X(i.pieOuterStrokeWidth);b??(b=2);const _=T.textPosition,d=Math.min(m,c)/2-A,M=G().innerRadius(0).outerRadius(d),O=G().innerRadius(d*_).outerRadius(d*_);n.append("circle").attr("cx",0).attr("cy",0).attr("r",d+b/2).attr("class","pieOuterCircle");const f=r.getSections(),P=St(f),R=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12];let h=0;f.forEach(e=>{h+=e});const E=P.filter(e=>(e.data.value/h*100).toFixed(0)!=="0"),v=it(R);n.selectAll("mySlices").data(E).enter().append("path").attr("d",M).attr("fill",e=>v(e.data.label)).attr("class","pieCircle"),n.selectAll("mySlices").data(E).enter().append("text").text(e=>(e.data.value/h*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),n.append("text").text(r.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const k=[...f.entries()].map(([e,x])=>({label:e,value:x})),S=n.selectAll(".legend").data(k).enter().append("g").attr("class","legend").attr("transform",(e,x)=>{const z=l+p,L=z*k.length/2,N=12*l,B=x*z-L;return"translate("+N+","+B+")"});S.append("rect").attr("width",l).attr("height",l).style("fill",e=>v(e.label)).style("stroke",e=>v(e.label)),S.append("text").attr("x",l+p).attr("y",l-p).text(e=>r.getShowData()?`${e.label} [${e.value}]`:e.label);const I=Math.max(...S.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),F=m+A+l+p+I;u.attr("viewBox",`0 0 ${F} ${c}`),Y(u,c,F,T.useMaxWidth)},"draw"),wt={draw:xt},Nt={parser:ft,db:W,renderer:wt,styles:vt};export{Nt as diagram};
