/*
 * @lc app=leetcode id=79 lang=typescript
 *
 * [79] Word Search
 */

// @lc code=start

// DFS - это вспомогательная функция для выполнения глубокого поиска (Depth-First Search). Эта функция принимает параметры:
// board - двумерный массив (доска), где происходит поиск.
// row и col - текущие координаты в доске.
// rows и cols - количество строк и столбцов в доске.
// word - слово, которое мы ищем.
// cur - текущий индекс символа в слове word, который мы пытаемся найти.
function DFS(board, row, col, rows, cols, word, cur) {
    // В начале функции DFS проверяются несколько базовых случаев:
    // Если row находится за пределами доски (row >= rows или row < 0), то мы возвращаем false, так как не можем продолжить поиск за пределами доски.
    if (row >= rows || row < 0) return false;
    // То же самое делается для col, если он находится за пределами доски.
    if (col >= cols || col < 0) return false;

    const item = board[row][col];
    
    // Если символ в текущей ячейке доски (board[row][col]) не совпадает с текущим символом, который мы ищем в слове (word[cur]), возвращается false.
    if (item !== word[cur]) return false;

    // Если cur равно длине слова минус один (cur === word.length - 1), это означает, что мы успешно нашли все символы слова в доске, и мы возвращаем true.
    if (cur === word.length - 1) return true;

    // После вызова DFS для всех направлений, мы восстанавливаем значение board[row][col], которое было временно изменено, чтобы избежать повторного использования ячейки.
    board[row][col] = null;

    // В остальных случаях мы продолжаем рекурсивный поиск, двигаясь в четырех возможных направлениях (вверх, вниз, влево, вправо), вызывая DFS для каждого направления с увеличением cur на 1.
    const res = DFS(board, row + 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row - 1, col, rows, cols, word, cur + 1) ||
        DFS(board, row, col + 1, rows, cols, word, cur + 1) ||
        DFS(board, row, col - 1, rows, cols, word, cur + 1);

    board[row][col] = item;

    return res;
}

// Функция exist - это главная функция, которая инициализирует поиск. Она пробегает по всей доске и вызывает DFS для каждой ячейки, начиная с cur = 0. Если находит совпадение слова, то возвращает true. Если ни одно совпадение не найдено, то возвращает false.

// Этот код использует поиск в глубину для проверки всех возможных путей в доске и определения, существует ли заданное слово на доске.
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
