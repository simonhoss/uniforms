"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[903],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3806:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var o=n(25773),r=(n(27378),n(35318));const i={id:"uth-autofield-algorithm",title:"AutoField algorithm"},a=void 0,l={unversionedId:"uth-autofield-algorithm",id:"uth-autofield-algorithm",title:"AutoField algorithm",description:"Background",source:"@site/../docs/uth-autofield-algorithm.md",sourceDirName:".",slug:"/uth-autofield-algorithm",permalink:"/docs/uth-autofield-algorithm",tags:[],version:"current",frontMatter:{id:"uth-autofield-algorithm",title:"AutoField algorithm"},sidebar:"docs",previous:{title:"Helpers",permalink:"/docs/api-helpers"},next:{title:"Bridge concept",permalink:"/docs/uth-bridge-concept"}},p={},u=[{value:"Background",id:"background",level:2},{value:"Default <code>AutoField</code> implementation",id:"default-autofield-implementation",level:2},{value:"Overriding <code>AutoField</code>",id:"overriding-autofield",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"background"},"Background"),(0,r.kt)("p",null,"Since the beginning, ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField")," was an ordinary React component. Then, in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/issues/741"},"#","741"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"kind")," parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"connectField")," was introduced to make certain optimizations possible. To be exact, this parameter made it possible to reduce the overhead of ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField")," to minimum. The problem is that it increased the complexity of custom themes (or at least keeping them performant)."),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vazco/uniforms/issues/800"},"#","800"),", a new way of creating ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField")," was introduced. Now, instead of a React component, you only specify the component based on its props - the rest is handled in ",(0,r.kt)("inlineCode",{parentName:"p"},"createAutoField"),"."),(0,r.kt)("h2",{id:"default-autofield-implementation"},"Default ",(0,r.kt)("inlineCode",{parentName:"h2"},"AutoField")," implementation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createAutoField } from 'uniforms';\n\nconst AutoField = createAutoField(props => {\n  if (props.allowedValues) {\n    return props.checkboxes && props.fieldType !== Array\n      ? RadioField\n      : SelectField;\n  }\n\n  switch (props.fieldType) {\n    case Array:\n      return ListField;\n    case Boolean:\n      return BoolField;\n    case Date:\n      return DateField;\n    case Number:\n      return NumField;\n    case Object:\n      return NestField;\n    case String:\n      return TextField;\n  }\n\n  return invariant(false, 'Unsupported field type: %s', props.fieldType);\n});\n")),(0,r.kt)("h2",{id:"overriding-autofield"},"Overriding ",(0,r.kt)("inlineCode",{parentName:"h2"},"AutoField")),(0,r.kt)("p",null,"While specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"autoField")," prop on your ",(0,r.kt)("inlineCode",{parentName:"p"},"QuickForm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoForm")," components may cover a lot of cases, some fields - ",(0,r.kt)("inlineCode",{parentName:"p"},"ListField")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"NestField")," - use ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField")," directly. That means there's no easy way to let them know that you have a custom component defined."),(0,r.kt)("p",null,"To make it possible, all ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoFields")," created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAutoField")," are configurable. To adjust the components, use the React context available in ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField.componentDetectorContext"),". You can use it as often as needed - in most apps once will be enough. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<AutoField.componentDetectorContext.Provider value={(props, uniforms) => /* ... */}>\n  <Application />\n</AutoField.componentDetectorContext.Provider>\n")),(0,r.kt)("p",null,"If you want to add an exception and then fallback to the existing algorithm, use ",(0,r.kt)("inlineCode",{parentName:"p"},"AutoField.defaultComponentDetector"),". Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<AutoField.componentDetectorContext.Provider\n  value={(props, uniforms) => {\n    if (props.useSpecialField) {\n      return SpecialField;\n    }\n\n    return AutoField.defaultComponentDetector(props, uniforms);\n  }}\n>\n  <Application />\n</AutoField.componentDetectorContext.Provider>\n")))}d.isMDXComponent=!0}}]);