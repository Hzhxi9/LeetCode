/**
 * 四数之和
 *
 * 题目
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在四个元素a，b，c，d ，使得 a + b + c + d = 0 ？找出所有满足条件且不重复的四元组。
 *
 */

/**
 *
 * @param {number[]} arr
 * @param {number} target
 * @returns {number[][]}
 */
const fourSum = (arr, target) => {
  if (arr.length < 4) return [];
  /**先排序 */
  arr.sort((a, b) => a - b);
  const result = [];

  /**选择第一个数 */
  for (let i = 0, len = arr.length - 4; i < len; i++) {
    /**跳过重复数字 */
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    /**最小的四个数相加大于target,彻底没戏 */
    const min = arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3];
    if (min > target) break;

    /*当前数字加上其余最大的三个数字，小于target，还能在抢救一下 */
    const max =
      arr[i] + arr[arr.length - 1] + arr[arr.length - 2] + arr[arr.length - 4];
    if (max < target) continue;
    /**选择第二个数 */
    for (let j = i + 1; j < arr.length - 3; j++) {
      /**跳过重复数字 */
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let left = j + 1,
        right = arr.length - 1;
      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum === target) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);
        }
        if (sum <= target) {
          do {
            left++;
          } while (arr[left] === arr[left + 1]);
        } else {
          do {
            right--;
          } while (arr[right] === arr[right - 1]);
        }
      }
    }
  }
  return result;
};

const arr = [1, 0, -1, 0, -2, 2],
  target = 0;

console.log(fourSum(arr, target));

module.exports = fourSum;
