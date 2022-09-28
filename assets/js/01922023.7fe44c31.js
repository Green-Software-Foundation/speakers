"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[58],{4137:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||l;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1426:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294);const r="container_nYK0",l="speaker_Dr96",o="avatar_Z64W",i="pronouns_AChy",s="name_m5ut",c="role_ma5P",m="company_lKsH",p="social_srwx",u="language_GGeu",h="content_PSAS";function d(e){let{name:t,role:a,company:d,github:g,linkedin:f,twitter:b,website:E,pronouns:w,location:k,shortBiography:y,travel:v,payAndExpenses:A,areaOfInterest:S,speakerExperience:M,noPastSpeakingEngagements:I,coachNewSpeakers:O,languages:C,MAPA:x,underrepresentedMinority:z,talkAbout:P,previousTalks:N,notes:T}=e;return n.createElement("div",{className:r},n.createElement("div",{className:h},y&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Bio"),n.createElement("p",null,y)),v&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Travel"),n.createElement("p",null,v)),A&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Pay and Expenses"),n.createElement("p",null,A)),S&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Area of Interest"),n.createElement("p",null,S)),M&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Speaker Experience"),n.createElement("p",null,M)),I&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Number of past speaking engagements"),n.createElement("p",null,I)),N&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Pervious Talks"),n.createElement("ul",null,N.map((e=>{const t=e.link.match(/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?![\w-])/),a=t?t[1]:null,r=e.link.match(/t=(\d+)/);return n.createElement("li",{key:e.link},n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title),a&&n.createElement("div",null,n.createElement("iframe",{width:"420",height:"215",src:"https://www.youtube.com/embed/"+a+(r?"?start="+r[1]:""),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))})))),O&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Willing to provide coaching and advice to new speakers"),n.createElement("p",null,O)),C&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Languages"),n.createElement("p",null,C.map((e=>n.createElement("span",{key:e,className:u},e))))),x&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Is in a MAPA (Most affected people and places) "),n.createElement("p",null,x)),z&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Is part of an underrepresented minority"),n.createElement("p",null,z)),P&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Want to talk about"),n.createElement("p",null,P)),T&&n.createElement(n.Fragment,null,n.createElement("h2",null,"Other notes"),n.createElement("p",null,T))),n.createElement("div",{className:l},n.createElement("div",{className:o},n.createElement("img",{src:"https://github.com/"+g+".png",alt:"avatar"})),n.createElement("div",null,n.createElement("span",{className:s},t),n.createElement("i",{className:i},"(",w,")"),n.createElement("span",{className:c},k),n.createElement("span",{className:c},a),n.createElement("span",{className:m},"@",d),n.createElement("div",{className:p},g&&n.createElement("a",{href:"https://github.com/"+g,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:24},n.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),b&&n.createElement("a",{href:"https://twitter.com/"+b,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:24},n.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),f&&n.createElement("a",{href:"https://www.linkedin.com/in/"+f,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:24},n.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),E&&n.createElement("a",{href:E,target:"_blank",rel:"noopener noreferrer"},n.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:28},n.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"})))))))}},490:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=a(7462),r=(a(7294),a(4137)),l=a(1426);const o={sidebar_position:1},i="Abhishek Gupta",s={unversionedId:"speakers/abhishek-gupta",id:"speakers/abhishek-gupta",title:"Abhishek Gupta",description:"<Speaker",source:"@site/docs/speakers/abhishek-gupta.mdx",sourceDirName:"speakers",slug:"/speakers/abhishek-gupta",permalink:"/speakers/abhishek-gupta",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/speakers/tree/main/docs/speakers/abhishek-gupta.mdx",tags:[],version:"current",lastUpdatedBy:"holanita",lastUpdatedAt:1664359633,formattedLastUpdatedAt:"Sep 28, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Speakers",permalink:"/speakers/"},next:{title:"Asim Hussain",permalink:"/speakers/asim-hussain"}},c={},m=[],p={toc:m};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"abhishek-gupta"},"Abhishek Gupta"),(0,r.kt)(l.Z,{name:"Abhishek Gupta",role:"Founder and Principal Researcher (MAIEI)\nSenior Responsible AI Leader & Expert (BCG)\nChair, Standards Working Group (GSF)",company:"Montreal AI Ethics Institute, BCG, and GSF",github:"atg-abhishek",linkedin:"atg-abhishek",twitter:"atg-abhishek",website:"https://atg-abhishek.github.io",pronouns:"He/Him",location:"Montreal, Canada",shortBiography:"Abhishek Gupta is the Senior Responsible AI Leader & Expert with the Boston Consulting Group (BCG) where he works with BCG's Chief AI Ethics Officer to advise clients and build end-to-end Responsible AI programs. He is also the Founder & Principal Researcher at the Montreal AI Ethics Institute, an international non-profit research institute with a mission to democratize AI ethics literacy. Through his work as the Chair of the Standards Working Group at the Green Software Foundation, he is leading the development of a Software Carbon Intensity standard towards the comparable and interoperable measurement of the environmental impacts of AI systems. \nHis work focuses on applied technical, policy, and organizational measures for building ethical, safe, and inclusive AI systems and organizations, specializing in the operationalization of Responsible AI and its deployments in organizations and assessing and mitigating the environmental impact of these systems. He has advised national governments, multilateral organizations, academic institutions, and corporations across the globe. His work on community building has been recognized by governments from across North America, Europe, Asia, and Oceania. He is a highly sought after speaker with talks at the United Nations, European Parliament, G7 AI Summit, TEDx, Harvard Business School, Kellogg School of Management, amongst others. His writing on Responsible AI has been featured by Wall Street Journal, Forbes, MIT Technology Review, Protocol, Fortune, VentureBeat, amongst others. \nHe is an alumnus of the US State Department International Visitors Leadership Program representing Canada and has received The Gradient Writing Prize 2021 for his work on The Imperative for Sustainable AI Systems. His research has been published in leading AI journals and presented at top-tier ML conferences like NeurIPS, ICML, and IJCAI. He is the author of the widely-read State of AI Ethics Report and The AI Ethics Brief. He formerly worked at Microsoft as a Machine Learning Engineer in Commercial Software Engineering (CSE) where his team helped to solve the toughest technical challenges faced by Microsoft's biggest customers. He also served on the CSE Responsible AI Board at Microsoft. You can learn more about his work here.",travel:"Willing to travel",payAndExpenses:"TBC",areaOfInterest:"AI, Sustainability",speakerExperience:"track talks, keynotes, have a following",noPastSpeakingEngagements:"50+",coachNewSpeakers:"No",languages:["English"],MAPA:"No",underrepresentedMinority:"No",talkAbout:"Environmental Impacts of AI, Standards Development for Green Software, Digital Sustainability, Metrics and Measurement for Green Software, Organizational Transformation for Digital Sustainability",previousTalks:[{title:"To be added",link:"https://www.youtube.com"}],mdxType:"Speaker"}))}u.isMDXComponent=!0}}]);