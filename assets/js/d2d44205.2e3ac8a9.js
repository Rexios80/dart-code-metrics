"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2759],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7044:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="Avoid global state",s={unversionedId:"rules/common/avoid-global-state",id:"rules/common/avoid-global-state",title:"Avoid global state",description:"Rule id",source:"@site/docs/rules/common/avoid-global-state.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-global-state",permalink:"/docs/rules/common/avoid-global-state",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-global-state.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid dynamic",permalink:"/docs/rules/common/avoid-dynamic"},next:{title:"Avoid ignoring return values",permalink:"/docs/rules/common/avoid-ignoring-return-values"}},u={},p=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avoid-global-state"},"Avoid global state"),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"avoid-global-state"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Warning"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"The rule should violate on not final and non-const top-level variables."),(0,o.kt)("p",null,"Having many mutable global variables inside application is a pretty bad practice:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"application state becomes distributed between multiple files"),(0,o.kt)("li",{parentName:"ul"},"application state is not protected: it can be modified in almost any place"),(0,o.kt)("li",{parentName:"ul"},"it might be hard to debug such applications")),(0,o.kt)("p",null,"So the common practice is to use state management solutions instead of mutable global variables."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"var answer = 42; // LINT\nvar evenNumbers = [1, 2, 3].where((element) => element.isEven); // LINT\n\nclass Foo {\n  static int? bar; // LINT\n}\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"const answer = 42;\nfinal evenNumbers = [1, 2, 3].where((element) => element.isEven);\n\nclass Foo {\n  static int bar = 42;\n}\n")))}m.isMDXComponent=!0}}]);