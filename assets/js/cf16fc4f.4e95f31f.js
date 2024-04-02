"use strict";(self.webpackChunklaravel_in_action=self.webpackChunklaravel_in_action||[]).push([[4550],{2864:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(4848),s=a(8453);const r={sidebar_position:1},i="What are Templates?",l={id:"Laravel-Views/What-are-Templates",title:"What are Templates?",description:"Imagine you're building a social media website with multiple user profiles. Instead of creating a separate webpage for each user, you can create a generic template with placeholders for dynamic content. This template can be used to serve different profiles by replacing placeholders with actual user data.",source:"@site/docs/Laravel-Views/What-are-Templates.md",sourceDirName:"Laravel-Views",slug:"/Laravel-Views/What-are-Templates",permalink:"/laravel-in-action/docs/Laravel-Views/What-are-Templates",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/laravel-in-action/blob/main/docs/Laravel-Views/What-are-Templates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Laravel Views",permalink:"/laravel-in-action/docs/category/laravel-views"},next:{title:"Blade Directives",permalink:"/laravel-in-action/docs/Laravel-Views/Blade-Directives"}},o={},c=[{value:"Laravel Blade Templates",id:"laravel-blade-templates",level:2}];function d(e){const t={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"what-are-templates",children:"What are Templates?"}),"\n",(0,n.jsx)(t.p,{children:"Imagine you're building a social media website with multiple user profiles. Instead of creating a separate webpage for each user, you can create a generic template with placeholders for dynamic content. This template can be used to serve different profiles by replacing placeholders with actual user data."}),"\n",(0,n.jsxs)(t.p,{children:["In the example below, ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"[user_name]"})})," and ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"[user_bio]"})})," are placeholders for dynamic user-specific data.\n",(0,n.jsx)(t.img,{alt:"Templates",src:a(2356).A+"",width:"745",height:"395"})]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"In Laravel, these placeholders are replaced using Blade syntax, which includes directives, expressions, and control structures."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"laravel-blade-templates",children:"Laravel Blade Templates"}),"\n",(0,n.jsx)(t.p,{children:"Laravel provides Blade as its template engine. Blade templates are designed to be familiar to those who know HTML while offering additional features for dynamic content and logic. The Blade syntax includes:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Directives"}),": Blade directives are enclosed within ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"@"})})," symbols and control the template's logic and structure. For example, the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"@if"})}),", ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"@foreach"})}),", and ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"@extends"})})," directives are commonly used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Expressions"}),": Blade expressions are enclosed within curly braces ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"{}"})})," and allow you to output dynamic content. For example, ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"{{ $user_name }}"})})," would output the value of the ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"$user_name"})})," variable."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Comments"}),": Blade templates support comments, which are not displayed in the final HTML output."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Below is a simple Blade template illustrating some basic concepts:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-php",children:"@extends('layouts.base_generic')\n\n@section('title', $page->title)\n\n@section('content')\n\t<h1>{{ $page->title }}</h1>\n\t\n\t@foreach ($blog_list as $blog)\n\t<h2>\n\t  <a href=\"{{ $blog->getAbsoluteUrl() }}\">\n\t    {{ strtoupper($blog->header) }}\n\t  </a>\n\t</h2>\n\t<p>{{ Str::limit($blog->body, 100) }}</p>\n\t@endforeach\n@endsection\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2356:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/template-6670e5b0ad5e55a047a8370982370555.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);