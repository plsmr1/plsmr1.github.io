---
title: "PyShooter Python Game"
summary: "PyShooter Python two-dimensional shooter game"
date: 2023-04-27
tags: [python, projects, pyshooter]
series: [Projects]
published: true
sitemap: true
keywords: ["PyShooter Python Game", "Coding blog", "Computer Science"]
aliases: ["/blog/posts/pyshooter", "/pyshooter"]
cover:
  image: https://spcdn.pages.dev/pyshooter.webp
  alt: PyShooter Python Game
  hiddenInList: true
  hiddenInSingle: false
---

 
[![Language](https://github.com/SamirPaulb/DSAlgo/assets/77569653/030fb10d-3def-4a4c-8beb-2eb9b111c1fb)](https://www.python.org)
[![Module](https://img.shields.io/badge/module-pygame-brightgreen.svg?style=flat)](https://www.pygame.org/news.html)

PyShooter is a two-dimensional shooter game in which the player runs horizontally and fires at enemies.

##### Repository: [https://github.com/SamirPaulb/PyShooter](https://github.com/SamirPaulb/PyShooter)

## Demo: 


<iframe width="100%" height="420" src="https://www.youtube.com/embed/rg-49OTHZVY" loading="lazy" title="PyShooter - Samir Paul - YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="true"></iframe>

<script defer loading="lazy" src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<div>
<video width="100%" id="video" controls>
<source loading="lazy" src="https://user-images.githubusercontent.com/77569653/214920668-ef657089-b71f-43c8-8011-a202a09f5531.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</div>
<script type="text/javascript">
$( document ).ready(function() {
$('#videoUrl').on('change', function(e) {
  var video = $('#video');
  video.children('source').attr('src', $(this).val());
  video[0].load();
  video[0].play();
});
});
</script>

Vimeo: [https://vimeo.com/809728956](https://vimeo.com/809728956)

<!---
<a href="https://www.youtube.com/watch?v=rg-49OTHZVY">
<img src="https://raw.githubusercontent.com/SamirPaul1/assets/main/pygame-youtube-video-thumbnail.jpg" alt="PyShooter Demo YouTube" width="700" height="370">
</a>
-->

## How To Play

- If you don't have [Python](https://www.python.org/downloads/) or [Pygame](https://www.pygame.org/download.shtml) installed, you can simply double click the .exe file to play the game.
  **Note:** _The .exe file needs to stay in the same directory as the sounds, images, and font folders._

Install Pygame ```pip install pygame```

- If you have the correct version of Python and Pygame installed, you can run the program in the command prompt / terminal.

{{< terminal title="Shell Command" >}}
```bash
cd PyShooter
python main.py
```
{{< /terminal >}}


---


Credits for assets used: 
1. [https://erayzesen.itch.io/pixel-platformer](https://erayzesen.itch.io/pixel-platformer) 
2. [https://secrethideout.itch.io/team-wars-platformer-battle](https://secrethideout.itch.io/team-wars-platformer-battle) 
3. [https://soundimage.org/fantasywonder](https://soundimage.org/fantasywonder) 
4. [https://gushh.net/blog/free-game-sprites-explosion-3](https://gushh.net/blog/free-game-sprites-explosion-3)  
5. [https://mtk.itch.io/grenades-16x16](https://mtk.itch.io/grenades-16x16) 
