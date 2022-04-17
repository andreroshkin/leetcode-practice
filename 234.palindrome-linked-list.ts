/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

const middleNode = function (head: ListNode | null) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};

const reverseList = function (head: ListNode | null) {
    let prev = null;
    let current = head;
    while (current) {
        const tmp = current.next;
        // reverse pointer
        current.next = prev;
        // step forward in the list
        prev = current;
        current = tmp;
    }
    return prev;
};

function isPalindrome(head: ListNode | null): boolean {
    if (!head) {
        return null;
    }

    const middle = middleNode(head);
    let reverse = reverseList(middle);

    while (reverse) {
        if (reverse.val !== head.val) {
            return false;
        }

        reverse = reverse.next;
        head = head.next;
    }

    return true;
}
// @lc code=end
