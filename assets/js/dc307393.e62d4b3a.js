"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[15],{8483:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=o(4848),t=o(8453);const i={sidebar_position:4},r="Query Scopes",a={id:"Laravel-Models/Query-Scopes",title:"Query Scopes",description:"Query scopes are a powerful tool in Eloquent that allows you to define reusable query constraints. Scopes enable you to encapsulate commonly used query conditions into methods, improving code organization and reusability. They help keep your code DRY (Don\u2019t Repeat Yourself ) and make it easier to maintain.",source:"@site/docs/Laravel-Models/Query-Scopes.md",sourceDirName:"Laravel-Models",slug:"/Laravel-Models/Query-Scopes",permalink:"/databases-in-action/docs/Laravel-Models/Query-Scopes",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Laravel-Models/Query-Scopes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Querying the Database with Eloquent",permalink:"/databases-in-action/docs/Laravel-Models/Querying-the-Database-with-Eloquent"},next:{title:"Using Eloquent Collections and Serialization",permalink:"/databases-in-action/docs/Laravel-Models/Using-Eloquent-Collections-and-Serialization"}},l={},c=[];function d(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"query-scopes",children:"Query Scopes"}),"\n",(0,s.jsxs)(n.p,{children:["Query scopes are a powerful tool in Eloquent that allows you to define reusable query constraints. Scopes enable you to encapsulate commonly used query conditions into methods, improving code organization and reusability. They help keep your code ",(0,s.jsx)(n.strong,{children:"DRY (Don\u2019t Repeat Yourself )"})," and make it easier to maintain."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Key points:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Query scopes allow you to define reusable query constraints."}),"\n",(0,s.jsx)(n.li,{children:"They improve code organization and reusability."}),"\n",(0,s.jsxs)(n.li,{children:["Scopes are defined as methods in the model, prefixed with ",(0,s.jsx)(n.code,{children:"scope"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Here\u2019s an example to illustrate query scopes:"}),"\n",(0,s.jsx)(n.p,{children:"Consider a scenario where you frequently need to retrieve only active users from the User model. You can define a scope to encapsulate this condition in the User model:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"class User extends Model\n{\n\xa0\xa0\xa0\xa0public function scopeActive($query)\n\xa0\xa0\xa0\xa0{\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0return $query->where('active', true);\n\xa0\xa0\xa0\xa0}\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"With this scope defined, you can easily retrieve active users:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$users = User::active()->get();\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can also chain multiple scopes together:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-php",children:"$users = User::active()->orderBy('name')->get();\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>a});var s=o(6540);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);