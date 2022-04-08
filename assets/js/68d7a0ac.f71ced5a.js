"use strict";(self.webpackChunkagiletaskboard_docs=self.webpackChunkagiletaskboard_docs||[]).push([[338],{9613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2951:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var n=a(2182),r=a(9028),i=(a(9496),a(9613)),o=["components"],l={sidebar_label:"SPFx App",title:"Agile Task Board SPFx App",description:"Getting Started with Agile Task Board for SPFx",keywords:["Agile Task Board","SPFx","SharePoint","WebPart"]},p=void 0,s={unversionedId:"Getting Started/SPFx App",id:"Getting Started/SPFx App",title:"Agile Task Board SPFx App",description:"Getting Started with Agile Task Board for SPFx",source:"@site/docs/03 - Getting Started/02 - SPFx App.md",sourceDirName:"03 - Getting Started",slug:"/Getting Started/SPFx App",permalink:"/AgileTaskBoard/Getting Started/SPFx App",editUrl:"https://github.com/AgileIS/AgileTaskBoard/docs/03 - Getting Started/02 - SPFx App.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"SPFx App",title:"Agile Task Board SPFx App",description:"Getting Started with Agile Task Board for SPFx",keywords:["Agile Task Board","SPFx","SharePoint","WebPart"]},sidebar:"tutorialSidebar",previous:{title:"Teams App",permalink:"/AgileTaskBoard/Getting Started/Teams App"},next:{title:"Teams integration",permalink:"/AgileTaskBoard/Getting Started/Teams Integration"}},c={},d=[{value:"Quick Installation Guide",id:"quick-installation-guide",level:2},{value:"FAQ",id:"faq",level:3},{value:"Need Help?",id:"need-help",level:2}],u={toc:d};function m(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"agiletaskboard---spfx-version"},"AgileTaskBoard - SPFx Version"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/Getting%20Started/Teams%20Integration"},"Teams Integration << deprecated since V2.2.4 >>"))),(0,i.kt)("h2",{id:"quick-installation-guide"},"Quick Installation Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the Agile Task Board from Office Store or\nupload and install the SPFx-Package in the local App-Store of your SharePoint environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Approve API access ( > V3.0.0.0)"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"  | Permission                       | Description                                  |\n  | -------------------------------- | -------------------------------------------- |\n  | User.ReadBasic.All               | Read all users' basic profiles               |\n  | Tasks.ReadWrite                  | Work with Planner plan's and task's          |\n  | GroupMember.Read.All             | Read group members to assign planner task's  | \n")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"SharePoint admin center",src:a(7768).Z,width:"1368",height:"908"})),(0,i.kt)("p",{parentName:"li"},"  Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"SharePoint admin center")," go to ",(0,i.kt)("inlineCode",{parentName:"p"},"Advanced")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"API access")," and approve the permission seen in the table above.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Use the "Make this solution available to all sites in the organization" option, if it is applicable within your policies. '),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-scoped-deployment"},"tenant-scoped-deployment")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Tenant Scoped Deployment",src:a(1121).Z,width:"1284",height:"638"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"As an alternative your users need to add the app to each site by there own (Add an app -> Agile Task Board)"),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("img",{alt:"Site Contents",src:a(7278).Z,width:"404",height:"198"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Adding a Task Board Instance to a existing page or create a new page "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open page in edit mode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Insert > Agile Task Board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Configure the task board starting with the configurtation wizzard.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can change configurartion at any time"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Task Board Settings Button",src:a(1734).Z,width:"1281",height:"677"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the Agile Task Board as full screen app to your SharePoint site "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Select "New" >> "Page" >> switch to "Apps" and select the Agile Task Board')),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"FullScreen",src:a(6681).Z,width:"1274",height:"635"})))),(0,i.kt)("h3",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"The following list shows possible errors and what to do: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You do not have the required permissions to access this item.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Missing API access, approve permissions"))),(0,i.kt)("li",{parentName:"ul"},"Insufficient privileges to complete the operation.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Missing API access, approve permissions")))),(0,i.kt)("h2",{id:"need-help"},"Need Help?"),(0,i.kt)("p",null,"If you are facing any issue with Agile Task Board, please be kind and leave us a short information at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/AgileIS/AgileTaskBoard/issues"},"GitHub Issues"),". Besides technical problems we would also like to hear your thoughts and ideas for further enhancements."))}m.isMDXComponent=!0},1734:function(e,t,a){t.Z=a.p+"assets/images/SPFxAppPartEdit-ea7be54378033724f011b481cee17c4c.png"},6681:function(e,t,a){t.Z=a.p+"assets/images/SPFxFullScreenBoard-118bf6fb7f4d26074989a22786cc58d5.png"},7768:function(e,t,a){t.Z=a.p+"assets/images/SPFx_Approve_Permissions-e02a878eee503a59f7a19a0fa37b48c9.png"},7278:function(e,t,a){t.Z=a.p+"assets/images/SiteContents-b723344d4be79d1c14aa517e58c913a0.jpg"},1121:function(e,t,a){t.Z=a.p+"assets/images/TenantScopedDeployment-b53cda618a61a98077fdb0e67e470bc2.png"}}]);