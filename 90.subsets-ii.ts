/*
 * @lc app=leetcode id=90 lang=typescript
 *
 * [90] Subsets II
 */

// @lc code=start
// Функция subsetsWithDup принимает массив чисел nums и возвращает массив массивов (number[][]), представляющий все уникальные подмножества.
function subsetsWithDup(nums: number[]): number[][] {
    const result: number[][] = [];

    // В начале кода массив nums сортируется в порядке возрастания. Это делается для того, чтобы упростить обработку дубликатов в последующем.
    nums.sort((a, b) => a - b);

    const backtrack = (index: number, subset: number[]) => {
        // Если текущий индекс index достигает конца массива nums, это означает, что мы завершили текущее подмножество, и мы добавляем его в результат.
        if (index === nums.length) {
            result.push([...subset]);
            return;
        }

        // Мы добавляем текущий элемент nums[index] в текущее подмножество subset, рекурсивно вызываем backtrack для следующего индекса index + 1, а затем убираем последний добавленный элемент с помощью subset.pop().
        subset.push(nums[index]);
        backtrack(index + 1, subset);
        // Убирание последнего добавленного элемента с помощью subset.pop() выполняется для того, чтобы восстановить состояние массива subset после завершения рекурсивного вызова и возврата из него. Это важно, чтобы следующие итерации рекурсивных вызовов могли корректно работать и формировать правильные подмножества.
        subset.pop();

        // Затем мы используем цикл while, чтобы пропустить все последующие дубликаты элемента на текущем индексе. Это предотвращает повторное добавление подмножеств, содержащих одинаковые элементы.
        while (index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }

        backtrack(index + 1, subset);
    };

    backtrack(0, []);

    return result;
}
// @lc code=end
