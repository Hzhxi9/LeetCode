var singleNumber = function (nums) {
  /**
   *
   * 只出现一次的数字
   * 结合律
   * 1. 与或
   *    1 & 1 | 0 = (1 & 1) | 0 = 1 | 0 = 1
   *              =  1 & (1 | 0) = 1 & 1 = 1
   *
   *    a & a | c = a & (a | c)
   *
   * 2. 异或
   *    1 ^ 1 ^ 0 = (1 ^ 1) ^ 0 = 0 ^ 0 = 0
   *              = 1 ^ (1 ^ 0) = 1 ^ 1 = 0
   *
   *    a ^ a = 0
   *    a ^ (~a) = 1
   *    0 ^ b = b
   *    a ^ b ^ a = a ^ a ^ b =0 ^ b = b
   */
  let result = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    result ^= nums[i];
  }
  return result;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
