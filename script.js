// JavaScript Document

// 메인 영역 높이 반응형
var img_width = $('#main .wrap>ul>li>a>img').width();
$('#main .wrap').height(img_width * 0.315);  // 이미지 가로 크기와 세로 크기를 나눈 값 0.315을 너비에 곱함

$(window).resize(function(){
    img_width = $('#main .wrap>ul>li>a>img').width();
    $('#main .wrap').height(img_width * 0.315);
});



// 메인 슬라이드
var clone1 = $('#main .wrap>ul>li').clone();
var clone2 = $('#main .wrap>ul>li').clone();
$('#main .wrap>ul').append(clone1);
$('#main .wrap>ul').append(clone2);

var Number = 1;
$("#main .wrap .arrow span").text(Number + ' / 4');	// currentNum변수값 1을 첫번째 span태그에 입력

var cys = 0;	// 이미지 위치값 변수
var isOn = true;	// 클릭연사방지 스위치 변수
var playS = true;	// 플레이 함수 스위치 변수

var increase = setInterval(function() {	// 재생 정지 코드
    right();
}, 3000);



function play() {		// 재생 정지 코드
    if(playS == true){	// playS변수값이 true 상태일 때 적용
        $("#main .wrap .arrow .play").attr('src','images/play.png');
        clearInterval(increase);
        playS = false;
    } else {	// playS변수값이 false 상태일 때 적용
        $("#main .wrap .arrow .play").attr('src','images/stop.png');
        increase = setInterval(function() {
            right();
        }, 3000);
        playS = true;
    }
}



function right(){	// 우측 버튼을 누르면 뭔가를 하겠다
    if(isOn){
        cys++;	//	cys 변수값 1증가
        isOn = false;
        setTimeout(function(){
            isOn = true;
        }, 400);	// 트랜지션 시간과 동일하게 적용해야 함 (ex : 400 == 0.4초)
        $("#main .wrap>ul").css({"left" : -400 + cys * -100 + "%", "transition" : "0.4s"});

        if(cys >= 4){
            cys = 0;

            setTimeout(function(){
                $("#main .wrap>ul").css({"left" : -400 + cys * -100 + "%", "transition" : "0s"});
            }, 400);	// 트랜지션 시간과 동일하게 적용해야 함 (ex : 400 == 0.4초)
        }

        // 페이지 넘버 번호 코드
        Number++;
        if (Number > 4) {	// currentNum변수값이 5초과이면
            Number = 1;	// Number변수값을 1로 변경
        }
        $("#main .wrap .arrow span").text(Number + ' / 4');
    }
};	// 우측 버튼 이벤트 종료



function left(){		// 좌측 버튼을 누름면 뭔가를 하겠다
    if(isOn){
        cys--;	//	cys 변수값 1감소
        isOn = false;
        setTimeout(function(){
            isOn = true;
        }, 400);	// 트랜지션 시간과 동일하게 적용해야 함 (ex : 400 == 0.4초)
        $("#main .wrap>ul").css({"left" : -400 + cys * -100 + "%", "transition" : "0.4s"});

        if(cys <= -1){
            cys = 3;

            setTimeout(function(){
                $("#main .wrap>ul").css({"left" : -400 + cys * -100 + "%", "transition" : "0s"});
            }, 400);	// 트랜지션 시간과 동일하게 적용해야 함 (ex : 400 == 0.4초)
        }

        // 페이지 넘버 번호 코드
        Number--;
        if (Number < 1) {	// currentNum변수값이 1미만이면
            Number = 4;	// Number변수값을 totalNum값으로 변경
        }
        $("#main .wrap .arrow span").text(Number + ' / 4');
    }
};	// 좌측 버튼 이벤트 종료



// dot영역 클릭 이벤트
function dot(e){
    cys = e;
    $("#main .wrap>ul").css({"left" : -400 + cys * -100 + "%", "transition" : "0.4s"});


    Number = e + 1;
    $("#main .wrap .arrow span").text(Number + ' / 4');
}



//메뉴바 영역
$("#header .wrap .nav").mouseover(function(){
	$("#header .wrap .nav .sub").stop().slideDown();
	$("#header .wrap .nav .bg").stop().slideDown();
});
$("#header .wrap .nav").mouseout(function(){
	$("#header .wrap .nav .sub").stop().slideUp();
	$("#header .wrap .nav .bg").stop().slideUp();
});



//모바일 메뉴바 영역
$("#header .wrap .span_bar").click(function(){
            $("#header .wrap .nav_m").toggleClass("do");
			$("#header .wrap .span_bar span").toggleClass("do");
            // 선택자(.nav_m)에 클래스명 do가 있다면 do클래스를 해제하고 클래스명 do가 없다면 do클래스 적용
        });


$("#header .wrap .nav_m>ul>li>a").click(function(){ //모바일 주메뉴를 클릭하면
   $(this).next().slideToggle();
   $(this).parent().siblings().children(".sub").slideUp(); 
	//this : 손님이 클릭한 주메뉴를 선택
	// next : 다음 요소 선택
	//addBack : 현재 요소와 이전 요소 모두 선택
	//end : 처음 선택자로 돌아감
	//parents : 부모요소 선
	//.siblings : 형 요소 선택
	//.children : 자식 요소 선택
	//removeClass("on") on클래스 제거
});



//왼쪽 탭 영역

$("#tab .wrap .left h3").click(function(){
    $("#tab .wrap .left h3").css({"color":"#333", "border-bottom":"none"});
    $(this).css({"color":"#209f8a", "border-bottom":"2px solid #209f8a"});
    $("#tab .wrap .left .text").hide();
    $(this).next("#tab .wrap .left .text").show();
});

/*
//왼쪽 탭 영역 (다른 방법)
function tab(e){
    $("#tab .wrap .left h3").css({"color":"#333", "border-bottom":"none"});
    $("#tab .wrap .left h3").eq(e).css({"color":"#209f8a", "border-bottom":"2px solid #209f8a"});
    $("#tab .wrap .left .text").hide();
    $("#tab .wrap .left .text").eq(e).show();
}
*/



//오른쪽 탭 영역
$("#tab .wrap .right h3").click(function(){
    $("#tab .wrap .right h3").css({"background":"#F5F6FA", "border-top":"none"});
    $(this).css({"background":"white", "border-top":"0.5px solid #093454"});
    $("#tab .wrap .right .inner").hide();
    $(this).next("#tab .wrap .right .inner").show();
});