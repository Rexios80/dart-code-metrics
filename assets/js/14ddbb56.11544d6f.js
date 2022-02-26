"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5065],{3905:function(e,r,n){n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1711:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var t=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={},l="Binary expression operand order",c={unversionedId:"rules/common/binary-expression-operand-order",id:"rules/common/binary-expression-operand-order",title:"Binary expression operand order",description:"Has auto-fix",source:"@site/docs/rules/common/binary-expression-operand-order.md",sourceDirName:"rules/common",slug:"/rules/common/binary-expression-operand-order",permalink:"/docs/rules/common/binary-expression-operand-order",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/binary-expression-operand-order.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid unused parameters",permalink:"/docs/rules/common/avoid-unused-parameters"},next:{title:"Double literal format",permalink:"/docs/rules/common/double-literal-format"}},u={},p=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2}],d={toc:p};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-expression-operand-order"},"Binary expression operand order"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"binary-expression-operand-order"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Style"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns when a literal value is on the left hand side in a binary expressions."),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final a = 1 + b;\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final a = b + 1;\n")),(0,a.kt)("p",null,"Inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://palantir.github.io/tslint/rules/binary-expression-operand-order/"},"TSLint rule")))}m.isMDXComponent=!0}}]);