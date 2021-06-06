/**
 *  题目描述
 *  求1+2+3+...+n，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）
 */

/**
 * 递归,使用&&短路来终止递归
 * @param {number} n
 * @return {number}
 */
const sumSolution = n => n && n + sumSolution(n - 1);

/**
 * 求和公式, n(n+1)/2=(n^2+n)/2
 *
 *    1. 左移运算符,n << 1,相当于n乘以2
 *    2. 右移运算符,n >> 1,相当于n除以2
 *
 * @param {number} n
 * @return {number}
 */
const sumSolution = n => (Math.pow(n, 2) + n) >> 1;

/**Debug */
console.log(sumSolution(10));
