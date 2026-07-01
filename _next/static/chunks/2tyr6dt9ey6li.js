(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,30259,e=>{"use strict";var a=e.i(35337),i=e.i(4699),t=e.i(52940),n=e.i(88746),r=e.i(62361);e.i(84068);var d=e.i(36762);let o=[{id:"distributors",title:"Наши дистрибьюторы",type:"company",items:r.distributors},{id:"vendors",title:"Наши вендоры",type:"company",items:r.vendors},{id:"integrators",title:"Системные интеграторы",type:"company",items:r.systemIntegrators},{id:"customers",title:"Наши заказчики",type:"customer",items:r.customerProjects}];function s(e,i){return(0,a.jsxs)(C,{"aria-label":`Проект ${i+1}`,children:[(0,a.jsx)(j,{children:i+1}),(0,a.jsx)(N,{children:(0,a.jsx)("p",{children:e.description})})]},`${e.description}-${i}`)}function p(e){return(0,a.jsx)(l,{company:e},e.name)}function l(e){let t,n,r,d,o,s,p,l=(0,i.c)(19),{company:c}=e;l[0]!==c.name?(t=c.name.split(/[\s/]+/).filter(Boolean).slice(0,2).map(e=>e[0]).join("").toLocaleUpperCase("ru-RU"),l[0]=c.name,l[1]=t):t=l[1],l[2]!==t?(n=(0,a.jsx)(j,{children:t}),l[2]=t,l[3]=n):n=l[3],l[4]!==c.name?(r=(0,a.jsx)("b",{children:c.name}),l[4]=c.name,l[5]=r):r=l[5],l[6]!==c.url?(d=c.url?(0,a.jsx)("span",{children:"Официальный сайт"}):null,l[6]=c.url,l[7]=d):d=l[7],l[8]!==r||l[9]!==d?(o=(0,a.jsxs)(I,{children:[r,d]}),l[8]=r,l[9]=d,l[10]=o):o=l[10],l[11]!==n||l[12]!==o?(s=(0,a.jsxs)(a.Fragment,{children:[n,o]}),l[11]=n,l[12]=o,l[13]=s):s=l[13];let m=s;if(c.url){let e;return l[14]!==m||l[15]!==c.url?(e=(0,a.jsx)(_,{href:c.url,rel:"noopener noreferrer",target:"_blank",children:m}),l[14]=m,l[15]=c.url,l[16]=e):e=l[16],e}return l[17]!==m?(p=(0,a.jsx)(v,{children:m}),l[17]=m,l[18]=p):p=l[18],p}let c=(0,n.default)(d.BaseSection).withConfig({displayName:"partners-page__PartnersRoot",componentId:"sc-b3a3fde4-0"})`
  min-height: 648px;
  padding: 48px 0 64px;
`,m=n.default.div.withConfig({displayName:"partners-page__Accordion",componentId:"sc-b3a3fde4-1"})`
  display: grid;
  gap: 16px;
`,h=n.default.section.withConfig({displayName:"partners-page__AccordionItem",componentId:"sc-b3a3fde4-2"})`
  display: grid;
  gap: 14px;
`,x=n.default.h2.withConfig({displayName:"partners-page__AccordionHeading",componentId:"sc-b3a3fde4-3"})`
  font-size: inherit;
`,g=(0,n.default)(d.RaisedButton).withConfig({displayName:"partners-page__AccordionTrigger",componentId:"sc-b3a3fde4-4"})`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 18px;
  width: 100%;
  min-height: 76px;
  padding: 16px 22px;
  border-radius: 22px;
  color: var(--heading);
  font: inherit;
  font-size: 24px;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  transition:
    box-shadow 500ms linear,
    transform 500ms linear,
    color 500ms linear,
    background-color 500ms linear;

  ${({$open:e})=>e?`
        box-shadow: inset 5px 5px 10px var(--shadow-pressed), inset -4px -4px 9px var(--shadow-light);
      `:""}

  &:hover {
    transform: translateY(1px);
    box-shadow:
      inset 3px 3px 7px var(--shadow-dark),
      inset -3px -3px 7px var(--shadow-light);
  }

  span {
    min-width: 0;
    overflow-wrap: anywhere;
  }

  @media (max-width: 560px) {
    min-height: 66px;
    padding: 14px 18px;
    font-size: 20px;
  }
`,f=n.default.span.withConfig({displayName:"partners-page__Chevron",componentId:"sc-b3a3fde4-5"})`
  color: var(--accent-strong);
  font-size: 28px;
  line-height: 1;
`,u=n.default.div.withConfig({displayName:"partners-page__AccordionPanel",componentId:"sc-b3a3fde4-6"})`
  padding: 4px 0 18px;

  &[hidden] {
    display: none;
  }
`,w=n.default.div.withConfig({displayName:"partners-page__CompanyGrid",componentId:"sc-b3a3fde4-7"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
`,y=n.default.div.withConfig({displayName:"partners-page__CustomerGrid",componentId:"sc-b3a3fde4-8"})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`,b=n.css`
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  min-height: 116px;
  padding: 18px;
  border-radius: 22px;
  color: var(--text-card);
  background:
    linear-gradient(145deg, var(--card-gradient-start), var(--card-gradient-end)),
    var(--surface);
  box-shadow: var(--shadow-card);
`,v=n.default.article.withConfig({displayName:"partners-page__CompanyCardStatic",componentId:"sc-b3a3fde4-9"})`
  ${b}
`,_=n.default.a.withConfig({displayName:"partners-page__CompanyCardLink",componentId:"sc-b3a3fde4-10"})`
  ${b}
  transition:
    box-shadow 500ms linear,
    transform 500ms linear;

  &:hover {
    transform: translateY(1px);
    box-shadow:
      inset 3px 3px 7px var(--shadow-dark),
      inset -3px -3px 7px var(--shadow-light);
  }
`,C=n.default.article.withConfig({displayName:"partners-page__CustomerCard",componentId:"sc-b3a3fde4-11"})`
  ${b}
  align-items: flex-start;
`,j=n.default.span.withConfig({displayName:"partners-page__LogoSlot",componentId:"sc-b3a3fde4-12"})`
  display: grid;
  width: 56px;
  height: 56px;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 18px;
  color: var(--on-accent);
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow:
    8px 8px 18px var(--shadow-dark),
    -8px -8px 18px var(--shadow-light);
  font-size: 16px;
  font-weight: 900;
`,I=n.default.span.withConfig({displayName:"partners-page__CompanyContent",componentId:"sc-b3a3fde4-13"})`
  display: grid;
  min-width: 0;
  gap: 7px;

  b {
    color: var(--heading);
    line-height: 1.25;
    overflow-wrap: anywhere;
  }

  span {
    color: var(--muted);
    font-size: 13px;
    font-weight: 700;
  }
`,N=n.default.div.withConfig({displayName:"partners-page__CustomerContent",componentId:"sc-b3a3fde4-14"})`
  display: grid;
  min-width: 0;
  gap: 8px;

  p {
    color: var(--text-soft);
    font-size: 14px;
    line-height: 1.5;
  }
`;e.s(["PartnersPage",0,function(){let e,n,r,l,b=(0,i.c)(6);b[0]===Symbol.for("react.memo_cache_sentinel")?(e=["distributors"],b[0]=e):e=b[0];let[v,_]=(0,t.useState)(e);b[1]===Symbol.for("react.memo_cache_sentinel")?(n=e=>{_(a=>a.includes(e)?a.filter(a=>a!==e):[...a,e])},b[1]=n):n=b[1];let C=n;return b[2]!==v?(r=o.map(e=>{let i=v.includes(e.id),t=`partners-${e.id}`;return(0,a.jsxs)(h,{children:[(0,a.jsx)(x,{children:(0,a.jsxs)(g,{type:"button",$open:i,"aria-controls":t,"aria-expanded":i,onClick:()=>C(e.id),children:[(0,a.jsx)("span",{children:e.title}),(0,a.jsx)(f,{"aria-hidden":"true",children:"⌄"})]})}),(0,a.jsx)(u,{id:t,hidden:!i,children:"company"===e.type?(0,a.jsx)(w,{children:e.items.map(p)}):(0,a.jsx)(y,{children:e.items.map(s)})})]},e.id)}),b[2]=v,b[3]=r):r=b[3],b[4]!==r?(l=(0,a.jsx)(c,{"aria-label":"Партнёры",children:(0,a.jsx)(d.ContentColumn,{children:(0,a.jsx)(m,{children:r})})}),b[4]=r,b[5]=l):l=b[5],l}])}]);