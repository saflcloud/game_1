"use strict";(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[4751],{44751:function(t,e,a){a.r(e),a.d(e,{default:function(){return A}});var n,s,i,r,o=a(22705),l=a(70970),u=a(2813),c=a(21797),p=a(92317),d=a(82345),h=a(72283),y=a(20793),m=a(50125),f=a(17360),g=(a(92222),a(41539),a(54747),a(21249),a(38880),a(30813)),v=a(90416),Z=a(95306),k=a(39730),w=a(30410),C=a(41800),b=a(81764),Y=a(98292),L=a(84418),K=a(20941),E=a.n(K),H="mY6Yh5yeHyYTM635E28B",M="yKficTGo3NEgwz4VSdVE",T="ksfTBmk8bjoKLMlQD7Tl",D="r78REjmWa7LBMH0StOqh",B="AsyxW9AOLeOJUYFKP2mf",U="MNJKYIGKCR032gA7o3Bd",V="OyqMnpEBhLiEXzHLzQfE",_="KxUnHaQCf1ZVPLaF3FmD",q="_3JN5Lt7zBE28ZwUJ4K_F",x="jirqlCawKkebGT968QF7",A=(n=(0,g.wA)({name:"VersionUpdate"}),s=(0,g.RL)("store.language",{immediate:!0}),n((r=function(t){(0,h.Z)(s,t);var e,a,n=(0,y.Z)(s);function s(){var t;(0,c.Z)(this,s);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return t=n.call.apply(n,[this].concat(a)),(0,m.Z)((0,d.Z)(t),"store",(0,Y.h)()),(0,m.Z)((0,d.Z)(t),"state",{list:[],loading:!1}),t}return(0,p.Z)(s,[{key:"languageKeyChange",value:(a=(0,u.Z)((0,l.Z)().mark((function t(e,a){return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a&&e!==a&&this.queryVersionUpdateList();case 1:case"end":return t.stop()}}),t,this)}))),function(t,e){return a.apply(this,arguments)})},{key:"mounted",value:function(){this.queryVersionUpdateList()}},{key:"queryVersionUpdateList",value:(e=(0,u.Z)((0,l.Z)().mark((function t(){var e,a,n,s,i,r=this;return(0,l.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.state.loading=!0,t.next=3,(0,C.to)((0,w.u)()).finally((function(){return r.state.loading=!1}));case 3:e=t.sent,a=(0,o.Z)(e,2),n=a[0],s=a[1],n||((i=s.data.data).forEach((function(t){return t.isCollapsed=!1})),this.state.list=i);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"renderItems",value:function(){var t=this.$createElement,e=(0,b.QT)().t,a=(0,Y.h)(),n=a.isWeb,s=a.language;return this.state.list.length?t("my-scroll",[this.state.list.map((function(a){var n;return t("div",{class:(n={},(0,m.Z)(n,T,!0),(0,m.Z)(n,x,a.isCollapsed),n),key:a.id},[t("div",{class:D},[a.versionName]),t("div",{class:B},[L.Z.format(a.showTime,"zh_CN"===s?"YYYY年MM月DD日 HH:mm:ss":"MM/DD/YYYY HH:mm:ss")]),t("my-adapter",{class:U,attrs:{html:a.content,mode:"innerHTML"}}),t("div",{class:_,on:{click:function(){return a.isCollapsed=!a.isCollapsed}}},[t("div",{class:q},[t("span",[a.isCollapsed?e("lobby.modal.pay.putAway"):e("lobby.modal.pay.expand")]),t("icon-sprite",{attrs:{sprite:E()}})])])])}))]):t("div",{class:V},[t(Z.HY,{attrs:{image:t(k.h,{attrs:{width:n?378:400,height:n?272:289}}),description:e("lobby.modal.noData")}})])}},{key:"render",value:function(){var t=arguments[0],e=(0,b.QT)(),a=e.t,n=(0,Y.h)(),s=n.isWeb;return t(v.tK,{attrs:{showBack:!s,titleContent:a("lobby.mine.itemList.versionContent"),loading:this.state.loading,isShadowContent:!1}},[t("div",{class:[H,this.state.list.length?"":M]},[this.renderItems()])])}}]),s}(g.XY),(0,f.Z)(r.prototype,"languageKeyChange",[s],Object.getOwnPropertyDescriptor(r.prototype,"languageKeyChange"),r.prototype),i=r))||i)}}]);