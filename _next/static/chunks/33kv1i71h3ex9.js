(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,53153,e=>{"use strict";var t=e.i(35337),n=e.i(4699),i=e.i(88746),a=e.i(52940);function r(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let n=Object.keys(e),i=Object.keys(t);return n.length===i.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let i=e[n],a=t[n];return"function"==typeof i?`${i}`==`${a}`:r(i)&&r(a)?o(i,a):i===a})}function l(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function c(e){return"number"==typeof e}function s(e){return"string"==typeof e}function d(e){return"boolean"==typeof e}function u(e){return"[object Object]"===Object.prototype.toString.call(e)}function p(e){return Math.abs(e)}function m(e){return Math.sign(e)}function f(e){return b(e).map(Number)}function h(e){return e[x(e)]}function x(e){return Math.max(0,e.length-1)}function g(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function b(e){return Object.keys(e)}function y(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function w(){let e=[],t={add:function(n,i,a,r={passive:!0}){let o;return"addEventListener"in n?(n.addEventListener(i,a,r),o=()=>n.removeEventListener(i,a,r)):(n.addListener(a),o=()=>n.removeListener(a)),e.push(o),t},clear:function(){e=e.filter(e=>e())}};return t}function v(e=0,t=0){let n=p(e-t);function i(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return i(n)?n<e?e:t:n},reachedAny:i,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function _(e){let t=e;function n(e){return c(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function j(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},i=t.style,a=null,r=!1;return{clear:function(){!r&&(i.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){if(r)return;let o=Math.round(100*e.direction(t))/100;o!==a&&(i.transform=n(o),a=o)},toggleActive:function(e){r=!e}}}let S={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function I(e,t,n){let i,a,r,o,l,C,k,N,A=e.ownerDocument,M=A.defaultView,E=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(b(n).forEach(i=>{let a=t[i],r=n[i],o=u(a)&&u(r);t[i]=o?e(a,r):r}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let i=n.breakpoints||{},a=b(i).filter(t=>e.matchMedia(t).matches).map(e=>i[e]).reduce((e,n)=>t(e,n),{});return t(n,a)},optionsMediaQueries:function(t){return t.map(e=>b(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(M),L=(N=[],{init:function(e,t){return(N=t.filter(({options:e})=>!1!==E.optionsAtMedia(e).active)).forEach(t=>t.init(e,E)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){N=N.filter(e=>e.destroy())}}),F=w(),T=(a={},r={init:function(e){i=e},emit:function(e){return(a[e]||[]).forEach(t=>t(i,e)),r},off:function(e,t){return a[e]=(a[e]||[]).filter(e=>e!==t),r},on:function(e,t){return a[e]=(a[e]||[]).concat([t]),r},clear:function(){a={}}}),{mergeOptions:P,optionsAtMedia:D,optionsMediaQueries:z}=E,{on:B,off:O,emit:R}=T,H=!1,U=P(S,I.globalOptions),V=P(U),q=[];function Y(t,n){H||(V=D(U=P(U,t)),q=n||q,function(){let{container:t,slides:n}=V;C=(s(t)?e.querySelector(t):t)||e.children[0];let i=s(n)?C.querySelectorAll(n):n;k=[].slice.call(i||C.children)}(),o=function t(n){let i=function(e,t,n,i,a,r,o){var l,u;let S,I,C,k,N,A,M,E,L,F,T,P,D,z,{align:B,axis:O,direction:R,startIndex:H,loop:U,duration:V,dragFree:q,dragThreshold:Y,inViewThreshold:$,slidesToScroll:Z,skipSnaps:X,containScroll:K,watchResize:G,watchSlides:Q,watchDrag:J,watchFocus:W}=r,ee={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:a}=e;return{top:t,right:n+i,bottom:t+a,left:n,width:i,height:a}}},et=ee.measure(t),en=n.map(ee.measure),ei=(I="rtl"===R,k=(C="y"===O)||!I?1:-1,N=C?"top":I?"right":"left",A=C?"bottom":I?"left":"right",{scroll:C?"y":"x",cross:C?"x":"y",startEdge:N,endEdge:A,measureSize:function(e){let{height:t,width:n}=e;return C?t:n},direction:function(e){return e*k}}),ea=ei.measureSize(et),er={measure:function(e){return e/100*ea}},eo=(l=B,u=ea,S={start:function(){return 0},center:function(e){return(u-e)/2},end:function(e){return u-e}},{measure:function(e,t){return s(l)?S[l](e):l(u,e,t)}}),el=!U&&!!K,{slideSizes:ec,slideSizesWithGaps:es,startGap:ed,endGap:eu}=function(e,t,n,i,a,r){let{measureSize:o,startEdge:l,endEdge:c}=e,s=n[0]&&a,d=function(){if(!s)return 0;let e=n[0];return p(t[l]-e[l])}(),u=s?parseFloat(r.getComputedStyle(h(i)).getPropertyValue(`margin-${c}`)):0,m=n.map(o),f=n.map((e,t,n)=>{let i=t===x(n);return t?i?m[t]+u:n[t+1][l]-e[l]:m[t]+d}).map(p);return{slideSizes:m,slideSizesWithGaps:f,startGap:d,endGap:u}}(ei,et,en,n,U||!!K,a),ep=function(e,t,n,i,a,r,o,l){let{startEdge:s,endEdge:d,direction:u}=e,m=c(n);return{groupSlides:function(e){return m?f(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?f(e).reduce((n,c,m)=>{let f=h(n)||0,g=c===x(e),b=a[s]-r[f][s],y=a[s]-r[c][d],w=i||0!==f?0:u(o),v=p(y-(!i&&g?u(l):0)-(b+w));return m&&v>t+2&&n.push(c),g&&n.push(e.length),n},[]).map((t,n,i)=>{let a=Math.max(i[n-1]||0);return e.slice(a,t)}):[]}}}(ei,ea,Z,U,et,en,ed,eu),{snaps:em,snapsAligned:ef}=function(e,t,n,i,a){let{startEdge:r,endEdge:o}=e,{groupSlides:l}=a,c=l(i).map(e=>h(e)[o]-e[0][r]).map(p).map(t.measure),s=i.map(e=>n[r]-e[r]).map(e=>-p(e)),d=l(s).map(e=>e[0]).map((e,t)=>e+c[t]);return{snaps:s,snapsAligned:d}}(ei,eo,et,en,ep),eh=-h(em)+h(es),{snapsContained:ex,scrollContainLimit:eg}=function(e,t,n,i){let a,r,o=v(-t+e,0),l=n.map((e,t)=>{let{min:i,max:a}=o,r=o.constrain(e),l=t===x(n);return t?l||function(e,t){return 1>=p(e-t)}(i,r)?i:function(e,t){return 1>=p(e-t)}(a,r)?a:r:a}).map(e=>parseFloat(e.toFixed(3))),c=(a=l[0],r=h(l),v(l.lastIndexOf(a),l.indexOf(r)+1));return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===i)return l;let{min:n,max:a}=c;return l.slice(n,a)}(),scrollContainLimit:c}}(ea,eh,ef,K),eb=el?ex:ef,{limit:ey}=(M=eb[0],{limit:v(U?M-eh:h(eb),M)}),ew=function e(t,n,i){let{constrain:a}=v(0,t),r=t+1,o=l(n);function l(e){return i?p((r+e)%r):a(e)}function c(){return e(t,o,i)}let s={get:function(){return o},set:function(e){return o=l(e),s},add:function(e){return c().set(o+e)},clone:c};return s}(x(eb),H,U),ev=ew.clone(),e_=f(n),ej=function(e,t,n,i){let a=w(),r=1e3/60,o=null,l=0,c=0;function s(e){if(!c)return;o||(o=e,n(),n());let a=e-o;for(o=e,l+=a;l>=r;)n(),l-=r;i(l/r),c&&(c=t.requestAnimationFrame(s))}function d(){t.cancelAnimationFrame(c),o=null,l=0,c=0}return{init:function(){a.add(e,"visibilitychange",()=>{e.hidden&&(o=null,l=0)})},destroy:function(){d(),a.clear()},start:function(){c||(c=t.requestAnimationFrame(s))},stop:d,update:n,render:i}}(i,a,()=>(({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:i}})=>{i||n.constrain(e.pointerDown()),t.seek()})(ez),e=>(({scrollBody:e,translate:t,location:n,offsetLocation:i,previousLocation:a,scrollLooper:r,slideLooper:o,dragHandler:l,animation:c,eventHandler:s,scrollBounds:d,options:{loop:u}},p)=>{let m=e.settled(),f=!d.shouldConstrain(),h=u?m:m&&f,x=h&&!l.pointerDown();x&&c.stop();let g=n.get()*p+a.get()*(1-p);i.set(g),u&&(r.loop(e.direction()),o.loop()),t.to(i.get()),x&&s.emit("settle"),h||s.emit("scroll")})(ez,e)),eS=eb[ew.get()],eI=_(eS),eC=_(eS),ek=_(eS),eN=_(eS),eA=function(e,t,n,i,a){let r=0,o=0,l=a,c=.68,s=e.get(),d=0;function u(e){return l=e,h}function f(e){return c=e,h}let h={direction:function(){return o},duration:function(){return l},velocity:function(){return r},seek:function(){let t=i.get()-e.get(),a=0;return l?(n.set(e),r+=t/l,r*=c,s+=r,e.add(r),a=s-d):(r=0,n.set(i),e.set(i),a=t),o=m(a),d=s,h},settled:function(){return .001>p(i.get()-t.get())},useBaseFriction:function(){return f(.68)},useBaseDuration:function(){return u(a)},useFriction:f,useDuration:u};return h}(eI,ek,eC,eN,V),eM=function(e,t,n,i,a){let{reachedAny:r,removeOffset:o,constrain:l}=i;function c(e){return e.concat().sort((e,t)=>p(e)-p(t))[0]}function s(t,i){let a=[t,t+n,t-n];if(!e)return t;if(!i)return c(a);let r=a.filter(e=>m(e)===i);return r.length?c(r):h(a)-n}return{byDistance:function(n,i){let c=a.get()+n,{index:d,distance:u}=function(n){let i=e?o(n):l(n),{index:a}=t.map((e,t)=>({diff:s(e-i,0),index:t})).sort((e,t)=>p(e.diff)-p(t.diff))[0];return{index:a,distance:i}}(c),m=!e&&r(c);if(!i||m)return{index:d,distance:n};let f=n+s(t[d]-u,0);return{index:d,distance:f}},byIndex:function(e,n){let i=s(t[e]-a.get(),n);return{index:e,distance:i}},shortcut:s}}(U,eb,eh,ey,eN),eE=function(e,t,n,i,a,r,o){function l(a){let l=a.distance,c=a.index!==t.get();r.add(l),l&&(i.duration()?e.start():(e.update(),e.render(1),e.update())),c&&(n.set(t.get()),t.set(a.index),o.emit("select"))}return{distance:function(e,t){l(a.byDistance(e,t))},index:function(e,n){let i=t.clone().set(e);l(a.byIndex(i.get(),n))}}}(ej,ew,ev,eA,eM,eN,o),eL=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(ey),eF=w(),eT=(L={},F=null,T=null,P=!1,{init:function(){E=new IntersectionObserver(e=>{P||(e.forEach(e=>{L[n.indexOf(e.target)]=e}),F=null,T=null,o.emit("slidesInView"))},{root:t.parentElement,threshold:$}),n.forEach(e=>E.observe(e))},destroy:function(){E&&E.disconnect(),P=!0},get:function(e=!0){if(e&&F)return F;if(!e&&T)return T;let t=b(L).reduce((t,n)=>{let i=parseInt(n),{isIntersecting:a}=L[i];return(e&&a||!e&&!a)&&t.push(i),t},[]);return e&&(F=t),e||(T=t),t}}),{slideRegistry:eP}=function(e,t,n,i,a,r){let o,{groupSlides:l}=a,{min:c,max:s}=i;return{slideRegistry:(o=l(r),1===n.length?[r]:e&&"keepSnaps"!==t?o.slice(c,s).map((e,t,n)=>{let i=t===x(n);return t?i?g(x(r)-h(n)[0]+1,h(n)[0]):e:g(h(n[0])+1)}):o)}}(el,K,eb,eg,ep,e_),eD=function(e,t,n,i,a,r,o,l){let s={passive:!0,capture:!0},u=0;function p(e){"Tab"===e.code&&(u=new Date().getTime())}return{init:function(m){l&&(r.add(document,"keydown",p,!1),t.forEach((t,p)=>{r.add(t,"focus",t=>{(d(l)||l(m,t))&&function(t){if(new Date().getTime()-u>10)return;o.emit("slideFocusStart"),e.scrollLeft=0;let r=n.findIndex(e=>e.includes(t));c(r)&&(a.useDuration(0),i.index(r,0),o.emit("slideFocus"))}(p)},s)}))}}}(e,n,eP,eE,eA,eF,o,W),ez={ownerDocument:i,ownerWindow:a,eventHandler:o,containerRect:et,slideRects:en,animation:ej,axis:ei,dragHandler:function(e,t,n,i,a,r,o,l,c,s,u,f,h,x,g,b,_,j){let{cross:S,direction:I}=e,C=["INPUT","SELECT","TEXTAREA"],k={passive:!1},N=w(),A=w(),M=v(50,225).constrain(x.measure(20)),E={mouse:300,touch:400},L={mouse:500,touch:600},F=g?43:25,T=!1,P=0,D=0,z=!1,B=!1,O=!1,R=!1;function H(e){if(!y(e,i)&&e.touches.length>=2)return U(e);let t=r.readPoint(e),n=r.readPoint(e,S),o=p(t-P),c=p(n-D);if(!B&&!R&&(!e.cancelable||!(B=o>c)))return U(e);let d=r.pointerMove(e);o>b&&(O=!0),s.useFriction(.3).useDuration(.75),l.start(),a.add(I(d)),e.preventDefault()}function U(e){var t;let n,i,a=u.byDistance(0,!1).index!==f.get(),o=r.pointerUp(e)*(g?L:E)[R?"mouse":"touch"],l=(t=I(o),n=f.add(-1*m(t)),i=u.byDistance(t,!g).distance,g||p(t)<M?i:_&&a?.5*i:u.byIndex(n.get(),0).distance),d=function(e,t){var n,i;if(0===e||0===t||p(e)<=p(t))return 0;let a=(n=p(e),i=p(t),p(n-i));return p(a/e)}(o,l);B=!1,z=!1,A.clear(),s.useDuration(F-10*d).useFriction(.68+d/50),c.distance(l,!g),R=!1,h.emit("pointerUp")}function V(e){O&&(e.stopPropagation(),e.preventDefault(),O=!1)}return{init:function(e){j&&N.add(t,"dragstart",e=>e.preventDefault(),k).add(t,"touchmove",()=>void 0,k).add(t,"touchend",()=>void 0).add(t,"touchstart",l).add(t,"mousedown",l).add(t,"touchcancel",U).add(t,"contextmenu",U).add(t,"click",V,!0);function l(l){(d(j)||j(e,l))&&function(e){let l,c=y(e,i);if((R=c,O=g&&c&&!e.buttons&&T,T=p(a.get()-o.get())>=2,!c||0===e.button)&&(l=e.target.nodeName||"",!C.includes(l))){let i;z=!0,r.pointerDown(e),s.useFriction(0).useDuration(0),a.set(o),i=R?n:t,A.add(i,"touchmove",H,k).add(i,"touchend",U).add(i,"mousemove",H,k).add(i,"mouseup",U),P=r.readPoint(e),D=r.readPoint(e,S),h.emit("pointerDown")}}(l)}},destroy:function(){N.clear(),A.clear()},pointerDown:function(){return z}}}(ei,e,i,a,eN,function(e,t){let n,i;function a(e){return e.timeStamp}function r(n,i){let a=i||e.scroll,r=`client${"x"===a?"X":"Y"}`;return(y(n,t)?n:n.touches[0])[r]}return{pointerDown:function(e){return n=e,i=e,r(e)},pointerMove:function(e){let t=r(e)-r(i),o=a(e)-a(n)>170;return i=e,o&&(n=e),t},pointerUp:function(e){if(!n||!i)return 0;let t=r(i)-r(n),o=a(e)-a(n),l=a(e)-a(i)>170,c=t/o;return o&&!l&&p(c)>.1?c:0},readPoint:r}}(ei,a),eI,ej,eE,eA,eM,ew,o,er,q,Y,X,J),eventStore:eF,percentOfView:er,index:ew,indexPrevious:ev,limit:ey,location:eI,offsetLocation:ek,previousLocation:eC,options:r,resizeHandler:function(e,t,n,i,a,r,o){let l,c,s=[e].concat(i),u=[],m=!1;function f(e){return a.measureSize(o.measure(e))}return{init:function(a){r&&(c=f(e),u=i.map(f),l=new ResizeObserver(n=>{(d(r)||r(a,n))&&function(n){for(let r of n){if(m)return;let n=r.target===e,o=i.indexOf(r.target),l=n?c:u[o];if(p(f(n?e:i[o])-l)>=.5){a.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{s.forEach(e=>l.observe(e))}))},destroy:function(){m=!0,l&&l.disconnect()}}}(t,o,a,n,ei,G,ee),scrollBody:eA,scrollBounds:function(e,t,n,i,a){let r=a.measure(10),o=a.measure(50),l=v(.1,.99),c=!1;function s(){return!c&&!!e.reachedAny(n.get())&&!!e.reachedAny(t.get())}return{shouldConstrain:s,constrain:function(a){if(!s())return;let c=e.reachedMin(t.get())?"min":"max",d=p(e[c]-t.get()),u=n.get()-t.get(),m=l.constrain(d/o);n.subtract(u*m),!a&&p(u)<r&&(n.set(e.constrain(n.get())),i.useDuration(25).useBaseFriction())},toggleActive:function(e){c=!e}}}(ey,ek,eN,eA,er),scrollLooper:function(e,t,n,i){let{reachedMin:a,reachedMax:r}=v(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?r(n.get()):-1===t&&a(n.get())))return;let o=-1*t*e;i.forEach(e=>e.add(o))}}}(eh,ey,ek,[eI,ek,eC,eN]),scrollProgress:eL,scrollSnapList:eb.map(eL.get),scrollSnaps:eb,scrollTarget:eM,scrollTo:eE,slideLooper:function(e,t,n,i,a,r,o,l,c){let s=f(a),d=f(a).reverse(),u=h(m(d,o[0]),n,!1).concat(h(m(s,t-o[0]-1),-n,!0));function p(e,t){return e.reduce((e,t)=>e-a[t],t)}function m(e,t){return e.reduce((e,n)=>p(e,t)>0?e.concat([n]):e,[])}function h(a,o,s){let d=r.map((e,n)=>({start:e-i[n]+.5+o,end:e+t-.5+o}));return a.map(t=>{let i=s?0:-n,a=s?n:0,r=d[t][s?"end":"start"];return{index:t,loopPoint:r,slideLocation:_(-1),translate:j(e,c[t]),target:()=>l.get()>r?i:a}})}return{canLoop:function(){return u.every(({index:e})=>.1>=p(s.filter(t=>t!==e),t))},clear:function(){u.forEach(e=>e.translate.clear())},loop:function(){u.forEach(e=>{let{target:t,translate:n,slideLocation:i}=e,a=t();a!==i.get()&&(n.to(a),i.set(a))})},loopPoints:u}}(ei,ea,eh,ec,es,em,eb,ek,n),slideFocus:eD,slidesHandler:(z=!1,{init:function(e){Q&&(D=new MutationObserver(t=>{!z&&(d(Q)||Q(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),o.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){D&&D.disconnect(),z=!0}}),slidesInView:eT,slideIndexes:e_,slideRegistry:eP,slidesToScroll:ep,target:eN,translate:j(ei,t)};return ez}(e,C,k,A,M,n,T);return n.loop&&!i.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):i}(V),z([U,...q.map(({options:e})=>e)]).forEach(e=>F.add(e,"change",$)),V.active&&(o.translate.to(o.location.get()),o.animation.init(),o.slidesInView.init(),o.slideFocus.init(G),o.eventHandler.init(G),o.resizeHandler.init(G),o.slidesHandler.init(G),o.options.loop&&o.slideLooper.loop(),C.offsetParent&&k.length&&o.dragHandler.init(G),l=L.init(G,q)))}function $(e,t){let n=K();Z(),Y(P({startIndex:n},e),t),T.emit("reInit")}function Z(){o.dragHandler.destroy(),o.eventStore.clear(),o.translate.clear(),o.slideLooper.clear(),o.resizeHandler.destroy(),o.slidesHandler.destroy(),o.slidesInView.destroy(),o.animation.destroy(),L.destroy(),F.clear()}function X(e,t,n){V.active&&!H&&(o.scrollBody.useBaseFriction().useDuration(!0===t?0:V.duration),o.scrollTo.index(e,n||0))}function K(){return o.index.get()}let G={canScrollNext:function(){return o.index.add(1).get()!==K()},canScrollPrev:function(){return o.index.add(-1).get()!==K()},containerNode:function(){return C},internalEngine:function(){return o},destroy:function(){H||(H=!0,F.clear(),Z(),T.emit("destroy"),T.clear())},off:O,on:B,emit:R,plugins:function(){return l},previousScrollSnap:function(){return o.indexPrevious.get()},reInit:$,rootNode:function(){return e},scrollNext:function(e){X(o.index.add(1).get(),e,-1)},scrollPrev:function(e){X(o.index.add(-1).get(),e,1)},scrollProgress:function(){return o.scrollProgress.get(o.offsetLocation.get())},scrollSnapList:function(){return o.scrollSnapList},scrollTo:X,selectedScrollSnap:K,slideNodes:function(){return k},slidesInView:function(){return o.slidesInView.get()},slidesNotInView:function(){return o.slidesInView.get(!1)}};return Y(t,n),setTimeout(()=>T.emit("init"),0),G}function C(e={},t=[]){let n=(0,a.useRef)(e),i=(0,a.useRef)(t),[r,c]=(0,a.useState)(),[s,d]=(0,a.useState)(),u=(0,a.useCallback)(()=>{r&&r.reInit(n.current,i.current)},[r]);return(0,a.useEffect)(()=>{o(n.current,e)||(n.current=e,u())},[e,u]),(0,a.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=l(e),i=l(t);return n.every((e,t)=>o(e,i[t]))}(i.current,t)&&(i.current=t,u())},[t,u]),(0,a.useEffect)(()=>{if("u">typeof window&&window.document&&window.document.createElement&&s){I.globalOptions=C.globalOptions;let e=I(s,n.current,i.current);return c(e),()=>e.destroy()}c(void 0)},[s,c]),[d,r]}I.globalOptions=void 0,C.globalOptions=void 0;let k="Балтик Стайл",N="БС",A="Системная интеграция и инфраструктурные ИТ-решения",M="+74012 99-11-99",E="tel:+74012991199",L="info@balticstyle.ru",F=[{label:"О компании",targetId:"baltic-about"},{label:"Продукты, технологии, услуги",targetId:"baltic-directions"},{label:"Партнёры",targetId:"baltic-partners"},{label:"Новости",targetId:"baltic-news"},{label:"Контакты",targetId:"baltic-contact"}],T="Оптимальные IT-решения",P="От разработки стратегии до реализации",D="Системная интеграция и инфраструктурные ИТ-решения",z=["Компания «Балтик Стайл» реализует проекты по созданию, модернизации и сопровождению технологической инфраструктуры предприятий. Наши компетенции включают проектирование систем, интеграцию оборудования и программных решений, аудит ИТ-среды, а также поставку и профессиональное обслуживание инфраструктуры. Надёжный технологический партнёр бизнеса более 30 лет."],B=[{icon:"server",label:"ЦОД и серверная инфраструктура"},{icon:"network",label:"Слаботочные сети"},{icon:"shield",label:"Информационная безопасность"},{icon:"cloud",label:"Облачные сервисы"},{icon:"support",label:"Сервисная поддержка"}],O=[{icon:"server",label:"30 лет в отрасли"},{icon:"support",label:"Опытный ИТ-персонал"},{icon:"cloud",label:"Оптимальные ИТ-решения"}],R=[{icon:"server",title:"Проектирование",description:"Разработка технической документации и архитектуры инфраструктуры."},{icon:"network",title:"Интеграция и строительство",description:"Монтаж, пуско-наладка и ввод систем в эксплуатацию."},{icon:"shield",title:"ИТ-аудит",description:"Экспертная оценка инфраструктуры и информационной безопасности."},{icon:"cloud",title:"Поставки и сервис",description:"Оборудование, программное обеспечение и техническая поддержка."},{icon:"support",title:"ИТ-аутсорсинг",description:"Профессиональное сопровождение сложных ИТ-решений."}],H="Свяжитесь с нами удобным способом",U="Заполните форму и мы перезвоним",V={name:"Имя",phone:"Номер телефона",email:"e-mail",message:"Ваш текст",file:"Прикрепить файл",submit:"Отправить"},q="© 2026 Балтик Стайл — системная интеграция, поставка и ввод в эксплуатацию сложного компьютерного оборудования и слаботочных сетей.",Y="Юридический адрес 236029, Калининградская обл, г Калининград, ул Гаражная, дом 2-4, корпус ПОМ III,IV, офис 301",$="Телефоны +74012 99-11-99; +74012 99-11-98",Z="Реквизиты ИНН 3905017052, КПП 390601001, ОГРН 1023900773555",X="Еmail: info@balticstyle.ru",K=0;function G(e,t,n){let i=1-n;return 3*e*i*i*n+3*t*i*n*n+n*n*n}function Q(e){if(e.defaultPrevented||0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)return;let t=new URL(e.currentTarget.href);if(t.origin!==window.location.origin||t.pathname!==window.location.pathname||!t.hash||"#"===t.hash)return;let n=decodeURIComponent(t.hash.slice(1)),i=document.getElementById(n);if(i){var a;let t;e.preventDefault(),e.stopPropagation(),a=i.id,(t=document.getElementById(a))&&function(e,t){if(cancelAnimationFrame(K),window.matchMedia("(prefers-reduced-motion: reduce)").matches){window.scrollTo(0,e),window.history.pushState(null,"",t);return}let n=window.scrollY,i=e-n,a=performance.now();K=requestAnimationFrame(function e(r){let o=Math.min((r-a)/1200,1),l=n+i*function(e){if(e<=0)return 0;if(e>=1)return 1;let t=0,n=1,i=e;for(let a=0;a<12;a+=1){let a=G(.3,.96,i);if(1e-5>Math.abs(a-e))break;a<e?t=i:n=i,i=(t+n)/2}return G(.27,0,i)}(o);window.scrollTo(0,l),o<1?K=requestAnimationFrame(e):window.history.pushState(null,"",t)})}(Math.max(0,window.scrollY+t.getBoundingClientRect().top-function(){let e=document.querySelector("header");if(!e)return 16;let t=window.getComputedStyle(e).position;return"sticky"!==t&&"fixed"!==t?16:Math.ceil(e.getBoundingClientRect().height)+16}()),`#${a}`)}}let J="turquoise",W={turquoise:"Бирюзовая",orange:"Оранжевая"},ee="baltic-style-theme",et=new Set;function en(e){document.documentElement.dataset.theme=e}function ei(){let e=window.localStorage.getItem(ee);return"turquoise"===e||"orange"===e?e:J}function ea(e){return et.add(e),()=>{et.delete(e)}}function er(){let e,i,r,o,l,c,s,d,u=(0,n.c)(16),p=(0,a.useSyncExternalStore)(ea,ei,eo);u[0]!==p?(e="turquoise"===p?"orange":"turquoise",u[0]=p,u[1]=e):e=u[1];let m=e;u[2]!==p?(i=()=>{en(p)},r=[p],u[2]=p,u[3]=i,u[4]=r):(i=u[3],r=u[4]),(0,a.useEffect)(i,r),u[5]!==m?(o=()=>{en(m),window.localStorage.setItem(ee,m),et.forEach(e=>e())},u[5]=m,u[6]=o):o=u[6];let f=o,h=W[m];u[7]!==h?(l=h.toLowerCase(),u[7]=h,u[8]=l):l=u[8];let x=`Переключить тему на ${l}`;u[9]===Symbol.for("react.memo_cache_sentinel")?(c=(0,t.jsx)(ec,{"aria-hidden":"true"}),u[9]=c):c=u[9];let g=W[m];return u[10]!==g?(s=(0,t.jsxs)("span",{children:[g," тема"]}),u[10]=g,u[11]=s):s=u[11],u[12]!==f||u[13]!==x||u[14]!==s?(d=(0,t.jsxs)(el,{type:"button",onClick:f,"aria-label":x,children:[c,s]}),u[12]=f,u[13]=x,u[14]=s,u[15]=d):d=u[15],d}function eo(){return J}let el=i.default.button.withConfig({displayName:"theme-toggle-button__ToggleButton",componentId:"sc-3bef75ca-0"})`
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
`,ec=i.default.i.withConfig({displayName:"theme-toggle-button__Swatch",componentId:"sc-3bef75ca-1"})`
  width: 18px;
  height: 18px;
  flex: 0 0 auto;
  border: 2px solid rgba(255, 255, 255, 0.68);
  border-radius: 50%;
  background: var(--accent);
`,es={src:e.i(85028).default,width:865,height:575,blurWidth:8,blurHeight:5,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAgUlEQVR42h2MUQrDIBBE81Fs3biYjUS0aQ2UNNBeob3/rXSifgwMbx4z0Mh5mhewtUiPpad1nhwuisqgSLJmB3YJfj162G1oTGmpggmZ5hck/SDxgIR37X80VrcmxKznHWb5QNs7SJ4w/luFHYpjGa7GZz1tIBtwI+7Xo6xorG7lBHmfMKSL9tURAAAAAElFTkSuQmCC"},ed={phone:(0,t.jsx)("path",{d:"M18.9 15.7c-1.1 0-2.2-.2-3.2-.6-.5-.2-1-.1-1.4.3l-1.5 1.9c-2.8-1.4-5.2-3.8-6.7-6.7L8 9.1c.4-.4.5-.9.3-1.4-.4-1-.6-2.1-.6-3.2 0-.8-.7-1.5-1.5-1.5H3.7c-.8 0-1.7.4-1.7 1.5C2 13.7 9.3 21 18.5 21c1.1 0 1.5-.9 1.5-1.7v-2.1c0-.8-.3-1.5-1.1-1.5Z"}),server:(0,t.jsx)("path",{d:"M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v3A2.5 2.5 0 0 1 17.5 11h-11A2.5 2.5 0 0 1 4 8.5v-3Zm0 10A2.5 2.5 0 0 1 6.5 13h11a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-3ZM7 7h.01M7 17h.01M10 7h7M10 17h7"}),network:(0,t.jsx)("path",{d:"M12 4v5m0 0H7m5 0h5M7 9v4m10-4v4M5 13h4v7H5v-7Zm10 0h4v7h-4v-7Zm-5-9h4v5h-4V4Z"}),shield:(0,t.jsx)("path",{d:"M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Zm-3 9 2 2 4-5"}),cloud:(0,t.jsx)("path",{d:"M7.5 18h9.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 5.6 11 3.5 3.5 0 0 0 7.5 18Z"}),support:(0,t.jsx)("path",{d:"M4 12a8 8 0 0 1 16 0v3a3 3 0 0 1-3 3h-2v-6h5M4 15a3 3 0 0 0 3 3h2v-6H4v3Zm8 5h3"})};function eu(e){let i,a=(0,n.c)(2),{name:r}=e,o=ed[r];return a[0]!==o?(i=(0,t.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:o}),a[0]=o,a[1]=i):i=a[1],i}function ep(){let e,i,r,o,l,c,s,d,u,p,m,f,h,x,g,b,y,w,v,_,j,S,I,B,K,G,Q,J,W,ee,et,en,ei,ea,eo,el,ec,ed,ep,ey=(0,n.c)(42);ey[0]===Symbol.for("react.memo_cache_sentinel")?(e={align:"start",dragFree:!0,loop:!0,skipSnaps:!0,slidesToScroll:1},ey[0]=e):e=ey[0];let[ew,ev]=C(e),e_=(0,a.useRef)("next"),ej=(0,a.useRef)(!1),eT=(0,a.useRef)(null),eX=(0,a.useRef)(0),eK=(0,a.useRef)(!1);ey[1]===Symbol.for("react.memo_cache_sentinel")?(i=()=>{eT.current&&(clearTimeout(eT.current),eT.current=null)},ey[1]=i):i=ey[1];let eG=i;ey[2]===Symbol.for("react.memo_cache_sentinel")?(r=()=>{eG(),ej.current=!0},ey[2]=r):r=ey[2];let eW=r;ey[3]===Symbol.for("react.memo_cache_sentinel")?(o=e=>{eG(),eT.current=setTimeout(()=>{ej.current=!1,eT.current=null},void 0===e?700:e)},ey[3]=o):o=ey[3];let e2=o;ey[4]===Symbol.for("react.memo_cache_sentinel")?(l=()=>eG,c=[eG],ey[4]=l,ey[5]=c):(l=ey[4],c=ey[5]),(0,a.useEffect)(l,c),ey[6]!==ev?(s=()=>{if(!ev)return;let e=0,t=0,n=i=>{let a=t?Math.min(i-t,48):0;if(t=i,ej.current){e=window.requestAnimationFrame(n);return}let r=ev.internalEngine(),o="next"===e_.current?-1:1;r.location.add(.045*o*a),r.target.set(r.location),r.previousLocation.set(r.location),r.offsetLocation.set(r.location),r.scrollLooper.loop(o),r.slideLooper.loop(),r.translate.to(r.location.get()),ev.emit("scroll"),e=window.requestAnimationFrame(n)};return e=window.requestAnimationFrame(n),()=>window.cancelAnimationFrame(e)},d=[ev],ey[6]=ev,ey[7]=s,ey[8]=d):(s=ey[7],d=ey[8]),(0,a.useEffect)(s,d),ey[9]===Symbol.for("react.memo_cache_sentinel")?(u=e=>{("mouse"!==e.pointerType||0===e.button)&&(eW(),eK.current=!0,eX.current=e.clientX)},ey[9]=u):u=ey[9];let tr=u;ey[10]===Symbol.for("react.memo_cache_sentinel")?(p=e=>{if(!eK.current)return;let t=e.clientX-eX.current;Math.abs(t)>.5&&(e_.current=t>0?"prev":"next",eX.current=e.clientX)},ey[10]=p):p=ey[10];let to=p;ey[11]===Symbol.for("react.memo_cache_sentinel")?(m=()=>{eK.current=!1,e2()},ey[11]=m):m=ey[11];let tl=m;ey[12]===Symbol.for("react.memo_cache_sentinel")?(f=e=>{1>Math.abs(e.deltaX)||(e_.current=e.deltaX>0?"next":"prev",eW(),e2())},ey[12]=f):f=ey[12];let tc=f;return ey[13]===Symbol.for("react.memo_cache_sentinel")?(h=(0,t.jsx)(eA,{"aria-hidden":"true",children:N}),ey[13]=h):h=ey[13],ey[14]===Symbol.for("react.memo_cache_sentinel")?(x=(0,t.jsxs)(eN,{children:[h,(0,t.jsxs)(eM,{children:[(0,t.jsx)("h1",{id:"company-title",children:k}),(0,t.jsx)("p",{children:A})]})]}),ey[14]=x):x=ey[14],ey[15]===Symbol.for("react.memo_cache_sentinel")?(g=(0,t.jsx)(ek,{"aria-labelledby":"company-title",children:(0,t.jsxs)(eS,{children:[x,(0,t.jsxs)(eE,{href:E,"aria-label":M,children:[(0,t.jsx)(eu,{name:"phone"}),(0,t.jsx)("span",{children:M})]})]})}),ey[15]=g):g=ey[15],ey[16]===Symbol.for("react.memo_cache_sentinel")?(b=(0,t.jsx)(eL,{"aria-label":"Основная навигация  ",children:(0,t.jsx)(eF,{children:F.map(eb)})}),ey[16]=b):b=ey[16],ey[17]===Symbol.for("react.memo_cache_sentinel")?(y=(0,t.jsxs)(ez,{children:[(0,t.jsx)("h2",{children:T}),(0,t.jsx)("p",{children:P})]}),ey[17]=y):y=ey[17],ey[18]===Symbol.for("react.memo_cache_sentinel")?(w=(0,t.jsx)(eP,{children:(0,t.jsxs)(eD,{children:[y,(0,t.jsx)(eB,{role:"img","aria-label":"Заглушка фотографии IT-инфраструктуры",children:(0,t.jsx)(ta,{src:es.src,alt:"Патч-корды и сетевая инфраструктура"})})]})}),ey[18]=w):w=ey[18],ey[19]===Symbol.for("react.memo_cache_sentinel")?(v=(0,t.jsx)(eR,{id:"baltic-about-title",children:D}),ey[19]=v):v=ey[19],ey[20]===Symbol.for("react.memo_cache_sentinel")?(_=(0,t.jsx)(eO,{id:"baltic-about","aria-labelledby":"baltic-about-title",children:(0,t.jsxs)(eC,{children:[v,(0,t.jsx)(eH,{children:z.map(eg)})]})}),ey[20]=_):_=ey[20],ey[21]===Symbol.for("react.memo_cache_sentinel")?(j=(0,t.jsx)(eV,{id:"baltic-partners","aria-hidden":"true"}),S=(0,t.jsx)(eV,{id:"baltic-news","aria-hidden":"true"}),ey[21]=j,ey[22]=S):(j=ey[21],S=ey[22]),ey[23]===Symbol.for("react.memo_cache_sentinel")?(I=(0,t.jsx)(eq,{children:(0,t.jsx)(eR,{id:"baltic-projects-title",children:"Реализованные проекты"})}),ey[23]=I):I=ey[23],ey[24]===Symbol.for("react.memo_cache_sentinel")?(B=()=>e2(),ey[24]=B):B=ey[24],ey[25]===Symbol.for("react.memo_cache_sentinel")?(K=()=>e2(),ey[25]=K):K=ey[25],ey[26]===Symbol.for("react.memo_cache_sentinel")?(G=(0,t.jsx)(eZ,{children:Array.from({length:3},ex)}),ey[26]=G):G=ey[26],ey[27]!==ew?(Q=(0,t.jsxs)(eU,{id:"baltic-projects","aria-labelledby":"baltic-projects-title",children:[j,S,(0,t.jsxs)(eI,{children:[I,(0,t.jsx)(eY,{children:(0,t.jsx)(e$,{ref:ew,tabIndex:0,"aria-label":"Слайдер реализованных проектов",onBlur:B,onFocus:eW,onMouseEnter:eW,onMouseLeave:K,onPointerCancel:tl,onPointerDown:tr,onPointerMove:to,onPointerUp:tl,onWheel:tc,children:G})})]})]}),ey[27]=ew,ey[28]=Q):Q=ey[28],ey[29]===Symbol.for("react.memo_cache_sentinel")?(J=(0,t.jsx)(eQ,{"aria-label":"Преимущества Балтик Стайл",children:(0,t.jsx)(eJ,{children:O.map(eh)})}),ey[29]=J):J=ey[29],ey[30]===Symbol.for("react.memo_cache_sentinel")?(W=(0,t.jsx)(eR,{id:"baltic-directions-title",children:"Ключевые направления"}),ey[30]=W):W=ey[30],ey[31]===Symbol.for("react.memo_cache_sentinel")?(ee=(0,t.jsx)(e0,{id:"baltic-directions","aria-labelledby":"baltic-directions-title",children:(0,t.jsxs)(eI,{children:[W,(0,t.jsx)(e1,{children:R.map(ef)})]})}),ey[31]=ee):ee=ey[31],ey[32]===Symbol.for("react.memo_cache_sentinel")?(et=(0,t.jsxs)(e3,{children:[(0,t.jsx)(eR,{id:"baltic-contact-title",children:H}),(0,t.jsx)("p",{children:U})]}),ey[32]=et):et=ey[32],ey[33]===Symbol.for("react.memo_cache_sentinel")?(en=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:V.name}),(0,t.jsx)("input",{name:"name",autoComplete:"name"})]}),ei=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:V.phone}),(0,t.jsx)("input",{name:"phone",type:"tel",autoComplete:"tel"})]}),ea=(0,t.jsxs)("label",{children:[(0,t.jsx)("span",{children:V.email}),(0,t.jsx)("input",{name:"email",type:"email",autoComplete:"email"})]}),ey[33]=en,ey[34]=ei,ey[35]=ea):(en=ey[33],ei=ey[34],ea=ey[35]),ey[36]===Symbol.for("react.memo_cache_sentinel")?(eo=(0,t.jsxs)("label",{className:"wide",children:[(0,t.jsx)("span",{children:V.message}),(0,t.jsx)("textarea",{name:"message",rows:4})]}),ey[36]=eo):eo=ey[36],ey[37]===Symbol.for("react.memo_cache_sentinel")?(el=(0,t.jsx)(e5,{id:"baltic-contact","aria-labelledby":"baltic-contact-title",children:(0,t.jsxs)(e8,{children:[et,(0,t.jsxs)(e4,{onSubmit:em,children:[en,ei,ea,eo,(0,t.jsxs)(e6,{children:[(0,t.jsxs)(e7,{children:[V.file,(0,t.jsx)("input",{type:"file",name:"attachment"})]}),(0,t.jsx)(e9,{type:"submit",children:V.submit})]})]})]})}),ey[37]=el):el=ey[37],ey[38]===Symbol.for("react.memo_cache_sentinel")?(ec=(0,t.jsxs)(tn,{children:[(0,t.jsx)("b",{children:k}),(0,t.jsx)("p",{children:q}),(0,t.jsx)("p",{children:Y}),(0,t.jsx)("p",{children:$}),(0,t.jsx)("p",{children:Z}),(0,t.jsx)("a",{href:`mailto:${L}`,children:X})]}),ey[38]=ec):ec=ey[38],ey[39]===Symbol.for("react.memo_cache_sentinel")?(ed=(0,t.jsx)(te,{children:(0,t.jsxs)(tt,{children:[ec,(0,t.jsx)(ti,{children:(0,t.jsx)(er,{})})]})}),ey[39]=ed):ed=ey[39],ey[40]!==Q?(ep=(0,t.jsxs)(t.Fragment,{children:[g,b,w,_,Q,J,ee,el,ed]}),ey[40]=Q,ey[41]=ep):ep=ey[41],ep}function em(e){return e.preventDefault()}function ef(e){return(0,t.jsxs)(e2,{children:[(0,t.jsx)(eG,{children:(0,t.jsx)(eu,{name:e.icon})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("b",{children:e.title}),(0,t.jsx)("p",{children:e.description})]})]},e.title)}function eh(e){return(0,t.jsxs)(eW,{children:[(0,t.jsx)(eK,{children:(0,t.jsx)(eu,{name:e.icon})}),(0,t.jsx)("b",{children:e.label})]},e.label)}function ex(e,n){return B.map(e=>(0,t.jsxs)(eX,{children:[(0,t.jsx)(eK,{children:(0,t.jsx)(eu,{name:e.icon})}),(0,t.jsx)("span",{children:e.label})]},`${n}-${e.label}`))}function eg(e){return(0,t.jsx)("p",{children:e},e)}function eb(e){return(0,t.jsx)(eT,{href:`#${e.targetId}`,onClick:Q,children:e.label},e.targetId)}let ey=i.default.div.withConfig({displayName:"baltic-style-landing__Shell",componentId:"sc-50a68381-0"})`
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;

  @media (max-width: 420px) {
    width: min(1180px, calc(100% - 24px));
  }
`,ew=i.default.section.withConfig({displayName:"baltic-style-landing__BaseSection",componentId:"sc-50a68381-1"})`
  position: relative;
  display: grid;
  align-items: center;
`,ev=i.default.a.withConfig({displayName:"baltic-style-landing__RaisedAnchor",componentId:"sc-50a68381-2"})`
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
`,e_=i.default.button.withConfig({displayName:"baltic-style-landing__RaisedButton",componentId:"sc-50a68381-3"})`
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
`,ej=i.default.label.withConfig({displayName:"baltic-style-landing__RaisedLabel",componentId:"sc-50a68381-4"})`
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
`,eS=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__ContentRow",componentId:"sc-50a68381-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,eI=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__ContentColumn",componentId:"sc-50a68381-6"})`
  display: grid;
  gap: 24px;
`,eC=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__NarrowContent",componentId:"sc-50a68381-7"})`
  display: grid;
  gap: 22px;
`,ek=i.default.header.withConfig({displayName:"baltic-style-landing__TopBar",componentId:"sc-50a68381-8"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 228px;
  padding: 28px 0;
`,eN=i.default.div.withConfig({displayName:"baltic-style-landing__CompanyBlock",componentId:"sc-50a68381-9"})`
  display: flex;
  align-items: center;
  gap: 20px;
  min-width: 0;
`,eA=i.default.div.withConfig({displayName:"baltic-style-landing__Logo",componentId:"sc-50a68381-10"})`
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
`,eM=i.default.div.withConfig({displayName:"baltic-style-landing__CompanyText",componentId:"sc-50a68381-11"})`
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
`,eE=(0,i.default)(ev).withConfig({displayName:"baltic-style-landing__PhoneLink",componentId:"sc-50a68381-12"})`
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
`,eL=i.default.nav.withConfig({displayName:"baltic-style-landing__NavSection",componentId:"sc-50a68381-13"})`
  position: relative;
  display: grid;
  align-items: center;
  min-height: 76px;
  background: rgba(255, 255, 255, 0.2);
`,eF=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__NavList",componentId:"sc-50a68381-14"})`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-evenly;
`,eT=(0,i.default)(ev).withConfig({displayName:"baltic-style-landing__NavLink",componentId:"sc-50a68381-15"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  min-width: 0;
  padding: 0 16px;
  border-radius: 999px;
  color: #30485b;
  font-size: 14px;
  font-weight: 700;
  overflow-wrap: anywhere;
  text-align: center;
  transition: all 2s;
  

 

  &:hover {
    border-color: #0b1c2d;
    
    
  }
`,eP=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__PromoSection",componentId:"sc-50a68381-16"})`
  min-height: 324px;
  background: var(--dark-section);
`,eD=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__PromoInner",componentId:"sc-50a68381-17"})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 32px;
  align-items: stretch;
  padding: 28px 0;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,ez=i.default.div.withConfig({displayName:"baltic-style-landing__PromoCopy",componentId:"sc-50a68381-18"})`
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
`,eB=i.default.div.withConfig({displayName:"baltic-style-landing__PhotoPlaceholder",componentId:"sc-50a68381-19"})`
  position: relative;
  overflow: hidden;
  min-height: 248px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 24px;
  background:
    linear-gradient(135deg, var(--ambient-accent-strong), transparent 55%),
    linear-gradient(145deg, var(--dark-section-elevated), var(--dark-section-deep));
  box-shadow: inset 12px 12px 28px rgba(0, 0, 0, 0.22), inset -10px -10px 24px rgba(255, 255, 255, 0.05);

  &::after {
    position: absolute;
    inset: 22px;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 18px;
    content: "";
  }
`,eO=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__AboutSection",componentId:"sc-50a68381-20"})`
  min-height: 324px;
  padding: 42px 0;
`,eR=i.default.h2.withConfig({displayName:"baltic-style-landing__SectionTitle",componentId:"sc-50a68381-21"})`
  color: #14212c;
  font-size: 40px;
  line-height: 1.08;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`,eH=i.default.div.withConfig({displayName:"baltic-style-landing__AboutText",componentId:"sc-50a68381-22"})`
  display: grid;
  gap: 14px;
  max-width: 940px;

  p {
    color: #435566;
    font-size: 18px;
    line-height: 1.62;
  }
`,eU=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__ProjectsSection",componentId:"sc-50a68381-23"})`
  min-height: 324px;
  padding: 34px 0;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.08)),
    rgba(255, 255, 255, 0.16);
`,eV=i.default.span.withConfig({displayName:"baltic-style-landing__AnchorTarget",componentId:"sc-50a68381-24"})`
  position: absolute;
  top: 0;
`,eq=i.default.div.withConfig({displayName:"baltic-style-landing__SectionHeadRow",componentId:"sc-50a68381-25"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,eY=i.default.div.withConfig({displayName:"baltic-style-landing__ProjectSlider",componentId:"sc-50a68381-26"})`
  width: 100%;
  min-width: 0;
  overflow: visible;
`,e$=i.default.div.withConfig({displayName:"baltic-style-landing__ProjectSliderViewport",componentId:"sc-50a68381-27"})`
  width: auto;
  min-width: 0;
  overflow: hidden;
  margin: -18px -28px -28px;
  padding: 26px 28px 32px;
  cursor: grab;
  outline: none;
  touch-action: pan-y pinch-zoom;
  user-select: none;

  &:active {
    cursor: grabbing;
  }
`,eZ=i.default.div.withConfig({displayName:"baltic-style-landing__ProjectTrack",componentId:"sc-50a68381-28"})`
  display: flex;
  gap: 18px;
`,eX=i.default.article.withConfig({displayName:"baltic-style-landing__ProjectSlide",componentId:"sc-50a68381-29"})`
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
`,eK=i.default.span.withConfig({displayName:"baltic-style-landing__IconBox",componentId:"sc-50a68381-30"})`
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
`,eG=(0,i.default)(eK).withConfig({displayName:"baltic-style-landing__SmallIconBox",componentId:"sc-50a68381-31"})`
  width: 44px;
  height: 44px;
  border-radius: 14px;

  svg {
    width: 22px;
    height: 22px;
  }
`,eQ=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__AdvantagesSection",componentId:"sc-50a68381-32"})`
  min-height: 162px;
  padding: 26px 0;
`,eJ=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__AdvantagesGrid",componentId:"sc-50a68381-33"})`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`,eW=i.default.article.withConfig({displayName:"baltic-style-landing__Advantage",componentId:"sc-50a68381-34"})`
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
`,e0=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__DirectionsSection",componentId:"sc-50a68381-35"})`
  min-height: 162px;
  padding: 28px 0;
  background: rgba(255, 255, 255, 0.14);
`,e1=i.default.div.withConfig({displayName:"baltic-style-landing__DirectionsList",componentId:"sc-50a68381-36"})`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,e2=i.default.article.withConfig({displayName:"baltic-style-landing__DirectionItem",componentId:"sc-50a68381-37"})`
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
`,e5=(0,i.default)(ew).withConfig({displayName:"baltic-style-landing__ContactSection",componentId:"sc-50a68381-38"})`
  min-height: 486px;
  padding: 44px 0;
`,e8=(0,i.default)(ey).withConfig({displayName:"baltic-style-landing__ContactGrid",componentId:"sc-50a68381-39"})`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(320px, 1.15fr);
  gap: 32px;
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`,e3=i.default.div.withConfig({displayName:"baltic-style-landing__ContactCopy",componentId:"sc-50a68381-40"})`
  display: grid;
  gap: 14px;

  p {
    color: var(--accent-strong);
    font-size: 20px;
    font-weight: 800;
  }
`,e4=i.default.form.withConfig({displayName:"baltic-style-landing__ContactForm",componentId:"sc-50a68381-41"})`
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
`,e6=i.default.div.withConfig({displayName:"baltic-style-landing__FormActions",componentId:"sc-50a68381-42"})`
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
`,e7=(0,i.default)(ej).withConfig({displayName:"baltic-style-landing__FileButton",componentId:"sc-50a68381-43"})`
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
`,e9=(0,i.default)(e_).withConfig({displayName:"baltic-style-landing__SubmitButton",componentId:"sc-50a68381-44"})`
  min-height: 50px;
  padding: 0 24px;
  border-radius: 18px;
  color: #f7fbff;
  background: linear-gradient(145deg, var(--accent), var(--accent-dark) 70%);
  font: inherit;
  font-weight: 800;
  cursor: pointer;
`,te=i.default.footer.withConfig({displayName:"baltic-style-landing__Footer",componentId:"sc-50a68381-45"})`
  padding: 34px 0;
  color: rgba(246, 251, 255, 0.82);
  background: var(--dark-section);
`,tt=i.default.div.withConfig({displayName:"baltic-style-landing__FooterInner",componentId:"sc-50a68381-46"})`
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
`,tn=i.default.div.withConfig({displayName:"baltic-style-landing__FooterContent",componentId:"sc-50a68381-47"})`
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
`,ti=i.default.div.withConfig({displayName:"baltic-style-landing__ThemeSlot",componentId:"sc-50a68381-48"})`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 760px) {
    justify-content: flex-start;
  }
`,ta=i.default.img.withConfig({displayName:"baltic-style-landing__Image",componentId:"sc-50a68381-49"})`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
`,tr=i.default.main.withConfig({displayName:"landing-page__Page",componentId:"sc-a58712ce-0"})`
  min-height: 100vh;
  background:
    linear-gradient(115deg, var(--ambient-accent) 0%, transparent 38%),
    linear-gradient(180deg, var(--surface-strong) 0%, var(--background) 42%, var(--background-end) 100%);
  color: var(--foreground);
`;e.s(["LandingPage",0,function(){let e,i=(0,n.c)(1);return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)(tr,{id:"main-content",children:(0,t.jsx)(ep,{})}),i[0]=e):e=i[0],e}],53153)}]);