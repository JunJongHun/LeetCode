/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    return dfs(root,low,high);
};

function dfs(node,low,high){

    if(node === null) return 0;
    if(node.val < low) return dfs(node.right,low,high)
    if(node.val > high) return dfs(node.left,low,high)

    return node.val + dfs(node.left,low,high) + dfs(node.right,low,high);

}