/**
 * @param {string} s
 * @return {number}
 */

/**对象 */
var firstUniqChar = function (s) {
  const tmp = {};
  for (let i = 0, len = s.length; i < len; i++) {
    if (tmp[s[i]] === undefined) tmp[s[i]] = 1;
    else tmp[s[i]] += 1;
  }
  for (const key in tmp) if (tmp[key] === 1) return s.indexOf(key);
  return -1;
};

/**Map */
var firstUniqChar = function (s) {
  const map = new Map();

  for (let i = 0, len = s.length; i < len; i++) {
    if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
    else map.set(s[i], 1);
  }

  for (const [key, value] of map) if (value === 1) return s.indexOf(key);
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("llll"));
