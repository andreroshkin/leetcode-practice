/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
    if (root === null) {
        return 0;
    }

    let depth = 0;
    const queue = [root]

    while (queue.length) {
        const queueLength = queue.length
        for (let index = 0; index < queueLength; index++) {
            const node = queue.shift()
            if(node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        depth += 1;
    }
    return depth
}
// @lc code=end

