/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start

function getCurrentIndex(string: string, index: number) {
    let toSkip = 0;
    while (index >= 0) {
        if (string[index] === '#') {
            toSkip += 1;
        } else if (toSkip > 0) {
            toSkip = toSkip - 1;
        } else {
            break;
        }
        index = index - 1;
    }
    return index;
}

function backspaceCompare(s: string, t: string): boolean {
    let i = s.length - 1;
    let j = t.length - 1;

    while (i >= 0 || j >= 0) {
        i = getCurrentIndex(s, i);
        j = getCurrentIndex(t, j);

        if (i < 0 && j < 0) return true;
        if (i < 0 || j < 0) return false;
        if (s[i] !== t[j]) return false;
        i = i - 1;
        j = j - 1;
    }
    return true;
}
// @lc code=end
