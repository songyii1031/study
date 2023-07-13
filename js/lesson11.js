

var btn = $('.tab-button'); 
// for (var i = 3; i < 6; i++) {
//     console.log('안녕');
// }

// 0부터 3까지 3번 반복해라

 
var len = $('.tab-button').length;
for (let i = 0; i < len; i++) {
    
       // 반복문 사용시
 
    btn.eq(i).on('click', function(){
        openTab(i);
    });
 
 

}

//간단히 만들기
// $('.list li').click(function(e){
     
//     console.log(( e.target.dataset.id ))
//     openTab( e.target.dataset.id ); 
// });


function openTab(a) {
   
    btn.removeClass('orange');
    btn.eq(a).addClass('orange');

    $('.tab-content').removeClass('show');
    $('.tab-content').eq(a).addClass('show');
// btn.eq(i).on('click', function(){ 
// });
}

var a = document.createElement('p');

a.innerHTML = '안녕';
document.querySelector('#test').appendChild(a);

var 탬플릿 = '<p>안녕</p>';
document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
