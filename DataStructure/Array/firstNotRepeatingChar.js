/**
 * 第一个只出现一次的字符
 *
 * 题目描述
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,并返回它的位置, 如果没有则返回-1（需要区分大小写）
 *
 */

/**
 * @param {string} s
 * @returns {number}
 */
function firstNotRepeatingChar(s) {
  if (!s || s.length > 10000) return -1;
  const temp = {};
  for (let i = 0, len = s.length; i < len; i++) {
    if (temp[s[i]] !== undefined) {
      temp[s[i]] += 1;
    } else {
      temp[s[i]] = 1;
    }
  }
  for (const key in temp) {
    if (temp[key] === 1) return temp[key];
  }
  return -1;
}

/**
 * @param {string} s
 * @returns {number}
 */
function firstNotRepeatingChar(s) {
  if (!s || s.length > 10000) return -1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
}

/**
 *
 */
const firstNotRepeatingChar = function (s) {
  if (!s || s.length > 10000) return -1;
  const result = s.split("").reduce((acc, cur) => {
    if (acc[cur] !== undefined) {
      acc[cur] += 1;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  Object.keys(result).forEach((key) => {
    console.log(key)
  });
  return -1
};

console.log(firstNotRepeatingChar("sssb"));
