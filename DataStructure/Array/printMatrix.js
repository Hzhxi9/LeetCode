/**
 * 顺时针打印矩阵
 *
 * 题目描述
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 *
 * 示例
 * 输入：1 2 3 4
 *      5 6 7 8
 *      9 10 11 12
 *      13 14 15 16
 * 输出: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10
 *
 *
 */

const printMatrix = function (matrix) {
  let result = [];
  if (matrix.length === 0) return result;

  /**定义四个指针，初始化上下左右边界 */
  let left = 0,
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;

  /**循环条件 */
  while (top < bottom && left < right) {
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i]);
    }
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right]);
    }
    for (let i = right; i > left; i--) {
      result.push(matrix[bottom][i]);
    }
    for (let i = bottom; i > top; i--) {
      result.push(matrix[i][left]);
    }

    /**遍历完就往内圈收敛 */
    left++;
    top++;
    bottom--;
    right--;
  }

  /**剩余单行列时 */
  if (top === bottom) {
      /**直接从left遍历到right */
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
  } else if (left === right) {
      /**直接从top遍历到bottom */
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
  }

  return result;
};


module.exports = printMatrix;
