import{m as p,q as b,o as s,j as o,w as l,b as t,l as g,v as k,c as h,h as x,F as v,d as f,s as j,n as y,e as i,t as d,x as c,L as u,g as _}from"./app.5de45bf4.js";import{A as w}from"./App.718498a1.js";import{_ as N}from"./Pagination.65efeaeb.js";import"./_plugin-vue_export-helper.cdc0426e.js";const S={class:"col-12 col-md-8 px-0 px-md-3 mt-3 mt-md-0"},V=t("div",{class:"bg-white rounded p-3 mb-3"},[t("p",{class:"fs-4 m-0"},"Students")],-1),A={class:"bg-white rounded p-3"},B={class:"table table-striped"},C=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"School Origin"),t("th",null,"Created at"),t("th",null,"Action")])],-1),L=i("Reject"),D=i("Acc"),z={__name:"Index",props:{students:Object},setup(n){const r=p("");return b(r,a=>{j.Inertia.get(route("admin.students"),{cari:a},{preserveState:!0,replace:!0})}),(a,m)=>(s(),o(w,null,{default:l(()=>[t("div",S,[V,t("div",A,[g(t("input",{type:"text",class:"form-control mb-3",placeholder:"Search","onUpdate:modelValue":m[0]||(m[0]=e=>r.value=e)},null,512),[[k,r.value]]),t("table",B,[C,t("tbody",null,[(s(!0),h(v,null,x(n.students.data,(e,F)=>(s(),h("tr",{key:e.id,class:y({"table-danger":e.status==="reject"})},[t("td",null,[f(c(u),{href:a.route("admin.students.detail",e.id)},{default:l(()=>[i(d(e.full_name),1)]),_:2},1032,["href"])]),t("td",null,d(e.school_origin),1),t("td",null,d(e.created_at),1),t("td",null,[e.status==="acc"?(s(),o(c(u),{key:0,as:"button",class:"btn btn-sm mx-1 btn-danger",href:a.route("admin.acc-or-reject",[e.id,!1])},{default:l(()=>[L]),_:2},1032,["href"])):_("",!0),e.status==="reject"?(s(),o(c(u),{key:1,as:"button",class:"btn btn-sm mx-1 btn-success",href:a.route("admin.acc-or-reject",[e.id,!0])},{default:l(()=>[D]),_:2},1032,["href"])):_("",!0)])],2))),128))])]),f(N,{links:n.students.links,total:n.students.total},null,8,["links","total"])])])]),_:1}))}};export{z as default};
