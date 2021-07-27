/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  /**一位数直接返回 */
  if (x / 10 < 1) return x;

  /**两位数以上 */
  let nums = Math.abs(x),
    result = 0;
  const len = nums.toString().length;

  while (nums > 0) {
    let tmp = nums.toString().length;
    result += ~~(nums / 10 ** (tmp - 1)) * 10 ** (len - tmp);
    console.log(nums / 10 ** (tmp - 1));
    nums = nums / 10;
  }
  return result;
};

console.log(reverse(321));
