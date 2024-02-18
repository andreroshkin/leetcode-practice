/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    let start = 0;
    let end: number = nums.length - 1;

    while (start <= end) {
        const middle: number = Math.round((start + end) / 2);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}
// @lc code=end
