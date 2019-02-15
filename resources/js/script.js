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

  $('.js--main-nav a').on('click', function () {
    if ($('.js--nav-icon').css('display') !== 'none')
      $('.js--nav-icon').trigger('click');
  });


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true
  });

  $('.project-photo a').on('click', function () {
    $('body').css({
      'overflow': 'hidden !important',
      'height': '100% !important'
    });
  });
});

let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { // relitere 
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    let target = document.querySelector(hashval)
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
    history.pushState(null, null, hashval)
    e.preventDefault()
  })
}
