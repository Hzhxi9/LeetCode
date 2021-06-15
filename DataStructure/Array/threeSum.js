/**
 * 三数之和
 *
 * 题目描述
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在三个元素a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 示例:
 * 输入: nums = [-1, 0, 1, 2, -1, -4]
 * 输出: [[-1, 0, 1],[-1, -1, 2]]
 *
 * 思路分析
 * 1. 为了方便去重，我们首先将数组排序
 * 2. 对数组进行遍历，取当前遍历的数nums[i]为一个基准数，遍历数后面的数组为寻找数组
 * 3. 在寻找数组中设定两个起点，最左侧的left(i+1)和最右侧的right(length-1)
 * 4. 判断nums[i] + nums[left] + nums[right]是否等于0，如果等于0，加入结果，并分别将left和right移动一位
 * 5. 如果结果大于0，将right向左移动一位，向结果逼近
 * 6. 如果结果小于0，将left向右移动一位，向结果逼近
 */

/**
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
// const threeSum = nums => {
//   nums.sort((a, b) => a - b);
//   const result = [];
//   for (let i = 0, len = nums.length; i < len; i++) {
//     /**跳过重复数字 */
//     if (i && nums[i] === nums[i - 1]) continue;
//     let left = i + 1,
//       right = nums.length - 1;
//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];
//       if (sum > 0) {
//         /**sum大于0, right向座移动 */
//         right--;
//       } else if (sum < 0) {
//         /**sum小于0, left向右移动 */
//         left++;
//       } else {
//         result.push([nums[i], nums[left++], nums[right--]]);
//         /**跳过重复数字 */
//         while (nums[left] === nums[left - 1]) {
//           left++;
//         }
//         /**跳过重复数字 */
//         while (nums[right] === nums[right + 1]) {
//           right--;
//         }
//       }
//     }
//   }
//   return result;
// };

/**
 * 双指针解法
 * @param {number[]} nums
 * @returns {number[][]}
 */
const threeSum = nums => {
  const result = new Set();

  if (nums === null || nums.length < 3) return result;

  /**数组进行从小到大排序 */
  nums.sort((a, b) => a - b);

  for (let i = 0, len = nums.length - 3; i < len; i++) {
    /**排除重复，对比上一个值和当前值，相等就跳过 */
    if (i > 0 && nums[i - 1] === nums[i]) continue;

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.add([nums[i], nums[left], nums[right]]);
        /**符合情况之后，继续前进时发现下一个数字一致，就继续前进 */
        while (left < right && nums[left + 1] === nums[left]) left++;
        while (left < right && nums[right - 1] === nums[right]) right--;
        /**符合条件，right和left往中间 */
        left++;
        right--;
      } else if (sum > 0) {
        /**当值大与0， 则right向左 */
        right--;
      } else {
        /**当值小于0， 则left向右 */
        left++;
      }
    }
  }

  return [...result];
};

module.exports = threeSum;

/**Debug */
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
