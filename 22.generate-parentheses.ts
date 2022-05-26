/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

function generate(result: string[], s: string, open: number, close: number, n: number) {
    if (open === n && close === n) {
        result.push(s);
        return;
    }

    if (open < n) {
        generate(result, s + '(', open + 1, close, n);
    }
    if (close < open) {
        generate(result, s + ')', open, close + 1, n);
    }
}

function generateParenthesis(n: number): string[] {
    const result: string[] = [];
    generate(result, '', 0, 0, n);
    return result;
}
// @lc code=end
