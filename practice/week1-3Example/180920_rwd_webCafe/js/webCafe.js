var menuBar = $(".main-menu-item");

menuBar.click(function(){
    $(this).parent().siblings().removeClass('main-menu-act');
    $(this).parent().toggleClass('main-menu-act');
})


var menu = $(".main-menu-btn");

menu.click(function(){
    $(this).parent().toggleClass('menu-act');
})
