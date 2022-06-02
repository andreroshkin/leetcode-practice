/*
 * @lc app=leetcode id=443 lang=typescript
 *
 * [443] String Compression
 */

// @lc code=start
function compress(chars: string[]): number {
    if (chars.length <= 1) return chars.length;
    let result = '';
    for (let currentIndex = 0; currentIndex < chars.length; currentIndex++) {
        let counterChar = 1;
        let nextIndex = currentIndex + 1;
        while (chars[currentIndex] === chars[nextIndex] && nextIndex < chars.length) {
            counterChar++;
            currentIndex++;
            nextIndex++;
        }

        result += chars[currentIndex];

        if (counterChar !== 1) {
            result += counterChar;
        }
    }

    const resultArray = result.split('');
    for (const k in resultArray) {
        chars[k] = resultArray[k];
    }
    return result.length;
}
// @lc code=end
