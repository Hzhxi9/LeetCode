/**
 * 和为S的两个数字
 *
 * 题目描述
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 * 数组中可能有多对符合条件的结果，而且要求输出乘积最小的，说明要分布在两侧 比如 3,8 5,7 要取3,8
 *
 * 示例:
 * 输入: sum = 15
 * 输出: [ [ 1, 2, 3, 4, 5 ], [ 4, 5, 6 ], [ 7, 8 ] ]
 * 解释: 有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。
 *
 * 思路分析
 * 1. 设定一个小索引left，从0开始
 * 2. 设定一个大索引right，从array.length开始
 * 3. 判断array[left] + array[right]的值s是否符合条件
 * 4. 符合条件 - 返回
 * 5. 大于sum，right向左移动
 * 6. 小于sum，left向右移动
 * 7. 若left=right，没有符合条件的结果
 */

/**
 *
 * @param {number[]} array
 * @param {number} target
 * @returns {number[]}
 */
function findNumbersWithSum(array, target) {}
