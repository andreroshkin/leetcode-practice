/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
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
function getMid(head: ListNode) {
    let slow = head;
    let fast = head.next;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }

    return slow;
}

function merge(list1: ListNode, list2: ListNode) {
    const dummy = new ListNode();
    let tail = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1) {
        tail.next = list1;
    }

    if (list2) {
        tail.next = list2;
    }

    return dummy.next;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let left = head;
    let right = getMid(head);
    const tmp = right.next;
    right.next = null;
    right = tmp;

    left = sortList(left);
    right = sortList(right);

    return merge(left, right);
}
// @lc code=end
