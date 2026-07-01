(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55321,e=>{"use strict";var a=e.i(35337),i=e.i(4699),t=e.i(71774),r=e.i(88746);e.i(84068);var n=e.i(36762);function d(e){return(0,a.jsx)("p",{children:e},e)}let s=(0,r.default)(n.BaseSection).withConfig({displayName:"news-detail-page__ArticleRoot",componentId:"sc-ae1c717-0"})`
  min-height: 648px;
  padding: 48px 0 72px;
`,l=r.default.header.withConfig({displayName:"news-detail-page__ArticleHeader",componentId:"sc-ae1c717-1"})`
  display: grid;
  gap: 14px;
  max-width: 900px;

  h1 {
    color: var(--heading);
    font-size: clamp(34px, 6vw, 58px);
    line-height: 1.02;
  }

  time {
    color: var(--accent-strong);
    font-weight: 800;
  }
`,o=(0,r.default)(t.default).withConfig({displayName:"news-detail-page__BackLink",componentId:"sc-ae1c717-2"})`
  width: fit-content;
  padding: 12px 18px;
  border-radius: 18px;
  color: var(--text-strong);
  background: var(--surface);
  box-shadow: var(--shadow-raised);
  font-size: 14px;
  font-weight: 800;
  transition:
    box-shadow 500ms linear,
    transform 500ms linear;

  &:hover {
    transform: translateY(1px);
    box-shadow:
      inset 3px 3px 7px var(--shadow-dark),
      inset -3px -3px 7px var(--shadow-light);
  }
`,c=r.default.div.withConfig({displayName:"news-detail-page__ArticleVisual",componentId:"sc-ae1c717-3"})`
  display: grid;
  min-height: clamp(240px, 36vw, 420px);
  place-items: center;
  overflow: hidden;
  border-radius: 28px;
  background:
    radial-gradient(circle at 28% 30%, var(--ambient-accent-strong), transparent 30%),
    linear-gradient(145deg, var(--dark-section-elevated), var(--dark-section-deep));
  box-shadow: var(--shadow-card);
`,p=r.default.span.withConfig({displayName:"news-detail-page__VisualMark",componentId:"sc-ae1c717-4"})`
  display: grid;
  width: 112px;
  height: 112px;
  place-items: center;
  border-radius: 30px;
  color: var(--on-accent);
  background: linear-gradient(145deg, var(--accent), var(--accent-dark));
  box-shadow:
    12px 12px 24px var(--dark-inset-shadow),
    -8px -8px 18px var(--dark-inset-highlight);
  font-size: 38px;
  font-weight: 900;
`,h=r.default.article.withConfig({displayName:"news-detail-page__ArticleBody",componentId:"sc-ae1c717-5"})`
  display: grid;
  gap: 18px;
  max-width: 820px;
  color: var(--text-soft);
  font-size: 18px;
  line-height: 1.68;
`;e.s(["NewsDetailPage",0,function(e){let t,r,x,g,m,w,f,u,v,b,y,_=(0,i.c)(27),{article:j}=e;_[0]===Symbol.for("react.memo_cache_sentinel")?(t=(0,a.jsx)(o,{href:"/news",children:"Все новости"}),_[0]=t):t=_[0],_[1]!==j.sectionTitle?(r=(0,a.jsx)(n.SectionTitle,{children:j.sectionTitle}),_[1]=j.sectionTitle,_[2]=r):r=_[2],_[3]!==j.title?(x=(0,a.jsx)("h1",{id:"news-article-title",children:j.title}),_[3]=j.title,_[4]=x):x=_[4],_[5]!==j.date||_[6]!==j.dateTime?(g=(0,a.jsx)("time",{dateTime:j.dateTime,children:j.date}),_[5]=j.date,_[6]=j.dateTime,_[7]=g):g=_[7],_[8]!==r||_[9]!==x||_[10]!==g?(m=(0,a.jsxs)(l,{children:[t,r,x,g]}),_[8]=r,_[9]=x,_[10]=g,_[11]=m):m=_[11];let k=`Изображение новости: ${j.title}`;return _[12]!==j.date?(w=j.date.slice(0,2),_[12]=j.date,_[13]=w):w=_[13],_[14]!==w?(f=(0,a.jsx)(p,{children:w}),_[14]=w,_[15]=f):f=_[15],_[16]!==k||_[17]!==f?(u=(0,a.jsx)(c,{role:"img","aria-label":k,children:f}),_[16]=k,_[17]=f,_[18]=u):u=_[18],_[19]!==j.paragraphs?(v=j.paragraphs.map(d),_[19]=j.paragraphs,_[20]=v):v=_[20],_[21]!==v?(b=(0,a.jsx)(h,{children:v}),_[21]=v,_[22]=b):b=_[22],_[23]!==b||_[24]!==m||_[25]!==u?(y=(0,a.jsx)(s,{"aria-labelledby":"news-article-title",children:(0,a.jsxs)(n.ContentColumn,{children:[m,u,b]})}),_[23]=b,_[24]=m,_[25]=u,_[26]=y):y=_[26],y}])}]);