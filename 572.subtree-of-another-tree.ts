/*
 * @lc app=leetcode id=572 lang=typescript
 *
 * [572] Subtree of Another Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue = [p, q];

    while (queue.length) {
        const p = queue.shift();
        const q = queue.shift();

        if (!p && !q) {
            continue;
        }

        if (!p || !q) {
            return false;
        }

        if (p.val !== q.val) {
            return false;
        }

        queue.push(q.left);
        queue.push(p.left);
        queue.push(q.right);
        queue.push(p.right);
    }

    return true;
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root) {
        return false;
    }

    if (isSameTree(root, subRoot)) {
        return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
// @lc code=end
