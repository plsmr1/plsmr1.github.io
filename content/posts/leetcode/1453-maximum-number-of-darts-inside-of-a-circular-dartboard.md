---
title: 1453 Maximum Number Of Darts Inside Of A Circular Dartboard
summary: 1453 Maximum Number Of Darts Inside Of A Circular Dartboard LeetCode Solution Explained
date: 2022-11-25
tags: [leetcode]
series: [leetcode]
keywords: ["1453 Maximum Number Of Darts Inside Of A Circular Dartboard LeetCode Solution Explained in all languages", "1453 Maximum Number Of Darts Inside Of A Circular Dartboard", "LeetCode", "leetcode solution in Python3 C++ Java Go PHP Ruby Swift TypeScript Rust C# JavaScript C", "GeeksforGeeks", "InterviewBit", "Coding Ninjas", "HackerRank", "HackerEarth", "CodeChef", "TopCoder", "AlgoExpert", "freeCodeCamp", "Codeforces", "GitHub", "AtCoder", "Samir Paul"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:1453 Maximum Number Of Darts Inside Of A Circular Dartboard - Solution Explained/problem-solving.webp
    alt: 1453 Maximum Number Of Darts Inside Of A Circular Dartboard
    hiddenInList: true
    hiddenInSingle: false
---


# [1453. Maximum Number of Darts Inside of a Circular Dartboard](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard)


## Description

<p>Alice is throwing <code>n</code> darts on a very large wall. You are given an array <code>darts</code> where <code>darts[i] = [x<sub>i</sub>, y<sub>i</sub>]</code> is the position of the <code>i<sup>th</sup></code> dart that Alice threw on the wall.</p>

<p>Bob knows the positions of the <code>n</code> darts on the wall. He wants to place a dartboard of radius <code>r</code> on the wall so that the maximum number of darts that Alice throws lie&nbsp;on the dartboard.</p>

<p>Given the integer <code>r</code>, return <em>the maximum number of darts that can lie on the dartboard</em>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1453.Maximum%20Number%20of%20Darts%20Inside%20of%20a%20Circular%20Dartboard/images/sample_1_1806.png" style="width: 248px; height: 211px;" />
<pre>
<strong>Input:</strong> darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2
<strong>Output:</strong> 4
<strong>Explanation:</strong> Circle dartboard with center in (0,0) and radius = 2 contain all points.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://spcdn.pages.dev/leetcode/problems/1453.Maximum%20Number%20of%20Darts%20Inside%20of%20a%20Circular%20Dartboard/images/sample_2_1806.png" style="width: 306px; height: 244px;" />
<pre>
<strong>Input:</strong> darts = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5
<strong>Output:</strong> 5
<strong>Explanation:</strong> Circle dartboard with center in (0,4) and radius = 5 contain all points except the point (7,8).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= darts.length &lt;= 100</code></li>
	<li><code>darts[i].length == 2</code></li>
	<li><code>-10<sup>4</sup> &lt;= x<sub>i</sub>, y<sub>i</sub> &lt;= 10<sup>4</sup></code></li>
	<li>All the <code>darts</code>&nbsp;are unique</li>
	<li><code>1 &lt;= r &lt;= 5000</code></li>
</ul>

## Solutions

<!-- end -->