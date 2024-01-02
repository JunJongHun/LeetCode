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
 * @return {boolean}
 */
const isUnivalTree = function(root) {
    const set = new Set();
    const queue = [];

    queue.push(root);
    
    while(queue.length>0){
        let length = queue.length;

        for(let i=0; i<length; i++){
             let node = queue.shift();

             if(node.val!==null)set.add(node.val);

             if(set.size===2) return false;

             if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
        }
    }

    return true;
};