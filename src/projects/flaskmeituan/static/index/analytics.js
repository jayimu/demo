!
function() {
    "use strict";
    function n(n) {
        return ""
    }
    function t() {
        var n = ur.get(Le);
        if (n) {
            var t = n.split("|");
            return {
                mis: t[0],
                env: t[1] || ""
            }
        }
        return n || {}
    }
    function e(n) {
        Ne = n
    }
    function r() {
        return Ne === st
    }
    function i() {
        if (!Ve) {
            var n = "v2/api/" + Te + "/validate",
            e = "validate-ocean" + Ee,
            r = 0 === Je.protocol.indexOf("http:"),
            i = r ? "http:": "https:";
            Ve = i + "//report.meituan.com/";
            var u = Je.search,
            o = u.match(Ce) || [],
            a = t(),
            c = void 0,
            s = void 0;
            if (s = o && o[1] || a.mis || "") {
                ur.set(Le, s + "|" + (c || ""), Me);
                var f = e;
                Ve = i + "//" + f + "/" + n + "?mis=" + s
            }
        }
        return Ve
    }
    function u(n) {
        return "undefined" == typeof n ? "undefined": Be(n)
    }
    function o(n, t) {
        return u(n) === t
    }
    function a() {
        return + new Date
    }
    function c() {
        return Math.random()
    }
    function s(n) {
        return o(n, "number")
    }
    function f(n) {
        return ! n && o(n, "object")
    }
    function d(n, t) {
        var e = void 0,
        r = ir.find(n,
        function(n) {
            return rr.attr(n, "name") === t
        });
        return r && (e = rr.attr(r, "content")),
        e
    }
    function v() {
        var n = Ue[ct];
        return Ue[n]
    }
    function l(n) {
        var t = void 0,
        e = or.get(),
        r = a();
        if (n && e) t = e,
        or.update(r);
        else {
            var i = v(),
            u = Ue.performance && Ue.performance.timing;
            t = u && u.requestStart,
            t || (t = i ? i.l: nr),
            or.update(r)
        }
        return r - t
    }
    function h(n) {
        var t = {
            duration: l(!0 === n)
        },
        e = void 0,
        r = rr.isFunc(Pe.quit);
        return r && (e = r()),
        t = rr.extend(t, e || {})
    }
    function p(n, t) { ! t[pe]
    }
    function g(n) {
        if (!n) return $e;
        var t = $e,
        e = /^utm_(source|medium|term|content|campaign)$/;
        return ir.each(n,
        function(n, r) {
            e.test(r) && (!t && (t = {}), t[r] = n)
        }),
        t
    }
    function m() {
        return "daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q cnn:query virgilio:qs baidu:wd baidu:word alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT search.smt.docomo:MT onet:qt onet:q kvasir:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q centrum.cz:q 360.cn:q sogou:query tut.by:query globo:q ukr:q so.com:q haosou.com:q auone:q m.baidu:word wap.baidu:word baidu:word Baidu:bs www.soso:w wap.soso:key www.sogou:query wap.sogou:keyword m.so:q m.sogou:keyword so.com:pq youdao:q sm.cn:q sm.cn:keyword haosou:q".split(" ")
    }
    function y(n) {
        var t = rr.parseQuery(n);
        return g(t)
    }
    function _(n) {
        var t = $e,
        e = n.match(/^[\w-]+:\/\/([^\/]+)(?:\/([^?]+)?)?/),
        r = e && e[1];
        if (r) {
            var i = rr.parseQuery(n),
            u = m(),
            o = "",
            a = "";
            ir.each(u,
            function(n) {
                var t = n.split(":"),
                e = t[0],
                u = t[1],
                c = i[u],
                s = -1 < e.indexOf(".") ? e: "." + e + ".";
                if ( - 1 < r.indexOf(s.toLowerCase()) && (a = e, o = c)) return ! 1
            }),
            a && (t = {},
            t[br] = a, t[xr] = "organic", o && (t[qr] = o))
        }
        return t
    }
    function w(n) {
        if (n) {
            Ar = n;
            var t = rr.stringifyQuery(n);
            return ur.set(Se, t, xe, He),
            !0
        }
        return ! 1
    }
    function b() {
        var n = ur.get(Se);
        if (!Ct.test(n)) return Ar;
        var t = rr.isStr(n) ? rr.parseQuery(n) : null;
        return g(t)
    }
    function x() {
        var n = void 0,
        t = /(utmc(tr|sr|cn|md|ct))=([^|()]+)/g,
        e = ur.get("__utmz"),
        r = e && e.match(t);
        return r && ir.each(r,
        function(t) {
            var e = t.split("="),
            r = e[0],
            i = void 0,
            u = e[1] || "";
            "utmcsr" === r ? i = br: "utmccn" === r ? i = kr: "utmcmd" === r ? i = xr: "utmcct" === r ? i = Sr: "utmctr" === r && (i = qr),
            i && (n = n || {},
            n[i] = u)
        }),
        n
    }
    function q(n, t) {
        return (!Ar && !Or || n) && (n = n || Je.href, t = t || Xe.referrer, Ar = y(n) || _(t), Ar ? w(Ar) : Ar = b(), Ar || (Ar = x(), w(Ar)), Or = ot),
        Ar
    }
    function k(n) {
        return Dr + n
    }
    function S() {
        return {
            length: 0,
            _data: {},
            setItem: function(n, t) {
                return this.length++,
                this._data[n] = String(t)
            },
            getItem: function(n) {
                return this._data.hasOwnProperty(n) ? this._data[n] : $e
            },
            removeItem: function(n) {
                return this.length--,
                delete this._data[n]
            },
            clear: function() {
                return this.length = 0,
                this._data = {}
            },
            key: function(n) {
                var t = [],
                e = this._data;
                return ir.each(e,
                function(n) {
                    rr.hasOwn(e, n) && t.push(n)
                }),
                t[n]
            }
        }
    }
    function A(n, t, e, r, i, u) {
        var o = {};
        o.c = n,
        o.k = t,
        o.v = e,
        o.t = r || +new Date,
        o.u = i || "",
        o.r = u || "",
        this.toJSON = function() {
            return rr.extend(!0, {},
            o)
        }
    }
    function O(n) {
        var t = rr.now();
        return Vr < t - n.t
    }
    function j(n) {
        return n
    }
    function I(n) {
        try {
            n(D(this, Br), D(this, Rr))
        } catch(t) {
            if (this._state === Qr) return E(new I(j), Rr, t)
        }
    }
    function D(n, t) {
        return function(e) {
            return E(n, t, e)
        }
    }
    function F(n, t, e, r) {
        return u(e) === Ur && (t._onFulfilled = e),
        u(r) === Ur && (t._onRejected = r),
        n._state === Qr ? n[n._pCount++] = t: T(n, t),
        t
    }
    function T(n, t) {
        return setTimeout(function() {
            var e = void 0,
            r = n._state ? t._onFulfilled: t._onRejected;
            if (void 0 === r) return void E(t, n._state, n._value);
            try {
                e = r(n._value)
            } catch(i) {
                return void E(t, Rr, i)
            }
            C(t, e)
        })
    }
    function E(n, t, e) {
        if (n._state === Qr) {
            n._state = t,
            n._value = e;
            for (var r = 0,
            i = n._pCount; r < i;) T(n, n[r++]);
            return n
        }
    }
    function C(n, t) {
        if (t === n && t) return void E(n, Rr, new Error("promise_circular_chain"));
        var e = void 0,
        r = u(t);
        if (null === t || r !== Ur && r !== Jr) E(n, Br, t);
        else {
            try {
                e = t.then
            } catch(i) {
                return void E(n, Rr, i)
            }
            u(e) === Ur ? L(n, t, e) : E(n, Br, t)
        }
        return n
    }
    function L(n, t, e) {
        try {
            e.call(t,
            function(e) {
                t && (t = null, C(n, e))
            },
            function(e) {
                t && (t = null, E(n, Rr, e))
            })
        } catch(r) {
            t && (E(n, Rr, r), t = null)
        }
    }
    function M(n, t) {
        ir.each(zr,
        function(e) {
            e(n, t)
        }),
        zr = []
    }
    function N(n) {
        var t = Ue.KNB;
        if (Ue.KNB) {
            if (Xr) n(Gr, Kr);
            else if (zr.push(n), !$r) {
                $r = !0;
                var e = Lt(function() {
                    Gr = Nt,
                    M(Nt, Kr)
                },
                Hr);
                /meituan \d+/i.test(ze) || /meituangroup\/7\.([0-7])\./i.test(ze) ? M(Qt, Kr) : t.ready(function() {
                    t.isApiSupported({
                        apiName: "lxlog",
                        success: function(n) { ! 0 === n ? (Kr = t, Xr = !0, Mt(e), M($e, Kr)) : M(Qt, Kr)
                        },
                        fail: function() {
                            Mt(e),
                            Gr = Rt,
                            M(Rt)
                        }
                    })
                })
            }
        } else n(Bt, Kr)
    }
    function V() {
        return Zr ? I.resolve(Zr) : new I(function(n, t) {
            N(function(e, r) {
                var i = Ue.DPApp,
                u = Lt(function() {
                    n({})
                },
                Wr);
                r ? r.ready(function() {
                    r.use(Yr, {
                        success: function(t) {
                            Mt(u),
                            Zr = t,
                            n(t)
                        },
                        fail: function(n) {
                            Mt(u),
                            t({
                                code: Pt
                            })
                        }
                    })
                }) : i && i[Yr] ? i.ready(function() {
                    i[Yr]({
                        success: function(t) {
                            Mt(u),
                            n(t)
                        },
                        fail: function(n) {
                            Mt(u),
                            t({
                                code: Vt,
                                res: n
                            })
                        }
                    })
                }) : t({
                    code: Vt
                })
            })
        }).then(function(n) {
            var t = {};
            return "success" !== n.status && 0 !== n.code || (t.dpid = n.dpid, t.userId = n.userId, t.unionId = n.unionId),
            Zr = t,
            t
        })
    }
    function P() {
        return ur.get(je)
    }
    function R(n) {
        n && ur.top(je, n, qe)
    }
    function B() {
        var n = P() || ni();
        return R(n),
        n
    }
    function Q() {
        var n = Math.floor(1 + 65535 * rr.rnd());
        return n.toString(16).substring(1)
    }
    function U() {
        var n = [],
        t = +new Date;
        return n.push(t.toString(16)),
        n.push(Q()),
        n.push(Q()),
        n.push(Q()),
        n.join("-")
    }
    function J() {
        if ($e !== ti) return ti;
        var n = Xe.getElementsByTagName("meta");
        return ti = "off" === d(n, "lx:native-report")
    }
    function X() {
        return ei
    }
    function H(n) {
        J() || (ei = n)
    }
    function K(n, t, e) {
        return sr !== gt ? N(function(r, i) {
            if (r) return e(r);
            var u = (new Date, !1),
            o = Lt(function() {
                u = !0,
                e(Nt)
            },
            ri);
            i.use(n, {
                data: t,
                success: function(n) {
                    if (Mt(o), !u) if ("success" === n.status) {
                        var t = n.data;
                        try {
                            rr.isStr(t) && (t = Ir.parse(t)),
                            e($e, t.data ? t.data: n)
                        } catch(r) {}
                    } else e(Rt)
                },
                fail: function() {
                    Mt(o),
                    u || e(Rt)
                }
            })
        }) : void JavaScriptBridge.log(t,
        function(n) {
            try {
                rr.isStr(n) && (n = Ir.parse(n)),
                e($e, n.data ? n.data: n)
            } catch(t) {
                e(t)
            }
        })
    }
    function z(n) {
        var t = n.match(/(\d+)(?:\.(\d+)(?:\.(\d+))?)?/),
        e = [];
        if (t) for (var r = 1; r < t.length; r++) e.push(parseInt(t[r] || 0));
        return e
    }
    function $(n, t) {
        var e = z(n),
        r = z(t);
        return ! (e[0] < r[0]) && (!(e[0] === r[0] && e[1] < r[1]) && !(e[0] === r[0] && e[1] === r[1] && e[2] < r[2]))
    }
    function G() {
        return 100 * rr.now() + fi++
    }
    function W(n) {
        var t = {
            cb: "_lx" + G(),
            mn: n._mn,
            cn: n._cn,
            data: n._d || {},
            ver: 4
        };
        return t
    }
    function Y(n, t, e, r) {
        var i = this;
        i._cn = n,
        i._mn = t,
        i._d = e,
        i._cb = r
    }
    function Z(n, t, e, r) {
        if (ie === ui || ue === ui) return r(ui);
        var i = new Y(n, t, e);
        if (ee === ui) i.send(function(n, t) {
            r(n, t)
        });
        else if (re === ui) {
            if (si.push([i, r]), !oi) {
                oi = !0;
                var u = (new Date, new Y(n, ii, {}));
                u.send(function(n, t) {
                    if (n) ui = ie;
                    else {
                        if (ui = ee, H(me), rr.isStr(t)) try {
                            t = Ir.parse(t)
                        } catch(e) {}
                        di = t;
                        var r = t.sdk_ver;
                        ai = $(r, "4.0.0"),
                        ci = $(r, "4.3.0")
                    }
                    ir.each(si,
                    function(t) {
                        var e = t[0],
                        r = t[1];
                        n ? r(n) : e.send(function(n, t) {
                            r(n, t)
                        })
                    })
                })
            }
        } else r(oe)
    }
    function nn() {
        return ai
    }
    function tn() {
        return ci
    }
    function en(n) {
        var t = ur.get(Ae),
        e = t.split("."),
        r = "";
        return e.length ? (r = e[0], e[0] = n) : e.push(n),
        ur.top(Ae, e.join("."), qe),
        r
    }
    function rn(n, t, e) {
        var r = [];
        return r.push(n ? n: an()),
        r.push(t ? t: cn()),
        r.push(e ? e: sn()),
        r.join(wi)
    }
    function un(n) {
        var t = ur.get(De);
        return t ? t.split(wi)[n] : ""
    }
    function on(n, t, e) {
        ur.top(De, rn(n, t, e), ke)
    }
    function an() {
        return un(mi)
    }
    function cn() {
        return un(yi)
    }
    function sn() {
        var n = 0,
        t = un(_i);
        return isNaN(t) || (n = parseInt(t)),
        n < 0 ? 0 : n
    }
    function fn(n) {
        var t = sn();
        return ! 0 === n && (t++, dn(t)),
        (!t || -1 > t) && (t = 0, dn(t)),
        t
    }
    function dn(n) {
        on($e, $e, n)
    }
    function vn(n) {
        var t = {};
        if (Ct.test(n)) {
            var e = rr.parseQuery(n);
            return e[_t] && (t[_t] = e[_t]),
            e[bt] && (t[bt] = e[bt]),
            e[kt] && (t[qt] = e[kt]),
            t
        }
        return t
    }
    function ln(n) {
        return new I(function(t, e) {
            Lt(function() {
                e({
                    code: Nt
                })
            },
            3e3),
            Z(n, "getEnv", {},
            function(n, r) {
                if (n) e(n);
                else {
                    var i = {},
                    u = r.uuid;
                    u && (i[_t] = u);
                    var o = r.msid;
                    o && (i[wt] = o);
                    var a = r.uid;
                    a && (i[qt] = a);
                    var c = r.dpid;
                    c && (i[St] = c),
                    t(i)
                }
            })
        })
    }
    function hn() {
        var n = ur.get(Ae) || ur.get("iuuid") || ur.get("uuid"),
        t = an(),
        e = cn(),
        r = ur.get(Ie),
        i = {};
        return n && (i[_t] = n),
        t && (i[wt] = t),
        e && (i[qt] = e),
        r && (i[St] = r),
        i
    }
    function pn(n) {
        gi.push(n)
    }
    function gn(n) {
        return rr.extend(!0, {},
        n)
    }
    function mn(n, t) {
        if (be === pi) return I.resolve(gn(hi));
        if (we === pi) return new I(function(n) {
            pn(function(t) {
                n(t)
            })
        });
        pi = we;
        var e = sr === pt || sr === vt,
        r = hn(),
        i = {};
        e && (i = vn(Je.href)),
        hi = rr.extend(r, i),
        hi.ct = lr,
        hi.appnm = n;
        var u = q();
        u && (hi[xt] = u);
        var o = B();
        if (hi[yt] = o, hi[_t] || (hi[_t] = o, en(o)), hi[wt] || (hi[wt] = U(), on(hi[wt], hi.uid || "")), t && sr) {
            var a = ln(t),
            c = dt === sr;
            return c && (a = a.then(function(n) {
                return n.dpid && n.uid ? hi = rr.extend(!0, hi, n) : V().then(function(n) {
                    var t = {};
                    return n.dpid && (t.dpid = n.dpid, t.uid = "" + n.userId, t.union_id = n.unionId),
                    hi = rr.extend(hi, t)
                },
                function(n) {
                    return hi
                })
            })),
            a.then(function(n) {
                var t = n.uuid,
                e = n.dpid,
                r = n.union_id;
                return t && en(t),
                e && ur.top(Ie, e, qe),
                r && ur.top(Oe, r, qe),
                n
            },
            function(n) {
                return hi
            }).then(function(n) {
                return n.uuid || n.dpid || (n = rr.extend(!0, n, hi)),
                pi = be,
                ir.each(gi,
                function(t, e) {
                    rr.isFunc(t) && gi[e](n)
                }),
                n
            })
        }
        return I.resolve(gn(hi))
    }
    function yn(n, t, e, r) {
        Oi = Oi.concat(t);
        var i = void 0,
        u = ir.reduce(Oi,
        function(n, t) {
            return t.evs = n.evs.concat(t.evs),
            i = t.evs.length,
            i > xi && ir.slice(t.evs, i - xi, i),
            t
        });
        if (Oi = [u], ji.push(r), !Ai) var o = setInterval(function() {
            return Ii >= bi ? (clearInterval(o), !1) : void e(n, Oi,
            function(n) {
                clearInterval(o),
                Ai = !1,
                ir.each(ji,
                function(t) {
                    t && t(n)
                })
            },
            !0)
        },
        ki)
    }
    function _n(n) {
        var t = "_lxsdk_rnd=" + (Si++).toString(16);
        return - 1 === n.indexOf("?") ? n + "?" + t: n + "&" + t
    }
    function wn(n, t, e, r) {
        if (Ue.XDomainRequest) {
            var i = new XDomainRequest;
            i.open("POST", _n(n), !0),
            i.onload = function() {
                Ii = 0,
                e && e.cb(ee),
                Oi = []
            },
            i.onerror = function() {
                Ii++
            },
            i.ontimeout = function() {
                Ii++,
                r || (yn(n, t, wn, e), Ai = !0)
            },
            i.timeout = qi,
            i.send(Ir.stringify(t))
        }
    }
    function bn(n, t) {
        var e = new XMLHttpRequest;
        return e.open("POST", _n(n), !0),
        e.timeout = qi,
        e.setRequestHeader("Content-Type", t),
        e
    }
    function xn(n, t, e, r, i) {
        var u = bn(n, "text/plain");
        return !! u && (u.onreadystatechange = function() {
            if (4 === u.readyState) {
                var o = u.status;
                o >= 200 ? (Ii = 0, e && e.cb(ee), Oi = []) : (Ii++, r || !1 !== i || (yn(n, t, xn, e), Ai = !0)),
                e.nm === ae && (400 <= o || 0 === o) && qn(n, "web-report-fail", t[0].union_id, o),
                u.onreadystatechange = null
            }
        },
        u.onerror = function() {
            u.abort(),
            Ii++
        },
        u.send(Ir.stringify(t)), !0)
    }
    function qn(n, t, e, r, i) {
        var u = [{
            project: "web-lx-sdk",
            pageUrl: Je.href,
            resourceUrl: n,
            category: i ? "jsError": "ajaxError",
            sec_category: t,
            level: "error",
            unionId: e,
            timestamp: rr.now(),
            content: "" + r || ""
        }],
        o = bn("//catfront.dianping.com/api/log?v=1", "application/x-www-form-urlencoded");
        o && (o.onerror = o.onreadystatechange = function() {},
        o.send("c=" + encodeURIComponent(Ir.stringify(u))))
    }
    function kn(n, t, e) {
        if (Ii >= bi) return ! 1;
        if (e = rr.extend({
            cb: function() {}
        },
        e || {}), hr && pr < 10 && pr > 0) pr > 7 && wn(n, t, e);
        else {
            var r = Ke.sendBeacon;
            if (!fr && r && r.call(Ke, _n(n), Ir.stringify(t))) e.cb(ee);
            else try {
                xn(n, t, e)
            } catch(i) {
                qn(Je.path, "report-ajax", 0, i.message, !0)
            }
        }
        return ! 0
    }
    function Sn() {
        function n() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
    }
    function An() {
        return Sn() + "." + Math.round( + new Date / 1e3)
    }
    function On() {
        var n = ur.get(Fi);
        if (n || (n = An(), ur.top(Fi, n, Ti)), n) {
            var t = n.match(Di);
            return t ? t[1] : ""
        }
        return ""
    }
    function jn() {
        return ! Ei && Ci && (Ei = On()),
        Ei
    }
    function In(n, t) {
        var e = this;
        e.env = t || {},
        e.opts = rr.extend(!0, {},
        n),
        Qi.push(e)
    }
    function Dn(n) {
        return n._ptpvs === Xt
    }
    function Fn() {
        return ! Hi
    }
    function Tn(n) {
        return n = n || {},
        n && !rr.isObj(n) && (n = {
            cid: "" + n
        }),
        n
    }
    function En() {
        return Xi || (Xi = Nn()),
        Xi
    }
    function Cn() {
        return Xi = Nn()
    }
    function Ln() {
        var n = Tr.get(At);
        return n && Tr.del(At),
        n
    }
    function Mn(n) {
        return ! (!rr.isStr(n) && !n.length)
    }
    function Nn() {
        return rr.now().toString(16) + "-" + Math.floor(65535 * rr.rnd()) + "-" + Math.floor(65535 * rr.rnd())
    }
    function Vn(n) {
        var t = {};
        return t[le] = "order",
        t[he] = "pay",
        t[se] = "click",
        t[ve] = "return",
        t[de] = "view",
        t[fe] = "click",
        t[n]
    }
    function Pn(n) {
        var t = n.nm;
        ae === t ? (n.nm = "mpt", n.val_act = "pageview") : ce === t ? (n.nm = "report", n.val_act = "quit") : (n.nm = "mge", n.event_type = Vn(t) || t),
        n.nt = 0,
        n.isauto = 8
    }
    function Rn(n) {
        var t = "data_sdk_";
        return 0 !== n.indexOf(t) && (n = t + n),
        n
    }
    function Bn(n) {
        var t = "data_sdk_";
        return 0 === n.indexOf(t) && (n = n.replace(Mi, "")),
        n
    }
    function Qn(n) {
        var t = rr.extend(!0, {},
        n.env);
        t[Mi] = Rn(t[Mi]);
        var e = t.utm;
        return rr.extend(!0, {
            ua: ar,
            sdk_ver: mt,
            ch: e && e.utm_source ? e.utm_source: "web",
            sc: _r
        },
        t)
    }
    function Un(n, t, e, r, i) {
        i = i || Jt;
        var u = fn(!0),
        o = void 0,
        a = ae === n,
        c = {
            nm: n,
            tm: rr.now(),
            nt: ye,
            isauto: i,
            val_cid: t,
            req_id: En(),
            seq: u
        };
        if (a) {
            var s = Je.href;
            c.url = s,
            o = Ui,
            o && (c.refer_url = o),
            i === Jt && (Ui = s)
        }
        return r = Ki(r, "_hguid", jn()),
        a && (r = Ki(r, "_hpid", Li())),
        e && (c.val_bid = e),
        r && (c.val_lab = r),
        c
    }
    function Jn(n, t, e, r, i) {
        var u = Un(n, t, e, r, i);
        if (Ji && 0 < Ji.length) {
            var o = Ji;
            return Ji = [],
            o.push(u),
            o
        }
        return [u]
    }
    function Xn(n) {
        return wr && !nn() ? Ze(n) : n
    }
    function Hn(n, t, e, r, i) {
        i = i || Jt;
        var u = void 0,
        o = {
            nm: n,
            tm: rr.now(),
            nt: me,
            isauto: i,
            val_cid: t
        },
        a = void 0,
        c = rr.extend(!0, {},
        r || {}),
        s = ae === n;
        if (s) {
            var f = Xn(Je.href);
            a = {
                ua: ar,
                url: f,
                web_req_id: En(),
                web_sdk_ver: mt,
                lxcuid: B()
            },
            u = Ui,
            u && (a.refer_url = u),
            i === Jt && (Ui = f)
        } else a = {
            web_req_id: En(),
            web_sdk_ver: mt,
            lxcuid: B()
        };
        return c.custom = rr.extend(!0, c.custom, a),
        c = Ki(c, "_hguid", jn()),
        s && (c = Ki(c, "_hpid", Li())),
        n !== fe || tn() ? nn() || Pn(o) : nn() ? o.nm = se: Pn(o),
        o.val_lab = c,
        e && (o.val_bid = e),
        o
    }
    function Kn(n) {
        return n
    }
    function zn(n, t, e) {
        return ir.isArrayLike(t) || (t = [t]),
        rr.run(t,
        function(n) {
            n && e && (n.tag = e)
        }),
        n.evs = t,
        n
    }
    function $n(n) {
        return Fe[n]
    }
    function Gn(n, t) {
        var e = {};
        return e[pe] = t,
        rr.extend(e, n)
    }
    function Wn(n, t, e) {
        var r = null;
        return ! rr.isStr(n) || t || e || (r = n, n = null),
        rr.isObj(n) && rr.isStr(t) && !e && (r = t, t = null),
        r && (e = {
            cid: n
        }),
        {
            lab: n,
            env: t,
            opts: e
        }
    }
    function Yn(n, t, e, r) {
        var i = Wn(t, e, r),
        u = i.lab,
        o = i.env,
        a = i.opts;
        r = Tn(a);
        var c = r.cid || n.opts.cid;
        r = rr.extend({
            cid: c
        },
        r),
        o && rr.isObj(o) && ir.each(o,
        function(t, e) {
            n._dt.set(e, t)
        }),
        n._dt.pageView(u, r)
    }
    function Zn(n, t) {
        this.env = n || {},
        this.opts = t || {},
        this._t = []
    }
    function nt(n, t) {
        return {
            cb: n,
            cmd: t
        }
    }
    function tt(n, t) {
        if (be === Wi) n && n(Yi);
        else if (we === Wi) n && Gi.push(nt(n, t));
        else {
            rr.now();
            Gi = Gi.concat(nt(n, t)),
            Wi = we;
            var e = Xe.getElementsByTagName("meta"),
            r = d(e, "lx:cid"),
            i = d(e, "lx:category"),
            u = d(e, "lx:appnm"),
            o = d(e, "lx:defaultAppnm"),
            a = d(e, "lx:mvDelay");
            a = isNaN(a) ? 0 : parseInt(a, 10);
            var c = "off" !== d(e, "lx:autopv"),
            s = u || sr || o || Xe.domain;
            s === Xe.domain,
            mn(s, i).then(function(n) {
                Yi = new Zn(n, {
                    cid: r,
                    isDefault: !0,
                    mvDelay: a
                }),
                i && Yi.create(i, {
                    isDefault: !0
                }),
                n = rr.extend(!0, Yi._dt.env, n),
                Yi._dt.env = n;
                try {
                    var t = [];
                    ir.each(Gi,
                    function(e) {
                        var r = e.cb,
                        i = e.cmd;
                        "config" === i || "set" === i ? r(Yi, n) : t.push(e)
                    }),
                    c && i && r && r && Yi._initPV(n, r),
                    ir.each(t,
                    function(t) {
                        var e = t.cb;
                        e(Yi, n)
                    })
                } catch(e) {}
            }).then(function() {
                Wi = be
            },
            function(n) {
                throw Wi = be,
                n
            })
        }
    }
    function et(n, t, e, r, i) {
        if (rr.isFunc(t)) t.call(n, n, r, i);
        else if (!i && rr.isStr(t) && rr.isFunc(n[t])) return n[t].apply(n, e)
    }
    function rt() {
        if (!nu) {
            nu = !0;
            var n = void 0,
            t = void 0;
            hr && rr.on(Xe, "mouseup",
            function(t) {
                var e = t.target || t.srcElement,
                r = e.tagName + e.href;
                r = r.toLocaleLowerCase(),
                1 === e.nodeType && /^ajavascript:/i.test(r) && (n = new Date)
            });
            var e = function() {
                if (! (hr && new Date - n < 50 || t || (t = !1, r()))) {
                    var e = h();
                    ut("pageDisappear", e, {
                        shouldStore: vr
                    })
                }
            };
            rr.on(Ue, "beforeunload", e)
        }
    }
    function it() {
        function n() {
            var n = v();
            return n && (n.q.push = function() {
                var n = arguments[0];
                ut.apply($e, n)
            }),
            n && ir.isArray(n.q) ? n.q: []
        }
        var t = n();
        0 === t.length ? tt(function(n) {
            Zi = n,
            rt()
        }) : ir.each(t,
        function(n) {
            ut.apply($e, n)
        })
    }
    function ut(n) {
        var t = ir.slice(arguments, 1, arguments.length);
        try {
            Zi ? et(Zi, n, t, Zi._dt ? Zi._dt.env: null) : tt(function(e, r, i) {
                Zi = e,
                et(e, n, t, r, i),
                rt()
            },
            n)
        } catch(e) {
            try {
                qn("sdk", "api-error", "", e.stack, !0)
            } catch(e) {}
        }
    }
    var ot = !0,
    at = !1,
    ct = "_MeiTuanALogObject",
    st = 1,
    ft = 0,
    dt = "dianping_nova",
    vt = "waimai",
    lt = "moviepro",
    ht = "movie",
    pt = "group",
    gt = "demo",
    mt = "4.2.0",
    yt = "lxcuid",
    _t = "uuid",
    wt = "msid",
    bt = "cityid",
    xt = "utm",
    qt = "uid",
    kt = "userid",
    St = "dpid",
    At = "pd_data",
    Ot = /dp\/com\.dianping\.[\w.]+\/([\d.]+)/i,
    jt = /\bmeituanwaimai-c\/\d+\./i,
    It = /\bmoviepro/i,
    Dt = /\bmaoyan\b/i,
    Ft = /\bmeituan \d+|meituangroup\/\d+\./i,
    Tt = /\bandroid|mobile\b|\bhtc\b/i,
    Et = /\btitansx\b/i,
    Ct = /^(([^? \r\n]*)\?)?([^?# \r\n]+)(#\S+)?$/,
    Lt = setTimeout,
    Mt = clearTimeout,
    Nt = 1,
    Vt = 2,
    Pt = 3,
    Rt = 4,
    Bt = 5,
    Qt = 6,
    Ut = 20,
    Jt = 7,
    Xt = 6,
    Ht = /android/i,
    Kt = /iphone/i,
    zt = /ipad/i,
    $t = "android",
    Gt = "iphone",
    Wt = "ipad",
    Yt = "www",
    Zt = "i",
    ne = "statistics://_lx/?data=",
    te = "lxlog",
    ee = 200,
    re = 100,
    ie = 500,
    ue = 600,
    oe = -1,
    ae = "PV",
    ce = "PD",
    se = "MC",
    fe = "SC",
    de = "MV",
    ve = "ME",
    le = "BO",
    he = "BP",
    pe = "order_id",
    ge = 1e3,
    me = 2,
    ye = 0,
    _e = -1,
    we = 0,
    be = 1,
    xe = 262800,
    qe = 1576800,
    ke = 30,
    Se = "_lx_utm",
    Ae = "_lxsdk",
    Oe = "_lxsdk_unoinid",
    je = "_lxsdk_cuid",
    Ie = "_lxsdk_dpid",
    De = "_lxsdk_s",
    Fe = {
        union_id: ot,
        lxcuid: ot,
        app: ot,
        sdk_ver: ot,
        appnm: ot,
        ch: ot,
        lch: ot,
        ct: ot,
        did: ot,
        dm: ot,
        ua: ot,
        msid: ot,
        uuid: ot,
        lat: ot,
        log: ot,
        net: ot,
        os: ot,
        idfa: ot,
        pushid: ot,
        subcid: ot,
        mac: ot,
        imsi: ot,
        uid: ot,
        logintype: ot,
        cityid: ot,
        apn: ot,
        mno: ot,
        pushSetting: ot,
        wifi: ot,
        bht: ot,
        ip: ot,
        vendorid: ot,
        geohash: ot,
        dtk: ot,
        sns: ot,
        android_id: ot,
        version_code: ot,
        brand: ot,
        utm: ot
    },
    Te = "validation",
    Ee = ".sankuai.com",
    Ce = /__lxvalidation=([\w.]+)/i,
    Le = "__lx" + Te,
    Me = 10,
    Ne = !1,
    Ve = void 0,
    Pe = {
        pageValLab: null,
        pageEnv: null
    },
    Re = [];
    Pe.on = function(n, t) {
        Re.push({
            name: n,
            fn: t
        })
    },
    Pe.emit = function(n) {
        for (var t = arguments.length,
        e = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) e[r - 1] = arguments[r];
        ir.each(Re,
        function(t) {
            var r = t.name,
            i = t.fn;
            r === n && i.apply(void 0, e)
        })
    };
    var Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(n) {
        return typeof n
    }: function(n) {
        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol": typeof n
    },
    Qe = 1e3,
    Ue = window,
    Je = location,
    Xe = document,
    He = document.domain,
    Ke = navigator,
    ze = navigator.userAgent.toString(),
    $e = void 0,
    Ge = Array.prototype,
    We = Object.prototype,
    Ye = decodeURIComponent,
    Ze = encodeURIComponent,
    nr = a(),
    tr = We.toString,
    er = We.hasOwnProperty,
    rr = {};
    rr.trim = function(n) {
        return n.replace(/^[\s\uFEFF\xA0\u3000]+|[\s\uFEFF\xA0\u3000]+$/g, "")
    },
    rr.now = a,
    rr.rnd = c,
    rr.hasOwn = function(n, t) {
        return er.call(n, t)
    },
    rr.extend = function tu(n, t, e) {
        var r = void 0,
        i = !0 === n;
        return i || (e = t, t = n),
        t && rr.isObj(t) || (t = {}),
        e && rr.isObj(e) || (e = {}),
        ir.each(e,
        function(n, u) {
            i && rr.isObj(e[u]) ? (r = t[u], t[u] = rr.isObj(r) ? r: {},
            tu(i, t[u], e[u])) : t[u] = e[u]
        }),
        t
    },
    rr.isObj = function(n) {
        return n && "[object Object]" === tr.call(n)
    },
    rr.isStr = function(n) {
        return o(n, "string")
    },
    rr.isFunc = function(n) {
        return o(n, "function")
    },
    rr.attr = function(n, t) {
        return n.getAttribute(t)
    },
    rr.parseQuery = function(n) {
        var t = {};
        if (n) {
            var e = n.replace(Ct,
            function(n, t, e, r) {
                return r || ""
            }).split("&");
            return ir.each(e,
            function(n) {
                var e = n.split("="),
                r = e[0],
                i = e[1] || "";
                r && !er.call(t, r) && (t[r] = Ye(i))
            }),
            t
        }
    },
    rr.stringifyQuery = function(n) {
        var t = [];
        return rr.isObj(n) && ir.each(n,
        function(n, e) {
            rr.isFunc(n) || (($e === n || f(n)) && (n = n || ""), t.push(Ze(e) + "=" + Ze(n)))
        }),
        t.join("&")
    },
    rr.genReqId = function() {
        return "" + a() * Qe + parseInt(c() * Qe)
    },
    rr.run = function(n, t) {
        ir.isArrayLike(n) ? ir.each(n, t) : t(n)
    },
    rr.on = function(n, t, e) {
        n.addEventListener ? n.addEventListener(t, e, !1) : n.attachEvent && n.attachEvent("on" + t, e)
    };
    var ir = {};
    ir.isArray = Array.isArray ||
    function(n) {
        return "[object Array]" === tr.call(n)
    },
    ir.isArrayLike = function(n) {
        if (!n) return ! 1;
        var t = n.length;
        return !! ir.isArray(n) || !!(n && s(t) && t >= 0) && (!rr.isObj(n) || (!(t > 1) || t - 1 in n))
    },
    ir.find = function(n, t, e) {
        var r = void 0;
        return ir.isArrayLike(n) && ir.each(n,
        function(i, u) {
            if (!0 === t.call(e, i, u, n)) return r = i,
            !1
        }),
        r
    },
    ir.filter = function(n, t, e) {
        var r = [];
        return ir.isArrayLike(n) && ir.each(n,
        function(i, u) {
            t.call(e, i, u, n) && r.push(i)
        }),
        r
    },
    ir.toArray = function(n, t, e) {
        var r = [];
        return ir.isArrayLike(n) && ir.each(n,
        function(n) {
            r.push(t ? t.call(e, n) : n)
        },
        e),
        r
    },
    ir.each = function(n, t, e) {
        if (n) {
            var r = void 0,
            i = void 0,
            u = void 0,
            o = void 0,
            a = !1;
            if (ir.isArrayLike(n)) for (i = 0, u = n.length; i < u && (o = t.call(e, n[i], i, n), a !== o); i++);
            else for (r in n) if (rr.hasOwn(n, r) && (o = t.call(e, n[r], r, n), a === o)) break
        }
    },
    ir.slice = function(n, t, e) {
        return Ge.slice.call(ir.toArray(n), t, e)
    },
    ir.reduce = function(n, t) {
        if (ir.isArrayLike(n) && rr.isFunc(t)) {
            var e = n,
            r = e.length >>> 0,
            i = 0,
            u = void 0;
            if (3 === arguments.length) u = arguments[2];
            else {
                for (; i < r && !(i in e);) i++;
                if (i >= r) return;
                u = e[i++]
            }
            for (; i < r;) i in e && (u = t(u, e[i], i, e)),
            i++;
            return u
        }
    };
    var ur = {};
    ur.get = function(n) {
        var t = Xe.cookie.match(new RegExp("(?:^|;)\\s*" + n + "=([^;]+)"));
        return Ye(t ? t[1] : "")
    },
    ur.set = function(n, t, e, r) {
        r = r || Xe.domain;
        var i = void 0,
        u = void 0,
        o = void 0,
        a = n + "=" + Ze(t) + ";path=/;domain=" + r;
        $e === e || isNaN(e) || (i = new Date, u = 60 * parseInt(e, 10) * 1e3, o = i.getTime() + u, i.setTime(o), a += ";expires=" + i.toUTCString());
        try {
            return Xe.cookie = a,
            !0
        } catch(c) {
            return ! 1
        }
    },
    ur.top = function(n, t, e) {
        var r = Xe.domain,
        i = r.split("."),
        u = i.length,
        o = u - 1,
        a = void 0,
        c = !1;
        for (t = "" + t; ! c && o >= 0 && (r = i.slice(o, u).join("."), ur.set(n, t, e, r), a = ur.get(n), $e !== a && (c = a === t), o--, !c););
    };
    var or = function() {
        var n = void 0;
        return {
            update: function(t) {
                n = t
            },
            get: function() {
                return n
            }
        }
    } (),
    ar = ze,
    cr = [{
        n: gt,
        r: /lingxi\/demo\/\d+/i,
        v: ar
    },
    {
        n: dt,
        r: Ot,
        v: ar
    },
    {
        n: vt,
        r: jt,
        v: ar
    },
    {
        n: lt,
        r: It,
        v: ar
    },
    {
        n: ht,
        r: Dt,
        v: ar
    },
    {
        n: pt,
        r: Ft,
        v: ar
    }],
    sr = "",
    fr = !1,
    dr = !1,
    vr = !1,
    lr = Yt,
    hr = !1,
    pr = -1;
    if (Tt.test(ar)) {
        lr = Zt,
        fr = !0,
        ir.each(cr,
        function(n) {
            if (n.r.test(n.v)) return sr = n.n,
            !1
        }),
        Et.test(ar) && (dr = !0);
        var gr = Kt.test(ar),
        mr = zt.test(ar); (gr || mr) && (vr = !0),
        sr && (gr ? lr = Gt: Ht.test(ar) ? lr = $t: mr && (lr = Wt))
    } else {
        var yr = ar.match(/(msie) (\d+)|Trident\/(d+)/i);
        yr && (hr = !0, yr && (pr = parseInt(yr[2], 10)))
    }
    var _r = Ue.screen.width + "*" + Ue.screen.height,
    wr = /android/i.test(ar),
    br = (/TitansX\/\d+|KNB\/\d+/i.test(ar), xt + "_source"),
    xr = xt + "_medium",
    qr = xt + "_term",
    kr = xt + "_campaign",
    Sr = xt + "_content",
    Ar = void 0,
    Or = at,
    jr = Ue.JSON;
    jr || (jr = {
        parse: function(n) {
            return new Function("return (" + n + ")")()
        },
        stringify: function() {
            var n = ir.isArray,
            t = {
                '"': '\\"',
                "\\": "\\\\",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t"
            },
            e = function(n) {
                return t[n] || "\\u" + (n.charCodeAt(0) + 65536).toString(16).substr(1)
            },
            r = /[\\"\u0000-\u001F\u2028\u2029]/g;
            return function i(t) {
                if (null == t) return "null";
                if (o(t, "number")) return isFinite(t) ? t.toString() : "null";
                if (o(t, "boolean")) return t.toString();
                if (o(t, "object")) {
                    if ("function" === u(t.toJSON)) return i(t.toJSON());
                    if (n(t)) {
                        for (var a = "[",
                        c = 0; c < t.length; c++) a += (c ? ", ": "") + i(t[c]);
                        return a + "]"
                    }
                    if (rr.isObj(t)) {
                        var s = [];
                        for (var f in t) t.hasOwnProperty(f) && s.push(i(f) + ": " + i(t[f]));
                        return "{" + s.join(", ") + "}"
                    }
                }
                return '"' + t.toString().replace(r, e) + '"'
            }
        } ()
    });
    var Ir = jr,
    Dr = "__lxsdk_",
    Fr = Ue.localStorage,
    Tr = {
        get: function(n) {
            n = k(n);
            var t = Fr.getItem(n);
            return t = $e !== t ? Ir.parse(t) : t
        },
        set: function(n, t) {
            return Tr.del(n),
            Fr.setItem(k(n), Ir.stringify(t))
        },
        keys: function eu() {
            for (var eu = [], n = void 0, t = 0; t < Fr.length; t++) n = Fr.key(t),
            0 === n.indexOf(Dr) && eu.push(n.replace(Dr, ""));
            return eu
        },
        del: function(n) {
            try {
                return Fr.removeItem(k(n))
            } catch(t) {}
        },
        clear: function() {
            for (var n = this.keys(), t = 0; t < n.length; t++) this.del(n[t])
        }
    };
    if (Fr) {
        if (Fr) {
            var Er = "___lxtest";
            Tr.nt = !0;
            try {
                Tr.set(Er, 1);
                var Cr = Tr.get(Er);
                1 !== Cr ? Tr.clear() : Tr.del(Er)
            } catch(Lr) {
                try {
                    Tr.clear(),
                    Fr.setItem(Er, 1),
                    Fr.removeItem(Er)
                } catch(Lr) {
                    Fr = S(),
                    Tr.nt = !1
                }
            }
        }
    } else Fr = S(),
    Tr.nt = !1;
    var Mr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    Nr = "tag",
    Vr = 18e5,
    Pr = {
        set: function(n, t, e) {
            var r = void 0,
            i = void 0,
            u = [],
            o = Tr.get(Nr) || [];
            if ( - 1 === Mr.indexOf(t)) return ! 1;
            for (var a = 0,
            c = o.length; a < c; a++) r = o[a],
            O(r) || (n === r.c ? (t === r.k && (i = !0), i || u.push(r)) : u.push(r));
            return r = new A(n, t, e, ( + new Date)),
            u.push(r.toJSON()),
            Tr.set(Nr, u),
            !0
        },
        get: function(n, t) {
            var e = void 0,
            r = Tr.get(Nr);
            if (r && r.length) return e = {},
            ir.each(r,
            function(n) {
                var t = {};
                t[n.k] = n.v,
                O(n) || (e[n.c] = rr.extend(!0, e[n.c] || {},
                t))
            }),
            n && t ? e[n] && e[n][t] : n ? e[n] : e
        },
        getAll: function() {
            var n = Tr.get(Nr),
            t = {},
            e = void 0;
            return ir.each(n,
            function(n) {
                var r = void 0; ! O(n) && n.v && (e = !0, r = {},
                r[n.k] = n.v, t[n.c] = rr.extend(!0, t[n.c], r))
            }),
            e && t
        },
        clear: function(n, t) {
            var e = arguments.length;
            if (!e) return Tr.set(Nr, []);
            if (rr.isStr(n)) {
                var r = Tr.get(Nr),
                i = [];
                ir.each(r,
                function(e) { (t !== $e && e.k !== t || n !== e.c) && i.push(e)
                }),
                Tr.set(Nr, i)
            }
        }
    };
    I.prototype.then = function(n, t) {
        return F(this, new I(j), n, t)
    },
    I.all = function(n) {
        return new I(function(t, e) {
            for (var r = 0,
            i = n.length,
            u = [], o = 0, a = void 0, c = function(n) {
                var t = [];
                for (r = 0; r < i; r++) t.push(n[r] ? n[r].value: void 0);
                return t
            },
            s = function(n) {
                return function(e) {
                    if (n.value = e, n.state = Br, o++, o === n.len && !a) {
                        var r = c(u);
                        t(r)
                    }
                }
            },
            f = function(n) {
                return function(t) {
                    n.value = t,
                    n.state = Rr,
                    o++,
                    a || (a = !0, e(t))
                }
            },
            d = function() {
                var t = n[r],
                e = {
                    value: null,
                    index: r,
                    state: null,
                    len: i
                };
                u.push(e),
                !
                function(n) {
                    t.then ? t.then(s(n), f(n)) : I.resolve(t).then(s(n), f(n))
                } (e)
            }; r < i; r++) d()
        })
    },
    I.resolve = function(n) {
        if (n instanceof I) return n;
        if (rr.isFunc(n.then)) {
            var t = n.then.bind(n);
            return new I(function(n, e) {
                t(n, e)
            })
        }
        return new I(function(t) {
            t(n)
        })
    },
    I.reject = function(n) {
        return new I(function(t, e) {
            e(n)
        })
    };
    var Rr = 0,
    Br = 1,
    Qr = 2,
    Ur = "function",
    Jr = "object";
    I.prototype._state = Qr,
    I.prototype._pCount = 0;
    var Xr = !1,
    Hr = 2e3,
    Kr = void 0,
    zr = [],
    $r = !1,
    Gr = void 0,
    Wr = 500,
    Yr = "getUserInfo",
    Zr = void 0,
    ni = function() {
        var n = function() {
            for (var n = 1 * new Date,
            t = 0; n === 1 * new Date && t < 200;) t++;
            return n.toString(16) + t.toString(16)
        },
        t = function() {
            return Math.random().toString(16).replace(".", "")
        },
        e = function() {
            function n(n, t) {
                var e = void 0,
                r = 0;
                for (e = 0; e < t.length; e++) r |= i[e] << 8 * e;
                return n ^ r
            }
            var t = ar,
            e = void 0,
            r = void 0,
            i = [],
            u = 0;
            for (e = 0; e < t.length; e++) r = t.charCodeAt(e),
            i.unshift(255 & r),
            i.length >= 4 && (u = n(u, i), i = []);
            return i.length > 0 && (u = n(u, i)),
            u.toString(16)
        };
        return function() {
            var r = (screen.height * screen.width).toString(16);
            return n() + "-" + t() + "-" + e() + "-" + r + "-" + n()
        }
    } (),
    ti = void 0,
    ei = ye,
    ri = 5e3,
    ii = "getEnv",
    ui = re,
    oi = !1,
    ai = !1,
    ci = !1,
    si = [],
    fi = 0,
    di = void 0,
    vi = rr.now(),
    li = Y.prototype;
    li.send = function(n) {
        var t = this,
        e = W(t),
        r = ne + Ze(Ir.stringify(e)),
        i = rr.now(),
        u = 5e3 < i - vi;
        di && u && t._mn === ii && ui === ee ? n(0, di) : K(te, r,
        function(t, e) {
            n(t, e)
        })
    };
    var hi = {},
    pi = _e,
    gi = [],
    mi = 0,
    yi = 1,
    _i = 2,
    wi = "|",
    bi = 3,
    xi = 150,
    qi = 5e3,
    ki = 3500,
    Si = +new Date + Math.floor(1e5 * Math.random()),
    Ai = !1,
    Oi = [],
    ji = [],
    Ii = 0,
    Di = /([a-fA-F0-9-]+)(\.\d+)/,
    Fi = "_hc.v",
    Ti = 525600,
    Ei = "",
    Ci = /(dper|dianping|51ping)\.com/.test(He),
    Li = function() {
        var n = void 0;
        try {
            var t = document;
            if (t.querySelectorAll) {
                var e = t.querySelectorAll("head script"),
                r = t.querySelectorAll("body script"),
                i = [];
                ir.each(e,
                function(n) {
                    i.push(n)
                }),
                ir.each(r,
                function(n) {
                    i.push(n)
                });
                for (var u = 0; u < i.length; u++) {
                    var o = i[u].innerHTML,
                    a = o.match(/\[['"]\s*_setPageId\s*['"]\s*,\s*(\d+)\s*\]/);
                    if (a) {
                        n = a[1];
                        break
                    }
                }
            }
        } catch(c) {}
        return function() {
            return n
        }
    } (),
    Mi = "category",
    Ni = "setEnv",
    Vi = "setEvs",
    Pi = "setTag",
    Ri = "getTag",
    Bi = -1,
    Qi = [],
    Ui = Xe.referrer,
    Ji = [],
    Xi = void 0,
    Hi = 0,
    Ki = function(n, t, e) {
        if (e) {
            var r = {},
            i = {
                custom: r
            };
            r[t] = e,
            n = rr.extend(!0, n || {},
            i)
        }
        return n
    },
    zi = In.prototype;
    zi.set = function(n, t, e) {
        var r = this,
        i = r.env;
        if (i[n] = t, "utm" === n && rr.isObj(t) && w(t), me !== X() || $n(n)) rr.isFunc(e) && e(i, r);
        else {
            var u = {},
            o = Bn(i[Mi]);
            u[n] = t,
            Z(o, Ni, u,
            function() {
                rr.isFunc(e) && e(i, r)
            })
        }
    },
    zi.get = function(n, t) {
        var e = this;
        rr.isFunc(t) && t(e.env[n], e)
    },
    zi.pageView = function(t, i) {
        i = Tn(i) || {};
        var u = this,
        o = u.opts.cid,
        a = i.cid || o,
        c = i.isauto || Jt,
        s = i.isAutoInit,
        f = i.reportStatus,
        d = o && !(Dn(u) || s) && !Fn(),
        v = f === ye || ye === X(),
        l = void 0;
        if (d && !r()) {
            var p = h(!0);
            l = v ? Un(ce, o, null, p) : Hn(ce, o, null, p),
            e(ft)
        }
        if (o && (Dn(u) || Fn()) || Cn(), u.opts.cid = a, v) {
            var g = Qn(u),
            m = Kn(Pr.getAll()),
            y = Jn(ae, a, null, t, c);
            d && l && y.unshift(l);
            var _ = zn(g, y, m);
            this.send(_, {
                nm: ae
            }),
            s || Hi++
        } else {
            var w = u.env,
            b = [Hn(ae, a, null, t)];
            d && l && b.push(l),
            Z(Bn(w[Mi]), Vi, b,
            function(e, r) {
                e ? (H(ye), u.pageView(t, i), qn(Je.href, "native-report-error", u.env.union_id, n(e))) : s || Hi++
            })
        }
        u._ptpvs = s ? Xt: Jt
    },
    zi.pageDisappear = function(n, t) {
        t = rr.extend({},
        t);
        var r = this,
        i = t.cid || r.opts.cid,
        u = t.shouldStore;
        e(st);
        var o = h();
        if (n = rr.extend(o, n), ye === X() || u) {
            var a = Qn(r),
            c = Un(ce, i, null, n),
            s = Kn(Pr.getAll()),
            f = zn(a, c, s);
            u && Tr.nt ? Tr.set(At, f) : r.send(f)
        } else {
            var d = this.env,
            v = [Hn(ce, i, null, n)],
            l = Bn(d[Mi]);
            Z(l, Vi, v,
            function(e, i) {
                e && (H(ye), r.pageDisappear(n, t))
            })
        }
    },
    zi.systemCheck = function(n, t, e) {
        e = rr.extend({},
        e);
        var r = this,
        i = e.cid || r.opts.cid;
        if (ye === X()) {
            var u = Qn(r),
            o = Jn(fe, i, n, t),
            a = Kn(Pr.getAll()),
            c = zn(u, o, a);
            this.send(c)
        } else {
            var s = r.env,
            f = [Hn(fe, i, n, t)],
            d = Bn(s[Mi]);
            Z(d, Vi, f,
            function(i, u) {
                i && (H(ye), r.systemCheck(n, t, e))
            })
        }
    },
    zi.moduleView = function(n, t, e) {
        e = rr.extend({},
        e);
        var r = this,
        i = r.opts.mvDelay,
        u = e.cid || r.opts.cid;
        if (ye === X()) {
            var o = Qn(r),
            a = Jn(de, u, n, t),
            c = Kn(Pr.getAll()),
            s = void 0;
            i ? (rr.run(a,
            function(n) {
                Ji.push(n)
            }), Lt(function() {
                Ji.length && (s = zn(o, Ji, c), r.send(s), Ji = [])
            },
            i * ge)) : (s = zn(o, a, c), r.send(s))
        } else {
            var f = r.env,
            d = [Hn(de, u, n, t)],
            v = Bn(f[Mi]);
            new Date;
            Z(v, Vi, d,
            function(i, u) {
                i && (H(ye), r.moduleView(n, t, e))
            })
        }
    },
    zi.moduleClick = function(n, t, r) {
        r = rr.extend({},
        r);
        var i = this,
        u = r.cid || i.opts.cid;
        r && r.isLeave && e(st);
        var o = h();
        if (ye === X()) {
            var a = Qn(i),
            c = Jn(se, u, n, t),
            s = Kn(Pr.getAll()),
            f = zn(a, c, s);
            if (r && r.isLeave) {
                var d = Un(ce, u, null, o);
                f.evs.push(d)
            }
            this.send(f)
        } else {
            var v = this.env,
            l = [Hn(se, u, n, t)],
            p = Bn(v[Mi]);
            if (r && r.isLeave) {
                var g = Hn(ce, u, null, o);
                l.push(g)
            }
            Z(p, Vi, l,
            function(e, u) {
                e && (H(ye), i.moduleClick(n, t, r))
            })
        }
    },
    zi.moduleEdit = function(n, t, e) {
        e = rr.extend({},
        e);
        var r = this,
        i = e.cid || r.opts.cid;
        if (ye === X()) {
            var u = Qn(r),
            o = Jn(ve, i, n, t),
            a = Kn(Pr.getAll()),
            c = zn(u, o, a);
            this.send(c)
        } else {
            var s = this.env,
            f = [Hn(ve, i, n, t)],
            d = Bn(s[Mi]);
            Z(d, Vi, f,
            function(i, u) {
                i && (H(ye), r.moduleEdit(n, t, e))
            })
        }
    },
    zi.order = function(n, t, e) {
        e = rr.extend({},
        e);
        var r = this,
        i = e.cid || r.opts.cid;
        if (p(n, t), ye === X()) {
            var u = Qn(this),
            o = Jn(le, i, n, t),
            a = Kn(Pr.getAll()),
            c = zn(u, o, a);
            this.send(c)
        } else {
            var s = this.env,
            f = [Hn(le, i, n, t)],
            d = Bn(s[Mi]);
            Z(d, Vi, f,
            function(i, u) {
                i && (H(ye), r.order(n, t, e))
            })
        }
    },
    zi.pay = function(n, t, e) {
        e = rr.extend({},
        e);
        var r = this,
        i = e.cid || r.opts.cid;
        if (p(n, t), ye === X()) {
            var u = Qn(r),
            o = Jn(he, i, n, t),
            a = Kn(Pr.getAll()),
            c = zn(u, o, a);
            this.send(c, {
                cb: function() {}
            }),
            r.clearTag()
        } else {
            var s = this.env,
            f = [Hn(he, i, n, t)],
            d = Bn(s[Mi]);
            Z(d, Vi, f,
            function(i, u) {
                i && (H(ye), r.pay(n, t, e))
            })
        }
    },
    zi.tag = function(n, t, e, r) {
        var i = void 0,
        u = void 0,
        o = void 0,
        a = this.env;
        if (ir.each(arguments,
        function(n) {
            rr.isFunc(n) && (r = n)
        }), rr.isFunc(n)) ye !== X() ? (o = Bn(a[Mi]), Z(o, Ri, {},
        function(t, e) {
            n(t, e, !0)
        })) : (i = Pr.getAll(), n(0, i, !1));
        else if (Mn(n)) if (ye !== X()) {
            if (o = Bn(a[Mi]), rr.isObj(t)) u = t;
            else {
                if (!Mn(t) || !Mn(e)) return void(r && r(Ut));
                u = {},
                u[t] = e
            }
            Z(o, Pi, u,
            function(n, t) {
                r && r(n, t, !0)
            })
        } else Mn(t) && Mn(e) && Pr.set(n, t, e),
        r && (i = Pr.getAll(), r(0, i, !1));
        else r(Bi)
    },
    zi.clearTag = function(n, t, e) {
        var r = 0;
        ye === X() ? (rr.isFunc(n) && (e = n, n = $e), Pr.clear(n, t), e && e(0)) : r = Bi,
        e && e(r)
    },
    zi.send = function(n, t) {
        var e = [];
        t = rr.extend({
            cb: function() {}
        },
        t),
        rr.run(n,
        function(n) {
            e.push(n)
        });
        var r = Ln();
        r && e.unshift(r),
        kn(i(), e, t)
    },
    zi.getAll = function() {
        return Qi
    };
    var $i = Zn.prototype;
    $i.create = function(n, t) {
        var e = this,
        r = rr.extend({},
        e.env);
        r = rr.extend(r, {
            category: n
        });
        var i = rr.extend({
            isDefault: !1
        },
        e.opts);
        i = rr.extend(i, t || {});
        var u = new In(i, r);
        return e._t.push(u),
        t.isDefault && (e._dt = u),
        u
    },
    $i.config = function(n, t) {
        return $e !== n && (Pe[n] = t),
        Pe[n]
    },
    $i._initPV = function(n, t) {
        var e = this,
        r = e.config("pageValLab");
        n = rr.extend(n, e.config("pageEnv")),
        Yn(e, r, n, {
            isauto: Xt,
            reportStatus: ye,
            cid: t,
            isAutoInit: !0
        })
    },
    $i.pageView = function(n, t, e) {
        Yn(this, n, t, e)
    },
    $i.moduleView = function(n, t, e) {
        var r = this;
        r._dt.moduleView(n, t, e)
    },
    $i.systemCheck = function(n, t, e) {
        var r = this;
        r._dt.systemCheck(n, t, e)
    },
    $i.moduleClick = function(n, t, e) {
        var r = this;
        r._dt.moduleClick(n, t, e)
    },
    $i.moduleEdit = function(n, t, e) {
        var r = this;
        r._dt.moduleEdit(n, t, e)
    },
    $i.order = function(n, t, e, r) {
        var i = this;
        i._dt.order(n, Gn(e, t), r)
    },
    $i.pay = function(n, t, e, r) {
        var i = this;
        i._dt.pay(n, Gn(e, t), r)
    },
    $i.pageDisappear = function(n, t) {
        var e = this;
        e._dt.pageDisappear(n, t)
    },
    $i.tag = function(n, t, e, r) {
        this._dt.tag(n, t, e, r)
    },
    $i.clearTag = function(n, t, e) {
        this._dt.clearTag(n, t, e)
    },
    $i.getAll = function(n) {
        n && n(this._t)
    },
    $i.getTracker = function(n, t) {
        var e = ir.find(this._t,
        function(t) {
            return t.env.category === n
        });
        t && t(e)
    },
    $i.get = function(n, t) {
        this._dt.get(n, t)
    },
    $i.set = function(n, t, e) {
        this._dt.set(n, t, e)
    };
    var Gi = [],
    Wi = _e,
    Yi = void 0,
    Zi = void 0,
    nu = void 0;
    it()
} ();