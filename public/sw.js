if(!self.define){let e,i={};const t=(t,a)=>(t=new URL(t+".js",a).href,i[t]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=i,document.head.appendChild(e)}else e=t,importScripts(t),i()})).then((()=>{let e=i[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let n={};const c=e=>t(e,o),r={module:{uri:o},exports:n,require:c};i[o]=Promise.all(a.map((e=>r[e]||c(e)))).then((e=>(s(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/ads.txt",revision:"4532aec5e2b6b87887661d7871ed5604"},{url:"/feed.xml",revision:"fe71a669025acb018036bd38556fa31d"},{url:"/manifest.json",revision:"ce748a2b0f5993625b52e91e5ac5ede4"},{url:"/redirects",revision:"d098354f8d24a4e32b1912504ffdcbe5"},{url:"/robots.txt",revision:"600fd9ad7ef08c8e45e5b787e4252cb7"},{url:"/search.json",revision:"39cb94216fcf61f23db474ca5564f613"},{url:"/sellers.json",revision:"8b0ff77b96c9ec63d7fe13da2c6b0c0c"},{url:"/sitemap.xml",revision:"6e9d275602a19e6aff59075836907036"},{url:"/static/favicons/android-chrome-96x96.png",revision:"c57d9ee9f001ed647335f8ff118be196"},{url:"/static/favicons/apple-touch-icon.png",revision:"8616f06bd3a7328d33ea3eafe894e826"},{url:"/static/favicons/favicon-16x16.png",revision:"432a520c116dbcd2ef90bd655f213205"},{url:"/static/favicons/favicon-32x32.png",revision:"6f2d98bd4cd13c81ff171c7b985c941b"},{url:"/static/favicons/favicon.ico",revision:"0c70539d1996404f3e99059f412ca996"},{url:"/static/favicons/icon-192x192.png",revision:"a755d54b342287ac4651a175c783a147"},{url:"/static/favicons/icon-256x256.png",revision:"3b8cb2bd9f861140c4ff69c44bef6404"},{url:"/static/favicons/icon-384x384.png",revision:"ab4f6361151b50e478c43f6252fc956a"},{url:"/static/favicons/icon-512x512.png",revision:"ddd5750fd8d6c5bcbd8d279956866387"},{url:"/static/favicons/mstile-150x150.png",revision:"4b9729d4275cd6a0bfa6ed97ea1b201c"},{url:"/static/favicons/safari-pinned-tab.svg",revision:"3876d24cc2b384f077a1d43f7e476a7b"},{url:"/static/images/avatar.jpeg",revision:"e5d753c83686d667fc909ea7abf5f165"},{url:"/static/images/aws-certified-solutions-architect-associate.png",revision:"e90a643184d2046cd877b16332d04713"},{url:"/static/images/logo.png",revision:"61982b48c4fc5e4e2f8888c1f4459c00"},{url:"/static/images/ocean.jpeg",revision:"8bc0f5f0c9dd22ce6c4673e750349987"},{url:"/static/images/posts/2019/12/15/vue-datamaps-example.png",revision:"58fcd13979744328e24bcc9e93ee51f4"},{url:"/static/images/posts/2020/02/02/npm-sinopia.png",revision:"aebb7d1899543772792ab15e77b71c78"},{url:"/static/images/posts/2021/04/25/01_sql.png",revision:"6d347f8e0cfb09df6e9aee020c45a4fc"},{url:"/static/images/posts/2021/04/25/02_result.png",revision:"c8fed134b21814d775a3b3afdd358b9c"},{url:"/static/images/posts/2021/05/02/happy-javascript.jpg",revision:"ce5aca32c9222f93b996387c0322d24c"},{url:"/static/images/posts/2021/05/20/01_trade.png",revision:"848e0ca95457a078a94273b44ae845aa"},{url:"/static/images/posts/2021/05/20/02_chart.png",revision:"6e0f110427bb9d483ff4fe6a4f5d4e77"},{url:"/static/images/posts/2021/06/07/backtest.png",revision:"02bb8b2b78218157be9940d25fb25d7d"},{url:"/static/images/posts/2021/06/07/bot1.png",revision:"3c0a39948a6b59118085fdf65e4242b0"},{url:"/static/images/posts/2021/06/07/profit1.png",revision:"8c88cfca4da3cb36c12551a9ae12bb89"},{url:"/static/images/posts/2021/06/07/profit2.png",revision:"05c15b576fb18177843f1eddcb4a5936"},{url:"/static/images/posts/2021/06/07/profit3.png",revision:"2858f49d83a7057e30a090f751af5a03"},{url:"/static/images/posts/2021/06/07/stochastic.png",revision:"a17f52bdf13be5b8483017dd3f20f93d"},{url:"/static/images/posts/2021/08/16/001.png",revision:"e25dfb2ac20e49e91a06fb032951a07d"},{url:"/static/images/posts/2021/08/16/002.png",revision:"6f58d56e8c5e275af145c190a4dc8435"},{url:"/static/images/posts/2021/08/16/003.png",revision:"6a560d871ad9ad82ba8f1be9b9261d47"},{url:"/static/images/posts/2021/08/16/004.png",revision:"26fc72b44c3056fd233438a205ad67c1"},{url:"/static/images/posts/2021/08/16/005.png",revision:"ac922619f33f40aad0020518731a285b"},{url:"/static/images/posts/2021/08/16/006.png",revision:"9873f1e64d23e8c9aad6c11a3af3e0c7"},{url:"/static/images/posts/2021/08/16/007.png",revision:"c3c42e5f453fbf773cf2431f50b50bd9"},{url:"/static/images/posts/2021/08/16/008.png",revision:"309e914cfafbcb3ea73f3586d7ca5c35"},{url:"/static/images/posts/2021/08/16/009.png",revision:"dafe04893763a49fde9110ba41b88de6"},{url:"/static/images/posts/2022/01/20/redmine_architecture.png",revision:"e46cfcf6a383fd6f57aa07f5e8903610"},{url:"/static/images/posts/2022/01/24/high-level-flow.png",revision:"f3a8596f9b665c62c8807e712ef67471"},{url:"/static/images/posts/2022/01/28/bot2.png",revision:"7b3e8f19d61688ca03a23dc6d85f7551"},{url:"/static/images/posts/2022/01/31/pass-by-reference-vs-pass-by-value-animation.gif",revision:"197a0c5aa96302b99b8c1d1178d8a86a"},{url:"/static/images/posts/2022/06/16/influxdb-01.png",revision:"ea00a921e7c1ce09c996c90d0af9eab7"},{url:"/static/images/posts/2022/06/16/influxdb-02.png",revision:"12b83ef02de7e1bfd9dd30d41fee58ee"},{url:"/static/images/posts/2022/06/16/influxdb-03.png",revision:"3582945dd7a7e49a8186469cf59a0fb6"},{url:"/static/images/posts/2022/06/16/influxdb-04.png",revision:"265e454d45016e596e096a03e09c2d70"},{url:"/static/images/posts/2022/06/16/mariadb-01.png",revision:"ac3778e624a4777c917eef4c18aa03c7"},{url:"/static/images/posts/2022/06/16/mariadb-02.png",revision:"cf1794d364a3e6ce05dfc38f763eb8cb"},{url:"/static/images/posts/2022/06/16/mariadb-03.png",revision:"4e821e26291888d00e55598913e60542"},{url:"/static/images/posts/2022/06/16/result-containers.png",revision:"9b2a9cb8be34b93ba1fc210705c96ed4"},{url:"/static/images/posts/2022/06/16/result-influxdb.png",revision:"4a1649d6fb26543375d3a37346ab5fa3"},{url:"/static/images/posts/2022/06/16/result-mariadb.png",revision:"bd6f4c7811cbb1881a1ffdb1d55f3c3b"},{url:"/static/images/sparrowhawk-avatar.jpg",revision:"54311e449f8237936b7ce492fd2a2d03"},{url:"/static/images/template.png",revision:"e59bafa507ecfd91e4c76d9112620fdb"},{url:"/static/images/template2.png",revision:"046618f4cb2cfccdfe246fc0c0916471"},{url:"/static/images/template3.png",revision:"a30ffca99365fb588c177da6384e5f6e"},{url:"/static/images/time-machine.jpg",revision:"6924faacbc3b982fb9b0b5686fa86ff7"},{url:"/static/images/twitter-card.png",revision:"f7b83bef373381938f774ddcd8e1a53d"},{url:"/tags/athena/feed.xml",revision:"3824f3b9dbe508c3de07670584611883"},{url:"/tags/closure/feed.xml",revision:"1217760f4b6129e75bd950d60d69b65e"},{url:"/tags/codecommit/feed.xml",revision:"95106effbc67b80e7fcad19aa9615f0f"},{url:"/tags/css/feed.xml",revision:"4975e4d43ac37703d1d18bf24c9a2cce"},{url:"/tags/docker/feed.xml",revision:"33a66fe3eef35891b5ed352487a61218"},{url:"/tags/frontend/feed.xml",revision:"35b29bcf76b35847254c499f02ada9ec"},{url:"/tags/git/feed.xml",revision:"114122d7b2f57add1974848190df628d"},{url:"/tags/ie/feed.xml",revision:"1183a2420e04f3e71bb9b108dc01f796"},{url:"/tags/influxdb/feed.xml",revision:"e94f92a2401f1beaf82924c6eb886c05"},{url:"/tags/javascript/feed.xml",revision:"91267609269871a941ff92270924b9a5"},{url:"/tags/npm/feed.xml",revision:"de968eec74b27037622c43596bc51eda"},{url:"/tags/redmine/feed.xml",revision:"0856093207c3f42412f932ecd6ceb056"},{url:"/tags/sql/feed.xml",revision:"375607246d28dbe18eaa96327dbbfc05"},{url:"/tags/svg/feed.xml",revision:"646642e1822c3884164f9407b7cc34a7"},{url:"/tags/trading-bot/feed.xml",revision:"dea782f5d5dd4f00e9c78b758570dccf"},{url:"/tags/trouble-shooting/feed.xml",revision:"0acd2263d6dc943f289a991f2821d2a0"},{url:"/tags/typescript/feed.xml",revision:"6def2e9a4f2cb10c2f2423b83be0d8c9"},{url:"/tags/vscode/feed.xml",revision:"d0b53bf4505aba6471abf1a56eb3ed27"},{url:"/tags/vue-pivottable/feed.xml",revision:"a4ec9fe5557acc038799318ffc35ee7e"},{url:"/tags/vue/feed.xml",revision:"6406e9ad400cdd13c094a55100fe3acb"},{url:"/vue-datamaps-demo-arcs.png",revision:"fd2be11afe587e33f6b27d6e9df8dbe9"},{url:"/vue-datamaps-demo-aws-region.png",revision:"7b3630185e668ecf20d63f77eea1cba6"},{url:"/vue-datamaps-demo-basic.png",revision:"37ff25b5e3d43dfdde38efc7a5f3fd44"},{url:"/vue-datamaps-demo-bubbles.png",revision:"50e0dbeff2f8b0c03c607d0f3022168d"},{url:"/vue-datamaps-demo-custom-color.png",revision:"624d25c8585069038ac116ea408dcb8e"},{url:"/vue-datamaps-demo-graticules.png",revision:"e3f3b61808b116ea7469bd78660f0f7e"},{url:"/vue-datamaps-demo-south-korea.png",revision:"5addb7c8f683573f46308961b974c51a"},{url:"/vue-datamaps-demo-state-label.png",revision:"304f80c2496471da8fe3572b2b571d23"},{url:"/vue-datamaps-demo-zoom.png",revision:"793a8d7ef5fd67e308e05d968f629fb2"},{url:"/vue-pivottable-demo.gif",revision:"dbf19b1e437a35f12467d5f38986f10d"},{url:"https://seungwoo321.github.io//_next/static/-0hVD1C_D2zDSKbQ0OfMa/_buildManifest.js",revision:"c77e05a1ecbb78c7dce2b9c1940d9dc0"},{url:"https://seungwoo321.github.io//_next/static/-0hVD1C_D2zDSKbQ0OfMa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"https://seungwoo321.github.io//_next/static/chunks/202.d8ea5d8b41ba4760.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/415.c9c1bb0ceaab11ad.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/477-b2a0bc4735afdb41.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/479.2aebf598ca750f0d.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/484.398fcb85e6901e82.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/506.b9cdab5078ffe8c7.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/573-6804e3fdfa6751ba.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/606.7b9f8a67b992dbea.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/740.a351a3bb81de54d0.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/859.fbb1b7493e245ce0.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/896-dcc6c0ec61afe736.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/framework-4556c45dd113b893.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/main-bc837cf60c39558c.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/404-c61dcd5e517bc663.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/_app-5bb35430f42ef290.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/_error-a4ba2246ff8fb532.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/about-669f65e5ba910bb9.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/blog-e3b6d78162acc399.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/blog/%5B...slug%5D-c268c94eb644c7b4.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/blog/page/%5Bpage%5D-77d04936857c7726.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/index-f14873a726615ba5.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/projects-5f722d81caeef384.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/tags-373f3e275a8044d2.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/pages/tags/%5Btag%5D-97121529fa26222e.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"https://seungwoo321.github.io//_next/static/chunks/webpack-11b8648128cf5f13.js",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/css/2cd1f2ef4c1300f6.css",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_AMS-Regular.1608a09b.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_AMS-Regular.4aafdb68.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_AMS-Regular.a79f1c31.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Bold.b6770918.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Bold.cce5b8ec.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Bold.ec17d132.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Regular.07ef19e7.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Regular.55fac258.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Caligraphic-Regular.dad44a7f.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Bold.9f256b85.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Bold.b18f59e1.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Bold.d42a5579.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Regular.7c187121.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Regular.d3c882a6.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Fraktur-Regular.ed38e79f.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Bold.b74a1a8b.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Bold.c3fb5ac2.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Bold.d181c465.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-BoldItalic.6f2bb1df.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-BoldItalic.70d8b0a5.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-BoldItalic.e3f82f9d.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Italic.47373d1e.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Italic.8916142b.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Italic.9024d815.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Regular.0462f03b.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Regular.7f51fe03.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Main-Regular.b7f8fe9b.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-BoldItalic.572d331f.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-BoldItalic.a879cf83.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-BoldItalic.f1035d8d.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-Italic.5295ba48.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-Italic.939bc644.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Math-Italic.f28c23ac.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Bold.8c5b5494.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Bold.94e1e8dc.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Bold.bf59d231.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Italic.3b1e59b3.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Italic.7c9bc82b.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Italic.b4c20c84.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Regular.74048478.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Regular.ba21ed5f.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_SansSerif-Regular.d4d7ba48.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Script-Regular.03e9641d.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Script-Regular.07505710.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Script-Regular.fe9cbbe1.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size1-Regular.e1e279cb.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size1-Regular.eae34984.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size1-Regular.fabc004a.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size2-Regular.57727022.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size2-Regular.5916a24f.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size2-Regular.d6b476ec.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size3-Regular.9acaf01c.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size3-Regular.a144ef58.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size3-Regular.b4230e7e.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size4-Regular.10d95fd3.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size4-Regular.7a996c9d.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Size4-Regular.fbccdabe.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Typewriter-Regular.6258592b.woff",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Typewriter-Regular.a8709e36.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/KaTeX_Typewriter-Regular.d97aaf4a.ttf",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-cyrillic-ext-variable-full-normal.9104569a.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-cyrillic-variable-full-normal.e438c237.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-greek-ext-variable-full-normal.17b3895d.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-greek-variable-full-normal.26749be8.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-latin-ext-variable-full-normal.099eb166.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-latin-variable-full-normal.79d31200.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"},{url:"https://seungwoo321.github.io//_next/static/media/inter-vietnamese-variable-full-normal.1c1580d2.woff2",revision:"-0hVD1C_D2zDSKbQ0OfMa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:t,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
