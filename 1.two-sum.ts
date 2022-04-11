/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const indexes = new Map();

    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index];
        const complement = target - currentNum;

        if (indexes.has(complement)) {
            return [indexes.get(complement), index];
        }
        indexes.set(nums[index], index);
    }
}
// @lc code=end
