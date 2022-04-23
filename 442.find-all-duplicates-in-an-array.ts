/*
 * @lc app=leetcode id=442 lang=typescript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
function findDuplicates(nums: number[]): number[] {
    const result = [];
    for (const num of nums) {
        if (nums[Math.abs(num) - 1] < 0) {
            result.push(Math.abs(num));
        }
        nums[Math.abs(num) - 1] *= -1;
    }
    return result;
}
// @lc code=end
