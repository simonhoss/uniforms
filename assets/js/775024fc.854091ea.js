"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[908],{35318:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30135:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var n=r(25773),o=(r(27378),r(35318));const a={id:"what-are-uniforms",title:"What are uniforms?"},i=void 0,s={unversionedId:"what-are-uniforms",id:"what-are-uniforms",title:"What are uniforms?",description:"Generally speaking, uniforms are a set of React libraries for building forms from every schema.",source:"@site/../docs/what-are-uniforms.md",sourceDirName:".",slug:"/what-are-uniforms",permalink:"/docs/what-are-uniforms",tags:[],version:"current",frontMatter:{id:"what-are-uniforms",title:"What are uniforms?"},sidebar:"docs",next:{title:"Motivation",permalink:"/docs/motivation"}},l={},u=[{value:"Core features",id:"core-features",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generally speaking, uniforms are a set of React libraries for building forms from every schema."),(0,o.kt)("h3",{id:"core-features"},"Core features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Automatic forms generation"),(0,o.kt)("li",{parentName:"ul"},"Fields capable of rendering every schema"),(0,o.kt)("li",{parentName:"ul"},"Helper for creating custom fields with one line"),(0,o.kt)("li",{parentName:"ul"},"Inline and asynchronous form validation"),(0,o.kt)("li",{parentName:"ul"},"Various schemas integration"),(0,o.kt)("li",{parentName:"ul"},"Wide range of themes support")),(0,o.kt)("p",null,"Similarly to other form packages, uniforms can help you with rendering a form, by taking care of its state management, validation, and submission.\nWhat makes it unique though, is the ability to ",(0,o.kt)("strong",{parentName:"p"},"completely generate the form")," for you, without having to manually provide its fields."),(0,o.kt)("p",null,"In order to do so, uniforms require you to do two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Provide ",(0,o.kt)("strong",{parentName:"li"},"the schema")," of your data. You can approach the schema as a formal description of the data, where you define its types, allowed values, default values, required ones and so on."),(0,o.kt)("li",{parentName:"ol"},"Select desired ",(0,o.kt)("strong",{parentName:"li"},"theme"),". The theme is basically a package containing pre-styled form components in one of the popular styles (AntD, Bootstrap 3, Bootstrap 4, Bootstrap 5, Material, MUI, Semantic) or raw, unstyled HTML.")),(0,o.kt)("p",null,"To operate on the schema, uniforms will need to receive a ",(0,o.kt)("em",{parentName:"p"},"bridge")," of it.\nA bridge is a unified schema mapper that is used by uniforms internals in order to be able to operate on the schema data, validate it and generate errors.\nTo create one, you have to use one of the predefined schema-to-bridge mappers or create one by yourself.\nTo learn more about the bridge concept, please visit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/uth-bridge-concept"},"Under The Hood > Bridge concept")," section."))}p.isMDXComponent=!0}}]);