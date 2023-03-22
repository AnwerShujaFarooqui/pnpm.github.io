"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6234],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=l,d=u["".concat(o,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function f(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var r=n(2962),l=n(2742),a=(n(9496),n(9613)),i=["components"],p={id:"filtering",title:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f"},o=void 0,c={unversionedId:"filtering",id:"version-7.x/filtering",title:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f",description:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-7.x/filtering.md",sourceDirName:".",slug:"/filtering",permalink:"/ru/filtering",draft:!1,editUrl:"https://translate.pnpm.io/project/pnpm/ru",tags:[],version:"7.x",frontMatter:{id:"filtering",title:"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f"},sidebar:"version-7.x/docs",previous:{title:"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",permalink:"/ru/configuring"},next:{title:"\u0421\u043a\u0440\u0438\u043f\u0442\u044b",permalink:"/ru/scripts"}},m={},s=[{value:"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",id:"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",level:2},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;...",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-1",level:3},{value:"--filter &lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;^...",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-2",level:3},{value:"--filter ...&lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-3",level:3},{value:"--filter &quot;...^&lt;\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430&gt;&quot;",id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-4",level:3},{value:"--filter ./&lt;glob&gt;, --filter {&lt;glob&gt;}",id:"--filter-glob---filter-glob",level:3},{value:"--filter &quot;<since>&quot;",id:"--filter-since",level:3},{value:"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f",level:2},{value:"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c",id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c",level:2},{value:"--filter-prod &lt;filtering_pattern&gt;",id:"--filter-prod-filtering_pattern",level:2},{value:"--test-pattern &lt;glob&gt;",id:"--test-pattern-glob",level:2},{value:"--changed-files-ignore-pattern &lt;glob&gt;",id:"--changed-files-ignore-pattern-glob",level:2}],u={toc:s};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0434\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430\u043c\u0438 \u043f\u0430\u043a\u0435\u0442\u043e\u0432."),(0,a.kt)("p",null,"pnpm \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0439 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0438\u043b\u0438 \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e."),(0,a.kt)("p",null,"\u0421\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u043b\u0430\u0433\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter")," (\u0438\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"-F"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter <package_selector> <command>\n")),(0,a.kt)("h2",{id:"\u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"},"\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435"),(0,a.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430>"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 \u043f\u0430\u043a\u0435\u0442, \u043f\u0440\u043e\u0441\u0442\u043e \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0435\u0433\u043e \u0438\u043c\u044f (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/pkg"),") \u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043d\u0430\u0431\u043e\u0440\u0430 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 (",(0,a.kt)("inlineCode",{parentName:"p"},"@scope/*"),")."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/core" test\npnpm --filter "@babel/*" test\npnpm --filter "*core" test\n')),(0,a.kt)("p",null,"\u0423\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter=core")," \u0432\u044b\u0431\u0435\u0440\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core"),", \u0435\u0441\u043b\u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d. \u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u043b\u0438 \u0432 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u0438\u043c\u0435\u043d\u0430\u043c\u0438 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/core")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"@types/core"),"), \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f \u0431\u0435\u0437 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u0432\u044b\u0431\u0435\u0440\u0435\u0442."),(0,a.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-1"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430>..."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 (\u043f\u0440\u044f\u043c\u044b\u0435 \u0438 \u043d\u0435\u043f\u0440\u044f\u043c\u044b\u0435), \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0438\u043c\u0435\u043d\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435: ",(0,a.kt)("inlineCode",{parentName:"p"},"<package_name>..."),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u0438 \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter foo... test\n")),(0,a.kt)("p",null,"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0448\u0430\u0431\u043b\u043e\u043d \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u043d\u0430\u0431\u043e\u0440\u0430 \u043a\u043e\u0440\u043d\u0435\u0432\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "@babel/preset-*..." test\n')),(0,a.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-2"},"--filter ","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430>^..."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0422\u041e\u041b\u042c\u041a\u041e  \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 (\u043a\u0430\u043a \u043f\u0440\u044f\u043c\u044b\u0435, \u0442\u0430\u043a \u0438 \u043d\u0435\u043f\u0440\u044f\u043c\u044b\u0435), \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0438\u043c\u0435\u043d\u0438 \u0432\u044b\u0448\u0435\u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u043e\u0435 \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0448\u0435\u0432\u0440\u043e\u043d. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"foo")," \u0438 \u0432\u0441\u0435\u0445 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "foo^..." test\n')),(0,a.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-3"},"--filter ...","<","\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430>"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043f\u0430\u043a\u0435\u0442 \u0438 \u0435\u0433\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b (\u043f\u0440\u044f\u043c\u044b\u0435 \u0438 \u043d\u0435\u043f\u0440\u044f\u043c\u044b\u0435), \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0438\u043c\u0435\u043d\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0441 \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435\u043c: ",(0,a.kt)("inlineCode",{parentName:"p"},"...<package_name>"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),"  \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043e\u0442 \u043d\u0435\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo test\n")),(0,a.kt)("h3",{id:"--filter-\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440-\u043f\u0430\u043a\u0435\u0442\u0430-4"},'--filter "...^',"<",'\u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440 \u043f\u0430\u043a\u0435\u0442\u0430>"'),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0422\u041e\u041b\u042c\u041a\u041e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b (\u043f\u0440\u044f\u043c\u044b\u0435 \u0438 \u043d\u0435\u043f\u0440\u044f\u043c\u044b\u0435), \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a \u0438\u043c\u0435\u043d\u0438 \u043f\u0430\u043a\u0435\u0442\u0430 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 \u0441 \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u0435\u043c, \u0437\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0448\u0435\u0432\u0440\u043e\u043d. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0437\u0430\u0432\u0438\u0441\u044f\u0449\u0438\u0445 \u043e\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "...^foo" test\n')),(0,a.kt)("h3",{id:"--filter-glob---filter-glob"},"--filter ./","<","glob>, --filter {","<","glob>}"),(0,a.kt)("p",null,"\u0428\u0430\u0431\u043b\u043e\u043d glob \u043e\u0442\u043d\u043e\u0441\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0440\u0430\u0431\u043e\u0447\u0435\u0433\u043e \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "./packages/**" <cmd>\n')),(0,a.kt)("p",null,"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432\u0441\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0435\u0441\u044f \u0432 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435."),(0,a.kt)("p",null,"\u0415\u0433\u043e \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0430\u043c\u0438 \u043c\u043d\u043e\u0433\u043e\u0442\u043e\u0447\u0438\u044f \u0438 \u0448\u0435\u0432\u0440\u043e\u043d\u0430 \u0434\u043b\u044f \u0432\u044b\u0431\u043e\u0440\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445/\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...{<directory>} <cmd>\npnpm --filter {<directory>}... <cmd>\npnpm --filter ...{<directory>}... <cmd>\n")),(0,a.kt)("p",null,"\u0415\u0433\u043e \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u043d\u043e \u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"[<since>]"),". \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "{packages/**}[origin/master]" <cmd>\npnpm --filter "...{packages/**}[origin/master]" <cmd>\npnpm --filter "{packages/**}[origin/master]..." <cmd>\npnpm --filter "...{packages/**}[origin/master]..." <cmd>\n')),(0,a.kt)("p",null,"\u0418\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0438\u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0430 \u0441 \u0438\u043c\u0435\u043d\u0430\u043c\u0438, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c\u0438 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0448\u0430\u0431\u043b\u043e\u043d\u0443:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'pnpm --filter "@babel/*{components/**}" <cmd>\npnpm --filter "@babel/*{components/**}[origin/master]" <cmd>\npnpm --filter "...@babel/*{components/**}[origin/master]" <cmd>\n')),(0,a.kt)("h3",{id:"--filter-since"},'--filter "',"[<","since>]",'"'),(0,a.kt)("p",null,"\u0412\u044b\u0431\u0438\u0440\u0430\u0435\u0442 \u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e commit/branch. \u041c\u043e\u0436\u0435\u0442 \u0438\u043c\u0435\u0442\u044c \u0441\u0443\u0444\u0444\u0438\u043a\u0441 \u0438\u043b\u0438 \u043f\u0440\u0435\u0444\u0438\u043a\u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"...")," \u0434\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439/\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b \u0432\u043e \u0432\u0441\u0435\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 ",(0,a.kt)("inlineCode",{parentName:"p"},"master")," \u0438 \u0432\u043e \u0432\u0441\u0435\u0445 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter "...[origin/master]" test\n')),(0,a.kt)("h2",{id:"\u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"},"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f"),(0,a.kt)("p",null,'\u041b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u043e\u0432 \u0444\u0438\u043b\u044c\u0442\u0440\u0430 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u043a\u0430\u043a \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434 \u043d\u0438\u043c \u0441\u0442\u043e\u0438\u0442 "!". \u0412 zsh (\u0438, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0431\u043e\u043b\u043e\u0447\u043a\u0430\u0445) "!" \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u044d\u043a\u0440\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c: ',(0,a.kt)("inlineCode",{parentName:"p"},"\\!"),"."),(0,a.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u044d\u0442\u043e \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!foo <cmd>\n")),(0,a.kt)("p",null,"\u0418 \u044d\u0442\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432\u043e \u0432\u0441\u0435\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"lib"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter=!./lib <cmd>\n")),(0,a.kt)("h2",{id:"\u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c"},"\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c"),(0,a.kt)("p",null,"\u041a\u043e\u0433\u0434\u0430 \u043f\u0430\u043a\u0435\u0442\u044b \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u044e\u0442\u0441\u044f, \u0431\u0435\u0440\u0435\u0442\u0441\u044f \u043a\u0430\u0436\u0434\u044b\u0439 \u043f\u0430\u043a\u0435\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u043e\u043c\u0443 \u0438\u0437 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u043e\u0432. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u043e\u0442\u0438\u0442\u0435:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --filter ...foo --filter bar --filter baz... test\n")),(0,a.kt)("h2",{id:"--filter-prod-filtering_pattern"},"--filter-prod ","<","filtering_pattern>"),(0,a.kt)("p",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a ",(0,a.kt)("inlineCode",{parentName:"p"},"--filter"),", \u043d\u043e \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442 ",(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u043f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0438\u0437 \u0440\u0430\u0431\u043e\u0447\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438."),(0,a.kt)("h2",{id:"--test-pattern-glob"},"--test-pattern ","<","glob>"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test-pattern")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c, \u043e\u0442\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043a \u0442\u0435\u0441\u0442\u0430\u043c. \u0415\u0441\u043b\u0438 \u043e\u043d\u0438 \u0435\u0441\u0442\u044c, \u0442\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0435 \u043f\u0430\u043a\u0435\u0442\u044b \u0442\u0430\u043a\u0438\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432 \u043d\u0435 \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0442\u0441\u044f."),(0,a.kt)("p",null,"\u042d\u0442\u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 \u043f\u043e\u043b\u0435\u0437\u0435\u043d \u0441 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u043c \xab\u0438\u0437\u043c\u0435\u043d\u0438\u043b\u043e\u0441\u044c \u0441\xbb (\u0434\u0430\u0442\u0430, \u0432\u0440\u0435\u043c\u044f). \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0442\u0435\u0441\u0442\u044b \u0432\u043e \u0432\u0441\u0435\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445, \u0430 \u0435\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0432 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u043c \u043a\u043e\u0434\u0435 \u043f\u0430\u043a\u0435\u0442\u0430, \u0442\u0435\u0441\u0442\u044b \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u044b \u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u0430\u0445:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --test-pattern="test/*" test\n')),(0,a.kt)("h2",{id:"--changed-files-ignore-pattern-glob"},"--changed-files-ignore-pattern ","<","glob>"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u043e \u0448\u0430\u0431\u043b\u043e\u043d\u0430\u043c glob \u043f\u0440\u0438 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e commit/branch."),(0,a.kt)("p",null,"\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'pnpm --filter="...[origin/master]" --changed-files-ignore-pattern="**/README.md" run build\n')))}f.isMDXComponent=!0}}]);