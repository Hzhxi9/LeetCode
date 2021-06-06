/**
 *  数组中只出现一次的数字
 *
 *  题目
 *  一个整型数组里除了两个数字之外，其他的数字都出现了偶数次。请写程序找出这两个只出现一次的数字。
 *
 *  思路
 *  1异或1=0 0异或0=0 1异或0=0
 *
 *  分析
 *  如果题目是只有一个只出现一次的数字：
 *  两个相同的数异或值为0，将数组所有的值进行异或操作，最后剩余值就是目标值。
 *
 *  如果有两个出现一次的值
 *  1. 数组所有元素异或后是两个目标值的异或值
 *  2. 两个目标值不相等，所以最终的异或值不为0
 *  3. 最终异或值的二进制某一位肯定是1，找到这个位置为index
 *  4. 所以目标的两个值的二进制，一个index位为0，另一个index位为1
 *  5. 按二进制index位为0和1，将数组分两批进行异或，两批最后的结果即为两个目标值
 */

const findNumsAppearOnce = array => {
  /**
   * x ^ x = 0
   * x ^ 0 = x
   */
  let num1,
    num2,
    sum = 0; // num1 ^ num2
  for (let i = 0, len = array.length; i < len; i++) {
    sum ^= array[i];
  }

  /**
   * num1 !== num2
   * 二进制表示中一定有一位存在不同 即一位是1 一位是0
   */
  let k = 0;

  /**查找第k位不是1， 哪一位不同 */
  while (!((sum >> k) & 1)) k++;
  for (let i = 0, len = array.length; i < len; i++) {
    if ((array[i] >> k) & 1) {
      num1 ^= array[i]; /**num1 */
    }
  }

  num2 = sum ^ num1; /**num1 ^ num2 ^ num1 = num2 */

  return [num1, num2];
};

/**
 *
 * 只出现一次的数字
 * 结合律
 * 1. 与或
 *    1 & 1 | 0 = (1 & 1) | 0 = 1 | 0 = 1
 *              =  1 & (1 | 0) = 1 & 1 = 1
 *
 *    a & a | c = a & (a | c)
 *
 * 2. 异或
 *    1 ^ 1 ^ 0 = (1 ^ 1) ^ 0 = 0 ^ 0 = 0
 *              = 1 ^ (1 ^ 0) = 1 ^ 1 = 0
 *
 *    a ^ a = 0
 *    a ^ (~a) = 1
 *    0 ^ b = b
 *    a ^ b ^ a = a ^ a ^ b =0 ^ b = b
 */
// const findNumsAppearOnce = array => {
//   let result = 0;
//   for (let i = 0, len = array.length; i < len; i++) {
//     result ^= array[i];
//   }
//   return result;
// };

/**Debug */
console.log(findNumsAppearOnce([3, 1, 1, 2, 2, 4]));
