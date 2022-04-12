/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start

// The sorted in ascending order given array makes it easy to see that by the absolute value, the largest numbers are at the beginning and the end of the given array, and values are decreasing to the middle. So we can consider two pointers approach. One from the start and one from the end.

function sortedSquares(nums: number[]): number[] {
    const result = [];
    let start = 0;
    let end = nums.length - 1;
    let position = end;

    while (start <= end) {
        if (nums[start] ** 2 > nums[end] ** 2) {
            result[position--] = nums[start++] ** 2;
        } else {
            result[position--] = nums[end--] ** 2;
        }
    }

    return result;
}
// @lc code=end
