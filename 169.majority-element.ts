/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
//Boyer-Moore Majority Voting Algorithm
function majorityElement(nums: number[]): number {
    let counter = 0;
    let candidate = -1;
    for (const num of nums) {
        if (counter === 0) {
            candidate = num;
            counter = 1;
        } else {
            if (candidate === num) {
                counter++;
            } else {
                counter--;
            }
        }
    }

    for (const num of nums) {
        if (num === candidate) {
            counter++;
        }
    }
    if (counter > nums.length / 2) {
        return candidate;
    } else {
        return -1;
    }
}
// @lc code=end
