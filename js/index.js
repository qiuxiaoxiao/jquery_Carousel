/**
 * Created by qiucheng on 2017/8/4.
 */

$(document).ready(function () {
    var i = 0;
    var clone = $(".banner .img li").first().clone();
    $(".banner .img").append(clone);
    var liLength = $(".banner .img li").length;
    for(var j = 0;j<liLength - 1;j++){
        $(".banner .num").append("<li></li>")
    }
    $(".banner .num li").first().addClass("onPoint");

    /* 鼠标划入圆点 */
    $(".banner .num li").hover(function () {
       var index = $(this).index();
       i = index;
       $(".banner .img").animate({left:-index * 550},550);
       $(".banner .num li").eq(index).addClass("onPoint").siblings().removeClass("onPoint");
    });

    /* 自动轮播 */
    var t = setInterval(moveL,3000);

    /* 对banner定时器的操作 */
    $(".banner").hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(moveL,3000);
    });

    var timer = null;
    /* 向左的按钮 */
    $(".banner .btn_l").click(moveL);
    // $(".banner .btn_l").click(function () {
    //     clearTimeout(timer);
    //     timer = setTimeout(function () {
    //         moveL();
    //     },300);
    // });
    // $(".banner .btn_l").dblclick(function () {
    //     clearTimeout(timer);
    // });

    function moveL() {
        i++;
        if(i == liLength){
            $(".banner .img").css({left:0});
            i = 1;
        }
        // $(".banner .img").animate({left:-550*i},550);
        $(".banner .img").stop().animate({left:-550*i},550);
        if(i == liLength - 1){
            $(".banner .num li").eq(0).addClass("onPoint").siblings().removeClass("onPoint");
        }else {
            $(".banner .num li").eq(i).addClass("onPoint").siblings().removeClass("onPoint");
        }
    }

    /* 向右的按钮 */
    $(".banner .btn_r").click(moveR);
    // $(".banner .btn_r").click(function () {
    //     clearTimeout(timer);
    //     timer = setTimeout(function () {
    //         moveR();
    //     },300);
    // });
    // $(".banner .btn_r").dblclick(function () {
    //     clearTimeout(timer);
    // });

    function moveR() {
        i--;
        if(i == -1){
            $(".banner .img").css({left:-(liLength - 1)*550});
            i = liLength - 2;
        }
        // $(".banner .img").animate({left:-i*550},550);
        $(".banner .img").stop().animate({left:-i*550},550);
        $(".banner .num li").eq(i).addClass("onPoint").siblings().removeClass("onPoint");
    }
});