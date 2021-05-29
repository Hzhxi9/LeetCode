/**
 * 构建乘积数组
 *
 * 题目描述
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 *
 * 思路分析
 * B[i]的值是A数组所有元素的乘积再除以A[i]，但是题目中给定不能用除法
 * B[i]的值可以看作下图的矩阵中每行的乘积。
 * 可以将B数组分为上下两个三角，先计算下三角，然后把上三角乘进去。
 */

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const multiply = function (nums) {
  const result = [];

  /**从左边0开始累乘 */
  for (let i = 0, len = nums.length, p = 1; i < len; i++) {
    /**左边 p的结果赋值给result[i] */
    result[i] = p;
    /**p 在此次循序继续累乘 */
    p *= nums[i];
  }

  /**从右边最后一位开始累乘 */
  for (let j = nums.length - 1, p = 1; j >= 0; j--) {
    /**左边result[j]有值， 直接累乘p */
    result[j] *= p;
    p *= nums[j];
  }

  return result;
};

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */
const multiply = function (nums) {
  let result = [];
  if (Array.isArray(nums) || nums.length) {
    /**计算左边 */
    result[0] = 1;
    for (let i = 1, len = nums.length; i < len; i++) {
      result[i] = result[i - 1] * nums[i - 1];
    }

    /**计算右边 */
    let temp = 1;
    for (let i = nums.length - 1; i > 0; i--) {
      temp = temp * nums[i];
      /**赋值数组的倒数二个坐标, 最后一个为1 */
      result[i - 1] = result[i - 1] * temp;
    }
  }
  return result;
};

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const multiply = function (nums) {
  const len = nums.length;
  const result = [];
  /**第一次循环 nums 记录 次数 */
  for (let i = 0; i < len; i++) {
    let temp = 1;
    /** 第二次循环记录 nums 所有值 */
    for (let j = 0; j < len; j++) {
      if (i === j) {
        /** 判断 i === j 时， 即剔除i的情况 */
        temp *= 1;
      } else {
        /** 累乘 */
        temp *= nums[j];
      }
    }
    result.push(temp);
  }
  return result;
};

console.log(multiply([2, 3, 4, 5]));
