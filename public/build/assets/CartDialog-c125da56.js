import{o as f,f as b,a as e,N as H,P as R,u as d,Q as Y,R as U,S as X,g as v,z as F,U as Q,V as q,d as G,c as I,w as E,n as x,b as y,e as A,m as S,W as J,y as O,t as P,F as K,j as Z,i as T,T as j,p as ee}from"./app-a7412d27.js";function st(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function lt(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}function rt(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}function _(t,o){return f(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}function L(t){return H()?(R(t),!0):!1}function k(t){return typeof t=="function"?t():d(t)}const W=typeof window<"u",C=()=>{},M=te();function te(){var t;return W&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent)}function oe(...t){if(t.length!==1)return Y(...t);const o=t[0];return typeof o=="function"?U(X(()=>({get:o,set:C}))):v(o)}function $(t){var o;const l=k(t);return(o=l==null?void 0:l.$el)!=null?o:l}const V=W?window:void 0;function B(...t){let o,l,s,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([l,s,i]=t,o=V):[o,l,s,i]=t,!o)return C;Array.isArray(l)||(l=[l]),Array.isArray(s)||(s=[s]);const c=[],p=()=>{c.forEach(h=>h()),c.length=0},u=(h,a,n,r)=>(h.addEventListener(a,n,r),()=>h.removeEventListener(a,n,r)),m=F(()=>[$(o),k(i)],([h,a])=>{p(),h&&c.push(...l.flatMap(n=>s.map(r=>u(h,n,r,a))))},{immediate:!0,flush:"post"}),g=()=>{m(),p()};return L(g),g}let z=!1;function ne(t,o,l={}){const{window:s=V,ignore:i=[],capture:c=!0,detectIframe:p=!1}=l;if(!s)return;M&&!z&&(z=!0,Array.from(s.document.body.children).forEach(n=>n.addEventListener("click",C)));let u=!0;const m=n=>i.some(r=>{if(typeof r=="string")return Array.from(s.document.querySelectorAll(r)).some(w=>w===n.target||n.composedPath().includes(w));{const w=$(r);return w&&(n.target===w||n.composedPath().includes(w))}}),h=[B(s,"click",n=>{const r=$(t);if(!(!r||r===n.target||n.composedPath().includes(r))){if(n.detail===0&&(u=!m(n)),!u){u=!0;return}o(n)}},{passive:!0,capture:c}),B(s,"pointerdown",n=>{const r=$(t);r&&(u=!n.composedPath().includes(r)&&!m(n))},{passive:!0}),p&&B(s,"blur",n=>{setTimeout(()=>{var r;const w=$(t);((r=s.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(w!=null&&w.contains(s.document.activeElement))&&o(n)},0)})].filter(Boolean);return()=>h.forEach(n=>n())}const D=Q({name:"OnClickOutside",props:["as","options"],emits:["trigger"],setup(t,{slots:o,emit:l}){const s=v();return ne(s,i=>{l("trigger",i)},t.options),()=>{if(o.default)return q(t.as||"div",{ref:s},o.default())}}});function se(t){var o;const l=k(t);return(o=l==null?void 0:l.$el)!=null?o:l}const le=W?window:void 0;function re(...t){let o,l,s,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([l,s,i]=t,o=le):[o,l,s,i]=t,!o)return C;Array.isArray(l)||(l=[l]),Array.isArray(s)||(s=[s]);const c=[],p=()=>{c.forEach(h=>h()),c.length=0},u=(h,a,n,r)=>(h.addEventListener(a,n,r),()=>h.removeEventListener(a,n,r)),m=F(()=>[se(o),k(i)],([h,a])=>{p(),h&&c.push(...l.flatMap(n=>s.map(r=>u(h,n,r,a))))},{immediate:!0,flush:"post"}),g=()=>{m(),p()};return L(g),g}function N(t){const o=window.getComputedStyle(t);if(o.overflowX==="scroll"||o.overflowY==="scroll"||o.overflowX==="auto"&&t.clientWidth<t.scrollWidth||o.overflowY==="auto"&&t.clientHeight<t.scrollHeight)return!0;{const l=t.parentNode;return!l||l.tagName==="BODY"?!1:N(l)}}function ie(t){const o=t||window.event,l=o.target;return N(l)?!1:o.touches.length>1?!0:(o.preventDefault&&o.preventDefault(),!1)}function ae(t,o=!1){const l=v(o);let s=null,i;F(oe(t),u=>{if(u){const m=u;i=m.style.overflow,l.value&&(m.style.overflow="hidden")}},{immediate:!0});const c=()=>{const u=k(t);!u||l.value||(M&&(s=re(u,"touchmove",m=>{ie(m)},{passive:!1})),u.style.overflow="hidden",l.value=!0)},p=()=>{const u=k(t);!u||!l.value||(M&&(s==null||s()),u.style.overflow=i,l.value=!1)};return L(p),G({get(){return l.value},set(u){u?c():p()}})}function ue(){let t=!1;const o=v(!1);return(l,s)=>{if(o.value=s.value,t)return;t=!0;const i=ae(l,s.value);F(o,c=>i.value=c)}}ue();const ce={key:0,class:"md:px-10 md:py-10"},de={class:"mt-10 mb-10"},he=e("h2",{class:"text-4xl mb-4"},"Create Your Account",-1),fe=e("p",{class:"text-xl font-cantarell mb-4"},"We’ll send you magic code to login in via phone",-1),me={class:"flex"},pe=e("option",{value:"+1",selected:"selected"},"+1",-1),we=e("option",{value:"+62"},"+62",-1),ve=[pe,we],be=e("div",null,[e("h3",{class:"font-neuton text-2xl mb-4"},"What About a Password?"),e("p",{class:"font-cantarell text-sm"},"Enter your phone number and we'll text you a magic code. Use a phone number you have access to securely.")],-1),ge=e("div",{class:"my-8"},[e("hr",{class:"w-full border-white border-1 m-auto"})],-1),xe=e("div",null,[e("h3",{class:"font-neuton text-2xl mb-4"},"Already Have an Account ?"),e("p",{class:"font-cantarell text-sm"},"Provide your phone number above and enter the magic code that we'll send to your device- you'll be logged into your new account.")],-1),ye={key:1,class:"md:px-10 md:py-10"},_e={class:"mt-10 mb-10"},ke=e("h2",{class:"text-4xl mb-4"},"Confirm your magic code",-1),$e={class:"text-base font-cantarell mb-4"},Fe={class:"grid grid-cols-6 gap-2"},Ee=["onInput","id"],Ce={key:2,class:"md:px-10 md:py-10"},Ae={class:"mt-10 mb-10"},Se=e("h2",{class:"text-4xl mb-4"},"What Should We Call You?",-1),Be=e("p",{class:"text-base font-cantarell mb-4"},"Enter your full name, first and last. We will address you by the name you provide for all ASIXTH matters",-1),Me={key:3,class:"md:px-10 md:py-10"},Ie={class:"mt-10 mb-10"},Le={class:"text-4xl mb-4"},We=e("br",null,null,-1),De=["href"],it={__name:"AuthDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){v("");let o=v(""),l=v([]),s=v("phone"),i=v("+1"),c=v(""),p=localStorage.getItem("name")||this.$page.props.user.nickname;function u(a,n){l.value[n]=a.data;const r=document.getElementById(`otp-${n}`);r.value=a.data,n>0&&n<6&&document.getElementById(`otp-${n+1}`).focus()}function m(){const a=j({phone_number:i.value+""+o.value});console.log(a),a.post(route("login"),{onSuccess:()=>{s.value="otp"}})}function g(){const a=j({phone_number:i.value+""+o.value,code:l.value.join("")});if(a.code.length<6){for(let n=1;n<=6;n++)if(!l.value[n]){const r=document.getElementById(`otp-${n}`);console.log(r),r.focus();break}}else a.post(route("exchange"),{onSuccess:()=>{localStorage.getItem("name")?s.value=null:s.value="name"}})}function h(){localStorage.setItem("name",c.value),s.value=null}return(a,n)=>(f(),I(d(D),{onTrigger:n[7]||(n[7]=r=>a.$emit("close",!1))},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md text-white"} w-full lg:w-1/3 h-screen fixed top-0 ${t.show?"right-0":"-right-full lg:-right-1/2"} z-50 font-neuton duration-300 p-5`)},[d(s)==="phone"&&a.$page.props.user==null?(f(),b("div",ce,[e("button",{onClick:n[0]||(n[0]=r=>a.$emit("close",!1))},[y(d(_),{class:"w-7 h-7"})]),e("div",de,[he,fe,e("div",me,[A(e("select",{"onUpdate:modelValue":n[1]||(n[1]=r=>S(i)?i.value=r:i=r),class:"bg-transparent text-white placeholder-white w-1/4 border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white",name:"",id:""},ve,512),[[J,d(i)]]),A(e("input",{"onUpdate:modelValue":n[2]||(n[2]=r=>S(o)?o.value=r:o=r),class:x(`${t.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"text",name:"",id:"",placeholder:"000-000-0000"},null,2),[[O,d(o)]])]),e("button",{onClick:m,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Continue ")]),be,ge,xe])):d(s)==="otp"&&a.$page.props.user==null?(f(),b("div",ye,[e("button",{onClick:n[3]||(n[3]=r=>a.$emit("close",!1))},[y(d(_),{class:"w-7 h-7"})]),e("div",_e,[ke,e("p",$e,"We've texted a magic code to "+P(d(o))+" Enter the code we've sent to your device to login or signup.",1),e("div",Fe,[(f(),b(K,null,Z(6,r=>e("input",{onInput:w=>u(w,r),class:x(`${t.dark?"text-black":"text-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white rounded-md text-center`),type:"number",id:"otp-"+r,min:"0",max:"9"},null,42,Ee)),64))]),e("button",{onClick:g,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Verify now ")])])):d(s)==="name"&&a.$page.props.user!=null?(f(),b("div",Ce,[e("button",{onClick:n[4]||(n[4]=r=>a.$emit("close",!1))},[y(d(_),{class:"w-7 h-7"})]),e("div",Ae,[Se,Be,A(e("input",{"onUpdate:modelValue":n[5]||(n[5]=r=>S(c)?c.value=r:c=r),class:x(`${t.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"text",name:"",id:"",placeholder:"Enter your name"},null,2),[[O,d(c)]]),e("button",{onClick:h,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Let's Go ")])])):(f(),b("div",Me,[e("button",{onClick:n[6]||(n[6]=r=>a.$emit("close",!1))},[y(d(_),{class:"w-7 h-7"})]),e("div",Ie,[e("h2",Le,[T("Hello, "),We,T(P(d(p)),1)]),e("a",{href:a.route("logout"),class:"text-base font-cantarell mb-4 underline text-red-600"},"logout",8,De)])]))],2)]),_:1}))}},Oe={class:"px-3 md:px-10 pt-7 flex flex-col justify-between w-full h-full"},Pe={class:"mt-8 flex flex-col h-full justify-between"},Te={class:"font-neuton text-[#FFFEF2]/50"},je=e("span",null,"Shop",-1),ze={class:"absolute right-0 bottom-2"},Ve={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ne=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"},null,-1),He=[Ne],Re={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},Ye=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1),Ue=[Ye],Xe=e("ul",{class:"menu-item hidden"},[e("li",{class:"text-3xl py-2 mb-2"},"Commons"),e("li",{class:"text-3xl py-2 mb-2"},"Heritage"),e("li",{class:"text-3xl py-2 mb-2"},"Fractions"),e("li",{class:"text-3xl py-2 mb-2"},"Pillar"),e("li",{class:"text-3xl py-2 mb-2"},"Purpose")],-1),Qe=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"About")],-1),qe=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"Faces")],-1),Ge=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"Typology")],-1),Je=e("li",{class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"},[e("a",{href:""},"True Specialty")],-1),Ke={class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2 block md:hidden"},Ze=["href"],et=e("div",{class:"w-full"},[e("ul",{class:"flex flex-row justify-between items-center text-xs lg:text-sm font-cantarell border-t border-white py-2"},[e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"mailto:communications@asixth.com"}," Contact ")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"Careers")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"Autonomy")]),e("li",{class:"text-[#FFFEF2]/50 hover:text-white"},[e("a",{href:"#"},"FAQs")])])],-1),at={__name:"MenuDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){let o=v(!1);function l(s){o.value=!o.value;const i=document.getElementsByClassName("menu-item")[0];console.log(i),i.classList.toggle("hidden")}return(s,i)=>(f(),I(d(D),{onTrigger:i[1]||(i[1]=c=>s.$emit("close",!1))},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md"} h-screen overflow-y-hidden w-full lg:w-1/3 fixed top-0 ${t.show?"left-0":"-left-full lg:-left-1/2"} z-50 duration-300 p-5`)},[e("div",Oe,[e("button",{onClick:i[0]||(i[0]=c=>s.$emit("close",!1))},[y(d(_),{class:"w-7 h-7 text-white"})]),e("div",Pe,[e("ul",Te,[e("li",{class:"text-5xl mb-2 cursor-pointer",onClick:l},[e("div",{class:x(`relative menu-header pb-4 border-b-2 ${d(o)?"text-white border-white":"border-[#FFFEF2]/50 text-[#FFFEF2]/50"} hover:text-white hover:border-white`)},[je,e("span",ze,[d(o)?(f(),b("svg",Ve,He)):(f(),b("svg",Re,Ue))])],2),Xe]),Qe,qe,Ge,Je,e("li",Ke,[e("a",{href:s.route("discover.index")}," Search ",8,Ze)])]),et])])],2)]),_:1}))}};const tt={class:"px-10 py-7"},ot=e("div",{class:"mt-6"},[e("p",{class:"font-cantarell text-white"},"You have no Item(s) in your cart. Please add an item to your cart")],-1),ut={__name:"CartDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(t){const o=t;return F(()=>o.show,()=>{console.log(o.show)}),(l,s)=>(f(),I(d(D),{onTrigger:s[1]||(s[1]=i=>l.$emit("close",!1))},{default:E(()=>[y(ee,{name:"slide-down"},{default:E(()=>[e("aside",{class:x(`${t.dark?"bg-[#1E1E1E] text-white":"bg-black/25 backdrop-blur-md"} w-full h-1/4 fixed ${t.show?"top-0":"-top-1/4"} duration-300 left-0 z-50`)},[e("div",tt,[e("button",{onClick:s[0]||(s[0]=i=>l.$emit("close",!1))},[y(d(_),{class:"w-7 h-7 text-white"})]),ot])],2)]),_:1})]),_:1}))}};export{it as _,rt as a,lt as b,_ as c,at as d,ut as e,st as r};