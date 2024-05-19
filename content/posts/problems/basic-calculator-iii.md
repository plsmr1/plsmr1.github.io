---
title: Basic Calculator III
summary: Basic Calculator III - Solution Explained
url: "/posts/basic-calculator-iii"
date: 2020-10-23T20:00:00
tags: ["leetcode", "problem-solving"]
series: [leetcode]
keywords: ["Basic Calculator III LeetCode Solution Explained in all languages", "772", "leetcode question 772", "Basic Calculator III", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://spcdn.pages.dev/leetcode/images/basic-calculator-iii.webp
    alt: Basic Calculator III - Solution Explained
    hiddenInList: true
    hiddenInSingle: false
math: true
---


# [772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii)

[**Solve on LintCode**](https://www.lintcode.com/problem/849/)

## Description

<p>Implement a basic calculator to evaluate a simple expression string.</p>

<p>The expression string contains only non-negative integers, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, <code>&#39;/&#39;</code> operators, and open <code>&#39;(&#39;</code> and closing parentheses <code>&#39;)&#39;</code>. The integer division should <strong>truncate toward zero</strong>.</p>

<p>You may assume that the given expression is always valid. All intermediate results will be in the range of <code>[-2<sup>31</sup>, 2<sup>31</sup> - 1]</code>.</p>

<p><strong>Note:</strong> You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;1+1&quot;
<strong>Output:</strong> 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;6-4/2&quot;
<strong>Output:</strong> 4
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> s = &quot;2*(5+5*2)/3+(6/2+8)&quot;
<strong>Output:</strong> 21
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of digits, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, <code>&#39;/&#39;</code>, <code>&#39;(&#39;</code>,&nbsp;and&nbsp;<code>&#39;)&#39;</code>.</li>
	<li><code>s</code> is a <strong>valid</strong> expression.</li>
</ul>

## Solutions

Read: [***Solving Basic Calculator I, II, III on leetcode***](https://medium.com/@CalvinChankf/solving-basic-calculator-i-ii-iii-on-leetcode-74d926732437)

### Approach 1  
SAME as [***Basic Calculator I: Approach 1***](https://samirpaulb.github.io/posts/basic-calculator/#approach-1)

{{< terminal title="Python Code" >}}
```python
import collections
class Solution:
    def calculate(self, s: str) -> int:
        def helper(q):
            stack = []
            sign = '+'
            num = 0
            while q:
                c = q.popleft()
                if c.isdigit():
                    num = num*10 + int(c)
                if c == '(':
                    num = helper(q)
                if c in '+-*/)' or not q:
                    if sign == '+':
                        stack.append(num)
                    elif sign == '-':
                        stack.append(-num)
                    elif sign == '*':
                        stack.append(stack.pop() * num)
                    elif sign == '/':
                        stack.append(int(stack.pop()/num))
                    sign = c
                    num = 0
                    if c == ')':
                        break
            return sum(stack)
                    

        q = collections.deque()
        for c in s:
            q.append(c)
        return helper(q)
```
{{< /terminal >}}

**Time**: $O(n)$

**Space**: $O(n)$