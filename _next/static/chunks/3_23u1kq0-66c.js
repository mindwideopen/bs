(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,56412,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return c}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let a=e.r(44066)._(e.r(24455)),o=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:n}=e,i=e.protocol||"",r=e.pathname||"",l=e.hash||"",c=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?`[${n}]`:n),e.port&&(s+=":"+e.port)),c&&"object"==typeof c&&(c=String(a.urlQueryToSearchParams(c)));let d=e.search||c&&`?${c}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),r&&"/"!==r[0]&&(r="/"+r)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),d&&"?"!==d[0]&&(d="?"+d),r=r.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${s}${r}${d}${l}`}let c=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},48254,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useMergedRef",{enumerable:!0,get:function(){return r}});let i=e.r(52940);function r(e,t){let n=(0,i.useRef)(null),r=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=n.current;e&&(n.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(n.current=a(e,i)),t&&(r.current=a(t,i))},[e,t])}function a(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},64444,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"isLocalURL",{enumerable:!0,get:function(){return a}});let i=e.r(65107),r=e.r(40844);function a(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),n=new URL(e,t);return n.origin===t&&(0,r.hasBasePath)(n.pathname)}catch(e){return!1}}},23473,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},71774,(e,t,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i={default:function(){return g},useLinkStatus:function(){return y}};for(var r in i)Object.defineProperty(n,r,{enumerable:!0,get:i[r]});let a=e.r(44066),o=e.r(35337),l=a._(e.r(52940)),c=e.r(56412),s=e.r(59745),d=e.r(48254),u=e.r(65107),p=e.r(91531);e.r(91152);let f=e.r(69085),h=e.r(6855),m=e.r(64444),x=e.r(39934);function g(t){var n,i;let r,a,g,[y,w]=(0,l.useOptimistic)(h.IDLE_LINK_STATUS),v=(0,l.useRef)(null),{href:_,as:j,children:S,prefetch:C=null,passHref:I,replace:k,shallow:N,scroll:A,onClick:O,onMouseEnter:M,onTouchStart:P,legacyBehavior:E=!1,onNavigate:L,transitionTypes:T,ref:D,unstable_dynamicOnHover:F,...R}=t;r=S,E&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=l.default.useContext(s.AppRouterContext),B=!1!==C,U=!1!==C?null===(i=C)||"auto"===i?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,$="string"==typeof(n=j||_)?n:(0,c.formatUrl)(n);if(E){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=l.default.Children.only(r)}let V=E?a&&"object"==typeof a&&a.ref:D,H=l.default.useCallback(e=>(null!==z&&(v.current=(0,h.mountLinkInstance)(e,$,z,U,B,w)),()=>{v.current&&((0,h.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,h.unmountPrefetchableInstance)(e)}),[B,$,z,U,w]),q={ref:(0,d.useMergedRef)(H,V),onClick(t){E||"function"!=typeof O||O(t),E&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),!z||t.defaultPrevented||function(t,n,i,r,a,o,c){if("u">typeof window){let s,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,m.isLocalURL)(n)){r&&(t.preventDefault(),location.replace(n));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(18128);l.default.startTransition(()=>{u(n,r?"replace":"push",!1===a?f.ScrollBehavior.NoScroll:f.ScrollBehavior.Default,i.current,c)})}}(t,$,v,k,A,L,T)},onMouseEnter(e){E||"function"!=typeof M||M(e),E&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),z&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)},onTouchStart:function(e){E||"function"!=typeof P||P(e),E&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),z&&B&&(0,h.onNavigationIntent)(e.currentTarget,!0===F)}};return(0,u.isAbsoluteUrl)($)?q.href=$:E&&!I&&("a"!==a.type||"href"in a.props)||(q.href=(0,p.addBasePath)($)),g=E?l.default.cloneElement(a,q):(0,o.jsx)("a",{...R,...q,children:r}),(0,o.jsx)(b.Provider,{value:y,children:g})}e.r(23473);let b=(0,l.createContext)(h.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(b);("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),t.exports=n.default)},58891,(e,t,n)=>{t.exports=e.r(76349)},36690,e=>{"use strict";var t=e.i(35337),n=e.i(4699),i=e.i(52940);function r(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function a(e,t){let n=Object.keys(e),i=Object.keys(t);return n.length===i.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let i=e[n],o=t[n];return"function"==typeof i?`${i}`==`${o}`:r(i)&&r(o)?a(i,o):i===o})}function o(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function c(e){return"string"==typeof e}function s(e){return"boolean"==typeof e}function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return Math.abs(e)}function p(e){return Math.sign(e)}function f(e){return g(e).map(Number)}function h(e){return e[m(e)]}function m(e){return Math.max(0,e.length-1)}function x(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function g(e){return Object.keys(e)}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function y(){let e=[],t={add:function(n,i,r,a={passive:!0}){let o;return"addEventListener"in n?(n.addEventListener(i,r,a),o=()=>n.removeEventListener(i,r,a)):(n.addListener(r),o=()=>n.removeListener(r)),e.push(o),t},clear:function(){e=e.filter(e=>e())}};return t}function w(e=0,t=0){let n=u(e-t);function i(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return i(n)?n<e?e:t:n},reachedAny:i,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function v(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function _(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},i=t.style,r=null,a=!1;return{clear:function(){!a&&(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(a)return;let o=Math.round(100*e.direction(t))/100;o!==r&&(i.transform=n(o),r=o)},toggleActive:function(e){a=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function S(e,t,n){let i,r,a,o,C,I,k,N,A=e.ownerDocument,O=A.defaultView,M=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(g(n).forEach(i=>{let r=t[i],a=n[i],o=d(r)&&d(a);t[i]=o?e(r,a):a}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let i=n.breakpoints||{},r=g(i).filter(t=>e.matchMedia(t).matches).map(e=>i[e]).reduce((e,n)=>t(e,n),{});return t(n,r)},optionsMediaQueries:function(t){return t.map(e=>g(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(O),P=(N=[],{init:function(e,t){return(N=t.filter(({options:e})=>!1!==M.optionsAtMedia(e).active)).forEach(t=>t.init(e,M)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){N=N.filter(e=>e.destroy())}}),E=y(),L=(r={},a={init:function(e){i=e},emit:function(e){return(r[e]||[]).forEach(t=>t(i,e)),a},off:function(e,t){return r[e]=(r[e]||[]).filter(e=>e!==t),a},on:function(e,t){return r[e]=(r[e]||[]).concat([t]),a},clear:function(){r={}}}),{mergeOptions:T,optionsAtMedia:D,optionsMediaQueries:F}=M,{on:R,off:z,emit:B}=L,U=!1,$=T(j,S.globalOptions),V=T($),H=[];function q(t,n){U||(V=D($=T($,t)),H=n||H,function(){let{container:t,slides:n}=V;I=(c(t)?e.querySelector(t):t)||e.children[0];let i=c(n)?I.querySelectorAll(n):n;k=[].slice.call(i||I.children)}(),o=function t(n){let i=function(e,t,n,i,r,a,o){var d,j;let S,C,I,k,N,A,O,M,P,E,L,T,D,F,{align:R,axis:z,direction:B,startIndex:U,loop:$,duration:V,dragFree:H,dragThreshold:q,inViewThreshold:K,slidesToScroll:X,skipSnaps:Y,containScroll:Z,watchResize:Q,watchSlides:G,watchDrag:W,watchFocus:J}=a,ee={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:r}=e;return{top:t,right:n+i,bottom:t+r,left:n,width:i,height:r}}},et=ee.measure(t),en=n.map(ee.measure),ei=(C="rtl"===B,k=(I="y"===z)||!C?1:-1,N=I?"top":C?"right":"left",A=I?"bottom":C?"left":"right",{scroll:I?"y":"x",cross:I?"x":"y",startEdge:N,endEdge:A,measureSize:function(e){let{height:t,width:n}=e;return I?t:n},direction:function(e){return e*k}}),er=ei.measureSize(et),ea={measure:function(e){return e/100*er}},eo=(d=R,j=er,S={start:function(){return 0},center:function(e){return(j-e)/2},end:function(e){return j-e}},{measure:function(e,t){return c(d)?S[d](e):d(j,e,t)}}),el=!$&&!!Z,{slideSizes:ec,slideSizesWithGaps:es,startGap:ed,endGap:eu}=function(e,t,n,i,r,a){let{measureSize:o,startEdge:l,endEdge:c}=e,s=n[0]&&r,d=function(){if(!s)return 0;let e=n[0];return u(t[l]-e[l])}(),p=s?parseFloat(a.getComputedStyle(h(i)).getPropertyValue(`margin-${c}`)):0,f=n.map(o),x=n.map((e,t,n)=>{let i=t===m(n);return t?i?f[t]+p:n[t+1][l]-e[l]:f[t]+d}).map(u);return{slideSizes:f,slideSizesWithGaps:x,startGap:d,endGap:p}}(ei,et,en,n,$||!!Z,r),ep=function(e,t,n,i,r,a,o,c){let{startEdge:s,endEdge:d,direction:p}=e,x=l(n);return{groupSlides:function(e){return x?f(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?f(e).reduce((n,l,f)=>{let x=h(n)||0,g=l===m(e),b=r[s]-a[x][s],y=r[s]-a[l][d],w=i||0!==x?0:p(o),v=u(y-(!i&&g?p(c):0)-(b+w));return f&&v>t+2&&n.push(l),g&&n.push(e.length),n},[]).map((t,n,i)=>{let r=Math.max(i[n-1]||0);return e.slice(r,t)}):[]}}}(ei,er,X,$,et,en,ed,eu),{snaps:ef,snapsAligned:eh}=function(e,t,n,i,r){let{startEdge:a,endEdge:o}=e,{groupSlides:l}=r,c=l(i).map(e=>h(e)[o]-e[0][a]).map(u).map(t.measure),s=i.map(e=>n[a]-e[a]).map(e=>-u(e)),d=l(s).map(e=>e[0]).map((e,t)=>e+c[t]);return{snaps:s,snapsAligned:d}}(ei,eo,et,en,ep),em=-h(ef)+h(es),{snapsContained:ex,scrollContainLimit:eg}=function(e,t,n,i){let r,a,o=w(-t+e,0),l=n.map((e,t)=>{let{min:i,max:r}=o,a=o.constrain(e),l=t===m(n);return t?l||function(e,t){return 1>=u(e-t)}(i,a)?i:function(e,t){return 1>=u(e-t)}(r,a)?r:a:r}).map(e=>parseFloat(e.toFixed(3))),c=(r=l[0],a=h(l),w(l.lastIndexOf(r),l.indexOf(a)+1));return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===i)return l;let{min:n,max:r}=c;return l.slice(n,r)}(),scrollContainLimit:c}}(er,em,eh,Z),eb=el?ex:eh,{limit:ey}=(O=eb[0],{limit:w($?O-em:h(eb),O)}),ew=function e(t,n,i){let{constrain:r}=w(0,t),a=t+1,o=l(n);function l(e){return i?u((a+e)%a):r(e)}function c(){return e(t,o,i)}let s={get:function(){return o},set:function(e){return o=l(e),s},add:function(e){return c().set(o+e)},clone:c};return s}(m(eb),U,$),ev=ew.clone(),e_=f(n),ej=function(e,t,n,i){let r=y(),a=1e3/60,o=null,l=0,c=0;function s(e){if(!c)return;o||(o=e,n(),n());let r=e-o;for(o=e,l+=r;l>=a;)n(),l-=a;i(l/a),c&&(c=t.requestAnimationFrame(s))}function d(){t.cancelAnimationFrame(c),o=null,l=0,c=0}return{init:function(){r.add(e,"visibilitychange",()=>{e.hidden&&(o=null,l=0)})},destroy:function(){d(),r.clear()},start:function(){c||(c=t.requestAnimationFrame(s))},stop:d,update:n,render:i}}(i,r,()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:i}})=>{i||n.constrain(e.pointerDown()),t.seek()})(eF),e=>(({scrollBody:e,translate:t,location:n,offsetLocation:i,previousLocation:r,scrollLooper:a,slideLooper:o,dragHandler:l,animation:c,eventHandler:s,scrollBounds:d,options:{loop:u}},p)=>{let f=e.settled(),h=!d.shouldConstrain(),m=u?f:f&&h,x=m&&!l.pointerDown();x&&c.stop();let g=n.get()*p+r.get()*(1-p);i.set(g),u&&(a.loop(e.direction()),o.loop()),t.to(i.get()),x&&s.emit("settle"),m||s.emit("scroll")})(eF,e)),eS=eb[ew.get()],eC=v(eS),eI=v(eS),ek=v(eS),eN=v(eS),eA=function(e,t,n,i,r){let a=0,o=0,l=r,c=.68,s=e.get(),d=0;function f(e){return l=e,m}function h(e){return c=e,m}let m={direction:function(){return o},duration:function(){return l},velocity:function(){return a},seek:function(){let t=i.get()-e.get(),r=0;return l?(n.set(e),a+=t/l,a*=c,s+=a,e.add(a),r=s-d):(a=0,n.set(i),e.set(i),r=t),o=p(r),d=s,m},settled:function(){return .001>u(i.get()-t.get())},useBaseFriction:function(){return h(.68)},useBaseDuration:function(){return f(r)},useFriction:h,useDuration:f};return m}(eC,ek,eI,eN,V),eO=function(e,t,n,i,r){let{reachedAny:a,removeOffset:o,constrain:l}=i;function c(e){return e.concat().sort((e,t)=>u(e)-u(t))[0]}function s(t,i){let r=[t,t+n,t-n];if(!e)return t;if(!i)return c(r);let a=r.filter(e=>p(e)===i);return a.length?c(a):h(r)-n}return{byDistance:function(n,i){let c=r.get()+n,{index:d,distance:p}=function(n){let i=e?o(n):l(n),{index:r}=t.map((e,t)=>({diff:s(e-i,0),index:t})).sort((e,t)=>u(e.diff)-u(t.diff))[0];return{index:r,distance:i}}(c),f=!e&&a(c);if(!i||f)return{index:d,distance:n};let h=n+s(t[d]-p,0);return{index:d,distance:h}},byIndex:function(e,n){let i=s(t[e]-r.get(),n);return{index:e,distance:i}},shortcut:s}}($,eb,em,ey,eN),eM=function(e,t,n,i,r,a,o){function l(r){let l=r.distance,c=r.index!==t.get();a.add(l),l&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){l(r.byDistance(e,t))},index:function(e,n){let i=t.clone().set(e);l(r.byIndex(i.get(),n))}}}(ej,ew,ev,eA,eO,eN,o),eP=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ey),eE=y(),eL=(P={},E=null,L=null,T=!1,{init:function(){M=new IntersectionObserver(e=>{T||(e.forEach(e=>{P[n.indexOf(e.target)]=e}),E=null,L=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:K}),n.forEach(e=>M.observe(e))},destroy:function(){M&&M.disconnect(),T=!0},get:function(e=!0){if(e&&E)return E;if(!e&&L)return L;let t=g(P).reduce((t,n)=>{let i=parseInt(n),{isIntersecting:r}=P[i];return(e&&r||!e&&!r)&&t.push(i),t},[]);return e&&(E=t),e||(L=t),t}}),{slideRegistry:eT}=function(e,t,n,i,r,a){let o,{groupSlides:l}=r,{min:c,max:s}=i;return{slideRegistry:(o=l(a),1===n.length?[a]:e&&"keepSnaps"!==t?o.slice(c,s).map((e,t,n)=>{let i=t===m(n);return t?i?x(m(a)-h(n)[0]+1,h(n)[0]):e:x(h(n[0])+1)}):o)}}(el,Z,eb,eg,ep,e_),eD=function(e,t,n,i,r,a,o,c){let d={passive:!0,capture:!0},u=0;function p(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(f){c&&(a.add(document,"keydown",p,!1),t.forEach((t,p)=>{a.add(t,"focus",t=>{(s(c)||c(f,t))&&function(t){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));l(a)&&(r.useDuration(0),i.index(a,0),o.emit("slideFocus"))}(p)},d)}))}}}(e,n,eT,eM,eA,eE,o,J),eF={ownerDocument:i,ownerWindow:r,eventHandler:o,containerRect:et,slideRects:en,animation:ej,axis:ei,dragHandler:function(e,t,n,i,r,a,o,l,c,d,f,h,m,x,g,v,_,j){let{cross:S,direction:C}=e,I=["INPUT","SELECT","TEXTAREA"],k={passive:!1},N=y(),A=y(),O=w(50,225).constrain(x.measure(20)),M={mouse:300,touch:400},P={mouse:500,touch:600},E=g?43:25,L=!1,T=0,D=0,F=!1,R=!1,z=!1,B=!1;function U(e){if(!b(e,i)&&e.touches.length>=2)return $(e);let t=a.readPoint(e),n=a.readPoint(e,S),o=u(t-T),c=u(n-D);if(!R&&!B&&(!e.cancelable||!(R=o>c)))return $(e);let s=a.pointerMove(e);o>v&&(z=!0),d.useFriction(.3).useDuration(.75),l.start(),r.add(C(s)),e.preventDefault()}function $(e){var t;let n,i,r=f.byDistance(0,!1).index!==h.get(),o=a.pointerUp(e)*(g?P:M)[B?"mouse":"touch"],l=(t=C(o),n=h.add(-1*p(t)),i=f.byDistance(t,!g).distance,g||u(t)<O?i:_&&r?.5*i:f.byIndex(n.get(),0).distance),s=function(e,t){var n,i;if(0===e||0===t||u(e)<=u(t))return 0;let r=(n=u(e),i=u(t),u(n-i));return u(r/e)}(o,l);R=!1,F=!1,A.clear(),d.useDuration(E-10*s).useFriction(.68+s/50),c.distance(l,!g),B=!1,m.emit("pointerUp")}function V(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(e){j&&N.add(t,"dragstart",e=>e.preventDefault(),k).add(t,"touchmove",()=>void 0,k).add(t,"touchend",()=>void 0).add(t,"touchstart",l).add(t,"mousedown",l).add(t,"touchcancel",$).add(t,"contextmenu",$).add(t,"click",V,!0);function l(l){(s(j)||j(e,l))&&function(e){let l,c=b(e,i);if((B=c,z=g&&c&&!e.buttons&&L,L=u(r.get()-o.get())>=2,!c||0===e.button)&&(l=e.target.nodeName||"",!I.includes(l))){let i;F=!0,a.pointerDown(e),d.useFriction(0).useDuration(0),r.set(o),i=B?n:t,A.add(i,"touchmove",U,k).add(i,"touchend",$).add(i,"mousemove",U,k).add(i,"mouseup",$),T=a.readPoint(e),D=a.readPoint(e,S),m.emit("pointerDown")}}(l)}},destroy:function(){N.clear(),A.clear()},pointerDown:function(){return F}}}(ei,e,i,r,eN,function(e,t){let n,i;function r(e){return e.timeStamp}function a(n,i){let r=i||e.scroll,a=`client${"x"===r?"X":"Y"}`;return(b(n,t)?n:n.touches[0])[a]}return{pointerDown:function(e){return n=e,i=e,a(e)},pointerMove:function(e){let t=a(e)-a(i),o=r(e)-r(n)>170;return i=e,o&&(n=e),t},pointerUp:function(e){if(!n||!i)return 0;let t=a(i)-a(n),o=r(e)-r(n),l=r(e)-r(i)>170,c=t/o;return o&&!l&&u(c)>.1?c:0},readPoint:a}}(ei,r),eC,ej,eM,eA,eO,ew,o,ea,H,q,Y,W),eventStore:eE,percentOfView:ea,index:ew,indexPrevious:ev,limit:ey,location:eC,offsetLocation:ek,previousLocation:eI,options:a,resizeHandler:function(e,t,n,i,r,a,o){let l,c,d=[e].concat(i),p=[],f=!1;function h(e){return r.measureSize(o.measure(e))}return{init:function(r){a&&(c=h(e),p=i.map(h),l=new ResizeObserver(n=>{(s(a)||a(r,n))&&function(n){for(let a of n){if(f)return;let n=a.target===e,o=i.indexOf(a.target),l=n?c:p[o];if(u(h(n?e:i[o])-l)>=.5){r.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{d.forEach(e=>l.observe(e))}))},destroy:function(){f=!0,l&&l.disconnect()}}}(t,o,r,n,ei,Q,ee),scrollBody:eA,scrollBounds:function(e,t,n,i,r){let a=r.measure(10),o=r.measure(50),l=w(.1,.99),c=!1;function s(){return!c&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:s,constrain:function(r){if(!s())return;let c=e.reachedMin(t.get())?"min":"max",d=u(e[c]-t.get()),p=n.get()-t.get(),f=l.constrain(d/o);n.subtract(p*f),!r&&u(p)<a&&(n.set(e.constrain(n.get())),i.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(ey,ek,eN,eA,ea),scrollLooper:function(e,t,n,i){let{reachedMin:r,reachedMax:a}=w(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?a(n.get()):-1===t&&r(n.get())))return;let o=-1*t*e;i.forEach(e=>e.add(o))}}}(em,ey,ek,[eC,ek,eI,eN]),scrollProgress:eP,scrollSnapList:eb.map(eP.get),scrollSnaps:eb,scrollTarget:eO,scrollTo:eM,slideLooper:function(e,t,n,i,r,a,o,l,c){let s=f(r),d=f(r).reverse(),u=m(h(d,o[0]),n,!1).concat(m(h(s,t-o[0]-1),-n,!0));function p(e,t){return e.reduce((e,t)=>e-r[t],t)}function h(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function m(r,o,s){let d=a.map((e,n)=>({start:e-i[n]+.5+o,end:e+t-.5+o}));return r.map(t=>{let i=s?0:-n,r=s?n:0,a=d[t][s?"end":"start"];return{index:t,loopPoint:a,slideLocation:v(-1),translate:_(e,c[t]),target:()=>l.get()>a?i:r}})}return{canLoop:function(){return u.every(({index:e})=>.1>=p(s.filter(t=>t!==e),t))},clear:function(){u.forEach(e=>e.translate.clear())},loop:function(){u.forEach(e=>{let{target:t,translate:n,slideLocation:i}=e,r=t();r!==i.get()&&(n.to(r),i.set(r))})},loopPoints:u}}(ei,er,em,ec,es,ef,eb,ek,n),slideFocus:eD,slidesHandler:(F=!1,{init:function(e){G&&(D=new MutationObserver(t=>{!F&&(s(G)||G(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),o.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){D&&D.disconnect(),F=!0}}),slidesInView:eL,slideIndexes:e_,slideRegistry:eT,slidesToScroll:ep,target:eN,translate:_(ei,t)};return eF}(e,I,k,A,O,n,L);return n.loop&&!i.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):i}(V),F([$,...H.map(({options:e})=>e)]).forEach(e=>E.add(e,"change",K)),V.active&&(o.translate.to(o.location.get()),o.animation.init(),o.slidesInView.init(),o.slideFocus.init(Q),o.eventHandler.init(Q),o.resizeHandler.init(Q),o.slidesHandler.init(Q),o.options.loop&&o.slideLooper.loop(),I.offsetParent&&k.length&&o.dragHandler.init(Q),C=P.init(Q,H)))}function K(e,t){let n=Z();X(),q(T({startIndex:n},e),t),L.emit("reInit")}function X(){o.dragHandler.destroy(),o.eventStore.clear(),o.translate.clear(),o.slideLooper.clear(),o.resizeHandler.destroy(),o.slidesHandler.destroy(),o.slidesInView.destroy(),o.animation.destroy(),P.destroy(),E.clear()}function Y(e,t,n){V.active&&!U&&(o.scrollBody.useBaseFriction().useDuration(!0===t?0:V.duration),o.scrollTo.index(e,n||0))}function Z(){return o.index.get()}let Q={canScrollNext:function(){return o.index.add(1).get()!==Z()},canScrollPrev:function(){return o.index.add(-1).get()!==Z()},containerNode:function(){return I},internalEngine:function(){return o},destroy:function(){U||(U=!0,E.clear(),X(),L.emit("destroy"),L.clear())},off:z,on:R,emit:B,plugins:function(){return C},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:K,rootNode:function(){return e},scrollNext:function(e){Y(o.index.add(1).get(),e,-1)},scrollPrev:function(e){Y(o.index.add(-1).get(),e,1)},scrollProgress:function(){return o.scrollProgress.get(o.offsetLocation.get())},scrollSnapList:function(){return o.scrollSnapList},scrollTo:Y,selectedScrollSnap:Z,slideNodes:function(){return k},slidesInView:function(){return o.slidesInView.get()},slidesNotInView:function(){return o.slidesInView.get(!1)}};return q(t,n),setTimeout(()=>L.emit("init"),0),Q}function C(e={},t=[]){let n=(0,i.useRef)(e),r=(0,i.useRef)(t),[l,c]=(0,i.useState)(),[s,d]=(0,i.useState)(),u=(0,i.useCallback)(()=>{l&&l.reInit(n.current,r.current)},[l]);return(0,i.useEffect)(()=>{a(n.current,e)||(n.current=e,u())},[e,u]),(0,i.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=o(e),i=o(t);return n.every((e,t)=>a(e,i[t]))}(r.current,t)&&(r.current=t,u())},[t,u]),(0,i.useEffect)(()=>{if("u">typeof window&&window.document&&window.document.createElement&&s){S.globalOptions=C.globalOptions;let e=S(s,n.current,r.current);return c(e),()=>e.destroy()}c(void 0)},[s,c]),[d,l]}S.globalOptions=void 0,C.globalOptions=void 0;var I=e.i(71774),k=e.i(58891),N=e.i(88746);let A="Балтик Стайл",O="БС",M="Системная интеграция и инфраструктурные ИТ-решения",P="+74012 99-11-99",E="tel:+74012991199",L="info@balticstyle.ru",T=[{label:"О компании",href:"/about",targetId:"baltic-about"},{label:"Продукты, технологии, услуги",href:"/products",targetId:"baltic-directions"},{label:"Партнёры",href:"/partners",targetId:"baltic-partners"},{label:"Новости",href:"/news",targetId:"baltic-news"},{label:"Контакты",href:"/contacts",targetId:"baltic-contact"}],D="Оптимальные IT-решения",F="От разработки стратегии до реализации",R="Системная интеграция и инфраструктурные ИТ-решения",z=["Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий. Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры. Надёжный технологический партнёр бизнеса более 30 лет."],B=[{icon:"server",label:"ЦОД и серверная инфраструктура"},{icon:"network",label:"Слаботочные сети"},{icon:"shield",label:"Информационная безопасность"},{icon:"cloud",label:"Облачные сервисы"},{icon:"support",label:"Сервисная поддержка"}],U=[{icon:"server",label:"30 лет в отрасли"},{icon:"support",label:"Опытный ИТ-персонал"},{icon:"cloud",label:"Оптимальные ИТ-решения"}],$=[{icon:"server",title:"Проектирование",description:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"network",title:"Интеграция и строительство",description:"Монтаж, пуско-наладка и ввод систем в эксплуатацию."},{icon:"shield",title:"ИТ-аудит",description:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"cloud",title:"Поставки и сервис",description:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"support",title:"ИТ-аутсорсинг",description:"Профессиональное сопровождение сложных ИТ-решений."}],V="Свяжитесь с нами удобным способом",H="Заполните форму и мы перезвоним",q={name:"Имя",phone:"Номер телефона",email:"e-mail",message:"Ваш текст",file:"Прикрепить файл",submit:"Отправить"},K="© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.",X="Юридический адрес 236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",Y="Телефоны +74012 99-11-99; +74012 99-11-98",Z="Реквизиты ИНН 3905017052, КПП 390601001, ОГРН 1023900773555",Q="Еmail: info@balticstyle.ru",G="turquoise",W={turquoise:"Бирюзовая",orange:"Оранжевая"},J="baltic-style-theme",ee=new Set;function et(e){document.documentElement.dataset.theme=e}function en(){let e=window.localStorage.getItem(J);return"turquoise"===e||"orange"===e?e:G}function ei(e){return ee.add(e),()=>{ee.delete(e)}}function er(){let e,r,a,o,l,c,s,d,u=(0,n.c)(16),p=(0,i.useSyncExternalStore)(ei,en,ea);u[0]!==p?(e="turquoise"===p?"orange":"turquoise",u[0]=p,u[1]=e):e=u[1];let f=e;u[2]!==p?(r=()=>{et(p)},a=[p],u[2]=p,u[3]=r,u[4]=a):(r=u[3],a=u[4]),(0,i.useEffect)(r,a),u[5]!==f?(o=()=>{et(f),window.localStorage.setItem(J,f),ee.forEach(e=>e())},u[5]=f,u[6]=o):o=u[6];let h=o,m=W[f];u[7]!==m?(l=m.toLowerCase(),u[7]=m,u[8]=l):l=u[8];let x=`Переключить тему на ${l}`;u[9]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(el,{"aria-hidden":"true"}),u[9]=c):c=u[9];let g=W[f];return u[10]!==g?(s=(0,t.jsxs)("span",{children:[g," тема"]}),u[10]=g,u[11]=s):s=u[11],u[12]!==h||u[13]!==x||u[14]!==s?(d=(0,t.jsxs)(eo,{type:"button",onClick:h,"aria-label":x,children:[c,s]}),u[12]=h,u[13]=x,u[14]=s,u[15]=d):d=u[15],d}function ea(){return G}let eo=N.default.button.withConfig({displayName:"theme-toggle-button__ToggleButton",componentId:"sc-3bef75ca-0"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  max-width: 100%;
  padding: 0 16px;
  border: 0;
  border-radius: 18px;
  color: #f7fbff;
  background: rgba(255, 255, 255, 0.08);
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
    background: rgba(255, 255, 255, 0.12);
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
`,el=N.default.i.withConfig({displayName:"theme-toggle-button__Swatch",componentId:"sc-3bef75ca-1"})`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.68);
  border-radius: 50%;
  background: var(--accent);
`,ec={src:e.i(85028).default,width:865,height:575,blurWidth:8,blurHeight:5,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfUlEQVR42h2M2wrCMBBE+6CV3SbkRkK0GkG0oL/g/39WOt3Nw8Bw5jATL7b7mGGdQ7vnEe3WJ5xm3qeZQyebYFNDWbcR7crOFEQwtXN8IbQ/Yt0Q6md0ZbKpcO0U3zD5C3I3cHjAlB+UyaZC6eQb2FVc2Mh1xOJXkH+KUPYDd7YwmDq18zoAAAAASUVORK5CYII="},es={phone:(0,t.jsx)("path",{d:"M18.9 15.7c-1.1 0-2.2-.2-3.2-.6-.5-.2-1-.1-1.4.3l-1.5 1.9c-2.8-1.4-5.2-3.8-6.7-6.7L8 9.1c.4-.4.5-.9.3-1.4-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H3.7c-.8 0-1.7.4-1.7 1.5C2 13.7 9.3 21 18.5 21c1.1 0 1.5-.9 1.5-1.7v-2.1c0-.8-.3-1.5-1.1-1.5Z"}),server:(0,t.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v3A2.5 2.5 0 0 1 17.5 11h-11A2.5 2.5 0 0 1 4 8.5v-3Zm0 10A2.5 2.5 0 0 1 6.5 13h11a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01M10 7h7M10 17h7"}),network:(0,t.jsx)("path",{d:"M12 4v5m0 0H7m5 0h5M7 9v4m10-4v4M5 13h4v7H5v-7Zm10 0h4v7h-4v-7Zm-5-9h4v5h-4V4Z"}),shield:(0,t.jsx)("path",{d:"M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5"}),cloud:(0,t.jsx)("path",{d:"M7.5 18h9.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 5.6 11 3.5 3.5 0 0 0 7.5 18Z"}),support:(0,t.jsx)("path",{d:"M4 12a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-2v-6h5M4 15a3 3 0 0 0 3 3h2v-6H4v3Zm8 5h3"})};function ed(e){let i,r=(0,n.c)(2),{name:a}=e,o=es[a];return r[0]!==o?(i=(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:o}),r[0]=o,r[1]=i):i=r[1],i}function eu(e){return e.preventDefault()}function ep(e){return(0,t.jsxs)(e0,{children:[(0,t.jsx)(eY,{children:(0,t.jsx)(ed,{name:e.icon})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("b",{children:e.title}),(0,t.jsx)("p",{children:e.description})]})]},e.title)}function ef(e){return(0,t.jsxs)(eG,{children:[(0,t.jsx)(eX,{children:(0,t.jsx)(ed,{name:e.icon})}),(0,t.jsx)("b",{children:e.label})]},e.label)}function eh(e,n){return B.map(e=>(0,t.jsxs)(eK,{children:[(0,t.jsx)(eX,{children:(0,t.jsx)(ed,{name:e.icon})}),(0,t.jsx)("span",{children:e.label})]},`${n}-${e.label}`))}function em(e){return(0,t.jsx)("p",{children:e},e)}let ex=N.default.div.withConfig({displayName:"baltic-style-landing__Shell",componentId:"sc-50a68381-0"})`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
  }
`,eg=N.default.section.withConfig({displayName:"baltic-style-landing__BaseSection",componentId:"sc-50a68381-1"})`
  position: relative;
  display: grid;
  align-items: center;
`,eb=N.default.a.withConfig({displayName:"baltic-style-landing__RaisedAnchor",componentId:"sc-50a68381-2"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;

  border: 2px solid transparent;
  background: var(--surface);

  box-shadow:
      8px 8px 18px var(--shadow-dark),
      -8px -8px 18px var(--shadow-light);

  transition:
      transform 350ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 350ms cubic-bezier(0.22, 1, 0.36, 1),
      border-color 250ms ease,
      color 250ms ease,
      background-color 250ms ease;

  &:hover {
    transform: translate3d(0, -4px, 0);
    border-color: #0b1c2d;

    box-shadow:
        12px 16px 26px var(--shadow-dark),
        -12px -12px 24px var(--shadow-light);
  }

  &:active {
    transform: translate3d(0, -1px, 0);

    box-shadow:
        inset 8px 8px 16px var(--shadow-pressed),
        inset -8px -8px 16px var(--shadow-light);

    transition-duration: 80ms;
  }
`,ey=N.default.button.withConfig({displayName:"baltic-style-landing__RaisedButton",componentId:"sc-50a68381-3"})`
  position: relative;
  border: 0;
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);

  &:active {
    transform: translateY(2px);
    box-shadow:
      inset 8px 8px 16px var(--shadow-pressed),
      inset -8px -8px 16px var(--shadow-light);
    transition-duration: 90ms;
  }
`,ew=N.default.label.withConfig({displayName:"baltic-style-landing__RaisedLabel",componentId:"sc-50a68381-4"})`
    position: relative;
    border: 0;
    background: var(--surface);
    box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
    transition: box-shadow 300ms ease,
    transform 1000ms ease,
    color 300ms ease,
    background 300ms ease,
    scale 300ms ease;


    &:hover {
        transform: translateY(1px);
        box-shadow: inset 3px 3px 7px var(--shadow-dark),
        inset -3px -3px 7px var(--shadow-light);
    }

    &:active {
        transform: translateY(2px);
        box-shadow: inset 8px 8px 16px var(--shadow-pressed),
        inset -8px -8px 16px var(--shadow-light);
        transition-duration: 90ms;
    }
`,ev=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__ContentRow",componentId:"sc-50a68381-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,e_=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__ContentColumn",componentId:"sc-50a68381-6"})`
  display: grid;
  gap: 24px;
`,ej=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__NarrowContent",componentId:"sc-50a68381-7"})`
  display: grid;
  gap: 22px;
`,eS=N.default.main.withConfig({displayName:"baltic-style-landing__MainContent",componentId:"sc-50a68381-8"})`
  min-height: 100vh;
  color: var(--foreground);
  background:
    linear-gradient(115deg, var(--ambient-accent) 0%, transparent 38%),
    linear-gradient(180deg, var(--surface-strong) 0%, var(--background) 42%, var(--background-end) 100%);
`,eC=N.default.header.withConfig({displayName:"baltic-style-landing__TopBar",componentId:"sc-50a68381-9"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 228px;
  padding: 28px 0;
`,eI=(0,N.default)(I.default).withConfig({displayName:"baltic-style-landing__CompanyBlock",componentId:"sc-50a68381-10"})`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
  border-radius: 28px;
  color: inherit;
  text-decoration: none;
`,ek=N.default.div.withConfig({displayName:"baltic-style-landing__Logo",componentId:"sc-50a68381-11"})`
  display: grid;
  width: 86px;
  height: 86px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 24px;
  color: #f6fbff;
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow: 14px 14px 28px var(--shadow-dark), -14px -14px 28px var(--shadow-light);
  font-size: 28px;
  font-weight: 800;
`,eN=N.default.div.withConfig({displayName:"baltic-style-landing__CompanyText",componentId:"sc-50a68381-12"})`
  min-width: 0;

  h1 {
    color: #14212c;
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
`,eA=(0,N.default)(eb).withConfig({displayName:"baltic-style-landing__PhoneLink",componentId:"sc-50a68381-13"})`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  min-height: 56px;
  padding: 0 18px;
  border-radius: 18px;
  color: #173f4b;
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
`,eO=N.default.nav.withConfig({displayName:"baltic-style-landing__NavSection",componentId:"sc-50a68381-14"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 76px;
  background: rgba(255, 255, 255, 0.2);
`,eM=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__NavList",componentId:"sc-50a68381-15"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`,eP=(0,N.default)(I.default).withConfig({displayName:"baltic-style-landing__NavLink",componentId:"sc-50a68381-16"})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(0, 0, 0);
  will-change: transform, box-shadow;
  min-height: 44px;
  min-width: 0;
  padding: 0 16px;
  border: 2px solid ${({$active:e})=>e?"var(--accent-strong)":"transparent"};
  border-radius: 999px;
  color: #30485b;
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-align: center;
  transition:
    transform 300ms ease,
    box-shadow 300ms ease,
    border-color 300ms ease,
    color 300ms ease,
    background-color 300ms ease;

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
    transform: translate3d(0, -2px, 0);
    border-color: #0b1c2d;
    box-shadow: 10px 12px 22px var(--shadow-dark), -10px -10px 22px var(--shadow-light);
  }

  &:active {
    transform: translate3d(0, 0, 0);
    box-shadow:
      inset 6px 6px 14px var(--shadow-pressed),
      inset -6px -6px 14px var(--shadow-light);
    transition-duration: 90ms;
  }
`,eE=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__PromoSection",componentId:"sc-50a68381-17"})`
  min-height: 324px;
  background: var(--dark-section);
`,eL=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__PromoInner",componentId:"sc-50a68381-18"})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 32px;
  align-items: stretch;
  padding: 28px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eT=N.default.div.withConfig({displayName:"baltic-style-landing__PromoCopy",componentId:"sc-50a68381-19"})`
  display: grid;
  align-content: center;
  gap: 18px;

  h2 {
    max-width: 680px;
    color: #f6fbff;
    font-size: 56px;
    line-height: 1;
  }

  p {
    color: rgba(246, 251, 255, 0.78);
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
`,eD=N.default.div.withConfig({displayName:"baltic-style-landing__PhotoPlaceholder",componentId:"sc-50a68381-20"})`
  position: relative;
  overflow: hidden;
  min-height: 268px;
  min-width: 300px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  background:
    linear-gradient(135deg, var(--ambient-accent-strong), transparent 55%),
    linear-gradient(145deg, var(--dark-section-elevated), var(--dark-section-deep));
  box-shadow: inset 12px 12px 28px rgba(0, 0, 0, 0.22), inset -10px -10px 24px rgba(255, 255, 255, 0.05);
`,eF=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__AboutSection",componentId:"sc-50a68381-21"})`
  min-height: 324px;
  padding: 42px 0;
`,eR=N.default.h2.withConfig({displayName:"baltic-style-landing__SectionTitle",componentId:"sc-50a68381-22"})`
  color: #14212c;
  font-size: 40px;
  line-height: 1.08;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`,ez=N.default.div.withConfig({displayName:"baltic-style-landing__AboutText",componentId:"sc-50a68381-23"})`
  display: grid;
  gap: 14px;
  max-width: 940px;

  p {
    color: #435566;
    font-size: 18px;
    line-height: 1.62;
  }
`,eB=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__ProjectsSection",componentId:"sc-50a68381-24"})`
  min-height: 324px;
  padding: 34px 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.16);
`,eU=N.default.span.withConfig({displayName:"baltic-style-landing__AnchorTarget",componentId:"sc-50a68381-25"})`
  position: absolute;
  top: 0;
`,e$=N.default.div.withConfig({displayName:"baltic-style-landing__SectionHeadRow",componentId:"sc-50a68381-26"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,eV=N.default.div.withConfig({displayName:"baltic-style-landing__ProjectSlider",componentId:"sc-50a68381-27"})`
  position: relative;
  left: 50%;
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: visible;
`,eH=N.default.div.withConfig({displayName:"baltic-style-landing__ProjectSliderViewport",componentId:"sc-50a68381-28"})`
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
`,eq=N.default.div.withConfig({displayName:"baltic-style-landing__ProjectTrack",componentId:"sc-50a68381-29"})`
  display: flex;
  gap: 18px;
`,eK=N.default.article.withConfig({displayName:"baltic-style-landing__ProjectSlide",componentId:"sc-50a68381-30"})`
  display: grid;
  flex: 0 0 clamp(180px, 22vw, 232px);
  min-width: 0;
  min-height: 176px;
  place-items: center;
  gap: 16px;
  padding: 22px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);
  text-align: center;

  span {
    color: #2f4355;
    font-weight: 800;
    line-height: 1.35;
  }
`,eX=N.default.span.withConfig({displayName:"baltic-style-landing__IconBox",componentId:"sc-50a68381-31"})`
  display: grid;
  width: 58px;
  height: 58px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 18px;
  color: var(--accent-strong);
  background: var(--surface);
  box-shadow: 8px 8px 18px var(--shadow-dark), -8px -8px 18px var(--shadow-light);

  svg {
    width: 28px;
    height: 28px;
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 1.8;
  }
`,eY=(0,N.default)(eX).withConfig({displayName:"baltic-style-landing__SmallIconBox",componentId:"sc-50a68381-32"})`
  width: 44px;
  height: 44px;
  border-radius: 14px;

  svg {
    width: 22px;
    height: 22px;
  }
`,eZ=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__AdvantagesSection",componentId:"sc-50a68381-33"})`
  min-height: 162px;
  padding: 26px 0;
`,eQ=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__AdvantagesGrid",componentId:"sc-50a68381-34"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eG=N.default.article.withConfig({displayName:"baltic-style-landing__Advantage",componentId:"sc-50a68381-35"})`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 86px;
  padding: 18px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: 12px 12px 24px var(--shadow-dark), -12px -12px 24px var(--shadow-light);

  b {
    color: #173f4b;
    line-height: 1.3;
  }
`,eW=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__DirectionsSection",componentId:"sc-50a68381-36"})`
  min-height: 162px;
  padding: 28px 0;
  background: rgba(255, 255, 255, 0.14);
`,eJ=N.default.div.withConfig({displayName:"baltic-style-landing__DirectionsList",componentId:"sc-50a68381-37"})`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,e0=N.default.article.withConfig({displayName:"baltic-style-landing__DirectionItem",componentId:"sc-50a68381-38"})`
  display: flex;
  gap: 12px;
  min-width: 0;
  padding: 16px;
  border-radius: 20px;
  background:
    linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(222, 232, 241, 0.72)),
    var(--surface);
  box-shadow: 10px 10px 20px var(--shadow-dark), -10px -10px 20px var(--shadow-light);

  b {
    display: block;
    color: #14212c;
    font-size: 14px;
    line-height: 1.25;
  }

  p {
    margin-top: 5px;
    color: var(--muted);
    font-size: 12px;
    line-height: 1.35;
  }
`,e1=(0,N.default)(eg).withConfig({displayName:"baltic-style-landing__ContactSection",componentId:"sc-50a68381-39"})`
  min-height: 486px;
  padding: 44px 0;
`,e2=(0,N.default)(ex).withConfig({displayName:"baltic-style-landing__ContactGrid",componentId:"sc-50a68381-40"})`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,e5=N.default.div.withConfig({displayName:"baltic-style-landing__ContactCopy",componentId:"sc-50a68381-41"})`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent-strong);
    font-size: 20px;
    font-weight: 800;
  }
`,e8=N.default.form.withConfig({displayName:"baltic-style-landing__ContactForm",componentId:"sc-50a68381-42"})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  background: var(--surface);
  box-shadow: 16px 16px 32px var(--shadow-dark), -16px -16px 32px var(--shadow-light);

  label {
    display: grid;
    gap: 8px;
    color: #30485b;
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
    color: #14212c;
    background: var(--surface);
    box-shadow: inset 6px 6px 12px var(--shadow-dark), inset -6px -6px 12px var(--shadow-light);
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
`,e3=N.default.div.withConfig({displayName:"baltic-style-landing__FormActions",componentId:"sc-50a68381-43"})`
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
`,e4=(0,N.default)(ew).withConfig({displayName:"baltic-style-landing__FileButton",componentId:"sc-50a68381-44"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 18px;
  border-radius: 18px;
  color: #173f4b;
  cursor: pointer;

  input {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
`,e6=(0,N.default)(ey).withConfig({displayName:"baltic-style-landing__SubmitButton",componentId:"sc-50a68381-45"})`
  min-height: 50px;
  padding: 0 24px;
  border-radius: 18px;
  color: #f7fbff;
  background: linear-gradient(145deg, var(--accent), var(--accent-dark) 70%);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
`,e7=N.default.footer.withConfig({displayName:"baltic-style-landing__Footer",componentId:"sc-50a68381-46"})`
  padding: 34px 0;
  color: rgba(246, 251, 255, 0.82);
  background: var(--dark-section);
`,e9=N.default.div.withConfig({displayName:"baltic-style-landing__FooterInner",componentId:"sc-50a68381-47"})`
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
`,te=N.default.div.withConfig({displayName:"baltic-style-landing__FooterContent",componentId:"sc-50a68381-48"})`
  display: grid;
  gap: 10px;

  b {
    color: #f6fbff;
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
`,tt=N.default.div.withConfig({displayName:"baltic-style-landing__ThemeSlot",componentId:"sc-50a68381-49"})`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`,tn=N.default.img.withConfig({displayName:"baltic-style-landing__Image",componentId:"sc-50a68381-50"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;e.s(["BalticStyleLanding",0,function(){let e,r,a,o,l,c,s,d,u,p,f,h,m,x,g,b,y,w,v,_,j,S,I,k,N,A,O,M,P,E,L,T,B=(0,n.c)(35);B[0]===Symbol.for("react.memo_cache_sentinel")?(e={align:"start",dragFree:!0,loop:!0,skipSnaps:!0,slidesToScroll:1},B[0]=e):e=B[0];let[K,X]=C(e),Y=(0,i.useRef)("next"),Z=(0,i.useRef)(!1),Q=(0,i.useRef)(null),G=(0,i.useRef)(0),W=(0,i.useRef)(!1);B[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{Q.current&&(clearTimeout(Q.current),Q.current=null)},B[1]=r):r=B[1];let J=r;B[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{J(),Z.current=!0},B[2]=a):a=B[2];let ee=a;B[3]===Symbol.for("react.memo_cache_sentinel")?(o=e=>{J(),Q.current=setTimeout(()=>{Z.current=!1,Q.current=null},void 0===e?700:e)},B[3]=o):o=B[3];let et=o;B[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>J,c=[J],B[4]=l,B[5]=c):(l=B[4],c=B[5]),(0,i.useEffect)(l,c),B[6]!==X?(s=()=>{if(!X)return;let e=0,t=0,n=i=>{let r=t?Math.min(i-t,48):0;if(t=i,Z.current){e=window.requestAnimationFrame(n);return}let a=X.internalEngine(),o="next"===Y.current?-1:1;a.location.add(.045*o*r),a.target.set(a.location),a.previousLocation.set(a.location),a.offsetLocation.set(a.location),a.scrollLooper.loop(o),a.slideLooper.loop(),a.translate.to(a.location.get()),X.emit("scroll"),e=window.requestAnimationFrame(n)};return e=window.requestAnimationFrame(n),()=>window.cancelAnimationFrame(e)},d=[X],B[6]=X,B[7]=s,B[8]=d):(s=B[7],d=B[8]),(0,i.useEffect)(s,d),B[9]===Symbol.for("react.memo_cache_sentinel")?(u=e=>{("mouse"!==e.pointerType||0===e.button)&&(ee(),W.current=!0,G.current=e.clientX)},B[9]=u):u=B[9];let en=u;B[10]===Symbol.for("react.memo_cache_sentinel")?(p=e=>{if(!W.current)return;let t=e.clientX-G.current;Math.abs(t)>.5&&(Y.current=t>0?"prev":"next",G.current=e.clientX)},B[10]=p):p=B[10];let ei=p;B[11]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{W.current=!1,et()},B[11]=f):f=B[11];let er=f;B[12]===Symbol.for("react.memo_cache_sentinel")?(h=e=>{1>Math.abs(e.deltaX)||(Y.current=e.deltaX>0?"next":"prev",ee(),et())},B[12]=h):h=B[12];let ea=h;return B[13]===Symbol.for("react.memo_cache_sentinel")?(m=(0,t.jsxs)(eT,{children:[(0,t.jsx)("h2",{children:D}),(0,t.jsx)("p",{children:F})]}),B[13]=m):m=B[13],B[14]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsx)(eE,{children:(0,t.jsxs)(eL,{children:[m,(0,t.jsx)(eD,{role:"img","aria-label":"Заглушка фотографии IT-инфраструктуры",children:(0,t.jsx)(tn,{src:ec.src,alt:"Патч-корды и сетевая инфраструктура"})})]})}),B[14]=x):x=B[14],B[15]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)(eR,{id:"baltic-about-title",children:R}),B[15]=g):g=B[15],B[16]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)(eF,{id:"baltic-about","aria-labelledby":"baltic-about-title",children:(0,t.jsxs)(ej,{children:[g,(0,t.jsx)(ez,{children:z.map(em)})]})}),B[16]=b):b=B[16],B[17]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsx)(eU,{id:"baltic-partners","aria-hidden":"true"}),w=(0,t.jsx)(eU,{id:"baltic-news","aria-hidden":"true"}),B[17]=y,B[18]=w):(y=B[17],w=B[18]),B[19]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsx)(e$,{children:(0,t.jsx)(eR,{id:"baltic-projects-title",children:"Реализованные проекты"})}),B[19]=v):v=B[19],B[20]===Symbol.for("react.memo_cache_sentinel")?(_=()=>et(),B[20]=_):_=B[20],B[21]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)(eq,{children:Array.from({length:3},eh)}),B[21]=j):j=B[21],B[22]!==K?(S=(0,t.jsxs)(eB,{id:"baltic-projects","aria-labelledby":"baltic-projects-title",children:[y,w,(0,t.jsxs)(e_,{children:[v,(0,t.jsx)(eV,{children:(0,t.jsx)(eH,{ref:K,tabIndex:0,"aria-label":"Слайдер реализованных проектов",onBlur:_,onFocus:ee,onPointerCancel:er,onPointerDown:en,onPointerMove:ei,onPointerUp:er,onWheel:ea,children:j})})]})]}),B[22]=K,B[23]=S):S=B[23],B[24]===Symbol.for("react.memo_cache_sentinel")?(I=(0,t.jsx)(eZ,{"aria-label":"Преимущества Балтик Стайл",children:(0,t.jsx)(eQ,{children:U.map(ef)})}),B[24]=I):I=B[24],B[25]===Symbol.for("react.memo_cache_sentinel")?(k=(0,t.jsx)(eR,{id:"baltic-directions-title",children:"Ключевые направления"}),B[25]=k):k=B[25],B[26]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)(eW,{id:"baltic-directions","aria-labelledby":"baltic-directions-title",children:(0,t.jsxs)(e_,{children:[k,(0,t.jsx)(eJ,{children:$.map(ep)})]})}),B[26]=N):N=B[26],B[27]===Symbol.for("react.memo_cache_sentinel")?(A=(0,t.jsxs)(e5,{children:[(0,t.jsx)(eR,{id:"baltic-contact-title",children:V}),(0,t.jsx)("p",{children:H})]}),B[27]=A):A=B[27],B[28]===Symbol.for("react.memo_cache_sentinel")?(O=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:q.name}),(0,t.jsx)("input",{name:"name",autoComplete:"name"})]}),M=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:q.phone}),(0,t.jsx)("input",{name:"phone",type:"tel",autoComplete:"tel"})]}),P=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:q.email}),(0,t.jsx)("input",{name:"email",type:"email",autoComplete:"email"})]}),B[28]=O,B[29]=M,B[30]=P):(O=B[28],M=B[29],P=B[30]),B[31]===Symbol.for("react.memo_cache_sentinel")?(E=(0,t.jsxs)("label",{className:"wide",children:[(0,t.jsx)("span",{children:q.message}),(0,t.jsx)("textarea",{name:"message",rows:4})]}),B[31]=E):E=B[31],B[32]===Symbol.for("react.memo_cache_sentinel")?(L=(0,t.jsx)(e1,{id:"baltic-contact","aria-labelledby":"baltic-contact-title",children:(0,t.jsxs)(e2,{children:[A,(0,t.jsxs)(e8,{onSubmit:eu,children:[O,M,P,E,(0,t.jsxs)(e3,{children:[(0,t.jsxs)(e4,{children:[q.file,(0,t.jsx)("input",{type:"file",name:"attachment"})]}),(0,t.jsx)(e6,{type:"submit",children:q.submit})]})]})]})}),B[32]=L):L=B[32],B[33]!==S?(T=(0,t.jsxs)(t.Fragment,{children:[x,b,S,I,N,L]}),B[33]=S,B[34]=T):T=B[34],T},"BalticStyleShell",0,function(e){let i,r,a,o,l,c,s,d,u,p,f=(0,n.c)(16),{children:h}=e,m=(0,k.usePathname)();f[0]!==m?(i=m.replace(/\/$/,"")||"/",f[0]=m,f[1]=i):i=f[1];let x=i;return f[2]===Symbol.for("react.memo_cache_sentinel")?(r=(0,t.jsx)(ek,{"aria-hidden":"true",children:O}),f[2]=r):r=f[2],f[3]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsxs)(eI,{href:"/",prefetch:!1,"aria-label":`${A}: на главную`,children:[r,(0,t.jsxs)(eN,{children:[(0,t.jsx)("h1",{id:"company-title",children:A}),(0,t.jsx)("p",{children:M})]})]}),f[3]=a):a=f[3],f[4]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)(eC,{"aria-labelledby":"company-title",children:(0,t.jsxs)(ev,{children:[a,(0,t.jsxs)(eA,{href:E,"aria-label":P,children:[(0,t.jsx)(ed,{name:"phone"}),(0,t.jsx)("span",{children:P})]})]})}),f[4]=o):o=f[4],f[5]!==x?(l=T.map(e=>{let n=x===e.href;return(0,t.jsx)(eP,{href:e.href,prefetch:!1,$active:n,"aria-current":n?"page":void 0,children:e.label},e.href)}),f[5]=x,f[6]=l):l=f[6],f[7]!==l?(c=(0,t.jsx)(eO,{"aria-label":"Основная навигация",children:(0,t.jsx)(eM,{children:l})}),f[7]=l,f[8]=c):c=f[8],f[9]!==h?(s=(0,t.jsx)(eS,{id:"main-content",children:h}),f[9]=h,f[10]=s):s=f[10],f[11]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsxs)(te,{children:[(0,t.jsx)("b",{children:A}),(0,t.jsx)("p",{children:K}),(0,t.jsx)("p",{children:X}),(0,t.jsx)("p",{children:Y}),(0,t.jsx)("p",{children:Z}),(0,t.jsx)("a",{href:`mailto:${L}`,children:Q})]}),f[11]=d):d=f[11],f[12]===Symbol.for("react.memo_cache_sentinel")?(u=(0,t.jsx)(e7,{children:(0,t.jsxs)(e9,{children:[d,(0,t.jsx)(tt,{children:(0,t.jsx)(er,{})})]})}),f[12]=u):u=f[12],f[13]!==c||f[14]!==s?(p=(0,t.jsxs)(t.Fragment,{children:[o,c,s,u]}),f[13]=c,f[14]=s,f[15]=p):p=f[15],p}],36690)}]);