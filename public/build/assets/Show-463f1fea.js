import{_ as c}from"./AppLayout-a8130827.js";import p from"./DeleteUserForm-96dc775b.js";import l from"./LogoutOtherBrowserSessionsForm-d0a6f09c.js";import{S as s}from"./SectionBorder-6804b4e3.js";import f from"./TwoFactorAuthenticationForm-36ab0893.js";import u from"./UpdatePasswordForm-86f879fd.js";import _ from"./UpdateProfileInformationForm-45b04510.js";import{o,c as d,w as n,a as i,f as r,b as t,h as a,F as h}from"./app-671ff1c8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-33036c62.js";import"./TextInput-46767a28.js";import"./DangerButton-f0c6625c.js";import"./SecondaryButton-f6b57506.js";import"./ActionMessage-348e9613.js";import"./PrimaryButton-60c03b31.js";import"./InputLabel-3b75bcd8.js";import"./FormSection-d4df5566.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},M={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),d(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",w,[t(_,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{M as default};