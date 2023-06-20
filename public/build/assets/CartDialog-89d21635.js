import{o as i,f as d,a as e,g as h,u as r,b as p,e as x,N as A,m as v,y as _,n as m,t as y,F as S,j as I,i as k,k as b,T as F,z as j,c as z,w as V,p as T}from"./app-71bb583c.js";function Ee(n,l){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Ce(n,l){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}function Be(n,l){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}function w(n,l){return i(),d("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const D={key:0,class:"md:px-10 md:py-10"},N={class:"mt-10 mb-10"},P=e("h2",{class:"text-4xl mb-4"},"Create Your Account",-1),W=e("p",{class:"text-xl font-cantarell mb-4"},"We’ll send you magic code to login in via phone",-1),H={class:"flex"},L=e("option",{value:"+1",selected:"selected"},"+1",-1),U=e("option",{value:"+62"},"+62",-1),Y=[L,U],G=b('<div><h3 class="font-neuton text-2xl mb-4">What About a Password?</h3><p class="font-cantarell text-sm">Enter your phone number and we&#39;ll text you a magic code. Use a phone number you have access to securely.</p></div><div class="my-8"><hr class="w-full border-white border-1 m-auto"></div><div><h3 class="font-neuton text-2xl mb-4">Already Have an Account ?</h3><p class="font-cantarell text-sm">Provide your phone number above and enter the magic code that we&#39;ll send to your device- you&#39;ll be logged into your new account.</p></div>',3),O={key:1,class:"md:px-10 md:py-10"},Q={class:"mt-10 mb-10"},R=e("h2",{class:"text-4xl mb-4"},"Confirm your magic code",-1),X={class:"text-base font-cantarell mb-4"},q={class:"grid grid-cols-6 gap-2"},J=["onInput","id"],K={key:2,class:"md:px-10 md:py-10"},Z={class:"mt-10 mb-10"},ee=e("h2",{class:"text-4xl mb-4"},"What Should We Call You?",-1),te=e("p",{class:"text-base font-cantarell mb-4"},"Enter your full name, first and last. We will address you by the name you provide for all ASIXTH matters",-1),oe={key:3,class:"md:px-10 md:py-10"},le={class:"mt-10 mb-10"},se={class:"text-4xl mb-4"},ne=e("br",null,null,-1),re=["href"],Me={__name:"AuthDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(n){h("");let l=h(""),u=h([]),a=h("phone"),c=h("+1"),f=h(""),$=localStorage.getItem("name")||this.$page.props.user.nickname;function E(s,t){u.value[t]=s.data;const o=document.getElementById(`otp-${t}`);o.value=s.data,t>0&&t<6&&document.getElementById(`otp-${t+1}`).focus()}function C(){const s=F({phone_number:c.value+""+l.value});console.log(s),s.post(route("login"),{onSuccess:()=>{a.value="otp"}})}function B(){const s=F({phone_number:c.value+""+l.value,code:u.value.join("")});if(s.code.length<6){for(let t=1;t<=6;t++)if(!u.value[t]){const o=document.getElementById(`otp-${t}`);console.log(o),o.focus();break}}else s.post(route("exchange"),{onSuccess:()=>{localStorage.getItem("name")?a.value=null:a.value="name"}})}function M(){localStorage.setItem("name",f.value),a.value=null}return(s,t)=>(i(),d("aside",{class:m(`${n.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md text-white"} w-full lg:w-1/3 h-screen fixed top-0 ${n.show?"right-0":"-right-full lg:-right-1/2"} z-50 font-neuton duration-300 p-5`)},[r(a)==="phone"&&s.$page.props.user==null?(i(),d("div",D,[e("button",{onClick:t[0]||(t[0]=o=>s.$emit("close",!1))},[p(r(w),{class:"w-7 h-7"})]),e("div",N,[P,W,e("div",H,[x(e("select",{"onUpdate:modelValue":t[1]||(t[1]=o=>v(c)?c.value=o:c=o),class:"bg-transparent text-white placeholder-white w-1/4 border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white",name:"",id:""},Y,512),[[A,r(c)]]),x(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>v(l)?l.value=o:l=o),class:m(`${n.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"text",name:"",id:"",placeholder:"000-000-0000"},null,2),[[_,r(l)]])]),e("button",{onClick:C,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Continue ")]),G])):r(a)==="otp"&&s.$page.props.user==null?(i(),d("div",O,[e("button",{onClick:t[3]||(t[3]=o=>s.$emit("close",!1))},[p(r(w),{class:"w-7 h-7"})]),e("div",Q,[R,e("p",X,"We've texted a magic code to "+y(r(l))+" Enter the code we've sent to your device to login or signup.",1),e("div",q,[(i(),d(S,null,I(6,o=>e("input",{onInput:g=>E(g,o),class:m(`${n.dark?"text-black":"text-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white rounded-md text-center`),type:"number",id:"otp-"+o,min:"0",max:"9"},null,42,J)),64))]),e("button",{onClick:B,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Verify now ")])])):r(a)==="name"&&s.$page.props.user!=null?(i(),d("div",K,[e("button",{onClick:t[4]||(t[4]=o=>s.$emit("close",!1))},[p(r(w),{class:"w-7 h-7"})]),e("div",Z,[ee,te,x(e("input",{"onUpdate:modelValue":t[5]||(t[5]=o=>v(f)?f.value=o:f=o),class:m(`${n.dark?"text-white":"text-white placeholder-white"} w-full bg-transparent border-white mb-4 text-xl p-4 font-cantarell focus:ring-offset-white focus:ring-white focus:border-white`),type:"text",name:"",id:"",placeholder:"Enter your name"},null,2),[[_,r(f)]]),e("button",{onClick:M,class:"bg-white border border-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-16 w-full md:w-1/3 m-auto transition hover:duration-100"}," Let's Go ")])])):(i(),d("div",oe,[e("button",{onClick:t[6]||(t[6]=o=>s.$emit("close",!1))},[p(r(w),{class:"w-7 h-7"})]),e("div",le,[e("h2",se,[k("Hello, "),ne,k(y(r($)),1)]),e("a",{href:s.route("logout"),class:"text-base font-cantarell mb-4 underline text-red-600"},"logout",8,re)])]))],2))}},ae={class:"px-3 md:px-10 pt-7 flex flex-col justify-between w-full h-full"},ie={class:"mt-8 flex flex-col h-full justify-between"},ce={class:"font-neuton text-[#FFFEF2]/50"},de=e("span",null,"Shop",-1),ue={class:"absolute right-0 bottom-2"},he={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"},null,-1),fe=[me],pe={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},we=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1),be=[we],xe=b('<ul class="menu-item hidden"><li class="text-3xl py-2 mb-2">Commons</li><li class="text-3xl py-2 mb-2">Heritage</li><li class="text-3xl py-2 mb-2">Fractions</li><li class="text-3xl py-2 mb-2">Pillar</li><li class="text-3xl py-2 mb-2">Purpose</li></ul>',1),ve=b('<li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">About</a></li><li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Faces</a></li><li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Typology</a></li><li class="border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2"><a href="">Autonomy</a></li>',4),ge={class:"border-b-2 border-[#FFFEF2]/50 cursor-pointer hover:text-white hover:border-white text-5xl py-2 mb-2 block md:hidden"},_e=["href"],ye=b('<div class="w-full"><ul class="flex gap-4 md:gap-16 text-xs lg:text-sm font-cantarell border-t border-white py-2"><li class="text-[#FFFEF2]/50 hover:text-white"><a href="mailto:communications@asixth.com"> Contact </a></li><li class="text-[#FFFEF2]/50 hover:text-white"><a href="#">Careers</a></li><li class="after:content-[&#39;\\00AE&#39;] after:top-[2px] after:absolute relative text-[#FFFEF2]/50 hover:text-white"><a href="">True Specialty</a></li><li class="text-[#FFFEF2]/50 hover:text-white"><a href="#">FAQs</a></li></ul></div>',1),Ae={__name:"MenuDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(n){let l=h(!1);function u(a){l.value=!l.value;const c=document.getElementsByClassName("menu-item")[0];console.log(c),c.classList.toggle("hidden")}return(a,c)=>(i(),d("aside",{class:m(`${n.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md"} h-screen overflow-y-hidden w-full lg:w-1/3 fixed top-0 ${n.show?"left-0":"-left-full lg:-left-1/2"} z-50 duration-300 p-5`)},[e("div",ae,[e("button",{onClick:c[0]||(c[0]=f=>a.$emit("close",!1))},[p(r(w),{class:"w-7 h-7 text-white"})]),e("div",ie,[e("ul",ce,[e("li",{class:"text-5xl mb-2 cursor-pointer",onClick:u},[e("div",{class:m(`relative menu-header pb-4 border-b-2 ${r(l)?"text-white border-white":"border-[#FFFEF2]/50 text-[#FFFEF2]/50"} hover:text-white hover:border-white`)},[de,e("span",ue,[r(l)?(i(),d("svg",he,fe)):(i(),d("svg",pe,be))])],2),xe]),ve,e("li",ge,[e("a",{href:a.route("discover.index")}," Search ",8,_e)])]),ye])])],2))}};const ke={class:"px-10 py-7"},Fe=e("div",{class:"mt-6"},[e("p",{class:"font-cantarell text-white"},"You have no Item(s) in your cart. Please add an item to your cart")],-1),Se={__name:"CartDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(n){const l=n;return j(()=>l.show,()=>{console.log(l.show)}),(u,a)=>(i(),z(T,{name:"slide-down"},{default:V(()=>[e("aside",{class:m(`${n.dark?"bg-[#1E1E1E] text-white":"bg-black/25 backdrop-blur-md"} w-full h-1/4 fixed ${n.show?"top-0":"-top-1/4"} duration-300 left-0 z-50`)},[e("div",ke,[e("button",{onClick:a[0]||(a[0]=c=>u.$emit("close",!1))},[p(r(w),{class:"w-7 h-7 text-white"})]),Fe])],2)]),_:1}))}};export{Me as _,Be as a,Ce as b,w as c,Ae as d,Se as e,Ee as r};