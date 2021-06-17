/**
 * 表示数值的字符串
 *
 * 题目
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。
 * 例如，字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。 但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。
 *
 * 思路
 * 1.只能出现数字、符号位、小数点、指数位
 * 2.小数点，指数符号只能出现一次、且不能出现在开头结尾
 * 3.指数位出现后，小数点不允许在出现
 * 4.符号位只能出现在开头和指数位后面
 */

const isNumber = str => {
  if (str === undefined) return false;
  let hasPoint = false,
    hasExp = false;

  for (let i = 0, len = str.length; i < len; i++) {
    const target = str[i];

    if (target >= 0 && target <= 9) {
      /**遇到0~9,继续循环 */
      continue;
    } else if (target === "e" || target === "E") {
      /**遇到当前为e或E时 */
      if (hasExp || i === 0 || i === len - 1) {
        /**当e出现在第一位或者最后一位时，或者已存在e或者E */
        return false;
      } else {
        /**记录出现e或者E */
        hasExp = true;
        continue;
      }
    } else if (target === ".") {
      /**遇到当前为.时 */
      if (hasExp || hasPoint || i === 0 || i === len - 1) {
        /**当前.出现在第一个或者最后一位，或者存在小数点、或者之前存在e时 */
        return false;
      } else {
        /**记录出现小数点 */
        hasPoint = true;
        continue;
      }
    } else if (target === "+" || target === "-") {
      /**遇到当前为+或者-时 */
      if (i === 0 || str[i - 1] === "e" || str[i - 1] === "E") {
        /**当前+或者-出现在第一位， 或者前一位为e或者E时 */
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

console.log(isNumber("+100"));
console.log(isNumber("5e.2"));
console.log(isNumber("-123"));
console.log(isNumber("-1E-16"));
console.log(isNumber("12e"));
console.log(isNumber("1a3.14"));
console.log(isNumber("1.2.3"));
console.log(isNumber("+-5"));
console.log(isNumber("12e+4.3"));
