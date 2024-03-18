"use strict";(self.webpackChunklaravel_in_action=self.webpackChunklaravel_in_action||[]).push([[727],{8539:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=i(4848),t=i(8453);const a={sidebar_position:6},r="Using Public Assets in Laravel",c={id:"Laravel-Views/Using-Public-Assets",title:"Using Public Assets in Laravel",description:"In Laravel, serving static assets like images, CSS, and JavaScript files is straightforward. Laravel provides a dedicated public directory that you can use to store your public assets.",source:"@site/docs/Laravel-Views/Using-Public-Assets.md",sourceDirName:"Laravel-Views",slug:"/Laravel-Views/Using-Public-Assets",permalink:"/Laravel-in-Action/docs/Laravel-Views/Using-Public-Assets",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/Laravel-in-Action/blob/main/docs/Laravel-Views/Using-Public-Assets.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Reference Guide: Blade Directives",permalink:"/Laravel-in-Action/docs/Laravel-Views/Reference-Guide"},next:{title:"Building APIs with Laravel",permalink:"/Laravel-in-Action/docs/category/building-apis-with-laravel"}},l={},o=[{value:"Link to Public Assets",id:"link-to-public-assets",level:3},{value:"Using CSS and JavaScript Files",id:"using-css-and-javascript-files",level:3},{value:"Organizing Assets",id:"organizing-assets",level:3},{value:"Using Mix (Optional)",id:"using-mix-optional",level:3}];function d(e){const s={blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"using-public-assets-in-laravel",children:"Using Public Assets in Laravel"}),"\n",(0,n.jsxs)(s.p,{children:["In Laravel, serving static assets like images, CSS, and JavaScript files is straightforward. Laravel provides a dedicated ",(0,n.jsx)(s.code,{children:"public"})," directory that you can use to store your public assets."]}),"\n",(0,n.jsxs)(s.p,{children:["Inside this directory, you can create subdirectories like ",(0,n.jsx)(s.code,{children:"images"}),", ",(0,n.jsx)(s.code,{children:"css"}),", ",(0,n.jsx)(s.code,{children:"js"}),", etc., to organize your assets."]}),"\n",(0,n.jsx)(s.h3,{id:"link-to-public-assets",children:"Link to Public Assets"}),"\n",(0,n.jsxs)(s.p,{children:["To link to these assets in your Blade templates, you can use the ",(0,n.jsx)(s.code,{children:"asset"})," helper function. This function generates a URL for the asset, taking into account the correct path."]}),"\n",(0,n.jsxs)(s.p,{children:["For example, if you want to display the ",(0,n.jsx)(s.code,{children:"gipsy_kings.jpg"})," image in your view, you can use the following code:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:'<img src="{{ asset(\'images/gipsy_kings.jpg\') }}" alt="Gipsy Kings">\n'})}),"\n",(0,n.jsxs)(s.p,{children:["In this code, ",(0,n.jsx)(s.code,{children:"asset('images/gipsy_kings.jpg')"})," generates the correct URL for the image."]}),"\n",(0,n.jsx)(s.h3,{id:"using-css-and-javascript-files",children:"Using CSS and JavaScript Files"}),"\n",(0,n.jsxs)(s.p,{children:["Similarly, you can link to your CSS and JavaScript files using the ",(0,n.jsx)(s.code,{children:"asset"})," helper function. If you have a CSS file named ",(0,n.jsx)(s.code,{children:"styles.css"})," in the ",(0,n.jsx)(s.code,{children:"public/css"})," directory, you can include it in your Blade template like this:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:'<link rel="stylesheet" href="{{ asset(\'css/styles.css\') }}">\n'})}),"\n",(0,n.jsx)(s.p,{children:"For JavaScript files, the process is the same:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-php",children:"<script src=\"{{ asset('js/script.js') }}\"><\/script>\n"})}),"\n",(0,n.jsx)(s.h3,{id:"organizing-assets",children:"Organizing Assets"}),"\n",(0,n.jsxs)(s.p,{children:["You can organize your assets into subdirectories under the ",(0,n.jsx)(s.code,{children:"public"})," directory to keep things neat and organized. For example:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Images: ",(0,n.jsx)(s.code,{children:"public/images"})]}),"\n",(0,n.jsxs)(s.li,{children:["CSS: ",(0,n.jsx)(s.code,{children:"public/css"})]}),"\n",(0,n.jsxs)(s.li,{children:["JavaScript: ",(0,n.jsx)(s.code,{children:"public/js"})]}),"\n",(0,n.jsxs)(s.li,{children:["Fonts: ",(0,n.jsx)(s.code,{children:"public/fonts"})]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"using-mix-optional",children:"Using Mix (Optional)"}),"\n",(0,n.jsx)(s.p,{children:"Laravel also provides a feature called Mix that simplifies asset compilation and versioning. It's built on top of the webpack asset compiler. Mix allows you to define your assets in a more structured way, use modern JavaScript features, and easily compile and minify your assets."}),"\n",(0,n.jsxs)(s.p,{children:["To use Mix, you can install Laravel Mix using npm and define your asset configuration in the ",(0,n.jsx)(s.code,{children:"webpack.mix.js"})," file located in your project's root directory. You can then use the ",(0,n.jsx)(s.code,{children:"mix"})," helper function in your Blade templates to link to compiled assets."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["\ud83d\udea7 Using public assets in Laravel is efficient and flexible. By placing your assets in the ",(0,n.jsx)(s.code,{children:"public"})," directory and using the ",(0,n.jsx)(s.code,{children:"asset"})," helper function, you can easily manage and serve static files for your application."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,i)=>{i.d(s,{R:()=>r,x:()=>c});var n=i(6540);const t={},a=n.createContext(t);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);