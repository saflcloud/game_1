(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[5506],{53766:function(e){e.exports={id:"comm_icon_qp--sprite-usage",viewBox:"0 0 23.999 24.001",url:"/assets/sprite.c10e6e11446a81e9da57.svg#comm_icon_qp--sprite",toString:function(){return this.url}}},71846:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return oe}});var r,a,o,i,s,l,u,c,m,g,f,d,p,h,y,v=n(36568),b=n.n(v),S=n(7903),k=n(70970),Z=n(2813),C=n(21797),T=n(92317),I=n(82345),w=n(72283),E=n(20793),P=n(50125),A=(n(92222),n(30813)),R=n(12322),L=n(76937),G=n(27686),O=n(42930),x=n(81764),M=n(98292),N=n(85331),_=n(3587),F=n(17360),H=(n(41320),n(26699),n(38880),n(2046)),q=n(90416),D=n(90825),W=n(33990),z=n(72433),B=n(53766),Y=n.n(B),$=n(6013),j=n.n($),Q=n(72175),X="REv2EBnR_WXOOWTCjrZt",K="jdVH66rbA0gm0g1FakI2",U="Vd2JKk4UwqAE3GzhvKLU",J="TzPpesXNpdi1PzbkFdT0",V="Q6X8F4uJKzjZte1EoWA8",ee="IAKV3A3u7neGYnjOvM88",te="js8ZjGw4bMr8a5b6fGx1",ne="zzKZ5ysjYeSyiNZauBcy",re=(r=(0,A.wA)({name:"GameEmbedded"}),a=(0,A.fI)(),o=(0,A.Rl)(),i=(0,A.Rl)(),s=(0,A.RL)("mainStore.isWeb"),l=(0,A.RL)("state.fullScreen"),u=(0,A.RL)("state.isInGame"),c=(0,H.Debounce)(500),m=(0,H.Bind)(),r((f=function(e){(0,w.Z)(r,e);var t=(0,E.Z)(r);function r(){var e;(0,C.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),(0,P.Z)((0,I.Z)(e),"mainStore",(0,M.h)()),(0,_.Z)((0,I.Z)(e),"breadcrumbToHome",d,(0,I.Z)(e)),(0,_.Z)((0,I.Z)(e),"gameIfream",p,(0,I.Z)(e)),(0,_.Z)((0,I.Z)(e),"fullScreenBtn",h,(0,I.Z)(e)),(0,P.Z)((0,I.Z)(e),"state",{fullScreen:!e.mainStore.isWeb,loading:!0,isInGame:!1}),e}return(0,T.Z)(r,[{key:"refreshWhenChangeDevice",value:function(){this.mainStore.isWeb?this.exitFullscreen():this.setState({fullScreen:!0}),this.refresh()}},{key:"changeAPPzindx",value:function(){var e=this.state,t=e.fullScreen,n=e.isInGame;document.querySelector("#app").style.zIndex=t&&n?"999999":""}},{key:"exitFulScreenl",value:function(e){27==e.keyCode&&this.state.fullScreen&&this.fullScreen()}},{key:"isMandatorySize",get:function(){var e=(0,O.g)().gameParam;return!(null==e||!e.platfromId)&&[94].includes(null==e?void 0:e.platfromId)}},{key:"mounted",value:function(){var e=this;D.sG.Polling.pauseInManual(D.sG.Polling.LobbyPollingType.RED_POCKETS),Q.Z.dispatch({type:"DO_HOME_SCROLL"});var t=(0,M.h)(),n=t.isWeb,r=t.hasLogined,a=(0,O.g)(),o=a.setRegOutTime,i=a.clearRegOutTime;!n&&!this.isFullScreen()&&this.requestFullScreen(),this.gameIfream.onload=function(){e.setState({loading:!1,isInGame:!0})},setTimeout((function(){e.setState({loading:!1})}),5e3),window.addEventListener("message",this.handlePostMessage),r||(i(),o(42e4,this.gotoReg))}},{key:"beforeDestroy",value:function(){var e=(0,M.h)(),t=e.hasLogined,n=e.updatePrize,r=(0,O.g)(),a=r.gameParam,o=r.setGameParameters,i=r.registerOutTime,s=r.clearRegOutTime;!t||null!=a&&a.openDemoGame||n(),!t&&i&&(this.gotoReg(),s()),o(void 0),D.sG.Polling.recoverInManual(D.sG.Polling.LobbyPollingType.RED_POCKETS),window.removeEventListener("message",this.handlePostMessage)}},{key:"gotoReg",value:function(){var e=(0,x.QT)().t;D.sG.Modal.message({type:"warning",content:e("lobby.game.demoGameToRegTip")}),setTimeout((function(){D.sG.Modal.open("registerModal")}),2e3)}},{key:"handlePostMessage",value:function(e){"cocos-register"===(null==e?void 0:e.data)&&window.location.reload()}},{key:"isFullScreen",value:function(){var e=document;return!!(e.fullscreen||e.mozFullScreen||e.webkitIsFullScreen||e.webkitFullScreen||e.msFullScreen)}},{key:"requestFullScreen",value:function(){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"exitFullscreen",value:function(){var e=document;e.exitFullscreen?e.exitFullscreen():e.mozCancelFullScreen?e.mozCancelFullScreen():e.webkitExitFullscreen&&e.webkitExitFullscreen()}},{key:"refresh",value:function(){this.setState({loading:!0}),this.gameIfream.src=this.gameIfream.src}},{key:"fullScreen",value:function(){var e,t=this;if((0,M.h)().isWeb)this.setState({fullScreen:!this.state.fullScreen});else var n=(0,x.QT)().t,r=D.sG.Modal.create({title:function(){return n("lobby.common.tips.title")},titlePosition:"center",class:ne,content:function(){return n("lobby.game.confirmExitGame")},cancelText:n("lobby.game.continueGame"),okText:n("lobby.game.returnLobby"),getContainer:function(){return document.querySelector("#app")},onOk:(e=(0,Z.Z)((0,k.Z)().mark((function e(){var n,a,o,i;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,O.g)(),a=n.gameParam,o=n.setGameParameters,i=null==a?void 0:a.platformName,t.setState({isInGame:!1}),t.$nextTick((function(){t.breadcrumbToHome(!i),o(void 0),t.exitFullscreen(),r.destroy()}));case 4:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}},{key:"fullScreenBtnMove",value:function(e){var t=this,n=(new Date).getTime(),r=this.fullScreenBtn;if(e.touches){var a=e.touches[0],o=a.clientX-r.offsetLeft,i=a.clientY-r.offsetTop;document.ontouchmove=function(e){r.style.left=e.touches[0].clientX-o+"px",r.style.top=e.touches[0].clientY-i+"px"},document.ontouchend=function(){(new Date).getTime()-n<200&&t.fullScreen(),document.ontouchmove=null,t.outOfWindow(r)}}else{var s=e,l=s.clientX-r.offsetLeft,u=s.clientY-r.offsetTop;document.onmousemove=function(e){r.style.left=e.clientX-l+"px",r.style.top=e.clientY-u+"px"},document.onmouseup=function(){(new Date).getTime()-n<200&&t.fullScreen(),document.onmousemove=null,t.outOfWindow(r)}}}},{key:"outOfWindow",value:function(e){e.offsetLeft<0&&(e.style.left="0px"),e.offsetTop<0&&(e.style.top="0px"),e.offsetLeft+e.clientWidth>window.innerWidth&&(e.style.left=window.innerWidth-e.clientWidth+"px"),e.offsetTop+e.clientHeight>window.innerHeight&&(e.style.top=window.innerHeight-e.clientHeight+"px")}},{key:"renderIfream",value:function(){var e,t,r=this.$createElement,a=(0,O.g)().gameParam;return r("div",{class:(e={},(0,P.Z)(e,K,!0),(0,P.Z)(e,J,this.state.fullScreen),e)},[r(q.gE,{attrs:{spinning:this.state.loading,screenType:W.th.PART_SCREEN_LOADING}},[r("iframe",{class:(t={},(0,P.Z)(t,U,!0),(0,P.Z)(t,te,this.isMandatorySize),(0,P.Z)(t,J,this.state.fullScreen),t),ref:"gameIfream",attrs:{src:null==a?void 0:a.url,frameborder:"0",scrolling:"auto",sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",allowfullscreen:!0}}),this.state.fullScreen&&r("img",{class:V,attrs:{src:n(31485)},on:{mousedown:this.fullScreenBtnMove,touchstart:this.fullScreenBtnMove},ref:"fullScreenBtn"})])])}},{key:"render",value:function(){var e=arguments[0],t=this.mainStore.isWeb,n=(0,x.QT)(),r=n.t;return e("div",{class:X},[t&&e(z.h_,{attrs:{to:D.CM.PortalName.GameListTopRight}},[e("div",{class:ee},[e("div",{on:{click:this.refresh}},[e("icon-sprite",{attrs:{sprite:j()}}),e("span",[r("lobby.game.refresh")])]),e("div",{on:{click:this.fullScreen}},[e("icon-sprite",{attrs:{sprite:Y()}}),e("span",[r("lobby.game.fullScreen")])])])]),this.renderIfream()])}}]),r}(A.XY),d=(0,F.Z)(f.prototype,"breadcrumbToHome",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=(0,F.Z)(f.prototype,"gameIfream",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,F.Z)(f.prototype,"fullScreenBtn",[i],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,F.Z)(f.prototype,"refreshWhenChangeDevice",[s],Object.getOwnPropertyDescriptor(f.prototype,"refreshWhenChangeDevice"),f.prototype),(0,F.Z)(f.prototype,"changeAPPzindx",[l,u],Object.getOwnPropertyDescriptor(f.prototype,"changeAPPzindx"),f.prototype),(0,F.Z)(f.prototype,"fullScreen",[c,m],Object.getOwnPropertyDescriptor(f.prototype,"fullScreen"),f.prototype),g=f))||g),ae="ytHpw9rZkr1SPissa_4a",oe=(0,A.wA)({name:"GameEmbeddedPage"})(y=function(e){(0,w.Z)(r,e);var t,n=(0,E.Z)(r);function r(){var e;(0,C.Z)(this,r);for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];return e=n.call.apply(n,[this].concat(a)),(0,P.Z)((0,I.Z)(e),"mainStore",(0,M.h)()),(0,P.Z)((0,I.Z)(e),"state",{listData:[],current:1,total:0,loading:!1,scrollLoading:!1,currentQueryFun:function(){return null}}),(0,P.Z)((0,I.Z)(e),"reRenderGame",!1),e}return(0,T.Z)(r,[{key:"tabs",get:function(){var e=(0,x.QT)().t;return[{key:R.ck.HOT,name:e("lobby.game.allHot"),img:this.tabImgs[R.ck.HOT],munuName:"".concat(e("lobby.game.all"))}]}},{key:"mounted",value:function(){this.init(),this.queryHotGame()}},{key:"init",value:function(){var e=this.mainStore.isEuropeanAmerican?R.ck.HOME:R.ck.HOT,t=(0,O.g)().gameParam;null!=t&&t.url||this.$router.push({name:L.x4.GAME,query:{gameCategoryId:String(e)}})}},{key:"queryHotGame",value:(t=(0,Z.Z)((0,k.Z)().mark((function e(){var t,n,r;return(0,k.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,(0,G.fu)({current:1,size:100,platformId:-1!==this.platformId?this.platformId:void 0,gameCategoryId:this.gameCategoryId===this.defaultHotGameId?void 0:this.gameCategoryId});case 3:t=e.sent,n=t.hotGameList,r=t.total,this.setState({listType:"game",total:r,listData:n,loading:!1});case 7:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"onBreadcrumbClick",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(0,O.g)(),n=t.setGameParameters;n(void 0),e&&this.gameCategoryId!==R.ck.HOT?this.$router.push({name:L.x4.GAME,query:{gameCategoryId:this.$route.query.gameCategoryId}}):this.$router.push({name:L.x4.SUB_GAME,query:(0,S.Z)({},this.$route.query)})}},{key:"render",value:function(){var e=arguments[0];return e("div",{class:[ae]},[this.renderBreadcrumb(!1),e(re,b()([{},{props:{breadcrumbToHome:this.onBreadcrumbClick}}])),e(this.gameTabList,b()([{},{props:{tabsType:"game",activeTabkey:R.ck.HOT,tabs:this.tabs,listData:this.state.listData,current:this.state.current,total:this.state.total,loading:this.state.loading,scrollLoading:!1,tabsChange:function(){return null},currentQueryFun:function(){return null},gameCategory:this.gameCategory,platformItem:this.platformItem}}])),this.randerTable()])}}]),r}((0,A.Wr)(N.Z)))||y},85331:function(e,t,n){"use strict";n.d(t,{Z:function(){return A}});var r,a,o,i=n(74492),s=n(21797),l=n(92317),u=n(82345),c=n(72283),m=n(20793),g=n(50125),f=(n(41539),n(78783),n(33948),n(92222),n(51532),n(9653),n(26699),n(69826),n(68309),n(30813)),d=n(12322),p=n(90825),h=n(33990),y=n(72433),v=n(76937),b=n(42930),S=n(81764),k=n(98292),Z=n(56260),C=n(72859),T=n(52318),I=n.n(T),w="Sg8EWG73vPuPWCl08eq1",E="TUj1K7oRl6nYBlJ7lxQT",P="Bet_XT7ApAdc9QyvCWQg",A=(0,f.wA)({name:"BasePageMixins",components:(o={class:[w]},a={},(0,g.Z)(a,d.D5.NORMAL_STYLE0,Z.Z.createAsyncComponent({component:function(){return Promise.all([n.e(3286),n.e(2446),n.e(1230),n.e(7320)]).then(n.bind(n,48115))},loadingComponentConfig:o})),(0,g.Z)(a,d.D5.NORMAL_STYLE1,Z.Z.createAsyncComponent({component:function(){return Promise.all([n.e(3286),n.e(2446),n.e(1230),n.e(7320),n.e(2116)]).then(n.bind(n,32116))},loadingComponentConfig:o})),(0,g.Z)(a,d.D5.CYANBLUE,Z.Z.createAsyncComponent({component:function(){return Promise.all([n.e(1230),n.e(2894),n.e(5955)]).then(n.bind(n,21405))},loadingComponentConfig:o})),(0,g.Z)(a,d.D5.EUROPEAN_AMERICAN,Z.Z.createAsyncComponent({component:function(){return Promise.all([n.e(3286),n.e(1230),n.e(5544)]).then(n.bind(n,62719))},loadingComponentConfig:o})),a)})(r=function(e){(0,c.Z)(r,e);var t=(0,m.Z)(r);function r(){var e;(0,s.Z)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),(0,g.Z)((0,u.Z)(e),"mainStore",(0,k.h)()),e}return(0,l.Z)(r,[{key:"gameTabList",get:function(){var e,t=this.mainStore,n=t.isEuropeanAmerican,r=t.isCyanBlue,a=this.mainStore.homeLayoutInfos,o=null!==(e=null==a?void 0:a.topLayout)&&void 0!==e?e:h.j4.style0;return new Map([[o===h.j4.style0,d.D5.NORMAL_STYLE0],[o===h.j4.style1,d.D5.NORMAL_STYLE1],[r,d.D5.CYANBLUE],[n,d.D5.EUROPEAN_AMERICAN]]).get(!0)}},{key:"defaultHotGameId",get:function(){var e=this.mainStore.isEuropeanAmerican,t=String(e?d.ck.HOME:d.ck.HOT);return Number(t)}},{key:"hasAbbreviation",get:function(){var e=this.mainStore.language;return["zh_CN","zh_TW","tl_PH","pt_PT","th_TH","ko_KR"].includes(e)}},{key:"isWeb",get:function(){return this.mainStore.isWeb}},{key:"isLogin",get:function(){return this.mainStore.hasLogined}},{key:"Config",get:function(){return{gameDataSize:50}}},{key:"tabImgs",get:function(){var e;return e={},(0,g.Z)(e,d.ck.HOT,n(98257)),(0,g.Z)(e,d.ck.SEARCH,n(88573)),(0,g.Z)(e,d.ck.CHESS,n(5955)),(0,g.Z)(e,d.ck.FISH,n(61594)),(0,g.Z)(e,d.ck.ELECTRONIC,n(90535)),(0,g.Z)(e,d.ck.REAL,n(82372)),(0,g.Z)(e,d.ck.SPORTS,n(7181)),(0,g.Z)(e,d.ck.LOTTERY,n(50199)),(0,g.Z)(e,d.ck.RECENT,n(85355)),e}},{key:"gameCategoryId",get:function(){var e;return Number(null!==(e=this.$route.query.gameCategoryId)&&void 0!==e?e:this.defaultHotGameId)}},{key:"gameCategoryName",get:function(){var e;return null===(e=this.gameCategory)||void 0===e?void 0:e.gameCategoryName}},{key:"gameCategory",get:function(){var e=this,t=(0,b.g)().gameCategoriesAvailable,n=(0,S.QT)().t;return[{gameCategoryId:0,gameCategoryName:"".concat(n("lobby.gameMenu.menu0"))}].concat((0,i.Z)(t)).find((function(t){return t.gameCategoryId===e.gameCategoryId}))}},{key:"platformId",get:function(){return Number(this.$route.query.platformId||-1)}},{key:"platformItem",get:function(){var e,t=this,n=this.gameCategory;return null==n||null===(e=n.list)||void 0===e?void 0:e.find((function(e){return e.platformId===t.platformId}))}},{key:"randerTable",value:function(){var e=this.$createElement,t=this.mainStore,n=t.isEuropeanAmerican,r=t.isCyanBlue;return this.isLogin&&this.isWeb&&!n&&!r?e(C.Z):null}},{key:"renderBreadcrumb",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this.$createElement,r=(0,b.g)(),a=r.gameParam,o=r.setGameParameters,i=[],s=function(){o(void 0),e.$router.push({name:v.x4.GAME,query:{gameCategoryId:e.$route.query.gameCategoryId}})},l=function(){o(void 0),e.$router.push({name:v.x4.SUB_GAME,query:{platformId:e.$route.query.platformId,gameCategoryId:e.$route.query.gameCategoryId}})};if(t){var u;this.gameCategoryName&&i.push(n("div",[n("span",{on:{click:s}},[this.gameCategoryName]),n("icon-sprite",{attrs:{sprite:I()}})])),null!==(u=this.platformItem)&&void 0!==u&&u.platformName&&i.push(n("div",[n("span",[this.platformItem.platformName])]))}else{var c,m;if(this.gameCategoryName&&i.push(n("div",[n("span",{on:{click:s}},[this.gameCategoryName]),n("icon-sprite",{attrs:{sprite:I()}})])),null!==(c=this.platformItem)&&void 0!==c&&c.platformName)i.push(n("div",[n("span",{on:{click:l}},[null===(m=this.platformItem)||void 0===m?void 0:m.platformName]),n("icon-sprite",{attrs:{sprite:I()}})]));null!=a&&a.name&&i.push(n("div",[n("span",[null==a?void 0:a.name])]))}return n("div",{class:E},[n("div",{class:P},[i]),n(y.YC,{attrs:{name:p.CM.PortalName.GameListTopRight}})])}}]),r}(f.XY))||r},31485:function(e,t,n){"use strict";e.exports=n.p+"assets/exit_btn.82d845c8246d51da3831.png"}}]);