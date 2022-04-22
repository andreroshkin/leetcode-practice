/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    const result = new Array(nums.length).fill(1);

    for (let index = 1; index < nums.length; index++) {
        result[index] = result[index - 1] * nums[index - 1];
    }

    let right = 1;
    for (let index = nums.length - 1; index >= 0; index--) {
        result[index] = result[index] * right;
        right = nums[index] * right;
    }

    return result;
}
// @lc code=end
