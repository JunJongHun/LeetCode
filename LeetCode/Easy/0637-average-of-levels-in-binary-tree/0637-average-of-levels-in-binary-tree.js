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
 * @return {number[]}
 */
const averageOfLevels = function(root) {
    const queue = [];
    const averageArray = [];
    queue.push(root);

    // while문이 한번 돌 때, 깊이가 하나씩 증가하는 것을 알 수 있다.
    while(queue.length > 0){
        let sum = 0;
        // 깊이에 대한 개수를 체크하기 위함
        let levelLength = queue.length;

        for(let i =0; i<levelLength; i++){
            let node = queue.shift();
            sum += node.val;

            // 다음 깊이에 대한 노드들 넣기
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }

        averageArray.push(sum/levelLength);

    }
    return averageArray;
};

