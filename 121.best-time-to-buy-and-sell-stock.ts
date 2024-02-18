/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    let currentMin: number = prices[0];
    for (const price of prices) {
        maxProfit = Math.max(maxProfit, price - currentMin);
        currentMin = Math.min(currentMin, price);
    }
    return maxProfit;
}
// @lc code=end
