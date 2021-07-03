/**最长公共前缀 */

function longestCommonPrefix(strs) {
  let res = strs[0] ? strs[0] : "";

  for (let i = 1, len = strs.length; i < len; i++) {
    let reg = new RegExp("^" + res);

    while (!reg.test(strs[i]) && res.length) {
      res = res.slice(0, res.length - 1);
      reg = new RegExp("^" + res);
    }
  }
  return res;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
