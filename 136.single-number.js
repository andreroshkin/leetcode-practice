/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x = 0;
    for (const num of nums) {
        x = x ^ num;
    }
    return x;
};
// @lc code=end

