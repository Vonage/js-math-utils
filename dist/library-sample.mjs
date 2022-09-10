function c(n, t, a) {
  return Math.max(t, Math.min(a, n));
}
function e(n, t, a, r, u) {
  return (u - r) * (n - t) / (a - t) + r;
}
export {
  c as clip,
  e as map
};
