/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    const intersectArray: number[] = [];
    for (let i = 0; i < nums2.length; i++) {
        if (nums1.includes(nums2[i])) {
            intersectArray.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1);
        }
    }
    return intersectArray;
}
// @lc code=end
