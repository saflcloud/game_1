"use strict";(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[4342],{49897:function(e,t,r){r.d(t,{L:function(){return o},U:function(){return a}});var n=r(90825),o=function(e){return n.Uh.post({url:"/promote/directmembers",data:e}).then((function(e){return e.data.data}))},a=function(e){return n.Uh.post({url:"/promote/countdirectmembers",data:e}).then((function(e){return e.data.data}))}},93294:function(e,t,r){r.d(t,{N:function(){return n},Z:function(){return Z}});var n,o=r(7903),a=r(21797),s=r(92317),i=r(82345),l=r(72283),u=r(20793),c=r(50125);r(92222),r(9653);!function(e){e[e.Normal=0]="Normal",e[e.People=1]="People",e[e.Amount=2]="Amount",e[e.Money=3]="Money",e[e.CustomAmount=4]="CustomAmount",e[e.CustomNormal=5]="CustomNormal",e[e.Time=6]="Time"}(n||(n={}));var m,d=r(30813),f=r(95306),p=r(34717),y=r(90825),h=r(76937),b=r(15029),v=r(72563),g=r(81764),T=r(98292),x=r(71707),w="avMNK8Qg8S6ELvNBn4SS",k="nt3HkYGHVSEvaGFFn12x",Z=(0,d.wA)({name:"BaseMixins"})(m=function(e){(0,l.Z)(r,e);var t=(0,u.Z)(r);function r(){var e;(0,a.Z)(this,r);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return e=t.call.apply(t,[this].concat(o)),(0,c.Z)((0,i.Z)(e),"inputMaxLength",16),e}return(0,s.Z)(r,[{key:"getAgentMode",get:function(){var e,t=y.CM.AgentMode,r=null===(e=(0,T.h)().siteInfos)||void 0===e?void 0:e.agentId;return{isInfinite:r===t.Infinite,isFirstLevel:r===t.FirstLevel,isNetProfit:r===t.NetProfit,isThreeNetProfix:r===t.ThreeNetProfix}}},{key:"renderAmount",value:function(e){var t,r,n,o,a,s,i=this.$createElement;return i("span",{class:["currencyAmount",{yellowColor:null!==(t=e.isYellow)&&void 0!==t&&t,greenColor:null!==(r=e.isGreen)&&void 0!==r&&r,redColor:null!==(n=e.isRed)&&void 0!==n&&n}]},[e.sign&&Number(e.amount)>0?"+":"",(0,v.o)(null!==(o=e.amount)&&void 0!==o?o:0,{symbol:null!==(a=null==e?void 0:e.symbol)&&void 0!==a?a:"",precision:null!==(s=null==e?void 0:e.precision)&&void 0!==s?s:2},!0),e.suffix&&i("span",{class:"suffix"},[e.suffix])])}},{key:"renderContentItem",value:function(e){var t=this.$createElement;return t("div",{class:k},[t("span",[e.title]),this.renderCustomerTableColumn(e)])}},{key:"renderTitle",value:function(e){var t=this,r=this.$createElement,n=(0,g.QT)().t,o=e.linkTo!==b.I.None;return r("div",{class:w},[r("span",[e.title]),o&&r(f.zx.Tsx,{attrs:{type:"link"},on:{click:function(){return t.handleHerf(e.linkTo)}}},[n("lobby.promote.promote.more")])])}},{key:"handleHerf",value:function(e){this.$router.push({name:h.x4.PROMOTE,query:{current:e}})}},{key:"renderCustomerTableColumn",value:function(e){var t=this.$createElement,r=e.text,a=e.type,s=void 0===a?n.Normal:a,i=e.config,l=void 0===i?{}:i,u=(0,g.QT)().t;switch(s){case n.Amount:return this.renderAmount((0,o.Z)({amount:r},null!=l?l:{}));case n.Money:return this.renderAmount((0,o.Z)({amount:r,isYellow:Number(r)>=0,isGreen:Number(r)<0,isRed:l.sign&&Number(r)>=0,precision:l.precision},null!=l?l:{}));case n.People:return this.renderAmount({amount:r,suffix:u("lobby.promote.unitPeople"),precision:0});case n.Time:return t("span",{class:"dateTime"},[r?x.ZP.format(r):"-"]);case n.CustomAmount:return this.renderAmount((0,o.Z)({amount:r},l));case n.CustomNormal:var c,m,d;return t("div",{class:["customNormal",{yellowColor:null!==(c=l.isYellow)&&void 0!==c&&c,greenColor:null!==(m=l.isGreen)&&void 0!==m&&m,redColor:null!==(d=l.isRed)&&void 0!==d&&d}]},[l.symbol&&t("span",[l.symbol]),t("span",[" ",null!=r?r:""]),l.suffix&&t("span",[l.suffix])]);case n.Normal:default:return t("span",[null!=r?r:""])}}},{key:"transformDateRadioVal",value:function(e){switch(e){case p.Rd.THIS_MONTH:return 30;case p.Rd.LAST_TOW_MONTH:return 60;case p.Rd.LAST_THREE_MONTH:return 90;default:return e}}}]),r}(d.XY))||m},54342:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n,o,a,s,i,l,u,c,m,d=r(36568),f=r.n(d),p=r(50361),y=r.n(p),h=r(70970),b=r(2813),v=r(3587),g=r(21797),T=r(92317),x=r(82345),w=r(72283),k=r(20793),Z=r(50125),M=r(17360),C=(r(41320),r(92222),r(41539),r(21249),r(38880),r(14577)),P=r(95306),A=r(90416),L=r(30813),I=r(90825),N=r(76937),R=r(27994),S=r(49897),_=function(e){return I.Uh.post({url:"/promote/transferfund",data:e}).then((function(e){return e.data.data}))},W=r(81764),D=r(98292),E=r(93294),G=r(71707),H="h1WoiDl2ZdgEpseZSFZr",$="vFS378eiDaUoszIrzSeA",q="IqSu8C8Qriod_yxsRpIg",F="uVawAiTxderVxNwQbxgU",O="_MydOKtAVseedtN7UHw5",Q="QVzWIuTTn79tm84_eqjU",U={to_username:void 0,password:void 0,amount:void 0,remarks:void 0},z=(n=(0,L.wA)({name:"ProxyTransfer"}),o=(0,L.Rl)(),a=(0,L.Rl)(),s=(0,C.WY)(),i=(0,C.K4)(),n((u=function(e){(0,w.Z)(o,e);var t,r,n=(0,k.Z)(o);function o(){var e;(0,g.Z)(this,o);for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return e=n.call.apply(n,[this].concat(r)),(0,v.Z)((0,x.Z)(e),"formModel",c,(0,x.Z)(e)),(0,v.Z)((0,x.Z)(e),"createAccountSuccessModal",m,(0,x.Z)(e)),(0,Z.Z)((0,x.Z)(e),"state",{loading:!1,submitLoading:!1,directList:[],form:U}),(0,Z.Z)((0,x.Z)(e),"signalWithdrawLimitMin",100),(0,Z.Z)((0,x.Z)(e),"signalWithdrawLimitMax",1e9),e}return(0,T.Z)(o,[{key:"created",value:function(){this.init()}},{key:"init",value:function(){var e,t=this,r=this.$createElement;if((0,D.h)().validateConfig.hasWithdrawPwd)this.getList();else{var n=(0,W.QT)().t;I.sG.Modal.create({type:"warning",title:n("lobby.promote.agentTransfer.settingPwdTitle"),titlePosition:"left",content:n("lobby.promote.agentTransfer.settingPwdContent"),icon:function(){return r("i")},keyboard:!1,maskClosable:!1,okText:n("lobby.common.tips.confirm"),onOk:(e=(0,b.Z)((0,h.Z)().mark((function e(){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$router.push({name:N.x4.SECURITY,query:{current:String(R.r.WITHDRAWPASS)}}),Promise.resolve();case 2:case"end":return e.stop()}}),e)}))),function(){return e.apply(this,arguments)})})}}},{key:"getList",value:(r=(0,b.Z)((0,h.Z)().mark((function e(){var t,r,n,o=this;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),r={time:-1},e.next=4,(0,S.L)(r).finally((function(){o.setState({loading:!1})}));case 4:n=e.sent,this.setState({directList:null!==(t=n.list)&&void 0!==t?t:[]});case 6:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"onSubmit",value:(t=(0,b.Z)((0,h.Z)().mark((function e(){var t,r,n,o,a=this;return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.formModel.validate();case 3:return r=(0,W.QT)(),n=r.t,o=y()(this.state.form),this.setState({submitLoading:!0}),e.next=8,_(o).finally((function(){a.setState({submitLoading:!1})}));case 8:I.sG.Modal.message({type:"success",content:n("lobby.promote.agentTransfer.transferSuccess")}),null===(t=this.formModel)||void 0===t||t.resetFields(),(0,D.h)().updatePrize(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[0,13]])}))),function(){return t.apply(this,arguments)})},{key:"renderContent",value:function(){var e=this,t=this.$createElement,r=(0,W.QT)().t,n=(0,D.h)().userInfos.game_gold,o=I.sG.FuncRender.createFormModelItem.call(this),a=this.state,s=a.form,i=a.directList,l=n<=0;return t("section",{class:H},[t(P.au.Tsx,f()([{ref:"formModel",attrs:{hideRequiredMark:!0}},{props:{model:s}}]),[[o.custom({prop:"to_username",model:s,formModelItemTsxData:{props:{rules:[I.sG.Rules.required({requiredItem:function(){return r("lobby.promote.agentTransfer.usernamePlaceholder")}}),I.sG.Rules.username({start:4,end:16},{message:function(){return r("lobby.promote.createAccount.usernameValid")}})]}},render:function(){return[t("template",{slot:"label"},[t("div",[t("span",[r("lobby.modal.login.form.username.label")])])]),t("div",{attrs:{id:"transfer-input"}},[t(P.II.Tsx,{attrs:{max:n>e.signalWithdrawLimitMax?e.signalWithdrawLimitMax:n,min:e.signalWithdrawLimitMin,disabled:l,maxLength:16,placeholder:r("lobby.promote.agentTransfer.usernamePlaceholder")},class:$,model:{value:s.to_username,callback:function(t){e.$set(s,"to_username",t)}}},[t("div",{slot:"suffix"},[t(P.Lt.Tsx,{attrs:{trigger:["click"],placement:"bottomRight",overlayClassName:Q,getPopupContainer:function(){return document.getElementById("transfer-input")}}},[t("template",{slot:"overlay"},[t(P.v2.Tsx,[i.map((function(r){return t(P.v2.Item.Tsx,{key:r.username,on:{click:function(){e.setState({form:{to_username:r.username}})}}},[r.username])}))])]),t(P.X2.Tsx,{attrs:{type:"flex",justify:"center"},class:F},[r("lobby.promote.agentTransfer.selectPlaceholder"),t(P.JO.Tsx,{attrs:{type:"down"},style:{fontSize:G.ZP.px2rem("20px"),color:I.CM.CssClassName.Lobby.Color.Primary}})])])])])])]}}),o.custom({prop:"amount",model:s,formModelItemTsxData:{props:{rules:[I.sG.Rules.required({requiredItem:function(){return r("lobby.promote.agentTransfer.transferAmountPlaceholder")}})]}},render:function(){return[t("template",{slot:"label"},[t("div",[t("span",[r("lobby.promote.agentTransfer.transferAmount")])])]),t(P.Rn.Tsx,{attrs:{max:n>e.signalWithdrawLimitMax?e.signalWithdrawLimitMax:n,min:e.signalWithdrawLimitMin,disabled:l,placeholder:r("lobby.promote.agentTransfer.transferAmountPlaceholder")},class:$,model:{value:s.amount,callback:function(t){e.$set(s,"amount",t)}}}),t("div",{class:q},[e.renderContentItem({title:r("lobby.promote.agentTransfer.availableBalance"),text:n,type:E.N.Money})])]}}),o.custom({prop:"password",model:s,formModelItemTsxData:{props:{rules:[I.sG.Rules.required({requiredItem:r("lobby.yuebao.modal.withdrawPassword")}),I.sG.Rules.paypass()]}},render:function(){return[t(A.KH,{attrs:{showLabel:!0,labelTitle:r("lobby.promote.agentTransfer.password")},model:{value:s.password,callback:function(t){e.$set(s,"password",t)}}})]}}),o.custom({prop:"remarks",model:s,formModelItemTsxData:{},render:function(){return[t("template",{slot:"label"},[t("div",[t("span",[r("lobby.promote.agentTransfer.remark")])])]),t(P.II.Tsx,{attrs:{maxLength:8,placeholder:r("lobby.promote.agentTransfer.remarkPlaceholder",{length:8})},model:{value:s.remarks,callback:function(t){e.$set(s,"remarks",t)}}})]}})]]),t(P.X2.Tsx,[t(P.zx.Tsx,{attrs:{type:"primary",loading:this.state.submitLoading,disabled:l},class:O,on:{click:this.onSubmit}},[r("lobby.promote.agentTransfer.button")])])])}},{key:"render",value:function(){var e=arguments[0],t=(0,W.QT)(),r=t.t;return e(A.tK,{attrs:{titleContent:r("lobby.promote.agencyTransfer")}},[e(A.gE,{attrs:{spinning:this.state.loading}},[this.renderContent()])])}}]),o}((0,L.Wr)(E.Z)),c=(0,M.Z)(u.prototype,"formModel",[o],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=(0,M.Z)(u.prototype,"createAccountSuccessModal",[a],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,M.Z)(u.prototype,"onSubmit",[s,i],Object.getOwnPropertyDescriptor(u.prototype,"onSubmit"),u.prototype),l=u))||l)},15029:function(e,t,r){var n;r.d(t,{I:function(){return n}}),function(e){e.myPromote="promote",e.myCommission="commission",e.myPerformance="performance",e.myTeamDataDetail="teamDataDetail",e.myProportion="proportion",e.myTutorial="tutorial",e.myCreateAccount="createAccount",e.myProxyTransfer="proxyTransfer",e.myTransferRecord="transferRecord",e.myPickUpRecord="receiceRecord",e.proxyLevel="proxyLevel",e.directBetting="directBetting",e.directData="directData",e.directFinance="directFinance",e.directReceive="directReceive",e.None="none"}(n||(n={}))}}]);