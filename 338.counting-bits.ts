/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    // let counter: number = 0;
    const bitsNumber: number[] = [];
    while (n) {
        // let counter = counter + (n & 1);
        n = n >> 1;
        bitsNumber.push(n);
    }

    return bitsNumber;
};
// @lc code=end

