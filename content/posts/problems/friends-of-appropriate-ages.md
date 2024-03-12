---
title: Friends Of Appropriate Ages
summary: Friends Of Appropriate Ages - Solution Explained
url: "/posts/friends-of-appropriate-ages"
date: 2020-10-21T15:00:00
tags: ["leetcode", "problem-solving"]
series: [leetcode]
keywords: ["Friends Of Appropriate Ages LeetCode Solution Explained in all languages", "825", "leetcode question 825", "Friends Of Appropriate Ages", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://spcdn.pages.dev/leetcode/images/friends-of-appropriate-ages.webp
    alt: Friends Of Appropriate Ages - Solution Explained
    hiddenInList: true
    hiddenInSingle: false
math: true
---


# [825. Friends Of Appropriate Ages](https://leetcode.com/problems/friends-of-appropriate-ages)


## Description

<p>There are <code>n</code> persons on a social media website. You are given an integer array <code>ages</code> where <code>ages[i]</code> is the age of the <code>i<sup>th</sup></code> person.</p>

<p>A Person <code>x</code> will not send a friend request to a person <code>y</code> (<code>x != y</code>) if any of the following conditions is true:</p>

<ul>
	<li><code>age[y] &lt;= 0.5 * age[x] + 7</code></li>
	<li><code>age[y] &gt; age[x]</code></li>
	<li><code>age[y] &gt; 100 &amp;&amp; age[x] &lt; 100</code></li>
</ul>

<p>Otherwise, <code>x</code> will send a friend request to <code>y</code>.</p>

<p>Note that if <code>x</code> sends a request to <code>y</code>, <code>y</code> will not necessarily send a request to <code>x</code>. Also, a person will not send a friend request to themself.</p>

<p>Return <em>the total number of friend requests made</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> ages = [16,16]
<strong>Output:</strong> 2
<strong>Explanation:</strong> 2 people friend request each other.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> ages = [16,17,18]
<strong>Output:</strong> 2
<strong>Explanation:</strong> Friend requests are made 17 -&gt; 16, 18 -&gt; 17.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> ages = [20,30,100,110,120]
<strong>Output:</strong> 3
<strong>Explanation:</strong> Friend requests are made 110 -&gt; 100, 120 -&gt; 110, 120 -&gt; 100.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == ages.length</code></li>
	<li><code>1 &lt;= n &lt;= 2 * 10<sup>4</sup></code></li>
	<li><code>1 &lt;= ages[i] &lt;= 120</code></li>
</ul>

## Solutions

### Solution 1

<!-- tabs:start -->

{{< terminal title="Python Code" >}}
```python
class Solution:
    def numFriendRequests(self, ages: List[int]) -> int:
        counter = Counter(ages)
        ans = 0
        for i in range(1, 121):
            n1 = counter[i]
            for j in range(1, 121):
                n2 = counter[j]
                if not (j <= 0.5 * i + 7 or j > i or (j > 100 and i < 100)):
                    ans += n1 * n2
                    if i == j:
                        ans -= n2
        return ans
```
{{< /terminal >}}

{{< terminal title="Java Code" >}}
```java
class Solution {
    public int numFriendRequests(int[] ages) {
        int[] counter = new int[121];
        for (int age : ages) {
            ++counter[age];
        }
        int ans = 0;
        for (int i = 1; i < 121; ++i) {
            int n1 = counter[i];
            for (int j = 1; j < 121; ++j) {
                int n2 = counter[j];
                if (!(j <= 0.5 * i + 7 || j > i || (j > 100 && i < 100))) {
                    ans += n1 * n2;
                    if (i == j) {
                        ans -= n2;
                    }
                }
            }
        }
        return ans;
    }
}
```
{{< /terminal >}}

{{< terminal title="C++ Code" >}}
```cpp
class Solution {
public:
    int numFriendRequests(vector<int>& ages) {
        vector<int> counter(121);
        for (int age : ages) ++counter[age];
        int ans = 0;
        for (int i = 1; i < 121; ++i) {
            int n1 = counter[i];
            for (int j = 1; j < 121; ++j) {
                int n2 = counter[j];
                if (!(j <= 0.5 * i + 7 || j > i || (j > 100 && i < 100))) {
                    ans += n1 * n2;
                    if (i == j) ans -= n2;
                }
            }
        }
        return ans;
    }
};
```
{{< /terminal >}}

{{< terminal title="Go Code" >}}
```go
func numFriendRequests(ages []int) int {
	counter := make([]int, 121)
	for _, age := range ages {
		counter[age]++
	}
	ans := 0
	for i := 1; i < 121; i++ {
		n1 := counter[i]
		for j := 1; j < 121; j++ {
			n2 := counter[j]
			if !(j <= i/2+7 || j > i || (j > 100 && i < 100)) {
				ans += n1 * n2
				if i == j {
					ans -= n2
				}
			}
		}
	}
	return ans
}
```
{{< /terminal >}}

<!-- tabs:end -->

<!-- end -->