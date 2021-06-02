/**
 *  希尔排序
 *
 *  思想
 *  先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
 *  1. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 *  2. 按增量序列个数k，对序列进行k 趟排序；
 *  3. 每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
 *
 */

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
const shellSort = function (nums) {
  let len = nums.length;
  for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = 0; i < len; i++) {
      let j = i,
        current = nums[i];

      while (j - gap >= 0 && current <= nums[j - gap]) {
        nums[j] = nums[j - gap];
        j = j - gap;
      }
      nums[j] = current;
    }
  }
  return nums;
};

/**Debug */
console.log(shellSort([10, 50, 30, 90, 40, 80, 70]));
