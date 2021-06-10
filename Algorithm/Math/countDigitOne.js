/**
 *  整数中 1 出现的次数
 *
 *  题目
 *  求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 *
 */

/**
 * 解法一
 * 包含1的个数
 * @param {number} n
 * @returns {number}
 */
// const countDigitOne = function (n) {
//   let count = 0;
//   for (let i = 0; i <= n; i++) {
//     count += numberOfOne(i);
//   }
//   return count;
// };

// /**
//  * 查找是否包含1
//  * @param {number} n
//  * @returns {number}
//  */
// function numberOfOne(n) {
//   let count = 0;
//   let pos = n.toString().indexOf(1);
//   while (~pos) {
//     pos = n.toString().indexOf(1, pos + 1);
//     count++;
//   }
//   return count;
// }

/**
 *  解法二
 */
// const countDigitOne = function (n) {
//   let count = 0,
//     i = 1,
//     high = (low = cur = level = 0),
//     len = n.toString().length;
//   while (i <= len) {
//     /**获取当前第i位数处于什么量级1,10,100 */
//     level = Math.pow(10, i - 1);
//     /**计算cur之前的数 高位 */
//     high = parseInt(n / (level * 10));
//     /**计算cur之后的数 低位 */
//     low = n % level;
//     /**计算cur */
//     cur = parseInt(n / level) % 10;
//     if (cur === 0) count += high * level;
//     else if (cur === 1) count += high * level + low + 1;
//     else count += (high + 1) * level;
//     i++;
//   }
//   return count;
// };

/**
 * 解法三
 *
 * @param {number} n
 * @returns {number}
 */
const countDigitOne = function (n) {
  if (n === 0) return 0;
  const len = n.toString().length;
  /**当n为0~9时 */
  if (len === 1) return 1;
  /**获取当前幂级 */
  const level = Math.pow(10, len - 1),
    /**获取第一个数字 */
    firstNumber = parseInt(n / level),
    /**
     * 第一个数字可能出现的情况
     * 当第一个数字为1时，出现的可能数取决后面的数字
     * 当第一个数字不为1时，出现的可能数为当前幂级
     **/
    firstBit = parseInt(firstNumber === 1 ? (n % level) + 1 : level),
    /**
     * 其他位数可能出现的情况
     * len - 1 剩余位的个数
     * level / 10 剩余位的幂级
     * * firstNumber 根据首位进行判断情况
     */
    otherBit = parseInt((len - 1) * firstNumber * (level / 10));
  return firstBit + otherBit + countDigitOne(n % level);
};

module.exports = countDigitOne;
