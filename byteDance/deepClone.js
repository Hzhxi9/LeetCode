const isObject = (o) =>
  (typeof o === "object" || typeof o === "function") && o !== null;

function deepClone(o) {
  const clone = o instanceof Array ? [] : {};
  for (const key in o) {
    if (o.hasOwnProperty(key)) {
      clone[key] === isObject(o) ? deepClone(o[key]) : o[key];
    }
  }
  return clone;
}
