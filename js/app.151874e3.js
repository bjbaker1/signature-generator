(function(){"use strict";var e={1394:function(e,t,n){n.d(t,{I:function(){return u},db:function(){return c},x:function(){return a}});var r=n(223),o=n(5904),i=n(6430);const s={apiKey:"AIzaSyDbJKYAb7R0l298mQNibXp0q3ODf9tfYcQ",authDomain:"signature-builder-3f15e.firebaseapp.com",projectId:"signature-builder-3f15e",storageBucket:"signature-builder-3f15e.appspot.com",messagingSenderId:"372998933855",appId:"1:372998933855:web:bb55ece5ee9effb529baea"},a=(0,r.Wp)(s),u=(0,o.c7)(a),c=(0,i.aU)(a)},1541:function(e,t,n){var r=n(641);const o={class:"header"},i=(0,r.Lk)("h1",null,"C3 Church",-1),s={class:"navbar"};function a(e,t,n,a,u,c){const l=(0,r.g2)("router-link"),f=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",o,[i,(0,r.Lk)("div",s,[(0,r.bF)(l,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.bF)(l,{to:"/generator"},{default:(0,r.k6)((()=>[(0,r.eW)("Signature Builder")])),_:1}),u.isLoggedIn?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("a",{key:0,onClick:t[0]||(t[0]=(...e)=>c.signInWithGoogle&&c.signInWithGoogle(...e))},"Login")),u.isLoggedIn?((0,r.uX)(),(0,r.CE)("a",{key:1,onClick:t[1]||(t[1]=(...e)=>c.handleSignOut&&c.handleSignOut(...e))},"Sign Out")):(0,r.Q3)("",!0)])]),(0,r.bF)(f)],64)}n(4114);var u=n(8661),c=n(5220);const l=(0,c.aE)({history:(0,c.LA)("/signature-generator/"),routes:[{path:"/",component:()=>n.e(123).then(n.bind(n,3504))},{path:"/generator",component:()=>n.e(996).then(n.bind(n,8996)),meta:{requiresAuth:!0}}]}),f=()=>new Promise(((e,t)=>{const n=(0,u.hg)((0,u.xI)(),(t=>{n(),e(t)}),t)}));l.beforeEach((async(e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?await f()?n():(alert("sign in to access!"),n("/")):n()}));var d=l,h=n(1394),p=n(6430),g=n(9814),m={name:"App",data(){return{auth:"",user:{},store:(0,g.Z)(),isLoggedIn:!1}},methods:{handleSignOut(){localStorage.token="",this.user={},this.auth="",this.isLoggedIn=!1,d.push("/")},signInWithGoogle(){const e=new u.HF;this.auth=(0,u.xI)(),(0,u.df)(this.auth,e).then((e=>{const t=u.HF.credentialFromResult(e);this.isLoggedIn=!0,localStorage.token=t.accessToken,this.getUserDetails(e.user),d.push("/generator")})).catch((e=>{console.log(e.code+e.message)}))},async getUserDetails(e){let t=e.email;const n=(0,p.H9)(h.db,"users",t),r=await(0,p.x7)(n);r.exists()?this.store.setUser(r.data()):(this.user.email=e.email,this.store.setUser(this.user),console.log("no data"))}}},b=n(6262);const v=(0,b.A)(m,[["render",a]]);var y=v,k=n(3751),w=n(5026);const C=(0,k.Ef)(y);C.use(w.Nz,{firebaseApp:h.x,modules:[(0,w.qp)()]}),C.use(g.A),C.use(d),C.mount("#app")},9814:function(e,t,n){n.d(t,{A:function(){return s},Z:function(){return a}});var r=n(6032);function o(e){const t=/[^\d]/g;return e.replace(t,"")}const i=(0,r.Ey)();var s=i;const a=(0,r.nY)("user",{state:()=>({token:"",user:{name:"",email:"",company:"",phone:"",title:"",website:"",previewImage:"",address:{street1:"",street2:"",city:"",state:"",postal:""},social:{twitter:"",facebook:"",instagram:"",linkedin:"",youtube:"",tiktok:"",spotify:""}},churchWebsite:"https://myc3church.com",churchAddress:{street1:"6305 Waterloo Rd NW",street2:"",city:"Canal Winchester",state:"OH",postal:"43110"}}),actions:{setUser(e){this.user={name:e.name,email:e.email,company:e.company,phone:e.phone,title:e.title,website:e.website,previewImage:e.previewImage,social:{twitter:e.social.twitter,facebook:e.social.facebook,instagram:e.social.instagram,linkedin:e.social.linkedin,youtube:e.social.youtube,tiktok:e.social.tiktok,spotify:e.social.spotify}}}},getters:{getUser:e=>e.user,firstName:e=>e.user.name.includes(" ")?e.user.name.split(" ")[0]:e.user.name,lastName:e=>e.user.name.includes(" ")?e.user.name.split(" ")[1]:e.user.name,mailToLink:e=>"mailto:"+e.user.email,phoneLink:e=>{let t=o(e.user.phone);return"tel:+"+t},phoneDisplay:e=>{let t=o(e.user.phone);const n=t.slice(0,3),r=t.slice(3,6),i=t.slice(6);return`(${n}) ${r}-${i}`},getWebsiteURL:e=>{let t=e.user.website.includes("http://"),n=e.user.website.includes("https://");return t&&n||!e.user.website?e.user.website:"https://"+e.user.website},getChurchWebsite:e=>e.churchWebsite,getChurchAddress:e=>{let t=e.churchAddress;return`${t.street1} ${t.street2} \n ${t.city}, ${t.state} ${t.postal}`}}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var s=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(a=!1,i<s&&(s=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{123:"c1a09d9d",996:"2bb1eb42"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".d51a0c1a.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="footer-generator:";n.l=function(r,o,i,s){if(e[r])e[r].push(o);else{var a,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var d=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/signature-generator/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",n.nc&&(s.nonce=n.nc);var a=function(n){if(s.onerror=s.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=a,s.parentNode&&s.parentNode.removeChild(s),i(u)}};return s.onerror=s.onload=a,s.href=t,r?r.parentNode.insertBefore(s,r.nextSibling):document.head.appendChild(s),s},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){o=s[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var s=n.miniCssF(r),a=n.p+s;if(t(s,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={996:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var s=n.p+n.u(t),a=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,o[1](a)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,s=r[0],a=r[1],u=r[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(t&&t(r);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkfooter_generator"]=self["webpackChunkfooter_generator"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1541)}));r=n.O(r)})();
//# sourceMappingURL=app.151874e3.js.map