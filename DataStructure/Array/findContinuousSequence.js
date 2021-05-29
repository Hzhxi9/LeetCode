/**
 * 和为S的连续正整数序列
 *
 * 题目描述
 * 输入一个正数S，打印出所有和为S的连续正数序列。
 *
 * 示例:
 * 输入: sum = 15
 * 输出: [ [ 1, 2, 3, 4, 5 ], [ 4, 5, 6 ], [ 7, 8 ] ]
 * 解释: 有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。
 *
 * 思路分析
 * 1. 假设序列的开始数字为a,结束数字为a+i，那么有(a+i-a+1)*(a+a+i)/2=sum， 也就是(i+1)(2a+i)=2*sum
 * 2. 那么我们只需要找出这样的a和i就行了，最后再根据a和i得出序列。
 */

/**
 *
 * @param {number} sum
 * @returns {number[][]}
 */
function findContinuousSequence(sum) {
  /**
   *  定义开始数字变量temp, half为和的一半开始寻找
   *  算数右移 http://c.biancheng.net/view/5471.html
   */
  let temp = 0,
    half = sum >> 1;
  const result = [];
  while (half--) {
    temp++;

    let i = 1;
    while ((i + 1) * (2 * temp + i) < 2 * sum) {
      i++;
    }
    if ((i + 1) * (2 * temp + i) === 2 * sum) {
      const tempArr = [];
      tempArr.push(temp);
      tempArr.push(i);
      result.push(tempArr);
    }
  }

  for (let i = 0, len = result.length; i < len; i++) {
    let [num, count] = result[i],
      k = 1;
    const tmp = [];
    tmp.push(num);
    while (count--) {
      tmp.push(num + k);
      k++;
    }
    result[i] = tmp;
  }

  return result;
}

/**
 *
 * @param {number} sum
 * @returns {number[][]}
 */
const findContinuousSequence = function (sum) {
  /**创建一个容器child，用于表示当前的子序列，初始元素为1,2 */
  const result = [],
    child = [1, 2];
  /**记录子序列的开头元素start和末尾元素end，临时总和current */
  let start = 1,
    end = 2,
    current = 3;
  /**开始循环 */
  while (end < sum) {
    /**当临时总和小于目标值并且末尾元素小于目标值时 进入循环 */
    while (current < sum && end < sum) {
      /**依次push子序列中 */
      child.push(++end);
      /**累加临时和 */
      current += end;
    }
    /**当临时总和已经大于目标值， 进入该循环 */
    while (current > sum && start < end) {
      /**删除第一个不符合的元素 */
      child.shift();
      /**临时值减去该值, 然后start自增1 */
      current -= start++;
      console.log(current, "==cur", child);
    }
    /**处理满足的情况， 并排除目标值为自身 */
    if (current === sum && child.length > 1) {
      /**拷贝此时的child, 赋值给result */
      result.push(child.slice());
      /**子序列的元素从end+1开始 */
      child.push(++end);
      /**累加临时和 */
      current += end;
    }
  }
  return result;
};

console.log(findContinuousSequence(10));
