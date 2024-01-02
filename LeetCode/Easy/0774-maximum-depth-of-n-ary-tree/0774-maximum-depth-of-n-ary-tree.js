/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
const maxDepth = function(root) {
    const queue = [];
    let maxDepth = 0;
    queue.push(root);

    if(root===null) return 0;

    while(queue.length>0){
        let depthLength = queue.length;

        for(let i=0; i<depthLength; i++){
            let node = queue.shift();   
            console.log(node);
            if(node.children) queue.push(...node.children);
        }
        maxDepth+=1;
    }
    return maxDepth;
};