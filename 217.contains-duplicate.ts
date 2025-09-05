/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const uniqueSet = new Set();

    for (const num of nums) {
        if (uniqueSet.has(num)) {
            return true;
        }

        uniqueSet.add(num);
    }

    return false;
}
// @lc code=end
