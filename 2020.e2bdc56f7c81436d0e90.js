"use strict";(self.webpackChunkmy_vue_app=self.webpackChunkmy_vue_app||[]).push([[2020],{29754:function(e,t,r){r.d(t,{m:function(){return i},r:function(){return s}});var n=r(7903),a=r(90825),s=function(e){return a.Uh.post({url:"/active/recvRecords",data:(0,n.Z)({},e)}).then((function(e){return e.data.data}))},i=function(e){return a.Uh.post({url:"active/request_details",data:(0,n.Z)({},e)}).then((function(e){return e.data.data}))}},11397:function(e,t,r){var n;r.d(t,{u:function(){return n}}),function(e){e[e.TODAY=1]="TODAY",e[e.YESTERDAY=2]="YESTERDAY",e[e.LAST_SEVEN_DAY=3]="LAST_SEVEN_DAY",e[e.LAST_FIFTEEN_DAY=4]="LAST_FIFTEEN_DAY",e[e.LAST_THIRTY_DAY=5]="LAST_THIRTY_DAY"}(n||(n={}))},70643:function(e,t,r){r.d(t,{A:function(){return s},C:function(){return a}});var n=r(34717),a=[n.Rd.TODAY,n.Rd.YESTERDAY,n.Rd.LAST_SEVEN_DAY,n.Rd.LAST_FIFTEEN_DAY,n.Rd.LAST_THIRTY_DAY],s=[n.Rd.ALL,n.Rd.TODAY,n.Rd.YESTERDAY,n.Rd.THIS_WEEK,n.Rd.LAST_WEEK,n.Rd.THIS_MONTH,n.Rd.LAST_TOW_MONTH,n.Rd.LAST_THREE_MONTH]},42020:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var n,a=r(70970),s=r(7903),i=r(22705),o=r(2813),u=r(21797),c=r(92317),l=r(82345),d=r(72283),T=r(20793),v=r(50125),f=(r(92222),r(51532),r(41539),r(78783),r(33948),r(21249),r(39714),r(69826),r(9653),r(30813)),m=r(95306),p=r(90416),A=r(70643),b=r(90825),y=r(11397),R=r(29754),Y=r(72563),h=r(81764),E=r(98292),_=r(71707),S=r(34717),k="f3S_5thFfF49atoaAqQl",D="OLQvsQlRlsuTwhtuJkBl",L="MvNuksBKdLDAr66TZiDo",Z="ecWlfWL9ybcPttkSbKfT",N="lzTwe5mTv9GooGStfClt",w="TeJ7XHzTACZZDpCqWYgo",C="KGUKvbOsUnGntU2JgD96",I="WEbcMUk0UY7KE8xpJekT",x="PgN21pp7aVDaHA7YbTas",H="mJfUle4sMgsavPZfCAP3",O="BUJ7bY2LHUUitV68yw2N",M="yucY0v2W0KGF55XOaoUt",F=r(41800),g=(0,f.wA)({name:"ReceiveRecords"})(n=function(e){(0,d.Z)(n,e);var t,r=(0,T.Z)(n);function n(){var e;(0,u.Z)(this,n);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return e=r.call.apply(r,[this].concat(a)),(0,v.Z)((0,l.Z)(e),"state",{condition:{time:S.Rd.TODAY}}),(0,v.Z)((0,l.Z)(e),"RecordsTimeMap",new Map([[S.Rd.TODAY,y.u.TODAY],[S.Rd.YESTERDAY,y.u.YESTERDAY],[S.Rd.LAST_SEVEN_DAY,y.u.LAST_SEVEN_DAY],[S.Rd.LAST_FIFTEEN_DAY,y.u.LAST_FIFTEEN_DAY],[S.Rd.LAST_THIRTY_DAY,y.u.LAST_THIRTY_DAY]])),e}return(0,c.Z)(n,[{key:"isWeb",get:function(){return(0,E.h)().isWeb}},{key:"statusTypes",get:function(){var e=(0,h.QT)().t;return[{class:b.CM.CssClassName.Lobby.Color.Yellow,value:e("lobby.records.underReview")},{class:b.CM.CssClassName.Lobby.Color.Green,value:e("lobby.records.passed")},{class:b.CM.CssClassName.Lobby.Color.Red,value:e("lobby.records.rejected")}]}},{key:"query",value:(t=(0,o.Z)((0,a.Z)().mark((function e(t,r,n){var o,u,c,l,d,T,v,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l={page:t,timeType:null!==(o=this.RecordsTimeMap.get(n.time))&&void 0!==o?o:y.u.TODAY,size:r},e.next=3,(0,F.Z)((0,R.m)(l));case 3:if(d=e.sent,T=(0,i.Z)(d,2),v=T[0],f=T[1],!v){e.next=9;break}return e.abrupt("return",{data:[],total:0});case 9:return e.abrupt("return",{data:null!==(u=null==f||null===(c=f.record)||void 0===c?void 0:c.map((function(e,t){return(0,s.Z)((0,s.Z)({},e),{},{key:e.id+t.toString()})})))&&void 0!==u?u:[],total:null==f?void 0:f.total});case 10:case"end":return e.stop()}}),e,this)}))),function(e,r,n){return t.apply(this,arguments)})},{key:"openInfo",value:function(e){var t,r=this.$createElement,n=(0,h.QT)().t,a=e.questions,s=e.request_remark,i=e.frontRemark,o=e.amount,u=s?null===(t=JSON.parse(s))||void 0===t?void 0:t.answers:[],c=a?JSON.parse(a):[];return function(){return b.sG.Modal.create({title:n("lobby.records.info"),closable:!0,hiddenBtns:!0,width:_.ZP.px2rem(600),class:N,content:r("div",{class:w},[r("ul",{class:I},[null==c?void 0:c.map((function(e){var t;return r("li",{key:e.id},[r("span",{class:C},[e.question,":"])," ",null===(t=u.find((function(t){return t.id===e.id})))||void 0===t?void 0:t.answer])})),r("li",[r("span",{class:C},[n("lobby.records.rewardAmount2"),":"])," ",o?(0,Y.o)(o):"--"])]),r("div",{class:x},[r("div",{class:C},[n("lobby.records.administratorReply"),":"]),r("div",{class:H},[i||n("lobby.records.noReply")])])])})}}},{key:"defaultColumns",get:function(){var e=this,t=this.$createElement,r=(0,h.QT)().t;return[{title:r("lobby.reward.award.table.time"),dataIndex:"createtime",key:"createtime",width:_.ZP.px2rem(200),customRender:function(e){return t("span",[_.ZP.format(e)])}},{title:r("lobby.reward.award.table.name"),dataIndex:"activeName",key:"activeName",width:_.ZP.px2rem(200)},{title:r("lobby.records.checkStatus"),dataIndex:"checkstatus",key:"checkstatus",width:_.ZP.px2rem(200),customRender:function(r){var n=e.statusTypes[Number(r)];return t("span",{class:n.class},[n.value])}},{title:r("lobby.records.operate"),dataIndex:"questions",key:"questions",width:_.ZP.px2rem(200),customRender:function(n,a){return t(m.zx.Tsx,{attrs:{type:"link"},on:{click:e.openInfo(a)}},[r("lobby.records.detail")])}}]}},{key:"renderListHeader",value:function(){var e=this.$createElement;return e("div",{class:M},[this.defaultColumns.map((function(t){return e("p",{key:t.title},[t.title])}))])}},{key:"renderListItem",value:function(e){var t=this.$createElement,r=(0,h.QT)().t;return t("div",{class:O},[t("p",[_.ZP.format(e.createtime)]),t("p",[e.activeName]),t("p",[this.statusTypes[Number(e.checkstatus)].value]),t("p",[t(m.zx.Tsx,{attrs:{type:"link"},on:{click:this.openInfo(e)}},[r("lobby.records.detail")])])])}},{key:"render",value:function(){var e=this,t=arguments[0],r=(0,h.QT)(),n=r.t;return t(p.tK,{attrs:{titleContent:n("lobby.records.receiveRecords")},class:[k]},[t("div",{class:D},[t("section",{class:L},[t(S.ZP,{attrs:{radioList:A.C,selectMode:!0},model:{value:e.state.condition.time,callback:function(t){e.$set(e.state.condition,"time",t)}}})]),!this.isWeb&&this.renderListHeader(),t(p.FN,{attrs:{rowKey:"key",query:this.query,listScrollHeight:"calc(100vh - 2.7rem)",columns:this.defaultColumns,condition:this.state.condition,defaultPageSize:this.isWeb?10:15,listMode:!this.isWeb,listRenderItem:this.renderListItem},class:Z})])])}}]),n}(f.XY))||n}}]);