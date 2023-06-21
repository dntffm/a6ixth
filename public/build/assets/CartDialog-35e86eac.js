import{o as f,f as b,a as e,N as H,P as R,u as c,Q as Y,R as U,S as X,g as v,z as F,U as Q,V as q,d as G,c as I,w as E,n as x,b as _,e as A,m as S,W as J,y as O,t as P,F as K,j as Z,i as T,T as j,p as ee}from"./app-7b2d6df2.js";function dt(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function ht(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}function ft(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}function y(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}function L(t){return H()?(R(t),!0):!1}function k(t){return typeof t=="function"?t():c(t)}const W=typeof window<"u",C=()=>{},M=te();function te(){var t;return W&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function oe(...t){if(t.length!==1)return Y(...t);const o=t[0];return typeof o=="function"?U(X(()=>({get:o,set:C}))):v(o)}function $(t){var o;const s=k(t);return(o=s==null?void 0:s.$el)!=null?o:s}const V=W?window:void 0;function B(...t){let o,s,l,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,l,i]=t,o=V):[o,s,l,i]=t,!o)return C;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const d=[],m=()=>{d.forEach(h=>h()),d.length=0},u=(h,a,n,r)=>(h.addEventListener(a,n,r),()=>h.removeEventListener(a,n,r)),p=F(()=>[$(o),k(i)],([h,a])=>{m(),h&&d.push(...s.flatMap(n=>l.map(r=>u(h,n,r,a))))},{immediate:!0,flush:"post"}),g=()=>{p(),m()};return L(g),g}let z=!1;function ne(t,o,s={}){const{window:l=V,ignore:i=[],capture:d=!0,detectIframe:m=!1}=s;if(!l)return;M&&!z&&(z=!0,Array.from(l.document.body.children).forEach(n=>n.addEventListener("click",C)));let u=!0;const p=n=>i.some(r=>{if(typeof r=="string")return Array.from(l.document.querySelectorAll(r)).some(w=>w===n.target||n.composedPath().includes(w));{const w=$(r);return w&&(n.target===w||n.composedPath().includes(w))}}),h=[B(l,"click",n=>{const r=$(t);if(!(!r||r===n.target||n.composedPath().includes(r))){if(n.detail===0&&(u=!p(n)),!u){u=!0;return}o(n)}},{passive:!0,capture:d}),B(l,"pointerdown",n=>{const r=$(t);r&&(u=!n.composedPath().includes(r)&&!p(n))},{passive:!0}),m&&B(l,"blur",n=>{setTimeout(()=>{var r;const w=$(t);((r=l.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(w!=null&&w.contains(l.document.activeElement))&&o(n)},0)})].filter(Boolean);return()=>h.forEach(n=>n())}const D=Q({name:"OnClickOutside",props:["as","options"],emits:["trigger"],setup(t,{slots:o,emit:s}){const l=v();return ne(l,i=>{s("trigger",i)},t.options),()=>{if(o.default)return q(t.as||"div",{ref:l},o.default())}}});function se(t){var o;const s=k(t);return(o=s==null?void 0:s.$el)!=null?o:s}const le=W?window:void 0;function re(...t){let o,s,l,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([s,l,i]=t,o=le):[o,s,l,i]=t,!o)return C;Array.isArray(s)||(s=[s]),Array.isArray(l)||(l=[l]);const d=[],m=()=>{d.forEach(h=>h()),d.length=0},u=(h,a,n,r)=>(h.addEventListener(a,n,r),()=>h.removeEventListener(a,n,r)),p=F(()=>[se(o),k(i)],([h,a])=>{m(),h&&d.push(...s.flatMap(n=>l.map(r=>u(h,n,r,a))))},{immediate:!0,flush:"post"}),g=()=>{p(),m()};return L(g),g}function N(t){const o=window.getComputedStyle(t);if(o.overflowX==="scroll"||o.overflowY==="scroll"||o.overflowX==="auto"&&t.clientWidth<t.scrollWidth||o.overflowY==="auto"&&t.clientHeight<t.scrollHeight)return!0;{const s=t.parentNode;return!s||s.tagName==="BODY"?!1:N(s)}}function ie(t){const o=t||window.event,s=o.target;return N(s)?!1:o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)}function ae(t,o=!1){const s=v(o);let l=null,i;F(oe(t),u=>{if(u){const p=u;i=p.style.overflow,s.value&&(p.style.overflow="hidden")}},{immediate:!0});const d=()=>{const u=k(t);!u||s.value||(M&&(l=re(u,"touchmove",p=>{ie(p)},{passive:!1})),u.style.overflow="hidden",s.value=!0)},m=()=>{const u=k(t);!u||!s.value||(M&&(l==null||l()),u.style.overflow=i,s.value=!1)};return L(m),G({get(){return s.value},set(u){u?d():m()}})}function ue(){let t=!1;const o=v(!1);return(s,l)=>{if(o.value=l.value,t)return;t=!0;const i=ae(s,l.value);F(o,d=>i.value=d)}}ue();const ce={key:0,class:"md:px-10 md:py-10"},de={class:"mt-10 mb-10"},he=e("h2",{class:"text-4xl mb-4"},"Create Your Account",-1),fe=e("p",{class:"text-xl font-cantarell mb-4"},"We’ll send you magic code to login in via phone",-1),pe={class:"flex"},me=e("option",{value:"+1",selected:"selected"},"+1",-1),we=e("option",{value:"+44"},"+44",-1),ve=e("option",{value:"+26"},"+26",-1),be=e("option",{value:"+33"},"+33",-1),ge=e("option",{value:"+49"},"+49",-1),xe=e("option",{value:"+82"},"+82",-1),_e=e("option",{value:"+62"},"+62",-1),ye=[me,we,ve,be,ge,xe,_e],ke=["disabled"],$e=e("div",null,[e("h3",{class:"font-neuton text-2xl mb-4"},"What About a Password?"),e("p",{class:"font-cantarell text-sm"},"Enter your phone number and we'll text you a magic code. Use a phone number you have access to securely.")],-1),Fe=e("div",{class:"my-8"},[e("hr",{class:"w-full border-white border-1 m-auto"})],-1),Ee=e("div",null,[e("h3",{class:"font-neuton text-2xl mb-4"},"Already Have an Account ?"),e("p",{class:"font-cantarell text-sm"},"Provide your phone number above and enter the magic code that we'll send to your device- you'll be logged into your new account.")],-1),Ce={key:1,class:"md:px-10 md:py-10"},Ae={class:"mt-10 mb-10"},Se=e("h2",{class:"text-4xl mb-4"},"Confirm your magic code",-1),Be={class:"text-base font-cantarell mb-4"},Me={class:"grid grid-cols-6 gap-2"},Ie=["onInput","id"],Le=["disabled"],We={key:2,class:"md:px-10 md:py-10"},De={class:"mt-10 mb-10"},Oe=e("h2",{class:"text-4xl mb-4"},"What Should We Call You?",-1),Pe=e("p",{class:"text-base font-cantarell mb-4"},"Enter your full name, first and last. We will address you by the name you provide for all ASIXTH matters",-1),Te={key:3,class:"md:px-10 md:py-10"},je={class:"mt-10 mb-10"},ze={class:"text-4xl mb-4"},Ve=e("br",null,null,-1),Ne=["href"],pt={__name:"AuthDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){v("");let o=v(""),s=v([]),l=v("phone"),i=v("+1"),d=v(""),m=localStorage.getItem("name");function u(a,n){s.value[n]=a.data;const r=document.getElementById(`otp-${n}`);r.value=a.data,n>0&&n<6&&document.getElementById(`otp-${n+1}`).focus()}function p(){const a=j({phone_number:i.value+""+o.value});console.log(a),a.post(route("login"),{onSuccess:()=>{l.value="otp"}})}function g(){const a=j({phone_number:i.value+""+o.value,code:s.value.join("")});if(a.code.length<6){for(let n=1;n<=6;n++)if(!s.value[n]){const r=document.getElementById(`otp-${n}`);console.log(r),r.focus();break}}else a.post(route("exchange"),{onSuccess:()=>{localStorage.getItem("name")?l.value=null:l.value="name"}})}function h(){localStorage.setItem("name",d.value),l.value=null}return(a,n)=>(f(),I(c(D),{onTrigger:n[7]||(n[7]=r=>a.$emit("close",!1))},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md text-white"} w-full lg:w-1/3 h-screen fixed top-0 ${t.show?"right-0":"-right-full lg:-right-1/2"} z-50 font-neuton duration-300 p-5`)},[c(l)==="phone"&&a.$page.props.user==null?(f(),b("div",ce,[e("button",{onClick:n[0]||(n[0]=r=>a.$emit("close",!1))},[_(c(y),{class:"w-7 h-7"})]),e("div",de,[he,fe,e("div",pe,[A(e("select",{"onUpdate:modelValue":n[1]||(n[1]=r=>S(i)?i.value=r:i=r),class:"bg-transparent text-white placeholder-white w-1/4 border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white",name:"",id:""},ye,512),[[J,c(i)]]),A(e("input",{"onUpdate:modelValue":n[2]||(n[2]=r=>S(o)?o.value=r:o=r),class:x(`${t.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"number",name:"",id:"",placeholder:"000-000-0000"},null,2),[[O,c(o)]])]),e("button",{onClick:p,disabled:c(o)==="",class:"disabled:cursor-not-allowed cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Continue ",8,ke)]),$e,Fe,Ee])):c(l)==="otp"&&a.$page.props.user==null?(f(),b("div",Ce,[e("button",{onClick:n[3]||(n[3]=r=>a.$emit("close",!1))},[_(c(y),{class:"w-7 h-7"})]),e("div",Ae,[Se,e("p",Be,"We've texted a magic code to "+P(c(o))+" Enter the code we've sent to your device to login or signup.",1),e("div",Me,[(f(),b(K,null,Z(6,r=>e("input",{onInput:w=>u(w,r),class:x(`${t.dark?"text-black":"text-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white rounded-md text-center`),type:"number",id:"otp-"+r,min:"0",max:"9"},null,42,Ie)),64))]),e("button",{onClick:g,disabled:c(s).length<6,class:"disabled:cursor-not-allowed cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Verify now ",8,Le)])])):c(l)==="name"&&a.$page.props.user!=null?(f(),b("div",We,[e("button",{onClick:n[4]||(n[4]=r=>a.$emit("close",!1))},[_(c(y),{class:"w-7 h-7"})]),e("div",De,[Oe,Pe,A(e("input",{"onUpdate:modelValue":n[5]||(n[5]=r=>S(d)?d.value=r:d=r),class:x(`${t.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"text",name:"",id:"",placeholder:"Enter your name"},null,2),[[O,c(d)]]),e("button",{onClick:h,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Let's Go ")])])):(f(),b("div",Te,[e("button",{onClick:n[6]||(n[6]=r=>a.$emit("close",!1))},[_(c(y),{class:"w-7 h-7"})]),e("div",je,[e("h2",ze,[T("Hello, "),Ve,T(P(c(m)||a.$page.props.user.nickname),1)]),e("a",{href:a.route("logout"),class:"text-base font-cantarell mb-4 underline text-red-600"},"logout",8,Ne)])]))],2)]),_:1}))}},He={class:"px-3 md:px-10 pt-7 flex flex-col justify-between w-full h-full"},Re={class:"mt-8 flex flex-col h-full justify-between"},Ye={class:"font-neuton text-[#FFFEF2]/50"},Ue=e("span",null,"Shop",-1),Xe={class:"absolute right-0 bottom-2"},Qe={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},qe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"},null,-1),Ge=[qe],Je={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ke=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1),Ze=[Ke],et=e("ul",{class:"menu-item hidden"},[e("li",{class:"text-3xl py-2 mb-2"},"Commons"),e("li",{class:"text-3xl py-2 mb-2"},"Heritage"),e("li",{class:"text-3xl py-2 mb-2"},"Fractions"),e("li",{class:"text-3xl py-2 mb-2"},"Pillar"),e("li",{class:"text-3xl py-2 mb-2"},"Purpose")],-1),tt=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"About")],-1),ot=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"Faces")],-1),nt=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"Typology")],-1),st=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"True Specialty")],-1),lt={class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2 block md:hidden"},rt=["href"],it=e("div",{class:"w-full"},[e("ul",{class:"flex flex-row justify-between items-center text-xs lg:text-sm font-cantarell border-t border-white py-2"},[e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"mailto:communications@asixth.com"}," Contact ")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"Careers")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"Autonomy")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"FAQs")])])],-1),mt={__name:"MenuDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){let o=v(!1);function s(l){o.value=!o.value;const i=document.getElementsByClassName("menu-item")[0];console.log(i),i.classList.toggle("hidden")}return(l,i)=>(f(),I(c(D),{onTrigger:i[1]||(i[1]=d=>l.$emit("close",!1))},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md"} h-screen overflow-y-hidden w-full lg:w-1/3 fixed top-0 ${t.show?"left-0":"-left-full lg:-left-1/2"} z-50 duration-300 p-5`)},[e("div",He,[e("button",{onClick:i[0]||(i[0]=d=>l.$emit("close",!1))},[_(c(y),{class:"w-7 h-7 text-white"})]),e("div",Re,[e("ul",Ye,[e("li",{class:"text-5xl mb-2 cursor-pointer",onClick:s},[e("div",{class:x(`relative menu-header pb-4 border-b-2 ${c(o)?"text-white border-white":"border-[#FFFEF2]/50 text-[#FFFEF2]/50"} hover:text-white hover:border-white`)},[Ue,e("span",Xe,[c(o)?(f(),b("svg",Qe,Ge)):(f(),b("svg",Je,Ze))])],2),et]),tt,ot,nt,st,e("li",lt,[e("a",{href:l.route("discover.index")}," Search ",8,rt)])]),it])])],2)]),_:1}))}};const at={class:"px-10 py-7"},ut=e("div",{class:"mt-6"},[e("p",{class:"font-cantarell text-white"},"You have no Item(s) in your cart. Please add an item to your cart")],-1),wt={__name:"CartDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){const o=t;return F(()=>o.show,()=>{console.log(o.show)}),(s,l)=>(f(),I(c(D),{onTrigger:l[1]||(l[1]=i=>s.$emit("close",!1))},{default:E(()=>[_(ee,{name:"slide-down"},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/25 backdrop-blur-md"} w-full h-1/4 fixed ${t.show?"top-0":"-top-1/4"} duration-300 left-0 z-50`)},[e("div",at,[e("button",{onClick:l[0]||(l[0]=i=>s.$emit("close",!1))},[_(c(y),{class:"w-7 h-7 text-white"})]),ut])],2)]),_:1})]),_:1}))}};export{pt as _,ft as a,ht as b,y as c,mt as d,wt as e,dt as r};
