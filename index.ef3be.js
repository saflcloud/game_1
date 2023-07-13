window.__require = function t(e, o, i) {
    function n(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var l = a.split("/");
                if (l = l[l.length - 1],
                    !e[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c)
                        return c(l, !0);
                    if (r)
                        return r(l, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = l
            }
            var h = o[a] = {
                exports: {}
            };
            e[a][0].call(h.exports, function (t) {
                return n(e[a][1][t] || t)
            }, h, h.exports, t, e, o, i)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++)
        n(i[a]);
    return n
}({
    ADBHAdaptor: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "cfb47FYnqBGULAE8gJn6i3R", "ADBHAdaptor"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
        var i = t("./ADBHController")
            , n = t("./ADBHHelper")
            , r = function () {
                function t() {
                    this._top_areas = [],
                        this._bottom_areas = [],
                        this._adapt_flags = [],
                        this._fullCnt = 9
                }
                return t.prototype.addtoTop = function (t, e) {
                    this._top_areas[t] = this._top_areas[t] || [],
                        this._top_areas[t] = this._top_areas[t].concat(e),
                        this._adapt_flags.push(!0),
                        this._adaptive()
                }
                    ,
                    t.prototype.addtoBottom = function (t, e) {
                        this._bottom_areas[t] = this._bottom_areas[t] || [],
                            this._bottom_areas[t] = this._bottom_areas[t].concat(e),
                            this._adapt_flags.push(!0),
                            this._adaptive()
                    }
                    ,
                    t.prototype._adaptive = function () {
                        var t = this._fullCnt;
                        n.default.isAPI() && (t = this._fullCnt - 1);
                        for (var e = 0; e < t; e++)
                            if (!this._adapt_flags[e])
                                return;
                        console.log("\u957f\u5c4f\u5e55\u9002\u914d"),
                            i.adbh_ctrl.addComponent("GameAdaptive_V").init(this._top_areas, this._bottom_areas)
                    }
                    ,
                    t
            }();
        o.default = r,
            cc._RF.pop()
    }
        , {
        "./ADBHController": "ADBHController",
        "./ADBHHelper": "ADBHHelper"
    }],
    ADBHAreaComp: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "fc1819TSspBgYvMeGSimxjj", "ADBHAreaComp");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHController")
            , l = [cc.v2(-101, 44), cc.v2(-225, 106)]
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._areaId = -1,
                            e._lbTotal = null,
                            e._lbMe = null,
                            e._meNode = null,
                            e._highlight = null,
                            e._bettip = null,
                            e._lbAreaRate = null,
                            e._guanzhuNode = null,
                            e._star_lighted = !1,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._highlight = this.node.getChildByName("award_high"),
                                this._bettip = this.node.getChildByName("area_click"),
                                this._lbTotal = this.node.getChildByName("lb_total_bet").getComponent(cc.Label),
                                this._lbAreaRate = this.node.getChildByName("lb_area_rate").getComponent(cc.Label),
                                a.ADBH_G.tool.addBtnClickEvent(null, this.node, this._onClickArea, this, 1),
                                this.playHighLight(!1),
                                this._playBetTip(!1)
                        }
                        ,
                        e.prototype.start = function () {
                            this.refreshUI(),
                                this._initUI()
                        }
                        ,
                        e.prototype._initUI = function () {
                            var t = 1 + a.ADBH_AREA_CONFIG[this._areaId].rate;
                            this._lbAreaRate.string = "x " + t
                        }
                        ,
                        e.prototype._createGuanzhuNode = function () {
                            this._guanzhuNode = cc.instantiate(s.adbh_ctrl.res.guanzhuPre),
                                this._guanzhuNode.active = !1,
                                this.node.addChild(this._guanzhuNode),
                                this._areaId <= 2 ? (this._guanzhuNode.x = l[1].x,
                                    this._guanzhuNode.y = l[1].y) : (this._guanzhuNode.x = l[0].x,
                                        this._guanzhuNode.y = l[0].y),
                                this.lightStar(!1, !1)
                        }
                        ,
                        e.prototype.setAreaId = function (t) {
                            this._areaId = t,
                                this._createGuanzhuNode()
                        }
                        ,
                        e.prototype.setSelfbetNode = function (t) {
                            this._meNode = t,
                                this._lbMe = this._meNode.getChildByName("lb_selfGold").getComponent(cc.Label),
                                this.refreshUI()
                        }
                        ,
                        e.prototype.refreshUI = function () {
                            var t = s.adbh_ctrl.model.getAreaData(this._areaId).meBet;
                            this._meNode && (this._lbMe.string = a.ADBH_G.tool.formatGoldInGame(t),
                                this._meNode.active = t > 0);
                            var e = s.adbh_ctrl.model.getAreaData(this._areaId).totalBet;
                            this._lbTotal.string = a.ADBH_G.tool.formatGoldInGame(e)
                        }
                        ,
                        e.prototype._playBetTip = function (t) {
                            this._bettip.stopAllActions(),
                                this._bettip.active = t,
                                t && (this._bettip.opacity = 0,
                                    this._bettip.runAction(cc.sequence(cc.fadeTo(.1, 255), cc.fadeTo(.1, 0))))
                        }
                        ,
                        e.prototype.playHighLight = function (t) {
                            this._highlight.stopAllActions(),
                                this._highlight.active = t,
                                t && this._highlight.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(.15), cc.delayTime(.06), cc.fadeIn(.15), cc.delayTime(.03))))
                        }
                        ,
                        e.prototype.hideSelfBet = function () {
                            this._meNode.active = !1
                        }
                        ,
                        e.prototype.getRandomPos = function (t) {
                            return this._areaId <= 2 ? cc.v2(t.x + 180 * (Math.random() - .5), t.y + 50 * (Math.random() - .5) - 23) : cc.v2(t.x + 140 * (Math.random() - .5), t.y + 26 * (Math.random() - .5) - 23)
                        }
                        ,
                        e.prototype.getFixedRandomPos = function (t, e) {
                            if (1 == this._areaId)
                                return cc.v2(t.x + 216 * (Math.random() - .5) + 45, t.y + 100 * (Math.random() - .5) - 25);
                            if (2 == this._areaId)
                                return cc.v2(t.x + 216 * (Math.random() - .5) - 45, t.y + 100 * (Math.random() - .5) - 25);
                            var o = s.adbh_ctrl.model.chipConfig[e];
                            return o && !o.isCircle ? cc.v2(t.x + 50 * (Math.random() - .5) + 50, t.y - 23) : cc.v2(t.x + 60 * (Math.random() - .5) + 50, t.y + 7 * (Math.random() - .5) - 23)
                        }
                        ,
                        e.prototype._onClickArea = function () {
                            s.adbh_ctrl.model.gameStatus == a.ADBH_STATUS.Bet ? (s.adbh_ctrl.reqBet(this._areaId, s.adbh_ctrl.model.currentBetIndex),
                                this._playBetTip(!0)) : a.ADBH_G.ui_helper.showTopTipError(a.ADBH_ERROR.getServerErrMsg(1010004))
                        }
                        ,
                        e.prototype.clickArea = function () {
                            this._onClickArea()
                        }
                        ,
                        e.prototype.isTouchIn = function (t) {
                            var e = a.ADBH_G.tool.convertTouchPosToWorldSPace(t, this.node)
                                , o = this.node.convertToNodeSpaceAR(e);
                            return o.x > -this.node.width * this.node.anchorX && o.x < this.node.width * (1 - this.node.anchorX) && o.y > -this.node.height * this.node.anchorY && o.y < this.node.height * (1 - this.node.anchorY)
                        }
                        ,
                        e.prototype.getSlotNode = function () {
                            return this._highlight
                        }
                        ,
                        e.prototype.lightStar = function (t, e, o) {
                            var i = this.node.getChildByName("node_star");
                            if (i.getChildByName("unsel").active = !t,
                                i.getChildByName("sel").active = t,
                                this._star_lighted != t && (this._star_lighted = t,
                                    t && e && o)) {
                                var n = i.getChildByName("sel")
                                    , r = s.adbh_ctrl.node
                                    , a = r.convertToNodeSpaceAR(o)
                                    , l = n.convertToWorldSpaceAR(cc.v2(0, 0));
                                l = r.convertToNodeSpaceAR(l),
                                    this._playHeart(r, a, l),
                                    this._playParticle(r, a, l)
                            }
                        }
                        ,
                        e.prototype._playHeart = function (t, e, o, i) {
                            if (void 0 === i && (i = 0),
                                e) {
                                var n = this.node.getChildByName("node_star").getChildByName("sel")
                                    , r = cc.instantiate(n);
                                t.addChild(r, 1),
                                    r.active = !0,
                                    r.stopAllActions(),
                                    r.scale = 1,
                                    r.x = e.x,
                                    r.y = e.y,
                                    r.runAction(cc.sequence(cc.delayTime(.03 + i), cc.moveTo(.3, o), cc.scaleTo(.25, 1.5), cc.scaleTo(.25, 1), cc.removeSelf(!0)))
                            }
                        }
                        ,
                        e.prototype._playParticle = function (t, e, o, i) {
                            var n;
                            void 0 === i && (i = 0),
                                e && s.adbh_ctrl.res.particlePre && (s.adbh_ctrl.res.partiPool.size() > 0 ? (n = s.adbh_ctrl.res.partiPool.get()).stopAllActions() : n = cc.instantiate(s.adbh_ctrl.res.particlePre),
                                    n.getComponent(cc.ParticleSystem).resetSystem(),
                                    n.x = e.x,
                                    n.y = e.y,
                                    t.addChild(n, 1),
                                    n.runAction(cc.sequence(cc.delayTime(.03 + i), cc.moveTo(.3, o), cc.callFunc(function () {
                                        s.adbh_ctrl.res.partiPool.put(n)
                                    }, this))))
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHAudio: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "6651cRDEkVNDKrQAX5xe90y", "ADBHAudio"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
        var i = t("./ADBHConfig")
            , n = t("./ADBHController")
            , r = ["desktop_crash_1", "desktop_crash_2", "desktop_crash_3", "desktop_crash_4"]
            , a = ["chip_crash_1", "chip_crash_2", "chip_crash_3", "chip_crash_4", "chip_crash_5", "chip_crash_6", "chip_crash_7"]
            , s = function () {
                function t() { }
                return t.stopAllEffects = function () {
                    i.ADBH_G.AudioControl.stopAllEffects()
                }
                    ,
                    t.playChipBet = function (t) {
                        if (t > 10) {
                            var e = Math.floor(Math.random() * a.length);
                            e = Math.min(e, a.length - 1),
                                i.ADBH_G.gameHelper.playEffect(a[e])
                        } else
                            e = Math.floor(Math.random() * r.length),
                                e = Math.min(e, r.length - 1),
                                i.ADBH_G.gameHelper.playEffect(r[e])
                    }
                    ,
                    t.playBetTip = function (t) {
                        t ? i.ADBH_G.gameHelper.playEffect("bet_start") : i.ADBH_G.gameHelper.playEffect("bet_stop");
                        var e = t ? "girl/girl_start_chip" : "girl/girl_stop_chip";
                        i.ADBH_G.gameHelper.playEffect(e)
                    }
                    ,
                    t.playCardCount = function (e) {
                        e <= 0 || (n.adbh_ctrl.model.getAndarBaharByCardCnt(e) ? t.playAndar() : t.playBahar())
                    }
                    ,
                    t.clickChipButton = function () {
                        i.ADBH_G.gameHelper.playEffect("chip_switch")
                    }
                    ,
                    t.playCD = function () {
                        i.ADBH_G.gameHelper.playEffect("countdown")
                    }
                    ,
                    t.playFapai = function () {
                        i.ADBH_G.gameHelper.playEffect("card_fapai")
                    }
                    ,
                    t.playFanpai = function () {
                        i.ADBH_G.gameHelper.playEffect("card_flip")
                    }
                    ,
                    t.playAndar = function () {
                        i.ADBH_G.gameHelper.playEffect("card_andar")
                    }
                    ,
                    t.playBahar = function () {
                        i.ADBH_G.gameHelper.playEffect("card_bahar")
                    }
                    ,
                    t.playAndarWin = function () {
                        i.ADBH_G.gameHelper.playEffect("win_andar")
                    }
                    ,
                    t.playBaharWin = function () {
                        i.ADBH_G.gameHelper.playEffect("win_bahar")
                    }
                    ,
                    t.playMeWin = function () {
                        i.ADBH_G.gameHelper.playEffect("win")
                    }
                    ,
                    t.playCollectChip = function () {
                        i.ADBH_G.gameHelper.playEffect("chip_collect")
                    }
                    ,
                    t.playGainChip = function () {
                        i.ADBH_G.gameHelper.playEffect("chip_gain")
                    }
                    ,
                    t
            }();
        o.default = s,
            cc._RF.pop()
    }
        , {
        "./ADBHConfig": "ADBHConfig",
        "./ADBHController": "ADBHController"
    }],
    ADBHCardsComp: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "4e59bGFR15Fh7z7+raGVcTW", "ADBHCardsComp");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            , a = this && this.__awaiter || function (t, e, o, i) {
                return new (o || (o = Promise))(function (n, r) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function s(t) {
                        try {
                            l(i.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                            e instanceof o ? e : new o(function (t) {
                                t(e)
                            }
                            )).then(a, s)
                    }
                    l((i = i.apply(t, e || [])).next())
                }
                )
            }
            , s = this && this.__generator || function (t, e) {
                var o, i, n, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    r;
                function s(t) {
                    return function (e) {
                        return l([t, e])
                    }
                }
                function l(r) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, r[1])).done)
                                return n;
                            switch (i = 0,
                            n && (r = [2 & r[0], n.value]),
                            r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        i = r[1],
                                        r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                            n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                            a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            r = e.call(t, a)
                        } catch (s) {
                            r = [6, s],
                                i = 0
                        } finally {
                            o = n = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l = t("../ADBHAudio")
            , c = t("../ADBHConfig")
            , h = t("../ADBHController")
            , _ = t("../ADBHHelper")
            , p = cc._decorator
            , d = p.ccclass
            , u = (p.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._cardParent = null,
                            e._cards = [],
                            e._spaceX = 30,
                            e._circleNode = null,
                            e._circleLabel = null,
                            e._fapaiqi = null,
                            e._paihe = null,
                            e._xipai = null,
                            e._saoguang = null,
                            e._fromXipaiPos = cc.v2(0, 0),
                            e._inited = !1,
                            e._enableXipai = !0,
                            e._isChgedXipaiSpine = !1,
                            e._isChgedRightSpine = !1,
                            e._isChgedLeftSpine = !1,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var t = this;
                            console.log("----onLoad ADBHCardsComp"),
                                this._cardParent = _.default.findNode(this.node, "layer_rlt"),
                                this._circleNode = this._cardParent.getChildByName("circle"),
                                this._circleLabel = this._circleNode.getChildByName("lb_card_cnt").getComponent(cc.Label),
                                this._fapaiqi = this._cardParent.findChild("fapaiqi"),
                                this._paihe = this._cardParent.findChild("paihe").getComponent(sp.Skeleton),
                                this._xipai = this._cardParent.findChild("xipai").getComponent(sp.Skeleton),
                                this._saoguang = this._cardParent.findChild("saoguang").getComponent(sp.Skeleton),
                                this._saoguang.setCompleteListener(function () {
                                    t._saoguang.node.active = !1
                                }),
                                this._saoguang.node.active = !1,
                                this._xipai.node.active = !1,
                                this._fromXipaiPos.x = this._xipai.node.x,
                                this._fromXipaiPos.y = this._xipai.node.y
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            c.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype.start = function () {
                            this._inited || (this._inited = !0,
                                this._loadPaiheAni(),
                                this._loadXipaiAni(),
                                this._initCardNodes(),
                                this._initPaihe(),
                                c.ADBH_G.event.on(c.ADBH_EVENT.RESET_GAME_SCENE, this._resetUI, this),
                                c.ADBH_G.event.on(c.ADBH_EVENT.RECONNECT, this._resetUI, this),
                                c.ADBH_G.event.on(c.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, this._onStatusSwitch, this),
                                c.ADBH_G.event.on(c.ADBH_EVENT.ENTER_FRONT, this._onEnterFront, this))
                        }
                        ,
                        e.prototype._initPaihe = function () {
                            var t = this;
                            this._paihe.setCompleteListener(function () {
                                "animation2" == t._paihe.getCurrent(0).animation.name && t._paihe.setAnimation(0, "animation", !1)
                            })
                        }
                        ,
                        e.prototype._loadPaiheAni = function () {
                            var t = this;
                            c.ADBH_G.resMaster.loadResEx("games/adbh/general/animations/paihe", sp.SkeletonData, function (e, o) {
                                !e && o && cc.isValid(t.node) && (console.log("loaded sp 1"),
                                    t._paihe.skeletonData = o,
                                    t._initRightSpineSlot())
                            }, this),
                                c.ADBH_G.resMaster.loadResEx("games/adbh/general/animations/qipaihe/paihe2", sp.SkeletonData, function (e, o) {
                                    !e && o && cc.isValid(t.node) && (console.log("loaded sp 2"),
                                        t._cardParent.findChild("paihe2").getComponent(sp.Skeleton).skeletonData = o,
                                        t._initLeftSpineSlot())
                                }, this)
                        }
                        ,
                        e.prototype._loadXipaiAni = function () {
                            if (this._enableXipai) {
                                var t = this;
                                c.ADBH_G.resMaster.loadResEx("games/adbh/general/animations/xipai/xipai", sp.SkeletonData, function (e, o) {
                                    !e && o && cc.isValid(t.node) && (console.log("loaded sp 3"),
                                        t._xipai.skeletonData = o,
                                        t._initXipaiSpineSlot())
                                }, this)
                            }
                        }
                        ,
                        e.prototype._initXipaiSpineSlot = function () {
                            var t = this._getPokerBackTex();
                            if (t) {
                                if (!this._isChgedXipaiSpine) {
                                    this._isChgedXipaiSpine = !0;
                                    for (var e = 0, o = ["xipai1", "xipai2"]; e < o.length; e++) {
                                        var i = o[e];
                                        this._xipai.clearTracks(),
                                            this._xipai.setAnimation(0, i, !1);
                                        for (var n = 1; n <= 38; n++)
                                            this._changeSlot(this._xipai, "pukepai" + n, t)
                                    }
                                }
                            } else
                                console.log("\u66ff\u6362\u724c\u80cc\u5931\u8d25")
                        }
                        ,
                        e.prototype._initRightSpineSlot = function () {
                            var t = this._getPokerBackTex();
                            if (t) {
                                if (!this._isChgedRightSpine) {
                                    this._isChgedRightSpine = !0;
                                    for (var e = 0, o = ["animation2", "animation"]; e < o.length; e++) {
                                        var i = o[e];
                                        this._paihe.clearTracks(),
                                            this._paihe.setAnimation(0, i, !1),
                                            this._changeSlot(this._paihe, "pai", t),
                                            this._changeSlot(this._paihe, "pai2", t)
                                    }
                                }
                            } else
                                console.log("\u66ff\u6362\u724c\u80cc\u5931\u8d25")
                        }
                        ,
                        e.prototype._initLeftSpineSlot = function () {
                            var t = this._getPokerBackTex();
                            if (t) {
                                if (!this._isChgedLeftSpine) {
                                    this._isChgedLeftSpine = !0;
                                    var e = this._cardParent.findChild("paihe2").getComponent(sp.Skeleton);
                                    e.clearTracks(),
                                        e.setAnimation(0, "animation", !1),
                                        this._changeSlot(e, "pukepai1", t),
                                        e.paused = !0
                                }
                            } else
                                console.log("\u66ff\u6362\u724c\u80cc\u5931\u8d25")
                        }
                        ,
                        e.prototype._getPokerBackTex = function () {
                            return _.default.getPokerBackTex()
                        }
                        ,
                        e.prototype._changeSlot = function (t, e, o) {
                            c.ADBH_G.tool.replaceSpineSlotTexture(t, e, o)
                        }
                        ,
                        e.prototype._playXipai = function (t) {
                            var e = this._xipai;
                            if (!t)
                                return this.unschedule(this._xipaiHeguan),
                                    e.node.stopAllActions(),
                                    void (e.node.active = !1);
                            e.node.active = !0,
                                e.node.stopAllActions(),
                                e.node.setPosition(this._fromXipaiPos),
                                e.setAnimation(0, "xipai1", !1);
                            var o = cc.v2(this._fapaiqi.x + 10, this._fapaiqi.y - 5);
                            e.setCompleteListener(function () {
                                var t = e.getCurrent(0);
                                "xipai1" == t.animation.name ? (e.setAnimation(0, "xipai2", !1),
                                    e.node.runAction(cc.moveTo(.2, o))) : "xipai2" == t.animation.name && (e.node.active = !1)
                            })
                        }
                        ,
                        e.prototype._resetUI = function () {
                            this._playXipai(!1),
                                this._keepPlay()
                        }
                        ,
                        e.prototype._onEnterFront = function () {
                            h.adbh_ctrl.model.gameStatus == c.ADBH_STATUS.OpenCard && console.log("\u56de\u524d\u53f0, \u5c1d\u8bd5\u7ee7\u7eed\u64ad\u653e\u5f00\u724c"),
                                this._playXipai(!1),
                                this._keepPlay()
                        }
                        ,
                        e.prototype._keepPlay = function () {
                            var t = this._calPlayCnt();
                            h.adbh_ctrl.model.gameStatus == c.ADBH_STATUS.OpenCard && t > 0 ? this._refreshUI(!0, t) : (this._playXipai(!1),
                                this._refreshUI(!1))
                        }
                        ,
                        e.prototype._calPlayCnt = function () {
                            var t = Math.floor(h.adbh_ctrl.model.getRemainSec() / .8)
                                , e = h.adbh_ctrl.model.getResultCards();
                            return t > e.length - 1 && (t = e.length - 1),
                                t
                        }
                        ,
                        e.prototype._initCardNodes = function () {
                            return a(this, void 0, void 0, function () {
                                var t, e, o, i, n, r;
                                return s(this, function (a) {
                                    switch (a.label) {
                                        case 0:
                                            return t = this._cardParent.findChild("cardlayer"),
                                                [4, c.ADBH_G.gameHelper.getPkCard()];
                                        case 1:
                                            if (e = a.sent(),
                                                !cc.isValid(t))
                                                return [2];
                                            for (o = 0; o < c.ADBH_CARD_COUNT; ++o)
                                                this._cards[o] || (i = cc.instantiate(e).getComponent("PKCard"),
                                                    t.addChild(i.node),
                                                    this._cards[o] = i,
                                                    n = this._getCardPos(o),
                                                    i.node.x = n.x,
                                                    i.node.y = n.y,
                                                    r = this._getCardScale(),
                                                    i.node.setScale(r, r),
                                                    i.showBack());
                                            return this._keepPlay(),
                                                [2]
                                    }
                                })
                            })
                        }
                        ,
                        e.prototype._clearCards = function () {
                            this.unscheduleAllCallbacks(),
                                this._refreshCards(null, !1)
                        }
                        ,
                        e.prototype._onStatusSwitch = function () {
                            var t = h.adbh_ctrl.model.gameStatus;
                            t == c.ADBH_STATUS.Start ? this._clearCards() : t == c.ADBH_STATUS.Bet ? (this._refreshUI(!1),
                                this._enableXipai ? (this._playXipai(!0),
                                    this._dealJoker(1.5)) : this._dealJoker(0)) : t == c.ADBH_STATUS.OpenCard ? this._onOpenCard() : t == c.ADBH_STATUS.Award && this._refreshUI(!1)
                        }
                        ,
                        e.prototype._dealJoker = function (t) {
                            this._setCardValue(0, h.adbh_ctrl.model.jokerCard, !0, 1 + t),
                                this.unschedule(this._xipaiHeguan),
                                this.scheduleOnce(this._xipaiHeguan, .8 + t)
                        }
                        ,
                        e.prototype._xipaiHeguan = function () {
                            c.ADBH_G.event.emitNow("push_card_notify")
                        }
                        ,
                        e.prototype._onOpenCard = function () {
                            var t = this;
                            this.scheduleOnce(function () {
                                t._openCards()
                            }, .1)
                        }
                        ,
                        e.prototype._openCards = function () {
                            var t = this
                                , e = .8 * (h.adbh_ctrl.model.getResultCards().length - 1)
                                , o = h.adbh_ctrl.model.getRemainSec() - e;
                            console.log("--- opencards: ", o),
                                o > 2 && (o = 2),
                                o < 0 ? this._refreshUI(!0, this._calPlayCnt()) : this.scheduleOnce(function () {
                                    t._refreshUI(!0)
                                }, Math.max(o, .03))
                        }
                        ,
                        e.prototype._refreshUI = function (t, e) {
                            void 0 === e && (e = -1),
                                this.unscheduleAllCallbacks();
                            var o = h.adbh_ctrl.model.getResultCards();
                            this._refreshCards(o, t, e)
                        }
                        ,
                        e.prototype._refreshCards = function (t, e, o) {
                            void 0 === o && (o = -1),
                                t = t || [],
                                console.log("_refreshCards: ", e, "  ", t.length, " : ", o);
                            for (var i = t.length; i < this._cards.length; i++)
                                this._setCardValue(i, -1, !1);
                            this._refreshCardCount(0),
                                t.length > 0 && this._setCardValue(0, t[0], !1);
                            var n = 1;
                            o > 0 && (n = t.length - o) < 1 && (n = 1);
                            for (var r = 1, a = t.length; r < a; r++)
                                this._setCardValue(r, t[r], e && r >= n, .8 * (r - n))
                        }
                        ,
                        e.prototype._setCardValue = function (t, e, o, i) {
                            var n = this;
                            void 0 === i && (i = 0);
                            var r = this._cards[t];
                            if (r)
                                if (null == e || e <= 0)
                                    r.node.active = !1;
                                else {
                                    var a = r.node;
                                    if (a.active = !0,
                                        r.stopCardAnim(),
                                        a.stopAllActions(),
                                        r.init(new window.PKModel(e)),
                                        o)
                                        i <= 0 && (i = .03),
                                            r.showBack(),
                                            a.x = this._fapaiqi.x,
                                            a.y = this._fapaiqi.y,
                                            a.scaleX = .12,
                                            a.scaleY = .15,
                                            a.angle = 52,
                                            a.opacity = 0,
                                            a.runAction(cc.sequence(cc.delayTime(i), cc.callFunc(function () {
                                                l.default.playFapai(),
                                                    n._paihe.setAnimation(0, "animation2", !1)
                                            }), cc.delayTime(.18), cc.callFunc(function () {
                                                a.opacity = 200
                                            }), cc.spawn(cc.fadeTo(.05, 255), cc.moveTo(.2, this._getCardPos(t)), cc.scaleTo(.2, this._getCardScale()), cc.rotateTo(.2, 0), cc.callFunc(function () {
                                                n._refreshCardCount(t)
                                            }, this)), cc.delayTime(.1), cc.callFunc(function () {
                                                r.playCardAnim(),
                                                    l.default.playFanpai()
                                            }, this), cc.delayTime(.24), cc.callFunc(function () {
                                                var e = h.adbh_ctrl.model.getResultCards();
                                                t == e.length - 1 && n._playSaoguang(t)
                                            }, this)));
                                    else {
                                        this._paihe.setAnimation(0, "animation", !1),
                                            a.angle = 0,
                                            a.scale = this._getCardScale();
                                        var s = this._getCardPos(t);
                                        a.x = s.x,
                                            a.y = s.y,
                                            a.opacity = 255,
                                            r.hideBack(),
                                            this._refreshCardCount(t)
                                    }
                                }
                        }
                        ,
                        e.prototype._refreshCardCount = function (t) {
                            if (this._circleNode.active = t > 0,
                                c.ADBH_G.event.emitNow(c.ADBH_EVENT.SLOT_CHASE, t),
                                !(t <= 0)) {
                                var e = this._getCardPos(t).x + 60;
                                this._circleNode.x = e,
                                    this._circleLabel.string = t.toString(),
                                    this._circleLabel.node.x = t >= 10 && t <= 19 ? -2 : 0,
                                    this._circleNode.getChildByName("ico_circle").color = this._getColor(t),
                                    this._circleNode.getChildByName("ico_circle").active = t <= c.ADBH_FS_EFFECT_COUNT,
                                    this._circleNode.getChildByName("ico_fire").active = t > c.ADBH_FS_EFFECT_COUNT
                            }
                        }
                        ,
                        e.prototype._getColor = function (t) {
                            return t <= 10 ? c.ADBH_RESULT_COLOR[0] : t <= 25 ? c.ADBH_RESULT_COLOR[1] : t <= 35 ? c.ADBH_RESULT_COLOR[2] : c.ADBH_RESULT_COLOR[3]
                        }
                        ,
                        e.prototype._getCardPos = function (t) {
                            if (0 == t) {
                                var e = this._cardParent.getChildByName("card_0").position;
                                return cc.v2(e.x, e.y)
                            }
                            var o = this._cardParent.getChildByName("card_1")
                                , i = t % 2 == 1 ? o.y : -o.y;
                            return cc.v2(o.x + Math.floor((t - 1) / 2) * this._spaceX, i)
                        }
                        ,
                        e.prototype._getCardScale = function () {
                            return .54
                        }
                        ,
                        e.prototype._playSaoguang = function (t) {
                            if (t <= 0)
                                this._saoguang.node.active = !1;
                            else {
                                this._saoguang.node.active = !0,
                                    this._saoguang.setAnimation(0, "animation", !1);
                                var e = this._getCardPos(t);
                                this._saoguang.node.x = e.x,
                                    this._saoguang.node.y = e.y
                            }
                        }
                        ,
                        r([d], e)
                }(cc.Component));
        o.default = u,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "../ADBHHelper": "ADBHHelper"
    }],
    ADBHChangeTableCell: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "82b87+6JvlNqqM/ff+y8otl", "ADBHChangeTableCell");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHController")
            , s = t("../../ADBHConfig")
            , l = t("../trendchart/ADBHtrendChartUpdate")
            , c = t("../../hall/ADBHMainSummaryInfo_H")
            , h = cc._decorator
            , _ = h.ccclass
            , p = h.property
            , d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.table_bg = null,
                        e.table_bead_road = null,
                        e.table_big_road = null,
                        e.table_down_lab_root = null,
                        e.table_up_lab_root = null,
                        e.bigRoad = null,
                        e.bigEyeRoad = null,
                        e.smallEyeRoad = null,
                        e.cockRoad = null,
                        e.beadRoad = null,
                        e.bg_good_trend = null,
                        e.good_trend_type = null,
                        e.currTableFlag = null,
                        e.statusLabel = null,
                        e.levelLabel = null,
                        e.timeLabel = null,
                        e.limit_text = null,
                        e.room_type_jd = null,
                        e.lb_room_type_jd = null,
                        e.lb_levelLabel = null,
                        e.initComplete = !1,
                        e.goodTrendData = null,
                        e.data = null,
                        e.eGameShowStatus = null,
                        e.btn_gray_game = null,
                        e.btn_enter_game = null,
                        e.btn_weihu_game = null,
                        e.road_tool = null,
                        e.instancesObjName = {},
                        e.summary_info = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        this.dealBg(),
                            s.ADBH_G.tool.addBtnClickEvent("btn_enter_game", this.node, this.onEnterGameClickEvent, this, .9),
                            s.ADBH_G.event.on(s.ADBH_EVENT.UPDATE_GOOD_TREND, this.updateGoodTrend, this),
                            s.ADBH_G.event.on(s.ADBH_EVENT.UPDATA_GOOD_TREND_TYPE, this.updataGoodTrendType, this)
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        this.unscheduleAllCallbacks()
                    }
                    ,
                    e.prototype.init = function () {
                        this.initComplete || (this.btn_gray_game = this.node.getChildByName("btn_gray_enter_game"),
                            this.btn_enter_game = this.node.getChildByName("btn_enter_game"),
                            this.btn_weihu_game = this.node.getChildByName("btn_weihu_game"),
                            this.currTableFlag = this.node.getChildByName("curr_table_flag"),
                            this.currTableFlag.zIndex = 100,
                            this.eGameShowStatus = s.ADBH_G.pbTool.getCls("com_protocol.EGameShowStatus").values,
                            this.bg_good_trend = this.node.getChildByName("bg_good_trend"),
                            this.bg_good_trend && (this.bg_good_trend.zIndex = this.currTableFlag.zIndex + 1,
                                this.good_trend_type = this.bg_good_trend.getChildByName("trend_type_name").getComponent(cc.Label)),
                            this.initComplete = !0)
                    }
                    ,
                    e.prototype._hideTimeLabel = function (t) {
                        return t != s.ADBH_STATUS.Bet
                    }
                    ,
                    e.prototype.updateData = function (t) {
                        var e = this;
                        if (t && a.adbh_ctrl.model) {
                            this.init(),
                                this.node.active = !0,
                                this.data = t;
                            var o = t.winInfo;
                            if (o && o.winNameType) {
                                this.data.winNameType = [];
                                for (var i = 0, n = o.winNameType; i < n.length; i++) {
                                    var r = n[i];
                                    this.data.winNameType.push(r)
                                }
                                this.setTableStatus(t),
                                    this.currTableFlag.active && this.bg_good_trend && (this.bg_good_trend.active = !1);
                                var l = this.data.winNameType ? this.data.winNameType : [];
                                this.road_tool = new s.ADBH_roadTool,
                                    this.road_tool.init(l),
                                    this.timeLabel && (this.timeLabel.string = ""),
                                    this.scheduleOnce(function () {
                                        e.dealBeadRoad(),
                                            e.dealBigRoad()
                                    }),
                                    this.dealUpLabRoot(),
                                    this.dealDownLabRoot(),
                                    this.updateGoodTrend(this.goodTrendData)
                            }
                        } else
                            this.node.active = !1
                    }
                    ,
                    e.prototype.setTableStatus = function (t) {
                        var e = t.tableId == a.adbh_ctrl.model.tableId && t.roomLevel == a.adbh_ctrl.model.gameRoomLevel;
                        t.roomStatus == this.eGameShowStatus.EShowStatusOpen ? (this.currTableFlag.active = e,
                            this.btn_gray_game.active = e,
                            this.btn_enter_game.active = !e,
                            this.btn_weihu_game && (this.btn_weihu_game.active = !1)) : (this.currTableFlag.active = e,
                                this.btn_gray_game.active = !1,
                                this.btn_enter_game.active = !1,
                                this.btn_weihu_game && (this.btn_weihu_game.active = !0)),
                            this._showMaintainTip(t, e)
                    }
                    ,
                    e.prototype._showMaintainTip = function (t, e) {
                        var o = !(!a.adbh_ctrl.model.userVersion || "" == a.adbh_ctrl.model.userVersion || a.adbh_ctrl.model.userVersion == t.version);
                        s.ADBH_G.gameHelper.showTableMaintainTip(this.node, e, o)
                    }
                    ,
                    e.prototype.dealBg = function () {
                        if (this.node.getChildByName("bkg_spr") && (this.node.getChildByName("bkg_spr").zIndex = -2),
                            !this.instancesObjName[this.table_bg.name]) {
                            this.instancesObjName[this.table_bg.name] = this.table_bg.name;
                            var t = cc.instantiate(this.table_bg);
                            t.zIndex = -1,
                                t.setParent(this.node)
                        }
                    }
                    ,
                    e.prototype.updateSecond = function (t) {
                        if (t && t.roomStatus != this.eGameShowStatus.EShowStatusOpen || !t)
                            this.timeLabel.string = "";
                        else if (t && this.timeLabel) {
                            var e = Math.floor(t.waitMillisecs / 1e3) || 0;
                            e = e < 0 ? 0 : e,
                                this._hideTimeLabel(t.gameStatus) ? this.timeLabel.string = this.statusLabel : this.timeLabel.string = this.statusLabel + s.ADBH_G.tool.format("{0}s", e)
                        }
                    }
                    ,
                    e.prototype.isShowCont = function () {
                        var t = this.data;
                        return !(t && t.roomStatus != this.eGameShowStatus.EShowStatusOpen || !t)
                    }
                    ,
                    e.prototype.dealBeadRoad = function () {
                        this.instancesObjName[this.table_bead_road.name] || (this.beadRoad = this.addTrendTableByPre(this.table_bead_road, "TrendTableItemAdbh", a.adbh_ctrl.res.beadRoadSfs, 10, 3),
                            this.instancesObjName[this.table_bead_road.name] = this.table_bead_road.name);
                        for (var t = [], e = 0; e < this.road_tool.getBeadPlate().length; e++)
                            t[e] = this.road_tool.getBeadPlate()[e];
                        var o = this.arrayToGrid(t, s.ADBH_TREND_GRID.beatRow)
                            , i = this.isShowCont() ? 10 : 0;
                        o = this.setArrayLen(o, i),
                            this.beadRoad.gridDataRender(o, null, !0)
                    }
                    ,
                    e.prototype.dealBigRoad = function () {
                        this.instancesObjName[this.table_big_road.name] || (this.bigRoad = this.addTrendTableByPre(this.table_big_road, "TrendTableItem", a.adbh_ctrl.res.bigRoadSfs, 10, s.ADBH_TREND_GRID.bigRow),
                            this.instancesObjName[this.table_big_road.name] = this.table_big_road.name);
                        var t = this.isShowCont() ? 10 : 0
                            , e = this.setArrayLen(this.road_tool.getADBHBigRoads().road, t);
                        this.bigRoad.gridDataRender(e, null, !0)
                    }
                    ,
                    e.prototype.dealUpLabRoot = function () {
                        if (!this.instancesObjName[this.table_up_lab_root.name]) {
                            var t = cc.instantiate(this.table_up_lab_root);
                            t.setParent(this.node),
                                this.timeLabel = t.getChildByName("time_label").getComponent(cc.Label),
                                this.limit_text = t.getChildByName("limit_text").getComponent(cc.Label),
                                this.room_type_jd = t.getChildByName("room_type_jd") && t.getChildByName("room_type_jd").getComponent(cc.Sprite),
                                this.lb_room_type_jd = t.getChildByName("lb_room_type_jd") && t.getChildByName("lb_room_type_jd").getComponent(cc.Label),
                                this.levelLabel = t.getChildByName("level_label") && t.getChildByName("level_label").getComponent(cc.Label),
                                this.lb_levelLabel = t.getChildByName("lb_room_level") && t.getChildByName("lb_room_level").getComponent(cc.Label),
                                this.instancesObjName[this.table_up_lab_root.name] = this.table_up_lab_root.name
                        }
                        var e = s.ADBH_ROOM_LEVEL_NAME[s.ADBH_STR["ROOM_LEVEL_" + this.data.roomLevel]];
                        e || (e = s.ADBH_ROOM_LEVEL_NAME["01"]),
                            this._setIconImg(e.gameHall2Name),
                            this.limit_text.string = cc.i18n.t("adbh.xianhong") + s.ADBH_G.tool.format("{0}-{1}", this.data.minLimit, this.data.maxLimit),
                            this.statusLabel = cc.i18n.t(s.ADBH_STR["STATE_" + this.data.gameStatus]);
                        var o = String(this.data.tableId);
                        this.levelLabel && (this.levelLabel.string = "0" + o.charAt(o.length - 1)),
                            this._hideTimeLabel(this.data.gameStatus) ? this.timeLabel.string = this.statusLabel : this.timeLabel.string = this.statusLabel + s.ADBH_G.tool.format("{0}s", Math.floor(this.data.waitMillisecs / 1e3) || 0),
                            this.lb_room_type_jd && (this.lb_room_type_jd.string = cc.i18n.t(e.roomName) + "(0" + o.charAt(o.length - 1) + ")"),
                            this.lb_levelLabel,
                            (this.data && this.data.roomStatus != this.eGameShowStatus.EShowStatusOpen || !this.data) && (this.statusLabel = "",
                                this.timeLabel.string = "")
                    }
                    ,
                    e.prototype._setIconImg = function (t) {
                        var e = this;
                        this.room_type_jd && s.ADBH_G.gameHelper.loadResEx("textures/hall_room_name/" + t, cc.SpriteFrame, function (t, o) {
                            t && console.error("\u6ca1\u627e\u5230", t),
                                e.room_type_jd.spriteFrame = o
                        }, this, !0)
                    }
                    ,
                    e.prototype.dealDownLabRoot = function () {
                        null == this.summary_info ? (this.summary_info = this.node.addComponent(c.default),
                            this.summary_info.init(this.table_down_lab_root),
                            this.summary_info.updateParsedData(this.data)) : this.summary_info.updateParsedData(this.data)
                    }
                    ,
                    e.prototype.onEnterGameClickEvent = function () {
                        if (null != this.data && null != a.adbh_ctrl.model)
                            if (this.data.tableId != a.adbh_ctrl.model.tableId || this.data.roomLevel != a.adbh_ctrl.model.gameRoomLevel)
                                if (a.adbh_ctrl.model.isCanLeave) {
                                    if (this.data.needGold > s.ADBH_G.user.getGold())
                                        return this.isAPI() ? void s.ADBH_G.ui_helper.showTopTipError(s.ADBH_TIPS.CHG_TABLE_NO_MONEY) : void s.ADBH_G.gameHelper.gameRecharge.showRechargeTip(null, this.data.needGold);
                                    s.ADBH_G.ui_helper.showMumLoading("changeGameLoading"),
                                        s.ADBH_G.event.emit("changeGame", {
                                            roomId: this.data.roomId,
                                            gameType: this.data.gameType,
                                            tableId: this.data.tableId,
                                            roomLevel: this.data.roomLevel,
                                            needGold: this.data.needGold
                                        })
                                } else
                                    s.ADBH_G.ui_helper.showTopTipError(s.ADBH_TIPS.FINISH_GAME_TURAN_TABLE);
                            else
                                s.ADBH_G.ui_helper.showTopTipError(s.ADBH_TIPS.IN_THIS_ROOM)
                    }
                    ,
                    e.prototype.isAPI = function () {
                        return window.G.apiHelper.getIsApi()
                    }
                    ,
                    e.prototype.addTrendTableByPre = function (t, e, o, i, n, r) {
                        void 0 === r && (r = !0);
                        var s = cc.instantiate(t)
                            , c = s.addComponent(l.ADBHtrendChartUpdate);
                        c.rendererTarget = c.node;
                        var h = c.node.children[0].addComponent(e);
                        return h.beadSfs = o,
                            h.labels = a.adbh_ctrl.res.bsLabels,
                            c.lineBold = 0,
                            c.minCol = i,
                            c.minRow = n,
                            c.isRendererTablePlate = !0,
                            c.isOddLine = r,
                            c.isCanScroll = !1,
                            s.setParent(this.node),
                            c
                    }
                    ,
                    e.prototype.arrayToGrid = function (t, e) {
                        if (null == t || 0 == t.length)
                            return [];
                        for (var o = [], i = 0; i < Math.ceil(t.length / e); i++) {
                            for (var n = [], r = 0; r < e; r++) {
                                var a = t[i * e + r];
                                null == a && n.push(-1),
                                    n.push(a)
                            }
                            o.push(n)
                        }
                        return o
                    }
                    ,
                    e.prototype.updataGoodTrendType = function () {
                        this.bg_good_trend && (this.bg_good_trend.active = !1)
                    }
                    ,
                    e.prototype.setArrayLen = function (t, e) {
                        return t.slice(t.length - e < 0 ? 0 : t.length - e, t.length)
                    }
                    ,
                    e.prototype.updateGoodTrend = function (t) {
                        if (void 0 === t && (t = null),
                            this.bg_good_trend && (this.bg_good_trend.active = !1),
                            t && (this.goodTrendData = t),
                            this.goodTrendData && this.bg_good_trend)
                            for (var e in t = this.goodTrendData.data)
                                t[e] ? this._setGoodTrend(t, e) : console.error("\u597d\u8def\u6570\u636e\u6709\u95ee\u9898:", e)
                    }
                    ,
                    e.prototype._setGoodTrend = function (t, e) {
                        if (this.bg_good_trend && this.good_trend_type) {
                            var o = t[e].level;
                            if (this.data.roomLevel == o) {
                                var i = t[e].data;
                                for (var n in i)
                                    if (i[n].tableId == this.data.tableId) {
                                        var r = window.G.pbTool.getCls("com_protocol.AndarBarharTrendInfo").decode(new Uint8Array(i[n].winNameType));
                                        if (!r.goodTrend || this.currTableFlag.active)
                                            return void (this.bg_good_trend.active = !1);
                                        var a = s.GOOD_TREND_ICON_NAME[r.goodTrend];
                                        return this.good_trend_type.string = cc.i18n.t(a),
                                            void (this.bg_good_trend.active = !0)
                                    }
                            }
                        }
                    }
                    ,
                    r([p(cc.Prefab)], e.prototype, "table_bg", void 0),
                    r([p(cc.Prefab)], e.prototype, "table_bead_road", void 0),
                    r([p(cc.Prefab)], e.prototype, "table_big_road", void 0),
                    r([p(cc.Prefab)], e.prototype, "table_down_lab_root", void 0),
                    r([p(cc.Prefab)], e.prototype, "table_up_lab_root", void 0),
                    r([_], e)
            }(cc.Component);
        o.default = d,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController",
        "../../hall/ADBHMainSummaryInfo_H": "ADBHMainSummaryInfo_H",
        "../trendchart/ADBHtrendChartUpdate": "ADBHtrendChartUpdate"
    }],
    ADBHChangeTableItem: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "d506ei7sWhBMqxzxZtGNk2l", "ADBHChangeTableItem");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = t("../../ADBHController")
            , l = t("./ADBHChangeTableCell")
            , c = cc._decorator
            , h = c.ccclass
            , _ = c.property
            , p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._index = 0,
                        e._target = null,
                        e._data = [],
                        e.leftCell = null,
                        e.rightCell = null,
                        e.cellArr = [],
                        e.preCell = null,
                        e.initComplete = !1,
                        e
                }
                return n(e, t),
                    Object.defineProperty(e.prototype, "index", {
                        get: function () {
                            return this._index
                        },
                        set: function (t) {
                            this._index = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.init = function () {
                        if (!this.initComplete) {
                            if (this.initComplete = !0,
                                s.adbh_ctrl.res.isLandscape()) {
                                (e = cc.instantiate(this.preCell)).setPosition(-365, e.y),
                                    e.setParent(this.node);
                                var t = cc.instantiate(this.preCell);
                                t.setParent(this.node),
                                    t.setPosition(365, e.y),
                                    this.leftCell = e.getOrAddComponent(l.default),
                                    this.rightCell = t.getOrAddComponent(l.default),
                                    this.cellArr[0] = this.leftCell,
                                    this.cellArr[1] = this.rightCell
                            } else {
                                var e;
                                (e = cc.instantiate(this.preCell)).setPosition(0, -this.preCell.data.height / 2),
                                    e.setParent(this.node),
                                    this.leftCell = e.getOrAddComponent(l.default),
                                    this.cellArr[0] = this.leftCell
                            }
                            this.startSchedule()
                        }
                    }
                    ,
                    e.prototype.getMatchElementToUpdate = function (t, e) {
                        var o = !1;
                        for (var i in e)
                            null != this._data[0][i] && this._data[0][i] == e[i] ? (this.leftCell.updateData(t),
                                o = !0,
                                this._data[0] = t) : this._data.length > 1 && null != this._data[1][i] && this._data[1][i] == e[i] && (this.rightCell.updateData(t),
                                    o = !0,
                                    this._data[1] = t);
                        return o
                    }
                    ,
                    e.prototype.updateData = function (t, e) {
                        this.init(),
                            this._data = t,
                            this._target = e,
                            t.length > 1 ? (this.leftCell.updateData(t[0]),
                                this.rightCell.updateData(t[1])) : (this.rightCell && (this.rightCell.node.active = !1),
                                    this.leftCell.updateData(t[0])),
                            a.ADBH_G.ui_helper.hideMumLoading("CGH_GET_GAME_TREND_DATA_REQ")
                    }
                    ,
                    e.prototype.updateSecond = function () {
                        for (var t = 0; t < this._data.length; t++) {
                            var e = this._data[t];
                            e.waitMillisecs -= 1e3,
                                e.waitMillisecs <= 0 && (e.waitMillisecs = 0),
                                this.cellArr[t].updateData(e),
                                e.waitMillisecs <= 0 && (e.waitMillisecs = 1e4,
                                    e.target.requestRoadsReq(e.target.curIndex, e.tableId))
                        }
                    }
                    ,
                    e.prototype.startSchedule = function () {
                        this.unschedule(this.updateSecond),
                            this.schedule(this.updateSecond, 1, cc.macro.REPEAT_FOREVER, 1)
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        this.unscheduleAllCallbacks()
                    }
                    ,
                    r([_(cc.Prefab)], e.prototype, "preCell", void 0),
                    r([h], e)
            }(cc.Component);
        o.default = p,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController",
        "./ADBHChangeTableCell": "ADBHChangeTableCell"
    }],
    ADBHChangeTable: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ca3628YaYNJd7kwwr3Gpcay", "ADBHChangeTable");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            , a = this && this.__awaiter || function (t, e, o, i) {
                return new (o || (o = Promise))(function (n, r) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function s(t) {
                        try {
                            l(i.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                            e instanceof o ? e : new o(function (t) {
                                t(e)
                            }
                            )).then(a, s)
                    }
                    l((i = i.apply(t, e || [])).next())
                }
                )
            }
            , s = this && this.__generator || function (t, e) {
                var o, i, n, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    r;
                function s(t) {
                    return function (e) {
                        return l([t, e])
                    }
                }
                function l(r) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, r[1])).done)
                                return n;
                            switch (i = 0,
                            n && (r = [2 & r[0], n.value]),
                            r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        i = r[1],
                                        r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                            n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                            a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            r = e.call(t, a)
                        } catch (s) {
                            r = [6, s],
                                i = 0
                        } finally {
                            o = n = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l = t("../../ADBHConfig")
            , c = t("../../ADBHController")
            , h = cc._decorator
            , _ = h.ccclass
            , p = (h.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.scrollList = null,
                            e.isLoadData = !1,
                            e.interval = 1,
                            e.timer = 0,
                            e.changeFlag = !0,
                            e.hadShow = !1,
                            e.scrollView = null,
                            e._curIndex = 1,
                            e
                    }
                    return n(e, t),
                        Object.defineProperty(e.prototype, "curIndex", {
                            get: function () {
                                return this._curIndex
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.onLoad = function () {
                            var t = this;
                            l.ADBH_G.event.on(l.ADBH_EVENT.UPDATE_ROOM_LIST, this.updateRoomList, this),
                                l.ADBH_G.event.on(l.ADBH_EVENT.UPDATE_ROOM_SINGLE, this.updateSingleTable, this),
                                this.isLoadData = !1,
                                l.ADBH_G.ui_helper.hideMumLoading("CGH_GET_GAME_TREND_DATA_REQ"),
                                l.ADBH_G.event.on("changeGame", this.checkChangeGame, this),
                                l.ADBH_G.event.on("select_room_fail", function () {
                                    l.ADBH_G.ui_helper.hideMumLoading("changeGameLoading"),
                                        t.changeFlag = !0
                                }),
                                this.changeFlag = !0,
                                this.hadShow = !1,
                                this.node.getChildByName("btn_closeTable").on("click", this.hide, this)
                        }
                        ,
                        e.prototype.update = function (t) {
                            if (!(this.getRoomList(!0).length > 0 && this.hadShow))
                                return this.timer >= this.interval ? (this.timer = 0,
                                    void this.requestRoadsReq(this._curIndex)) : void (this.timer += t)
                        }
                        ,
                        e.prototype.updateSingleTable = function (t) {
                            null == t.target && (t.target = this),
                                this.scrollList.updateSingleData(t, {
                                    tableId: t.tableId
                                })
                        }
                        ,
                        e.prototype.updateRoomList = function () {
                            if (cc.isValid(this.node) && this.node.active && this.scrollList) {
                                var t = this.getRoomList();
                                1 == t.length ? this.scrollList.updateSingleData(t, {
                                    tableId: t[0][0].tableId
                                }) : (this.scrollList.loadDataComplete ? this.scrollList.updateData(t) : this.scrollList.loadData(t),
                                    this.hadShow = !0)
                            }
                        }
                        ,
                        e.prototype.requestRoadsReq = function (t, e) {
                            c.adbh_ctrl.hallRoadsReq(t, e)
                        }
                        ,
                        e.prototype.show = function () {
                            this.hadShow = !1,
                                this.requestRoadsReq(),
                                this.addScrollList(),
                                this.scheduleOnce(this.updateRoomList),
                                this.node.active = !0
                        }
                        ,
                        e.prototype.hide = function () {
                            null != this.scrollView && this.scrollView.scrollToTop(),
                                this.hadShow = !1,
                                this.node.active = !1
                        }
                        ,
                        e.prototype.getRoomList = function (t) {
                            var e = c.adbh_ctrl.model.roomList;
                            if (!e || 0 == e.length || -1 == this._curIndex)
                                return [];
                            if (t)
                                return e;
                            var o = [];
                            return this.setRoomList(e, o),
                                o
                        }
                        ,
                        e.prototype.setRoomList = function (t, e) {
                            var o = -1;
                            t.sort(function (t, e) {
                                return t.tableId - e.tableId
                            });
                            for (var i = 0, n = l.ADBH_G.pbTool.getCls("com_protocol.EGameShowStatus").values, r = 0, a = t; r < a.length; r++) {
                                var s = a[r];
                                if (s.roomLevel == this._curIndex) {
                                    if (s.roomStatus == n.EShowStatusHide)
                                        continue;
                                    (c.adbh_ctrl.res.isLandscape() && i % 2 == 0 || !c.adbh_ctrl.res.isLandscape()) && (e.push([]),
                                        o += 1),
                                        null == s.target && (s.target = this),
                                        e[o].push(s),
                                        i += 1
                                }
                            }
                        }
                        ,
                        e.prototype.addScrollList = function () {
                            return a(this, void 0, void 0, function () {
                                var t, e;
                                return s(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            if (null != this.scrollList)
                                                return [2];
                                            for (t in l.ADBH_ROOM_LEVEL_TO_NAME)
                                                l.ADBH_ROOM_LEVEL_TO_NAME[t].roomName = cc.i18n.t(l.ADBH_ROOM_LEVEL_TO_NAME[t].keyName);
                                            return this.node.getChildByName("select_list").addComponent("SelectTableListLadbhi").init(this, l.ADBH_ROOM_LEVEL_TO_NAME, Number(c.adbh_ctrl.model.gameRoomLevel)),
                                                [4, l.ADBH_G.gameHelper.getGamePrefab("item/ADBHChangeTableCell")];
                                        case 1:
                                            return e = o.sent(),
                                                this.scrollView = this.node.getChildByName("scroll_list").getComponent(cc.ScrollView),
                                                this.scrollList = this.scrollView.node.addComponent("ScrollList"),
                                                this.scrollList.paddingY = 15,
                                                this.scrollList.itemPrefab = e,
                                                this.scrollView.inertia = !1,
                                                [2]
                                    }
                                })
                            })
                        }
                        ,
                        e.prototype.showSelect = function (t) {
                            console.log("\u9009\u684c\u7d22\u5f15 ", t),
                                this._curIndex = t,
                                this.requestRoadsReq(this._curIndex),
                                this.scheduleOnce(this.updateRoomList),
                                c.adbh_ctrl.ReqGoodTrend(),
                                l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATA_GOOD_TREND_TYPE)
                        }
                        ,
                        e.prototype.checkChangeGame = function (t) {
                            this.changeFlag && (c.adbh_ctrl.selectRoom.changeGameGo(t.gameType, t.tableId, t.roomLevel, t.needGold, t.roomId),
                                this.changeFlag = !1)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            l.ADBH_G.event.targetOff(this)
                        }
                        ,
                        r([_], e)
                }(cc.Component));
        o.default = p,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController"
    }],
    ADBHChipBox: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "d3115u8mqdGxZeoksovFVux", "ADBHChipBox");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHAudio")
            , s = t("../ADBHConfig")
            , l = t("../ADBHController")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._chipButtons = [],
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._initChipButtons(),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RESET_GAME_SCENE, this._onResetGameScene, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RECONNECT, this._refreshChipEnable, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, this._refreshChipEnable, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.UPDATE_SELF_GOLD, this._refreshChipEnable, this),
                                s.ADBH_G.event.on("update_chips", this._updateChips, this)
                        }
                        ,
                        e.prototype.start = function () {
                            this._refreshChipEnable(),
                                this._selectChip(0)
                        }
                        ,
                        e.prototype._onResetGameScene = function () {
                            this._initChipButtons(),
                                this._refreshChipEnable()
                        }
                        ,
                        e.prototype._updateBetButton = function () {
                            this._initChipButtons(),
                                this._refreshChipEnable()
                        }
                        ,
                        e.prototype._updateChips = function (t) {
                            l.adbh_ctrl.model.setChipConfig(t),
                                this._updateBetButton()
                        }
                        ,
                        e.prototype._initChipButtons = function () {
                            for (var t = this.node, e = {
                                ctrl: l.adbh_ctrl,
                                effects: s.ADBH_CHIP_EFFECT,
                                tips: s.ADBH_TIPS,
                                rectCnt: l.adbh_ctrl.getModel().getRectChipCount(),
                                chipBg: t
                            }, o = 0; o < s.ADBH_BTN_CHIP_COUNT; o++) {
                                var i = t.getChildByName("chip_" + o);
                                i.getComponent("ChipButton") || i.addComponent("ChipButton"),
                                    this._chipButtons[o] = i.getComponent("ChipButton");
                                var n = this._chipButtons[o];
                                n.context = e,
                                    n.index = o,
                                    n.onChecked = this._onClickChipBtn.bind(this),
                                    n.checked = !1,
                                    this._setChipSize(n)
                            }
                            this._adjustChipLayout()
                        }
                        ,
                        e.prototype._getTotalWidth = function () {
                            for (var t = 0, e = this.node, o = 0; o < s.ADBH_BTN_CHIP_COUNT; o++)
                                t += e.getChildByName("chip_" + o).width;
                            return t
                        }
                        ,
                        e.prototype._adjustChipLayout = function () {
                            var t = this.node
                                , e = (t.width - this._getTotalWidth()) / 4
                                , o = t.getComponent(cc.Layout);
                            o.enabled = !0,
                                o.paddingLeft = 0,
                                o.paddingRight = 0,
                                o.spacingX = e,
                                o.updateLayout(),
                                o.enabled = !1
                        }
                        ,
                        e.prototype._setChipSize = function (t) {
                            t.btnData.isCircle ? (t.node.width = 120,
                                t.node.height = 120) : (t.node.width = 120 / 110 * 153,
                                    t.node.height = 120)
                        }
                        ,
                        e.prototype._onClickChipBtn = function (t) {
                            a.default.clickChipButton(),
                                this._selectChip(t.index)
                        }
                        ,
                        e.prototype._selectChip = function (t) {
                            l.adbh_ctrl.model.currentBetIndex = -1;
                            for (var e = 0, o = this._chipButtons; e < o.length; e++)
                                o[e].checked = !1;
                            this._canSelect(t) && (l.adbh_ctrl.model.currentBetIndex = t,
                                this._chipButtons[t].checked = !0)
                        }
                        ,
                        e.prototype._refreshChipEnable = function () {
                            for (var t = 0; t < this._chipButtons.length; t++) {
                                var e = this._canSelect(t);
                                e || (this._chipButtons[t].checked = !1),
                                    this._chipButtons[t].chipColor = e
                            }
                            if (l.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Bet) {
                                var o = this._getMaxCanSelectIndex()
                                    , i = l.adbh_ctrl.model.currentBetIndex;
                                l.adbh_ctrl.model.currentBetIndex > o ? i = o : l.adbh_ctrl.model.currentBetIndex < 0 && (i = 0),
                                    this._chipButtons[i] && (this._chipButtons[i].checked ? l.adbh_ctrl.model.currentBetIndex = i : this._selectChip(i))
                            }
                        }
                        ,
                        e.prototype._canSelect = function (t) {
                            return this._chipButtons[t] && l.adbh_ctrl.model.getUserGold() >= this._chipButtons[t].btnData.chipValue && l.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Bet
                        }
                        ,
                        e.prototype._getMaxCanSelectIndex = function () {
                            for (var t = -1, e = this._chipButtons.length - 1; e >= 0; e--)
                                if (this._canSelect(e)) {
                                    t = e;
                                    break
                                }
                            return t
                        }
                        ,
                        e.prototype.getBtnNode = function (t) {
                            return this._chipButtons[t] ? this._chipButtons[t].node : null
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHChipEvent: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "3be93Dte5hP5ZgYXmc//lST", "ADBHChipEvent"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.default = {
                SHAKE_HPK_PLAYER: "SHAKE_HPK_PLAYER",
                hide_self_bet: "hide_self_bet",
                self_gold_award: "self_gold_award",
                hide_high_light: "hide_high_light"
            },
            cc._RF.pop()
    }
        , {}],
    ADBHChipMgr: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "57121vVLIxOQp9rQTEq0McK", "ADBHChipMgr");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHController")
            , s = t("../ADBHConfig")
            , l = t("../ADBHAudio")
            , c = t("../chip/ADBHChipMove")
            , h = t("./ADBHChipEvent")
            , _ = "0"
            , p = function () { }
            , d = cc._decorator
            , u = d.ccclass
            , f = (d.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._settle_code = _,
                            e._betList = {},
                            e._areaComps = [],
                            e._chip_layer = null,
                            e._collectNode = null,
                            e._ctrl = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.initConfigs = function (t, e, o, i) {
                            this._areaComps = t,
                                this._chip_layer = e,
                                this._collectNode = o,
                                this._ctrl = i
                        }
                        ,
                        e.prototype.getSettleCode = function () {
                            return this._settle_code
                        }
                        ,
                        e.prototype._getAreaComp = function (t) {
                            return this._areaComps[t]
                        }
                        ,
                        e.prototype._setChipAreaId = function (t, e) {
                            t._area_id_ = e
                        }
                        ,
                        e.prototype._getChipAreaId = function (t) {
                            return t._area_id_
                        }
                        ,
                        e.prototype._setChipOwner = function (t, e) {
                            t._owner_uid = e
                        }
                        ,
                        e.prototype._getChipOwner = function (t) {
                            return t._owner_uid
                        }
                        ,
                        e.prototype.initChips = function () {
                            var t = this._ctrl.model.gameStatus;
                            if (t == s.ADBH_STATUS.Bet || t == s.ADBH_STATUS.OpenCard) {
                                console.log("\u521d\u59cb\u5316\u684c\u9762\u7b79\u7801");
                                var e = this._parseDeskChips()
                                    , o = this._ctrl.getMorePlayerButton().convertToWorldSpaceAR(cc.v2(0, 0));
                                t == s.ADBH_STATUS.OpenCard && (o = null);
                                for (var i = 0; i <= s.ADBH_MAX_AREA_ID; i++) {
                                    var n = e[i] && e[i].meBet || 0
                                        , r = this._ctrl.model.getAreaData(i);
                                    if (r.meBet != n)
                                        console.log("\u91cd\u7f6e\u8be5\u533a\u57df\u7b79\u7801: ", i),
                                            this._reasetAreaChips(i, e);
                                    else {
                                        var a = e[i] && e[i].totalBet || 0
                                            , l = r.totalBet - a;
                                        l > 0 ? (console.log("\u8865\u5145\u8be5\u533a\u57df\u7b79\u7801: ", i, "  ", r.totalBet, "-", a, " = ", l),
                                            this._playChipBet("more_player", l, i, o)) : l < 0 && r.totalBet <= 0 && (console.log("\u91cd\u7f6e\u8be5\u533a\u57df\u7b79\u7801: ", i, "  ", r.totalBet, "-", a, " = ", l),
                                                this._reasetAreaChips(i, e))
                                    }
                                }
                                t == s.ADBH_STATUS.OpenCard && this._flushBetList(!1)
                            } else
                                this.clearChip()
                        }
                        ,
                        e.prototype._reasetAreaChips = function (t, e) {
                            for (var o = s.ADBH_G.user.getUserId(), i = this._ctrl.model.getAreaData(t), n = 0, r = e[t].chips; n < r.length; n++) {
                                var a = r[n];
                                this._ctrl.chipPool.destroyChip(a)
                            }
                            e[t].chips = null,
                                this._playChipBet(o, i.meBet, t, null),
                                this._playChipBet("more_player", i.othersBet(), t, null)
                        }
                        ,
                        e.prototype._parseDeskChips = function () {
                            for (var t = [], e = 0; e <= s.ADBH_MAX_AREA_ID; e++)
                                t[e] = {
                                    meBet: 0,
                                    totalBet: 0,
                                    chips: []
                                };
                            for (var o = this._chip_layer.children, i = s.ADBH_G.user.getUserId(), n = o.length - 1; n >= 0; n--) {
                                var r = o[n]
                                    , a = this._getChipAreaId(r)
                                    , l = this._getChipOwner(r);
                                t[a].totalBet += this._ctrl.chipPool.getChipValue(r),
                                    t[a].chips.push(r),
                                    l == i && (t[a].meBet += this._ctrl.chipPool.getChipValue(r))
                            }
                            return t
                        }
                        ,
                        e.prototype.clearChip = function () {
                            console.log("\u6e05\u7406\u684c\u9762\u7b79\u7801"),
                                this._betList = {};
                            for (var t = this._chip_layer.children, e = t.length - 1; e >= 0; e--)
                                this._ctrl.chipPool.destroyChip(t[e])
                        }
                        ,
                        e.prototype._quickFind = function (t, e, o) {
                            if (t <= .001)
                                return [];
                            var i = 0;
                            if (this._betList[e])
                                for (var n = this._betList[e].length - 1; n >= 0; n--)
                                    if (this._betList[e][n].areaId == e && this._betList[e][n].sender == o && (i += this._ctrl.model.chipConfig[this._betList[e][n].chipSeq].chipValue,
                                        this._betList[e].splice(n, 1),
                                        Math.abs(i - t) <= .01))
                                        return;
                            for (var r = [], a = this._chip_layer.children, s = a.length - 1; s >= 0; s--) {
                                var l = a[s];
                                if (this._getChipAreaId(l) == e && this._getChipOwner(l) == o && (i += this._ctrl.chipPool.getChipValue(l),
                                    r.push(l),
                                    Math.abs(i - t) <= .01))
                                    break
                            }
                            return r
                        }
                        ,
                        e.prototype._getNumList = function (t) {
                            if (t <= .001)
                                return [];
                            for (var e = [], o = 0, i = this._ctrl.chipPool.splitChips(t); o < i.length; o++)
                                for (var n = i[o], r = 0; r < n.count; r++) {
                                    var a = this._ctrl.model.getChipValueByChipSeq(n.chipSeq);
                                    a > 0 && e.push(a)
                                }
                            return e
                        }
                        ,
                        e.prototype._findInBetList = function (t, e) {
                            if (t <= .001)
                                return 0;
                            var o = s.ADBH_G.user.getUserId();
                            if (this._betList[e])
                                for (var i = this._betList[e].length - 1; i >= 0; i--)
                                    if (this._betList[e][i].areaId == e && this._betList[e][i].sender != o) {
                                        var n = this._ctrl.model.chipConfig[this._betList[e][i].chipSeq].chipValue;
                                        if (t - n >= -1e-4 && (t -= n,
                                            this._betList[e].splice(i, 1),
                                            t <= .001))
                                            return 0
                                    }
                            return t
                        }
                        ,
                        e.prototype._findInNodes = function (t, e) {
                            for (var o = [], i = s.ADBH_G.user.getUserId(), n = this._chip_layer.children, r = n.length - 1; r >= 0; r--) {
                                var a = n[r];
                                if (this._getChipAreaId(a) == e && this._getChipOwner(a) != i) {
                                    var l = this._ctrl.chipPool.getChipValue(a);
                                    if (t - l >= 0 && (t -= l,
                                        o.push(a),
                                        t <= .001))
                                        return o
                                }
                            }
                            return o
                        }
                        ,
                        e.prototype._slowFind = function (t, e) {
                            if ((t = this._findInBetList(t, e)) <= .001)
                                return [];
                            for (var o = s.ADBH_G.user.getUserId(), i = this._getNumList(t), n = [], r = this._chip_layer.children, a = r.length - 1; a >= 0; a--) {
                                var l = r[a];
                                if (this._getChipAreaId(l) == e && this._getChipOwner(l) != o) {
                                    var c = this._ctrl.chipPool.getChipValue(l);
                                    if (c == t)
                                        return [l];
                                    var h = i.indexOf(c);
                                    if (h >= 0 && (n.push(l),
                                        i.splice(h, 1),
                                        i.length <= 0))
                                        return n
                                }
                            }
                            return this._findInNodes(t, e)
                        }
                        ,
                        e.prototype._findChips = function (t, e, o) {
                            if (t <= .001)
                                return [];
                            if (o == s.ADBH_G.user.getUserId() || o && "more_player" != o) {
                                var i = this._quickFind(t, e, o);
                                if (i.length > 0)
                                    return i
                            }
                            return this._slowFind(t, e)
                        }
                        ,
                        e.prototype.flychipMorePlayerBet = function (t) {
                            for (var e = 0, o = 1, i = t.length; o < i; o++) {
                                var n = t[o];
                                if (!n || n <= 0) {
                                    if (n < 0) {
                                        var r = this._findChips(-n, o, "more_player");
                                        if (r && r.length > 0)
                                            for (var a = 0, s = r; a < s.length; a++) {
                                                var l = s[a];
                                                this._ctrl.chipPool.destroyChip(l)
                                            }
                                    }
                                } else {
                                    var c = this._ctrl.getMorePlayerButton().convertToWorldSpaceAR(cc.v2(0, 0));
                                    e += this._playChipBet("more_player", n, o, c)
                                }
                            }
                            return e
                        }
                        ,
                        e.prototype.flychipHourPKBet = function (t) {
                            if (t.isCancel)
                                for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                    var i = o[e];
                                    a.adbh_ctrl.isFollowUser(t.username) && this._getAreaComp(i.areaId).lightStar(!1, !1)
                                }
                            else
                                for (var n = 0, r = t.areaBet; n < r.length; n++)
                                    i = r[n],
                                        t.isStar && (console.log("light star: ", t.username),
                                            this._getAreaComp(i.areaId).lightStar(!0, !0, this._ctrl.getHourPKPlayerPos(t.username)))
                        }
                        ,
                        e.prototype.flychipMeBet = function (t) {
                            for (var e = s.ADBH_G.user.getUserId(), o = 0, i = t.areaBet; o < i.length; o++) {
                                var n = i[o]
                                    , r = this._ctrl.getChipBtn(this._ctrl.model.getChipIdxByValue(n.betValue))
                                    , a = this._playChipBet(e, n.betValue, n.areaId, r.convertToWorldSpaceAR(cc.v2(0, 0)), !0);
                                l.default.playChipBet(a)
                            }
                        }
                        ,
                        e.prototype.flychipCancelBet = function (t) {
                            for (var e = s.ADBH_G.user.getUserId(), o = 0, i = t.areaBet; o < i.length; o++) {
                                var n = i[o]
                                    , r = this._findChips(n.betValue, n.areaId, e);
                                if (r && r.length > 0)
                                    for (var a = 0, l = r; a < l.length; a++) {
                                        var h = l[a]
                                            , _ = this._ctrl.getMyHeadNode().convertToWorldSpaceAR(cc.v2(0, 0));
                                        _ = this._chip_layer.convertToNodeSpaceAR(_),
                                            h.getComponent(c.default).cancelBetMove(_)
                                    }
                                else
                                    console.log("\u4e2a\u4eba\u64a4\u9500\u4e0b\u6ce8\u65f6\u67e5\u627e\u7b79\u7801\u5931\u8d25 ", n.betValue)
                            }
                        }
                        ,
                        e.prototype._creatChip = function (t, e, o) {
                            var i = this._ctrl.chipPool.createChip(t);
                            return this._chip_layer.addChild(i),
                                this._setChipAreaId(i, e),
                                this._setChipOwner(i, o),
                                i
                        }
                        ,
                        e.prototype.update = function () {
                            if (!(this._ctrl.model.gameStatus > s.ADBH_STATUS.OpenCard)) {
                                var t = this._ctrl.model.gameStatus >= s.ADBH_STATUS.OpenCard ? 64 : 2;
                                for (var e in this._betList) {
                                    var o = this._betList[e];
                                    if (o && !(o.length <= 0)) {
                                        var i = o.splice(0, Math.min(t, o.length));
                                        if (i)
                                            for (var n = 0, r = i; n < r.length; n++) {
                                                var a = r[n];
                                                this._creatChip(a.chipSeq, a.areaId, a.sender).getComponent(c.default).betMove(a.toPos, a.fromVec2, 0, a.fromScale)
                                            }
                                    }
                                }
                            }
                        }
                        ,
                        e.prototype._flushBetList = function (t) {
                            var e = this._betList;
                            for (var o in this._betList = {},
                                e)
                                for (var i = e[o], n = Math.min(60, i.length), r = 0; r < n; r++) {
                                    var a = i[r];
                                    this._creatChip(a.chipSeq, a.areaId, a.sender).getComponent(c.default).betMove(a.toPos, t && a.fromVec2 || null, 0, a.fromScale)
                                }
                        }
                        ,
                        e.prototype._playChipBet = function (t, e, o, i, n) {
                            if (void 0 === n && (n = !1),
                                !(e <= 0)) {
                                var r = s.ADBH_G.user.getUserId()
                                    , a = 0
                                    , l = this._ctrl.chipPool.splitChips(e)
                                    , h = t == r ? 1.8 : 1.5;
                                this._betList[o] = this._betList[o] || [];
                                for (var _ = 0, d = l; _ < d.length; _++) {
                                    var u = d[_]
                                        , f = this._ctrl.model.getChipInfoByChipSeq(u.chipSeq);
                                    f.isCircle || t != r || (h = 1.78);
                                    for (var A = Math.min(40, u.count), g = 0; g < A; g++) {
                                        var m = this._getAreaComp(o).node.convertToWorldSpaceAR(cc.v2(0, 0));
                                        m = this._chip_layer.convertToNodeSpaceAR(m),
                                            m = this._getAreaComp(o).getFixedRandomPos(m, u.chipSeq);
                                        var y = new p;
                                        y.chipSeq = u.chipSeq,
                                            y.areaId = o,
                                            y.sender = t,
                                            y.toPos = m,
                                            n && (i = this._ctrl.getChipBtn(this._ctrl.model.getChipIdxByValue(f.chipValue)).convertToWorldSpaceAR(cc.v2(0, 0))),
                                            y.fromVec2 = i,
                                            y.fromScale = h,
                                            t == r ? this._creatChip(y.chipSeq, y.areaId, y.sender).getComponent(c.default).betMove(y.toPos, y.fromVec2, 0, y.fromScale) : this._betList[o].push(y),
                                            a++
                                    }
                                }
                                return a
                            }
                        }
                        ,
                        e.prototype.onStatusSwitch = function () {
                            this._ctrl.model.gameStatus == s.ADBH_STATUS.Start ? (this._settle_code = _,
                                this.stopPlaySettle(),
                                this.clearChip()) : this._ctrl.model.gameStatus == s.ADBH_STATUS.Bet ? this._settle_code = _ : this._ctrl.model.gameStatus == s.ADBH_STATUS.OpenCard && (this._settle_code = _,
                                    this._flushBetList(!0))
                        }
                        ,
                        e.prototype.playSettle = function (t) {
                            this._flushBetList(!1),
                                this._settle_code = this._ctrl.model.paijuhao,
                                this._playCollectChips(t)
                        }
                        ,
                        e.prototype.stopPlaySettle = function () {
                            this.unscheduleAllCallbacks()
                        }
                        ,
                        e.prototype._playCollectChips = function (t) {
                            var e = this
                                , o = t && t.areaInfo;
                            if (o) {
                                for (var i = {}, n = 0, r = o; n < r.length; n++) {
                                    var a = r[n];
                                    i[a.areaId] = a.bWinLose
                                }
                                var s = 0;
                                s += this._collectToBanker(i),
                                    this.scheduleOnce(function () {
                                        e._collectToWinAreas(i)
                                    }, s),
                                    s += .8,
                                    this.scheduleOnce(function () {
                                        e._collectToPlayers(i)
                                    }, s)
                            }
                        }
                        ,
                        e.prototype._collectToBanker = function (t) {
                            for (var e = {}, o = !1, i = this._chip_layer.children.length - 1; i >= 0; i--) {
                                var n = this._chip_layer.children[i]
                                    , r = this._getChipAreaId(n);
                                if (!t[r])
                                    if (o = !0,
                                        e[r] = e[r] || 0,
                                        e[r]++,
                                        e[r] < 64) {
                                        var a = Math.random() < .5 ? .15 * Math.random() : .15 * Math.random() + .12;
                                        n.getComponent(c.default).collectToPlayer(cc.v2(this._collectNode.x, this._collectNode.y), a)
                                    } else
                                        this._ctrl.chipPool.destroyChip(n)
                            }
                            return o && (l.default.playCollectChip(),
                                this._playHideSelfBet()),
                                o ? 1.1 : .03
                        }
                        ,
                        e.prototype._collectToWinAreas = function (t) {
                            var e = {}
                                , o = !1
                                , i = this._collectNode.convertToWorldSpaceAR(cc.v2(0, 0));
                            i = this._chip_layer.convertToNodeSpaceAR(i);
                            for (var n = this._chip_layer.children.length - 1; n >= 0; n--) {
                                var r = this._chip_layer.children[n]
                                    , a = this._getChipAreaId(r);
                                if (t[a] && (o = !0,
                                    e[a] = e[a] || 0,
                                    e[a]++,
                                    e[a] < 64)) {
                                    var s = this._getAreaComp(a).node.convertToWorldSpaceAR(cc.v2(0, 0));
                                    s = this._chip_layer.convertToNodeSpaceAR(s),
                                        s = this._getAreaComp(a).getRandomPos(s),
                                        this._creatChip(this._ctrl.chipPool.getChipSeq(r), a, this._getChipOwner(r)).getComponent(c.default).collectToWinAreas(s, i, Math.random() / 5)
                                }
                            }
                            o && (this._playHideSelfBet(),
                                l.default.playCollectChip())
                        }
                        ,
                        e.prototype._collectToPlayers = function (t) {
                            for (var e = this, o = !1, i = !1, n = {}, r = s.ADBH_G.user.getUserId(), a = s.ADBH_MIN_AREA_ID; a <= s.ADBH_MAX_AREA_ID; a++)
                                if (t[a])
                                    for (var h = this._ctrl.model.getMyWinValue(), _ = this._ctrl.model.getAreaData(a), p = this._chip_layer.children.length - 1; p >= 0; p--) {
                                        var d = this._chip_layer.children[p];
                                        if (this._getChipAreaId(d) == a) {
                                            var u = void 0;
                                            if (h > 0 && _.meBet > 0 && this._getChipOwner(d) == r)
                                                u = this._ctrl.getMyHeadNode().convertToWorldSpaceAR(cc.v2(0, 0)),
                                                    i = !0;
                                            else if (u = this._ctrl.getMorePlayerButton().convertToWorldSpaceAR(cc.v2(0, 0)),
                                                o = !0,
                                                n[a] = n[a] || 0,
                                                n[a]++,
                                                n[a] > 100) {
                                                this._ctrl.chipPool.destroyChip(d);
                                                continue
                                            }
                                            u = this._chip_layer.convertToNodeSpaceAR(u);
                                            var f = Math.random() < .5 ? .2 * Math.random() : .25 * Math.random() + .16;
                                            d.getComponent(c.default).collectToPlayer(u, f)
                                        }
                                    }
                            o && this._ctrl.getMorePlayerButton().runAction(cc.sequence(cc.delayTime(.3), cc.scaleTo(.15, 1.2), cc.scaleTo(.2, 1))),
                                (o || i) && l.default.playGainChip(),
                                this._playHideSelfBet(),
                                this.scheduleOnce(function () {
                                    e._playSelfGoldAward(),
                                        e._playHideHighlight()
                                }, .4)
                        }
                        ,
                        e.prototype._playHideSelfBet = function () {
                            s.ADBH_G.event.emit(h.default.hide_self_bet)
                        }
                        ,
                        e.prototype._playSelfGoldAward = function () {
                            s.ADBH_G.event.emit(h.default.self_gold_award)
                        }
                        ,
                        e.prototype._playHideHighlight = function () {
                            s.ADBH_G.event.emit(h.default.hide_high_light)
                        }
                        ,
                        r([u], e)
                }(cc.Component));
        o.default = f,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "../chip/ADBHChipMove": "ADBHChipMove",
        "./ADBHChipEvent": "ADBHChipEvent"
    }],
    ADBHChipMove: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "67f09GZYEdGY5U/pnwsMQsC", "ADBHChipMove");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHController")
            , s = cc._decorator
            , l = s.ccclass
            , c = (s.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._toPos = cc.v2(0, 0),
                            e
                    }
                    return n(e, t),
                        e.prototype.cancelBetMove = function (t) {
                            this._toPos.x = t.x,
                                this._toPos.y = t.y;
                            var e = this.node;
                            e.stopAllActions(),
                                e.runAction(cc.sequence(cc.moveTo(.26, t), cc.callFunc(function () {
                                    a.adbh_ctrl.chipPool.destroyChip(this)
                                }
                                    .bind(e))))
                        }
                        ,
                        e.prototype.betMove = function (t, e, o, i) {
                            this._toPos.x = t.x,
                                this._toPos.y = t.y;
                            var n = this.node;
                            if (n.stopAllActions(),
                                !e)
                                return n.x = t.x,
                                    n.y = t.y,
                                    void (n.angle = Math.floor(30 * Math.random() - 15));
                            var r = n.parent.convertToNodeSpaceAR(e);
                            n.x = r.x,
                                n.y = r.y,
                                n.scale = i;
                            var a, s = .3 * Math.sqrt(this.getDotDistance(r, t) / 800), l = .65 * s, c = .3 * s, h = r.add(t.mul(3)).divSelf(4), _ = h.add(t.mul(3)).divSelf(4), p = Math.random();
                            a = (a = p > .6 ? 0 : p > .3 ? -15 : 15) * (p > .5 ? -1 : 1) + 10 * p;
                            var d = cc.sequence(cc.hide(), cc.delayTime(o || 0), cc.show(), cc.delayTime(.02), cc.spawn(cc.moveTo(l, h), cc.scaleTo(l - .05, 1)), cc.moveTo(c, _), cc.spawn(cc.moveTo(.12, t), cc.rotateTo(.12 + .05, a)));
                            n.runAction(d)
                        }
                        ,
                        e.prototype.collectToWinAreas = function (t, e, o) {
                            this._toPos.x = t.x,
                                this._toPos.y = t.y;
                            var i = this.node;
                            i.stopAllActions(),
                                i.x = e.x,
                                i.y = e.y,
                                i.scale = .6,
                                i.runAction(cc.sequence(cc.delayTime(o), cc.spawn(cc.moveTo(.2, t), cc.scaleTo(.2, 1, 1), cc.rotateTo(.2, Math.floor(30 * Math.random() - 15)))))
                        }
                        ,
                        e.prototype.collectToPlayer = function (t, e) {
                            this._toPos.x = t.x,
                                this._toPos.y = t.y;
                            var o = cc.v2(this.node.x, this.node.y)
                                , i = this.node;
                            i.stopAllActions(),
                                i.scale = 1;
                            var n = .3 * Math.sqrt(this.getDotDistance(o, t) / 800)
                                , r = t.sub(o).normalize().mul(-30).add(o)
                                , s = cc.sequence(cc.delayTime(e), cc.spawn(cc.scaleTo(.25, 1.1, 1.1), cc.moveTo(.25, r)), cc.delayTime(.05), cc.spawn(cc.moveTo(n, t), cc.scaleTo(n, .6)), cc.callFunc(function () {
                                    a.adbh_ctrl.chipPool.destroyChip(this)
                                }
                                    .bind(i)));
                            i.runAction(s)
                        }
                        ,
                        e.prototype.stopMove = function () {
                            this._toPos && (this.node.stopAllActions(),
                                this.node.x = this._toPos.x,
                                this.node.y = this._toPos.y)
                        }
                        ,
                        e.prototype.getDotDistance = function (t, e) {
                            return t = t || new cc.Vec2,
                                e = e || new cc.Vec2,
                                Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
                        }
                        ,
                        r([l], e)
                }(cc.Component));
        o.default = c,
            cc._RF.pop()
    }
        , {
        "../ADBHController": "ADBHController"
    }],
    ADBHChipPool: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "0bbcdo98qxA5LCRD4zlV+KT", "ADBHChipPool");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHController")
            , l = t("./ADBHChipMove")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._pools = [],
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            for (var t = 0; t < 20; t++)
                                this._pools[t] = new cc.NodePool
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            for (var t = 0, e = this._pools; t < e.length; t++)
                                e[t].clear();
                            this._pools.length = 0
                        }
                        ,
                        e.prototype.destroyChip = function (t) {
                            var e = t.getComponent("ChipBase");
                            if (e) {
                                t.stopAllActions();
                                var o = e.index;
                                o > this._pools.length - 1 || this._pools[o].put(t)
                            } else
                                t.destroy()
                        }
                        ,
                        e.prototype.createChip = function (t) {
                            var e = null;
                            this._pools[t].size() > 0 ? (e = this._pools[t].get()).stopAllActions() : ((e = cc.instantiate(s.adbh_ctrl.res.chipPre)).children[0].scale = a.ADBH_CHIP_SPR_SCALE,
                                e.addComponent("ChipBase"),
                                e.addComponent(l.default)),
                                0 == e.opacity && (e.opacity = 255);
                            var o = e.getComponent("ChipBase");
                            return o.ctrl = s.adbh_ctrl,
                                o.index = t,
                                o.active = !0,
                                e.scale = 1,
                                e.angle = 0,
                                e
                        }
                        ,
                        e.prototype.getChipValue = function (t) {
                            var e = t.getComponent("ChipBase");
                            return s.adbh_ctrl.model.getChipInfoByChipSeq(e.index).chipValue
                        }
                        ,
                        e.prototype.getChipSeq = function (t) {
                            return t.getComponent("ChipBase").index
                        }
                        ,
                        e.prototype.splitChips = function (t) {
                            for (var e = t, o = s.adbh_ctrl.model.chipSelectConfig, i = [], n = o.length - 1; n >= 0; n--) {
                                var r = o[n]
                                    , a = Math.floor(e / r.chipValue);
                                a > 0 && (i.push({
                                    chipSeq: r.chipSeq,
                                    count: a
                                }),
                                    e = Math.floor(e % r.chipValue))
                            }
                            return e > 0 && i.push({
                                chipSeq: 0,
                                count: 1
                            }),
                                i
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "./ADBHChipMove": "ADBHChipMove"
    }],
    ADBHCircleCD: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "db578vAePNKcYr6J8WcfX0L", "ADBHCircleCD");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHController")
            , l = cc._decorator
            , c = l.ccclass
            , h = l.property
            , _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.sprFrames = [],
                        e._running = !1,
                        e._remainSec = 0,
                        e._totalSec = 0,
                        e._progressBar = null,
                        e._barSpr = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        this._progressBar = this.getComponent(cc.ProgressBar),
                            this._barSpr = this.node.getChildByName("bar").getComponent(cc.Sprite),
                            a.ADBH_G.event.on(a.ADBH_EVENT.STATE_CD, this._onStateCd, this),
                            a.ADBH_G.event.on(a.ADBH_EVENT.ENTER_FRONT, this._onEnterFront, this),
                            this.setShow(!1)
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        a.ADBH_G.event.targetOff(this)
                    }
                    ,
                    e.prototype._onEnterFront = function (t) {
                        this.setRemainSec(this._remainSec - t / 1e3, null)
                    }
                    ,
                    e.prototype._onStateCd = function (t) {
                        if (s.adbh_ctrl.model.gameStatus == a.ADBH_STATUS.Bet) {
                            var e = t.msTotal ? Math.round(t.msTotal / 1e3) : 15;
                            this.setRemainSec(Math.round(t.msRemain / 1e3), e)
                        } else
                            this.setRemainSec(0, 0),
                                this.setShow(!1)
                    }
                    ,
                    e.prototype.setShow = function (t) {
                        t || (this._running = !1),
                            this.node.active = t
                    }
                    ,
                    e.prototype.setRemainSec = function (t, e) {
                        this._remainSec = t,
                            null != e && (this._totalSec = e),
                            this._remainSec < 0 ? (this._remainSec = 0,
                                this._progressBar.progress = 0) : this._progressBar.progress = this._totalSec > 0 ? this._remainSec / this._totalSec : 0,
                            this._running = this._remainSec > 0 && this._totalSec > 0,
                            this.node.active = this._running,
                            this._changeSpr()
                    }
                    ,
                    e.prototype._changeSpr = function () {
                        this._remainSec <= 5 ? this.sprFrames[0] && (this._barSpr.spriteFrame = this.sprFrames[0]) : this._remainSec < 10 ? this.sprFrames[1] && (this._barSpr.spriteFrame = this.sprFrames[1]) : this.sprFrames[2] && (this._barSpr.spriteFrame = this.sprFrames[2])
                    }
                    ,
                    e.prototype.update = function (t) {
                        this._running && this._remainSec > 0 && (this._remainSec -= t,
                            this._remainSec < 0 && (this._remainSec = 0,
                                this._running = !1,
                                this._progressBar.progress = 0),
                            this._progressBar.progress = this._remainSec / this._totalSec,
                            this._changeSpr())
                    }
                    ,
                    r([h(cc.SpriteFrame)], e.prototype, "sprFrames", void 0),
                    r([c], e)
            }(cc.Component);
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHClock: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "81888Qx7LZBLLR4/K1/3JhD", "ADBHClock");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHAudio")
            , s = t("../ADBHConfig")
            , l = t("../ADBHController")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._remainSec = 0,
                            e._lbCD = null,
                            e._tipAni = null,
                            e._zhizhen = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var t = this;
                            this._lbCD = this.node.getChildByName("lb_cd").getComponent(cc.Label),
                                this._zhizhen = this.node.getChildByName("clock_zhizhen"),
                                this._tipAni = this.node.getChildByName("daojishitongyong").getComponent(sp.Skeleton),
                                this._tipAni.setCompleteListener(function () {
                                    t._tipAni.node.active = !1
                                }),
                                this._tipAni.node.active = !1,
                                s.ADBH_G.event.on(s.ADBH_EVENT.STATE_CD, this._setRemainTime, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ENTER_FRONT, this._onEnterFront, this)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            s.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype._onEnterFront = function (t) {
                            this._remainSec = Math.round(this._remainSec - t / 1e3),
                                this._remainSec < 0 && (this._remainSec = 0),
                                this._tickUI(),
                                this._tipAni.node.active = !1
                        }
                        ,
                        e.prototype._setRemainTime = function (t) {
                            var e = Math.round(t.msRemain / 1e3);
                            if (e <= 0 && (e = 0),
                                this.unscheduleAllCallbacks(),
                                this._remainSec = e,
                                this._tickUI(),
                                this._remainSec > 0) {
                                var o = this;
                                this.schedule(function () {
                                    o._remainSec -= 1,
                                        o._tickUI(),
                                        o._tickAni()
                                }, 1, this._remainSec)
                            }
                        }
                        ,
                        e.prototype._tickUI = function () {
                            var t = this._remainSec >= 0 ? this._remainSec : 0;
                            this._lbCD.string = t.toString(),
                                this._showCdLabel(l.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Bet)
                        }
                        ,
                        e.prototype._tickAni = function () {
                            l.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Bet && this._remainSec <= 5 && this._remainSec >= -.01 ? (this._tipAni.node.active = !0,
                                this._tipAni.setAnimation(0, "animation", !1),
                                this._tipAni.setSkin("default"),
                                this._lbCD.node.runAction(cc.sequence(cc.scaleTo(.24, 1.2), cc.scaleTo(.16, 1))),
                                a.default.playCD()) : (this._tipAni.node.active = !1,
                                    this._lbCD.node.stopAllActions(),
                                    this._lbCD.node.scale = 1)
                        }
                        ,
                        e.prototype._showCdLabel = function (t) {
                            this._lbCD.node.active = t,
                                this._zhizhen.active = !t
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHConfig: [function (t, e, o) {
        "use strict";
        var i, n, r, a, s;
        cc._RF.push(e, "6dc4fK/3YBHFpoQPNMIaZ7p", "ADBHConfig"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ADBHChipBtnInfo = o.ChipShowInfo = o.ADBH_CHIP_ORIGINAL_INDEX = o.ADBH_CHIP_EFFECT = o.ADBH_CROUPIER_ANIM_NAME = o.getAreaIdByCardCnt = o.ADBH_AREATEXT = o.ADBH_PATH = o.ADBH_RESULT_COLOR = o.ADBH_AREA_CONFIG = o.ADBH_CARD_NAMES = o.ADBH_FS_EFFECT_COUNT = o.ADBH_CHIP_SPR_SCALE = o.ADBH_MAX_AREA_ID = o.ADBH_MIN_AREA_ID = o.ADBH_CARD_COUNT = o.ADBH_BTN_CHIP_COUNT = o.ADBH_TREND_GRID = o.GOOD_TREND_ICON_NAME = o.ADBH_ROOM_LEVEL_TO_NAME = o.ADBH_ROOM_LEVEL_NAME = o.ADBH_GAME_HALL2LEVEL_NAME = o.ADBH_GAME_LEVEL_NAME = o.EGameBothNameType = o.ADBH_STR = o.ADBH_STATUS = o.ADBH_EVENT = o.AnbaDefine = o.ADBH_ERROR = o.ADBH_roadTool = o.ADBH_FrameDTLoad = o.ADBH_TIPS = o.ADBH_G = void 0,
            o.ADBH_G = window.G,
            o.ADBH_TIPS = window.TIPS_WORD,
            o.ADBH_FrameDTLoad = window.FrameDTLoad,
            o.ADBH_roadTool = window.roadTool,
            o.ADBH_ERROR = window.ERROR_CODES;
        var l = function () {
            function t() { }
            return t.init = function () {
                o.ADBH_G = window.G,
                    o.ADBH_TIPS = window.TIPS_WORD,
                    o.ADBH_FrameDTLoad = new window.FrameDTLoad,
                    o.ADBH_roadTool = window.roadTool,
                    o.ADBH_ERROR = window.ERROR_CODES
            }
                ,
                t
        }();
        o.AnbaDefine = l,
            o.ADBH_EVENT = {
                BTNCLICKKEY: "adbh_click_limit",
                RESET_GAME_SCENE: "RESET_GAME_SCENE",
                RECONNECT: "RECONNECT",
                CHANGE_DESK: "CHANGE_DESK",
                PAI_JU_HAO: "adbh_PAI_JU_HAO",
                UpdatePlayerCount: "adbh_updatePlayerCount",
                UPDATE_SELF_GOLD: "update_self_gold",
                UPDATE_SELF_VIP: "UPDATE_SELF_VIP",
                STATE_CD: "STATE_CD",
                ENTER_FRONT: "ENTER_FRONT",
                ENTER_BACK: "ENTER_BACK",
                SLOT_CHASE: "SLOT_CHASE",
                ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY: "ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY",
                ANDARBARHAR_BET_NOTIFY: "ANDARBARHAR_BET_NOTIFY",
                ANDARBARHAR_BET_RSP: "ANDARBARHAR_BET_RSP",
                ANDARBARHAR_OPEN_CARD_NOTIFY: "ANDARBARHAR_OPEN_CARD_NOTIFY",
                ANDARBARHAR_SETTLE_NOTIFY: "ANDARBARHAR_SETTLE_NOTIFY",
                ANDARBARHAR_VIP_LIST_NOTIFY: "ANDARBARHAR_VIP_LIST_NOTIFY",
                ANDARBARHAR_GAME_BET_CANCEL_RSP: "ANDARBARHAR_GAME_BET_CANCEL_RSP",
                ANDARBARHAR_GAME_BET_REPEAT_RSP: "ANDARBARHAR_GAME_BET_REPEAT_RSP",
                ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY: "ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY",
                ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY: "ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY",
                ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY: "ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY",
                ANDARBARHAR_GAME_LAST_ROUND_NOTIFY: "ANDARBARHAR_GAME_LAST_ROUND_NOTIFY",
                ANDARBARHAR_RESTORE_GAME_RSP: "ANDARBARHAR_RESTORE_GAME_RSP",
                ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP: "ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP",
                UPDATE_BET_BTN: "update_bet_btn",
                HOURPK_BET: "HOURPK_BET",
                REWARD_CROUPIER: "REWARD_CROUPIER",
                CROUPIER_ANIM_WIN: "CROUPIER_ANIM_WIN",
                HEGUAN_SIDEWIN: "HEGUAN_SIDEWIN",
                CHECK_OPT_BTN: "CHECK_OPT_BTN",
                MONI_SHOW_CHANGETABLE: "MONI_SHOW_CHANGETABLE",
                GAME_CHANGE_TABLE: "game_change_table",
                UPDATE_GOOD_TREND: "update_good_trend",
                UPDATA_GOOD_TREND_TYPE: "updata_good_trend_type",
                UPDATE_TREND: "update_trend",
                MAX_DOWN_ROAD: "max_down_road",
                UPDATE_ROOM_LIST: "updata_room_list",
                UPDATE_ROOM_SINGLE: "update_room_single"
            },
            o.ADBH_STATUS = {
                Start: 10,
                Bet: 20,
                OpenCard: 30,
                Award: 40
            },
            o.ADBH_STR = ((i = {})["STATE_" + o.ADBH_STATUS.Start] = "adbh.jiesuanzhong",
                i["STATE_" + o.ADBH_STATUS.Bet] = "adbh.xiazhuzhong",
                i["STATE_" + o.ADBH_STATUS.OpenCard] = "adbh.kaipaizhong",
                i["STATE_" + o.ADBH_STATUS.Award] = "adbh.jiesuanzhong",
                i.ROOM_LEVEL_1 = "01",
                i.ROOM_LEVEL_2 = "02",
                i.ROOM_LEVEL_3 = "03",
                i.ROOM_LEVEL_4 = "04",
                i.ROOM_LEVEL_5 = "05",
                i.ROOM_LEVEL_6 = "06",
                i.ROOM_LEVEL_7 = "07",
                i.ROOM_LEVEL_99 = cc.i18n.t("hh.shiwan"),
                i),
            function (t) {
                t[t.EAndarBarharAndar = 120] = "EAndarBarharAndar",
                    t[t.EAndarBarharBarhar = 121] = "EAndarBarharBarhar"
            }(o.EGameBothNameType || (o.EGameBothNameType = {})),
            o.ADBH_GAME_LEVEL_NAME = {
                TI_YAN_GAME: "gamebase.tiyanting",
                YU_LE_GAME: "gamebase.yuleting",
                QI_JIAN_GAME: "gamebase.qijianting",
                FU_HAO_GAME: "gamebase.fuhaoting",
                ZHI_ZUN_GAME: "gamebase.zhizunting",
                TRY_GAME: "gamebase.shiwanting"
            },
            o.ADBH_GAME_HALL2LEVEL_NAME = {
                TI_YAN_GAME: "tiYanTing",
                YU_LE_GAME: "yuLeTing",
                QI_JIAN_GAME: "qiJianTing",
                FU_HAO_GAME: "fuHaoTing",
                ZHI_ZUN_GAME: "zhiZunTing"
            },
            o.ADBH_ROOM_LEVEL_NAME = {
                "01": {
                    roomName: o.ADBH_GAME_LEVEL_NAME.TI_YAN_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.TI_YAN_GAME
                },
                "02": {
                    roomName: o.ADBH_GAME_LEVEL_NAME.YU_LE_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.YU_LE_GAME
                },
                "03": {
                    roomName: o.ADBH_GAME_LEVEL_NAME.QI_JIAN_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.QI_JIAN_GAME
                },
                "04": {
                    roomName: o.ADBH_GAME_LEVEL_NAME.FU_HAO_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.FU_HAO_GAME
                },
                "05": {
                    roomName: o.ADBH_GAME_LEVEL_NAME.ZHI_ZUN_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.ZHI_ZUN_GAME
                },
                99: {
                    roomName: o.ADBH_GAME_LEVEL_NAME.TI_YAN_GAME,
                    gameHall2Name: o.ADBH_GAME_HALL2LEVEL_NAME.TI_YAN_GAME
                }
            },
            o.ADBH_ROOM_LEVEL_TO_NAME = ((n = {})[1] = {
                roomName: "",
                keyName: o.ADBH_GAME_LEVEL_NAME.TI_YAN_GAME
            },
                n[2] = {
                    roomName: "",
                    keyName: o.ADBH_GAME_LEVEL_NAME.YU_LE_GAME
                },
                n[3] = {
                    roomName: "",
                    keyName: o.ADBH_GAME_LEVEL_NAME.QI_JIAN_GAME
                },
                n[4] = {
                    roomName: "",
                    keyName: o.ADBH_GAME_LEVEL_NAME.FU_HAO_GAME
                },
                n[5] = {
                    roomName: "",
                    keyName: o.ADBH_GAME_LEVEL_NAME.ZHI_ZUN_GAME
                },
                n[99] = {
                    roomName: "",
                    keyName: o.ADBH_GAME_LEVEL_NAME.TI_YAN_GAME
                },
                n),
            o.GOOD_TREND_ICON_NAME = ((r = {})[0] = "",
                r[1] = "gamebase.dldt",
                r[2] = "gamebase.yiandarliangbahar",
                r[3] = "gamebase.yibaharliangandar",
                r[4] = "gamebase.changandar",
                r[5] = "gamebase.changbahar",
                r),
            o.ADBH_TREND_GRID = {
                beatRow: 3,
                beatCol: 10,
                bigRow: 6,
                bigCol: 10
            },
            o.ADBH_BTN_CHIP_COUNT = 5,
            o.ADBH_CARD_COUNT = 52,
            o.ADBH_MIN_AREA_ID = 1,
            o.ADBH_MAX_AREA_ID = 10,
            o.ADBH_CHIP_SPR_SCALE = .56,
            o.ADBH_FS_EFFECT_COUNT = 35,
            o.ADBH_CARD_NAMES = ["", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
            o.ADBH_AREA_CONFIG = [{
                ID: 0,
                rate: 0,
                name: ""
            }, {
                ID: 1,
                rate: .9,
                name: "Andar"
            }, {
                ID: 2,
                rate: 1,
                name: "Bahar"
            }, {
                ID: 3,
                rate: 2.5,
                name: "1-5"
            }, {
                ID: 4,
                rate: 3.5,
                name: "6-10"
            }, {
                ID: 5,
                rate: 4.5,
                name: "11-15"
            }, {
                ID: 6,
                rate: 5.5,
                name: "16-25"
            }, {
                ID: 7,
                rate: 14.5,
                name: "26-30"
            }, {
                ID: 8,
                rate: 24.5,
                name: "31-35"
            }, {
                ID: 9,
                rate: 49,
                name: "36-40"
            }, {
                ID: 10,
                rate: 119,
                name: "41-49"
            }],
            o.ADBH_RESULT_COLOR = [cc.color().fromHEX("#24C486"), cc.color().fromHEX("#3985EC"), cc.color().fromHEX("#fCB937"), cc.color().fromHEX("#EA4E3d"), cc.color().fromHEX("#EA4E3d")],
            o.ADBH_PATH = {
                game_trend: "trendSimple/ADBHTrendSimple",
                ADBHHis: "ADBHHis",
                ADBHChangeTable: "ADBHChangeTable"
            },
            o.ADBH_AREATEXT = {
                0: "",
                1: "Andar",
                2: "Bahar",
                3: "1-5",
                4: "6-10",
                5: "11-15",
                6: "16-25",
                7: "26-30",
                8: "31-35",
                9: "36-40",
                10: "41-49"
            },
            o.getAreaIdByCardCnt = function (t) {
                return t <= 0 ? -1 : t <= 5 ? 3 : t <= 10 ? 4 : t <= 15 ? 5 : t <= 25 ? 6 : t <= 30 ? 7 : t <= 35 ? 8 : t <= 40 ? 9 : 10
            }
            ,
            o.ADBH_CROUPIER_ANIM_NAME = {
                idle: "Idle",
                feiwen: "Dashang",
                fapai: "Fapai",
                andarwin: "Andar",
                baharwin: "Bahar",
                win: ""
            },
            o.ADBH_CHIP_EFFECT = ((a = {})[0] = "hulanse",
                a[1] = "lvse",
                a[2] = "huangse",
                a[3] = "lanse",
                a[4] = "hongse",
                a[5] = "lzs",
                a[6] = "heise",
                a[7] = "chouma_0",
                a[8] = "chouma_1",
                a[9] = "chouma_2",
                a[10] = "chouma_3",
                a),
            o.ADBH_CHIP_ORIGINAL_INDEX = ((s = {})[1] = {
                originalIndex: 0,
                garyIndex: 0
            },
                s[5] = {
                    originalIndex: 1,
                    garyIndex: 0
                },
                s[10] = {
                    originalIndex: 2,
                    garyIndex: 0
                },
                s[50] = {
                    originalIndex: 3,
                    garyIndex: 0
                },
                s[100] = {
                    originalIndex: 4,
                    garyIndex: 0
                },
                s[500] = {
                    originalIndex: 5,
                    garyIndex: 0
                },
                s[1e3] = {
                    originalIndex: 6,
                    garyIndex: 0
                },
                s[5e3] = {
                    originalIndex: 7,
                    garyIndex: 7
                },
                s[1e4] = {
                    originalIndex: 8,
                    garyIndex: 8
                },
                s[5e4] = {
                    originalIndex: 9,
                    garyIndex: 9
                },
                s[1e5] = {
                    originalIndex: 10,
                    garyIndex: 10
                },
                s);
        o.ChipShowInfo = function (t, e) {
            if (this.chipSeq = 0,
                this.chipValue = 0,
                this.valueStr = "1",
                this.textColor = cc.color().fromHEX("#FFFFFF"),
                this.fontSize = 40,
                this.minFontSize = 40,
                this.originalIndexInfo = {
                    originalIndex: 0,
                    garyIndex: 0
                },
                this.isCircle = !0,
                this.chipSeq = t,
                this.chipValue = e,
                this.valueStr = this.chipValue.toString(),
                this.chipValue > 1e3 ? this.isCircle = !1 : this.isCircle = !0,
                this.isCircle) {
                var i = this.valueStr.length;
                this.minFontSize = i > 3 ? 36 : 3 == i ? 38 : 40
            } else
                this.minFontSize = 40;
            this.minFontSize = Math.floor(this.minFontSize * o.ADBH_CHIP_SPR_SCALE)
        }
            ;
        o.ADBHChipBtnInfo = function () {
            this.isCircle = !0
        }
            ,
            cc._RF.pop()
    }
        , {}],
    ADBHController: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "31ef9ZnmEJNYYEtRp2xnS5J", "ADBHController");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            , a = this && this.__awaiter || function (t, e, o, i) {
                return new (o || (o = Promise))(function (n, r) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function s(t) {
                        try {
                            l(i.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                            e instanceof o ? e : new o(function (t) {
                                t(e)
                            }
                            )).then(a, s)
                    }
                    l((i = i.apply(t, e || [])).next())
                }
                )
            }
            , s = this && this.__generator || function (t, e) {
                var o, i, n, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    r;
                function s(t) {
                    return function (e) {
                        return l([t, e])
                    }
                }
                function l(r) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, r[1])).done)
                                return n;
                            switch (i = 0,
                            n && (r = [2 & r[0], n.value]),
                            r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        i = r[1],
                                        r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                            n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                            a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            r = e.call(t, a)
                        } catch (s) {
                            r = [6, s],
                                i = 0
                        } finally {
                            o = n = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
            o.adbh_ctrl = void 0;
        var l = t("./ADBHConfig")
            , c = t("./ADBHHelper")
            , h = t("./ADBHModel")
            , _ = t("./ADBHNet")
            , p = t("./ADBHRes")
            , d = t("./chip/ADBHChipBox")
            , u = t("./popup/ADBHMorePlayerMgr")
            , f = t("./ADBHAdaptor")
            , A = t("./view/ADBHCardsComp")
            , g = t("./view/ADBHGameView")
            , m = t("./view/ADBHPubComp")
            , y = t("./chip/ADBHChipPool")
            , B = t("./view/ADBHCroupier")
            , C = t("./view/ADBHSpineAnis")
            , D = t("./ADBHAudio");
        o.adbh_ctrl = null;
        var b = cc._decorator
            , R = b.ccclass
            , H = (b.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.screenAdaptor = new f.default,
                            e.model = null,
                            e.res = null,
                            e.dragChip = null,
                            e.roadMain = null,
                            e.selectRoom = null,
                            e._chipPool = null,
                            e._morePlayerMgr = null,
                            e._gameTrendNode = null,
                            e._showChangeTable = !1,
                            e._chipBox = null,
                            e._pubComp = null,
                            e._endBackTime = -1,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var t = this;
                            console.log("adbh\u7248\u672c: 1"),
                                console.log("----onLoad ADBHController"),
                                l.AnbaDefine.init(),
                                o.adbh_ctrl = this,
                                l.ADBH_G.gameControl = this,
                                this._initUI(),
                                this._initEvent(),
                                this._initReConnetCB(),
                                this._setSwitchStage(),
                                this.reqRoomRoads(),
                                l.ADBH_G.gameHelper.registBetAreaIdMap(l.ADBH_AREATEXT),
                                this._muteNetLog(1),
                                this.scheduleOnce(function () {
                                    t._doStart()
                                }, .03),
                                this.scheduleOnce(function () {
                                    t._loadChildPrefabs()
                                }, 3)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            this._muteNetLog(0),
                                cc.game.targetOff(this),
                                l.ADBH_G.event.targetOff(this),
                                l.ADBH_G.uiMaster.closeAllView(),
                                l.ADBH_G.gameRouter.fnReload = null,
                                l.ADBH_G.gameControl = null,
                                o.adbh_ctrl = null
                        }
                        ,
                        e.prototype._muteNetLog = function (t) {
                            l.ADBH_G.ws.FilterLogProtocolId[_.ADBH_PROTOCOL_IDS.ANDARBARHAR_BET_NOTIFY] = t
                        }
                        ,
                        e.prototype._doStart = function () {
                            this.screenAdaptor.addtoBottom(0, [this.node.findChild("layer_bottom")]),
                                this.screenAdaptor.addtoBottom(1, [this.node.findChild("layer_btns2")]),
                                this.screenAdaptor.addtoBottom(2, [this.node.findChild("layer_btns1")]),
                                this.screenAdaptor.addtoTop(1, [this.node.findChild("layer_desc"), this.node.findChild("layer_trend")]),
                                this.screenAdaptor.addtoTop(2, [this.node.findChild("layer_btns3")]),
                                this.screenAdaptor.addtoTop(3, [this.node.findChild("layer_t1")]),
                                this._loadChildPrefabs()
                        }
                        ,
                        e.prototype.loadGameSucc = function () {
                            console.log("========> loadGameSucc"),
                                this.scheduleOnce(function () {
                                    l.ADBH_G.event.resume()
                                }, .03),
                                this.res.loadPrefabs()
                        }
                        ,
                        e.prototype._initUI = function () {
                            this.res = this.getComponent(p.default),
                                this.res.loadChipPrefab(),
                                this.model = this.addComponent(h.default),
                                this._chipPool = this.addComponent(y.default),
                                this.dragChip = this.node.getChildByName("dragChipManager").addComponent("DragChipManager"),
                                this.addComponent(g.default),
                                this._pubComp = this.addComponent(m.default),
                                this.addComponent(A.default),
                                this._morePlayerMgr = this.addComponent(u.default),
                                this._chipBox = c.default.findNode(this.node, "chipbox_bg").addComponent(d.default),
                                this._addChipSelectBtn(),
                                this.roadMain = this.addComponent("roadMain"),
                                this.selectRoom = this.addComponent("selectRoom"),
                                this.addComponent(B.default),
                                this.addComponent(C.default),
                                this.getMorePlayerButton().addComponent("MorePlayer"),
                                l.ADBH_G.user.isFormalUser() || this.node.getChildByName("layer_btns1").getChildByName("registerNode").addComponent("GameRegisterBtn"),
                                c.default.isAPI() || this.node.getChildByName("comboWinTipsNode").addComponent("ComboWinTips"),
                                this.node.getChildByName("marquee_root").addComponent("GameMarquee")
                        }
                        ,
                        e.prototype._addChipSelectBtn = function () {
                            this.node.findChild("layer_bottom/chipselect_node").addComponent("ChipSelectBtn").initData(this.model.AllChipConfig, this.model.chipSelectConfig, this.model.getAllAreaLimit())
                        }
                        ,
                        e.prototype._loadChildPrefabs = function () {
                            return a(this, void 0, void 0, function () {
                                var t, e;
                                return s(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return this._gameTrendNode ? [2] : (t = this.node.getChildByName("layer_trend"),
                                                [4, l.ADBH_G.gameHelper.getGamePrefab(l.ADBH_PATH.game_trend)]);
                                        case 1:
                                            return e = o.sent(),
                                                this._gameTrendNode ? [2] : (e && cc.isValid(t) && (this._gameTrendNode = cc.instantiate(e),
                                                    t.addChild(this._gameTrendNode)),
                                                    [2])
                                    }
                                })
                            })
                        }
                        ,
                        e.prototype._initEvent = function () {
                            var t = this;
                            l.ADBH_G.ws.onMsgList(_.ADBH_GAME_EVENT_MAP, this),
                                l.ADBH_G.event.on("game_click_return_event", this._onBack, this),
                                l.ADBH_G.event.on("player_attribute_change_notify", this._onPlayerAttrChange, this),
                                l.ADBH_G.event.on("hpk_rank_bet_notify", this._onHourPKBet, this),
                                l.ADBH_G.event.on(l.ADBH_EVENT.MONI_SHOW_CHANGETABLE, function () {
                                    t._showChangeTable = !0,
                                        l.ADBH_G.ui_helper.showMumLoading("CGH_GET_GAME_TREND_DATA_REQ"),
                                        t.hallRoadsReq()
                                }, this),
                                l.ADBH_G.event.on("game_roads", this._gameRoads, this),
                                l.ADBH_G.event.on("hall_roads", this._hallRoads, this),
                                l.ADBH_G.event.on("select_room_ok", this._changeRoomOk, this),
                                l.ADBH_G.event.on("select_room_fail", this._changeRoomFail, this),
                                l.ADBH_G.event.on("reward_croupier_rsp", function (e) {
                                    var o = l.ADBH_G.user.getUserId();
                                    t._rewardCroupier(o, e.changeGold)
                                }, this),
                                l.ADBH_G.event.on("reward_croupier_notify", function (e) {
                                    t._rewardCroupierNotify(e.userName, e.changeGold)
                                }, this),
                                l.ADBH_G.event.on("proto_rsp_error", function (e) {
                                    e && t._showRewardLimitTip(e)
                                }, this),
                                l.ADBH_G.event.on("update_gold", this._onUpdateGold, this),
                                l.ADBH_G.event.on("req_open_yuebao", this._openYuebao, this)
                        }
                        ,
                        e.prototype._onUpdateGold = function () {
                            l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_GOLD)
                        }
                        ,
                        e.prototype._openYuebao = function () {
                            this.emitMessage("resp_open_yuebao", this.model.isCanLeave)
                        }
                        ,
                        e.prototype._onBack = function (t) {
                            void 0 === t && (t = 0),
                                this.model.isCanLeave ? l.ADBH_G.gameRouter.roomInterface && (1 == t && l.ADBH_G.ui_helper.showTopTipInfo(l.ADBH_TIPS.TIP_GOLD_NOTENOUGH_ROOM_EX2),
                                    l.ADBH_G.gameRouter.roomInterface.gameLeave()) : l.ADBH_G.ui_helper.showTopTipError(l.ADBH_TIPS.GAMEING_NOT_QUIT)
                        }
                        ,
                        e.prototype._changeRoomOk = function (t) {
                            console.log("======>\u6362\u684c\u6210\u529f\u56de\u8c03 ", t),
                                l.ADBH_G.ui_helper.hideMumLoading("changeGameLoading");
                            var e = this.model.currentBetIndex
                                , o = this.model.gameRoomLevel;
                            l.ADBH_G.gameHelper.closeGameDialog(l.ADBH_PATH.ADBHChangeTable),
                                cc.game.targetOff(this),
                                l.ADBH_G.event.targetOff(this),
                                this.node.removeComponent(h.default),
                                this.model = this.addComponent(h.default),
                                o == this.model.gameRoomLevel && (this.model.currentBetIndex = e),
                                this._initEvent(),
                                this.model.initGameInfo(t.gameInfo),
                                this.model.initGameData(),
                                this.model.op5Tip.onChangedDesk(),
                                this.model.reconnectGold(),
                                this.emitMessage(l.ADBH_EVENT.CHANGE_DESK),
                                this.emitMessage(l.ADBH_EVENT.RESET_GAME_SCENE),
                                this.reqRoomRoads(),
                                this._updateChipSelect()
                        }
                        ,
                        e.prototype._updateChipSelect = function () {
                            var t = {
                                selectedConfig: this.model.AllChipConfig,
                                chipSelectConfig: this.model.chipSelectConfig,
                                areaRewardLimit: this.model.getAllAreaLimit()
                            };
                            l.ADBH_G.event.emitNow("reset_chip_select_data", t)
                        }
                        ,
                        e.prototype._changeRoomFail = function (t) {
                            console.log("======>\u6362\u684c\u5931\u8d25\u56de\u8c03 ", t),
                                l.ADBH_G.ui_helper.hideMumLoading("changeGameLoading")
                        }
                        ,
                        e.prototype._initReConnetCB = function () {
                            var t = this;
                            l.ADBH_G.gameRouter.fnReload = function () {
                                console.log("======>\u91cd\u8fde\u540e\u91cd\u7f6eadbh\u573a\u666f\u4fe1\u606f");
                                var e = t.model.paijuhao;
                                t.model.initRoomData(),
                                    t.model.reconnectGold(),
                                    t.emitMessage(l.ADBH_EVENT.RECONNECT),
                                    e == t.model.paijuhao && t.model.gameStatus == l.ADBH_STATUS.OpenCard || t.reqRoomRoads()
                            }
                        }
                        ,
                        e.prototype._setSwitchStage = function () {
                            var t = this.addComponent("SwitchStage");
                            t.setTypeIds(this._getCleanIds(), _.ADBH_PROTOCOL_IDS.ANDARBARHAR_SETTLE_NOTIFY),
                                t.setResotoreCb(this.gameRestoreReq.bind(this)),
                                t.setBackStage(this._onEnterBack.bind(this)),
                                t.setFrontStage(this._onEnterFront.bind(this))
                        }
                        ,
                        e.prototype._onEnterBack = function () {
                            this._endBackTime = (new Date).getTime(),
                                l.ADBH_G.event.emitNow(l.ADBH_EVENT.ENTER_BACK)
                        }
                        ,
                        e.prototype._onEnterFront = function (t) {
                            var e = (new Date).getTime() - this._endBackTime;
                            console.log("\u56de\u524d\u53f0\u4e86: ", t, "  ", e),
                                this._endBackTime > 0 && o.adbh_ctrl.model.onEnterFront(e),
                                this._endBackTime = -1,
                                e > 800 && D.default.stopAllEffects(),
                                l.ADBH_G.event.emitNow(l.ADBH_EVENT.ENTER_FRONT, e)
                        }
                        ,
                        e.prototype._getCleanIds = function () {
                            var t = [];
                            for (var e in _.ADBH_PROTOCOL_IDS)
                                isNaN(e) || t.push("" + e);
                            return t
                        }
                        ,
                        e.prototype.gameRestoreReq = function () {
                            console.log("=======> gameRestoreReq"),
                                l.ADBH_G.ws.send2Game(_.ADBH_PROTOCOL_IDS.ANDARBARHAR_RESTORE_GAME_REQ, {}, "com_protocol.CommonEmptyReq")
                        }
                        ,
                        e.prototype.restoreGameRsp = function (t) {
                            console.log("=======> restoreGameRsp"),
                                this.model.setUserGold(t.gameGold),
                                this.model.initGameInfo(t.gameInfo),
                                this.model.reconnectGold(),
                                this.model.op5Tip.onRestoreGameRsp(),
                                this.emitMessage(l.ADBH_EVENT.RECONNECT),
                                this.reqRoomRoads()
                        }
                        ,
                        e.prototype._onPlayerAttrChange = function (t) {
                            if (console.log("-----onPlayerAttrChange: ", t),
                                t && t.item)
                                switch (t.item.type) {
                                    case l.ADBH_G.pbTool.getCls("com_protocol.EGoodsType").values.EGoodsGold:
                                        o.adbh_ctrl.model.setUserGold(t.item.amount),
                                            l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_GOLD);
                                        break;
                                    case l.ADBH_G.pbTool.getCls("com_protocol.EGoodsType").values.EUAVIPLevel:
                                        l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_VIP, t.item.amount)
                                }
                        }
                        ,
                        e.prototype._rewardCroupier = function (t, e) {
                            this.model.addPlayerGold(t, e),
                                l.ADBH_G.event.emitNow(l.ADBH_EVENT.REWARD_CROUPIER, t)
                        }
                        ,
                        e.prototype._rewardCroupierNotify = function (t, e) {
                            t != l.ADBH_G.user.getUserId() && this.model.addPlayerGold(t, e)
                        }
                        ,
                        e.prototype.playerListReq = function () {
                            this._morePlayerMgr.playerListReq(0)
                        }
                        ,
                        e.prototype.reqRevokeBet = function () {
                            l.ADBH_G.ws.send2Game(_.ADBH_PROTOCOL_IDS.ANDARBARHAR_GAME_BET_CANCEL_REQ, {}, _.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_BET_CANCEL_REQ)
                        }
                        ,
                        e.prototype.reqRepeatBet = function () {
                            l.ADBH_G.ws.send2Game(_.ADBH_PROTOCOL_IDS.ANDARBARHAR_GAME_BET_REPEAT_REQ, {}, _.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_BET_REPEAT_REQ)
                        }
                        ,
                        e.prototype.reqBet = function (t, e) {
                            if (l.ADBH_G.ui_helper.multipleClick("adbh_bet_click", 200))
                                if (null != e) {
                                    if (e < 0)
                                        o.adbh_ctrl.model.checkShowRechargeTip();
                                    else if (l.ADBH_G.ws.getIsConnected())
                                        if (!l.ADBH_G.user.isFormalUser() && o.adbh_ctrl.model.getUserGold() <= 1e-5 && !o.adbh_ctrl.model.isMeBetted())
                                            this._onBack(1);
                                        else {
                                            var i = o.adbh_ctrl.model.getChipInfoByChipIdx(e);
                                            if (o.adbh_ctrl.model.hasEnoughGold(i.chipValue)) {
                                                var n = {
                                                    betArea: t,
                                                    betSeq: i.chipSeq
                                                };
                                                l.ADBH_G.ws.send2Game(_.ADBH_PROTOCOL_IDS.ANDARBARHAR_BET_REQ, n, _.ADBH_PROTOCOL_CLASS.ANDARBARHAR_BET_REQ)
                                            }
                                        }
                                } else
                                    console.log("\u8bf7\u9009\u62e9\u4e0b\u6ce8\u989d")
                        }
                        ,
                        e.prototype._fixWaitMilliSecs = function (t) {
                            var e = t.waitMillisecs;
                            if (null == e)
                                return e;
                            var o = t.server_time_secs;
                            if (null == o)
                                return e;
                            if (t.timeNow) {
                                var i = (new Date).getTime() - o;
                                i >= 800 && (console.log("\u6d88\u606f " + t.id + " \u5728\u540e\u53f0\u79ef\u538b\u7684\u65f6\u95f4 ", i),
                                    (e -= i) < 0 && (e = 0))
                            }
                            return e
                        }
                        ,
                        e.prototype.statusNotify = function (t) {
                            var e = this._fixWaitMilliSecs(t);
                            this.model.gameStatus = t.gameStatus,
                                this.model.playerCount = t.playerCount,
                                this.model.paijuhao = t.recordId,
                                this.model.setStateCD(e, t.totalMillisecs);
                            var i = this.model.gameStatus;
                            i == l.ADBH_STATUS.Start ? (this.model.onStateStart(),
                                this.model.op5Tip.onStartBet(),
                                this.model.jokerCard = t.gameData,
                                l.ADBH_G.gameControl.dragChip.initChipNode(l.ADBH_G.gameControl.res.chipPre, "ChipBase", .65, o.adbh_ctrl),
                                this.emitMessage(l.ADBH_EVENT.UPDATE_SELF_GOLD)) : i == l.ADBH_STATUS.Bet ? this.model.jokerCard = t.gameData : (l.ADBH_STATUS.OpenCard,
                                    l.ADBH_G.gameControl.dragChip.clearChip()),
                                this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, t),
                                l.ADBH_G.event.emitNow(l.ADBH_EVENT.UpdatePlayerCount)
                        }
                        ,
                        e.prototype.areaBetNotify = function (t) {
                            var e = [];
                            if (t.patchAreaInfo)
                                for (var o = 0, i = t.patchAreaInfo; o < i.length; o++) {
                                    var n = i[o];
                                    e[n.areaId] = n.betValue - this.model.getAreaData(n.areaId).totalBet,
                                        this.model.getAreaData(n.areaId).totalBet = n.betValue
                                }
                            this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_BET_NOTIFY, {
                                proto_data: t,
                                diffs: e
                            })
                        }
                        ,
                        e.prototype._onHourPKBet = function (t) {
                            console.log("============> onHourPKAreaBet ", t);
                            var e = t.betPlayer
                                , o = {
                                    username: e.username,
                                    isStar: this.isFollowUser(e.username),
                                    isCancel: t.isCancel,
                                    areaBet: t.areaBet
                                };
                            this.emitMessage(l.ADBH_EVENT.HOURPK_BET, o)
                        }
                        ,
                        e.prototype.betRsp = function (t) {
                            if (0 == t.result || !t.result) {
                                if (t.rewardLimitResult && 0 != t.rewardLimitResult)
                                    return void this._showRewardLimitTip(t);
                                for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                    var i = o[e];
                                    this.model.addUserGold(-i.betValue),
                                        this.model.getAreaData(i.areaId).meBet += i.betValue,
                                        this.model.getAreaData(i.areaId).totalBet += i.betValue,
                                        l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_GOLD),
                                        this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_BET_RSP, t)
                                }
                            }
                            this.model.op5Tip.setActionFlag()
                        }
                        ,
                        e.prototype.repeatBetRsp = function (t) {
                            if (0 == t.result || !t.result) {
                                if (t.rewardLimitResult && 0 != t.rewardLimitResult)
                                    return void this._showRewardLimitTip(t);
                                for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                    var i = o[e];
                                    this.model.addUserGold(-i.betValue),
                                        this.model.getAreaData(i.areaId).meBet += i.betValue,
                                        this.model.getAreaData(i.areaId).totalBet += i.betValue
                                }
                            }
                            this.model.op5Tip.setActionFlag(),
                                l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_GOLD),
                                this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_GAME_BET_REPEAT_RSP, t)
                        }
                        ,
                        e.prototype.cancelBetRsp = function (t) {
                            if (this.model.op5Tip.setActionFlag(),
                                0 == t.result || !t.result) {
                                for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                    var i = o[e];
                                    this.model.cancelFlag = !0,
                                        this.model.addUserGold(i.betValue),
                                        this.model.getAreaData(i.areaId).meBet -= i.betValue,
                                        this.model.getAreaData(i.areaId).totalBet -= i.betValue
                                }
                                l.ADBH_G.ui_helper.showTopTipError(l.ADBH_TIPS.TIP_CANCEL_BET_SUCCESS)
                            }
                            l.ADBH_G.event.emit(l.ADBH_EVENT.UPDATE_SELF_GOLD),
                                this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_GAME_BET_CANCEL_RSP, t)
                        }
                        ,
                        e.prototype.openCardNotiry = function (t) {
                            t = t || {};
                            var e = [];
                            e.push(t.jokerPokers);
                            for (var o = t.andarPokers || [], i = t.barharPokers || [], n = Math.max(o.length, i.length), r = 0; r < n; r++)
                                o[r] && e.push(o[r]),
                                    i[r] && e.push(i[r]);
                            t.allPokers = e,
                                this.model.openCardData = t,
                                this.model.saveLastAreaBet(),
                                this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_OPEN_CARD_NOTIFY, t),
                                this.model.gameStatus = l.ADBH_STATUS.OpenCard
                        }
                        ,
                        e.prototype.settleNotify = function (t) {
                            this.model.gameStatus = l.ADBH_STATUS.Award,
                                this.model.settlement(t),
                                this.model.op5Tip.onSettlement(),
                                this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_SETTLE_NOTIFY, t),
                                this.emitMessage("combo_win_head_update", t.keepWinInfo),
                                this.emitMessage("combo_win_tips", t.keepWinInfo),
                                this.reqRoomRoads()
                        }
                        ,
                        e.prototype.chipConfigNotify = function (t) {
                            this.model.limitConfigNotify(t);
                            var e = {
                                chipAllConfig: t.betAllConfig,
                                chipConfig: t.betConfig
                            };
                            this.model.setRoomConfigProperty(e);
                            var o = {
                                selectedConfig: this.model.AllChipConfig,
                                chipSelectConfig: this.model.chipSelectConfig,
                                areaRewardLimit: this.model.getAllAreaLimit()
                            };
                            this.emitMessage("reset_chip_select_data", o),
                                this.emitMessage("update_chips", t.betConfig),
                                this.emitMessage("update_reward_value", this.model.getDashangGold())
                        }
                        ,
                        e.prototype.takeGoldNotify = function () {
                            this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY)
                        }
                        ,
                        e.prototype.lastRoundNotify = function () {
                            this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_GAME_LAST_ROUND_NOTIFY)
                        }
                        ,
                        e.prototype.morePlayerChangeNotify = function (t) {
                            this.model.playerCount = t.changeCount,
                                this.emitMessage(l.ADBH_EVENT.UpdatePlayerCount)
                        }
                        ,
                        e.prototype.vipListNotify = function () {
                            this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_VIP_LIST_NOTIFY)
                        }
                        ,
                        e.prototype._showRewardLimitTip = function (t) {
                            if (t) {
                                var e = o.adbh_ctrl.model.getAreaLimit(t.areaBet && t.areaBet[0] && t.areaBet[0].areaId);
                                if (e) {
                                    var i = "";
                                    switch (t.result) {
                                        case 1010014:
                                            i = l.ADBH_G.tool.format(l.ADBH_TIPS.TIP_BET_FAILED_TOTAL_LIMIT_RED.CodeMsg, o.adbh_ctrl.model.getGameMinGold().toString(), e.playerRewardLimit.toString()),
                                                l.ADBH_G.ui_helper.showTopTipError(i);
                                            break;
                                        case 1010015:
                                            i = l.ADBH_G.tool.format(l.ADBH_TIPS.TIP_BET_FAILED_TOTAL_LIMIT_RED.CodeMsg, e.playerRewardLimit.toString(), e.sumRewardLimit.toString()),
                                                l.ADBH_G.ui_helper.showTopTipError(i);
                                            break;
                                        default:
                                            this._toastErrCode(t)
                                    }
                                } else
                                    this._toastErrCode(t)
                            }
                        }
                        ,
                        e.prototype._toastErrCode = function (t) {
                            var e = window.ERROR_CODES.getServerErrMsg(t.result);
                            e = this._resultFillJudge(t, e),
                                l.ADBH_G.ui_helper.showTopTipError(e)
                        }
                        ,
                        e.prototype._resultFillJudge = function (t, e) {
                            return null != t.resultFill && null != t.resultFill && 0 != t.resultFill ? l.ADBH_G.tool.format(e, t.resultFill) : e
                        }
                        ,
                        e.prototype.reqTrendTotal = function () {
                            l.ADBH_G.ws.send2Game(_.ADBH_PROTOCOL_IDS.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_REQ)
                        }
                        ,
                        e.prototype.onGameTrendCount = function (t) {
                            this.emitMessage(l.ADBH_EVENT.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP, t)
                        }
                        ,
                        e.prototype.reqRoomRoads = function () {
                            var t = this;
                            l.ADBH_G.ws.getIsConnected() ? this.roadMain.getRoomRoads(0) : this.scheduleOnce(function () {
                                t.reqRoomRoads()
                            }, 1)
                        }
                        ,
                        e.prototype._gameRoads = function (t) {
                            0 == t.result && (this.model.gameRoads(t.trendInfo),
                                l.ADBH_G.event.emitNow(l.ADBH_EVENT.UPDATE_TREND))
                        }
                        ,
                        e.prototype.hallRoadsReq = function (t, e) {
                            null == t && (t = this.model.gameRoomLevel),
                                null != this.roadMain && this.roadMain.getHallRoads(this.model.gameType, t, e)
                        }
                        ,
                        e.prototype._hallRoads = function (t) {
                            if (0 == t.result) {
                                this.model.hallRoads(t);
                                var e = this.model.roomList;
                                if (1 == e.length && 1 == e[0].singleRoom)
                                    this.emitMessage(l.ADBH_EVENT.UPDATE_ROOM_SINGLE, e[0]);
                                else if (this.emitMessage(l.ADBH_EVENT.UPDATE_ROOM_LIST),
                                    this._showChangeTable) {
                                    this._showChangeTable = !1;
                                    var i = {
                                        ctrl: o.adbh_ctrl,
                                        G: l.ADBH_G,
                                        event: l.ADBH_EVENT,
                                        ROOM_LEVEL_TO_NAME: l.ADBH_ROOM_LEVEL_TO_NAME,
                                        PrefabName: "item/ADBHChangeTableCell",
                                        paddingY: 15
                                    };
                                    l.ADBH_G.gameHelper.showGameDialog(l.ADBH_PATH.ADBHChangeTable, "ChangeTable", i, function (t) {
                                        t.getComponent("ChangeTable").show(i)
                                    }, !0)
                                }
                            }
                        }
                        ,
                        e.prototype.ReqGoodTrend = function () {
                            l.ADBH_G.ws.send2Hall(_.ADBH_PROTOCOL_IDS.CGH_HALL_GET_BAI_REN_GOOD_TREND_REQ)
                        }
                        ,
                        e.prototype.onUpdateGoodTrend = function (t) {
                            l.ADBH_G.event.emitNow(l.ADBH_EVENT.UPDATE_GOOD_TREND, t)
                        }
                        ,
                        e.prototype.getModel = function () {
                            return this.model
                        }
                        ,
                        e.prototype.getMorePlayerMgr = function () {
                            return this._morePlayerMgr
                        }
                        ,
                        e.prototype.getChipBtn = function (t) {
                            return this._chipBox.getBtnNode(t) || this.getMyHeadNode()
                        }
                        ,
                        e.prototype.getMorePlayerButton = function () {
                            return c.default.findNode(this.node, "btn_normal_wanjia")
                        }
                        ,
                        e.prototype.getMyHeadNode = function () {
                            return this.node.findChild("layer_bottom/player_6/headroot")
                        }
                        ,
                        e.prototype.getHourPKPlayerPos = function (t) {
                            return this._pubComp.getHourPkPlayerPos(t)
                        }
                        ,
                        e.prototype.isFollowUser = function (t) {
                            return this._pubComp.isFollowUser(t)
                        }
                        ,
                        Object.defineProperty(e.prototype, "chipPool", {
                            get: function () {
                                return this._chipPool
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.emitMessage = function (t, e) {
                            void 0 === e && (e = null),
                                l.ADBH_G.event.emitNow(t, e)
                        }
                        ,
                        r([R], e)
                }(cc.Component));
        o.default = H,
            cc._RF.pop()
    }
        , {
        "./ADBHAdaptor": "ADBHAdaptor",
        "./ADBHAudio": "ADBHAudio",
        "./ADBHConfig": "ADBHConfig",
        "./ADBHHelper": "ADBHHelper",
        "./ADBHModel": "ADBHModel",
        "./ADBHNet": "ADBHNet",
        "./ADBHRes": "ADBHRes",
        "./chip/ADBHChipBox": "ADBHChipBox",
        "./chip/ADBHChipPool": "ADBHChipPool",
        "./popup/ADBHMorePlayerMgr": "ADBHMorePlayerMgr",
        "./view/ADBHCardsComp": "ADBHCardsComp",
        "./view/ADBHCroupier": "ADBHCroupier",
        "./view/ADBHGameView": "ADBHGameView",
        "./view/ADBHPubComp": "ADBHPubComp",
        "./view/ADBHSpineAnis": "ADBHSpineAnis"
    }],
    ADBHCroupier: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9b618U3MSdAzaRMhh7hRLdT", "ADBHCroupier");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHController")
            , l = cc._decorator
            , c = l.ccclass
            , h = (l.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.croupierRoot = null,
                            e.croupierAnim = null,
                            e.rewardRoot = null,
                            e.rewardCroupier = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._loadUI(),
                                this._addEventListener()
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            a.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype._loadUI = function () {
                            var t = this;
                            this.croupierRoot = this.node,
                                this.croupierAnim = this.croupierRoot.findChildCom("croupier", sp.Skeleton),
                                this._addRewardBtn(),
                                this.croupierAnim.setCompleteListener(function () {
                                    t.croupierAnim.setAnimation(0, a.ADBH_CROUPIER_ANIM_NAME.idle, !0)
                                })
                        }
                        ,
                        e.prototype._addRewardBtn = function () {
                            this.rewardRoot = this.croupierRoot.findChild("layer_btns3/reward_root"),
                                this.rewardCroupier = this.rewardRoot.addComponent("RewardCroupier");
                            var t = s.adbh_ctrl.model.getDashangGold()
                                , e = s.adbh_ctrl.model.getZhunru();
                            this.rewardCroupier.initData(t, e, s.adbh_ctrl.res.gold_Prefab),
                                this.rewardCroupier.updateUserGold(a.ADBH_G.user.getGold())
                        }
                        ,
                        e.prototype._addEventListener = function () {
                            a.ADBH_G.event.on(a.ADBH_EVENT.RESET_GAME_SCENE, this._refreshUI, this),
                                a.ADBH_G.event.on(a.ADBH_EVENT.REWARD_CROUPIER, this._rewardCroupier, this),
                                a.ADBH_G.event.on("update_reward_btn", this._updateRewardBtn, this),
                                a.ADBH_G.event.on("push_card_notify", this._pushCardNotify, this),
                                a.ADBH_G.event.on(a.ADBH_EVENT.CROUPIER_ANIM_WIN, this._playCroupierWinAnim, this),
                                a.ADBH_G.event.on(a.ADBH_EVENT.HEGUAN_SIDEWIN, this._playWinSide, this),
                                a.ADBH_G.event.on(a.ADBH_EVENT.UPDATE_SELF_GOLD, this._updateGold, this)
                        }
                        ,
                        e.prototype._refreshUI = function () {
                            this.rewardRoot.active = !0;
                            var t = s.adbh_ctrl.model.getDashangGold()
                                , e = s.adbh_ctrl.model.getZhunru();
                            this.rewardCroupier.initData(t, e, s.adbh_ctrl.res.gold_Prefab),
                                this._updateGold();
                            var o = this._getCurAnimName();
                            s.adbh_ctrl.model.gameStatus <= a.ADBH_STATUS.OpenCard && (o != a.ADBH_CROUPIER_ANIM_NAME.andarwin && o != a.ADBH_CROUPIER_ANIM_NAME.baharwin || this.croupierAnim.setAnimation(0, a.ADBH_CROUPIER_ANIM_NAME.idle, !0)),
                                s.adbh_ctrl.model.gameStatus >= a.ADBH_STATUS.OpenCard && o == a.ADBH_CROUPIER_ANIM_NAME.fapai && this.croupierAnim.setAnimation(0, a.ADBH_CROUPIER_ANIM_NAME.idle, !0)
                        }
                        ,
                        e.prototype._rewardCroupier = function (t) {
                            this._playChipAnim(t)
                        }
                        ,
                        e.prototype._playChipAnim = function (t) {
                            var e = this
                                , o = s.adbh_ctrl.getMyHeadNode();
                            a.ADBH_G.user.getUserId() != t && (o = s.adbh_ctrl.getMorePlayerButton()),
                                this.rewardCroupier.moveChip(o, function () {
                                    a.ADBH_G.user.getUserId() == t && e._playCroupierAnim(a.ADBH_CROUPIER_ANIM_NAME.feiwen)
                                })
                        }
                        ,
                        e.prototype._updateRewardBtn = function (t) {
                            this.rewardCroupier.enableRewardBtn(t)
                        }
                        ,
                        e.prototype._updateGold = function () {
                            this.rewardCroupier.updateUserGold(a.ADBH_G.user.getGold());
                            var t = s.adbh_ctrl.model.getDashangGold()
                                , e = s.adbh_ctrl.model.getZhunru()
                                , o = a.ADBH_G.user.getGold() - t >= e;
                            a.ADBH_G.event.emit("update_reward_btn", o)
                        }
                        ,
                        e.prototype._pushCardNotify = function () {
                            s.adbh_ctrl.model.gameStatus != a.ADBH_STATUS.Start && s.adbh_ctrl.model.gameStatus != a.ADBH_STATUS.Bet || this._playCroupierAnim(a.ADBH_CROUPIER_ANIM_NAME.fapai)
                        }
                        ,
                        e.prototype._playCroupierWinAnim = function (t) {
                            t > 0 && this._playCroupierAnim(a.ADBH_CROUPIER_ANIM_NAME.win)
                        }
                        ,
                        e.prototype._playWinSide = function (t) {
                            1 == t ? this._playCroupierAnim(a.ADBH_CROUPIER_ANIM_NAME.andarwin) : this._playCroupierAnim(a.ADBH_CROUPIER_ANIM_NAME.baharwin)
                        }
                        ,
                        e.prototype._playCroupierAnim = function (t) {
                            null != t && "" != t && (t == a.ADBH_CROUPIER_ANIM_NAME.feiwen && this._getCurAnimName() != a.ADBH_CROUPIER_ANIM_NAME.idle || this.croupierAnim.setAnimation(0, t, !1))
                        }
                        ,
                        e.prototype._getCurAnimName = function () {
                            return this.croupierAnim.getCurrent(0).animation.name
                        }
                        ,
                        r([c], e)
                }(cc.Component));
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHGameRecordItemDetail: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9e1030y/e9BuLrotlUUizyR", "ADBHGameRecordItemDetail");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../../../bundles/base/base/component/general/bet_record/detail/GameRecordItemDetailBase")
            , s = t("../../../../../scripts/common/gameIdent")
            , l = t("../../../../../scripts/i18n/i18n")
            , c = t("../../ADBHConfig")
            , h = cc._decorator
            , _ = h.ccclass
            , p = (h.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.labColor = {},
                            e.lb_loss_ration = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var e;
                            t.prototype.onLoad.call(this);
                            var o = this.node.getChildByName("scroll").getComponent(cc.ScrollView).content;
                            this.scheduleOnce(function () {
                                o.getChildByName("lab_8").getComponent(cc.Label).string = cc.i18n.t("gamebase.time") + "\uff1a",
                                    o.getChildByName("lab_9").getComponent(cc.Label).string = cc.i18n.t("gamebase.tingbie") + "\uff1a",
                                    o.getChildByName("lab_10").getComponent(cc.Label).string = cc.i18n.t("gamebase.xiazhujine") + "\uff1a",
                                    o.getChildByName("lab_11").getComponent(cc.Label).string = cc.i18n.t("gamebase.shuyingjine") + "\uff1a"
                            }),
                                this.lb_result = o.getChildByName("lb_result").getComponent(cc.Label),
                                this.lbBetDesc = o.getChildByName("lab_2").getComponent(cc.Label),
                                this.lbWinDesc = o.getChildByName("lab_3").getComponent(cc.Label),
                                this.lossRationDesc = o.getChildByName("lab_5"),
                                this.lb_rltareas = o.getChildByName("lb_rltareas").getComponent(cc.Label),
                                this.labBankerSumWinTitle = o.getChildByName("lab_6");
                            var i = o.getChildByName("node_banker").getChildByName("lb_banker_sum_win");
                            i && (this.labBankerSumWin = i.getComponent(cc.Label));
                            var n = o.getChildByName("lb_loss_ration");
                            n && (this.lb_loss_ration = n.getComponent(cc.Label)),
                                this.labColor = ((e = {})[s.GAME_IDENTS.BR_NN] = {
                                    winColor: "#D74A45",
                                    loseColor: "#36AF46"
                                },
                                    e[s.GAME_IDENTS.BCBM] = {
                                        winColor: "#D74A45",
                                        loseColor: "#36AF46"
                                    },
                                    e[s.GAME_IDENTS.FQZS] = {
                                        winColor: "#D74A45",
                                        loseColor: "#36AF46"
                                    },
                                    e)
                        }
                        ,
                        e.prototype.getSumLabColor = function (t) {
                            var e = c.ADBH_G.gameHelper.gameType
                                , o = this.labColor[e];
                            return o || (o = this.labColor[s.GAME_IDENTS.BR_NN]),
                                t >= 0 ? cc.color().fromHEX(o.winColor) : cc.color().fromHEX(o.loseColor)
                        }
                        ,
                        e.prototype.updateData = function (e, o) {
                            t.prototype.updateData.call(this, e, o);
                            var i = e.betRecord
                                , n = this.node.getChildByName("scroll")
                                , r = n.getComponent(cc.ScrollView).content;
                            if (n.opacity = 0,
                                this.lb_result.string = this.resultDescTransform(i.newResultDesc) || i.resultDesc,
                                this.lb_loss_ration) {
                                var a = c.ADBH_G.tool.formatDouble(100 * i.bankerLoseRatio).toString();
                                this.lb_loss_ration.string = a.concat("%")
                            }
                            var l = i.isBanker;
                            this.lossRationDesc && (this.lossRationDesc.active = l),
                                this.lb_loss_ration && (this.lb_loss_ration.node.active = l);
                            var h = c.ADBH_G.gameHelper.gameType
                                , _ = h == s.GAME_IDENTS.BR_NN || h == s.GAME_IDENTS.FQZS || h == s.GAME_IDENTS.BCBM
                                , p = _;
                            this.labBankerSumWinTitle && (this.labBankerSumWinTitle.active = !1),
                                this.labBankerSumWin && (this.labBankerSumWin.node.parent.active = p),
                                this.lossRationDesc.getComponent(cc.Label).stringKey = _ ? "gamebase.hezhuangzhanbi" : "gamebase.peifubili",
                                this.labBankerSumWin && (this.labBankerSumWin.string = c.ADBH_G.tool.formatGoldInGame(0));
                            var d = !!e.betRecord.areaResult;
                            this._setCardSeeable(d),
                                this.setRltAreas(i);
                            var u = i.betAreas || [];
                            u.sort(function (t, e) {
                                return t.betAreaId - e.betAreaId
                            }),
                                this.createBetArea(u, r, p),
                                this.createWinloseArea(u, r, p),
                                this.scheduleOnce(function () {
                                    n.opacity = 255
                                }, .1)
                        }
                        ,
                        e.prototype._setCardSeeable = function (t) {
                            var e = this.node.getChildByName("scroll").getComponent(cc.ScrollView).content.getChildByName("result_layout");
                            e && (e.active = t),
                                this.lb_result.node.active = !t
                        }
                        ,
                        e.prototype.setRltAreas = function (t) {
                            var e = t.newResultDesc
                                , o = c.ADBH_G.gameHelper.getBetAreaIdMap();
                            if (this.lb_rltareas.string = "",
                                e) {
                                for (var i = [], n = 0, r = e.split("|"); n < r.length; n++) {
                                    var a = r[n];
                                    i.push(parseInt(a))
                                }
                                i.sort();
                                for (var s = 0, l = i.length; s < l; s++) {
                                    var h = i[s];
                                    this.lb_rltareas.string += o[h],
                                        s < l - 1 && (this.lb_rltareas.string += ",  ")
                                }
                            }
                        }
                        ,
                        e.prototype.createBetArea = function (t, e, o) {
                            var i = e.getChildByName("layout_betArea")
                                , n = i.getChildByName("node_betArea");
                            n.parent = null;
                            var r = c.ADBH_G.gameHelper.getBetAreaIdMap()
                                , a = 0;
                            if (t)
                                for (var s = 0; s < t.length; s++) {
                                    var l = t[s]
                                        , h = cc.instantiate(n)
                                        , _ = h.getChildByName("layout")
                                        , p = _.getChildByName("lb_area").getComponent(cc.Label)
                                        , d = _.getChildByName("lb_gold").getComponent(cc.Label);
                                    if (p.string = r[l.betAreaId] + ": ",
                                        d.string = c.ADBH_G.tool.formatGoldInGame(l.betGold),
                                        i.addChild(h),
                                        o && (a += l.winLoseGold,
                                            s == t.length - 1 && this.labBankerSumWin)) {
                                        this.labBankerSumWin.node.color = this.getSumLabColor(a);
                                        var u = a > 0 ? "+" : "";
                                        this.labBankerSumWin.string = u + c.ADBH_G.tool.formatGoldInGame(a)
                                    }
                                    _.getComponent(cc.Layout).updateLayout(),
                                        h.setContentSize(_.getContentSize().width, h.getContentSize().height)
                                }
                        }
                        ,
                        e.prototype.createWinloseArea = function (t, e) {
                            var o = e.getChildByName("layout_winArea")
                                , i = o.getChildByName("node_winArea");
                            i.parent = null;
                            var n = c.ADBH_G.gameHelper.getBetAreaIdMap();
                            if (t)
                                for (var r = 0, a = t; r < a.length; r++) {
                                    var s = a[r]
                                        , l = cc.instantiate(i)
                                        , h = l.getChildByName("layout")
                                        , _ = h.getChildByName("lb_area").getComponent(cc.Label)
                                        , p = h.getChildByName("lb_lose").getComponent(cc.Label)
                                        , d = h.getChildByName("lb_win").getComponent(cc.Label);
                                    if (_.string = n[s.betAreaId] + ": ",
                                        d.node.active = !1,
                                        p.node.active = !1,
                                        s.winLoseGold < 0)
                                        p.node.active = !0,
                                            p.string = c.ADBH_G.tool.formatGoldInGame(s.winLoseGold);
                                    else {
                                        d.node.active = !0;
                                        var u = 0 == s.winLoseGold ? "" : "+";
                                        d.string = u + c.ADBH_G.tool.formatGoldInGame(s.winLoseGold)
                                    }
                                    o.addChild(l),
                                        h.getComponent(cc.Layout).updateLayout(),
                                        l.setContentSize(h.getContentSize().width, l.getContentSize().height)
                                }
                        }
                        ,
                        e.prototype.resultDescTransform = function (t) {
                            for (var e = [], o = c.ADBH_G.gameHelper.getBetAreaIdMap(), i = [], n = 0, r = t.split("|") || []; n < r.length; n++) {
                                var a = r[n];
                                i.push(Number(a))
                            }
                            i.sort(function (t, e) {
                                return t - e
                            });
                            for (var s = 0, h = i; s < h.length; s++) {
                                var _ = h[s];
                                isNaN(_) || e.push("\u3010" + l.i18n.t(o[_]) + "\u3011")
                            }
                            return e.join(" ")
                        }
                        ,
                        r([_], e)
                }(a.default));
        o.default = p,
            cc._RF.pop()
    }
        , {
        "../../../../../bundles/base/base/component/general/bet_record/detail/GameRecordItemDetailBase": void 0,
        "../../../../../scripts/common/gameIdent": void 0,
        "../../../../../scripts/i18n/i18n": void 0,
        "../../ADBHConfig": "ADBHConfig"
    }],
    ADBHGameView: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b87554TqY1ASrDtcsBFtV+k", "ADBHGameView");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHController")
            , s = t("../ADBHConfig")
            , l = t("../ADBHHelper")
            , c = t("./ADBHAreaComp")
            , h = t("./ADBHClock")
            , _ = t("./ADBHPlayer")
            , p = t("../ADBHAudio")
            , d = t("../chip/ADBHChipMgr")
            , u = t("../chip/ADBHChipEvent")
            , f = cc._decorator
            , A = f.ccclass
            , g = (f.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._lbRoomName = null,
                            e._lb_playerCount = null,
                            e._lbState = null,
                            e._morePlayerBtn = null,
                            e._morePlayerInitPos = cc.v2(0, 0),
                            e._nodeRevoke = null,
                            e._nodeRepeat = null,
                            e._areaComps = [],
                            e._chip_layer = null,
                            e._selfComp = null,
                            e._collectNode = null,
                            e._chipMgr = null,
                            e._changeTableNode = null,
                            e._canChange = null,
                            e._cantChange = null,
                            e._inited = !1,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            console.log("----onLoad ADBHGameView"),
                                this._chip_layer = this.node.findChild("layer_chip"),
                                this._collectNode = this.node.findChild("collect_node"),
                                this._morePlayerBtn = this.node.findChild("layer_btns1/btn_normal_wanjia"),
                                this._lb_playerCount = l.default.findNode(this.node, "lb_playerCount").getComponent(cc.Label),
                                this._lbRoomName = this.node.findChild("room_name_bg/lb_room_name").getComponent(cc.Label),
                                this._morePlayerInitPos = cc.v2(this._morePlayerBtn.x, this._morePlayerBtn.y),
                                this._nodeRevoke = this.node.findChild("layer_btns2/node_revoke"),
                                this._nodeRepeat = this.node.findChild("layer_btns2/node_repeatBet"),
                                this._lbState = this.node.findChild("layer_desc/lb_game_state").getComponent(cc.Label),
                                this._changeTableNode = this.node.findChild("layer_btns1/btn_changetable");
                            var t = this._changeTableNode.getChildByName("huanzhuo");
                            this._canChange = t.getChildByName("canChange"),
                                this._cantChange = t.getChildByName("cantChange"),
                                s.ADBH_G.gameHelper.loadResEx("animations/huanzhuo", sp.SkeletonData, function (e, o) {
                                    e || (t.getComponent(sp.Skeleton).skeletonData = o)
                                }, this, !0);
                            for (var e = s.ADBH_MIN_AREA_ID; e <= s.ADBH_MAX_AREA_ID; e++) {
                                var o = this.node.findChild("layer_bet/area" + e);
                                this._areaComps[e] = o.addComponent(c.default),
                                    this._areaComps[e].setAreaId(e),
                                    this._areaComps[e].setSelfbetNode(this.node.findChild("layer_mebet/node_selfGold_" + e))
                            }
                            this.node.findChild("layer_desc/clock").getComponent(h.default),
                                this._selfComp = this.node.findChild("layer_bottom/player_6").getComponent(_.default),
                                this._chipMgr = this.node.addComponent(d.default),
                                this._chipMgr.initConfigs(this._areaComps, this._chip_layer, this._collectNode, a.adbh_ctrl)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            s.ADBH_G.ws.offTarget(this),
                                s.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype.start = function () {
                            this._inited || (this._inited = !0,
                                this._initUIEvent(),
                                this._initNetEvent(),
                                this._resetUI(),
                                this._checkTipWaitNext())
                        }
                        ,
                        e.prototype._resetUI = function () {
                            console.log("=====> reset GameView"),
                                this._stopPlaySettle(),
                                a.adbh_ctrl.model.isPaijuhaoChanged() && this._clearChip(),
                                this._refreshUI(),
                                this._initChips()
                        }
                        ,
                        e.prototype._refreshUI = function () {
                            this._refreshState(),
                                this._refreshRepeatBtn(),
                                this._refreshRevokeBtn(),
                                this._onUpdateSelfGold(),
                                this._onUpdatePlayerCount(),
                                this._refreshRoomName(),
                                this._playStartBetWarn(!1);
                            for (var t = 0, e = this._areaComps; t < e.length; t++) {
                                var o = e[t];
                                o && o.refreshUI()
                            }
                        }
                        ,
                        e.prototype._onReconnect = function () {
                            if (a.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Award && this._chipMgr.getSettleCode() == a.adbh_ctrl.model.paijuhao)
                                return console.log("\u91cd\u8fde\u56de\u6765\u65f6, \u8fd8\u5728\u4e4b\u524d\u5c40\u7684\u7ed3\u7b97\u9636\u6bb5, \u65e0\u9700\u6253\u65ad\u7ed3\u7b97"),
                                    void this._refreshUI();
                            this._resetUI()
                        }
                        ,
                        e.prototype._getAreaComp = function (t) {
                            return this._areaComps[t]
                        }
                        ,
                        e.prototype._initChips = function () {
                            this._chipMgr.initChips()
                        }
                        ,
                        e.prototype._clearChip = function () {
                            this._chipMgr.clearChip()
                        }
                        ,
                        e.prototype._initNetEvent = function () {
                            s.ADBH_G.event.on("switch_lang", this._onSwitchLang, this),
                                s.ADBH_G.event.on(u.default.hide_self_bet, this._playHideSelfBet, this),
                                s.ADBH_G.event.on(u.default.self_gold_award, this._playSelfGoldAward, this),
                                s.ADBH_G.event.on(u.default.hide_high_light, this._playHideHighlight, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RESET_GAME_SCENE, this._resetUI, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RECONNECT, this._onReconnect, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.CHANGE_DESK, this._clearChip, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.UpdatePlayerCount, this._onUpdatePlayerCount, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.UPDATE_SELF_GOLD, this._onUpdateSelfGold, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.UPDATE_SELF_VIP, this._onUpdateSelfVip, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, this._onStatusSwitch, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_BET_RSP, this._betRsp, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_GAME_BET_REPEAT_RSP, this._repeatBetRsp, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_GAME_BET_CANCEL_RSP, this._cancelBetRsp, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_BET_NOTIFY, this._areaBetNotify, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.HOURPK_BET, this._flychipHourPKBet, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_SETTLE_NOTIFY, this._playSettle, this),
                                s.ADBH_G.event.on("dragEnd_Chip", this._dragEndChip, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ENTER_FRONT, this._onEnterFront, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.SLOT_CHASE, this._onSlotChase, this),
                                s.ADBH_G.event.on("screen_size_change", this._onSizeChange, this),
                                this._onSizeChange(),
                                s.ADBH_G.event.on(s.ADBH_EVENT.UPDATE_GOOD_TREND, this._changeTableStatue, this)
                        }
                        ,
                        e.prototype._onSwitchLang = function () {
                            this._refreshState(),
                                this._onUpdatePlayerCount(),
                                this._refreshRoomName(),
                                this._onUpdateSelfGold()
                        }
                        ,
                        e.prototype._onEnterFront = function () {
                            this._playStartBetWarn(!1)
                        }
                        ,
                        e.prototype._onSizeChange = function () {
                            var t = this.node.findChild("layer_ani/guang")
                                , e = cc.view.getFrameSize();
                            t.scaleY = 1 + .58 * (e.height / e.width - 1920 / 1080)
                        }
                        ,
                        e.prototype._dragEndChip = function (t) {
                            for (var e = 0, o = this._areaComps; e < o.length; e++) {
                                var i = o[e];
                                i && i.isTouchIn(t) && i.clickArea()
                            }
                        }
                        ,
                        e.prototype._onSlotChase = function (t) {
                            var e = this.node.findChild("layer_bet/slot_tip")
                                , o = this.node.findChild("layer_ani/guang");
                            if (a.adbh_ctrl.model.gameStatus != s.ADBH_STATUS.OpenCard)
                                return e.active = !1,
                                    void (o.active = !1);
                            o.active = t > s.ADBH_FS_EFFECT_COUNT;
                            var i = a.adbh_ctrl.model.getAreaIdByCardCnt(t);
                            if (e.active = i > 0,
                                !(i <= 0 || e.area_id == i)) {
                                e.area_id = i;
                                var n = this._areaComps[i].getSlotNode().convertToWorldSpaceAR(cc.v2(0, 0))
                                    , r = e.parent.convertToNodeSpaceAR(n);
                                e.stopAllActions(),
                                    e.x = r.x,
                                    e.y = r.y
                            }
                        }
                        ,
                        e.prototype._hideSlotChase = function () {
                            var t = this.node.findChild("layer_bet/slot_tip");
                            t.stopAllActions(),
                                t.active = !1,
                                t.area_id = -1
                        }
                        ,
                        e.prototype._hideFireAni = function () {
                            this.node.findChild("layer_ani/guang").active = !1
                        }
                        ,
                        e.prototype._betRsp = function (t) {
                            for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                var i = o[e];
                                this._getAreaComp(i.areaId).refreshUI()
                            }
                            this._refreshRepeatBtn(),
                                this._refreshRevokeBtn(),
                                this._chipMgr.flychipMeBet(t)
                        }
                        ,
                        e.prototype._repeatBetRsp = function (t) {
                            this._betRsp(t)
                        }
                        ,
                        e.prototype._cancelBetRsp = function (t) {
                            for (var e = 0, o = t.areaBet; e < o.length; e++) {
                                var i = o[e];
                                this._getAreaComp(i.areaId).refreshUI()
                            }
                            this._refreshRepeatBtn(),
                                this._refreshRevokeBtn(),
                                this._chipMgr.flychipCancelBet(t)
                        }
                        ,
                        e.prototype._areaBetNotify = function (t) {
                            var e = t.proto_data;
                            if (e.patchAreaInfo)
                                for (var o = 0, i = e.patchAreaInfo; o < i.length; o++) {
                                    var n = i[o];
                                    this._getAreaComp(n.areaId).refreshUI()
                                }
                            var r = this._chipMgr.flychipMorePlayerBet(t.diffs);
                            r > 0 && (p.default.playChipBet(r),
                                this._shakeMorePlayerBtn())
                        }
                        ,
                        e.prototype._shakeMorePlayerBtn = function () {
                            window.ActionUtil.onShaking(this._morePlayerBtn, this._morePlayerInitPos)
                        }
                        ,
                        e.prototype._flychipHourPKBet = function (t) {
                            this._chipMgr.flychipHourPKBet(t)
                        }
                        ,
                        e.prototype._playStartBetWarn = function (t) {
                            var e = this.node.findChild("layer_bet/warn_tip");
                            e.stopAllActions(),
                                e.active = t,
                                t && e.runAction(cc.sequence(cc.show(), cc.repeat(cc.sequence(cc.fadeOut(.25), cc.fadeIn(.25), cc.delayTime(.1)), 2), cc.hide()))
                        }
                        ,
                        e.prototype._onStatusSwitch = function (t) {
                            this._refreshState(),
                                this._refreshRepeatBtn(),
                                this._refreshRevokeBtn(),
                                this._chipMgr.onStatusSwitch(t),
                                a.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Start ? (this._stopPlaySettle(),
                                    this._clearChip(),
                                    this._onUpdateSelfGold(),
                                    this._onUpdatePlayerCount(),
                                    this._checkTipWaitNext(),
                                    this._playStartBetWarn(!0),
                                    this._hideSlotChase(),
                                    this._hideFireAni()) : a.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Bet ? (this._hideSlotChase(),
                                        this._hideFireAni()) : a.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.OpenCard ? this._playStartBetWarn(!1) : a.adbh_ctrl.model.gameStatus == s.ADBH_STATUS.Award && (this._playStartBetWarn(!1),
                                            this._hideSlotChase(),
                                            this._hideFireAni())
                        }
                        ,
                        e.prototype._playSettle = function (t) {
                            this._highlightWinAreas(t),
                                this._chipMgr.playSettle(t)
                        }
                        ,
                        e.prototype._stopPlaySettle = function () {
                            this.unscheduleAllCallbacks(),
                                this._selfComp.stopPlayAddScore();
                            for (var t = 0, e = this._areaComps; t < e.length; t++) {
                                var o = e[t];
                                o && (o.refreshUI(),
                                    o.playHighLight(!1),
                                    o.lightStar(!1, !1))
                            }
                            this._chipMgr.stopPlaySettle()
                        }
                        ,
                        e.prototype._highlightWinAreas = function (t) {
                            this._hideSlotChase(),
                                this._hideFireAni();
                            var e = t && t.areaInfo;
                            if (e)
                                for (var o = 0, i = e; o < i.length; o++) {
                                    var n = i[o];
                                    this._getAreaComp(n.areaId).playHighLight(n.bWinLose),
                                        1 == n.areaId && n.bWinLose ? (p.default.playAndarWin(),
                                            s.ADBH_G.event.emit(s.ADBH_EVENT.HEGUAN_SIDEWIN, 1)) : 2 == n.areaId && n.bWinLose && (p.default.playBaharWin(),
                                                s.ADBH_G.event.emit(s.ADBH_EVENT.HEGUAN_SIDEWIN, 2))
                                }
                        }
                        ,
                        e.prototype._playHideSelfBet = function () {
                            for (var t = 0, e = this._areaComps; t < e.length; t++) {
                                var o = e[t];
                                o && o.hideSelfBet()
                            }
                        }
                        ,
                        e.prototype._playSelfGoldAward = function () {
                            s.ADBH_G.event.emit(s.ADBH_EVENT.UPDATE_SELF_GOLD),
                                this._selfComp.playAddScore(a.adbh_ctrl.model.getMyWinValue()),
                                a.adbh_ctrl.model.getMyWinValue() > 0 && (p.default.playMeWin(),
                                    s.ADBH_G.event.emitNow(s.ADBH_EVENT.CROUPIER_ANIM_WIN, a.adbh_ctrl.model.getMyWinValue()))
                        }
                        ,
                        e.prototype._playHideHighlight = function () {
                            this._hideSlotChase();
                            for (var t = 0, e = this._areaComps; t < e.length; t++) {
                                var o = e[t];
                                o && o.playHighLight(!1)
                            }
                        }
                        ,
                        e.prototype._changeTableStatue = function (t) {
                            var e = this._changeTableNode.findChildCom("huanzhuo", sp.Skeleton)
                                , o = a.adbh_ctrl.model.gameRoomLevel;
                            if (e) {
                                var i = t.goodAllCount;
                                i ? 1 == i && t.data[0].level == o ? "animation1" != e.animation && (e.setAnimation(0, "animation1", !1),
                                    this.showChangeLabel(!1)) : "animation2" != e.animation && (e.setAnimation(0, "animation2", !0),
                                        this.showChangeLabel(!0)) : "animation1" != e.animation && (e.setAnimation(0, "animation1", !1),
                                            this.showChangeLabel(!1))
                            }
                        }
                        ,
                        e.prototype.showChangeLabel = function (t) {
                            this._canChange.active = !!t,
                                this._cantChange.active = !t
                        }
                        ,
                        e.prototype._refreshState = function () {
                            var t = s.ADBH_STR["STATE_" + a.adbh_ctrl.model.gameStatus];
                            this._lbState.string = t ? cc.i18n.t(t) : ""
                        }
                        ,
                        e.prototype._onUpdateSelfGold = function () {
                            this._selfComp.udpateGold(a.adbh_ctrl.model.getUserGold())
                        }
                        ,
                        e.prototype._onUpdateSelfVip = function (t) {
                            this._selfComp.refleshVip(t)
                        }
                        ,
                        e.prototype._onUpdatePlayerCount = function () {
                            this._lb_playerCount.string = s.ADBH_G.tool.format(cc.i18n.t("adbh.zaixianrenshu"), a.adbh_ctrl.model.playerCount)
                        }
                        ,
                        e.prototype._refreshRevokeBtn = function () {
                            var t = a.adbh_ctrl.model.isCanRevoke();
                            this._nodeRevoke.getChildByName("btn_normal").active = t,
                                this._nodeRevoke.getChildByName("btn_disable").active = !t
                        }
                        ,
                        e.prototype._refreshRepeatBtn = function () {
                            var t = a.adbh_ctrl.model.isCanRepeat();
                            this._nodeRepeat.getChildByName("btn_normal").active = t,
                                this._nodeRepeat.getChildByName("btn_disable").active = !t
                        }
                        ,
                        e.prototype._checkTipWaitNext = function () {
                            this.node.findChild("layer_ani/waitAni").active = a.adbh_ctrl.model.isWatiNext
                        }
                        ,
                        e.prototype._refreshRoomName = function () {
                            this._lbRoomName.string = a.adbh_ctrl.model.roomNameStr()
                        }
                        ,
                        e.prototype._initUIEvent = function () {
                            s.ADBH_G.tool.addBtnClickEvent(null, this._morePlayerBtn, this._onClickMorePlayer, this, .95),
                                s.ADBH_G.tool.addBtnClickEvent(null, this._nodeRevoke, this._onClickRevoke, this, .95),
                                s.ADBH_G.tool.addBtnClickEvent(null, this._nodeRepeat, this._onClickRepeat, this, .95),
                                s.ADBH_G.tool.addBtnClickEvent(null, this._changeTableNode, this._onClickChgDesk, this, .95),
                                s.ADBH_G.tool.addBtnClickEvent(null, l.default.findNode(this.node, "btn_his"), this._onClickHis, this, .95),
                                this._changeTableNode.active = !!s.ADBH_G.user.isFormalUser()
                        }
                        ,
                        e.prototype._onClickHis = function () {
                            s.ADBH_G.ui_helper.multipleClick(s.ADBH_EVENT.BTNCLICKKEY) && s.ADBH_G.gameHelper.showGameDialog(s.ADBH_PATH.ADBHHis, "ADBHHis")
                        }
                        ,
                        e.prototype._onClickChgDesk = function () {
                            s.ADBH_G.ui_helper.multipleClick(s.ADBH_EVENT.BTNCLICKKEY) && a.adbh_ctrl.emitMessage(s.ADBH_EVENT.MONI_SHOW_CHANGETABLE)
                        }
                        ,
                        e.prototype._onClickRevoke = function () {
                            s.ADBH_G.ui_helper.multipleClick(s.ADBH_EVENT.BTNCLICKKEY) && a.adbh_ctrl.model.isCanRevoke() && a.adbh_ctrl.reqRevokeBet()
                        }
                        ,
                        e.prototype._onClickRepeat = function () {
                            s.ADBH_G.ui_helper.multipleClick(s.ADBH_EVENT.BTNCLICKKEY) && a.adbh_ctrl.model.isCanRepeat() && a.adbh_ctrl.reqRepeatBet()
                        }
                        ,
                        e.prototype._onClickMorePlayer = function () {
                            s.ADBH_G.ui_helper.multipleClick(s.ADBH_EVENT.BTNCLICKKEY) && s.ADBH_G.gameHelper.showBaseDialog("PlayerList", "PlayerList")
                        }
                        ,
                        r([A], e)
                }(cc.Component));
        o.default = g,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "../ADBHHelper": "ADBHHelper",
        "../chip/ADBHChipEvent": "ADBHChipEvent",
        "../chip/ADBHChipMgr": "ADBHChipMgr",
        "./ADBHAreaComp": "ADBHAreaComp",
        "./ADBHClock": "ADBHClock",
        "./ADBHPlayer": "ADBHPlayer"
    }],
    ADBHHelper: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "8b160Rwt4dMYLBMgy235Xf4", "ADBHHelper"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
        var i = t("./ADBHConfig")
            , n = function () {
                function t() { }
                return t.isAPI = function () {
                    return window.G.apiHelper.getIsApi()
                }
                    ,
                    t.setI18nResource = function (t, e, o, n, r) {
                        void 0 === n && (n = !0),
                            void 0 === r && (r = null),
                            i.ADBH_G.gameHelper.setI18nResource(t, e, o, n, r, !0)
                    }
                    ,
                    t.findNode = function (e, o) {
                        if (!e)
                            return null;
                        if (e.name == o)
                            return e;
                        var i = e.children;
                        if (i)
                            for (var n = 0, r = i.length; n < r; n++) {
                                var a = t.findNode(i[n], o);
                                if (a)
                                    return a
                            }
                        return null
                    }
                    ,
                    t.setPlayerNickname = function (t, e) {
                        if (t)
                            try {
                                e.refreshLb = t.nickname || ""
                            } catch (o) {
                                console.warn(o)
                            }
                    }
                    ,
                    t.setPlayerHead = function (t, e, o) {
                        if (t)
                            try {
                                i.ADBH_G.playerHelper.setPlayerHead(t, e, o)
                            } catch (n) {
                                console.warn(n)
                            }
                    }
                    ,
                    t.isZero = function (t) {
                        return t > -1e-6 && t < 1e-6
                    }
                    ,
                    t.randomInt = function (t, e) {
                        return t + Math.floor(Math.random() * (e - t + 1))
                    }
                    ,
                    t.getPokerBackTex = function () {
                        if (!cc.sys.isNative)
                            return window.PKCard.pokerBackTexture;
                        var t = cc.find("Canvas")
                            , e = t.findChild("adbh_render_tex");
                        if (e && cc.isValid(e))
                            return e.getComponent(cc.Sprite).spriteFrame.getTexture();
                        var o = (e = new cc.Node("adbh_render_tex")).addComponent(cc.Sprite)
                            , i = new cc.SpriteFrame;
                        i.setTexture(window.PKCard.pokerBackTexture),
                            o.spriteFrame = i,
                            t.addChild(e),
                            e.x = 3e3;
                        var n = window.G.tool.renderNodeToTexture(e);
                        return n.width = Math.ceil(.54 * n.width),
                            n.height = Math.ceil(.54 * n.height),
                            o.scheduleOnce(function () {
                                i.setTexture(n),
                                    e.active = !1
                            }, .03),
                            n
                    }
                    ,
                    t
            }();
        o.default = n,
            cc._RF.pop()
    }
        , {
        "./ADBHConfig": "ADBHConfig"
    }],
    ADBHHis: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "eb337K2vKdJnpFD2d5SUdoH", "ADBHHis");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHController")
            , l = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._tab_nums = [10, 50, 100, 250],
                            e._curTab = 0,
                            e._data = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._initTabs(),
                                this._selectTab(0),
                                this._initConts(),
                                a.ADBH_G.event.on(a.ADBH_EVENT.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP, this._onRsp, this),
                                a.ADBH_G.event.on(a.ADBH_EVENT.ANDARBARHAR_SETTLE_NOTIFY, this._onSettle, this),
                                s.adbh_ctrl.reqTrendTotal()
                        }
                        ,
                        e.prototype._onRsp = function (t) {
                            this._data = t,
                                this._refreshUI()
                        }
                        ,
                        e.prototype._onSettle = function () {
                            this.scheduleOnce(function () {
                                s.adbh_ctrl.reqTrendTotal()
                            }, .1)
                        }
                        ,
                        e.prototype._initConts = function () {
                            for (var t = this.node.findChild("content_bg/content_node/scroll/view/content"), e = a.ADBH_MAX_AREA_ID - a.ADBH_MIN_AREA_ID + 1, o = t.getChildByName("cont_1"), i = 1; i < e; i++)
                                o.children[i] || o.addChild(cc.instantiate(o.children[0]));
                            for (i = a.ADBH_MIN_AREA_ID; i <= a.ADBH_MAX_AREA_ID; i++)
                                (r = o.children[i - 1]).getChildByName("lb_area_name").getComponent(cc.Label).string = a.ADBH_AREA_CONFIG[i].name,
                                    r.getChildByName("progressBar").width = 0,
                                    r.getChildByName("lb_progress").getComponent(cc.Label).string = "0%";
                            var n = t.getChildByName("cont_2");
                            for (i = 1; i < l.length; i++)
                                n.children[i] || n.addChild(cc.instantiate(n.children[0]));
                            for (i = 0; i < l.length; i++) {
                                var r;
                                (r = n.children[i]).getChildByName("lb_card").getComponent(cc.Label).string = l[i],
                                    r.getChildByName("progressBarA").width = 0,
                                    r.getChildByName("lb_progressA").getComponent(cc.Label).string = "0%",
                                    r.getChildByName("progressBarB").width = 0,
                                    r.getChildByName("lb_progressB").getComponent(cc.Label).string = "0%"
                            }
                        }
                        ,
                        e.prototype._refreshUI = function () {
                            this._refreshCont1(),
                                this._refreshCont2()
                        }
                        ,
                        e.prototype._refreshCont1 = function () {
                            var t = this._tab_nums[this._curTab]
                                , e = this._data && this._data.info;
                            if (e && !(e.length <= 0)) {
                                var o = [0];
                                o.length = 11;
                                for (var i = 0; i < o.length; i++)
                                    o[i] = 0;
                                for (var n = 0, r = e.length - 1; r >= 0 && !(n >= t) && (o[e[r].areaCountInfo]++,
                                    o[e[r].jokerCountInfo.area]++,
                                    !(++n >= t)); r--)
                                    ;
                                var s = Math.min(t, e.length)
                                    , l = this.node.findChild("content_bg/content_node/scroll/view/content").getChildByName("cont_1")
                                    , c = o[a.ADBH_MIN_AREA_ID] / s;
                                c = Math.round(100 * c),
                                    this._setItem1Progress(l.children[a.ADBH_MIN_AREA_ID - 1], c),
                                    this._setItem1Progress(l.children[a.ADBH_MIN_AREA_ID], 100 - c);
                                var h = 100
                                    , _ = {
                                        item: null,
                                        v: 0
                                    };
                                for (r = 3; r <= a.ADBH_MAX_AREA_ID; r++) {
                                    var p = l.children[r - 1]
                                        , d = o[r] / s
                                        , u = Math.round(100 * d);
                                    this._setItem1Progress(p, u),
                                        h -= u,
                                        u > _.v && (_.v = u,
                                            _.item = p),
                                        console.log("\u7edf\u8ba1area", "[" + a.ADBH_AREATEXT[r] + "]", ":  ", o[r], "/", s, " = ", d, "  ", u)
                                }
                                0 != h && _.item && (console.log("\u603b\u548c\u4e0d\u662f100, \u5c06\u6700\u5927\u7684\u767e\u5206\u6bd4\u8fdb\u884c\u8c03\u6574, \u4f7f\u548c\u4e3a100 : ", h),
                                    this._setItem1Progress(_.item, _.v + h))
                            }
                        }
                        ,
                        e.prototype._setItem1Progress = function (t, e) {
                            t.getChildByName("progressBar").width = e / 100 * 570,
                                t.getChildByName("lb_progress").getComponent(cc.Label).string = e + "%"
                        }
                        ,
                        e.prototype._refreshCont2 = function () {
                            var t = this._tab_nums[this._curTab]
                                , e = this._data && this._data.info;
                            if (e && !(e.length <= 0)) {
                                var o = [];
                                o.length = 14;
                                for (var i = 0; i < o.length; i++)
                                    o[i] = [0, 0];
                                for (var n = 0, r = e.length - 1; r >= 0 && !(n >= t) && (o[e[r].jokerCountInfo.joker % 16][e[r].jokerCountInfo.area - 1]++,
                                    !(++n >= t)); r--)
                                    ;
                                var a = this.node.findChild("content_bg/content_node/scroll/view/content").getChildByName("cont_2");
                                for (r = 0; r < a.children.length; r++) {
                                    var s = a.children[r]
                                        , c = o[r + 1][0] + o[r + 1][1]
                                        , h = 0;
                                    0 != c && (h = o[r + 1][0] / c),
                                        h = Math.round(100 * h),
                                        s.getChildByName("progressBarA").width = h / 100 * 250,
                                        s.getChildByName("lb_progressA").getComponent(cc.Label).string = h + "%";
                                    var _ = 0;
                                    0 != c && (_ = 100 - h),
                                        s.getChildByName("progressBarB").width = _ / 100 * 250,
                                        s.getChildByName("lb_progressB").getComponent(cc.Label).string = _ + "%",
                                        console.log("[" + l[r] + "]", "  A:", o[r + 1][0], " B:", o[r + 1][1], " total:", c)
                                }
                            }
                        }
                        ,
                        e.prototype._selectTab = function (t) {
                            this._curTab = t;
                            for (var e = this.node.findChild("content_bg/tabs").children, o = 0; o < 4; o++)
                                e[o].getChildByName("unsel").active = t != o,
                                    e[o].getChildByName("sel").active = t == o;
                            this._refreshUI()
                        }
                        ,
                        e.prototype._initTabs = function () {
                            for (var t = this.node.findChild("content_bg/tabs").children, e = 0; e < 4; e++) {
                                var o = a.ADBH_G.tool.format(cc.i18n.t("adbh.xju"), this._tab_nums[e]);
                                t[e].findChild("unsel/lb_tab").getComponent(cc.Label).string = o,
                                    t[e].findChild("sel/lb_tab").getComponent(cc.Label).string = o,
                                    this._addTabClick(t[e], e)
                            }
                        }
                        ,
                        e.prototype._addTabClick = function (t, e) {
                            a.ADBH_G.tool.addBtnClickEvent(null, t, function () {
                                this._selectTab(e)
                            }, this, .95)
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHMainItemV: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "b2ee1k/il1DBJ2iYNLjlL3u", "ADBHMainItemV");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = cc._decorator
            , l = s.ccclass
            , c = s.property
            , h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bigRoadSfs = [],
                        e.bigEyeRoadSfs = [],
                        e.smallEyeRoadSfs = [],
                        e.beadRoadSfs = [],
                        e.cockRoadSfs = [],
                        e.bigEyeRoadSfs_small = [],
                        e.smallEyeRoadSfs_small = [],
                        e.cockRoadSfs_small = [],
                        e.room_info_prefab = null,
                        e.summary_info_prefab = null,
                        e.ask_road_info_prefab = null,
                        e.trend_info_prefab = null,
                        e.bsLabels = [],
                        e.base_item = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        var t = this;
                        this.node.getChildByName("gridline") && (this.node.getChildByName("gridline").zIndex = 1),
                            this.bsLabels.forEach(function (e, o) {
                                t.bsLabels[o] = cc.i18n.t(e)
                            });
                        var e = [a.ADBH_STATUS.Start, a.ADBH_STATUS.OpenCard, a.ADBH_STATUS.Award];
                        this.base_item = this.node.addComponent("BetMainItem_H").init(this, ["", "adbh.jiesuanzhong", "adbh.xiazhuzhong", "adbh.kaipaizhong", "adbh.jiesuanzhong"], e),
                            this.node.on("update_data", this.updateData, this)
                    }
                    ,
                    e.prototype.updateData = function (t) {
                        this.base_item.updateData(t)
                    }
                    ,
                    r([c(cc.SpriteFrame)], e.prototype, "bigRoadSfs", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "bigEyeRoadSfs", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "smallEyeRoadSfs", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "beadRoadSfs", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "cockRoadSfs", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "bigEyeRoadSfs_small", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "smallEyeRoadSfs_small", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "cockRoadSfs_small", void 0),
                    r([c(cc.Prefab)], e.prototype, "room_info_prefab", void 0),
                    r([c(cc.Prefab)], e.prototype, "summary_info_prefab", void 0),
                    r([c(cc.Prefab)], e.prototype, "ask_road_info_prefab", void 0),
                    r([c(cc.Prefab)], e.prototype, "trend_info_prefab", void 0),
                    r([c([cc.String])], e.prototype, "bsLabels", void 0),
                    r([l], e)
            }(cc.Component);
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig"
    }],
    ADBHMainSummaryInfo_H: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "3061ciqR+lB1YSQavLWSrcu", "ADBHMainSummaryInfo_H");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = cc._decorator, l = s.ccclass, c = (s.property,
            function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ui_node = null,
                        e.total_num = null,
                        e.andar_num = null,
                        e.bahar_num = null,
                        e
                }
                return n(e, t),
                    e.prototype.init = function (t) {
                        this.ui_node = cc.instantiate(t),
                            this.ui_node.parent = this.node,
                            this.total_num = this.ui_node.getChildByName("total").getComponent(cc.Label),
                            this.andar_num = this.ui_node.getChildByName("andar").getComponent(cc.Label),
                            this.bahar_num = this.ui_node.getChildByName("bahar").getComponent(cc.Label)
                    }
                    ,
                    e.prototype.updateData = function (t) {
                        t = this.summaryData(t),
                            this.total_num.string = cc.i18n.t("adbh.jushu") + t.total,
                            this.andar_num.string = cc.i18n.t("adbh.andar") + ": " + t.andarPer + "%",
                            this.bahar_num.string = cc.i18n.t("adbh.bahar") + ": " + t.baharPer + "%"
                    }
                    ,
                    e.prototype.updateParsedData = function (t) {
                        var e, o = window.G.pbTool.getCls("com_protocol.EGameShowStatus").values;
                        e = t && t.winNameType && t.roomStatus == o.EShowStatusOpen ? this._calData(t) : {
                            total: 0,
                            andar: 0,
                            bahar: 0,
                            andarPer: 0,
                            baharPer: 0
                        },
                            this.total_num.string = cc.i18n.t("adbh.jushu") + e.total,
                            this.andar_num.string = cc.i18n.t("adbh.andar") + ": " + e.andarPer + "%",
                            this.bahar_num.string = cc.i18n.t("adbh.bahar") + ": " + e.baharPer + "%"
                    }
                    ,
                    e.prototype.summaryData = function (t) {
                        var e = window.G.pbTool.getCls("com_protocol.EGameShowStatus").values;
                        if (null == t || !t.winNameType || t.roomStatus != e.EShowStatusOpen)
                            return {
                                total: 0,
                                andar: 0,
                                bahar: 0,
                                andarPer: 0,
                                baharPer: 0
                            };
                        var o = window.G.pbTool.getCls("com_protocol.AndarBarharTrendInfo").decode(new Uint8Array(t.winNameType));
                        return this._calData(o)
                    }
                    ,
                    e.prototype._calData = function (t) {
                        var e = {
                            total: 0,
                            andar: 0,
                            bahar: 0,
                            andarPer: 0,
                            baharPer: 0
                        };
                        if (!t)
                            return e;
                        for (var o = 0, i = t.winNameType || []; o < i.length; o++) {
                            var n = i[o];
                            e.total++,
                                n.winNameType == a.EAndarBarharAndar ? e.andar++ : e.bahar++
                        }
                        return 0 != e.total && (e.andarPer = Math.floor(e.andar / e.total * 100),
                            e.baharPer = 100 - e.andarPer),
                            e
                    }
                    ,
                    r([l], e)
            }(cc.Component));
        o.default = c,
            function (t) {
                t[t.EAndarBarharAndar = 120] = "EAndarBarharAndar",
                    t[t.EAndarBarharBarhar = 121] = "EAndarBarharBarhar"
            }(a || (a = {})),
            cc._RF.pop()
    }
        , {}],
    ADBHMainV: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "8081eY8Y6BIYLYBr5NIPULH", "ADBHMainV");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHHelper")
            , l = cc._decorator
            , c = l.ccclass
            , h = l.property
            , _ = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.itemPrefab = null,
                        e.serviceList = null,
                        e.selectList = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        var t = this;
                        window.G.gameHelper.registBetAreaIdMap(a.ADBH_AREATEXT),
                            a.AnbaDefine.init(),
                            this.scheduleOnce(function () {
                                t._initView()
                            }, .03),
                            this.scheduleOnce(function () {
                                t._loadFastSpine()
                            }, .2)
                    }
                    ,
                    e.prototype._initView = function () {
                        var t = this.addComponent("MainTopUI_V");
                        t.onInitCompleted(function (e) {
                            t.setRuleContent();
                            var o = e.getChildByName("logo");
                            o && (t.addWidgetOffset({
                                top: -18
                            }, o),
                                o.children[0] && o.children[0].getComponent(sp.Skeleton) && (o.children[0].getComponent(sp.Skeleton).premultipliedAlpha = !1))
                        });
                        var e = this.addComponent("MainTopUIAddition_V");
                        e.onInitCompleted(function () {
                            e.addWidgetOffset({
                                top: -61
                            }),
                                e.addWidgetOffset({
                                    left: -18,
                                    bottom: 5
                                }, e.getGoldPoolNode()),
                                e.addWidgetOffset({
                                    right: -18,
                                    bottom: 5
                                }, e.getMusicNode())
                        }),
                            this._isAPI() && (cc.find("service_list/view/content", this.node).getComponent(cc.Layout).spacingY = 18),
                            this.addComponent("MainBottomUI_V").init(this),
                            this.serviceList = this.addComponent("BetMainServiceList_V"),
                            this.serviceList.setOffsetForAPI(140),
                            this.serviceList.init(this.itemPrefab, window.G.gameHelper.gameType, .5),
                            this._loadTab(),
                            s.default.getPokerBackTex()
                    }
                    ,
                    e.prototype._loadTab = function () {
                        var t = this
                            , e = window.G.gameHelper.getBasePath() + "main_com/prefabs/select_room_type";
                        window.G.resMaster.loadResEx(e, cc.Prefab, function () {
                            cc.isValid(t.node) && t._initTab()
                        }, this)
                    }
                    ,
                    e.prototype._initTab = function () {
                        var t = this;
                        this.selectList = this.addComponent("SelectRoomList_V"),
                            this.selectList.init(5, this, window.G.gameHelper.gameType, 0, !1, function (e) {
                                var o = cc.find("select_list/view/content", e).getComponent(cc.Layout);
                                o.spacingX = 14,
                                    o.resizeMode = cc.Layout.ResizeMode.NONE,
                                    t._isAPI() ? t.selectList.addWidgetOffset({
                                        top: -25,
                                        left: 100
                                    }, e) : t.selectList.addWidgetOffset({
                                        top: -30,
                                        left: 100
                                    }, e),
                                    o.updateLayout()
                            })
                    }
                    ,
                    e.prototype.onEnable = function () {
                        null != this.selectList && cc.isValid(this.selectList) && this.selectList.refresh()
                    }
                    ,
                    e.prototype.fastStart = function () {
                        this.serviceList.fastStart()
                    }
                    ,
                    e.prototype._isAPI = function () {
                        return window.G.apiHelper.getIsApi()
                    }
                    ,
                    e.prototype._loadFastSpine = function () {
                        var t = this;
                        window.G.resMaster.loadResEx("games/adbh/general/animations/kuaisukaishi", sp.SkeletonData, function (e, o) {
                            if (e)
                                cc.warn(e.message || e);
                            else if (cc.isValid(t) && cc.isValid(t.node)) {
                                var i = t.node.getChildByName("btn_fast_start")
                                    , n = new cc.Node
                                    , r = n.addComponent(sp.Skeleton);
                                i.addChild(n),
                                    r.skeletonData = o,
                                    r.premultipliedAlpha = !1,
                                    r.setAnimation(0, "animation", !0),
                                    n.x = -i.width / 2,
                                    n.y = i.height / 2
                            }
                        }, this)
                    }
                    ,
                    r([h(cc.Prefab)], e.prototype, "itemPrefab", void 0),
                    r([c], e)
            }(cc.Component);
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHHelper": "ADBHHelper"
    }],
    ADBHMarquee: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e0190JluJlBcI1lpbiVC7y2", "ADBHMarquee");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./ADBHConfig")
            , s = cc._decorator
            , l = s.ccclass
            , c = (s.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.replaceMarqueeContent = function (t, e, o) {
                            var i = a.ADBH_G.gameHelper.getRunningGameName()
                                , n = cc.i18n.t(a.ADBH_ROOM_LEVEL_TO_NAME[o[0]].keyName);
                            switch (t) {
                                case 1:
                                case 2:
                                case 3:
                                    e = a.ADBH_G.tool.format(e, o[1], i, n, a.ADBH_G.tool.formatGoldInGame(o[2]));
                                    break;
                                case 4:
                                    e = a.ADBH_G.tool.format(e, o[1], i, n, "\u3010" + a.ADBH_AREA_CONFIG[o[2]].name + "\u3011")
                            }
                            return e
                        }
                        ,
                        r([l], e)
                }(cc.Component));
        o.default = c,
            cc._RF.pop()
    }
        , {
        "./ADBHConfig": "ADBHConfig"
    }],
    ADBHModel: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "ffdfeYMqulGHLGLPpKqiaHJ", "ADBHModel");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./ADBHConfig")
            , s = t("./ADBHController")
            , l = t("./ADBHOp5Tip")
            , c = function () {
                function t(t) {
                    this._areaId = 0,
                        this.totalBet = 0,
                        this.meBet = 0,
                        this._areaId = t
                }
                return t.prototype.othersBet = function () {
                    return this.totalBet - this.meBet
                }
                    ,
                    Object.defineProperty(t.prototype, "areaId", {
                        get: function () {
                            return this._areaId
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    t
            }()
            , h = cc._decorator
            , _ = h.ccclass
            , p = (h.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._chipConfig5 = null,
                            e._chipConfig5Infos = [],
                            e._chipSelectConfig = null,
                            e._chipSelectConfigInfos = [],
                            e._room = null,
                            e._game = null,
                            e.op5Tip = new l.default,
                            e._gameStatus = 0,
                            e._remainSec = 0,
                            e._totalSec = 0,
                            e._resultCards = [],
                            e._jokerCard = 0,
                            e._selfWinGold = 0,
                            e._areaDatas = [],
                            e._cancelFlag = !1,
                            e._lastAreaBet = null,
                            e._paijuhaoChanged = !1,
                            e._paijuhao = "",
                            e._isWatiNext = !1,
                            e._currentBetIndex = -1,
                            e._morePlayerIndex = 0,
                            e._morePlayerNearInnings = 0,
                            e._morePlayerInfoList = [],
                            e._playerCount = 0,
                            e._trend = null,
                            e._bigRoad = null,
                            e._bigEyeRoad = null,
                            e._smallEyeRoad = null,
                            e._cockRoad = null,
                            e._beadRoad = null,
                            e._redwin = null,
                            e._blackwin = null,
                            e._roomList = null,
                            e._userVersion = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            console.log("----onLoad ADBHModel"),
                                this.resetAreaDatas(),
                                this.initRoomData(),
                                this.initGameData(),
                                this.reconnectGold(),
                                this.schedule(this._doCD.bind(this), .5)
                        }
                        ,
                        e.prototype.initRoomData = function () {
                            if (a.ADBH_G.gameRouter.roomInterface) {
                                var t = a.ADBH_G.gameRouter.roomInterface.room_model.getRoomData();
                                if (this.initGameInfo(t.gameInfo),
                                    this._room = t.roomInfo,
                                    this._room.andarbaharRoom = a.ADBH_G.pbTool.getCls("com_protocol.AndarBarharRoomInfo").decode(new Uint8Array(this._room.gameRoomInfo)),
                                    this._game) {
                                    var e = this._game.parsedGameData.lastChipConfig || [];
                                    e.length > 0 && (this._room.andarbaharRoom.chipConfig = e)
                                }
                                console.log("=======> room data: ", this._room.andarbaharRoom),
                                    this.setRoomConfigProperty(this._room.andarbaharRoom)
                            }
                        }
                        ,
                        e.prototype.initGameInfo = function (t) {
                            if (t) {
                                this._game = t;
                                var e = a.ADBH_G.pbTool.getCls("com_protocol.AndarBarharGameInfo").decode(new Uint8Array(t.gameData));
                                if (this._game.parsedGameData = e,
                                    this.gameStatus = t.baseData.gameStatus,
                                    console.log("=======> baseData: ", t.baseData),
                                    console.log("=======> gameData: ", e),
                                    this.resetAreaDatas(),
                                    e.areaInfo)
                                    for (var o = 0, i = e.areaInfo; o < i.length; o++) {
                                        var n = i[o];
                                        this.getAreaData(n.areaId).totalBet = n.betSum
                                    }
                                if (e.betInfo)
                                    for (var r = 0, s = e.betInfo; r < s.length; r++) {
                                        var l = s[r];
                                        this.getAreaData(l.areaId).meBet = l.betValue
                                    }
                                this.cancelFlag = e.cancelFlag || !1,
                                    this.playerCount = e.playerCount,
                                    this.paijuhao = e.recordId,
                                    this._lastAreaBet = e.lastAreaBet,
                                    this._parseOpenCardData(e, e.jaker),
                                    this.jokerCard = e.jaker,
                                    this.setStateCD(e.waitMillisecs, e.totalMillisecs)
                            }
                        }
                        ,
                        e.prototype.reconnectGold = function () {
                            if (this.gameStatus == a.ADBH_STATUS.Bet || this.gameStatus == a.ADBH_STATUS.OpenCard) {
                                for (var t = this.getUserGold(), e = 0, o = 0, i = this._areaDatas; o < i.length; o++) {
                                    var n = i[o];
                                    n.meBet && (e += n.meBet)
                                }
                                var r = t - e;
                                console.log("=====>\u4fee\u6b63\u91d1\u5e01: ", t + " - " + e, " = ", r, "   ", this.paijuhao),
                                    this.setUserGold(r)
                            } else
                                console.log("=====>\u4fee\u6b63\u91d1\u5e01: \u65e0\u9700\u4fee\u6b63")
                        }
                        ,
                        e.prototype._parseOpenCardData = function (t, e) {
                            if (t.areaInfo)
                                if (this.gameStatus == a.ADBH_STATUS.OpenCard || this.gameStatus == a.ADBH_STATUS.Award) {
                                    var o = {
                                        allPokers: []
                                    };
                                    o.allPokers.push(e);
                                    for (var i = t.areaInfo[0] && t.areaInfo[0].poker || [], n = t.areaInfo[1] && t.areaInfo[1].poker || [], r = Math.max(i.length, n.length), s = 0; s < r; s++)
                                        i[s] && o.allPokers.push(i[s]),
                                            n[s] && o.allPokers.push(n[s]);
                                    this.openCardData = o
                                } else
                                    this.openCardData = null
                        }
                        ,
                        e.prototype.initGameData = function () {
                            null == this._game && (this._game = a.ADBH_G.pbTool.getCls("com_protocol.ChessHallGameData").create()),
                                null == this._game.baseData && (this._game.baseData = a.ADBH_G.pbTool.getCls("com_protocol.ChessHallGameBaseData").create()),
                                null == this._game.parsedGameData && (this._game.parsedGameData = a.ADBH_G.pbTool.getCls("com_protocol.AndarBarharGameInfo").create()),
                                this.gameStatus > a.ADBH_STATUS.Bet && (this.isWatiNext = !0)
                        }
                        ,
                        e.prototype.setRoomConfigProperty = function (t) {
                            if (t) {
                                if (t.chipConfig) {
                                    var e = t.chipConfig.slice(0, 5);
                                    this.setChipConfig(e),
                                        this._chipSelectConfig = t.chipAllConfig,
                                        this._chipSelectConfigInfos.length = 0,
                                        this._setChipsInfo(this._chipSelectConfig, this._chipSelectConfigInfos)
                                }
                                if (t.areaRate)
                                    for (var o = 0, i = t.areaRate; o < i.length; o++) {
                                        var n = i[o];
                                        a.ADBH_AREA_CONFIG[n.areaId].rate = n.rate
                                    }
                            }
                        }
                        ,
                        e.prototype.setChipConfig = function (t) {
                            !t || t.length < 5 || (this._chipConfig5 = t,
                                this._chipConfig5Infos.length = 0,
                                this._setChipsInfo(this._chipConfig5, this._chipConfig5Infos))
                        }
                        ,
                        e.prototype._setChipsInfo = function (t, e) {
                            var o = this;
                            t.forEach(function (t) {
                                var i = new a.ChipShowInfo(t.chipSeq, t.chipValue);
                                i.originalIndexInfo = o.getChipResIndexByValue(t.chipValue),
                                    e.push(i)
                            })
                        }
                        ,
                        Object.defineProperty(e.prototype, "tableId", {
                            get: function () {
                                return this._game.baseData.tableId
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "gameRoomLevel", {
                            get: function () {
                                return this._room.baseInfo.level
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "gameType", {
                            get: function () {
                                return this._room.baseInfo.gameType
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "roomInterface", {
                            get: function () {
                                return a.ADBH_G.gameRouter && a.ADBH_G.gameRouter.roomInterface
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "roomModel", {
                            get: function () {
                                return a.ADBH_G.gameRouter && a.ADBH_G.gameRouter.roomInterface && a.ADBH_G.gameRouter.roomInterface.room_model
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.roomNameStr = function () {
                            var t = this.roomModel && this.roomModel.getRoomData();
                            if (!t)
                                return "";
                            var e = t.roomInfo.baseInfo.level;
                            a.ADBH_G.user.isFormalUser() || (e = 0);
                            var o = ["gamebase.shiwanting", "gamebase.tiyanting", "gamebase.yuleting", "gamebase.qijianting", "gamebase.fuhaoting", "gamebase.zhizunting"];
                            return 0 == e ? cc.i18n.t(o[e]) : cc.i18n.t(o[e]) + " 0" + this.tableId
                        }
                        ,
                        e.prototype.getDashangGold = function () {
                            return Number(.1 * this.chipSelectConfig[0].chipValue)
                        }
                        ,
                        e.prototype.getGameMinGold = function () {
                            return Number(this.chipConfig[0].chipValue)
                        }
                        ,
                        e.prototype.getZhunru = function () {
                            return this._room.baseInfo.needMinGold
                        }
                        ,
                        e.prototype.checkShowRechargeTip = function () {
                            return !this.isMeBetted() && this.gameStatus == a.ADBH_STATUS.Bet && this.getUserGold() < this.getGameMinGold() && (a.ADBH_G.gameHelper.gameRecharge.showRechargeTip(),
                                !0)
                        }
                        ,
                        e.prototype.hasEnoughGold = function (t) {
                            return !(this.checkShowRechargeTip() || this.getUserGold() < t && (a.ADBH_G.ui_helper.showTopTipError(a.ADBH_TIPS.NOT_ENOUGH_GOLD),
                                1))
                        }
                        ,
                        e.prototype.getAreaLimit = function (t) {
                            if (!this._room || !this._room.andarbaharRoom || !this._room.andarbaharRoom.areaRewardLimit)
                                return null;
                            for (var e = 0, o = this._room.andarbaharRoom.areaRewardLimit; e < o.length; e++) {
                                var i = o[e];
                                if (i.areaId == t)
                                    return i
                            }
                            return null
                        }
                        ,
                        e.prototype.getAllAreaLimit = function () {
                            return this._room && this._room.andarbaharRoom && this._room.andarbaharRoom.areaRewardLimit ? this._room.andarbaharRoom.areaRewardLimit : null
                        }
                        ,
                        e.prototype.limitConfigNotify = function (t) {
                            if (t.betGameAreaLimit) {
                                for (var e = t.betGameAreaLimit, o = function (t) {
                                    i._room.andarbaharRoom.areaRewardLimit.forEach(function (e) {
                                        e.areaId == t.areaId && (e.playerRewardLimit = t.limitValue)
                                    })
                                }, i = this, n = 0, r = e.singlePersonMaxBet; n < r.length; n++)
                                    o(r[n]);
                                for (var a = function (t) {
                                    s._room.andarbaharRoom.areaRewardLimit.forEach(function (e) {
                                        e.areaId == t.areaId && (e.sumRewardLimit = t.limitValue)
                                    })
                                }, s = this, l = 0, c = e.sumMaxBet; l < c.length; l++)
                                    a(c[l])
                            }
                        }
                        ,
                        e.prototype.onStateStart = function () {
                            this.resetAreaDatas(),
                                this._selfWinGold = 0,
                                this.openCardData = null,
                                this.cancelFlag = !1,
                                this.isWatiNext = !1
                        }
                        ,
                        Object.defineProperty(e.prototype, "isCanLeave", {
                            get: function () {
                                return !this.isMeBetted()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "gameStatus", {
                            get: function () {
                                return this._gameStatus
                            },
                            set: function (t) {
                                this._gameStatus = t,
                                    console.log("======> gameStatus: ", t)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "isBetStatus", {
                            get: function () {
                                return this.gameStatus == a.ADBH_STATUS.Bet
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.setStateCD = function (t, e) {
                            this._remainSec = (t || 0) / 1e3,
                                this._totalSec = Math.round((e || 0) / 1e3),
                                this._remainSec < 0 && (this._remainSec = 0);
                            var o = {
                                msRemain: t || 0,
                                msTotal: e
                            };
                            console.log("====> setStateCD: ", this._remainSec, " ", this._totalSec),
                                a.ADBH_G.event.emit(a.ADBH_EVENT.STATE_CD, o)
                        }
                        ,
                        e.prototype._doCD = function (t) {
                            this._remainSec -= t
                        }
                        ,
                        e.prototype.onEnterFront = function (t) {
                            this._remainSec -= t / 1e3,
                                this._remainSec < 0 && (this._remainSec = 0),
                                console.log("\u56de\u524d\u53f0\u65f6\u4fee\u6b63\u5269\u4f59\u65f6\u95f4: ", this._remainSec)
                        }
                        ,
                        e.prototype.getRemainSec = function () {
                            return this._remainSec
                        }
                        ,
                        e.prototype.getTotalSec = function () {
                            return this._totalSec
                        }
                        ,
                        Object.defineProperty(e.prototype, "jokerCard", {
                            get: function () {
                                return this._jokerCard
                            },
                            set: function (t) {
                                this._jokerCard = t,
                                    this._resultCards[0] = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "openCardData", {
                            set: function (t) {
                                if (this._resultCards = [],
                                    t) {
                                    var e = []
                                        , o = t.allPokers[0];
                                    e.push(o);
                                    for (var i = o % 16, n = 1; n < t.allPokers.length && (e.push(t.allPokers[n]),
                                        t.allPokers[n] % 16 != i); n++)
                                        ;
                                    this._resultCards = e,
                                        this._jokerCard = e[0]
                                }
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.getResultCards = function () {
                            return this._resultCards || []
                        }
                        ,
                        e.prototype.getAndarBaharByCardCnt = function (t) {
                            return t % 2 == 1
                        }
                        ,
                        e.prototype.getAreaIdByCardCnt = function (t) {
                            return t <= 0 ? -1 : t <= 5 ? 3 : t <= 10 ? 4 : t <= 15 ? 5 : t <= 25 ? 6 : t <= 30 ? 7 : t <= 35 ? 8 : t <= 40 ? 9 : 10
                        }
                        ,
                        e.prototype.settlement = function (t) {
                            if (!t)
                                return 0;
                            var e = 0
                                , o = 0;
                            if (t.playerItem) {
                                for (var i = 0, n = t.playerItem; i < n.length; i++) {
                                    var r = n[i];
                                    r.itemChange.num && r.itemChange.num > 0 ? (e += r.itemChange.num,
                                        o += r.itemChange.num - this.getPlayerBetValue(a.ADBH_G.user.getUserId(), r.areaId)) : o -= this.getPlayerBetValue(a.ADBH_G.user.getUserId(), r.areaId)
                                }
                                this.addUserGold(e)
                            }
                            this._selfWinGold = o
                        }
                        ,
                        e.prototype.getMyWinValue = function () {
                            return this._selfWinGold
                        }
                        ,
                        e.prototype.getPlayerBetValue = function (t, e) {
                            return this.getAreaData(e).meBet
                        }
                        ,
                        e.prototype.resetAreaDatas = function () {
                            for (var t = 0; t <= a.ADBH_MAX_AREA_ID; t++)
                                this._areaDatas[t] = this._areaDatas[t] || new c(t),
                                    this._areaDatas[t].meBet = 0,
                                    this._areaDatas[t].totalBet = 0
                        }
                        ,
                        e.prototype.getAreaData = function (t) {
                            return this._areaDatas[t] = this._areaDatas[t] || new c(t),
                                this._areaDatas[t]
                        }
                        ,
                        e.prototype.isMeBetted = function () {
                            for (var t = 0, e = this._areaDatas; t < e.length; t++)
                                if (e[t].meBet > 0)
                                    return !0;
                            return !1
                        }
                        ,
                        Object.defineProperty(e.prototype, "cancelFlag", {
                            get: function () {
                                return this._cancelFlag
                            },
                            set: function (t) {
                                this._cancelFlag = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.isCanRevoke = function () {
                            return this.gameStatus == a.ADBH_STATUS.Bet && this.isMeBetted() && !this.cancelFlag
                        }
                        ,
                        e.prototype.saveLastAreaBet = function () {
                            for (var t = !1, e = [], o = 0, i = this._areaDatas; o < i.length; o++) {
                                var n = i[o];
                                n.meBet > 0 && (e.push({
                                    areaId: n.areaId,
                                    betValue: n.meBet
                                }),
                                    t = !0)
                            }
                            t && (this._lastAreaBet = e)
                        }
                        ,
                        e.prototype.isCanRepeat = function () {
                            if (!this._lastAreaBet || this._lastAreaBet.length <= 0)
                                return !1;
                            if (this.gameStatus != a.ADBH_STATUS.Bet || this.isMeBetted())
                                return !1;
                            for (var t = 0, e = 0, o = this._lastAreaBet; e < o.length; e++)
                                t += o[e].betValue || 0;
                            return !(this.getUserGold() < t)
                        }
                        ,
                        Object.defineProperty(e.prototype, "paijuhao", {
                            get: function () {
                                return this._paijuhao
                            },
                            set: function (t) {
                                this._paijuhaoChanged = t != this._paijuhao,
                                    console.log("\u724c\u5c40\u53f7\u66f4\u65b0 ", this._paijuhao, " ---\x3e ", t, "  ", this._paijuhaoChanged),
                                    this._paijuhao = t,
                                    a.ADBH_G.event.emitNow(a.ADBH_EVENT.PAI_JU_HAO, this._paijuhao)
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.isPaijuhaoChanged = function () {
                            return this._paijuhaoChanged
                        }
                        ,
                        Object.defineProperty(e.prototype, "isWatiNext", {
                            get: function () {
                                return this._isWatiNext && !this.isMeBetted()
                            },
                            set: function (t) {
                                this._isWatiNext = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.getMaxWinNum = function () {
                            return this._game.parsedGameData.maxKeepWin || 0
                        }
                        ,
                        e.prototype.getCurMaxWin = function () {
                            return this._game.parsedGameData.currentKeepWin || 0
                        }
                        ,
                        Object.defineProperty(e.prototype, "chipConfig", {
                            get: function () {
                                return this._chipConfig5Infos
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "chipConfig5Infos", {
                            get: function () {
                                return this._chipConfig5Infos
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "chipSelectConfig", {
                            get: function () {
                                return this._chipSelectConfig
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "chipSelectConfigInfos", {
                            get: function () {
                                return this._chipSelectConfigInfos
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.getChipIdxByValue = function (t) {
                            for (var e = 0; e < this._chipConfig5Infos.length; e++)
                                if (this._chipConfig5Infos[e].chipValue == t)
                                    return e;
                            return -1
                        }
                        ,
                        e.prototype.getChipInfoByChipSeq = function (t) {
                            var e = this.chipSelectConfigInfos.find(function (e) {
                                return e.chipSeq == t
                            });
                            return e || (e = this.chipSelectConfigInfos[0],
                                cc.error("\u7b79\u7801\u53d6\u503c\u5931\u8d25 getChipInfoByChipSeq() -> index\uff1a", t)),
                                e
                        }
                        ,
                        e.prototype.getChipValueByChipSeq = function (t) {
                            var e = this.getChipInfoByChipSeq(t);
                            return e ? e.chipValue : 0
                        }
                        ,
                        e.prototype.getChipInfoByChipIdx = function (t) {
                            var e = this.chipConfig[t];
                            return this.getChipInfoByChipSeq(e.chipSeq)
                        }
                        ,
                        e.prototype.getChipResIndexByValue = function (t) {
                            var e = Number(t)
                                , o = a.ADBH_CHIP_ORIGINAL_INDEX[e];
                            if (o)
                                return o;
                            var i = 0;
                            for (var n in a.ADBH_CHIP_ORIGINAL_INDEX)
                                0 == i && (i = Number(n)),
                                    Number(n) < t && (i = Number(n));
                            return a.ADBH_CHIP_ORIGINAL_INDEX[i]
                        }
                        ,
                        e.prototype.getRectChipCount = function () {
                            for (var t = 0, e = 0, o = this.chipConfig; e < o.length; e++)
                                o[e].isCircle || t++;
                            return t
                        }
                        ,
                        Object.defineProperty(e.prototype, "AllChipConfig", {
                            get: function () {
                                return this._chipConfig5
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.checkSelectChipShowTip = function () { }
                        ,
                        Object.defineProperty(e.prototype, "currentBetIndex", {
                            get: function () {
                                return this._currentBetIndex
                            },
                            set: function (t) {
                                this._currentBetIndex = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.setUserGold = function (t) {
                            if (null != t) {
                                var e = this.roomModel
                                    , o = this.getUserGold();
                                e && e.updateGold(a.ADBH_G.user.getUserId(), t),
                                    a.ADBH_G.user.setGold(t),
                                    console.log("---set usergold: ", o, "----\x3e", t),
                                    a.ADBH_G.event.emit(a.ADBH_EVENT.UPDATE_SELF_GOLD)
                            }
                        }
                        ,
                        e.prototype.addUserGold = function (t) {
                            if (null != t && 0 != t) {
                                var e = this.roomModel
                                    , o = this.getUserGold()
                                    , i = o + t;
                                i < 0 && (console.warn("[Error] curGold\u5c0f\u4e8e0: ", i),
                                    i < 1 && s.adbh_ctrl.gameRestoreReq(),
                                    i = 0),
                                    e && e.updateGold(a.ADBH_G.user.getUserId(), i),
                                    a.ADBH_G.user.setGold(i),
                                    console.log("---add usergold: ", o, " + (", t, ") = ", i)
                            }
                        }
                        ,
                        e.prototype.getUserGold = function () {
                            return a.ADBH_G.user.getGold() || 0
                        }
                        ,
                        e.prototype.addPlayerGold = function (t, e) {
                            if (null != e && 0 != e)
                                if (t == a.ADBH_G.user.getUserId())
                                    this.addUserGold(e),
                                        a.ADBH_G.event.emit(a.ADBH_EVENT.UPDATE_SELF_GOLD);
                                else {
                                    var o = this.roomModel && this.roomModel.getPlayer(t);
                                    if (o) {
                                        var i = Math.max(o.detailInfo.dynamicInfo.gameGold, 0);
                                        this.roomModel.updateGold(t, i + e)
                                    }
                                }
                        }
                        ,
                        Object.defineProperty(e.prototype, "morePlayerIndex", {
                            get: function () {
                                return this._morePlayerIndex
                            },
                            set: function (t) {
                                this._morePlayerIndex = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "morePlayerNearInnings", {
                            get: function () {
                                return this._morePlayerNearInnings
                            },
                            set: function (t) {
                                this._morePlayerNearInnings = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "morePlayerInfoList", {
                            get: function () {
                                return this._morePlayerInfoList
                            },
                            set: function (t) {
                                this._morePlayerInfoList = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.putMorePlayerInfo = function (t, e) {
                            null == t || t.length <= 0 || (null != e && this._morePlayerInfoList.length > e && this._morePlayerInfoList.splice(e),
                                this._morePlayerInfoList = this._morePlayerInfoList.concat(t))
                        }
                        ,
                        Object.defineProperty(e.prototype, "playerCount", {
                            get: function () {
                                return this._playerCount
                            },
                            set: function (t) {
                                this._playerCount = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "trend", {
                            get: function () {
                                return this._trend
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "bigRoad", {
                            get: function () {
                                return s.adbh_ctrl.roadMain.road_tool.getADBHBigRoads()
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "bigEyeRoad", {
                            get: function () {
                                return null == this._bigEyeRoad && (this._bigEyeRoad = s.adbh_ctrl.roadMain.road_tool.getBigEye()),
                                    this._bigEyeRoad
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "smallEyeRoad", {
                            get: function () {
                                return null == this._smallEyeRoad && (this._smallEyeRoad = s.adbh_ctrl.roadMain.road_tool.getSmallEye()),
                                    this._smallEyeRoad
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "cockRoad", {
                            get: function () {
                                return null == this._cockRoad && (this._cockRoad = s.adbh_ctrl.roadMain.road_tool.getCockroach()),
                                    this._cockRoad
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "beadRoad", {
                            get: function () {
                                if (null == this._beadRoad || this._beadRoad.length <= 0) {
                                    this._beadRoad = [];
                                    for (var t = s.adbh_ctrl.roadMain.road_tool.getBeadPlate(), e = 0; e < t.length; e++)
                                        this._beadRoad[e] = t[e]
                                }
                                return this._beadRoad
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "redwin", {
                            get: function () {
                                return this._redwin = s.adbh_ctrl.roadMain.road_tool.getRedWinNextRoad(),
                                    this._redwin
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "blackwin", {
                            get: function () {
                                return this._blackwin = s.adbh_ctrl.roadMain.road_tool.getblueWinNextRoad(),
                                    this._blackwin
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        e.prototype.gameRoads = function (t) {
                            this._trend = t,
                                this._trend.trendInfo = a.ADBH_G.pbTool.getCls("com_protocol.AndarBarharTrendInfo").decode(new Uint8Array(t.trendInfo));
                            for (var e = [], o = 0, i = this._trend.trendInfo.winNameType; o < i.length; o++) {
                                var n = i[o];
                                e.push(n)
                            }
                            s.adbh_ctrl.roadMain.road_tool.init(e),
                                this._bigRoad = null,
                                this._bigEyeRoad = null,
                                this._smallEyeRoad = null,
                                this._cockRoad = null,
                                this._beadRoad = null
                        }
                        ,
                        e.prototype.hallRoads = function (t) {
                            this._userVersion = t.userVersion,
                                this.roomList = t.trendData;
                            for (var e = 0, o = this.roomList; e < o.length; e++) {
                                var i = o[e]
                                    , n = window.G.pbTool.getCls("com_protocol.AndarBarharTrendInfo").decode(new Uint8Array(i.winNameType));
                                i.winInfo = n
                            }
                        }
                        ,
                        Object.defineProperty(e.prototype, "roomList", {
                            get: function () {
                                return this._roomList || []
                            },
                            set: function (t) {
                                this._roomList = t
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        Object.defineProperty(e.prototype, "userVersion", {
                            get: function () {
                                return this._userVersion
                            },
                            enumerable: !1,
                            configurable: !0
                        }),
                        r([_], e)
                }(cc.Component));
        o.default = p,
            cc._RF.pop()
    }
        , {
        "./ADBHConfig": "ADBHConfig",
        "./ADBHController": "ADBHController",
        "./ADBHOp5Tip": "ADBHOp5Tip"
    }],
    ADBHMorePlayerMgr: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "9e113KUj6xMt7FRWfU+3dNP", "ADBHMorePlayerMgr");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHController")
            , s = t("../ADBHConfig")
            , l = cc._decorator
            , c = l.ccclass
            , h = (l.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            s.ADBH_G.event.on("ranke_list_rsp", this.playerListRsp, this)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            s.ADBH_G.ws.offTarget(this)
                        }
                        ,
                        e.prototype.showMorePlayerRoot = function () {
                            a.adbh_ctrl.model.morePlayerInfoList = [],
                                s.ADBH_G.gameHelper.showBaseDialog("PlayerList", "PlayerList")
                        }
                        ,
                        e.prototype.playerListReq = function (t) {
                            t = t || 0;
                            var e = a.adbh_ctrl.getMorePlayerButton();
                            e && e.getComponent("MorePlayer").rankListreq(0)
                        }
                        ,
                        e.prototype.playerListRsp = function (t) {
                            if (t) {
                                var e = a.adbh_ctrl.model;
                                e.morePlayerNearInnings = t.nearInnings,
                                    e.morePlayerIndex = t.index,
                                    e.playerCount = t.playerCount,
                                    e.putMorePlayerInfo(t.playRankInfo, t.index || 0),
                                    s.ADBH_G.event.emitNow("update_rank"),
                                    s.ADBH_G.event.emitNow(s.ADBH_EVENT.UpdatePlayerCount)
                            }
                        }
                        ,
                        r([c], e)
                }(cc.Component));
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController"
    }],
    ADBHNet: [function (t, e, o) {
        "use strict";
        var i, n;
        cc._RF.push(e, "a63b0RKfPVKJ4t0Bz5Lmivv", "ADBHNet"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            }),
            o.ADBH_GAME_EVENT_MAP = o.ADBH_PROTOCOL_CLASS = o.ADBH_PROTOCOL_IDS = void 0,
            function (t) {
                t[t.CGH_HALL_GET_BAI_REN_GOOD_TREND_REQ = 135] = "CGH_HALL_GET_BAI_REN_GOOD_TREND_REQ",
                    t[t.CGH_HALL_GET_BAI_REN_GOOD_TREND_RSP = 136] = "CGH_HALL_GET_BAI_REN_GOOD_TREND_RSP",
                    t[t.ANDARBARHAR_BET_NOTIFY = 12002] = "ANDARBARHAR_BET_NOTIFY",
                    t[t.ANDARBARHAR_BET_REQ = 12003] = "ANDARBARHAR_BET_REQ",
                    t[t.ANDARBARHAR_BET_RSP = 12004] = "ANDARBARHAR_BET_RSP",
                    t[t.ANDARBARHAR_OPEN_CARD_NOTIFY = 12005] = "ANDARBARHAR_OPEN_CARD_NOTIFY",
                    t[t.ANDARBARHAR_SETTLE_NOTIFY = 12006] = "ANDARBARHAR_SETTLE_NOTIFY",
                    t[t.ANDARBARHAR_VIP_LIST_NOTIFY = 12007] = "ANDARBARHAR_VIP_LIST_NOTIFY",
                    t[t.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY = 12010] = "ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY",
                    t[t.ANDARBARHAR_GAME_BET_CANCEL_REQ = 12011] = "ANDARBARHAR_GAME_BET_CANCEL_REQ",
                    t[t.ANDARBARHAR_GAME_BET_CANCEL_RSP = 12012] = "ANDARBARHAR_GAME_BET_CANCEL_RSP",
                    t[t.ANDARBARHAR_GAME_BET_REPEAT_REQ = 12013] = "ANDARBARHAR_GAME_BET_REPEAT_REQ",
                    t[t.ANDARBARHAR_GAME_BET_REPEAT_RSP = 12014] = "ANDARBARHAR_GAME_BET_REPEAT_RSP",
                    t[t.ANDARBARHAR_GAME_RECORD_NOTIFY = 12015] = "ANDARBARHAR_GAME_RECORD_NOTIFY",
                    t[t.ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY = 12016] = "ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY",
                    t[t.ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY = 12017] = "ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY",
                    t[t.ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY = 12018] = "ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY",
                    t[t.ANDARBARHAR_GAME_LAST_ROUND_NOTIFY = 12019] = "ANDARBARHAR_GAME_LAST_ROUND_NOTIFY",
                    t[t.ANDARBARHAR_RESTORE_GAME_REQ = 12020] = "ANDARBARHAR_RESTORE_GAME_REQ",
                    t[t.ANDARBARHAR_RESTORE_GAME_RSP = 12021] = "ANDARBARHAR_RESTORE_GAME_RSP",
                    t[t.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_REQ = 12022] = "ANDARBARHAR_RESTORE_GAME_COUNT_INFO_REQ",
                    t[t.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP = 12023] = "ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP"
            }(n = o.ADBH_PROTOCOL_IDS || (o.ADBH_PROTOCOL_IDS = {})),
            o.ADBH_PROTOCOL_CLASS = {
                PLAYER_LIST_REQ: "com_protocol.MorePlayerRankReq",
                PLAYER_LIST_RSP: "com_protocol.MorePlayerRankRsp",
                ANDARBARHAR_BET_NOTIFY: "com_protocol.CommonAreaBetNotify",
                ANDARBARHAR_BET_REQ: "com_protocol.PlayerBetReq",
                ANDARBARHAR_BET_RSP: "com_protocol.PlayerBetRsp",
                ANDARBARHAR_OPEN_CARD_NOTIFY: "com_protocol.AndarBarharAreaOpenCardNotify",
                ANDARBARHAR_SETTLE_NOTIFY: "com_protocol.CommonSettlementNotify",
                ANDARBARHAR_VIP_LIST_NOTIFY: "com_protocol.ClientVipSyncNotify",
                ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY: "com_protocol.CommonGameStatusSwitchNotify",
                ANDARBARHAR_GAME_BET_CANCEL_REQ: "com_protocol.AndarBarharBetCancelReq",
                ANDARBARHAR_GAME_BET_CANCEL_RSP: "com_protocol.PlayerBetRsp",
                ANDARBARHAR_GAME_BET_REPEAT_REQ: "com_protocol.AndarBarharBetRepeatReq",
                ANDARBARHAR_GAME_BET_REPEAT_RSP: "com_protocol.PlayerBetRsp",
                ANDARBARHAR_GAME_RECORD_NOTIFY: "com_protocol.AndarBarharRecordNotify",
                ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY: "com_protocol.CommonBetConfigNotify",
                ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY: "com_protocol.ClientChangeGoldNotify",
                ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY: "com_protocol.MorePlayerChangeNotify",
                ANDARBARHAR_GAME_LAST_ROUND_NOTIFY: "com_protocol.AndarBarharGameLastRoundNotify",
                ANDARBARHAR_RESTORE_GAME_REQ: "",
                ANDARBARHAR_RESTORE_GAME_RSP: "com_protocol.AndarBarharRestoreGameRsp",
                ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP: "com_protocol.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP"
            },
            o.ADBH_GAME_EVENT_MAP = ((i = {})[n.ANDARBARHAR_BET_NOTIFY] = {
                class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_BET_NOTIFY,
                func: "areaBetNotify"
            },
                i[n.ANDARBARHAR_BET_RSP] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_BET_RSP,
                    func: "betRsp",
                    ignore_error: !0
                },
                i[n.ANDARBARHAR_OPEN_CARD_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_OPEN_CARD_NOTIFY,
                    func: "openCardNotiry"
                },
                i[n.ANDARBARHAR_SETTLE_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_SETTLE_NOTIFY,
                    func: "settleNotify"
                },
                i[n.ANDARBARHAR_VIP_LIST_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_VIP_LIST_NOTIFY,
                    func: "vipListNotify"
                },
                i[n.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY,
                    func: "statusNotify"
                },
                i[n.ANDARBARHAR_GAME_BET_CANCEL_RSP] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_BET_CANCEL_RSP,
                    func: "cancelBetRsp"
                },
                i[n.ANDARBARHAR_GAME_BET_REPEAT_RSP] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_BET_REPEAT_RSP,
                    func: "repeatBetRsp",
                    ignore_error: !0
                },
                i[n.ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_CHIP_CONFIG_NOTIFY,
                    func: "chipConfigNotify"
                },
                i[n.ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_TAKE_GOLD_NOTIFY,
                    func: "takeGoldNotify"
                },
                i[n.ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_MORE_PLAYER_CHANGE_NOTIFY,
                    func: "morePlayerChangeNotify"
                },
                i[n.ANDARBARHAR_GAME_LAST_ROUND_NOTIFY] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_GAME_LAST_ROUND_NOTIFY,
                    func: "lastRoundNotify"
                },
                i[n.ANDARBARHAR_RESTORE_GAME_RSP] = {
                    class: o.ADBH_PROTOCOL_CLASS.ANDARBARHAR_RESTORE_GAME_RSP,
                    func: "restoreGameRsp"
                },
                i[n.CGH_HALL_GET_BAI_REN_GOOD_TREND_RSP] = {
                    class: "com_protocol.ClientGetBaiRenGoodTrendDataRsp",
                    func: "onUpdateGoodTrend"
                },
                i[n.ANDARBARHAR_RESTORE_GAME_COUNT_INFO_RSP] = {
                    class: "com_protocol.AndarBarharGameTrendCount",
                    func: "onGameTrendCount"
                },
                i),
            cc._RF.pop()
    }
        , {}],
    ADBHOp5Tip: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "2de18wpuCxAPJxG3L9Upzxx", "ADBHOp5Tip"),
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
        var i = t("./ADBHController")
            , n = function () {
                function t() {
                    this._noActionCount = 0,
                        this._isFirstRound = !0,
                        this._hasActionFlag = !1
                }
                return t.prototype.setActionFlag = function () {
                    this._hasActionFlag = !0
                }
                    ,
                    t.prototype.onStartBet = function () {
                        this._isFirstRound = !1,
                            this._hasActionFlag = !1
                    }
                    ,
                    t.prototype.onSettlement = function () {
                        this._isFirstRound || this._hasActionFlag || i.adbh_ctrl.model.isMeBetted() ? this._noActionCount = 0 : this._noActionCount++,
                            this._noActionCount >= 5 && (window.G.gameHelper.showNoActionToast(),
                                this._noActionCount = 0),
                            this._hasActionFlag = !1
                    }
                    ,
                    t.prototype.onRestoreGameRsp = function () {
                        this._hasActionFlag = !1
                    }
                    ,
                    t.prototype.onChangedDesk = function () {
                        this._isFirstRound = !0,
                            this._hasActionFlag = !1,
                            this._noActionCount = 0
                    }
                    ,
                    t
            }();
        o.default = n,
            cc._RF.pop()
    }
        , {
        "./ADBHController": "ADBHController"
    }],
    ADBHPlayer: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e43e5ffjKdNGLKOcbmz9HG5", "ADBHPlayer");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHConfig")
            , s = t("../ADBHHelper")
            , l = cc._decorator
            , c = l.ccclass
            , h = (l.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._playerIcon = null,
                            e._playerName = null,
                            e._vipBg = null,
                            e._lbVip = null,
                            e._lbGold = null,
                            e._winLabel = null,
                            e._loseLabel = null,
                            e._headSpineNode = null,
                            e._headRoot = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            console.log("----onLoad ADBHPlayer"),
                                this._playerIcon = s.default.findNode(this.node, "headimg").getComponent(cc.Sprite),
                                this._playerName = s.default.findNode(this.node, "name").getComponent(cc.Label),
                                this._vipBg = s.default.findNode(this.node, "vip"),
                                this._lbVip = s.default.findNode(this.node, "lbVip").getComponent(cc.Label),
                                this._lbGold = s.default.findNode(this.node, "gold").getComponent(cc.Label),
                                this._winLabel = s.default.findNode(this.node, "win").getComponent(cc.Label),
                                this._loseLabel = s.default.findNode(this.node, "lose").getComponent(cc.Label),
                                this._headSpineNode = s.default.findNode(this.node, "head_spine"),
                                this._headRoot = this.node.findChild("headroot"),
                                this._headSpineNode.active = !1,
                                this._lbVip.string = "V0",
                                this._lbGold.string = "0",
                                this._vipBg.active = !s.default.isAPI(),
                                this._lbVip.node.active = !s.default.isAPI(),
                                this._winLabel.node.active = !1,
                                this._loseLabel.node.active = !1
                        }
                        ,
                        e.prototype.start = function () {
                            var t = a.ADBH_G.user.getLoginData();
                            this.setDetailInfo(t.detailInfo),
                                this.udpateGold(t.detailInfo.dynamicInfo.gameGold),
                                this._loadHeadSpine(),
                                this._initComboWin()
                        }
                        ,
                        e.prototype._initComboWin = function () {
                            var t = this.node.getChildByName("selfComboWin")
                                , e = t.getComponent("ComboWinHeadNode");
                            e || (e = t.addComponent("ComboWinHeadNode")).onInitCompleted(function () { })
                        }
                        ,
                        e.prototype.setDetailInfo = function (t) {
                            t && (this._lbVip && t.dynamicInfo && (this._lbVip.string = "V" + t.dynamicInfo.vipLevel.toString()),
                                s.default.setPlayerNickname(t.staticInfo, this._playerName),
                                s.default.setPlayerHead(t.staticInfo, this._playerIcon, this))
                        }
                        ,
                        e.prototype.udpateGold = function (t) {
                            this._lbGold && (this._lbGold.string = a.ADBH_G.tool.formatGoldInGame(t))
                        }
                        ,
                        e.prototype.playAddScore = function (t) {
                            var e;
                            null != t && (s.default.isZero(t) || (t > 0 ? (this._winLabel.node.active = !0,
                                this._loseLabel.node.active = !1,
                                e = this._winLabel.node,
                                this._winLabel.string = "+" + a.ADBH_G.tool.formatGoldInGame(t)) : (this._winLabel.node.active = !1,
                                    this._loseLabel.node.active = !0,
                                    e = this._loseLabel.node,
                                    this._loseLabel.string = a.ADBH_G.tool.formatGoldInGame(t)),
                                e.stopAllActions(),
                                e.y = -80,
                                e.runAction(cc.sequence(cc.show(), cc.moveTo(.3, 0, 0), cc.delayTime(2), cc.hide())),
                                t > 0 && this._playHeadSpine(!0)))
                        }
                        ,
                        e.prototype.stopPlayAddScore = function () {
                            this._winLabel && (this._winLabel.node.stopAllActions(),
                                this._loseLabel.node.stopAllActions(),
                                this._winLabel.node.active = !1,
                                this._loseLabel.node.active = !1)
                        }
                        ,
                        e.prototype.refleshVip = function (t) {
                            this._lbVip && (this._lbVip.string = t.toString())
                        }
                        ,
                        e.prototype._playShakeHead = function () {
                            var t = this._headRoot;
                            null == t.__init_pos_x && (t.__init_pos_x = t.x),
                                t.stopAllActions(),
                                t.x = t.__init_pos_x,
                                window.ActionUtil.shake(t, 8, 200)
                        }
                        ,
                        e.prototype._loadHeadSpine = function () {
                            var t = this;
                            a.ADBH_G.resMaster.loadResEx("games/adbh/general/animations/touxiang_texiao", sp.SkeletonData, function (e, o) {
                                if (e)
                                    cc.warn(e.message || e);
                                else {
                                    var i = t._headSpineNode.getComponent(sp.Skeleton) || t._headSpineNode.addComponent(sp.Skeleton);
                                    i.skeletonData = o,
                                        i.premultipliedAlpha = !1
                                }
                            })
                        }
                        ,
                        e.prototype._playHeadSpine = function (t) {
                            var e = this._headSpineNode.getComponent(sp.Skeleton);
                            e && t ? (this._headSpineNode.active = !0,
                                e.setAnimation(0, "animation", !1),
                                e.setCompleteListener(function () {
                                    cc.isValid(e) && (e.node.active = !1)
                                })) : this._headSpineNode.active = !1
                        }
                        ,
                        r([c], e)
                }(cc.Component));
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHHelper": "ADBHHelper"
    }],
    ADBHPubComp: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "dcacbDGr4ZEJ6x7CKbsDkvH", "ADBHPubComp");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHController")
            , s = t("../ADBHConfig")
            , l = t("../ADBHHelper")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._taskRoleCpn = null,
                            e._task_loaded = !1,
                            e._task_data = null,
                            e._hourPK = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            console.log("----onLoad ADBHPubComp");
                            try {
                                this._addTopComponentV()
                            } catch (t) {
                                console.warn(t)
                            }
                            s.ADBH_G.event.on(s.ADBH_EVENT.PAI_JU_HAO, this._refreshPaijuhao, this),
                                s.ADBH_G.event.on("switch_lang", this._onSwitchLang, this)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            s.ADBH_G.ws.offTarget(this),
                                s.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype._onSwitchLang = function () {
                            this._setHpkShrinkInfo(),
                                this._refreshPaijuhao()
                        }
                        ,
                        e.prototype._getHpkPlayer = function (t, e) {
                            return this._hourPK && this._hourPK.ui && this._hourPK.ui.active && e ? e.getHourPKSimpleHead(t) : null
                        }
                        ,
                        e.prototype._isHourPKValid = function () {
                            return !!this._hourPK && !(!this._hourPK.ui || !this._hourPK.ui.active)
                        }
                        ,
                        e.prototype.getHourPkPlayerPos = function (t) {
                            if (!this._isHourPKValid())
                                return null;
                            var e = l.default.findNode(this._hourPK.getBetNode(), "shrinkNode")
                                , o = l.default.findNode(this._hourPK.getIncomeNode(), "shrinkNode")
                                , i = this._hourPK.betHourPKSimple
                                , n = this._hourPK.incomePKSimple
                                , r = this._getHpkPlayer(t, n)
                                , a = this._getHpkPlayer(t, i)
                                , s = null
                                , c = o && o.active
                                , h = e && e.active;
                            c && (s = o.convertToWorldSpaceAR(cc.v2(0, 0))),
                                h && (s = e.convertToWorldSpaceAR(cc.v2(0, 0)));
                            var _ = !1;
                            return r && cc.isValid(r.node) && (c ? s = o.convertToWorldSpaceAR(cc.v2(0, 0)) : (_ = !0,
                                s = r.node.convertToWorldSpaceAR(cc.v2(45, 45)))),
                                a && cc.isValid(a.node) && (h ? _ || (s = e.convertToWorldSpaceAR(cc.v2(0, 0))) : s = a.node.convertToWorldSpaceAR(cc.v2(45, 45))),
                                s
                        }
                        ,
                        e.prototype.isFollowUser = function (t) {
                            return this._hourPK && this._hourPK.isFollow(t)
                        }
                        ,
                        e.prototype.listenTask = function () {
                            var t, e = ((t = {})[11020] = {
                                class: "com_protocol.ClientGameTask",
                                func: "onRecvTaskInfo"
                            },
                                t);
                            s.ADBH_G.ws.onMsgList(e, this)
                        }
                        ,
                        e.prototype.onRecvTaskInfo = function (t) {
                            this._task_loaded || (console.log("------ task not loaded"),
                                this._task_data = t),
                                this._taskRoleCpn || console.log("task comp not inited")
                        }
                        ,
                        e.prototype.listenHourPk = function () {
                            var t;
                            s.ADBH_G.ws.onMsgList(((t = {})[11002] = {
                                class: "com_protocol.ClientRankDataNotify",
                                func: "onClientRankDataNotify"
                            },
                                t), this)
                        }
                        ,
                        e.prototype.onClientRankDataNotify = function (t) {
                            console.log("\u6536\u5230\u5c0f\u65f6\u699c\u534f\u8bae " + t)
                        }
                        ,
                        e.prototype._onClickRecord = function () {
                            console.log("click record")
                        }
                        ,
                        e.prototype._setGameRecordLabel = function () {
                            this._refreshPaijuhao()
                        }
                        ,
                        e.prototype._refreshPaijuhao = function () {
                            s.ADBH_G.event.emitNow("update_record_id", a.adbh_ctrl.model.paijuhao)
                        }
                        ,
                        e.prototype._shakeHpkPlayer = function (t) {
                            var e = this._hourPK.getHPKPlayer(t);
                            e && e.headShake()
                        }
                        ,
                        e.prototype._addTopComponentV = function () {
                            var t = this.node.getChildByName("addon_layer");
                            this._adaptorHourPk(t),
                                l.default.isAPI() || (this._adaptorTask(t),
                                    this._adaptorJackpot(t)),
                                this._adaptorTop(t)
                        }
                        ,
                        e.prototype._adaptorTop = function (t) {
                            var e = this
                                , o = this.addComponent("GameTopUI_V");
                            o.init(t.getChildByName("topui")),
                                o.setRecordHook && o.setRecordHook(this._onClickRecord),
                                o.onInitCompleted(function (t) {
                                    e._setGameRecordLabel(t.getChildByName("lbl_record_id"));
                                    var i = t.getChildByName("img_logo") || t.getChildByName("logo");
                                    i && (o.addWidgetOffset({
                                        top: -11
                                    }, i),
                                        i.children[0] && i.children[0].getComponent(sp.Skeleton) && (i.children[0].getComponent(sp.Skeleton).premultipliedAlpha = !1)),
                                        a.adbh_ctrl.screenAdaptor.addtoTop(0, [t])
                                })
                        }
                        ,
                        e.prototype._adaptorTask = function (t) {
                            var e = this
                                , o = t.getChildByName("tasknode");
                            this._taskRoleCpn = o.addComponent("TaskRole"),
                                this._taskRoleCpn.delayInfo = null;
                            var i = this._taskRoleCpn;
                            i.onInitCompleted(function () {
                                if (e._task_loaded = !0,
                                    e._task_data && (console.log(".... cached task data ...", e._task_data),
                                        i.recvTaskInfo(e._task_data),
                                        e._task_data = null),
                                    !i.setDetailType) {
                                    var t = l.default.findNode(o, "bg_caishen_detail");
                                    t && (t.x = 0,
                                        t.y = -152)
                                }
                            })
                        }
                        ,
                        e.prototype._adaptorJackpot = function (t) {
                            var e = this
                                , o = this.addComponent("GameTopUIAddition_V");
                            o.init(t.getChildByName("addui")),
                                o.onInitCompleted(function (t) {
                                    o.addWidgetOffset({
                                        top: 283
                                    }),
                                        o.resetNodePosition({
                                            bottom: 23,
                                            right: 10
                                        }, "musicNode"),
                                        o.resetNodePosition({
                                            bottom: 23,
                                            left: 10
                                        }, "goldPoolNode"),
                                        window.G.event.on("music_player_change_bg_color", e._changeMusicPlayerColor, e),
                                        window.G.event.on("jackpool_change_bg_color", e._changeJackpoolColor, e),
                                        a.adbh_ctrl.screenAdaptor.addtoTop(2, [t])
                                })
                        }
                        ,
                        e.prototype._changeMusicPlayerColor = function () {
                            window.G.event.emitNow("music_player_change_bg_color_notify", {
                                color: cc.Color.BLACK,
                                opacity: Math.ceil(76.5)
                            }),
                                s.ADBH_G.event.emitNow("color_shrink_node", {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 76.5
                                })
                        }
                        ,
                        e.prototype._changeJackpoolColor = function () {
                            window.G.event.emitNow("jackpool_change_bg_color_notify", {
                                color: cc.Color.BLACK,
                                opacity: Math.ceil(76.5)
                            }),
                                s.ADBH_G.event.emitNow("color_shrink_node", {
                                    r: 0,
                                    g: 0,
                                    b: 0,
                                    a: 76.5
                                })
                        }
                        ,
                        e.prototype._adaptorHourPk = function (t) {
                            var e = this
                                , o = t.getChildByName("hourpk").addComponent("HourPK_V");
                            this._hourPK = o,
                                a.adbh_ctrl.screenAdaptor.addtoTop(2, [t.getChildByName("hourpk")]),
                                o.onInitCompleted(function () {
                                    o.setHPKBgNodeColor({
                                        color: cc.Color.BLACK,
                                        opacity: Math.ceil(127.5)
                                    }),
                                        e._setHpkShrinkInfo()
                                }),
                                o.init(o.HourPKSimpleStyle.HeadSortVerticalShrink, {
                                    goldStyle: 2
                                }),
                                l.default.isAPI() ? (o.customBetPKPos = cc.v2(-457, -105),
                                    o.customIncomePKPos = cc.v2(457, -105)) : (o.customBetPKPos = cc.v2(-457, -250),
                                        o.customIncomePKPos = cc.v2(457, -250))
                        }
                        ,
                        e.prototype._setHpkShrinkInfo = function () {
                            var t = this._hourPK;
                            if (t) {
                                var e = null
                                    , o = null
                                    , i = cc.i18n.getCurLanguage();
                                "zh" == i || "zh_hk" == i ? (e = a.adbh_ctrl.res.sprite_hour1,
                                    o = a.adbh_ctrl.res.sprite_hour2) : (e = a.adbh_ctrl.res.sprite_hour3,
                                        o = a.adbh_ctrl.res.sprite_hour4);
                                var n = {
                                    betShrinkTitle: e,
                                    incomeShrinkTitle: o,
                                    shrinkState: 0,
                                    shrinkBtnBgColor: {
                                        color: cc.Color.BLACK,
                                        opacity: Math.ceil(76.5)
                                    }
                                };
                                t.setShrinkInfo(n)
                            }
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "../ADBHHelper": "ADBHHelper"
    }],
    ADBHRecordDetail: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "d0463W4HZJBUq4++hPfBvBa", "ADBHRecordDetail");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            , a = this && this.__awaiter || function (t, e, o, i) {
                return new (o || (o = Promise))(function (n, r) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function s(t) {
                        try {
                            l(i.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                            e instanceof o ? e : new o(function (t) {
                                t(e)
                            }
                            )).then(a, s)
                    }
                    l((i = i.apply(t, e || [])).next())
                }
                )
            }
            , s = this && this.__generator || function (t, e) {
                var o, i, n, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    r;
                function s(t) {
                    return function (e) {
                        return l([t, e])
                    }
                }
                function l(r) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, r[1])).done)
                                return n;
                            switch (i = 0,
                            n && (r = [2 & r[0], n.value]),
                            r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        i = r[1],
                                        r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                            n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                            a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            r = e.call(t, a)
                        } catch (s) {
                            r = [6, s],
                                i = 0
                        } finally {
                            o = n = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l = t("../ADBHConfig")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            window.G.event.on("UPDATE_RECORD_DETAIL", this._onRefreshUI, this)
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            window.G.event.targetOff(this)
                        }
                        ,
                        e.prototype._onRefreshUI = function (t) {
                            if (console.log("====== ", t.betRecord.areaResult),
                                t.betRecord.areaResult) {
                                var e, o, i, n = t.betRecord.areaResult.split(",");
                                e = parseInt(n[0]),
                                    this.addCard(e, this.node.children[0].findChild("card"), 0);
                                var r = n[1].split("|");
                                o = r[1];
                                var a = this.addStrCards(r[2], this.node.children[1].findChild("card"))
                                    , s = n[2].split("|");
                                i = s[1];
                                var c = this.addStrCards(s[2], this.node.children[2].findChild("card"));
                                this.node.children[1].findChild("lb").getComponent(cc.Label).string = "\u3010Andar X" + o + "\u3011:",
                                    this.node.children[2].findChild("lb").getComponent(cc.Label).string = "\u3010Bahar X" + i + "\u3011:",
                                    this.node.children[1].findChild("win").active = a > c,
                                    this.node.children[2].findChild("win").active = a <= c;
                                var h = l.ADBH_AREATEXT[l.getAreaIdByCardCnt(a + c)];
                                if (n[3]) {
                                    var _ = n[3].split("|")[1];
                                    this.node.children[3].findChild("lb").getComponent(cc.Label).string = "\u3010" + h + " X" + _ + "\u3011"
                                } else
                                    this.node.children[3].findChild("lb").getComponent(cc.Label).string = "\u3010" + h + "\u3011";
                                this.node.children[3].findChild("win").active = !0
                            }
                        }
                        ,
                        e.prototype.addStrCards = function (t, e) {
                            for (var o = 0, i = 0, n = 0, r = t.split("*"); n < r.length; n++) {
                                var a = r[n];
                                if (null != a && "" !== a) {
                                    var s = parseInt(a);
                                    s && s > 0 && (o++,
                                        this.addCard(s, e, i),
                                        i += 21)
                                }
                            }
                            return o
                        }
                        ,
                        e.prototype.addCard = function (t, e, o) {
                            return a(this, void 0, void 0, function () {
                                var i, n;
                                return s(this, function (r) {
                                    switch (r.label) {
                                        case 0:
                                            return console.log("add==== ", t, " ", o),
                                                [4, window.G.gameHelper.getPkCard()];
                                        case 1:
                                            return i = r.sent(),
                                                cc.isValid(e) ? (n = cc.instantiate(i).getComponent("PKCard"),
                                                    e.addChild(n.node),
                                                    n.node.setScale(.4),
                                                    n.node.active = !0,
                                                    n.stopCardAnim(),
                                                    n.init(new window.PKModel(t)),
                                                    n.hideBack(),
                                                    n.node.x = o,
                                                    [2]) : [2]
                                    }
                                })
                            })
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../ADBHConfig": "ADBHConfig"
    }],
    ADBHRes: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "0aaa4HaastGSolQDloVgp/j", "ADBHRes");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            , a = this && this.__awaiter || function (t, e, o, i) {
                return new (o || (o = Promise))(function (n, r) {
                    function a(t) {
                        try {
                            l(i.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function s(t) {
                        try {
                            l(i.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }
                    function l(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value,
                            e instanceof o ? e : new o(function (t) {
                                t(e)
                            }
                            )).then(a, s)
                    }
                    l((i = i.apply(t, e || [])).next())
                }
                )
            }
            , s = this && this.__generator || function (t, e) {
                var o, i, n, r, a = {
                    label: 0,
                    sent: function () {
                        if (1 & n[0])
                            throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                },
                    "function" == typeof Symbol && (r[Symbol.iterator] = function () {
                        return this
                    }
                    ),
                    r;
                function s(t) {
                    return function (e) {
                        return l([t, e])
                    }
                }
                function l(r) {
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; a;)
                        try {
                            if (o = 1,
                                i && (n = 2 & r[0] ? i.return : r[0] ? i.throw || ((n = i.return) && n.call(i),
                                    0) : i.next) && !(n = n.call(i, r[1])).done)
                                return n;
                            switch (i = 0,
                            n && (r = [2 & r[0], n.value]),
                            r[0]) {
                                case 0:
                                case 1:
                                    n = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                        i = r[1],
                                        r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                        a.trys.pop();
                                    continue;
                                default:
                                    if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!n || r[1] > n[0] && r[1] < n[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < n[1]) {
                                        a.label = n[1],
                                            n = r;
                                        break
                                    }
                                    if (n && a.label < n[2]) {
                                        a.label = n[2],
                                            a.ops.push(r);
                                        break
                                    }
                                    n[2] && a.ops.pop(),
                                        a.trys.pop();
                                    continue
                            }
                            r = e.call(t, a)
                        } catch (s) {
                            r = [6, s],
                                i = 0
                        } finally {
                            o = n = 0
                        }
                    if (5 & r[0])
                        throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l = t("./ADBHConfig")
            , c = cc._decorator
            , h = c.ccclass
            , _ = c.property
            , p = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.sprite_hour1 = null,
                        e.sprite_hour2 = null,
                        e.sprite_hour3 = null,
                        e.sprite_hour4 = null,
                        e.chipPre = null,
                        e.guanzhuPre = null,
                        e.gold_Prefab = null,
                        e.trendLine = null,
                        e.bigRoadSfs = [],
                        e.bigEyeRoadSfs = [],
                        e.smallEyeRoadSfs = [],
                        e.beadRoadSfs = [],
                        e.cockRoadSfs = [],
                        e.changBigeyeRoadSfs = [],
                        e.changSmalleyeRoadSfs = [],
                        e.changCockeyeRoadSfs = [],
                        e.maxBigeyeRoadSfs = [],
                        e.maxSmalleyeRoadSfs = [],
                        e.maxCockeyeRoadSfs = [],
                        e.bsLabels = [],
                        e.particlePre = null,
                        e.chipNodeScale = l.ADBH_CHIP_SPR_SCALE,
                        e.chipFontSize = 28,
                        e._partiPool = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        console.log("----onLoad ADBHRes"),
                            this._partiPool = new cc.NodePool,
                            this.loadChipPrefab(),
                            this.loadPrefabs()
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        this._partiPool && this._partiPool.clear()
                    }
                    ,
                    Object.defineProperty(e.prototype, "partiPool", {
                        get: function () {
                            return this._partiPool
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.isLandscape = function () {
                        return window.G.orientationMaster.isLandscape()
                    }
                    ,
                    e.prototype.loadPrefabs = function () {
                        return a(this, void 0, void 0, function () {
                            var t;
                            return s(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, window.G.gameHelper.getGamePrefab("particlesystem")];
                                    case 1:
                                        return (t = e.sent()) && cc.isValid(this) && (this.particlePre = t),
                                            [2]
                                }
                            })
                        })
                    }
                    ,
                    e.prototype.loadChipPrefab = function () {
                        var t = window.G.gameHelper.getChipRootPath() + "/prefabs/CommonChip"
                            , e = this;
                        window.G.resMaster.loadResEx(t, cc.Prefab, function (t, o) {
                            !t && o && e && cc.isValid(e.node) && (e.chipPre = o,
                                console.log("++++ chip load"))
                        })
                    }
                    ,
                    r([_(cc.SpriteFrame)], e.prototype, "sprite_hour1", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "sprite_hour2", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "sprite_hour3", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "sprite_hour4", void 0),
                    r([_(cc.Prefab)], e.prototype, "chipPre", void 0),
                    r([_(cc.Prefab)], e.prototype, "guanzhuPre", void 0),
                    r([_(cc.Prefab)], e.prototype, "gold_Prefab", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "trendLine", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "bigRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "bigEyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "smallEyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "beadRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "cockRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "changBigeyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "changSmalleyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "changCockeyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "maxBigeyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "maxSmalleyeRoadSfs", void 0),
                    r([_(cc.SpriteFrame)], e.prototype, "maxCockeyeRoadSfs", void 0),
                    r([_([cc.String])], e.prototype, "bsLabels", void 0),
                    r([h], e)
            }(cc.Component);
        o.default = p,
            cc._RF.pop()
    }
        , {
        "./ADBHConfig": "ADBHConfig"
    }],
    ADBHRightItem: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "37640DgRq9OZLzhYnjAkj+a", "ADBHRightItem");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = cc._decorator
            , l = s.ccclass
            , c = s.property
            , h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bigRoadSfs = [],
                        e._index = 0,
                        e._bead = null,
                        e._card = null,
                        e._high = null,
                        e
                }
                return n(e, t),
                    Object.defineProperty(e.prototype, "index", {
                        get: function () {
                            return this._index
                        },
                        set: function (t) {
                            this._index = t
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.onLoad = function () {
                        this._bead = this.node.getChildByName("bead").getComponent(cc.Sprite),
                            this._card = this.node.getChildByName("lb_card").getComponent(cc.Label),
                            this._high = this.node.getChildByName("high")
                    }
                    ,
                    e.prototype.updateData = function (t) {
                        var e = t.winNameType == a.EGameBothNameType.EAndarBarharAndar ? 1 : 2;
                        this._bead.spriteFrame = this.bigRoadSfs[e];
                        var o = t.Joker % 16;
                        this._card.string = a.ADBH_CARD_NAMES[o]
                    }
                    ,
                    e.prototype.showHighLight = function (t) {
                        this._high.active = t
                    }
                    ,
                    r([c(cc.SpriteFrame)], e.prototype, "bigRoadSfs", void 0),
                    r([l], e)
            }(cc.Component);
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig"
    }],
    ADBHRule: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "65b39VGr2ZB9r0ElWduajAL", "ADBHRule");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , s = a.ccclass
            , l = (a.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var t = window.G
                                , e = this.node.getChildByName("contentView");
                            t.gameHelper.requestWebRule(function (t) {
                                var o = {
                                    content: t,
                                    height: e.height
                                };
                                e.addComponent("CommonRule").init(o)
                            }),
                                t.tool.addBtnClickEvent("btn_close1", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close2", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close3", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close4", this.node, this._onCloseEvent, this)
                        }
                        ,
                        e.prototype._onCloseEvent = function () {
                            this.node.emit("dialog_close_event");
                            var t = window.G
                                , e = this.node.name;
                            t.uiMaster.popView(t.uiMaster.toPath(e))
                        }
                        ,
                        r([s], e)
                }(cc.Component));
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    ADBHSpineAnis: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f30b4qI3PVJRJ5Lp8z0KKZf", "ADBHSpineAnis");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../ADBHAudio")
            , s = t("../ADBHConfig")
            , l = t("../ADBHController")
            , c = t("../ADBHHelper")
            , h = cc._decorator
            , _ = h.ccclass
            , p = (h.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._startstopNode = null,
                            e._kaishiziLoaded = !1,
                            e._kaishiguangLoaded = !1,
                            e._tipAniName = "",
                            e._tipAniSpeed = 1.5,
                            e._inited = !1,
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._startstopNode = this.node.findChild("layer_ani/aniStartStop"),
                                this._startstopNode.active = !1
                        }
                        ,
                        e.prototype.start = function () {
                            this._inited || (this._inited = !0,
                                this._initI18Nspines(),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RESET_GAME_SCENE, this._resetUI, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.RECONNECT, this._resetUI, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ENTER_FRONT, this._onEnterFront, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ENTER_BACK, this._onEnterBack, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, this._onStatusSwitch, this),
                                s.ADBH_G.event.on(s.ADBH_EVENT.ANDARBARHAR_OPEN_CARD_NOTIFY, this._onOpenCard, this),
                                s.ADBH_G.event.on("switch_lang", this._initI18Nspines, this))
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            s.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype._resetUI = function () {
                            this._hideStartStopAni()
                        }
                        ,
                        e.prototype._onEnterFront = function () {
                            this._hideStartStopAni()
                        }
                        ,
                        e.prototype._onEnterBack = function () {
                            this._hideStartStopAni()
                        }
                        ,
                        e.prototype._onStatusSwitch = function () {
                            var t = l.adbh_ctrl.model.gameStatus;
                            t == s.ADBH_STATUS.Start ? this._playStartBetAni() : t == s.ADBH_STATUS.OpenCard ? this._playStopBetAni() : t == s.ADBH_STATUS.Award && this._hideStartStopAni()
                        }
                        ,
                        e.prototype._onOpenCard = function () {
                            this._playStopBetAni()
                        }
                        ,
                        e.prototype._initI18Nspines = function () {
                            var t = this;
                            c.default.setI18nResource("animations/kaishi_zi", sp.SkeletonData, this._startstopNode.findChild("kaishi_zi"), !0, function () {
                                if (cc.isValid(t) && cc.isValid(t.node) && (t._kaishiziLoaded = !0,
                                    t._startstopNode.active)) {
                                    var e = t._startstopNode.findChild("kaishi_zi").getComponent(sp.Skeleton);
                                    e.setAnimation(0, t._tipAniName, !1),
                                        e.timeScale = t._tipAniSpeed
                                }
                            }),
                                c.default.setI18nResource("animations/kaishi_guang", sp.SkeletonData, this._startstopNode.findChild("kaishi_guang"), !0, function () {
                                    if (cc.isValid(t) && cc.isValid(t.node) && (t._kaishiguangLoaded = !0,
                                        t._startstopNode.active)) {
                                        var e = t._startstopNode.findChild("kaishi_guang").getComponent(sp.Skeleton);
                                        e.setAnimation(0, t._tipAniName, !1),
                                            e.timeScale = t._tipAniSpeed
                                    }
                                })
                        }
                        ,
                        e.prototype._playTipAni = function (t) {
                            var e = this;
                            this._tipAniName = t,
                                this._tipAniSpeed = 1.5;
                            var o = 1.5;
                            "tingzhi" == t && (this._tipAniSpeed = 1,
                                o = 2.1),
                                this._startstopNode.active = !0,
                                this._startstopNode.stopAllActions();
                            var i = this._startstopNode.findChild("kaishi").getComponent(sp.Skeleton);
                            if (i.setAnimation(0, t, !1),
                                i.timeScale = this._tipAniSpeed,
                                this._kaishiziLoaded) {
                                var n = this._startstopNode.findChild("kaishi_zi").getComponent(sp.Skeleton);
                                n.setAnimation(0, t, !1),
                                    n.timeScale = this._tipAniSpeed
                            }
                            if (this._kaishiguangLoaded) {
                                var r = this._startstopNode.findChild("kaishi_guang").getComponent(sp.Skeleton);
                                r.setAnimation(0, t, !1),
                                    r.timeScale = this._tipAniSpeed
                            }
                            this._startstopNode.runAction(cc.sequence(cc.delayTime(o), cc.callFunc(function () {
                                e._startstopNode.active = !1
                            }, this)))
                        }
                        ,
                        e.prototype._playStartBetAni = function () {
                            "kaishi" == this._tipAniName && this._startstopNode.active || (this._playTipAni("kaishi"),
                                a.default.playBetTip(!0))
                        }
                        ,
                        e.prototype._playStopBetAni = function () {
                            "tingzhi" == this._tipAniName && this._startstopNode.active || (this._playTipAni("tingzhi"),
                                a.default.playBetTip(!1))
                        }
                        ,
                        e.prototype._hideStartStopAni = function () {
                            this._startstopNode.stopAllActions(),
                                this._startstopNode.active = !1
                        }
                        ,
                        r([_], e)
                }(cc.Component));
        o.default = p,
            cc._RF.pop()
    }
        , {
        "../ADBHAudio": "ADBHAudio",
        "../ADBHConfig": "ADBHConfig",
        "../ADBHController": "ADBHController",
        "../ADBHHelper": "ADBHHelper"
    }],
    ADBHTrendChartBeadItem: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "cce571cfkVFLq7eqXZl3lt1", "ADBHTrendChartBeadItem");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = cc._decorator
            , l = s.ccclass
            , c = s.property
            , h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.beadSfs = [],
                        e.labels = [],
                        e._index = 0,
                        e._data = null,
                        e.beadSp = null,
                        e.lbCard = null,
                        e.lbCount = null,
                        e.bgSelectNode = null,
                        e
                }
                return n(e, t),
                    Object.defineProperty(e.prototype, "index", {
                        get: function () {
                            return this._index
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.onLoad = function () {
                        this._checkAndInit(),
                            window.G.event.on("select_trend_index", this._selectBeadIndex, this)
                    }
                    ,
                    e.prototype._selectBeadIndex = function (t) {
                        this.node.getChildByName("sprite") && (this.node.getChildByName("sprite").active = t == this._index)
                    }
                    ,
                    e.prototype._checkAndInit = function () {
                        this.beadSp || (this.beadSp = this.node.getChildByName("bead").getComponent(cc.Sprite),
                            this.bgSelectNode = this.node.getChildByName("sprite"),
                            this.node.getChildByName("lb_card") && (this.lbCard = this.node.getChildByName("lb_card").getComponent(cc.Label)),
                            this.node.getChildByName("lb_count") && (this.lbCount = this.node.getChildByName("lb_count").getComponent(cc.Label)))
                    }
                    ,
                    e.prototype.updateData = function (t, e) {
                        this._data = t,
                            this._index = e,
                            this._checkAndInit(),
                            this._updateBead(t)
                    }
                    ,
                    e.prototype._updateBead = function (t) {
                        var e;
                        e = t.winNameType == a.EGameBothNameType.EAndarBarharAndar ? 1 : 2,
                            this.beadSp.spriteFrame = this.beadSfs[e],
                            this.lbCard && (this.lbCard.string = this._getCardValue(t.Joker)),
                            this.lbCount && (this.lbCount.string = t.index)
                    }
                    ,
                    e.prototype._getCardValue = function (t) {
                        return a.ADBH_CARD_NAMES[t % 16]
                    }
                    ,
                    e.prototype.setSelectBgActive = function (t) {
                        this.bgSelectNode && (this.bgSelectNode.active = t)
                    }
                    ,
                    r([c(cc.SpriteFrame)], e.prototype, "beadSfs", void 0),
                    r([c([cc.String])], e.prototype, "labels", void 0),
                    r([l], e)
            }(cc.Component);
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig"
    }],
    ADBHTrendChartProgress: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "1a11ft4QOZFu6bdJ0owPWtU", "ADBHTrendChartProgress");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = t("../../ADBHController")
            , l = cc._decorator
            , c = l.ccclass
            , h = (l.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._progressA = null,
                            e._lbProgressA = null,
                            e._progressB = null,
                            e._lbProgressB = null,
                            e
                    }
                    return n(e, t),
                        e.prototype.init = function () {
                            var t = this.node.getChildByName("progress");
                            this._progressA = t.getChildByName("progress_a"),
                                this._progressB = t.getChildByName("progress_b"),
                                this._lbProgressA = this.node.getChildByName("a_progress_value").getComponent(cc.Label),
                                this._lbProgressB = this.node.getChildByName("b_progress_value").getComponent(cc.Label),
                                a.ADBH_G.event.on(a.ADBH_EVENT.UPDATE_TREND, this._updateTrend, this),
                                this._updateTrend()
                        }
                        ,
                        e.prototype.onDestroy = function () {
                            a.ADBH_G.event.targetOff(this)
                        }
                        ,
                        e.prototype._updateTrend = function () {
                            var t = this._getTrendData();
                            this._setLoseWinValue(t.redrec, t.blackrec, t.totalrec)
                        }
                        ,
                        e.prototype._setLoseWinValue = function (t, e, o) {
                            if (0 != t || 0 != e) {
                                this.node.active = !0;
                                var i = this._getProgress(t, o)
                                    , n = 100 - i;
                                this._progressA.width = 670 * i / 100,
                                    this._lbProgressA.string = i + "%",
                                    this._progressB.width = 670 * n / 100,
                                    this._lbProgressB.string = n + "%"
                            } else
                                this.node.active = !1
                        }
                        ,
                        e.prototype._getProgress = function (t, e) {
                            return 0 == e ? 1 : Math.floor(t / e * 100)
                        }
                        ,
                        e.prototype._getTrendData = function () {
                            var t = s.adbh_ctrl.model.trend;
                            if (!t || !t.trendInfo || !t.trendInfo.winNameType)
                                return {
                                    totalrec: 0,
                                    redrec: 0,
                                    blackrec: 0
                                };
                            for (var e = {
                                totalrec: 0,
                                redrec: 0,
                                blackrec: 0
                            }, o = 0, i = t.trendInfo.winNameType; o < i.length; o++) {
                                var n = i[o];
                                e.totalrec++,
                                    n.winNameType == a.EGameBothNameType.EAndarBarharAndar ? e.redrec++ : n.winNameType == a.EGameBothNameType.EAndarBarharBarhar && e.blackrec++
                            }
                            return e
                        }
                        ,
                        r([c], e)
                }(cc.Component));
        o.default = h,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController"
    }],
    ADBHTrendChartRightList: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "7e286et46BCa4KRab4sKe++", "ADBHTrendChartRightList");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = t("../../ADBHController")
            , l = t("./ADBHRightItem")
            , c = cc._decorator
            , h = c.ccclass
            , _ = (c.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            var t = this;
                            this.node.children[0].active = !1,
                                this.scheduleOnce(function () {
                                    t._init()
                                }, .2)
                        }
                        ,
                        e.prototype._init = function () {
                            for (var t = 0; t < 12; t++)
                                this.node.addChild(cc.instantiate(this.node.children[0]));
                            for (var e = 0, o = this.node.children; e < o.length; e++)
                                o[e].active = !1;
                            this._updateTrend(),
                                a.ADBH_G.event.on(a.ADBH_EVENT.UPDATE_TREND, this._updateTrend, this)
                        }
                        ,
                        e.prototype._updateTrend = function () {
                            var t = s.adbh_ctrl.model.trend
                                , e = t && t.trendInfo && t.trendInfo.winNameType;
                            e || (e = []);
                            for (var o = e.slice(-13), i = o.length - 1, n = 0; n < o.length; n++)
                                if (this.node.children[n]) {
                                    var r = this.node.children[n].getComponent(l.default);
                                    r.node.active = !0,
                                        r.updateData(o[n]),
                                        r.showHighLight(n == i)
                                }
                            for (var a = this.node.children.length - 1; a >= o.length; a--)
                                this.node.children[a].active = !1
                        }
                        ,
                        r([h], e)
                }(cc.Component));
        o.default = _,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController",
        "./ADBHRightItem": "ADBHRightItem"
    }],
    ADBHTrendSimple: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "f58cbmXmS5CSqUSGOamXR4S", "ADBHTrendSimple");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../ADBHConfig")
            , s = t("../../ADBHController")
            , l = t("./ADBHTrendChartProgress")
            , c = t("./ADBHtrendChartUpdate")
            , h = cc._decorator
            , _ = h.ccclass
            , p = h.property
            , d = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.table_bead_road = null,
                        e.table_big_road = null,
                        e.pre_recentvictory = null,
                        e.right_list = null,
                        e.instancesObjName = {},
                        e.bigRoad = null,
                        e.beadRoad = null,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        this.updateTrend(),
                            this.dealProgress(),
                            this.dealRightList(),
                            a.ADBH_G.event.on(a.ADBH_EVENT.UPDATE_TREND, this.updateTrend, this),
                            a.ADBH_G.event.on(a.ADBH_EVENT.RESET_GAME_SCENE, this.refreshShow, this),
                            a.ADBH_G.event.on(a.ADBH_EVENT.ANDARBARHAR_GAME_STATUS_SWITCH_NOTIFY, this.refreshShow, this),
                            this.refreshShow(!1)
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        this.unscheduleAllCallbacks(),
                            a.ADBH_G.event.targetOff(this)
                    }
                    ,
                    e.prototype.refreshShow = function () { }
                    ,
                    e.prototype.showWithAnimation = function () {
                        var t = this;
                        if (255 != this.node.opacity) {
                            this.node.active = !0,
                                this.node.stopAllActions(),
                                this.node.opacity = 0,
                                this.node.setScale(1);
                            var e = cc.sequence(cc.scaleTo(0, .19), cc.spawn(cc.fadeIn(10 / 30), cc.scaleTo(10 / 30, 1.02)), cc.scaleTo(5 / 30, .98), cc.scaleTo(5 / 30, 1), cc.callFunc(function () {
                                t.node.opacity = 255
                            }));
                            this.node.runAction(e)
                        }
                    }
                    ,
                    e.prototype.hideWithAnimation = function () {
                        var t = this;
                        if (0 != this.node.opacity) {
                            this.node.stopAllActions(),
                                this.node.opacity = 255,
                                this.node.setScale(1);
                            var e = cc.sequence(cc.fadeOut(10 / 30), cc.callFunc(function () {
                                t.node.opacity = 0,
                                    t.node.active = !1
                            }));
                            this.node.runAction(e)
                        }
                    }
                    ,
                    e.prototype.dealBeadRoad = function () {
                        var t = this;
                        this.instancesObjName[this.table_bead_road.name] || (this.beadRoad = this.addTrendTableByPre(this.table_bead_road, "ADBHTrendChartBeadItem", s.adbh_ctrl.res.beadRoadSfs, 13, a.ADBH_TREND_GRID.beatRow, !0),
                            this.instancesObjName[this.table_bead_road.name] = function () {
                                t.beadRoad.hide()
                            }
                        );
                        var e = this.arrayToGrid(s.adbh_ctrl.model.beadRoad, a.ADBH_TREND_GRID.beatRow) || [];
                        e = e.slice(-13),
                            this.beadRoad.gridDataRender(e, null, !0, function (t) {
                                a.ADBH_G.event.emitNow("select_trend_index", t)
                            })
                    }
                    ,
                    e.prototype.dealBigRoad = function () {
                        var t = this;
                        this.instancesObjName[this.table_big_road.name] || (this.bigRoad = this.addTrendTableByPre(this.table_big_road, "TrendTableItem", s.adbh_ctrl.res.bigRoadSfs, 13, a.ADBH_TREND_GRID.bigRow, !0),
                            this.instancesObjName[this.table_big_road.name] = function () {
                                t.bigRoad.hide()
                            }
                        );
                        var e = s.adbh_ctrl.model.bigRoad.road || [];
                        e = e.slice(-13),
                            this.bigRoad.gridDataRender(e, null, !0)
                    }
                    ,
                    e.prototype.dealProgress = function () {
                        if (!this.instancesObjName[this.pre_recentvictory.name]) {
                            var t = cc.instantiate(this.pre_recentvictory);
                            t.setParent(this.node),
                                t.addComponent(l.default).init(s.adbh_ctrl.res.beadRoadSfs, s.adbh_ctrl.res.bsLabels, a.ADBH_TREND_GRID.bigRow),
                                this.instancesObjName[this.pre_recentvictory.name] = function () {
                                    console.log("")
                                }
                        }
                    }
                    ,
                    e.prototype.dealRightList = function () {
                        this.instancesObjName[this.right_list.name] || (cc.instantiate(this.right_list).setParent(this.node),
                            this.instancesObjName[this.right_list.name] = function () {
                                console.log("")
                            }
                        )
                    }
                    ,
                    e.prototype.updateTrend = function () {
                        this.dealyCreate()
                    }
                    ,
                    e.prototype.dealyCreate = function () {
                        var t = this;
                        s.adbh_ctrl.model.bigEyeRoad.road.length % 2 != 0 && s.adbh_ctrl.model.bigEyeRoad.road.push([0]),
                            s.adbh_ctrl.model.smallEyeRoad.road.length % 2 != 0 && s.adbh_ctrl.model.smallEyeRoad.road.push([0]),
                            s.adbh_ctrl.model.cockRoad.road.length % 2 != 0 && s.adbh_ctrl.model.cockRoad.road.push([0]),
                            this.scheduleOnce(function () {
                                t.dealBeadRoad(),
                                    t.dealBigRoad()
                            })
                    }
                    ,
                    e.prototype.addTrendTableByPre = function (t, e, o, i, n, r) {
                        void 0 === r && (r = !0);
                        var a = cc.instantiate(t)
                            , l = a.addComponent(c.ADBHtrendChartUpdate);
                        l.rendererTarget = l.node.children[0].children[0];
                        var h = l.node.children[0].children[0].children[0].addComponent(e);
                        return h.beadSfs = o,
                            h.labels = s.adbh_ctrl.res.bsLabels,
                            l.lineBold = 0,
                            l.minCol = i,
                            l.minRow = n,
                            l.isRendererTablePlate = !0,
                            l.isOddLine = r,
                            a.setParent(this.node),
                            l
                    }
                    ,
                    e.prototype.arrayToGrid = function (t, e) {
                        if (null == t || 0 == t.length)
                            return [];
                        for (var o = [], i = 0; i < Math.ceil(t.length / e); i++) {
                            for (var n = [], r = 0; r < e; r++) {
                                var a = t[i * e + r];
                                null == a && n.push(-1),
                                    n.push(a)
                            }
                            o.push(n)
                        }
                        return o
                    }
                    ,
                    r([p(cc.Prefab)], e.prototype, "table_bead_road", void 0),
                    r([p(cc.Prefab)], e.prototype, "table_big_road", void 0),
                    r([p(cc.Prefab)], e.prototype, "pre_recentvictory", void 0),
                    r([p(cc.Prefab)], e.prototype, "right_list", void 0),
                    r([_], e)
            }(cc.Component);
        o.default = d,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig",
        "../../ADBHController": "ADBHController",
        "./ADBHTrendChartProgress": "ADBHTrendChartProgress",
        "./ADBHtrendChartUpdate": "ADBHtrendChartUpdate"
    }],
    ADBHtrendChartUpdate: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "e68cdo/2thMVaOU0poeTEo/", "ADBHtrendChartUpdate");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
            o.ADBHtrendChartUpdate = void 0;
        var a = t("../../ADBHConfig")
            , s = cc._decorator
            , l = s.ccclass
            , c = s.property
            , h = function (t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.LINE_BOLD = 1,
                        e.isRendererTablePlate = !0,
                        e.isOddLine = !0,
                        e.rendererTarget = null,
                        e.lineSf = null,
                        e.minRow = 0,
                        e.minCol = 0,
                        e.lineBold = e.LINE_BOLD,
                        e.itemPrefab = null,
                        e._itemList = [],
                        e._rowLineList = [],
                        e._colLineList = [],
                        e._currRow = -1,
                        e._currCol = -1,
                        e._isLoad = !1,
                        e.lastGridData = null,
                        e.scrollView = null,
                        e.isCanScroll = !0,
                        e.gridData = null,
                        e.beadSfs = null,
                        e.completeFunc = null,
                        e.createing = !1,
                        e
                }
                return n(e, t),
                    e.prototype.onLoad = function () {
                        this._isLoad || (this._isLoad = !0,
                            this.rendererTarget = this.rendererTarget || this.node,
                            this.rendererTarget.setAnchorPoint(new cc.Vec2(0, 1)),
                            null == this.itemPrefab ? this._itemList[0] = this.rendererTarget.children[0].getComponents(cc.Component)[0] : this._itemList[0] = cc.instantiate(this.itemPrefab).getComponents(cc.Component)[0],
                            this._itemList[0].node.parent = this.rendererTarget,
                            this._itemList[0].node.active = !1,
                            this.scrollView = this.node.getComponent(cc.ScrollView),
                            this.drawTablePlate(this.minRow, this.minCol))
                    }
                    ,
                    e.prototype.renderGridFinish = function (t, e) {
                        this.drawTablePlate(t < this.minRow ? this.minRow : t, e < this.minCol ? this.minCol : e),
                            this.scrollView && this.scrollView.scrollToRight()
                    }
                    ,
                    e.prototype.renderGridData = function (t, e) {
                        void 0 === e && (e = null);
                        for (var o = 0, i = 0, n = 0, r = 0; r < t.length; r++)
                            if (null != t[r])
                                for (var a = 0; a < t[r].length; a++)
                                    if (null != t[r][a] && -1 != t[r][a]) {
                                        o = a + 1,
                                            i = r + 1;
                                        var s = null;
                                        this._itemList.length > n ? s = this._itemList[n] : ((s = cc.instantiate(this._itemList[0].node).getComponents(cc.Component)[0]).node.parent = this.rendererTarget,
                                            s.node.name = "item" + n,
                                            this._itemList.push(s)),
                                            s.updateData(t[r][a], n);
                                        var l = this.getItemPosition(o, i);
                                        s.node.x = l.x,
                                            s.node.y = l.y,
                                            s.node.active = !0,
                                            n++
                                    }
                        this.renderGridFinish(o, i)
                    }
                    ,
                    e.prototype.renderGridDataByCache = function (t, e, o) {
                        if (void 0 === e && (e = null),
                            void 0 === o && (o = null),
                            this.createing)
                            return this.gridData = t,
                                this.beadSfs = e,
                                void (this.completeFunc = o);
                        this.completeFunc = null;
                        for (var i = 0, n = 0, r = 0, a = [], s = t.length, l = [], c = [], h = s > this.minCol ? s - this.minCol : s, _ = -1, p = 0; p < t.length; p++)
                            if (null != t[p])
                                for (var d = 0; d < t[p].length; d++)
                                    if (null != t[p][d] && -1 != t[p][d]) {
                                        i = d + 1,
                                            n = p + 1;
                                        var u = null;
                                        if (this._itemList.length > r) {
                                            (u = this._itemList[r]).updateData(t[p][d], r);
                                            var f = this.getItemPosition(i, n);
                                            u.node.x = f.x,
                                                u.node.y = f.y,
                                                u.node.active = !0,
                                                _ = r
                                        } else {
                                            var A = {
                                                data: t[p][d],
                                                index: r,
                                                pos: this.getItemPosition(i, n)
                                            };
                                            this.setCacheDatas(h, n, l, c, A, a)
                                        }
                                        r++
                                    }
                        var g = this.getLastIndexCanScroll(a, _, c, l);
                        this.createItem({
                            lastIndex: g.lastIndex,
                            datas: g.tempCacheDatas
                        }, r, i, n, o)
                    }
                    ,
                    e.prototype.getLastIndexCanScroll = function (t, e, o, i) {
                        return this.isCanScroll ? (t = t.concat(o).concat(i)).length > 0 && (e = o.length > 0 ? o[o.length - 1].index : i[i.length - 1].index) : e = t.length - 1,
                        {
                            lastIndex: e,
                            tempCacheDatas: t
                        }
                    }
                    ,
                    e.prototype.setCacheDatas = function (t, e, o, i, n, r) {
                        this.isCanScroll ? t >= e ? o.push(n) : i.push(n) : r.push(n)
                    }
                    ,
                    e.prototype.createItem = function (t, e, o, i, n) {
                        var r = this
                            , a = function (t) {
                                n && n(t)
                            };
                        this.createing = !0;
                        var s = 0
                            , l = t.datas.length - 1;
                        l >= 0 ? this.schedule(function () {
                            var o = t.datas[s];
                            if (o) {
                                var i = cc.instantiate(r._itemList[0].node).getComponents(cc.Component)[0];
                                i.node.parent = r.rendererTarget,
                                    i.node.name = "item" + o.index,
                                    r._itemList.push(i),
                                    i.node.active = !0,
                                    i.updateData(o.data, o.index),
                                    i.node.x = o.pos.x,
                                    i.node.y = o.pos.y,
                                    o.index == t.lastIndex && a(t.lastIndex),
                                    s == l && r.hideOtherItem(e),
                                    s++
                            } else
                                console.warn("\u8d70\u52bf\u56fe\u6570\u636e\u9519\u8bef")
                        }, 0, l, 0) : (a(t.lastIndex),
                            this.hideOtherItem(e)),
                            this.renderGridFinish(o, i)
                    }
                    ,
                    e.prototype.hideOtherItem = function (t) {
                        if (this.createing = !1,
                            this.gridData) {
                            var e = this.gridData.slice(0, this.gridData.length)
                                , o = this.beadSfs ? this.beadSfs.slice(0, this.beadSfs.length) : null;
                            this.gridData = null,
                                this.beadSfs = null,
                                this.renderGridDataByCache(e, o, this.completeFunc)
                        }
                        if (t < this._itemList.length)
                            for (var i = t; i < this._itemList.length; i++)
                                this._itemList[i].node.active = !1;
                        if (!this.isCanScroll)
                            for (i = 0; i < t; i++)
                                this._itemList[i].setSelectBgActive(t - 1 == i)
                    }
                    ,
                    e.prototype.gridDataRender = function (t, e, o, i) {
                        if (void 0 === e && (e = null),
                            void 0 === o && (o = !1),
                            void 0 === i && (i = null),
                            this._isLoad || this.onLoad(),
                            null == t)
                            return console.error("\u8868\u683c\u6570\u636e\u4e0d\u80fd\u4e3a\u7a7a!");
                        a.ADBH_G.tool.isObjectEqual(this.lastGridData, t) && !o || (this.lastGridData = t,
                            null != e && (this._itemList[0].beadSfs = e),
                            o ? this.renderGridDataByCache(t, e, i) : this.renderGridData(t, e))
                    }
                    ,
                    e.prototype.drawTablePlate = function (t, e) {
                        this.isRendererTablePlate && (t == this._currRow && e == this._currCol || (this._currRow = t,
                            this._currCol = e,
                            this.drawTableRow(),
                            this.drawTableCol()))
                    }
                    ,
                    e.prototype.drawTableRow = function () {
                        this.rendererTarget.height = this.getHeightByRow(this._currRow);
                        for (var t = Math.max(this._currRow + 1, this._rowLineList.length), e = 0; e < t; e++) {
                            var o = this._rowLineList[e];
                            null == o && (o = this.createLine(0, this.lineBold),
                                this._rowLineList.push(o)),
                                e >= this._currRow + 1 ? o.active = !1 : this.isOddLine || e % 2 == 0 ? (o.active = !0,
                                    o.width = this.getWidthByCol(this._currCol),
                                    o.position = new cc.Vec2(0, (this.itemHeight + this.lineBold) * e * -1)) : o.active = !1
                        }
                    }
                    ,
                    e.prototype.drawTableCol = function () {
                        this.rendererTarget.width = this.getWidthByCol(this._currCol);
                        for (var t = Math.max(this._currCol + 1, this._colLineList.length), e = 0; e < t; e++) {
                            var o = this._colLineList[e];
                            null == o && (o = this.createLine(this.lineBold, 0),
                                this._colLineList.push(o)),
                                e >= this._currCol + 1 ? o.active = !1 : this.isOddLine || e % 2 == 0 ? (o.active = !0,
                                    o.height = this.getHeightByRow(this._currRow),
                                    o.position = new cc.Vec2((this.itemWidth + this.lineBold) * e, 0)) : o.active = !1
                        }
                    }
                    ,
                    e.prototype.getItemPosition = function (t, e) {
                        var o = (this.itemWidth + this.lineBold) * (e - 1) + this.lineBold
                            , i = -1 * ((this.itemHeight + this.lineBold) * (t - 1) + this.lineBold);
                        return new cc.Vec2(o, i)
                    }
                    ,
                    e.prototype.getWidthByCol = function (t) {
                        return t * this.itemWidth + (t + 1) * this.lineBold
                    }
                    ,
                    e.prototype.getHeightByRow = function (t) {
                        return t * this.itemHeight + (t + 1) * this.lineBold
                    }
                    ,
                    e.prototype.createLine = function (t, e) {
                        var o = new cc.Node;
                        o.setAnchorPoint(new cc.Vec2(0, 1)),
                            o.parent = this.rendererTarget;
                        var i = o.addComponent(cc.Sprite);
                        return i.spriteFrame = this.lineSf,
                            i.type = cc.Sprite.Type.SLICED,
                            o.setContentSize(t, e),
                            o
                    }
                    ,
                    Object.defineProperty(e.prototype, "itemHeight", {
                        get: function () {
                            return this._itemList[0].node.height
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "itemWidth", {
                        get: function () {
                            return this._itemList[0].node.width
                        },
                        enumerable: !1,
                        configurable: !0
                    }),
                    e.prototype.hide = function () {
                        this.unscheduleAllCallbacks(),
                            this.createing = !1
                    }
                    ,
                    e.prototype.onDestroy = function () {
                        this.unscheduleAllCallbacks()
                    }
                    ,
                    r([c], e.prototype, "isRendererTablePlate", void 0),
                    r([c], e.prototype, "isOddLine", void 0),
                    r([c(cc.Node)], e.prototype, "rendererTarget", void 0),
                    r([c(cc.SpriteFrame)], e.prototype, "lineSf", void 0),
                    r([c], e.prototype, "minRow", void 0),
                    r([c], e.prototype, "minCol", void 0),
                    r([c], e.prototype, "lineBold", void 0),
                    r([c(cc.Prefab)], e.prototype, "itemPrefab", void 0),
                    r([l], e)
            }(cc.Component);
        o.ADBHtrendChartUpdate = h,
            cc._RF.pop()
    }
        , {
        "../../ADBHConfig": "ADBHConfig"
    }],
    AdbhClose: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "996f97jnUFOgacPePj5lAKw", "AdbhClose");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , s = a.ccclass
            , l = (a.property,
                function (t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return n(e, t),
                        e.prototype.start = function () {
                            var t = window.G;
                            t.tool.addBtnClickEvent("btn_close1", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close2", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close3", this.node, this._onCloseEvent, this),
                                t.tool.addBtnClickEvent("btn_close4", this.node, this._onCloseEvent, this)
                        }
                        ,
                        e.prototype._onCloseEvent = function () {
                            this.node.emit("dialog_close_event");
                            var t = window.G
                                , e = this.node.name;
                            t.uiMaster.popView(t.uiMaster.toPath(e))
                        }
                        ,
                        r([s], e)
                }(cc.Component));
        o.default = l,
            cc._RF.pop()
    }
        , {}],
    AdbhLine: [function (t, e, o) {
        "use strict";
        cc._RF.push(e, "a4cad6l8a9JE5P7MO/ZFy0X", "AdbhLine");
        var i, n = this && this.__extends || (i = function (t, e) {
            return (i = Object.setPrototypeOf || {
                __proto__: []
            } instanceof Array && function (t, e) {
                t.__proto__ = e
            }
                || function (t, e) {
                    for (var o in e)
                        Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                }
            )(t, e)
        }
            ,
            function (t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e),
                    t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype,
                        new o)
            }
        ), r = this && this.__decorate || function (t, e, o, i) {
            var n, r = arguments.length, a = r < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                a = Reflect.decorate(t, e, o, i);
            else
                for (var s = t.length - 1; s >= 0; s--)
                    (n = t[s]) && (a = (r < 3 ? n(a) : r > 3 ? n(e, o, a) : n(e, o)) || a);
            return r > 3 && a && Object.defineProperty(e, o, a),
                a
        }
            ;
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator
            , s = a.ccclass
            , l = (a.property,
                function (t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e._originSize = cc.size(2, 2),
                            e
                    }
                    return n(e, t),
                        e.prototype.onLoad = function () {
                            this._originSize = cc.size(this.node.width, this.node.height)
                        }
                        ,
                        e.prototype.start = function () {
                            var t = cc.view.getFrameSize()
                                , e = cc.view.getDesignResolutionSize()
                                , o = cc.find("Canvas").getComponent(cc.Canvas)
                                , i = 1;
                            o && (o.fitWidth && o.fitHeight ? i = Math.min(t.width / e.width, t.height / e.height) : o.fitWidth ? i = t.width / e.width : o.fitHeight && (i = t.height / e.height),
                                this._originSize.width > this._originSize.height ? (this.node.height = Math.max(1, Math.floor(this._originSize.height / i)),
                                    cc.sys.isNative && this.node.height > 1.2 && (this.node.height = 1.2)) : (this.node.width = Math.max(1, Math.floor(this._originSize.width / i)),
                                        cc.sys.isNative && this.node.width > 1.2 && (this.node.height = 1.2)))
                        }
                        ,
                        r([s], e)
                }(cc.Component));
        o.default = l,
            cc._RF.pop()
    }
        , {}]
}, {}, ["ADBHAdaptor", "ADBHAudio", "ADBHConfig", "ADBHController", "ADBHHelper", "ADBHMarquee", "ADBHModel", "ADBHNet", "ADBHOp5Tip", "ADBHRes", "ADBHChipBox", "ADBHChipEvent", "ADBHChipMgr", "ADBHChipMove", "ADBHChipPool", "ADBHMainItemV", "ADBHMainSummaryInfo_H", "ADBHMainV", "ADBHRule", "ADBHHis", "ADBHMorePlayerMgr", "ADBHRecordDetail", "AdbhClose", "ADBHChangeTable", "ADBHChangeTableCell", "ADBHChangeTableItem", "ADBHRightItem", "ADBHTrendChartBeadItem", "ADBHTrendChartProgress", "ADBHTrendChartRightList", "ADBHTrendSimple", "ADBHtrendChartUpdate", "ADBHAreaComp", "ADBHCardsComp", "ADBHCircleCD", "ADBHClock", "ADBHCroupier", "ADBHGameView", "ADBHPlayer", "ADBHPubComp", "ADBHSpineAnis", "AdbhLine", "ADBHGameRecordItemDetail"]);
