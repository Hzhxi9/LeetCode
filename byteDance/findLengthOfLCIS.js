/**最长连续递增序列【快慢指针】 */

function findLengthOfLCIS(nums) {
  if (nums.length === 0) return 0;

  const len = nums.length;

  let slow = 0,
    fast = 1;

  let maxLen = 1;

  while (fast < len) {
    if (nums[fast] > nums[slow]) maxLen++;
    else maxLen = 1;

    console.log(maxLen)

    slow++;
    fast++;
  }
  return maxLen;
}
console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
