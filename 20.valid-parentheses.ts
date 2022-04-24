/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack = [];
    const brackets = { '}': '{', ')': '(', ']': '[' };
    for (const sym of s) {
        if (sym in brackets) {
            if (stack && stack[stack.length - 1] === brackets[sym]) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(sym);
        }
    }
    return !stack.length;
}
// @lc code=end
