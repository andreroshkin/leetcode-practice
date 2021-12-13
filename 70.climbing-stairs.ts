/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start

//через числа фибоначчи
function climbStairs(n: number): number {
    let a = 1;
    let b = 0;
    let temp = null;

    while (n >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        n--;
    }

    return b;
}
// @lc code=end
