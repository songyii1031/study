$(document).ready(function(){

    // 같은 행 체크 안되게 하는 js 
    cheCk();

    // 슬라이드 display:none,block으로 구현하기
    slider(); 
});

function cheCk() { 

    var chk = $('.choice_e'); 
    var trCls = $(this).parents('.t_tr').find('.onc').length;
 
    
    chk.on('click', function(e){
        e.preventDefault();
        e.stopPropagation();

        $(this).find('.check').toggleClass('onc');

    
        if( trCls >= 0) {
            $(this).parents('.t_tr').find('.check').removeClass('onc');
            $(this).find('.check').addClass('onc');
        } 
        // console.log(trCls);
    });
    // 노드에 따라 리셋 구현하기
}


var slidOn;
var slideCounter = 1;
function slider() {
    $(".s_next").on("click touchstart", function (e) {
        e.preventDefault();

        slidOn = $(".sub_wrap").find(".on2").index();
        // var slidLength = $(".sub_slide").length;

        $(".sub_slide").eq(slidOn).removeClass("on2");
        $(".sub_slide").eq(slidOn).css("display", "none");

        slidOn = slidOn + 1;

        console.log(slidOn);

        if (slidOn === 2) {
            $(".s_next").css("pointer-events", "none");
            $(".s_prev").css("pointer-events", "auto");
            $(".s_next img").attr("src", "images/s_next_off.png");
            $(".s_prev img").attr("src", "images/s_prev_on.png");
            $(".sub_slide").eq(slidOn).css("display", "block");
            $(".sub_slide").eq(slidOn).addClass("on2");
        } else if (slidOn < 2) {
            $(".s_next").css("pointer-events", "auto");
            $(".s_prev").css("pointer-events", "auto");
            $(".sub_slide").eq(slidOn).css("display", "block");
            $(".sub_slide").eq(slidOn).addClass("on2");
            $(".s_next img").attr("src", "images/s_next_on.png");
            $(".s_prev img").attr("src", "images/s_prev_on.png");
        }
        // $("#sub_slide" + (slideCounter - 1)).hide();
    });

    $(".s_prev").on("click touchstart", function (e) {
        e.preventDefault();

        slidOn = $(".sub_wrap").find(".on2").index();
        // var slidLength = $(".sub_slide").length;

        $(".sub_slide").eq(slidOn).css("display", "none");
        $(".sub_slide").eq(slidOn).removeClass("on2");

        slidOn = slidOn - 1;

        console.log(slidOn);

        if (slidOn === 0) {
            $(".s_prev").css("pointer-events", "none");
            $(".s_next").css("pointer-events", "auto");
            $(".s_prev img").attr("src", "images/s_prev_off.png");
            $(".s_next img").attr("src", "images/s_next_on.png");
            $(".sub_slide").eq(slidOn).css("display", "block");
            $(".sub_slide").eq(slidOn).addClass("on2");
        } else if (slidOn > 0) {
            $(".s_prev").css("pointer-events", "auto");
            $(".s_next").css("pointer-events", "auto");
            $(".sub_slide").eq(slidOn).css("display", "block");
            $(".sub_slide").eq(slidOn).addClass("on2");
            $(".s_prev img").attr("src", "images/s_prev_on.png");
            $(".s_next img").attr("src", "images/s_next_on.png");
        }
    });
}


// 슬라이드 리셋

// function resetSlide() {
  
//     $('#sub_slide2, #sub_slide3').css('display', 'none');
//     $('#sub_slide1').css('display', 'block');
//     $('.sub_slide').removeClass('on2');
//     $('#sub_slide1').addClass('on2');

//     slidOn = 0;

//     $(".s_prev").css("pointer-events", "none");
//     $(".s_next").css("pointer-events", "auto");
//     $(".s_prev img").attr("src", "images/s_prev_off.png");
//     $(".s_next img").attr("src", "images/s_next_on.png");
// }