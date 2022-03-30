// функции шапки сайта
function initCustomHeader() {
  console.log('init');
  let menu1_height = $('.customHeader__menu_1').outerHeight();

  $(window).scroll(function() {
    // если страницу прокрутили дальше высоты первого уровня меню
    if ($(this).scrollTop() > menu1_height) {
      // то скрываю 2 и 3 уровни меню
      $('.customHeader__menu_2, .customHeader__menu_3').addClass('h-hide');
    } else {
      $('.customHeader__menu_2').removeClass('h-hide');
    }
  });
}

// загружаю jQuery, если он ещё не загружен
if (typeof jQuery === 'undefined') {
    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
}

// когда загрузился jQuery, загружаю функции для шапки сайта
document.addEventListener("DOMContentLoaded", function load() {
  if (!window.jQuery) return setTimeout(load, 50);

  initCustomHeader()
}, false);
