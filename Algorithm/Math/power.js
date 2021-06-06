/**
 *  数值的整数次方
 *
 *  题目
 *  给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方
 *
 *  分析
 *  exponent 是正，负，0的情况
 *  base为0的情况
 */

/**
 *
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */
const power = function (base, exponent) {
  let result = 1;
  if (exponent === 0) {
    return 1;
  } else if (exponent > 0) {
    while (exponent) {
      result *= base;
      exponent--;
    }
  } else if (exponent < 0) {
    while (exponent) {
      result *= 1 / base;
      exponent++;
    }
  }
  return result;
};

/**Debug */
console.log(power(2, -3));
