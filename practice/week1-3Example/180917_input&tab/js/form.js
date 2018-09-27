var item = $('.menu-list');
var icon = $('.sub-menu a')

item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

icon.attr("class", 'icon-dot-circled');

icon.hover(function(){

    $(this).toggleClass('icon-ok');
});

