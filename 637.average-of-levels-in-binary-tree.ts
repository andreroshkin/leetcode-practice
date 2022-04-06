/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
    const queue = [root];
    const result = [];

    while (queue.length !== 0) {
        let levelSum = 0;
        const levelLength = queue.length;
        for (let index = 0; index < levelLength; index++) {
            const node = queue.shift();
            levelSum += node.val;
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        result.push(levelSum / levelLength);
    }

    return result;
}
// @lc code=end
