(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[7320],{72512:function(e){e.exports={id:"img_cjc_deco--sprite-usage",viewBox:"0 0 14 21.5",url:"/assets/sprite.c10e6e11446a81e9da57.svg#img_cjc_deco--sprite",toString:function(){return this.url}}},43569:function(e,t,n){"use strict";n.d(t,{Z:function(){return M}});var i,a,r,o,s,l,c,u,h,g,d,p,m,y,v,b=n(23493),f=n.n(b),Z=n(3587),k=n(21797),C=n(92317),w=n(82345),T=n(72283),S=n(20793),E=n(50125),I=n(17360),P=(n(41320),n(92222),n(9653),n(74916),n(15306),n(38880),n(30813)),H=n(14577),x=n(90825),_=n(86895),N=n(98292),D=n(95627),A=n(43286),O=n(4215),R=n(11347),L=n(50763),G="Gu9QZaEWIjoJsDh7ANjl";A.ZP.use(O.Z),A.ZP.use(R.Z),A.ZP.use(L.Z);var B=(i=(0,P.wA)({name:"BetterScroll"}),a=(0,P.tB)("caculateMinHeightWithContentHeight"),r=(0,P.fI)(),o=(0,P.fI)(D.ZP.bool.def(!1)),s=(0,P.fI)(D.ZP.bool.def(!0)),l=(0,P.y1)("pullingUp"),c=(0,P.y1)("pullingDown"),u=(0,H.WY)(),h=(0,H.Xo)(300),i((d=function(e){(0,T.Z)(n,e);var t=(0,S.Z)(n);function n(){var e;(0,k.Z)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),(0,Z.Z)((0,w.Z)(e),"caculateMinHeightWithContentHeight",p,(0,w.Z)(e)),(0,E.Z)((0,w.Z)(e),"state",{}),(0,E.Z)((0,w.Z)(e),"bs",void 0),(0,E.Z)((0,w.Z)(e),"mainStore",(0,N.h)()),(0,Z.Z)((0,w.Z)(e),"scrollHeight",m,(0,w.Z)(e)),(0,Z.Z)((0,w.Z)(e),"showHolidayBg",y,(0,w.Z)(e)),(0,Z.Z)((0,w.Z)(e),"bindGlobalScrollToTop",v,(0,w.Z)(e)),e}return(0,C.Z)(n,[{key:"handlePullingUp",value:function(){var e;null===(e=this.bs)||void 0===e||e.finishPullUp()}},{key:"handlePullingDown",value:function(){var e;null===(e=this.bs)||void 0===e||e.finishPullDown()}},{key:"handleScroll",value:function(){x.xN.dispatch({type:"BETTER_SCROLL"})}},{key:"mounted",value:function(){var e=this;this.mainStore.isWeb||this.initScroll();var t=W(this.$refs.scrollContentRef,(function(){if(e.$refs.scrollContentRef){var t=window.getComputedStyle(e.$refs.scrollContentRef).height;e.caculateMinHeightWithContentHeight&&e.caculateMinHeightWithContentHeight(Number(t.replace("px","")))}})).stop;this.$once("hook:beforeDestroy",t)}},{key:"initScroll",value:function(){var e,t;(this.bs=new A.ZP(this.$refs.scrollBoxRef,{probeType:3,observeDOM:!0,click:!0,bounce:!0,pullDownRefresh:{threshold:100,stop:0},pullUpLoad:{threshold:-100,stop:0}}),this.bs.on("pullingDown",this.handlePullingDown),this.bs.on("pullingUp",this.handlePullingUp),this.bs.on("scroll",this.handleScroll),this.bindGlobalScrollToTop)&&(null===(e=document)||void 0===e||null===(t=e.getElementById("globalScrollToTop"))||void 0===t||t.addEventListener("touchstart",this.scrollTo.bind(this,0,0)))}},{key:"beforeDestroy",value:function(){var e,t,n;(this.scrollTo(),null===(e=this.bs)||void 0===e||e.destroy(),this.bindGlobalScrollToTop)&&(null===(t=document)||void 0===t||null===(n=t.getElementById("globalScrollToTop"))||void 0===n||n.removeEventListener("touchstart",this.scrollTo.bind(this,0,0)))}},{key:"scrollTo",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;null===(e=this.bs)||void 0===e||e.scrollTo(t,n)}},{key:"render",value:function(){var e,t=arguments[0],n=(0,N.h)(),i=n.isWeb,a=(0,_.g)(i?"/game/img_dt_dw.png":"/game/img_dt_dw_h5.png"),r=a&&this.showHolidayBg?"url(".concat(a,")"):"none";return t("div",{class:G,ref:"scrollBoxRef",style:{height:this.scrollHeight&&this.scrollHeight+"px"||"auto",overflow:this.mainStore.isWeb?"visible":"hidden",backgroundImage:r}},[t("div",{ref:"scrollContentRef"},[null===(e=this.$slots)||void 0===e?void 0:e.default])])}}]),n}(P.XY),p=(0,I.Z)(d.prototype,"caculateMinHeightWithContentHeight",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=(0,I.Z)(d.prototype,"scrollHeight",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=(0,I.Z)(d.prototype,"showHolidayBg",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,I.Z)(d.prototype,"bindGlobalScrollToTop",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,I.Z)(d.prototype,"handlePullingUp",[l],Object.getOwnPropertyDescriptor(d.prototype,"handlePullingUp"),d.prototype),(0,I.Z)(d.prototype,"handlePullingDown",[c],Object.getOwnPropertyDescriptor(d.prototype,"handlePullingDown"),d.prototype),(0,I.Z)(d.prototype,"handleScroll",[u,h],Object.getOwnPropertyDescriptor(d.prototype,"handleScroll"),d.prototype),g=d))||g),M=B,W=function(e,t){var n=t&&f()(t,100),i=new ResizeObserver((function(e){var t=e[0].contentRect;n&&n({width:t.width,height:t.height})}));return i.observe(e),{stop:function(){return i.disconnect()}}}},45909:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var i,a,r,o,s,l,c,u,h,g,d=n(23493),p=n.n(d),m=n(3587),y=n(21797),v=n(92317),b=n(82345),f=n(72283),Z=n(20793),k=n(50125),C=n(17360),w=(n(41320),n(92222),n(74916),n(15306),n(9653),n(38880),n(30813)),T=n(98292),S=n(95627),E="odKiISGeGnuYBjMih84t",I="BoLrcPeijG5C_bbO_EDD",P="EsMVg0Pogl4qtXVolN_l",H=(i=(0,w.wA)({name:"CalculateSizeBox"}),a=(0,w.fI)(S.ZP.number.def(440)),r=(0,w.fI)(),o=(0,w.fI)(),s=(0,w.DF)("caculateMinHeightWithContentHeight"),i((c=function(e){(0,f.Z)(n,e);var t=(0,Z.Z)(n);function n(){var e;(0,y.Z)(this,n);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a)),(0,k.Z)((0,b.Z)(e),"state",{height:void 0,width:void 0,contentHeight:void 0}),(0,k.Z)((0,b.Z)(e),"mainStore",(0,T.h)()),(0,m.Z)((0,b.Z)(e),"minHeight",u,(0,b.Z)(e)),(0,m.Z)((0,b.Z)(e),"mathHeight",h,(0,b.Z)(e)),(0,m.Z)((0,b.Z)(e),"isNarrowByContentHeight",g,(0,b.Z)(e)),e}return(0,v.Z)(n,[{key:"caculateHeight",value:function(e){if(this.mainStore.isWeb)return this.setState({height:void 0});if(this.mathHeight){var t,n=null===(t=getComputedStyle(document.documentElement))||void 0===t?void 0:t.fontSize.replace("px",""),i=Number(n)/100*this.mathHeight;e=document.body.offsetHeight-i}var a=e,r=this.state.contentHeight;this.isNarrowByContentHeight&&r&&(a=r<e?r:e);var o=this.minHeight;a<o&&(a=o),this.setState({height:a})}},{key:"caculateMinHeightWithContentHeight",value:function(e){var t=window.getComputedStyle(this.$refs.boxRef).height,n=Number(t.replace("px",""));this.setState({contentHeight:e}),this.caculateHeight(n)}},{key:"mounted",value:function(){var e=this,t=_(this.$refs.boxRef,(function(t){var n=t.height;e.caculateHeight(n)})).stop;this.$once("hook:beforeDestroy",t)}},{key:"render",value:function(){var e,t,n,i,a=arguments[0],r=this.state,o=r.width,s=r.height;return i=this.mainStore.isWeb?"auto":this.mathHeight?s+"px":"auto",a("section",{class:E,ref:"boxRef",style:{minHeight:this.minHeight+"px",height:i}},[a("div",{class:(e={},(0,k.Z)(e,I,!0),(0,k.Z)(e,P,this.mainStore.isWeb),e)},[null===(t=this.$scopedSlots)||void 0===t||null===(n=t.default)||void 0===n?void 0:n.call(t,{width:o,height:s})])])}}]),n}(w.XY),u=(0,C.Z)(c.prototype,"minHeight",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=(0,C.Z)(c.prototype,"mathHeight",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=(0,C.Z)(c.prototype,"isNarrowByContentHeight",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,C.Z)(c.prototype,"caculateMinHeightWithContentHeight",[s],Object.getOwnPropertyDescriptor(c.prototype,"caculateMinHeightWithContentHeight"),c.prototype),l=c))||l),x=H,_=function(e,t){var n=t&&p()(t,100),i=new ResizeObserver((function(e){var t=e[0].contentRect;n&&n({width:t.width,height:t.height})}));return i.observe(e),{stop:function(){return i.disconnect()}}}},68895:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var i,a=n(70970),r=n(22705),o=n(2813),s=n(21797),l=n(92317),c=n(82345),u=n(72283),h=n(20793),g=n(50125),d=(n(92222),n(9653),n(30813)),p=n(90416),m=n(90825),y=n(82707),v=n(72563),b=n(81764),f=n(98292),Z=n(71707),k=n(72512),C=n.n(k),w="kwROenzl5jANBpsa86JA",T="fGgkxCW4wJDFTCuU1x3k",S="vUclEsHoQpxGG9JkAWvq",E="ZsDB9Iug1vIdPJTQhPr9",I="fw_goAO_HuEpkbd4HSoM",P="Nc74i18BdwoeJm1EcvE6",H="OEzeaE9JVQg6PFJHvqJy",x="MKVm1iE8PRSlnfskcsMD",_=n(41800),N=(0,d.wA)({name:"Jackpot"})(i=function(e){(0,u.Z)(d,e);var t,n,i=(0,h.Z)(d);function d(){var e;(0,s.Z)(this,d);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e=i.call.apply(i,[this].concat(n)),(0,g.Z)((0,c.Z)(e),"state",{prizePoolWinAmount:0}),e}return(0,l.Z)(d,[{key:"defaultColumns",get:function(){var e=this.$createElement,t=(0,b.QT)().t;return[{title:t("lobby.aside.jackpot.table.time"),dataIndex:"prizeTime",key:"prizeTime"},{title:t("lobby.aside.jackpot.table.nickname"),dataIndex:"nickname",key:"nickname"},{title:t("lobby.aside.jackpot.table.gameName"),dataIndex:"gameName",key:"gameName"},{title:t("lobby.aside.jackpot.table.winningPrize"),dataIndex:"prizeAmount",key:"prizeAmount",customRender:function(t){return e("span",{class:[m.CM.CssClassName.Lobby.Color.Yellow]},[(0,v.o)(t)])}}]}},{key:"mounted",value:function(){m.sG.Polling.create({key:m.sG.Polling.LobbyPollingType.JACKPOT_PRIZE,callback:this.queryPrizePoolWinAmount.bind(this),leading:!0,interval:5e3})}},{key:"beforeDestroy",value:function(){m.sG.Polling.destroy(m.sG.Polling.LobbyPollingType.JACKPOT_PRIZE)}},{key:"queryPrizePoolWinAmount",value:(n=(0,o.Z)((0,a.Z)().mark((function e(){var t,n,i,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Z)((0,y.Sx)());case 2:if(n=e.sent,i=(0,r.Z)(n,2),o=i[0],s=i[1],!o){e.next=9;break}return console.error("queryPrizePoolWinAmount fetch error:",o),e.abrupt("return");case 9:this.setState({prizePoolWinAmount:Number((null===(t=s.data)||void 0===t?void 0:t.totalAmount)||0)});case 10:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"queryPrizePoolWinnnerList",value:(t=(0,o.Z)((0,a.Z)().mark((function e(){var t,n,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Z)((0,y.IM)());case 2:return t=e.sent,n=(0,r.Z)(t,2),i=n[0],o=n[1],i&&console.error("queryPrizePoolWinnnerList fetch error:",i),e.abrupt("return",{data:(null==o?void 0:o.prizeRecordToFrontRecords)||[]});case 8:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"openRecordWindow",value:function(){var e=this,t=this.$createElement,n=(0,b.QT)().t;m.sG.Modal.create({class:x,titlePosition:"left",closable:!0,hiddenBtns:!0,width:Z.ZP.px2rem(1e3),title:function(){return n("lobby.aside.jackpot.modelTitle")},content:function(){return t(p.FN,{attrs:{query:e.queryPrizePoolWinnnerList,columns:e.defaultColumns,rowKey:"recordId",pagination:!1,emptyHeight:Z.ZP.px2rem("650px"),scroll:{x:0,y:650}}})}})}},{key:"render",value:function(){var e=arguments[0],t=(0,b.QT)(),n=t.t,i=(0,f.h)();return e("div",{class:w},[e("div",{class:T},[e("div",{class:[S,"zh_CN"!==i.language?I:""]},[e("icon-sprite",{attrs:{sprite:C()}}),e("span",[n("lobby.aside.jackpot.title")]),e("icon-sprite",{attrs:{sprite:C()},class:E})])]),e("ul",{class:P},[e("count-to",{class:H,attrs:{value:this.state.prizePoolWinAmount,formatter:function(e){return(0,v.o)(e,{minIntergerDigits:8})}},scopedSlots:{renderItem:function(t){return e("li",[t])}}})])])}}]),d}(d.XY))||i},48115:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Re}});var i,a,r,o,s,l,c,u=n(36568),h=n.n(u),g=n(7903),d=n(70970),p=n(2813),m=n(3587),y=n(21797),v=n(92317),b=n(82345),f=n(72283),Z=n(20793),k=n(50125),C=n(17360),w=(n(41320),n(92222),n(68309),n(41539),n(39714),n(26699),n(32023),n(57327),n(21249),n(51532),n(78783),n(33948),n(74916),n(15306),n(9653),n(38880),n(90416)),T=n(30813),S=n(14577),E=n(12322),I=n(90825),P=n(95306),H=n(33990),x=n(76937),_=n(27686),N=n(86493),D=n(81764),A=n(98292),O=n(43569),R=n(71707),L=n(45909),G=n(60708),B=n(68895),M=n(10892),W=n.n(M),z=n(24444),j=n.n(z),$=n(5033),U=n.n($),q=n(73161),J="fpTau3yAJccQhI9F4VtR",K="fE5Wk60uDqthQ1y5steE",Q="kPV9g9nxx4cZYTpu75Pd",V="RikvRcn_mkN1tNsewQsb",Y="Uuc7DcV1I2Xp2f4RheQT",F="J0o4pKcxemBy2CeLj6iX",X="KdcppzqGBtuXNBlPR5gw",ee="yi65_dyfVdBgpwcYazIA",te="p47a2swy7pPX6yxK0eKA",ne="dERScedEg43kp1O8SJAa",ie="UV0uUaksfQrsDmAJOiRP",ae="PMbX_r_mN83iXc8fxbFe",re="S2lzwSOIL00imcDjlOk9",oe="UVdgBbtDr2Ng4rZhqdGz",se="n0__mqQ6P6yPCL1Z9oeZ",le="l7nSNvy4P2XHcIJpkMWH",ce="Nfmm24VYr2IwkMO_0aTx",ue="LnPuZkeo4Eb6fzxLvBeX",he="r1AyYZJ04gKEq3WXYk6A",ge="HBwNBZi3ehsgtqjAgv7Q",de="trtyGLep8gy8mazh9eao",pe="V20nglTxhtbx3oG2M8sc",me="clFUeaoEhzWjfnVw2y2i",ye="UBvwHuJkBSyONOjS_a9h",ve="tsut19PKFgqnUnhmAVfL",be="BoWrJZTSRKKP9bPZYUQK",fe="ajYC97UkNEMmV4u8lRAr",Ze="ZH9rWVlt3EwZgbhP2r_n",ke="OCKXne9N72tefPNSbaP5",Ce="dj3jTFqBhrbTUfSKK2jS",we="A9RAoXRiR8ulCcP8TIsK",Te="PZclDaRIdZqBVoWkMJAp",Se="cBTjyJeP44vAXUY5Ebe5",Ee="d2_5u0y_pWzS3gG_K2dL",Ie="Qjfhdm5Z1bjqBxyKQToP",Pe="OckfY2h9NrYYyl1U1NhZ",He="Op3bqnWCwjSEjiDgZ9I3",xe="wzLR5zJlXYjl8y_VzMCO",_e="TEa5tRJMa86dO1CAGRhA",Ne="GvPcK3lSBL7clYgyOK93",De="UDJCgdN1LDC2mxQHV64O",Ae="rOL5ZOyJEBYxCOGsbCFf",Oe="SxyaV1NS02bvGHdjYvD9",Re=(i=(0,T.wA)({name:"GameTabList0"}),a=(0,T.Rl)(),r=(0,S.K4)(500),o=(0,T.RL)("gameCategoryId",{immediate:!0}),i((l=function(e){(0,f.Z)(s,e);var t,i,a,r,o=(0,Z.Z)(s);function s(){var e;(0,y.Z)(this,s);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return e=o.call.apply(o,[this].concat(n)),(0,m.Z)((0,b.Z)(e),"scrollDown",c,(0,b.Z)(e)),(0,k.Z)((0,b.Z)(e),"state",{tabsPxHeight:0}),e}return(0,v.Z)(s,[{key:"mounted",value:(r=(0,p.Z)((0,d.Z)().mark((function e(){var t;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=this.betterscroll)||void 0===t||t.scrollTo(),I.xN.subscribe(this.onHomeScroll);case 2:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"beforeDestroy",value:function(){I.xN.unsubscribe(this.onHomeScroll)}},{key:"onHomeScroll",value:function(e){var t=e.type;"HOME_SCROLL"!==t&&"BETTER_SCROLL"!==t||!this.scrollDown||!this.scrollLoading&&this.checkPosition()&&this.loadingMore()}},{key:"checkPosition",value:function(){var e=this.scrollDown,t=document.documentElement.clientHeight,n=e.getBoundingClientRect().top;return n>-e.getBoundingClientRect().height&&n<=t-50}},{key:"loadingMore",value:function(){var e;null===(e=this.currentQueryFun)||void 0===e||e.call(this)}},{key:"reset",value:function(){var e;null===(e=this.betterscroll)||void 0===e||e.scrollTo()}},{key:"getCardStyleAttr",value:function(){var e,t,n,i=(0,A.h)().isWeb,a="";return"lobby"===this.tabsType?(e=i?373:520,t=i?150:203,a=re,n=!0):(e=i?100:130,t=i?100:130,a=ke,n=!1),{width:e,height:t,className:a,isLobby:n}}},{key:"goToPlateform",value:function(e){if(this.platformId!==e.platformId||this.$route.name===x.x4.GAME_EMBEDDED){var t=e.platformId,n=e.gameCategoryId;this.$router.push({name:x.x4.SUB_GAME,query:{gameCategoryId:n.toString(),platformId:t.toString()}})}}},{key:"onGameCardClick",value:(a=(0,p.Z)((0,d.Z)().mark((function e(t,n){var i,a,r,o,s,l,c,u;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==(r=null==t?void 0:t.target)||null===(i=r.className)||void 0===i||null===(a=i.includes)||void 0===a||!a.call(i,"unable-click")){e.next=3;break}return e.abrupt("return");case 3:if(o=(0,D.QT)(),s=o.t,0!==n.gameStatus&&!n.removeStatus&&!n.maintainStatus){e.next=7;break}return I.sG.Modal.message({type:"warning",content:s("lobby.game.maintain")}),e.abrupt("return");case 7:if(l=1,!n.gameId){e.next=12;break}this._openGame(n),e.next=27;break;case 12:if(!n.platformName){e.next=16;break}this.goToPlateform(n),e.next=27;break;case 16:if(n.hotType!==l){e.next=26;break}return c=n.gameCategoryId,u=n.platformId,e.next=21,this.checkPlatformStatus(c,u);case 21:if(e.sent){e.next=23;break}return e.abrupt("return");case 23:this.$router.push({name:x.x4.SUB_GAME,query:{gameCategoryId:c.toString(),platformId:u.toString()}}),e.next=27;break;case 26:this._openGame(n);case 27:case"end":return e.stop()}}),e,this)}))),function(e,t){return a.apply(this,arguments)})},{key:"onTabsChange",value:(i=(0,p.Z)((0,d.Z)().mark((function e(t){return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.tabsChange(t);case 1:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"collect",value:(t=(0,p.Z)((0,d.Z)().mark((function e(t,n,i){var a,r,o,s,l,c;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.gameId,o=n.platformId,s=n.gameCategoryId,e.next=3,(0,_.nn)({gameId:r,platformId:o,gameCategoryId:s},t);case 3:l=[],c=this.total,i?(l=this.listData.filter((function(e){return e.gameId!==r})),this.activeTabkey===E.ck.COLLENCT&&(c-=1)):l=this.listData.map((function(e){return e.gameId===r?(0,g.Z)((0,g.Z)({},e),{},{favoriteStatus:t?E.o$.FAVORITE:E.o$.UNFAVORITE}):e})),null===(a=this.updateListData)||void 0===a||a.call(this,l,c);case 7:case"end":return e.stop()}}),e,this)}))),function(e,n,i){return t.apply(this,arguments)})},{key:"renderFavoriteIcon",value:function(e){var t=this.$createElement,n=.58;return void 0!==e.favoriteStatus||this.activeTabkey===E.ck.RECENT?e.favoriteStatus===E.o$.FAVORITE?t("icon-sprite",h()([{},{nativeOn:{click:T.Ie.LY.stop(this.collect.bind(this,!1,e,!1))}},{attrs:{scale:n,sprite:q.Z.sprite_main_game_favorite}}])):t("icon-sprite",h()([{},{nativeOn:{click:T.Ie.LY.stop(this.collect.bind(this,!0,e,!1))}},{attrs:{scale:n,sprite:q.Z.sprite_main_game_unfavorite}}])):this.activeTabkey===E.ck.COLLENCT?t("icon-sprite",h()([{},{nativeOn:{click:T.Ie.LY.stop(this.collect.bind(this,!1,e,!0))}},{attrs:{scale:n,sprite:q.Z.sprite_main_game_favorite}}])):void 0}},{key:"renderMaintain",value:function(e){var t=this.$createElement,i=(0,D.QT)().t,a=(0,A.h)().isWeb||"lobby"!==this.tabsType,r=a?58:92,o=e>=150?R.ZP.px2rem(22):R.ZP.px2rem(1),s=a?R.ZP.px2rem(16):R.ZP.px2rem(30);return t("div",{class:ce},[t("div",[t("my-img",{attrs:{src:n(58346),width:r,height:r}}),t("p",{style:{"font-size":s,"margin-top":o}},[i("lobby.game.maintain")])])])}},{key:"renderContent",value:function(){var e=this.$createElement,t=0!==this.listData.length;return e("div",{class:ee},[e("div",{class:te},[[t?this.renderGameCard():this.renderEnmpty(),this.renderScrollLoading()]])])}},{key:"renderScrollLoading",value:function(){var e=this.$createElement;if(!this.loading&&this.listData.length<this.total&&this.total>this.Config.gameDataSize){var t=(0,D.QT)().t,n=new Map([[E.ck.SEARCH,""],[E.ck.HOT,t("lobby.game.loadingHot")],[E.ck.RECENT,t("lobby.game.loadingRecent")],[E.ck.COLLENCT,t("lobby.game.loadingCollect")],[E.ck.DEMO,t("lobby.game.loadingDemo")]]),i=this.activeTabkey,a=n.get(i);return e(w.gE,{attrs:{screenType:H.th.PART_SCREEN_LOADING,spinning:this.scrollLoading},class:Ce},[e("p",{class:Ce,ref:"scrollDown"},[t("lobby.game.loadingInfo",{total:this.total,type:a,count:this.listData.length}),e("span",{on:{click:this.loadingMore}},[e("icon-sprite",{attrs:{sprite:W()}})])])])}}},{key:"renderGameCard",value:function(){var e=this,t=this.$createElement,n=this.getCardStyleAttr(),i=n.width,a=n.height,r=n.className,o=n.isLobby,s=(0,D.QT)().t,l=(0,A.h)(),c=l.siteInfos,u=l.isWeb;return this.listData.map((function(n){var l,h,g,d=!!n.customLargeIcon,p=e.activeTabkey,m=e.activeTabkey,y=m===E.ck.HOT||m===E.ck.RECENT||m===E.ck.COLLENCT,v=o&&n.platformId===E.vF.SELF_OPERATED,b=n.slogan&&!d&&e.$route.name===x.x4.GAME&&e.activeTabkey!==E.ck.DEMO,f=n.gameIconLarge||n.largeIcon||n.gameIcon;return!o&&d&&(f=n.gameIcon||n.gameIconLarge),t("my-img",{key:"".concat(e.gameCategoryId,"-").concat(n.gameCategoryId,"-").concat(n.platformId,"-").concat(n.gameId||0),class:(l={},(0,k.Z)(l,ie,!0),(0,k.Z)(l,ne,o),(0,k.Z)(l,oe,!!n.iconBackGround),(0,k.Z)(l,ae,o&&0===(null==c?void 0:c.type)),l),attrs:{width:i,height:a,options:{type:"div"},src:e.lobbyBgImg[p]||n.iconBackGround},nativeOn:{click:function(t){return e.onGameCardClick(t,n)}}},[t("my-img",{key:"".concat(e.gameCategoryId,"-").concat(n.gameCategoryId,"-").concat(n.platformId,"-").concat(n.gameId||0),attrs:{src:f,width:i,height:a,options:{type:"div"}},class:[me,r,o?de:"",o&&!d?pe:"",v?we:""]},[y&&n.iconBackGround&&n.logo&&t("my-img",{class:K,attrs:{src:n.logo,height:u?38:50,width:u?38:50,options:{type:"div"}}}),!o&&t("div",{class:Ze,slot:"errorImg"},[t("icon-sprite",{attrs:{sprite:U()}})]),"lobby"!==e.tabsType&&e.activeTabkey===E.ck.COLLENCT&&e.renderFavoriteIcon(n),n.recommendStatus&&t("div",{class:ge},[t("span",[s("lobby.game.recommend")]),t("icon-sprite",{attrs:{sprite:j()}})]),t("div",{class:ye},[t("div",{class:(h={},(0,k.Z)(h,ve,!0),(0,k.Z)(h,Te,!!b&&v),h)},[t("div",{class:be},[o&&!d&&t("my-img",{class:fe,attrs:{src:n.logo,height:u?34:46}}),!(d&&o)&&t("p",{class:"unable-click"},[n.brand||n.gameName])]),b&&t("div",{class:r===re?le:se},[n.slogan])]),v&&t(B.Z)])]),(n.removeStatus||n.maintainStatus||0===n.gameStatus)&&e.renderMaintain(a),o&&t("div",{class:(g={},(0,k.Z)(g,ue,!0),(0,k.Z)(g,he,r===re),g)},[t("div",[t("span",[s("lobby.game.enterGame")])])])])}))}},{key:"renderWeb",value:function(){var e=this,t=this.$createElement,i=(0,D.QT)().t,a=this.mainStore.isWeb,r=0!==this.listData.length;return this.$route.name===x.x4.GAME_EMBEDDED?t("div",{class:"".concat(J," ").concat(Se)},[t("div",{class:Ee},[t("div",{class:Q},[t("my-img",{attrs:{src:n(98257),height:40,options:{loadHD:!0,loadThumb:!1}}}),t("span",[i("lobby.game.hotCommend")])]),t(w.gE,{attrs:{screenType:H.th.PART_SCREEN_LOADING,spinning:this.loading||this.gameStore.gameOpening}},[this.renderContent()])])]):t("div",{class:J},[t(w.gE,{attrs:{screenType:H.th.PART_SCREEN_LOADING,hiddenIcon:!!this.listData.length&&!this.gameStore.gameOpening||this.$route.name===x.x4.GAME,spinning:this.loading||this.gameStore.gameOpening}},[t(w.EH,{attrs:{itemListWrapperClassName:F,tabsTransparent:!0,itemHeight:a?45:60,isScrollX:!0,itemSpace:a?60:30,persistedActiveName:"",tabsNavHiddenForOne:!0,renderList:this.tabs.map((function(n){return{value:n.key,label:function(){var i,r=e.activeTabkey===n.key;return t("div",{class:(i={},(0,k.Z)(i,V,!0),(0,k.Z)(i,Y,r),i)},[t("my-img",{attrs:{src:n.img,alt:"",height:a?40:56,options:{loadHD:!0,loadThumb:!1}}}),t("span",[n.name])])}}})),preTriggerHook:function(t){return e.onTabsChange(t.value)}},scopedSlots:{default:function(){return t(L.Z,{attrs:{mathHeight:352,isNarrowByContentHeight:!0},scopedSlots:{default:function(n){var i=n.height;return t(O.Z,{attrs:{scrollHeight:i,showHolidayBg:r},ref:"betterscroll"},[e.renderContent()])}}})},footer:function(){return a&&e.$route.name!==x.x4.GAME_SEARCH?t("div",{class:X},[t(P.II.Search.Tsx,h()([{attrs:{placeholder:i("lobby.game.search")}},{on:{click:function(){return e.$router.push({name:x.x4.GAME_SEARCH,query:(0,g.Z)({},e.$route.query)})}}}]))]):null}},model:{value:e.activeTabkey,callback:function(t){e.activeTabkey=t}}})])])}},{key:"watchCategoryIdChangeTabHeight",value:function(){var e=this;setTimeout((function(){var t=document.querySelector("#listUlId");if(t){var n=parseInt(window.getComputedStyle(t).height);e.state.tabsPxHeight=n||0}else e.state.tabsPxHeight=0}),0)}},{key:"renderMobile",value:function(){var e,t=this,i=this.$createElement,a=(0,A.h)().isWeb,r=0!==this.listData.length,o=(0,A.h)().currentTheme,s=null===(e=getComputedStyle(document.documentElement))||void 0===e?void 0:e.fontSize.replace("px",""),l=Number(s)/100*850,c=(0,N.zQ)(-660)>l;return i("div",{class:Ie},[i(w.CO,{class:Ae,attrs:{tabsWidth:150,renderList:this.menuItemConfig.map((function(e){var t;return{value:e.gameCategoryId,icon:function(t){var a=54/q.Z.sprite_main_icon_game_menu_0.width,r=i("icon-sprite",{attrs:{useCanvas:!0,linearGradientConfig:{colorStop:[{progress:0,color:o["--theme-aside-icon-color-0"]},{progress:1,color:o["--theme-aside-icon-color-1"]}]},sprite:q.Z["sprite_main_icon_game_menu_".concat(e.gameCategoryId)],scale:a},class:De});return t?i("my-img",{attrs:{width:44,height:38,src:n(16522)("./icon_game_menu_active_".concat(e.gameCategoryId,".png"))},class:Oe}):r},label:i("span",{class:"".concat(c?Ne:xe," ").concat(Number(null==e||null===(t=e.gameCategoryName)||void 0===t?void 0:t.length)>=16&&!c?_e:"")},[e.gameCategoryName]),isVertical:!!c}})),preTriggerHook:function(e){return new Promise((function(n,i){e.value===E.ck.CLUB||e.value===E.ck.CLUBFRIEND?(t.downloadApp(e.value),i()):n()}))},persistedActiveName:"gameCategoryId"},model:{value:t.menuActiveKey,callback:function(e){t.menuActiveKey=e}}}),i(L.Z,{class:J,scopedSlots:{default:function(e){var n=e.height,o="hotGame"===t.tabsType?60:0,s=n-t.state.tabsPxHeight-2;return i(w.gE,{attrs:{screenType:H.th.PART_SCREEN_LOADING,hiddenIcon:!!t.listData.length&&!t.gameStore.gameOpening||t.$route.name===x.x4.GAME,spinning:t.loading||t.gameStore.gameOpening}},[i(w.EH,{attrs:{itemListWrapperClassName:F,tabsNavHidden:"hotGame"!==t.tabsType,tabsTransparent:!0,itemHeight:o,isScrollX:!0,itemSpace:a?82:0,persistedActiveName:"",tabsNavHiddenForOne:!0,renderList:t.tabs.map((function(e){return{value:e.key,label:function(){return"hotGame"===t.tabsType?i("div",[i("span",[e.munuName])]):""}}})),value:t.activeTabkey,preTriggerHook:function(e){return t.onTabsChange(e.value)}},class:[Pe,"hotGame"===t.tabsType?He:""],scopedSlots:{default:function(){return i(O.Z,{attrs:{scrollHeight:s,isNarrowByContentHeight:!0,showHolidayBg:r},ref:"betterscroll",on:{pullingUp:t.scrollChangeGameMenu.bind(t),pullingDown:t.scrollChangeGameMenu.bind(t,!1)}},[t.renderContent()])}}})])}}})])}},{key:"render",value:function(){var e=(0,A.h)().isWeb;return("lobby"===this.tabsType||"hotGame"===this.tabsType)&&!e?this.renderMobile():this.renderWeb()}}]),s}(G.Z),c=(0,C.Z)(l.prototype,"scrollDown",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,C.Z)(l.prototype,"onGameCardClick",[r],Object.getOwnPropertyDescriptor(l.prototype,"onGameCardClick"),l.prototype),(0,C.Z)(l.prototype,"watchCategoryIdChangeTabHeight",[o],Object.getOwnPropertyDescriptor(l.prototype,"watchCategoryIdChangeTabHeight"),l.prototype),s=l))||s)},58346:function(e,t,n){"use strict";e.exports=n.p+"assets/img_dt_whz.84cbaab64a2363812af8.png"}}]);