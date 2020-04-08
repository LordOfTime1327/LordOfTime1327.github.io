(window.fp_easings = {
  def: "easeOutQuad",
  linear: function (t, e, i, n) {
    return (i * t) / n + e;
  },
  swing: function (t, e, i, n) {
    return window.fp_easings[window.fp_easings.def](t, e, i, n);
  },
  easeInQuad: function (t, e, i, n) {
    return i * (t /= n) * t + e;
  },
  easeOutQuad: function (t, e, i, n) {
    return -i * (t /= n) * (t - 2) + e;
  },
  easeInOutQuad: function (t, e, i, n) {
    return (t /= n / 2) < 1
      ? (i / 2) * t * t + e
      : (-i / 2) * (--t * (t - 2) - 1) + e;
  },
  easeInCubic: function (t, e, i, n) {
    return i * (t /= n) * t * t + e;
  },
  easeOutCubic: function (t, e, i, n) {
    return i * ((t = t / n - 1) * t * t + 1) + e;
  },
  easeInOutCubic: function (t, e, i, n) {
    return (t /= n / 2) < 1
      ? (i / 2) * t * t * t + e
      : (i / 2) * ((t -= 2) * t * t + 2) + e;
  },
  easeInQuart: function (t, e, i, n) {
    return i * (t /= n) * t * t * t + e;
  },
  easeOutQuart: function (t, e, i, n) {
    return -i * ((t = t / n - 1) * t * t * t - 1) + e;
  },
  easeInOutQuart: function (t, e, i, n) {
    return (t /= n / 2) < 1
      ? (i / 2) * t * t * t * t + e
      : (-i / 2) * ((t -= 2) * t * t * t - 2) + e;
  },
  easeInQuint: function (t, e, i, n) {
    return i * (t /= n) * t * t * t * t + e;
  },
  easeOutQuint: function (t, e, i, n) {
    return i * ((t = t / n - 1) * t * t * t * t + 1) + e;
  },
  easeInOutQuint: function (t, e, i, n) {
    return (t /= n / 2) < 1
      ? (i / 2) * t * t * t * t * t + e
      : (i / 2) * ((t -= 2) * t * t * t * t + 2) + e;
  },
  easeInSine: function (t, e, i, n) {
    return -i * Math.cos((t / n) * (Math.PI / 2)) + i + e;
  },
  easeOutSine: function (t, e, i, n) {
    return i * Math.sin((t / n) * (Math.PI / 2)) + e;
  },
  easeInOutSine: function (t, e, i, n) {
    return (-i / 2) * (Math.cos((Math.PI * t) / n) - 1) + e;
  },
  easeInExpo: function (t, e, i, n) {
    return 0 == t ? e : i * Math.pow(2, 10 * (t / n - 1)) + e;
  },
  easeOutExpo: function (t, e, i, n) {
    return t == n ? e + i : i * (1 - Math.pow(2, (-10 * t) / n)) + e;
  },
  easeInOutExpo: function (t, e, i, n) {
    return 0 == t
      ? e
      : t == n
      ? e + i
      : (t /= n / 2) < 1
      ? (i / 2) * Math.pow(2, 10 * (t - 1)) + e
      : (i / 2) * (2 - Math.pow(2, -10 * --t)) + e;
  },
  easeInCirc: function (t, e, i, n) {
    return -i * (Math.sqrt(1 - (t /= n) * t) - 1) + e;
  },
  easeOutCirc: function (t, e, i, n) {
    return i * Math.sqrt(1 - (t = t / n - 1) * t) + e;
  },
  easeInOutCirc: function (t, e, i, n) {
    return (t /= n / 2) < 1
      ? (-i / 2) * (Math.sqrt(1 - t * t) - 1) + e
      : (i / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
  },
  easeInElastic: function (t, e, i, n) {
    var o = 1.70158,
      s = 0,
      r = i;
    return 0 == t
      ? e
      : 1 == (t /= n)
      ? e + i
      : (s || (s = 0.3 * n),
        r < Math.abs(i)
          ? ((r = i), (o = s / 4))
          : (o = (s / (2 * Math.PI)) * Math.asin(i / r)),
        -r *
          Math.pow(2, 10 * (t -= 1)) *
          Math.sin(((t * n - o) * (2 * Math.PI)) / s) +
          e);
  },
  easeOutElastic: function (t, e, i, n) {
    var o = 1.70158,
      s = 0,
      r = i;
    return 0 == t
      ? e
      : 1 == (t /= n)
      ? e + i
      : (s || (s = 0.3 * n),
        r < Math.abs(i)
          ? ((r = i), (o = s / 4))
          : (o = (s / (2 * Math.PI)) * Math.asin(i / r)),
        r * Math.pow(2, -10 * t) * Math.sin(((t * n - o) * (2 * Math.PI)) / s) +
          i +
          e);
  },
  easeInOutElastic: function (t, e, i, n) {
    var o = 1.70158,
      s = 0,
      r = i;
    return 0 == t
      ? e
      : 2 == (t /= n / 2)
      ? e + i
      : (s || (s = n * (0.3 * 1.5)),
        r < Math.abs(i)
          ? ((r = i), (o = s / 4))
          : (o = (s / (2 * Math.PI)) * Math.asin(i / r)),
        t < 1
          ? r *
              Math.pow(2, 10 * (t -= 1)) *
              Math.sin(((t * n - o) * (2 * Math.PI)) / s) *
              -0.5 +
            e
          : r *
              Math.pow(2, -10 * (t -= 1)) *
              Math.sin(((t * n - o) * (2 * Math.PI)) / s) *
              0.5 +
            i +
            e);
  },
  easeInBack: function (t, e, i, n, o) {
    return null == o && (o = 1.70158), i * (t /= n) * t * ((o + 1) * t - o) + e;
  },
  easeOutBack: function (t, e, i, n, o) {
    return (
      null == o && (o = 1.70158),
      i * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + e
    );
  },
  easeInOutBack: function (t, e, i, n, o) {
    return (
      null == o && (o = 1.70158),
      (t /= n / 2) < 1
        ? (i / 2) * (t * t * ((1 + (o *= 1.525)) * t - o)) + e
        : (i / 2) * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + e
    );
  },
  easeInBounce: function (t, e, i, n) {
    return i - window.fp_easings.easeOutBounce(n - t, 0, i, n) + e;
  },
  easeOutBounce: function (t, e, i, n) {
    return (t /= n) < 1 / 2.75
      ? i * (7.5625 * t * t) + e
      : t < 2 / 2.75
      ? i * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + e
      : t < 2.5 / 2.75
      ? i * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + e
      : i * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + e;
  },
  easeInOutBounce: function (t, e, i, n) {
    return t < n / 2
      ? 0.5 * window.fp_easings.easeInBounce(2 * t, 0, i, n) + e
      : 0.5 * window.fp_easings.easeOutBounce(2 * t - n, 0, i, n) + 0.5 * i + e;
  },
}),
  (function (t, e, i) {
    var n =
        t.requestAnimationFrame ||
        t.webkitRequestAnimationFrame ||
        t.mozRequestAnimationFrame ||
        t.oRequestAnimationFrame ||
        t.msRequestAnimationFrame ||
        function (e) {
          t.setTimeout(e, 1e3 / 60);
        },
      o = (function () {
        var n = {},
          o = e.createElement("div").style,
          s = (function () {
            for (
              var t = ["t", "webkitT", "MozT", "msT", "OT"],
                e = 0,
                i = t.length;
              e < i;
              e++
            )
              if (t[e] + "ransform" in o)
                return t[e].substr(0, t[e].length - 1);
            return !1;
          })();
        function r(t) {
          return (
            !1 !== s &&
            ("" === s ? t : s + t.charAt(0).toUpperCase() + t.substr(1))
          );
        }
        (n.getTime =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
          (n.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
          }),
          (n.addEvent = function (t, e, i, n) {
            t.addEventListener(e, i, !!n);
          }),
          (n.removeEvent = function (t, e, i, n) {
            t.removeEventListener(e, i, !!n);
          }),
          (n.prefixPointerEvent = function (e) {
            return t.MSPointerEvent
              ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8)
              : e;
          }),
          (n.momentum = function (t, e, n, o, s, r) {
            var a,
              l,
              c = t - e,
              h = i.abs(c) / n;
            return (
              (l = h / (r = void 0 === r ? 6e-4 : r)),
              (a = t + ((h * h) / (2 * r)) * (c < 0 ? -1 : 1)) < o
                ? ((a = s ? o - (s / 2.5) * (h / 8) : o),
                  (l = (c = i.abs(a - t)) / h))
                : 0 < a &&
                  ((a = s ? (s / 2.5) * (h / 8) : 0),
                  (l = (c = i.abs(t) + a) / h)),
              { destination: i.round(a), duration: l }
            );
          });
        var a = r("transform");
        return (
          n.extend(n, {
            hasTransform: !1 !== a,
            hasPerspective: r("perspective") in o,
            hasTouch: "ontouchstart" in t,
            hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
            hasTransition: r("transition") in o,
          }),
          (n.isBadAndroid = (function () {
            var e = t.navigator.appVersion;
            if (!/Android/.test(e) || /Chrome\/\d/.test(e)) return !1;
            var i = e.match(/Safari\/(\d+.\d)/);
            return (
              !(i && "object" == typeof i && 2 <= i.length) ||
              parseFloat(i[1]) < 535.19
            );
          })()),
          n.extend((n.style = {}), {
            transform: a,
            transitionTimingFunction: r("transitionTimingFunction"),
            transitionDuration: r("transitionDuration"),
            transitionDelay: r("transitionDelay"),
            transformOrigin: r("transformOrigin"),
          }),
          (n.hasClass = function (t, e) {
            return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className);
          }),
          (n.addClass = function (t, e) {
            if (!n.hasClass(t, e)) {
              var i = t.className.split(" ");
              i.push(e), (t.className = i.join(" "));
            }
          }),
          (n.removeClass = function (t, e) {
            if (n.hasClass(t, e)) {
              var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
              t.className = t.className.replace(i, " ");
            }
          }),
          (n.offset = function (t) {
            for (
              var e = -t.offsetLeft, i = -t.offsetTop;
              (t = t.offsetParent);

            )
              (e -= t.offsetLeft), (i -= t.offsetTop);
            return { left: e, top: i };
          }),
          (n.preventDefaultException = function (t, e) {
            for (var i in e) if (e[i].test(t[i])) return !0;
            return !1;
          }),
          n.extend((n.eventType = {}), {
            touchstart: 1,
            touchmove: 1,
            touchend: 1,
            mousedown: 2,
            mousemove: 2,
            mouseup: 2,
            pointerdown: 3,
            pointermove: 3,
            pointerup: 3,
            MSPointerDown: 3,
            MSPointerMove: 3,
            MSPointerUp: 3,
          }),
          n.extend((n.ease = {}), {
            quadratic: {
              style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              fn: function (t) {
                return t * (2 - t);
              },
            },
            circular: {
              style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
              fn: function (t) {
                return i.sqrt(1 - --t * t);
              },
            },
            back: {
              style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
              fn: function (t) {
                return (t -= 1) * t * (5 * t + 4) + 1;
              },
            },
            bounce: {
              style: "",
              fn: function (t) {
                return (t /= 1) < 1 / 2.75
                  ? 7.5625 * t * t
                  : t < 2 / 2.75
                  ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                  : t < 2.5 / 2.75
                  ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                  : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
              },
            },
            elastic: {
              style: "",
              fn: function (t) {
                return 0 === t
                  ? 0
                  : 1 == t
                  ? 1
                  : 0.4 *
                      i.pow(2, -10 * t) *
                      i.sin(((t - 0.055) * (2 * i.PI)) / 0.22) +
                    1;
              },
            },
          }),
          (n.tap = function (t, i) {
            var n = e.createEvent("Event");
            n.initEvent(i, !0, !0),
              (n.pageX = t.pageX),
              (n.pageY = t.pageY),
              t.target.dispatchEvent(n);
          }),
          (n.click = function (i) {
            var n,
              o = i.target;
            /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
              ((n = e.createEvent(
                t.MouseEvent ? "MouseEvents" : "Event"
              )).initEvent("click", !0, !0),
              (n.view = i.view || t),
              (n.detail = 1),
              (n.screenX = o.screenX || 0),
              (n.screenY = o.screenY || 0),
              (n.clientX = o.clientX || 0),
              (n.clientY = o.clientY || 0),
              (n.ctrlKey = !!i.ctrlKey),
              (n.altKey = !!i.altKey),
              (n.shiftKey = !!i.shiftKey),
              (n.metaKey = !!i.metaKey),
              (n.button = 0),
              (n.relatedTarget = null),
              (n._constructed = !0),
              o.dispatchEvent(n));
          }),
          n
        );
      })();
    function s(i, n) {
      for (var s in ((this.wrapper =
        "string" == typeof i ? e.querySelector(i) : i),
      (this.scroller = this.wrapper.children[0]),
      (this.scrollerStyle = this.scroller.style),
      (this.options = {
        resizeScrollbars: !0,
        mouseWheelSpeed: 20,
        snapThreshold: 0.334,
        disablePointer: !o.hasPointer,
        disableTouch: o.hasPointer || !o.hasTouch,
        disableMouse: o.hasPointer || o.hasTouch,
        startX: 0,
        startY: 0,
        scrollY: !0,
        directionLockThreshold: 5,
        momentum: !0,
        bounce: !0,
        bounceTime: 600,
        bounceEasing: "",
        preventDefault: !0,
        preventDefaultException: {
          tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/,
        },
        HWCompositing: !0,
        useTransition: !0,
        useTransform: !0,
        bindToWrapper: void 0 === t.onmousedown,
      }),
      n))
        this.options[s] = n[s];
      (this.translateZ =
        this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : ""),
        (this.options.useTransition =
          o.hasTransition && this.options.useTransition),
        (this.options.useTransform =
          o.hasTransform && this.options.useTransform),
        (this.options.eventPassthrough =
          !0 === this.options.eventPassthrough
            ? "vertical"
            : this.options.eventPassthrough),
        (this.options.preventDefault =
          !this.options.eventPassthrough && this.options.preventDefault),
        (this.options.scrollY =
          "vertical" != this.options.eventPassthrough && this.options.scrollY),
        (this.options.scrollX =
          "horizontal" != this.options.eventPassthrough &&
          this.options.scrollX),
        (this.options.freeScroll =
          this.options.freeScroll && !this.options.eventPassthrough),
        (this.options.directionLockThreshold = this.options.eventPassthrough
          ? 0
          : this.options.directionLockThreshold),
        (this.options.bounceEasing =
          "string" == typeof this.options.bounceEasing
            ? o.ease[this.options.bounceEasing] || o.ease.circular
            : this.options.bounceEasing),
        (this.options.resizePolling =
          void 0 === this.options.resizePolling
            ? 60
            : this.options.resizePolling),
        !0 === this.options.tap && (this.options.tap = "tap"),
        this.options.useTransition ||
          this.options.useTransform ||
          /relative|absolute/i.test(this.scrollerStyle.position) ||
          (this.scrollerStyle.position = "relative"),
        "scale" == this.options.shrinkScrollbars &&
          (this.options.useTransition = !1),
        (this.options.invertWheelDirection = this.options.invertWheelDirection
          ? -1
          : 1),
        (this.x = 0),
        (this.y = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this._events = {}),
        this._init(),
        this.refresh(),
        this.scrollTo(this.options.startX, this.options.startY),
        this.enable();
    }
    function r(t, i, n) {
      var o = e.createElement("div"),
        s = e.createElement("div");
      return (
        !0 === n &&
          ((o.style.cssText = "position:absolute;z-index:9999"),
          (s.style.cssText =
            "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
        (s.className = "iScrollIndicator"),
        (o.className =
          "h" == t
            ? (!0 === n &&
                ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
                (s.style.height = "100%")),
              "iScrollHorizontalScrollbar")
            : (!0 === n &&
                ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
                (s.style.width = "100%")),
              "iScrollVerticalScrollbar")),
        (o.style.cssText += ";overflow:hidden"),
        i || (o.style.pointerEvents = "none"),
        o.appendChild(s),
        o
      );
    }
    function a(i, s) {
      for (var r in ((this.wrapper =
        "string" == typeof s.el ? e.querySelector(s.el) : s.el),
      (this.wrapperStyle = this.wrapper.style),
      (this.indicator = this.wrapper.children[0]),
      (this.indicatorStyle = this.indicator.style),
      (this.scroller = i),
      (this.options = {
        listenX: !0,
        listenY: !0,
        interactive: !1,
        resize: !0,
        defaultScrollbars: !1,
        shrink: !1,
        fade: !1,
        speedRatioX: 0,
        speedRatioY: 0,
      }),
      s))
        this.options[r] = s[r];
      if (
        ((this.sizeRatioX = 1),
        (this.sizeRatioY = 1),
        (this.maxPosX = 0),
        (this.maxPosY = 0),
        this.options.interactive &&
          (this.options.disableTouch ||
            (o.addEvent(this.indicator, "touchstart", this),
            o.addEvent(t, "touchend", this)),
          this.options.disablePointer ||
            (o.addEvent(
              this.indicator,
              o.prefixPointerEvent("pointerdown"),
              this
            ),
            o.addEvent(t, o.prefixPointerEvent("pointerup"), this)),
          this.options.disableMouse ||
            (o.addEvent(this.indicator, "mousedown", this),
            o.addEvent(t, "mouseup", this))),
        this.options.fade)
      ) {
        this.wrapperStyle[o.style.transform] = this.scroller.translateZ;
        var a = o.style.transitionDuration;
        if (!a) return;
        this.wrapperStyle[a] = o.isBadAndroid ? "0.0001ms" : "0ms";
        var l = this;
        o.isBadAndroid &&
          n(function () {
            "0.0001ms" === l.wrapperStyle[a] && (l.wrapperStyle[a] = "0s");
          }),
          (this.wrapperStyle.opacity = "0");
      }
    }
    (s.prototype = {
      version: "5.2.0",
      _init: function () {
        this._initEvents(),
          (this.options.scrollbars || this.options.indicators) &&
            this._initIndicators(),
          this.options.mouseWheel && this._initWheel(),
          this.options.snap && this._initSnap(),
          this.options.keyBindings && this._initKeys();
      },
      destroy: function () {
        this._initEvents(!0),
          clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = null),
          this._execEvent("destroy");
      },
      _transitionEnd: function (t) {
        t.target == this.scroller &&
          this.isInTransition &&
          (this._transitionTime(),
          this.resetPosition(this.options.bounceTime) ||
            ((this.isInTransition = !1), this._execEvent("scrollEnd")));
      },
      _start: function (t) {
        if (
          (1 == o.eventType[t.type] ||
            0 ===
              (t.which
                ? t.button
                : t.button < 2
                ? 0
                : 4 == t.button
                ? 1
                : 2)) &&
          this.enabled &&
          (!this.initiated || o.eventType[t.type] === this.initiated)
        ) {
          !this.options.preventDefault ||
            o.isBadAndroid ||
            o.preventDefaultException(
              t.target,
              this.options.preventDefaultException
            ) ||
            t.preventDefault();
          var e,
            n = t.touches ? t.touches[0] : t;
          (this.initiated = o.eventType[t.type]),
            (this.moved = !1),
            (this.distX = 0),
            (this.distY = 0),
            (this.directionX = 0),
            (this.directionY = 0),
            (this.directionLocked = 0),
            (this.startTime = o.getTime()),
            this.options.useTransition && this.isInTransition
              ? (this._transitionTime(),
                (this.isInTransition = !1),
                (e = this.getComputedPosition()),
                this._translate(i.round(e.x), i.round(e.y)),
                this._execEvent("scrollEnd"))
              : !this.options.useTransition &&
                this.isAnimating &&
                ((this.isAnimating = !1), this._execEvent("scrollEnd")),
            (this.startX = this.x),
            (this.startY = this.y),
            (this.absStartX = this.x),
            (this.absStartY = this.y),
            (this.pointX = n.pageX),
            (this.pointY = n.pageY),
            this._execEvent("beforeScrollStart");
        }
      },
      _move: function (t) {
        if (this.enabled && o.eventType[t.type] === this.initiated) {
          this.options.preventDefault && t.preventDefault();
          var e,
            n,
            s,
            r,
            a = t.touches ? t.touches[0] : t,
            l = a.pageX - this.pointX,
            c = a.pageY - this.pointY,
            h = o.getTime();
          if (
            ((this.pointX = a.pageX),
            (this.pointY = a.pageY),
            (this.distX += l),
            (this.distY += c),
            (s = i.abs(this.distX)),
            (r = i.abs(this.distY)),
            !(300 < h - this.endTime && s < 10 && r < 10))
          ) {
            if (
              (this.directionLocked ||
                this.options.freeScroll ||
                (s > r + this.options.directionLockThreshold
                  ? (this.directionLocked = "h")
                  : r >= s + this.options.directionLockThreshold
                  ? (this.directionLocked = "v")
                  : (this.directionLocked = "n")),
              "h" == this.directionLocked)
            ) {
              if ("vertical" == this.options.eventPassthrough)
                t.preventDefault();
              else if ("horizontal" == this.options.eventPassthrough)
                return void (this.initiated = !1);
              c = 0;
            } else if ("v" == this.directionLocked) {
              if ("horizontal" == this.options.eventPassthrough)
                t.preventDefault();
              else if ("vertical" == this.options.eventPassthrough)
                return void (this.initiated = !1);
              l = 0;
            }
            (l = this.hasHorizontalScroll ? l : 0),
              (c = this.hasVerticalScroll ? c : 0),
              (e = this.x + l),
              (n = this.y + c),
              (0 < e || e < this.maxScrollX) &&
                (e = this.options.bounce
                  ? this.x + l / 3
                  : 0 < e
                  ? 0
                  : this.maxScrollX),
              (0 < n || n < this.maxScrollY) &&
                (n = this.options.bounce
                  ? this.y + c / 3
                  : 0 < n
                  ? 0
                  : this.maxScrollY),
              (this.directionX = 0 < l ? -1 : l < 0 ? 1 : 0),
              (this.directionY = 0 < c ? -1 : c < 0 ? 1 : 0),
              this.moved || this._execEvent("scrollStart"),
              (this.moved = !0),
              this._translate(e, n),
              300 < h - this.startTime &&
                ((this.startTime = h),
                (this.startX = this.x),
                (this.startY = this.y));
          }
        }
      },
      _end: function (t) {
        if (this.enabled && o.eventType[t.type] === this.initiated) {
          this.options.preventDefault &&
            !o.preventDefaultException(
              t.target,
              this.options.preventDefaultException
            ) &&
            t.preventDefault(),
            t.changedTouches && t.changedTouches[0];
          var e,
            n,
            s = o.getTime() - this.startTime,
            r = i.round(this.x),
            a = i.round(this.y),
            l = i.abs(r - this.startX),
            c = i.abs(a - this.startY),
            h = 0,
            u = "";
          if (
            ((this.isInTransition = 0),
            (this.initiated = 0),
            (this.endTime = o.getTime()),
            !this.resetPosition(this.options.bounceTime))
          ) {
            if ((this.scrollTo(r, a), !this.moved))
              return (
                this.options.tap && o.tap(t, this.options.tap),
                this.options.click && o.click(t),
                void this._execEvent("scrollCancel")
              );
            if (this._events.flick && s < 200 && l < 100 && c < 100)
              this._execEvent("flick");
            else {
              if (
                (this.options.momentum &&
                  s < 300 &&
                  ((e = this.hasHorizontalScroll
                    ? o.momentum(
                        this.x,
                        this.startX,
                        s,
                        this.maxScrollX,
                        this.options.bounce ? this.wrapperWidth : 0,
                        this.options.deceleration
                      )
                    : { destination: r, duration: 0 }),
                  (n = this.hasVerticalScroll
                    ? o.momentum(
                        this.y,
                        this.startY,
                        s,
                        this.maxScrollY,
                        this.options.bounce ? this.wrapperHeight : 0,
                        this.options.deceleration
                      )
                    : { destination: a, duration: 0 }),
                  (r = e.destination),
                  (a = n.destination),
                  (h = i.max(e.duration, n.duration)),
                  (this.isInTransition = 1)),
                this.options.snap)
              ) {
                var p = this._nearestSnap(r, a);
                (this.currentPage = p),
                  (h =
                    this.options.snapSpeed ||
                    i.max(
                      i.max(
                        i.min(i.abs(r - p.x), 1e3),
                        i.min(i.abs(a - p.y), 1e3)
                      ),
                      300
                    )),
                  (r = p.x),
                  (a = p.y),
                  (this.directionX = 0),
                  (this.directionY = 0),
                  (u = this.options.bounceEasing);
              }
              if (r != this.x || a != this.y)
                return (
                  (0 < r ||
                    r < this.maxScrollX ||
                    0 < a ||
                    a < this.maxScrollY) &&
                    (u = o.ease.quadratic),
                  void this.scrollTo(r, a, h, u)
                );
              this._execEvent("scrollEnd");
            }
          }
        }
      },
      _resize: function () {
        var t = this;
        clearTimeout(this.resizeTimeout),
          (this.resizeTimeout = setTimeout(function () {
            t.refresh();
          }, this.options.resizePolling));
      },
      resetPosition: function (t) {
        var e = this.x,
          i = this.y;
        return (
          (t = t || 0),
          !this.hasHorizontalScroll || 0 < this.x
            ? (e = 0)
            : this.x < this.maxScrollX && (e = this.maxScrollX),
          !this.hasVerticalScroll || 0 < this.y
            ? (i = 0)
            : this.y < this.maxScrollY && (i = this.maxScrollY),
          (e != this.x || i != this.y) &&
            (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
        );
      },
      disable: function () {
        this.enabled = !1;
      },
      enable: function () {
        this.enabled = !0;
      },
      refresh: function () {
        this.wrapper.offsetHeight,
          (this.wrapperWidth = this.wrapper.clientWidth),
          (this.wrapperHeight = this.wrapper.clientHeight),
          (this.scrollerWidth = this.scroller.offsetWidth),
          (this.scrollerHeight = this.scroller.offsetHeight),
          (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
          (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
          (this.hasHorizontalScroll =
            this.options.scrollX && this.maxScrollX < 0),
          (this.hasVerticalScroll =
            this.options.scrollY && this.maxScrollY < 0),
          this.hasHorizontalScroll ||
            ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
          this.hasVerticalScroll ||
            ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
          (this.endTime = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.wrapperOffset = o.offset(this.wrapper)),
          this._execEvent("refresh"),
          this.resetPosition();
      },
      on: function (t, e) {
        this._events[t] || (this._events[t] = []), this._events[t].push(e);
      },
      off: function (t, e) {
        if (this._events[t]) {
          var i = this._events[t].indexOf(e);
          -1 < i && this._events[t].splice(i, 1);
        }
      },
      _execEvent: function (t) {
        if (this._events[t]) {
          var e = 0,
            i = this._events[t].length;
          if (i)
            for (; e < i; e++)
              this._events[t][e].apply(this, [].slice.call(arguments, 1));
        }
      },
      scrollBy: function (t, e, i, n) {
        (t = this.x + t),
          (e = this.y + e),
          (i = i || 0),
          this.scrollTo(t, e, i, n);
      },
      scrollTo: function (t, e, i, n) {
        (n = n || o.ease.circular),
          (this.isInTransition = this.options.useTransition && 0 < i);
        var s = this.options.useTransition && n.style;
        !i || s
          ? (s &&
              (this._transitionTimingFunction(n.style),
              this._transitionTime(i)),
            this._translate(t, e))
          : this._animate(t, e, i, n.fn);
      },
      scrollToElement: function (t, e, n, s, r) {
        if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
          var a = o.offset(t);
          (a.left -= this.wrapperOffset.left),
            (a.top -= this.wrapperOffset.top),
            !0 === n &&
              (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
            !0 === s &&
              (s = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
            (a.left -= n || 0),
            (a.top -= s || 0),
            (a.left =
              0 < a.left
                ? 0
                : a.left < this.maxScrollX
                ? this.maxScrollX
                : a.left),
            (a.top =
              0 < a.top
                ? 0
                : a.top < this.maxScrollY
                ? this.maxScrollY
                : a.top),
            (e =
              null == e || "auto" === e
                ? i.max(i.abs(this.x - a.left), i.abs(this.y - a.top))
                : e),
            this.scrollTo(a.left, a.top, e, r);
        }
      },
      _transitionTime: function (t) {
        if (this.options.useTransition) {
          t = t || 0;
          var e = o.style.transitionDuration;
          if (e) {
            if (((this.scrollerStyle[e] = t + "ms"), !t && o.isBadAndroid)) {
              this.scrollerStyle[e] = "0.0001ms";
              var i = this;
              n(function () {
                "0.0001ms" === i.scrollerStyle[e] &&
                  (i.scrollerStyle[e] = "0s");
              });
            }
            if (this.indicators)
              for (var s = this.indicators.length; s--; )
                this.indicators[s].transitionTime(t);
          }
        }
      },
      _transitionTimingFunction: function (t) {
        if (
          ((this.scrollerStyle[o.style.transitionTimingFunction] = t),
          this.indicators)
        )
          for (var e = this.indicators.length; e--; )
            this.indicators[e].transitionTimingFunction(t);
      },
      _translate: function (t, e) {
        if (
          (this.options.useTransform
            ? (this.scrollerStyle[o.style.transform] =
                "translate(" + t + "px," + e + "px)" + this.translateZ)
            : ((t = i.round(t)),
              (e = i.round(e)),
              (this.scrollerStyle.left = t + "px"),
              (this.scrollerStyle.top = e + "px")),
          (this.x = t),
          (this.y = e),
          this.indicators)
        )
          for (var n = this.indicators.length; n--; )
            this.indicators[n].updatePosition();
      },
      _initEvents: function (e) {
        var i = e ? o.removeEvent : o.addEvent,
          n = this.options.bindToWrapper ? this.wrapper : t;
        i(t, "orientationchange", this),
          i(t, "resize", this),
          this.options.click && i(this.wrapper, "click", this, !0),
          this.options.disableMouse ||
            (i(this.wrapper, "mousedown", this),
            i(n, "mousemove", this),
            i(n, "mousecancel", this),
            i(n, "mouseup", this)),
          o.hasPointer &&
            !this.options.disablePointer &&
            (i(this.wrapper, o.prefixPointerEvent("pointerdown"), this),
            i(n, o.prefixPointerEvent("pointermove"), this),
            i(n, o.prefixPointerEvent("pointercancel"), this),
            i(n, o.prefixPointerEvent("pointerup"), this)),
          o.hasTouch &&
            !this.options.disableTouch &&
            (i(this.wrapper, "touchstart", this),
            i(n, "touchmove", this),
            i(n, "touchcancel", this),
            i(n, "touchend", this)),
          i(this.scroller, "transitionend", this),
          i(this.scroller, "webkitTransitionEnd", this),
          i(this.scroller, "oTransitionEnd", this),
          i(this.scroller, "MSTransitionEnd", this);
      },
      getComputedPosition: function () {
        var e,
          i,
          n = t.getComputedStyle(this.scroller, null);
        return (
          (i = this.options.useTransform
            ? ((e = +(
                (n = n[o.style.transform].split(")")[0].split(", "))[12] || n[4]
              )),
              +(n[13] || n[5]))
            : ((e = +n.left.replace(/[^-\d.]/g, "")),
              +n.top.replace(/[^-\d.]/g, ""))),
          { x: e, y: i }
        );
      },
      _initIndicators: function () {
        var t,
          e = this.options.interactiveScrollbars,
          i = "string" != typeof this.options.scrollbars,
          n = [],
          o = this;
        (this.indicators = []),
          this.options.scrollbars &&
            (this.options.scrollY &&
              ((t = {
                el: r("v", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenX: !1,
              }),
              this.wrapper.appendChild(t.el),
              n.push(t)),
            this.options.scrollX &&
              ((t = {
                el: r("h", e, this.options.scrollbars),
                interactive: e,
                defaultScrollbars: !0,
                customStyle: i,
                resize: this.options.resizeScrollbars,
                shrink: this.options.shrinkScrollbars,
                fade: this.options.fadeScrollbars,
                listenY: !1,
              }),
              this.wrapper.appendChild(t.el),
              n.push(t))),
          this.options.indicators && (n = n.concat(this.options.indicators));
        for (var s = n.length; s--; ) this.indicators.push(new a(this, n[s]));
        function l(t) {
          if (o.indicators)
            for (var e = o.indicators.length; e--; ) t.call(o.indicators[e]);
        }
        this.options.fadeScrollbars &&
          (this.on("scrollEnd", function () {
            l(function () {
              this.fade();
            });
          }),
          this.on("scrollCancel", function () {
            l(function () {
              this.fade();
            });
          }),
          this.on("scrollStart", function () {
            l(function () {
              this.fade(1);
            });
          }),
          this.on("beforeScrollStart", function () {
            l(function () {
              this.fade(1, !0);
            });
          })),
          this.on("refresh", function () {
            l(function () {
              this.refresh();
            });
          }),
          this.on("destroy", function () {
            l(function () {
              this.destroy();
            }),
              delete this.indicators;
          });
      },
      _initWheel: function () {
        o.addEvent(this.wrapper, "wheel", this),
          o.addEvent(this.wrapper, "mousewheel", this),
          o.addEvent(this.wrapper, "DOMMouseScroll", this),
          this.on("destroy", function () {
            clearTimeout(this.wheelTimeout),
              (this.wheelTimeout = null),
              o.removeEvent(this.wrapper, "wheel", this),
              o.removeEvent(this.wrapper, "mousewheel", this),
              o.removeEvent(this.wrapper, "DOMMouseScroll", this);
          });
      },
      _wheel: function (e) {
        if (this.enabled) {
          t.navigator.userAgent.match(/(MSIE|Trident)/) || e.preventDefault();
          var n,
            o,
            s,
            r,
            a = this;
          if (
            (void 0 === this.wheelTimeout && a._execEvent("scrollStart"),
            clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = setTimeout(function () {
              a.options.snap || a._execEvent("scrollEnd"),
                (a.wheelTimeout = void 0);
            }, 400)),
            "deltaX" in e)
          )
            o =
              1 === e.deltaMode
                ? ((n = -e.deltaX * this.options.mouseWheelSpeed),
                  -e.deltaY * this.options.mouseWheelSpeed)
                : ((n = -e.deltaX), -e.deltaY);
          else if ("wheelDeltaX" in e)
            (n = (e.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
              (o = (e.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
          else if ("wheelDelta" in e)
            n = o = (e.wheelDelta / 120) * this.options.mouseWheelSpeed;
          else {
            if (!("detail" in e)) return;
            n = o = (-e.detail / 3) * this.options.mouseWheelSpeed;
          }
          if (
            ((n *= this.options.invertWheelDirection),
            (o *= this.options.invertWheelDirection),
            this.hasVerticalScroll || ((n = o), (o = 0)),
            this.options.snap)
          )
            return (
              (s = this.currentPage.pageX),
              (r = this.currentPage.pageY),
              0 < n ? s-- : n < 0 && s++,
              0 < o ? r-- : o < 0 && r++,
              void this.goToPage(s, r)
            );
          (s = this.x + i.round(this.hasHorizontalScroll ? n : 0)),
            (r = this.y + i.round(this.hasVerticalScroll ? o : 0)),
            (this.directionX = 0 < n ? -1 : n < 0 ? 1 : 0),
            (this.directionY = 0 < o ? -1 : o < 0 ? 1 : 0),
            0 < s ? (s = 0) : s < this.maxScrollX && (s = this.maxScrollX),
            0 < r ? (r = 0) : r < this.maxScrollY && (r = this.maxScrollY),
            this.scrollTo(s, r, 0);
        }
      },
      _initSnap: function () {
        (this.currentPage = {}),
          "string" == typeof this.options.snap &&
            (this.options.snap = this.scroller.querySelectorAll(
              this.options.snap
            )),
          this.on("refresh", function () {
            var t,
              e,
              n,
              o,
              s,
              r,
              a = 0,
              l = 0,
              c = 0,
              h = this.options.snapStepX || this.wrapperWidth,
              u = this.options.snapStepY || this.wrapperHeight;
            if (
              ((this.pages = []),
              this.wrapperWidth &&
                this.wrapperHeight &&
                this.scrollerWidth &&
                this.scrollerHeight)
            ) {
              if (!0 === this.options.snap)
                for (
                  n = i.round(h / 2), o = i.round(u / 2);
                  c > -this.scrollerWidth;

                ) {
                  for (
                    this.pages[a] = [], s = t = 0;
                    s > -this.scrollerHeight;

                  )
                    (this.pages[a][t] = {
                      x: i.max(c, this.maxScrollX),
                      y: i.max(s, this.maxScrollY),
                      width: h,
                      height: u,
                      cx: c - n,
                      cy: s - o,
                    }),
                      (s -= u),
                      t++;
                  (c -= h), a++;
                }
              else
                for (t = (r = this.options.snap).length, e = -1; a < t; a++)
                  (0 === a || r[a].offsetLeft <= r[a - 1].offsetLeft) &&
                    ((l = 0), e++),
                    this.pages[l] || (this.pages[l] = []),
                    (c = i.max(-r[a].offsetLeft, this.maxScrollX)),
                    (s = i.max(-r[a].offsetTop, this.maxScrollY)),
                    (n = c - i.round(r[a].offsetWidth / 2)),
                    (o = s - i.round(r[a].offsetHeight / 2)),
                    (this.pages[l][e] = {
                      x: c,
                      y: s,
                      width: r[a].offsetWidth,
                      height: r[a].offsetHeight,
                      cx: n,
                      cy: o,
                    }),
                    c > this.maxScrollX && l++;
              this.goToPage(
                this.currentPage.pageX || 0,
                this.currentPage.pageY || 0,
                0
              ),
                this.options.snapThreshold % 1 == 0
                  ? ((this.snapThresholdX = this.options.snapThreshold),
                    (this.snapThresholdY = this.options.snapThreshold))
                  : ((this.snapThresholdX = i.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .width * this.options.snapThreshold
                    )),
                    (this.snapThresholdY = i.round(
                      this.pages[this.currentPage.pageX][this.currentPage.pageY]
                        .height * this.options.snapThreshold
                    )));
            }
          }),
          this.on("flick", function () {
            var t =
              this.options.snapSpeed ||
              i.max(
                i.max(
                  i.min(i.abs(this.x - this.startX), 1e3),
                  i.min(i.abs(this.y - this.startY), 1e3)
                ),
                300
              );
            this.goToPage(
              this.currentPage.pageX + this.directionX,
              this.currentPage.pageY + this.directionY,
              t
            );
          });
      },
      _nearestSnap: function (t, e) {
        if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
        var n = 0,
          o = this.pages.length,
          s = 0;
        if (
          i.abs(t - this.absStartX) < this.snapThresholdX &&
          i.abs(e - this.absStartY) < this.snapThresholdY
        )
          return this.currentPage;
        for (
          0 < t ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
            0 < e ? (e = 0) : e < this.maxScrollY && (e = this.maxScrollY);
          n < o;
          n++
        )
          if (t >= this.pages[n][0].cx) {
            t = this.pages[n][0].x;
            break;
          }
        for (o = this.pages[n].length; s < o; s++)
          if (e >= this.pages[0][s].cy) {
            e = this.pages[0][s].y;
            break;
          }
        return (
          n == this.currentPage.pageX &&
            ((n += this.directionX) < 0
              ? (n = 0)
              : n >= this.pages.length && (n = this.pages.length - 1),
            (t = this.pages[n][0].x)),
          s == this.currentPage.pageY &&
            ((s += this.directionY) < 0
              ? (s = 0)
              : s >= this.pages[0].length && (s = this.pages[0].length - 1),
            (e = this.pages[0][s].y)),
          { x: t, y: e, pageX: n, pageY: s }
        );
      },
      goToPage: function (t, e, n, o) {
        (o = o || this.options.bounceEasing),
          t >= this.pages.length
            ? (t = this.pages.length - 1)
            : t < 0 && (t = 0),
          e >= this.pages[t].length
            ? (e = this.pages[t].length - 1)
            : e < 0 && (e = 0);
        var s = this.pages[t][e].x,
          r = this.pages[t][e].y;
        (n =
          void 0 === n
            ? this.options.snapSpeed ||
              i.max(
                i.max(
                  i.min(i.abs(s - this.x), 1e3),
                  i.min(i.abs(r - this.y), 1e3)
                ),
                300
              )
            : n),
          (this.currentPage = { x: s, y: r, pageX: t, pageY: e }),
          this.scrollTo(s, r, n, o);
      },
      next: function (t, e) {
        var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
        ++i >= this.pages.length && this.hasVerticalScroll && ((i = 0), n++),
          this.goToPage(i, n, t, e);
      },
      prev: function (t, e) {
        var i = this.currentPage.pageX,
          n = this.currentPage.pageY;
        --i < 0 && this.hasVerticalScroll && ((i = 0), n--),
          this.goToPage(i, n, t, e);
      },
      _initKeys: function (e) {
        var i,
          n = {
            pageUp: 33,
            pageDown: 34,
            end: 35,
            home: 36,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
          };
        if ("object" == typeof this.options.keyBindings)
          for (i in this.options.keyBindings)
            "string" == typeof this.options.keyBindings[i] &&
              (this.options.keyBindings[i] = this.options.keyBindings[i]
                .toUpperCase()
                .charCodeAt(0));
        else this.options.keyBindings = {};
        for (i in n)
          this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
        o.addEvent(t, "keydown", this),
          this.on("destroy", function () {
            o.removeEvent(t, "keydown", this);
          });
      },
      _key: function (t) {
        if (this.enabled) {
          var e,
            n = this.options.snap,
            s = n ? this.currentPage.pageX : this.x,
            r = n ? this.currentPage.pageY : this.y,
            a = o.getTime(),
            l = this.keyTime || 0;
          switch (
            (this.options.useTransition &&
              this.isInTransition &&
              ((e = this.getComputedPosition()),
              this._translate(i.round(e.x), i.round(e.y)),
              (this.isInTransition = !1)),
            (this.keyAcceleration =
              a - l < 200 ? i.min(this.keyAcceleration + 0.25, 50) : 0),
            t.keyCode)
          ) {
            case this.options.keyBindings.pageUp:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (s += n ? 1 : this.wrapperWidth)
                : (r += n ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.pageDown:
              this.hasHorizontalScroll && !this.hasVerticalScroll
                ? (s -= n ? 1 : this.wrapperWidth)
                : (r -= n ? 1 : this.wrapperHeight);
              break;
            case this.options.keyBindings.end:
              (s = n ? this.pages.length - 1 : this.maxScrollX),
                (r = n ? this.pages[0].length - 1 : this.maxScrollY);
              break;
            case this.options.keyBindings.home:
              r = s = 0;
              break;
            case this.options.keyBindings.left:
              s += n ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.up:
              r += n ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.right:
              s -= n ? -1 : (5 + this.keyAcceleration) >> 0;
              break;
            case this.options.keyBindings.down:
              r -= n ? 1 : (5 + this.keyAcceleration) >> 0;
              break;
            default:
              return;
          }
          n
            ? this.goToPage(s, r)
            : (0 < s
                ? ((s = 0), (this.keyAcceleration = 0))
                : s < this.maxScrollX &&
                  ((s = this.maxScrollX), (this.keyAcceleration = 0)),
              0 < r
                ? ((r = 0), (this.keyAcceleration = 0))
                : r < this.maxScrollY &&
                  ((r = this.maxScrollY), (this.keyAcceleration = 0)),
              this.scrollTo(s, r, 0),
              (this.keyTime = a));
        }
      },
      _animate: function (t, e, i, s) {
        var r = this,
          a = this.x,
          l = this.y,
          c = o.getTime(),
          h = c + i;
        (this.isAnimating = !0),
          (function u() {
            var p,
              d,
              f,
              v = o.getTime();
            if (h <= v)
              return (
                (r.isAnimating = !1),
                r._translate(t, e),
                void (
                  r.resetPosition(r.options.bounceTime) ||
                  r._execEvent("scrollEnd")
                )
              );
            (f = s((v = (v - c) / i))),
              (p = (t - a) * f + a),
              (d = (e - l) * f + l),
              r._translate(p, d),
              r.isAnimating && n(u);
          })();
      },
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
            break;
          case "orientationchange":
          case "resize":
            this._resize();
            break;
          case "transitionend":
          case "webkitTransitionEnd":
          case "oTransitionEnd":
          case "MSTransitionEnd":
            this._transitionEnd(t);
            break;
          case "wheel":
          case "DOMMouseScroll":
          case "mousewheel":
            this._wheel(t);
            break;
          case "keydown":
            this._key(t);
            break;
          case "click":
            this.enabled &&
              !t._constructed &&
              (t.preventDefault(), t.stopPropagation());
        }
      },
    }),
      (a.prototype = {
        handleEvent: function (t) {
          switch (t.type) {
            case "touchstart":
            case "pointerdown":
            case "MSPointerDown":
            case "mousedown":
              this._start(t);
              break;
            case "touchmove":
            case "pointermove":
            case "MSPointerMove":
            case "mousemove":
              this._move(t);
              break;
            case "touchend":
            case "pointerup":
            case "MSPointerUp":
            case "mouseup":
            case "touchcancel":
            case "pointercancel":
            case "MSPointerCancel":
            case "mousecancel":
              this._end(t);
          }
        },
        destroy: function () {
          this.options.fadeScrollbars &&
            (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
            this.options.interactive &&
              (o.removeEvent(this.indicator, "touchstart", this),
              o.removeEvent(
                this.indicator,
                o.prefixPointerEvent("pointerdown"),
                this
              ),
              o.removeEvent(this.indicator, "mousedown", this),
              o.removeEvent(t, "touchmove", this),
              o.removeEvent(t, o.prefixPointerEvent("pointermove"), this),
              o.removeEvent(t, "mousemove", this),
              o.removeEvent(t, "touchend", this),
              o.removeEvent(t, o.prefixPointerEvent("pointerup"), this),
              o.removeEvent(t, "mouseup", this)),
            this.options.defaultScrollbars &&
              this.wrapper.parentNode.removeChild(this.wrapper);
        },
        _start: function (e) {
          var i = e.touches ? e.touches[0] : e;
          e.preventDefault(),
            e.stopPropagation(),
            this.transitionTime(),
            (this.initiated = !0),
            (this.moved = !1),
            (this.lastPointX = i.pageX),
            (this.lastPointY = i.pageY),
            (this.startTime = o.getTime()),
            this.options.disableTouch || o.addEvent(t, "touchmove", this),
            this.options.disablePointer ||
              o.addEvent(t, o.prefixPointerEvent("pointermove"), this),
            this.options.disableMouse || o.addEvent(t, "mousemove", this),
            this.scroller._execEvent("beforeScrollStart");
        },
        _move: function (t) {
          var e,
            i,
            n,
            s,
            r = t.touches ? t.touches[0] : t;
          o.getTime(),
            this.moved || this.scroller._execEvent("scrollStart"),
            (this.moved = !0),
            (e = r.pageX - this.lastPointX),
            (this.lastPointX = r.pageX),
            (i = r.pageY - this.lastPointY),
            (this.lastPointY = r.pageY),
            (n = this.x + e),
            (s = this.y + i),
            this._pos(n, s),
            t.preventDefault(),
            t.stopPropagation();
        },
        _end: function (e) {
          if (this.initiated) {
            if (
              ((this.initiated = !1),
              e.preventDefault(),
              e.stopPropagation(),
              o.removeEvent(t, "touchmove", this),
              o.removeEvent(t, o.prefixPointerEvent("pointermove"), this),
              o.removeEvent(t, "mousemove", this),
              this.scroller.options.snap)
            ) {
              var n = this.scroller._nearestSnap(
                  this.scroller.x,
                  this.scroller.y
                ),
                s =
                  this.options.snapSpeed ||
                  i.max(
                    i.max(
                      i.min(i.abs(this.scroller.x - n.x), 1e3),
                      i.min(i.abs(this.scroller.y - n.y), 1e3)
                    ),
                    300
                  );
              (this.scroller.x == n.x && this.scroller.y == n.y) ||
                ((this.scroller.directionX = 0),
                (this.scroller.directionY = 0),
                (this.scroller.currentPage = n),
                this.scroller.scrollTo(
                  n.x,
                  n.y,
                  s,
                  this.scroller.options.bounceEasing
                ));
            }
            this.moved && this.scroller._execEvent("scrollEnd");
          }
        },
        transitionTime: function (t) {
          t = t || 0;
          var e = o.style.transitionDuration;
          if (
            e &&
            ((this.indicatorStyle[e] = t + "ms"), !t && o.isBadAndroid)
          ) {
            this.indicatorStyle[e] = "0.0001ms";
            var i = this;
            n(function () {
              "0.0001ms" === i.indicatorStyle[e] &&
                (i.indicatorStyle[e] = "0s");
            });
          }
        },
        transitionTimingFunction: function (t) {
          this.indicatorStyle[o.style.transitionTimingFunction] = t;
        },
        refresh: function () {
          this.transitionTime(),
            this.options.listenX && !this.options.listenY
              ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                  ? "block"
                  : "none")
              : this.options.listenY && !this.options.listenX
              ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                  ? "block"
                  : "none")
              : (this.indicatorStyle.display =
                  this.scroller.hasHorizontalScroll ||
                  this.scroller.hasVerticalScroll
                    ? "block"
                    : "none"),
            this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
              ? (o.addClass(this.wrapper, "iScrollBothScrollbars"),
                o.removeClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "8px")
                    : (this.wrapper.style.bottom = "8px")))
              : (o.removeClass(this.wrapper, "iScrollBothScrollbars"),
                o.addClass(this.wrapper, "iScrollLoneScrollbar"),
                this.options.defaultScrollbars &&
                  this.options.customStyle &&
                  (this.options.listenX
                    ? (this.wrapper.style.right = "2px")
                    : (this.wrapper.style.bottom = "2px"))),
            this.wrapper.offsetHeight,
            this.options.listenX &&
              ((this.wrapperWidth = this.wrapper.clientWidth),
              this.options.resize
                ? ((this.indicatorWidth = i.max(
                    i.round(
                      (this.wrapperWidth * this.wrapperWidth) /
                        (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.width = this.indicatorWidth + "px"))
                : (this.indicatorWidth = this.indicator.clientWidth),
              (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
              "clip" == this.options.shrink
                ? ((this.minBoundaryX = 8 - this.indicatorWidth),
                  (this.maxBoundaryX = this.wrapperWidth - 8))
                : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
              (this.sizeRatioX =
                this.options.speedRatioX ||
                (this.scroller.maxScrollX &&
                  this.maxPosX / this.scroller.maxScrollX))),
            this.options.listenY &&
              ((this.wrapperHeight = this.wrapper.clientHeight),
              this.options.resize
                ? ((this.indicatorHeight = i.max(
                    i.round(
                      (this.wrapperHeight * this.wrapperHeight) /
                        (this.scroller.scrollerHeight ||
                          this.wrapperHeight ||
                          1)
                    ),
                    8
                  )),
                  (this.indicatorStyle.height = this.indicatorHeight + "px"))
                : (this.indicatorHeight = this.indicator.clientHeight),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              "clip" == this.options.shrink
                ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                  (this.maxBoundaryY = this.wrapperHeight - 8))
                : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
              (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
              (this.sizeRatioY =
                this.options.speedRatioY ||
                (this.scroller.maxScrollY &&
                  this.maxPosY / this.scroller.maxScrollY))),
            this.updatePosition();
        },
        updatePosition: function () {
          var t =
              (this.options.listenX &&
                i.round(this.sizeRatioX * this.scroller.x)) ||
              0,
            e =
              (this.options.listenY &&
                i.round(this.sizeRatioY * this.scroller.y)) ||
              0;
          this.options.ignoreBoundaries ||
            (t < this.minBoundaryX
              ? ("scale" == this.options.shrink &&
                  ((this.width = i.max(this.indicatorWidth + t, 8)),
                  (this.indicatorStyle.width = this.width + "px")),
                (t = this.minBoundaryX))
              : t > this.maxBoundaryX
              ? (t =
                  "scale" == this.options.shrink
                    ? ((this.width = i.max(
                        this.indicatorWidth - (t - this.maxPosX),
                        8
                      )),
                      (this.indicatorStyle.width = this.width + "px"),
                      this.maxPosX + this.indicatorWidth - this.width)
                    : this.maxBoundaryX)
              : "scale" == this.options.shrink &&
                this.width != this.indicatorWidth &&
                ((this.width = this.indicatorWidth),
                (this.indicatorStyle.width = this.width + "px")),
            e < this.minBoundaryY
              ? ("scale" == this.options.shrink &&
                  ((this.height = i.max(this.indicatorHeight + 3 * e, 8)),
                  (this.indicatorStyle.height = this.height + "px")),
                (e = this.minBoundaryY))
              : e > this.maxBoundaryY
              ? (e =
                  "scale" == this.options.shrink
                    ? ((this.height = i.max(
                        this.indicatorHeight - 3 * (e - this.maxPosY),
                        8
                      )),
                      (this.indicatorStyle.height = this.height + "px"),
                      this.maxPosY + this.indicatorHeight - this.height)
                    : this.maxBoundaryY)
              : "scale" == this.options.shrink &&
                this.height != this.indicatorHeight &&
                ((this.height = this.indicatorHeight),
                (this.indicatorStyle.height = this.height + "px"))),
            (this.x = t),
            (this.y = e),
            this.scroller.options.useTransform
              ? (this.indicatorStyle[o.style.transform] =
                  "translate(" +
                  t +
                  "px," +
                  e +
                  "px)" +
                  this.scroller.translateZ)
              : ((this.indicatorStyle.left = t + "px"),
                (this.indicatorStyle.top = e + "px"));
        },
        _pos: function (t, e) {
          t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
            e < 0 ? (e = 0) : e > this.maxPosY && (e = this.maxPosY),
            (t = this.options.listenX
              ? i.round(t / this.sizeRatioX)
              : this.scroller.x),
            (e = this.options.listenY
              ? i.round(e / this.sizeRatioY)
              : this.scroller.y),
            this.scroller.scrollTo(t, e);
        },
        fade: function (t, e) {
          if (!e || this.visible) {
            clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
            var i = t ? 250 : 500,
              n = t ? 0 : 300;
            (t = t ? "1" : "0"),
              (this.wrapperStyle[o.style.transitionDuration] = i + "ms"),
              (this.fadeTimeout = setTimeout(
                function (t) {
                  (this.wrapperStyle.opacity = t), (this.visible = +t);
                }.bind(this, t),
                n
              ));
          }
        },
      }),
      (s.utils = o),
      "undefined" != typeof module && module.exports
        ? (module.exports = s)
        : "function" == typeof define && define.amd
        ? (define(function () {
            return s;
          }),
          void 0 !== t && (t.IScroll = s))
        : (t.IScroll = s);
  })(window, document, Math),
  (function (t, e) {
    t.fp_scrolloverflow = (function () {
      t.IScroll || (t.IScroll = module.exports);
      var i = "fp-scrollable",
        n = "." + i,
        o = ".fp-section",
        s = o + ".active",
        r = ".fp-slide",
        a = ".fp-tableCell";
      (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this);
        });
      var l = null,
        c = null,
        h = {
          refreshId: null,
          iScrollInstances: [],
          lastScrollY: null,
          hasBeenInit: !1,
          iscrollOptions: {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0,
          },
          init: function (i) {
            (l = fp_utils.$), (c = i);
            var n =
              "ontouchstart" in t ||
              0 < navigator.msMaxTouchPoints ||
              navigator.maxTouchPoints;
            return (
              (h.iscrollOptions.click = n),
              (h.hasBeenInit = !0),
              (h.iscrollOptions = fp_utils.deepExtend(
                h.iscrollOptions,
                i.scrollOverflowOptions
              )),
              new (function () {
                var i = this;
                function n() {
                  fp_utils.hasClass(e.body, "fp-responsive") ? c(h) : c(s);
                }
                function s(t) {
                  if (!fp_utils.hasClass(t, "fp-noscroll")) {
                    fp_utils.css(t, { overflow: "hidden" });
                    var e,
                      n,
                      s,
                      r = i.options.scrollOverflowHandler,
                      c = r.wrapContent(),
                      h = fp_utils.closest(t, o),
                      u = r.scrollable(t),
                      p =
                        ((n = h),
                        null != (s = fp_utils.closest(n, o))
                          ? parseInt(getComputedStyle(s)["padding-bottom"]) +
                            parseInt(getComputedStyle(s)["padding-top"])
                          : 0);
                    null != u
                      ? (e = r.scrollHeight(t))
                      : ((e = t.scrollHeight),
                        i.options.verticalCentered &&
                          (e = l(a, t)[0].scrollHeight));
                    var d = fp_utils.getWindowHeight(),
                      f = d - p;
                    d < e + p
                      ? null != u
                        ? r.update(t, f)
                        : (i.options.verticalCentered
                            ? (fp_utils.wrapInner(l(a, t)[0], c.scroller),
                              fp_utils.wrapInner(l(a, t)[0], c.scrollable))
                            : (fp_utils.wrapInner(t, c.scroller),
                              fp_utils.wrapInner(t, c.scrollable)),
                          r.create(t, f, i.iscrollOptions))
                      : r.remove(t),
                      fp_utils.css(t, { overflow: "" });
                  }
                }
                function c(t) {
                  l(o).forEach(function (e) {
                    var i = l(r, e);
                    i.length
                      ? i.forEach(function (e) {
                          t(e);
                        })
                      : t(e);
                  });
                }
                function h(t) {
                  var e = i.options.scrollOverflowHandler;
                  fp_utils.hasClass(
                    fp_utils.closest(t, o),
                    "fp-auto-height-responsive"
                  ) && e.remove(t);
                }
                (i.options = null),
                  (i.init = function (o, s) {
                    return (
                      (i.options = o),
                      (i.iscrollOptions = s),
                      "complete" === e.readyState &&
                        (n(), fullpage_api.shared.afterRenderActions()),
                      t.addEventListener("load", function () {
                        n(), fullpage_api.shared.afterRenderActions();
                      }),
                      i
                    );
                  }),
                  (i.createScrollBarForAll = n),
                  (i.createScrollBar = s);
              })().init(i, h.iscrollOptions)
            );
          },
          toggleWheel: function (t) {
            l(n, l(s)[0]).forEach(function (e) {
              var i = e.fp_iscrollInstance;
              null != i && (t ? i.wheelOn() : i.wheelOff());
            });
          },
          setIscroll: function (t, e) {
            if (h.hasBeenInit) {
              var i = fp_utils.closest(t, n) || (l(n, t) && l(n, t)[0]),
                o = e ? "enable" : "disable";
              i && i.fp_iscrollInstance[o]();
            }
          },
          onLeave: function () {
            h.toggleWheel(!1);
          },
          beforeLeave: function () {
            h.onLeave();
          },
          afterLoad: function () {
            h.toggleWheel(!0);
          },
          create: function (t, e, i) {
            l(n, t).forEach(function (n) {
              fp_utils.css(n, { height: e + "px" });
              var s = n.fp_iscrollInstance;
              null != s &&
                h.iScrollInstances.forEach(function (t) {
                  t.destroy();
                }),
                (s = new IScroll(n, i)),
                h.iScrollInstances.push(s),
                fp_utils.hasClass(fp_utils.closest(t, o), "active") ||
                  s.wheelOff(),
                (n.fp_iscrollInstance = s);
            });
          },
          isScrolled: function (t, e) {
            var i = e.fp_iscrollInstance;
            if (!i) return !0;
            if ("top" === t) return 0 <= i.y && !fp_utils.getScrollTop(e);
            if ("bottom" === t) {
              var n = h.lastScrollY === i.y;
              return (
                (h.lastScrollY = i.y),
                (n ? 1 : 0) +
                  (0 - i.y) +
                  fp_utils.getScrollTop(e) +
                  e.offsetHeight >=
                  e.scrollHeight
              );
            }
          },
          scrollable: function (t) {
            return l(".fp-slides", t).length
              ? l(n, l(".fp-slide.active", t)[0])[0]
              : l(n, t)[0];
          },
          scrollHeight: function (t) {
            return l(".fp-scroller", l(n, t)[0])[0].scrollHeight;
          },
          remove: function (t) {
            if (null != t) {
              var e = l(n, t)[0];
              if (null != e) {
                var i = e.fp_iscrollInstance;
                null != i && i.destroy(),
                  (e.fp_iscrollInstance = null),
                  fp_utils.unwrap(l(".fp-scroller", t)[0]),
                  fp_utils.unwrap(l(n, t)[0]);
              }
            }
          },
          update: function (t, e) {
            clearTimeout(h.refreshId),
              (h.refreshId = setTimeout(function () {
                h.iScrollInstances.forEach(function (t) {
                  t.refresh(),
                    fullpage_api.silentMoveTo(fp_utils.index(l(s)[0]) + 1);
                });
              }, 150)),
              fp_utils.css(l(n, t)[0], { height: e + "px" }),
              c.verticalCentered &&
                fp_utils.css(l(n, t)[0].parentNode, { height: e + "px" });
          },
          wrapContent: function () {
            var t = e.createElement("div");
            t.className = i;
            var n = e.createElement("div");
            return (
              (n.className = "fp-scroller"), { scrollable: t, scroller: n }
            );
          },
        };
      return { iscrollHandler: h };
    })();
  })(window, document),
  (function (t, e, i, n, o) {
    "function" == typeof define && define.amd
      ? define(function () {
          return (t.fullpage = n(e, i)), t.fullpage;
        })
      : "object" == typeof exports
      ? (module.exports = n(e, i))
      : (e.fullpage = n(e, i));
  })(this, window, document, function (t, e) {
    "use strict";
    var i = "fullpage-wrapper",
      n = "." + i,
      o = "fp-responsive",
      s = "fp-notransition",
      r = "fp-destroyed",
      a = "fp-enabled",
      l = "fp-viewing",
      c = "active",
      h = "." + c,
      u = "fp-completely",
      p = "fp-section",
      d = "." + p,
      f = d + h,
      v = "fp-tableCell",
      m = "." + v,
      g = "fp-auto-height",
      y = "fp-normal-scroll",
      S = "#fp-nav",
      w = "fp-slide",
      b = "." + w,
      x = b + h,
      E = "fp-slides",
      T = "." + E,
      k = "fp-slidesContainer",
      P = "." + k,
      L = "fp-table",
      M = "fp-slidesNav",
      _ = "." + M,
      I = _ + " a",
      Y = ".fp-controlArrow",
      X = "fp-prev",
      A = Y + ".fp-prev",
      O = Y + ".fp-next";
    function H(e, i) {
      t.console && t.console[e] && t.console[e]("fullPage: " + i);
    }
    function B(t, i) {
      return (i = 1 < arguments.length ? i : e) ? i.querySelectorAll(t) : null;
    }
    function C(t) {
      t = t || {};
      for (var e = 1, i = arguments.length; e < i; ++e) {
        var n = arguments[e];
        if (n)
          for (var o in n)
            n.hasOwnProperty(o) &&
              ("[object Object]" !== Object.prototype.toString.call(n[o])
                ? (t[o] = n[o])
                : (t[o] = C(t[o], n[o])));
      }
      return t;
    }
    function z(t, e) {
      return (
        null != t &&
        (t.classList
          ? t.classList.contains(e)
          : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className))
      );
    }
    function W() {
      return "innerHeight" in t
        ? t.innerHeight
        : e.documentElement.offsetHeight;
    }
    function D() {
      return t.innerWidth;
    }
    function R(t, e) {
      var i;
      for (i in ((t = K(t)), e))
        if (e.hasOwnProperty(i) && null !== i)
          for (var n = 0; n < t.length; n++) t[n].style[i] = e[i];
      return t;
    }
    function N(t, e, i) {
      for (var n = t[i]; n && !vt(n, e); ) n = n[i];
      return n;
    }
    function j(t, e) {
      return N(t, e, "previousElementSibling");
    }
    function V(t, e) {
      return N(t, e, "nextElementSibling");
    }
    function F(t) {
      return t.previousElementSibling;
    }
    function $(t) {
      return t.nextElementSibling;
    }
    function q(t) {
      return t[t.length - 1];
    }
    function U(t, e) {
      t = G(t) ? t[0] : t;
      for (
        var i = null != e ? B(e, t.parentNode) : t.parentNode.childNodes,
          n = 0,
          o = 0;
        o < i.length;
        o++
      ) {
        if (i[o] == t) return n;
        1 == i[o].nodeType && n++;
      }
      return -1;
    }
    function K(t) {
      return G(t) ? t : [t];
    }
    function Q(t) {
      t = K(t);
      for (var e = 0; e < t.length; e++) t[e].style.display = "none";
      return t;
    }
    function Z(t) {
      t = K(t);
      for (var e = 0; e < t.length; e++) t[e].style.display = "block";
      return t;
    }
    function G(t) {
      return (
        "[object Array]" === Object.prototype.toString.call(t) ||
        "[object NodeList]" === Object.prototype.toString.call(t)
      );
    }
    function J(t, e) {
      t = K(t);
      for (var i = 0; i < t.length; i++) {
        var n = t[i];
        n.classList ? n.classList.add(e) : (n.className += " " + e);
      }
      return t;
    }
    function tt(t, e) {
      t = K(t);
      for (var i = e.split(" "), n = 0; n < i.length; n++) {
        e = i[n];
        for (var o = 0; o < t.length; o++) {
          var s = t[o];
          s.classList
            ? s.classList.remove(e)
            : (s.className = s.className.replace(
                new RegExp(
                  "(^|\\b)" + e.split(" ").join("|") + "(\\b|$)",
                  "gi"
                ),
                " "
              ));
        }
      }
      return t;
    }
    function et(t, e) {
      e.appendChild(t);
    }
    function it(t, i, n) {
      var o;
      i = i || e.createElement("div");
      for (var s = 0; s < t.length; s++) {
        var r = t[s];
        ((n && !s) || !n) &&
          ((o = i.cloneNode(!0)), r.parentNode.insertBefore(o, r)),
          o.appendChild(r);
      }
      return t;
    }
    function nt(t, e) {
      it(t, e, !0);
    }
    function ot(t, e) {
      for (
        "string" == typeof e && (e = gt(e)), t.appendChild(e);
        t.firstChild !== e;

      )
        e.appendChild(t.firstChild);
    }
    function st(t) {
      for (var i = e.createDocumentFragment(); t.firstChild; )
        i.appendChild(t.firstChild);
      t.parentNode.replaceChild(i, t);
    }
    function rt(t, e) {
      return t && 1 === t.nodeType
        ? vt(t, e)
          ? t
          : rt(t.parentNode, e)
        : null;
    }
    function at(t, e) {
      ct(t, t.nextSibling, e);
    }
    function lt(t, e) {
      ct(t, t, e);
    }
    function ct(t, e, i) {
      G(i) || ("string" == typeof i && (i = gt(i)), (i = [i]));
      for (var n = 0; n < i.length; n++) t.parentNode.insertBefore(i[n], e);
    }
    function ht() {
      var i = e.documentElement;
      return (t.pageYOffset || i.scrollTop) - (i.clientTop || 0);
    }
    function ut(t) {
      return Array.prototype.filter.call(t.parentNode.children, function (e) {
        return e !== t;
      });
    }
    function pt(t) {
      t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
    }
    function dt(t) {
      if ("function" == typeof t) return !0;
      var e = Object.prototype.toString(t);
      return "[object Function]" === e || "[object GeneratorFunction]" === e;
    }
    function ft(i, n, o) {
      var s;
      (o = void 0 === o ? {} : o),
        "function" == typeof t.CustomEvent
          ? (s = new CustomEvent(n, { detail: o }))
          : (s = e.createEvent("CustomEvent")).initCustomEvent(n, !0, !0, o),
        i.dispatchEvent(s);
    }
    function vt(t, e) {
      return (
        t.matches ||
        t.matchesSelector ||
        t.msMatchesSelector ||
        t.mozMatchesSelector ||
        t.webkitMatchesSelector ||
        t.oMatchesSelector
      ).call(t, e);
    }
    function mt(t, e) {
      if ("boolean" == typeof e)
        for (var i = 0; i < t.length; i++)
          t[i].style.display = e ? "block" : "none";
      return t;
    }
    function gt(t) {
      var i = e.createElement("div");
      return (i.innerHTML = t.trim()), i.firstChild;
    }
    function yt(t) {
      t = K(t);
      for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i && i.parentElement && i.parentNode.removeChild(i);
      }
    }
    function St(t, e, i) {
      for (var n = t[i], o = []; n; )
        (vt(n, e) || null == e) && o.push(n), (n = n[i]);
      return o;
    }
    function wt(t, e) {
      return St(t, e, "nextElementSibling");
    }
    function bt(t, e) {
      return St(t, e, "previousElementSibling");
    }
    return (
      t.NodeList &&
        !NodeList.prototype.forEach &&
        (NodeList.prototype.forEach = function (e, i) {
          i = i || t;
          for (var n = 0; n < this.length; n++) e.call(i, this[n], n, this);
        }),
      (t.fp_utils = {
        $: B,
        deepExtend: C,
        hasClass: z,
        getWindowHeight: W,
        css: R,
        until: N,
        prevUntil: j,
        nextUntil: V,
        prev: F,
        next: $,
        last: q,
        index: U,
        getList: K,
        hide: Q,
        show: Z,
        isArrayOrList: G,
        addClass: J,
        removeClass: tt,
        appendTo: et,
        wrap: it,
        wrapAll: nt,
        wrapInner: ot,
        unwrap: st,
        closest: rt,
        after: at,
        before: lt,
        insertBefore: ct,
        getScrollTop: ht,
        siblings: ut,
        preventDefault: pt,
        isFunction: dt,
        trigger: ft,
        matches: vt,
        toggle: mt,
        createElementFromHTML: gt,
        remove: yt,
        filter: function (t, e) {
          Array.prototype.filter.call(t, e);
        },
        untilAll: St,
        nextAll: wt,
        prevAll: bt,
        showError: H,
      }),
      function (N, K) {
        var G =
            (K &&
              new RegExp(
                "([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$"
              ).test(K.licenseKey)) ||
            -1 < e.domain.indexOf("alvarotrigo.com"),
          it = B("html, body"),
          ct = B("html")[0],
          St = B("body")[0];
        if (!z(ct, a)) {
          var xt = {};
          K = C(
            {
              menu: !1,
              anchors: [],
              lockAnchors: !1,
              navigation: !1,
              navigationPosition: "right",
              navigationTooltips: [],
              showActiveTooltip: !1,
              slidesNavigation: !1,
              slidesNavPosition: "bottom",
              scrollBar: !1,
              hybrid: !1,
              css3: !0,
              scrollingSpeed: 700,
              autoScrolling: !0,
              fitToSection: !0,
              fitToSectionDelay: 1e3,
              easing: "easeInOutCubic",
              easingcss3: "ease",
              loopBottom: !1,
              loopTop: !1,
              loopHorizontal: !0,
              continuousVertical: !1,
              continuousHorizontal: !1,
              scrollHorizontally: !1,
              interlockedSlides: !1,
              dragAndMove: !1,
              offsetSections: !1,
              resetSliders: !1,
              fadingEffect: !1,
              normalScrollElements: null,
              scrollOverflow: !1,
              scrollOverflowReset: !1,
              scrollOverflowHandler: t.fp_scrolloverflow
                ? t.fp_scrolloverflow.iscrollHandler
                : null,
              scrollOverflowOptions: null,
              touchSensitivity: 5,
              touchWrapper: "string" == typeof N ? B(N)[0] : N,
              bigSectionsDestination: null,
              keyboardScrolling: !0,
              animateAnchor: !0,
              recordHistory: !0,
              controlArrows: !0,
              controlArrowColor: "#fff",
              verticalCentered: !0,
              sectionsColor: [],
              paddingTop: 0,
              paddingBottom: 0,
              fixedElements: null,
              responsive: 0,
              responsiveWidth: 0,
              responsiveHeight: 0,
              responsiveSlides: !1,
              parallax: !1,
              parallaxOptions: {
                type: "reveal",
                percentage: 62,
                property: "translate",
              },
              cards: !1,
              cardsOptions: {
                perspective: 100,
                fadeContent: !0,
                fadeBackground: !0,
              },
              sectionSelector: ".section",
              slideSelector: ".slide",
              v2compatible: !1,
              afterLoad: null,
              onLeave: null,
              afterRender: null,
              afterResize: null,
              afterReBuild: null,
              afterSlideLoad: null,
              onSlideLeave: null,
              afterResponsive: null,
              lazyLoading: !0,
            },
            K
          );
          var Et,
            Tt,
            kt,
            Pt,
            Lt = !1,
            Mt = navigator.userAgent.match(
              /(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/
            ),
            _t =
              "ontouchstart" in t ||
              0 < navigator.msMaxTouchPoints ||
              navigator.maxTouchPoints,
            It = "string" == typeof N ? B(N)[0] : N,
            Yt = W(),
            Xt = D(),
            At = !1,
            Ot = !0,
            Ht = !0,
            Bt = [],
            Ct = { m: { up: !0, down: !0, left: !0, right: !0 } };
          Ct.k = C({}, Ct.m);
          var zt,
            Wt,
            Dt,
            Rt,
            Nt,
            jt,
            Vt,
            Ft,
            $t,
            qt = t.PointerEvent
              ? { down: "pointerdown", move: "pointermove" }
              : { down: "MSPointerDown", move: "MSPointerMove" },
            Ut = {
              touchmove: "ontouchmove" in t ? "touchmove" : qt.move,
              touchstart: "ontouchstart" in t ? "touchstart" : qt.down,
            },
            Kt =
              'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',
            Qt = !1;
          try {
            var Zt = Object.defineProperty({}, "passive", {
              get: function () {
                Qt = !0;
              },
            });
            t.addEventListener("testPassive", null, Zt),
              t.removeEventListener("testPassive", null, Zt);
          } catch (N) {}
          var Gt,
            Jt,
            te = C({}, K),
            ee = !1,
            ie = !0,
            ne = [
              "parallax",
              "scrollOverflowReset",
              "dragAndMove",
              "offsetSections",
              "fadingEffect",
              "responsiveSlides",
              "continuousHorizontal",
              "interlockedSlides",
              "scrollHorizontally",
              "resetSliders",
              "cards",
            ];
          ji(),
            (t.fp_easings = C(t.fp_easings, {
              easeInOutCubic: function (t, e, i, n) {
                return (t /= n / 2) < 1
                  ? (i / 2) * t * t * t + e
                  : (i / 2) * ((t -= 2) * t * t + 2) + e;
              },
            })),
            It &&
              ((xt.version = "3.0.8"),
              (xt.setAutoScrolling = fe),
              (xt.setRecordHistory = ve),
              (xt.setScrollingSpeed = me),
              (xt.setFitToSection = ge),
              (xt.setLockAnchors = function (t) {
                K.lockAnchors = t;
              }),
              (xt.setMouseWheelScrolling = ye),
              (xt.setAllowScrolling = Se),
              (xt.setKeyboardScrolling = be),
              (xt.moveSectionUp = xe),
              (xt.moveSectionDown = Ee),
              (xt.silentMoveTo = Te),
              (xt.moveTo = ke),
              (xt.moveSlideRight = Pe),
              (xt.moveSlideLeft = Le),
              (xt.fitToSection = We),
              (xt.reBuild = Me),
              (xt.setResponsive = Ie),
              (xt.getFullpageData = function () {
                return K;
              }),
              (xt.destroy = function (i) {
                fe(!1, "internal"),
                  Se(!0),
                  we(!1),
                  be(!1),
                  J(It, r),
                  [Nt, Rt, Wt, jt, Vt, $t, Dt].forEach(function (t) {
                    clearTimeout(t);
                  }),
                  t.removeEventListener("scroll", ze),
                  t.removeEventListener("hashchange", hi),
                  t.removeEventListener("resize", wi),
                  e.removeEventListener("keydown", pi),
                  e.removeEventListener("keyup", di),
                  ["click", "touchstart"].forEach(function (t) {
                    e.removeEventListener(t, Ye);
                  }),
                  [
                    "mouseenter",
                    "touchstart",
                    "mouseleave",
                    "touchend",
                  ].forEach(function (t) {
                    e.removeEventListener(t, Ae, !0);
                  }),
                  i &&
                    (Wi(0),
                    B(
                      "img[data-src], source[data-src], audio[data-src], iframe[data-src]",
                      It
                    ).forEach(function (t) {
                      ei(t, "src");
                    }),
                    B("img[data-srcset]").forEach(function (t) {
                      ei(t, "srcset");
                    }),
                    yt(B(S + ", " + _ + ", " + Y)),
                    R(B(d), {
                      height: "",
                      "background-color": "",
                      padding: "",
                    }),
                    R(B(b), { width: "" }),
                    R(It, {
                      height: "",
                      position: "",
                      "-ms-touch-action": "",
                      "touch-action": "",
                    }),
                    R(it, { overflow: "", height: "" }),
                    tt(ct, a),
                    tt(St, o),
                    St.className.split(/\s+/).forEach(function (t) {
                      0 === t.indexOf(l) && tt(St, t);
                    }),
                    B(d + ", " + b).forEach(function (t) {
                      K.scrollOverflowHandler &&
                        K.scrollOverflow &&
                        K.scrollOverflowHandler.remove(t),
                        tt(t, L + " " + c + " " + u),
                        t.getAttribute("data-fp-styles") &&
                          t.setAttribute(
                            "style",
                            t.getAttribute("data-fp-styles")
                          ),
                        z(t, p) && !ee && t.removeAttribute("data-anchor");
                    }),
                    Ti(It),
                    [m, P, T].forEach(function (t) {
                      B(t, It).forEach(function (t) {
                        st(t);
                      });
                    }),
                    R(It, { "-webkit-transition": "none", transition: "none" }),
                    t.scrollTo(0, 0),
                    [p, w, k].forEach(function (t) {
                      tt(B("." + t), t);
                    }));
              }),
              (xt.getActiveSection = function () {
                return new qi(B(f)[0]);
              }),
              (xt.getActiveSlide = function () {
                return Ge(B(x, B(f)[0])[0]);
              }),
              (xt.test = {
                top: "0px",
                translate3d: "translate3d(0px, 0px, 0px)",
                translate3dH: (function () {
                  for (
                    var t = [], e = 0;
                    e < B(K.sectionSelector, It).length;
                    e++
                  )
                    t.push("translate3d(0px, 0px, 0px)");
                  return t;
                })(),
                left: (function () {
                  for (
                    var t = [], e = 0;
                    e < B(K.sectionSelector, It).length;
                    e++
                  )
                    t.push(0);
                  return t;
                })(),
                options: K,
                setAutoScrolling: fe,
              }),
              (xt.shared = {
                afterRenderActions: Ce,
                isNormalScrollElement: !1,
              }),
              (t.fullpage_api = xt),
              K.$ &&
                Object.keys(xt).forEach(function (t) {
                  K.$.fn.fullpage[t] = xt[t];
                }),
              K.css3 &&
                (K.css3 = (function () {
                  var i,
                    n = e.createElement("p"),
                    o = {
                      webkitTransform: "-webkit-transform",
                      OTransform: "-o-transform",
                      msTransform: "-ms-transform",
                      MozTransform: "-moz-transform",
                      transform: "transform",
                    };
                  for (var s in ((n.style.display = "block"),
                  e.body.insertBefore(n, null),
                  o))
                    void 0 !== n.style[s] &&
                      ((n.style[s] = "translate3d(1px,1px,1px)"),
                      (i = t.getComputedStyle(n).getPropertyValue(o[s])));
                  return (
                    e.body.removeChild(n),
                    void 0 !== i && 0 < i.length && "none" !== i
                  );
                })()),
              (K.scrollBar = K.scrollBar || K.hybrid),
              (function () {
                if (!K.anchors.length) {
                  var t = "[data-anchor]",
                    e = B(K.sectionSelector.split(",").join(t + ",") + t, It);
                  e.length &&
                    ((ee = !0),
                    e.forEach(function (t) {
                      K.anchors.push(t.getAttribute("data-anchor").toString());
                    }));
                }
                if (!K.navigationTooltips.length) {
                  var i = "[data-tooltip]",
                    n = B(K.sectionSelector.split(",").join(i + ",") + i, It);
                  n.length &&
                    n.forEach(function (t) {
                      K.navigationTooltips.push(
                        t.getAttribute("data-tooltip").toString()
                      );
                    });
                }
              })(),
              (function () {
                R(It, { height: "100%", position: "relative" }),
                  J(It, i),
                  J(ct, a),
                  (Yt = W()),
                  tt(It, r),
                  J(B(K.sectionSelector, It), p),
                  J(B(K.slideSelector, It), w);
                for (var t = B(d), o = 0; o < t.length; o++) {
                  var s = o,
                    l = t[o],
                    h = B(b, l),
                    u = h.length;
                  l.setAttribute("data-fp-styles", l.getAttribute("style")),
                    (g = l),
                    (y = s) || null != B(f)[0] || J(g, c),
                    (Pt = B(f)[0]),
                    R(g, { height: Yt + "px" }),
                    K.paddingTop && R(g, { "padding-top": K.paddingTop }),
                    K.paddingBottom &&
                      R(g, { "padding-bottom": K.paddingBottom }),
                    void 0 !== K.sectionsColor[y] &&
                      R(g, { "background-color": K.sectionsColor[y] }),
                    void 0 !== K.anchors[y] &&
                      g.setAttribute("data-anchor", K.anchors[y]),
                    (v = l),
                    (m = s),
                    void 0 !== K.anchors[m] && z(v, c) && ki(K.anchors[m], m),
                    K.menu &&
                      K.css3 &&
                      null != rt(B(K.menu)[0], n) &&
                      B(K.menu).forEach(function (t) {
                        St.appendChild(t);
                      }),
                    0 < u ? He(l, h, u) : K.verticalCentered && Li(l);
                }
                var v, m, g, y;
                K.fixedElements &&
                  K.css3 &&
                  B(K.fixedElements).forEach(function (t) {
                    St.appendChild(t);
                  }),
                  K.navigation &&
                    (function () {
                      var t = e.createElement("div");
                      t.setAttribute("id", "fp-nav");
                      var i = e.createElement("ul");
                      t.appendChild(i), et(t, St);
                      var n = B(S)[0];
                      J(n, "fp-" + K.navigationPosition),
                        K.showActiveTooltip && J(n, "fp-show-active");
                      for (var o = "", s = 0; s < B(d).length; s++) {
                        var r = "";
                        K.anchors.length && (r = K.anchors[s]),
                          (o +=
                            '<li><a href="#' +
                            r +
                            '"><span class="fp-sr-only">' +
                            Be(s, "Section") +
                            "</span><span></span></a>");
                        var a = K.navigationTooltips[s];
                        void 0 !== a &&
                          "" !== a &&
                          (o +=
                            '<div class="fp-tooltip fp-' +
                            K.navigationPosition +
                            '">' +
                            a +
                            "</div>"),
                          (o += "</li>");
                      }
                      (B("ul", n)[0].innerHTML = o),
                        R(B(S), {
                          "margin-top": "-" + B(S)[0].offsetHeight / 2 + "px",
                        }),
                        J(B("a", B("li", B(S)[0])[U(B(f)[0], d)]), c);
                    })(),
                  B('iframe[src*="youtube.com/embed/"]', It).forEach(function (
                    t
                  ) {
                    var e, i, n;
                    (i = "enablejsapi=1"),
                      (n = (e = t).getAttribute("src")),
                      e.setAttribute("src", n + (/\?/.test(n) ? "&" : "?") + i);
                  }),
                  K.scrollOverflow && (zt = K.scrollOverflowHandler.init(K));
              })(),
              Se(!0),
              we(!0),
              fe(K.autoScrolling, "internal"),
              xi(),
              Bi(),
              "complete" === e.readyState && ci(),
              t.addEventListener("load", ci),
              K.scrollOverflow || Ce(),
              (function () {
                for (var t = 1; t < 4; t++) $t = setTimeout(Oe, 350 * t);
              })(),
              t.addEventListener("scroll", ze),
              t.addEventListener("hashchange", hi),
              t.addEventListener("blur", function () {
                kt = Ot = !1;
              }),
              t.addEventListener("resize", wi),
              e.addEventListener("keydown", pi),
              e.addEventListener("keyup", di),
              ["click", "touchstart"].forEach(function (t) {
                e.addEventListener(t, Ye);
              }),
              K.normalScrollElements &&
                (["mouseenter", "touchstart"].forEach(function (t) {
                  Xe(t, !1);
                }),
                ["mouseleave", "touchend"].forEach(function (t) {
                  Xe(t, !0);
                })));
          var oe = !1,
            se = 0,
            re = 0,
            ae = 0,
            le = 0,
            ce = 0,
            he = new Date().getTime(),
            ue = 0,
            pe = 0,
            de = Yt;
          return xt;
        }
        function fe(t, e) {
          t || Wi(0), Ni("autoScrolling", t, e);
          var i = B(f)[0];
          if (K.autoScrolling && !K.scrollBar)
            R(it, { overflow: "hidden", height: "100%" }),
              ve(te.recordHistory, "internal"),
              R(It, { "-ms-touch-action": "none", "touch-action": "none" }),
              null != i && Wi(i.offsetTop);
          else if (
            (R(it, { overflow: "visible", height: "initial" }),
            ve(!!K.autoScrolling && te.recordHistory, "internal"),
            R(It, { "-ms-touch-action": "", "touch-action": "" }),
            null != i)
          ) {
            var n = Je(i.offsetTop);
            n.element.scrollTo(0, n.options);
          }
        }
        function ve(t, e) {
          Ni("recordHistory", t, e);
        }
        function me(t, e) {
          Ni("scrollingSpeed", t, e);
        }
        function ge(t, e) {
          Ni("fitToSection", t, e);
        }
        function ye(i) {
          i
            ? ((function () {
                var i,
                  n = "";
                t.addEventListener
                  ? (i = "addEventListener")
                  : ((i = "attachEvent"), (n = "on"));
                var o =
                    "onwheel" in e.createElement("div")
                      ? "wheel"
                      : void 0 !== e.onmousewheel
                      ? "mousewheel"
                      : "DOMMouseScroll",
                  s = !!Qt && { passive: !1 };
                "DOMMouseScroll" == o
                  ? e[i](n + "MozMousePixelScroll", $e, s)
                  : e[i](n + o, $e, s);
              })(),
              It.addEventListener("mousedown", fi),
              It.addEventListener("mouseup", vi))
            : (e.addEventListener
                ? (e.removeEventListener("mousewheel", $e, !1),
                  e.removeEventListener("wheel", $e, !1),
                  e.removeEventListener("MozMousePixelScroll", $e, !1))
                : e.detachEvent("onmousewheel", $e),
              It.removeEventListener("mousedown", fi),
              It.removeEventListener("mouseup", vi));
        }
        function Se(t, e) {
          void 0 !== e
            ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                Ri(t, e, "m");
              })
            : Ri(t, "all", "m");
        }
        function we(t) {
          t
            ? (ye(!0),
              (function () {
                if (Mt || _t) {
                  K.autoScrolling &&
                    (St.removeEventListener(Ut.touchmove, Re, { passive: !1 }),
                    St.addEventListener(Ut.touchmove, Re, { passive: !1 }));
                  var t = K.touchWrapper;
                  t.removeEventListener(Ut.touchstart, Ve),
                    t.removeEventListener(Ut.touchmove, Ne, { passive: !1 }),
                    t.addEventListener(Ut.touchstart, Ve),
                    t.addEventListener(Ut.touchmove, Ne, { passive: !1 });
                }
              })())
            : (ye(!1),
              (function () {
                if (Mt || _t) {
                  K.autoScrolling &&
                    (St.removeEventListener(Ut.touchmove, Ne, { passive: !1 }),
                    St.removeEventListener(Ut.touchmove, Re, { passive: !1 }));
                  var t = K.touchWrapper;
                  t.removeEventListener(Ut.touchstart, Ve),
                    t.removeEventListener(Ut.touchmove, Ne, { passive: !1 });
                }
              })());
        }
        function be(t, e) {
          void 0 !== e
            ? (e = e.replace(/ /g, "").split(",")).forEach(function (e) {
                Ri(t, e, "k");
              })
            : (Ri(t, "all", "k"), (K.keyboardScrolling = t));
        }
        function xe() {
          var t = j(B(f)[0], d);
          t || (!K.loopTop && !K.continuousVertical) || (t = q(B(d))),
            null != t && Ke(t, null, !0);
        }
        function Ee() {
          var t = V(B(f)[0], d);
          t || (!K.loopBottom && !K.continuousVertical) || (t = B(d)[0]),
            null != t && Ke(t, null, !1);
        }
        function Te(t, e) {
          me(0, "internal"), ke(t, e), me(te.scrollingSpeed, "internal");
        }
        function ke(t, e) {
          var i = Ii(t);
          void 0 !== e ? Yi(t, e) : null != i && Ke(i);
        }
        function Pe(t) {
          qe("right", t);
        }
        function Le(t) {
          qe("left", t);
        }
        function Me(e) {
          if (!z(It, r)) {
            (At = !0), (Yt = W()), (Xt = D());
            for (var i = B(d), n = 0; n < i.length; ++n) {
              var o = i[n],
                s = B(T, o)[0],
                a = B(b, o);
              K.verticalCentered && R(B(m, o), { height: Mi(o) + "px" }),
                R(o, { height: Yt + "px" }),
                1 < a.length && yi(s, B(x, s)[0]);
            }
            K.scrollOverflow && zt.createScrollBarForAll();
            var l = U(B(f)[0], d);
            l && Te(l + 1),
              (At = !1),
              dt(K.afterResize) &&
                e &&
                K.afterResize.call(It, t.innerWidth, t.innerHeight),
              dt(K.afterReBuild) && !e && K.afterReBuild.call(It);
          }
        }
        function _e() {
          return z(St, o);
        }
        function Ie(t) {
          var e = _e();
          t
            ? e ||
              (fe(!1, "internal"),
              ge(!1, "internal"),
              Q(B(S)),
              J(St, o),
              dt(K.afterResponsive) && K.afterResponsive.call(It, t),
              K.scrollOverflow && zt.createScrollBarForAll())
            : e &&
              (fe(te.autoScrolling, "internal"),
              ge(te.autoScrolling, "internal"),
              Z(B(S)),
              tt(St, o),
              dt(K.afterResponsive) && K.afterResponsive.call(It, t));
        }
        function Ye(t) {
          var e = t.target;
          e && rt(e, S + " a")
            ? function (t) {
                pt(t);
                var e = U(rt(this, S + " li"));
                Ke(B(d)[e]);
              }.call(e, t)
            : vt(e, ".fp-tooltip")
            ? function () {
                ft(F(this), "click");
              }.call(e)
            : vt(e, Y)
            ? function () {
                var t = rt(this, d);
                z(this, X) ? Ct.m.left && Le(t) : Ct.m.right && Pe(t);
              }.call(e, t)
            : vt(e, I) || null != rt(e, I)
            ? function (t) {
                pt(t);
                var e = B(T, rt(this, d))[0];
                yi(e, B(b, e)[U(rt(this, "li"))]);
              }.call(e, t)
            : rt(e, K.menu + " [data-menuanchor]") &&
              function (t) {
                !B(K.menu)[0] ||
                  (!K.lockAnchors && K.anchors.length) ||
                  (pt(t), ke(this.getAttribute("data-menuanchor")));
              }.call(e, t);
        }
        function Xe(t, i) {
          (e["fp_" + t] = i), e.addEventListener(t, Ae, !0);
        }
        function Ae(t) {
          var i = t.type,
            n = !1,
            o = K.scrollOverflow,
            s = "mouseleave" === i ? t.toElement || t.relatedTarget : t.target;
          if (s == e || !s)
            return (
              we(!0), void (o && K.scrollOverflowHandler.setIscroll(s, !0))
            );
          "touchend" === i &&
            ((ie = !1),
            setTimeout(function () {
              ie = !0;
            }, 800)),
            ("mouseenter" !== i || ie) &&
              (K.normalScrollElements.split(",").forEach(function (t) {
                if (!n) {
                  var e = vt(s, t),
                    i = rt(s, t);
                  (e || i) &&
                    (xt.shared.isNormalScrollElement ||
                      (we(!1), o && K.scrollOverflowHandler.setIscroll(s, !1)),
                    (xt.shared.isNormalScrollElement = !0),
                    (n = !0));
                }
              }),
              !n &&
                xt.shared.isNormalScrollElement &&
                (we(!0),
                o && K.scrollOverflowHandler.setIscroll(s, !0),
                (xt.shared.isNormalScrollElement = !1)));
        }
        function Oe() {
          var t = W(),
            e = D();
          (Yt === t && Xt === e) || ((Yt = t), (Xt = e), Me(!0));
        }
        function He(t, i, n) {
          var o = 100 * n,
            s = 100 / n,
            r = e.createElement("div");
          (r.className = E), nt(i, r);
          var a,
            l,
            h = e.createElement("div");
          (h.className = k),
            nt(i, h),
            R(B(P, t), { width: o + "%" }),
            1 < n &&
              (K.controlArrows &&
                ((a = t),
                (l = [
                  gt('<div class="fp-controlArrow fp-prev"></div>'),
                  gt('<div class="fp-controlArrow fp-next"></div>'),
                ]),
                at(B(T, a)[0], l),
                "#fff" !== K.controlArrowColor &&
                  (R(B(O, a), {
                    "border-color":
                      "transparent transparent transparent " +
                      K.controlArrowColor,
                  }),
                  R(B(A, a), {
                    "border-color":
                      "transparent " +
                      K.controlArrowColor +
                      " transparent transparent",
                  })),
                K.loopHorizontal || Q(B(A, a))),
              K.slidesNavigation &&
                (function (t, e) {
                  et(gt('<div class="' + M + '"><ul></ul></div>'), t);
                  var i = B(_, t)[0];
                  J(i, "fp-" + K.slidesNavPosition);
                  for (var n = 0; n < e; n++)
                    et(
                      gt(
                        '<li><a href="#"><span class="fp-sr-only">' +
                          Be(n, "Slide") +
                          "</span><span></span></a></li>"
                      ),
                      B("ul", i)[0]
                    );
                  R(i, { "margin-left": "-" + i.innerWidth / 2 + "px" }),
                    J(B("a", B("li", i)[0]), c);
                })(t, n)),
            i.forEach(function (t) {
              R(t, { width: s + "%" }), K.verticalCentered && Li(t);
            });
          var u = B(x, t)[0];
          null != u && (0 !== U(B(f), d) || (0 === U(B(f), d) && 0 !== U(u)))
            ? zi(u, "internal")
            : J(i[0], c);
        }
        function Be(t, e) {
          return K.navigationTooltips[t] || K.anchors[t] || e + " " + (t + 1);
        }
        function Ce() {
          var t,
            e,
            i = B(f)[0];
          J(i, u),
            ni(i),
            ii(),
            si(i),
            K.scrollOverflow && K.scrollOverflowHandler.afterLoad(),
            (e = Ii((t = ui()).section)),
            (t.section && e && (void 0 === e || U(e) !== U(Pt))) ||
              !dt(K.afterLoad) ||
              Qe("afterLoad", {
                activeSection: i,
                element: i,
                direction: null,
                anchorLink: i.getAttribute("data-anchor"),
                sectionIndex: U(i, d),
              }),
            dt(K.afterRender) && Qe("afterRender");
        }
        function ze() {
          var t, e, i, n, o, s;
          if (!K.autoScrolling || K.scrollBar) {
            var r = ht(),
              a = ((s = se < (o = r) ? "down" : "up"), (ue = se = o), s),
              l = 0,
              h = r + W() / 2,
              p = St.offsetHeight - W() === r,
              v = B(d);
            if (p) l = v.length - 1;
            else if (r)
              for (var m = 0; m < v.length; ++m) v[m].offsetTop <= h && (l = m);
            else l = 0;
            if (
              ((e = a),
              (n = (i = B(f)[0].offsetTop) + W()),
              ("up" != e ? i <= ht() : n >= ht() + W()) &&
                (z(B(f)[0], u) || (J(B(f)[0], u), tt(ut(B(f)[0]), u))),
              !z((t = v[l]), c))
            ) {
              oe = !0;
              var g,
                y,
                S = B(f)[0],
                w = U(S, d) + 1,
                b = Pi(t),
                E = t.getAttribute("data-anchor"),
                T = U(t, d) + 1,
                k = B(x, t)[0],
                P = {
                  activeSection: S,
                  sectionIndex: T - 1,
                  anchorLink: E,
                  element: t,
                  leavingSection: w,
                  direction: b,
                };
              k && ((y = k.getAttribute("data-anchor")), (g = U(k))),
                Ht &&
                  (J(t, c),
                  tt(ut(t), c),
                  dt(K.onLeave) && Qe("onLeave", P),
                  dt(K.afterLoad) && Qe("afterLoad", P),
                  ai(S),
                  ni(t),
                  si(t),
                  ki(E, T - 1),
                  K.anchors.length && (Et = E),
                  Ai(g, y, E)),
                clearTimeout(jt),
                (jt = setTimeout(function () {
                  oe = !1;
                }, 100));
            }
            K.fitToSection &&
              (clearTimeout(Vt),
              (Vt = setTimeout(function () {
                K.fitToSection && B(f)[0].offsetHeight <= Yt && We();
              }, K.fitToSectionDelay)));
          }
        }
        function We() {
          Ht && ((At = !0), Ke(B(f)[0]), (At = !1));
        }
        function De(t) {
          if (Ct.m[t]) {
            var e = "down" === t ? Ee : xe;
            if (K.scrollOverflow) {
              var i = K.scrollOverflowHandler.scrollable(B(f)[0]),
                n = "down" === t ? "bottom" : "top";
              if (null != i) {
                if (!K.scrollOverflowHandler.isScrolled(n, i)) return !0;
                e();
              } else e();
            } else e();
          }
        }
        function Re(t) {
          K.autoScrolling && je(t) && Ct.m.up && pt(t);
        }
        function Ne(e) {
          var i = rt(e.target, d) || B(f)[0];
          if (je(e)) {
            K.autoScrolling && pt(e);
            var n = Ci(e);
            (le = n.y),
              (ce = n.x),
              B(T, i).length && Math.abs(ae - ce) > Math.abs(re - le)
                ? !Lt &&
                  Math.abs(ae - ce) > (D() / 100) * K.touchSensitivity &&
                  (ce < ae ? Ct.m.right && Pe(i) : Ct.m.left && Le(i))
                : K.autoScrolling &&
                  Ht &&
                  Math.abs(re - le) >
                    (t.innerHeight / 100) * K.touchSensitivity &&
                  (le < re ? De("down") : re < le && De("up"));
          }
        }
        function je(t) {
          return void 0 === t.pointerType || "mouse" != t.pointerType;
        }
        function Ve(t) {
          if ((K.fitToSection && (Gt = !1), je(t))) {
            var e = Ci(t);
            (re = e.y), (ae = e.x);
          }
        }
        function Fe(t, e) {
          for (
            var i = 0, n = t.slice(Math.max(t.length - e, 1)), o = 0;
            o < n.length;
            o++
          )
            i += n[o];
          return Math.ceil(i / e);
        }
        function $e(e) {
          var i = new Date().getTime(),
            n = z(B(".fp-completely")[0], y);
          if (!Ct.m.down && !Ct.m.up) return pt(e), !1;
          if (K.autoScrolling && !kt && !n) {
            var o = (e = e || t.event).wheelDelta || -e.deltaY || -e.detail,
              s = Math.max(-1, Math.min(1, o)),
              r = void 0 !== e.wheelDeltaX || void 0 !== e.deltaX,
              a =
                Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
                Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
                !r;
            149 < Bt.length && Bt.shift(),
              Bt.push(Math.abs(o)),
              K.scrollBar && pt(e);
            var l = i - he;
            if (((he = i), 200 < l && (Bt = []), Ht)) {
              var c = Fe(Bt, 10);
              Fe(Bt, 70) <= c && a && De(s < 0 ? "down" : "up");
            }
            return !1;
          }
          K.fitToSection && (Gt = !1);
        }
        function qe(t, e) {
          var i = null == e ? B(f)[0] : e,
            n = B(T, i)[0];
          if (!(null == n || Lt || B(b, n).length < 2)) {
            var o = B(x, n)[0],
              s = null;
            if (null == (s = "left" === t ? j(o, b) : V(o, b))) {
              if (!K.loopHorizontal) return;
              var r = ut(o);
              s = "left" === t ? r[r.length - 1] : r[0];
            }
            (Lt = !xt.test.isTesting), yi(n, s, t);
          }
        }
        function Ue() {
          for (var t = B(x), e = 0; e < t.length; e++) zi(t[e], "internal");
        }
        function Ke(t, e, i) {
          if (null != t) {
            var n,
              o,
              s,
              r,
              a,
              l,
              h,
              u,
              p,
              v = {
                element: t,
                callback: e,
                isMovementUp: i,
                dtop:
                  ((o = (n = t).offsetHeight),
                  (s = n.offsetTop),
                  (a = ue < (r = s)),
                  (l = r - Yt + o),
                  (h = K.bigSectionsDestination),
                  Yt < o
                    ? ((a || h) && "bottom" !== h) || (r = l)
                    : (a || (At && null == $(n))) && (r = l),
                  (ue = r)),
                yMovement: Pi(t),
                anchorLink: t.getAttribute("data-anchor"),
                sectionIndex: U(t, d),
                activeSlide: B(x, t)[0],
                activeSection: B(f)[0],
                leavingSection: U(B(f), d) + 1,
                localIsResizing: At,
              };
            if (
              !(
                (v.activeSection == t && !At) ||
                (K.scrollBar && ht() === v.dtop && !z(t, g))
              )
            ) {
              if (
                (null != v.activeSlide &&
                  ((u = v.activeSlide.getAttribute("data-anchor")),
                  (p = U(v.activeSlide))),
                !v.localIsResizing)
              ) {
                var m = v.yMovement;
                if (
                  (void 0 !== i && (m = i ? "up" : "down"),
                  (v.direction = m),
                  dt(K.onLeave) && !1 === Qe("onLeave", v))
                )
                  return;
              }
              K.autoScrolling &&
                K.continuousVertical &&
                void 0 !== v.isMovementUp &&
                ((!v.isMovementUp && "up" == v.yMovement) ||
                  (v.isMovementUp && "down" == v.yMovement)) &&
                ((y = v).isMovementUp
                  ? lt(B(f)[0], wt(y.activeSection, d))
                  : at(B(f)[0], bt(y.activeSection, d).reverse()),
                Wi(B(f)[0].offsetTop),
                Ue(),
                (y.wrapAroundElements = y.activeSection),
                (y.dtop = y.element.offsetTop),
                (y.yMovement = Pi(y.element)),
                (v = y)),
                v.localIsResizing || ai(v.activeSection),
                K.scrollOverflow && K.scrollOverflowHandler.beforeLeave(),
                J(t, c),
                tt(ut(t), c),
                ni(t),
                K.scrollOverflow && K.scrollOverflowHandler.onLeave(),
                (Ht = xt.test.isTesting),
                Ai(p, u, v.anchorLink, v.sectionIndex),
                (function (t) {
                  if (K.css3 && K.autoScrolling && !K.scrollBar) {
                    _i(
                      "translate3d(0px, -" + Math.round(t.dtop) + "px, 0px)",
                      !0
                    ),
                      K.scrollingSpeed
                        ? (clearTimeout(Rt),
                          (Rt = setTimeout(function () {
                            ti(t);
                          }, K.scrollingSpeed)))
                        : ti(t);
                  } else {
                    var e = Je(t.dtop);
                    (xt.test.top = -t.dtop + "px"),
                      Vi(e.element, e.options, K.scrollingSpeed, function () {
                        K.scrollBar
                          ? setTimeout(function () {
                              ti(t);
                            }, 30)
                          : ti(t);
                      });
                  }
                })(v),
                (Et = v.anchorLink),
                ki(v.anchorLink, v.sectionIndex);
            }
          }
          var y;
        }
        function Qe(t, e) {
          var i,
            n,
            o,
            s,
            r =
              ((n = t),
              (o = e),
              (s = K.v2compatible
                ? {
                    afterRender: function () {
                      return [It];
                    },
                    onLeave: function () {
                      return [
                        o.activeSection,
                        o.leavingSection,
                        o.sectionIndex + 1,
                        o.direction,
                      ];
                    },
                    afterLoad: function () {
                      return [o.element, o.anchorLink, o.sectionIndex + 1];
                    },
                    afterSlideLoad: function () {
                      return [
                        o.destiny,
                        o.anchorLink,
                        o.sectionIndex + 1,
                        o.slideAnchor,
                        o.slideIndex,
                      ];
                    },
                    onSlideLeave: function () {
                      return [
                        o.prevSlide,
                        o.anchorLink,
                        o.sectionIndex + 1,
                        o.prevSlideIndex,
                        o.direction,
                        o.slideIndex,
                      ];
                    },
                  }
                : {
                    afterRender: function () {
                      return {
                        section: Ze(B(f)[0]),
                        slide: Ge(B(x, B(f)[0])[0]),
                      };
                    },
                    onLeave: function () {
                      return {
                        origin: Ze(o.activeSection),
                        destination: Ze(o.element),
                        direction: o.direction,
                      };
                    },
                    afterLoad: function () {
                      return s.onLeave();
                    },
                    afterSlideLoad: function () {
                      return {
                        section: Ze(o.section),
                        origin: Ge(o.prevSlide),
                        destination: Ge(o.destiny),
                        direction: o.direction,
                      };
                    },
                    onSlideLeave: function () {
                      return s.afterSlideLoad();
                    },
                  })[n]());
          if (K.v2compatible) {
            if (!1 === K[t].apply(r[0], r.slice(1))) return !1;
          } else if (
            (ft(It, t, r),
            !1 ===
              K[t].apply(
                r[Object.keys(r)[0]],
                ((i = r),
                Object.keys(i).map(function (t) {
                  return i[t];
                }))
              ))
          )
            return !1;
          return !0;
        }
        function Ze(t) {
          return t ? new qi(t) : null;
        }
        function Ge(t) {
          return t
            ? new (function (t) {
                $i.call(this, t, b);
              })(t)
            : null;
        }
        function Je(e) {
          var i = {};
          return (
            K.autoScrolling && !K.scrollBar
              ? ((i.options = -e), (i.element = B(n)[0]))
              : ((i.options = e), (i.element = t)),
            i
          );
        }
        function ti(t) {
          var e;
          null != (e = t).wrapAroundElements &&
            (e.isMovementUp
              ? lt(B(d)[0], e.wrapAroundElements)
              : at(B(d)[B(d).length - 1], e.wrapAroundElements),
            Wi(B(f)[0].offsetTop),
            Ue()),
            dt(K.afterLoad) && !t.localIsResizing && Qe("afterLoad", t),
            K.scrollOverflow && K.scrollOverflowHandler.afterLoad(),
            t.localIsResizing || si(t.element),
            J(t.element, u),
            tt(ut(t.element), u),
            ii(),
            (Ht = !0),
            dt(t.callback) && t.callback();
        }
        function ei(t, e) {
          t.setAttribute(e, t.getAttribute("data-" + e)),
            t.removeAttribute("data-" + e);
        }
        function ii() {
          var t =
            B(".fp-auto-height")[0] ||
            (_e() && B(".fp-auto-height-responsive")[0]);
          K.lazyLoading &&
            t &&
            B(d + ":not(" + h + ")").forEach(function (t) {
              var e, i, n;
              (i = (e = t.getBoundingClientRect()).top),
                (n = e.bottom),
                ((i + 2 < Yt && 0 < i) || (2 < n && n < Yt)) && ni(t);
            });
        }
        function ni(t) {
          K.lazyLoading &&
            B(
              "img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",
              li(t)
            ).forEach(function (e) {
              if (
                (["src", "srcset"].forEach(function (i) {
                  var n = e.getAttribute("data-" + i);
                  null != n &&
                    n &&
                    (ei(e, i),
                    e.addEventListener("load", function () {
                      oi(t);
                    }));
                }),
                vt(e, "source"))
              ) {
                var i = rt(e, "video, audio");
                i &&
                  (i.load(),
                  (i.onloadeddata = function () {
                    oi(t);
                  }));
              }
            });
        }
        function oi(t) {
          K.scrollOverflow &&
            (clearTimeout(Jt),
            (Jt = setTimeout(function () {
              zt.createScrollBar(t);
            }, 200)));
        }
        function si(t) {
          var e = li(t);
          B("video, audio", e).forEach(function (t) {
            t.hasAttribute("data-autoplay") &&
              "function" == typeof t.play &&
              t.play();
          }),
            B('iframe[src*="youtube.com/embed/"]', e).forEach(function (t) {
              t.hasAttribute("data-autoplay") && ri(t),
                (t.onload = function () {
                  t.hasAttribute("data-autoplay") && ri(t);
                });
            });
        }
        function ri(t) {
          t.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
        function ai(t) {
          var e = li(t);
          B("video, audio", e).forEach(function (t) {
            t.hasAttribute("data-keepplaying") ||
              "function" != typeof t.pause ||
              t.pause();
          }),
            B('iframe[src*="youtube.com/embed/"]', e).forEach(function (t) {
              /youtube\.com\/embed\//.test(t.getAttribute("src")) &&
                !t.hasAttribute("data-keepplaying") &&
                t.contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  "*"
                );
            });
        }
        function li(t) {
          var e = B(x, t);
          return e.length && (t = e[0]), t;
        }
        function ci() {
          var t = ui(),
            e = t.section,
            i = t.slide;
          e && (K.animateAnchor ? Yi(e, i) : Te(e, i));
        }
        function hi() {
          if (!oe && !K.lockAnchors) {
            var t = ui(),
              e = t.section,
              i = t.slide,
              n = void 0 === Et,
              o = void 0 === Et && void 0 === i && !Lt;
            e &&
              e.length &&
              ((e && e !== Et && !n) || o || (!Lt && Tt != i)) &&
              Yi(e, i);
          }
        }
        function ui() {
          var e,
            i,
            n = t.location.hash;
          if (n.length) {
            var o = n.replace("#", "").split("/"),
              s = -1 < n.indexOf("#/");
            e = s ? "/" + o[1] : decodeURIComponent(o[0]);
            var r = s ? o[2] : o[1];
            r && r.length && (i = decodeURIComponent(r));
          }
          return { section: e, slide: i };
        }
        function pi(t) {
          clearTimeout(Ft);
          var i = e.activeElement,
            n = t.keyCode;
          9 === n
            ? (function (t) {
                var i,
                  n,
                  o,
                  s,
                  r,
                  a,
                  l = t.shiftKey,
                  c = e.activeElement,
                  h = mi(li(B(f)[0]));
                function u(t) {
                  return pt(t), h[0] ? h[0].focus() : null;
                }
                (i = t),
                  (o = (n = mi(e)).indexOf(e.activeElement)),
                  (r = Ge(rt((s = n[i.shiftKey ? o - 1 : o + 1]), b))),
                  (a = Ze(rt(s, d))),
                  (r || a) &&
                    (c
                      ? null == rt(c, f + "," + f + " " + x) && (c = u(t))
                      : u(t),
                    ((!l && c == h[h.length - 1]) || (l && c == h[0])) &&
                      pt(t));
              })(t)
            : vt(i, "textarea") ||
              vt(i, "input") ||
              vt(i, "select") ||
              "true" === i.getAttribute("contentEditable") ||
              "" === i.getAttribute("contentEditable") ||
              !K.keyboardScrolling ||
              !K.autoScrolling ||
              (-1 < [40, 38, 32, 33, 34].indexOf(n) && pt(t),
              (kt = t.ctrlKey),
              (Ft = setTimeout(function () {
                !(function (t) {
                  var i = t.shiftKey,
                    n = e.activeElement,
                    o = vt(n, "video") || vt(n, "audio");
                  if (Ht || !([37, 39].indexOf(t.keyCode) < 0))
                    switch (t.keyCode) {
                      case 38:
                      case 33:
                        Ct.k.up && xe();
                        break;
                      case 32:
                        if (i && Ct.k.up && !o) {
                          xe();
                          break;
                        }
                      case 40:
                      case 34:
                        Ct.k.down && ((32 === t.keyCode && o) || Ee());
                        break;
                      case 36:
                        Ct.k.up && ke(1);
                        break;
                      case 35:
                        Ct.k.down && ke(B(d).length);
                        break;
                      case 37:
                        Ct.k.left && Le();
                        break;
                      case 39:
                        Ct.k.right && Pe();
                    }
                })(t);
              }, 150)));
        }
        function di(t) {
          Ot && (kt = t.ctrlKey);
        }
        function fi(t) {
          2 == t.which &&
            ((pe = t.pageY), It.addEventListener("mousemove", gi));
        }
        function vi(t) {
          2 == t.which && It.removeEventListener("mousemove", gi);
        }
        function mi(t) {
          return [].slice.call(B(Kt, t)).filter(function (t) {
            return (
              "-1" !== t.getAttribute("tabindex") && null !== t.offsetParent
            );
          });
        }
        function gi(t) {
          K.autoScrolling &&
            (Ht &&
              (t.pageY < pe && Ct.m.up
                ? xe()
                : t.pageY > pe && Ct.m.down && Ee()),
            (pe = t.pageY));
        }
        function yi(t, e, i) {
          var n,
            o,
            s = rt(t, d),
            r = {
              slides: t,
              destiny: e,
              direction: i,
              destinyPos: { left: e.offsetLeft },
              slideIndex: U(e),
              section: s,
              sectionIndex: U(s, d),
              anchorLink: s.getAttribute("data-anchor"),
              slidesNav: B(_, s)[0],
              slideAnchor: Hi(e),
              prevSlide: B(x, s)[0],
              prevSlideIndex: U(B(x, s)[0]),
              localIsResizing: At,
            };
          (r.xMovement =
            (n = r.prevSlideIndex) == (o = r.slideIndex)
              ? "none"
              : o < n
              ? "left"
              : "right"),
            (r.direction = r.direction ? r.direction : r.xMovement),
            r.localIsResizing || (Ht = !1),
            K.onSlideLeave &&
            !r.localIsResizing &&
            "none" !== r.xMovement &&
            dt(K.onSlideLeave) &&
            !1 === Qe("onSlideLeave", r)
              ? (Lt = !1)
              : (J(e, c),
                tt(ut(e), c),
                r.localIsResizing || (ai(r.prevSlide), ni(e)),
                !K.loopHorizontal &&
                  K.controlArrows &&
                  (mt(B(A, s), 0 !== r.slideIndex), mt(B(O, s), null != $(e))),
                z(s, c) &&
                  !r.localIsResizing &&
                  Ai(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
                (function (t, e, i) {
                  var n = e.destinyPos;
                  if (K.css3) {
                    var o =
                      "translate3d(-" + Math.round(n.left) + "px, 0px, 0px)";
                    (xt.test.translate3dH[e.sectionIndex] = o),
                      R(Ei(B(P, t)), Di(o)),
                      (Nt = setTimeout(function () {
                        Si(e);
                      }, K.scrollingSpeed));
                  } else
                    (xt.test.left[e.sectionIndex] = Math.round(n.left)),
                      Vi(t, Math.round(n.left), K.scrollingSpeed, function () {
                        Si(e);
                      });
                })(t, r));
        }
        function Si(t) {
          var e, i;
          (e = t.slidesNav),
            (i = t.slideIndex),
            K.slidesNavigation &&
              null != e &&
              (tt(B(h, e), c), J(B("a", B("li", e)[i]), c)),
            t.localIsResizing ||
              (dt(K.afterSlideLoad) && Qe("afterSlideLoad", t),
              (Ht = !0),
              si(t.destiny)),
            (Lt = !1);
        }
        function wi() {
          clearTimeout(Wt),
            (Wt = setTimeout(function () {
              for (var t = 0; t < 4; t++) Dt = setTimeout(bi, 200 * t);
            }, 200));
        }
        function bi() {
          if ((xi(), Mt)) {
            var t = e.activeElement;
            if (!vt(t, "textarea") && !vt(t, "input") && !vt(t, "select")) {
              var i = W();
              Math.abs(i - de) > (20 * Math.max(de, i)) / 100 &&
                (Me(!0), (de = i));
            }
          } else Oe();
        }
        function xi() {
          var e = K.responsive || K.responsiveWidth,
            i = K.responsiveHeight,
            n = e && t.innerWidth < e,
            o = i && t.innerHeight < i;
          e && i ? Ie(n || o) : e ? Ie(n) : i && Ie(o);
        }
        function Ei(t) {
          var e = "all " + K.scrollingSpeed + "ms " + K.easingcss3;
          return tt(t, s), R(t, { "-webkit-transition": e, transition: e });
        }
        function Ti(t) {
          return J(t, s);
        }
        function ki(t, e) {
          var i, n, o;
          (i = t),
            B(K.menu).forEach(function (t) {
              K.menu &&
                null != t &&
                (tt(B(h, t), c), J(B('[data-menuanchor="' + i + '"]', t), c));
            }),
            (n = t),
            (o = e),
            K.navigation &&
              null != B(S)[0] &&
              (tt(B(h, B(S)[0]), c),
              J(
                n
                  ? B('a[href="#' + n + '"]', B(S)[0])
                  : B("a", B("li", B(S)[0])[o]),
                c
              ));
        }
        function Pi(t) {
          var e = U(B(f)[0], d),
            i = U(t, d);
          return e == i ? "none" : i < e ? "up" : "down";
        }
        function Li(t) {
          if (!z(t, L)) {
            var i = e.createElement("div");
            (i.className = v),
              (i.style.height = Mi(t) + "px"),
              J(t, L),
              ot(t, i);
          }
        }
        function Mi(t) {
          var e = Yt;
          if (K.paddingTop || K.paddingBottom) {
            var i = t;
            z(i, p) || (i = rt(t, d));
            var n =
              parseInt(getComputedStyle(i)["padding-top"]) +
              parseInt(getComputedStyle(i)["padding-bottom"]);
            e = Yt - n;
          }
          return e;
        }
        function _i(t, e) {
          e ? Ei(It) : Ti(It),
            R(It, Di(t)),
            (xt.test.translate3d = t),
            setTimeout(function () {
              tt(It, s);
            }, 10);
        }
        function Ii(t) {
          var e = B(d + '[data-anchor="' + t + '"]', It)[0];
          if (!e) {
            var i = void 0 !== t ? t - 1 : 0;
            e = B(d)[i];
          }
          return e;
        }
        function Yi(t, e) {
          var i = Ii(t);
          if (null != i) {
            var n,
              o,
              s,
              r =
                (null ==
                  (s = B(b + '[data-anchor="' + (n = e) + '"]', (o = i))[0]) &&
                  ((n = void 0 !== n ? n : 0), (s = B(b, o)[n])),
                s);
            Hi(i) === Et || z(i, c)
              ? Xi(r)
              : Ke(i, function () {
                  Xi(r);
                });
          }
        }
        function Xi(t) {
          null != t && yi(rt(t, T), t);
        }
        function Ai(t, e, i, n) {
          var o = "";
          K.anchors.length &&
            !K.lockAnchors &&
            (t
              ? (null != i && (o = i),
                null == e && (e = t),
                Oi(o + "/" + (Tt = e)))
              : (null != t && (Tt = e), Oi(i))),
            Bi();
        }
        function Oi(e) {
          if (K.recordHistory) location.hash = e;
          else if (Mt || _t) t.history.replaceState(void 0, void 0, "#" + e);
          else {
            var i = t.location.href.split("#")[0];
            t.location.replace(i + "#" + e);
          }
        }
        function Hi(t) {
          if (!t) return null;
          var e = t.getAttribute("data-anchor"),
            i = U(t);
          return null == e && (e = i), e;
        }
        function Bi() {
          var t = B(f)[0],
            e = B(x, t)[0],
            i = Hi(t),
            n = Hi(e),
            o = String(i);
          e && (o = o + "-" + n), (o = o.replace("/", "-").replace("#", ""));
          var s = new RegExp("\\b\\s?" + l + "-[^\\s]+\\b", "g");
          (St.className = St.className.replace(s, "")), J(St, l + "-" + o);
        }
        function Ci(t) {
          var e = [];
          return (
            (e.y =
              void 0 !== t.pageY && (t.pageY || t.pageX)
                ? t.pageY
                : t.touches[0].pageY),
            (e.x =
              void 0 !== t.pageX && (t.pageY || t.pageX)
                ? t.pageX
                : t.touches[0].pageX),
            _t &&
              je(t) &&
              K.scrollBar &&
              void 0 !== t.touches &&
              ((e.y = t.touches[0].pageY), (e.x = t.touches[0].pageX)),
            e
          );
        }
        function zi(t, e) {
          me(0, "internal"),
            void 0 !== e && (At = !0),
            yi(rt(t, T), t),
            void 0 !== e && (At = !1),
            me(te.scrollingSpeed, "internal");
        }
        function Wi(t) {
          var e = Math.round(t);
          if (K.css3 && K.autoScrolling && !K.scrollBar)
            _i("translate3d(0px, -" + e + "px, 0px)", !1);
          else if (K.autoScrolling && !K.scrollBar)
            R(It, { top: -e + "px" }), (xt.test.top = -e + "px");
          else {
            var i = Je(e);
            Fi(i.element, i.options);
          }
        }
        function Di(t) {
          return {
            "-webkit-transform": t,
            "-moz-transform": t,
            "-ms-transform": t,
            transform: t,
          };
        }
        function Ri(t, e, i) {
          "all" !== e
            ? (Ct[i][e] = t)
            : Object.keys(Ct[i]).forEach(function (e) {
                Ct[i][e] = t;
              });
        }
        function Ni(t, e, i) {
          (K[t] = e), "internal" !== i && (te[t] = e);
        }
        function ji() {
          var t = K.licenseKey,
            e = "font-size: 15px;background:yellow;";
          G
            ? t &&
              t.length < 20 &&
              (console.warn(
                "%c This website was made using fullPage.js slider. More info on the following website:",
                e
              ),
              console.warn("%c https://alvarotrigo.com/fullPage/", e))
            : (H(
                "error",
                "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"
              ),
              H(
                "error",
                "https://github.com/alvarotrigo/fullPage.js#options."
              )),
            z(ct, a)
              ? H(
                  "error",
                  "Fullpage.js can only be initialized once and you are doing it multiple times!"
                )
              : (K.continuousVertical &&
                  (K.loopTop || K.loopBottom) &&
                  ((K.continuousVertical = !1),
                  H(
                    "warn",
                    "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                  )),
                !K.scrollOverflow ||
                  (!K.scrollBar && K.autoScrolling) ||
                  H(
                    "warn",
                    "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"
                  ),
                !K.continuousVertical ||
                  (!K.scrollBar && K.autoScrolling) ||
                  ((K.continuousVertical = !1),
                  H(
                    "warn",
                    "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled"
                  )),
                K.scrollOverflow &&
                  null == K.scrollOverflowHandler &&
                  ((K.scrollOverflow = !1),
                  H(
                    "error",
                    "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js."
                  )),
                ne.forEach(function (t) {
                  K[t] &&
                    H(
                      "warn",
                      "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " +
                        t
                    );
                }),
                K.anchors.forEach(function (t) {
                  var e = [].slice.call(B("[name]")).filter(function (e) {
                      return (
                        e.getAttribute("name") &&
                        e.getAttribute("name").toLowerCase() == t.toLowerCase()
                      );
                    }),
                    i = [].slice.call(B("[id]")).filter(function (e) {
                      return (
                        e.getAttribute("id") &&
                        e.getAttribute("id").toLowerCase() == t.toLowerCase()
                      );
                    });
                  if (i.length || e.length) {
                    H(
                      "error",
                      "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."
                    );
                    var n = i.length ? "id" : "name";
                    (i.length || e.length) &&
                      H(
                        "error",
                        '"' +
                          t +
                          '" is is being used by another element `' +
                          n +
                          "` property"
                      );
                  }
                }));
        }
        function Vi(e, i, n, o) {
          var s,
            r =
              (s = e).self != t && z(s, E)
                ? s.scrollLeft
                : !K.autoScrolling || K.scrollBar
                ? ht()
                : s.offsetTop,
            a = i - r,
            l = 0;
          Gt = !0;
          var c = function () {
            if (Gt) {
              var s = i;
              (l += 20),
                n && (s = t.fp_easings[K.easing](l, r, a, n)),
                Fi(e, s),
                l < n ? setTimeout(c, 20) : void 0 !== o && o();
            } else l < n && o();
          };
          c();
        }
        function Fi(e, i) {
          !K.autoScrolling || K.scrollBar || (e.self != t && z(e, E))
            ? e.self != t && z(e, E)
              ? (e.scrollLeft = i)
              : e.scrollTo(0, i)
            : (e.style.top = i + "px");
        }
        function $i(t, e) {
          (this.anchor = t.getAttribute("data-anchor")),
            (this.item = t),
            (this.index = U(t, e)),
            (this.isLast =
              this.index === t.parentElement.querySelectorAll(e).length - 1),
            (this.isFirst = !this.index);
        }
        function qi(t) {
          $i.call(this, t, d);
        }
        ji();
      }
    );
  }),
  window.jQuery &&
    window.fullpage &&
    (function (t, e) {
      "use strict";
      t && e
        ? (t.fn.fullpage = function (i) {
            (i = t.extend({}, i, { $: t })), new e(this[0], i);
          })
        : window.fp_utils.showError(
            "error",
            "jQuery is required to use the jQuery fullpage adapter!"
          );
    })(window.jQuery, window.fullpage);
("use strict");
let burger = document.getElementById("burger"),
  nav = document.getElementById("nav");
burger.addEventListener("click", function () {
  nav.style.top = "0";
});
let menuClose = document.getElementById("menuClose");
menuClose.addEventListener("click", function () {
  nav.style.top = "-100vh";
});
let menuItem = document.getElementsByClassName("menu__link");
for (let t = 0; t < menuItem.length; t++)
  menuItem[t].addEventListener("click", function () {
    nav.style.top = "-100vh";
  });
$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    arrows: !1,
    dots: !1,
    infinite: !0,
    speed: 500,
    fade: !0,
    cssEase: "linear",
    pauseOnHover: !1,
    pauseOnFocus: !1,
  });
});
let slider = document.getElementById("slider");
slider.addEventListener("mousedown", () => {
  slider.style.cursor = "grabbing";
}),
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });
let header = document.getElementById("header"),
  container = document.getElementsByClassName("container");
for (let t = 1; t < container.length; t++)
  container[t].style.paddingTop = header.clientHeight + "px";
$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["home", "colors", "buttons", "forms", "cards"],
    menu: "#menu",
    touchSensitivity: 15,
    scrollOverflow: !0,
    verticalCentered: !1,
    scrollHorizontaly: !0,
    continuousHorizontal: !0,
    slidesNavigation: !0,
    slidesNavPosition: "bottom",
  }),
    $(".refresh-color")
      .click(function () {
        $(".color").each(function () {
          let t = "#" + Math.random().toString(16).substr(2, 6);
          $(this).css("background-color", t),
            $(this).children(".color__hex").text(t);
        });
      })
      .trigger("click"),
    $(".color").click(function () {
      $("#copied-color").fadeIn().delay(1e3).fadeOut();
      let t = $("<input>"),
        e = $(this).children(".color__hex").text();
      $("body").append(t),
        t.val(e).select(),
        document.execCommand("copy"),
        t.remove();
    }),
    $(window)
      .resize(function () {
        let t = $(".color");
        window.innerWidth > 550 && window.innerWidth < 768
          ? (t[t.length - 1].style.display = "flex")
          : window.innerWidth > 992 && window.innerWidth < 1440
          ? (t[t.length - 1].style.display = "flex")
          : (t[t.length - 1].style.display = "none");
      })
      .trigger("resize");
});

!(function (t, i, e) {
  var s =
      t.requestAnimationFrame ||
      t.webkitRequestAnimationFrame ||
      t.mozRequestAnimationFrame ||
      t.oRequestAnimationFrame ||
      t.msRequestAnimationFrame ||
      function (i) {
        t.setTimeout(i, 1e3 / 60);
      },
    o = (function () {
      var s = {},
        o = i.createElement("div").style,
        n = (function () {
          for (
            var t = ["t", "webkitT", "MozT", "msT", "OT"], i = 0, e = t.length;
            i < e;
            i++
          )
            if (t[i] + "ransform" in o) return t[i].substr(0, t[i].length - 1);
          return !1;
        })();
      function r(t) {
        return (
          !1 !== n &&
          ("" === n ? t : n + t.charAt(0).toUpperCase() + t.substr(1))
        );
      }
      (s.getTime =
        Date.now ||
        function () {
          return new Date().getTime();
        }),
        (s.extend = function (t, i) {
          for (var e in i) t[e] = i[e];
        }),
        (s.addEvent = function (t, i, e, s) {
          t.addEventListener(i, e, !!s);
        }),
        (s.removeEvent = function (t, i, e, s) {
          t.removeEventListener(i, e, !!s);
        }),
        (s.prefixPointerEvent = function (i) {
          return t.MSPointerEvent
            ? "MSPointer" + i.charAt(7).toUpperCase() + i.substr(8)
            : i;
        }),
        (s.momentum = function (t, i, s, o, n, r) {
          var h,
            a,
            l = t - i,
            c = e.abs(l) / s;
          return (
            (a = c / (r = void 0 === r ? 6e-4 : r)),
            (h = t + ((c * c) / (2 * r)) * (l < 0 ? -1 : 1)) < o
              ? ((h = n ? o - (n / 2.5) * (c / 8) : o),
                (a = (l = e.abs(h - t)) / c))
              : 0 < h &&
                ((h = n ? (n / 2.5) * (c / 8) : 0),
                (a = (l = e.abs(t) + h) / c)),
            { destination: e.round(h), duration: a }
          );
        });
      var h = r("transform");
      return (
        s.extend(s, {
          hasTransform: !1 !== h,
          hasPerspective: r("perspective") in o,
          hasTouch: "ontouchstart" in t,
          hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
          hasTransition: r("transition") in o,
        }),
        (s.isBadAndroid = (function () {
          var i = t.navigator.appVersion;
          if (!/Android/.test(i) || /Chrome\/\d/.test(i)) return !1;
          var e = i.match(/Safari\/(\d+.\d)/);
          return (
            !(e && "object" == typeof e && 2 <= e.length) ||
            parseFloat(e[1]) < 535.19
          );
        })()),
        s.extend((s.style = {}), {
          transform: h,
          transitionTimingFunction: r("transitionTimingFunction"),
          transitionDuration: r("transitionDuration"),
          transitionDelay: r("transitionDelay"),
          transformOrigin: r("transformOrigin"),
        }),
        (s.hasClass = function (t, i) {
          return new RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className);
        }),
        (s.addClass = function (t, i) {
          if (!s.hasClass(t, i)) {
            var e = t.className.split(" ");
            e.push(i), (t.className = e.join(" "));
          }
        }),
        (s.removeClass = function (t, i) {
          if (s.hasClass(t, i)) {
            var e = new RegExp("(^|\\s)" + i + "(\\s|$)", "g");
            t.className = t.className.replace(e, " ");
          }
        }),
        (s.offset = function (t) {
          for (var i = -t.offsetLeft, e = -t.offsetTop; (t = t.offsetParent); )
            (i -= t.offsetLeft), (e -= t.offsetTop);
          return { left: i, top: e };
        }),
        (s.preventDefaultException = function (t, i) {
          for (var e in i) if (i[e].test(t[e])) return !0;
          return !1;
        }),
        s.extend((s.eventType = {}), {
          touchstart: 1,
          touchmove: 1,
          touchend: 1,
          mousedown: 2,
          mousemove: 2,
          mouseup: 2,
          pointerdown: 3,
          pointermove: 3,
          pointerup: 3,
          MSPointerDown: 3,
          MSPointerMove: 3,
          MSPointerUp: 3,
        }),
        s.extend((s.ease = {}), {
          quadratic: {
            style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            fn: function (t) {
              return t * (2 - t);
            },
          },
          circular: {
            style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
            fn: function (t) {
              return e.sqrt(1 - --t * t);
            },
          },
          back: {
            style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            fn: function (t) {
              return (t -= 1) * t * (5 * t + 4) + 1;
            },
          },
          bounce: {
            style: "",
            fn: function (t) {
              return (t /= 1) < 1 / 2.75
                ? 7.5625 * t * t
                : t < 2 / 2.75
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : t < 2.5 / 2.75
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            },
          },
          elastic: {
            style: "",
            fn: function (t) {
              return 0 === t
                ? 0
                : 1 == t
                ? 1
                : 0.4 *
                    e.pow(2, -10 * t) *
                    e.sin(((t - 0.055) * (2 * e.PI)) / 0.22) +
                  1;
            },
          },
        }),
        (s.tap = function (t, e) {
          var s = i.createEvent("Event");
          s.initEvent(e, !0, !0),
            (s.pageX = t.pageX),
            (s.pageY = t.pageY),
            t.target.dispatchEvent(s);
        }),
        (s.click = function (e) {
          var s,
            o = e.target;
          /(SELECT|INPUT|TEXTAREA)/i.test(o.tagName) ||
            ((s = i.createEvent(
              t.MouseEvent ? "MouseEvents" : "Event"
            )).initEvent("click", !0, !0),
            (s.view = e.view || t),
            (s.detail = 1),
            (s.screenX = o.screenX || 0),
            (s.screenY = o.screenY || 0),
            (s.clientX = o.clientX || 0),
            (s.clientY = o.clientY || 0),
            (s.ctrlKey = !!e.ctrlKey),
            (s.altKey = !!e.altKey),
            (s.shiftKey = !!e.shiftKey),
            (s.metaKey = !!e.metaKey),
            (s.button = 0),
            (s.relatedTarget = null),
            (s._constructed = !0),
            o.dispatchEvent(s));
        }),
        s
      );
    })();
  function n(e, s) {
    for (var n in ((this.wrapper =
      "string" == typeof e ? i.querySelector(e) : e),
    (this.scroller = this.wrapper.children[0]),
    (this.scrollerStyle = this.scroller.style),
    (this.options = {
      resizeScrollbars: !0,
      mouseWheelSpeed: 20,
      snapThreshold: 0.334,
      disablePointer: !o.hasPointer,
      disableTouch: o.hasPointer || !o.hasTouch,
      disableMouse: o.hasPointer || o.hasTouch,
      startX: 0,
      startY: 0,
      scrollY: !0,
      directionLockThreshold: 5,
      momentum: !0,
      bounce: !0,
      bounceTime: 600,
      bounceEasing: "",
      preventDefault: !0,
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/,
      },
      HWCompositing: !0,
      useTransition: !0,
      useTransform: !0,
      bindToWrapper: void 0 === t.onmousedown,
    }),
    s))
      this.options[n] = s[n];
    (this.translateZ =
      this.options.HWCompositing && o.hasPerspective ? " translateZ(0)" : ""),
      (this.options.useTransition =
        o.hasTransition && this.options.useTransition),
      (this.options.useTransform = o.hasTransform && this.options.useTransform),
      (this.options.eventPassthrough =
        !0 === this.options.eventPassthrough
          ? "vertical"
          : this.options.eventPassthrough),
      (this.options.preventDefault =
        !this.options.eventPassthrough && this.options.preventDefault),
      (this.options.scrollY =
        "vertical" != this.options.eventPassthrough && this.options.scrollY),
      (this.options.scrollX =
        "horizontal" != this.options.eventPassthrough && this.options.scrollX),
      (this.options.freeScroll =
        this.options.freeScroll && !this.options.eventPassthrough),
      (this.options.directionLockThreshold = this.options.eventPassthrough
        ? 0
        : this.options.directionLockThreshold),
      (this.options.bounceEasing =
        "string" == typeof this.options.bounceEasing
          ? o.ease[this.options.bounceEasing] || o.ease.circular
          : this.options.bounceEasing),
      (this.options.resizePolling =
        void 0 === this.options.resizePolling
          ? 60
          : this.options.resizePolling),
      !0 === this.options.tap && (this.options.tap = "tap"),
      this.options.useTransition ||
        this.options.useTransform ||
        /relative|absolute/i.test(this.scrollerStyle.position) ||
        (this.scrollerStyle.position = "relative"),
      "scale" == this.options.shrinkScrollbars &&
        (this.options.useTransition = !1),
      (this.options.invertWheelDirection = this.options.invertWheelDirection
        ? -1
        : 1),
      (this.x = 0),
      (this.y = 0),
      (this.directionX = 0),
      (this.directionY = 0),
      (this._events = {}),
      this._init(),
      this.refresh(),
      this.scrollTo(this.options.startX, this.options.startY),
      this.enable();
  }
  function r(t, e, s) {
    var o = i.createElement("div"),
      n = i.createElement("div");
    return (
      !0 === s &&
        ((o.style.cssText = "position:absolute;z-index:9999"),
        (n.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px")),
      (n.className = "iScrollIndicator"),
      (o.className =
        "h" == t
          ? (!0 === s &&
              ((o.style.cssText += ";height:7px;left:2px;right:2px;bottom:0"),
              (n.style.height = "100%")),
            "iScrollHorizontalScrollbar")
          : (!0 === s &&
              ((o.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px"),
              (n.style.width = "100%")),
            "iScrollVerticalScrollbar")),
      (o.style.cssText += ";overflow:hidden"),
      e || (o.style.pointerEvents = "none"),
      o.appendChild(n),
      o
    );
  }
  function h(e, n) {
    for (var r in ((this.wrapper =
      "string" == typeof n.el ? i.querySelector(n.el) : n.el),
    (this.wrapperStyle = this.wrapper.style),
    (this.indicator = this.wrapper.children[0]),
    (this.indicatorStyle = this.indicator.style),
    (this.scroller = e),
    (this.options = {
      listenX: !0,
      listenY: !0,
      interactive: !1,
      resize: !0,
      defaultScrollbars: !1,
      shrink: !1,
      fade: !1,
      speedRatioX: 0,
      speedRatioY: 0,
    }),
    n))
      this.options[r] = n[r];
    if (
      ((this.sizeRatioX = 1),
      (this.sizeRatioY = 1),
      (this.maxPosX = 0),
      (this.maxPosY = 0),
      this.options.interactive &&
        (this.options.disableTouch ||
          (o.addEvent(this.indicator, "touchstart", this),
          o.addEvent(t, "touchend", this)),
        this.options.disablePointer ||
          (o.addEvent(
            this.indicator,
            o.prefixPointerEvent("pointerdown"),
            this
          ),
          o.addEvent(t, o.prefixPointerEvent("pointerup"), this)),
        this.options.disableMouse ||
          (o.addEvent(this.indicator, "mousedown", this),
          o.addEvent(t, "mouseup", this))),
      this.options.fade)
    ) {
      this.wrapperStyle[o.style.transform] = this.scroller.translateZ;
      var h = o.style.transitionDuration;
      if (!h) return;
      this.wrapperStyle[h] = o.isBadAndroid ? "0.0001ms" : "0ms";
      var a = this;
      o.isBadAndroid &&
        s(function () {
          "0.0001ms" === a.wrapperStyle[h] && (a.wrapperStyle[h] = "0s");
        }),
        (this.wrapperStyle.opacity = "0");
    }
  }
  (n.prototype = {
    version: "5.2.0",
    _init: function () {
      this._initEvents(),
        (this.options.scrollbars || this.options.indicators) &&
          this._initIndicators(),
        this.options.mouseWheel && this._initWheel(),
        this.options.snap && this._initSnap(),
        this.options.keyBindings && this._initKeys();
    },
    destroy: function () {
      this._initEvents(!0),
        clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = null),
        this._execEvent("destroy");
    },
    _transitionEnd: function (t) {
      t.target == this.scroller &&
        this.isInTransition &&
        (this._transitionTime(),
        this.resetPosition(this.options.bounceTime) ||
          ((this.isInTransition = !1), this._execEvent("scrollEnd")));
    },
    _start: function (t) {
      if (
        (1 == o.eventType[t.type] ||
          0 ===
            (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) &&
        this.enabled &&
        (!this.initiated || o.eventType[t.type] === this.initiated)
      ) {
        !this.options.preventDefault ||
          o.isBadAndroid ||
          o.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) ||
          t.preventDefault();
        var i,
          s = t.touches ? t.touches[0] : t;
        (this.initiated = o.eventType[t.type]),
          (this.moved = !1),
          (this.distX = 0),
          (this.distY = 0),
          (this.directionX = 0),
          (this.directionY = 0),
          (this.directionLocked = 0),
          (this.startTime = o.getTime()),
          this.options.useTransition && this.isInTransition
            ? (this._transitionTime(),
              (this.isInTransition = !1),
              (i = this.getComputedPosition()),
              this._translate(e.round(i.x), e.round(i.y)),
              this._execEvent("scrollEnd"))
            : !this.options.useTransition &&
              this.isAnimating &&
              ((this.isAnimating = !1), this._execEvent("scrollEnd")),
          (this.startX = this.x),
          (this.startY = this.y),
          (this.absStartX = this.x),
          (this.absStartY = this.y),
          (this.pointX = s.pageX),
          (this.pointY = s.pageY),
          this._execEvent("beforeScrollStart");
      }
    },
    _move: function (t) {
      if (this.enabled && o.eventType[t.type] === this.initiated) {
        this.options.preventDefault && t.preventDefault();
        var i,
          s,
          n,
          r,
          h = t.touches ? t.touches[0] : t,
          a = h.pageX - this.pointX,
          l = h.pageY - this.pointY,
          c = o.getTime();
        if (
          ((this.pointX = h.pageX),
          (this.pointY = h.pageY),
          (this.distX += a),
          (this.distY += l),
          (n = e.abs(this.distX)),
          (r = e.abs(this.distY)),
          !(300 < c - this.endTime && n < 10 && r < 10))
        ) {
          if (
            (this.directionLocked ||
              this.options.freeScroll ||
              (n > r + this.options.directionLockThreshold
                ? (this.directionLocked = "h")
                : r >= n + this.options.directionLockThreshold
                ? (this.directionLocked = "v")
                : (this.directionLocked = "n")),
            "h" == this.directionLocked)
          ) {
            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
            else if ("horizontal" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            l = 0;
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough)
              t.preventDefault();
            else if ("vertical" == this.options.eventPassthrough)
              return void (this.initiated = !1);
            a = 0;
          }
          (a = this.hasHorizontalScroll ? a : 0),
            (l = this.hasVerticalScroll ? l : 0),
            (i = this.x + a),
            (s = this.y + l),
            (0 < i || i < this.maxScrollX) &&
              (i = this.options.bounce
                ? this.x + a / 3
                : 0 < i
                ? 0
                : this.maxScrollX),
            (0 < s || s < this.maxScrollY) &&
              (s = this.options.bounce
                ? this.y + l / 3
                : 0 < s
                ? 0
                : this.maxScrollY),
            (this.directionX = 0 < a ? -1 : a < 0 ? 1 : 0),
            (this.directionY = 0 < l ? -1 : l < 0 ? 1 : 0),
            this.moved || this._execEvent("scrollStart"),
            (this.moved = !0),
            this._translate(i, s),
            300 < c - this.startTime &&
              ((this.startTime = c),
              (this.startX = this.x),
              (this.startY = this.y));
        }
      }
    },
    _end: function (t) {
      if (this.enabled && o.eventType[t.type] === this.initiated) {
        this.options.preventDefault &&
          !o.preventDefaultException(
            t.target,
            this.options.preventDefaultException
          ) &&
          t.preventDefault(),
          t.changedTouches && t.changedTouches[0];
        var i,
          s,
          n = o.getTime() - this.startTime,
          r = e.round(this.x),
          h = e.round(this.y),
          a = e.abs(r - this.startX),
          l = e.abs(h - this.startY),
          c = 0,
          p = "";
        if (
          ((this.isInTransition = 0),
          (this.initiated = 0),
          (this.endTime = o.getTime()),
          !this.resetPosition(this.options.bounceTime))
        ) {
          if ((this.scrollTo(r, h), !this.moved))
            return (
              this.options.tap && o.tap(t, this.options.tap),
              this.options.click && o.click(t),
              void this._execEvent("scrollCancel")
            );
          if (this._events.flick && n < 200 && a < 100 && l < 100)
            this._execEvent("flick");
          else {
            if (
              (this.options.momentum &&
                n < 300 &&
                ((i = this.hasHorizontalScroll
                  ? o.momentum(
                      this.x,
                      this.startX,
                      n,
                      this.maxScrollX,
                      this.options.bounce ? this.wrapperWidth : 0,
                      this.options.deceleration
                    )
                  : { destination: r, duration: 0 }),
                (s = this.hasVerticalScroll
                  ? o.momentum(
                      this.y,
                      this.startY,
                      n,
                      this.maxScrollY,
                      this.options.bounce ? this.wrapperHeight : 0,
                      this.options.deceleration
                    )
                  : { destination: h, duration: 0 }),
                (r = i.destination),
                (h = s.destination),
                (c = e.max(i.duration, s.duration)),
                (this.isInTransition = 1)),
              this.options.snap)
            ) {
              var d = this._nearestSnap(r, h);
              (this.currentPage = d),
                (c =
                  this.options.snapSpeed ||
                  e.max(
                    e.max(
                      e.min(e.abs(r - d.x), 1e3),
                      e.min(e.abs(h - d.y), 1e3)
                    ),
                    300
                  )),
                (r = d.x),
                (h = d.y),
                (this.directionX = 0),
                (this.directionY = 0),
                (p = this.options.bounceEasing);
            }
            if (r != this.x || h != this.y)
              return (
                (0 < r ||
                  r < this.maxScrollX ||
                  0 < h ||
                  h < this.maxScrollY) &&
                  (p = o.ease.quadratic),
                void this.scrollTo(r, h, c, p)
              );
            this._execEvent("scrollEnd");
          }
        }
      }
    },
    _resize: function () {
      var t = this;
      clearTimeout(this.resizeTimeout),
        (this.resizeTimeout = setTimeout(function () {
          t.refresh();
        }, this.options.resizePolling));
    },
    resetPosition: function (t) {
      var i = this.x,
        e = this.y;
      return (
        (t = t || 0),
        !this.hasHorizontalScroll || 0 < this.x
          ? (i = 0)
          : this.x < this.maxScrollX && (i = this.maxScrollX),
        !this.hasVerticalScroll || 0 < this.y
          ? (e = 0)
          : this.y < this.maxScrollY && (e = this.maxScrollY),
        (i != this.x || e != this.y) &&
          (this.scrollTo(i, e, t, this.options.bounceEasing), !0)
      );
    },
    disable: function () {
      this.enabled = !1;
    },
    enable: function () {
      this.enabled = !0;
    },
    refresh: function () {
      this.wrapper.offsetHeight,
        (this.wrapperWidth = this.wrapper.clientWidth),
        (this.wrapperHeight = this.wrapper.clientHeight),
        (this.scrollerWidth = this.scroller.offsetWidth),
        (this.scrollerHeight = this.scroller.offsetHeight),
        (this.maxScrollX = this.wrapperWidth - this.scrollerWidth),
        (this.maxScrollY = this.wrapperHeight - this.scrollerHeight),
        (this.hasHorizontalScroll =
          this.options.scrollX && this.maxScrollX < 0),
        (this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0),
        this.hasHorizontalScroll ||
          ((this.maxScrollX = 0), (this.scrollerWidth = this.wrapperWidth)),
        this.hasVerticalScroll ||
          ((this.maxScrollY = 0), (this.scrollerHeight = this.wrapperHeight)),
        (this.endTime = 0),
        (this.directionX = 0),
        (this.directionY = 0),
        (this.wrapperOffset = o.offset(this.wrapper)),
        this._execEvent("refresh"),
        this.resetPosition();
    },
    on: function (t, i) {
      this._events[t] || (this._events[t] = []), this._events[t].push(i);
    },
    off: function (t, i) {
      if (this._events[t]) {
        var e = this._events[t].indexOf(i);
        -1 < e && this._events[t].splice(e, 1);
      }
    },
    _execEvent: function (t) {
      if (this._events[t]) {
        var i = 0,
          e = this._events[t].length;
        if (e)
          for (; i < e; i++)
            this._events[t][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (t, i, e, s) {
      (t = this.x + t),
        (i = this.y + i),
        (e = e || 0),
        this.scrollTo(t, i, e, s);
    },
    scrollTo: function (t, i, e, s) {
      (s = s || o.ease.circular),
        (this.isInTransition = this.options.useTransition && 0 < e);
      var n = this.options.useTransition && s.style;
      !e || n
        ? (n &&
            (this._transitionTimingFunction(s.style), this._transitionTime(e)),
          this._translate(t, i))
        : this._animate(t, i, e, s.fn);
    },
    scrollToElement: function (t, i, s, n, r) {
      if ((t = t.nodeType ? t : this.scroller.querySelector(t))) {
        var h = o.offset(t);
        (h.left -= this.wrapperOffset.left),
          (h.top -= this.wrapperOffset.top),
          !0 === s &&
            (s = e.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)),
          !0 === n &&
            (n = e.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)),
          (h.left -= s || 0),
          (h.top -= n || 0),
          (h.left =
            0 < h.left
              ? 0
              : h.left < this.maxScrollX
              ? this.maxScrollX
              : h.left),
          (h.top =
            0 < h.top ? 0 : h.top < this.maxScrollY ? this.maxScrollY : h.top),
          (i =
            null == i || "auto" === i
              ? e.max(e.abs(this.x - h.left), e.abs(this.y - h.top))
              : i),
          this.scrollTo(h.left, h.top, i, r);
      }
    },
    _transitionTime: function (t) {
      if (this.options.useTransition) {
        t = t || 0;
        var i = o.style.transitionDuration;
        if (i) {
          if (((this.scrollerStyle[i] = t + "ms"), !t && o.isBadAndroid)) {
            this.scrollerStyle[i] = "0.0001ms";
            var e = this;
            s(function () {
              "0.0001ms" === e.scrollerStyle[i] && (e.scrollerStyle[i] = "0s");
            });
          }
          if (this.indicators)
            for (var n = this.indicators.length; n--; )
              this.indicators[n].transitionTime(t);
        }
      }
    },
    _transitionTimingFunction: function (t) {
      if (
        ((this.scrollerStyle[o.style.transitionTimingFunction] = t),
        this.indicators)
      )
        for (var i = this.indicators.length; i--; )
          this.indicators[i].transitionTimingFunction(t);
    },
    _translate: function (t, i) {
      if (
        (this.options.useTransform
          ? (this.scrollerStyle[o.style.transform] =
              "translate(" + t + "px," + i + "px)" + this.translateZ)
          : ((t = e.round(t)),
            (i = e.round(i)),
            (this.scrollerStyle.left = t + "px"),
            (this.scrollerStyle.top = i + "px")),
        (this.x = t),
        (this.y = i),
        this.indicators)
      )
        for (var s = this.indicators.length; s--; )
          this.indicators[s].updatePosition();
    },
    _initEvents: function (i) {
      var e = i ? o.removeEvent : o.addEvent,
        s = this.options.bindToWrapper ? this.wrapper : t;
      e(t, "orientationchange", this),
        e(t, "resize", this),
        this.options.click && e(this.wrapper, "click", this, !0),
        this.options.disableMouse ||
          (e(this.wrapper, "mousedown", this),
          e(s, "mousemove", this),
          e(s, "mousecancel", this),
          e(s, "mouseup", this)),
        o.hasPointer &&
          !this.options.disablePointer &&
          (e(this.wrapper, o.prefixPointerEvent("pointerdown"), this),
          e(s, o.prefixPointerEvent("pointermove"), this),
          e(s, o.prefixPointerEvent("pointercancel"), this),
          e(s, o.prefixPointerEvent("pointerup"), this)),
        o.hasTouch &&
          !this.options.disableTouch &&
          (e(this.wrapper, "touchstart", this),
          e(s, "touchmove", this),
          e(s, "touchcancel", this),
          e(s, "touchend", this)),
        e(this.scroller, "transitionend", this),
        e(this.scroller, "webkitTransitionEnd", this),
        e(this.scroller, "oTransitionEnd", this),
        e(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition: function () {
      var i,
        e,
        s = t.getComputedStyle(this.scroller, null);
      return (
        (e = this.options.useTransform
          ? ((i = +(
              (s = s[o.style.transform].split(")")[0].split(", "))[12] || s[4]
            )),
            +(s[13] || s[5]))
          : ((i = +s.left.replace(/[^-\d.]/g, "")),
            +s.top.replace(/[^-\d.]/g, ""))),
        { x: i, y: e }
      );
    },
    _initIndicators: function () {
      var t,
        i = this.options.interactiveScrollbars,
        e = "string" != typeof this.options.scrollbars,
        s = [],
        o = this;
      (this.indicators = []),
        this.options.scrollbars &&
          (this.options.scrollY &&
            ((t = {
              el: r("v", i, this.options.scrollbars),
              interactive: i,
              defaultScrollbars: !0,
              customStyle: e,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenX: !1,
            }),
            this.wrapper.appendChild(t.el),
            s.push(t)),
          this.options.scrollX &&
            ((t = {
              el: r("h", i, this.options.scrollbars),
              interactive: i,
              defaultScrollbars: !0,
              customStyle: e,
              resize: this.options.resizeScrollbars,
              shrink: this.options.shrinkScrollbars,
              fade: this.options.fadeScrollbars,
              listenY: !1,
            }),
            this.wrapper.appendChild(t.el),
            s.push(t))),
        this.options.indicators && (s = s.concat(this.options.indicators));
      for (var n = s.length; n--; ) this.indicators.push(new h(this, s[n]));
      function a(t) {
        if (o.indicators)
          for (var i = o.indicators.length; i--; ) t.call(o.indicators[i]);
      }
      this.options.fadeScrollbars &&
        (this.on("scrollEnd", function () {
          a(function () {
            this.fade();
          });
        }),
        this.on("scrollCancel", function () {
          a(function () {
            this.fade();
          });
        }),
        this.on("scrollStart", function () {
          a(function () {
            this.fade(1);
          });
        }),
        this.on("beforeScrollStart", function () {
          a(function () {
            this.fade(1, !0);
          });
        })),
        this.on("refresh", function () {
          a(function () {
            this.refresh();
          });
        }),
        this.on("destroy", function () {
          a(function () {
            this.destroy();
          }),
            delete this.indicators;
        });
    },
    _initWheel: function () {
      o.addEvent(this.wrapper, "wheel", this),
        o.addEvent(this.wrapper, "mousewheel", this),
        o.addEvent(this.wrapper, "DOMMouseScroll", this),
        this.on("destroy", function () {
          clearTimeout(this.wheelTimeout),
            (this.wheelTimeout = null),
            o.removeEvent(this.wrapper, "wheel", this),
            o.removeEvent(this.wrapper, "mousewheel", this),
            o.removeEvent(this.wrapper, "DOMMouseScroll", this);
        });
    },
    _wheel: function (i) {
      if (this.enabled) {
        t.navigator.userAgent.match(/(MSIE|Trident)/) || i.preventDefault();
        var s,
          o,
          n,
          r,
          h = this;
        if (
          (void 0 === this.wheelTimeout && h._execEvent("scrollStart"),
          clearTimeout(this.wheelTimeout),
          (this.wheelTimeout = setTimeout(function () {
            h.options.snap || h._execEvent("scrollEnd"),
              (h.wheelTimeout = void 0);
          }, 400)),
          "deltaX" in i)
        )
          o =
            1 === i.deltaMode
              ? ((s = -i.deltaX * this.options.mouseWheelSpeed),
                -i.deltaY * this.options.mouseWheelSpeed)
              : ((s = -i.deltaX), -i.deltaY);
        else if ("wheelDeltaX" in i)
          (s = (i.wheelDeltaX / 120) * this.options.mouseWheelSpeed),
            (o = (i.wheelDeltaY / 120) * this.options.mouseWheelSpeed);
        else if ("wheelDelta" in i)
          s = o = (i.wheelDelta / 120) * this.options.mouseWheelSpeed;
        else {
          if (!("detail" in i)) return;
          s = o = (-i.detail / 3) * this.options.mouseWheelSpeed;
        }
        if (
          ((s *= this.options.invertWheelDirection),
          (o *= this.options.invertWheelDirection),
          this.hasVerticalScroll || ((s = o), (o = 0)),
          this.options.snap)
        )
          return (
            (n = this.currentPage.pageX),
            (r = this.currentPage.pageY),
            0 < s ? n-- : s < 0 && n++,
            0 < o ? r-- : o < 0 && r++,
            void this.goToPage(n, r)
          );
        (n = this.x + e.round(this.hasHorizontalScroll ? s : 0)),
          (r = this.y + e.round(this.hasVerticalScroll ? o : 0)),
          (this.directionX = 0 < s ? -1 : s < 0 ? 1 : 0),
          (this.directionY = 0 < o ? -1 : o < 0 ? 1 : 0),
          0 < n ? (n = 0) : n < this.maxScrollX && (n = this.maxScrollX),
          0 < r ? (r = 0) : r < this.maxScrollY && (r = this.maxScrollY),
          this.scrollTo(n, r, 0);
      }
    },
    _initSnap: function () {
      (this.currentPage = {}),
        "string" == typeof this.options.snap &&
          (this.options.snap = this.scroller.querySelectorAll(
            this.options.snap
          )),
        this.on("refresh", function () {
          var t,
            i,
            s,
            o,
            n,
            r,
            h = 0,
            a = 0,
            l = 0,
            c = this.options.snapStepX || this.wrapperWidth,
            p = this.options.snapStepY || this.wrapperHeight;
          if (
            ((this.pages = []),
            this.wrapperWidth &&
              this.wrapperHeight &&
              this.scrollerWidth &&
              this.scrollerHeight)
          ) {
            if (!0 === this.options.snap)
              for (
                s = e.round(c / 2), o = e.round(p / 2);
                l > -this.scrollerWidth;

              ) {
                for (this.pages[h] = [], n = t = 0; n > -this.scrollerHeight; )
                  (this.pages[h][t] = {
                    x: e.max(l, this.maxScrollX),
                    y: e.max(n, this.maxScrollY),
                    width: c,
                    height: p,
                    cx: l - s,
                    cy: n - o,
                  }),
                    (n -= p),
                    t++;
                (l -= c), h++;
              }
            else
              for (t = (r = this.options.snap).length, i = -1; h < t; h++)
                (0 === h || r[h].offsetLeft <= r[h - 1].offsetLeft) &&
                  ((a = 0), i++),
                  this.pages[a] || (this.pages[a] = []),
                  (l = e.max(-r[h].offsetLeft, this.maxScrollX)),
                  (n = e.max(-r[h].offsetTop, this.maxScrollY)),
                  (s = l - e.round(r[h].offsetWidth / 2)),
                  (o = n - e.round(r[h].offsetHeight / 2)),
                  (this.pages[a][i] = {
                    x: l,
                    y: n,
                    width: r[h].offsetWidth,
                    height: r[h].offsetHeight,
                    cx: s,
                    cy: o,
                  }),
                  l > this.maxScrollX && a++;
            this.goToPage(
              this.currentPage.pageX || 0,
              this.currentPage.pageY || 0,
              0
            ),
              this.options.snapThreshold % 1 == 0
                ? ((this.snapThresholdX = this.options.snapThreshold),
                  (this.snapThresholdY = this.options.snapThreshold))
                : ((this.snapThresholdX = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .width * this.options.snapThreshold
                  )),
                  (this.snapThresholdY = e.round(
                    this.pages[this.currentPage.pageX][this.currentPage.pageY]
                      .height * this.options.snapThreshold
                  )));
          }
        }),
        this.on("flick", function () {
          var t =
            this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(this.x - this.startX), 1e3),
                e.min(e.abs(this.y - this.startY), 1e3)
              ),
              300
            );
          this.goToPage(
            this.currentPage.pageX + this.directionX,
            this.currentPage.pageY + this.directionY,
            t
          );
        });
    },
    _nearestSnap: function (t, i) {
      if (!this.pages.length) return { x: 0, y: 0, pageX: 0, pageY: 0 };
      var s = 0,
        o = this.pages.length,
        n = 0;
      if (
        e.abs(t - this.absStartX) < this.snapThresholdX &&
        e.abs(i - this.absStartY) < this.snapThresholdY
      )
        return this.currentPage;
      for (
        0 < t ? (t = 0) : t < this.maxScrollX && (t = this.maxScrollX),
          0 < i ? (i = 0) : i < this.maxScrollY && (i = this.maxScrollY);
        s < o;
        s++
      )
        if (t >= this.pages[s][0].cx) {
          t = this.pages[s][0].x;
          break;
        }
      for (o = this.pages[s].length; n < o; n++)
        if (i >= this.pages[0][n].cy) {
          i = this.pages[0][n].y;
          break;
        }
      return (
        s == this.currentPage.pageX &&
          ((s += this.directionX) < 0
            ? (s = 0)
            : s >= this.pages.length && (s = this.pages.length - 1),
          (t = this.pages[s][0].x)),
        n == this.currentPage.pageY &&
          ((n += this.directionY) < 0
            ? (n = 0)
            : n >= this.pages[0].length && (n = this.pages[0].length - 1),
          (i = this.pages[0][n].y)),
        { x: t, y: i, pageX: s, pageY: n }
      );
    },
    goToPage: function (t, i, s, o) {
      (o = o || this.options.bounceEasing),
        t >= this.pages.length ? (t = this.pages.length - 1) : t < 0 && (t = 0),
        i >= this.pages[t].length
          ? (i = this.pages[t].length - 1)
          : i < 0 && (i = 0);
      var n = this.pages[t][i].x,
        r = this.pages[t][i].y;
      (s =
        void 0 === s
          ? this.options.snapSpeed ||
            e.max(
              e.max(
                e.min(e.abs(n - this.x), 1e3),
                e.min(e.abs(r - this.y), 1e3)
              ),
              300
            )
          : s),
        (this.currentPage = { x: n, y: r, pageX: t, pageY: i }),
        this.scrollTo(n, r, s, o);
    },
    next: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      ++e >= this.pages.length && this.hasVerticalScroll && ((e = 0), s++),
        this.goToPage(e, s, t, i);
    },
    prev: function (t, i) {
      var e = this.currentPage.pageX,
        s = this.currentPage.pageY;
      --e < 0 && this.hasVerticalScroll && ((e = 0), s--),
        this.goToPage(e, s, t, i);
    },
    _initKeys: function (i) {
      var e,
        s = {
          pageUp: 33,
          pageDown: 34,
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
        };
      if ("object" == typeof this.options.keyBindings)
        for (e in this.options.keyBindings)
          "string" == typeof this.options.keyBindings[e] &&
            (this.options.keyBindings[e] = this.options.keyBindings[e]
              .toUpperCase()
              .charCodeAt(0));
      else this.options.keyBindings = {};
      for (e in s)
        this.options.keyBindings[e] = this.options.keyBindings[e] || s[e];
      o.addEvent(t, "keydown", this),
        this.on("destroy", function () {
          o.removeEvent(t, "keydown", this);
        });
    },
    _key: function (t) {
      if (this.enabled) {
        var i,
          s = this.options.snap,
          n = s ? this.currentPage.pageX : this.x,
          r = s ? this.currentPage.pageY : this.y,
          h = o.getTime(),
          a = this.keyTime || 0;
        switch (
          (this.options.useTransition &&
            this.isInTransition &&
            ((i = this.getComputedPosition()),
            this._translate(e.round(i.x), e.round(i.y)),
            (this.isInTransition = !1)),
          (this.keyAcceleration =
            h - a < 200 ? e.min(this.keyAcceleration + 0.25, 50) : 0),
          t.keyCode)
        ) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (n += s ? 1 : this.wrapperWidth)
              : (r += s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll
              ? (n -= s ? 1 : this.wrapperWidth)
              : (r -= s ? 1 : this.wrapperHeight);
            break;
          case this.options.keyBindings.end:
            (n = s ? this.pages.length - 1 : this.maxScrollX),
              (r = s ? this.pages[0].length - 1 : this.maxScrollY);
            break;
          case this.options.keyBindings.home:
            r = n = 0;
            break;
          case this.options.keyBindings.left:
            n += s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.up:
            r += s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.right:
            n -= s ? -1 : (5 + this.keyAcceleration) >> 0;
            break;
          case this.options.keyBindings.down:
            r -= s ? 1 : (5 + this.keyAcceleration) >> 0;
            break;
          default:
            return;
        }
        s
          ? this.goToPage(n, r)
          : (0 < n
              ? ((n = 0), (this.keyAcceleration = 0))
              : n < this.maxScrollX &&
                ((n = this.maxScrollX), (this.keyAcceleration = 0)),
            0 < r
              ? ((r = 0), (this.keyAcceleration = 0))
              : r < this.maxScrollY &&
                ((r = this.maxScrollY), (this.keyAcceleration = 0)),
            this.scrollTo(n, r, 0),
            (this.keyTime = h));
      }
    },
    _animate: function (t, i, e, n) {
      var r = this,
        h = this.x,
        a = this.y,
        l = o.getTime(),
        c = l + e;
      (this.isAnimating = !0),
        (function p() {
          var d,
            u,
            f,
            m = o.getTime();
          if (c <= m)
            return (
              (r.isAnimating = !1),
              r._translate(t, i),
              void (
                r.resetPosition(r.options.bounceTime) ||
                r._execEvent("scrollEnd")
              )
            );
          (f = n((m = (m - l) / e))),
            (d = (t - h) * f + h),
            (u = (i - a) * f + a),
            r._translate(d, u),
            r.isAnimating && s(p);
        })();
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(t);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(t);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(t);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(t);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(t);
          break;
        case "keydown":
          this._key(t);
          break;
        case "click":
          this.enabled &&
            !t._constructed &&
            (t.preventDefault(), t.stopPropagation());
      }
    },
  }),
    (h.prototype = {
      handleEvent: function (t) {
        switch (t.type) {
          case "touchstart":
          case "pointerdown":
          case "MSPointerDown":
          case "mousedown":
            this._start(t);
            break;
          case "touchmove":
          case "pointermove":
          case "MSPointerMove":
          case "mousemove":
            this._move(t);
            break;
          case "touchend":
          case "pointerup":
          case "MSPointerUp":
          case "mouseup":
          case "touchcancel":
          case "pointercancel":
          case "MSPointerCancel":
          case "mousecancel":
            this._end(t);
        }
      },
      destroy: function () {
        this.options.fadeScrollbars &&
          (clearTimeout(this.fadeTimeout), (this.fadeTimeout = null)),
          this.options.interactive &&
            (o.removeEvent(this.indicator, "touchstart", this),
            o.removeEvent(
              this.indicator,
              o.prefixPointerEvent("pointerdown"),
              this
            ),
            o.removeEvent(this.indicator, "mousedown", this),
            o.removeEvent(t, "touchmove", this),
            o.removeEvent(t, o.prefixPointerEvent("pointermove"), this),
            o.removeEvent(t, "mousemove", this),
            o.removeEvent(t, "touchend", this),
            o.removeEvent(t, o.prefixPointerEvent("pointerup"), this),
            o.removeEvent(t, "mouseup", this)),
          this.options.defaultScrollbars &&
            this.wrapper.parentNode.removeChild(this.wrapper);
      },
      _start: function (i) {
        var e = i.touches ? i.touches[0] : i;
        i.preventDefault(),
          i.stopPropagation(),
          this.transitionTime(),
          (this.initiated = !0),
          (this.moved = !1),
          (this.lastPointX = e.pageX),
          (this.lastPointY = e.pageY),
          (this.startTime = o.getTime()),
          this.options.disableTouch || o.addEvent(t, "touchmove", this),
          this.options.disablePointer ||
            o.addEvent(t, o.prefixPointerEvent("pointermove"), this),
          this.options.disableMouse || o.addEvent(t, "mousemove", this),
          this.scroller._execEvent("beforeScrollStart");
      },
      _move: function (t) {
        var i,
          e,
          s,
          n,
          r = t.touches ? t.touches[0] : t;
        o.getTime(),
          this.moved || this.scroller._execEvent("scrollStart"),
          (this.moved = !0),
          (i = r.pageX - this.lastPointX),
          (this.lastPointX = r.pageX),
          (e = r.pageY - this.lastPointY),
          (this.lastPointY = r.pageY),
          (s = this.x + i),
          (n = this.y + e),
          this._pos(s, n),
          t.preventDefault(),
          t.stopPropagation();
      },
      _end: function (i) {
        if (this.initiated) {
          if (
            ((this.initiated = !1),
            i.preventDefault(),
            i.stopPropagation(),
            o.removeEvent(t, "touchmove", this),
            o.removeEvent(t, o.prefixPointerEvent("pointermove"), this),
            o.removeEvent(t, "mousemove", this),
            this.scroller.options.snap)
          ) {
            var s = this.scroller._nearestSnap(
                this.scroller.x,
                this.scroller.y
              ),
              n =
                this.options.snapSpeed ||
                e.max(
                  e.max(
                    e.min(e.abs(this.scroller.x - s.x), 1e3),
                    e.min(e.abs(this.scroller.y - s.y), 1e3)
                  ),
                  300
                );
            (this.scroller.x == s.x && this.scroller.y == s.y) ||
              ((this.scroller.directionX = 0),
              (this.scroller.directionY = 0),
              (this.scroller.currentPage = s),
              this.scroller.scrollTo(
                s.x,
                s.y,
                n,
                this.scroller.options.bounceEasing
              ));
          }
          this.moved && this.scroller._execEvent("scrollEnd");
        }
      },
      transitionTime: function (t) {
        t = t || 0;
        var i = o.style.transitionDuration;
        if (i && ((this.indicatorStyle[i] = t + "ms"), !t && o.isBadAndroid)) {
          this.indicatorStyle[i] = "0.0001ms";
          var e = this;
          s(function () {
            "0.0001ms" === e.indicatorStyle[i] && (e.indicatorStyle[i] = "0s");
          });
        }
      },
      transitionTimingFunction: function (t) {
        this.indicatorStyle[o.style.transitionTimingFunction] = t;
      },
      refresh: function () {
        this.transitionTime(),
          this.options.listenX && !this.options.listenY
            ? (this.indicatorStyle.display = this.scroller.hasHorizontalScroll
                ? "block"
                : "none")
            : this.options.listenY && !this.options.listenX
            ? (this.indicatorStyle.display = this.scroller.hasVerticalScroll
                ? "block"
                : "none")
            : (this.indicatorStyle.display =
                this.scroller.hasHorizontalScroll ||
                this.scroller.hasVerticalScroll
                  ? "block"
                  : "none"),
          this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll
            ? (o.addClass(this.wrapper, "iScrollBothScrollbars"),
              o.removeClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "8px")
                  : (this.wrapper.style.bottom = "8px")))
            : (o.removeClass(this.wrapper, "iScrollBothScrollbars"),
              o.addClass(this.wrapper, "iScrollLoneScrollbar"),
              this.options.defaultScrollbars &&
                this.options.customStyle &&
                (this.options.listenX
                  ? (this.wrapper.style.right = "2px")
                  : (this.wrapper.style.bottom = "2px"))),
          this.wrapper.offsetHeight,
          this.options.listenX &&
            ((this.wrapperWidth = this.wrapper.clientWidth),
            this.options.resize
              ? ((this.indicatorWidth = e.max(
                  e.round(
                    (this.wrapperWidth * this.wrapperWidth) /
                      (this.scroller.scrollerWidth || this.wrapperWidth || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.width = this.indicatorWidth + "px"))
              : (this.indicatorWidth = this.indicator.clientWidth),
            (this.maxPosX = this.wrapperWidth - this.indicatorWidth),
            "clip" == this.options.shrink
              ? ((this.minBoundaryX = 8 - this.indicatorWidth),
                (this.maxBoundaryX = this.wrapperWidth - 8))
              : ((this.minBoundaryX = 0), (this.maxBoundaryX = this.maxPosX)),
            (this.sizeRatioX =
              this.options.speedRatioX ||
              (this.scroller.maxScrollX &&
                this.maxPosX / this.scroller.maxScrollX))),
          this.options.listenY &&
            ((this.wrapperHeight = this.wrapper.clientHeight),
            this.options.resize
              ? ((this.indicatorHeight = e.max(
                  e.round(
                    (this.wrapperHeight * this.wrapperHeight) /
                      (this.scroller.scrollerHeight || this.wrapperHeight || 1)
                  ),
                  8
                )),
                (this.indicatorStyle.height = this.indicatorHeight + "px"))
              : (this.indicatorHeight = this.indicator.clientHeight),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            "clip" == this.options.shrink
              ? ((this.minBoundaryY = 8 - this.indicatorHeight),
                (this.maxBoundaryY = this.wrapperHeight - 8))
              : ((this.minBoundaryY = 0), (this.maxBoundaryY = this.maxPosY)),
            (this.maxPosY = this.wrapperHeight - this.indicatorHeight),
            (this.sizeRatioY =
              this.options.speedRatioY ||
              (this.scroller.maxScrollY &&
                this.maxPosY / this.scroller.maxScrollY))),
          this.updatePosition();
      },
      updatePosition: function () {
        var t =
            (this.options.listenX &&
              e.round(this.sizeRatioX * this.scroller.x)) ||
            0,
          i =
            (this.options.listenY &&
              e.round(this.sizeRatioY * this.scroller.y)) ||
            0;
        this.options.ignoreBoundaries ||
          (t < this.minBoundaryX
            ? ("scale" == this.options.shrink &&
                ((this.width = e.max(this.indicatorWidth + t, 8)),
                (this.indicatorStyle.width = this.width + "px")),
              (t = this.minBoundaryX))
            : t > this.maxBoundaryX
            ? (t =
                "scale" == this.options.shrink
                  ? ((this.width = e.max(
                      this.indicatorWidth - (t - this.maxPosX),
                      8
                    )),
                    (this.indicatorStyle.width = this.width + "px"),
                    this.maxPosX + this.indicatorWidth - this.width)
                  : this.maxBoundaryX)
            : "scale" == this.options.shrink &&
              this.width != this.indicatorWidth &&
              ((this.width = this.indicatorWidth),
              (this.indicatorStyle.width = this.width + "px")),
          i < this.minBoundaryY
            ? ("scale" == this.options.shrink &&
                ((this.height = e.max(this.indicatorHeight + 3 * i, 8)),
                (this.indicatorStyle.height = this.height + "px")),
              (i = this.minBoundaryY))
            : i > this.maxBoundaryY
            ? (i =
                "scale" == this.options.shrink
                  ? ((this.height = e.max(
                      this.indicatorHeight - 3 * (i - this.maxPosY),
                      8
                    )),
                    (this.indicatorStyle.height = this.height + "px"),
                    this.maxPosY + this.indicatorHeight - this.height)
                  : this.maxBoundaryY)
            : "scale" == this.options.shrink &&
              this.height != this.indicatorHeight &&
              ((this.height = this.indicatorHeight),
              (this.indicatorStyle.height = this.height + "px"))),
          (this.x = t),
          (this.y = i),
          this.scroller.options.useTransform
            ? (this.indicatorStyle[o.style.transform] =
                "translate(" + t + "px," + i + "px)" + this.scroller.translateZ)
            : ((this.indicatorStyle.left = t + "px"),
              (this.indicatorStyle.top = i + "px"));
      },
      _pos: function (t, i) {
        t < 0 ? (t = 0) : t > this.maxPosX && (t = this.maxPosX),
          i < 0 ? (i = 0) : i > this.maxPosY && (i = this.maxPosY),
          (t = this.options.listenX
            ? e.round(t / this.sizeRatioX)
            : this.scroller.x),
          (i = this.options.listenY
            ? e.round(i / this.sizeRatioY)
            : this.scroller.y),
          this.scroller.scrollTo(t, i);
      },
      fade: function (t, i) {
        if (!i || this.visible) {
          clearTimeout(this.fadeTimeout), (this.fadeTimeout = null);
          var e = t ? 250 : 500,
            s = t ? 0 : 300;
          (t = t ? "1" : "0"),
            (this.wrapperStyle[o.style.transitionDuration] = e + "ms"),
            (this.fadeTimeout = setTimeout(
              function (t) {
                (this.wrapperStyle.opacity = t), (this.visible = +t);
              }.bind(this, t),
              s
            ));
        }
      },
    }),
    (n.utils = o),
    "undefined" != typeof module && module.exports
      ? (module.exports = n)
      : "function" == typeof define && define.amd
      ? (define(function () {
          return n;
        }),
        void 0 !== t && (t.IScroll = n))
      : (t.IScroll = n);
})(window, document, Math),
  (function (t, i) {
    t.fp_scrolloverflow = (function () {
      t.IScroll || (t.IScroll = module.exports);
      var e = "fp-scrollable",
        s = "." + e,
        o = ".fp-section",
        n = o + ".active",
        r = ".fp-slide",
        h = ".fp-tableCell";
      (IScroll.prototype.wheelOn = function () {
        this.wrapper.addEventListener("wheel", this),
          this.wrapper.addEventListener("mousewheel", this),
          this.wrapper.addEventListener("DOMMouseScroll", this);
      }),
        (IScroll.prototype.wheelOff = function () {
          this.wrapper.removeEventListener("wheel", this),
            this.wrapper.removeEventListener("mousewheel", this),
            this.wrapper.removeEventListener("DOMMouseScroll", this);
        });
      var a = null,
        l = null,
        c = {
          refreshId: null,
          iScrollInstances: [],
          lastScrollY: null,
          hasBeenInit: !1,
          iscrollOptions: {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0,
          },
          init: function (e) {
            (a = fp_utils.$), (l = e);
            var s =
              "ontouchstart" in t ||
              0 < navigator.msMaxTouchPoints ||
              navigator.maxTouchPoints;
            return (
              (c.iscrollOptions.click = s),
              (c.hasBeenInit = !0),
              (c.iscrollOptions = fp_utils.deepExtend(
                c.iscrollOptions,
                e.scrollOverflowOptions
              )),
              new (function () {
                var e = this;
                function s() {
                  var t;
                  fp_utils.hasClass(i.body, "fp-responsive")
                    ? ((t = e.options.scrollOverflowHandler),
                      l(function (i) {
                        fp_utils.hasClass(
                          fp_utils.closest(i, o),
                          "fp-auto-height-responsive"
                        ) && t.remove(i);
                      }))
                    : l(n);
                }
                function n(t) {
                  if (!fp_utils.hasClass(t, "fp-noscroll")) {
                    fp_utils.css(t, { overflow: "hidden" });
                    var i,
                      s,
                      n,
                      r = e.options.scrollOverflowHandler,
                      l = r.wrapContent(),
                      c = fp_utils.closest(t, o),
                      p = r.scrollable(t),
                      d =
                        ((s = c),
                        null != (n = fp_utils.closest(s, o))
                          ? parseInt(getComputedStyle(n)["padding-bottom"]) +
                            parseInt(getComputedStyle(n)["padding-top"])
                          : 0);
                    null != p
                      ? (i = r.scrollHeight(t))
                      : ((i = t.scrollHeight),
                        e.options.verticalCentered &&
                          (i = a(h, t)[0].scrollHeight));
                    var u = fp_utils.getWindowHeight(),
                      f = u - d;
                    u < i + d
                      ? null != p
                        ? r.update(t, f)
                        : (e.options.verticalCentered
                            ? (fp_utils.wrapInner(a(h, t)[0], l.scroller),
                              fp_utils.wrapInner(a(h, t)[0], l.scrollable))
                            : (fp_utils.wrapInner(t, l.scroller),
                              fp_utils.wrapInner(t, l.scrollable)),
                          r.create(t, f, e.iscrollOptions))
                      : r.remove(t),
                      fp_utils.css(t, { overflow: "" });
                  }
                }
                function l(t) {
                  a(o).forEach(function (i) {
                    var e = a(r, i);
                    e.length
                      ? e.forEach(function (i) {
                          t(i);
                        })
                      : t(i);
                  });
                }
                (e.options = null),
                  (e.init = function (o, n) {
                    return (
                      (e.options = o),
                      (e.iscrollOptions = n),
                      "complete" === i.readyState &&
                        (s(), fullpage_api.shared.afterRenderActions()),
                      t.addEventListener("load", function () {
                        s(), fullpage_api.shared.afterRenderActions();
                      }),
                      e
                    );
                  }),
                  (e.createScrollBarForAll = s),
                  (e.createScrollBar = n);
              })().init(e, c.iscrollOptions)
            );
          },
          toggleWheel: function (t) {
            a(s, a(n)[0]).forEach(function (i) {
              var e = i.fp_iscrollInstance;
              null != e && (t ? e.wheelOn() : e.wheelOff());
            });
          },
          setIscroll: function (t, i) {
            if (c.hasBeenInit) {
              var e = fp_utils.closest(t, s) || a(s, t)[0],
                o = i ? "enable" : "disable";
              e && e.fp_iscrollInstance[o]();
            }
          },
          onLeave: function () {
            c.toggleWheel(!1);
          },
          beforeLeave: function () {
            c.onLeave();
          },
          afterLoad: function () {
            c.toggleWheel(!0);
          },
          create: function (t, i, e) {
            a(s, t).forEach(function (s) {
              fp_utils.css(s, { height: i + "px" });
              var n = s.fp_iscrollInstance;
              null != n &&
                c.iScrollInstances.forEach(function (t) {
                  t.destroy();
                }),
                (n = new IScroll(s, e)),
                c.iScrollInstances.push(n),
                fp_utils.hasClass(fp_utils.closest(t, o), "active") ||
                  n.wheelOff(),
                (s.fp_iscrollInstance = n);
            });
          },
          isScrolled: function (t, i) {
            var e = i.fp_iscrollInstance;
            return (
              !e ||
              ("top" === t
                ? 0 <= e.y && !fp_utils.getScrollTop(i)
                : "bottom" === t
                ? 0 - e.y + fp_utils.getScrollTop(i) + i.offsetHeight >=
                  i.scrollHeight
                : void 0)
            );
          },
          scrollable: function (t) {
            return a(".fp-slides", t).length
              ? a(s, a(".fp-slide.active", t)[0])[0]
              : a(s, t)[0];
          },
          scrollHeight: function (t) {
            return a(".fp-scroller", a(s, t)[0])[0].scrollHeight;
          },
          remove: function (t) {
            if (null != t) {
              var i = a(s, t)[0];
              if (null != i) {
                var e = i.fp_iscrollInstance;
                null != e && e.destroy(),
                  (i.fp_iscrollInstance = null),
                  fp_utils.unwrap(a(".fp-scroller", t)[0]),
                  fp_utils.unwrap(a(s, t)[0]);
              }
            }
          },
          update: function (t, i) {
            clearTimeout(c.refreshId),
              (c.refreshId = setTimeout(function () {
                c.iScrollInstances.forEach(function (t) {
                  t.refresh(),
                    fullpage_api.silentMoveTo(fp_utils.index(a(n)[0]) + 1);
                });
              }, 150)),
              fp_utils.css(a(s, t)[0], { height: i + "px" }),
              l.verticalCentered &&
                fp_utils.css(a(s, t)[0].parentNode, { height: i + "px" });
          },
          wrapContent: function () {
            var t = i.createElement("div");
            t.className = e;
            var s = i.createElement("div");
            return (
              (s.className = "fp-scroller"), { scrollable: t, scroller: s }
            );
          },
        };
      return { iscrollHandler: c };
    })();
  })(window, document);
("use strict");
let burger = document.getElementById("burger"),
  nav = document.getElementById("nav");
burger.addEventListener("click", function () {
  nav.style.top = "0";
});
let menuClose = document.getElementById("menuClose");
menuClose.addEventListener("click", function () {
  nav.style.top = "-100vh";
}),
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: !0,
      autoplaySpeed: 2e3,
      arrows: !1,
      dots: !1,
      infinite: !0,
      speed: 500,
      fade: !0,
      cssEase: "linear",
      pauseOnHover: !1,
      pauseOnFocus: !1,
    });
  });
let slider = document.getElementById("slider");
slider.addEventListener("mousedown", () => {
  slider.style.cursor = "grabbing";
}),
  slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
  });
let header = document.getElementById("header"),
  container = document.getElementsByClassName("container");
for (let t = 1; t < container.length; t++)
  container[t].style.paddingTop = header.clientHeight + "px";
$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["home", "colors", "buttons", "forms", "cards"],
    menu: "#menu",
    touchSensitivity: 15,
    scrollOverflow: !0,
    verticalCentered: !1,
  }),
    $(".refresh-color")
      .click(function () {
        $(".color").each(function () {
          let t = "#" + Math.random().toString(16).substr(2, 6);
          $(this).css("background-color", t),
            $(this).children(".color__hex").text(t);
        });
      })
      .trigger("click"),
    $(".color").click(function () {
      $("#copied-color").fadeIn().delay(1e3).fadeOut();
      let t = $("<input>"),
        i = $(this).children(".color__hex").text();
      $("body").append(t),
        t.val(i).select(),
        document.execCommand("copy"),
        t.remove();
    }),
    $(window)
      .resize(function () {
        let t = $(".color");
        window.innerWidth > 550 && window.innerWidth < 768
          ? (t[t.length - 1].style.display = "flex")
          : window.innerWidth > 992 && window.innerWidth < 1440
          ? (t[t.length - 1].style.display = "flex")
          : (t[t.length - 1].style.display = "none");
      })
      .trigger("resize");
});
