import{a as d,b as p,c as h,d as m,_,e as f,f as g}from"./CartDialog-ec851b10.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import{m as n,o as B,f as C,b as r,a as o,z as A,A as k,F as v}from"./app-e7c41099.js";const x={inheritAttrs:!0,name:"AppHeader",props:{user:{type:Object,default:null}},components:{Bars3Icon:d,UserIcon:p,ShoppingBagIcon:h,XMarkIcon:m,AuthDialog:_,MenuDialog:f,CartDialog:g},data(){return{showLeftSideBar:!1,showAuthBar:!1,showCartBar:!1}}},D={class:"w-full py-5"},b={class:"grid grid-cols-3 px-6 md:px-10 py-5"},I=o("a",{href:"/"},[o("img",{class:"w-[20px] mx-auto",src:"/img/asixth.png",alt:"logo"})],-1),S={class:"justify-center items-center gap-6 md:gap-7 ml-auto flex"},$=["href"],y=o("span",{class:"hidden md:block"},"Search",-1),L=[y],M=o("img",{src:"/icon/a.png",class:"w-6"},null,-1),j=[M],z=o("img",{src:"/icon/b.png",class:"w-6"},null,-1),F=[z];function H(a,s,N,P,e,V){const i=n("AuthDialog"),l=n("CartDialog"),c=n("MenuDialog"),u=n("Bars3Icon");return B(),C(v,null,[r(i,{dark:!0,onClose:s[0]||(s[0]=t=>e.showAuthBar=t),show:e.showAuthBar},null,8,["show"]),r(l,{dark:!0,onClose:s[1]||(s[1]=t=>e.showCartBar=t),show:e.showCartBar},null,8,["show"]),r(c,{dark:!0,onClose:s[2]||(s[2]=t=>e.showLeftSideBar=t),show:e.showLeftSideBar},null,8,["show"]),o("header",A(k(a.$attrs)),[o("div",D,[o("div",b,[o("button",{onClick:s[3]||(s[3]=t=>e.showLeftSideBar=!0)},[r(u,{class:"w-7 h-7"})]),I,o("div",S,[o("a",{href:a.route("discover.index"),class:"text-medium"},L,8,$),o("button",{onClick:s[4]||(s[4]=t=>e.showAuthBar=!0)},j),o("button",{onClick:s[5]||(s[5]=t=>e.showCartBar=!0)},F)])])])],16)],64)}const U=w(x,[["render",H]]);export{U as A};
