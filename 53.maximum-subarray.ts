/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
//Kadane's algorithm
function maxSubArray(nums: number[]): number {
    let currentSum = 0;
    let maxSum: number = nums[0];
    for (const num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
// @lc code=end
