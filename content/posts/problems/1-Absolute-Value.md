---
title: 1. Absolute Value
summary: 1. Absolute Value - GeeksforGeeks Solution Explained
date: 2020-06-20
tags: [geeksforgeeks]
series: [GeeksforGeeks]
keywords: ["GeeksforGeeks", "GeeksforGeeks solution in Python3 C++ Java", "1. Absolute Value Solution Explained"]
cover:
    image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:1. Absolute Value - Solution Explained/problem-solving.webp
    alt: 1. Absolute Value
    hiddenInList: true
    hiddenInSingle: false
---


# 1. Absolute Value
## Easy
<div class="problem-statement">
                <p></p><p><span style="font-size:18px">You are given an interger <strong>I</strong>, find&nbsp;the absolute value of the interger <strong>I</strong>.</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 1:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
I = -32
<strong>Output: </strong>32
<strong>Explanation: 
</strong>The absolute value of -32 is 32.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Example 2:</strong></span></p>

<pre><span style="font-size:18px"><strong>Input</strong>:
I = 45
<strong>Output: </strong>45
<strong>Explanation: 
</strong>The absolute value of 45 is 45 itself.</span></pre>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Your Task:</strong><br>
You don't need to read input or print anything. Your task is to complete the function <strong>absolute() </strong>which takes an integer <strong>I</strong> as input parameter and return the absolute value of <strong>I.</strong></span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Expected Time Complexity:</strong> O(1)<br>
<strong>Expected Auxiliary Space&nbsp;</strong>: O(1)</span></p>

<p>&nbsp;</p>

<p><span style="font-size:18px"><strong>Constraints:</strong><br>
-10<sup>6</sup> &lt;= I &lt;= 10<sup>6</sup></span></p>
 <p></p>
            </div>

---




```cpp
// { Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

 // } Driver Code Ends
// User function Template for C++

class Solution{
    public:
        int absolute(int I) {
        // Your code goes here
        return abs(I);
    }

};

// { Driver Code Starts.

int main() {
    int T;    // number of testcases
    cin >> T; // input number of testcases
    while (T--) {
        int I;
        cin >> I;
        Solution ob;
        cout << ob.absolute(I) << endl; // print the output
    }
    return 0;
}  // } Driver Code Ends
```