var item = $('.menu-item');

item.attr('tabindex', '0');

item.on('mouseover focusin', function(){
    item.removeClass('menu-act');
    $(this).addClass('menu-act');
});

item.on('mouseout focusout', function(){
    item.removeClass('menu-act');
});