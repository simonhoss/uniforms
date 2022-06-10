"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[918],{89705:function(e,t,a){a.r(t),a.d(t,{default:function(){return ne}});var n=a(27378),l=a(38944),s=a(25773),r=a(99213),i=a(81884);function c(e){const{permalink:t,title:a,subLabel:l}=e;return n.createElement(i.Z,{className:"pagination-nav__link",to:t},l&&n.createElement("div",{className:"pagination-nav__sublabel"},l),n.createElement("div",{className:"pagination-nav__label"},a))}function o(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(c,(0,s.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(c,(0,s.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var d=a(50353),m=a(58696),u=a(49498);const v={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=v[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,d.Z)(),{pluginId:r}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,u.J)(r),{latestDocSuggestion:c,latestVersionSuggestion:o}=(0,m.Jo)(r),v=null!=c?c:(E=o).docs.find((e=>e.id===E.mainDocId));var E;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:o.label,to:v.path,onClick:()=>i(o.name)})))}function g(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function p(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(71956);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function k(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(k,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var L="iconEdit_OMbO";function Z(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function C(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(Z,null),n.createElement(r.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var U="tag_VWGF",T="tagRegular_sIPu",y="tagWithCount_YgKf";function w(e){const{permalink:t,name:a,count:s}=e;return n.createElement(i.Z,{href:t,className:(0,l.Z)(U,{[T]:!s,[y]:s})},a,s&&n.createElement("span",null,s))}var A="tags_WPdo",M="tag_XHyC";function H(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(A,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:M},n.createElement(w,{name:t,permalink:a}))}))))}var x="lastUpdated_vA0S";function B(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(H,e)))}function V(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:r}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(C,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",x)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:s})))}function O(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:r,formattedLastUpdatedAt:i,lastUpdatedBy:c,tags:o}=a,d=o.length>0,m=!!(s||r||c);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(B,{tags:o}),m&&n.createElement(V,{editUrl:s,lastUpdatedAt:r,lastUpdatedBy:c,formattedLastUpdatedAt:i})):null}function S(e){let{toc:t,className:a,linkClassName:l,isChild:s}=e;return t.length?n.createElement("ul",{className:s?void 0:a},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(S,{isChild:!0,toc:e.children,className:a,linkClassName:l}))))):null}function I(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:c,...o}=e;const d=(0,u.LU)(),m=null!=i?i:d.tableOfContents.minHeadingLevel,v=null!=c?c:d.tableOfContents.maxHeadingLevel,b=(0,u.b9)({toc:t,minHeadingLevel:m,maxHeadingLevel:v}),h=(0,n.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:m,maxHeadingLevel:v}}),[l,r,m,v]);return(0,u.Si)(h),n.createElement(S,(0,s.Z)({toc:b,className:a,linkClassName:l},o))}var D="tableOfContents_jWtb";function F(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.Z)(D,"thin-scrollbar",t)},n.createElement(I,(0,s.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}var P="tocCollapsible_aX8Q",W="tocCollapsibleButton_Va7b",z="tocCollapsibleContent_EOAA",R="tocCollapsibleExpanded_mrpG";function J(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:c,toggleCollapsed:o}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(P,{[R]:!c},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",W),onClick:o},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:z,collapsed:c},n.createElement(I,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var j=a(23635),q="docItemContainer_yJzi",G="docItemCol_ygLL",K="tocMobile_By44",X="breadcrumbsContainer_nmcO",Y="breadcrumbsItemLink_LVKE",Q=a(98948);function $(e){let{children:t,href:a}=e;const s=(0,l.Z)("breadcrumbs__link",Y);return a?n.createElement(i.Z,{className:s,href:a},t):n.createElement("span",{className:s},t)}function ee(e){let{children:t,active:a}=e;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function te(){const e=(0,Q.Z)("/");return n.createElement(ee,null,n.createElement($,{href:e},"\ud83c\udfe0"))}function ae(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,X),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(te,null),e.map(((t,a)=>n.createElement(ee,{key:a,active:a===e.length-1},n.createElement($,{href:t.href},t.label)))))):null}function ne(e){var t;const{content:a}=e,{metadata:s,frontMatter:r,assets:i}=a,{keywords:c,hide_title:d,hide_table_of_contents:m,toc_min_heading_level:v,toc_max_heading_level:b}=r,{description:h,title:E}=s,N=null!=(t=i.image)?t:r.image,k=!d&&void 0===a.contentTitle,_=(0,u.iP)(),L=!m&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:E,description:h,keywords:c,image:N}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[G]:!m})},n.createElement(g,null),n.createElement("div",{className:q},n.createElement("article",null,n.createElement(ae,null),n.createElement(p,null),L&&n.createElement(J,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:b,className:(0,l.Z)(u.kM.docs.docTocMobile,K)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},k&&n.createElement("header",null,n.createElement(j.Z,{as:"h1"},E)),n.createElement(a,null)),n.createElement(O,e)),n.createElement(o,{previous:s.previous,next:s.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(F,{toc:a.toc,minHeadingLevel:v,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},23635:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(25773),l=a(27378),s=a(38944),r=a(99213),i=a(49498),c="anchorWithStickyNavbar_YDjN",o="anchorWithHideOnScrollNavbar_c5FC";function d(e){let{as:t,id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[o]:m,[c]:!m}),id:a}),d.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)}function m(e){let{as:t,...a}=e;return"h1"===t?l.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):l.createElement(d,(0,n.Z)({as:t},a))}}}]);