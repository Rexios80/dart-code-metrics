"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4058],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3400:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return d},toc:function(){return s},default:function(){return m}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],i={},u="Double literal format",c={unversionedId:"rules/common/double-literal-format",id:"rules/common/double-literal-format",title:"Double literal format",description:"Has auto-fix",source:"@site/docs/rules/common/double-literal-format.md",sourceDirName:"rules/common",slug:"/rules/common/double-literal-format",permalink:"/docs/rules/common/double-literal-format",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/double-literal-format.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Binary expression operand order",permalink:"/docs/rules/common/binary-expression-operand-order"},next:{title:"Format comments",permalink:"/docs/rules/common/format-comment"}},d={},s=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Redundant leading &#39;0&#39;",id:"redundant-leading-0",level:3},{value:"Literal begin with &#39;.&#39;",id:"literal-begin-with-",level:3},{value:"Redundant trailing &#39;0&#39;",id:"redundant-trailing-0",level:3}],p={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"double-literal-format"},"Double literal format"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,l.kt)("h2",{id:"rule-id"},"Rule id"),(0,l.kt)("p",null,"double-literal-format"),(0,l.kt)("h2",{id:"severity"},"Severity"),(0,l.kt)("p",null,"Style"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Checks that double literals should begin with ",(0,l.kt)("inlineCode",{parentName:"p"},"0.")," instead of just ",(0,l.kt)("inlineCode",{parentName:"p"},"."),", and should not end with a trailing ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),". Helps keep a consistent style of numeric literals and decrease potential typos."),(0,l.kt)("h3",{id:"redundant-leading-0"},"Redundant leading '0'"),(0,l.kt)("p",null,"Bad:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 05.23, b = 03.6e+15, c = -012.2, d = -001.1e-15;\n")),(0,l.kt)("p",null,"Good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 5.23, b = 3.6e+15, c = -12.2, d = -1.1e-15;\n")),(0,l.kt)("h3",{id:"literal-begin-with-"},"Literal begin with '.'"),(0,l.kt)("p",null,"Bad:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = .257, b = .16e+5, c = -.259, d = -.14e-5;\n")),(0,l.kt)("p",null,"Good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.257, b = 0.16e+5, c = -0.259, d = -0.14e-5;\n")),(0,l.kt)("h3",{id:"redundant-trailing-0"},"Redundant trailing '0'"),(0,l.kt)("p",null,"Bad:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.210, b = 0.100e+5, c = -0.250, d = -0.400e-5;\n")),(0,l.kt)("p",null,"Good:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"  var a = 0.21, b = 0.1e+5, c = -0.25, d = -0.4e-5;\n")))}m.isMDXComponent=!0}}]);