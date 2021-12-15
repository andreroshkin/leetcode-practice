/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }

    let profits: number[] = [];
    profits[0] = nums[0];
    profits[1] = Math.max(nums[0], nums[1]);
    for (let index = 2; index < nums.length; index++) {
        profits[index] = Math.max(nums[index] + profits[index - 2], profits[index - 1]);
    }
    return profits[profits.length - 1];
}
// @lc code=end
