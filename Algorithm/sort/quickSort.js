/**
 *  快速排序
 *
 *  思想
 *  通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。
 *
 *  实现步骤
 *  1. 选择一个基准元素target（一般选择第一个数）
 *  2. 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
 *  3. 分别对target左侧和右侧的元素进行快速排序
 */

/**
 * 解法一
 * 单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
 * 每次递归直接返回left、target、right拼接后的数组
 *
 * @param {number[]} array
 * @return {number[]}
 */
const quickSort = function (array) {
  if (array.length < 2) return array;
  const mid = Math.floor(array.length / 2);
  const start = array.slice(0, mid),
    end = array.slice(mid);
  return merge(quickSort(start), quickSort(end));
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
    if (start[0] < end[0]) {
      temp.push(start.shift());
    } else {
      temp.push(end.shift());
    }
    console.log(temp, "=");
  }
  while (start.length) {
    temp.push(start.shift());
  }
  while (end.length) {
    temp.push(end.shift());
  }
  return temp;
};

/**
 * 解法二
 * 记录一个索引l从数组最左侧开始，记录一个索引r从数组右侧开始
 * 在l<r的条件下，找到右侧小于target的值array[r]，并将其赋值到array[l]
 * 在l<r的条件下，找到左侧大于target的值array[l]，并将其赋值到array[r]
 * 这样让l=r时，左侧的值全部小于target，右侧的值全部小于target，将target放到该位置
 * 不需要额外存储空间，写法思路稍复杂（有能力推荐这种写法）
 *
 * @param {number[]} array
 * @returns {number[]}
 */
// const quickSort = function (array) {};

/**Debug */
console.log(quickSort([10, 50, 30, 90, 40, 80, 70]));
