/**
 * 字符串转换成整数
 *
 * 题目
 * 将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。
 *
 * 思路
 * 循环字符串：当前值*10相加，循环时看每一项是否合法，最后根据首位符号判断
 * 1. 输入为空
 * 2. 有无符号 正负
 */

const MIN_INT_ABS = Math.pow(2, 31);
const MAX_INT = MIN_INT_ABS - 1;

/**
 * 判断char是否是符号
 * @param {String} char
 * @returns {Boolean}
 */
function isSymbol(char) {
  return char === "-" || char === "+";
}

/**
 * 判断char是否是数字
 * @param {String} char
 * @returns {Boolean}
 */
function isNumber(char) {
  return char >= "0" && char <= "9";
}

/**
 * @param {String} str
 * @returns {Number}
 */
function strToInt(str) {
  const length = str.length;

  /**找出第一个非空字符，判断是不是符号或者数字 */
  let firstNotEmptyIndex = 0;
  while (firstNotEmptyIndex < length && str[firstNotEmptyIndex] === " ") {
    ++firstNotEmptyIndex;
  }

  if (!isSymbol(str[firstNotEmptyIndex]) && !isNumber(str[firstNotEmptyIndex]))
    return 0;

  /**如果是符号，那么判断正负号 */
  let positive = true,
    firstNumberIndex = firstNotEmptyIndex;
  if (isSymbol(str[firstNotEmptyIndex])) {
    positive = str[firstNotEmptyIndex] === "+";
    firstNumberIndex += 1;
  }

  /**如果符号后面跟的不是数字，那么就是非法的，返回0 */
  if (!isNumber(str[firstNumberIndex])) return 0;

  /**确定连续数字字符的起始边界 */
  let endNumberIndex = firstNumberIndex;
  while (endNumberIndex < length && isNumber(str[endNumberIndex + 1])) {
    ++endNumberIndex;
  }

  /**
   * 计算数字字符的代表的数字大小
   * 并且判断是否越界
   */
  let result = 0;
  for (let i = firstNumberIndex; i <= endNumberIndex; ++i) {
    result = result * 10 + (str[i] - "0");
    if (positive && result > MAX_INT) {
      return MAX_INT;
    }
    if (!positive && result > MIN_INT_ABS) {
      return -1 * MIN_INT_ABS;
    }
  }

  /**返回的时候注意符号 */
  return positive ? result : -1 * result;
}

module.exports = strToInt;
