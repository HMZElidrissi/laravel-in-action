"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[7025],{8156:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var t=s(4848),i=s(8453);const l={sidebar_position:1},a="Defining Models",o={id:"Laravel-Models/Defining-Models",title:"Defining Models",description:"In Laravel, you define models by creating a class that extends the Illuminate\\Database\\Eloquent\\Model class. Each model is associated with a database table, and by convention, the table name is the pluralized lowercase form of the model name.",source:"@site/docs/Laravel-Models/Defining-Models.md",sourceDirName:"Laravel-Models",slug:"/Laravel-Models/Defining-Models",permalink:"/databases-in-action/docs/Laravel-Models/Defining-Models",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Laravel-Models/Defining-Models.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Laravel Models",permalink:"/databases-in-action/docs/category/laravel-models"},next:{title:"Eloquent Relationships",permalink:"/databases-in-action/docs/Laravel-Models/Eloquent-Relationships"}},d={},r=[{value:"<strong>Model Fields</strong>",id:"model-fields",level:3}];function c(e){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"defining-models",children:"Defining Models"}),"\n",(0,t.jsxs)(n.p,{children:["In Laravel, you define models by creating a class that extends the ",(0,t.jsx)(n.code,{children:"Illuminate\\Database\\Eloquent\\Model"})," class. Each model is associated with a database table, and by convention, the table name is the pluralized lowercase form of the model name."]}),"\n",(0,t.jsx)(n.p,{children:"To create a new model using the command-line tool:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"php artisan make:model Post\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will generate a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"Post"})})," model class file in the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"app"})})," directory. You can then open the generated model file and customize it as needed, including specifying the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$fillable"})})," and other properties."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"use Illuminate\\Database\\Eloquent\\Model;\n\nclass Post extends Model\n{\n    protected $fillable = ['title', 'content'];\n}\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If the table name doesn't follow the convention of pluralizing the model name, you can specify it explicitly in the model:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:"protected $table = 'my_custom_table';\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"model-fields",children:(0,t.jsx)(n.strong,{children:"Model Fields"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Model Fields"})})," in Laravel are attributes that define the structure of a database table within an Eloquent model."]}),"\n",(0,t.jsx)(n.p,{children:"Eloquent supports a variety of field types, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$primaryKey"})}),": Specifies the primary key field of the table."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$fillable"})}),": Specifies which fields can be mass assigned using the ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"create()"})})," method."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$guarded"})}),": Specifies fields that are not mass assignable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$timestamps"})}),": Indicates whether the model should automatically manage the ",(0,t.jsx)(n.code,{children:"created_at"})," and ",(0,t.jsx)(n.code,{children:"updated_at"})," fields."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$hidden"})}),": Specifies fields that should be hidden when the model is serialized to an array or JSON."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$casts"})}),": Specifies the data types of fields and allows you to cast them to native PHP types."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>o});var t=s(6540);const i={},l=t.createContext(i);function a(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);