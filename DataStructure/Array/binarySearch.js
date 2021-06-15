/**
 *  在排序数组中查找数字
 *
 *  题目
 *  统计一个数字在排序数组中出现的次数
 */

/**
 *  直接遍历数组，判断前后的值是否相同，找到元素开始位置和结束位置
 */
// const binarySearch = (nums, target) => {
//   if (!nums.length) return -1;
//   return nums.reduce((acc, cur) => {
//     if (cur === target) acc++;
//     return acc;
//   }, 0);
// };

/**
 *  使用二分查找找到目标值，在向前向后遍历，找到所有的数
 */
const binarySearch = (array, target) => {
  if (!array.length) return 0;
  const len = array.length;

  let l = 0,
    r = len - 1;

  while (l < r) {
    let mid = ~~((l + r) >> 1);
    if (array[mid] < target) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }

  if (array[l] !== target) return 0;
  let left = l;

  (l = 0), (r = len - 1);
  while (l < r) {
    let mid = ~~((l + r + 1) >> 1);
    if (array[mid] <= target) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  let right = r;

  return right - left + 1;
};

const binarySearch = (array, target) => {
  const index = array.indexOf(target);

  if (!~index) return 0;
  let left = index - 1,
    right = index + 1,
    len = 1;

  while (left >= 0 && array[left--] === target) {
    len++;
  }
  while (right < array.length && array[right++] === target) {
    len++;
  }

  return len;
};

/**
 * 使用二分查找分别找到第一个目标值出现的位置和最后一个位置
 */
// const binarySearch = () => {};

module.exports = binarySearch;
