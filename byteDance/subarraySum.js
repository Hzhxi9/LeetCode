/** 和为K的子数组【哈希表】 */

function subarraySum(nums, k) {
  let res = 0;

  let sum_i = 0,
    sum_j = 0;

  const map = new Map();

  map.set(0, 1);

  for (let i = 0, len = nums.length; i < len; i++) {
    sum_i += nums[i];

    sum_j = sum_i - k;

    if (map.has(sum_j)) res += map.get(sum_j);

    const sumRes = map.get(sum_i) || 0;

    map.set(sum_i, sumRes + 1);
  }

  return res;
}
console.log(subarraySum([1, 1, 1], 2));
