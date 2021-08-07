/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  let res = strs[0] ? strs[0] : "",
    reg = new RegExp("^" + res);

  for (let i = 0, len = strs.length; i < len; i++) {
    while (!reg.test(strs[i]) && res.length) {
      res = res.slice(0, res.length - 1);
      reg = new RegExp("^" + res);
    }
  }
  return res;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
