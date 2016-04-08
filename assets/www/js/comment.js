
window.onload = function () {
    var list = document.getElementById('list');
    var boxs = list.children;
    var timer;
    saveStorage(); //音乐列表1
    saveStorage2();  //音乐列表2

    var sWidth = window.innerWidth;
    var commentText = $(".comment-text");
    commentText.width(sWidth*0.6);

    function saveStorage(){
        var msg = localStorage.getItem("message");
        var comment_msg = document.getElementById('msg');

        //alert(msg);
        if(msg){
            //alert(msg);  
              comment_msg.innerHTML =  
                    '<img class="myhead" src="img/my.jpg" alt=""/>' +
                    '<div class="comment-content">' +
                    '<p class="comment-text"><span class="user">我：</span>' + msg + '</p>' +
                    '<p class="comment-time">' +
                    formateDate(new Date()) +
                    // '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                    '<a href="javascript:;" class="comment-operate">删除</a>' +
                    '</p>' +
                    '</div>'
        }
    }
        
    function saveStorage2(){
        var msg = localStorage.getItem("message_2");
        var comment_msg = document.getElementById('msg_2');

        //alert(msg);
        if(msg){
            //alert(msg);  
             
              comment_msg.innerHTML = 
              '<img class="myhead" src="img/my.jpg" alt=""/>' +
                    '<div class="comment-content">' +
                    '<p class="comment-text"><span class="user">我：</span>' + msg + '</p>' +
                    '<p class="comment-time">' +
                    formateDate(new Date()) +
                    // '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                    '<a href="javascript:;" class="comment-operate">删除</a>' +
                    '</p>' +
                    '</div>'
        }
    }
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
                // '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
                '<a href="javascript:;" class="comment-operate">删除</a>' +
                '</p>' +
                '</div>'
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

                //关闭分享
                // case 'close':
                //     removeNode(el.parentNode);
                //     break;

                // //赞分享
                // case 'praise':
                //     // praiseBox(el.parentNode.parentNode.parentNode, el);
                //     break;

                //回复按钮蓝
                case 'btn':
                    reply(el.parentNode.parentNode.parentNode, el);
                    break

                //回复按钮灰
                case 'btn btn-off':
                    clearTimeout(timer);
                    break;

                //赞留言
                // case 'comment-praise':
                //     // praiseReply(el);
                //     break;

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