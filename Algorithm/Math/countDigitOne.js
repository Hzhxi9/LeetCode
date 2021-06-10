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
 * 解法二
 *
 * 分别计算数字中每个位置可能出现1的情况，相加
 *
 * 将数字分为两部分： 当前数字为1，其后面数字可能出现的情况low，当前数字为1，其前面数字可能出现的情况high，所有情况为low * high种情况。
 *
 * 例如，在分析数字8103时：
 * 1. 个位 3: 个位已经是最低位了，所以low只有1中情况。high可以取0 - 810共811种情况，所有情况为1 * 811 = 811种情况。
 * 2. 百位 1: low可能为100 - 199共100种情况，high可以取0 - 7共8种情况;当high取8时，low还可以取100 - 104，所有情况为100 * 8 + 4 = 804种情况。
 * 3. 千位 8:low可能为1000 - 1999共1000种情况，当前已经是最高位了，high只有一种情况，所有情况为1000 * 1 = 1000种情况。
 *
 * 由以上示例：分三种情况考虑，现有数字abcde，分析百位数字c
 * 1. c = 0 : 有 ab*100 种情况
 * 2. c = 1 : 有 ab*100 + de + 1 种情况
 * 3. c > 2 : 有 (ab+1) * 100 种情况
 *
 * c是abcde第3位数：
 * 当前的量级：level = 10的(3-1)次方
 *
 * ab = abcde / (level*10)
 * c = (abcde / (level)) % 10
 * de = abcde % level
 *
 * @param {number} n
 * @returns {number}
 */
const countDigitOne = function (n) {
  let count = 0,
    i = 1,
    high = (low = cur = level = 0),
    len = n.toString().length;
  while (i <= len) {
    /**获取当前第i位数处于什么量级1,10,100 */
    level = Math.pow(10, i - 1);
    /**计算cur之前的数 高位 */
    high = parseInt(n / (level * 10));
    /**计算cur之后的数 低位 */
    low = n % level;
    /**计算cur */
    cur = parseInt(n / level) % 10;
    /**ab*100  */ if (cur === 0) count += high * level;
    /**ab*100 + de + 1  */ else if (cur === 1) count += high * level + low + 1;
    /**(ab+1) * 100 */ else count += (high + 1) * level;
    i++;
  }
  return count;
};

/**
 * 解法三
 *
 * @param {number} n
 * @returns {number}
 */
// const countDigitOne = function (n) {
//   if (n === 0) return 0;
//   const len = n.toString().length;
//   /**当n为0~9时 */
//   if (len === 1) return 1;
//   /**获取当前幂级 */
//   const level = Math.pow(10, len - 1),
//     /**获取第一个数字 */
//     firstNumber = parseInt(n / level),
//     /**
//      * 第一个数字可能出现的情况
//      * 当第一个数字为1时，出现的可能数取决后面的数字
//      * 当第一个数字不为1时，出现的可能数为当前幂级
//      **/
//     firstBit = parseInt(firstNumber === 1 ? (n % level) + 1 : level),
//     /**
//      * 其他位数可能出现的情况
//      * len - 1 剩余位的个数
//      * level / 10 剩余位的幂级
//      * * firstNumber 根据首位进行判断情况
//      */
//     otherBit = parseInt((len - 1) * firstNumber * (level / 10));
//   /**递归剩余位 */
//   return firstBit + otherBit + countDigitOne(n % level);
// };

module.exports = countDigitOne;
