---
title: Minimum Size Subarray Sum
summary: Minimum Size Subarray Sum LeetCode Solution Explained
date: 2020-06-20
tags: [leetcode]
series: [leetcode]
keywords: ["LeetCode", "leetcode solution in Python3 C++ Java", "minimum-size-subarray-sum LeetCode Solution Explained"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:Minimum Size Subarray Sum - Solution Explained/problem-solving.webp
    alt: Minimum Size Subarray Sum
    hiddenInList: true
    hiddenInSingle: false
---


<h2>209. Minimum Size Subarray Sum</h2><h3>Medium</h3><hr><div><p>Given an array of positive integers <code>nums</code> and a positive integer <code>target</code>, return the minimal length of a <strong>contiguous subarray</strong> <code>[nums<sub>l</sub>, nums<sub>l+1</sub>, ..., nums<sub>r-1</sub>, nums<sub>r</sub>]</code> of which the sum is greater than or equal to <code>target</code>. If there is no such subarray, return <code>0</code> instead.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>

<pre><strong>Input:</strong> target = 7, nums = [2,3,1,2,4,3]
<strong>Output:</strong> 2
<strong>Explanation:</strong> The subarray [4,3] has the minimal length under the problem constraint.
</pre>

<p><strong>Example 2:</strong></p>

<pre><strong>Input:</strong> target = 4, nums = [1,4,4]
<strong>Output:</strong> 1
</pre>

<p><strong>Example 3:</strong></p>

<pre><strong>Input:</strong> target = 11, nums = [1,1,1,1,1,1,1,1]
<strong>Output:</strong> 0
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><code>1 &lt;= nums.length &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

<p>&nbsp;</p>
<strong>Follow up:</strong> If you have figured out the <code>O(n)</code> solution, try coding another solution of which the time complexity is <code>O(n log(n))</code>.</div>

---




```cpp
class Solution {
public:
    int minSubArrayLen(int k, vector<int>& a) {
        int n=a.size();
        int s=0;
        int ss=0;
        int ans=INT_MAX, l=0;
        int i=0,j=0;
        while(j<n){
            if(s<k)
                s+=a[j];
            if(s>=k){
                int l=j-i+1;
                ans=min(ans, l);
                s-=a[i];
                i++;
            }
            if(s<k)
                j++;
        }
        if(ans<INT_MAX)
            return ans;
        
        return 0;
    }
};
```