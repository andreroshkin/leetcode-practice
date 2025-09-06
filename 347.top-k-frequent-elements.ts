/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap = new Map();

    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
    }

    const buckets: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, freq] of frequencyMap) {
        buckets[freq].push(num);
    }

    const result: number[] = [];

    for (let index = buckets.length - 1; index >= 0 && result.length < k; index--) {
        for (const num of buckets[index]) {
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }

    return result;
}
// @lc code=end
