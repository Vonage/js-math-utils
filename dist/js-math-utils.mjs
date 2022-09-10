var l = Object.defineProperty;
var i = (e, t, s) => t in e ? l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var h = (e, t, s) => (i(e, typeof t != "symbol" ? t + "" : t, s), s);
function r(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function o(e, t, s, u, a) {
  return (a - u) * (e - t) / (s - t) + u;
}
class c {
  constructor(t) {
    h(this, "sum", 0);
    h(this, "values", []);
    h(this, "length");
    this.length = t;
  }
  add(...t) {
    this.values.push(...t);
    for (const s of t)
      this.sum += s;
    for (; this.values.length > this.length; ) {
      const s = this.values.shift();
      this.sum -= s;
    }
  }
  get value() {
    return this.sum / Math.max(1, this.values.length);
  }
}
export {
  c as MobileAverage,
  r as clip,
  o as map
};
