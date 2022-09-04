/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
    const result = [];
    const current = [];

    const dfs = (nums, n, start, current, result) => {
        if (current.length === n) {
            result.push([...current]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            dfs(nums, n, i + 1, current, result);
            current.pop();
        }
    };

    for (let i = 0; i <= nums.length; i++) {
        dfs(nums, i, 0, current, result);
    }
    return result;
}
// @lc code=end
