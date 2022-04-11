/*
 * @lc app=leetcode id=617 lang=typescript
 *
 * [617] Merge Two Binary Trees
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

function mergeTrees(node1: TreeNode | null, node2: TreeNode | null): TreeNode | null {
    if (!node1) return node2;
    if (!node2) return node1;

    node1.val += node2.val;

    node1.left = mergeTrees(node1.left, node2.left);
    node1.right = mergeTrees(node1.right, node2.right);

    return node1;
}
// @lc code=end
