/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    let letters1 = s.split('')
    let letters2 = t.split('')
    
    for (letter of letters1) {
        let position = letters2.indexOf(letter)
        if(position == -1) return false;
        letters2.splice(position, 1)
    }
    return true
};
// @lc code=end

