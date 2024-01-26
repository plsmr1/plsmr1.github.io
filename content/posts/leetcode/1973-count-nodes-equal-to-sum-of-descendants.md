---
title: 1973 Count Nodes Equal To Sum Of Descendants
summary: 1973 Count Nodes Equal To Sum Of Descendants LeetCode Solution Explained
date: 2022-11-25
tags: [leetcode]
series: [leetcode]
keywords: ["1973 Count Nodes Equal To Sum Of Descendants LeetCode Solution Explained in all languages", "1973 Count Nodes Equal To Sum Of Descendants", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:1973 Count Nodes Equal To Sum Of Descendants - Solution Explained/problem-solving.webp
    alt: 1973 Count Nodes Equal To Sum Of Descendants
    hiddenInList: true
    hiddenInSingle: false
---


# [1973. Count Nodes Equal to Sum of Descendants](https://leetcode.com/problems/count-nodes-equal-to-sum-of-descendants)


## Description

<p>Given the <code>root</code> of a binary tree, return <em>the number of nodes where the value of the node is equal to the <strong>sum</strong> of the values of its descendants</em>.</p>

<p>A <strong>descendant</strong> of a node <code>x</code> is any node that is on the path from node <code>x</code> to some leaf node. The sum is considered to be <code>0</code> if the node has no descendants.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1973.Count%20Nodes%20Equal%20to%20Sum%20of%20Descendants/images/screenshot-2021-08-17-at-17-16-50-diagram-drawio-diagrams-net.png" style="width: 250px; height: 207px;" />
<pre>
<strong>Input:</strong> root = [10,3,4,2,1]
<strong>Output:</strong> 2
<strong>Explanation:</strong>
For the node with value 10: The sum of its descendants is 3+4+2+1 = 10.
For the node with value 3: The sum of its descendants is 2+1 = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1973.Count%20Nodes%20Equal%20to%20Sum%20of%20Descendants/images/screenshot-2021-08-17-at-17-25-21-diagram-drawio-diagrams-net.png" style="height: 196px; width: 200px;" />
<pre>
<strong>Input:</strong> root = [2,3,null,2,null]
<strong>Output:</strong> 0
<strong>Explanation:</strong>
No node has a value that is equal to the sum of its descendants.
</pre>

<p><strong class="example">Example 3:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1973.Count%20Nodes%20Equal%20to%20Sum%20of%20Descendants/images/screenshot-2021-08-17-at-17-23-53-diagram-drawio-diagrams-net.png" style="width: 50px; height: 50px;" />
<pre>
<strong>Input:</strong> root = [0]
<strong>Output:</strong> 1
For the node with value 0: The sum of its descendants is 0 since it has no descendants.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the tree is in the range <code>[1, 10<sup>5</sup>]</code>.</li>
	<li><code>0 &lt;= Node.val &lt;= 10<sup>5</sup></code></li>
</ul>

## Solutions

### Solution 1

<!-- tabs:start -->

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def equalToDescendants(self, root: Optional[TreeNode]) -> int:
        def dfs(root):
            if root is None:
                return 0
            l, r = dfs(root.left), dfs(root.right)
            if l + r == root.val:
                nonlocal ans
                ans += 1
            return root.val + l + r

        ans = 0
        dfs(root)
        return ans
```

```java
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int ans;

    public int equalToDescendants(TreeNode root) {
        dfs(root);
        return ans;
    }

    private int dfs(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int l = dfs(root.left);
        int r = dfs(root.right);
        if (l + r == root.val) {
            ++ans;
        }
        return root.val + l + r;
    }
}
```

```cpp
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    int equalToDescendants(TreeNode* root) {
        int ans = 0;
        function<long long(TreeNode*)> dfs = [&](TreeNode* root) -> long long {
            if (!root) {
                return 0;
            }
            auto l = dfs(root->left);
            auto r = dfs(root->right);
            ans += l + r == root->val;
            return root->val + l + r;
        };
        dfs(root);
        return ans;
    }
};
```

```go
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func equalToDescendants(root *TreeNode) (ans int) {
	var dfs func(*TreeNode) int
	dfs = func(root *TreeNode) int {
		if root == nil {
			return 0
		}
		l, r := dfs(root.Left), dfs(root.Right)
		if l+r == root.Val {
			ans++
		}
		return root.Val + l + r
	}
	dfs(root)
	return
}
```

<!-- tabs:end -->

<!-- end -->