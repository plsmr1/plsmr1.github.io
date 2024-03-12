---
title: Number of Sets of K Non-Overlapping Line Segments
summary: Number of Sets of K Non-Overlapping Line Segments - Solution Explained
url: "/posts/number-of-sets-of-k-non-overlapping-line-segments"
date: 2020-09-18T11:00:00
tags: ["leetcode", "problem-solving"]
series: [leetcode]
keywords: ["Number of Sets of K Non-Overlapping Line Segments LeetCode Solution Explained in all languages", "1621", "leetcode question 1621", "Number of Sets of K Non-Overlapping Line Segments", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://spcdn.pages.dev/leetcode/images/number-of-sets-of-k-non-overlapping-line-segments.webp
    alt: Number of Sets of K Non-Overlapping Line Segments - Solution Explained
    hiddenInList: true
    hiddenInSingle: false
math: true
---


# [1621. Number of Sets of K Non-Overlapping Line Segments](https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments)


## Description

<p>Given <code>n</code> points on a 1-D plane, where the <code>i<sup>th</sup></code> point (from <code>0</code> to <code>n-1</code>) is at <code>x = i</code>, find the number of ways we can draw <strong>exactly</strong> <code>k</code> <strong>non-overlapping</strong> line segments such that each segment covers two or more points. The endpoints of each segment must have <strong>integral coordinates</strong>. The <code>k</code> line segments <strong>do not</strong> have to cover all <code>n</code> points, and they are <strong>allowed</strong> to share endpoints.</p>

<p>Return <em>the number of ways we can draw </em><code>k</code><em> non-overlapping line segments</em><em>.</em> Since this number can be huge, return it <strong>modulo</strong> <code>10<sup>9</sup> + 7</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1621.Number%20of%20Sets%20of%20K%20Non-Overlapping%20Line%20Segments/images/ex1.png" style="width: 179px; height: 222px;" />
<pre>
<strong>Input:</strong> n = 4, k = 2
<strong>Output:</strong> 5
<strong>Explanation:</strong> The two line segments are shown in red and blue.
The image above shows the 5 different ways {(0,2),(2,3)}, {(0,1),(1,3)}, {(0,1),(2,3)}, {(1,2),(2,3)}, {(0,1),(1,2)}.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> n = 3, k = 1
<strong>Output:</strong> 3
<strong>Explanation:</strong> The 3 ways are {(0,1)}, {(0,2)}, {(1,2)}.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> n = 30, k = 7
<strong>Output:</strong> 796297179
<strong>Explanation:</strong> The total number of possible ways to draw 7 line segments is 3796297200. Taking this number modulo 10<sup>9</sup> + 7 gives us 796297179.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= n &lt;= 1000</code></li>
	<li><code>1 &lt;= k &lt;= n-1</code></li>
</ul>

## Solutions

### Solution 1

<!-- tabs:start -->

{{< terminal title="Python Code" >}}
```python
class Solution:
    def numberOfSets(self, n: int, k: int) -> int:
        mod = 10**9 + 7
        f = [[0] * (k + 1) for _ in range(n + 1)]
        g = [[0] * (k + 1) for _ in range(n + 1)]
        f[1][0] = 1
        for i in range(2, n + 1):
            for j in range(k + 1):
                f[i][j] = (f[i - 1][j] + g[i - 1][j]) % mod
                g[i][j] = g[i - 1][j]
                if j:
                    g[i][j] += f[i - 1][j - 1]
                    g[i][j] %= mod
                    g[i][j] += g[i - 1][j - 1]
                    g[i][j] %= mod
        return (f[-1][-1] + g[-1][-1]) % mod
```
{{< /terminal >}}

{{< terminal title="Java Code" >}}
```java
class Solution {
    private static final int MOD = (int) 1e9 + 7;

    public int numberOfSets(int n, int k) {
        int[][] f = new int[n + 1][k + 1];
        int[][] g = new int[n + 1][k + 1];
        f[1][0] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int j = 0; j <= k; ++j) {
                f[i][j] = (f[i - 1][j] + g[i - 1][j]) % MOD;
                g[i][j] = g[i - 1][j];
                if (j > 0) {
                    g[i][j] += f[i - 1][j - 1];
                    g[i][j] %= MOD;
                    g[i][j] += g[i - 1][j - 1];
                    g[i][j] %= MOD;
                }
            }
        }
        return (f[n][k] + g[n][k]) % MOD;
    }
}
```
{{< /terminal >}}

{{< terminal title="C++ Code" >}}
```cpp
class Solution {
public:
    int f[1010][1010];
    int g[1010][1010];
    const int mod = 1e9 + 7;

    int numberOfSets(int n, int k) {
        memset(f, 0, sizeof(f));
        memset(g, 0, sizeof(g));
        f[1][0] = 1;
        for (int i = 2; i <= n; ++i) {
            for (int j = 0; j <= k; ++j) {
                f[i][j] = (f[i - 1][j] + g[i - 1][j]) % mod;
                g[i][j] = g[i - 1][j];
                if (j > 0) {
                    g[i][j] += f[i - 1][j - 1];
                    g[i][j] %= mod;
                    g[i][j] += g[i - 1][j - 1];
                    g[i][j] %= mod;
                }
            }
        }
        return (f[n][k] + g[n][k]) % mod;
    }
};
```
{{< /terminal >}}

{{< terminal title="Go Code" >}}
```go
func numberOfSets(n int, k int) int {
	f := make([][]int, n+1)
	g := make([][]int, n+1)
	for i := range f {
		f[i] = make([]int, k+1)
		g[i] = make([]int, k+1)
	}
	f[1][0] = 1
	var mod int = 1e9 + 7
	for i := 2; i <= n; i++ {
		for j := 0; j <= k; j++ {
			f[i][j] = (f[i-1][j] + g[i-1][j]) % mod
			g[i][j] = g[i-1][j]
			if j > 0 {
				g[i][j] += f[i-1][j-1]
				g[i][j] %= mod
				g[i][j] += g[i-1][j-1]
				g[i][j] %= mod
			}
		}
	}
	return (f[n][k] + g[n][k]) % mod
}
```
{{< /terminal >}}

{{< terminal title="TypeScript Code" >}}
```ts
function numberOfSets(n: number, k: number): number {
    const f = Array.from({ length: n + 1 }, _ => new Array(k + 1).fill(0));
    const g = Array.from({ length: n + 1 }, _ => new Array(k + 1).fill(0));
    f[1][0] = 1;
    const mod = 10 ** 9 + 7;
    for (let i = 2; i <= n; ++i) {
        for (let j = 0; j <= k; ++j) {
            f[i][j] = (f[i - 1][j] + g[i - 1][j]) % mod;
            g[i][j] = g[i - 1][j];
            if (j) {
                g[i][j] += f[i - 1][j - 1];
                g[i][j] %= mod;
                g[i][j] += g[i - 1][j - 1];
                g[i][j] %= mod;
            }
        }
    }
    return (f[n][k] + g[n][k]) % mod;
}
```
{{< /terminal >}}

<!-- tabs:end -->

<!-- end -->