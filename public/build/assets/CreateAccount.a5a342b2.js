import{L as m,A as u,r as p,o as _,c as f,b as s,k as h,l,v as r,n as i,t as k,d as b,w as g,s as v,p as w,f as x,e as P}from"./app.5de45bf4.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";const y={components:{Link:m},props:{errors:Object},setup(){const o=u({name:"",hp:"",password:"",confirm_password:"",cekPass:""});return{form:o,buatAkun:()=>{v.Inertia.post(route("guest.buat-akun",{name:o.name,hp:o.hp,password:o.password}))},cek:()=>{o.password===o.confirm_password?o.cekPass=!0:o.cekPass=!1}}}},e=o=>(w("data-v-0df18d52"),o=o(),x(),o),B={class:"container-fluid"},D={class:"row vh-100"},I={class:"col-12 col-md-5 p-3 pattern"},V={class:"text-white p-3"},S={class:"text-center mb-3"},C=["src"],L=e(()=>s("h3",null,"Informasi Pendaftaran",-1)),N=e(()=>s("hr",null,null,-1)),U=e(()=>s("ol",{class:"fs-5"},[s("li",null," Buat akun PPDB untuk mendaftar di website PPDB SDIT Harum "),s("li",null,'Akun yang sudah dibuat berstatus "Tidak Aktif".'),s("li",null,' Akun akan "Aktif" jika sudah membayar biaya pendaftaran dan dikonfirmasi oleh admin PPDB. '),s("li",null,"Mengisi formulir pendaftaran yang disediakan")],-1)),T=e(()=>s("hr",{class:"hr"},null,-1)),M={class:"col-12 col-md-7 p-5"},j={class:"text-center"},q={class:"px-0 px-md-5 mb-4"},z=["src"],E=e(()=>s("h3",null,"Buat Akun PPDB",-1)),H=e(()=>s("hr",null,null,-1)),K={class:"mb-3"},O={class:"mb-3"},W={class:"invalid-feedback"},F={class:"form-group mb-3"},G=e(()=>s("div",{class:"invalid-feedback"}," password tidak sama ",-1)),J=e(()=>s("input",{type:"submit",class:"btn btn-oorange btn-lg mt-3 w-100 mb-3",value:"Buat Akun"},null,-1)),Q=e(()=>s("div",{class:"text-center text-muted"},"atau",-1)),R=e(()=>s("br",null,null,-1)),X=P("Login");function Y(o,t,d,a,Z,$){const c=p("Link");return _(),f("div",B,[s("div",D,[s("div",I,[s("div",V,[s("div",S,[s("img",{class:"logo rounded bg-white p-2 mt-0 mt-md-3 mb-3",src:"/storage/img/registration.png",alt:"logosdit"},null,8,C),L,N]),U,T])]),s("div",M,[s("div",j,[s("div",q,[s("img",{class:"logo rounded-circle bg-oorange p-1 mb-3",src:"/storage/img/logosdit.png",alt:"logosdit"},null,8,z),E,H]),s("form",{onSubmit:t[5]||(t[5]=h((...n)=>a.buatAkun&&a.buatAkun(...n),["prevent"])),class:"px-0 px-md-5"},[s("div",K,[l(s("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=n=>a.form.name=n),class:"form-control form-control-lg mb-3",placeholder:"Nama lengkap calon siswa ",required:""},null,512),[[r,a.form.name]])]),s("div",O,[l(s("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=n=>a.form.hp=n),class:i(["form-control form-control-lg mb-3",{"is-invalid":d.errors.hp}]),placeholder:"No Wa Aktif (cth: 085xxxx)"},null,2),[[r,a.form.hp]]),s("div",W,k(d.errors.hp),1)]),s("div",F,[l(s("input",{type:"password","onUpdate:modelValue":t[2]||(t[2]=n=>a.form.password=n),class:"form-control form-control-lg mb-3",placeholder:"Password"},null,512),[[r,a.form.password]]),l(s("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=n=>a.form.confirm_password=n),onKeyup:t[4]||(t[4]=(...n)=>a.cek&&a.cek(...n)),class:i(["form-control form-control-lg",{"is-invalid":a.form.cekPass===!1}]),placeholder:"Ulangi Password"},null,34),[[r,a.form.confirm_password]]),G]),J,Q,R,b(c,{as:"button",href:"/auth",class:"btn btn-lg btn-outline-dark w-100 text-muted"},{default:g(()=>[X]),_:1})],32)])])])])}const ts=A(y,[["render",Y],["__scopeId","data-v-0df18d52"]]);export{ts as default};
