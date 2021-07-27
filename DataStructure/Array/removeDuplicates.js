/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // const len = nums.length;
  // let slow = 0,
  //   fast = 0;

  // while (fast < len) {
  //   while (nums[slow] === nums[fast] && fast < len) fast++;
  //   if (nums[slow] !== nums[fast] && fast < len) {
  //     slow++;
  //     nums[slow] = nums[fast];
  //   }
  //   fast++;
  // }
  // return slow + 1;
  if (nums.length === 0) return 0;
  const len = nums.length;
  let slow = 1;
  for (let fast = 1; fast < len; fast++) {
    if (nums[slow - 1] !== nums[fast]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }
  return slow;
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
