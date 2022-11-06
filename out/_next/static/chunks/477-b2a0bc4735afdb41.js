(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[477],{9618:function(e,t,r){var a={"./AuthorLayout":8139,"./AuthorLayout.tsx":8139,"./ListLayout":9446,"./ListLayout.tsx":9446,"./PostLayout":5104,"./PostLayout.tsx":5104,"./PostSimple":8218,"./PostSimple.tsx":8218};function s(e){var t=n(e);return r(t)}function n(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id=9618},7753:function(e,t,r){"use strict";var a=r(5542),s=r(9454),n=r(5893),i=r(5675),l=r.n(i);t.Z=function(e){var t=(0,a.Z)({},e);return(0,n.jsx)(l(),(0,s.Z)({},t))}},8477:function(e,t,r){"use strict";r.d(t,{t:function(){return x}});var a=r(9454),s=r(5138),n=r(5893),i=(r(7294),r(1429)),l=r(1667),c=r(6960),d=r(7753),o=r(5741),x={Image:d.Z,TOCInline:i.K,a:o.Z,pre:l.S,wrapper:function(e){var t=e.layout,i=e.content,l=(0,s.Z)(e,["layout","content"]),c=r(9618)("./".concat(t)).default;return(0,n.jsx)(c,(0,a.Z)({content:i},l))},BlogNewsletterForm:c.w}},5941:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(5893);function s(e){var t=e.children;return(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",children:t})}},1476:function(e,t,r){"use strict";r.d(t,{$t:function(){return x},TQ:function(){return o},Uy:function(){return m}});var a=r(5893),s=r(9008),n=r.n(s),i=r(1163),l=r(7059),c=r.n(l),d=function(e){var t=e.title,r=e.description,s=e.ogType,l=e.ogImage,d=e.twImage,o=e.canonicalUrl,x=(0,i.useRouter)();return(0,a.jsxs)(n(),{children:[(0,a.jsx)("title",{children:t}),(0,a.jsx)("meta",{name:"robots",content:"follow, index"}),(0,a.jsx)("meta",{name:"description",content:r}),(0,a.jsx)("meta",{property:"og:url",content:"".concat(c().siteUrl).concat(x.asPath)}),(0,a.jsx)("meta",{property:"og:type",content:s}),(0,a.jsx)("meta",{property:"og:site_name",content:c().title}),(0,a.jsx)("meta",{property:"og:description",content:r}),(0,a.jsx)("meta",{property:"og:title",content:t}),Array.isArray(l)?l.map((function(e){var t=e.url;return(0,a.jsx)("meta",{property:"og:image",content:t},t)})):(0,a.jsx)("meta",{property:"og:image",content:l},l),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:c().twitter}),(0,a.jsx)("meta",{name:"twitter:title",content:t}),(0,a.jsx)("meta",{name:"twitter:description",content:r}),(0,a.jsx)("meta",{name:"twitter:image",content:d}),(0,a.jsx)("link",{rel:"canonical",href:o||"".concat(c().siteUrl).concat(x.asPath)})]})},o=function(e){var t=e.title,r=e.description,s=c().siteUrl+c().socialBanner,n=c().siteUrl+c().socialBanner;return(0,a.jsx)(d,{title:t,description:r,ogType:"website",ogImage:s,twImage:n})},x=function(e){var t=e.title,r=e.description,s=c().siteUrl+c().socialBanner,l=c().siteUrl+c().socialBanner,o=(0,i.useRouter)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{title:t,description:r,ogType:"website",ogImage:s,twImage:l}),(0,a.jsx)(n(),{children:(0,a.jsx)("link",{rel:"alternate",type:"application/rss+xml",title:"".concat(r," - RSS feed"),href:"".concat(c().siteUrl).concat(o.asPath,"/feed.xml")})})]})},m=function(e){var t=e.authorDetails,r=e.title,s=e.summary,i=e.date,l=e.lastmod,o=e.url,x=e.images,m=void 0===x?[]:x,h=e.canonicalUrl,u=new Date(i).toISOString(),p=new Date(l||i).toISOString(),g=(0===m.length?[c().socialBanner]:"string"===typeof m?[m]:m).map((function(e){return{"@type":"ImageObject",url:e.includes("http")?e:c().siteUrl+e}})),y={"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":o},headline:r,image:g,datePublished:u,dateModified:p,author:t?t.map((function(e){return{"@type":"Person",name:e.name}})):{"@type":"Person",name:c().author},publisher:{"@type":"Organization",name:c().author,logo:{"@type":"ImageObject",url:"".concat(c().siteUrl).concat(c().siteLogo)}},description:s},j=g[0].url;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{title:r,description:s,ogType:"article",ogImage:g,twImage:j,canonicalUrl:h}),(0,a.jsxs)(n(),{children:[i&&(0,a.jsx)("meta",{property:"article:published_time",content:u}),l&&(0,a.jsx)("meta",{property:"article:modified_time",content:p}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(y,null,2)}})]})]})}},1580:function(e,t,r){"use strict";var a=r(5893),s=r(7059),n=r.n(s),i=r(7294);t.Z=function(){var e=(0,i.useState)(!1),t=e[0],r=e[1];(0,i.useEffect)((function(){var e=function(){window.scrollY>50?r(!0):r(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return(0,a.jsxs)("div",{className:"fixed right-8 bottom-8 hidden flex-col gap-3 ".concat(t?"md:flex":"md:hidden"),children:[n().comments.provider&&(0,a.jsx)("button",{"aria-label":"Scroll To Comment",type:"button",onClick:function(){document.getElementById("comment").scrollIntoView()},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",clipRule:"evenodd"})})}),(0,a.jsx)("button",{"aria-label":"Scroll To Top",type:"button",onClick:function(){window.scrollTo({top:0})},className:"rounded-full bg-gray-200 p-2 text-gray-500 transition-all hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600",children:(0,a.jsx)("svg",{className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z",clipRule:"evenodd"})})})]})}},5437:function(e,t,r){"use strict";var a=r(5893),s=r(1664),n=r.n(s),i=r(4955);t.Z=function(e){var t=e.text;return(0,a.jsx)(n(),{href:"/tags/".concat((0,i.G)(t)),children:(0,a.jsx)("a",{className:"mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:t.split(" ").join("-")})})}},8139:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(5893),s=r(6515),n=r(7753),i=r(1476);function l(e){var t=e.children,r=e.content,l=r.name,c=r.avatar,d=r.occupation,o=r.company,x=r.email,m=r.twitter,h=r.linkedin,u=r.github;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.TQ,{title:"About - ".concat(l),description:"About me - ".concat(l)}),(0,a.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:"About"})}),(0,a.jsxs)("div",{className:"items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center space-x-2 pt-8",children:[(0,a.jsx)(n.Z,{src:c,alt:"avatar",width:"192px",height:"192px",className:"h-48 w-48 rounded-full"}),(0,a.jsx)("h3",{className:"pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight",children:l}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:d}),(0,a.jsx)("div",{className:"text-gray-500 dark:text-gray-400",children:o}),(0,a.jsxs)("div",{className:"flex space-x-3 pt-6",children:[(0,a.jsx)(s.Z,{kind:"mail",href:"mailto:".concat(x)}),(0,a.jsx)(s.Z,{kind:"github",href:u}),(0,a.jsx)(s.Z,{kind:"linkedin",href:h}),(0,a.jsx)(s.Z,{kind:"twitter",href:m})]})]}),(0,a.jsx)("div",{className:"prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2",children:t})]})]})]})}},9446:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(5893),s=r(7294),n=r(1163),i=r(8193),l=r(5741),c=r(5437),d=r(7059),o=r.n(d);function x(e){var t=e.totalPages,r=e.currentPage,s=(0,n.useRouter)().pathname.split("/")[1],i=r-1>0,c=r+1<=t;return(0,a.jsx)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:(0,a.jsxs)("nav",{className:"flex justify-between",children:[!i&&(0,a.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!i,children:"Previous"}),i&&(0,a.jsx)(l.Z,{href:r-1===1?"/".concat(s,"/"):"/".concat(s,"/page/").concat(r-1),children:(0,a.jsx)("button",{children:"Previous"})}),(0,a.jsxs)("span",{children:[r," of ",t]}),!c&&(0,a.jsx)("button",{className:"cursor-auto disabled:opacity-50",disabled:!c,children:"Next"}),c&&(0,a.jsx)(l.Z,{href:"/".concat(s,"/page/").concat(r+1),children:(0,a.jsx)("button",{children:"Next"})})]})})}function m(e){var t=e.posts,r=e.title,n=e.initialDisplayPosts,d=void 0===n?[]:n,m=e.pagination,h=(0,s.useState)(""),u=h[0],p=h[1],g=t.filter((function(e){return(e.title+e.summary+e.tags.join(" ")).toLowerCase().includes(u.toLowerCase())})),y=d.length>0&&!u?d:g;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:[(0,a.jsxs)("div",{className:"space-y-2 pt-6 pb-8 md:space-y-5",children:[(0,a.jsx)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",children:r}),(0,a.jsxs)("div",{className:"relative max-w-lg",children:[(0,a.jsx)("input",{"aria-label":"Search articles",type:"text",onChange:function(e){return p(e.target.value)},placeholder:"Search articles",className:"block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"}),(0,a.jsx)("svg",{className:"absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})]}),(0,a.jsxs)("ul",{children:[!g.length&&"No posts found.",y.map((function(e){var t=e.path,r=e.date,s=e.title,n=e.summary,d=e.tags;return(0,a.jsx)("li",{className:"py-4",children:(0,a.jsxs)("article",{className:"space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0",children:[(0,a.jsxs)("dl",{children:[(0,a.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,a.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,a.jsx)("time",{dateTime:r,children:(0,i.p)(r,o().locale)})})]}),(0,a.jsxs)("div",{className:"space-y-3 xl:col-span-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-2xl font-bold leading-8 tracking-tight",children:(0,a.jsx)(l.Z,{href:"/".concat(t),className:"text-gray-900 dark:text-gray-100",children:s})}),(0,a.jsx)("div",{className:"flex flex-wrap",children:d.map((function(e){return(0,a.jsx)(c.Z,{text:e},e)}))})]}),(0,a.jsx)("div",{className:"prose max-w-none text-gray-500 dark:text-gray-400",children:n})]})]})},t)}))]})]}),m&&m.totalPages>1&&!u&&(0,a.jsx)(x,{currentPage:m.currentPage,totalPages:m.totalPages})]})}},5104:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return j}});var a=r(9454),s=r(5893),n=r(7294),i=r(2614),l=r(5741),c=r(5941),d=r(3653),o=r(1476),x=r(7753),m=r(5437),h=r(7059),u=r.n(h),p=r(1580),g=function(e){return"".concat(u().siteRepo,"/blob/master/data/").concat(e)},y={weekday:"long",year:"numeric",month:"long",day:"numeric"};function j(e){var t=e.content,r=e.authorDetails,h=e.next,j=e.prev,v=e.children,f=t.filePath,b=t.path,N=t.slug,k=t.date,w=t.title,Z=t.tags,P=b.split("/")[0],L=(0,n.useState)(!1),C=L[0],S=L[1];return(0,s.jsxs)(d.Z,{children:[(0,s.jsx)(o.Uy,(0,a.Z)({url:"".concat(u().siteUrl,"/").concat(b),authorDetails:r},t)),(0,s.jsx)(p.Z,{}),(0,s.jsx)("article",{children:(0,s.jsxs)("div",{className:"xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",children:[(0,s.jsx)("header",{className:"pt-6 xl:pb-6",children:(0,s.jsxs)("div",{className:"space-y-1 text-center",children:[(0,s.jsx)("dl",{className:"space-y-10",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,s.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,s.jsx)("time",{dateTime:k,children:new Date(k).toLocaleDateString(u().locale,y)})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)(c.Z,{children:w})})]})}),(0,s.jsxs)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0",style:{gridTemplateRows:"auto 1fr"},children:[(0,s.jsxs)("dl",{className:"pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700",children:[(0,s.jsx)("dt",{className:"sr-only",children:"Authors"}),(0,s.jsx)("dd",{children:(0,s.jsx)("ul",{className:"flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8",children:r.map((function(e){return(0,s.jsxs)("li",{className:"flex items-center space-x-2",children:[e.avatar&&(0,s.jsx)(x.Z,{src:e.avatar,width:"38px",height:"38px",alt:"avatar",className:"h-10 w-10 rounded-full"}),(0,s.jsxs)("dl",{className:"whitespace-nowrap text-sm font-medium leading-5",children:[(0,s.jsx)("dt",{className:"sr-only",children:"Name"}),(0,s.jsx)("dd",{className:"text-gray-900 dark:text-gray-100",children:e.name}),(0,s.jsx)("dt",{className:"sr-only",children:"Twitter"}),(0,s.jsx)("dd",{children:e.twitter&&(0,s.jsx)(l.Z,{href:e.twitter,className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:e.twitter.replace("https://twitter.com/","@")})})]})]},e.name)}))})})]}),(0,s.jsxs)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:[(0,s.jsx)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:v}),(0,s.jsx)("div",{className:"pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",children:(0,s.jsx)(l.Z,{href:g(f),children:"View on GitHub"})}),u().comments&&(0,s.jsxs)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",id:"comment",children:[!C&&(0,s.jsx)("button",{onClick:function(){return S(!0)},children:"Load Comments"}),C&&(0,s.jsx)(i.HW,{commentsConfig:u().comments,slug:N})]})]}),(0,s.jsxs)("footer",{children:[(0,s.jsxs)("div",{className:"divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y",children:[Z&&(0,s.jsxs)("div",{className:"py-4 xl:py-8",children:[(0,s.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Tags"}),(0,s.jsx)("div",{className:"flex flex-wrap",children:Z.map((function(e){return(0,s.jsx)(m.Z,{text:e},e)}))})]}),(h||j)&&(0,s.jsxs)("div",{className:"flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",children:[j&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Previous Article"}),(0,s.jsx)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,s.jsx)(l.Z,{href:"/".concat(j.path),children:j.title})})]}),h&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400",children:"Next Article"}),(0,s.jsx)("div",{className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:(0,s.jsx)(l.Z,{href:"/".concat(h.path),children:h.title})})]})]})]}),(0,s.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,s.jsx)(l.Z,{href:"/".concat(P),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:"\u2190 Back to the blog"})})]})]})]})})]})}},8218:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var a=r(9454),s=r(5893),n=r(7294),i=r(2614),l=r(8193),c=r(5741),d=r(5941),o=r(3653),x=r(1476),m=r(7059),h=r.n(m),u=r(1580);function p(e){var t=e.content,r=e.next,m=e.prev,p=e.children,g=(0,n.useState)(!1),y=g[0],j=g[1],v=t.path,f=t.slug,b=t.date,N=t.title;return(0,s.jsxs)(o.Z,{children:[(0,s.jsx)(x.Uy,(0,a.Z)({url:"".concat(h().siteUrl,"/").concat(v)},t)),(0,s.jsx)(u.Z,{}),(0,s.jsx)("article",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("header",{children:(0,s.jsxs)("div",{className:"space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700",children:[(0,s.jsx)("dl",{children:(0,s.jsxs)("div",{children:[(0,s.jsx)("dt",{className:"sr-only",children:"Published on"}),(0,s.jsx)("dd",{className:"text-base font-medium leading-6 text-gray-500 dark:text-gray-400",children:(0,s.jsx)("time",{dateTime:b,children:(0,l.p)(b,h().locale)})})]})}),(0,s.jsx)("div",{children:(0,s.jsx)(d.Z,{children:N})})]})}),(0,s.jsxs)("div",{className:"divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 ",style:{gridTemplateRows:"auto 1fr"},children:[(0,s.jsx)("div",{className:"divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0",children:(0,s.jsx)("div",{className:"prose max-w-none pt-10 pb-8 dark:prose-dark",children:p})}),h().comments&&(0,s.jsxs)("div",{className:"pt-6 pb-6 text-center text-gray-700 dark:text-gray-300",id:"comment",children:[!y&&(0,s.jsx)("button",{onClick:function(){return j(!0)},children:"Load Comments"}),y&&(0,s.jsx)(i.HW,{commentsConfig:h().comments,slug:f})]}),(0,s.jsx)("footer",{children:(0,s.jsxs)("div",{className:"flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base",children:[m&&(0,s.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,s.jsxs)(c.Z,{href:"/".concat(m.path),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:["\u2190 ",m.title]})}),r&&(0,s.jsx)("div",{className:"pt-4 xl:pt-8",children:(0,s.jsxs)(c.Z,{href:"/".concat(r.path),className:"text-primary-500 hover:text-primary-600 dark:hover:text-primary-400",children:[r.title," \u2192"]})})]})})]})]})})]})}}}]);