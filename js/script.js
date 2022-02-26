(function ($) {
  'use strict'; //start of use strict

  //Smooth Scrolling use jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.has.slice(1) + "]");
      if (target.length) {
        $("html, body").animate({
          scrollTop: target.offset().top,

        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  //Closes Responsive menu when scroll trigger link is clicked 
  $('js-scroll-trigger').click(function () {
    $(".navbar-collapse").collapse("hide");

  });
  //Activate scroolspy to add active class to navbar item on scroll
  $('body').scrollspy({
    target: "#sideNav",

  });
}

)(jQuery);