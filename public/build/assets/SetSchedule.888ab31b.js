import{l as o,m as _,o as n,j as v,w as f,b as t,q as d,v as k,c as r,h as x,F as b,x as m,d as y,e as g,s as w,t as S}from"./app.a9b6b43a.js";import{A as V}from"./App.bbc5318c.js";import{_ as B}from"./Pagination.728fd92f.js";import"./_plugin-vue_export-helper.cdc0426e.js";const N={class:"col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"},A=t("div",{class:"bg-white rounded p-3 mb-3"},[t("p",{class:"fs-4 m-0"},"Students")],-1),C={class:"bg-white rounded p-3"},U={class:"table table-striped"},j=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Action")])],-1),D=["value"],F=t("td",null,"xc",-1),L=g(" Pilih semua "),O={__name:"SetSchedule",props:{students:Object},setup(s){const u=o(!1),c=o([]),a=o("");_(a,i=>{w.Inertia.get(route("admin.students"),{cari:i},{preserveState:!0,replace:!0})});const p=()=>{console.log("ok")};return(i,l)=>(n(),v(V,null,{default:f(()=>[t("div",N,[A,t("div",C,[d(t("input",{type:"text",class:"form-control mb-3",placeholder:"Search","onUpdate:modelValue":l[0]||(l[0]=e=>a.value=e)},null,512),[[k,a.value]]),t("table",U,[j,t("tbody",null,[(n(!0),r(b,null,x(s.students.data,(e,M)=>(n(),r("tr",{key:e.id},[t("td",null,[d(t("input",{type:"checkbox",class:"form-check-input",value:e.id,"onUpdate:modelValue":l[1]||(l[1]=h=>c.value=h)},null,8,D),[[m,c.value]])]),t("td",null,S(e.full_name),1),F]))),128))])]),d(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":l[2]||(l[2]=e=>u.value=e),onClick:p},null,512),[[m,u.value]]),L,y(B,{links:s.students.links,total:s.students.total},null,8,["links","total"])])])]),_:1}))}};export{O as default};
