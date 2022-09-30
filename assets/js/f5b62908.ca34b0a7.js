"use strict";(self.webpackChunkgreen_software_training=self.webpackChunkgreen_software_training||[]).push([[907],{4137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=i(n),d=a,g=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1426:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294);const a="container_nYK0",l="speaker_Dr96",o="avatar_Z64W",c="pronouns_AChy",s="name_m5ut",i="role_ma5P",m="company_lKsH",u="social_srwx",p="language_GGeu",d="content_PSAS";function g(e){let{name:t,role:n,company:g,github:h,linkedin:f,twitter:E,website:k,pronouns:w,location:b,shortBiography:v,travel:y,payAndExpenses:M,areaOfInterest:O,speakerExperience:x,noPastSpeakingEngagements:P,coachNewSpeakers:z,languages:_,MAPA:N,underrepresentedMinority:A,talkAbout:j,previousTalks:S,notes:C}=e;return r.createElement("div",{className:a},r.createElement("div",{className:d},v&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Bio"),r.createElement("p",null,v)),y&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Travel"),r.createElement("p",null,y)),M&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Pay and Expenses"),r.createElement("p",null,M)),O&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Area of Interest"),r.createElement("p",null,O)),x&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Speaker Experience"),r.createElement("p",null,x)),P&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Number of past speaking engagements"),r.createElement("p",null,P)),S&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Pervious Talks"),r.createElement("ul",null,S.map((e=>{const t=e.link.match(/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((?:\w|-){11})(?![\w-])/),n=t?t[1]:null,a=e.link.match(/t=(\d+)/);return r.createElement("li",{key:e.link},r.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.title),n&&r.createElement("div",null,r.createElement("iframe",{width:"420",height:"215",src:"https://www.youtube.com/embed/"+n+(a?"?start="+a[1]:""),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))})))),z&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Willing to provide coaching and advice to new speakers"),r.createElement("p",null,z)),_&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Languages"),r.createElement("p",null,_.map((e=>r.createElement("span",{key:e,className:p},e))))),N&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Is in a MAPA (Most affected people and places) "),r.createElement("p",null,N)),A&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Is part of an underrepresented minority"),r.createElement("p",null,A)),j&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Want to talk about"),r.createElement("p",null,j)),C&&r.createElement(r.Fragment,null,r.createElement("h2",null,"Other notes"),r.createElement("p",null,C))),r.createElement("div",{className:l},r.createElement("div",{className:o},r.createElement("img",{src:"https://github.com/"+h+".png",alt:"avatar"})),r.createElement("div",null,r.createElement("span",{className:s},t),r.createElement("i",{className:c},"(",w,")"),r.createElement("span",{className:i},b),r.createElement("span",{className:i},n),r.createElement("span",{className:m},"@",g),r.createElement("div",{className:u},h&&r.createElement("a",{href:"https://github.com/"+h,target:"_blank",rel:"noopener noreferrer"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",width:24},r.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}))),E&&r.createElement("a",{href:"https://twitter.com/"+E,target:"_blank",rel:"noopener noreferrer"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:24},r.createElement("path",{fill:"currentColor",d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))),f&&r.createElement("a",{href:"https://www.linkedin.com/in/"+f,target:"_blank",rel:"noopener noreferrer"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",width:24},r.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))),k&&r.createElement("a",{href:k,target:"_blank",rel:"noopener noreferrer"},r.createElement("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:28},r.createElement("path",{d:"M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z"})))))))}},3263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var r=n(7462),a=(n(7294),n(4137)),l=n(1426);const o={sidebar_position:1},c="Kunal Malik",s={unversionedId:"speakers/kunal-malik",id:"speakers/kunal-malik",title:"Kunal Malik",description:"<Speaker",source:"@site/docs/speakers/kunal-malik.mdx",sourceDirName:"speakers",slug:"/speakers/kunal-malik",permalink:"/speakers/kunal-malik",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/speakers/tree/main/docs/speakers/kunal-malik.mdx",tags:[],version:"current",lastUpdatedBy:"holanita",lastUpdatedAt:1664541360,formattedLastUpdatedAt:"Sep 30, 2022",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Krishna Teja Nori",permalink:"/speakers/krishna-teja-nori"},next:{title:"Paola Annis",permalink:"/speakers/paola-annis"}},i={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kunal-malik"},"Kunal Malik"),(0,a.kt)(l.Z,{name:"Kunal Malik",role:"Lead Consultant (Business)",company:"Thoughtworks",github:"",linkedin:"kunal-malik-9a6438b",pronouns:"He/Him",location:"Gurgaon, India",shortBiography:"I'm a confident public speaker",areaOfInterest:"A business consultant, so focus is towards various domains (except Telecom, Pharma - having not worked in them)",speakerExperience:"Meetups",noPastSpeakingEngagements:"1-5",coachNewSpeakers:"Yes",languages:["English"],MAPA:"Yes",underrepresentedMinority:"No",talkAbout:"Why and How of sustainability",mdxType:"Speaker"}))}p.isMDXComponent=!0}}]);