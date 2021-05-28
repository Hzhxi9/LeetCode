/**
 * url: https://segmentfault.com/a/1190000018624924?utm_source=tag-newest
 */

/**
 *  无重复字符的最长子串
 *
 *  题目描述
 *
 *  给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 *  示例1:
 *  输入:  s = "abcabcbb"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 *
 *  示例2:
 *  输入: s = "bbbbb"
 *  输出: 1
 *  解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 *
 *  示例3:
 *  输入: s = "pwwkew"
 *  输出: 3
 *  解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke"是一个子序列，不是子串。
 *
 *  示例4:
 *  输入: s = ""
 *  输出: 0
 *
 *  提示
 *  1. 0 <= s.length <= 5 * 10^4
 *  2. s 由英文字母、数字、符号和空格组成
 *
 */

const lengthOfLongestSubstring = function (s) {
  /**定义临时变量,最大长度 */
  let temp = "",
    maxLength = 0;

  for (let i = 0, len = s.length; i < len; i++) {
    /**查找临时变量是否存在当前循环的字符 */
    const index = temp.indexOf(s[i]);
    /**
     * 这里使用了按位取反
     * ~-1 === 0, 可以根据这个判断是否存在该字符
     * url: https://segmentfault.com/q/1010000005697515
     */
    if (~index) {
      /**
       * 截取匹配到的字符
       */
      temp = temp.substring(index + 1);
    }
    temp += s[i];
    /**判断是否当前最大长度 */
    if (temp.length > maxLength) {
      maxLength = temp.length;
    }
  }
  return maxLength;
};

const lengthOfLongestSubstring = function (s) {
  let maxLength = 0,
    begin = 0,
    end = 1;
  while (end <= s.length) {
    const index = s.slice(begin, end - 1).indexOf(s[end - 1]);
    if (~index) {
      begin += index + 1;
    } else {
      end - begin > maxLength ? (maxLength = end - begin) : null;
    }
    end++;
  }
  return maxLength;
};

/**Debug */
console.log(lengthOfLongestSubstring("abcabcbb"));
