// jQuery를 활용한 인터렉션 ...

// 메인 메뉴 제어를 위한 함수
//jQuery select 함수
var item = $('.menu-item');
var subItem = $('.sub-menu a');

//.menu-item에 tabindex="0" 부여
item.attr('tabindex', '0');
subItem.attr("class", 'fas fa-angle-left');

//on()는 멀티 이벤트를 동작할 수 있다.
 item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
 });

 subItem.hover(function(){
     $(this).toggleClass('fa-angle-right');
 });

//  탭 메뉴 제어를 위한 함수
var tab = $('.tab');

tab.attr('tabindex', '0');

tab.on('click focusin', function(){
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});

// siblings = 형제들 
// keyup
// keypress
// keypdown

// 관련사이트 애니메이션을 위한 함수
var list = $('.related-list');

//hover 자체가 hover in/out이라는 멀티이벤트이기 때문에 on 으로 hover와 focus 둘 다 사용할 수 없다.
// list.hover(function(){
//     $(this).toggleClass('related-act');
// })

list.on('mouseover focusin', function(){
    $(this).addClass('related-act');
})

list.on('mouseout focusout', function(){
    $(this).removeClass('related-act');
})