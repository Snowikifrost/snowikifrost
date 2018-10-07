// для изменения цвета навигации

var $window = $(window);

$window.on('scroll', onScroll);

function onScroll() {
  if($window.scrollTop() >= $window.height() && $window.scrollTop() < 2*$window.height() || $window.scrollTop() >= 3*$window.height() ) {
    $('.clr').css('color', '#A4A4A4');
  } else {
   $('.clr').css('color', '#f1f1f1');
  }
}

// конец скрипта навигации

//плавная прокрутка к якорям
$(document).ready(function(){
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });
//Скролл по секциям
    $(".mm").click(function () {
  $('html, body').animate({scrollTop:0}, '600');
});
    $.scrollify({
    section : ".scrollo"
  });

});

/*//паралакс
$(window).scroll(function(){

    var st = $(this).scrollTop();

    $('.sect1').css({
      "transform" : "translate(0%, " + st / 50 +"%)"
    })

})*/