import{r as C,a as A,b as B,c as k,_ as y,d as I,e as F}from"./CartDialog-dbba65c7.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{q as c,o as a,f as l,b as i,a as s,s as $,x as D,F as S,T as h,h as d,w as R,p as T,e as p,y as f,n as g}from"./app-f5b17d83.js";const j={inheritAttrs:!0,name:"AppHeaderTransparent",props:{user:{type:Object,default:null}},components:{Bars3Icon:C,UserIcon:A,ShoppingBagIcon:B,XMarkIcon:k,AuthDialog:y,MenuDialog:I,CartDialog:F},methods:{showCart(){console.log()}},data(){return{showLeftSideBar:!1,showAuthBar:!1,showCartBar:!1}}},N={class:"w-full px-5"},E={class:"grid grid-cols-3 px-4 md:px-10 py-4"},L=s("a",{href:"/"},[s("img",{class:"w-[20px] mx-auto",src:"/img/a6ixth-white.png",alt:"logo"})],-1),z={class:"justify-center items-center gap-4 md:gap-7 ml-auto flex"},H=["href"],M=s("span",{class:"hidden md:block"},"Search",-1),V=[M],q=s("img",{src:"icon/auth-light.png",class:"w-4"},null,-1),P=[q],U=s("img",{src:"icon/cart-light.png",class:"w-4"},null,-1),Y=[U];function G(r,e,b,_,t,m){const u=c("AuthDialog"),o=c("CartDialog"),x=c("MenuDialog"),v=c("Bars3Icon");return a(),l(S,null,[i(u,{onClose:e[0]||(e[0]=n=>t.showAuthBar=n),show:t.showAuthBar},null,8,["show"]),i(o,{onClose:e[1]||(e[1]=n=>t.showCartBar=n),show:t.showCartBar},null,8,["show"]),i(x,{onClose:e[2]||(e[2]=n=>t.showLeftSideBar=n),show:t.showLeftSideBar},null,8,["show"]),s("header",$(D(r.$attrs)),[s("div",N,[s("div",E,[s("button",{onClick:e[3]||(e[3]=n=>t.showLeftSideBar=!0)},[i(v,{class:"w-7 h-7"})]),L,s("div",z,[s("a",{href:r.route("discover.index"),class:"text-medium"},V,8,H),s("button",{onClick:e[4]||(e[4]=n=>t.showAuthBar=!0)},P),s("button",{onClick:e[5]||(e[5]=n=>t.showCartBar=!0)},Y)])])])],16)],64)}const O=w(j,[["render",G]]);const X={name:"Landing",components:{AppHeaderTransparent:O},props:{user:{type:Object,default:null}},data(){return{showLeftSideBar:!1,showAuthBar:!1,showRedeemForm:!1,emailRedeem:"",redeemCode:"",activeImage:0,name:"",email:"",images:["/img/coffee-1.jpeg","/img/coffee-2.jpeg","/img/coffee-3.jpeg"]}},created(){setInterval(()=>{this.activeImage=(this.activeImage+1)%this.images.length},3e4)},methods:{redeem(){console.log(this.emailRedeem),h({email:this.emailRedeem,code:this.redeemCode}).post(route("redeem.gift"),{onSuccess:()=>{console.log()}})},gainAccess(){h({email:this.email,name:this.name}).post(route("gain.access"),{onSuccess:()=>{this.name="",this.email="",alert("Your information has been saved!")}})}}},J={class:"w-full h-screen"},K=["src"],Q={class:"absolute bottom-36 w-full"},W={class:"flex flex-col lg:grid lg:grid-cols-3 gap-2 w-full"},Z=s("div",{class:"text-center col-start-2"},[s("h1",{class:"text-[#E1DCC7] text-7xl font-averia mb-4 after:content-['\\00AE'] after:text-xl after:absolute md:after:top-5"}," True Specialty"),s("p",{class:"text-xl text-white font-cantarell p-3 md:p-0"},"For those who seek the rare and exceptional")],-1),ee={key:0,class:"absolute p-4 bottom-0 lg:right-16 lg:bottom-16 z-50 font-cantarell w-full md:w-[500px]"},te={key:0,class:"mb-2 text-sm text-red-500"},se=s("p",{class:"text-sm text-white my-4 before:content['*']"},"*By completing this form you are signing up to receive ASIXTH related emails, and can unsubscribe at any time.",-1),oe=["disabled"];function re(r,e,b,_,t,m){const u=c("AppHeaderTransparent");return a(),l("main",J,[t.showRedeemForm?(a(),l("div",{key:0,class:"w-screen h-screen bg-black/60 backdrop-blur-md z-20 absolute transition duration-150",onClick:e[0]||(e[0]=o=>t.showRedeemForm=!1)})):d("",!0),i(u,{class:"fixed bg-transparent w-full text-white font-cantarell z-10"}),s("img",{src:t.images[t.activeImage],alt:"",class:"w-full h-screen object-cover transition duration-300 brightness-75"},null,8,K),s("div",Q,[s("div",W,[Z,t.showRedeemForm?d("",!0):(a(),l("button",{key:0,onClick:e[1]||(e[1]=o=>t.showRedeemForm=!0),class:"border border-white text-white hover:bg-white hover:text-black font-bold font-cantarell h-20 w-1/2 mt-6 md:mt-8 m-auto transition hover:duration-100"}," Gain full access "))])]),i(T,{name:"swipe"},{default:R(()=>[t.showRedeemForm?(a(),l("section",ee,[r.$attrs.errors.gainAccessFormNull?(a(),l("p",te,"Please complete form below")):d("",!0),p(s("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.name=o),class:g(`w-full ${r.$attrs.errors.gainAccessFormNull?"border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500":"border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white"} mb-4 text-xl p-4 font-cantarell bg-transparent`),type:"text",name:"",id:"",placeholder:"Enter Your Name",required:""},null,2),[[f,t.name]]),p(s("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.email=o),class:g(`w-full ${r.$attrs.errors.gainAccessFormNull?"border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500":"border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white"} mb-4 text-xl p-4 font-cantarell bg-transparent`),type:"text",name:"",id:"",placeholder:"Enter Your Email",required:""},null,2),[[f,t.email]]),se,s("button",{disabled:t.name===""&&t.email==="",onClick:e[4]||(e[4]=(...o)=>m.gainAccess&&m.gainAccess(...o)),class:"disabled:cursor-not-allowed cursor-pointer bg-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-20 w-1/2 m-auto transition hover:duration-100"},"Gain Full Access",8,oe)])):d("",!0)]),_:1})])}const ie=w(X,[["render",re]]);export{ie as default};