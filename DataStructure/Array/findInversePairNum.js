/**
 * 数组中的逆序对
 *
 * link https://www.bilibili.com/video/BV1Qk4y1r7u5?from=search&seid=13821882582772118276
 *
 * 题目描述
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组,求出这个数组中的逆序对的总数P。
 *
 * 思路分析
 * 暴力法
 * 从第一个数开始，依次和后面每一个数字进行比较记录逆序对的个数，时间复杂度O(n2)
 *
 * 分治
 * 直接将归并排序进行改进，把数据分成N个小数组。
 * 合并数组 left - mid , mid+1 - right，合并时， 若array[leftIndex] > array[rightIndex] ,则比右边 rightIndex-mid个数大count += rightIndex-mid
 * 注意和归并排序的区别： 归并排序是合并数组数从小数开始，而本题是从大数开始。
 *
 */

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
// const findInversePairNum = function (nums) {
//   const result = {};
//   for (let i = 0, len = nums.length; i < len; i++) {
//     for (let j = 1, len = nums.length; j < len; j++) {
//       if (nums[i] > nums[j]) {
//         result[i] = nums[j];
//       }
//     }
//   }
//   return Object.keys(result).length;
// };

/**
 * @param {number[]} nums
 * @returns {number}
 */
// const findInversePairNum = function (nums) {
//   let count = 0;
//   for (let i = 0, len = nums.length; i < len; i++) {
//     for (let j = i + 1, len = nums.length; j < len; j++) {
//       if (nums[i] > nums[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// /**
//  *
//  * @param {number[]} array
//  * @param {number} left
//  * @param {number} right
//  * @param {number} mid
//  * @param {number[]} temp
//  * @returns {number}
//  */
// function merge(array, left, right, mid, temp) {
//   let l = mid,
//     r = right,
//     t = right - left,
//     count = 0;
//   while (l >= left && r > mid) {
//     if (array[l] > array[r]) {
//       count += r - mid;
//       temp[t--] = array[l--];
//     } else {
//       temp[t--] = array[r--];
//     }
//   }
//   while (l >= left) temp[t--] = array[l--];
//   while (r > mid) temp[t--] = array[r--];
//   t = 0;
//   for (let i = left; i <= right; i++) {
//     array[i] = temp[t++];
//   }
//   return count;
// }

// /**
//  *
//  * @param {number[]} array
//  * @param {number} left
//  * @param {number} right
//  * @param {number[]} temp
//  * @returns {number}
//  */
// function mergeSort(array, left, right, temp) {
//   if (left < right) {
//     const mid = ~~((left + right) / 2),
//       l = mergeSort(array, left, mid, temp),
//       r = mergeSort(array, mid + 1, right, temp),
//       m = merge(array, left, right, mid, temp);
//     return l + m + r;
//   } else {
//     return 0;
//   }
// }

// /**
//  *
//  * @param {number[]} nums
//  * @returns {number}
//  */
// function findInversePairNum(nums) {
//   return mergeSort(nums, 0, nums.length - 1, []);
// }

/**
 *
 * nums[left,...,right] 计算逆序对个数且排序
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @param {number[]} temp
 * @returns {number}
 */
function mergeSort(nums, left, right, temp) {
  if (left === right) return 0;

  const mid = ~~((left + right) / 2),
    leftIndex = mergeSort(nums, left, mid, temp),
    rightIndex = mergeSort(nums, mid + 1, right, temp);

  if (nums[mid] <= nums[mid + 1]) return leftIndex + rightIndex;

  const cross = merge(nums, left, mid, right, temp);

  return leftIndex + rightIndex + cross;
}

/**
 * nums[left,..., mid]有序 nums[mid+1,..., right] 有序
 * @param {number[]} nums
 * @param {number} left
 * @param {number} mid
 * @param {number} right
 * @param {number[]} temp
 * @returns {number}
 */
function merge(nums, left, mid, right, temp) {
  for (let i = left; i <= right; i++) {
    temp[i] = nums[i];
  }

  let i = left,
    j = mid + 1,
    count = 0;
  for (let k = left; k <= right; k++) {
    if (i === mid + 1) {
      nums[k] = temp[j];
      j++;
    } else if (j === right + 1) {
      nums[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      nums[k] = temp[i];
      i++;
    } else {
      nums[k] = temp[j];
      j++;
      count += mid - i + 1;
    }
  }
  return count;
}

/**
 *
 * @param {number[]} nums
 * @returns {number}
 */
function findInversePairNum(nums) {
  const len = nums.length;
  if (len < 2) return 0;
  const copy = nums.slice();
  return mergeSort(copy, 0, len - 1, []);
}

module.exports = findInversePairNum;
