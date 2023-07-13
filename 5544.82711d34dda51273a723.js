"use strict";(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[5544],{62719:function(e,t,a){a.r(t),a.d(t,{default:function(){return gt}});var i,n,r,o,l,s,c,u,m,d,g,h,p,f,y,v,b,Z,C,I,k,w,E,S,N,M,x,T,L,A,G,D,_,z,H,O,P,R,F,W,U=a(36568),X=a.n(U),$=a(74492),B=a(7903),j=a(70970),Q=a(2813),q=a(3587),V=a(21797),K=a(92317),Y=a(82345),J=a(72283),ee=a(20793),te=a(50125),ae=a(17360),ie=(a(41320),a(92222),a(68309),a(41539),a(39714),a(26699),a(32023),a(69826),a(21249),a(57327),a(51532),a(78783),a(33948),a(74916),a(15306),a(69600),a(38880),a(90416)),ne=a(30813),re=a(14577),oe=a(12322),le=a(90825),se=a(33990),ce=a(76937),ue=a(27686),me=a(42930),de=a(81764),ge=a(95627),he=a(71707),pe=a(60708),fe=a(43286),ye=a(98292),ve="xRjIML1fwDVtFXor2FSo",be="Rm77_GYgIUkFrfmci8oS",Ze="iAUlycOJIEUSiehyjJVI",Ce="ZfcjtBeMtoEUF3kGEoNT",Ie=(i=(0,ne.wA)({name:"TabsEuropeanAmerican"}),n=(0,ne.Rl)(),r=(0,ne.yU)("value","trigger",{required:!1}),o=(0,ne.fI)(ge.ZP.looseBool),l=(0,ne.fI)(ge.ZP.looseBool.def(!0)),s=(0,ne.fI)(ge.ZP.string.def("current")),c=(0,ne.fI)({required:!1}),u=(0,ne.fI)({required:!1}),m=(0,ne.fI)({required:!1}),d=(0,ne.fI)({required:!1}),g=(0,ne.fI)({default:"auto"}),h=(0,ne.fI)({default:"54px"}),p=(0,ne.fI)({default:"30px"}),f=(0,ne.fI)({default:"100%"}),y=(0,ne.fI)({default:!1}),v=(0,ne.fI)(ge.ZP.cssClass),b=(0,ne.RL)("mainStore.gameCategoriesAvailable",{deep:!0}),i((C=function(e){(0,J.Z)(a,e);var t=(0,ee.Z)(a);function a(){var e;(0,V.Z)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return e=t.call.apply(t,[this].concat(n)),(0,te.Z)((0,Y.Z)(e),"bs",void 0),(0,te.Z)((0,Y.Z)(e),"mainStore",(0,ye.h)()),(0,q.Z)((0,Y.Z)(e),"scroll",I,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"current",k,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"tabsNavHidden",w,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"showHoverTips",E,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"persistedActiveName",S,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"tabsContent",N,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"mainContent",M,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"renderList",x,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"preTriggerHook",T,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"itemWidth",L,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"itemHeight",A,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"itemSpace",G,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"scrollWidth",D,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"isScrollX",_,(0,Y.Z)(e)),(0,q.Z)((0,Y.Z)(e),"itemListWrapperClassName",z,(0,Y.Z)(e)),e}return(0,K.Z)(a,[{key:"updateMainstore",value:function(){var e;null===(e=this.bs)||void 0===e||e.refresh()}},{key:"itemStyle",get:function(){var e,t,a;return{width:he.ZP.px2rem("".concat(null!==(e=this.itemWidth)&&void 0!==e?e:180,"px")),height:he.ZP.px2rem("".concat(null!==(t=this.itemHeight)&&void 0!==t?t:54,"px")),marginRight:he.ZP.px2rem("".concat(null!==(a=this.itemSpace)&&void 0!==a?a:30,"px"))}}},{key:"mounted",value:function(){this.mainStore.isWeb&&(this.bs=new fe.ZP(this.scroll,{scrollX:!0,click:!0}))}},{key:"beforeDestroy",value:function(){var e;null===(e=this.bs)||void 0===e||e.destroy()}},{key:"sectionWrapper",value:function(e,t){var a=this.$createElement,i=[e];return t.isScrollX&&(i=[a("my-scroll",{attrs:{direction:"x",trigger:"none"}},[e])]),i}},{key:"tabs",get:function(){return this.sectionWrapper(this.tabsContent,{isScrollX:!!this.isScrollX})}},{key:"render",value:function(){var e,t,a,i=arguments[0];return i("section",{class:ve},[i("div",{class:[Ze]},[this.tabs,i("div",{class:(e={},(0,te.Z)(e,be,!0),(0,te.Z)(e,Ce,this.$route.name===ce.x4.GAME&&!this.mainStore.isWeb),e)},[null===(t=(a=this.$scopedSlots).searchBtn)||void 0===t?void 0:t.call(a)])]),this.mainContent])}}]),a}(ne.XY),I=(0,ae.Z)(C.prototype,"scroll",[n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=(0,ae.Z)(C.prototype,"current",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=(0,ae.Z)(C.prototype,"tabsNavHidden",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=(0,ae.Z)(C.prototype,"showHoverTips",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,ae.Z)(C.prototype,"persistedActiveName",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),N=(0,ae.Z)(C.prototype,"tabsContent",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=(0,ae.Z)(C.prototype,"mainContent",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=(0,ae.Z)(C.prototype,"renderList",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=(0,ae.Z)(C.prototype,"preTriggerHook",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=(0,ae.Z)(C.prototype,"itemWidth",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=(0,ae.Z)(C.prototype,"itemHeight",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=(0,ae.Z)(C.prototype,"itemSpace",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=(0,ae.Z)(C.prototype,"scrollWidth",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=(0,ae.Z)(C.prototype,"isScrollX",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=(0,ae.Z)(C.prototype,"itemListWrapperClassName",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,ae.Z)(C.prototype,"updateMainstore",[b],Object.getOwnPropertyDescriptor(C.prototype,"updateMainstore"),C.prototype),Z=C))||Z),ke=a(10892),we=a.n(ke),Ee=a(24444),Se=a.n(Ee),Ne=a(5033),Me=a.n(Ne),xe="qCyuQVLNRf3uBTU1cr1F",Te="bH7RW3REsGez2HanQvEw",Le="Yj8lq1lUX2KwurzQPrA3",Ae="oMd37s6bu_lUanDPqNf6",Ge="sEYDaR5dmYhfIw8ZPm5d",De="bgtGePbaZujjhUEmX_IY",_e="OXrJvLwIlfHdNFITvtK1",ze="pKqXQMXNqdDoz8EN_Xd2",He="Fq7t6kVX4LjadxyCUZ7C",Oe="iF_nFHr0ESYxJcxNFzRC",Pe="LXqdRrkQthhlflearW8F",Re="AHBuBQirf7CHcF8Vr87l",Fe="zDQpLm3QHgAt0hPK3Dhn",We="FLuZEkycuY6WpSi5J95K",Ue="AsAntMFDCyDbuIG2UVoV",Xe="sBQfaGacn2pgMoPwEfJA",$e="lPtbhxeXpdQwxDMJxKUH",Be="xuZD3d6yAiUFmOmPf3GT",je="Tpsd7yYxh7xCplIAthfF",Qe="k5D2uf1GAyRi4vW3buX_",qe="j5BoOOKMGoOk64a6gKNR",Ve="xtU6RIUZibbVMkeHyKXG",Ke="nvBIfkNigUenmJMtJ5tc",Ye="lUR5BHQXxahoqvgEJW5X",Je="gdCKQNG7fKTxq2vyZf_G",et="cgKfRNMhU2HPXw5d7UHf",tt="zpjcFdKN0ieTC0t1chgc",at="iaCJaGUxA9zSkrN0LcLO",it="s_7p55IK9EOW8XU6ThuF",nt="LbOmdyVllHmcnsKVeviX",rt="KyCZbgZh7zefJEEEcnCU",ot="xMLT9xqzRFhCLditRk5S",lt="SVNq794bpdv1jRqGnGEm",st="e7QhN4fPxGoC8rgGDM0R",ct="i3SfoSAk6ucX5D6aIQzw",ut="ad7ccNctFglBq1AgflLz",mt="cMM0ytwWmOsjqiAkR7g3",dt="Be2XLDUdhz4Npx5n_ynw",gt=(H=(0,ne.wA)({name:"EuropeanAmeicanGameTabList"}),O=(0,ne.fI)(ge.ZP.array.def((function(){return[]}))),P=(0,re.K4)(500),H((F=function(e){(0,J.Z)(r,e);var t,i,n=(0,ee.Z)(r);function r(){var e;(0,V.Z)(this,r);for(var t=arguments.length,a=new Array(t),i=0;i<t;i++)a[i]=arguments[i];return e=n.call.apply(n,[this].concat(a)),(0,q.Z)((0,Y.Z)(e),"allGameList",W,(0,Y.Z)(e)),e}return(0,K.Z)(r,[{key:"isHome",get:function(){return this.gameCategoryId===oe.ck.HOME&&this.$route.name===ce.x4.GAME}},{key:"mounted",value:function(){var e;null===(e=this.betterscroll)||void 0===e||e.scrollTo()}},{key:"loadingMore",value:function(){var e;null===(e=this.currentQueryFun)||void 0===e||e.call(this)}},{key:"getCardStyleAttr",value:function(){var e=this.mainStore.isWeb;return{width:e?170:222,height:e?226:293,className:st}}},{key:"goToPlateform",value:function(e){if(this.platformId!==e.platformId||this.$route.name===ce.x4.GAME_EMBEDDED){var t=e.platformId,a=e.gameCategoryId;this.$router.push({name:ce.x4.SUB_GAME,query:{gameCategoryId:a.toString(),platformId:t.toString()}})}}},{key:"onGameCardClick",value:(i=(0,Q.Z)((0,j.Z)().mark((function e(t,a){var i,n,r,o,l,s,c,u;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(r=null==t?void 0:t.target)||null===(i=r.className)||void 0===i||null===(n=i.includes)||void 0===n||!n.call(i,"unable-click")){e.next=3;break}return e.abrupt("return");case 3:if(o=(0,de.QT)(),l=o.t,0!==a.gameStatus&&!a.removeStatus&&!a.maintainStatus){e.next=7;break}return le.sG.Modal.message({type:"warning",content:l("lobby.game.maintain")}),e.abrupt("return");case 7:if(s=1,!a.gameId){e.next=12;break}this._openGame(a),e.next=27;break;case 12:if(!a.platformName){e.next=16;break}this.goToPlateform(a),e.next=27;break;case 16:if(a.hotType!==s){e.next=26;break}return c=a.gameCategoryId,u=a.platformId,e.next=21,this.checkPlatformStatus(c,u);case 21:if(e.sent){e.next=23;break}return e.abrupt("return");case 23:this.$router.push({name:ce.x4.SUB_GAME,query:{gameCategoryId:c.toString(),platformId:u.toString()}}),e.next=27;break;case 26:this._openGame(a);case 27:case"end":return e.stop()}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"collect",value:(t=(0,Q.Z)((0,j.Z)().mark((function e(t,a,i,n){var r,o,l,s,c,u,m,d,g;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.gameId,o=a.platformId,l=a.gameCategoryId,e.next=3,(0,ue.nn)({gameId:r,platformId:o,gameCategoryId:l},t);case 3:s=[],c=this.total,this.isHome?(a.favoriteStatus=t?oe.o$.FAVORITE:oe.o$.UNFAVORITE,(null==(m=this.allGameList.find((function(e){return e.key===n})))||null===(u=m.listData)||void 0===u?void 0:u.length)&&(s=m.listData.map((function(e){return e.gameId===r?(0,B.Z)((0,B.Z)({},e),{},{favoriteStatus:t?oe.o$.FAVORITE:oe.o$.UNFAVORITE}):e})),null===(d=this.updateListData)||void 0===d||d.call(this,(0,$.Z)(s),c,n))):(i?(s=this.listData.filter((function(e){return e.gameId!==r})),this.activeTabkey===oe.ck.COLLENCT&&(c-=1)):s=this.listData.map((function(e){return e.gameId===r?(0,B.Z)((0,B.Z)({},e),{},{favoriteStatus:t?oe.o$.FAVORITE:oe.o$.UNFAVORITE}):e})),null===(g=this.updateListData)||void 0===g||g.call(this,(0,$.Z)(s),c));case 6:case"end":return e.stop()}}),e,this)}))),function(e,a,i,n){return t.apply(this,arguments)})},{key:"renderFavoriteIcon",value:function(e,t){var i=this.$createElement,n=this.mainStore.isWeb?30:45;return this.activeTabkey===oe.ck.COLLENCT||this.gameCategoryId===oe.ck.COLLENCT?i("my-img",X()([{},{nativeOn:{click:ne.Ie.LY.stop(this.collect.bind(this,!1,e,!0,t))}},{class:tt,attrs:{src:a(36678),width:n,height:n}}])):e.favoriteStatus===oe.o$.FAVORITE?i("my-img",X()([{},{nativeOn:{click:ne.Ie.LY.stop(this.collect.bind(this,!1,e,!1,t))}},{class:tt,attrs:{src:a(36678),width:n,height:n}}])):i("my-img",X()([{},{nativeOn:{click:ne.Ie.LY.stop(this.collect.bind(this,!0,e,!1,t))}},{class:tt,attrs:{src:a(89799),width:n,height:n}}]))}},{key:"renderMaintain",value:function(e){var t=this.$createElement,i=(0,de.QT)().t,n=this.mainStore.isWeb,r=n?58:92,o=e>=150?he.ZP.px2rem(22):he.ZP.px2rem(1),l=n?he.ZP.px2rem(16):he.ZP.px2rem(30);return t("div",{class:Ye},[t("div",[t("my-img",{attrs:{src:a(59371),width:r,height:r}}),t("p",{style:{"font-size":l,"margin-top":o}},[i("lobby.game.maintain")])])])}},{key:"renderPlay",value:function(e){var t=this.$createElement,i=this.mainStore.isWeb?30:50;return t("div",[t("div",{class:at},[t("my-img",{attrs:{src:a(76782),width:i,height:i}})]),t("p",[e])])}},{key:"renderContent",value:function(e,t){var a,i=this.$createElement,n=0!==e.length;return i("div",{class:Be},[i("div",{class:(a={},(0,te.Z)(a,je,!0),(0,te.Z)(a,ut,!this.isHome),a)},[[!this.loading&&(n?this.renderGameCard(e,t):this.renderEnmpty()),this.renderScrollLoading(t)]])])}},{key:"renderScrollLoading",value:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe.ck.HOT,i=this.$createElement,n=(0,me.g)(),r=n.selectGameCategoryId,o=n.hotGameListData,l=(null===(e=this.allGameList.find((function(e){return e.key===oe.ck.HOT})))||void 0===e||null===(t=e.listData)||void 0===t?void 0:t.length)||0,s=r===oe.ck.HOME&&a===oe.ck.HOT&&o.length>12&&o.length>l;if(s||this.listData.length<this.total&&this.total>this.Config.gameDataSize){var c=(0,de.QT)(),u=c.t,m=new Map([[oe.ck.SEARCH,""],[oe.ck.HOT,u("lobby.game.loadingHot")],[oe.ck.RECENT,u("lobby.game.loadingRecent")],[oe.ck.COLLENCT,u("lobby.game.loadingCollect")],[oe.ck.DEMO,u("lobby.game.loadingDemo")]]),d=m.get(a);return i("p",{class:ct,ref:"scrollDown"},[u("lobby.game.loadingInfo",{total:s?o.length:this.total,type:d,count:s?l:this.listData.length}),i("span",{on:{click:this.loadingMore},class:Ge},[u("lobby.game.loadingMore"),i("icon-sprite",{attrs:{sprite:we()}})])])}}},{key:"getPlatformName",value:function(e){var t,a=this.gameStore.gameCategoriesAvailable,i=(void 0===a?[]:a).find((function(t){return t.gameCategoryId===e.gameCategoryId})),n="";if(null!=i&&null!==(t=i.list)&&void 0!==t&&t.length){var r=i.list.find((function(t){return t.platformId===e.platformId}));null!=r&&r.platformName&&(n=null==r?void 0:r.platformName)}return n}},{key:"renderGameCard",value:function(e,t){var a=this,i=this.$createElement,n=this.mainStore.isWeb,r=this.gameStore.gameCategoriesAvailable,o=this.getCardStyleAttr(),l=o.width,s=o.height,c=o.className,u=(0,de.QT)().t;return i("div",{class:Qe},[e.map((function(e){var o,m,d=!!e.customLargeIcon,g=e.gameIconLarge||e.largeIcon||e.gameIcon,h=e.gameCategoryId,p=e.platformName,f=null===(o=r.find((function(e){return e.gameCategoryId===h})))||void 0===o?void 0:o.gameCategoryName;return f&&(p+=" ".concat(f)),i("my-img",{key:"".concat(a.gameCategoryId,"-").concat(e.gameCategoryId,"-").concat(e.platformId,"-").concat(e.gameId||0),class:(m={},(0,te.Z)(m,Ke,!0),(0,te.Z)(m,qe,!0),(0,te.Z)(m,Ve,!!e.iconBackGround),m),attrs:{width:l,height:s,options:{type:"div"},src:""},nativeOn:{click:function(t){return a.onGameCardClick(t,e)}}},[i("div",{class:ot},[i("icon-sprite",{attrs:{sprite:Me()}})]),i("my-img",{attrs:{src:g,width:l,height:s,options:{type:"div"}},class:[lt,c,nt,d?"":rt]},[e.recommendStatus&&i("div",{class:it},[i("span",[u("lobby.game.recommend")]),i("icon-sprite",{attrs:{sprite:Se()}})]),!d&&i("div",{class:_e},[i("p",{class:["unable-click",ze]},[(!e.gameId||oe.zy.includes(h)&&e.logo)&&i("my-img",{class:He,attrs:{src:e.logo,height:n?40:50,width:n?40:50}}),i("div",{class:[!e.gameId&&e.logo||oe.zy.includes(h)?"":Oe,e.gameId&&e.platformName&&!oe.zy.includes(h)?Pe:""]},[i("span",[e.brand||e.gameName])])]),!!e.gameId&&e.platformName&&!oe.zy.includes(h)&&i("div",{class:Re},[i("span",[p])])])]),(e.removeStatus||e.maintainStatus||0===e.gameStatus)&&a.renderMaintain(s),i("div",{class:Je},[i("p",{class:et},[!!e.gameId&&a.renderFavoriteIcon(e,t)]),a.renderPlay(e.brand||e.gameName)])])}))])}},{key:"getMenuName",value:function(e){var t=this.$createElement,i=this.menuItemConfig.find((function(t){return t.gameCategoryId===e}));if(!i)return"";var n=this.mainStore.isWeb;return[i.activePng?t("my-img",{attrs:{src:a(16522)("./icon_game_menu_active_".concat(i.gameCategoryId,".png")),height:n?30:54}}):t("apng-canvas",{attrs:{numPlays:1,src:a(16522)("./icon_game_menu_active_".concat(i.gameCategoryId,".png")),width:n?40:85,height:n?30:60}}),i.gameCategoryName]}},{key:"renderGameListContent",value:function(e,t){var i=this,n=this.$createElement,r=this.mainStore.language,o=(0,de.QT)().t;return n("div",{class:xe},[this.isHome&&n("div",{class:Te},[n("div",{class:Le},[function(e){var t=i.menuItemConfig.find((function(t){return t.gameCategoryId===e}));if(["zh_CN","zh_TW"].includes(r)&&t&&t.gameCategoryName&&(t.gameCategoryName=t.gameCategoryName.replace(/\s/g,"")),!t)return"";var o=i.mainStore.isWeb;return[n("my-img",{attrs:{src:a(16522)("./icon_game_menu_active_".concat(t.gameCategoryId,".png")),width:o?40:52}}),t.gameCategoryName]}(t),"zh_CN"===this.mainStore.language&&o("lobby.game.menue")]),this.isHome&&n("div",{on:{click:function(){i.$router.push({name:ce.x4.GAME,query:{gameCategoryId:t.toString()}})}},class:Ae},[o("lobby.game.loadingAll")])]),this.renderContent(e,t)])}},{key:"renderTabsContent",value:function(){var e=this,t=this.$createElement;if([ce.x4.SUB_GAME,ce.x4.GAME_SEARCH].includes(this.$route.name))return t("div",{class:[We,"eua-tab-list"]},[this.tabs.map((function(a){return t("div",{on:{click:function(){return e.tabsChange(a.key)}},class:[Ue,e.activeTabkey===a.key?$e:"","tab-".concat(a.key)]},[t("div",{class:Xe},[t("my-img",{attrs:{src:a.img}})]),t("span",[t("span",[a.name])])])}))])}},{key:"renderMainContent",value:function(){var e,t=this,a=this.$createElement,i=null===(e=this.allGameList)||void 0===e?void 0:e.filter((function(e){var t;return null===(t=e.listData)||void 0===t?void 0:t.length})),n=i.length>0?i:this.allGameList.filter((function(e){return e.key===oe.ck.HOT}));return a("transition",{attrs:{"enter-active-class":[le.CM.CssClassName.Animate.FadeIn].join(" "),"leave-active-class":[le.CM.CssClassName.Animate.FadeOut].join(" ")}},[a("div",{style:{width:"100%"},key:t.gameCategoryId},[t.isHome?n.map((function(e){return t.renderGameListContent(e.listData,e.key)})):t.renderGameListContent(t.listData,t.gameCategoryId)])])}},{key:"render",value:function(){var e=arguments[0],t=(0,de.QT)(),i=t.t;return this.$route.name===ce.x4.GAME_EMBEDDED?e("div",{class:"".concat(De," ").concat(mt)},[e("div",{class:dt},[e("div",{class:Fe},[e("my-img",{attrs:{src:a(98257),height:40,options:{loadHD:!0,loadThumb:!1}}}),e("span",[i("lobby.game.hotCommend")])]),e(ie.gE,{attrs:{screenType:se.th.PART_SCREEN_LOADING,spinning:this.loading||this.gameStore.gameOpening}},[this.renderContent(this.listData,this.gameCategoryId)])])]):e("div",{class:(0,te.Z)({},De,!0)},[e(ie.gE,{attrs:{screenType:se.th.BTN_LOADING}},[e(Ie,{attrs:{isScrollX:!0,scrollWidth:he.ZP.px2rem("1020px"),tabsContent:this.renderTabsContent(),mainContent:this.renderMainContent()},ref:"tabsEuropeanAmerican",scopedSlots:{}})])])}}]),r}(pe.Z),W=(0,ae.Z)(F.prototype,"allGameList",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,ae.Z)(F.prototype,"onGameCardClick",[P],Object.getOwnPropertyDescriptor(F.prototype,"onGameCardClick"),F.prototype),R=F))||R)},89799:function(e,t,a){e.exports=a.p+"assets/btn_sc_off.f6a419c750dfd84d72cc.png"},36678:function(e,t,a){e.exports=a.p+"assets/btn_sc_on.5227367889f9fe142ca9.png"},76782:function(e){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC41OTgiIGhlaWdodD0iMjUuMDc0IiB2aWV3Qm94PSIwIDAgMjAuNTk4IDI1LjA3NCI+CiAgPHBhdGggaWQ9Imljb25fcGxheSIgZD0iTTEwLjgyOSwyLjgwN2EyLDIsMCwwLDEsMy40MTcsMGw4Ljk3OSwxNC43NTFhMiwyLDAsMCwxLTEuNzA4LDMuMDRIMy41NTlhMiwyLDAsMCwxLTEuNzA4LTMuMDRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMC41OTgpIHJvdGF0ZSg5MCkiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg=="},59371:function(e,t,a){e.exports=a.p+"assets/img_dt_whz_euan.4b5ddbfbab65d7ce9588.png"}}]);