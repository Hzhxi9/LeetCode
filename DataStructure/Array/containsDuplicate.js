/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums);
  return [...set].length !== nums.length;
};
console.log(containsDuplicate([1, 2, 3]));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const len = nums.length,
    map = new Map();

  for (let i = 0; i < len; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }

  return [];
};
console.log(twoSum([2, 7, 11, 15], 9));

var plusOne = function (digits) {
  const len = digits.length;
  let idx = len - 1;
  while (idx >= 0) {
    digits[idx]++;
    digits[idx] %= 10;
    if (digits[idx] % 10) return digits;
    idx--;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([9, 9, 9]));
