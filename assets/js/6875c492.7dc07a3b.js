"use strict";(self.webpackChunkego_1st_cn=self.webpackChunkego_1st_cn||[]).push([[610],{2389:function(e,t,n){n.d(t,{Z:function(){return i}});var u=n(7294),r=n(9913);function i(){return(0,u.useContext)(r._)}},2082:function(e,t,n){n.d(t,{Z:function(){return i}});var u=n(7294),r=n(1262);function i(e){var t=e.isBlogPostPage,i=e.url,c=e.title,o=(0,u.useState)(),s=o[0],a=o[1];return(0,u.useEffect)((function(){var e=n(5777).B,u=n(5777).M;t?e(i,c).then((function(e){a(e)})):u(c).then((function(e){a(e)}))}),[]),u.createElement(r.Z,{fallback:u.createElement("div",null)},(function(){return u.createElement("span",{title:"vistors"},s)}))}},5777:function(e,t,n){n.d(t,{M:function(){return r},B:function(){return i}});var u=n(7531);function r(e){var t=new(0,u.Query)("Counter");return new Promise((function(n){var u;t.equalTo("title",e).find().then((function(e){u=0===e.length?0:e[0].attributes.time,n(u)}))}))}function i(e,t){var n=new(0,u.Query)("Counter");return new Promise((function(r){n.equalTo("url",e).find().then((function(n){if(n.length>0){var i=n[0];i.save(null,{fetchWhenSave:!0}),i.increment("time").save().then((function(e){r(e.get("time"))}))}else{var c=new u.Object("Counter"),o=new u.ACL;o.setPublicReadAccess(!0),o.setPublicWriteAccess(!0),c.setACL(o),c.set("title",t),c.set("url",e),c.set("time",1),c.save().then((function(e){r(e.get("time"))}))}}))}))}u.init({appId:"DMIBOS7zL7HSjBjzvYvr7eMY-gzGzoHsz",appKey:"14l8coYH4XyLm1hWQA6thMLo",serverURL:"https://leancloud.ego1st.cn"})},1716:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var u=n(7462),r=n(7294),i=n(2082);n(1262);function c(e){return r.createElement(i.Z,(0,u.Z)({isBlogPostPage:!0,title:"sss",url:"/hola"},e))}}}]);