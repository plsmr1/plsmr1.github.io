---
title: Text File Compressor De-compressor Web App
summary: Text File Compressor De-compressor Web App
date: 2022-05-20
tags: [project, txt-compressor]
series: [Projects]
published: true
sitemap: true
keywords: ["Text File Compressor De-compressor Web App", "Coding blog", "Computer Science"]
aliases: ["/blog/posts/text-file-compressor-de-compressor-web-app"]
cover:
  image: https://res.cloudinary.com/samirpaul/image/upload/w_1100,c_fit,co_rgb:FFFFFF,l_text:Arial_75_bold:Text File Compressor De-compressor Web App/og-image.webp
  alt: Text File Compressor De-compressor Web App
  hiddenInList: true
  hiddenInSingle: false
---
  

- This webapp uses Huffman Coding for Text Compression and De-compression.
- Made with ```JavaScript```, ```HTML5``` and ```CSS3```.
- Live Demo: [**samirpaulb.github.io/txt-compressor**](https://samirpaulb.github.io/txt-compressor/)
- Repository: [github.com/SamirPaulb/txt-compressor](https://github.com/SamirPaulb/txt-compressor)


## About this application:

* An online text(.txt) file compressor, decompressor which uses Huffman Algorithm to encode/compress files by 35% and decode them back to the original size. 
* This tool assigns a variable-length code to the characters of the uploaded file based on the frequency of occurrence. Then converts characters to that special code which takes less size than the original ASCII codes. Huffman code forms a binary tree assigning the most frequent characters with the smallest codes and longer codes for the least frequent characters. 
* A Huffman code is a tree, built bottom up, starting with the list of different characters appearing in a text and their frequency. 
* With this lossless data compression method, this tool can compress the file size by 35 to 40%. 
* As file size gets reduced and original characters get changed to special characters so this encoding also improves security by encrypting the file during file sharing. 
* With the decoding feature, the user can decode the encoded file and get back the original file of the previous size. 
* I have used JavaScript to implement the algorithms so that browser can compile the code and HTML, CSS to make the website responsive. 
* Additional instructions and warnings are provided if steps are not followed correctly. 
* An [Info page](https://samirpaulb.github.io/txt-compressor/info.html) is added to give more information about tecnique of **Lossless Data Compression** with Huffman coding.




## Video Demo: 

<iframe title="Video Demo" src="https://user-images.githubusercontent.com/77569653/172716965-50560f4a-2acf-4013-ae87-8b474b2a09e3.mp4" loading="lazy" width="100%" height = "380" autoplay="autoplay" loop="loop" frameborder="0" allowfullscreen></iframe>



- [x] Landing Page:

![landing-page](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-landing-page.png) 

- [x] Upload File

![step1](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-step1.png) 


- [x] Select Action (Compress / De-compress)

![step2](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-step2.png) 


- [x] Wait for File Download
    * File gets downloaded automatically when selected process is complete.

    * Compression - Compression Ratio is also displayed 

    ![compression](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-step3.png)
    
    * De-compression

    ![decompression](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-decompression.png)

- Additional Instructions and Warnings are provided if the above steps are not followed correctly

![noFile](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-nofile.png) 

![smallFile](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-verysmallfile.png)



- About the tecnique of Lossless Data Compression with Huffman coding.

![info1](https://spcdn.pages.dev/assets/img/text-file-compressor-de-compressor-web-app-info.jpeg) 
