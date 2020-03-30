// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"library/typed.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.6
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
(function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports.Typed = e() : t.Typed = e();
})(this, function () {
  return function (t) {
    function e(n) {
      if (s[n]) return s[n].exports;
      var i = s[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports;
    }

    var s = {};
    return e.m = t, e.c = s, e.p = "", e(0);
  }([function (t, e, s) {
    "use strict";

    function n(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var i = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        r = s(1),
        o = s(3),
        a = function () {
      function t(e, s) {
        n(this, t), r.initializer.load(this, s, e), this.begin();
      }

      return i(t, [{
        key: "toggle",
        value: function value() {
          this.pause.status ? this.start() : this.stop();
        }
      }, {
        key: "stop",
        value: function value() {
          this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
        }
      }, {
        key: "start",
        value: function value() {
          this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
        }
      }, {
        key: "destroy",
        value: function value() {
          this.reset(!1), this.options.onDestroy(this);
        }
      }, {
        key: "reset",
        value: function value() {
          var t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
          clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, t && (this.insertCursor(), this.options.onReset(this), this.begin());
        }
      }, {
        key: "begin",
        value: function value() {
          var t = this;
          this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
            t.currentElContent && 0 !== t.currentElContent.length ? t.backspace(t.currentElContent, t.currentElContent.length) : t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos);
          }, this.startDelay);
        }
      }, {
        key: "typewrite",
        value: function value(t, e) {
          var s = this;
          this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
          var n = this.humanizer(this.typeSpeed),
              i = 1;
          return this.pause.status === !0 ? void this.setPauseStatus(t, e, !0) : void (this.timeout = setTimeout(function () {
            e = o.htmlParser.typeHtmlChars(t, e, s);
            var n = 0,
                r = t.substr(e);

            if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
              var a = 1;
              r = /\d+/.exec(r)[0], a += r.length, n = parseInt(r), s.temporaryPause = !0, s.options.onTypingPaused(s.arrayPos, s), t = t.substring(0, e) + t.substring(e + a), s.toggleBlinking(!0);
            }

            if ("`" === r.charAt(0)) {
              for (; "`" !== t.substr(e + i).charAt(0) && (i++, !(e + i > t.length));) {
                ;
              }

              var u = t.substring(0, e),
                  l = t.substring(u.length + 1, e + i),
                  c = t.substring(e + i + 1);
              t = u + l + c, i--;
            }

            s.timeout = setTimeout(function () {
              s.toggleBlinking(!1), e === t.length ? s.doneTyping(t, e) : s.keepTyping(t, e, i), s.temporaryPause && (s.temporaryPause = !1, s.options.onTypingResumed(s.arrayPos, s));
            }, n);
          }, n));
        }
      }, {
        key: "keepTyping",
        value: function value(t, e, s) {
          0 === e && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), e += s;
          var n = t.substr(0, e);
          this.replaceText(n), this.typewrite(t, e);
        }
      }, {
        key: "doneTyping",
        value: function value(t, e) {
          var s = this;
          this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === !1 || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
            s.backspace(t, e);
          }, this.backDelay));
        }
      }, {
        key: "backspace",
        value: function value(t, e) {
          var s = this;
          if (this.pause.status === !0) return void this.setPauseStatus(t, e, !0);
          if (this.fadeOut) return this.initFadeOut();
          this.toggleBlinking(!1);
          var n = this.humanizer(this.backSpeed);
          this.timeout = setTimeout(function () {
            e = o.htmlParser.backSpaceHtmlChars(t, e, s);
            var n = t.substr(0, e);

            if (s.replaceText(n), s.smartBackspace) {
              var i = s.strings[s.arrayPos + 1];
              i && n === i.substr(0, e) ? s.stopNum = e : s.stopNum = 0;
            }

            e > s.stopNum ? (e--, s.backspace(t, e)) : e <= s.stopNum && (s.arrayPos++, s.arrayPos === s.strings.length ? (s.arrayPos = 0, s.options.onLastStringBackspaced(), s.shuffleStringsIfNeeded(), s.begin()) : s.typewrite(s.strings[s.sequence[s.arrayPos]], e));
          }, n);
        }
      }, {
        key: "complete",
        value: function value() {
          this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
        }
      }, {
        key: "setPauseStatus",
        value: function value(t, e, s) {
          this.pause.typewrite = s, this.pause.curString = t, this.pause.curStrPos = e;
        }
      }, {
        key: "toggleBlinking",
        value: function value(t) {
          if (this.cursor && !this.pause.status && this.cursorBlinking !== t) {
            this.cursorBlinking = t;
            var e = t ? "infinite" : 0;
            this.cursor.style.animationIterationCount = e;
          }
        }
      }, {
        key: "humanizer",
        value: function value(t) {
          return Math.round(Math.random() * t / 2) + t;
        }
      }, {
        key: "shuffleStringsIfNeeded",
        value: function value() {
          this.shuffle && (this.sequence = this.sequence.sort(function () {
            return Math.random() - .5;
          }));
        }
      }, {
        key: "initFadeOut",
        value: function value() {
          var t = this;
          return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
            t.arrayPos++, t.replaceText(""), t.strings.length > t.arrayPos ? t.typewrite(t.strings[t.sequence[t.arrayPos]], 0) : (t.typewrite(t.strings[0], 0), t.arrayPos = 0);
          }, this.fadeOutDelay);
        }
      }, {
        key: "replaceText",
        value: function value(t) {
          this.attr ? this.el.setAttribute(this.attr, t) : this.isInput ? this.el.value = t : "html" === this.contentType ? this.el.innerHTML = t : this.el.textContent = t;
        }
      }, {
        key: "bindFocusEvents",
        value: function value() {
          var t = this;
          this.isInput && (this.el.addEventListener("focus", function (e) {
            t.stop();
          }), this.el.addEventListener("blur", function (e) {
            t.el.value && 0 !== t.el.value.length || t.start();
          }));
        }
      }, {
        key: "insertCursor",
        value: function value() {
          this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
        }
      }]), t;
    }();

    e["default"] = a, t.exports = e["default"];
  }, function (t, e, s) {
    "use strict";

    function n(t) {
      return t && t.__esModule ? t : {
        "default": t
      };
    }

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = arguments[e];

        for (var n in s) {
          Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
        }
      }

      return t;
    },
        o = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        a = s(2),
        u = n(a),
        l = function () {
      function t() {
        i(this, t);
      }

      return o(t, [{
        key: "load",
        value: function value(t, e, s) {
          if ("string" == typeof s ? t.el = document.querySelector(s) : t.el = s, t.options = r({}, u["default"], e), t.isInput = "input" === t.el.tagName.toLowerCase(), t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = !t.isInput && t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = !0, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = !1, t.strings = t.options.strings.map(function (t) {
            return t.trim();
          }), "string" == typeof t.options.stringsElement ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
            t.strings = [], t.stringsElement.style.display = "none";
            var n = Array.prototype.slice.apply(t.stringsElement.children),
                i = n.length;
            if (i) for (var o = 0; o < i; o += 1) {
              var a = n[o];
              t.strings.push(a.innerHTML.trim());
            }
          }

          t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
            status: !1,
            typewrite: !0,
            curString: "",
            curStrPos: 0
          }, t.typingComplete = !1;

          for (var o in t.strings) {
            t.sequence[o] = o;
          }

          t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
        }
      }, {
        key: "getCurrentElContent",
        value: function value(t) {
          var e = "";
          return e = t.attr ? t.el.getAttribute(t.attr) : t.isInput ? t.el.value : "html" === t.contentType ? t.el.innerHTML : t.el.textContent;
        }
      }, {
        key: "appendAnimationCss",
        value: function value(t) {
          if (t.autoInsertCss && t.showCursor && t.fadeOut) {
            var e = document.createElement("style");
            e.type = "text/css";
            var s = "";
            t.showCursor && (s += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), t.fadeOut && (s += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "), 0 !== e.length && (e.innerHTML = s, document.head.appendChild(e));
          }
        }
      }]), t;
    }();

    e["default"] = l;
    var c = new l();
    e.initializer = c;
  }, function (t, e) {
    "use strict";

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var s = {
      strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
      stringsElement: null,
      typeSpeed: 0,
      startDelay: 0,
      backSpeed: 0,
      smartBackspace: !0,
      shuffle: !1,
      backDelay: 700,
      fadeOut: !1,
      fadeOutClass: "typed-fade-out",
      fadeOutDelay: 500,
      loop: !1,
      loopCount: 1 / 0,
      showCursor: !0,
      cursorChar: "|",
      autoInsertCss: !0,
      attr: null,
      bindInputFocusEvents: !1,
      contentType: "html",
      onComplete: function onComplete(t) {},
      preStringTyped: function preStringTyped(t, e) {},
      onStringTyped: function onStringTyped(t, e) {},
      onLastStringBackspaced: function onLastStringBackspaced(t) {},
      onTypingPaused: function onTypingPaused(t, e) {},
      onTypingResumed: function onTypingResumed(t, e) {},
      onReset: function onReset(t) {},
      onStop: function onStop(t, e) {},
      onStart: function onStart(t, e) {},
      onDestroy: function onDestroy(t) {}
    };
    e["default"] = s, t.exports = e["default"];
  }, function (t, e) {
    "use strict";

    function s(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var n = function () {
      function t(t, e) {
        for (var s = 0; s < e.length; s++) {
          var n = e[s];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }

      return function (e, s, n) {
        return s && t(e.prototype, s), n && t(e, n), e;
      };
    }(),
        i = function () {
      function t() {
        s(this, t);
      }

      return n(t, [{
        key: "typeHtmlChars",
        value: function value(t, e, s) {
          if ("html" !== s.contentType) return e;
          var n = t.substr(e).charAt(0);

          if ("<" === n || "&" === n) {
            var i = "";

            for (i = "<" === n ? ">" : ";"; t.substr(e + 1).charAt(0) !== i && (e++, !(e + 1 > t.length));) {
              ;
            }

            e++;
          }

          return e;
        }
      }, {
        key: "backSpaceHtmlChars",
        value: function value(t, e, s) {
          if ("html" !== s.contentType) return e;
          var n = t.substr(e).charAt(0);

          if (">" === n || ";" === n) {
            var i = "";

            for (i = ">" === n ? "<" : "&"; t.substr(e - 1).charAt(0) !== i && (e--, !(e < 0));) {
              ;
            }

            e--;
          }

          return e;
        }
      }]), t;
    }();

    e["default"] = i;
    var r = new i();
    e.htmlParser = r;
  }]);
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "21674" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","library/typed.min.js"], null)
//# sourceMappingURL=/typed.min.d4e5ca89.js.map