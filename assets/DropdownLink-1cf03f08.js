import{s as V,K as z,v as A,k as _,J as O,l as R,r as X,o as n,c as s,b as u,a as i,u as a,e as b,z as h,w as $,M as j,F as k,h as x,i as q,a2 as I,_ as J}from"./app-ab9ebd95.js";import y from"./Link-4d603aaa.js";import K from"./DropdownTransition-b6d98d0f.js";import"./useThemeData-019ffeaa.js";import"./Badge.vue_vue_type_style_index_0_lang-4ed993c7.js";import"./Xicons.vue_vue_type_style_index_0_lang-4ed993c7.js";import"./CodeGroup.vue_vue_type_style_index_0_lang-4ed993c7.js";import"./VuePreview.vue_vue_type_style_index_0_lang-4ed993c7.js";import"./CodeGroupItem.vue_vue_type_style_index_0_lang-bc2a43aa.js";const S=["aria-label"],G={key:0,class:"arrow down"},H=["aria-label"],P={class:"title"},Q={class:"dropdown-link__subtitle"},U={class:"dropdown-link__subcontainer"},W=V({__name:"DropdownLink",props:{item:{type:Object,required:!0}},setup(M){const B=M,{item:t}=z(B),w=A(()=>t.value.ariaLabel||t.value.text),e=_(!1),L=O();R(()=>L.path,()=>{e.value=!1});const D=v=>{v.detail===1?e.value=!e.value:e.value=!1},m=(v,p)=>p[p.length-1]===v,r=_(!1),C=()=>{l.value&&(l.value=!1),e.value=!0,r.value=!0},T=()=>{r.value=!1,setTimeout(()=>{r.value||c.value?e.value=!0:e.value=!1},200)},c=_(!1),F=()=>{l.value||(c.value=!0)},g=()=>{l.value||(c.value=!1,setTimeout(()=>{r.value||c.value?e.value=!0:e.value=!1},200))},l=_(!0),E=()=>{e.value=!e.value,l.value||(l.value=!0)};return(v,p)=>{const f=X("Xicons");return n(),s("div",{class:h(["dropdown-link",{open:e.value}])},[u("button",{class:"dropdown-link__title",type:"button","aria-label":w.value,onClick:D,onMouseenter:C,onMouseleave:T},[i(f,{class:"title",icon:a(t).icon,text:a(t).text},null,8,["icon","text"]),a(t).text?(n(),s("span",G)):b("v-if",!0)],40,S),u("button",{class:"dropdown-link--mobile__title",type:"button","aria-label":w.value,onClick:E},[u("span",P,[i(f,{icon:a(t).icon,text:a(t).text},null,8,["icon","text"])]),a(t).text?(n(),s("span",{key:0,class:h(["arrow",e.value?"down":"right"])},null,2)):b("v-if",!0)],8,H),i(K,null,{default:$(()=>[j(u("ul",{class:"dropdown-link__container",onMouseenter:F,onMouseleave:g},[(n(!0),s(k,null,x(a(t).children,(o,N)=>(n(),s("li",{key:o.link||N,class:"dropdown-link__item"},[o.children?(n(),s(k,{key:0},[u("h5",Q,[i(f,{icon:o.icon,text:o.text},null,8,["icon","text"])]),u("ul",U,[(n(!0),s(k,null,x(o.children,d=>(n(),s("li",{key:d.link,class:"dropdown-link__subitem"},[i(y,{item:d,onFocusout:Y=>m(d,o.children)&&m(o,a(t).children)&&(e.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(n(),q(y,{key:1,item:o,onFocusout:d=>m(o,a(t).children)&&(e.value=!1)},null,8,["item","onFocusout"]))]))),128))],544),[[I,e.value]])]),_:1})],2)}}}),ie=J(W,[["__file","DropdownLink.vue"]]);export{ie as default};
