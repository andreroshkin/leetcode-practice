/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start

/**
 * Функция, которая возвращает массив дней до момента обнаружения более высокой температуры.
 * @param temperatures - Массив температур за каждый день.
 * @returns Массив разниц в днях до более высокой температуры для каждой текущей температуры.
 */
function dailyTemperatures(temperatures: number[]): number[] {
    const res = new Array<number>(temperatures.length).fill(0); // Инициализируем массив результатов нулями
    const stack: number[][] = []; // Стэк для хранения пар [температура, индекс]

    for (let i = 0; i < temperatures.length; i++) {
        const t = temperatures[i]; // Текущая температура

        // Проверяем, если стэк не пуст и текущая температура выше верхней в стэке
        while (stack.length > 0 && t > stack[stack.length - 1][0]) {
            const [stackT, stackInd] = stack.pop(); // Извлекаем последнюю пару из стэка
            res[stackInd] = i - stackInd; // Вычисляем количество дней до более высокой температуры и сохраняем в результатах
        }

        stack.push([t, i]); // Добавляем текущую пару [температура, индекс] в стэк
    }

    return res; // Возвращаем массив результатов
}

// @lc code=end
