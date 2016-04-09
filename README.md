项目在线演示地址：http://rose111.applinzi.com/

![这里写图片描述](http://img.blog.csdn.net/20160408173915112)
**悦心**

更多详情参考个人博客 http://blog.csdn.net/u014345282/article/details/51097913


主要的web在assets/www 下 建议放在localhost运行


     悦心,一款音乐播放器应用，由“女立方”团队开发。目前，较为流行的音乐播放器有QQ音乐、网易云音乐、多米音乐等。


    “悦心”音乐播放器的主要功能，提供音乐数据库，点击列表播放音乐，还可对歌曲进行收藏，添加专属音乐心情功能。


1.歌曲播放过程中，气泡随音乐节奏动态变化；
2.点击圆盘，停止音乐播放
3.点击心形图标，收藏当前播放音乐；
4.音乐播放界面，点击评论图标，记录对当前播放音乐的专属音乐心情；




涉及到的技术点：


1.html5新特性：canvas，localstorage.
2.webaudio api
3.phoneGap(将H5打包成android)

我的职责：首页canvas,导航条，音频文件分析平可视化canvas。
遇到的问题：音频数据分析  webaudio无法在chrome浏览器获取音频数据： chrome浏览器兼容问题
 context1 = new (window.AudioContext || window.webkitAudioContext)();





