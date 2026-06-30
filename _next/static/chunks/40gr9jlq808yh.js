(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56412,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return c}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=e.r(44066)._(e.r(24455)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,r=e.protocol||"",i=e.pathname||"",l=e.hash||"",c=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),c&&"object"==typeof c&&(c=String(a.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||o.test(r))&&!1!==s?(s="//"+(s||""),i&&"/"!==i[0]&&(i="/"+i)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),i=i.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${r}${s}${i}${d}${l}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},48254,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return i}});let r=e.r(52940);function i(e,t){let n=(0,r.useRef)(null),i=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=n.current;e&&(n.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(n.current=a(e,r)),t&&(i.current=a(t,r))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},64444,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let r=e.r(65107),i=e.r(40844);function a(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,i.hasBasePath)(n.pathname)}catch(e){return!1}}},23473,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},71774,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={default:function(){return x},useLinkStatus:function(){return y}};for(var i in r)Object.defineProperty(n,i,{enumerable:!0,get:r[i]});let a=e.r(44066),o=e.r(35337),l=a._(e.r(52940)),c=e.r(56412),s=e.r(59745),d=e.r(48254),u=e.r(65107),p=e.r(91531);e.r(91152);let f=e.r(69085),h=e.r(6855),m=e.r(64444),g=e.r(39934);function x(t){var n,r;let i,a,x,[y,v]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),w=(0,l.useRef)(null),{href:_,as:j,children:S,prefetch:C=null,passHref:I,replace:k,shallow:A,scroll:N,onClick:M,onMouseEnter:E,onTouchStart:O,legacyBehavior:P=!1,onNavigate:T,transitionTypes:L,ref:F,unstable_dynamicOnHover:R,...B}=t;i=S,P&&("string"==typeof i||"number"==typeof i)&&(i=(0,o.jsx)("a",{children:i}));let D=l.default.useContext(s.AppRouterContext),z=!1!==C,U=!1!==C?null===(r=C)||"auto"===r?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,$="string"==typeof(n=j||_)?n:(0,c.formatUrl)(n);if(P){if(i?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(i)}let V=P?a&&"object"==typeof a&&a.ref:F,H=l.default.useCallback(e=>(null!==D&&(w.current=(0,h.mountLinkInstance)(e,$,D,U,z,v)),()=>{w.current&&((0,h.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,h.unmountPrefetchableInstance)(e)}),[z,$,D,U,v]),K={ref:(0,d.useMergedRef)(H,V),onClick(t){P||"function"!=typeof M||M(t),P&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!D||t.defaultPrevented||function(t,n,r,i,a,o,c){if("u">typeof window){let s,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){i&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(18128);l.default.startTransition(()=>{u(n,i?"replace":"push",!1===a?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,r.current,c)})}}(t,$,w,k,N,T,L)},onMouseEnter(e){P||"function"!=typeof E||E(e),P&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),D&&z&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)},onTouchStart:function(e){P||"function"!=typeof O||O(e),P&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),D&&z&&(0,h.onNavigationIntent)(e.currentTarget,!0===R)}};return(0,u.isAbsoluteUrl)($)?K.href=$:P&&!I&&("a"!==a.type||"href"in a.props)||(K.href=(0,p.addBasePath)($)),x=P?l.default.cloneElement(a,K):(0,o.jsx)("a",{...B,...K,children:i}),(0,o.jsx)(b.Provider,{value:y,children:x})}e.r(23473);let b=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58891,(e,t,n)=>{t.exports=e.r(76349)},36690,e=>{"use strict";var t=e.i(35337),n=e.i(4699),r=e.i(52940);function i(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function a(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],o=t[n];return"function"==typeof r?`${r}`==`${o}`:i(r)&&i(o)?a(r,o):r===o})}function o(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function c(e){return"string"==typeof e}function s(e){return"boolean"==typeof e}function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return Math.abs(e)}function p(e){return Math.sign(e)}function f(e){return x(e).map(Number)}function h(e){return e[m(e)]}function m(e){return Math.max(0,e.length-1)}function g(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function x(e){return Object.keys(e)}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function y(){let e=[],t={add:function(n,r,i,a={passive:!0}){let o;return"addEventListener"in n?(n.addEventListener(r,i,a),o=()=>n.removeEventListener(r,i,a)):(n.addListener(i),o=()=>n.removeListener(i)),e.push(o),t},clear:function(){e=e.filter(e=>e())}};return t}function v(e=0,t=0){let n=u(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function w(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function _(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=null,a=!1;return{clear:function(){!a&&(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(a)return;let o=Math.round(100*e.direction(t))/100;o!==i&&(r.transform=n(o),i=o)},toggleActive:function(e){a=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function S(e,t,n){let r,i,a,o,C,I,k,A,N=e.ownerDocument,M=N.defaultView,E=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(x(n).forEach(r=>{let i=t[r],a=n[r],o=d(i)&&d(a);t[r]=o?e(i,a):a}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=x(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>x(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(M),O=(A=[],{init:function(e,t){return(A=t.filter(({options:e})=>!1!==E.optionsAtMedia(e).active)).forEach(t=>t.init(e,E)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){A=A.filter(e=>e.destroy())}}),P=y(),T=(i={},a={init:function(e){r=e},emit:function(e){return(i[e]||[]).forEach(t=>t(r,e)),a},off:function(e,t){return i[e]=(i[e]||[]).filter(e=>e!==t),a},on:function(e,t){return i[e]=(i[e]||[]).concat([t]),a},clear:function(){i={}}}),{mergeOptions:L,optionsAtMedia:F,optionsMediaQueries:R}=E,{on:B,off:D,emit:z}=T,U=!1,$=L(j,S.globalOptions),V=L($),H=[];function K(t,n){U||(V=F($=L($,t)),H=n||H,function(){let{container:t,slides:n}=V;I=(c(t)?e.querySelector(t):t)||e.children[0];let r=c(n)?I.querySelectorAll(n):n;k=[].slice.call(r||I.children)}(),o=function t(n){let r=function(e,t,n,r,i,a,o){var d,j;let S,C,I,k,A,N,M,E,O,P,T,L,F,R,{align:B,axis:D,direction:z,startIndex:U,loop:$,duration:V,dragFree:H,dragThreshold:K,inViewThreshold:q,slidesToScroll:X,skipSnaps:Z,containScroll:Y,watchResize:Q,watchSlides:W,watchDrag:G,watchFocus:J}=a,ee={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},et=ee.measure(t),en=n.map(ee.measure),er=(C="rtl"===z,k=(I="y"===D)||!C?1:-1,A=I?"top":C?"right":"left",N=I?"bottom":C?"left":"right",{scroll:I?"y":"x",cross:I?"x":"y",startEdge:A,endEdge:N,measureSize:function(e){let{height:t,width:n}=e;return I?t:n},direction:function(e){return e*k}}),ei=er.measureSize(et),ea={measure:function(e){return e/100*ei}},eo=(d=B,j=ei,S={start:function(){return 0},center:function(e){return(j-e)/2},end:function(e){return j-e}},{measure:function(e,t){return c(d)?S[d](e):d(j,e,t)}}),el=!$&&!!Y,{slideSizes:ec,slideSizesWithGaps:es,startGap:ed,endGap:eu}=function(e,t,n,r,i,a){let{measureSize:o,startEdge:l,endEdge:c}=e,s=n[0]&&i,d=function(){if(!s)return 0;let e=n[0];return u(t[l]-e[l])}(),p=s?parseFloat(a.getComputedStyle(h(r)).getPropertyValue(`margin-${c}`)):0,f=n.map(o),g=n.map((e,t,n)=>{let r=t===m(n);return t?r?f[t]+p:n[t+1][l]-e[l]:f[t]+d}).map(u);return{slideSizes:f,slideSizesWithGaps:g,startGap:d,endGap:p}}(er,et,en,n,$||!!Y,i),ep=function(e,t,n,r,i,a,o,c){let{startEdge:s,endEdge:d,direction:p}=e,g=l(n);return{groupSlides:function(e){return g?f(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?f(e).reduce((n,l,f)=>{let g=h(n)||0,x=l===m(e),b=i[s]-a[g][s],y=i[s]-a[l][d],v=r||0!==g?0:p(o),w=u(y-(!r&&x?p(c):0)-(b+v));return f&&w>t+2&&n.push(l),x&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(er,ei,X,$,et,en,ed,eu),{snaps:ef,snapsAligned:eh}=function(e,t,n,r,i){let{startEdge:a,endEdge:o}=e,{groupSlides:l}=i,c=l(r).map(e=>h(e)[o]-e[0][a]).map(u).map(t.measure),s=r.map(e=>n[a]-e[a]).map(e=>-u(e)),d=l(s).map(e=>e[0]).map((e,t)=>e+c[t]);return{snaps:s,snapsAligned:d}}(er,eo,et,en,ep),em=-h(ef)+h(es),{snapsContained:eg,scrollContainLimit:ex}=function(e,t,n,r){let i,a,o=v(-t+e,0),l=n.map((e,t)=>{let{min:r,max:i}=o,a=o.constrain(e),l=t===m(n);return t?l||function(e,t){return 1>=u(e-t)}(r,a)?r:function(e,t){return 1>=u(e-t)}(i,a)?i:a:i}).map(e=>parseFloat(e.toFixed(3))),c=(i=l[0],a=h(l),v(l.lastIndexOf(i),l.indexOf(a)+1));return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return l;let{min:n,max:i}=c;return l.slice(n,i)}(),scrollContainLimit:c}}(ei,em,eh,Y),eb=el?eg:eh,{limit:ey}=(M=eb[0],{limit:v($?M-em:h(eb),M)}),ev=function e(t,n,r){let{constrain:i}=v(0,t),a=t+1,o=l(n);function l(e){return r?u((a+e)%a):i(e)}function c(){return e(t,o,r)}let s={get:function(){return o},set:function(e){return o=l(e),s},add:function(e){return c().set(o+e)},clone:c};return s}(m(eb),U,$),ew=ev.clone(),e_=f(n),ej=function(e,t,n,r){let i=y(),a=1e3/60,o=null,l=0,c=0;function s(e){if(!c)return;o||(o=e,n(),n());let i=e-o;for(o=e,l+=i;l>=a;)n(),l-=a;r(l/a),c&&(c=t.requestAnimationFrame(s))}function d(){t.cancelAnimationFrame(c),o=null,l=0,c=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(o=null,l=0)})},destroy:function(){d(),i.clear()},start:function(){c||(c=t.requestAnimationFrame(s))},stop:d,update:n,render:r}}(r,i,()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}})=>{r||n.constrain(e.pointerDown()),t.seek()})(eR),e=>(({scrollBody:e,translate:t,location:n,offsetLocation:r,previousLocation:i,scrollLooper:a,slideLooper:o,dragHandler:l,animation:c,eventHandler:s,scrollBounds:d,options:{loop:u}},p)=>{let f=e.settled(),h=!d.shouldConstrain(),m=u?f:f&&h,g=m&&!l.pointerDown();g&&c.stop();let x=n.get()*p+i.get()*(1-p);r.set(x),u&&(a.loop(e.direction()),o.loop()),t.to(r.get()),g&&s.emit("settle"),m||s.emit("scroll")})(eR,e)),eS=eb[ev.get()],eC=w(eS),eI=w(eS),ek=w(eS),eA=w(eS),eN=function(e,t,n,r,i){let a=0,o=0,l=i,c=.68,s=e.get(),d=0;function f(e){return l=e,m}function h(e){return c=e,m}let m={direction:function(){return o},duration:function(){return l},velocity:function(){return a},seek:function(){let t=r.get()-e.get(),i=0;return l?(n.set(e),a+=t/l,a*=c,s+=a,e.add(a),i=s-d):(a=0,n.set(r),e.set(r),i=t),o=p(i),d=s,m},settled:function(){return .001>u(r.get()-t.get())},useBaseFriction:function(){return h(.68)},useBaseDuration:function(){return f(i)},useFriction:h,useDuration:f};return m}(eC,ek,eI,eA,V),eM=function(e,t,n,r,i){let{reachedAny:a,removeOffset:o,constrain:l}=r;function c(e){return e.concat().sort((e,t)=>u(e)-u(t))[0]}function s(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return c(i);let a=i.filter(e=>p(e)===r);return a.length?c(a):h(i)-n}return{byDistance:function(n,r){let c=i.get()+n,{index:d,distance:p}=function(n){let r=e?o(n):l(n),{index:i}=t.map((e,t)=>({diff:s(e-r,0),index:t})).sort((e,t)=>u(e.diff)-u(t.diff))[0];return{index:i,distance:r}}(c),f=!e&&a(c);if(!r||f)return{index:d,distance:n};let h=n+s(t[d]-p,0);return{index:d,distance:h}},byIndex:function(e,n){let r=s(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:s}}($,eb,em,ey,eA),eE=function(e,t,n,r,i,a,o){function l(i){let l=i.distance,c=i.index!==t.get();a.add(l),l&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(i.index),o.emit("select"))}return{distance:function(e,t){l(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);l(i.byIndex(r.get(),n))}}}(ej,ev,ew,eN,eM,eA,o),eO=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ey),eP=y(),eT=(O={},P=null,T=null,L=!1,{init:function(){E=new IntersectionObserver(e=>{L||(e.forEach(e=>{O[n.indexOf(e.target)]=e}),P=null,T=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:q}),n.forEach(e=>E.observe(e))},destroy:function(){E&&E.disconnect(),L=!0},get:function(e=!0){if(e&&P)return P;if(!e&&T)return T;let t=x(O).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=O[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(P=t),e||(T=t),t}}),{slideRegistry:eL}=function(e,t,n,r,i,a){let o,{groupSlides:l}=i,{min:c,max:s}=r;return{slideRegistry:(o=l(a),1===n.length?[a]:e&&"keepSnaps"!==t?o.slice(c,s).map((e,t,n)=>{let r=t===m(n);return t?r?g(m(a)-h(n)[0]+1,h(n)[0]):e:g(h(n[0])+1)}):o)}}(el,Y,eb,ex,ep,e_),eF=function(e,t,n,r,i,a,o,c){let d={passive:!0,capture:!0},u=0;function p(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(f){c&&(a.add(document,"keydown",p,!1),t.forEach((t,p)=>{a.add(t,"focus",t=>{(s(c)||c(f,t))&&function(t){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));l(a)&&(i.useDuration(0),r.index(a,0),o.emit("slideFocus"))}(p)},d)}))}}}(e,n,eL,eE,eN,eP,o,J),eR={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:et,slideRects:en,animation:ej,axis:er,dragHandler:function(e,t,n,r,i,a,o,l,c,d,f,h,m,g,x,w,_,j){let{cross:S,direction:C}=e,I=["INPUT","SELECT","TEXTAREA"],k={passive:!1},A=y(),N=y(),M=v(50,225).constrain(g.measure(20)),E={mouse:300,touch:400},O={mouse:500,touch:600},P=x?43:25,T=!1,L=0,F=0,R=!1,B=!1,D=!1,z=!1;function U(e){if(!b(e,r)&&e.touches.length>=2)return $(e);let t=a.readPoint(e),n=a.readPoint(e,S),o=u(t-L),c=u(n-F);if(!B&&!z&&(!e.cancelable||!(B=o>c)))return $(e);let s=a.pointerMove(e);o>w&&(D=!0),d.useFriction(.3).useDuration(.75),l.start(),i.add(C(s)),e.preventDefault()}function $(e){var t;let n,r,i=f.byDistance(0,!1).index!==h.get(),o=a.pointerUp(e)*(x?O:E)[z?"mouse":"touch"],l=(t=C(o),n=h.add(-1*p(t)),r=f.byDistance(t,!x).distance,x||u(t)<M?r:_&&i?.5*r:f.byIndex(n.get(),0).distance),s=function(e,t){var n,r;if(0===e||0===t||u(e)<=u(t))return 0;let i=(n=u(e),r=u(t),u(n-r));return u(i/e)}(o,l);B=!1,R=!1,N.clear(),d.useDuration(P-10*s).useFriction(.68+s/50),c.distance(l,!x),z=!1,m.emit("pointerUp")}function V(e){D&&(e.stopPropagation(),e.preventDefault(),D=!1)}return{init:function(e){j&&A.add(t,"dragstart",e=>e.preventDefault(),k).add(t,"touchmove",()=>void 0,k).add(t,"touchend",()=>void 0).add(t,"touchstart",l).add(t,"mousedown",l).add(t,"touchcancel",$).add(t,"contextmenu",$).add(t,"click",V,!0);function l(l){(s(j)||j(e,l))&&function(e){let l,c=b(e,r);if((z=c,D=x&&c&&!e.buttons&&T,T=u(i.get()-o.get())>=2,!c||0===e.button)&&(l=e.target.nodeName||"",!I.includes(l))){let r;R=!0,a.pointerDown(e),d.useFriction(0).useDuration(0),i.set(o),r=z?n:t,N.add(r,"touchmove",U,k).add(r,"touchend",$).add(r,"mousemove",U,k).add(r,"mouseup",$),L=a.readPoint(e),F=a.readPoint(e,S),m.emit("pointerDown")}}(l)}},destroy:function(){A.clear(),N.clear()},pointerDown:function(){return R}}}(er,e,r,i,eA,function(e,t){let n,r;function i(e){return e.timeStamp}function a(n,r){let i=r||e.scroll,a=`client${"x"===i?"X":"Y"}`;return(b(n,t)?n:n.touches[0])[a]}return{pointerDown:function(e){return n=e,r=e,a(e)},pointerMove:function(e){let t=a(e)-a(r),o=i(e)-i(n)>170;return r=e,o&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=a(r)-a(n),o=i(e)-i(n),l=i(e)-i(r)>170,c=t/o;return o&&!l&&u(c)>.1?c:0},readPoint:a}}(er,i),eC,ej,eE,eN,eM,ev,o,ea,H,K,Z,G),eventStore:eP,percentOfView:ea,index:ev,indexPrevious:ew,limit:ey,location:eC,offsetLocation:ek,previousLocation:eI,options:a,resizeHandler:function(e,t,n,r,i,a,o){let l,c,d=[e].concat(r),p=[],f=!1;function h(e){return i.measureSize(o.measure(e))}return{init:function(i){a&&(c=h(e),p=r.map(h),l=new ResizeObserver(n=>{(s(a)||a(i,n))&&function(n){for(let a of n){if(f)return;let n=a.target===e,o=r.indexOf(a.target),l=n?c:p[o];if(u(h(n?e:r[o])-l)>=.5){i.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{d.forEach(e=>l.observe(e))}))},destroy:function(){f=!0,l&&l.disconnect()}}}(t,o,i,n,er,Q,ee),scrollBody:eN,scrollBounds:function(e,t,n,r,i){let a=i.measure(10),o=i.measure(50),l=v(.1,.99),c=!1;function s(){return!c&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:s,constrain:function(i){if(!s())return;let c=e.reachedMin(t.get())?"min":"max",d=u(e[c]-t.get()),p=n.get()-t.get(),f=l.constrain(d/o);n.subtract(p*f),!i&&u(p)<a&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(ey,ek,eA,eN,ea),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:a}=v(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?a(n.get()):-1===t&&i(n.get())))return;let o=-1*t*e;r.forEach(e=>e.add(o))}}}(em,ey,ek,[eC,ek,eI,eA]),scrollProgress:eO,scrollSnapList:eb.map(eO.get),scrollSnaps:eb,scrollTarget:eM,scrollTo:eE,slideLooper:function(e,t,n,r,i,a,o,l,c){let s=f(i),d=f(i).reverse(),u=m(h(d,o[0]),n,!1).concat(m(h(s,t-o[0]-1),-n,!0));function p(e,t){return e.reduce((e,t)=>e-i[t],t)}function h(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function m(i,o,s){let d=a.map((e,n)=>({start:e-r[n]+.5+o,end:e+t-.5+o}));return i.map(t=>{let r=s?0:-n,i=s?n:0,a=d[t][s?"end":"start"];return{index:t,loopPoint:a,slideLocation:w(-1),translate:_(e,c[t]),target:()=>l.get()>a?r:i}})}return{canLoop:function(){return u.every(({index:e})=>.1>=p(s.filter(t=>t!==e),t))},clear:function(){u.forEach(e=>e.translate.clear())},loop:function(){u.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:u}}(er,ei,em,ec,es,ef,eb,ek,n),slideFocus:eF,slidesHandler:(R=!1,{init:function(e){W&&(F=new MutationObserver(t=>{!R&&(s(W)||W(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),o.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){F&&F.disconnect(),R=!0}}),slidesInView:eT,slideIndexes:e_,slideRegistry:eL,slidesToScroll:ep,target:eA,translate:_(er,t)};return eR}(e,I,k,N,M,n,T);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(V),R([$,...H.map(({options:e})=>e)]).forEach(e=>P.add(e,"change",q)),V.active&&(o.translate.to(o.location.get()),o.animation.init(),o.slidesInView.init(),o.slideFocus.init(Q),o.eventHandler.init(Q),o.resizeHandler.init(Q),o.slidesHandler.init(Q),o.options.loop&&o.slideLooper.loop(),I.offsetParent&&k.length&&o.dragHandler.init(Q),C=O.init(Q,H)))}function q(e,t){let n=Y();X(),K(L({startIndex:n},e),t),T.emit("reInit")}function X(){o.dragHandler.destroy(),o.eventStore.clear(),o.translate.clear(),o.slideLooper.clear(),o.resizeHandler.destroy(),o.slidesHandler.destroy(),o.slidesInView.destroy(),o.animation.destroy(),O.destroy(),P.clear()}function Z(e,t,n){V.active&&!U&&(o.scrollBody.useBaseFriction().useDuration(!0===t?0:V.duration),o.scrollTo.index(e,n||0))}function Y(){return o.index.get()}let Q={canScrollNext:function(){return o.index.add(1).get()!==Y()},canScrollPrev:function(){return o.index.add(-1).get()!==Y()},containerNode:function(){return I},internalEngine:function(){return o},destroy:function(){U||(U=!0,P.clear(),X(),T.emit("destroy"),T.clear())},off:D,on:B,emit:z,plugins:function(){return C},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:q,rootNode:function(){return e},scrollNext:function(e){Z(o.index.add(1).get(),e,-1)},scrollPrev:function(e){Z(o.index.add(-1).get(),e,1)},scrollProgress:function(){return o.scrollProgress.get(o.offsetLocation.get())},scrollSnapList:function(){return o.scrollSnapList},scrollTo:Z,selectedScrollSnap:Y,slideNodes:function(){return k},slidesInView:function(){return o.slidesInView.get()},slidesNotInView:function(){return o.slidesInView.get(!1)}};return K(t,n),setTimeout(()=>T.emit("init"),0),Q}function C(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[l,c]=(0,r.useState)(),[s,d]=(0,r.useState)(),u=(0,r.useCallback)(()=>{l&&l.reInit(n.current,i.current)},[l]);return(0,r.useEffect)(()=>{a(n.current,e)||(n.current=e,u())},[e,u]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=o(e),r=o(t);return n.every((e,t)=>a(e,r[t]))}(i.current,t)&&(i.current=t,u())},[t,u]),(0,r.useEffect)(()=>{if("u">typeof window&&window.document&&window.document.createElement&&s){S.globalOptions=C.globalOptions;let e=S(s,n.current,i.current);return c(e),()=>e.destroy()}c(void 0)},[s,c]),[d,l]}S.globalOptions=void 0,C.globalOptions=void 0;var I=e.i(71774),k=e.i(58891),A=e.i(88746);let N="Балтик Стайл",M="БС",E="Системная интеграция и инфраструктурные ИТ-решения",O="+74012 99-11-99",P="tel:+74012991199",T="info@balticstyle.ru",L=[{label:"О компании",href:"/about",targetId:"baltic-about"},{label:"Продукты, технологии, услуги",href:"/products",targetId:"baltic-directions"},{label:"Партнёры",href:"/partners",targetId:"baltic-partners"},{label:"Новости",href:"/news",targetId:"baltic-news"},{label:"Контакты",href:"/contacts",targetId:"baltic-contact"}],F="Оптимальные IT-решения",R="От разработки стратегии до реализации",B="Системная интеграция и инфраструктурные ИТ-решения",D=["Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий. Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры. Надёжный технологический партнёр бизнеса более 30 лет."],z=[{icon:"server",label:"ЦОД и серверная инфраструктура"},{icon:"network",label:"Слаботочные сети"},{icon:"shield",label:"Информационная безопасность"},{icon:"cloud",label:"Облачные сервисы"},{icon:"support",label:"Сервисная поддержка"}],U=[{icon:"server",label:"30 лет в отрасли"},{icon:"support",label:"Опытный ИТ-персонал"},{icon:"cloud",label:"Оптимальные ИТ-решения"}],$=[{icon:"server",title:"Проектирование",description:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"network",title:"Интеграция и строительство",description:"Монтаж, пуско-наладка и ввод систем в эксплуатацию."},{icon:"shield",title:"ИТ-аудит",description:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"cloud",title:"Поставки и сервис",description:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"support",title:"ИТ-аутсорсинг",description:"Профессиональное сопровождение сложных ИТ-решений."}],V="Свяжитесь с нами удобным способом",H="Заполните форму и мы перезвоним",K={name:"Имя",phone:"Номер телефона",email:"e-mail",message:"Ваш текст",file:"Прикрепить файл",submit:"Отправить"},q="© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.",X="Юридический адрес 236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",Z="Телефоны +74012 99-11-99; +74012 99-11-98",Y="Реквизиты ИНН 3905017052, КПП 390601001, ОГРН 1023900773555",Q="Еmail: info@balticstyle.ru",W=0;function G(e,t,n){let r=1-n;return 3*e*r*r*n+3*t*r*n*n+n*n*n}function J(e){let t=document.getElementById(e);t&&function(e,t={}){if(cancelAnimationFrame(W),window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,e),t.hash&&window.history.pushState(null,"",t.hash);return}let n=t.duration??1200,r=window.scrollY,i=e-r,a=performance.now();W=requestAnimationFrame(function e(o){let l=Math.min((o-a)/n,1),c=r+i*function(e){if(e<=0)return 0;if(e>=1)return 1;let t=0,n=1,r=e;for(let i=0;i<12;i+=1){let i=G(.3,.96,r);if(1e-5>Math.abs(i-e))break;i<e?t=r:n=r,r=(t+n)/2}return G(.27,0,r)}(l);window.scrollTo(0,c),l<1?W=requestAnimationFrame(e):t.hash&&window.history.pushState(null,"",t.hash)})}(Math.max(0,window.scrollY+t.getBoundingClientRect().top),{duration:500})}let ee="light",et={light:"Дневная",dark:"Ночная"},en="baltic-style-theme",er=new Set;function ei(e){document.documentElement.dataset.theme=e}function ea(){let e=window.localStorage.getItem(en);return"light"===e||"dark"===e?e:ee}function eo(e){return er.add(e),()=>{er.delete(e)}}function el(){let e,i,a,o,l,c,s,d,u=(0,n.c)(16),p=(0,r.useSyncExternalStore)(eo,ea,ec);u[0]!==p?(e="light"===p?"dark":"light",u[0]=p,u[1]=e):e=u[1];let f=e;u[2]!==p?(i=()=>{ei(p)},a=[p],u[2]=p,u[3]=i,u[4]=a):(i=u[3],a=u[4]),(0,r.useEffect)(i,a),u[5]!==f?(o=()=>{ei(f),window.localStorage.setItem(en,f),er.forEach(e=>e())},u[5]=f,u[6]=o):o=u[6];let h=o,m=et[f];u[7]!==m?(l=m.toLowerCase(),u[7]=m,u[8]=l):l=u[8];let g=`Переключить тему на ${l}`;u[9]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(ed,{"aria-hidden":"true"}),u[9]=c):c=u[9];let x=et[f];return u[10]!==x?(s=(0,t.jsxs)("span",{children:[x," тема"]}),u[10]=x,u[11]=s):s=u[11],u[12]!==h||u[13]!==g||u[14]!==s?(d=(0,t.jsxs)(es,{type:"button",onClick:h,"aria-label":g,children:[c,s]}),u[12]=h,u[13]=g,u[14]=s,u[15]=d):d=u[15],d}function ec(){return ee}let es=A.default.button.withConfig({displayName:"theme-toggle-button__ToggleButton",componentId:"sc-3bef75ca-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  max-width: 100%;
  padding: 0 16px;
  border: 0;
  border-radius: 18px;
  color: var(--on-dark);
  background: var(--glass-medium);
  box-shadow:
    8px 8px 18px rgba(0, 0, 0, 0.22),
    -8px -8px 18px rgba(255, 255, 255, 0.04);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition:
    box-shadow 300ms ease,
    transform 300ms ease,
    background 300ms ease;

  &:hover {
    transform: translateY(1px);
    background: var(--glass-strong);
    box-shadow:
      inset 4px 4px 8px rgba(0, 0, 0, 0.22),
      inset -4px -4px 8px rgba(255, 255, 255, 0.06);
  }

  &:active {
    transform: translateY(2px);
    box-shadow:
      inset 8px 8px 16px rgba(0, 0, 0, 0.28),
      inset -8px -8px 16px rgba(255, 255, 255, 0.08);
    transition-duration: 90ms;
  }

  span {
    overflow-wrap: anywhere;
  }
`,ed=A.default.i.withConfig({displayName:"theme-toggle-button__Swatch",componentId:"sc-3bef75ca-1"})`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border: 2px solid var(--control-border);
  border-radius: 50%;
  background: var(--accent);
`;e.i(84068);var eu=e.i(36762);let ep={src:e.i(85028).default,width:865,height:575,blurWidth:8,blurHeight:5,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfUlEQVR42h2M2wrCMBBE+6CV3SbkRkK0GkG0oL/g/39WOt3Nw8Bw5jATL7b7mGGdQ7vnEe3WJ5xm3qeZQyebYFNDWbcR7crOFEQwtXN8IbQ/Yt0Q6md0ZbKpcO0U3zD5C3I3cHjAlB+UyaZC6eQb2FVc2Mh1xOJXkH+KUPYDd7YwmDq18zoAAAAASUVORK5CYII="},ef={phone:(0,t.jsx)("path",{d:"M18.9 15.7c-1.1 0-2.2-.2-3.2-.6-.5-.2-1-.1-1.4.3l-1.5 1.9c-2.8-1.4-5.2-3.8-6.7-6.7L8 9.1c.4-.4.5-.9.3-1.4-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H3.7c-.8 0-1.7.4-1.7 1.5C2 13.7 9.3 21 18.5 21c1.1 0 1.5-.9 1.5-1.7v-2.1c0-.8-.3-1.5-1.1-1.5Z"}),server:(0,t.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v3A2.5 2.5 0 0 1 17.5 11h-11A2.5 2.5 0 0 1 4 8.5v-3Zm0 10A2.5 2.5 0 0 1 6.5 13h11a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01M10 7h7M10 17h7"}),network:(0,t.jsx)("path",{d:"M12 4v5m0 0H7m5 0h5M7 9v4m10-4v4M5 13h4v7H5v-7Zm10 0h4v7h-4v-7Zm-5-9h4v5h-4V4Z"}),shield:(0,t.jsx)("path",{d:"M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5"}),cloud:(0,t.jsx)("path",{d:"M7.5 18h9.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 5.6 11 3.5 3.5 0 0 0 7.5 18Z"}),support:(0,t.jsx)("path",{d:"M4 12a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-2v-6h5M4 15a3 3 0 0 0 3 3h2v-6H4v3Zm8 5h3"})};function eh(e){let r,i=(0,n.c)(2),{name:a}=e,o=ef[a];return i[0]!==o?(r=(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:o}),i[0]=o,i[1]=r):r=i[1],r}let em="main-content",eg=["/",...L.map(({href:e})=>e)];function ex(){J(em)}function eb(e){return e.preventDefault()}function ey(e){return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eu.SmallIconBox,{children:(0,t.jsx)(eh,{name:e.icon})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("b",{children:e.title}),(0,t.jsx)("p",{children:e.description})]})]},e.title)}function ev(e){return(0,t.jsxs)(eZ,{children:[(0,t.jsx)(eu.IconBox,{children:(0,t.jsx)(eh,{name:e.icon})}),(0,t.jsx)("b",{children:e.label})]},e.label)}function ew(e,n){return z.map(e=>(0,t.jsxs)(eK,{children:[(0,t.jsx)(eu.IconBox,{children:(0,t.jsx)(eh,{name:e.icon})}),(0,t.jsx)("span",{children:e.label})]},`${n}-${e.label}`))}function e_(e){return(0,t.jsx)("p",{children:e},e)}let ej=(0,A.default)(eu.Shell).withConfig({displayName:"baltic-style-landing__ContentRow",componentId:"sc-50a68381-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,eS=A.default.main.withConfig({displayName:"baltic-style-landing__MainContent",componentId:"sc-50a68381-1"})`
  min-height: 100vh;
  color: var(--foreground);
  background:
    linear-gradient(115deg, var(--ambient-accent) 0%, transparent 38%),
    linear-gradient(
      180deg,
      var(--surface-strong) 0%,
      var(--background) 42%,
      var(--background-end) 100%
    );
`,eC=A.default.header.withConfig({displayName:"baltic-style-landing__TopBar",componentId:"sc-50a68381-2"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 228px;
  padding: 28px 0;
`,eI=(0,A.default)(I.default).withConfig({displayName:"baltic-style-landing__CompanyBlock",componentId:"sc-50a68381-3"})`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
  border-radius: 28px;
  color: inherit;
  text-decoration: none;
`,ek=A.default.div.withConfig({displayName:"baltic-style-landing__Logo",componentId:"sc-50a68381-4"})`
  display: grid;
  width: 86px;
  height: 86px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 24px;
  color: var(--on-dark);
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow:
    14px 14px 28px var(--shadow-dark),
    -14px -14px 28px var(--shadow-light);
  font-size: 28px;
  font-weight: 800;
`,eA=A.default.div.withConfig({displayName:"baltic-style-landing__CompanyText",componentId:"sc-50a68381-5"})`
  min-width: 0;

  h1 {
    color: var(--heading);
    font-size: 40px;
    line-height: 1;
  }

  p {
    max-width: 520px;
    margin-top: 10px;
    color: var(--muted);
    line-height: 1.45;
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 32px;
    }
  }
`,eN=(0,A.default)(eu.RaisedAnchor).withConfig({displayName:"baltic-style-landing__PhoneLink",componentId:"sc-50a68381-6"})`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  padding: 0 18px;
  border-radius: 18px;
  color: var(--text-strong);
  font-weight: 800;
  white-space: nowrap;

  svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  @media (max-width: 420px) {
    width: 100%;
    justify-content: center;
  }
`,eM=A.default.nav.withConfig({displayName:"baltic-style-landing__NavSection",componentId:"sc-50a68381-7"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 76px;
  background: var(--nav-glass);
`,eE=(0,A.default)(eu.Shell).withConfig({displayName:"baltic-style-landing__NavList",componentId:"sc-50a68381-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`,eO=(0,A.default)(I.default).withConfig({displayName:"baltic-style-landing__NavLink",componentId:"sc-50a68381-9"})`
  margin:10px ;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;
  min-height: 44px;
  min-width: 0;
  padding: 0 16px;

  border-radius: 999px;

  color: var(--text-card);
  background: var(--surface);

  box-shadow: ${({$active:e})=>e?"inset 3px 3px 7px var(--shadow-dark), inset -3px -3px 7px var(--shadow-light)":"8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light)"};

  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-align: center;

  &::after {
    position: absolute;
    right: 18px;
    bottom: -10px;
    left: 18px;
    height: 3px;
    border-radius: 999px;
    background: var(--accent-strong);
    content: "";
    transform: scaleX(${({$active:e})=>+!!e});
    transform-origin: center;
    transition: transform 240ms ease;
  }

  &:hover {
    border-color: ${({$active:e})=>e?"var(--accent-strong)":"var(--hover-border)"};
    box-shadow: ${({$active:e})=>e?`
        inset 5px 5px 10px var(--shadow-pressed),
        inset -4px -4px 9px var(--shadow-light)
      `:`
        10px 12px 22px var(--shadow-dark),
        -10px -10px 22px var(--shadow-light)
      `};
  }
`,eP=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__PromoSection",componentId:"sc-50a68381-10"})`
  min-height: 324px;
  background: var(--dark-section);
`,eT=(0,A.default)(eu.Shell).withConfig({displayName:"baltic-style-landing__PromoInner",componentId:"sc-50a68381-11"})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 32px;
  align-items: stretch;
  padding: 28px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eL=A.default.div.withConfig({displayName:"baltic-style-landing__PromoCopy",componentId:"sc-50a68381-12"})`
  display: grid;
  align-content: center;
  gap: 18px;

  h2 {
    max-width: 680px;
    color: var(--hero-title);
    font-size: 56px;
    line-height: 1;
  }

  p {
    color: var(--on-dark-muted);
    font-size: 24px;
  }

  @media (max-width: 640px) {
    h2 {
      font-size: 38px;
    }

    p {
      font-size: 19px;
    }
  }
`,eF=A.default.div.withConfig({displayName:"baltic-style-landing__PhotoPlaceholder",componentId:"sc-50a68381-13"})`
  position: relative;
  overflow: hidden;
  min-height: 268px;
  min-width: 300px;
  border: 1px solid var(--dark-border-soft);
  border-radius: 24px;
  background:
    linear-gradient(135deg, var(--ambient-accent-strong), transparent 55%),
    linear-gradient(
      145deg,
      var(--dark-section-elevated),
      var(--dark-section-deep)
    );
  box-shadow:
    inset 12px 12px 28px var(--dark-inset-shadow),
    inset -10px -10px 24px var(--dark-inset-highlight);
`,eR=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__AboutSection",componentId:"sc-50a68381-14"})`
  min-height: 324px;
  padding: 42px 0;
`,eB=A.default.div.withConfig({displayName:"baltic-style-landing__AboutText",componentId:"sc-50a68381-15"})`
  display: grid;
  gap: 14px;
  max-width: 940px;

  p {
    color: var(--text-soft);
    font-size: 18px;
    line-height: 1.62;
  }
`,eD=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__ProjectsSection",componentId:"sc-50a68381-16"})`
  min-height: 324px;
  padding: 34px 0;
  background:
    linear-gradient(90deg, var(--glass-strong), var(--glass-soft)),
    var(--glass-medium);
`,ez=A.default.span.withConfig({displayName:"baltic-style-landing__AnchorTarget",componentId:"sc-50a68381-17"})`
  position: absolute;
  top: 0;
`,eU=A.default.div.withConfig({displayName:"baltic-style-landing__SectionHeadRow",componentId:"sc-50a68381-18"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,e$=A.default.div.withConfig({displayName:"baltic-style-landing__ProjectSlider",componentId:"sc-50a68381-19"})`
  position: relative;
  left: 50%;
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: visible;
`,eV=A.default.div.withConfig({displayName:"baltic-style-landing__ProjectSliderViewport",componentId:"sc-50a68381-20"})`
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  margin: -18px 0 -28px;
  padding: 26px clamp(16px, 3vw, 40px) 32px;
  cursor: grab;
  outline: none;
  touch-action: pan-y pinch-zoom;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`,eH=A.default.div.withConfig({displayName:"baltic-style-landing__ProjectTrack",componentId:"sc-50a68381-21"})`
  display: flex;
  gap: 18px;
`,eK=A.default.article.withConfig({displayName:"baltic-style-landing__ProjectSlide",componentId:"sc-50a68381-22"})`
  display: grid;
  flex: 0 0 clamp(180px, 22vw, 232px);
  min-width: 0;
  min-height: 176px;
  place-items: center;
  gap: 16px;
  padding: 22px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: var(--shadow-card);
  text-align: center;

  span {
    color: var(--text-card);
    font-weight: 800;
    line-height: 1.35;
  }
`,eq=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__AdvantagesSection",componentId:"sc-50a68381-23"})`
  min-height: 162px;
  padding: 26px 0;
`,eX=(0,A.default)(eu.Shell).withConfig({displayName:"baltic-style-landing__AdvantagesGrid",componentId:"sc-50a68381-24"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eZ=A.default.article.withConfig({displayName:"baltic-style-landing__Advantage",componentId:"sc-50a68381-25"})`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 86px;
  padding: 18px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: var(--shadow-card);

  b {
    color: var(--text-strong);
    line-height: 1.3;
  }
`,eY=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__DirectionsSection",componentId:"sc-50a68381-26"})`
  min-height: 162px;
  padding: 28px 0;
  background: var(--glass-soft);
`,eQ=A.default.div.withConfig({displayName:"baltic-style-landing__DirectionsList",componentId:"sc-50a68381-27"})`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,eW=A.default.article.withConfig({displayName:"baltic-style-landing__DirectionItem",componentId:"sc-50a68381-28"})`
  display: flex;
  gap: 12px;
  min-width: 0;
  padding: 16px;
  border-radius: 20px;
  background:
    linear-gradient(
      145deg,
      var(--card-gradient-start),
      var(--card-gradient-end)
    ),
    var(--surface);
  box-shadow:
    10px 10px 20px var(--shadow-dark),
    -10px -10px 20px var(--shadow-light);

  b {
    display: block;
    color: var(--heading);
    font-size: 14px;
    line-height: 1.25;
  }

  p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.35;
  }
`,eG=(0,A.default)(eu.BaseSection).withConfig({displayName:"baltic-style-landing__ContactSection",componentId:"sc-50a68381-29"})`
  min-height: 486px;
  padding: 44px 0;
`,eJ=(0,A.default)(eu.Shell).withConfig({displayName:"baltic-style-landing__ContactGrid",componentId:"sc-50a68381-30"})`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,e0=A.default.div.withConfig({displayName:"baltic-style-landing__ContactCopy",componentId:"sc-50a68381-31"})`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent-strong);
    font-size: 20px;
    font-weight: 800;
  }
`,e1=A.default.form.withConfig({displayName:"baltic-style-landing__ContactForm",componentId:"sc-50a68381-32"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  background: var(--surface);
  box-shadow:
    16px 16px 32px var(--shadow-dark),
    -16px -16px 32px var(--shadow-light);

  label {
    display: grid;
    gap: 8px;
    color: var(--text-card);
    font-size: 13px;
    font-weight: 800;
  }

  label.wide {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    width: 100%;
    min-width: 0;
    border: 0;
    border-radius: 16px;
    color: var(--heading);
    background: var(--surface);
    box-shadow:
      inset 6px 6px 12px var(--shadow-dark),
      inset -6px -6px 12px var(--shadow-light);
    font: inherit;
  }

  input {
    min-height: 48px;
    padding: 0 14px;
  }

  textarea {
    resize: vertical;
    min-height: 104px;
    padding: 14px;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`,e2=A.default.div.withConfig({displayName:"baltic-style-landing__FormActions",componentId:"sc-50a68381-33"})`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: flex-end;

  @media (max-width: 520px) {
    > * {
      width: 100%;
    }
  }
`,e5=(0,A.default)(eu.RaisedLabel).withConfig({displayName:"baltic-style-landing__FileButton",componentId:"sc-50a68381-34"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  border-radius: 18px;
  color: var(--text-strong);
  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`,e8=(0,A.default)(eu.RaisedButton).withConfig({displayName:"baltic-style-landing__SubmitButton",componentId:"sc-50a68381-35"})`
  min-height: 50px;
  padding: 0 24px;
  border-radius: 18px;
  color: var(--on-accent);
  background: linear-gradient(145deg, var(--accent), var(--accent-dark) 70%);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
`,e3=A.default.footer.withConfig({displayName:"baltic-style-landing__Footer",componentId:"sc-50a68381-36"})`
  padding: 34px 0;
  color: var(--on-dark-muted);
  background: var(--dark-section);
`,e4=A.default.div.withConfig({displayName:"baltic-style-landing__FooterInner",componentId:"sc-50a68381-37"})`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 24px;
  align-items: start;

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
  }

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,e6=A.default.div.withConfig({displayName:"baltic-style-landing__FooterContent",componentId:"sc-50a68381-38"})`
  display: grid;
  gap: 10px;

  b {
    color: var(--on-dark);
    font-size: 20px;
  }

  p,
  a {
    max-width: 980px;
    line-height: 1.5;
  }

  a {
    width: fit-content;
    color: var(--footer-link);
  }
`,e7=A.default.div.withConfig({displayName:"baltic-style-landing__ThemeSlot",componentId:"sc-50a68381-39"})`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`,e9=A.default.img.withConfig({displayName:"baltic-style-landing__Image",componentId:"sc-50a68381-40"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;e.s(["BalticStyleLanding",0,function(){let e,i,a,o,l,c,s,d,u,p,f,h,m,g,x,b,y,v,w,_,j,S,I,k,A,N,M,E,O,P,T,L,z=(0,n.c)(35);z[0]===Symbol.for("react.memo_cache_sentinel")?(e={align:"start",dragFree:!0,loop:!0,skipSnaps:!0,slidesToScroll:1},z[0]=e):e=z[0];let[q,X]=C(e),Z=(0,r.useRef)("next"),Y=(0,r.useRef)(!1),Q=(0,r.useRef)(null),W=(0,r.useRef)(0),G=(0,r.useRef)(!1);z[1]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{Q.current&&(clearTimeout(Q.current),Q.current=null)},z[1]=i):i=z[1];let J=i;z[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{J(),Y.current=!0},z[2]=a):a=z[2];let ee=a;z[3]===Symbol.for("react.memo_cache_sentinel")?(o=e=>{J(),Q.current=setTimeout(()=>{Y.current=!1,Q.current=null},void 0===e?700:e)},z[3]=o):o=z[3];let et=o;z[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>J,c=[J],z[4]=l,z[5]=c):(l=z[4],c=z[5]),(0,r.useEffect)(l,c),z[6]!==X?(s=()=>{if(!X)return;let e=0,t=0,n=r=>{let i=t?Math.min(r-t,48):0;if(t=r,Y.current){e=window.requestAnimationFrame(n);return}let a=X.internalEngine(),o="next"===Z.current?-1:1;a.location.add(.045*o*i),a.target.set(a.location),a.previousLocation.set(a.location),a.offsetLocation.set(a.location),a.scrollLooper.loop(o),a.slideLooper.loop(),a.translate.to(a.location.get()),X.emit("scroll"),e=window.requestAnimationFrame(n)};return e=window.requestAnimationFrame(n),()=>window.cancelAnimationFrame(e)},d=[X],z[6]=X,z[7]=s,z[8]=d):(s=z[7],d=z[8]),(0,r.useEffect)(s,d),z[9]===Symbol.for("react.memo_cache_sentinel")?(u=e=>{("mouse"!==e.pointerType||0===e.button)&&(ee(),G.current=!0,W.current=e.clientX)},z[9]=u):u=z[9];let en=u;z[10]===Symbol.for("react.memo_cache_sentinel")?(p=e=>{if(!G.current)return;let t=e.clientX-W.current;Math.abs(t)>.5&&(Z.current=t>0?"prev":"next",W.current=e.clientX)},z[10]=p):p=z[10];let er=p;z[11]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{G.current=!1,et()},z[11]=f):f=z[11];let ei=f;z[12]===Symbol.for("react.memo_cache_sentinel")?(h=e=>{1>Math.abs(e.deltaX)||(Z.current=e.deltaX>0?"next":"prev",ee(),et())},z[12]=h):h=z[12];let ea=h;return z[13]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsxs)(eL,{children:[(0,t.jsx)("h2",{children:F}),(0,t.jsx)("p",{children:R})]}),z[13]=m):m=z[13],z[14]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)(eP,{children:(0,t.jsxs)(eT,{children:[m,(0,t.jsx)(eF,{role:"img","aria-label":"Заглушка фотографии IT-инфраструктуры",children:(0,t.jsx)(e9,{src:ep.src,alt:"Патч-корды и сетевая инфраструктура"})})]})}),z[14]=g):g=z[14],z[15]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsx)(eu.SectionTitle,{id:"baltic-about-title",children:B}),z[15]=x):x=z[15],z[16]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)(eR,{id:"baltic-about","aria-labelledby":"baltic-about-title",children:(0,t.jsxs)(eu.NarrowContent,{children:[x,(0,t.jsx)(eB,{children:D.map(e_)})]})}),z[16]=b):b=z[16],z[17]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsx)(ez,{id:"baltic-partners","aria-hidden":"true"}),v=(0,t.jsx)(ez,{id:"baltic-news","aria-hidden":"true"}),z[17]=y,z[18]=v):(y=z[17],v=z[18]),z[19]===Symbol.for("react.memo_cache_sentinel")?(w=(0,t.jsx)(eU,{children:(0,t.jsx)(eu.SectionTitle,{id:"baltic-projects-title",children:"Реализованные проекты"})}),z[19]=w):w=z[19],z[20]===Symbol.for("react.memo_cache_sentinel")?(_=()=>et(),z[20]=_):_=z[20],z[21]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)(eH,{children:Array.from({length:3},ew)}),z[21]=j):j=z[21],z[22]!==q?(S=(0,t.jsxs)(eD,{id:"baltic-projects","aria-labelledby":"baltic-projects-title",children:[y,v,(0,t.jsxs)(eu.ContentColumn,{children:[w,(0,t.jsx)(e$,{children:(0,t.jsx)(eV,{ref:q,tabIndex:0,"aria-label":"Слайдер реализованных проектов",onBlur:_,onFocus:ee,onPointerCancel:ei,onPointerDown:en,onPointerMove:er,onPointerUp:ei,onWheel:ea,children:j})})]})]}),z[22]=q,z[23]=S):S=z[23],z[24]===Symbol.for("react.memo_cache_sentinel")?(I=(0,t.jsx)(eq,{"aria-label":"Преимущества Балтик Стайл",children:(0,t.jsx)(eX,{children:U.map(ev)})}),z[24]=I):I=z[24],z[25]===Symbol.for("react.memo_cache_sentinel")?(k=(0,t.jsx)(eu.SectionTitle,{id:"baltic-directions-title",children:"Ключевые направления"}),z[25]=k):k=z[25],z[26]===Symbol.for("react.memo_cache_sentinel")?(A=(0,t.jsx)(eY,{id:"baltic-directions","aria-labelledby":"baltic-directions-title",children:(0,t.jsxs)(eu.ContentColumn,{children:[k,(0,t.jsx)(eQ,{children:$.map(ey)})]})}),z[26]=A):A=z[26],z[27]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsxs)(e0,{children:[(0,t.jsx)(eu.SectionTitle,{id:"baltic-contact-title",children:V}),(0,t.jsx)("p",{children:H})]}),z[27]=N):N=z[27],z[28]===Symbol.for("react.memo_cache_sentinel")?(M=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:K.name}),(0,t.jsx)("input",{name:"name",autoComplete:"name"})]}),E=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:K.phone}),(0,t.jsx)("input",{name:"phone",type:"tel",autoComplete:"tel"})]}),O=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:K.email}),(0,t.jsx)("input",{name:"email",type:"email",autoComplete:"email"})]}),z[28]=M,z[29]=E,z[30]=O):(M=z[28],E=z[29],O=z[30]),z[31]===Symbol.for("react.memo_cache_sentinel")?(P=(0,t.jsxs)("label",{className:"wide",children:[(0,t.jsx)("span",{children:K.message}),(0,t.jsx)("textarea",{name:"message",rows:4})]}),z[31]=P):P=z[31],z[32]===Symbol.for("react.memo_cache_sentinel")?(T=(0,t.jsx)(eG,{id:"baltic-contact","aria-labelledby":"baltic-contact-title",children:(0,t.jsxs)(eJ,{children:[N,(0,t.jsxs)(e1,{onSubmit:eb,children:[M,E,O,P,(0,t.jsxs)(e2,{children:[(0,t.jsxs)(e5,{children:[K.file,(0,t.jsx)("input",{type:"file",name:"attachment"})]}),(0,t.jsx)(e8,{type:"submit",children:K.submit})]})]})]})}),z[32]=T):T=z[32],z[33]!==S?(L=(0,t.jsxs)(t.Fragment,{children:[g,b,S,I,A,T]}),z[33]=S,z[34]=L):L=z[34],L},"BalticStyleShell",0,function(e){let i,a,o,l,c,s,d,u,p,f,h,m,g,x,b,y,v,w,_=(0,n.c)(33),{children:j}=e,S=(0,k.useRouter)(),C=(0,k.usePathname)();_[0]!==C?(i=C.replace(/\/$/,"")||"/",_[0]=C,_[1]=i):i=_[1];let I=i,[,A]=(0,r.useTransition)(),[F,R]=(0,r.useOptimistic)(I),B=(0,r.useRef)(!1);_[2]!==R||_[3]!==A?(a=(e,t,n)=>{e.defaultPrevented||0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(document.title=N,A(()=>{R(t)}),void 0!==n&&n&&window.innerWidth<500&&(B.current=!0,J(em)))},_[2]=R,_[3]=A,_[4]=a):a=_[4];let D=a;return _[5]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{document.title=N,B.current&&(B.current=!1,requestAnimationFrame(ex))},_[5]=o):o=_[5],_[6]!==I?(l=[I],_[6]=I,_[7]=l):l=_[7],(0,r.useEffect)(o,l),_[8]!==S?(c=()=>{eg.forEach(e=>{S.prefetch(e)})},s=[S],_[8]=S,_[9]=c,_[10]=s):(c=_[9],s=_[10]),(0,r.useEffect)(c,s),_[11]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsx)(e7,{children:(0,t.jsx)(el,{})}),_[11]=d):d=_[11],_[12]!==D?(u=e=>D(e,"/"),_[12]=D,_[13]=u):u=_[13],_[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)(ek,{"aria-hidden":"true",children:M}),_[14]=p):p=_[14],_[15]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsxs)(eA,{children:[(0,t.jsx)("h1",{id:"company-title",children:N}),(0,t.jsx)("p",{children:E})]}),_[15]=f):f=_[15],_[16]!==u?(h=(0,t.jsxs)(eI,{href:"/",prefetch:!0,"aria-label":`${N}: на главную`,onClick:u,children:[p,f]}),_[16]=u,_[17]=h):h=_[17],_[18]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsxs)(eN,{href:P,"aria-label":O,children:[(0,t.jsx)(eh,{name:"phone"}),(0,t.jsx)("span",{children:O})]}),_[18]=m):m=_[18],_[19]!==h?(g=(0,t.jsx)(eC,{"aria-labelledby":"company-title",children:(0,t.jsxs)(ej,{children:[d,h,m]})}),_[19]=h,_[20]=g):g=_[20],_[21]!==F||_[22]!==D?(x=L.map(e=>{let n=F===e.href;return(0,t.jsx)(eO,{href:e.href,prefetch:!0,$active:n,"aria-current":n?"page":void 0,onClick:t=>D(t,e.href,!0),children:e.label},e.href)}),_[21]=F,_[22]=D,_[23]=x):x=_[23],_[24]!==x?(b=(0,t.jsx)(eM,{"aria-label":"Основная навигация",children:(0,t.jsx)(eE,{children:x})}),_[24]=x,_[25]=b):b=_[25],_[26]!==j?(y=(0,t.jsx)(eS,{id:em,children:j}),_[26]=j,_[27]=y):y=_[27],_[28]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsx)(e3,{children:(0,t.jsx)(e4,{children:(0,t.jsxs)(e6,{children:[(0,t.jsx)("b",{children:N}),(0,t.jsx)("p",{children:q}),(0,t.jsx)("p",{children:X}),(0,t.jsx)("p",{children:Z}),(0,t.jsx)("p",{children:Y}),(0,t.jsx)("a",{href:`mailto:${T}`,children:Q})]})})}),_[28]=v):v=_[28],_[29]!==g||_[30]!==b||_[31]!==y?(w=(0,t.jsxs)(t.Fragment,{children:[g,b,y,v]}),_[29]=g,_[30]=b,_[31]=y,_[32]=w):w=_[32],w}],36690)}]);