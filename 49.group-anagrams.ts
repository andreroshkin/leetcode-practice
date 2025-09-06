/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
    const res = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join();

        if (!res[sortedStr]) {
            res[sortedStr] = [];
        }

        res[sortedStr].push(str);
    }

    return Object.values(res);
}
// @lc code=end
