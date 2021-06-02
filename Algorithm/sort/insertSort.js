/**
 *  插入排序
 *
 *  思想
 *  将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
 *  插入时，从有序序列最右侧开始比较，若比较的数较大，后移一位。
 */

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const insertSort = function (nums) {
  let preIndex, current;
  for (let i = 1, len = nums.length; i < len; i++) {
    preIndex = i - 1;
    current = nums[i];
    while (preIndex >= 0 && nums[preIndex] > current) {
      /**
       * 交换变量
       * 1. [nums[preIndex], nums[preIndex + 1]] = [nums[preIndex + 1], nums[preIndex]]
       * 2. let temp = nums[preIndex]; nums[preIndex] = nums[preIndex + 1]; nums[pre Index + 1] = temp;
       **/
      nums[preIndex + 1] = nums[preIndex];
      preIndex--;
    }
    console.log(nums, nums[preIndex], nums[preIndex + 1], current);
    /**复原最开始的数值 */
    nums[preIndex + 1] = current;
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const insertSort = function (nums) {
  for (let i = 1, len = nums.length; i < len; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (nums[target] < nums[j]) {
        [nums[target], nums[j]] = [nums[j], nums[target]];
        target = j;
      } else {
        break;
      }
    }
  }
  return nums;
};

/**Debug */
console.log(insertSort([10, 50, 30, 90]));
