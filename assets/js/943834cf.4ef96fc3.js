(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[1298],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return r?t.createElement(v,a(a({ref:n},s),{},{components:r})):t.createElement(v,a({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2556:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var t=r(2122),i=r(9756),o=(r(7294),r(3905)),a=["components"],l={},u="Avoid ignoring return values",c={unversionedId:"rules/common/avoid-ignoring-return-values",id:"rules/common/avoid-ignoring-return-values",isDocsHomePage:!1,title:"Avoid ignoring return values",description:"Rule id",source:"@site/docs/rules/common/avoid-ignoring-return-values.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-ignoring-return-values",permalink:"/docs/rules/common/avoid-ignoring-return-values",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/avoid-ignoring-return-values.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Overview",permalink:"/docs/rules/overview"},next:{title:"Avoid late keyword",permalink:"/docs/rules/common/avoid-late-keyword"}},s=[{value:"Rule id",id:"rule-id",children:[],level:2},{value:"Severity",id:"severity",children:[],level:2},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],d={toc:s};function p(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"avoid-ignoring-return-values"},"Avoid ignoring return values"),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"avoid-ignoring-return-values"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Warning"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Warns when a return value of a method or function invocation or a class instance property access is not used."),(0,o.kt)("p",null,"Silently ignoring such values might lead to a potential error especially when the invocation target is an immutable instance which has all its methods returning a new instance (for example, String or DateTime classes)."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,"Bad:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"int foo() {\n    return 5;\n}\n\nvoid bar() {\n    print('whatever');\n}\n\nvoid main() {\n    bar();\n    foo(); // LINT: return value is silently ignored\n\n    final str = \"Hello there\";\n    str.substr(5); // LINT: Strings are immutable and the return value should be handled\n\n    final date = new DateTime(2018, 1, 13);\n    date.add(Duration(days: 1, hours: 23))); // LINT: Return value ignored, DateTime is immutable\n}\n")),(0,o.kt)("p",null,"Good:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"int foo() {\n    return 5;\n}\n\nvoid bar() {\n    print('whatever');\n}\n\nvoid main() {\n    bar();\n    final f = foo();\n\n    final str = \"Hello there\";\n    final newString = str.substr(5);\n\n    final date = new DateTime(2018, 1, 13);\n    final newDate = date.add(Duration(days: 1, hours: 23)));\n}\n")))}p.isMDXComponent=!0}}]);