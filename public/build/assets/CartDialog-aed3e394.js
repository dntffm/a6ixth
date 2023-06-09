import{o as n,f as a,a as e,g as m,b as d,u as i,e as p,y as b,m as x,n as u,k as w,T as f,A as g,c as _,w as k,p as v}from"./app-4f0e9d60.js";function J(o,t){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function K(o,t){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})])}function O(o,t){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})])}function h(o,t){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const y={class:"px-10 py-10"},$={class:"mt-10 mb-10"},C=e("h2",{class:"text-4xl mb-4"},"Create Your Account",-1),B=e("p",{class:"text-xl font-cantarell mb-4"},"We’ll send you a magic link to login in via email",-1),E=w('<div><h3 class="font-neuton text-2xl mb-4">What About a Password?</h3><p class="font-cantarell text-sm">We don&#39;t believe in passwords. Enter your email address and we&#39;ll email you a magic link. Click that link from any device and you&#39;ll be logged in.</p></div><div class="my-8"><hr class="w-[95%] border-black m-auto"></div><div><h3 class="font-neuton text-2xl mb-4">Already Have an Account ?</h3><p class="font-cantarell text-sm">No problem. Provide your email address above and click the magic link that we&#39;ll send to your email - you&#39;ll be logged into your account.</p></div>',3),Q={__name:"AuthDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(o){let t=m("");function r(){f({email:t.value}).post(route("login"),{onSuccess:()=>{console.log()}})}return(l,s)=>(n(),a("aside",{class:u(`${o.dark?"bg-[#1E1E1E] text-white":"bg-background text-black"} w-full lg:w-1/2 h-screen fixed top-0 ${o.show?"right-0":"-right-full lg:-right-1/2"} z-50 font-neuton duration-300 p-5`)},[e("div",y,[e("button",{onClick:s[0]||(s[0]=c=>l.$emit("close",!1))},[d(i(h),{class:"w-7 h-7"})]),e("div",$,[C,B,p(e("input",{"onUpdate:modelValue":s[1]||(s[1]=c=>x(t)?t.value=c:t=c),class:"w-full bg-background border-black mb-4 text-xl p-4 font-cantarell",type:"text",name:"",id:"",placeholder:"Email address"},null,512),[[b,i(t)]]),e("button",{onClick:r,class:"bg-black border border-black text-white hover:bg-white hover:text-black font-bold font-cantarell h-16 w-1/3 m-auto transition hover:duration-100"}," Continue ")]),E])],2))}},M={class:"px-10 py-7 flex flex-col justify-between w-full"},A={class:"mt-8"},z={class:"font-neuton text-white"},j={class:"relative menu-header pb-4 border-b-2 border-white"},D=e("span",null,"Shop",-1),P={class:"absolute right-0 bottom-2"},S={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},T=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 12h-15"},null,-1),V=[T],N={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},H=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 4.5v15m7.5-7.5h-15"},null,-1),I=[H],W=w('<ul class="menu-item hidden"><li class="text-3xl py-2 mb-2">Commons</li><li class="text-3xl py-2 mb-2">Heritage</li><li class="text-3xl py-2 mb-2">Fractions</li><li class="text-3xl py-2 mb-2">Pillar</li><li class="text-3xl py-2 mb-2">Purpose</li></ul>',1),F=e("li",{class:"border-b-2 border-white text-5xl py-2 mb-2"},"About",-1),L=e("li",{class:"border-b-2 border-white text-5xl py-2 mb-2"},"Faces",-1),Y=e("li",{class:"border-b-2 border-white text-5xl py-2 mb-2"},"Typology",-1),q=e("div",{class:"absolute bottom-0 w-[90%]"},[e("ul",{class:"flex gap-8 text-white text-sm lg:text-xl font-cantarell border-t border-white py-2"},[e("li",null,"Contact"),e("li",null,"Careers"),e("li",null,"Autonomy"),e("li",{class:"after:content-['\\00AE']"},"True Specialty")])],-1),X={__name:"MenuDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(o){let t=m(!1);function r(l){t.value=!t.value,l.target.parentElement.parentElement.querySelector(".menu-item").classList.toggle("hidden"),console.log()}return(l,s)=>(n(),a("aside",{class:u(`${o.dark?"bg-[#1E1E1E] text-white":"bg-black/40 backdrop-blur-md"} h-screen overflow-y-hidden w-full lg:w-1/2 fixed top-0 ${o.show?"left-0":"-left-full lg:-left-1/2"} z-50 duration-300 p-5`)},[e("div",M,[e("button",{onClick:s[0]||(s[0]=c=>l.$emit("close",!1))},[d(i(h),{class:"w-7 h-7 text-white"})]),e("div",A,[e("ul",z,[e("li",{class:"text-5xl mb-2 cursor-pointer",onClick:r},[e("div",j,[D,e("span",P,[i(t)?(n(),a("svg",S,V)):(n(),a("svg",N,I))])]),W]),F,L,Y])]),q])],2))}};const R={class:"px-10 py-7"},U=e("div",{class:"mt-6"},[e("p",{class:"font-cantarell text-white"},"You have no Item(s) in your cart. Please add an item to your cart")],-1),Z={__name:"CartDialog",props:{dark:{type:Boolean,default:!1},show:{type:Boolean,default:!1}},setup(o){const t=o;return g(()=>t.show,()=>{console.log(t.show)}),(r,l)=>(n(),_(v,{name:"slide-down"},{default:k(()=>[e("aside",{class:u(`${o.dark?"bg-[#1E1E1E] text-white":"bg-black/25 backdrop-blur-md"} w-full h-1/4 fixed ${o.show?"top-0":"-top-1/4"} duration-300 left-0 z-50`)},[e("div",R,[e("button",{onClick:l[0]||(l[0]=s=>r.$emit("close",!1))},[d(i(h),{class:"w-7 h-7 text-white"})]),U])],2)]),_:1}))}};export{Q as _,O as a,K as b,h as c,X as d,Z as e,J as r};
