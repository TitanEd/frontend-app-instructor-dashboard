import * as D from "react";
import ur, { createContext as dr, useState as R, useContext as fr, useRef as _e, useEffect as te } from "react";
import { OverlayTrigger as Ir, Button as $e, Tooltip as Dr, DropdownButton as $r, Dropdown as ee, Avatar as Lr, Icon as U, IconButton as Re, Navbar as Ce, IconButtonWithTooltip as se, Nav as Ge, NavDropdown as Xe } from "@openedx/paragon";
var Oe = { exports: {} }, ve = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, Ze;
function hr() {
  if (Ze) return Me;
  Ze = 1;
  var t = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function n(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function v() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var w = {}, p = 0; p < 10; p++)
        w["_" + String.fromCharCode(p)] = p;
      var g = Object.getOwnPropertyNames(w).map(function(c) {
        return w[c];
      });
      if (g.join("") !== "0123456789")
        return !1;
      var o = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        o[c] = c;
      }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = v() ? Object.assign : function(f, w) {
    for (var p, g = n(f), o, c = 1; c < arguments.length; c++) {
      p = Object(arguments[c]);
      for (var d in p)
        i.call(p, d) && (g[d] = p[d]);
      if (t) {
        o = t(p);
        for (var h = 0; h < o.length; h++)
          s.call(p, o[h]) && (g[o[h]] = p[o[h]]);
      }
    }
    return g;
  }, Me;
}
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Hr() {
  if (Qe) return ve;
  Qe = 1, hr();
  var t = ur, i = 60103;
  if (ve.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var s = Symbol.for;
    i = s("react.element"), ve.Fragment = s("react.fragment");
  }
  var n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = Object.prototype.hasOwnProperty, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(p, g, o) {
    var c, d = {}, h = null, b = null;
    o !== void 0 && (h = "" + o), g.key !== void 0 && (h = "" + g.key), g.ref !== void 0 && (b = g.ref);
    for (c in g) v.call(g, c) && !f.hasOwnProperty(c) && (d[c] = g[c]);
    if (p && p.defaultProps) for (c in g = p.defaultProps, g) d[c] === void 0 && (d[c] = g[c]);
    return { $$typeof: i, type: p, key: h, ref: b, props: d, _owner: n.current };
  }
  return ve.jsx = w, ve.jsxs = w, ve;
}
var Ie = {};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Fr() {
  return Be || (Be = 1, (function(t) {
    process.env.NODE_ENV !== "production" && (function() {
      var i = ur, s = hr(), n = 60103, v = 60106;
      t.Fragment = 60107;
      var f = 60108, w = 60114, p = 60109, g = 60110, o = 60112, c = 60113, d = 60120, h = 60115, b = 60116, u = 60121, P = 60122, G = 60117, j = 60129, I = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var S = Symbol.for;
        n = S("react.element"), v = S("react.portal"), t.Fragment = S("react.fragment"), f = S("react.strict_mode"), w = S("react.profiler"), p = S("react.provider"), g = S("react.context"), o = S("react.forward_ref"), c = S("react.suspense"), d = S("react.suspense_list"), h = S("react.memo"), b = S("react.lazy"), u = S("react.block"), P = S("react.server.block"), G = S("react.fundamental"), S("react.scope"), S("react.opaque.id"), j = S("react.debug_trace_mode"), S("react.offscreen"), I = S("react.legacy_hidden");
      }
      var X = typeof Symbol == "function" && Symbol.iterator, $ = "@@iterator";
      function Z(e) {
        if (e === null || typeof e != "object")
          return null;
        var a = X && e[X] || e[$];
        return typeof a == "function" ? a : null;
      }
      var H = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function C(e) {
        {
          for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), x = 1; x < a; x++)
            l[x - 1] = arguments[x];
          Q("error", e, l);
        }
      }
      function Q(e, a, l) {
        {
          var x = H.ReactDebugCurrentFrame, k = x.getStackAddendum();
          k !== "" && (a += "%s", l = l.concat([k]));
          var O = l.map(function(_) {
            return "" + _;
          });
          O.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, O);
        }
      }
      var re = !1;
      function F(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === t.Fragment || e === w || e === j || e === f || e === c || e === d || e === I || re || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === p || e.$$typeof === g || e.$$typeof === o || e.$$typeof === G || e.$$typeof === u || e[0] === P));
      }
      function L(e, a, l) {
        var x = a.displayName || a.name || "";
        return e.displayName || (x !== "" ? l + "(" + x + ")" : l);
      }
      function V(e) {
        return e.displayName || "Context";
      }
      function M(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && C("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case t.Fragment:
            return "Fragment";
          case v:
            return "Portal";
          case w:
            return "Profiler";
          case f:
            return "StrictMode";
          case c:
            return "Suspense";
          case d:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case g:
              var a = e;
              return V(a) + ".Consumer";
            case p:
              var l = e;
              return V(l._context) + ".Provider";
            case o:
              return L(e, e.render, "ForwardRef");
            case h:
              return M(e.type);
            case u:
              return M(e._render);
            case b: {
              var x = e, k = x._payload, O = x._init;
              try {
                return M(O(k));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var z = 0, E, q, K, B, ue, Y, ae;
      function de() {
      }
      de.__reactDisabledLog = !0;
      function fe() {
        {
          if (z === 0) {
            E = console.log, q = console.info, K = console.warn, B = console.error, ue = console.group, Y = console.groupCollapsed, ae = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: de,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          z++;
        }
      }
      function Le() {
        {
          if (z--, z === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: s({}, e, {
                value: E
              }),
              info: s({}, e, {
                value: q
              }),
              warn: s({}, e, {
                value: K
              }),
              error: s({}, e, {
                value: B
              }),
              group: s({}, e, {
                value: ue
              }),
              groupCollapsed: s({}, e, {
                value: Y
              }),
              groupEnd: s({}, e, {
                value: ae
              })
            });
          }
          z < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xe = H.ReactCurrentDispatcher, he;
      function oe(e, a, l) {
        {
          if (he === void 0)
            try {
              throw Error();
            } catch (k) {
              var x = k.stack.trim().match(/\n( *(at )?)/);
              he = x && x[1] || "";
            }
          return `
` + he + e;
        }
      }
      var pe = !1, ce;
      {
        var Ee = typeof WeakMap == "function" ? WeakMap : Map;
        ce = new Ee();
      }
      function be(e, a) {
        if (!e || pe)
          return "";
        {
          var l = ce.get(e);
          if (l !== void 0)
            return l;
        }
        var x;
        pe = !0;
        var k = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var O;
        O = xe.current, xe.current = null, fe();
        try {
          if (a) {
            var _ = function() {
              throw Error();
            };
            if (Object.defineProperty(_.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(_, []);
              } catch (ie) {
                x = ie;
              }
              Reflect.construct(e, [], _);
            } else {
              try {
                _.call();
              } catch (ie) {
                x = ie;
              }
              e.call(_.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ie) {
              x = ie;
            }
            e();
          }
        } catch (ie) {
          if (ie && x && typeof ie.stack == "string") {
            for (var y = ie.stack.split(`
`), W = x.stack.split(`
`), T = y.length - 1, A = W.length - 1; T >= 1 && A >= 0 && y[T] !== W[A]; )
              A--;
            for (; T >= 1 && A >= 0; T--, A--)
              if (y[T] !== W[A]) {
                if (T !== 1 || A !== 1)
                  do
                    if (T--, A--, A < 0 || y[T] !== W[A]) {
                      var ne = `
` + y[T].replace(" at new ", " at ");
                      return typeof e == "function" && ce.set(e, ne), ne;
                    }
                  while (T >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          pe = !1, xe.current = O, Le(), Error.prepareStackTrace = k;
        }
        var ge = e ? e.displayName || e.name : "", Ue = ge ? oe(ge) : "";
        return typeof e == "function" && ce.set(e, Ue), Ue;
      }
      function we(e, a, l) {
        return be(e, !1);
      }
      function Se(e) {
        var a = e.prototype;
        return !!(a && a.isReactComponent);
      }
      function le(e, a, l) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return be(e, Se(e));
        if (typeof e == "string")
          return oe(e);
        switch (e) {
          case c:
            return oe("Suspense");
          case d:
            return oe("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case o:
              return we(e.render);
            case h:
              return le(e.type, a, l);
            case u:
              return we(e._render);
            case b: {
              var x = e, k = x._payload, O = x._init;
              try {
                return le(O(k), a, l);
              } catch {
              }
            }
          }
        return "";
      }
      var m = {}, N = H.ReactDebugCurrentFrame;
      function J(e) {
        if (e) {
          var a = e._owner, l = le(e.type, e._source, a ? a.type : null);
          N.setExtraStackFrame(l);
        } else
          N.setExtraStackFrame(null);
      }
      function ye(e, a, l, x, k) {
        {
          var O = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var _ in e)
            if (O(e, _)) {
              var y = void 0;
              try {
                if (typeof e[_] != "function") {
                  var W = Error((x || "React class") + ": " + l + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw W.name = "Invariant Violation", W;
                }
                y = e[_](a, _, x, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (T) {
                y = T;
              }
              y && !(y instanceof Error) && (J(k), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", l, _, typeof y), J(null)), y instanceof Error && !(y.message in m) && (m[y.message] = !0, J(k), C("Failed %s type: %s", l, y.message), J(null));
            }
        }
      }
      var He = H.ReactCurrentOwner, Ne = Object.prototype.hasOwnProperty, br = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Fe, ze;
      function wr(e) {
        if (Ne.call(e, "ref")) {
          var a = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function yr(e) {
        if (Ne.call(e, "key")) {
          var a = Object.getOwnPropertyDescriptor(e, "key").get;
          if (a && a.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function jr(e, a) {
        typeof e.ref == "string" && He.current;
      }
      function _r(e, a) {
        {
          var l = function() {
            Fe || (Fe = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
          };
          l.isReactWarning = !0, Object.defineProperty(e, "key", {
            get: l,
            configurable: !0
          });
        }
      }
      function Er(e, a) {
        {
          var l = function() {
            ze || (ze = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
          };
          l.isReactWarning = !0, Object.defineProperty(e, "ref", {
            get: l,
            configurable: !0
          });
        }
      }
      var Sr = function(e, a, l, x, k, O, _) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: e,
          key: a,
          ref: l,
          props: _,
          // Record the component responsible for creating this element.
          _owner: O
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: x
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: k
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function Cr(e, a, l, x, k) {
        {
          var O, _ = {}, y = null, W = null;
          l !== void 0 && (y = "" + l), yr(a) && (y = "" + a.key), wr(a) && (W = a.ref, jr(a, k));
          for (O in a)
            Ne.call(a, O) && !br.hasOwnProperty(O) && (_[O] = a[O]);
          if (e && e.defaultProps) {
            var T = e.defaultProps;
            for (O in T)
              _[O] === void 0 && (_[O] = T[O]);
          }
          if (y || W) {
            var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
            y && _r(_, A), W && Er(_, A);
          }
          return Sr(e, y, W, k, x, He.current, _);
        }
      }
      var Te = H.ReactCurrentOwner, Ve = H.ReactDebugCurrentFrame;
      function me(e) {
        if (e) {
          var a = e._owner, l = le(e.type, e._source, a ? a.type : null);
          Ve.setExtraStackFrame(l);
        } else
          Ve.setExtraStackFrame(null);
      }
      var Pe;
      Pe = !1;
      function Ae(e) {
        return typeof e == "object" && e !== null && e.$$typeof === n;
      }
      function qe() {
        {
          if (Te.current) {
            var e = M(Te.current.type);
            if (e)
              return `

Check the render method of \`` + e + "`.";
          }
          return "";
        }
      }
      function Or(e) {
        return "";
      }
      var Ke = {};
      function Rr(e) {
        {
          var a = qe();
          if (!a) {
            var l = typeof e == "string" ? e : e.displayName || e.name;
            l && (a = `

Check the top-level render call using <` + l + ">.");
          }
          return a;
        }
      }
      function We(e, a) {
        {
          if (!e._store || e._store.validated || e.key != null)
            return;
          e._store.validated = !0;
          var l = Rr(a);
          if (Ke[l])
            return;
          Ke[l] = !0;
          var x = "";
          e && e._owner && e._owner !== Te.current && (x = " It was passed a child from " + M(e._owner.type) + "."), me(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, x), me(null);
        }
      }
      function Ye(e, a) {
        {
          if (typeof e != "object")
            return;
          if (Array.isArray(e))
            for (var l = 0; l < e.length; l++) {
              var x = e[l];
              Ae(x) && We(x, a);
            }
          else if (Ae(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var k = Z(e);
            if (typeof k == "function" && k !== e.entries)
              for (var O = k.call(e), _; !(_ = O.next()).done; )
                Ae(_.value) && We(_.value, a);
          }
        }
      }
      function kr(e) {
        {
          var a = e.type;
          if (a == null || typeof a == "string")
            return;
          var l;
          if (typeof a == "function")
            l = a.propTypes;
          else if (typeof a == "object" && (a.$$typeof === o || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          a.$$typeof === h))
            l = a.propTypes;
          else
            return;
          if (l) {
            var x = M(a);
            ye(l, e.props, "prop", x, e);
          } else if (a.PropTypes !== void 0 && !Pe) {
            Pe = !0;
            var k = M(a);
            C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
          }
          typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Nr(e) {
        {
          for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
            var x = a[l];
            if (x !== "children" && x !== "key") {
              me(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), me(null);
              break;
            }
          }
          e.ref !== null && (me(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
        }
      }
      function Je(e, a, l, x, k, O) {
        {
          var _ = F(e);
          if (!_) {
            var y = "";
            (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var W = Or();
            W ? y += W : y += qe();
            var T;
            e === null ? T = "null" : Array.isArray(e) ? T = "array" : e !== void 0 && e.$$typeof === n ? (T = "<" + (M(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, y);
          }
          var A = Cr(e, a, l, k, O);
          if (A == null)
            return A;
          if (_) {
            var ne = a.children;
            if (ne !== void 0)
              if (x)
                if (Array.isArray(ne)) {
                  for (var ge = 0; ge < ne.length; ge++)
                    Ye(ne[ge], e);
                  Object.freeze && Object.freeze(ne);
                } else
                  C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                Ye(ne, e);
          }
          return e === t.Fragment ? Nr(A) : kr(A), A;
        }
      }
      function Tr(e, a, l) {
        return Je(e, a, l, !0);
      }
      function Pr(e, a, l) {
        return Je(e, a, l, !1);
      }
      var Ar = Pr, Mr = Tr;
      t.jsx = Ar, t.jsxs = Mr;
    })();
  })(Ie)), Ie;
}
var er;
function zr() {
  return er || (er = 1, process.env.NODE_ENV === "production" ? Oe.exports = Hr() : Oe.exports = Fr()), Oe.exports;
}
var r = zr();
const st = ({ contactInfo: t, quickLinks: i, exploreLinks: s, logoUrl: n, copyrights: v }) => {
  const f = (w) => w ?? "left";
  return /* @__PURE__ */ r.jsxs("footer", { className: "footer", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ r.jsxs("div", { className: `section ${f(t.align)}`, children: [
        /* @__PURE__ */ r.jsx("div", { className: "footer-brand-logo", children: /* @__PURE__ */ r.jsx(
          "img",
          {
            src: n,
            alt: "Logo"
          }
        ) }),
        /* @__PURE__ */ r.jsx("p", { children: t.content.shortdesc }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          t.content.location.label,
          ", ",
          t.content.location.value
        ] }),
        /* @__PURE__ */ r.jsxs("p", { children: [
          "📞 ",
          t.content.phonenumber
        ] })
      ] }),
      /* @__PURE__ */ r.jsx("div", { className: `section ${f(i.align)}`, children: /* @__PURE__ */ r.jsxs("ul", { children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Quick Links" }),
        i.content.map((w, p) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx("a", { href: w.link, children: w.label }) }, p))
      ] }) }),
      /* @__PURE__ */ r.jsx("div", { className: `section ${f(s.align)}`, children: /* @__PURE__ */ r.jsxs("ul", { children: [
        /* @__PURE__ */ r.jsx("h3", { children: "Explore" }),
        s.content.map((w, p) => /* @__PURE__ */ r.jsx("li", { children: /* @__PURE__ */ r.jsx("a", { href: w.link, children: w.label }) }, p))
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx("div", { className: "copyright", children: /* @__PURE__ */ r.jsx("p", { children: v }) })
  ] });
}, pr = dr(void 0), at = ({ children: t }) => {
  const [i, s] = R(!1), n = () => {
    s((f) => !f);
  }, v = (f) => {
    s(f);
  };
  return /* @__PURE__ */ r.jsx(pr.Provider, { value: { isCollapsed: i, toggleSidebar: n, setSidebarCollapsed: v }, children: t });
}, mr = () => {
  const t = fr(pr);
  if (t === void 0)
    throw new Error("useSidebar must be used within a SidebarProvider");
  return t;
}, ot = ({ buttons: t, onNavigate: i, presentPath: s }) => {
  const { isCollapsed: n, setSidebarCollapsed: v } = mr(), [f, w] = R(!0), p = _e(null), [g, o] = R(
    () => document.dir === "rtl" || document.documentElement.dir === "rtl"
  );
  return te(() => {
    const c = () => {
      o(document.dir === "rtl" || document.documentElement.dir === "rtl");
    }, d = new MutationObserver(c);
    return d.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["dir"]
    }), () => d.disconnect();
  }, []), te(() => {
    const c = t.some((d) => d.path === s);
    w(c), !c && !n && s.includes("/course/") && !s.includes("/learning/course/") && v(!0);
  }, [s]), te(() => {
    const c = (d) => {
      !f && p.current && !p.current.contains(d.target) && s.includes("/course/") && !s.includes("/learning/course/") && (n || v(!0));
    };
    return document.addEventListener("mousedown", c), () => {
      document.removeEventListener("mousedown", c);
    };
  }, [f, n, v]), /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(
      "div",
      {
        className: `sidebar ${n ? "collapsed" : ""}`,
        ref: p,
        children: /* @__PURE__ */ r.jsx("div", { className: "sidebar-buttons", children: t.map((c) => {
          const d = c.path === s || (s.includes("/course/") || s.includes("/course_rerun/")) && c.path === "/my-courses" || s.includes("/library/") && c.path === "/libraries" || s.includes("/taxonomy/") && c.path === "/taxonomies";
          return /* @__PURE__ */ r.jsx(
            Ir,
            {
              placement: g ? "left" : "right",
              overlay: /* @__PURE__ */ r.jsx(Dr, { id: `tooltip-${c.path}`, children: c.label }),
              show: n ? void 0 : !1,
              popperConfig: {
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: {
                      altAxis: !0,
                      boundary: "viewport"
                    }
                  }
                ]
              },
              children: /* @__PURE__ */ r.jsx(
                $e,
                {
                  variant: "tertiary",
                  className: `sidebar-btn ${d ? "pgn-btn-active" : "pgn-btn-inactive"}`,
                  onClick: () => i(c.path),
                  children: /* @__PURE__ */ r.jsxs("div", { className: "btn-content", children: [
                    /* @__PURE__ */ r.jsx("span", { className: "icon-container", children: c.icon }),
                    /* @__PURE__ */ r.jsx("span", { className: "btn-label", children: c.label })
                  ] })
                }
              )
            },
            c.path
          );
        }) })
      }
    ),
    !f && !n && /* @__PURE__ */ r.jsx("div", { className: "sidebar-extra-space" })
  ] });
}, Vr = (t = 768) => {
  const [i, s] = R(!1);
  return te(() => {
    const n = () => {
      s(window.innerWidth <= t);
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, [t]), i;
}, qr = (t) => /* @__PURE__ */ D.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41Z",
  fill: "currentColor"
})), rr = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM21 3H3v6h2V5h14v14H5v-4H3v6h18V3z",
  fill: "currentColor"
})), tr = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M21 3H3v18h18V3zm-8.99 15c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26zm3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.16.29-.22.48-.22 1.41h-1.82c0-.49-.08-1.29.31-1.98.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-1.06 0-1.58.8-1.8 1.48l-1.65-.7C9.01 7.15 10.22 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08z",
  fill: "currentColor"
})), Kr = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
  fill: "currentColor"
})), Wr = (t) => /* @__PURE__ */ D.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z",
  fill: "currentColor"
})), nr = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  fill: "currentColor"
})), Yr = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M19 19H5V5h7V3H3v18h18v-9h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z",
  fill: "currentColor"
})), Jr = (t) => /* @__PURE__ */ D.createElement("svg", {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z",
  fill: "currentColor"
})), ir = (t) => /* @__PURE__ */ D.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  ...t
}, /* @__PURE__ */ D.createElement("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z",
  fill: "currentColor"
})), Ur = ({
  id: t,
  buttonTitle: i,
  items: s
}) => /* @__PURE__ */ r.jsx(
  $r,
  {
    id: t,
    title: i,
    variant: "tertiary",
    className: "mr-2",
    children: s.map((n) => /* @__PURE__ */ r.jsx(
      ee.Item,
      {
        href: n.href,
        as: "a",
        className: "small",
        children: n.title
      },
      `${n.title}-dropdown-item`
    ))
  }
), sr = ({
  username: t,
  // studioBaseUrl,
  // logoutUrl,
  authenticatedUserAvatar: i,
  isMobile: s,
  // isAdmin,
  menuItems: n
}) => {
  const v = i ? /* @__PURE__ */ r.jsx(
    "img",
    {
      className: "d-block w-100 h-100",
      src: i,
      alt: t,
      "data-testid": "avatar-image"
    }
  ) : /* @__PURE__ */ r.jsx(
    Lr,
    {
      size: "sm",
      className: "mr-2",
      alt: "avatar",
      "data-testid": "avatar-icon"
    }
  ), f = s ? v : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    t,
    "   ",
    v
  ] });
  return /* @__PURE__ */ r.jsx(
    Ur,
    {
      buttonTitle: f,
      id: "user-dropdown-menu",
      items: n
    }
  );
};
var je = {}, ar;
function Gr() {
  if (ar) return je;
  ar = 1, Object.defineProperty(je, "__esModule", { value: !0 }), je.parse = w, je.serialize = o;
  const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, n = /^[\u0020-\u003A\u003D-\u007E]*$/, v = Object.prototype.toString, f = /* @__PURE__ */ (() => {
    const h = function() {
    };
    return h.prototype = /* @__PURE__ */ Object.create(null), h;
  })();
  function w(h, b) {
    const u = new f(), P = h.length;
    if (P < 2)
      return u;
    const G = (b == null ? void 0 : b.decode) || c;
    let j = 0;
    do {
      const I = h.indexOf("=", j);
      if (I === -1)
        break;
      const S = h.indexOf(";", j), X = S === -1 ? P : S;
      if (I > X) {
        j = h.lastIndexOf(";", I - 1) + 1;
        continue;
      }
      const $ = p(h, j, I), Z = g(h, I, $), H = h.slice($, Z);
      if (u[H] === void 0) {
        let C = p(h, I + 1, X), Q = g(h, X, C);
        const re = G(h.slice(C, Q));
        u[H] = re;
      }
      j = X + 1;
    } while (j < P);
    return u;
  }
  function p(h, b, u) {
    do {
      const P = h.charCodeAt(b);
      if (P !== 32 && P !== 9)
        return b;
    } while (++b < u);
    return u;
  }
  function g(h, b, u) {
    for (; b > u; ) {
      const P = h.charCodeAt(--b);
      if (P !== 32 && P !== 9)
        return b + 1;
    }
    return u;
  }
  function o(h, b, u) {
    const P = (u == null ? void 0 : u.encode) || encodeURIComponent;
    if (!t.test(h))
      throw new TypeError(`argument name is invalid: ${h}`);
    const G = P(b);
    if (!i.test(G))
      throw new TypeError(`argument val is invalid: ${b}`);
    let j = h + "=" + G;
    if (!u)
      return j;
    if (u.maxAge !== void 0) {
      if (!Number.isInteger(u.maxAge))
        throw new TypeError(`option maxAge is invalid: ${u.maxAge}`);
      j += "; Max-Age=" + u.maxAge;
    }
    if (u.domain) {
      if (!s.test(u.domain))
        throw new TypeError(`option domain is invalid: ${u.domain}`);
      j += "; Domain=" + u.domain;
    }
    if (u.path) {
      if (!n.test(u.path))
        throw new TypeError(`option path is invalid: ${u.path}`);
      j += "; Path=" + u.path;
    }
    if (u.expires) {
      if (!d(u.expires) || !Number.isFinite(u.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${u.expires}`);
      j += "; Expires=" + u.expires.toUTCString();
    }
    if (u.httpOnly && (j += "; HttpOnly"), u.secure && (j += "; Secure"), u.partitioned && (j += "; Partitioned"), u.priority)
      switch (typeof u.priority == "string" ? u.priority.toLowerCase() : void 0) {
        case "low":
          j += "; Priority=Low";
          break;
        case "medium":
          j += "; Priority=Medium";
          break;
        case "high":
          j += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${u.priority}`);
      }
    if (u.sameSite)
      switch (typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite) {
        case !0:
        case "strict":
          j += "; SameSite=Strict";
          break;
        case "lax":
          j += "; SameSite=Lax";
          break;
        case "none":
          j += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${u.sameSite}`);
      }
    return j;
  }
  function c(h) {
    if (h.indexOf("%") === -1)
      return h;
    try {
      return decodeURIComponent(h);
    } catch {
      return h;
    }
  }
  function d(h) {
    return v.call(h) === "[object Date]";
  }
  return je;
}
var ke = Gr();
function Xr() {
  const t = typeof global > "u" ? void 0 : global.TEST_HAS_DOCUMENT_COOKIE;
  return typeof t == "boolean" ? t : typeof document == "object" && typeof document.cookie == "string";
}
function Zr(t) {
  return typeof t == "string" ? ke.parse(t) : typeof t == "object" && t !== null ? t : {};
}
function De(t, i = {}) {
  const s = Qr(t);
  if (!i.doNotParse)
    try {
      return JSON.parse(s);
    } catch {
    }
  return t;
}
function Qr(t) {
  return t && t[0] === "j" && t[1] === ":" ? t.substr(2) : t;
}
class Br {
  constructor(i, s = {}) {
    this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.update = () => {
      if (!this.HAS_DOCUMENT_COOKIE)
        return;
      const v = this.cookies;
      this.cookies = ke.parse(document.cookie), this._checkChanges(v);
    };
    const n = typeof document > "u" ? "" : document.cookie;
    this.cookies = Zr(i || n), this.defaultSetOptions = s, this.HAS_DOCUMENT_COOKIE = Xr();
  }
  _emitChange(i) {
    for (let s = 0; s < this.changeListeners.length; ++s)
      this.changeListeners[s](i);
  }
  _checkChanges(i) {
    new Set(Object.keys(i).concat(Object.keys(this.cookies))).forEach((n) => {
      i[n] !== this.cookies[n] && this._emitChange({
        name: n,
        value: De(this.cookies[n])
      });
    });
  }
  _startPolling() {
    this.pollingInterval = setInterval(this.update, 300);
  }
  _stopPolling() {
    this.pollingInterval && clearInterval(this.pollingInterval);
  }
  get(i, s = {}) {
    return s.doNotUpdate || this.update(), De(this.cookies[i], s);
  }
  getAll(i = {}) {
    i.doNotUpdate || this.update();
    const s = {};
    for (let n in this.cookies)
      s[n] = De(this.cookies[n], i);
    return s;
  }
  set(i, s, n) {
    n ? n = Object.assign(Object.assign({}, this.defaultSetOptions), n) : n = this.defaultSetOptions;
    const v = typeof s == "string" ? s : JSON.stringify(s);
    this.cookies = Object.assign(Object.assign({}, this.cookies), { [i]: v }), this.HAS_DOCUMENT_COOKIE && (document.cookie = ke.serialize(i, v, n)), this._emitChange({ name: i, value: s, options: n });
  }
  remove(i, s) {
    const n = s = Object.assign(Object.assign(Object.assign({}, this.defaultSetOptions), s), { expires: new Date(1970, 1, 1, 0, 0, 1), maxAge: 0 });
    this.cookies = Object.assign({}, this.cookies), delete this.cookies[i], this.HAS_DOCUMENT_COOKIE && (document.cookie = ke.serialize(i, "", n)), this._emitChange({ name: i, value: void 0, options: s });
  }
  addChangeListener(i) {
    this.changeListeners.push(i), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 1 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.addEventListener("change", this.update) : this._startPolling());
  }
  removeChangeListener(i) {
    const s = this.changeListeners.indexOf(i);
    s >= 0 && this.changeListeners.splice(s, 1), this.HAS_DOCUMENT_COOKIE && this.changeListeners.length === 0 && (typeof window == "object" && "cookieStore" in window ? window.cookieStore.removeEventListener("change", this.update) : this._stopPolling());
  }
  removeAllChangeListeners() {
    for (; this.changeListeners.length > 0; )
      this.removeChangeListener(this.changeListeners[0]);
  }
}
class et {
  constructor(i) {
    if (!i.host)
      throw new Error("MeiliSearch host is required");
    if (!i.apiKey)
      throw new Error("MeiliSearch apiKey is required");
    if (!i.indexName)
      throw new Error("MeiliSearch indexName is required");
    this.config = i, this.headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${i.apiKey}`,
      "X-Meilisearch-Client": "Meilisearch JavaScript (v0.41.0)"
    };
  }
  /**
   * Update headers from MeiliSearch client object
   * This allows you to use the exact headers from your console logs
   */
  updateHeadersFromClient(i) {
    i && i.httpRequest && i.httpRequest.headers && (this.headers = {
      "Content-Type": i.httpRequest.headers["Content-Type"] || "application/json",
      Authorization: i.httpRequest.headers.Authorization || `Bearer ${this.config.apiKey}`,
      "X-Meilisearch-Client": i.httpRequest.headers["X-Meilisearch-Client"] || "Meilisearch JavaScript (v0.41.0)"
    });
  }
  /**
   * Performs a search using MeiliSearch multi-search API
   * This matches the exact payload structure from your console logs
   */
  async search(i, s = {}) {
    const {
      limit: n = 20,
      offset: v = 0,
      filter: f = ['type = "course_block"'],
      attributesToHighlight: w = ["display_name", "description", "published"],
      attributesToCrop: p = ["description", "published"],
      sort: g = []
    } = s;
    if (!this.config.indexName)
      throw new Error("MeiliSearch indexName is required");
    const o = {
      queries: [
        {
          indexUid: this.config.indexName,
          q: i,
          filter: [[], ...f],
          attributesToHighlight: w,
          highlightPreTag: "__meili-highlight__",
          highlightPostTag: "__/meili-highlight__",
          attributesToCrop: p,
          sort: g,
          offset: v,
          limit: n
        },
        {
          indexUid: this.config.indexName,
          facets: ["block_type", "content.problem_types"],
          filter: f,
          limit: 0
        }
      ]
    }, c = { ...this.headers };
    try {
      const d = await fetch(`${this.config.host}/multi-search`, {
        method: "POST",
        headers: c,
        body: JSON.stringify(o)
      });
      if (!d.ok)
        throw new Error(`MeiliSearch API error: ${d.status} ${d.statusText}`);
      const h = await d.json(), b = h.results[0], u = h.results[1];
      return {
        hits: b.hits || [],
        totalHits: b.estimatedTotalHits || 0,
        facets: u.facetDistribution,
        processingTimeMs: b.processingTimeMs
      };
    } catch (d) {
      throw console.error("MeiliSearch service error:", d), new Error(`Search failed: ${d instanceof Error ? d.message : "Unknown error"}`);
    }
  }
  /**
   * Performs a simple search without facets (for basic search functionality)
   */
  async simpleSearch(i, s = {}) {
    const {
      limit: n = 20,
      offset: v = 0,
      filter: f = ['type = "course_block"'],
      attributesToHighlight: w = ["display_name", "description", "published"],
      attributesToCrop: p = ["description", "published"],
      sort: g = []
    } = s, o = {
      queries: [
        {
          indexUid: this.config.indexName,
          q: i,
          filter: [[], ...f],
          attributesToHighlight: w,
          highlightPreTag: "__meili-highlight__",
          highlightPostTag: "__/meili-highlight__",
          attributesToCrop: p,
          sort: g,
          offset: v,
          limit: n
        }
      ]
    }, c = { ...this.headers };
    try {
      const d = await fetch(`${this.config.host}/multi-search`, {
        method: "POST",
        headers: c,
        body: JSON.stringify(o)
      });
      if (!d.ok)
        throw new Error(`MeiliSearch API error: ${d.status} ${d.statusText}`);
      const b = (await d.json()).results[0];
      return {
        hits: b.hits || [],
        totalHits: b.estimatedTotalHits || 0,
        processingTimeMs: b.processingTimeMs
      };
    } catch (d) {
      throw console.error("MeiliSearch service error:", d), new Error(`Search failed: ${d instanceof Error ? d.message : "Unknown error"}`);
    }
  }
  /**
   * Check if the MeiliSearch service is available
   */
  async checkConnection() {
    try {
      return (await fetch(`${this.config.host}/health`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.config.apiKey}`,
          "X-Meilisearch-Client": "Meilisearch JavaScript (v0.41.0)"
        }
      })).ok;
    } catch (i) {
      return console.error("MeiliSearch connection check failed:", i), !1;
    }
  }
}
const gr = (t) => new et(t);
function vr(t, i) {
  const { contextKey: s, usageKey: n } = t;
  return s ? s.startsWith("course-v1:") ? `${i || ""}/course/${s}?show=${encodeURIComponent(n || "")}` : s.startsWith("library-v1:") ? `${i || ""}/library/${s}` : "#" : "#";
}
function rt(t, i, s) {
  const n = vr(t, i);
  return n === "#" ? (console.warn("Could not generate URL for search hit:", t), "#") : (s ? s(n) : (n.startsWith("http"), window.location.href = n), n);
}
const or = ({
  text: t,
  highlightTag: i = "__meili-highlight__"
}) => {
  if (!t) return null;
  const s = "__/meili-highlight__", n = t.split(i), v = [];
  return n.forEach((f, w) => {
    if (w === 0)
      f && v.push(f);
    else {
      const p = f.indexOf(s);
      if (p !== -1) {
        const g = f.substring(0, p), o = f.substring(p + s.length);
        g && v.push(
          /* @__PURE__ */ r.jsx("mark", { className: "search-highlight", children: g }, `highlight-${w}`)
        ), o && v.push(o);
      } else
        v.push(
          /* @__PURE__ */ r.jsx("mark", { className: "search-highlight", children: f }, `highlight-${w}`)
        );
    }
  }), /* @__PURE__ */ r.jsx(r.Fragment, { children: v });
};
function tt(t) {
  return {
    html: "text",
    video: "video",
    problem: "quiz",
    vertical: "folder",
    sequential: "folder",
    chapter: "folder",
    about: "info",
    static_tab: "text",
    openassessment: "quiz",
    lti_consumer: "link",
    pdf: "file",
    scorm: "file",
    itembank: "library",
    library_content: "library"
  }[t] || "text";
}
const cr = ({
  result: t,
  onNavigate: i,
  baseUrl: s
}) => {
  var g, o;
  const n = (c) => {
    var b;
    c.preventDefault(), c.stopPropagation();
    const d = {
      id: t.id,
      blockType: t.block_type || t.type,
      contextKey: t.context_key,
      // Use the actual context_key from MeiliSearch
      usageKey: t.usage_key,
      // Use the actual usage_key from MeiliSearch
      breadcrumbs: ((b = t.breadcrumbs) == null ? void 0 : b.map((u) => ({
        displayName: u.display_name,
        usageKey: u.usage_key
      }))) || []
    };
    if (t.url) {
      i ? i(t.url) : window.location.href = t.url;
      return;
    }
    rt(d, s, i) === "#" && (i ? i(`/search-result/${t.id}`) : window.location.href = `/search-result/${t.id}`);
  }, v = (c) => {
    var b;
    c.preventDefault(), c.stopPropagation();
    const d = {
      id: t.id,
      blockType: t.block_type || t.type,
      contextKey: t.context_key,
      usageKey: t.usage_key,
      breadcrumbs: ((b = t.breadcrumbs) == null ? void 0 : b.map((u) => ({
        displayName: u.display_name,
        usageKey: u.usage_key
      }))) || []
    }, h = vr(d, s);
    h && h !== "#" && window.open(h, "_blank");
  }, f = ((g = t._formatted) == null ? void 0 : g.display_name) || t.display_name, w = ((o = t._formatted) == null ? void 0 : o.description) || t.description, p = t.block_type || t.type;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "search-result-item",
      onClick: n,
      role: "button",
      tabIndex: 0,
      onKeyDown: (c) => {
        (c.key === "Enter" || c.key === " ") && n(c);
      },
      children: /* @__PURE__ */ r.jsxs("div", { className: "search-result-content", children: [
        /* @__PURE__ */ r.jsx("div", { className: "search-result-icon", children: /* @__PURE__ */ r.jsx(U, { src: tt(p) }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "search-result-text", children: [
          /* @__PURE__ */ r.jsx("div", { className: "search-result-title", children: /* @__PURE__ */ r.jsx(or, { text: f }) }),
          w && /* @__PURE__ */ r.jsx("div", { className: "search-result-description", children: /* @__PURE__ */ r.jsx(or, { text: w }) }),
          t.breadcrumbs && t.breadcrumbs.length > 0 && /* @__PURE__ */ r.jsx("div", { className: "search-result-breadcrumbs", children: t.breadcrumbs.map((c) => c.display_name).join(" / ") })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "search-result-actions", children: /* @__PURE__ */ r.jsx(
          Re,
          {
            src: Yr,
            iconAs: U,
            onClick: v,
            alt: "Open in new window",
            size: "sm"
          }
        ) })
      ] })
    }
  );
}, lr = new Br(), ct = ({
  logoUrl: t,
  menuList: i,
  loginSignupButtons: s,
  authenticatedUser: n = null,
  userMenuItems: v,
  menuAlignment: f,
  onLanguageChange: w,
  getBaseUrl: p,
  meiliSearchConfig: g,
  headerButtons: o,
  languageSelectorList: c
}) => {
  const d = Vr(), { toggleSidebar: h, setSidebarCollapsed: b } = mr(), [u, P] = R(() => lr.get("openedx-language-preference") || "en"), [G, j] = R(!1), [I, S] = R(!1), [X, $] = R(!1), [Z, H] = R(""), [C, Q] = R([]), [re, F] = R(!1), [L, V] = R(null), [M, z] = R(0), [E, q] = R(!1), [K, B] = R(5), ue = _e(null), Y = _e(null), ae = _e(g ? gr(g) : null), de = _e(!1);
  te(() => {
    g != null && g.client && ae.current && ae.current.updateHeadersFromClient(g.client);
  }, [g == null ? void 0 : g.client]), te(() => () => {
    Y.current && clearTimeout(Y.current);
  }, []), te(() => {
    document.body.dir = u === "ar" ? "rtl" : "ltr";
  }, [u]), te(() => {
    d && !de.current ? (b(!0), de.current = !0) : d || (de.current = !1);
  }, [d, b]), te(() => {
    if (!I) return;
    function m(N) {
      ue.current && !ue.current.contains(N.target) && S(!1);
    }
    return document.addEventListener("mousedown", m), () => {
      document.removeEventListener("mousedown", m);
    };
  }, [I]);
  const fe = (m) => {
    P(m), lr.set("openedx-language-preference", m, {
      path: p ? p() : "/"
      // secure: process.env.NODE_ENV === 'production',
      // sameSite: 'strict'
    }), w && w();
  }, xe = f && {
    left: "justify-content-start",
    center: "justify-content-center",
    right: "justify-content-end"
  }[f.toLowerCase()] || "justify-content-start", he = async (m) => {
    if (!m.trim() || !g || !ae.current) {
      Q([]), z(0), $(!1), q(!1);
      return;
    }
    F(!0), V(null), $(!1), B(5);
    try {
      const N = await ae.current.simpleSearch(m, {
        limit: 20,
        offset: 0
      });
      Q(N.hits), z(N.totalHits), $(N.totalHits === 0), q(!0);
    } catch (N) {
      V(N instanceof Error ? N.message : "Search failed"), $(!0), Q([]), z(0);
    } finally {
      F(!1);
    }
  }, oe = (m) => {
    H(m), he(m), d && G && j(!1);
  }, pe = (m) => {
    H(m), X && m.trim() === "" && ($(!1), q(!1)), Y.current && clearTimeout(Y.current), m.trim().length > 0 ? Y.current = setTimeout(() => {
      he(m);
    }, 500) : (Q([]), z(0), $(!1), q(!1));
  }, ce = () => {
    Y.current && (clearTimeout(Y.current), Y.current = null), H(""), Q([]), z(0), $(!1), q(!1), V(null), F(!1);
  }, Ee = () => {
    H(""), Q([]), z(0), $(!1), q(!1), V(null), F(!1), B(5), Y.current && (clearTimeout(Y.current), Y.current = null);
  }, be = () => {
    B((m) => Math.min(m + 10, C.length));
  }, we = (m) => {
    if (c && c.length > 0) {
      const J = c.find((ye) => ye[m]);
      if (J)
        return J[m];
    }
    return {
      en: "English",
      ar: "Arabic",
      hi: "Hindi"
    }[m] || m.toUpperCase();
  }, Se = () => c && c.length > 0 ? c.map((m, N) => {
    const [J, ye] = Object.entries(m)[0];
    return /* @__PURE__ */ r.jsx(ee.Item, { onClick: () => fe(J), children: ye }, `lang-${J}-${N}`);
  }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx(ee.Item, { onClick: () => fe("en"), children: "English" }),
    /* @__PURE__ */ r.jsx(ee.Item, { onClick: () => fe("ar"), children: "Arabic" }),
    /* @__PURE__ */ r.jsx(ee.Item, { onClick: () => fe("hi"), children: "Hindi" })
  ] }), le = (o == null ? void 0 : o.reSync) || (o == null ? void 0 : o.contextSwitcher) || (o == null ? void 0 : o.help) || (o == null ? void 0 : o.notification) || (o == null ? void 0 : o.translation);
  return /* @__PURE__ */ r.jsxs(Ce, { expand: "lg", className: "navbarContainer py-1", children: [
    /* @__PURE__ */ r.jsxs("div", { className: "d-flex align-items-center", children: [
      /* @__PURE__ */ r.jsx("div", { className: "toggle-sidebar-icon", children: /* @__PURE__ */ r.jsx(
        Re,
        {
          src: Kr,
          iconAs: U,
          alt: "Toggle Sidebar",
          onClick: h,
          className: "ms-2 ml-2",
          onMouseDown: (m) => m.stopPropagation()
        }
      ) }),
      /* @__PURE__ */ r.jsx(Ce.Brand, { href: "/", className: "navbar-brand", children: /* @__PURE__ */ r.jsx(
        "img",
        {
          src: t,
          alt: "Logo"
        }
      ) })
    ] }),
    n !== null && /* @__PURE__ */ r.jsx(r.Fragment, { children: d ? /* @__PURE__ */ r.jsx("div", { className: "d-flex justify-content-between align-items-center ml-auto", children: /* @__PURE__ */ r.jsxs("div", { className: "d-flex align-items-center navbar-buttons", children: [
      g && /* @__PURE__ */ r.jsx(
        Re,
        {
          src: Jr,
          iconAs: U,
          alt: "Search",
          onClick: () => j(!0)
        }
      ),
      /* @__PURE__ */ r.jsx("div", { className: "ml-2 usermenu-dropdown-mobile", children: /* @__PURE__ */ r.jsx(
        sr,
        {
          username: n == null ? void 0 : n.username,
          authenticatedUserAvatar: n == null ? void 0 : n.avatar,
          isMobile: d,
          isAdmin: n == null ? void 0 : n.administrator,
          menuItems: v
        }
      ) }),
      le && /* @__PURE__ */ r.jsx(
        Re,
        {
          src: Wr,
          iconAs: U,
          alt: "More",
          onMouseDown: (m) => m.stopPropagation(),
          onClick: () => S((m) => !m)
        }
      ),
      I && le && /* @__PURE__ */ r.jsxs("div", { className: "more-menu-dropdown", ref: ue, children: [
        /* @__PURE__ */ r.jsxs("div", { className: "more-menu-icons-row", children: [
          (o == null ? void 0 : o.reSync) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: ir, iconAs: U, alt: "Sync", tooltipPlacement: "bottom", tooltipContent: "Re-Sync" }) }),
          (o == null ? void 0 : o.contextSwitcher) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: rr, iconAs: U, alt: "Sync", tooltipPlacement: "bottom", tooltipContent: "Switch to User Mode" }) }),
          (o == null ? void 0 : o.help) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: tr, iconAs: U, alt: "Help", tooltipPlacement: "bottom", tooltipContent: "Help" }) }),
          (o == null ? void 0 : o.notification) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: nr, iconAs: U, alt: "Notifications", tooltipPlacement: "bottom", tooltipContent: "Notifications" }) })
        ] }),
        (o == null ? void 0 : o.translation) && /* @__PURE__ */ r.jsxs(ee, { className: "language-dropdown", children: [
          /* @__PURE__ */ r.jsx(ee.Toggle, { variant: "tertiary", id: "language-dropdown", children: we(u) }),
          /* @__PURE__ */ r.jsx(ee.Menu, { children: Se() })
        ] })
      ] })
    ] }) }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      g && /* @__PURE__ */ r.jsx("div", { className: "d-flex align-items-center justify-content-start flex-grow-1 ml-4", children: /* @__PURE__ */ r.jsxs("div", { style: { width: "30rem", position: "relative" }, children: [
        /* @__PURE__ */ r.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          border: "2px solid #ccc",
          borderRadius: "25px",
          padding: "8px 16px",
          background: "#fff",
          position: "relative"
        }, children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "text",
              value: Z,
              onChange: (m) => {
                pe(m.target.value);
              },
              onKeyDown: (m) => {
                m.key === "Enter" && oe(Z);
              },
              placeholder: "Search",
              style: {
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "16px",
                background: "transparent",
                padding: "4px"
              },
              autoComplete: "off"
            }
          ),
          Z && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                ce();
              },
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                marginRight: "8px"
              },
              children: "✕"
            }
          )
        ] }),
        re && /* @__PURE__ */ r.jsxs("div", { className: "search-loading-spinner-container", children: [
          /* @__PURE__ */ r.jsx("div", { className: "search-loading-spinner" }),
          /* @__PURE__ */ r.jsx("span", { children: "Searching..." })
        ] }),
        X && !re && /* @__PURE__ */ r.jsx("div", { className: "no-results-message-desktop", children: /* @__PURE__ */ r.jsx("p", { children: "We didn't find anything matching your search" }) }),
        L && /* @__PURE__ */ r.jsx("div", { className: "search-error-message-desktop", children: /* @__PURE__ */ r.jsxs("p", { children: [
          "Search error: ",
          L
        ] }) }),
        E && C.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "search-results-dropdown", children: [
          /* @__PURE__ */ r.jsx("div", { className: "search-results-header", children: /* @__PURE__ */ r.jsxs("span", { children: [
            M,
            " result",
            M !== 1 ? "s" : "",
            " found"
          ] }) }),
          /* @__PURE__ */ r.jsxs("div", { className: "search-results-list", children: [
            C.slice(0, K).map((m, N) => /* @__PURE__ */ r.jsx(
              cr,
              {
                result: m,
                onNavigate: (J) => {
                  Ee(), window.location.href = J;
                },
                baseUrl: p ? p() : void 0
              },
              m.id || N
            )),
            K < C.length && /* @__PURE__ */ r.jsx("div", { className: "search-results-more", children: /* @__PURE__ */ r.jsxs(
              "button",
              {
                onClick: be,
                style: {
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                  padding: "8px 16px",
                  width: "100%",
                  textAlign: "center",
                  fontSize: "14px"
                },
                children: [
                  "Show ",
                  Math.min(10, C.length - K),
                  " more results"
                ]
              }
            ) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ r.jsxs("div", { className: "d-flex align-items-center gap-2 ms-auto order-lg-3", children: [
        (o == null ? void 0 : o.reSync) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: ir, iconAs: U, alt: "Sync", tooltipPlacement: "bottom", tooltipContent: "Re-Sync" }) }),
        (o == null ? void 0 : o.contextSwitcher) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: rr, iconAs: U, alt: "Sync", tooltipPlacement: "bottom", tooltipContent: "Switch to User Mode" }) }),
        (o == null ? void 0 : o.help) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: tr, iconAs: U, alt: "Help", tooltipPlacement: "bottom", tooltipContent: "Help" }) }),
        (o == null ? void 0 : o.notification) && /* @__PURE__ */ r.jsx("div", { className: "icon-curved-square", children: /* @__PURE__ */ r.jsx(se, { src: nr, iconAs: U, alt: "Notifications", tooltipPlacement: "bottom", tooltipContent: "Notifications" }) }),
        (o == null ? void 0 : o.translation) && /* @__PURE__ */ r.jsxs(ee, { className: "language-dropdown", children: [
          /* @__PURE__ */ r.jsx(ee.Toggle, { variant: "tertiary", id: "language-dropdown", children: we(u) }),
          /* @__PURE__ */ r.jsx(ee.Menu, { children: Se() })
        ] }),
        /* @__PURE__ */ r.jsx("div", { className: "usermenu-dropdown", children: /* @__PURE__ */ r.jsx(
          sr,
          {
            username: n == null ? void 0 : n.username,
            authenticatedUserAvatar: n == null ? void 0 : n.avatar,
            isMobile: d,
            isAdmin: n == null ? void 0 : n.administrator,
            menuItems: v
          }
        ) })
      ] })
    ] }) }),
    n === null && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(Ce.Toggle, { "aria-controls": "main-navbar-nav" }),
      /* @__PURE__ */ r.jsx("div", { className: "d-flex align-items-center gap-2 ms-auto order-lg-3", children: s && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
        /* @__PURE__ */ r.jsx($e, { variant: "primary", children: "Log In" }),
        /* @__PURE__ */ r.jsx($e, { variant: "outline-primary", children: "Sign Up" })
      ] }) })
    ] }),
    /* @__PURE__ */ r.jsx(Ce.Collapse, { id: "main-navbar-nav", className: "justify-content-between", children: /* @__PURE__ */ r.jsx(Ge, { className: `nav-gap gap-3 flex-grow-1 ${xe}`, children: n === null && i.map((m) => m.subMenu ? /* @__PURE__ */ r.jsx(Xe, { title: m.label, id: `nav-dropdown-${m.label}`, children: m.subMenu.map((N) => /* @__PURE__ */ r.jsx(Xe.Item, { onClick: () => console.log("Selected submenu:", N.label), children: N.label }, `sub-${N.label}`)) }, `menu-${m.label}`) : /* @__PURE__ */ r.jsx(Ge.Link, { as: "span", className: "text-uppercase fw-semibold", children: m.label }, `menu-${m.label}`)) }) }),
    g && G && /* @__PURE__ */ r.jsxs("div", { className: "fixed-search-bar", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "fixed-search-bar-inner", children: [
        /* @__PURE__ */ r.jsxs("div", { style: {
          display: "flex",
          alignItems: "center",
          border: "2px solid #ccc",
          borderRadius: "25px",
          padding: "12px 16px",
          background: "#fff",
          position: "relative",
          width: "100%"
        }, children: [
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "text",
              value: Z,
              onChange: (m) => {
                pe(m.target.value);
              },
              onKeyDown: (m) => {
                m.key === "Enter" && oe(Z);
              },
              placeholder: "Search",
              style: {
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "18px",
                background: "transparent",
                padding: "4px"
              },
              autoComplete: "off",
              autoFocus: !0
            }
          ),
          Z && /* @__PURE__ */ r.jsx(
            "button",
            {
              type: "button",
              onClick: () => {
                ce();
              },
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                marginRight: "8px",
                fontSize: "18px"
              },
              children: "✕"
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx("button", { className: "close-search-bar", type: "button", onClick: () => j(!1), "aria-label": "Close Search", children: "×" })
      ] }),
      re && /* @__PURE__ */ r.jsxs("div", { className: "search-loading-spinner-container", children: [
        /* @__PURE__ */ r.jsx("div", { className: "search-loading-spinner" }),
        /* @__PURE__ */ r.jsx("span", { children: "Searching..." })
      ] }),
      X && !re && /* @__PURE__ */ r.jsx("div", { className: "no-results-message", children: /* @__PURE__ */ r.jsx("p", { children: "We didn't find anything matching your search" }) }),
      L && /* @__PURE__ */ r.jsx("div", { className: "search-error-message", children: /* @__PURE__ */ r.jsxs("p", { children: [
        "Search error: ",
        L
      ] }) }),
      E && C.length > 0 && /* @__PURE__ */ r.jsxs("div", { className: "search-results-mobile", children: [
        /* @__PURE__ */ r.jsx("div", { className: "search-results-header", children: /* @__PURE__ */ r.jsxs("span", { children: [
          M,
          " result",
          M !== 1 ? "s" : "",
          " found"
        ] }) }),
        /* @__PURE__ */ r.jsxs("div", { className: "search-results-list", children: [
          C.slice(0, K).map((m, N) => /* @__PURE__ */ r.jsx(
            cr,
            {
              result: m,
              onNavigate: (J) => {
                Ee(), window.location.href = J;
              },
              baseUrl: p ? p() : void 0
            },
            m.id || N
          )),
          K < C.length && /* @__PURE__ */ r.jsx("div", { className: "search-results-more", children: /* @__PURE__ */ r.jsxs(
            "button",
            {
              onClick: be,
              style: {
                background: "none",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
                padding: "12px 16px",
                width: "100%",
                textAlign: "center",
                fontSize: "16px"
              },
              children: [
                "Show ",
                Math.min(10, C.length - K),
                " more results"
              ]
            }
          ) })
        ] })
      ] })
    ] })
  ] });
}, xr = dr(void 0), lt = ({ children: t, meiliSearchConfig: i }) => {
  const [s, n] = R(""), [v, f] = R([]), [w, p] = R(0), [g, o] = R(!1), [c, d] = R(!1), [h, b] = R(null), [u, P] = R(0), [G, j] = R(!1), [I, S] = R(!1), [X, $] = R(null), Z = gr(i), H = async (F) => {
    if (!F.trim()) {
      Q();
      return;
    }
    o(!0), d(!1), b(null), P(0);
    try {
      const L = await Z.search(F, {
        limit: 20,
        offset: 0
      }), V = L.hits.map((E) => {
        var q, K, B;
        return {
          id: E.id,
          title: ((q = E._formatted) == null ? void 0 : q.display_name) || E.display_name,
          type: E.type,
          url: E.url,
          description: ((K = E._formatted) == null ? void 0 : K.description) || E.description,
          block_type: E.block_type,
          published: ((B = E._formatted) == null ? void 0 : B.published) || E.published,
          _formatted: E._formatted
        };
      }), M = L.totalHits, z = V.length === 20 && M > V.length;
      f(V), p(M), j(z), $(L.facets || null);
    } catch (L) {
      console.error("Search error:", L), d(!0), b(L instanceof Error ? L.message : "Search failed"), f([]), p(0), j(!1), $(null);
    } finally {
      o(!1);
    }
  }, C = async () => {
    if (!(!G || I)) {
      S(!0);
      try {
        const F = u + 20, L = await Z.simpleSearch(s, {
          limit: 20,
          offset: F
        }), V = L.hits.map((E) => {
          var q, K, B;
          return {
            id: E.id,
            title: ((q = E._formatted) == null ? void 0 : q.display_name) || E.display_name,
            type: E.type,
            url: E.url,
            description: ((K = E._formatted) == null ? void 0 : K.description) || E.description,
            block_type: E.block_type,
            published: ((B = E._formatted) == null ? void 0 : B.published) || E.published,
            _formatted: E._formatted
          };
        }), M = L.totalHits, z = V.length === 20 && M > v.length + V.length;
        f((E) => [...E, ...V]), p(M), j(z), P(F);
      } catch (F) {
        console.error("Error fetching next page:", F), d(!0), b(F instanceof Error ? F.message : "Failed to load more results");
      } finally {
        S(!1);
      }
    }
  }, Q = () => {
    n(""), f([]), p(0), d(!1), b(null), P(0), j(!1), $(null);
  }, re = {
    searchKeywords: s,
    setSearchKeywords: n,
    searchResults: v,
    totalHits: w,
    isLoading: g,
    hasError: c,
    errorMessage: h,
    facets: X,
    performSearch: H,
    clearSearch: Q,
    hasNextPage: G,
    fetchNextPage: C,
    isFetchingNextPage: I
  };
  return /* @__PURE__ */ r.jsx(xr.Provider, { value: re, children: t });
}, ut = () => {
  const t = fr(xr);
  if (t === void 0)
    throw new Error("useSimpleSearch must be used within a SimpleSearchProvider");
  return t;
}, dt = (t) => {
  try {
    if (t.status !== 200)
      throw new Error("Failed to fetch theme config");
    const i = t.data.theme_colors;
    if (!i || typeof i != "object")
      throw new Error("Invalid theme_colors in API response");
    const s = document.documentElement;
    for (const n in i)
      if (Object.prototype.hasOwnProperty.call(i, n)) {
        const v = i[n];
        s.style.setProperty(`--${n.replace(/_/g, "-")}`, v);
      }
  } catch (i) {
    console.error("Error applying theme from API:", i.message);
    const s = {
      primary: "#2B2399",
      primary_alt: "#3C32B5",
      primary_hover: "#E2E1F9",
      primary_active: "#1F1A7D",
      primary_light: "#E2E1F9",
      secondary: "#7A8AFF",
      secondary_alt: "#5C6EF0",
      secondary_hover: "#ECEEFF",
      secondary_active: "#4A5BD1",
      secondary_light: "#ECEEFF"
    }, n = document.documentElement;
    for (const v in s)
      if (Object.prototype.hasOwnProperty.call(s, v)) {
        const f = s[v];
        n.style.setProperty(`--${v.replace(/_/g, "-")}`, f);
      }
  }
}, ft = ({
  announcementType: t,
  data: i,
  backgroundColor: s
}) => {
  const [n, v] = R(() => {
    const g = localStorage.getItem(t);
    return g ? (Date.now() - parseInt(g, 10)) / 36e5 >= 24 : !0;
  }), [f, w] = R(!1), p = () => {
    w(!0), setTimeout(() => {
      v(!1), w(!1), localStorage.setItem(t, Date.now().toString());
    }, 500);
  };
  return te(() => {
    const o = setInterval(() => {
      const c = localStorage.getItem(t);
      c && (Date.now() - parseInt(c, 10)) / 36e5 >= 24 && (localStorage.removeItem(t), v(!0));
    }, 36e5);
    return () => clearInterval(o);
  }, [t]), !i || i.trim() === "" || !n ? null : /* @__PURE__ */ r.jsxs(
    "div",
    {
      className: `announcement-banner ${n && !f ? "showBanner" : f ? "hideBanner" : ""}`,
      style: { backgroundColor: s || "var(--bg-body)" },
      children: [
        /* @__PURE__ */ r.jsx(
          "div",
          {
            className: "announcement-content",
            dangerouslySetInnerHTML: { __html: i }
          }
        ),
        /* @__PURE__ */ r.jsx(
          U,
          {
            src: qr,
            className: "close-icon",
            onClick: p,
            "aria-label": "Close announcement banner"
          }
        )
      ]
    }
  );
};
export {
  ft as AnnouncementBanner,
  st as Footer,
  ct as MainHeader,
  ot as Sidebar,
  at as SidebarProvider,
  lt as SimpleSearchProvider,
  dt as dynamicTheme,
  mr as useSidebar,
  ut as useSimpleSearch
};
