(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65134,37964,e=>{"use strict";var a=e.i(35337),i=e.i(4699);e.i(84068);var t=e.i(36762);let n={automation:(0,a.jsx)("path",{d:"M4 7h16M7 7v10m10-10v10M8 17h8m-4-7v4m-3-2h6"}),building:(0,a.jsx)("path",{d:"M5 20V5l9-2v17M14 8h5v12M8 8h2M8 12h2M8 16h2M16 12h1M16 16h1"}),career:(0,a.jsx)("path",{d:"M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-4 14a7 7 0 0 1 14 0M16 12l2 2 4-5"}),communication:(0,a.jsx)("path",{d:"M4 6h16v10H7l-3 3V6Zm5 4h6M9 13h4"}),education:(0,a.jsx)("path",{d:"M3 8l9-4 9 4-9 4-9-4Zm4 3v5c2.8 2 7.2 2 10 0v-5"}),finance:(0,a.jsx)("path",{d:"M4 10h16M6 10V8l6-4 6 4v2M7 10v8M12 10v8M17 10v8M5 18h14"}),government:(0,a.jsx)("path",{d:"M4 9l8-5 8 5M6 9v9M10 9v9M14 9v9M18 9v9M4 20h16"}),health:(0,a.jsx)("path",{d:"M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Zm0-9v4m-2-2h4"}),history:(0,a.jsx)("path",{d:"M12 8v5l3 2M4 12a8 8 0 1 0 2.3-5.7L4 8.6V4"}),industry:(0,a.jsx)("path",{d:"M4 20V9l5 3V9l5 3V7h6v13H4Zm3-4h2m3 0h2m3 0h1"}),institution:(0,a.jsx)("path",{d:"M5 20V7h14v13M8 10h2M14 10h2M8 14h2M14 14h2M11 20v-4h2v4"}),server:(0,a.jsx)("path",{d:"M5 5h14v6H5V5Zm0 8h14v6H5v-6Zm3-5h.01M8 16h.01M11 8h5M11 16h5"}),solutions:(0,a.jsx)("path",{d:"M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2Z"}),trade:(0,a.jsx)("path",{d:"M6 8h15l-2 7H8L6 4H3m6 15a1 1 0 1 0 0 .01M18 19a1 1 0 1 0 0 .01"}),transport:(0,a.jsx)("path",{d:"M5 16V7h10l4 4v5M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 8v4h4"})};e.s(["BalticStyleIcon",0,function(e){let s,d,r=(0,i.c)(5),{className:l,name:h}=e,o=n[h];return r[0]!==o?(s=(0,a.jsx)("svg",{viewBox:"0 0 24 24",focusable:"false",children:o}),r[0]=o,r[1]=s):s=r[1],r[2]!==l||r[3]!==s?(d=(0,a.jsx)(t.IconBox,{className:l,"aria-hidden":"true",children:s}),r[2]=l,r[3]=s,r[4]=d):d=r[4],d}],37964),e.s([],65134)},85267,e=>{"use strict";var a=e.i(35337),i=e.i(4699),t=e.i(71774),n=e.i(88746),s=e.i(62361);e.i(65134);var d=e.i(37964);e.i(84068);var r=e.i(36762);function l(e){return(0,a.jsxs)(p,{href:`/news/${e.slug}`,children:[(0,a.jsx)(x,{role:"img","aria-label":`Изображение новости: ${e.title}`,children:(0,a.jsx)(m,{children:e.date.slice(0,2)})}),(0,a.jsxs)(g,{children:[(0,a.jsx)("time",{dateTime:e.dateTime,children:e.date}),(0,a.jsx)("h2",{children:e.title})]})]},e.slug)}let h=(0,n.default)(r.BaseSection).withConfig({displayName:"news-page__NewsRoot",componentId:"sc-fa0e3ef3-0"})`
  min-height: 648px;
  padding: 48px 0 64px;
`,o=n.default.header.withConfig({displayName:"news-page__SectionHeader",componentId:"sc-fa0e3ef3-1"})`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,c=n.default.div.withConfig({displayName:"news-page__NewsSlider",componentId:"sc-fa0e3ef3-2"})`
  display: flex;
  gap: 18px;
  overflow-x: auto;
  padding: 6px 4px 24px;
  scroll-padding: 4px;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
`,p=(0,n.default)(t.default).withConfig({displayName:"news-page__NewsCard",componentId:"sc-fa0e3ef3-3"})`
  display: grid;
  flex: 0 0 clamp(280px, 36vw, 420px);
  min-height: 430px;
  overflow: hidden;
  border-radius: 24px;
  color: var(--text-card);
  background:
    linear-gradient(145deg, var(--card-gradient-start), var(--card-gradient-end)),
    var(--surface);
  box-shadow: var(--shadow-card);
  scroll-snap-align: start;
  transition:
    box-shadow 500ms linear,
    transform 500ms linear;

  &:hover {
    transform: translateY(1px);
    box-shadow:
      inset 3px 3px 7px var(--shadow-dark),
      inset -3px -3px 7px var(--shadow-light);
  }

  @media (max-width: 420px) {
    flex-basis: min(100%, 308px);
  }
`,x=n.default.div.withConfig({displayName:"news-page__NewsVisual",componentId:"sc-fa0e3ef3-4"})`
  display: grid;
  min-height: 210px;
  place-items: center;
  background:
    radial-gradient(circle at 24% 28%, var(--ambient-accent-strong), transparent 32%),
    linear-gradient(145deg, var(--dark-section-elevated), var(--dark-section-deep));
`,m=n.default.span.withConfig({displayName:"news-page__VisualMark",componentId:"sc-fa0e3ef3-5"})`
  display: grid;
  width: 88px;
  height: 88px;
  place-items: center;
  border-radius: 24px;
  color: var(--on-accent);
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow:
    12px 12px 24px var(--dark-inset-shadow),
    -8px -8px 18px var(--dark-inset-highlight);
  font-size: 30px;
  font-weight: 900;
`,g=n.default.div.withConfig({displayName:"news-page__NewsCardBody",componentId:"sc-fa0e3ef3-6"})`
  display: grid;
  align-content: start;
  gap: 14px;
  padding: 24px;

  time {
    color: var(--accent-strong);
    font-size: 14px;
    font-weight: 800;
  }

  h2 {
    color: var(--heading);
    font-size: 24px;
    line-height: 1.18;
  }
`;e.s(["NewsPage",0,function(){let e,t,n=(0,i.c)(2);return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsxs)(o,{children:[(0,a.jsx)(d.BalticStyleIcon,{name:"communication"}),(0,a.jsx)(r.SectionTitle,{id:"news-page-title",children:"Наши новости"})]}),n[0]=e):e=n[0],n[1]===Symbol.for("react.memo_cache_sentinel")?(t=(0,a.jsx)(h,{"aria-labelledby":"news-page-title",children:(0,a.jsxs)(r.ContentColumn,{children:[e,(0,a.jsx)(c,{"aria-label":"Слайдер новостей",children:s.newsItems.map(l)})]})}),n[1]=t):t=n[1],t}])}]);