/*
	description:
		Given a non-empty binrary tree, return the average value
		of the nodes on each level in the form of a array.
		
	Example:
		Input:
		    3
		   / \
		  9  20
		    /  \
		   15   7
		
		Output: [3, 14.5, 11]
		
		Explanation:
			The average value of nodes on level 0 is 3,  
			on level 1 is 14.5, and on level 2 is 11. 
			Hence return [3, 14.5, 11].
		
		Note:
			1.The range of node's value is in the range of 32-bit iterger.
*/			


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 
 /* the thinking of solution is making two queues.
	the first calculate current layer of nodes.
	the second records next layer nodes.
	loop calculates sum of each node via poping from
	first queue;and pushs the children nodes into if
	one node has children nodes.
	
	reference:https://leetcode.com/problems/average-of-levels-in-binary-tree/solution/
*/	
var averageOfLevels = function(root) {
    var number = [];
	
	var queue = [], tmp = [];
	
	queue.push(root);
	while(!queue.empty()){
		var sumOfLayer = 0, countOfLayer = 0;
		while(!queue.empty()){
			var n = queue.pop;
			sumOfLayer += n.val;
			countOfLayer++;
			if(n.left != null)
				tmp.push(n.left);
			if(n.right != null)
				tmp.push(n.right);
		}
		queue = tmp;
		number.push(sumOfLayer/countOfLayer);
	}
	return number;
};


