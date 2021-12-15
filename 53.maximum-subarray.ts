/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
//Kadane's algorithm
function maxSubArray(nums: number[]): number {
    let maxSum : number = nums[0];
    let currentSum : number = nums[0];
    for (const num of nums) {
        currentSum = Math.max(currentSum + num, num);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
};
// @lc code=end

