(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,58891,(e,t,n)=>{t.exports=e.r(76349)},36690,e=>{"use strict";var t=e.i(35337),n=e.i(4699),i=e.i(52940);function r(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function a(e,t){let n=Object.keys(e),i=Object.keys(t);return n.length===i.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let i=e[n],o=t[n];return"function"==typeof i?`${i}`==`${o}`:r(i)&&r(o)?a(i,o):i===o})}function o(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function l(e){return"number"==typeof e}function c(e){return"string"==typeof e}function s(e){return"boolean"==typeof e}function d(e){return"[object Object]"===Object.prototype.toString.call(e)}function u(e){return Math.abs(e)}function p(e){return Math.sign(e)}function f(e){return x(e).map(Number)}function m(e){return e[h(e)]}function h(e){return Math.max(0,e.length-1)}function g(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function x(e){return Object.keys(e)}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function y(){let e=[],t={add:function(n,i,r,a={passive:!0}){let o;return"addEventListener"in n?(n.addEventListener(i,r,a),o=()=>n.removeEventListener(i,r,a)):(n.addListener(r),o=()=>n.removeListener(r)),e.push(o),t},clear:function(){e=e.filter(e=>e())}};return t}function w(e=0,t=0){let n=u(e-t);function i(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return i(n)?n<e?e:t:n},reachedAny:i,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function v(e){let t=e;function n(e){return l(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function _(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},i=t.style,r=null,a=!1;return{clear:function(){!a&&(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(a)return;let o=Math.round(100*e.direction(t))/100;o!==r&&(i.transform=n(o),r=o)},toggleActive:function(e){a=!e}}}let j={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function S(e,t,n){let i,r,a,o,I,k,C,A,N=e.ownerDocument,M=N.defaultView,E=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(x(n).forEach(i=>{let r=t[i],a=n[i],o=d(r)&&d(a);t[i]=o?e(r,a):a}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let i=n.breakpoints||{},r=x(i).filter(t=>e.matchMedia(t).matches).map(e=>i[e]).reduce((e,n)=>t(e,n),{});return t(n,r)},optionsMediaQueries:function(t){return t.map(e=>x(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(M),F=(A=[],{init:function(e,t){return(A=t.filter(({options:e})=>!1!==E.optionsAtMedia(e).active)).forEach(t=>t.init(e,E)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){A=A.filter(e=>e.destroy())}}),T=y(),L=(r={},a={init:function(e){i=e},emit:function(e){return(r[e]||[]).forEach(t=>t(i,e)),a},off:function(e,t){return r[e]=(r[e]||[]).filter(e=>e!==t),a},on:function(e,t){return r[e]=(r[e]||[]).concat([t]),a},clear:function(){r={}}}),{mergeOptions:O,optionsAtMedia:D,optionsMediaQueries:P}=E,{on:B,off:z,emit:R}=L,V=!1,H=O(j,S.globalOptions),$=O(H),U=[];function q(t,n){V||($=D(H=O(H,t)),U=n||U,function(){let{container:t,slides:n}=$;k=(c(t)?e.querySelector(t):t)||e.children[0];let i=c(n)?k.querySelectorAll(n):n;C=[].slice.call(i||k.children)}(),o=function t(n){let i=function(e,t,n,i,r,a,o){var d,j;let S,I,k,C,A,N,M,E,F,T,L,O,D,P,{align:B,axis:z,direction:R,startIndex:V,loop:H,duration:$,dragFree:U,dragThreshold:q,inViewThreshold:Z,slidesToScroll:K,skipSnaps:Y,containScroll:X,watchResize:Q,watchSlides:G,watchDrag:W,watchFocus:J}=a,ee={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:r}=e;return{top:t,right:n+i,bottom:t+r,left:n,width:i,height:r}}},et=ee.measure(t),en=n.map(ee.measure),ei=(I="rtl"===R,C=(k="y"===z)||!I?1:-1,A=k?"top":I?"right":"left",N=k?"bottom":I?"left":"right",{scroll:k?"y":"x",cross:k?"x":"y",startEdge:A,endEdge:N,measureSize:function(e){let{height:t,width:n}=e;return k?t:n},direction:function(e){return e*C}}),er=ei.measureSize(et),ea={measure:function(e){return e/100*er}},eo=(d=B,j=er,S={start:function(){return 0},center:function(e){return(j-e)/2},end:function(e){return j-e}},{measure:function(e,t){return c(d)?S[d](e):d(j,e,t)}}),el=!H&&!!X,{slideSizes:ec,slideSizesWithGaps:es,startGap:ed,endGap:eu}=function(e,t,n,i,r,a){let{measureSize:o,startEdge:l,endEdge:c}=e,s=n[0]&&r,d=function(){if(!s)return 0;let e=n[0];return u(t[l]-e[l])}(),p=s?parseFloat(a.getComputedStyle(m(i)).getPropertyValue(`margin-${c}`)):0,f=n.map(o),g=n.map((e,t,n)=>{let i=t===h(n);return t?i?f[t]+p:n[t+1][l]-e[l]:f[t]+d}).map(u);return{slideSizes:f,slideSizesWithGaps:g,startGap:d,endGap:p}}(ei,et,en,n,H||!!X,r),ep=function(e,t,n,i,r,a,o,c){let{startEdge:s,endEdge:d,direction:p}=e,g=l(n);return{groupSlides:function(e){return g?f(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?f(e).reduce((n,l,f)=>{let g=m(n)||0,x=l===h(e),b=r[s]-a[g][s],y=r[s]-a[l][d],w=i||0!==g?0:p(o),v=u(y-(!i&&x?p(c):0)-(b+w));return f&&v>t+2&&n.push(l),x&&n.push(e.length),n},[]).map((t,n,i)=>{let r=Math.max(i[n-1]||0);return e.slice(r,t)}):[]}}}(ei,er,K,H,et,en,ed,eu),{snaps:ef,snapsAligned:em}=function(e,t,n,i,r){let{startEdge:a,endEdge:o}=e,{groupSlides:l}=r,c=l(i).map(e=>m(e)[o]-e[0][a]).map(u).map(t.measure),s=i.map(e=>n[a]-e[a]).map(e=>-u(e)),d=l(s).map(e=>e[0]).map((e,t)=>e+c[t]);return{snaps:s,snapsAligned:d}}(ei,eo,et,en,ep),eh=-m(ef)+m(es),{snapsContained:eg,scrollContainLimit:ex}=function(e,t,n,i){let r,a,o=w(-t+e,0),l=n.map((e,t)=>{let{min:i,max:r}=o,a=o.constrain(e),l=t===h(n);return t?l||function(e,t){return 1>=u(e-t)}(i,a)?i:function(e,t){return 1>=u(e-t)}(r,a)?r:a:r}).map(e=>parseFloat(e.toFixed(3))),c=(r=l[0],a=m(l),w(l.lastIndexOf(r),l.indexOf(a)+1));return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===i)return l;let{min:n,max:r}=c;return l.slice(n,r)}(),scrollContainLimit:c}}(er,eh,em,X),eb=el?eg:em,{limit:ey}=(M=eb[0],{limit:w(H?M-eh:m(eb),M)}),ew=function e(t,n,i){let{constrain:r}=w(0,t),a=t+1,o=l(n);function l(e){return i?u((a+e)%a):r(e)}function c(){return e(t,o,i)}let s={get:function(){return o},set:function(e){return o=l(e),s},add:function(e){return c().set(o+e)},clone:c};return s}(h(eb),V,H),ev=ew.clone(),e_=f(n),ej=function(e,t,n,i){let r=y(),a=1e3/60,o=null,l=0,c=0;function s(e){if(!c)return;o||(o=e,n(),n());let r=e-o;for(o=e,l+=r;l>=a;)n(),l-=a;i(l/a),c&&(c=t.requestAnimationFrame(s))}function d(){t.cancelAnimationFrame(c),o=null,l=0,c=0}return{init:function(){r.add(e,"visibilitychange",()=>{e.hidden&&(o=null,l=0)})},destroy:function(){d(),r.clear()},start:function(){c||(c=t.requestAnimationFrame(s))},stop:d,update:n,render:i}}(i,r,()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:i}})=>{i||n.constrain(e.pointerDown()),t.seek()})(eP),e=>(({scrollBody:e,translate:t,location:n,offsetLocation:i,previousLocation:r,scrollLooper:a,slideLooper:o,dragHandler:l,animation:c,eventHandler:s,scrollBounds:d,options:{loop:u}},p)=>{let f=e.settled(),m=!d.shouldConstrain(),h=u?f:f&&m,g=h&&!l.pointerDown();g&&c.stop();let x=n.get()*p+r.get()*(1-p);i.set(x),u&&(a.loop(e.direction()),o.loop()),t.to(i.get()),g&&s.emit("settle"),h||s.emit("scroll")})(eP,e)),eS=eb[ew.get()],eI=v(eS),ek=v(eS),eC=v(eS),eA=v(eS),eN=function(e,t,n,i,r){let a=0,o=0,l=r,c=.68,s=e.get(),d=0;function f(e){return l=e,h}function m(e){return c=e,h}let h={direction:function(){return o},duration:function(){return l},velocity:function(){return a},seek:function(){let t=i.get()-e.get(),r=0;return l?(n.set(e),a+=t/l,a*=c,s+=a,e.add(a),r=s-d):(a=0,n.set(i),e.set(i),r=t),o=p(r),d=s,h},settled:function(){return .001>u(i.get()-t.get())},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return f(r)},useFriction:m,useDuration:f};return h}(eI,eC,ek,eA,$),eM=function(e,t,n,i,r){let{reachedAny:a,removeOffset:o,constrain:l}=i;function c(e){return e.concat().sort((e,t)=>u(e)-u(t))[0]}function s(t,i){let r=[t,t+n,t-n];if(!e)return t;if(!i)return c(r);let a=r.filter(e=>p(e)===i);return a.length?c(a):m(r)-n}return{byDistance:function(n,i){let c=r.get()+n,{index:d,distance:p}=function(n){let i=e?o(n):l(n),{index:r}=t.map((e,t)=>({diff:s(e-i,0),index:t})).sort((e,t)=>u(e.diff)-u(t.diff))[0];return{index:r,distance:i}}(c),f=!e&&a(c);if(!i||f)return{index:d,distance:n};let m=n+s(t[d]-p,0);return{index:d,distance:m}},byIndex:function(e,n){let i=s(t[e]-r.get(),n);return{index:e,distance:i}},shortcut:s}}(H,eb,eh,ey,eA),eE=function(e,t,n,i,r,a,o){function l(r){let l=r.distance,c=r.index!==t.get();a.add(l),l&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(r.index),o.emit("select"))}return{distance:function(e,t){l(r.byDistance(e,t))},index:function(e,n){let i=t.clone().set(e);l(r.byIndex(i.get(),n))}}}(ej,ew,ev,eN,eM,eA,o),eF=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ey),eT=y(),eL=(F={},T=null,L=null,O=!1,{init:function(){E=new IntersectionObserver(e=>{O||(e.forEach(e=>{F[n.indexOf(e.target)]=e}),T=null,L=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:Z}),n.forEach(e=>E.observe(e))},destroy:function(){E&&E.disconnect(),O=!0},get:function(e=!0){if(e&&T)return T;if(!e&&L)return L;let t=x(F).reduce((t,n)=>{let i=parseInt(n),{isIntersecting:r}=F[i];return(e&&r||!e&&!r)&&t.push(i),t},[]);return e&&(T=t),e||(L=t),t}}),{slideRegistry:eO}=function(e,t,n,i,r,a){let o,{groupSlides:l}=r,{min:c,max:s}=i;return{slideRegistry:(o=l(a),1===n.length?[a]:e&&"keepSnaps"!==t?o.slice(c,s).map((e,t,n)=>{let i=t===h(n);return t?i?g(h(a)-m(n)[0]+1,m(n)[0]):e:g(m(n[0])+1)}):o)}}(el,X,eb,ex,ep,e_),eD=function(e,t,n,i,r,a,o,c){let d={passive:!0,capture:!0},u=0;function p(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(f){c&&(a.add(document,"keydown",p,!1),t.forEach((t,p)=>{a.add(t,"focus",t=>{(s(c)||c(f,t))&&function(t){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;let a=n.findIndex(e=>e.includes(t));l(a)&&(r.useDuration(0),i.index(a,0),o.emit("slideFocus"))}(p)},d)}))}}}(e,n,eO,eE,eN,eT,o,J),eP={ownerDocument:i,ownerWindow:r,eventHandler:o,containerRect:et,slideRects:en,animation:ej,axis:ei,dragHandler:function(e,t,n,i,r,a,o,l,c,d,f,m,h,g,x,v,_,j){let{cross:S,direction:I}=e,k=["INPUT","SELECT","TEXTAREA"],C={passive:!1},A=y(),N=y(),M=w(50,225).constrain(g.measure(20)),E={mouse:300,touch:400},F={mouse:500,touch:600},T=x?43:25,L=!1,O=0,D=0,P=!1,B=!1,z=!1,R=!1;function V(e){if(!b(e,i)&&e.touches.length>=2)return H(e);let t=a.readPoint(e),n=a.readPoint(e,S),o=u(t-O),c=u(n-D);if(!B&&!R&&(!e.cancelable||!(B=o>c)))return H(e);let s=a.pointerMove(e);o>v&&(z=!0),d.useFriction(.3).useDuration(.75),l.start(),r.add(I(s)),e.preventDefault()}function H(e){var t;let n,i,r=f.byDistance(0,!1).index!==m.get(),o=a.pointerUp(e)*(x?F:E)[R?"mouse":"touch"],l=(t=I(o),n=m.add(-1*p(t)),i=f.byDistance(t,!x).distance,x||u(t)<M?i:_&&r?.5*i:f.byIndex(n.get(),0).distance),s=function(e,t){var n,i;if(0===e||0===t||u(e)<=u(t))return 0;let r=(n=u(e),i=u(t),u(n-i));return u(r/e)}(o,l);B=!1,P=!1,N.clear(),d.useDuration(T-10*s).useFriction(.68+s/50),c.distance(l,!x),R=!1,h.emit("pointerUp")}function $(e){z&&(e.stopPropagation(),e.preventDefault(),z=!1)}return{init:function(e){j&&A.add(t,"dragstart",e=>e.preventDefault(),C).add(t,"touchmove",()=>void 0,C).add(t,"touchend",()=>void 0).add(t,"touchstart",l).add(t,"mousedown",l).add(t,"touchcancel",H).add(t,"contextmenu",H).add(t,"click",$,!0);function l(l){(s(j)||j(e,l))&&function(e){let l,c=b(e,i);if((R=c,z=x&&c&&!e.buttons&&L,L=u(r.get()-o.get())>=2,!c||0===e.button)&&(l=e.target.nodeName||"",!k.includes(l))){let i;P=!0,a.pointerDown(e),d.useFriction(0).useDuration(0),r.set(o),i=R?n:t,N.add(i,"touchmove",V,C).add(i,"touchend",H).add(i,"mousemove",V,C).add(i,"mouseup",H),O=a.readPoint(e),D=a.readPoint(e,S),h.emit("pointerDown")}}(l)}},destroy:function(){A.clear(),N.clear()},pointerDown:function(){return P}}}(ei,e,i,r,eA,function(e,t){let n,i;function r(e){return e.timeStamp}function a(n,i){let r=i||e.scroll,a=`client${"x"===r?"X":"Y"}`;return(b(n,t)?n:n.touches[0])[a]}return{pointerDown:function(e){return n=e,i=e,a(e)},pointerMove:function(e){let t=a(e)-a(i),o=r(e)-r(n)>170;return i=e,o&&(n=e),t},pointerUp:function(e){if(!n||!i)return 0;let t=a(i)-a(n),o=r(e)-r(n),l=r(e)-r(i)>170,c=t/o;return o&&!l&&u(c)>.1?c:0},readPoint:a}}(ei,r),eI,ej,eE,eN,eM,ew,o,ea,U,q,Y,W),eventStore:eT,percentOfView:ea,index:ew,indexPrevious:ev,limit:ey,location:eI,offsetLocation:eC,previousLocation:ek,options:a,resizeHandler:function(e,t,n,i,r,a,o){let l,c,d=[e].concat(i),p=[],f=!1;function m(e){return r.measureSize(o.measure(e))}return{init:function(r){a&&(c=m(e),p=i.map(m),l=new ResizeObserver(n=>{(s(a)||a(r,n))&&function(n){for(let a of n){if(f)return;let n=a.target===e,o=i.indexOf(a.target),l=n?c:p[o];if(u(m(n?e:i[o])-l)>=.5){r.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{d.forEach(e=>l.observe(e))}))},destroy:function(){f=!0,l&&l.disconnect()}}}(t,o,r,n,ei,Q,ee),scrollBody:eN,scrollBounds:function(e,t,n,i,r){let a=r.measure(10),o=r.measure(50),l=w(.1,.99),c=!1;function s(){return!c&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:s,constrain:function(r){if(!s())return;let c=e.reachedMin(t.get())?"min":"max",d=u(e[c]-t.get()),p=n.get()-t.get(),f=l.constrain(d/o);n.subtract(p*f),!r&&u(p)<a&&(n.set(e.constrain(n.get())),i.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(ey,eC,eA,eN,ea),scrollLooper:function(e,t,n,i){let{reachedMin:r,reachedMax:a}=w(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?a(n.get()):-1===t&&r(n.get())))return;let o=-1*t*e;i.forEach(e=>e.add(o))}}}(eh,ey,eC,[eI,eC,ek,eA]),scrollProgress:eF,scrollSnapList:eb.map(eF.get),scrollSnaps:eb,scrollTarget:eM,scrollTo:eE,slideLooper:function(e,t,n,i,r,a,o,l,c){let s=f(r),d=f(r).reverse(),u=h(m(d,o[0]),n,!1).concat(h(m(s,t-o[0]-1),-n,!0));function p(e,t){return e.reduce((e,t)=>e-r[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(r,o,s){let d=a.map((e,n)=>({start:e-i[n]+.5+o,end:e+t-.5+o}));return r.map(t=>{let i=s?0:-n,r=s?n:0,a=d[t][s?"end":"start"];return{index:t,loopPoint:a,slideLocation:v(-1),translate:_(e,c[t]),target:()=>l.get()>a?i:r}})}return{canLoop:function(){return u.every(({index:e})=>.1>=p(s.filter(t=>t!==e),t))},clear:function(){u.forEach(e=>e.translate.clear())},loop:function(){u.forEach(e=>{let{target:t,translate:n,slideLocation:i}=e,r=t();r!==i.get()&&(n.to(r),i.set(r))})},loopPoints:u}}(ei,er,eh,ec,es,ef,eb,eC,n),slideFocus:eD,slidesHandler:(P=!1,{init:function(e){G&&(D=new MutationObserver(t=>{!P&&(s(G)||G(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),o.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){D&&D.disconnect(),P=!0}}),slidesInView:eL,slideIndexes:e_,slideRegistry:eO,slidesToScroll:ep,target:eA,translate:_(ei,t)};return eP}(e,k,C,N,M,n,L);return n.loop&&!i.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):i}($),P([H,...U.map(({options:e})=>e)]).forEach(e=>T.add(e,"change",Z)),$.active&&(o.translate.to(o.location.get()),o.animation.init(),o.slidesInView.init(),o.slideFocus.init(Q),o.eventHandler.init(Q),o.resizeHandler.init(Q),o.slidesHandler.init(Q),o.options.loop&&o.slideLooper.loop(),k.offsetParent&&C.length&&o.dragHandler.init(Q),I=F.init(Q,U)))}function Z(e,t){let n=X();K(),q(O({startIndex:n},e),t),L.emit("reInit")}function K(){o.dragHandler.destroy(),o.eventStore.clear(),o.translate.clear(),o.slideLooper.clear(),o.resizeHandler.destroy(),o.slidesHandler.destroy(),o.slidesInView.destroy(),o.animation.destroy(),F.destroy(),T.clear()}function Y(e,t,n){$.active&&!V&&(o.scrollBody.useBaseFriction().useDuration(!0===t?0:$.duration),o.scrollTo.index(e,n||0))}function X(){return o.index.get()}let Q={canScrollNext:function(){return o.index.add(1).get()!==X()},canScrollPrev:function(){return o.index.add(-1).get()!==X()},containerNode:function(){return k},internalEngine:function(){return o},destroy:function(){V||(V=!0,T.clear(),K(),L.emit("destroy"),L.clear())},off:z,on:B,emit:R,plugins:function(){return I},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:Z,rootNode:function(){return e},scrollNext:function(e){Y(o.index.add(1).get(),e,-1)},scrollPrev:function(e){Y(o.index.add(-1).get(),e,1)},scrollProgress:function(){return o.scrollProgress.get(o.offsetLocation.get())},scrollSnapList:function(){return o.scrollSnapList},scrollTo:Y,selectedScrollSnap:X,slideNodes:function(){return C},slidesInView:function(){return o.slidesInView.get()},slidesNotInView:function(){return o.slidesInView.get(!1)}};return q(t,n),setTimeout(()=>L.emit("init"),0),Q}function I(e={},t=[]){let n=(0,i.useRef)(e),r=(0,i.useRef)(t),[l,c]=(0,i.useState)(),[s,d]=(0,i.useState)(),u=(0,i.useCallback)(()=>{l&&l.reInit(n.current,r.current)},[l]);return(0,i.useEffect)(()=>{a(n.current,e)||(n.current=e,u())},[e,u]),(0,i.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=o(e),i=o(t);return n.every((e,t)=>a(e,i[t]))}(r.current,t)&&(r.current=t,u())},[t,u]),(0,i.useEffect)(()=>{if("u">typeof window&&window.document&&window.document.createElement&&s){S.globalOptions=I.globalOptions;let e=S(s,n.current,r.current);return c(e),()=>e.destroy()}c(void 0)},[s,c]),[d,l]}S.globalOptions=void 0,I.globalOptions=void 0;var k=e.i(71774),C=e.i(58891),A=e.i(88746);let N="Балтик Стайл",M="БС",E="Системная интеграция и инфраструктурные ИТ-решения",F="+74012 99-11-99",T="tel:+74012991199",L="info@balticstyle.ru",O=[{label:"О компании",href:"/about",targetId:"baltic-about"},{label:"Продукты, технологии, услуги",href:"/products",targetId:"baltic-directions"},{label:"Партнёры",href:"/partners",targetId:"baltic-partners"},{label:"Новости",href:"/news",targetId:"baltic-news"},{label:"Контакты",href:"/contacts",targetId:"baltic-contact"}],D="Оптимальные IT-решения",P="От разработки стратегии до реализации",B="Системная интеграция и инфраструктурные ИТ-решения",z=["Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий. Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры. Надёжный технологический партнёр бизнеса более 30 лет."],R=[{icon:"server",label:"ЦОД и серверная инфраструктура"},{icon:"network",label:"Слаботочные сети"},{icon:"shield",label:"Информационная безопасность"},{icon:"cloud",label:"Облачные сервисы"},{icon:"support",label:"Сервисная поддержка"}],V=[{icon:"server",label:"30 лет в отрасли"},{icon:"support",label:"Опытный ИТ-персонал"},{icon:"cloud",label:"Оптимальные ИТ-решения"}],H=[{icon:"server",title:"Проектирование",description:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"network",title:"Интеграция и строительство",description:"Монтаж, пуско-наладка и ввод систем в эксплуатацию."},{icon:"shield",title:"ИТ-аудит",description:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"cloud",title:"Поставки и сервис",description:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"support",title:"ИТ-аутсорсинг",description:"Профессиональное сопровождение сложных ИТ-решений."}],$="Свяжитесь с нами удобным способом",U="Заполните форму и мы перезвоним",q="© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.",Z="Юридический адрес 236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",K="Телефоны +74012 99-11-99; +74012 99-11-98",Y="Реквизиты ИНН 3905017052, КПП 390601001, ОГРН 1023900773555",X="Еmail: info@balticstyle.ru";e.i(28883);var Q=e.i(24816);let G=0;function W(e){let t=document.getElementById(e);t&&function(e,t={}){if(cancelAnimationFrame(G),window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,e),t.hash&&window.history.pushState(null,"",t.hash);return}let n=t.duration??500,i=window.scrollY,r=e-i,a=performance.now();G=requestAnimationFrame(function e(o){let l=Math.min((o-a)/n,1);window.scrollTo(0,i+r*l),l<1?G=requestAnimationFrame(e):t.hash&&window.history.pushState(null,"",t.hash)})}(Math.max(0,window.scrollY+t.getBoundingClientRect().top))}let J="light",ee={light:"Дневная",dark:"Ночная"},et="baltic-style-theme",en=new Set;function ei(e){document.documentElement.dataset.theme=e}function er(){let e=window.localStorage.getItem(et);return"light"===e||"dark"===e?e:J}function ea(e){return en.add(e),()=>{en.delete(e)}}function eo(){let e,r,a,o,l,c,s,d,u=(0,n.c)(16),p=(0,i.useSyncExternalStore)(ea,er,el);u[0]!==p?(e="light"===p?"dark":"light",u[0]=p,u[1]=e):e=u[1];let f=e;u[2]!==p?(r=()=>{ei(p)},a=[p],u[2]=p,u[3]=r,u[4]=a):(r=u[3],a=u[4]),(0,i.useEffect)(r,a),u[5]!==f?(o=()=>{ei(f),window.localStorage.setItem(et,f),en.forEach(e=>e())},u[5]=f,u[6]=o):o=u[6];let m=o,h=ee[f];u[7]!==h?(l=h.toLowerCase(),u[7]=h,u[8]=l):l=u[8];let g=`Переключить тему на ${l}`;u[9]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(es,{"aria-hidden":"true"}),u[9]=c):c=u[9];let x=ee[f];return u[10]!==x?(s=(0,t.jsxs)("span",{children:[x," тема"]}),u[10]=x,u[11]=s):s=u[11],u[12]!==m||u[13]!==g||u[14]!==s?(d=(0,t.jsxs)(ec,{type:"button",onClick:m,"aria-label":g,children:[c,s]}),u[12]=m,u[13]=g,u[14]=s,u[15]=d):d=u[15],d}function el(){return J}let ec=A.default.button.withConfig({displayName:"theme-toggle-button__ToggleButton",componentId:"sc-3bef75ca-0"})`
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
`,es=A.default.i.withConfig({displayName:"theme-toggle-button__Swatch",componentId:"sc-3bef75ca-1"})`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border: 2px solid var(--control-border);
  border-radius: 50%;
  background: var(--accent);
`;e.i(84068);var ed=e.i(36762);let eu={src:e.i(85028).default,width:865,height:575,blurWidth:8,blurHeight:5,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAfUlEQVR42h2M2wrCMBBE+6CV3SbkRkK0GkG0oL/g/39WOt3Nw8Bw5jATL7b7mGGdQ7vnEe3WJ5xm3qeZQyebYFNDWbcR7crOFEQwtXN8IbQ/Yt0Q6md0ZbKpcO0U3zD5C3I3cHjAlB+UyaZC6eQb2FVc2Mh1xOJXkH+KUPYDd7YwmDq18zoAAAAASUVORK5CYII="},ep={phone:(0,t.jsx)("path",{d:"M18.9 15.7c-1.1 0-2.2-.2-3.2-.6-.5-.2-1-.1-1.4.3l-1.5 1.9c-2.8-1.4-5.2-3.8-6.7-6.7L8 9.1c.4-.4.5-.9.3-1.4-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H3.7c-.8 0-1.7.4-1.7 1.5C2 13.7 9.3 21 18.5 21c1.1 0 1.5-.9 1.5-1.7v-2.1c0-.8-.3-1.5-1.1-1.5Z"}),server:(0,t.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v3A2.5 2.5 0 0 1 17.5 11h-11A2.5 2.5 0 0 1 4 8.5v-3Zm0 10A2.5 2.5 0 0 1 6.5 13h11a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01M10 7h7M10 17h7"}),network:(0,t.jsx)("path",{d:"M12 4v5m0 0H7m5 0h5M7 9v4m10-4v4M5 13h4v7H5v-7Zm10 0h4v7h-4v-7Zm-5-9h4v5h-4V4Z"}),shield:(0,t.jsx)("path",{d:"M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5"}),cloud:(0,t.jsx)("path",{d:"M7.5 18h9.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 5.6 11 3.5 3.5 0 0 0 7.5 18Z"}),support:(0,t.jsx)("path",{d:"M4 12a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-2v-6h5M4 15a3 3 0 0 0 3 3h2v-6H4v3Zm8 5h3"})};function ef(e){let i,r=(0,n.c)(2),{name:a}=e,o=ep[a];return r[0]!==o?(i=(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:o}),r[0]=o,r[1]=i):i=r[1],i}let em="main-content",eh=["/",...O.map(({href:e})=>e)];function eg(){W(em)}function ex(e){return(0,t.jsxs)(eX,{children:[(0,t.jsx)(ed.SmallIconBox,{children:(0,t.jsx)(ef,{name:e.icon})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("b",{children:e.title}),(0,t.jsx)("p",{children:e.description})]})]},e.title)}function eb(e){return(0,t.jsxs)(eZ,{children:[(0,t.jsx)(ed.IconBox,{children:(0,t.jsx)(ef,{name:e.icon})}),(0,t.jsx)("b",{children:e.label})]},e.label)}function ey(e,n){return R.map(e=>(0,t.jsxs)(e$,{children:[(0,t.jsx)(ed.IconBox,{children:(0,t.jsx)(ef,{name:e.icon})}),(0,t.jsx)("span",{children:e.label})]},`${n}-${e.label}`))}function ew(e){return(0,t.jsx)("p",{children:e},e)}let ev=(0,A.default)(ed.Shell).withConfig({displayName:"baltic-style-landing__ContentRow",componentId:"sc-50a68381-0"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,e_=A.default.main.withConfig({displayName:"baltic-style-landing__MainContent",componentId:"sc-50a68381-1"})`
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
`,ej=A.default.header.withConfig({displayName:"baltic-style-landing__TopBar",componentId:"sc-50a68381-2"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 228px;
  padding: 28px 0;
`,eS=(0,A.default)(k.default).withConfig({displayName:"baltic-style-landing__CompanyBlock",componentId:"sc-50a68381-3"})`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
  border-radius: 28px;
  color: inherit;
  text-decoration: none;
`,eI=A.default.div.withConfig({displayName:"baltic-style-landing__Logo",componentId:"sc-50a68381-4"})`
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
`,ek=A.default.div.withConfig({displayName:"baltic-style-landing__CompanyText",componentId:"sc-50a68381-5"})`
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
`,eC=(0,A.default)(ed.RaisedAnchor).withConfig({displayName:"baltic-style-landing__PhoneLink",componentId:"sc-50a68381-6"})`
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
`,eA=A.default.nav.withConfig({displayName:"baltic-style-landing__NavSection",componentId:"sc-50a68381-7"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 76px;
  background: var(--nav-glass);
`,eN=(0,A.default)(ed.Shell).withConfig({displayName:"baltic-style-landing__NavList",componentId:"sc-50a68381-8"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`,eM=(0,A.default)(k.default).withConfig({displayName:"baltic-style-landing__NavLink",componentId:"sc-50a68381-9"})`
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
`,eE=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__PromoSection",componentId:"sc-50a68381-10"})`
  min-height: 324px;
  background: var(--dark-section);
`,eF=(0,A.default)(ed.Shell).withConfig({displayName:"baltic-style-landing__PromoInner",componentId:"sc-50a68381-11"})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 32px;
  align-items: stretch;
  padding: 28px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eT=A.default.div.withConfig({displayName:"baltic-style-landing__PromoCopy",componentId:"sc-50a68381-12"})`
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
`,eL=A.default.div.withConfig({displayName:"baltic-style-landing__PhotoPlaceholder",componentId:"sc-50a68381-13"})`
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
`,eO=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__AboutSection",componentId:"sc-50a68381-14"})`
  min-height: 324px;
  padding: 42px 0;
`,eD=A.default.div.withConfig({displayName:"baltic-style-landing__AboutText",componentId:"sc-50a68381-15"})`
  display: grid;
  gap: 14px;
  max-width: 940px;

  p {
    color: var(--text-soft);
    font-size: 18px;
    line-height: 1.62;
  }
`,eP=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__ProjectsSection",componentId:"sc-50a68381-16"})`
  min-height: 324px;
  padding: 34px 0;
  background:
    linear-gradient(90deg, var(--glass-strong), var(--glass-soft)),
    var(--glass-medium);
`,eB=A.default.span.withConfig({displayName:"baltic-style-landing__AnchorTarget",componentId:"sc-50a68381-17"})`
  position: absolute;
  top: 0;
`,ez=A.default.div.withConfig({displayName:"baltic-style-landing__SectionHeadRow",componentId:"sc-50a68381-18"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,eR=A.default.div.withConfig({displayName:"baltic-style-landing__ProjectSlider",componentId:"sc-50a68381-19"})`
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
`,e$=A.default.article.withConfig({displayName:"baltic-style-landing__ProjectSlide",componentId:"sc-50a68381-22"})`
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
`,eU=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__AdvantagesSection",componentId:"sc-50a68381-23"})`
  min-height: 162px;
  padding: 26px 0;
`,eq=(0,A.default)(ed.Shell).withConfig({displayName:"baltic-style-landing__AdvantagesGrid",componentId:"sc-50a68381-24"})`
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
`,eK=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__DirectionsSection",componentId:"sc-50a68381-26"})`
  min-height: 162px;
  padding: 28px 0;
  background: var(--glass-soft);
`,eY=A.default.div.withConfig({displayName:"baltic-style-landing__DirectionsList",componentId:"sc-50a68381-27"})`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,eX=A.default.article.withConfig({displayName:"baltic-style-landing__DirectionItem",componentId:"sc-50a68381-28"})`
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
`,eQ=(0,A.default)(ed.BaseSection).withConfig({displayName:"baltic-style-landing__ContactSection",componentId:"sc-50a68381-29"})`
  min-height: 486px;
  padding: 44px 0;
`,eG=(0,A.default)(ed.Shell).withConfig({displayName:"baltic-style-landing__ContactGrid",componentId:"sc-50a68381-30"})`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,eW=A.default.div.withConfig({displayName:"baltic-style-landing__ContactCopy",componentId:"sc-50a68381-31"})`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent-strong);
    font-size: 20px;
    font-weight: 800;
  }
`,eJ=A.default.footer.withConfig({displayName:"baltic-style-landing__Footer",componentId:"sc-50a68381-32"})`
  padding: 34px 0;
  color: var(--on-dark-muted);
  background: var(--dark-section);
`,e0=A.default.div.withConfig({displayName:"baltic-style-landing__FooterInner",componentId:"sc-50a68381-33"})`
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
`,e1=A.default.div.withConfig({displayName:"baltic-style-landing__FooterContent",componentId:"sc-50a68381-34"})`
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
`,e2=A.default.div.withConfig({displayName:"baltic-style-landing__ThemeSlot",componentId:"sc-50a68381-35"})`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`,e5=A.default.img.withConfig({displayName:"baltic-style-landing__Image",componentId:"sc-50a68381-36"})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;e.s(["BalticStyleLanding",0,function(){let e,r,a,o,l,c,s,d,u,p,f,m,h,g,x,b,y,w,v,_,j,S,k,C,A,N,M,E=(0,n.c)(30);E[0]===Symbol.for("react.memo_cache_sentinel")?(e={align:"start",dragFree:!0,loop:!0,skipSnaps:!0,slidesToScroll:1},E[0]=e):e=E[0];let[F,T]=I(e),L=(0,i.useRef)("next"),O=(0,i.useRef)(!1),R=(0,i.useRef)(null),q=(0,i.useRef)(0),Z=(0,i.useRef)(!1);E[1]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{R.current&&(clearTimeout(R.current),R.current=null)},E[1]=r):r=E[1];let K=r;E[2]===Symbol.for("react.memo_cache_sentinel")?(a=()=>{K(),O.current=!0},E[2]=a):a=E[2];let Y=a;E[3]===Symbol.for("react.memo_cache_sentinel")?(o=e=>{K(),R.current=setTimeout(()=>{O.current=!1,R.current=null},void 0===e?700:e)},E[3]=o):o=E[3];let X=o;E[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>K,c=[K],E[4]=l,E[5]=c):(l=E[4],c=E[5]),(0,i.useEffect)(l,c),E[6]!==T?(s=()=>{if(!T)return;let e=0,t=0,n=i=>{let r=t?Math.min(i-t,48):0;if(t=i,O.current){e=window.requestAnimationFrame(n);return}let a=T.internalEngine(),o="next"===L.current?-1:1;a.location.add(.045*o*r),a.target.set(a.location),a.previousLocation.set(a.location),a.offsetLocation.set(a.location),a.scrollLooper.loop(o),a.slideLooper.loop(),a.translate.to(a.location.get()),T.emit("scroll"),e=window.requestAnimationFrame(n)};return e=window.requestAnimationFrame(n),()=>window.cancelAnimationFrame(e)},d=[T],E[6]=T,E[7]=s,E[8]=d):(s=E[7],d=E[8]),(0,i.useEffect)(s,d),E[9]===Symbol.for("react.memo_cache_sentinel")?(u=e=>{("mouse"!==e.pointerType||0===e.button)&&(Y(),Z.current=!0,q.current=e.clientX)},E[9]=u):u=E[9];let G=u;E[10]===Symbol.for("react.memo_cache_sentinel")?(p=e=>{if(!Z.current)return;let t=e.clientX-q.current;Math.abs(t)>.5&&(L.current=t>0?"prev":"next",q.current=e.clientX)},E[10]=p):p=E[10];let W=p;E[11]===Symbol.for("react.memo_cache_sentinel")?(f=()=>{Z.current=!1,X()},E[11]=f):f=E[11];let J=f;E[12]===Symbol.for("react.memo_cache_sentinel")?(m=e=>{1>Math.abs(e.deltaX)||(L.current=e.deltaX>0?"next":"prev",Y(),X())},E[12]=m):m=E[12];let ee=m;return E[13]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsxs)(eT,{children:[(0,t.jsx)("h2",{children:D}),(0,t.jsx)("p",{children:P})]}),E[13]=h):h=E[13],E[14]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)(eE,{children:(0,t.jsxs)(eF,{children:[h,(0,t.jsx)(eL,{role:"img","aria-label":"Заглушка фотографии IT-инфраструктуры",children:(0,t.jsx)(e5,{src:eu.src,alt:"Патч-корды и сетевая инфраструктура"})})]})}),E[14]=g):g=E[14],E[15]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsx)(ed.SectionTitle,{id:"baltic-about-title",children:B}),E[15]=x):x=E[15],E[16]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)(eO,{id:"baltic-about","aria-labelledby":"baltic-about-title",children:(0,t.jsxs)(ed.NarrowContent,{children:[x,(0,t.jsx)(eD,{children:z.map(ew)})]})}),E[16]=b):b=E[16],E[17]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsx)(eB,{id:"baltic-partners","aria-hidden":"true"}),w=(0,t.jsx)(eB,{id:"baltic-news","aria-hidden":"true"}),E[17]=y,E[18]=w):(y=E[17],w=E[18]),E[19]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsx)(ez,{children:(0,t.jsx)(ed.SectionTitle,{id:"baltic-projects-title",children:"Реализованные проекты"})}),E[19]=v):v=E[19],E[20]===Symbol.for("react.memo_cache_sentinel")?(_=()=>X(),E[20]=_):_=E[20],E[21]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)(eH,{children:Array.from({length:3},ey)}),E[21]=j):j=E[21],E[22]!==F?(S=(0,t.jsxs)(eP,{id:"baltic-projects","aria-labelledby":"baltic-projects-title",children:[y,w,(0,t.jsxs)(ed.ContentColumn,{children:[v,(0,t.jsx)(eR,{children:(0,t.jsx)(eV,{ref:F,tabIndex:0,"aria-label":"Слайдер реализованных проектов",onBlur:_,onFocus:Y,onPointerCancel:J,onPointerDown:G,onPointerMove:W,onPointerUp:J,onWheel:ee,children:j})})]})]}),E[22]=F,E[23]=S):S=E[23],E[24]===Symbol.for("react.memo_cache_sentinel")?(k=(0,t.jsx)(eU,{"aria-label":"Преимущества Балтик Стайл",children:(0,t.jsx)(eq,{children:V.map(eb)})}),E[24]=k):k=E[24],E[25]===Symbol.for("react.memo_cache_sentinel")?(C=(0,t.jsx)(ed.SectionTitle,{id:"baltic-directions-title",children:"Ключевые направления"}),E[25]=C):C=E[25],E[26]===Symbol.for("react.memo_cache_sentinel")?(A=(0,t.jsx)(eK,{id:"baltic-directions","aria-labelledby":"baltic-directions-title",children:(0,t.jsxs)(ed.ContentColumn,{children:[C,(0,t.jsx)(eY,{children:H.map(ex)})]})}),E[26]=A):A=E[26],E[27]===Symbol.for("react.memo_cache_sentinel")?(N=(0,t.jsx)(eQ,{id:"baltic-contact","aria-labelledby":"baltic-contact-title",children:(0,t.jsxs)(eG,{children:[(0,t.jsxs)(eW,{children:[(0,t.jsx)(ed.SectionTitle,{id:"baltic-contact-title",children:$}),(0,t.jsx)("p",{children:U})]}),(0,t.jsx)(Q.ContactRequestForm,{})]})}),E[27]=N):N=E[27],E[28]!==S?(M=(0,t.jsxs)(t.Fragment,{children:[g,b,S,k,A,N]}),E[28]=S,E[29]=M):M=E[29],M},"BalticStyleShell",0,function(e){let r,a,o,l,c,s,d,u,p,f,m,h,g,x,b,y,w,v,_=(0,n.c)(33),{children:j}=e,S=(0,C.useRouter)(),I=(0,C.usePathname)();_[0]!==I?(r=I.replace(/\/$/,"")||"/",_[0]=I,_[1]=r):r=_[1];let k=r,[,A]=(0,i.useTransition)(),[D,P]=(0,i.useOptimistic)(k),B=(0,i.useRef)(!1);_[2]!==P||_[3]!==A?(a=(e,t,n)=>{e.defaultPrevented||0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||(document.title=N,A(()=>{P(t)}),void 0!==n&&n&&window.innerWidth<500&&(B.current=!0,W(em)))},_[2]=P,_[3]=A,_[4]=a):a=_[4];let z=a;return _[5]===Symbol.for("react.memo_cache_sentinel")?(o=()=>{document.title=N,B.current&&(B.current=!1,requestAnimationFrame(eg))},_[5]=o):o=_[5],_[6]!==k?(l=[k],_[6]=k,_[7]=l):l=_[7],(0,i.useEffect)(o,l),_[8]!==S?(c=()=>{eh.forEach(e=>{S.prefetch(e)})},s=[S],_[8]=S,_[9]=c,_[10]=s):(c=_[9],s=_[10]),(0,i.useEffect)(c,s),_[11]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsx)(e2,{children:(0,t.jsx)(eo,{})}),_[11]=d):d=_[11],_[12]!==z?(u=e=>z(e,"/"),_[12]=z,_[13]=u):u=_[13],_[14]===Symbol.for("react.memo_cache_sentinel")?(p=(0,t.jsx)(eI,{"aria-hidden":"true",children:M}),_[14]=p):p=_[14],_[15]===Symbol.for("react.memo_cache_sentinel")?(f=(0,t.jsxs)(ek,{children:[(0,t.jsx)("h1",{id:"company-title",children:N}),(0,t.jsx)("p",{children:E})]}),_[15]=f):f=_[15],_[16]!==u?(m=(0,t.jsxs)(eS,{href:"/",prefetch:!0,"aria-label":`${N}: на главную`,onClick:u,children:[p,f]}),_[16]=u,_[17]=m):m=_[17],_[18]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsxs)(eC,{href:T,"aria-label":F,children:[(0,t.jsx)(ef,{name:"phone"}),(0,t.jsx)("span",{children:F})]}),_[18]=h):h=_[18],_[19]!==m?(g=(0,t.jsx)(ej,{"aria-labelledby":"company-title",children:(0,t.jsxs)(ev,{children:[d,m,h]})}),_[19]=m,_[20]=g):g=_[20],_[21]!==D||_[22]!==z?(x=O.map(e=>{let n=D===e.href;return(0,t.jsx)(eM,{href:e.href,prefetch:!0,$active:n,"aria-current":n?"page":void 0,onClick:t=>z(t,e.href,!0),children:e.label},e.href)}),_[21]=D,_[22]=z,_[23]=x):x=_[23],_[24]!==x?(b=(0,t.jsx)(eA,{"aria-label":"Основная навигация",children:(0,t.jsx)(eN,{children:x})}),_[24]=x,_[25]=b):b=_[25],_[26]!==j?(y=(0,t.jsx)(e_,{id:em,children:j}),_[26]=j,_[27]=y):y=_[27],_[28]===Symbol.for("react.memo_cache_sentinel")?(w=(0,t.jsx)(eJ,{children:(0,t.jsx)(e0,{children:(0,t.jsxs)(e1,{children:[(0,t.jsx)("b",{children:N}),(0,t.jsx)("p",{children:q}),(0,t.jsx)("p",{children:Z}),(0,t.jsx)("p",{children:K}),(0,t.jsx)("p",{children:Y}),(0,t.jsx)("a",{href:`mailto:${L}`,children:X})]})})}),_[28]=w):w=_[28],_[29]!==g||_[30]!==b||_[31]!==y?(v=(0,t.jsxs)(t.Fragment,{children:[g,b,y,w]}),_[29]=g,_[30]=b,_[31]=y,_[32]=v):v=_[32],v}],36690)}]);