/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let newNumber = parseFloat(x.toString().split('').reverse().join(''));
    if (newNumber < (Math.pow(2, 31) * -1) || newNumber > Math.pow(2, 31) - 1)  return 0
    if(x > 0){
        return newNumber
    }
    else{
        return -newNumber
    }
};
// @lc code=end

