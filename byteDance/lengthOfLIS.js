/**最长递增子序列【动态规划】 */

function lengthOfLIS(nums) {
  let maxLen = 0;
  const len = nums.length,
    dp = [];

  for (let i = 0; i < len; i++) dp[i] = 1;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
    maxLen = Math.max(maxLen, dp[i]);
  }
  return maxLen;
}
