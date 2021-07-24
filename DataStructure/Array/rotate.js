/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//   const len = nums.length;
//   if (len === 1 || k % len === 0) return nums;
//   const step = k % len;
//   nums = [...nums.splice(step + 1), ...nums.slice()];
// };

/**额外空间 */
// var rotate = function (nums, k) {
//   const len = nums.length,
//     newArr = Array(len);
//   if (len === 1 || k % len === 0) return nums;
//   const step = k % len;
//   for (let i = 0; i < len; i++) newArr[(i + step) % len] = nums[i];
//   for (let i = 0; i < len; i++) nums[i] = newArr[i];
//   return nums;
// };

/**数组翻转 */

function reverse(nums, start, end) {
  while (start < end) {
    const tmp = nums[start];
    nums[start] = nums[end];
    nums[end] = tmp;
    start++;
    end--;
  }
}

var rotate = function (nums, k) {
  const len = nums.length;
  if (len === 1 || k % len === 0) return nums;
  const step = k % len;
  /**全部翻转 */
  reverse(nums, 0, len - 1);
  /**翻转后半部分 */
  reverse(nums, step, len - 1);
  /**翻转前半部分 */
  reverse(nums, 0, step - 1);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 17));
