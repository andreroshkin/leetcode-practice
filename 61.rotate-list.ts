/*
 * @lc app=leetcode id=61 lang=typescript
 *
 * [61] Rotate List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    // Если переданный связанный список head равен null, состоит из одного элемента или k равно 0, то функция просто возвращает исходный связанный список, так как нет необходимости в его вращении.
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    // Вычисление размера связанного списка:
    // Используется цикл для прохождение по связанному списку и подсчета его размера.
    let size = 0;
    for (let iter = head; iter; iter = iter.next) size++;

    // Нормализация значения k:
    // После вычисления размера связанного списка, значение k нормализуется, чтобы избежать повторных вращений. Затем k пересчитывается так, чтобы получить индекс элемента, с которого начнется отсечение.
    k %= size;
    k = size - k - 1;

    // Нахождение элемента, с которого начнется отсечение:
    // Используется цикл для нахождения элемента, который будет предшествовать отсеченной части списка.
    let tail = head;
    let beforeTrimStart = head;

    // Нахождение элемента, с которого начнется отсечение:
    // Используется цикл для нахождения элемента, который будет предшествовать отсеченной части списка.
    while (tail.next) tail = tail.next;
    while (k--) beforeTrimStart = beforeTrimStart.next;

    // Обновление ссылок для вращения:
    // Этот блок кода обновляет ссылки таким образом, чтобы связанный список выглядел, как будто он повернут вправо на k позиций. Сначала устанавливается новый хвост списка, затем происходит отсечение и обновление ссылок.
    tail.next = head;
    const trimStart = beforeTrimStart.next;
    beforeTrimStart.next = null;

    return trimStart;
}
// @lc code=end
