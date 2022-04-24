/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack = [];
    const closeToOpen = { '}': '{', ')': '(', ']': '[' };
    for (const sym of s) {
        if (sym in closeToOpen) {
            if (stack && stack[stack.length - 1] === closeToOpen[sym]) {
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
