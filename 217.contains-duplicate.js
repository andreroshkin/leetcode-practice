/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hash = []
    for (let num of nums){
        if(hash.indexOf(num) >= 0) return true
        hash.push(num)   
    }
    return false
};
// @lc code=end

