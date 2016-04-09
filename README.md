项目在线演示地址：http://rose111.applinzi.com/

![这里写图片描述](http://img.blog.csdn.net/20160408173915112)
**悦心**


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






```
 try {
    	 context1 = new (window.AudioContext || window.webkitAudioContext)();
    } catch(e) {
    	 throw new Error('The Web Audio API is unavailable');
    }	

	//绘图函数
	function drawSpectrumfa() {     
		var WIDTH = canvasFormAudio.width;
        var HEIGHT= canvasFormAudio.height;
  
		var array =  new Uint8Array(128);    
        analyserfa.getByteFrequencyData(array);//复制当前的频率值到一个无符号数组中
        ctxfa.clearRect(0, 0, WIDTH, HEIGHT);//clearRect(矩形左上角x坐标，矩形左上角y坐标，清除矩形的宽，清除矩形的高)
        
  		//循环生成圆点        
	    for ( var i = 0; i < (array.length)/4; i++ ){
	        ctxfa.beginPath();
	        var o = Dots[i];
	        var r = array[i]/256*50;
	        ctxfa.arc(o.x, o.y, r, 0, Math.PI*2,true);
	        var g = ctxfa.createRadialGradient(o.x, o.y, 0, o.x, o.y, r);
	        g.addColorStop(0,"#fff");
	        g.addColorStop(1, o.color);
	        ctxfa.fillStyle = g;
	        ctxfa.fill();
	        ctxfa.closePath();
	    }
    	//这里我们的array一共有128组数据，所以我们当时canvas设置的宽度为5*128=640
    	//根据浏览器频率绘图或者操作一些非css效果
	    requestAnimationFrame = window.requestAnimationFrame ||
	                            window.webkitRequestAnimationFrame ||
	                            window.mozRequestAnimationFrame;
	    requestAnimationFrame(drawSpectrumfa);
    }


	//音频分析
	function audioAnalayser(){ 	
		analyserfa=context1.createAnalyser();//建立一个分析器	
	  	var audio =jQuery("audio")[0];// 从audio标签获取声音源 source
	 	var source = context1.createMediaElementSource(audio);
	 	source.connect(analyserfa);
	  	analyserfa.connect(context1.destination);
	  	drawSpectrumfa();//调用绘图函数  
	}

/********************************random**********************************/
    function random(m,n){
        return  Math.round(Math.random()*(n-m) + m);
    }
/********************************END**********************************/



/*******************球球窗口自适应*******************************/
	function resize(){
	    height = canvasFormAudio.width;
	    width = canvasFormAudio.height;
	    ctxfa.height = height;
	    ctxfa.width = width;
	    getDots();
	}
	resize();
	window.onresize = resize;
/*********************** 自适应END*****************************/
	function getDots(){
	    Dots = [];
	    for(var i =0; i<size; i++){
	        var x = random(0,width);
	        var y = random(0,height);
	        var color = "rgba("+random(0,255)+"," + random(0,255)+","+random(0,255)+",0)";
	        Dots.push({
	            x: x,
	            y: y,
	            color: color
	        });
	    }
	}
```



  home.html

```
<div class="cd-content" style="background: #93E2CD;">
		<div class="header">
				<h1>Let It Music: Time to Go Crazy</h1>
		</div>

<div class="main">
		<div class="page_container">
		<canvas width="100%" height="100%" class="snow"></canvas>
					</div>
				</div>
			</div>
<script type="text/javascript">
	$(document).ready( function() {
		$("canvas.snow").home({
			windPower: 0,
			speed: 0,
			color: "#F21313",
			size:80,
			opacity: 0.00000001,
			count: 25,
			interaction: false
		});
	});
	</script>
```

home.js

```
!function($){
  
  var defaults = {
    speed: 0,
    interaction: true,
    size: 2,
    count: 200,
    opacity: 0,
    color: "#ffffff",
    windPower: 0,
    image: false
	};
	
  
  $.fn.home = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        flakes = [],
        canvas = el.get(0),
        ctx = canvas.getContext("2d"),
        flakeCount = settings.count,
        mX = -100,
        mY = -100;
    
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
    (function() {
        var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
        window.requestAnimationFrame = requestAnimationFrame;
    })();
    
    function snow() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (var i = 0; i < flakeCount; i++) {
            var flake = flakes[i],
                x = mX,
                y = mY,
                minDist = 100,
                x2 = flake.x,
                y2 = flake.y;

            var dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)),
                dx = x2 - x,
                dy = y2 - y;

            if (dist < minDist) {
                var force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;

                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;

            } else {
                flake.velX *= .98;
                if (flake.velY <= flake.speed) {
                    flake.velY = flake.speed
                }
                
                switch (settings.windPower) { 
                  case false:
                    flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
                  break;
                  
                  case 0:
                    flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
                  break;
                  
                  default: 
                    flake.velX += 0.01 + (settings.windPower/100);
                }
            }

            var s = settings.color;
            var patt = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})$/;
            var matches = patt.exec(s);
            var rgb = parseInt(matches[1], 16)+","+parseInt(matches[2], 16)+","+parseInt(matches[3], 16);

            
            flake.y += flake.velY;
            flake.x += flake.velX;

            if (flake.y >= canvas.height || flake.y <= 0) {
                reset(flake);
            }


            if (flake.x >= canvas.width || flake.x <= 0) {
                reset(flake);
            }
            if (settings.image == false) {
              ctx.fillStyle = "rgba(" + rgb + "," + flake.opacity + ")"
              ctx.beginPath();
              ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
              ctx.fill();
            } else {
              
              ctx.drawImage($("img#lis_flake").get(0), flake.x, flake.y, flake.size * 2, flake.size * 2);
            }
            
        }
        requestAnimationFrame(snow);
    };
    
    
    function reset(flake) {
        
        if (settings.windPower == false || settings.windPower == 0) {
          flake.x = Math.floor(Math.random() * canvas.width);
          flake.y = 0;
        } else {
          if (settings.windPower > 0) {
            var xarray = Array(Math.floor(Math.random() * canvas.width), 0);
            var yarray = Array(0, Math.floor(Math.random() * canvas.height))
            var allarray = Array(xarray, yarray)
            
            var selected_array = allarray[Math.floor(Math.random()*allarray.length)];
            
             flake.x = selected_array[0];
             flake.y = selected_array[1];
          } else {
            var xarray = Array(Math.floor(Math.random() * canvas.width),0);
            var yarray = Array(canvas.width, Math.floor(Math.random() * canvas.height))
            var allarray = Array(xarray, yarray)
            
            var selected_array = allarray[Math.floor(Math.random()*allarray.length)];
            
             flake.x = selected_array[0];
             flake.y = selected_array[1];
          }
        }
        
        flake.size = (Math.random() * 3) + settings.size;
        flake.speed = (Math.random() * 1) + settings.speed;
        flake.velY = flake.speed;
        flake.velX = 0;
        flake.opacity = (Math.random() * 0.5) + settings.opacity;
    }
     function init() {
      for (var i = 0; i < flakeCount; i++) {
          var x = Math.floor(Math.random() * canvas.width),
              y = Math.floor(Math.random() * canvas.height),
              size = (Math.random() * 3)  + settings.size,
              speed = (Math.random() * 1) + settings.speed,
              opacity = (Math.random() * 0.5) + settings.opacity;
      
          flakes.push({
              speed: speed,
              velY: speed,
              velX: 0,
              x: x,
              y: y,
              size: size,
              stepSize: (Math.random()) / 30,
              step: 0,
              angle: 180,
              opacity: opacity
          });
      }
      
      snow();
    }
    
    if (settings.image != false) {
      $("<img src='"+settings.image+"' style='display: none' id='lis_flake'>").prependTo("body")
    }
    
    init();
    
    $(window).resize(function() {
      if(this.resizeTO) clearTimeout(this.resizeTO);
      this.resizeTO = setTimeout(function() {
        el2 = el.clone();
        el2.insertAfter(el);
        el.remove();
        
        el2.let_it_snow(settings);
      }, 200);
    });
    
    if (settings.interaction == true) {
      canvas.addEventListener("mousemove", function(e) {
          mX = e.clientX,
          mY = e.clientY
      });
    }
  }
}(window.jQuery);


```


3. phoneGap 打包H5

 转向：http://blog.csdn.net/u014345282/article/details/50997590