import{a as u,b as p,c as d,d as m,_,e as g,f as w}from"./CartDialog-a9726984.js";import{_ as f}from"./_plugin-vue_export-helper-c27b6911.js";import{m as n,o as B,f as C,b as r,n as v,a as s,A as x,B as b,F as A}from"./app-96a0f33e.js";const k={inheritAttrs:!0,name:"AppHeaderTransparent",props:{user:{type:Object,default:null}},components:{Bars3Icon:u,UserIcon:p,ShoppingBagIcon:d,XMarkIcon:m,AuthDialog:_,MenuDialog:g,CartDialog:w},methods:{showCart(){console.log()}},data(){return{showLeftSideBar:!1,showAuthBar:!1,showCartBar:!1}}},D={class:"w-full py-5"},I={class:"grid grid-cols-3 px-6 md:px-10 py-5"},S=s("a",{class:"group",href:"/"},[s("h1",{class:"h-[35px] hidden group-hover:block text-center mx-auto text-2xl font-bebas transition duration-100"},"ASIXTH"),s("img",{class:"block group-hover:hidden w-[20px] mx-auto",src:"/img/a6ixth-white.png",alt:"logo"})],-1),$={class:"justify-center items-center gap-8 md:gap-8 ml-auto flex"},y=["href"],L=s("span",{class:"hidden md:block"},"Search",-1),M=[L],H=s("img",{src:"icon/user-white.svg",class:"w-5"},null,-1),T=[H],j=s("img",{src:"icon/cart-white.svg",class:"w-5"},null,-1),z=[j];function F(a,o,N,P,e,V){const i=n("AuthDialog"),l=n("CartDialog"),c=n("MenuDialog"),h=n("Bars3Icon");return B(),C(A,null,[r(i,{onClose:o[0]||(o[0]=t=>e.showAuthBar=t),show:e.showAuthBar},null,8,["show"]),r(l,{class:v(`${e.showCartBar?"visible":"invisible"}`),onClose:o[1]||(o[1]=t=>e.showCartBar=t),show:e.showCartBar},null,8,["class","show"]),r(c,{onClose:o[2]||(o[2]=t=>e.showLeftSideBar=t),show:e.showLeftSideBar},null,8,["show"]),s("header",x(b(a.$attrs)),[s("div",D,[s("div",I,[s("button",{onClick:o[3]||(o[3]=t=>e.showLeftSideBar=!0)},[r(h,{class:"w-7 h-7"})]),S,s("div",$,[s("a",{href:a.route("discover.index"),class:"text-medium"},M,8,y),s("button",{onClick:o[4]||(o[4]=t=>e.showAuthBar=!0)},T),s("button",{onClick:o[5]||(o[5]=t=>e.showCartBar=!0)},z)])])])],16)],64)}const R=f(k,[["render",F]]);export{R as A};