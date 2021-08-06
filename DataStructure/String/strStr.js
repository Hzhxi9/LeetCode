/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0;
  if (!haystack) return -1;
  let slow = 0,
    fast = 0;
  while (fast < haystack.length) {
    if (haystack[fast] === needle[fast]) {
      slow = fast;
    }
    fast++;
  }
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "aab"));
