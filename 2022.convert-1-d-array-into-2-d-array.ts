/*
 * @lc app=leetcode id=2022 lang=typescript
 *
 * [2022] Convert 1D Array Into 2D Array
 */

// @lc code=start
function construct2DArray(original: number[], m: number, n: number): number[][] {
    const array2d: number[][] = [];
    const rowsNumber = m;
    const columnsNumber = n;

    if (1 >= rowsNumber || 1 >= columnsNumber) {
        return [];
    }

    while (original.length) {
        array2d.push(original.splice(0, columnsNumber));
    }

    return array2d;
}
// @lc code=end
