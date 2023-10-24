/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start

function DFS(board, row, col, rows, cols, word, cur) {
    if (row >= rows || row < 0) return false;
    if (col >= cols || col < 0) return false;

    const item = board[row][col];

    if (item !== word[cur]) return false;

    if (cur === word.length - 1) return true;

    board[row][col] = null;

    const res = DFS(board, row + 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row - 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row, col + 1, rows, cols, word, cur + 1) ||
        DFS(board, row, col - 1, rows, cols, word, cur + 1);

    board[row][col] = item;

    return res;
}

function exist(board: string[][], word: string): boolean {
    if (word.length === 0) return true;
    if (board.length === 0) return false;

    const rows = board.length;
    const cols = board[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (DFS(board, row, col, rows, cols, word, 0)) {
                return true;
            }
        }
    }

    return false;
};
// @lc code=end

