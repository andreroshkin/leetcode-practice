/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    enum Roman {
        I = 1,
        V = 5,
        X = 10,
        L = 50,
        C = 100,
        D = 500,
        M = 1000,
    }

    let result = 0;

    for (let index = 0; index < s.length; index++) {
        const current: number = Roman[s[index]];
        const next: number = Roman[s[index + 1]];

        if (current < next) {
            result += next - current;
            index++;
        } else {
            result += current;
        }
    }

    return result;
}
// @lc code=end
