/*
 * @lc app=leetcode id=494 lang=typescript
 *
 * [494] Target Sum
 */

// @lc code=start



function findTargetSumWays(nums: number[], target: number): number {
    let count = 0;
    
    function calculate(nums: number[], index: number, sum: number, target: number){
        if (index === nums.length) {
            if (sum === target) {
                count++;
            }
        } else {
            calculate(nums, index + 1, sum + nums[index], target);
            calculate(nums, index + 1, sum - nums[index], target);
        }
    }

    calculate(nums, 0, 0, target);
    return count;
};
// @lc code=end