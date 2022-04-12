/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
    const missing = [];
    const set = new Set();

    for (const num of nums) {
        if (!set.has(num)) set.add(num);
    }

    let n = 1;
    while (n <= nums.length) {
        if (!set.has(n)) missing.push(n);
        n++;
    }

    return missing;
}
// @lc code=end
