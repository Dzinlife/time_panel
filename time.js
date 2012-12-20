var show_time = true;
var slide_velocity = 233;


$().ready(function() {
  $('.side-switch').click(function() {
    if (show_time) {
      $('.side-float').animate({width : '-=140px'}, slide_velocity);
      $('.side').animate({width : '-=140px'}, slide_velocity);
      $('.side-switch').toggleClass('after', true);
    } else {
      $('.side-float').animate({width : '+=140px'}, slide_velocity);
      $('.side').animate({width : '+=140px'}, slide_velocity);
      $('.side-switch').toggleClass('after', false);
    }
    show_time = !show_time;
  });
});
