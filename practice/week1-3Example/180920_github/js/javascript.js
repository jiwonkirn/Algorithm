var hdMenu = $(".header-menu a");

hdMenu.click(function(){
    hdMenu.removeClass('menu-act');
    $(this).addClass('menu-act');
})
