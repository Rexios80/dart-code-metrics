(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7772],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=l,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4871:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=n(2122),l=n(9756),i=(n(7294),n(3905)),a=["components"],o={},c="Prefer match file name",s={unversionedId:"rules/common/prefer-match-file-name",id:"rules/common/prefer-match-file-name",isDocsHomePage:!1,title:"Prefer match file name",description:"Rule id",source:"@site/docs/rules/common/prefer-match-file-name.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-match-file-name",permalink:"/docs/rules/common/prefer-match-file-name",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/prefer-match-file-name.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer last",permalink:"/docs/rules/common/prefer-last"},next:{title:"Prefer trailing comma",permalink:"/docs/rules/common/prefer-trailing-comma"}},m=[{value:"Rule id",id:"rule-id",children:[],level:2},{value:"Severity",id:"severity",children:[],level:2},{value:"Description",id:"description",children:[{value:"Config example",id:"config-example",children:[],level:3},{value:"Example",id:"example",children:[{value:"Example 1 One class in the file",id:"example-1-one-class-in-the-file",children:[],level:4},{value:"Example 2 Multiple class in the file",id:"example-2-multiple-class-in-the-file",children:[],level:4}],level:3}],level:2}],d={toc:m};function p(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"prefer-match-file-name"},"Prefer match file name"),(0,i.kt)("h2",{id:"rule-id"},"Rule id"),(0,i.kt)("p",null,"prefer-match-file-name"),(0,i.kt)("h2",{id:"severity"},"Severity"),(0,i.kt)("p",null,"Warning"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Warns if the file name does not match the name of the first public class in the file or a private class if there are no\npublic classes."),(0,i.kt)("h3",{id:"config-example"},"Config example"),(0,i.kt)("p",null,"We recommend exclude the ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," folder."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-match-file-name:\n        exclude:\n          - test/**\n    ...\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"example-1-one-class-in-the-file"},"Example 1 One class in the file"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("p",null,"File name: ",(0,i.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("p",null,"File name: ",(0,i.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,i.kt)("h4",{id:"example-2-multiple-class-in-the-file"},"Example 2 Multiple class in the file"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("p",null,"File name: ",(0,i.kt)("strong",{parentName:"p"},"some_other_widget.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class _SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n\nclass SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("p",null,"File name: ",(0,i.kt)("strong",{parentName:"p"},"some_widget.dart")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class _SomeOtherWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n\nclass SomeWidget extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    //...\n  }\n}\n")))}p.isMDXComponent=!0}}]);