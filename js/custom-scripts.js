; (function () {
  $(document).ready(function () {
    AOS.init({offset: 0, once: true});

    // $('a').click(function(event) {

    //   if ($(this).hasClass('nav-link') || $(this).hasClass('navbar-brand')) {
    //     event.preventDefault();
    //     var url = $(this).attr('href')
    //     $("html, body").animate({
    //       opacity: 0
    //     }, 300, function() {
    //       window.location.href = url;
    //     })
    //   }
    // })

    $(window).add(".modal").on("scroll", function () {
      var scroll = $(this).scrollTop();
      if (scroll < 50) {
        $(".navbar").removeClass("sticky");
        $("#back-top").fadeOut(700);
      } else {
        $(".navbar").addClass("sticky");
        $("#back-top").fadeIn(700);
      }
    });

    $(".navbar-toggler").click(function() {
      var navbar = $(".navbar-collapse");
      if (navbar.hasClass("opened")) {
        navbar.removeClass("opened");
        $("body").removeClass("navOpened");
        $(".navbar-toggler").removeClass("toggle-clicked");
      } else {
        navbar.addClass("opened");
        $("body").addClass("navOpened");
        $(".navbar-toggler").addClass("toggle-clicked");
      }
    });

    $('.navbar-brand').on("click", function (e) {
      $('.modal').modal('hide');
    });

    // $('.projects-slide').slick({
    //   infinite: true,
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   autoplay: false,
    //   autoplaySpeed: 3000,
    //   arrows: true,
    //   nextArrow:'<a class="carousel-control-next-icon nextArrow" aria-hidden="true"></a>',
    //   prevArrow:'<a class="carousel-control-prev-icon prevArrow" aria-hidden="true"></a>',
    //   responsive: [
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    // });
    $('.projects-slide').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      initialSlide: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/next-arrow.svg" alt="next"></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/prev-arrow.svg" alt="prev"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            centerMode: false,
            centerPadding: '0px',
            initialSlide: 0,
          }
        }
      ]
    });

    $('.projects-slide').on('afterChange', (e, slick, i) => {
      const $slide = $(slick.$slides[i]);
      $('#current-subtitle').text($slide.data('subtitle'));
      const tabId = $slide.data('tab');
      const $link = $(`a[href="#${tabId}"]`);
      if (!$link.hasClass('active')) $link.tab('show');
    });

    $('a[data-toggle="tab"]').on('shown.bs.tab', e => {
      const tabId = $(e.target).attr('href').slice(1);
      const $originals = $('.projects-slide .review-card:not(.slick-cloned)');
      const index = $originals.index($originals.filter(`[data-tab="${tabId}"]`).first());
      $('.projects-slide').slick('slickGoTo', index, true);
    });

    $(".navbar-nav .active").removeClass("active");
    $(`.navbar-nav a[href="${location.pathname}"]`).addClass("active");
  });
})();