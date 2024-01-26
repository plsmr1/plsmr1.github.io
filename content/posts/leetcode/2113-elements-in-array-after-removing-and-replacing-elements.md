---
title: 2113 Elements In Array After Removing And Replacing Elements
summary: 2113 Elements In Array After Removing And Replacing Elements LeetCode Solution Explained
date: 2022-11-25
tags: [leetcode]
series: [leetcode]
keywords: ["2113 Elements In Array After Removing And Replacing Elements LeetCode Solution Explained in all languages", "2113 Elements In Array After Removing And Replacing Elements", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:2113 Elements In Array After Removing And Replacing Elements - Solution Explained/problem-solving.webp
    alt: 2113 Elements In Array After Removing And Replacing Elements
    hiddenInList: true
    hiddenInSingle: false
---


# [2113. Elements in Array After Removing and Replacing Elements](https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements)


## Description

<p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. Initially on minute <code>0</code>, the array is unchanged. Every minute, the <strong>leftmost</strong> element in <code>nums</code> is removed until no elements remain. Then, every minute, one element is appended to the <strong>end</strong> of <code>nums</code>, in the order they were removed in, until the original array is restored. This process repeats indefinitely.</p>

<ul>
	<li>For example, the array <code>[0,1,2]</code> would change as follows: <code>[0,1,2] &rarr; [1,2] &rarr; [2] &rarr; [] &rarr; [0] &rarr; [0,1] &rarr; [0,1,2] &rarr; [1,2] &rarr; [2] &rarr; [] &rarr; [0] &rarr; [0,1] &rarr; [0,1,2] &rarr; ...</code></li>
</ul>

<p>You are also given a 2D integer array <code>queries</code> of size <code>n</code> where <code>queries[j] = [time<sub>j</sub>, index<sub>j</sub>]</code>. The answer to the <code>j<sup>th</sup></code> query is:</p>

<ul>
	<li><code>nums[index<sub>j</sub>]</code> if <code>index<sub>j</sub> &lt; nums.length</code> at minute <code>time<sub>j</sub></code></li>
	<li><code>-1</code> if <code>index<sub>j</sub> &gt;= nums.length</code> at minute <code>time<sub>j</sub></code></li>
</ul>

<p>Return <em>an integer array <code>ans</code> of size </em><code>n</code> <em>where </em><code>ans[j]</code><em> is the answer to the </em><code>j<sup>th</sup></code><em> query</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,2], queries = [[0,2],[2,0],[3,2],[5,0]]
<strong>Output:</strong> [2,2,-1,0]
<strong>Explanation:</strong>
Minute 0: [0,1,2] - All elements are in the nums.
Minute 1: [1,2]   - The leftmost element, 0, is removed.
Minute 2: [2]     - The leftmost element, 1, is removed.
Minute 3: []      - The leftmost element, 2, is removed.
Minute 4: [0]     - 0 is added to the end of nums.
Minute 5: [0,1]   - 1 is added to the end of nums.

At minute 0, nums[2] is 2.
At minute 2, nums[0] is 2.
At minute 3, nums[2] does not exist.
At minute 5, nums[0] is 0.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [2], queries = [[0,0],[1,0],[2,0],[3,0]]
<strong>Output:</strong> [2,-1,2,-1]
Minute 0: [2] - All elements are in the nums.
Minute 1: []  - The leftmost element, 2, is removed.
Minute 2: [2] - 2 is added to the end of nums.
Minute 3: []  - The leftmost element, 2, is removed.

At minute 0, nums[0] is 2.
At minute 1, nums[0] does not exist.
At minute 2, nums[0] is 2.
At minute 3, nums[0] does not exist.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 100</code></li>
	<li><code>n == queries.length</code></li>
	<li><code>1 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>queries[j].length == 2</code></li>
	<li><code>0 &lt;= time<sub>j</sub> &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= index<sub>j</sub> &lt; nums.length</code></li>
</ul>

## Solutions

### Solution 1

<!-- tabs:start -->

```python
class Solution:
    def elementInNums(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        n, m = len(nums), len(queries)
        ans = [-1] * m
        for j, (t, i) in enumerate(queries):
            t %= 2 * n
            if t < n and i < n - t:
                ans[j] = nums[i + t]
            elif t > n and i < t - n:
                ans[j] = nums[i]
        return ans
```

```java
class Solution {
    public int[] elementInNums(int[] nums, int[][] queries) {
        int n = nums.length, m = queries.length;
        int[] ans = new int[m];
        for (int j = 0; j < m; ++j) {
            ans[j] = -1;
            int t = queries[j][0], i = queries[j][1];
            t %= (2 * n);
            if (t < n && i < n - t) {
                ans[j] = nums[i + t];
            } else if (t > n && i < t - n) {
                ans[j] = nums[i];
            }
        }
        return ans;
    }
}
```

```cpp
class Solution {
public:
    vector<int> elementInNums(vector<int>& nums, vector<vector<int>>& queries) {
        int n = nums.size(), m = queries.size();
        vector<int> ans(m, -1);
        for (int j = 0; j < m; ++j) {
            int t = queries[j][0], i = queries[j][1];
            t %= (n * 2);
            if (t < n && i < n - t) {
                ans[j] = nums[i + t];
            } else if (t > n && i < t - n) {
                ans[j] = nums[i];
            }
        }
        return ans;
    }
};
```

```go
func elementInNums(nums []int, queries [][]int) []int {
	n, m := len(nums), len(queries)
	ans := make([]int, m)
	for j, q := range queries {
		t, i := q[0], q[1]
		t %= (n * 2)
		ans[j] = -1
		if t < n && i < n-t {
			ans[j] = nums[i+t]
		} else if t > n && i < t-n {
			ans[j] = nums[i]
		}
	}
	return ans
}
```

<!-- tabs:end -->

<!-- end -->