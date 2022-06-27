/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    nums: number[];
    constructor(nums: number[]) {
        nums.forEach((num, index) => {
            const prev = nums[index - 1] ? nums[index - 1] : 0;
            nums[index] = num + prev;
        });
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        const leftSum = this.nums[left - 1] ? this.nums[left - 1] : 0;
        return this.nums[right] - leftSum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
