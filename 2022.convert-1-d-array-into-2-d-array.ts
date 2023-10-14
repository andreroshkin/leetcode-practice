/*
 * @lc app=leetcode id=2022 lang=typescript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
function construct2DArray(original: number[], m: number, n: number): number[][] {
    let total = original.length;
    
    if (total !== m * n) {
        return [];
    }

    let result: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let index = 0; index < original.length; index++) {
        result[Math.floor(index / n)][index % n] = original[index];
    }

    return result;
}
// @lc code=end
