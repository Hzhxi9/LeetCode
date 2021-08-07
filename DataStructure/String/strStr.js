/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {
//   if (!needle) return 0;
//   if (!haystack) return -1;

//   const hLen = haystack.length,
//     nLen = needle.length;

//   for (let i = 0; i < hLen; i++) {
//     /**根据needle长度筛选出字符串 */
//     const str = haystack.slice(i, i + nLen);

//     if (str === needle) return i;
//   }

//   return -1;
// };

var strStr = function (haystack, needle) {
  const hLen = haystack.length,
    nLen = needle.length;

  if (nLen === 0) return 0;

  let i = 0,
    j = 0;

  while (i < hLen && j < nLen) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }
  if (j === nLen) return i - j;
  return -1;
};

console.log(strStr("hello", "ll"));
console.log(strStr("aaaaa", "aab"));
