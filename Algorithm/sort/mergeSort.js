/**
 *  归并排序
 *
 *  思想
 *  该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。（分治法将问题分成一些小的问题然后递归求解，而治的阶段则将分的阶段得到的各答案"修补"在一起，即分而治之)。
 *
 *  1. 将已有序的子序列合并，得到完全有序的序列
 *  2. 即先使每个子序列有序，再使子序列段间有序
 *  3. 若将两个有序表合并成一个有序表，称为二路归并
 *
 *  分割
 *  1. 将数组从中点进行分割，分为左、右两个数组
 *  2. 递归分割左、右数组，直到数组长度小于2
 *
 *  归并：
 *  1. 如果需要合并，那么左右两数组已经有序了。
 *  2. 创建一个临时存储数组temp，比较两数组第一个元素，将较小的元素加入临时数组
 *  3. 若左右数组有一个为空，那么此时另一个数组一定大于temp中的所有元素，直接将其所有元素加入temp
 *
 */

/**
 * 解法一
 * 分割数组时直接将数组分割为两个数组，合并时直接合并数组。
 * 优点：思路简单，写法简单
 * 缺点：空间复杂度略高，需要复制多个数组
 *
 * @param {number[]} array
 * @return {number[]}
 */
const mergeSort = function (array) {
  if (array.length < 2) return array;
  /**取那个数组的中间数 */
  const mid = Math.floor(array.length / 2);
  console.log("mid", mid, array);
  /**取左边和右边两个数组 */
  const start = array.slice(0, mid),
    end = array.slice(mid);

  return merge(mergeSort(start), mergeSort(end));
};

/**
 *
 * @param {number[]} start
 * @param {number[]} end
 * @returns {number[]}
 */
const merge = function (start, end) {
  const temp = [];

  while (start.length && end.length) {
    /**比较左边和右边第一个数 */

    if (start[0] < end[0]) {
      temp.push(start.shift());
    } else {
      temp.push(end.shift());
    }
  }
  while (start.length) {
    temp.push(start.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  // console.log(temp, "==temp");
  return temp;
};

/**
 * 解法二
 * 记录数组的索引，使用left、right两个索引来限定当前分割的数组
 * 优点：空间复杂度低，只需一个temp存储空间，不需要拷贝数组
 * 缺点：写法复杂
 *
 * @param {number[]} array
 * @returns {number[]}
 */
// const mergeSort = function (array) {};
