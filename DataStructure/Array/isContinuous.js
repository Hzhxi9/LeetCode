/**
 * 扑克牌顺子
 *
 * 题目描述
 * 扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。
 * 2-10为数字本身，A为1，J为11...大小王可以看成任何数字，可以把它当作0处理。
 *
 * 示例:
 * 输入: nums = [1, 2, 3, 4, 0]
 * 输出: true
 *
 * 思路分析
 * 1. 数组排序
 * 2. 遍历数组
 * 3. 若为0，记录0的个数加1
 * 4. 若不为0，记录和下一个元素的间隔
 * 5. 最后比较0的个数和间隔数，间隔数>0的个数则不能构成顺子
 * 6. 注意中间如果有两个元素相等则不能构成顺子
 */

/**
 * @param {number[]} nums
 * @returns {boolean}
 */
const isContinuous = function (nums) {
  const sort = nums.sort((a, b) => a - b);
  let zero = 0,
    space = 0;
  for (let i = 0, len = sort.length - 1; i < len; i++) {
    /**当元素为零时, 记录0的个数 */
    if (!sort[i]) {
      zero++;
    } else {
      /**当元素不为0时, 记录间隔数 */
      const current = sort[i + 1] - sort[i];
      if (!current) {
        /** 元素相等,不能构成顺子 */
        return false;
      } else {
        /**TODO */
        space += current - 1;
      }
    }
  }
  /**比较间隔数与零的个数 */
  return zero - space >= 0;
};

/**
 * 
 * @param {number[]} nums 
 * @returns {boolean}
 */
const isContinuous = function (nums) {
  if (!nums || !nums.length) return;
  const s = new Set();
  for (let i = 0, len = nums.length; i < len; i++) {
    if (!nums[i]) {
      continue;
    }
    if (!s.has(nums[i])) {
      s.add(nums[i]);
    } else {
      return false;
    }
  }
  /** 数组最大值 - 数组最小值 小于等于 4 则满足要求 */
  console.log(s)
  return Math.max(...s) - Math.min(...s) <= 4;
};

/**Debug */
console.log(isContinuous([7, 2, 3, 4, 6]));
