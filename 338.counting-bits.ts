/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    const bitsNumber: number[] = [];
    for (let index = 0; index <= n; index++) {
        let counter: number = 0;
        let currentNumber = index;
        while (currentNumber) {
            counter = counter + (currentNumber & 1);
            currentNumber = currentNumber >> 1;
        }
        bitsNumber.push(counter);
    }
    return bitsNumber;
};
// @lc code=end

