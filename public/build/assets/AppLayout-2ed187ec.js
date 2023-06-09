import{o as s,f as r,a as e,g as C,d as x,K as T,A as F,n as p,h as d,t as y,z as $,B as N,C as P,r as g,m as j,u as f,e as L,D as B,b as u,w as a,p as E,c as v,E as S,Z as O,i as h,F as w,j as z,O as A}from"./app-4f0e9d60.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},H=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),K=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),U=[H,K];function Z(i,n){return s(),r("svg",R,U)}const q=V(I,[["render",Z]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},Q={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],oe={class:"ml-3 font-medium text-sm text-white truncate"},re={class:"shrink-0 sm:ml-3"},ne=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ae=[ne],ie={__name:"Banner",setup(i){const n=C(!0),o=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.bannerStyle)||"success"}),c=x(()=>{var t;return((t=T().props.jetstream.flash)==null?void 0:t.banner)||""});return F(c,async()=>{n.value=!0}),(t,_)=>(s(),r("div",null,[n.value&&c.value?(s(),r("div",{key:0,class:p({"bg-indigo-500":o.value=="success","bg-red-700":o.value=="danger"})},[e("div",G,[e("div",J,[e("div",Q,[e("span",{class:p(["flex p-2 rounded-lg",{"bg-indigo-600":o.value=="success","bg-red-600":o.value=="danger"}])},[o.value=="success"?(s(),r("svg",W,Y)):d("",!0),o.value=="danger"?(s(),r("svg",ee,se)):d("",!0)],2),e("p",oe,y(c.value),1)]),e("div",re,[e("button",{type:"button",class:p(["-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":o.value=="success","hover:bg-red-600 focus:bg-red-600":o.value=="danger"}]),"aria-label":"Dismiss",onClick:_[0]||(_[0]=$(l=>n.value=!1,["prevent"]))},ae,2)])])])],2)):d("",!0)]))}},le={class:"relative"},D={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white"]}},setup(i){const n=i;let o=C(!1);const c=l=>{o.value&&l.key==="Escape"&&(o.value=!1)};N(()=>document.addEventListener("keydown",c)),P(()=>document.removeEventListener("keydown",c));const t=x(()=>({48:"w-48"})[n.width.toString()]),_=x(()=>n.align==="left"?"origin-top-left left-0":n.align==="right"?"origin-top-right right-0":"origin-top");return(l,m)=>(s(),r("div",le,[e("div",{onClick:m[0]||(m[0]=M=>j(o)?o.value=!f(o):o=!f(o))},[g(l.$slots,"trigger")]),L(e("div",{class:"fixed inset-0 z-40",onClick:m[1]||(m[1]=M=>j(o)?o.value=!1:o=!1)},null,512),[[B,f(o)]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:a(()=>[L(e("div",{class:p(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,_.value]]),style:{display:"none"},onClick:m[2]||(m[2]=M=>j(o)?o.value=!1:o=!1)},[e("div",{class:p(["rounded-md ring-1 ring-black ring-opacity-5",i.contentClasses])},[g(l.$slots,"content")],2)],2),[[B,f(o)]])]),_:3})]))}},ue={key:0,type:"submit",class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},de=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(i){return(n,o)=>(s(),r("div",null,[i.as=="button"?(s(),r("button",ue,[g(n.$slots,"default")])):i.as=="a"?(s(),r("a",{key:1,href:i.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},[g(n.$slots,"default")],8,de)):(s(),v(f(S),{key:2,href:i.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:a(()=>[g(n.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(i){const n=i,o=x(()=>n.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(c,t)=>(s(),v(f(S),{href:i.href,class:p(o.value)},{default:a(()=>[g(c.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(i){const n=i,o=x(()=>n.active?"block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(c,t)=>(s(),r("div",null,[i.as=="button"?(s(),r("button",{key:0,class:p([o.value,"w-full text-left"])},[g(c.$slots,"default")],2)):(s(),v(f(S),{key:1,href:i.href,class:p(o.value)},{default:a(()=>[g(c.$slots,"default")]),_:3},8,["href","class"]))]))}},he={class:"min-h-screen bg-gray-100"},pe={class:"bg-white border-b border-gray-100"},ge={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},_e={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ml-6"},ye={class:"ml-3 relative"},we={class:"inline-flex rounded-md"},ke={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},xe=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ml-3 relative"},De={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Fe=["src","alt"],Ne={key:1,class:"inline-flex rounded-md"},Pe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"},Ee=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200"},null,-1),Ie=["onSubmit"],Re={class:"-mr-2 flex items-center sm:hidden"},He={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ke={class:"pt-2 pb-3 space-y-1"},Ue={class:"pt-4 pb-1 border-t border-gray-200"},Ze={class:"flex items-center px-4"},qe={key:0,class:"shrink-0 mr-3"},Ge=["src","alt"],Je={class:"font-medium text-base text-gray-800"},Qe={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),ot=["onSubmit"],rt={class:"flex items-center"},nt={key:0,class:"mr-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},at=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[at],lt={key:0,class:"bg-white shadow"},ut={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},ht={__name:"AppLayout",props:{title:String},setup(i){const n=C(!1),o=t=>{A.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},c=()=>{A.post(route("logout"))};return(t,_)=>(s(),r("div",null,[u(f(O),{title:i.title},null,8,["title"]),u(ie),e("div",he,[e("nav",pe,[e("div",ge,[e("div",fe,[e("div",me,[e("div",ve,[u(f(S),{href:t.route("dashboard")},{default:a(()=>[u(q,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",_e,[u(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",ye,[t.$page.props.jetstream.hasTeamFeatures?(s(),v(D,{key:0,align:"right",width:"60"},{trigger:a(()=>[e("span",we,[e("button",ke,[h(y(t.$page.props.auth.user.current_team.name)+" ",1),xe])])]),content:a(()=>[e("div",$e,[t.$page.props.jetstream.hasTeamFeatures?(s(),r(w,{key:0},[Se,u(k,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),v(k,{key:0,href:t.route("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href"])):d("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(w,{key:1},[je,Ce,(s(!0),r(w,null,z(t.$page.props.auth.user.all_teams,l=>(s(),r("form",{key:l.id,onSubmit:$(m=>o(l),["prevent"])},[u(k,{as:"button"},{default:a(()=>[e("div",Te,[l.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",Le,ze)):d("",!0),e("div",null,y(l.name),1)])]),_:2},1024)],40,Me))),128))],64)):d("",!0)],64)):d("",!0)])]),_:1})):d("",!0)]),e("div",Ae,[u(D,{align:"right",width:"48"},{trigger:a(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),r("button",De,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Fe)])):(s(),r("span",Ne,[e("button",Pe,[h(y(t.$page.props.auth.user.name)+" ",1),Ee])]))]),content:a(()=>[Oe,u(k,{href:t.route("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(k,{key:0,href:t.route("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href"])):d("",!0),Ve,e("form",{onSubmit:$(c,["prevent"])},[u(k,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Re,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",onClick:_[0]||(_[0]=l=>n.value=!n.value)},[(s(),r("svg",He,[e("path",{class:p({hidden:n.value,"inline-flex":!n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:p({hidden:!n.value,"inline-flex":n.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:p([{block:n.value,hidden:!n.value},"sm:hidden"])},[e("div",Ke,[u(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:a(()=>[h(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Ue,[e("div",Ze,[t.$page.props.jetstream.managesProfilePhotos?(s(),r("div",qe,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ge)])):d("",!0),e("div",null,[e("div",Je,y(t.$page.props.auth.user.name),1),e("div",Qe,y(t.$page.props.auth.user.email),1)])]),e("div",We,[u(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:a(()=>[h(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),v(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:a(()=>[h(" API Tokens ")]),_:1},8,["href","active"])):d("",!0),e("form",{method:"POST",onSubmit:$(c,["prevent"])},[u(b,{as:"button"},{default:a(()=>[h(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(s(),r(w,{key:1},[Ye,et,u(b,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:a(()=>[h(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),v(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:a(()=>[h(" Create New Team ")]),_:1},8,["href","active"])):d("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),r(w,{key:1},[tt,st,(s(!0),r(w,null,z(t.$page.props.auth.user.all_teams,l=>(s(),r("form",{key:l.id,onSubmit:$(m=>o(l),["prevent"])},[u(b,{as:"button"},{default:a(()=>[e("div",rt,[l.id==t.$page.props.auth.user.current_team_id?(s(),r("svg",nt,it)):d("",!0),e("div",null,y(l.name),1)])]),_:2},1024)],40,ot))),128))],64)):d("",!0)],64)):d("",!0)])])],2)]),t.$slots.header?(s(),r("header",lt,[e("div",ut,[g(t.$slots,"header")])])):d("",!0),e("main",null,[g(t.$slots,"default")])])]))}};export{ht as _};
