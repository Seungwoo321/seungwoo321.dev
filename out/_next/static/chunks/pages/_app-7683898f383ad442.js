(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9454:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}n.d(t,{Z:function(){return a}})},5138:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})},2010:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(7294);const a=["light","dark"],o="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:s},c=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:u=d,defaultTheme:c=(n?"system":"light"),attribute:f="data-theme",value:v,children:y,nonce:b})=>{const[x,w]=(0,r.useState)((()=>h(s,c))),[j,_]=(0,r.useState)((()=>h(s))),O=v?Object.values(v):u,k=(0,r.useCallback)((e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());const o=v?v[r]:r,l=t?m():null,s=document.documentElement;if("class"===f?(s.classList.remove(...O),o&&s.classList.add(o)):o?s.setAttribute(f,o):s.removeAttribute(f),i){const e=a.includes(c)?c:null,t=a.includes(r)?r:e;s.style.colorScheme=t}null==l||l()}),[]),C=(0,r.useCallback)((e=>{w(e);try{localStorage.setItem(s,e)}catch(e){}}),[e]),E=(0,r.useCallback)((t=>{const r=g(t);_(r),"system"===x&&n&&!e&&k("system")}),[x,e]);(0,r.useEffect)((()=>{const e=window.matchMedia(o);return e.addListener(E),E(e),()=>e.removeListener(E)}),[E]),(0,r.useEffect)((()=>{const e=e=>{e.key===s&&C(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[C]),(0,r.useEffect)((()=>{k(null!=e?e:x)}),[e,x]);const M=(0,r.useMemo)((()=>({theme:x,setTheme:C,forcedTheme:e,resolvedTheme:"system"===x?j:x,themes:n?[...u,"system"]:u,systemTheme:n?j:void 0})),[x,C,e,j,n,u]);return r.createElement(l.Provider,{value:M},r.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:s,themes:u,defaultTheme:c,attribute:f,value:v,children:y,attrs:O,nonce:b}),y)},p=(0,r.memo)((({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:u,attrs:c,nonce:d})=>{const f="system"===s,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?a.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(e,t=!1,r=!0)=>{const o=u?u[e]:e,i=t?e+"|| ''":`'${o}'`;let s="";return l&&r&&!t&&a.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||o?`c.add(${i})`:"null":o&&(s+=`d[s](n,${i})`),s},g=e?`!function(){${p}${m(e)}}()`:i?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${m(u?"x[e]":"e",!0)}}${f?"":"else{"+m(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${m(u?"x[e]":"e",!0)}}else{${m(s,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})}),(()=>!0)),h=(e,t)=>{if(i)return;let n;try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t},m=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},g=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(207)}])},5741:function(e,t,n){"use strict";var r=n(9454),a=n(5138),o=n(5893),i=n(1664),l=n.n(i);t.Z=function(e){var t=e.href,n=(0,a.Z)(e,["href"]),i=t&&t.startsWith("/"),s=t&&t.startsWith("#");return i?(0,o.jsx)(l(),{href:t,children:(0,o.jsx)("a",(0,r.Z)({},n))}):s?(0,o.jsx)("a",(0,r.Z)({href:t},n)):(0,o.jsx)("a",(0,r.Z)({target:"_blank",rel:"noopener noreferrer",href:t},n))}},3653:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(5893);function a(e){var t=e.children;return(0,r.jsx)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0",children:t})}},6515:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,a,o=n(5893),i=n(7294);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s;function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var f;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}var h;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var g;function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var y={mail:function(e){return i.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},e),r||(r=i.createElement("path",{d:"M2.003 5.884 10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z"})),a||(a=i.createElement("path",{d:"m18 8.118-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"})))},github:function(e){return i.createElement("svg",u({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),s||(s=i.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))},facebook:function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),c||(c=i.createElement("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})))},youtube:function(e){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),f||(f=i.createElement("path",{d:"M23.499 6.203a3.008 3.008 0 0 0-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 0 0-2.088 2.09A31.258 31.26 0 0 0 0 12.01a31.258 31.26 0 0 0 .523 5.785 3.008 3.008 0 0 0 2.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 0 0 2.089-2.09 31.258 31.26 0 0 0 .5-5.784 31.258 31.26 0 0 0-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z"})))},linkedin:function(e){return i.createElement("svg",m({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),h||(h=i.createElement("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})))},twitter:function(e){return i.createElement("svg",v({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),g||(g=i.createElement("path",{d:"M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"})))}},b=function(e){var t=e.kind,n=e.href,r=e.size,a=void 0===r?8:r;if(!n||"mail"===t&&!/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(n))return null;var i=y[t];return(0,o.jsxs)("a",{className:"text-sm text-gray-500 transition hover:text-gray-600",target:"_blank",rel:"noopener noreferrer",href:n,children:[(0,o.jsx)("span",{className:"sr-only",children:t}),(0,o.jsx)(i,{className:"fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-".concat(a," w-").concat(a)})]})}},7059:function(e){"use strict";e.exports={title:"SEUNGWOO's TECH LOG",author:"Seungwoo Lee",headerTitle:"SEUNGWOO's TECH LOG",description:"JavaScript \ub4f1 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790\uc758 \ud559\uc2b5 \ubc0f \uc131\uc7a5 \uacfc\uc815\uc744 \uae30\ub85d\ud569\ub2c8\ub2e4.",language:"ko-KR",theme:"system",siteUrl:"https://seungwoo321.github.io",siteRepo:"https://github.com/Seungwoo321.github.io",siteLogo:"/static/images/logo.png",image:"/static/images/avatar.png",socialBanner:"/static/images/template2.png",email:"seungwoo321@gmail.com",github:"https://github.com/Seungwoo321",twitter:"",facebook:"",youtube:"",linkedin:"",locale:"ko-KR",analytics:{plausibleDataDomain:"",simpleAnalytics:!1,umamiWebsiteId:"",posthogProjectApiKey:"",googleAnalyticsId:"G-DLLRFBXZCW"},newsletter:{provider:null},comments:{provider:"utterances",utterancesConfig:{repo:"Seungwoo321/blog-comment",issueTerm:"pathname",label:"",theme:"github-light",darkTheme:"dark-blue"}}}},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(2648).Z,o=n(7273).Z,i=a(n(7294)),l=n(6273),s=n(2725),u=n(3462),c=n(1018),d=n(7190),f=n(1210),p=n(8684),h={};function m(e,t,n,r){if(e&&l.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(a?"%"+a:"")]=!0}}var g=i.default.forwardRef((function(e,t){var n,a=e.href,g=e.as,v=e.children,y=e.prefetch,b=e.passHref,x=e.replace,w=e.shallow,j=e.scroll,_=e.locale,O=e.onClick,k=e.onMouseEnter,C=e.onTouchStart,E=e.legacyBehavior,M=void 0===E?!0!==Boolean(!1):E,S=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,!M||"string"!==typeof n&&"number"!==typeof n||(n=i.default.createElement("a",null,n));var T=!1!==y,P=i.default.useContext(u.RouterContext),L=i.default.useContext(c.AppRouterContext);L&&(P=L);var N,z=i.default.useMemo((function(){var e=r(l.resolveHref(P,a,!0),2),t=e[0],n=e[1];return{href:t,as:g?l.resolveHref(P,g):n||t}}),[P,a,g]),Z=z.href,R=z.as,A=i.default.useRef(Z),$=i.default.useRef(R);M&&(N=i.default.Children.only(n));var D=M?N&&"object"===typeof N&&N.ref:t,I=r(d.useIntersection({rootMargin:"200px"}),3),B=I[0],F=I[1],H=I[2],K=i.default.useCallback((function(e){$.current===R&&A.current===Z||(H(),$.current=R,A.current=Z),B(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[R,D,Z,H,B]);i.default.useEffect((function(){var e=F&&T&&l.isLocalURL(Z),t="undefined"!==typeof _?_:P&&P.locale,n=h[Z+"%"+R+(t?"%"+t:"")];e&&!n&&m(P,Z,R,{locale:t})}),[R,Z,F,_,T,P]);var V={ref:K,onClick:function(e){M||"function"!==typeof O||O(e),M&&N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,s,u,c,d){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n)){e.preventDefault();var f=function(){"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:s}):t[a?"replace":"push"](n,{forceOptimisticNavigation:!d})};c?i.default.startTransition(f):f()}}(e,P,Z,R,x,w,j,_,Boolean(L),T)},onMouseEnter:function(e){M||"function"!==typeof k||k(e),M&&N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),!T&&L||l.isLocalURL(Z)&&m(P,Z,R,{priority:!0})},onTouchStart:function(e){M||"function"!==typeof C||C(e),M&&N.props&&"function"===typeof N.props.onTouchStart&&N.props.onTouchStart(e),!T&&L||l.isLocalURL(Z)&&m(P,Z,R,{priority:!0})}};if(!M||b||"a"===N.type&&!("href"in N.props)){var G="undefined"!==typeof _?_:P&&P.locale,W=P&&P.isLocaleDomain&&f.getDomainLocale(R,G,P.locales,P.domainLocales);V.href=W||p.addBasePath(s.addLocale(R,G,P&&P.defaultLocale))}return M?i.default.cloneElement(N,V):i.default.createElement("a",Object.assign({},S,V),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,u=e.disabled||!i,c=r(a.useState(!1),2),d=c[0],f=c[1],p=r(a.useState(null),2),h=p[0],m=p[1];a.useEffect((function(){if(i){if(u||d)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:a},s.push(n),l.set(n,t),t}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(a);var t=s.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&s.splice(t,1)}}}(h,(function(e){return e&&f(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!d){var r=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[h,u,n,t,d]);var g=a.useCallback((function(){f(!1)}),[]);return[m,d,g]};var a=n(7294),o=n(9311),i="function"===typeof IntersectionObserver,l=new Map,s=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),a=r.default.createContext(null);t.AppRouterContext=a;var o=r.default.createContext(null);t.LayoutRouterContext=o;var i=r.default.createContext(null);t.GlobalLayoutRouterContext=i;var l=r.default.createContext(null);t.TemplateContext=l},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(6856).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=i.default,o=(null==t?void 0:t.suspense)?{}:{loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?o.loader=function(){return e}:"function"===typeof e?o.loader=e:"object"===typeof e&&(o=a({},o,e));!1;(o=a({},o,t)).suspense&&(delete o.ssr,delete o.loading);o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated;if("boolean"===typeof o.ssr&&!o.suspense){if(!o.ssr)return delete o.ssr,l(n,o);delete o.ssr}return n(o)},t.noSSR=l;var a=n(6495).Z,o=n(2648).Z,i=(o(n(7294)),o(n(4302)));function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var r=(0,n(2648).Z)(n(7294)).default.createContext(null);t.LoadableContext=r},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9658).Z,a=n(7222).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(6495).Z,i=(0,n(2648).Z)(n(7294)),l=n(6319),s=n(7294).useSyncExternalStore,u=[],c=[],d=!1;function f(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function h(e){return function(e,t){var n=function(){if(!u){var t=new p(e,a);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=function(){n();var e=i.default.useContext(l.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=i.default.lazy(a.loader));var u=null;if(!d){var f=a.webpack?a.webpack():a.modules;f&&c.push((function(e){var t=!0,r=!1,a=void 0;try{for(var o,i=f[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var l=o.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(r)throw a}}}))}var h=a.suspense?function(e,t){return r(),i.default.createElement(a.lazy,o({},e,{ref:t}))}:function(e,t){r();var n=s(u.subscribe,u.getCurrentValue,u.getCurrentValue);return i.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),i.default.useMemo((function(){return n.loading||n.error?i.default.createElement(a.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:u.retry}):n.loaded?i.default.createElement((t=n.loaded)&&t.__esModule?t.default:t,e):null;var t}),[e,n])};return h.preload=function(){return n()},h.displayName="LoadableComponent",i.default.forwardRef(h)}(f,e)}function m(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return m(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){m(u).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};m(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var g=h;t.default=g},207:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return N}});var r=n(9454),a=n(5893),o=(n(7762),n(6870),n(4315),n(1433),n(4525),n(1330),n(2010)),i=n(9008),l=n.n(i),s=n(7059),u=n.n(s),c=n(4298),d=n.n(c),f=({googleAnalyticsId:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{strategy:"lazyOnload",src:`https://www.googletagmanager.com/gtag/js?id=${e}`}),(0,a.jsx)(d(),{strategy:"lazyOnload",id:"ga-script",children:`\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${e}', {\n              page_path: window.location.pathname,\n            });\n        `})]}),p=({plausibleDataDomain:e})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{strategy:"lazyOnload","data-domain":e,src:"https://plausible.io/js/plausible.js"}),(0,a.jsx)(d(),{strategy:"lazyOnload",id:"plausible-script",children:"\n            window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }\n        "})]}),h=({posthogProjectApiKey:e})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d(),{strategy:"lazyOnload",id:"posthog-script",children:`\n            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);\n            posthog.init('${e}',{api_host:'https://app.posthog.com'})\n        `})}),m=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d(),{strategy:"lazyOnload",id:"sa-script",children:"\n            window.sa_event=window.sa_event||function(){var a=[].slice.call(arguments);window.sa_event.q?window.sa_event.q.push(a):window.sa_event.q=[a]};\n        "}),(0,a.jsx)(d(),{strategy:"lazyOnload",src:"https://scripts.simpleanalyticscdn.com/latest.js"})]}),g=({umamiWebsiteId:e})=>(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d(),{async:!0,defer:!0,"data-website-id":e,src:"https://umami.example.com/umami.js"})}),v=({analyticsConfig:e})=>(0,a.jsxs)(a.Fragment,{children:[e.plausibleDataDomain&&(0,a.jsx)(p,{plausibleDataDomain:e.plausibleDataDomain}),e.simpleAnalytics&&(0,a.jsx)(m,{}),e.posthogProjectApiKey&&(0,a.jsx)(h,{posthogProjectApiKey:e.posthogProjectApiKey}),e.umamiWebsiteId&&(0,a.jsx)(g,{umamiWebsiteId:e.umamiWebsiteId}),e.googleAnalyticsId&&(0,a.jsx)(f,{googleAnalyticsId:e.googleAnalyticsId})]}),y=n(5152),b=n.n(y),x=b()((()=>n.e(859).then(n.bind(n,6859)).then((e=>e.AlgoliaSearchProvider))),{ssr:!1}),w=b()((()=>n.e(740).then(n.bind(n,740)).then((e=>e.KBarSearchProvider))),{ssr:!1}),j=(b()((()=>n.e(606).then(n.t.bind(n,1606,23)).then((e=>e.KBarContext))),{ssr:!1}),b()((()=>n.e(859).then(n.bind(n,6859)).then((e=>e.AlgoliaSearchContext))),{ssr:!1}),({searchConfig:e,children:t})=>{if(!e||!e.provider)return(0,a.jsx)(a.Fragment,{children:t});switch(e.provider){case"algolia":return(0,a.jsx)(x,{algoliaConfig:e.algoliaConfig,children:t});case"kbar":return(0,a.jsx)(w,{kbarConfig:e.kbarConfig,children:t});default:return console.log("No suitable provider found. Please choose from algolia or kbar."),(0,a.jsx)(a.Fragment,{children:t})}}),_=[{href:"/blog",title:"Blog"},{href:"/tags",title:"Tags"},{href:"/projects",title:"Projects"},{href:"/about",title:"About"}],O=n(5741),k=n(3653),C=n(6515);function E(){return(0,a.jsx)("footer",{children:(0,a.jsxs)("div",{className:"mt-16 flex flex-col items-center",children:[(0,a.jsxs)("div",{className:"mb-3 flex space-x-4",children:[(0,a.jsx)(C.Z,{kind:"mail",href:"mailto:".concat(u().email),size:6}),(0,a.jsx)(C.Z,{kind:"github",href:u().github,size:6}),(0,a.jsx)(C.Z,{kind:"facebook",href:u().facebook,size:6}),(0,a.jsx)(C.Z,{kind:"youtube",href:u().youtube,size:6}),(0,a.jsx)(C.Z,{kind:"linkedin",href:u().linkedin,size:6}),(0,a.jsx)(C.Z,{kind:"twitter",href:u().twitter,size:6})]}),(0,a.jsxs)("div",{className:"mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,a.jsx)("div",{children:u().author}),(0,a.jsx)("div",{children:" \u2022 "}),(0,a.jsx)("div",{children:"\xa9 ".concat((new Date).getFullYear())}),(0,a.jsx)("div",{children:" \u2022 "}),(0,a.jsx)(O.Z,{href:"/",children:u().title})]})]})})}var M=n(7294),S=function(){var e=(0,M.useState)(!1),t=e[0],n=e[1],r=function(){n((function(e){return document.body.style.overflow=e?"auto":"hidden",!e}))};return(0,a.jsxs)("div",{className:"sm:hidden",children:[(0,a.jsx)("button",{type:"button",className:"ml-1 mr-1 h-8 w-8 rounded py-1","aria-label":"Toggle Menu",onClick:r,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})})}),(0,a.jsxs)("div",{className:"fixed top-0 left-0 z-10 h-full w-full transform bg-gray-200 opacity-95 duration-300 ease-in-out dark:bg-gray-800 ".concat(t?"translate-x-0":"translate-x-full"),children:[(0,a.jsx)("div",{className:"flex justify-end",children:(0,a.jsx)("button",{type:"button",className:"mr-5 mt-11 h-8 w-8 rounded","aria-label":"Toggle Menu",onClick:r,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),(0,a.jsx)("nav",{className:"fixed mt-8 h-full",children:_.map((function(e){return(0,a.jsx)("div",{className:"px-12 py-4",children:(0,a.jsx)(O.Z,{href:e.href,className:"text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",onClick:r,children:e.title})},e.title)}))})]})]})},T=function(){var e=(0,M.useState)(!1),t=e[0],n=e[1],r=(0,o.F)(),i=r.theme,l=r.setTheme,s=r.resolvedTheme;return(0,M.useEffect)((function(){return n(!0)}),[]),(0,a.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4",onClick:function(){return l("dark"===i||"dark"===s?"light":"dark")},children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"text-gray-900 dark:text-gray-100",children:!t||"dark"!==i&&"dark"!==s?(0,a.jsx)("path",{d:"M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"}):(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",clipRule:"evenodd"})})})},P=function(e){var t=e.children;return(0,a.jsx)(k.Z,{children:(0,a.jsxs)("div",{className:"flex h-screen flex-col justify-between",children:[(0,a.jsxs)("header",{className:"flex items-center justify-between py-10",children:[(0,a.jsx)("div",{children:(0,a.jsx)(O.Z,{href:"/","aria-label":u().headerTitle,children:(0,a.jsx)("div",{className:"flex items-center justify-between",children:"string"===typeof u().headerTitle?(0,a.jsx)("div",{className:"hidden h-6 text-2xl font-semibold sm:block",children:u().headerTitle}):u().headerTitle})})}),(0,a.jsxs)("div",{className:"flex items-center text-base leading-5",children:[(0,a.jsx)("div",{className:"hidden sm:block",children:_.map((function(e){return(0,a.jsx)(O.Z,{href:e.href,className:"p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4",children:e.title},e.title)}))}),(0,a.jsx)(T,{}),(0,a.jsx)(S,{})]})]}),(0,a.jsx)("main",{className:"mb-auto",children:t}),(0,a.jsx)(E,{})]})})};function L(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(d(),{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7701657858733816",crossOrigin:"anonymous"})})}function N(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)(o.f,{attribute:"class",defaultTheme:u().theme,children:[(0,a.jsx)(l(),{children:(0,a.jsx)("meta",{content:"width=device-width, initial-scale=1",name:"viewport"})}),(0,a.jsx)(L,{}),(0,a.jsx)(v,{analyticsConfig:u().analytics}),(0,a.jsx)(j,{searchConfig:u().search,children:(0,a.jsx)(P,{children:(0,a.jsx)(t,(0,r.Z)({},n))})})]})}},4525:function(){},1330:function(){},4315:function(){},1433:function(){},6870:function(){},7762:function(){},5152:function(e,t,n){e.exports=n(638)},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},4298:function(e,t,n){e.exports=n(699)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var n=e.O();_N_E=n}]);