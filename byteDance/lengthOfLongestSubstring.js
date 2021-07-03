/**无重复字符的最长子串 */

function lengthOfLongestSubstring(str) {
  let tmp = "",
    maxLength = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    const idx = tmp.indexOf(str[i]);

    if (~idx) tmp = tmp.substring(idx + 1);

    tmp += str[i];

    if (tmp.length > maxLength) maxLength = tmp.length;
  }
  return maxLength;
}
