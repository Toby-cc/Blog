import{_ as de,g as T,k,l as ce,m as pe,r as f,o as b,c as h,e as v,b as c,n as y,a as r,w as i,F as E,h as S,i as j,t as M,d as x,u as F,E as I,q as L}from"./app-7f713c0e.js";const me={style:{display:"flex"}},_e=c("span",null,"属性信息",-1),fe={style:{"margin-left":"10px",cursor:"pointer"}},be=["onClick"],ge={class:"collapse_title"},he={class:"collapse_title--name"},ve=["onClick"],Ve={class:"collapse_content"},ke={class:"EditPen",style:{"margin-left":"5px"}},we=["onClick"],Ce=["onClick"],ye={class:"collapse_content--add"},Ee=["onClick"],xe={class:"dialog-footer"},Ue=c("h4",null,"属性列表",-1),$e={style:{"margin-top":"50px"}},Pe=c("h4",null,"属性栏",-1),Se={class:"name"},Me={__name:"CartesianProduct",setup(Be){const d=T([{name:"颜色",id:1001,list:["红色","蓝色","绿色"]},{name:"尺码",id:1002,list:["S","M","L"]},{name:"材质",id:1003,list:["棉质","涤纶"]}]);let p=T([]);const U=k(!1),z=k(null),A=k(null),w=k(1),$=k(10),g=T({attributeName:"",attributeValue:""}),H=T({attributeName:[{required:!0,message:"请输入属性名",trigger:"blur"},{min:1,max:10,message:"请输入1-10个字符",trigger:"blur"}],attributeValue:[{required:!0,message:"请输入属性值",trigger:"blur"},{min:1,max:10,message:"请输入1-10个字符",trigger:"blur"}]}),P=k({1001:"",1002:"",1003:""}),K=k(1001);ce(d,(s,e)=>{let l=d.map(n=>n.id).reduce((n,t)=>(n[t]="",n),{});P.value={...l}});const D=s=>{const e=s.map(t=>t.list.map(o=>({name:t.name,id:t.id,val:o}))),l=[],n=(t=[],o)=>{for(let u=0;u<e[o].length;u++)o<e.length-1?(t[o]=e[o][u],n(t,o+1)):l.push([...t,e[o][u]]);return l};return n([],0)},q=s=>s.map((e,l)=>{const n={};return e.forEach(({id:t,val:o})=>{n[t]=o}),{id:new Date().getTime()+""+l,attributes:e,attributesValue:n,SKU:e.map(t=>t.val).join(),stock:Math.floor(Math.random()*6),price:100}}),J=(s,e)=>{const l={...P.value,[s]:e};for(const n of p){let t=!0;for(const[o,u]of Object.entries(l))if(u&&n.attributesValue[o]!==u){t=!1;break}if(t&&n.stock>0)return!0}return!1},Q=s=>{I.prompt("","修改属性名称",{confirmButtonText:"确定",cancelButtonText:"取消",draggable:!0,inputPattern:/^.{0,10}$/,inputErrorMessage:"最多输入10个字符",inputValue:s}).then(({value:e})=>{if(e===s)return;d.forEach(t=>{t.name===s&&(t.name=e)});const l=D(d),n=l.map(t=>t.map(o=>o.val).join());p.forEach(({SKU:t},o)=>{const u=n.findIndex(m=>m===t);u!==-1&&(p[o].attributes=l[u])})}).catch(()=>{})},W=(s,e,l,n)=>{I.prompt("",`修改${s}属性值`,{confirmButtonText:"确定",cancelButtonText:"取消",draggable:!0,inputPattern:/^.{0,10}$/,inputErrorMessage:"最多输入10个字符",inputValue:e}).then(({value:t})=>{if(d[l].list.includes(t))L({showClose:!0,message:"已有重复属性值",type:"warning"});else{const o=d[l].id;p.forEach(u=>{u.attributes.forEach(m=>{m.id===o&&m.val===e&&(m.val=t,u.SKU=u.attributes.map(B=>B.val).join())}),u.attributesValue[o]===e&&(u.attributesValue[o]=t)}),d[l].list[n]=t}}).catch(()=>{})},X=s=>{if(d.length===1)return L({showClose:!0,message:"无法删除最后一项属性",type:"warning"});const e=d[s].id;p.forEach(l=>{const n=l.attributes.findIndex(t=>t.id===e);if(n!==-1){l.attributes.splice(n,1);let t=Object.keys(l.attributesValue);const o=t.findIndex(m=>m===e.toString());delete l.attributesValue[t[o]];const u=l.attributes.map(m=>m.val).join();l.SKU=u}}),d.splice(s,1)},Y=(s,e)=>{const l=d[s].list[e],n=p.filter(t=>{for(let o=0;o<t.attributes.length;o++)if(t.attributes[o].val===l)return!1;return!0});p.length=0,p.push(...n),d[s].list.splice(e,1)},Z=(s,e)=>{I.prompt("",`添加${s}属性值`,{confirmButtonText:"确定",cancelButtonText:"取消",draggable:!0,inputPattern:/^.{0,10}$/,inputErrorMessage:"最多输入10个字符",inputValue:""}).then(({value:l})=>{const n=d.map((u,m)=>m===e?{name:u.name,id:u.id,list:[l]}:u),t=D(n),o=q(t);p.length=0,p.push(...p,...o),d[e].list.push(l)}).catch(()=>{})},ee=()=>{z.value.validate(s=>{if(s){if(d.map(n=>n.name).includes(g.attributeName)){L({showClose:!0,message:"属性名已存在",type:"warning"});return}const l=Math.floor(Math.random()*9e3)+1e3;d.push({name:g.attributeName,id:l,list:[g.attributeValue]}),p.forEach(n=>{n.attributes.push({name:g.attributeName,id:l,val:g.attributeValue}),n.attributesValue[l]=g.attributeValue,n.SKU=n.attributes.map(t=>t.val).join()}),N()}})},N=()=>{z.value.resetFields(),U.value=!1},O=(s,e,l)=>{!e&&e!==0?l(new Error("参数不能为空")):l()},te=s=>{p.splice(s,1)},le=()=>{setTimeout(()=>{A.value.resetFields()},100)},ae=()=>{U.value=!0};return pe(()=>{const s=D(d);p.push(...q(s))}),(s,e)=>{const l=f("SvgIcon"),n=f("el-link"),t=f("el-collapse-item"),o=f("el-collapse"),u=f("el-input"),m=f("el-form-item"),B=f("el-form"),R=f("el-button"),ne=f("el-dialog"),C=f("el-table-column"),oe=f("el-table"),se=f("el-pagination"),re=f("el-radio-button"),ue=f("el-radio-group");return b(),h(E,null,[v(" 属性信息 "),c("div",null,[c("h4",me,[_e,c("div",fe,[c("span",{onClick:y(ae,["stop"])},[r(l,{name:"ele-Plus",color:"#5D67E8",size:18})],8,be)])]),r(o,{modelValue:K.value,"onUpdate:modelValue":e[0]||(e[0]=a=>K.value=a),class:"collapse"},{default:i(()=>[(b(!0),h(E,null,S(d,(a,_)=>(b(),j(t,{name:a.id,key:a.id},{title:i(()=>[v(" collapse标题 "),c("div",ge,[c("div",he,[c("span",null,M(a.name),1),v(" 图标 "),c("div",{class:"EditPen",onClick:y(V=>Q(a.name),["stop"])},[r(l,{name:"ele-EditPen",color:"#5D67E8",size:18})],8,ve)]),r(n,{type:"danger",underline:!1,onClick:y(V=>X(_),["stop"])},{default:i(()=>[x("删除")]),_:2},1032,["onClick"])])]),default:i(()=>[(b(!0),h(E,null,S(a.list,(V,G)=>(b(),h("div",Ve,[c("span",null,M(V),1),v(" 图标 "),c("div",ke,[c("span",{onClick:y(ie=>W(a.name,V,_,G),["stop"])},[r(l,{name:"ele-EditPen",color:"#5D67E8",size:18})],8,we),c("span",{onClick:y(ie=>Y(_,G),["stop"])},[r(l,{name:"ele-Delete",color:"#5D67E8",size:18})],8,Ce)])]))),256)),c("div",ye,[c("span",{onClick:y(V=>Z(a.name,_),["stop"])},[r(l,{name:"ele-Plus",color:"#5D67E8",size:18})],8,Ee)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),v(" 添加属性项的弹窗 "),U.value?(b(),j(ne,{key:0,modelValue:U.value,"onUpdate:modelValue":e[4]||(e[4]=a=>U.value=a),title:"添加属性",width:"400px","before-close":N},{footer:i(()=>[c("span",xe,[r(R,{onClick:N},{default:i(()=>[x("取消")]),_:1}),r(R,{type:"primary",onClick:e[3]||(e[3]=a=>ee())},{default:i(()=>[x(" 确定 ")]),_:1})])]),default:i(()=>[r(B,{ref_key:"ruleFormRef",ref:z,model:g,rules:H,"label-width":"80px"},{default:i(()=>[r(m,{label:"属性名",prop:"attributeName"},{default:i(()=>[r(u,{modelValue:g.attributeName,"onUpdate:modelValue":e[1]||(e[1]=a=>g.attributeName=a)},null,8,["modelValue"])]),_:1}),r(m,{label:"属性值",prop:"attributeValue"},{default:i(()=>[r(u,{modelValue:g.attributeValue,"onUpdate:modelValue":e[2]||(e[2]=a=>g.attributeValue=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])):v("v-if",!0)]),v(" 属性列表 "),r(B,{class:"table",ref_key:"ruleTable",ref:A,model:F(p),"label-width":"0"},{default:i(()=>[Ue,r(oe,{data:F(p).slice((w.value-1)*$.value,w.value*$.value),style:{width:"100%"},"table-layout":"fixed"},{default:i(()=>[r(C,{label:"属性信息",align:"center",width:"200"},{default:i(()=>[(b(!0),h(E,null,S(d,(a,_)=>(b(),j(C,{key:_,label:a.name,align:"center"},{default:i(V=>[x(M(V.row.attributesValue[a.id]),1)]),_:2},1032,["label"]))),128))]),_:1}),r(C,{prop:"SKU",label:"SKU",align:"center",width:"200"}),r(C,{label:"售价",align:"center",width:"200"},{default:i(a=>[r(m,{prop:`[${a.$index+$.value*(w.value-1)}].price`,rules:[{trigger:"blur",validator:O}]},{default:i(()=>[r(u,{type:"number",modelValue:a.row.price,"onUpdate:modelValue":_=>a.row.price=_,min:0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),r(C,{label:"库存",align:"center",width:"200"},{default:i(a=>[r(m,{prop:`[${a.$index+$.value*(w.value-1)}].stock`,rules:[{trigger:"blur",validator:O}]},{default:i(()=>[r(u,{type:"number",modelValue:a.row.stock,"onUpdate:modelValue":_=>a.row.stock=_,min:0},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["prop","rules"])]),_:1}),r(C,{label:"操作",align:"center",width:"80"},{default:i(a=>[r(n,{type:"danger",onClick:_=>te(a.$index)},{default:i(()=>[x("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),r(se,{small:"",background:"","page-size":$.value,onCurrentChange:le,"current-page":w.value,"onUpdate:currentPage":e[5]||(e[5]=a=>w.value=a),layout:"prev, pager, next",total:F(p).length,class:"pagination"},null,8,["page-size","current-page","total"])]),_:1},8,["model"]),v(" 属性栏 "),c("div",$e,[Pe,(b(!0),h(E,null,S(d,a=>(b(),h("div",{class:"ab_Combining",key:a.id},[c("div",Se,M(a.name)+":",1),r(ue,{modelValue:P.value[a.id],"onUpdate:modelValue":_=>P.value[a.id]=_,size:"large"},{default:i(()=>[(b(!0),h(E,null,S(a.list,_=>(b(),j(re,{label:_,disabled:!J(a.id,_)},null,8,["label","disabled"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128)),x(" 您选择的是： "+M(P.value),1)])],64)}}},je=de(Me,[["__file","CartesianProduct.vue"]]);export{je as default};
