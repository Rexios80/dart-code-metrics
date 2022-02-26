"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2673],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(r),m=i,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4243:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return d},toc:function(){return u},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={},l="Codemagic",s={unversionedId:"integrations/codemagic",id:"integrations/codemagic",title:"Codemagic",description:"Codemagic is a CI/CD solution which helps you test and release your Flutter apps with zero configuration and no pain.",source:"@site/docs/integrations/codemagic.md",sourceDirName:"integrations",slug:"/integrations/codemagic",permalink:"/docs/integrations/codemagic",editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/integrations/codemagic.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Long Parameter List",permalink:"/docs/anti-patterns/long-parameter-list"},next:{title:"GitHub Action",permalink:"/docs/integrations/github-action"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"With <code>codemagic.yaml</code>",id:"with-codemagicyaml",level:3},{value:"With the Flutter workflow editor",id:"with-the-flutter-workflow-editor",level:3},{value:"Output example",id:"output-example",level:3},{value:"Results preview",id:"results-preview",level:4},{value:"Logs",id:"logs",level:4}],p={toc:u};function m(e){var t=e.components,c=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"codemagic"},"Codemagic"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://codemagic.io/"},"Codemagic")," is a CI/CD solution which helps you test and release your Flutter apps with zero configuration and no pain."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"with-codemagicyaml"},"With ",(0,o.kt)("inlineCode",{parentName:"h3"},"codemagic.yaml")),(0,o.kt)("p",null,"To enable Dart Code Metrics add the following script to ",(0,o.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="codemagic.yaml"',title:'"codemagic.yaml"'},"scripts:\n  - echo 'previous step'\n  - name: Dart Code Metrics\n    script: |\n      mkdir -p metrics-results\n      flutter pub run dart_code_metrics:metrics analyze lib --reporter=json > metrics-results/dart_code_metrics.json      \n    test_report: metrics-results/dart_code_metrics.json\n")),(0,o.kt)("p",null,"check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/yaml-testing/dart-code-metrics/"},"Codemagic docs")," for more details about ",(0,o.kt)("inlineCode",{parentName:"p"},"codemagic.yaml")," setup."),(0,o.kt)("h3",{id:"with-the-flutter-workflow-editor"},"With the Flutter workflow editor"),(0,o.kt)("p",null,"To enable Dart Code Metrics check the ",(0,o.kt)("inlineCode",{parentName:"p"},"Enable Dart Code Metrics")," option:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Dart Code Metrics Flutter workflow editor",src:r(2239).Z,width:"1633",height:"1096"})),(0,o.kt)("p",null,"check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.codemagic.io/flutter-testing/static-code-analysis/#dart-code-metrics"},"Codemagic docs")," for more details about the Flutter workflow editor setup."),(0,o.kt)("h3",{id:"output-example"},"Output example"),(0,o.kt)("h4",{id:"results-preview"},"Results preview"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Dart Code Metrics results",src:r(5104).Z,width:"2632",height:"1592"})),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Dart Code Metrics results expanded",src:r(3509).Z,width:"1588",height:"1580"})),(0,o.kt)("h4",{id:"logs"},"Logs"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Dart Code Metrics logs",src:r(7194).Z,width:"1596",height:"1586"})))}m.isMDXComponent=!0},2239:function(e,t,r){t.Z=r.p+"assets/images/dcm-flutter-workflow-editor-1ab9a84c6f166c4309ba8483902036bb.png"},7194:function(e,t,r){t.Z=r.p+"assets/images/dcm-logs-84dcc383a0f1163cb59e30d680b8ba55.png"},3509:function(e,t,r){t.Z=r.p+"assets/images/dcm-results-expanded-a51460d97603279e2753b1d52b9ae26d.png"},5104:function(e,t,r){t.Z=r.p+"assets/images/dcm-results-80ade87e4cbce15de28728dfd6a172b1.png"}}]);