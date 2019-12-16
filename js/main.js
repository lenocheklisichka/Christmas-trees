
$('.menu-btn').on('click', function(e) {
  event().preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});


