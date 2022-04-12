/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
    let x = 0;
    for (const num of nums) {
        x = x ^ num;
    }
    return x;
}
// @lc code=end
