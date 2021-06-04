/**
 *  基数排序
 *
 *  思想
 *  基数排序是按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
 *
 *  1. 取得数组中的最大数，并取得位数；
 *  2. arr为原始数组，从最低位开始取每个位组成radix数组；
 *  3. 对radix进行计数排序（利用计数排序适用于小范围数的特点）；
 *
 */

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
const radixSort = function (arr) {
  /**
   * max 取最大值,最大值的位数就是要循环遍历的次数
   * buckets 定义一个桶
   */
  const max = Math.max(...arr),
    buckets = Array.from({ length: 10 }, () => []);

  /**定义当前要遍历的位数, 个位, 十位, 百位 */
  let m = 1;

  /**判断m<max */
  while (m < max) {
    /**放入桶中 */
    arr.forEach(number => {
      /**
       * digit 某个数字的某位数的值
       * ~~ 向下取整 Math.floor
       **/
      const digit = ~~((number % (m * 10)) / m);

      /**
       *  把该位数的值放入桶中
       *  通过该索引确定顺序， 类比计数排序
       */
      buckets[digit].push(number);
    });

    /**
     * 从桶buckets中取值
     * 完成此步后就完成了一次位数排序
     */
    let ind = 0;
    buckets.forEach(bucket => {
      while (bucket.length > 0) {
        /**
         * shift 从头部取值
         * 保证按照队列先入先出
         */
        arr[ind++] = bucket.shift();
      }
    });

    /**
     * 每次遍历增加一位,保证遍历完所有可能的位
     * 判断下一位，比如当前是个位，下一位就要判断十位
     **/
    m *= 10;
  }

  return arr;
};

/**Debug */
console.log(
  radixSort([3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 51, 48])
);
