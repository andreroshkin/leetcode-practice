/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start

function backtrack(list, tempList, nums, start) {
    list.push([...tempList]);
    for (let i = start; i < nums.length; i++) {
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, i + 1);
        tempList.pop();
    }
}

function subsets(nums: number[]): number[][] {
    const list = [];
    backtrack(list, [], nums, 0);
    return list;
}
// @lc code=end
