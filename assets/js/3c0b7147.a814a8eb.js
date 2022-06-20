"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[6339],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,g=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},604:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={},u="Component annotation arguments ordering",c={unversionedId:"rules/angular/component-annotation-arguments-ordering",id:"rules/angular/component-annotation-arguments-ordering",title:"Component annotation arguments ordering",description:"Configurable",source:"@site/docs/rules/angular/component-annotation-arguments-ordering.md",sourceDirName:"rules/angular",slug:"/rules/angular/component-annotation-arguments-ordering",permalink:"/docs/rules/angular/component-annotation-arguments-ordering",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/angular/component-annotation-arguments-ordering.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid preserveWhitespace: false",permalink:"/docs/rules/angular/avoid-preserve-whitespace-false"},next:{title:"Prefer using onPush change detection strategy",permalink:"/docs/rules/angular/prefer-on-push-cd-strategy"}},s={},p=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3}],m={toc:p};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"component-annotation-arguments-ordering"},"Component annotation arguments ordering"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"component-annotation-arguments-ordering"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Style"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Enforces Angular ",(0,a.kt)("inlineCode",{parentName:"p"},"@Component")," annotation arguments ordering."),(0,a.kt)("p",null,"The value for ",(0,a.kt)("inlineCode",{parentName:"p"},"order")," may be an array consisting of the following strings (default order listed):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"selector"),(0,a.kt)("li",{parentName:"ul"},"templates"),(0,a.kt)("li",{parentName:"ul"},"styles"),(0,a.kt)("li",{parentName:"ul"},"directives"),(0,a.kt)("li",{parentName:"ul"},"pipes"),(0,a.kt)("li",{parentName:"ul"},"providers"),(0,a.kt)("li",{parentName:"ul"},"encapsulation"),(0,a.kt)("li",{parentName:"ul"},"visibility"),(0,a.kt)("li",{parentName:"ul"},"exports"),(0,a.kt)("li",{parentName:"ul"},"change-detection")),(0,a.kt)("h3",{id:"config-example"},"Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - component-annotation-arguments-ordering:\n        order:\n          - selector\n          - templates\n          - change-detection\n")))}d.isMDXComponent=!0}}]);