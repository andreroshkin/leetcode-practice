/*
 * @lc app=leetcode id=852 lang=typescript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {
    let low = 0;
    let high = arr.length - 1;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] >= arr[mid + 1]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
}
// @lc code=end
