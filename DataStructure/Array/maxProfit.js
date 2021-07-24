/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function (prices) {
//   let profit = 0;
//   for (let i = 0, len = prices.length; i < len; i++) {
//     if (prices[i] < prices[i + 1]) profit += prices[i + 1] - prices[i];
//   }
//   return profit;
// };

/**贪心 */
// var maxProfit = function (prices) {
//   let ans = 0;
//   for (let i = 0, len = prices.length - 1; i < len; i++) {
//     ans += Math.max(0, prices[i + 1] - prices[i]);
//   }
//   return ans;
// };

/**动态规划 */
// var maxProfit = function (prices) {
//   const len = prices.length;
//   let dp0 = 0,
//     dp1 = -prices[0];

//   for (let i = 1; i < len; i++) {
//     let newDp0 = Math.max(dp0, dp1 + prices[i]);
//     console.log(newDp0, "newDp0");
//     let newDp1 = Math.max(dp1, dp0 - prices[i]);
//     console.log(newDp1, "newDp1");
//     dp0 = newDp0;
//     dp1 = newDp1;
//   }
//   return dp0;
// };

/**
 * 动态规划
 *
 *
 * @param {*} prices
 * @returns
 */
var maxProfit = function (prices) {
  const len = prices.length,
    dp = Array(len).fill(Array(2).fill(0));

  /**
   * dp[i][0]表示第i天持有股票所得现金
   * 初始化第一天持有股票的现金
   * */
  dp[0][0] = -prices[0];

  /**
   * dp[i][1]表示第i天不持有股票所得最多现金
   * 初始化第一天不持有股票的现金
   **/
  dp[0][1] = 0;

  for (let i = 1; i < len; i++) {
    /**
     *  第i-1就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金, 即dp[i-1][0]
     *  第i买入股票，所以现金就是昨天不持有股票的所得现金减去今天的股票价格,即dp[i-1][1] - prices[i]
     *
     *  两种情况
     *  1. 当第i-1天持有股票，但是没买入第i天的股票，所得现金不变，还是dp[i-1][0]
     *  2. 当第i-1天持有股票，但是买入了第i天的股票，用持有资金减去当天的股价， 则dp[i-1][1] - prices[i]
     */
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);

    /**
     *  第i-1就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金，即dp[i-1][1]
     *  第i天卖出股票，所得现金就是按照今天股票价格卖出，所得现金prices[i]+dp[i-1][0]
     *
     *  两种情况
     *  1. 当第i-1天不持有股票，也没买入第i天的股票，所得现金不变,还是dp[i-1][1]
     *  2. 当第i-1天不持有股票，但是买入了第i天的股票，那就要持有的股价加入当天的股价，则dp[i-1][0]+prices[i]
     */
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);

    console.log(dp[i]);
  }

  return dp[len - 1][1];
};

console.log(maxProfit([1, 2, 3]));
1;
