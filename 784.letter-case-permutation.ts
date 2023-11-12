/*
 * @lc app=leetcode id=784 lang=typescript
 *
 * [784] Letter Case Permutation
 */

// @lc code=start
function letterCasePermutation(s: string): string[] {
    const result: string[] = [];
    
    const backtrack = (index: number, path: string[]) => {
        // Если index достигает длины строки s, это означает, что мы завершили текущую частичную перестановку, и мы добавляем ее в массив результатов result.
        if (index === s.length) {
            result.push(path.join(''));
            return;
        }

        path.push(s[index].toLocaleLowerCase());
        // вызываем рекурсивно backtrack для следующего символа (index + 1), используя измененный path.
        backtrack(index + 1, path);
        // После этого символ удаляется из path (с помощью path.pop()), чтобы вернуться к предыдущему состоянию, и продолжаем рекурсивный вызов для других вариантов.
        path.pop();

        // Если текущий символ не является цифрой (parseInt(s[index]) возвращает NaN), мы также рекурсивно вызываем backtrack для версии строки с текущим символом в верхнем регистре.
        if (Number.isNaN(parseInt(s[index]))) {
            path.push(s[index].toLocaleUpperCase());
            backtrack(index + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);

    return result;
};
// @lc code=end

