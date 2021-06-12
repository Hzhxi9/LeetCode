/**
 * 四数之和
 *
 * 题目
 * 给定一个包含 n 个整数的数组nums，判断 nums 中是否存在四个元素a，b，c，d ，使得 a + b + c + d = 0 ？找出所有满足条件且不重复的四元组。
 *
 */

const fourSum = (arr, target) => {
  if (arr.length < 4) return [];
  arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0, len = arr.length - 3; i < len; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    if (arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] > target) break;

    for (let j = i + 1; j < arr.length - 2; j++) {
      if (j > i + 1 && arr[j] === arr[j - 1]) continue;
      let left = j + 1,
        right = arr.length - 1;
      while (left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right];
        if (sum === target) {
          result.push([arr[i], arr[j], arr[left], arr[right]]);
        }
        if (sum <= target) {
          while (arr[left] === arr[++left]) {}
        } else {
          while (arr[right] === arr[--right]) {}
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
