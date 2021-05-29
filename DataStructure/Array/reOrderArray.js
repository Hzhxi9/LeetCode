/**
 * 调整数组顺序使奇数位于偶数前面
 *
 * 题目描述
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分
 *
 * 示例:
 * 输入: nums = [1, 2, 3, 4, 5, 6]
 * 输出: [ 1, 5, 3, 4, 2, 6 ]
 *
 * 思路分析
 * 1. 设定两个指针
 * 2. 第一个指针start从数组第一个元素出发，向尾部前进
 * 3. 第二个指针end从数组的最后一个元素出发，向头部前进
 * 4. start遍历到偶数，end遍历到奇数时，交换两个数的位置
 * 5. 当start>end时，完成交换
 */

/**
 * 判断奇偶数
 * @param {number}
 * @returns {boolean}
 */
const isEven = num => Boolean(num % 2);

/**
 * 交换元素位置
 * @param {number[]} nums
 * @returns {number[]}
 */
const reOrderArray = function (nums) {
  if (Array.isArray(nums)) {
    let start = 0,
      end = nums.length - 1;

    while (start < end) {
      while (isEven(nums[start])) {
        start++;
      }
      while (!isEven(nums[end])) {
        end--;
      }
      if (start < end) [nums[start], nums[end]] = [nums[end], nums[start]];
    }
    return nums;
  }
};

/**
 * 合并两个数组
 * @param {number[]} nums
 * @returns {number[]}
 */
const reOrderArray = function (nums) {
  const odds = [];
  const evens = [];
  nums.forEach(num => {
    isEven(num) ? odds.push(num) : evens.push(num);
  });
  return [...odds, ...evens];
};

/**
 * FIXED 位置改变了
 * @param {number[]} nums
 * @returns {number[]}
 */
const reOrderArray = function (nums) {
  const result = [];
  nums.forEach(num => {
    isEven(num) ? result.push(num) : result.push(num);
  });
  return result;
};

/**
 * FIXED 位置改变了
 * @param {number[]} nums
 * @returns {number[]}
 */
const reOrderArray = function (nums) {
  return nums.reduce((acc, cur) => {
    isEven(cur) ? acc.unshift(cur) : acc.push(cur);
    return acc;
  }, []);
};

/**
 * FIXED 位置改变
 */
let arr = [1, 2, 3, 4, 5, 6];
let r = arr.sort((a, b) => {
  return (b % 2) - (a % 2);
});

console.log(r);

/**Console */
console.log(reOrderArray([1, 2, 3, 4, 5, 6]));
