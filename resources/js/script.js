$(document).ready(function () {

  /* sticky navigation */
  $('.js--section-whoami').waypoint(function (direction) {
    if (direction === "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '10%'
  });

  /* Navigation scroll */
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - $(this).outerHeight(true)
          }, 1000);
          return false;
        }
      }
    });
  });

  /* Animation on scroll */
  $('.js--wp-1').waypoint(function (direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-2').waypoint(function (direction) {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js--wp-3').waypoint(function (direction) {
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js--wp-4').waypoint(function (direction) {
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  // Mobile navigation
  $('.js--nav-icon').click(function () {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });

  $('.js--main-nav a').on('click', function() {
    if ($('.js--nav-icon').css('display') !== 'none')
      $('.js--nav-icon').trigger('click');
  });


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
  });

  $('.project-photo a').on('click', function() {
    $('body').css({'overflow': 'hidden !important', 'height': '100% !important'});
  });
});