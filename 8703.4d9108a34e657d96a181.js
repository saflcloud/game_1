(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[8703],{69877:function(t){var e=Math.floor,i=Math.random;t.exports=function(t,n){return t+e(i()*(n-t+1))}},36128:function(t,e,i){var n=i(20731),r=i(21078),s=i(45652);t.exports=function(t,e,i){var a=t.length;if(a<2)return a?s(t[0]):[];for(var o=-1,c=Array(a);++o<a;)for(var h=t[o],l=-1;++l<a;)l!=o&&(c[o]=n(c[o]||h,t[l],e,i));return s(r(c,1),e,i)}},83608:function(t,e,i){var n=i(69877),r=i(16612),s=i(18601),a=parseFloat,o=Math.min,c=Math.random;t.exports=function(t,e,i){if(i&&"boolean"!=typeof i&&r(t,e,i)&&(e=i=void 0),void 0===i&&("boolean"==typeof e?(i=e,e=void 0):"boolean"==typeof t&&(i=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=s(t),void 0===e?(e=t,t=0):e=s(e)),t>e){var h=t;t=e,e=h}if(i||t%1||e%1){var l=c();return o(t+l*(e-t+a("1e-"+((l+"").length-1))),e)}return n(t,e)}},76566:function(t,e,i){var n=i(34963),r=i(5976),s=i(36128),a=i(29246),o=r((function(t){return s(n(t,a))}));t.exports=o},66274:function(t,e){"use strict";e.Z={receiveTips:"sft1FrYIdQNDkygBE2_w",bottomBtns:"uwvenAZWGyD5RdZJBDtY",container:"_4Xj9NqT3RlWoXOF9sIB",bgColor:"K9PMAylPFhLQvjAV0rzb",customizeContainer:"eCrtkyvaEw5EGq1iTkpb",h5Btn:"djvqyB9IgkiFd8Rww9SE",btn2:"KijbywXOWoHmMhQVYbMW",receiveDiscount:"Qxd3eeaOHzsm5OavWHD6",btn1:"OJKnuX1SdrakdqWua5Ix",formModal:"M2oU7LFq2dpRdr40epb_",receiveBtn:"G60ovJtuaDb1n92ATPH7",receiveTimes:"Jj0VvYFH3Jv3P4ZzMrq5",introduction:"yWSWJBRH15O8UNBwi6Hc",paddingBottom:"Ci5BesSJeFF7V3p9ekNM",introductionInner:"mRWJ3dwis6LX5Cigw20q",activityBottom:"f6Hdppzziw5Ocz_4b7HG",discountView:"f5Ruu8CIOUwvNyM9R1uY",header:"nFkHDrNVzucOSjOVSkVo",changeGameBtns:"l33Ka3g_LqqyxWZG6i6s",total:"HUnR0IXcIWtwiRH69sAz",customizeBtn:"AzSfD8qP8gM2kUfA2vid",customizeWrap:"K9JimfJdAKv0fvE8GgcR",textDarken:"r62waCRxFhGGf1TU0ZsQ",btn:"lzu35D2wRxqVmh4J0_A3",processing:"H5yJT30fplLKopY3Ucle",forward:"d4npa_nICeiD5SVDAHEz",formItemDiv:"l7fBL945zxYK6Avbm5hA"}},36777:function(t,e,i){"use strict";i.d(e,{Z:function(){return f}});var n,r=i(83608),s=i.n(r),a=i(21797),o=i(92317),c=i(72283),h=i(20793),l=i(30813),u=i(81764),d=i(98292),p="PEjqfiR1C5ewb4LtP_5K",v="qfDVmdZI63JFsYxWlKzQ",f=(0,l.wA)({name:"QRCode"})(n=function(t){(0,c.Z)(i,t);var e=(0,h.Z)(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"render",value:function(){var t,e=arguments[0],i=(0,u.QT)(),n=i.t,r=(0,d.h)(),a=r.siteURLInfos,o=(null==a||null===(t=a.download_domain)||void 0===t?void 0:t.length)||0;return o?e("div",{class:p},[e("vue-qr",{class:v,attrs:{text:null==a?void 0:a.download_domain[s()(1,o)-1],logoMargin:1,margin:10,size:200}}),e("div",[n("lobby.rightBar.scanQR")]),e("div",[n("lobby.rightBar.downloadDevice")])]):e("span")}}]),i}(l.XY))||n},63980:function(t,e,i){"use strict";i.d(e,{Kc:function(){return b},_4:function(){return p},cA:function(){return v},dW:function(){return f},iP:function(){return d},r8:function(){return g}});var n=i(70970),r=i(2813),s=(i(76566),i(25325),i(50125)),a=(i(74916),i(23123),i(26699),i(32023),i(2707),i(69600),i(92222),i(41539),i(54747),i(39714),i(9653),i(3741)),o=(i(86493),i(81764)),c=i(98292),h=i(71707),l=i(98256),u=i(66274),d=(a.zP.Android,a.zP.Ios,function(t){var e;return(null!==(e=null==t?void 0:t.split(","))&&void 0!==e?e:[]).includes(a.zP.Pc)}),p=function(t){var e,i,n=(0,o.QT)().t,r=(0,c.h)().isWeb,s=null!==(e=null==t?void 0:t.split(","))&&void 0!==e?e:[];return s.sort((function(t,e){return+t-+e})),(i=r?s.includes(a.zP.Pc):s.includes(a.zP.H5))?{canWebReceive:i,errorMessage:""}:{canWebReceive:i,errorMessage:n("lobby.event.validTips.limit_".concat(s.join("_")))}},v=function(t,e){var i,s=(0,o.QT)().t,d=(0,c.h)(),v=d.isWeb,f=d.openDownloadAppModal;if(t){var g=p(t),b=g.canWebReceive,m=g.errorMessage;if(!b)var y=1===(null==t?void 0:t.length)&&t===a.zP.H5,k=1===(null==t?void 0:t.length)&&t===a.zP.Pc,C=l.Z.Modal.create({class:u.Z.receiveTips,title:s("lobby.receiveModal.kindTips"),width:h.ZP.px2rem(600),content:y?m:v&&e||m,closable:k&&!v||!!e&&v,hiddenBtns:k&&!v||!!e&&v,cancelText:s("lobby.modal.task.close").toString(),okText:s("lobby.gameMenu.toDownloadApp").toString(),onOk:(i=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.destroy();case 2:f();case 3:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})});return b}return!1},f=function(t){var e,i=(0,o.QT)().t;return(e={},(0,s.Z)(e,a.Im.UNCONDITIONAL,i("lobby.event.unconditional")),(0,s.Z)(e,a.Im.CUMULATIVECODING,i("lobby.event.cumulativeCoding")),(0,s.Z)(e,a.Im.CUMULATIVERECHARGE,i("lobby.event.cumulativereCharge")),e)[t]},g=function(t){var e=Number(t);return e?e>0?"+".concat(e):e:0},b=function(t,e){if(t)var i,s=l.Z.Modal.create({width:h.ZP.px2rem(600),content:t,getContainer:function(){return e&&document.querySelector("".concat(e))||document.body},closable:!0,hiddenBtns:!0,onOk:(i=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.destroy();case 2:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)})})}},98703:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return mt}});var n,r=i(22705),s=i(70970),a=i(2813),o=i(21797),c=i(92317),h=i(72283),l=i(20793),u=i(75496),d=i(30813),p=i(90825),v=i(98292),f=i(74492),g=i(7903),b=i(3587),m=i(82345),y=i(50125),k=i(17360);i(41320),i(92222),i(69600),i(26699),i(21249),i(41539),i(39714),i(38880);!function(t){t.blank="blank",t.entrance="entrance",t.pin="pin",t.send="send",t.success="success"}(n||(n={}));var C,w,x,Z,R,I,A,M,E,B,S,D,L,P=i(23942),G=i(63980),Y=i(81764),F=i(36777),W=i(83608),T=i.n(W),z=i(66920),X=(i(47042),i(54747),i(91038),i(78783),i(14577)),Q=i(86493),J=i(67002),O=i(592),U=function(){function t(e){var i=e.redpackId,n=e.redpackCtx,r=e.bubbleCtx,s=e.x,a=e.y,c=e.redpackImgUrl,h=e.width,l=e.height,u=e.speedMax,d=e.speedMin,p=e.bubble,v=e.containerHeight,f=e.containerWidth,g=e.onDestoryed;(0,o.Z)(this,t),(0,y.Z)(this,"redpackId",-1),(0,y.Z)(this,"requestId",-1),(0,y.Z)(this,"x",0),(0,y.Z)(this,"y",0),(0,y.Z)(this,"speedY",1),(0,y.Z)(this,"speedX",1),(0,y.Z)(this,"speedRotate",0),(0,y.Z)(this,"redpackCtx",null),(0,y.Z)(this,"bubbleCtx",null),(0,y.Z)(this,"width",0),(0,y.Z)(this,"height",0),(0,y.Z)(this,"bubbleConfig",null),(0,y.Z)(this,"redpackImgUrl",""),(0,y.Z)(this,"redpackImg",null),(0,y.Z)(this,"containerHeight",0),(0,y.Z)(this,"containerWidth",0),(0,y.Z)(this,"onDestoryed",null),(0,y.Z)(this,"angle",0),(0,y.Z)(this,"ratio",1),(0,y.Z)(this,"alpha",1),(0,y.Z)(this,"leaveFlag",!1),(0,y.Z)(this,"enterFlag",!1),this.redpackId=i,this.redpackCtx=n,this.bubbleCtx=r,this.x=s,this.y=a,this.width=h,this.height=l,this.speedY=T()(d,u),this.speedX=this.speedY/2*T()(-1,1),this.redpackImgUrl=c,this.containerHeight=v,this.containerWidth=f,this.onDestoryed=g,this.bubbleConfig=p;var b=T()(0,1,!0),m=(30*b+10)*Math.PI/180;this.angle=b<.5?m:0-m,this.speedRotate=.025*T()(-1,1),this.ratio=.36*b+.8}var e,i;return(0,c.Z)(t,[{key:"start",value:(i=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,O.po)(this.redpackImgUrl);case 2:this.redpackImg=t.sent,this.render();case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"checkBeforeLeave",value:function(){return(this.speedX>=0?this.x>=this.containerWidth-this.width:this.x<=-this.width+this.width)?"x":(this.speedY>=0?this.y>=this.containerHeight-this.height:this.y<=-this.height+this.height)&&"y"}},{key:"checkBoundary",value:function(){return(this.speedX>=0?this.x>this.containerWidth:this.x<-this.width)?"x":(this.speedY>=0?this.y>this.containerHeight:this.y<-this.height)&&"y"}},{key:"enter",value:function(){"done"===this.enterFlag||this.enterFlag||this.y<=this.height&&(this.alpha=0,this.enterFlag=!0),!0===this.enterFlag&&(this.alpha+=1/Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))*this.speedY,this.alpha>=1&&(this.enterFlag="done"))}},{key:"leave",value:function(){this.leaveFlag||(this.leaveFlag=this.checkBeforeLeave()),"y"===this.leaveFlag?this.alpha+=1/Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))*-this.speedY:"x"===this.leaveFlag&&(this.alpha+=1/Math.sqrt(Math.pow(this.width,2)+Math.pow(this.height,2))*-Math.abs(this.speedX))}},{key:"render",value:function(){var t=this.redpackCtx;if(t&&this.redpackImg)if(this.checkBoundary())"function"==typeof this.onDestoryed&&this.onDestoryed(this.redpackId);else{var e=this.x+this.speedX,i=this.y+this.speedY;this.angle=this.angle+this.speedRotate,t.save(),this.enter(),this.leave(),t.globalAlpha=this.alpha,t.beginPath(),t.rect(e,i,this.width,this.height),t.translate(e+this.width/2,i+this.height/2),t.scale(this.ratio,this.ratio),t.rotate(this.angle),t.drawImage(this.redpackImg,-this.width/2,-this.height/2,this.width,this.height),t.strokeStyle="transparent",t.stroke(),t.restore(),this.x=e,this.y=i}}},{key:"addBubble",value:(e=(0,a.Z)((0,s.Z)().mark((function t(){var e,i,n,r,a,o,c,h,l,u,d,p=this;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.bubbleCtx&&this.bubbleConfig){t.next=2;break}return t.abrupt("return");case 2:return e=this.bubbleConfig,i=e.imgUrl,n=e.width,r=e.height,a=e.opacitySpeed,o=e.speed,t.next=5,(0,O.po)(i);case 5:c=t.sent,h=this.x,l=this.y,u=1,d=function t(){u-=a,p.bubbleCtx&&(p.bubbleCtx.clearRect(h-10,l-10,n+20,r+20),u>0&&(p.bubbleCtx.save(),p.bubbleCtx.globalAlpha=u,l-=o,p.bubbleCtx.drawImage(c,h,l,n,r),p.bubbleCtx.restore(),(0,Q.Wn)(t)))},(0,Q.Wn)(d);case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"update",value:function(t){var e=t.containerHeight,i=t.containerWidth;this.containerHeight=e,this.containerWidth=i}},{key:"stop",value:function(){(0,Q.NB)(this.requestId)}}]),t}(),j=U,q={selector:document.body,interval:100,eventType:"click",defaultCount:200,redpack:{speedMin:3,speedMax:5,imgUrl:"data:image/png;base64,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",width:70,height:94},bubble:null,onClick:function(){}},N=(C=(0,X.WY)(),w=(0,X.WY)(),x=function(){function t(e){var i=this;if((0,o.Z)(this,t),(0,y.Z)(this,"timer",null),(0,y.Z)(this,"rainCtx",null),(0,y.Z)(this,"bubbleCtx",null),(0,y.Z)(this,"config",q),(0,y.Z)(this,"parentClientRect",{width:0,height:0,top:0,left:0}),(0,y.Z)(this,"ratio",1),(0,y.Z)(this,"redpackItemList",{}),(0,y.Z)(this,"requestId",null),(0,y.Z)(this,"fpsBefore",Date.now()),(0,y.Z)(this,"lastRedpackX",0),(0,y.Z)(this,"pageVisibility",null),(0,y.Z)(this,"clickListener",(function(t){if("function"==typeof i.config.onClick){var e=[];e="touchstart"===t.type?Array.prototype.slice.call(t.touches).map((function(t){return{clientX:t.clientX,clientY:t.clientY}})):[{clientX:t.clientX,clientY:t.clientY}];var n=i.parentClientRect,r=n.left,s=n.top;i.requestId&&(0,Q.NB)(i.requestId),e.forEach((function(t){var e=t.clientX,n=t.clientY,a=(e-r)*i.ratio,o=(n-s)*i.ratio;for(var c in i.redpackItemList){var h=i.redpackItemList[c],l=h.x,u=h.y,d=h.width,p=h.height,v=!1;a>=l-14&&a<=l+d+14&&o>=u-14&&o<=u+p+14&&(i.config.bubble&&(delete i.redpackItemList[c],h.addBubble()),v=!0),"function"==typeof i.config.onClick&&i.config.onClick(v)}})),i.render()}})),this.createConfig(e),"string"==typeof e.selector){var n=document.querySelector(e.selector);n?this.config.selector=n:console.error("rain container cant found, selector: ".concat(e.selector))}else this.config.selector=e.selector;this.creatCanvas(),this.pageVisibility=new J.Z}return(0,c.Z)(t,[{key:"createConfig",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";for(var i in t){var n=t[i];n&&("object"===(0,z.Z)(n)?this.createConfig(n,i):e?this.config[e][i]=n:this.config[i]=n)}}},{key:"updateCanvas",value:function(){var t=this.config.selector,e=t.getBoundingClientRect(),i=e.top,n=e.left,r=e.width,s=e.height;if(this.parentClientRect.width=r*this.ratio,this.parentClientRect.height=s*this.ratio,this.parentClientRect.top=i,this.parentClientRect.left=n,0!==t.getElementsByTagName("canvas").length){var a=t.querySelector(".bubble-redpack-canvas");a&&(a.width=this.parentClientRect.width,a.height=this.parentClientRect.height);var o=t.querySelector(".rain-redpack-canvas");o&&(o.width=this.parentClientRect.width,o.height=this.parentClientRect.height)}}},{key:"updateRedpackItemList",value:function(){for(var t in this.redpackItemList){if(Object.prototype.hasOwnProperty.call(this.redpackItemList,t))this.redpackItemList[t].update({containerHeight:this.parentClientRect.height,containerWidth:this.parentClientRect.width})}}},{key:"creatCanvas",value:function(){var t=this.config.selector,e=t.getBoundingClientRect(),i=e.top,n=e.left,r=e.width,s=e.height;if(this.parentClientRect.width=r*this.ratio,this.parentClientRect.height=s*this.ratio,this.parentClientRect.top=i,this.parentClientRect.left=n,0===t.getElementsByTagName("canvas").length){var a=document.createElement("canvas");a.className="bubble-redpack-canvas",a.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1",a.width=this.parentClientRect.width,a.height=this.parentClientRect.height;var o=document.createElement("canvas");o.className="rain-redpack-canvas",o.style.cssText="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2",o.width=this.parentClientRect.width,o.height=this.parentClientRect.height;var c=document.createElement("div");c.className="rain-item rain-".concat(Date.now(),"-").concat(T()(0,1,!0)),c.style.cssText="position: relative; height: 100%",this.config.bubble&&c.appendChild(a),c.appendChild(o),t.appendChild(c);var h=t.querySelector(".rain-redpack-canvas"),l=t.querySelector(".bubble-redpack-canvas");h&&(this.rainCtx=h.getContext("2d")),l&&(this.bubbleCtx=l.getContext("2d"))}}},{key:"onVisibilityChange",value:function(t){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),t&&(this.timer=setInterval((function(){e.createRedpackItem()}),this.config.interval))}},{key:"onResize",value:function(){this.updateCanvas(),this.updateRedpackItemList()}},{key:"getRedpackItemX",value:function(t){var e=this.lastRedpackX,i=0;do{e=Math.floor(T()(0,this.parentClientRect.width-3*t)+t)}while(i++<10&&Math.abs(this.lastRedpackX-e)<=1.5*t);return this.lastRedpackX=e,e}},{key:"createRedpackItem",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i=!!this.config.bubble;if(!this.rainCtx||i&&!this.bubbleCtx)this.stop();else{var n=this.config.redpack||{},r=n.width,s=n.height,a=n.speedMax,o=n.speedMin,c=n.imgUrl,h=Date.now(),l=this.getRedpackItemX(r),u=e?Math.floor(T()(0,this.parentClientRect.height-3*s)+s):-this.config.redpack.height,d=new j({redpackId:h,redpackCtx:this.rainCtx,bubbleCtx:this.bubbleCtx,x:l,y:u,redpackImgUrl:c,width:r,height:s,speedMax:a,speedMin:o,bubble:this.config.bubble,containerHeight:this.parentClientRect.height,containerWidth:this.parentClientRect.width,onDestoryed:function(e){delete t.redpackItemList[e]}});d.start(),this.redpackItemList[h]=d}}},{key:"render",value:function(){var t=this;this.requestId=(0,Q.Wn)((function(){var e;for(var i in null===(e=t.rainCtx)||void 0===e||e.clearRect(0,0,t.parentClientRect.width,t.parentClientRect.height),t.redpackItemList){t.redpackItemList[i].render()}var n=Date.now(),r=Math.round(1e3/(n-t.fpsBefore));t.fpsBefore=n,"function"==typeof t.config.onMonitor&&t.config.onMonitor({fps:r}),t.render()}))}},{key:"setOptions",value:function(t){if(!this.timer)return console.error("please use start() before setOptions");var e=this.config.interval;this.createConfig(t),e!==this.config.interval&&this.start()}},{key:"start",value:function(){var t,e=this;this.clear(),this.config.selector.addEventListener(this.config.eventType,this.clickListener,!1),0===this.config.defaultCount?this.createRedpackItem():Array.from({length:this.config.defaultCount}).forEach((function(){e.createRedpackItem(!0)})),this.timer=setInterval((function(){e.createRedpackItem()}),this.config.interval),this.render(),window.addEventListener("resize",this.onResize),null===(t=this.pageVisibility)||void 0===t||t.visibilityChange(this.onVisibilityChange)}},{key:"clear",value:function(){var t,e;this.timer&&(clearInterval(this.timer),this.timer=null),this.requestId&&((0,Q.NB)(this.requestId),this.requestId=null),null===(t=this.rainCtx)||void 0===t||t.clearRect(0,0,this.parentClientRect.width,this.parentClientRect.height),this.config.selector.removeEventListener(this.config.eventType,this.clickListener),null===(e=this.pageVisibility)||void 0===e||e.destory(),window.removeEventListener("resize",this.onResize)}},{key:"stop",value:function(){this.clear(),this.redpackItemList={}}}]),t}(),(0,k.Z)(x.prototype,"onVisibilityChange",[C],Object.getOwnPropertyDescriptor(x.prototype,"onVisibilityChange"),x.prototype),(0,k.Z)(x.prototype,"onResize",[w],Object.getOwnPropertyDescriptor(x.prototype,"onResize"),x.prototype),x),H=N,V="oXwF1LSva2FwXdDsNAm4",K="CQ8T5QMDKGMLtJiMY8Xo",_="klJhjAIMbSeNDDhyjDhP",$="QMYmSokbhjQM8DLYLLdZ",tt="Ppf_8MIxG9xLNiOWvdi5",et="AfEt4Pb5Bk7kKOv41zU_",it="wRXDJDk1awU5nLHivvq1",nt="PrBDbPObLnc9yHaou8aa",rt="JCStUCJJuLNHDFpdD6TC",st="wRNQWjPBSb0AeLxSLiqK",at="jrvEYp6CwLmibmctk6vQ",ot="MOXiUdFRebWEq1xY04RA",ct="tqAzh6ZdDWUrrFEaTUkA",ht="qeQqqivQziptSK7OHz7w",lt="TBfP3JxLzkGU2GN1RRua",ut="dhpOi4neGTsfZhpmWIFa",dt="DZkBKTASmfTio00XIcEC",pt="E1Loa7aAcvEZXeEBrpcZ",vt="ZrEMm_oclBOR7itWjotc",ft=i(41800),gt={isCollecting:!1,animation:!1,ui:n.blank,result:void 0,pin:[],pinVerify:void 0,showClose:!1},bt=(Z=(0,d.wA)({name:"RedPocketItem"}),R=(0,d.fI)({required:!0}),I=(0,d.fI)({required:!0}),A=(0,d.RL)("item",{immediate:!0}),Z((E=function(t){(0,h.Z)(Z,t);var e,d,k,C,w,x=(0,l.Z)(Z);function Z(){var t;(0,o.Z)(this,Z);for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t=x.call.apply(x,[this].concat(i)),(0,b.Z)((0,m.Z)(t),"type",B,(0,m.Z)(t)),(0,b.Z)((0,m.Z)(t),"item",S,(0,m.Z)(t)),(0,y.Z)((0,m.Z)(t),"state",(0,g.Z)({},gt)),(0,y.Z)((0,m.Z)(t),"mainStore",(0,v.h)()),t}return(0,c.Z)(Z,[{key:"onItemChange",value:function(){this.setState((0,g.Z)({},gt))}},{key:"mounted",value:(w=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.type!==u._.Send){t.next=4;break}this.setState({ui:n.send}),t.next=8;break;case 4:return t.next=6,this.fetchPin();case 6:t.sent||this.setState({ui:n.entrance});case 8:this.$nextTick((0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(D=new H({selector:".".concat(V)})).start();case 2:case"end":return t.stop()}}),t)}))));case 9:case"end":return t.stop()}}),t,this)}))),function(){return w.apply(this,arguments)})},{key:"activeId",get:function(){return this.item.activeid}},{key:"fetchPin",value:(C=(0,a.Z)((0,s.Z)().mark((function t(){var e,i,a,o,c,h,l;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.type!==u._.Open){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,(0,ft.Z)((0,P.z2)({subtaskid:"subtaskid"in this.item?this.item.subtaskid:1,active:this.activeId}));case 4:if(e=t.sent,i=(0,r.Z)(e,2),a=i[0],o=i[1],h=(c=null!=o?o:{}).code,l=c.data,0!==h){t.next=12;break}return this.handleClose(),t.abrupt("return");case 12:if(!(a||l&&1!==l.isValidate)){t.next=14;break}return t.abrupt("return");case 14:return this.setState({ui:n.pin,pinVerify:String(null==l?void 0:l.vcode)}),t.abrupt("return",!0);case 16:case"end":return t.stop()}}),t,this)}))),function(){return C.apply(this,arguments)})},{key:"handleButton",value:(k=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.isCollecting){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.handleCollect();case 4:case"end":return t.stop()}}),t,this)}))),function(){return k.apply(this,arguments)})},{key:"handlePinInput",value:function(t){var e=this;this.state.pin.length>3||(this.setState({pin:[].concat((0,f.Z)(this.state.pin),[t])}),this.$nextTick((function(){e.handlePinConfirm()})))}},{key:"handlePinReset",value:function(){this.setState({pin:[]})}},{key:"handlePinDelete",value:function(){this.state.pin.pop()}},{key:"handleClose",value:function(){this.mainStore.reduceRedList(this.type)}},{key:"handlePinConfirm",value:(d=(0,a.Z)((0,s.Z)().mark((function t(){var e,i;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(4===this.state.pin.length){t.next=2;break}return t.abrupt("return");case 2:if(e=(0,Y.QT)(),i=e.t,this.state.pinVerify===this.state.pin.join("")){t.next=9;break}return p.sG.Modal.message({type:"error",content:i("lobby.event.redPocket.errorTips")}),this.setState({isCollecting:!1,pin:[]}),t.next=8,this.fetchPin();case 8:return t.abrupt("return");case 9:return t.next=11,this.handleCollect();case 11:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"handleCollect",value:(e=(0,a.Z)((0,s.Z)().mark((function t(){var e,i,o,c,h,l,u,d=this;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,G.cA)(this.item.receiveDeviceType,this.renderQRCode)){t.next=4;break}return this.mainStore.updateCloseRedList(this.activeId),this.handleClose(),t.abrupt("return");case 4:if(!this.state.isCollecting){t.next=6;break}return t.abrupt("return");case 6:return e=(0,Y.QT)(),i=e.t,this.setState({isCollecting:!0}),t.next=10,(0,ft.Z)((0,P.j$)({subtaskid:"subtaskid"in this.item?this.item.subtaskid:1,active:this.activeId,code:this.state.pin.join("")}));case 10:if(o=t.sent,c=(0,r.Z)(o,2),h=c[0],l=c[1],u=function(){var t=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(p.sG.Modal.message({type:"error",content:[2,99].includes(null==l?void 0:l.code)?i("lobby.event.redPocket.errorTips"):null==l?void 0:l.msg}),d.setState({showClose:!0,isCollecting:!1,pin:[]}),0!==(null==l?void 0:l.code)&&-1!==(null==l?void 0:l.code)){t.next=6;break}return d.mainStore.updateCloseRedList(d.activeId),d.handleClose(),t.abrupt("return");case 6:return t.next=8,d.fetchPin();case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),1===(null==l?void 0:l.code)&&!h){t.next=18;break}return u(),t.abrupt("return");case 18:this.setState({animation:!0,ui:n.success,isCollecting:!1,result:l.data}),(0,v.h)().updatePrize();case 21:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"renderQRCode",value:function(){var t=this.$createElement;return t("div",[t("div",[(0,G._4)(this.item.receiveDeviceType).errorMessage]),t(F.Z)])}},{key:"renderEntrance",value:function(){var t=this.$createElement;if(this.state.ui!==n.entrance)return null;var e=(0,Y.QT)().t;return t("div",[t("my-img",{attrs:{src:i(46877),width:380,height:507,options:{type:"div"}}}),t("div",{class:$},[t("div",{class:tt},[this.item.activeName]),t("a",{class:[it,p.CM.CssClassName.Animate.Animated,p.CM.CssClassName.Animate.HeartBeat,p.CM.CssClassName.Animate.Repeat.infinite],style:{cursor:this.state.isCollecting?"default":"pointer"},on:{click:this.handleButton}},[t("auto-text",{class:nt,attrs:{maxSize:55,width:120,height:60}},[e("lobby.event.redPocket.".concat(this.type))])])])])}},{key:"renderSend",value:function(){var t=this.$createElement;if(this.state.ui!==n.send)return null;var e=(0,Y.QT)().t;return t("div",[t("my-img",{attrs:{src:i(46877),width:380,height:507,options:{type:"div"}}}),t("div",{class:$},[t("div",{class:tt},[this.item.activeName]),t("a",{class:[it,p.CM.CssClassName.Animate.Animated,p.CM.CssClassName.Animate.HeartBeat,p.CM.CssClassName.Animate.Repeat.infinite],style:{cursor:this.state.isCollecting?"default":"pointer"},on:{click:this.handleButton}},[t("auto-text",{class:nt,attrs:{maxSize:55,width:120,height:60}},[e("lobby.event.redPocket.open")])])])])}},{key:"renderPin",value:function(){var t=this,e=this.$createElement;if(this.state.ui!==n.pin)return null;var r=(0,Y.QT)().t;return e("div",[e("my-img",{attrs:{src:i(46877),width:380,height:507,options:{type:"div"}}}),e("div",{class:ot},[e("div",{class:ct},[[0,1,2,3].map((function(i){return e("div",[t.state.pin[i]])}))]),e("div",{class:ht},[[1,2,3,4,5,6,7,8,9].map((function(i){return e("div",{on:{click:function(){t.handlePinInput(i)}}},[e("div",[i])])})),e("div",{class:lt,on:{click:this.handlePinReset}},[e("div",[r("lobby.event.redPocket.pinReset")])]),e("div",{on:{click:function(){t.handlePinInput(0)}}},[e("div",["0"])]),e("div",{class:lt,on:{click:this.handlePinDelete}},[e("div",[r("lobby.event.redPocket.pinDelete")])])]),e("div",{class:[it,p.CM.CssClassName.Animate.Animated,p.CM.CssClassName.Animate.HeartBeat,p.CM.CssClassName.Animate.Repeat.infinite],style:{cursor:this.state.isCollecting?"default":"pointer"},on:{click:this.handlePinConfirm}},[e("div",{class:[lt,ut]},[r("lobby.event.redPocket.pinText")]),e("div",{class:dt},[this.state.pinVerify])])])])}},{key:"renderAnimation",value:function(){var t=this,e=this.$createElement;return e("div",{class:et},[e("apng-canvas",{attrs:{src:i(42095),numPlays:1,width:692,height:647},on:{end:function(){t.setState({animation:!1})}}})])}},{key:"renderSuccess",value:function(){var t,e,r=this.$createElement;if(this.state.ui!==n.success)return null;var s=(0,Y.QT)().t;return r("div",[r("my-img",{attrs:{src:i(89642),width:380,height:507,options:{type:"div"}}}),r("div",{class:rt},[r("auto-text",{class:pt,attrs:{maxSize:26,width:200,height:40,mode:"inline",text:s("lobby.event.redPocket.congrats")}}),r("div",{class:st},[r("span",[r("auto-text",{attrs:{maxSize:60,width:320,height:140,mode:"inline",text:null===(t=this.state.result)||void 0===t||null===(e=t.prize)||void 0===e?void 0:e.toString()}})])]),r("div",{class:at},[s("lobby.event.redPocket.message")])]),this.state.animation&&this.renderAnimation()])}},{key:"renderClose",value:function(){var t=this,e=this.$createElement;return this.state.showClose||this.state.ui===n.success?e("div",{class:vt},[e("span",{on:{click:function(){return t.handleClose()}}},[e("my-img",{attrs:{src:i(61620),width:42,height:42,options:{type:"div"}}})])]):null}},{key:"renderPocket",value:function(){var t=this.$createElement;return this.state.ui!==n.blank&&t("div",{class:V},[t("div",{class:K},[t("div",{class:_},[this.renderEntrance(),this.renderPin(),this.renderSend(),this.renderSuccess(),this.renderClose()])])])}},{key:"render",value:function(){var t=arguments[0];return t("div",[this.renderPocket()])}},{key:"beforeDestroy",value:function(){var t;null===(t=D)||void 0===t||t.stop()}}]),Z}(d.XY),B=(0,k.Z)(E.prototype,"type",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=(0,k.Z)(E.prototype,"item",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,k.Z)(E.prototype,"onItemChange",[A],Object.getOwnPropertyDescriptor(E.prototype,"onItemChange"),E.prototype),M=E))||M),mt=(0,d.wA)({name:"RedPocket"})(L=function(t){(0,h.Z)(d,t);var e,i,n=(0,l.Z)(d);function d(){return(0,o.Z)(this,d),n.apply(this,arguments)}return(0,c.Z)(d,[{key:"created",value:(i=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.sG.Polling.create({key:p.sG.Polling.LobbyPollingType.RED_POCKETS,callback:this.fetchData.bind(this),leading:!1,interval:5e3});case 2:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"beforeDestroy",value:function(){p.sG.Polling.destroy(p.sG.Polling.LobbyPollingType.RED_POCKETS)}},{key:"fetchData",value:(e=(0,a.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,v.h)().getRedListData();case 2:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"canRedStart",value:function(t){var e=t.time;return p.sG.Site.getServerTime()>=e}},{key:"renderGrabPockets",value:function(){var t=this.$createElement,e=(0,v.h)(),i=e.getRedList,n=e.isNewBenefitFinish;if(null==i||!i.length)return null;var s=(0,r.Z)(i,1)[0];return this.canRedStart(s)&&n?t(bt,{attrs:{type:u._.Grab,item:s},key:s.activeid}):null}},{key:"renderOpenPockets",value:function(){var t=this.$createElement,e=(0,v.h)(),i=e.getAvtiveRedList,n=e.isNoticePopupFinish;if(!i.length)return null;if(!n)return null;var s=(0,r.Z)(i,1)[0];return t(bt,{attrs:{type:u._.Open,item:s},key:s.activeid})}},{key:"renderSendPockets",value:function(){var t=this.$createElement,e=(0,v.h)(),i=e.getSendList,n=e.isNoticePopupFinish;if(!i.length)return null;if(!n)return null;var s=(0,r.Z)(i,1)[0];return t(bt,{attrs:{type:u._.Send,item:s},key:s.activeid})}},{key:"render",value:function(){var t=arguments[0];return t("div",[this.renderGrabPockets(),this.renderOpenPockets(),this.renderSendPockets()])}}]),d}(d.XY))||L},42095:function(t,e,i){"use strict";t.exports=i.p+"assets/hongbaoguang.a7a762acdb4c434a5b36.png"},61620:function(t,e,i){"use strict";t.exports=i.p+"assets/img_close_s2.4a6fff9e05eb9d92d5fb.png"},89642:function(t,e,i){"use strict";t.exports=i.p+"assets/img_gxhbd_s.4b1690723ce22b72265e.png"},46877:function(t,e,i){"use strict";t.exports=i.p+"assets/img_hbd_s.7ccc13de38f7d92bc823.png"}}]);