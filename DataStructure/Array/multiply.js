/**
 * 构建乘积数组
 *
 * 题目描述
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 *
 * 思路分析
 * B[i]的值是A数组所有元素的乘积再除以A[i]，但是题目中给定不能用除法
 * B[i]的值可以看作下图的矩阵中每行的乘积。
 * 可以将B数组分为上下两个三角，先计算下三角，然后把上三角乘进去。
 */

/**
 * 
 * @param {number[]} nums
 * @returns {number[]} 
 */
const multiply = function (nums) {};
