"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[581],{35318:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},29323:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var n=r(25773),o=(r(27378),r(35318));const a={id:"motivation",title:"Motivation"},i=void 0,c={unversionedId:"motivation",id:"motivation",title:"Motivation",description:"Forms concept",source:"@site/../docs/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/docs/motivation",tags:[],version:"current",frontMatter:{id:"motivation",title:"Motivation"},sidebar:"docs",previous:{title:"What are uniforms?",permalink:"/docs/what-are-uniforms"},next:{title:"Comparison matrix",permalink:"/docs/compare-matrix"}},s={},l=[{value:"Forms concept",id:"forms-concept",level:2}],m={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"forms-concept"},"Forms concept"),(0,o.kt)("p",null,"There\u2019s a very interesting class-based inheritance concept for forms.\nBasically, there are a few types of forms with different capabilities.\nMost of the time you\u2019ll be using either AutoForm or ValidatedForm, but there are quite a few more to choose from:"),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/uniforms-graph.svg",alt:"AutoForm class inheritance from ValidatedQuickForm which subsequently inherits from QuickForm and ValidatedForm."})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"If you are not familiar with concept of HOC, read one of many posts about them first."),"\nI\u2019m sure you\u2019ve read at least one of ",(0,o.kt)("em",{parentName:"p"},"Why ES6 classes are bad")," or ",(0,o.kt)("em",{parentName:"p"},"class considered harmful")," posts. I\u2019ve read them too, so why is uniforms using classes? Well, it\u2019s all about the complexity."),(0,o.kt)("p",{parentName:"blockquote"},"-- ",(0,o.kt)("cite",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/radekmie"},"Rados\u0142aw Miernik")))),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/hoc-hell.png",alt:"React DevTools when lots of HOC\u2019s are applied to a component."})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"I wanted to achieve the same functionality as with multiple HOCs, but within one component. To be honest, readability is more important than performance. In short, I\u2019ve reached (more or less) traits with ES6 classes. The result?"),(0,o.kt)("p",{parentName:"blockquote"},"-- ",(0,o.kt)("cite",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/radekmie"},"Rados\u0142aw Miernik")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import BaseForm from './BaseForm';\nimport QuickForm from './QuickForm';\nimport ValidatedForm from './ValidatedForm';\n\nconst ValidatedQuickForm = ValidatedForm.Validated(QuickForm.Quick(BaseForm));\n")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{src:"/img/uniforms-traits.png",alt:'Single AutoValidatedQuickSemanticForm component (using 5 "traits") viewed in React DevTools.'})),(0,o.kt)("p",null,"While it\u2019s not a universal approach that will work in every situation, using it in uniforms allows us to deliver clean-looking components while keeping extensibility and separation of concerns."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Based on ",(0,o.kt)("a",{parentName:"p",href:"https://blog.meteor.com/managing-forms-in-a-meteor-react-project-with-uniforms-33d60602b43a"},"Managing forms in a Meteor/React project with the uniforms package")," written by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MacRusher"},"Maciej Stasie\u0142uk"),"."))}u.isMDXComponent=!0}}]);