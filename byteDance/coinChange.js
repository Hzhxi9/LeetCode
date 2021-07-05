/**零钱兑换【动态规划】 */

function coinChange(coins, amount) {
  if (!amount) return 0;
  const dp = [];
  for (let i = 0; i <= amount; i++) dp[i] = amount + 1;
  dp[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let j = 0, len = coins.length; j < len; j++) {
      if (i >= coins[j]) dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i]);
    }
  }
  return dp[amount] === amount + 1 ? -1 : dp[amount];
}
coinChange([1, 2, 5], 11);
