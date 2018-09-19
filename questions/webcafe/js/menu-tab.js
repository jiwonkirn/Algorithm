$(document).ready(function(){
  var btn = $('.btn-visual');
  var visual = $('.visual');
  var tab = $('.tab');
  var mainMenu = $('.main-menu');
  var menu = $('.main-menu > li');
  var item = $('.menu-item');
  var userEmail = $('#user-email');

  // 메인 메뉴에서 mouseout 이벤트 발생 시 
  // 모든 메뉴(.main-menu > li)의 is-act 클래스를 제거
  mainMenu.on('mouseout', function(){
      menu.removeClass('is-act');
  });
  // 로그인의 아이디 입력상자에 focusin 이벤트 발생 시 
  // 모든 메뉴(.main-menu > li)의 is-act 클래스를 제거
  userEmail.on('focusin', function(){
      menu.removeClass('is-act');
  });
  // 메뉴(.main-menu > li)에 mouseover 이벤트 발생시
  // 모든 메뉴(.main-menu > li)의 is-act 클래스를 제거한 후
  // 이벤트가 발생한 메뉴(.main-menu > li)에  is-act 클래스를 추가
  menu.on('mouseover', function(){
      menu.removeClass('is-act');
      $(this).addClass('is-act');
  });
  // .menu-item(.main-menu span)에 focusin 이벤트 발생시
  // 모든 메뉴(.main-menu > li)의 is-act 클래스를 제거한 후
  // 이벤트가 발생한 .menu-item의 부모 요소(.main-menu > li)에 is-act 클래스를 추가
  item.on('focusin', function(){
      menu.removeClass('is-act');
      $(this).parent().addClass('is-act');
  });
  // 공지사항 및 자료실 영역인 .tab에 focusin 또는 click 이벤트가 발생하면
  // 이벤트가 발생한 .tab의 부모 요소(.board > section)의 형제 요소를 찾아서 is-act 클랙스를 제거
  // 다시 이벤트가 발생한 .tab의 부모 요소(.board > section)에만 is-act 클래그를 추가
  tab.on('focusin click', function(){
      $(this).parent().siblings().removeClass('is-act');
      $(this).parent().addClass('is-act');
  });
});