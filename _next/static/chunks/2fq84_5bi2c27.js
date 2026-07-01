(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,65134,37964,e=>{"use strict";var a=e.i(35337),i=e.i(4699);e.i(84068);var t=e.i(36762);let d={automation:(0,a.jsx)("path",{d:"M4 7h16M7 7v10m10-10v10M8 17h8m-4-7v4m-3-2h6"}),building:(0,a.jsx)("path",{d:"M5 20V5l9-2v17M14 8h5v12M8 8h2M8 12h2M8 16h2M16 12h1M16 16h1"}),career:(0,a.jsx)("path",{d:"M9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm-4 14a7 7 0 0 1 14 0M16 12l2 2 4-5"}),communication:(0,a.jsx)("path",{d:"M4 6h16v10H7l-3 3V6Zm5 4h6M9 13h4"}),education:(0,a.jsx)("path",{d:"M3 8l9-4 9 4-9 4-9-4Zm4 3v5c2.8 2 7.2 2 10 0v-5"}),finance:(0,a.jsx)("path",{d:"M4 10h16M6 10V8l6-4 6 4v2M7 10v8M12 10v8M17 10v8M5 18h14"}),government:(0,a.jsx)("path",{d:"M4 9l8-5 8 5M6 9v9M10 9v9M14 9v9M18 9v9M4 20h16"}),health:(0,a.jsx)("path",{d:"M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10Zm0-9v4m-2-2h4"}),history:(0,a.jsx)("path",{d:"M12 8v5l3 2M4 12a8 8 0 1 0 2.3-5.7L4 8.6V4"}),industry:(0,a.jsx)("path",{d:"M4 20V9l5 3V9l5 3V7h6v13H4Zm3-4h2m3 0h2m3 0h1"}),institution:(0,a.jsx)("path",{d:"M5 20V7h14v13M8 10h2M14 10h2M8 14h2M14 14h2M11 20v-4h2v4"}),server:(0,a.jsx)("path",{d:"M5 5h14v6H5V5Zm0 8h14v6H5v-6Zm3-5h.01M8 16h.01M11 8h5M11 16h5"}),solutions:(0,a.jsx)("path",{d:"M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0c-.8.7-1 1.4-1 2H9c0-.6-.2-1.3-1-2Z"}),trade:(0,a.jsx)("path",{d:"M6 8h15l-2 7H8L6 4H3m6 15a1 1 0 1 0 0 .01M18 19a1 1 0 1 0 0 .01"}),transport:(0,a.jsx)("path",{d:"M5 16V7h10l4 4v5M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15 8v4h4"})};e.s(["BalticStyleIcon",0,function(e){let r,n,o=(0,i.c)(5),{className:s,name:c}=e,l=d[c];return o[0]!==l?(r=(0,a.jsx)("svg",{viewBox:"0 0 24 24",focusable:"false",children:l}),o[0]=l,o[1]=r):r=o[1],o[2]!==s||o[3]!==r?(n=(0,a.jsx)(t.IconBox,{className:s,"aria-hidden":"true",children:r}),o[2]=s,o[3]=r,o[4]=n):n=o[4],n}],37964),e.s([],65134)},31989,e=>{"use strict";var a=e.i(35337),i=e.i(4699),t=e.i(52940),d=e.i(88746),r=e.i(62361);e.i(65134);var n=e.i(37964);e.i(84068);var o=e.i(36762);function s(e){return(0,a.jsxs)(v,{children:[(0,a.jsx)(f,{name:e.icon}),(0,a.jsxs)("div",{children:[(0,a.jsx)("b",{children:e.title}),(0,a.jsx)("p",{children:e.description})]})]},e.title)}function c(e){return(0,a.jsx)("li",{children:e},e)}function l(e){return(0,a.jsxs)(g,{children:[(0,a.jsx)(f,{name:e.icon}),(0,a.jsx)("b",{children:e.title})]},e.title)}let p=(0,d.default)(o.BaseSection).withConfig({displayName:"products-page__ProductsRoot",componentId:"sc-aeed4ac5-0"})`
  min-height: 648px;
  padding: 48px 0 64px;
`,h=d.default.section.withConfig({displayName:"products-page__SectionBlock",componentId:"sc-aeed4ac5-1"})`
  display: grid;
  gap: 24px;
`,x=d.default.header.withConfig({displayName:"products-page__SectionHeader",componentId:"sc-aeed4ac5-2"})`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 560px) {
    align-items: flex-start;
    flex-direction: column;
  }
`,m=d.default.div.withConfig({displayName:"products-page__AreaGrid",componentId:"sc-aeed4ac5-3"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 18px;
`,g=d.default.article.withConfig({displayName:"products-page__AreaCard",componentId:"sc-aeed4ac5-4"})`
  display: grid;
  min-height: 148px;
  align-content: center;
  gap: 16px;
  padding: 22px;
  border-radius: 22px;
  background: var(--surface);
  box-shadow: var(--shadow-card);

  b {
    color: var(--text-card);
    font-size: 16px;
    line-height: 1.35;
  }
`,u=d.default.div.withConfig({displayName:"products-page__ServiceGrid",componentId:"sc-aeed4ac5-5"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
`,v=d.default.article.withConfig({displayName:"products-page__ServiceItem",componentId:"sc-aeed4ac5-6"})`
  display: flex;
  gap: 14px;
  min-width: 0;
  padding: 18px;
  border-radius: 20px;
  background:
    linear-gradient(145deg, var(--card-gradient-start), var(--card-gradient-end)),
    var(--surface);
  box-shadow:
    10px 10px 20px var(--shadow-dark),
    -10px -10px 20px var(--shadow-light);

  b {
    display: block;
    color: var(--heading);
    line-height: 1.3;
  }

  p {
    margin-top: 6px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.45;
  }
`,f=(0,d.default)(n.BalticStyleIcon).withConfig({displayName:"products-page__CompactIcon",componentId:"sc-aeed4ac5-7"})`
  width: 50px;
  height: 50px;
  border-radius: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`,j=d.default.div.withConfig({displayName:"products-page__Accordion",componentId:"sc-aeed4ac5-8"})`
  display: grid;
  gap: 14px;
`,M=d.default.article.withConfig({displayName:"products-page__AccordionItem",componentId:"sc-aeed4ac5-9"})`
  display: grid;
  gap: 12px;
`,y=(0,d.default)(o.RaisedButton).withConfig({displayName:"products-page__AccordionTrigger",componentId:"sc-aeed4ac5-10"})`
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 16px;
  width: 100%;
  min-height: 76px;
  padding: 13px 18px;
  border-radius: 22px;
  color: var(--text-strong);
  font: inherit;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  transition:
    box-shadow 300ms ease,
    transform 300ms ease,
    color 300ms ease,
    background-color 300ms ease;

  ${({$open:e})=>e?`
        box-shadow: inset 5px 5px 10px var(--shadow-pressed), inset -4px -4px 9px var(--shadow-light);
      `:""}

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 560px) {
    grid-template-columns: auto minmax(0, 1fr);

    ${f} {
      grid-row: span 2;
    }
  }
`,w=d.default.span.withConfig({displayName:"products-page__Chevron",componentId:"sc-aeed4ac5-11"})`
  color: var(--accent-strong);
  font-size: 26px;
  line-height: 1;
`,_=d.default.div.withConfig({displayName:"products-page__AccordionPanel",componentId:"sc-aeed4ac5-12"})`
  padding: 2px 4px 12px 84px;

  @media (max-width: 560px) {
    padding-left: 4px;
  }
`,b=d.default.ul.withConfig({displayName:"products-page__SolutionList",componentId:"sc-aeed4ac5-13"})`
  display: grid;
  gap: 10px;
  padding: 22px 24px 22px 42px;
  border-radius: 22px;
  color: var(--text-soft);
  background:
    linear-gradient(145deg, var(--card-gradient-start), var(--card-gradient-end)),
    var(--surface);
  box-shadow: var(--shadow-card);
  line-height: 1.48;

  li::marker {
    color: var(--accent-strong);
  }
`;e.s(["ProductsPage",0,function(){let e,d,g,v,I,S,C,N,k=(0,i.c)(11),[B,A]=(0,t.useState)(0);return k[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,a.jsxs)(x,{children:[(0,a.jsx)(n.BalticStyleIcon,{name:"industry"}),(0,a.jsx)(o.SectionTitle,{id:"work-areas-title",children:"Сферы наших работ"})]}),k[0]=e):e=k[0],k[1]===Symbol.for("react.memo_cache_sentinel")?(d=(0,a.jsxs)(h,{"aria-labelledby":"work-areas-title",children:[e,(0,a.jsx)(m,{children:r.workAreas.map(l)})]}),k[1]=d):d=k[1],k[2]===Symbol.for("react.memo_cache_sentinel")?(g=(0,a.jsxs)(x,{children:[(0,a.jsx)(n.BalticStyleIcon,{name:"solutions"}),(0,a.jsx)(o.SectionTitle,{id:"technical-solutions-title",children:"Продукты и технические решения"})]}),k[2]=g):g=k[2],k[3]!==B?(v=r.productSolutionGroups.map((e,i)=>{let t=B===i,d=`product-solution-${i}`;return(0,a.jsxs)(M,{children:[(0,a.jsxs)(y,{type:"button",$open:t,"aria-controls":d,"aria-expanded":t,onClick:()=>A(i),children:[(0,a.jsx)(f,{name:e.icon}),(0,a.jsx)("span",{children:e.title}),(0,a.jsx)(w,{"aria-hidden":"true",children:"⌄"})]}),(0,a.jsx)(_,{id:d,hidden:!t,children:(0,a.jsx)(b,{children:e.items.map(c)})})]},e.title)}),k[3]=B,k[4]=v):v=k[4],k[5]!==v?(I=(0,a.jsxs)(h,{"aria-labelledby":"technical-solutions-title",children:[g,(0,a.jsx)(j,{children:v})]}),k[5]=v,k[6]=I):I=k[6],k[7]===Symbol.for("react.memo_cache_sentinel")?(S=(0,a.jsxs)(x,{children:[(0,a.jsx)(n.BalticStyleIcon,{name:"automation"}),(0,a.jsx)(o.SectionTitle,{id:"services-title",children:"Услуги"})]}),k[7]=S):S=k[7],k[8]===Symbol.for("react.memo_cache_sentinel")?(C=(0,a.jsxs)(h,{"aria-labelledby":"services-title",children:[S,(0,a.jsx)(u,{children:r.productServiceDirections.map(s)})]}),k[8]=C):C=k[8],k[9]!==I?(N=(0,a.jsx)(p,{"aria-label":"Продукты, технологии и услуги",children:(0,a.jsxs)(o.ContentColumn,{children:[d,I,C]})}),k[9]=I,k[10]=N):N=k[10],N}])}]);