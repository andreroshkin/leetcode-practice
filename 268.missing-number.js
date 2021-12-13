/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */



var missingNumber = function(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    const n = nums.length;
    return n * (n + 1) / 2 - sum;
};
// @lc code=end

