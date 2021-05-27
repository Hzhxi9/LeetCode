/**
 *  两数之和
 *
 *
 *  题目描述
 *
 *  给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 的那 两个 整数，并返回它们的数组下标。
 *  你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 *  你可以按任意顺序返回答案。
 *
 *  示例1:
 *  输入: nums = [2,7,11,15] target = 9
 *  输出: [0,1]
 *  解释: 因为nums[0] + nums[1] === 9,返回[0,1]
 *
 *  示例2:
 *  输入: nums = [3,2,4] target = 6
 *  输出: [2,4]
 *
 *  示例3:
 *  输入: nums = [3,3] target = 6
 *  输出: [0,1]
 *
 *  提示
 *  1. 2 <= nums.length <= 10^3
 *  2. -10^9 <= nums[i] <= 10^9
 *  3. -10^9 <= target <= 10^9
 *  4. 只会存在一个有效答案
 *
 *  思路
 *  用哈希表（字典）存放数组值以及对应的下标
 *  遍历数组，当发现target - nums[i] 在哈希表中，说明找到了目标值
 */

const twoSum = function (nums, target) {
  /**定义 哈希表 */
  const map = new Map();

  /**循环 数组 */
  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.has(target - nums[i])) {
      /**判断 哈希表中有target - nums[i] 值, 返回对应下标 */
      return [map.get(target - nums[i]), i];
    }
    /** 设置对应值以及坐标 */
    map.set(nums[i], i);
  }

  return [];
};
