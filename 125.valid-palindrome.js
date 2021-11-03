/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let leftIndex = 0;
    let rightIndex = string.length - 1;

    while(leftIndex < rightIndex){
        if(string[leftIndex] !== string[rightIndex]) return false;
        leftIndex++
        rightIndex--
    }

    return true
};

// @lc code=end

