/*
 * @lc app=leetcode id=112 lang=typescript
 *
 * [112] Path Sum
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

function hasPathSum(node: TreeNode | null, target: number): boolean {
    if (!node) {
        return false;
    }
    target = target - node.val;

    if (!node.right && !node.left) {
        return target == 0;
    }

    return hasPathSum(node.right, target) || hasPathSum(node.left, target)
}
// @lc code=end

