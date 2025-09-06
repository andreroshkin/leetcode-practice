/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * Находит два числа в массиве, сумма которых равна целевому значению
 * @param nums - массив целых чисел
 * @param target - целевая сумма
 * @returns массив из двух индексов чисел, которые дают целевую сумму
 */
function twoSum(nums: number[], target: number): number[] {
    // Map для хранения пар "число -> индекс" уже просмотренных элементов
    const indexes = new Map();

    // Проходим по массиву один раз
    for (let index = 0; index < nums.length; index++) {
        const currentNum = nums[index];
        // Вычисляем число, которое нужно найти для получения целевой суммы
        const complement = target - currentNum;

        // Проверяем, встречали ли мы ранее нужное дополняющее число
        if (indexes.has(complement)) {
            // Если да, возвращаем индекс найденного числа и текущий индекс
            return [indexes.get(complement), index];
        }

        // Сохраняем текущее число и его индекс для будущих проверок
        indexes.set(nums[index], index);
    }
}
// @lc code=end
