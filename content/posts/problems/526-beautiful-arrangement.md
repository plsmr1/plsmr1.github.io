---
title: 526 Beautiful Arrangement
summary: 526 Beautiful Arrangement LeetCode Solution Explained
date: 2020-06-20
tags: [leetcode]
series: [leetcode]
keywords: ["LeetCode", "leetcode solution in Python3 C++ Java", "526-beautiful-arrangement LeetCode Solution Explained"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:526 Beautiful Arrangement - Solution Explained/problem-solving.webp
    alt: 526 Beautiful Arrangement
    hiddenInList: true
    hiddenInSingle: false
---


<h2><a href="https://leetcode.com/problems/beautiful-arrangement/">526. Beautiful Arrangement</a></h2><h3>Medium</h3><hr><div><p>Suppose you have <code>n</code> integers labeled <code>1</code> through <code>n</code>. A permutation of those <code>n</code> integers <code>perm</code> (<strong>1-indexed</strong>) is considered a <strong>beautiful arrangement</strong> if for every <code>i</code> (<code>1 &lt;= i &lt;= n</code>), <strong>either</strong> of the following is true:</p>

<ul>
	<li><code>perm[i]</code> is divisible by <code>i</code>.</li>
	<li><code>i</code> is divisible by <code>perm[i]</code>.</li>
</ul>

<p>Given an integer <code>n</code>, return <em>the <strong>number</strong> of the <strong>beautiful arrangements</strong> that you can construct</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> n = 2
<strong>Output:</strong> 2
<b>Explanation:</b> 
The first beautiful arrangement is [1,2]:
    - perm[1] = 1 is divisible by i = 1
    - perm[2] = 2 is divisible by i = 2
The second beautiful arrangement is [2,1]:
    - perm[1] = 2 is divisible by i = 1
    - i = 2 is divisible by perm[2] = 1
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> n = 1
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= n &lt;= 15</code></li>
</ul>
</div>

---




```python
class Solution:
    def countArrangement(self, n: int) -> int:
        arr = [(i+1) for i in range(n)]
        self.res = 0
        
        def solve(arr, i):
            if i == n+1:
                self.res += 1
                return
            for j, ch in enumerate(arr):
                if ch % i == 0 or i % ch == 0:
                    solve(arr[:j] + arr[j+1:], i+1)
            
        solve(arr, 1)
        return self.res
```