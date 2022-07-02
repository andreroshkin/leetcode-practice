/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    let rowZero = false;
    let columnZero = false;

    const rowLength = matrix.length;
    const columnsLength = matrix[0].length;

    for (let i = 0; i < rowLength; i++) {
        if (matrix[i][0] === 0) {
            columnZero = true;
        }
    }

    for (let j = 0; j < columnsLength; j++) {
        if (matrix[0][j] === 0) {
            rowZero = true;
        }
    }

    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < columnsLength; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < rowLength; i++) {
        for (let j = 1; j < columnsLength; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (columnZero) {
        for (let i = 0; i < rowLength; i++) {
            matrix[i][0] = 0;
        }
    }

    if (rowZero) {
        for (let j = 0; j < columnsLength; j++) {
            matrix[0][j] = 0;
        }
    }
}
// @lc code=end
