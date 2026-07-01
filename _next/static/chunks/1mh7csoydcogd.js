(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65134,37964,a=>{"use strict";var t=a.i(35337),e=a.i(4699);a.i(84068);var i=a.i(36762);let h={automation:(0,t.jsx)("path",{d:"M4 7h16M7 7v10m10-10v10M8 17h8m-4-7v4m-3-2h6"}),building:(0,t.jsx)("path",{d:"M5 20V5l9-2v17M14 8h5v12M8 8h2M8 12h2M8 16h2M16 12h1M16 16h1"}),career:(0,t.jsx)("path",{d:"M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-4 14a7 7 0 0 1 14 0M16 12l2 2 4-5"}),communication:(0,t.jsx)("path",{d:"M4 6h16v10H7l-3 3V6Zm5 4h6M9 13h4"}),education:(0,t.jsx)("path",{d:"M3 8l9-4 9 4-9 4-9-4Zm4 3v5c2.8 2 7.2 2 10 0v-5"}),finance:(0,t.jsx)("path",{d:"M4 10h16M6 10V8l6-4 6 4v2M7 10v8M12 10v8M17 10v8M5 18h14"}),government:(0,t.jsx)("path",{d:"M4 9l8-5 8 5M6 9v9M10 9v9M14 9v9M18 9v9M4 20h16"}),health:(0,t.jsx)("path",{d:"M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Zm0-9v4m-2-2h4"}),history:(0,t.jsx)("path",{d:"M12 8v5l3 2M4 12a8 8 0 1 0 2.3-5.7L4 8.6V4"}),industry:(0,t.jsx)("path",{d:"M4 20V9l5 3V9l5 3V7h6v13H4Zm3-4h2m3 0h2m3 0h1"}),institution:(0,t.jsx)("path",{d:"M5 20V7h14v13M8 10h2M14 10h2M8 14h2M14 14h2M11 20v-4h2v4"}),server:(0,t.jsx)("path",{d:"M5 5h14v6H5V5Zm0 8h14v6H5v-6Zm3-5h.01M8 16h.01M11 8h5M11 16h5"}),solutions:(0,t.jsx)("path",{d:"M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2Z"}),trade:(0,t.jsx)("path",{d:"M6 8h15l-2 7H8L6 4H3m6 15a1 1 0 1 0 0 .01M18 19a1 1 0 1 0 0 .01"}),transport:(0,t.jsx)("path",{d:"M5 16V7h10l4 4v5M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 8v4h4"})};a.s(["BalticStyleIcon",0,function(a){let n,s,d=(0,e.c)(5),{className:r,name:o}=a,l=h[o];return d[0]!==l?(n=(0,t.jsx)("svg",{viewBox:"0 0 24 24",focusable:"false",children:l}),d[0]=l,d[1]=n):n=d[1],d[2]!==r||d[3]!==n?(s=(0,t.jsx)(i.IconBox,{className:r,"aria-hidden":"true",children:n}),d[2]=r,d[3]=n,d[4]=s):s=d[4],s}],37964),a.s([],65134)},47925,a=>{"use strict";var t=a.i(35337),e=a.i(4699),i=a.i(88746),h=a.i(62361);a.i(65134);var n=a.i(37964);a.i(84068);var s=a.i(36762);function d(a){return(0,t.jsxs)(l,{children:[(0,t.jsxs)(c,{children:[(0,t.jsx)(n.BalticStyleIcon,{name:a.icon}),(0,t.jsx)(s.SectionTitle,{children:a.title})]}),(0,t.jsx)(p,{children:a.paragraphs.map(r)})]},a.title)}function r(a){return(0,t.jsx)("p",{children:a},a)}let o=(0,i.default)(s.BaseSection).withConfig({displayName:"about-page__AboutRoot",componentId:"sc-b8753667-0"})`
  min-height: 648px;
  padding: 48px 0 64px;
`,l=i.default.article.withConfig({displayName:"about-page__InfoPanel",componentId:"sc-b8753667-1"})`
  display: grid;
  gap: 22px;
  padding: clamp(24px, 4vw, 40px);
  border-radius: 24px;
  background:
    linear-gradient(145deg, var(--card-gradient-start), var(--card-gradient-end)),
    var(--surface);
  box-shadow: var(--shadow-card);
`,c=i.default.header.withConfig({displayName:"about-page__SectionHeader",componentId:"sc-b8753667-2"})`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,p=i.default.div.withConfig({displayName:"about-page__ParagraphStack",componentId:"sc-b8753667-3"})`
  display: grid;
  gap: 16px;
  max-width: 980px;

  p {
    color: var(--text-soft);
    font-size: 18px;
    line-height: 1.62;
  }
`;a.s(["AboutPage",0,function(){let a,i=(0,e.c)(1);return i[0]===Symbol.for("react.memo_cache_sentinel")?(a=(0,t.jsx)(o,{"aria-label":"О компании",children:(0,t.jsx)(s.ContentColumn,{children:h.aboutPageSections.map(d)})}),i[0]=a):a=i[0],a}])}]);