/**
 *  题目
 *  习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 *
 *  定义
 *  把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 *
 *  示例
 *  例如6、8都是丑数，但14不是，因为它包含质因子7。
 *
 *  思路
 *  丑数只能被2、3、5整除，说明第n个丑数只能是0 - n-1中某个丑数✖️2、✖️3、✖️5的结果。
 *  而且，这个数即第0 - n-1个丑数✖️2、✖️3、✖️5的结果中比第n-1个丑数大的最小值。
 *  按照上面的规律，我们可以依次求出第0 - n个丑数。
 *
 *  简单做法
 *  1.每次把第0 - n-1个丑数✖️(2、3、5)
 *  2.分别找到第0 - n-1个丑数✖️2、✖️3、✖️5的结果中比第n-1个丑数大的最小值。
 *  3.比较三个数取最小值加入到丑数队列中
 *
 *  优化
 *  1.前面的数不必每个都乘
 *  2.记录下✖️(2、3、5)后刚好比当前最大丑数大的这三个值的下标 i2,i3,i5
 *  3.下次比较从这 i2,i3,i5 三个下标开始乘起
 *  4.最后取arr[i2]✖️2、arr[i3]✖️3、arr[i5]✖️5 的最小值
 *
 *  url
 *  https://www.bilibili.com/video/BV19f4y1W7S2?from=search&seid=1874856915537211015
 */

/**
 * 动态规划处理
 * @param {number} index
 * @returns
 */
const getUglyNumber_Solution = function (index) {
  if (index <= 0) return 0;

  /**
   * arr 初始化为[1], 1当做是第一个丑数
   * i2,i3,i5 为之后比较的索引值
   */
  let arr = [1],
    i2 = (i3 = i5 = 0);

  while (arr.length < index) {
    /**push每次得出的最小值 */
    arr.push(Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5));
    /**取出此时数组最后一个值 */
    const current = arr[arr.length - 1];
    /**
     * 当i2,i3,i5为下标 乘以2,3,5时 等于current
     * 则得出是某个i被取出，则进行递增操作
     * 不用else, 避免重复
     **/
    if (arr[i2] * 2 === current) i2++;
    if (arr[i3] * 3 === current) i3++;
    if (arr[i5] * 5 === current) i5++;

    // while (arr[i2] * 2 <= current) i2++;
    // while (arr[i3] * 3 <= current) i3++;
    // while (arr[i5] * 5 <= current) i5++;
  }

  return arr[index - 1];
};

/**Debug */
console.log(getUglyNumber_Solution(10));
