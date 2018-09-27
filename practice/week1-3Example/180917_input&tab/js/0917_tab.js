var icon = $('.board-list a');

icon.attr("class", 'icon-right-open');

var tab = $('.tab');

tab.attr('tabindex', '0');

tab.on('click focusin', function(){
    $(this).parent().siblings().removeClass('tab-act');
    $(this).parent().addClass('tab-act');
});

