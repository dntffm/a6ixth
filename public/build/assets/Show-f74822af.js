import{_ as c}from"./AppLayout-08165ced.js";import p from"./DeleteUserForm-f654e1a9.js";import l from"./LogoutOtherBrowserSessionsForm-cacd8490.js";import{S as s}from"./SectionBorder-767c8731.js";import f from"./TwoFactorAuthenticationForm-35ba925f.js";import u from"./UpdatePasswordForm-12a09704.js";import _ from"./UpdateProfileInformationForm-a06c8630.js";import{o,c as d,w as n,a as i,f as r,b as t,h as a,F as h}from"./app-36d8c9c2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-26d02d13.js";import"./TextInput-cb1dc66c.js";import"./DangerButton-703e207e.js";import"./SecondaryButton-4f9fc090.js";import"./ActionMessage-c17ffc99.js";import"./PrimaryButton-86f37d16.js";import"./InputLabel-4772aa0a.js";import"./FormSection-1c6ec0d1.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};