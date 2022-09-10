var n = Object.defineProperty;
var r = (e, t, s) => t in e ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var h = (e, t, s) => (r(e, typeof t != "symbol" ? t + "" : t, s), s);
function i(...e) {
  let t = 0;
  for (const s of e)
    t += Array.isArray(s) ? s.reduce((u, a) => u + a, 0) : s;
  return t;
}
function o(e, t, s) {
  return Math.max(t, Math.min(s, e));
}
function c(e, t, s, u, a) {
  return (a - u) * (e - t) / (s - t) + u;
}
class m {
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
  m as MobileAverage,
  o as clip,
  c as map,
  i as sum
};
