(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5043],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?t.createElement(f,l(l({ref:n},s),{},{components:r})):t.createElement(f,l({ref:n},s))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2798:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var t=r(2122),o=r(9756),a=(r(7294),r(3905)),l=["components"],i={},c="No boolean literal compare",u={unversionedId:"rules/common/no-boolean-literal-compare",id:"rules/common/no-boolean-literal-compare",isDocsHomePage:!1,title:"No boolean literal compare",description:"Has auto-fix",source:"@site/docs/rules/common/no-boolean-literal-compare.md",sourceDirName:"rules/common",slug:"/rules/common/no-boolean-literal-compare",permalink:"/docs/rules/common/no-boolean-literal-compare",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/no-boolean-literal-compare.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"New line before return",permalink:"/docs/rules/common/newline-before-return"},next:{title:"No empty block",permalink:"/docs/rules/common/no-empty-block"}},s=[{value:"Rule id",id:"rule-id",children:[],level:2},{value:"Severity",id:"severity",children:[],level:2},{value:"Description",id:"description",children:[{value:"Unnecessary comparing",id:"unnecessary-comparing",children:[],level:3}],level:2}],p={toc:s};function m(e){var n=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"no-boolean-literal-compare"},"No boolean literal compare"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-has%20auto--fix-success",alt:"Has auto-fix"})),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"no-boolean-literal-compare"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Style"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns on comparison to a boolean literal, as in ",(0,a.kt)("inlineCode",{parentName:"p"},"x == true"),". Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too. Just use the boolean values directly or negate them."),(0,a.kt)("h3",{id:"unnecessary-comparing"},"Unnecessary comparing"),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x == true; // LINT\n  var c = x != true; // LINT\n\n   // LINT\n  if (x == true) {\n    ...\n  }\n\n   // LINT\n  if (x != false) {\n    ...\n  }\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x;\n  var c = !x;\n\n  if (x) {\n    ...\n  }\n\n  if (!x) {\n    ...\n  }\n")))}m.isMDXComponent=!0}}]);