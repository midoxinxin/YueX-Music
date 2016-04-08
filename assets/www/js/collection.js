(function ($){

	//应该将其定义为整体的全局变量, 下列代码只可显示，不能播放
// 	playlist = [
// 		{
// 		title: '红妆',
// 		artist: '徐良&阿悄',
// 		mp3: './media/徐良&阿悄-红妆.mp3',
// 		},
// 		{
// 		title: '坏女孩',
// 		artist: '徐良',
// 		mp3: './media/徐良-坏女孩.mp3',
// 		},
// 		{
// 		title: '那时雨',
// 		artist: '徐良',
// 		mp3: './media/徐良-那时雨.mp3',
// 		},
// 		{
// 		title: '小幸运',
// 		artist: '桃子鱼仔的Ukulele教室',
// 		mp3: './media/小幸运.mp3',
// 		},
// 		{
// 		title: '红妆',
// 		artist: '徐良&阿悄',
// 		mp3: './media/徐良&阿悄-红妆.mp3',
// 		},
// 		{
// 		title: '坏女孩',
// 		artist: '徐良',
// 		mp3: './media/徐良-坏女孩.mp3',
// 		},
// 		{
// 		title: '那时雨',
// 		artist: '徐良',
// 		mp3: './media/徐良-那时雨.mp3',
// 		},
// 		{
// 		title: '小幸运',
// 		artist: '桃子鱼仔的Ukulele教室',
// 		mp3: './media/小幸运.mp3',
// 		},
// 		{
// 		title: '红妆',
// 		artist: '徐良&阿悄',
// 		mp3: './media/徐良&阿悄-红妆.mp3',
// 		},
// 		{
// 		title: '坏女孩',
// 		artist: '徐良',
// 		mp3: './media/徐良-坏女孩.mp3',
// 		},
// 		{
// 		title: '那时雨',
// 		artist: '徐良',
// 		mp3: './media/徐良-那时雨.mp3',
// 		},
// 		{
// 		title: '小幸运',
// 		artist: '桃子鱼仔的Ukulele教室',
// 		mp3: './media/小幸运.mp3',
// 		}];


	
// 	var str = localStorage.getItem("my_collectList");
// 	var my_collectList = new Array();
// 	//将字符串转换为数组
// 	for(var i=0; i<str.length; i++){
// 		if(str[i] == ","){
// 			my_collectList[i] = null
// 		}else(
// 			my_collectList[i] = str[i]
// 			)
// 	}


// 	//删除数组中的null
// 	for(var j=0; j<my_collectList.length; j++){
// 		if(my_collectList[j] == null){
// 			my_collectList.splice(j,1);
// 			// console.log(my_collectList);
// 		}
// 		my_collectList[j] = parseInt(my_collectList[j]);
// 	}


// //加载列表&绑定点击事件
// 	for (var n=0; n<my_collectList.length; n++){
// 		var index = playlist[my_collectList[n]];
// 		$('#my_collectList').append('<li>'+index.artist+' - '+index.title+'</li>');

// 	 }

//到此处



//bug:若从收藏列表点歌播放后，取消收藏，退回收藏列表后没有自动更新收藏列表；(解决方法是刷新页面，但若未在收藏列表删除，也会刷新)      
// 播放歌曲图标显示错误，但列表顺序正确(已解决)

//bug:收藏页面，歌曲播放结束后播放哪一首，未解决     

//bug:收藏页面总第一首播放歌曲（已解决，点击才播放）

var 	continous = true,
		autoplay = true,
		// collectList = [],
		playlist = [
		{
		title: '小幸运',
		artist: '桃子鱼仔的Ukulele教室',
		mp3: './media/01.mp3',
		},
		{
		title: '一起老去',
		artist: '薛凯琪,陈意涵,杨子珊',
		mp3: './media/02.mp3',
		},
		{
		title: '奇妙能力歌',
		artist: '陈粒',
		mp3: './media/03.mp3',
		},
		{
		title: '今天你要嫁给我',
		artist: '陶喆 & 蔡依林',
		mp3: './media/04.mp3',
		},
		
		// 后面的还没找图片加进评论
		{
		title: 'Let It Go',
		artist: '孝琳',
		mp3: './media/05.mp3',
		},
		{
		title: '知足',
		artist: '五月天',
		mp3: './media/06.mp3',
		},
		{
		title: '稻香',
		artist: '周杰伦',
		mp3: './media/07.mp3',
		},
		{
		title: '再见二丁目',
		artist: '杨千嬅',
		mp3: './media/08.mp3',
		},

		{
		title: 'Try Everything',
		artist: 'Shakira',
		mp3: './media/09.mp3',
		},
		{
		title: 'Curiosity',
		artist: 'Carly Rae Jepsen',
		mp3: './media/10.mp3',
		},
		{
		title: 'Bye Bye Bye',
		artist: 'Lovestoned',
		mp3: './media/11.mp3',
		},
		{
		title: 'Malaysia Chabor',
		artist: '朱主爱',
		mp3: './media/12.mp3',
		},
		{
		title: '尚好的青春',
		artist: '孙燕姿',
		mp3: './media/13.mp3',
		},
		{
		title: '红玫瑰',
		artist: '陈奕迅',
		mp3: './media/14.mp3',
		},
		{
		title: '后会无期',
		artist: 'G.E.M.邓紫棋',
		mp3: './media/15.mp3',
		},
		{
		title: '小苹果',
		artist: '筷子兄弟',
		mp3: './media/16.mp3',
		}];


	var str = localStorage.getItem("my_collectList");
	
	var my_collectList = new Array();
	//将字符串转换为数组
	for(var i=0; i<str.length; i++){
		if(str[i] == ","){
			my_collectList[i] = null;
		}else{
			my_collectList[i] = str[i];
		}
	}

	//删除数组中的null
	for(var j=0; j<my_collectList.length; j++){
		if(my_collectList[j] == null){
			my_collectList.splice(j,1);
			// console.log(my_collectList);
		}
		my_collectList[j] = parseInt(my_collectList[j]);
	}



	var sWidth = window.innerWidth,
		sHeight = window.innerHeight;
	// 初始化界面大小
	var music = $("main .disc #music");
	// music.width(sWidth*0.5);
	// music.height(sWidth*0.5);
	// music.css("top",(sHeight-sWidth*0.5)/2-20+"px");
	// music.css("left",sWidth*0.25+"px");
	music.width(sHeight*0.27);
	music.height(sHeight*0.27);
	music.css("top",(sHeight*0.73)/2+"px");
	music.css("left",(sWidth-sHeight*0.27-4)/2+"px");

	//直接从audio处理音频源，声明一些必要的变量
	var context1,
		source,
		analyserfa,
		canvasFormAudio,
		ctxfa;
	//珺改
	var Dots = [];
	var size = 128;

	//初始化画布
	var canvasFormAudio = document.getElementById('canvasFormAudio');
	canvasFormAudio.width = sWidth ;
	canvasFormAudio.height = sHeight ;
    ctxfa = canvasFormAudio.getContext("2d");
	var WIDTH = sWidth;
    var HEIGHT= sHeight;


	for (var n=0; n<my_collectList.length; n++){
		var index = playlist[my_collectList[n]];
		$('#my_collectList').append('<li>'+index.title+' - '+index.artist+'</li>');

	// sj
	// var li = $('#my_collectList li')[n];   
	// 	li.addEventListener("click",function(event){
	// 		$("main .disc").removeClass('hide');
	// 		$("main .list").addClass('hide');
	// 	},false);

 	}

 	//点击返回键<，进入收藏列表
	var menuReturn = $('main .glyphicon-menu-left');
	// alert(menuReturn.length);
	for(var i=0;i<menuReturn.length;i++){
		menuReturn[i].addEventListener("click",function(event){
			$("main .disc").addClass('hide');
			$("main .commentDiv").addClass('hide');
			$("main .list").removeClass('hide');

			if( state == "empty" ){
			 	window.location.reload();
			}
		},false);
	}

	// 珺-改 声明评论所需变量
	var menuEdit = $('main .glyphicon-edit')[0];
	// var commentDiv = $("main .commentDiv");
	var comment0 = $("main #comment0");
	var comment1 = $("main #comment1");
	var comment2 = $("main #comment2");
	var comment3 = $("main #comment3");
	var comment4 = $("main #comment4");
	var comment5 = $("main #comment5");
	var comment6 = $("main #comment6");
	var comment7 = $("main #comment7");
	var comment8 = $("main #comment8");
	var comment9 = $("main #comment9");
	var comment10 = $("main #comment10");
	var comment11 = $("main #comment11");
	var comment12 = $("main #comment12");
	var comment13 = $("main #comment13");
	var comment14 = $("main #comment14");
	var comment15 = $("main #comment15");

	//点击评论按钮，获取当前播放第几首歌，显示第几个评论界面；
	//隐藏其他list,disc页面
	var loadComment = function(i){
		// alert(i);
		menuEdit.onclick = function(event){
			if(i==0)
				comment0.removeClass('hide');
			else if(i==1)
				comment1.removeClass('hide');
			else if(i==2)
				comment2.removeClass('hide');
			else if(i==3)
				comment3.removeClass('hide');
			else if(i==4)
				comment4.removeClass('hide');
			else if(i==5)
				comment5.removeClass('hide');
			else if(i==6)
				comment6.removeClass('hide');
			else if(i==7)
				comment7.removeClass('hide');
			else if(i==8)
				comment8.removeClass('hide');
			else if(i==9)
				comment9.removeClass('hide');
			else if(i==10)
				comment10.removeClass('hide');
			else if(i==11)
				comment11.removeClass('hide');
			else if(i==12)
				comment12.removeClass('hide');
			else if(i==13)
				comment13.removeClass('hide');
			else if(i==14)
				comment14.removeClass('hide');
			else if(i==15)
				comment15.removeClass('hide');

			$("main .list").addClass('hide');
			$("main .disc").addClass('hide');
		}
		commentSum(i); //评论页面内容
	}


	//声明audio播放的变量
	var time = new Date(),
		currentTrack = my_collectList[0],
		trigger = false,
		audio, timeout, isPlaying;

	var play = function(){
		audio.play();
		$('.playback').addClass('playing');
		isPlaying = true;
	}

	var pause = function(){
		audio.pause();
		$('.playback').removeClass('playing');		
		isPlaying = false;
	}


	var volume = localStorage.volume || 0.5;//控制音量

	// 切换列表
	var switchTrack = function(i,m){
		var l=m;
		$('audio').remove();
		loadMusic(i,l);
		loadComment(i); //珺改，载入当前的评论页面
		if (isPlaying == true) play();
	}


	// 播放结束   yy播放结束后下一首播放哪一个？现在播放结束后不会跳转到ended，点击圆盘后会重复播放该歌曲
	var ended = function(){
		pause();
		audio.currentTime = 0;
		// playCounts++;
		if (continous == true) isPlaying = true;
		
		// loadMusic(currentTrack);
		// if (currentTrack < playlist.length) 
			// switchTrack(my_collectList[++l],++l);

			//yy  顺序播放
			
			if (nowPlay >= my_collectList.length-1){
			switchTrack(my_collectList[0],0);
		}else if (nowPlay < my_collectList.length-1){
			++nowPlay;
			switchTrack(my_collectList[nowPlay],nowPlay);
		}

    // alert("音频已播放完成");
		
	}

	// 加载完成
	var afterLoad = function(){
		if (autoplay == true) play();
	}

	//建立一个音频环境，因为浏览器实现不同，做了一点兼容性处理
    try {
    	 context1 = new (window.AudioContext || window.webkitAudioContext);
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



var collector = document.getElementById("collector");
// var collectNumber;

var state = "full";

var nowPlay;

	// 加载音乐
var loadMusic = function(i,l){
		var item = playlist[i],
		newaudio = $('<audio>').html('<source src="'+item.mp3+'">').appendTo('#player');
		nowPlay = l;
		// nowPlay_playList = i;
		// console.log(item);
		//点击后，判断collectList数组中是否有该项，有代表要移除，无则代表要添加
	collector.onclick = function(event){
		var str = localStorage.getItem("my_collectList");
		var my_collectList = new Array();
		//将字符串转换为数组
		for(var m=0; m<str.length; m++){
			if(str[m] == ","){
				my_collectList[m] = null
			}else(
				my_collectList[m] = str[m]
			)
		}


		//删除数组中的null
		for(var j=0; j<my_collectList.length; j++){
			if(my_collectList[j] == null){
				my_collectList.splice(j,1);
				// console.log(my_collectList);
			}
			my_collectList[j] = parseInt(my_collectList[j]);
		}
				
		for(k=0; k<=my_collectList.length;k++){

       		if(my_collectList[k]==i){
       			my_collectList.splice(k,1);
       			// console.log(collectList);
       			$('#collector').removeClass('glyphicon-heart').addClass('glyphicon-heart-empty');
       			state = "empty";
       			localStorage.setItem("my_collectList",my_collectList);
       			break;
       		}
        	if(k==my_collectList.length){
      			my_collectList[my_collectList.length]=i;
      			// console.log(collectList);
				$('#collector').removeClass('glyphicon-heart-empty').addClass('glyphicon-heart');
				state = "select";
      			localStorage.setItem("my_collectList",my_collectList);//添加到缓存列表
      			break;
        	}
        }
	}

	$('#my_collectList li').removeClass('playing').eq(l).addClass('playing');

	audio = newaudio[0];
    audio.volume =  volume;
    audioAnalayser();
	audio.addEventListener('canplay', afterLoad, false);
	audio.addEventListener('ended', ended, false);
}

// loadMusic(currentTrack,i);

	$('.playback').on('click', function(){
		if ($(this).hasClass('playing')){
			pause();
		} else {
			play();
		}
	});

	$('#my_collectList li').each(function(i){
		var _i = my_collectList[i];
		$(this).on('click', function(){
			switchTrack(_i,i);
			audio.play();//sj改
			music_disc.setAttribute("class","play"); //光盘旋转

			$("main .disc").removeClass('hide');//sj改
			$("main .list").addClass('hide');

		});
	});

	// 改-珺
    var music = document.getElementById("music");
    var audio = jQuery("audio")[0];
    var music_disc = document.getElementById('music_disc');
   	
    music.addEventListener("click",function(event){
    	if(audio.paused){
    		// alert(audio.paused);
			audio.play();
			music_disc.setAttribute("class","play");
		}
		else{
			// alert(audio.paused);
			audio.pause();
			music_disc.setAttribute("class","");
		}
    },false);

    // 音乐停止，光盘停止旋转
    music.addEventListener("ended",function(event){
		music_disc.setAttribute("class","");
    },false);

    //珺改-评论页面具体内容
    var sWidth = window.innerWidth;
    var commentText = $(".comment-text");
    commentText.width(sWidth*0.6);

	var commentSum = function(i){
	    var commentDiv;
	    if(i==0){
	        commentDiv = document.getElementById('comment0');
	    }
	    else if(i==1){
	        commentDiv = document.getElementById('comment1');;
	    }
	    else if(i==2){
	        commentDiv = document.getElementById('comment2');;
	    }
	    else if(i==3){
	        commentDiv = document.getElementById('comment3');;
	    }
	    else if(i==4){
	        commentDiv = document.getElementById('comment4');;
	    }
	    else if(i==5){
	        commentDiv = document.getElementById('comment5');
	    }
	    else if(i==6){
	        commentDiv = document.getElementById('comment6');
	    }
	    else if(i==7){
	        commentDiv = document.getElementById('comment7');
	    }
	    else if(i==8){
	        commentDiv = document.getElementById('comment8');
	    }
	    else if(i==9){
	        commentDiv = document.getElementById('comment9');
	    }
	    else if(i==10){
	        commentDiv = document.getElementById('comment10');
	    }
	    else if(i==11){
	        commentDiv = document.getElementById('comment11');
	    }
	    else if(i==12){
	        commentDiv = document.getElementById('comment12');
	    }
	    else if(i==13){
	        commentDiv = document.getElementById('comment13');
	    }
	    else if(i==14){
	        commentDiv = document.getElementById('comment14');
	    }
	    else if(i==15){
	        commentDiv = document.getElementById('comment15');
	    }
	    var list = commentDiv.getElementsByClassName('commentBox')[0];
	    var boxs = list.children;
	    var timer;
	    saveStorage();
	    function saveStorage(){

        // var my_comment = new Array();

        // //sj add    
        // if(localStorage.getItem("message")){
        //     var msg = localStorage.getItem("message");//获取之前存储的数据
        // }
        // else{
        //     var str = my_comment;
        //     localStorage.setItem("message",my_comment);
        // }

	        var msg = localStorage.getItem("message");
	        var comment_msg = document.getElementById('msg');

	        // 只给id为msg的添加localstorage里的message
	        if(msg){
	              comment_msg.innerHTML = 
	              '<img class="myhead" src="img/my.jpg" alt=""/>' +
	                    '<div class="comment-content">' +
	                    '<p class="comment-text"><span class="user">我：</span>' + msg + '</p>' +
	                    '<p class="comment-time">' +
	                    formateDate(new Date()) +
	                    '<a href="javascript:;" class="comment-operate">删除</a>' +
	                    '</p>' +
	                    '</div>'
	        }
	    }
	    //格式化日期
	    function formateDate(date) {
	        var y = date.getFullYear();
	        var m = date.getMonth() + 1;
	        var d = date.getDate();
	        var h = date.getHours();
	        var mi = date.getMinutes();
	        m = m > 9 ? m : '0' + m;
	        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
	    }

	    //删除节点
	    function removeNode(node) {
	        node.parentNode.removeChild(node);
	    }


	    /**
	     * 发评论
	     * @param box 每个分享的div容器
	     * @param el 点击的元素
	     */
	    function reply(box, el) {
	        var commentList = box.getElementsByClassName('comment-list')[0];
	        var textarea = box.getElementsByClassName('comment')[0];
	        var commentBox = document.createElement('div');
	        commentBox.className = 'comment-box clearfix';
	        commentBox.setAttribute('user', 'self');
	        var target = textarea;
	        localStorage.setItem("message",textarea.value);
	         var msg = localStorage.getItem("message");
	         if(msg){
	               //target.innerHTML = msg;
	            commentBox.innerHTML =
	                '<img class="myhead" src="img/my.jpg" alt=""/>' +
	                    '<div class="comment-content">' +
	                    '<p class="comment-text"><span class="user">我：</span>' + msg + '</p>' +
	                    '<p class="comment-time">' +
	                    formateDate(new Date()) +
	                    '<a href="javascript:;" class="comment-operate">删除</a>' +
	                    '</p>' +
	                    '</div>';
	            commentList.appendChild(commentBox);
	            textarea.value = '';
	            textarea.onblur();

	         }

	        
	        //target.innerHTML = msg;
	        commentBox.innerHTML =
	            '<img class="myhead" src="img/my.jpg" alt=""/>' +
	                '<div class="comment-content">' +
	                '<p class="comment-text"><span class="user">我：</span>' + msg + '</p>' +
	                '<p class="comment-time">' +
	                formateDate(new Date()) +
	                // '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
	                '<a href="javascript:;" class="comment-operate">删除</a>' +
	                '</p>' +
	                '</div>'
	        commentList.appendChild(commentBox);
	        textarea.value = '';
	        textarea.onblur();
	    }


	    /**
	     * 操作留言
	     * @param el 点击的元素
	     */
	    function operate(el) {
	        var commentBox = el.parentNode.parentNode.parentNode;
	        var box = commentBox.parentNode.parentNode.parentNode;
	        var txt = el.innerHTML;
	        var user = commentBox.getElementsByClassName('user')[0].innerHTML;
	        var textarea = box.getElementsByClassName('comment')[0];
	        if (txt == '回复') {
	            textarea.focus();
	            textarea.value = '回复' + user;
	            textarea.onkeyup();
	        }
	        else {
	            removeNode(commentBox);
	        }
	    }

	    //把事件代理到每条分享div容器
	    for (var i = 0; i < boxs.length; i++) {
	        //点击
	        boxs[i].onclick = function (e) {
	            e = e || window.event;
	            var el = e.srcElement ? e.srcElement : e.target; //firefox 下的 event.target = IE 下的 event.srcElement
	        
	            switch (el.className) {

	                //回复按钮蓝
	                case 'btn':
	                    reply(el.parentNode.parentNode.parentNode, el);
	                    break

	                //回复按钮灰
	                case 'btn btn-off':
	                    clearTimeout(timer);
	                    break;

	                //操作留言
	                case 'comment-operate':
	                    operate(el);
	                    break;
	            }
	        }

	        //评论
	        var textArea = boxs[i].getElementsByClassName('comment')[0];

	        //评论获取焦点
	        textArea.onfocus = function () {
	            this.parentNode.className = 'text-box text-box-on';
	            this.value = this.value == '评论…' ? '' : this.value;
	            this.onkeyup();
	        }

	        //评论失去焦点
	        textArea.onblur = function () {
	            var me = this;
	            var val = me.value;
	            if (val == '') {
	                timer = setTimeout(function () {
	                    me.value = '评论…';
	                    me.parentNode.className = 'text-box';
	                }, 200);
	            }
	        }

	        //评论按键事件
	        textArea.onkeyup = function () {
	            var val = this.value;
	            var len = val.length;
	            var els = this.parentNode.children;
	            var btn = els[1];
	            var word = els[2];
	            if (len <=0 || len > 140) {
	                btn.className = 'btn btn-off';
	            }
	            else {
	                btn.className = 'btn';
	            }
	            word.innerHTML = len + '/140';
	        }

	    }

	}

})(jQuery);