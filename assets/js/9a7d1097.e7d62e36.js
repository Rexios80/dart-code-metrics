"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[4894],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1701:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},c="Avoid duplicate exports",p={unversionedId:"rules/common/avoid-duplicate-exports",id:"rules/common/avoid-duplicate-exports",title:"Avoid duplicate exports",description:"Rule id",source:"@site/docs/rules/common/avoid-duplicate-exports.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-duplicate-exports",permalink:"/docs/rules/common/avoid-duplicate-exports",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-duplicate-exports.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid collection methods with unrelated types",permalink:"/docs/rules/common/avoid-collection-methods-with-unrelated-types"},next:{title:"Avoid dynamic",permalink:"/docs/rules/common/avoid-dynamic"}},u={},d=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}],s={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avoid-duplicate-exports"},"Avoid duplicate exports"),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"avoid-duplicate-exports"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Warning"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns when a file has multiple ",(0,a.kt)("inlineCode",{parentName:"p"},"exports")," declarations with the same URI."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"With the configuration in the example below, here are some bad/good examples."),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"import \"package:flutter/material.dart\";\nimport \"package:flutter_bloc/flutter_bloc.dart\";\n\nexport 'package:my_app/good_folder/something.dart';\nexport 'package:my_app/good_folder/something.dart'; // LINT\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'import "package:flutter/material.dart";\nimport "package:flutter_bloc/flutter_bloc.dart";\n\nexport \'package:my_app/good_folder/something.dart\';\n')))}m.isMDXComponent=!0}}]);