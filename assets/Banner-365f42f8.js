import{s as S,a1 as B,v as c,A as d,o,c as s,b as x,x as p,e as u,u as l,t as y,_ as k}from"./app-7f713c0e.js";const w={class:"banner-brand__content"},A=["src"],C={key:1},N={key:2},T=S({__name:"Banner",setup(V){const e=B(),m=c(()=>{var t,r,a,n;return(r=(t=e.value)==null?void 0:t.banner)!=null&&r.heroImage?d((n=(a=e.value)==null?void 0:a.banner)==null?void 0:n.heroImage):null}),f=c(()=>e.value.banner.heroImageStyle||{}),I=c(()=>{var n;const{bgImageStyle:t,bgImage:r}=((n=e.value)==null?void 0:n.banner)||{},a=r?{textAlign:"center",overflow:"hidden",background:`url(${d(r)}) center/cover no-repeat`}:{};return t?{...a,...t}:a});return(t,r)=>{var a,n,g,i,_,b,h,v;return o(),s("section",{class:"banner-wrapper",style:p({...I.value})},[x("div",w,[m.value?(o(),s("img",{key:0,src:m.value,style:p({heroImageStyle:f.value}),alt:"heroImage"},null,12,A)):u("v-if",!0),(n=(a=l(e))==null?void 0:a.banner)!=null&&n.heroText?(o(),s("h1",C,y((i=(g=l(e))==null?void 0:g.banner)==null?void 0:i.heroText),1)):u("v-if",!0),(b=(_=l(e))==null?void 0:_.banner)!=null&&b.tagline?(o(),s("p",N,y((v=(h=l(e))==null?void 0:h.banner)==null?void 0:v.tagline),1)):u("v-if",!0)])],4)}}}),D=k(T,[["__file","Banner.vue"]]);export{D as default};
