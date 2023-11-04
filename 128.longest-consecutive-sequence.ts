/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
    const numSet = new Set(nums);
    let longest = 0;

    for (const n of nums) {
        if (!numSet.has(n - 1)) {
            let consecutiveLength = 0;
            while (numSet.has(n + consecutiveLength)) {
                consecutiveLength++;
            }
            longest = Math.max(longest, consecutiveLength);
        }
    }

    return longest;
};
// @lc code=end

