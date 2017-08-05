/**
 * Definition of TreeNode:
 * class TreeNode {
 * public:
 *     int val;
 *     TreeNode *left, *right;
 *     TreeNode(int val) {
 *         this->val = val;
 *         this->left = this->right = NULL;
 *     }
 * }
 */


class Solution {
    /**
     * @param root: The root of binary tree.
     * @return: Level order a list of lists of integer
     */
public:
    vector<vector<int>> levelOrder(TreeNode *root) {
         vector<vector<int>>result;
        if (root == NULL) {
            return  result;
        }
        // write your code here

        deque<TreeNode *>oneQueue;
        TreeNode *head = root;
        oneQueue.push_back(head);
		
        int currentLevel = 0;
        int currentLevelInternalCount = 1;
        int nextLevelInternalCount = 0;
        int count = 0;
        vector<int>levelNums;
		
		
        while(!oneQueue.empty()) {
            head = oneQueue.front();
            oneQueue.pop_front();
            count++;
           levelNums.push_back(head->val);
            if (head->left != NULL) {
                oneQueue.push_back(head->left);
                nextLevelInternalCount++;
            }
            if(head->right != NULL) {
                oneQueue.push_back(head->right);
                nextLevelInternalCount++;
            }
            if(count == currentLevelInternalCount) {
                vector<int> a = levelNums;
                //vector<int>a(2,0);
                result.push_back(a);
                levelNums.clear();
                count = 0;
                currentLevelInternalCount = nextLevelInternalCount;
                nextLevelInternalCount = 0;
            }
        }
        return result;
    }
};