import{A as p}from"./AppHeaderTransparent-23bee656.js";import{T as c,m as b,o as r,f as l,h as a,b as m,a as t,w as g,y as x,e as d,x as h,n as u}from"./app-c754ccf6.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./CartDialog-a584ab0e.js";const _={name:"Landing",components:{AppHeaderTransparent:p},props:{user:{type:Object,default:null}},data(){return{gainAccessIsFinish:!1,showLeftSideBar:!1,showAuthBar:!1,showRedeemForm:!1,emailRedeem:"",redeemCode:"",activeImage:0,name:"",email:"",images:["/img/coffee-1.jpeg","/img/coffee-2.jpeg","/img/coffee-3.jpeg"]}},created(){setInterval(()=>{this.activeImage=(this.activeImage+1)%this.images.length},3e4)},methods:{redeem(){console.log(this.emailRedeem),c({email:this.emailRedeem,code:this.redeemCode}).post(route("redeem.gift"),{onSuccess:()=>{console.log()}})},gainAccess(){c({email:this.email,name:this.name}).post(route("gain.access"),{onSuccess:()=>{this.name="",this.email="",this.gainAccessIsFinish=!0}})}}},v={class:"w-full vfh md:h-screen"},k={key:0,class:"absolute top-0 left-0 w-screen h-screen text-white gap-6 bg-black/40 backdrop-blur-md z-50 flex flex-col items-center justify-center p-16 md:p-4 text-center"},A=t("h1",{class:"font-neuton text-2xl md:text-2xl"},"All Set, You’re In!",-1),y=t("p",{class:"font-cantarell text-sm md:text-sm w-64"},"We will not reach out to you soon! Thanks for signing up",-1),F=t("a",{href:"/",class:"flex items-center cursor-pointer bg-white border border-white text-black hover:bg-black hover:text-white font-bold p-6 h-14 md:h-14 font-cantarell transition hover:duration-100"}," Back to Homepage ",-1),I=[A,y,F],C=["src"],R={class:"absolute bottom-24 md:bottom-36 w-full"},T={class:"flex flex-col lg:grid lg:grid-cols-3 gap-2 w-full"},N=t("div",{class:"text-center col-start-2"},[t("h1",{class:"text-[#E1DCC7] text-5xl md:text-7xl font-averia mb-4 after:content-['\\00AE'] after:text-base md:after:text-xl after:absolute after:top-2 md:after:top-5"}," True Specialty"),t("p",{class:"text-base md:text-xl text-white font-cantarell md:p-0"},"For those who seek the rare and exceptional")],-1),B={key:0,class:"absolute p-4 bottom-0 lg:right-16 lg:bottom-16 z-40 font-cantarell w-full md:w-[500px]"},j={key:0,class:"mb-2 text-sm text-red-500"},E=t("p",{class:"text-sm text-white my-4 before:content['*']"},"*By completing this form you are signing up to receive ASIXTH related emails, and can unsubscribe at any time.",-1),S=["disabled"];function z(n,o,H,V,e,i){const f=b("AppHeaderTransparent");return r(),l("main",v,[e.gainAccessIsFinish?(r(),l("div",k,I)):a("",!0),e.showRedeemForm?(r(),l("div",{key:1,class:"w-full h-full bg-black/60 backdrop-blur-md z-20 absolute transition duration-150",onClick:o[0]||(o[0]=s=>e.showRedeemForm=!1)})):a("",!0),m(f,{class:"fixed bg-transparent w-full text-white font-cantarell z-10"}),t("img",{src:e.images[e.activeImage],alt:"",class:"w-full h-full object-cover transition duration-300 brightness-75"},null,8,C),t("div",R,[t("div",T,[N,e.showRedeemForm?a("",!0):(r(),l("button",{key:0,onClick:o[1]||(o[1]=s=>e.showRedeemForm=!0),class:"border border-white text-white hover:bg-white hover:text-black font-bold font-cantarell h-16 md:h-20 w-1/2 mt-4 md:mt-8 m-auto transition hover:duration-100"}," Gain Access Now "))])]),m(x,{name:"swipe"},{default:g(()=>[e.showRedeemForm?(r(),l("section",B,[n.$attrs.errors.gainAccessFormNull?(r(),l("p",j,"Please complete form below")):a("",!0),d(t("input",{"onUpdate:modelValue":o[2]||(o[2]=s=>e.name=s),class:u(`w-full ${n.$attrs.errors.gainAccessFormNull?"border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500":"border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white"} mb-4 text-xl p-4 font-cantarell bg-transparent`),type:"text",name:"",id:"",placeholder:"Enter Your Name",required:""},null,2),[[h,e.name]]),d(t("input",{"onUpdate:modelValue":o[3]||(o[3]=s=>e.email=s),class:u(`w-full ${n.$attrs.errors.gainAccessFormNull?"border-red-500 text-red-500 placeholder-red-500 focus:border-red-500 focus:ring-red-500":"border-white text-white placeholder-white focus:ring-offset-white focus:ring-white focus:border-white"} mb-4 text-xl p-4 font-cantarell bg-transparent`),type:"text",name:"",id:"",placeholder:"Enter Your Email",required:""},null,2),[[h,e.email]]),E,t("button",{disabled:e.name===""&&e.email==="",onClick:o[4]||(o[4]=(...s)=>i.gainAccess&&i.gainAccess(...s)),class:"disabled:cursor-not-allowed cursor-pointer bg-white text-black hover:bg-black hover:text-white font-bold font-cantarell h-20 w-1/2 m-auto transition hover:duration-100"},"Gain Full Access",8,S)])):a("",!0)]),_:1})])}const L=w(_,[["render",z]]);export{L as default};
