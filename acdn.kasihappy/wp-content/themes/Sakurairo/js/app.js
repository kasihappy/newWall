/*! For license information please see app.js.LICENSE.txt */
(() => {
    var e, t, n, o, r, a, i, s = {
        4591: (e, t, n) => {
            n.d(t, {m: () => a});
            const o = {
                src: "data-src",
                srcset: "data-srcset",
                selector: ".lazyload",
                root: null,
                rootMargin: "0px",
                threshold: 0
            };

            class r {
                constructor(e, t) {
                    this.settings = {...o, ...t}, this.elms = e || document.querySelectorAll(this.settings.selector), this.init()
                }

                elms;
                obs = null;
                settings;

                init() {
                    if (!IntersectionObserver) return void this.load();
                    const e = this;
                    this.obs = new IntersectionObserver((function (t) {
                        Array.prototype.forEach.call(t, (function (t) {
                            t.isIntersecting && (e.obs.unobserve(t.target), e.doLoad(t.target))
                        }))
                    }), {
                        root: this.settings.root,
                        rootMargin: this.settings.rootMargin,
                        threshold: [this.settings.threshold]
                    }), this.elms.forEach((t => {
                        e.obs.observe(t)
                    }))
                }

                loadAndDestroy() {
                    this.settings && (this.load(), this.destroy())
                }

                load() {
                    if (!this.settings) return;
                    const {settings: e} = this;
                    Array.prototype.forEach.call(this.elms, this.doLoad)
                }

                doLoad = e => {
                    const {settings: t} = this, n = e.getAttribute(t.src), o = e.getAttribute(t.srcset),
                        r = e.tagName.toLowerCase();
                    "video" === r ? n && (e.src = n) : "img" === r ? (n && (e.src = n), o && (e.srcset = o)) : e.style.backgroundImage = "url('" + n + "')"
                };

                destroy() {
                    this.settings && (this.obs.disconnect(), this.settings = null)
                }
            }

            const a = (e, t) => new r(e, t)
        }, 7500: (e, t, n) => {
            n.d(t, {U: () => s, G: () => i});
            const o = _iro.cookie_version_control || "";
            const r = navigator.userAgent, a = Array.from(r.matchAll(/(Firefox|Chrome|Version|OPR|Edg)\/(\d+)/gi));

            function i(e) {
                for (const [t, n, o] of a) if (parseFloat(o) >= e[n]) return !0;
                return !1
            }

            const s = function () {
                const e = ["image/*,*/*;q=0.8"];
                return i({
                    Chrome: 59,
                    OPR: 46,
                    Firefox: 3,
                    Edg: 79,
                    Version: 8
                }) && (e.push("image/apng"), i({
                    Chrome: 32,
                    OPR: 19,
                    Firefox: 65,
                    Edg: 18,
                    Version: 14
                }) && (!function (e, t, n) {
                    const r = n ? "; expires=" + new Date(Date.now() + 24 * n * 60 * 60 * 1e3).toUTCString() : "";
                    document.cookie = e + o + "=" + (t || "") + r + "; path=/"
                }("su_webp", "1", 114514), e.push("image/webp"), i({
                    Chrome: 85,
                    OPR: 71,
                    Firefox: 93
                }) && e.push("image/avif"))), e.reverse().join(",")
            }()
        }, 163: (e, t, n) => {
            n.d(t, {Z: () => s});
            var o = n(3898), r = n(7444);
            const a = ["# 商业转载请联系作者获得授权，非商业转载请注明出处。", "# For commercial use, please contact the author for authorization. For non-commercial use, please indicate the source.", "# 协议(License)：署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0)", "# 作者(Author)：" + _iro.author_name, "# 链接(URL)：" + window.location.href, "# 来源(Source)：" + _iro.site_name];

            function i(e) {
                const t = window.getSelection();
                if (t) {
                    const n = t.toString();
                    n.length > 30 && (!function (e, t) {
                        e.preventDefault();
                        const n = a.join("<br>") + "<br><br>" + t.replace(/\r\n/g, "<br>"),
                            o = a.join("\n") + "\n\n" + t.toString().replace(/\r\n/g, "\n");
                        if (e.clipboardData) e.clipboardData.setData("text/html", n), e.clipboardData.setData("text/plain", o); else if (window.clipboardData) window.clipboardData.setData("text", o)
                    }(e, n), (0, o.f)((0, r.__)("复制成功！"), 1e3))
                }
            }

            function s() {
                _iro.clipboardCopyright && (document.body.removeEventListener("copy", i), document.body.addEventListener("copy", i))
            }
        }, 7510: (e, t, n) => {
            n.d(t, {sk: () => v, Rj: () => _, U7: () => w, k: () => h, Tk: () => p});
            n(4981);

            function o(e) {
                return new Promise(((t, n) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => n(e.error)
                }))
            }

            function r(e, t) {
                const n = indexedDB.open(e);
                n.onupgradeneeded = () => n.result.createObjectStore(t);
                const r = o(n);
                return (e, n) => r.then((o => n(o.transaction(t, e).objectStore(t))))
            }

            const a = r("sakurairo", "cache"), i = e => a("readonly", (t => o(t.get(e)))),
                s = (e, t) => a("readwrite", (n => (n.put(t, e), o(n.transaction)))),
                c = e => a("readwrite", (t => (t.delete(e), o(t.transaction))));
            var l = n(7500), d = n(7444), u = n(3425), m = n(3898);
            let f = 1, g = "";

            async function h() {
                v(await _(!0)), f++
            }

            async function p() {
                f--, v(await _(!0))
            }

            const y = document.querySelector(".centerbg"), v = _iro.site_bg_as_cover ? e => {
                document.body.style.backgroundImage = `url(${e})`, document.dispatchEvent(new CustomEvent("coverBG_change", {detail: e}))
            } : y ? e => {
                y.style.backgroundImage = `url(${e})`, document.dispatchEvent(new CustomEvent("coverBG_change", {detail: e}))
            } : () => {
            };

            function b(e) {
                const t = null == e ? void 0 : e.match(/^url\("(.+)"\)$/);
                if (t) return t[1]
            }

            const w = _iro.site_bg_as_cover ? () => b(document.body.style.backgroundImage) : () => b(y.style.backgroundImage);

            function E() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                const t = new URL(_iro.cover_api);
                return (0, u.t)() && 1 == _iro.random_graphs_mts ? (t.searchParams.set("type", "mobile"), t.toString() + (e ? "&" + f : "")) : t.toString() + (e ? ("" === t.search ? "?" : "&") + f : "")
            }

            const _ = _iro.cache_cover ? function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return i("cover").then((t => t && t instanceof ArrayBuffer ? (L(), g = URL.createObjectURL(new Blob([t])), g) : E(e))).finally((() => {
                    k(e)
                }))
            } : E;

            async function k() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                try {
                    const t = await fetch(E(e), {headers: {Accept: l.U}});
                    if (500 == t.status) {
                        const e = await t.json();
                        (0, m.f)(e.message), console.warn(e.message)
                    } else if (t.ok) {
                        const e = await t.arrayBuffer();
                        try {
                            s("cover", e)
                        } catch (e) {
                            console.warn(e)
                        }
                    }
                } catch (e) {
                    e instanceof TypeError && (console.warn((0, d.__)("你的封面API好像不支持跨域调用,这种情况下缓存是不会生效的哦")), c("cover"))
                }
            }

            function L() {
                URL.revokeObjectURL(g), g = ""
            }
        }, 8572: (e, t, n) => {
            n.d(t, {B3: () => l, Lg: () => d, N2: () => a, q1: () => m});
            const o = window.matchMedia("(prefers-color-scheme:dark)");
            let r = !1;
            const a = () => r;

            function i(e) {
                e !== r && (document.dispatchEvent(new CustomEvent("darkmode", {detail: e})), r = e)
            }

            function s() {
                localStorage.getItem("dark") || (o.matches && _iro.darkmode ? l() : d())
            }

            function c(e) {
                e == u() ? localStorage.removeItem("dark") : 1 == e ? localStorage.setItem("dark", "1") : localStorage.setItem("dark", "0")
            }

            function l(e) {
                document.documentElement.style.backgroundColor = "#333", document.getElementsByClassName("site-content")[0].style.backgroundColor = "#333", document.body.classList.add("dark"), e && c(!0), i(!0)
            }

            function d(e) {
                document.documentElement.style.backgroundColor = "", document.getElementsByClassName("site-content")[0].style.backgroundColor = "rgba(255, 255, 255, .8)", document.body.classList.remove("dark"), document.body.classList.remove("dynamic"), i(!1), e && c(!1)
            }

            function u() {
                switch (_iro.dm_strategy) {
                    case"client":
                        return o.matches;
                    case"eien":
                        return !0;
                    default:
                        return function () {
                            const e = new Date;
                            return e.getHours() > 21 || e.getHours() < 7
                        }()
                }
            }

            function m() {
                const e = localStorage.getItem("dark");
                e ? "1" == e ? l() : d() : u() && _iro.darkmode ? l() : d()
            }

            "client" === _iro.dm_strategy && (o.removeEventListener ? o.removeEventListener("change", s) : o.removeListener(s), o.addEventListener ? o.addEventListener("change", s) : o.addListener(s))
        }, 8067: (e, t, n) => {
            n.d(t, {T: () => u, y: () => l});
            var o = n(3898), r = n(7444), a = n(3425);
            let i, s;

            function c(e) {
                return () => {
                    const {name: t} = e.dataset;
                    t != localStorage.getItem("font_family") && ("serif" == t ? ((0, a.t)() && (0, o.f)((0, r.__)("将从网络加载字体，流量请注意")), document.body.classList.add("serif"), localStorage.setItem("font_family", "serif"), d("serif")) : (document.body.classList.remove("serif"), localStorage.setItem("font_family", "sans-serif"), d("sans-serif")))
                }
            }

            function l() {
                const e = localStorage.getItem("font_family");
                e && "serif" != e || document.body.classList.add("serif")
            }

            function d(e) {
                "sans-serif" === e || "sans-serif" == localStorage.getItem("font_family") ? (i.classList.remove("selected"), s.classList.add("selected")) : (s.classList.remove("selected"), i.classList.add("selected"))
            }

            function u() {
                const e = (i = document.getElementsByClassName("control-btn-serif")[0], s = document.getElementsByClassName("control-btn-sans-serif")[0], s && i);
                e || localStorage.removeItem("font_family"), l(), e && (d(), i.addEventListener("click", c(i)), s.addEventListener("click", c(s)))
            }
        }, 8810: (e, t, n) => {
            async function o() {
                const e = document.getElementById("footer_yiyan");
                if (e) {
                    const t = _iro.yiyan_api || ["https://api.maho.cc/yiyan/"];
                    0 == t.length && console.warn("一言API: 路径为空");
                    for (const n of t) try {
                        const t = await r(n);
                        e.innerText = t;
                        break
                    } catch (e) {
                        console.warn(`一言API: 尝试联系"${n}"时出错。 `, e);
                        continue
                    }
                }
            }

            n.d(t, {Z: () => o});
            const r = async e => {
                const t = await fetch(e, {headers: {Accept: "application/json"}});
                if (t.ok) {
                    const e = await t.json(), n = ("null" == e.from_who ? null : e.from_who) || "",
                        o = e.from != e.from_who ? `「${e.from}」` : "";
                    return e.hitokoto + "——" + n + o
                }
                throw t.status
            }
        }, 3425: (e, t, n) => {
            n.d(t, {T: () => r, t: () => i});
            let o = !1;

            function r() {
                const e = window.matchMedia("(max-width:860px)");
                o = e.matches, e.addEventListener ? e.addEventListener("change", a) : e.addListener(a)
            }

            function a(e) {
                o = e.matches
            }

            const i = () => o
        }, 6027: (e, t, n) => {
            n.d(t, {Z: () => i, d: () => a});
            var o = n(9220);
            let r;

            function a() {
                r && (r.destroy(), r = null)
            }

            async function i() {
                const e = document.getElementById("typed-js-initial");
                if (e) try {
                    const t = JSON.parse(e.innerHTML), a = document.querySelector(".element");
                    if (a.innerText = "", _iro.ext_shared_lib) window.Typed || await (0, o.V)("lib/typed.min.js", "typed.js"), r = new window.Typed(a, t); else {
                        const {default: e} = await n.e(8986).then(n.t.bind(n, 8986, 23));
                        r = new e(a, t)
                    }
                } catch (e) {
                    console.error("请检查typed.js设置", e)
                }
            }
        }, 7320: (e, t, n) => {
            n.d(t, {$Q: () => p, Ce: () => g, MB: () => h, ze: () => y});
            var o, r = n(7810), a = n(7444), i = n(9220);
            const s = document.getElementById("bgvideo"),
                c = (null == (o = _iro.movies.name) ? void 0 : o.split(",")) || [];
            let l = new Array(c.length).fill(0).map(((e, t) => t)), d = [];

            function u() {
                const e = document.getElementsByClassName("video-stu")[0], t = (() => {
                    0 == l.length && (l = new Array(c.length).fill(0).map(((e, t) => t)));
                    const e = Math.floor(Math.random() * l.length);
                    return c[l.splice(e, 1)[0]]
                })();
                e.innerHTML = (0, a.__)("正在载入视频 ..."), e.style.bottom = "0px", s.setAttribute("src", new URL(t, _iro.movies.url || location.origin).toString()), s.setAttribute("video-name", (0, r.cG)(t))
            }

            function m() {
                const e = document.getElementById("video-btn");
                e && (e.classList.add("video-pause"), e.classList.remove("video-play"), e.style.display = "");
                try {
                    if (document.querySelector(".video-stu").style.bottom = "-100px", document.querySelector(".focusinfo").style.top = "-999px", _iro.float_player_on) return void Promise.all([n.e(8509), n.e(2081)]).then(n.bind(n, 8509)).then((e => {
                        let {pauseAllPlayer: t} = e;
                        d = t(), s.play()
                    }))
                } catch (e) {
                    console.warn(e)
                }
                s.play()
            }

            function f() {
                const e = document.getElementById("video-btn");
                e && (e.classList.add("video-play"), e.classList.remove("video-pause"));
                try {
                    document.querySelector(".focusinfo").style.top = "49.3%"
                } catch {
                }
                s.pause();
                for (const e of d) e.play()
            }

            function g() {
                s && null != s.oncanplay && document.querySelector(".haslive") && document.querySelector(".videolive") && m()
            }

            function h() {
                if (s && null != s.oncanplay && document.querySelector(".haslive")) {
                    f();
                    const e = document.getElementsByClassName("video-stu")[0];
                    e.style.bottom = "0px", e.innerHTML = (0, a.__)("已暂停...")
                }
            }

            function p() {
                const e = document.getElementById("video-btn");
                e && e.addEventListener("click", (function () {
                    this.classList.contains("loadvideo") ? (this.classList.add("video-pause"), this.classList.remove("loadvideo"), u(), s.oncanplay = () => {
                        m(), document.getElementById("video-add").style.display = "block", e.classList.add("videolive", "haslive")
                    }) : this.classList.contains("video-pause") ? (f(), e.classList.remove("videolive"), document.getElementsByClassName("video-stu")[0].style.bottom = "0px", document.getElementsByClassName("video-stu")[0].innerHTML = (0, a.__)("已暂停...")) : (m(), e.classList.add("videolive")), s.onended = function () {
                        s.setAttribute("src", ""), document.getElementById("video-add").style.display = "none", document.querySelector(".focusinfo").style.top = "49.3%", e && (e.classList.add("loadvideo"), e.classList.remove("video-pause", "videolive", "haslive"), _iro.movies.loop && e.click())
                    }
                }));
                const t = document.getElementById("video-add");
                t && t.addEventListener("click", u)
            }

            async function y() {
                !async function () {
                    const e = document.querySelectorAll("video.hls");
                    if (0 == e.length) return;
                    if (e[0].canPlayType("application/vnd.apple.mpegurl")) for (const t of e) t.src = t.dataset.src || t.src, t.autoplay = !0; else {
                        if (!window.Hls) try {
                            if (_iro.ext_shared_lib) await (0, i.V)("dist/hls.light.min.js", "hls.js"); else {
                                const {default: e} = await n.e(4789).then(n.t.bind(n, 4789, 23));
                                window.Hls = e
                            }
                        } catch (e) {
                            console.warn("Hls load failed: ", e)
                        }
                        Hls.isSupported() || console.error("Hls: Media Source Extensions is unsupported.");
                        for (const t of e) {
                            const e = new Hls;
                            e.loadSource(t.dataset.src || t.src), e.attachMedia(t), e.on(Hls.Events.MANIFEST_PARSED, (() => {
                                t.play()
                            }))
                        }
                    }
                }(), async function () {
                    document.querySelectorAll("video.lazyload").forEach((e => e.addEventListener("canplay", v)))
                }()
            }

            function v() {
                this.poster = ""
            }
        }, 5307: (e, t, n) => {
            n.d(t, {k: () => r});
            var o = n(7444);

            function r() {
                if (!_iro.audio) return;
                const e = window.AudioContext || window.webkitAudioContext;
                if (e) {
                    let t, n = 0;
                    const r = 1, i = function () {
                            var e;
                            const t = null == (e = o.o.opt.web_audio) ? void 0 : e.sheet;
                            if ("string" == typeof t) return t.split(" ");
                            if (t instanceof Array) return t
                        }() || a,
                        s = document.querySelectorAll(".site-title, #moblieGoTop, .site-branding, .searchbox, .changeSkin-gear, .menu-list li"),
                        c = "♪ ♩ ♫ ♬ ♭ € § ¶ ♯".split(" "), l = new e, d = e => {
                            var a;
                            if (t) return;
                            let s = i[n];
                            s || (n = 0, s = i[n]), n += r;
                            const d = l.createOscillator(), u = l.createGain(), m = l.createGain();
                            d.connect(u), u.connect(m), m.connect(l.destination), m.gain.setValueAtTime((null == (a = o.o.opt.web_audio) ? void 0 : a.main_gain) || 1, l.currentTime), d.type = "sine", d.frequency.value = s, u.gain.setValueAtTime(0, l.currentTime), u.gain.linearRampToValueAtTime(1, l.currentTime + .01), d.start(l.currentTime), u.gain.exponentialRampToValueAtTime(.001, l.currentTime + 1), d.stop(l.currentTime + 1);
                            const f = Math.round(7 * Math.random()), g = e.pageX, h = e.pageY - 5;
                            t = document.createElement("b"), t.textContent = c[f], t.style.zIndex = "99999", t.style.top = h - 100 + "px", t.style.left = g + "px", t.style.position = "absolute", t.style.color = "#FF6EB4", document.body.appendChild(t), t.animate([{top: h + "px"}, {opacity: 0}], {duration: 500}), setTimeout((() => {
                                t.remove(), t = null
                            }), 500)
                        };
                    s.forEach((e => {
                        e.addEventListener("mouseenter", d)
                    }))
                }
            }

            const a = "880 987 1046 987 1046 1318 987 659 659 880 784 880 1046 784 659 659 698 659 698 1046 659 1046 1046 1046 987 698 698 987 987 880 987 1046 987 1046 1318 987 659 659 880 784 880 1046 784 659 698 1046 987 1046 1174 1174 1174 1046 1046 880 987 784 880 1046 1174 1318 1174 1318 1567 1046 987 1046 1318 1318 1174 784 784 880 1046 987 1174 1046 784 784 1396 1318 1174 659 1318 1046 1318 1760 1567 1567 1318 1174 1046 1046 1174 1046 1174 1567 1318 1318 1760 1567 1318 1174 1046 1046 1174 1046 1174 987 880 880 987 880".split(" ")
        }, 3898: (e, t, n) => {
            function o() {
                const e = document.getElementsByClassName("butterBar");
                if (e.length > 0) for (let t = 0; t < e.length; t++) e[t].remove()
            }

            function r(e, t) {
                o();
                const n = document.createElement("div"), r = document.createElement("p");
                return n.classList.add("butterBar", "butterBar--center"), r.classList.add("butterBar-message"), r.innerHTML = e, n.appendChild(r), document.body.appendChild(n), !0 !== t && setTimeout((() => {
                    o()
                }), "number" == typeof t ? t : 6e3), n
            }

            n.d(t, {f: () => r})
        }, 9220: (e, t, n) => {
            n.d(t, {V: () => d, i: () => c});
            var o = n(7810);
            const r = "sakurairo_prefer_cdn",
                a = [["https://jsd.nmxc.ltd/npm/", "@", "/", ""], ["https://acdn.moeyy.cn/jsdelivr/npm/", "@", "/", ""], ["https://acdn.moeyy.cn/unpkg/", "@", "/", ""]];
            const i = function () {
                const e = localStorage.getItem(r);
                if (e) {
                    const t = parseInt(e);
                    return isNaN(t) || t >= a.length ? (localStorage.removeItem(r), 0) : t
                }
                return 0
            }(), s = {raw: a[i]}, c = (e, t, n) => String.raw(s, t, n || {
                "@fancyapps/fancybox": "3.5.7",
                "@kotorik/palette": "1.1.2",
                "@mui/utils": "5.10.6",
                "@sliphua/pjax": "2.4.0",
                "baguettebox.js": "1.11.1",
                buffer: "6.0.3",
                "change-case": "4.1.2",
                clipboard: "2.0.11",
                "color-space": "2.0.0",
                "fg-loadcss": "3.1.0",
                "highlight.js": "11.6.0",
                "highlightjs-line-numbers.js": "2.8.0",
                "hls.js": "1.2.3",
                "idb-keyval": "6.2.0",
                jquery: "3.6.1",
                lightgallery: "2.6.1",
                "lottie-web": "5.9.6",
                mathjax: "3.2.2",
                md5: "2.3.0",
                nprogress: "0.2.0",
                "particles.js": "2.0.0",
                prismjs: "1.29.0",
                "promise-worker": "2.0.1",
                "smoothscroll-for-websites": "1.4.10",
                "textarea-caret-position": "0.1.1",
                tocbot: "4.18.2",
                tslib: "2.4.0",
                "typed.js": "2.0.12",
                vue: "3.2.39"
            }[t] || "latest", e);

            function l(e) {
                const t = a[i][0];
                if (e.match(t)) return !0
            }

            (0, o.Cd)((function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e4, t = 0, n = 0;
                const o = new PerformanceObserver(((e, o) => {
                    for (const o of e.getEntries()) if (l(o.name)) {
                        n++;
                        const {transferSize: e} = o;
                        0 == e && t++
                    }
                }));
                o.observe({entryTypes: ["resource"]}), setTimeout((() => {
                    if (o.disconnect(), t / n > .7) {
                        const e = i + 1;
                        localStorage.setItem(r, (e >= a.length ? 0 : e).toString())
                    }
                }), e)
            }));
            const d = (e, t, n) => {
                const o = document.createElement("script");
                return o.src = c(e, t, n), o.async = !0, new Promise((e => {
                    o.onload = e, o.onerror = () => {
                        console.error(t, "加载失败")
                    }, document.body.append(o)
                })).finally((() => {
                    o.onload = o.onerror = null
                }))
            }
        }, 7444: (e, t, n) => {
            n.d(t, {_$: () => r, __: () => o, o: () => a, t: () => i});
            const o = e => window._sakurairoi18n && _sakurairoi18n[e] || e, r = function (e) {
                    let t = o(e);
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                    for (const e in r) t = t.replace("{" + e + "}", r[e]);
                    return t
                }, a = {opt: {}, build: {hash: "d4534a8", date: "2022/9/29"}},
                i = (e, t) => Object.defineProperty(a, e, {value: t, writable: !1, enumerable: !0});
            if ("_sakurairo" in window) {
                const e = window._sakurairo;
                "opt" in e && (a.opt = e.opt)
            }
            window._sakurairo = a
        }, 7810: (e, t, n) => {
            n.d(t, {Cd: () => i, NB: () => r, bf: () => l, cG: () => s, wy: () => c});
            let o = [];
            const r = e => {
                let t = !1;
                return function () {
                    if (!t) {
                        t = !0;
                        try {
                            const n = e(...arguments);
                            return n instanceof Promise ? n.finally((() => t = !1)) : t = !1, n
                        } catch (e) {
                            console.warn(e), t = !1
                        }
                    }
                }
            }, a = () => {
                document.removeEventListener("DOMContentLoaded", a);
                for (const e of o) e();
                o = []
            }, i = function (e) {
                if ("loading" !== document.readyState) return e();
                0 == o.length && document.addEventListener("DOMContentLoaded", a, !1), o.push(e)
            }, s = e => e.replace(/\.\w+$/, "");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    o = arguments.length > 3 ? arguments[3] : void 0;
                const r = e;
                r.status = r.status || getComputedStyle(r, null).display;
                const a = "none" != r.status;
                1 == a && "show" == n || 0 == a && "hide" == n || (r.status = a ? "none" : "block", r.style.transition = "height " + t / 1e3 + "s", r.style.overflow = "hidden", clearTimeout(r.tagTimer), r.tagTimer = r.tagTimer || null, r.style.display = "block", r.tagHeight = r.tagHeight || r.clientHeight + "px", r.style.display = "", r.style.height = a ? r.tagHeight : "0px", setTimeout((() => {
                    r.style.height = a ? "0px" : r.tagHeight
                }), 0), r.tagTimer = setTimeout((() => {
                    r.style.display = a ? "none" : "block", r.style.transition = "", r.style.overflow = "", r.style.height = "", r.status = r.tagHeight = null
                }), t), o && o())
            }

            function l(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const o = new URL(e), {searchParams: r} = o;
                for (const [e, n] of Object.entries(t)) r.set(e, n);
                return n && r.set("_wpnonce", _iro.nonce), o.toString()
            }
        }, 7579: (e, t, n) => {
            n.d(t, {
                CE: () => T,
                MN: () => k,
                LP: () => L,
                PE: () => x,
                bp: () => I,
                RD: () => S,
                D9: () => E,
                H5: () => B,
                po: () => M,
                nO: () => b,
                Gl: () => A,
                DH: () => C,
                j6: () => _
            });
            var o = n(4591), r = n(7810), a = n(7510), i = n(3425);
            const s = document.getElementById("main-container");

            function c() {
                document.body.classList.toggle("navOpen"), s.classList.toggle("open"), document.getElementById("mo-nav").classList.toggle("open"), document.querySelector(".openNav").classList.toggle("open"), document.querySelector(".site-header").classList.toggle("open")
            }

            function l() {
                c(), document.documentElement.style.overflow = "unset", s.removeEventListener("click", l)
            }

            var d = n(7320), u = n(7444);
            let m;

            function f(e, t, n, o, r, a, i) {
                if (e) {
                    const t = e.trim().split(" "), n = o.indexOf(t[t.length - 1]), r = i.indexOf(t[t.length - 1]);
                    o = (o = n < 60 ? o.slice(0, 80) : o.slice(n - 30, n + 30)).replace(t[t.length - 1], '<mark class="search-keyword"> ' + t[t.length - 1].toUpperCase() + " </mark>"), i = (i = r < 60 ? i.slice(0, 80) : i.slice(r - 30, r + 30)).replace(t[t.length - 1], '<mark class="search-keyword"> ' + t[t.length - 1].toUpperCase() + " </mark>")
                }
                return `<div class="ins-selectable ins-search-item" href="${t}"><header><i class="fa fa-${n}" aria-hidden="true"></i>${o}<i class="iconfont icon-${r}">${a}</i></header><p class="ins-search-preview">${i}</p></div>`
            }

            function g(e, t) {
                let n, o = "", r = "", a = "", i = "", s = "", c = "",
                    l = '<section class="ins-section"><header class="ins-section-header">', d = "</section>",
                    m = "</header>", g = function (e, t) {
                        for (let e = 0; e < t.length; e++) -1 != [".", "?", "*"].indexOf(t[e]) && (t = t.slice(0, e) + "\\" + t.slice(e), e++);
                        return t = t.replace(t, "^(?=.*?" + t + ").+$").replace(/\s/g, ")(?=.*?"), e.filter((e => Object.values(e).some((e => new RegExp(t + "").test(e)))))
                    }(e, t.trim());
                for (const e of g) switch (e.type) {
                    case"post":
                        r += f(t, e.link, "file", e.title, "mark", e.comments, e.text);
                        break;
                    case"tag":
                        s += f("", e.link, "tag", e.title, "none", "", "");
                        break;
                    case"category":
                        i += f("", e.link, "folder", e.title, "none", "", "");
                        break;
                    case"page":
                        a += f(t, e.link, "file", e.title, "mark", e.comments, e.text);
                        break;
                    case"comment":
                        c += f(t, e.link, "comment", e.title, "none", "", e.text)
                }
                r && (o = o + l + (0, u.__)("文章") + m + r + d), a && (o = o + l + (0, u.__)("页面") + m + a + d), i && (o = o + l + (0, u.__)("分类") + m + i + d), s && (o = o + l + (0, u.__)("标签") + m + s + d), c && (o = o + l + (0, u.__)("评论") + m + c + d), n = document.getElementById("PostlistBox"), n.innerHTML = o
            }

            function h() {
                const e = document.querySelector(".search_close"), t = document.getElementById("Ty");
                for (const n of document.getElementsByClassName("ins-selectable")) n.addEventListener("click", (() => {
                    t.href = n.getAttribute("href"), t.click(), e.click()
                }))
            }

            function p() {
                if (document.getElementsByClassName("js-toggle-search")[0].classList.toggle("is-active"), document.getElementsByClassName("js-search")[0].classList.toggle("is-visible"), document.documentElement.style.overflowY = "hidden", _iro.live_search) {
                    m = [], function (e) {
                        const t = document.getElementById("search-input");
                        null != sessionStorage.getItem("search") ? (m = JSON.parse(sessionStorage.getItem("search")), g(m, t.value), h()) : fetch(e).then((async e => {
                            if (e.ok) {
                                const n = await e.text();
                                "" != n && (sessionStorage.setItem("search", n), m = JSON.parse(n), g(m, t.value), h())
                            } else console.warn("HTTP " + e.status)
                        })).catch((e => console.warn(e)))
                    }((0, r.bf)(_iro.api + "sakura/v1/cache_search/json"));
                    let e = document.getElementById("search-input"), t = null;
                    e.oninput = function () {
                        null != t && clearTimeout(t), t = setTimeout((function () {
                            g(m, e.value), h()
                        }), 250)
                    }
                }
            }

            var y = n(8572), v = !0;

            function b() {
                if (!1 === v) {
                    const e = document.querySelector(".pattern-center"), t = document.querySelector(".headertop-bar");
                    e && (e.classList.remove("pattern-center"), e.classList.add("pattern-center-sakura")), t && (t.classList.remove("headertop-bar"), t.classList.add("headertop-bar-sakura"))
                } else {
                    const e = document.querySelector(".pattern-center-sakura"),
                        t = document.querySelector(".headertop-bar-sakura");
                    e && (e.classList.remove("pattern-center-sakura"), e.classList.add("pattern-center")), t && (t.classList.remove("headertop-bar-sakura"), t.classList.add("headertop-bar"))
                }
            }

            async function w(e) {
                let t;
                switch (v = "white-bg" == e || "dark-bg" == e, b(), e) {
                    case"white-bg":
                        if (_iro.site_bg_as_cover) return void (0, a.sk)(await (0, a.Rj)());
                        t = _iro.skin_bg0;
                        break;
                    case"diy1-bg":
                        t = _iro.skin_bg1;
                        break;
                    case"diy2-bg":
                        t = _iro.skin_bg2;
                        break;
                    case"diy3-bg":
                        t = _iro.skin_bg3;
                        break;
                    case"diy4-bg":
                        t = _iro.skin_bg4
                }
                document.body.style.backgroundImage = t ? `url(${t})` : ""
            }

            function E() {
                const e = document.getElementById("bg-next"), t = document.getElementById("bg-pre");
                e && (e.onclick = a.k), t && (t.onclick = a.Tk)
            }

            function _(e) {
                let t = document.getElementById("archives");
                if (null == t) return;
                let n = t.getElementsByClassName("al_mon");
                if (1 == e) t.addEventListener("click", (e => {
                    e.target.classList.contains("al_mon") && (e.preventDefault(), (0, r.wy)(e.target.nextElementSibling, 500))
                })), (0, o.m)(); else {
                    let e = document.getElementById("al_expand_collapse");
                    e.style.cursor = "s-resize";
                    for (let e = 0; e < n.length; e++) {
                        let t = n[e], o = t.nextElementSibling.getElementsByTagName("li").length;
                        t.style.cursor = "s-resize", t.querySelector("#post-num").textContent = o
                    }
                    const o = t.getElementsByClassName("al_post_list"), a = o[0], s = () => {
                        (0, r.wy)(a, 500, "show")
                    };
                    for (const e of o) (0, r.wy)(e, 500, "hide", s);
                    if (t.addEventListener("click", (e => {
                        e.target.classList.contains("al_mon") && ((0, r.wy)(e.target.nextElementSibling, 500), e.preventDefault())
                    })), !(0, i.t)()) {
                        for (let e = 0; e < o.length; e++) {
                            let t = o[e];
                            t.parentNode.addEventListener("mouseover", (() => ((0, r.wy)(t, 500, "show"), !1)))
                        }
                        0;
                        let t = 0;
                        e.addEventListener("click", (() => {
                            if (0 == t) {
                                for (let e = 0; e < o.length; e++) {
                                    let t = o[e];
                                    (0, r.wy)(t, 500, "show")
                                }
                                t++
                            } else if (1 == t) {
                                for (let e = 0; e < o.length; e++) {
                                    let t = o[e];
                                    (0, r.wy)(t, 500, "hide")
                                }
                                t--
                            }
                        }))
                    }
                }
            }

            function k() {
                const e = document.querySelector(".iconflat");
                e && e.addEventListener("click", (e => {
                    e.stopPropagation(), document.body.classList.contains("navOpen") ? l() : (c(), document.documentElement.style.overflow = "hidden", s.addEventListener("click", l))
                }))
            }

            function L() {
                document.body.classList.contains("navOpen") && l()
            }

            function S() {
                if ("auto" == _iro.windowheight) {
                    if (document.querySelector("h1.main-title")) {
                        const e = document.getElementById("centerbg"), t = document.getElementById("bgvideo");
                        e && (e.style.height = "100vh"), t && (t.style.minHeight = "100vh")
                    }
                } else {
                    const e = document.querySelector(".headertop");
                    e && e.classList.add("headertop-bar")
                }
            }

            function x() {
                const e = document.querySelector(".headertop");
                if (e) {
                    let t = document.querySelector(".blank");
                    if (document.querySelector(".main-title")) {
                        try {
                            t.style.paddingTop = "0px"
                        } catch (e) {
                        }
                        e.style.height = "auto", e.style.display = "", _iro.movies.live && (0, d.Ce)()
                    } else {
                        try {
                            t.style.paddingTop = "75px"
                        } catch (e) {
                        }
                        e.style.height = "0px", e.style.display = "none", (0, d.MB)()
                    }
                }
            }

            function T() {
                let e = document.querySelector(".comments-fold"), t = document.querySelector(".comments-main");
                null != e && (e.style.display = "block", t.style.display = "none", e.addEventListener("click", (() => {
                    (0, r.wy)(t, 500, "show"), e.style.display = "none"
                })));
                let n = document.getElementsByClassName("archives");
                if (n.length > 0) {
                    for (let e = 1; e < n.length; e++) n[e].style.display = "none";
                    n[0].style.display = "";
                    let e = document.getElementById("archives-temp").getElementsByTagName("h3");
                    const t = e => {
                        e.preventDefault(), e.stopPropagation(), (0, r.wy)(e.target.nextElementSibling, 300)
                    };
                    for (let n = 0; n < e.length; n++) e[n].addEventListener("click", t)
                }
                for (const e of document.getElementsByClassName("js-toggle-search")) e.addEventListener("click", p);
                const o = document.querySelector(".search_close");
                o && o.addEventListener("click", (() => {
                    let e = document.getElementsByClassName("js-search")[0];
                    e.classList.contains("is-visible") && (document.getElementsByClassName("js-toggle-search")[0].classList.toggle("is-active"), e.classList.toggle("is-visible"), document.documentElement.style.overflowY = "unset")
                }));
                try {
                    const e = document.getElementById("loading");
                    e.addEventListener("click", (() => {
                        e.classList.add("hide"), e.classList.remove("show")
                    }))
                } catch (e) {
                }
            }

            function C() {
                const e = document.getElementById("show-nav");
                e && e.addEventListener("click", (() => {
                    const t = document.querySelector(".site-top .lower nav");
                    e.classList.contains("showNav") ? (e.classList.remove("showNav"), e.classList.add("hideNav"), t && t.classList.add("navbar")) : (e.classList.remove("hideNav"), e.classList.add("showNav"), t && t.classList.remove("navbar"))
                }))
            }

            function I() {
                const e = document.querySelectorAll(".menu-list li"), t = e => {
                    const t = e.target.id || e.target.parentElement.id;
                    "dark-bg" == t ? (0, y.B3)(!0) : ((0, y.Lg)(!0), w(t), localStorage.setItem("bgImgSetting", t)), A()
                };
                for (const n of e) n.addEventListener("click", t)
            }

            function B() {
                return w(localStorage.getItem("bgImgSetting") || "white-bg")
            }

            async function M() {
                _iro.site_bg_as_cover || _iro.land_at_home && ((0, a.U7)() || (0, a.sk)(await (0, a.Rj)()))
            }

            function A() {
                document.querySelector(".skin-menu").classList.remove("show"), setTimeout((() => {
                    const e = document.querySelector(".changeSkin-gear");
                    null != e && (e.style.visibility = "visible")
                }), 300)
            }
        }, 1276: () => {
            window.imgError = function (e, t) {
                switch (t) {
                    case 1:
                        e.src = "https://view.moezx.cc/images/2017/12/30/Transparent_Akkarin.th.jpg";
                        break;
                    case 2:
                        e.src = "https://sdn.geekzu.org/avatar/?s=80&d=mm&r=g";
                        break;
                    default:
                        e.src = "https://view.moezx.cc/images/2018/05/13/image-404.png"
                }
            }, window.cmt_showPopup = function (e) {
                let t = e.querySelector("#thePopup");
                t.classList.add("show"), e.querySelector("input").onblur = () => {
                    t.classList.remove("show")
                }
            }, window.coverVideo = function () {
                let e = document.getElementById("coverVideo"), t = document.getElementById("cv-pc");
                if (e.paused) {
                    e.play();
                    try {
                        t.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>'
                    } catch {
                    }
                } else {
                    e.pause();
                    try {
                        t.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
                    } catch {
                    }
                }
            }, window.coverVideoMute = function () {
                const e = document.getElementById("coverVideo"), t = document.getElementById("cv-vc");
                e.muted ? (e.muted = !1, t.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>') : (e.muted = !0, t.innerHTML = '<i class="fa fa-volume-muted" aria-hidden="true"></i>')
            }, window.killCoverVideo = function () {
                var e = document.getElementById("coverVideo"), t = document.getElementById("cv-pc");
                if (e.paused) ; else {
                    e.pause();
                    try {
                        t.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>'
                    } catch (e) {
                    }
                }
            }, window.mail_me = function () {
                window.open("mailto:" + _iro.email_name + "@" + _iro.email_domain)
            }, window.headertop_down = function () {
                let e = document.getElementById("content").getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({top: e, behavior: "smooth"})
            }
        }, 2894: (e, t, n) => {
            var o = n(7510), r = n(163), a = n(9966), i = n(4591), s = (n(1276), n(7810));

            function c(e) {
                if (document.documentElement.style.overflowY = "unset", 0 != _iro.preload_blur) try {
                    return void (e.animate([{
                        filter: "blur(0px)",
                        backdropFilter: "blur(10px)",
                        opacity: 1
                    }, {backdropFilter: "blur(0px)grayscale(0)", opacity: .1}, {
                        opacity: 0,
                        filter: "blur(100px)"
                    }], {duration: _iro.preload_blur, fill: "forwards", easing: "ease"}).onfinish = () => {
                        e.remove()
                    })
                } catch (e) {
                    console.warn(e)
                }
                e.classList.add("hide"), e.classList.remove("show"), setTimeout((() => e.remove()), 233)
            }

            var l = n(7500), d = n(8810), u = n(5307), m = n(5811);
            Math.max(499, 491, 487, 503);
            Math.max(499, 491, 487, 503);
            n(2513), n(6279), n(4119);

            function f(e, t) {
                var n = document.createElement("canvas"), o = n.getContext("2d");
                return n.height = t, n.width = e, o
            }

            function g(e, t, n) {
                var o = t.naturalWidth, r = t.naturalHeight, a = o * r / n;
                if (a > 1) {
                    var i = o / Math.sqrt(a), s = r / Math.sqrt(a), c = e(i, s);
                    return null == c || c.drawImage(t, 0, 0, i, s), null == c ? void 0 : c.getImageData(0, 0, i, s)
                }
                var l = e(o, r);
                return null == l || l.drawImage(t, 0, 0), null == l ? void 0 : l.getImageData(0, 0, o, r)
            }

            var h = n(3492), p = n.n(h), y = n(8572);
            const v = {
                name: "rgb",
                min: [0, 0, 0],
                max: [255, 255, 255],
                channel: ["red", "green", "blue"],
                alias: ["RGB"]
            };
            let b, w;

            async function E(e) {
                try {
                    const t = document.createElement("img");
                    t.src = e, await function (e) {
                        return new Promise((function (t, n) {
                            e.complete ? t() : (e.addEventListener("load", (function (e) {
                                t(e)
                            })), e.addEventListener("error", (function (e) {
                                n(e)
                            })))
                        }))
                    }(t);
                    const n = function (e, t) {
                            return g(f, e, t)
                        }(t, 1e4), o = await b.postMessage({k: 8, img: n}), {label: r, centroid: a} = o, i = Math.max(...r),
                        s = r.findIndex((e => e == i));
                    w = a[s], _()
                } catch (e) {
                    console.error(e), k(getComputedStyle(document.documentElement).getPropertyValue("--theme-skin-matching"))
                }
            }

            function _(e) {
                const t = v.hsl(w);
                (void 0 === e ? (0, y.N2)() : e) && (t[2] *= .5), k(function (e) {
                    let [t, n, o, r] = e;
                    return r ? "hsla(" + t + "deg," + n + "%," + o + "%," + r + ")" : "hsl(" + t + "deg," + n + "%," + o + "%)"
                }(t))
            }

            function k(e) {
                const t = document.querySelector("meta[name=theme-color]");
                t && (t.content = e)
            }

            function L() {
                const {effect: e} = _iro;
                e && ("yuki" == e.type ? n.e(9667).then(n.bind(n, 9667)) : n.e(7840).then(n.bind(n, 7840))), async function () {
                    const e = document.getElementById("particles-js-cfg");
                    if (e) try {
                        await n.e(689).then(n.t.bind(n, 689, 23)), particlesJS("particles-js", JSON.parse(e.innerHTML))
                    } catch (e) {
                        console.error(e)
                    }
                }()
            }

            v.hsl = function (e) {
                var t, n, o = e[0] / 255, r = e[1] / 255, a = e[2] / 255, i = Math.min(o, r, a), s = Math.max(o, r, a),
                    c = s - i;
                return s === i ? t = 0 : o === s ? t = (r - a) / c : r === s ? t = 2 + (a - o) / c : a === s && (t = 4 + (o - r) / c), (t = Math.min(60 * t, 360)) < 0 && (t += 360), n = (i + s) / 2, [t, 100 * (s === i ? 0 : n <= .5 ? c / (s + i) : c / (2 - s - i)), 100 * n]
            };
            var S = n(3425), x = n(8067);
            var T = n(7579), C = n(6027), I = n(7481), B = n.n(I), M = n(7320);
            (0, S.T)(), _iro.pjax = _iro.pjax && (0, l.G)({
                Firefox: 60,
                Edg: 79,
                Chrome: 66,
                OPR: 53,
                Version: 12
            }), _iro.pjax && n.e(8338).then(n.bind(n, 8338)).then((e => {
                let {default: t} = e;
                return t()
            })), (0, T.j6)(), (0, r.Z)(), setTimeout((function () {
                !function () {
                    let e = document.getElementById("secondary");
                    if ((0, S.t)()) e && e.remove(); else {
                        let t = document.querySelector(".show-hide");
                        t && t.addEventListener("click", (() => {
                            e && e.classList.toggle("active")
                        }))
                    }
                }()
            }), 100), window.addEventListener("hashchange", (() => {
                const e = location.hash.substring(1);
                if (!/^[A-z0-9_-]+$/.test(e)) return;
                const t = document.getElementById(e);
                t && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
            }), !1), (0, y.q1)(), (0, s.Cd)((function () {
                _iro.float_player_on && ((0, S.t)() || Promise.all([n.e(8509), n.e(2081)]).then(n.bind(n, 8509)).then((e => {
                    let {aplayerInit: t} = e;
                    return t()
                }))), _iro.land_at_home && (0, C.Z)(), Promise.all([(0, T.po)(), (0, T.H5)()]).then((() => {
                    if ((0, l.G)({Version: 15})) {
                        b || (b = new (p())(new Worker(new URL(n.p + n.u(8534), n.b)))), document.addEventListener("coverBG_change", (e => {
                            let {detail: t} = e;
                            return E(t)
                        })), document.addEventListener("darkmode", (e => {
                            let {detail: t} = e;
                            return _(t)
                        }));
                        const e = (0, o.U7)();
                        e && E(e)
                    }
                })), (0, T.bp)();
                let e = document.querySelector("#changskin"), t = document.querySelector(".skin-menu #close-skinMenu");
                e && e.addEventListener("click", (function () {
                    document.querySelector(".skin-menu").classList.toggle("show")
                })), t && t.addEventListener("click", T.Gl), function () {
                    const e = document.querySelector(".site-header"), t = document.querySelector("#changskin"),
                        n = document.querySelector("#moblieGoTop"), o = o => {
                            o > 0 ? e.classList.add("yya") : e.classList.remove("yya");
                            const r = o > 20 ? "scale(1)" : "scale(0)";
                            n.style.transform = r, t.style.transform = r
                        };
                    if ((0, S.t)()) {
                        const e = () => {
                            const e = document.documentElement.scrollTop || document.body.scrollTop;
                            o(e)
                        };
                        window.addEventListener("scroll", e)
                    } else {
                        const e = document.getElementById("bar"), t = document.querySelector(".skin-menu"), n = n => {
                            const o = document.documentElement.scrollHeight || document.body.scrollHeight,
                                r = Math.round(n / (o - window.innerHeight) * 100);
                            e.style.width = r + "%", t && t.classList.remove("show")
                        }, r = () => {
                            const e = document.documentElement.scrollTop || document.body.scrollTop;
                            n(e), o(e)
                        };
                        window.addEventListener("scroll", r)
                    }
                }();
                const r = document.querySelector("#moblieGoTop");
                r && (r.onclick = () => {
                    window.scrollTo({top: 0, behavior: "smooth"})
                }), (0, m.A)(), (0, T.MN)(), (0, M.$Q)(), (0, d.Z)(), (0, T.D9)(), (0, x.T)(), (0, T.RD)(), (0, T.PE)(), (0, T.CE)(), (0, T.DH)(), (0, u.k)(), function () {
                    const e = document.getElementById("preload");
                    if (e) {
                        if ("complete" === document.readyState) return c(e);
                        window.addEventListener("load", (() => {
                            c(e)
                        }))
                    }
                }(), (0, i.m)(), B().colorful = !0, B().shake = !1, document.body.addEventListener("input", B()), (0, m.O)(), (0, M.ze)(), (0, T.nO)(), L(), console.log("%c Sakurairo %c https://github.com/mirai-mamori/Sakurairo", "background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff", ""), console.log("だからもう\n奇跡待たなくてもいいの\n飛び込んで　会いに来て\n渚の果て　何度でも\n歌うから\nいつか想いが叶うまで\n波の翼のマーメイド\n連れてって\nきらめく橋の向こうまで\n一緒に\n%c ⌜Seaside Vacation⌟", "background: linear-gradient(to bottom right, #9FD5F7, #F1CAFF);color:#fff")
            })), (0, a.loadCSS)(_iro.jsdelivr_css_src), (0, a.loadCSS)("https://acdn.moeyy.cn/alifonts/t/font_679578_qyt5qzzavdo39pb9.css")
        }, 5811: (e, t, n) => {
            n.d(t, {A: () => d, O: () => c});
            var o = n(7810), r = n(4591), a = n(7444);
            let i;
            const s = (0, o.NB)((function () {
                const e = document.location.href, t = document.querySelector("#pagination a");
                t.classList.contains("loading") || (t.classList.add("loading"), t.innerText = "", fetch(t.getAttribute("href") + "#main").then((async n => {
                    const o = await n.text();
                    if (e != document.location.href) return;
                    const i = (new DOMParser).parseFromString(o, "text/html"), s = i.querySelectorAll("#main .post"),
                        l = i.querySelector("#pagination a"), d = l && l.innerText, u = l && l.getAttribute("href"),
                        m = document.getElementById("main");
                    for (let e = 0; e < s.length; e++) m.append(s[e]);
                    const f = document.querySelector("#pagination a"), g = document.querySelector("#add_post span");
                    if (f && (f.classList.remove("loading"), f.innerText = d), g && (g.classList.remove("loading"), g.innerText = ""), (0, r.m)(), c(), document.dispatchEvent(new CustomEvent("ajax_post_loaded")), null != u) {
                        t.setAttribute("href", u);
                        let e = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                        window.scrollTo({top: e + 300, behavior: "smooth"})
                    } else document.getElementById("pagination").innerHTML = "<span>" + (0, a.__)("很高兴你翻到这里，但是真的没有了...") + "</span>"
                })))
            }));

            function c() {
                const e = document.querySelectorAll("article.post-list-thumb");
                if (e) {
                    const t = new IntersectionObserver((e => {
                        e.forEach((e => {
                            e.target.classList.contains("post-list-show") ? (e.target.style.willChange = "auto", t.unobserve(e.target)) : e.isIntersecting && (e.target.classList.add("post-list-show"), e.target.style.willChange = "auto", t.unobserve(e.target))
                        }))
                    }), {root: null, threshold: [.66]});
                    for (const n of e) t.observe(n)
                }
            }

            function l(e) {
                "pagination" == e.target.parentElement.id && (e.preventDefault(), e.stopPropagation(), clearTimeout(i), s())
            }

            function d() {
                new IntersectionObserver((e => {
                    if (e[0].intersectionRatio <= 0) return;
                    const t = document.querySelector("#pagination a");
                    if (t) {
                        const e = t.getAttribute("href"), n = document.getElementById("add_post_time");
                        if (null != e && n) {
                            const e = n.title;
                            "233" != e && (console.log("%c 自动加载时倒计时 %c", "background:#9a9da2; color:#ffffff; border-radius:4px;", "", "", e), i = setTimeout(s, 1e3 * e))
                        }
                    }
                })).observe(document.querySelector(".footer-device")), document.body.removeEventListener("click", l), document.body.addEventListener("click", l)
            }
        }, 4119: (e, t, n) => {
            var o = n(6279);
            e.exports = {
                name: "lab",
                min: [0, -100, -100],
                max: [100, 100, 100],
                channel: ["lightness", "a", "b"],
                alias: ["LAB", "cielab"],
                xyz: function (e) {
                    var t, n, o, r, a = e[0], i = e[1], s = e[2];
                    return a <= 8 ? r = (n = 100 * a / 903.3) / 100 * 7.787 + 16 / 116 : (n = 100 * Math.pow((a + 16) / 116, 3), r = Math.pow(n / 100, 1 / 3)), [t = t / 95.047 <= .008856 ? t = 95.047 * (i / 500 + r - 16 / 116) / 7.787 : 95.047 * Math.pow(i / 500 + r, 3), n, o = o / 108.883 <= .008859 ? o = 108.883 * (r - s / 200 - 16 / 116) / 7.787 : 108.883 * Math.pow(r - s / 200, 3)]
                }
            }, o.lab = function (e) {
                var t = e[0], n = e[1], o = e[2];
                return n /= 100, o /= 108.883, t = (t /= 95.047) > .008856 ? Math.pow(t, 1 / 3) : 7.787 * t + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (t - n), 200 * (n - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
            }
        }, 2513: e => {
            e.exports = {
                name: "rgb",
                min: [0, 0, 0],
                max: [255, 255, 255],
                channel: ["red", "green", "blue"],
                alias: ["RGB"]
            }
        }, 6279: (e, t, n) => {
            var o = n(2513), r = {
                name: "xyz",
                min: [0, 0, 0],
                channel: ["X", "Y", "Z"],
                alias: ["XYZ", "ciexyz", "cie1931"],
                whitepoint: {
                    2: {
                        A: [109.85, 100, 35.585],
                        C: [98.074, 100, 118.232],
                        D50: [96.422, 100, 82.521],
                        D55: [95.682, 100, 92.149],
                        D65: [95.045592705167, 100, 108.9057750759878],
                        D75: [94.972, 100, 122.638],
                        F2: [99.187, 100, 67.395],
                        F7: [95.044, 100, 108.755],
                        F11: [100.966, 100, 64.37],
                        E: [100, 100, 100]
                    },
                    10: {
                        A: [111.144, 100, 35.2],
                        C: [97.285, 100, 116.145],
                        D50: [96.72, 100, 81.427],
                        D55: [95.799, 100, 90.926],
                        D65: [94.811, 100, 107.304],
                        D75: [94.416, 100, 120.641],
                        F2: [103.28, 100, 69.026],
                        F7: [95.792, 100, 107.687],
                        F11: [103.866, 100, 65.627],
                        E: [100, 100, 100]
                    }
                }
            };
            r.max = r.whitepoint[2].D65, r.rgb = function (e, t) {
                t = t || r.whitepoint[2].E;
                var n, o, a, i = e[0] / t[0], s = e[1] / t[1], c = e[2] / t[2];
                return o = -.96924363628087 * i + 1.87596750150772 * s + .041555057407175 * c, a = .055630079696993 * i + -.20397695888897 * s + 1.056971514242878 * c, n = (n = 3.240969941904521 * i + -1.537383177570093 * s + -.498610760293 * c) > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : n *= 12.92, o = o > .0031308 ? 1.055 * Math.pow(o, 1 / 2.4) - .055 : o *= 12.92, a = a > .0031308 ? 1.055 * Math.pow(a, 1 / 2.4) - .055 : a *= 12.92, [255 * (n = Math.min(Math.max(0, n), 1)), 255 * (o = Math.min(Math.max(0, o), 1)), 255 * (a = Math.min(Math.max(0, a), 1))]
            }, o.xyz = function (e, t) {
                var n = e[0] / 255, o = e[1] / 255, a = e[2] / 255,
                    i = .21263900587151 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .71516867876775 * (o = o > .04045 ? Math.pow((o + .055) / 1.055, 2.4) : o / 12.92) + .072192315360733 * (a = a > .04045 ? Math.pow((a + .055) / 1.055, 2.4) : a / 12.92),
                    s = .019330818715591 * n + .11919477979462 * o + .95053215224966 * a;
                return [(.41239079926595 * n + .35758433938387 * o + .18048078840183 * a) * (t = t || r.whitepoint[2].E)[0], i * t[1], s * t[2]]
            }, e.exports = r
        }, 9966: function (e, t, n) {
            var o;
            o = void 0 !== n.g ? n.g : this, t.loadCSS = function (e, t, n, r) {
                var a, i = o.document, s = i.createElement("link");
                if (t) a = t; else {
                    var c = (i.body || i.getElementsByTagName("head")[0]).childNodes;
                    a = c[c.length - 1]
                }
                var l = i.styleSheets;
                if (r) for (var d in r) r.hasOwnProperty(d) && s.setAttribute(d, r[d]);
                s.rel = "stylesheet", s.href = e, s.media = "only x", function e(t) {
                    if (i.body) return t();
                    setTimeout((function () {
                        e(t)
                    }))
                }((function () {
                    a.parentNode.insertBefore(s, t ? a : a.nextSibling)
                }));
                var u = function (e) {
                    for (var t = s.href, n = l.length; n--;) if (l[n].href === t) return e();
                    setTimeout((function () {
                        u(e)
                    }))
                };

                function m() {
                    s.addEventListener && s.removeEventListener("load", m), s.media = n || "all"
                }

                return s.addEventListener && s.addEventListener("load", m), s.onloadcssdefined = u, u(m), s
            }
        }, 7481: function (e) {
            var t;
            t = function () {
                return function (e) {
                    var t = {};

                    function n(o) {
                        if (t[o]) return t[o].exports;
                        var r = t[o] = {exports: {}, id: o, loaded: !1};
                        return e[o].call(r.exports, r, r.exports, n), r.loaded = !0, r.exports
                    }

                    return n.m = e, n.c = t, n.p = "", n(0)
                }([function (e, t, n) {
                    var o = document.createElement("canvas");
                    o.width = window.innerWidth, o.height = window.innerHeight, o.style.cssText = "position:fixed;top:0;left:0;pointer-events:none;z-index:999999", window.addEventListener("resize", (function () {
                        o.width = window.innerWidth, o.height = window.innerHeight
                    })), document.body.appendChild(o);
                    var r = o.getContext("2d"), a = [], i = 0, s = !1;

                    function c(e, t) {
                        return Math.random() * (t - e) + e
                    }

                    function l(e) {
                        if (u.colorful) {
                            var t = c(0, 360);
                            return "hsla(" + c(t - 10, t + 10) + ", 100%, " + c(50, 80) + "%, 1)"
                        }
                        return window.getComputedStyle(e).color
                    }

                    function d(e, t, n) {
                        return {
                            x: e,
                            y: t,
                            alpha: 1,
                            color: n,
                            velocity: {x: 2 * Math.random() - 1, y: 2 * Math.random() - 3.5}
                        }
                    }

                    function u() {
                        for (var e = function () {
                            var e, t = document.activeElement;
                            if ("TEXTAREA" === t.tagName || "INPUT" === t.tagName && "text" === t.getAttribute("type")) {
                                var o = n(1)(t, t.selectionEnd);
                                return e = t.getBoundingClientRect(), {
                                    x: o.left + e.left,
                                    y: o.top + e.top,
                                    color: l(t)
                                }
                            }
                            var r = window.getSelection();
                            if (r.rangeCount) {
                                var a = r.getRangeAt(0), i = a.startContainer;
                                return i.nodeType === document.TEXT_NODE && (i = i.parentNode), {
                                    x: (e = a.getBoundingClientRect()).left,
                                    y: e.top,
                                    color: l(i)
                                }
                            }
                            return {x: 0, y: 0, color: "transparent"}
                        }(), t = 5 + Math.round(10 * Math.random()); t--;) a[i] = d(e.x, e.y, e.color), i = (i + 1) % 500;
                        if (u.shake) {
                            var o = 1 + 2 * Math.random(), r = o * (Math.random() > .5 ? -1 : 1),
                                c = o * (Math.random() > .5 ? -1 : 1);
                            document.body.style.marginLeft = r + "px", document.body.style.marginTop = c + "px", setTimeout((function () {
                                document.body.style.marginLeft = "", document.body.style.marginTop = ""
                            }), 75)
                        }
                        s || requestAnimationFrame(m)
                    }

                    function m() {
                        s = !0, r.clearRect(0, 0, o.width, o.height);
                        for (var e = !1, t = o.getBoundingClientRect(), n = 0; n < a.length; ++n) {
                            var i = a[n];
                            i.alpha <= .1 || (i.velocity.y += .075, i.x += i.velocity.x, i.y += i.velocity.y, i.alpha *= .96, r.globalAlpha = i.alpha, r.fillStyle = i.color, r.fillRect(Math.round(i.x - 1.5) - t.left, Math.round(i.y - 1.5) - t.top, 3, 3), e = !0)
                        }
                        e ? requestAnimationFrame(m) : s = !1
                    }

                    u.shake = !0, u.colorful = !1, e.exports = u
                }, function (e, t) {
                    !function () {
                        var t = ["direction", "boxSizing", "width", "height", "overflowX", "overflowY", "borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth", "borderStyle", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "fontStyle", "fontVariant", "fontWeight", "fontStretch", "fontSize", "fontSizeAdjust", "lineHeight", "fontFamily", "textAlign", "textTransform", "textIndent", "textDecoration", "letterSpacing", "wordSpacing", "tabSize", "MozTabSize"],
                            n = null != window.mozInnerScreenX;

                        function o(e, o, r) {
                            var a = r && r.debug || !1;
                            if (a) {
                                var i = document.querySelector("#input-textarea-caret-position-mirror-div");
                                i && i.parentNode.removeChild(i)
                            }
                            var s = document.createElement("div");
                            s.id = "input-textarea-caret-position-mirror-div", document.body.appendChild(s);
                            var c = s.style, l = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
                            c.whiteSpace = "pre-wrap", "INPUT" !== e.nodeName && (c.wordWrap = "break-word"), c.position = "absolute", a || (c.visibility = "hidden"), t.forEach((function (e) {
                                c[e] = l[e]
                            })), n ? e.scrollHeight > parseInt(l.height) && (c.overflowY = "scroll") : c.overflow = "hidden", s.textContent = e.value.substring(0, o), "INPUT" === e.nodeName && (s.textContent = s.textContent.replace(/\s/g, " "));
                            var d = document.createElement("span");
                            d.textContent = e.value.substring(o) || ".", s.appendChild(d);
                            var u = {
                                top: d.offsetTop + parseInt(l.borderTopWidth),
                                left: d.offsetLeft + parseInt(l.borderLeftWidth)
                            };
                            return a ? d.style.backgroundColor = "#aaa" : document.body.removeChild(s), u
                        }

                        void 0 !== e && void 0 !== e.exports ? e.exports = o : window.getCaretCoordinates = o
                    }()
                }])
            }, e.exports = t()
        }, 3492: e => {
            var t = 0;

            function n(e, t) {
                var n = t.data;
                if (Array.isArray(n) && !(n.length < 2)) {
                    var o = n[0], r = n[1], a = n[2], i = e._callbacks[o];
                    i && (delete e._callbacks[o], i(r, a))
                }
            }

            function o(e) {
                var t = this;
                t._worker = e, t._callbacks = {}, e.addEventListener("message", (function (e) {
                    n(t, e)
                }))
            }

            o.prototype.postMessage = function (e) {
                var o = this, r = t++, a = [r, e];
                return new Promise((function (e, t) {
                    if (o._callbacks[r] = function (n, o) {
                        if (n) return t(new Error(n.message));
                        e(o)
                    }, void 0 !== o._worker.controller) {
                        var i = new MessageChannel;
                        i.port1.onmessage = function (e) {
                            n(o, e)
                        }, o._worker.controller.postMessage(a, [i.port2])
                    } else o._worker.postMessage(a)
                }))
            }, e.exports = o
        }
    }, c = {};

    function l(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var n = c[e] = {exports: {}};
        return s[e].call(n.exports, n, n.exports, l), n.exports
    }

    l.m = s, e = [], l.O = (t, n, o, r) => {
        if (!n) {
            var a = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [n, o, r] = e[d], i = !0, s = 0; s < n.length; s++) (!1 & r || a >= r) && Object.keys(l.O).every((e => l.O[e](n[s]))) ? n.splice(s--, 1) : (i = !1, r < a && (a = r));
                if (i) {
                    e.splice(d--, 1);
                    var c = o();
                    void 0 !== c && (t = c)
                }
            }
            return t
        }
        r = r || 0;
        for (var d = e.length; d > 0 && e[d - 1][2] > r; d--) e[d] = e[d - 1];
        e[d] = [n, o, r]
    }, l.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return l.d(t, {a: t}), t
    }, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, l.t = function (e, o) {
        if (1 & o && (e = this(e)), 8 & o) return e;
        if ("object" == typeof e && e) {
            if (4 & o && e.__esModule) return e;
            if (16 & o && "function" == typeof e.then) return e
        }
        var r = Object.create(null);
        l.r(r);
        var a = {};
        t = t || [null, n({}), n([]), n(n)];
        for (var i = 2 & o && e; "object" == typeof i && !~t.indexOf(i); i = n(i)) Object.getOwnPropertyNames(i).forEach((t => a[t] = () => e[t]));
        return a.default = () => e, l.d(r, a), r
    }, l.d = (e, t) => {
        for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, {enumerable: !0, get: t[n]})
    }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce(((t, n) => (l.f[n](e, t), t)), [])), l.u = e => (({
        173: "lg-3",
        558: "lg-8",
        2018: "lg-2",
        2453: "lg-11",
        2478: "lg-6",
        3321: "lg-12",
        3388: "lg-1",
        3637: "lg-5",
        3730: "lg-9",
        3963: "lg-0",
        4441: "lg-10",
        6440: "lg-4",
        9868: "lg-7"
    }[e] || e) + ".js"), l.miniCssF = e => e + ".css", l.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, r = "sakurairo-scripts:", l.l = (e, t, n, a) => {
        if (o[e]) o[e].push(t); else {
            var i, s;
            if (void 0 !== n) for (var c = document.getElementsByTagName("script"), d = 0; d < c.length; d++) {
                var u = c[d];
                if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == r + n) {
                    i = u;
                    break
                }
            }
            i || (s = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, l.nc && i.setAttribute("nonce", l.nc), i.setAttribute("data-webpack", r + n), i.src = e), o[e] = [t];
            var m = (t, n) => {
                i.onerror = i.onload = null, clearTimeout(f);
                var r = o[e];
                if (delete o[e], i.parentNode && i.parentNode.removeChild(i), r && r.forEach((e => e(n))), t) return t(n)
            }, f = setTimeout(m.bind(null, void 0, {type: "timeout", target: i}), 12e4);
            i.onerror = m.bind(null, i.onerror), i.onload = m.bind(null, i.onload), s && document.head.appendChild(i)
        }
    }, l.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, (() => {
        var e;
        l.g.importScripts && (e = l.g.location + "");
        var t = l.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
    })(), a = e => new Promise(((t, n) => {
        var o = l.miniCssF(e), r = l.p + o;
        if (((e, t) => {
            for (var n = document.getElementsByTagName("link"), o = 0; o < n.length; o++) {
                var r = (i = n[o]).getAttribute("data-href") || i.getAttribute("href");
                if ("stylesheet" === i.rel && (r === e || r === t)) return i
            }
            var a = document.getElementsByTagName("style");
            for (o = 0; o < a.length; o++) {
                var i;
                if ((r = (i = a[o]).getAttribute("data-href")) === e || r === t) return i
            }
        })(o, r)) return t();
        ((e, t, n, o) => {
            var r = document.createElement("link");
            r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = a => {
                if (r.onerror = r.onload = null, "load" === a.type) n(); else {
                    var i = a && ("load" === a.type ? "missing" : a.type), s = a && a.target && a.target.href || t,
                        c = new Error("Loading CSS chunk " + e + " failed.\n(" + s + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED", c.type = i, c.request = s, r.parentNode.removeChild(r), o(c)
                }
            }, r.href = t, document.head.appendChild(r)
        })(e, r, t, n)
    })), i = {2143: 0}, l.f.miniCss = (e, t) => {
        i[e] ? t.push(i[e]) : 0 !== i[e] && {2081: 1, 2377: 1}[e] && t.push(i[e] = a(e).then((() => {
            i[e] = 0
        }), (t => {
            throw delete i[e], t
        })))
    }, (() => {
        l.b = document.baseURI || self.location.href;
        var e = {2143: 0};
        l.f.j = (t, n) => {
            var o = l.o(e, t) ? e[t] : void 0;
            if (0 !== o) if (o) n.push(o[2]); else if (/^2(081|377)$/.test(t)) e[t] = 0; else {
                var r = new Promise(((n, r) => o = e[t] = [n, r]));
                n.push(o[2] = r);
                var a = l.p + l.u(t), i = new Error;
                l.l(a, (n => {
                    if (l.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                        var r = n && ("load" === n.type ? "missing" : n.type), a = n && n.target && n.target.src;
                        i.message = "Loading chunk " + t + " failed.\n(" + r + ": " + a + ")", i.name = "ChunkLoadError", i.type = r, i.request = a, o[1](i)
                    }
                }), "chunk-" + t, t)
            }
        }, l.O.j = t => 0 === e[t];
        var t = (t, n) => {
            var o, r, [a, i, s] = n, c = 0;
            if (a.some((t => 0 !== e[t]))) {
                for (o in i) l.o(i, o) && (l.m[o] = i[o]);
                if (s) var d = s(l)
            }
            for (t && t(n); c < a.length; c++) r = a[c], l.o(e, r) && e[r] && e[r][0](), e[r] = 0;
            return l.O(d)
        }, n = globalThis.webpackChunksakurairo_scripts = globalThis.webpackChunksakurairo_scripts || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var d = l.O(void 0, [6429], (() => l(2894)));
    d = l.O(d)
})();
//# sourceMappingURL=app.js.map