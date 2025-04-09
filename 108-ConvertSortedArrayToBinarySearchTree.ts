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

function sortedArrayToBST(nums: number[]): TreeNode | null {

    if(nums.length === 1){
        return new TreeNode(nums[0]);
    } else if (nums.length === 0){
        return null;
    }

    let mid = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[mid]);

    let leftTree = nums.slice(0, mid);
    root.left = sortedArrayToBST(leftTree);

    let rightTree = nums.slice(mid + 1, nums.length);
    root.right = sortedArrayToBST(rightTree);

    return root;
};
