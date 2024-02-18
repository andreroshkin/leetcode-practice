/*
 * @lc app=leetcode id=744 lang=typescript
 *
 * [744] Find Smallest Letter Greater Than Target
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
    const indexGreatestLetter: number = letters.findIndex((letter) => letter > target);
    return letters[indexGreatestLetter === -1 ? 0 : indexGreatestLetter];
}
// @lc code=end
