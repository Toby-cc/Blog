import{u as p}from"./useThemeData-1783f561.js";import{C as _,D as h,G as n,s as f,v as m,o as l,c as s,b as c,t as v,F as C,h as y,i as b,u,_ as k}from"./app-7f713c0e.js";import S from"./Link-1f06130a.js";const I=Symbol("catalog"),T=()=>{const e=_(I);if(!e)throw new Error("usePageCatalog() is called without provider.");return e},g=(e,t)=>e.hash===t.link?!0:t.children?t.children.some(a=>g(e,a)):!1,i=(e,t)=>n("li",{...t},n(S,{class:"page-catalog-item",item:e})),j=e=>{var t;return!((t=e.children)===null||t===void 0)&&t.length?e.children.map(a=>n(o,{item:a})):[null]},o=({item:e})=>{const t=h(),a=g(t,e);return e.children&&e.children.length>0?[i(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:a}}),...j(e)]:[i(e,{class:{[`page-catalog-menu-depth_${e.level||2}`]:!0,active:a}})]};o.displayName="CatalogItem";o.props={item:{type:Object,required:!0}};const x={class:"page-catalog-container"},B={class:"tip"},O=f({__name:"Catalog",setup(e){const t=T(),a=p(),d=m(()=>a.value.catalogTitle||"ON THIS PAGE");return(w,D)=>(l(),s("div",x,[c("h5",B,v(d.value),1),c("ul",null,[(l(!0),s(C,null,y(u(t),r=>(l(),b(u(o),{key:r.link||r.text,item:r},null,8,["item"]))),128))])]))}}),P=k(O,[["__file","Catalog.vue"]]),$=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"}));export{P as C,$ as a,T as u};
