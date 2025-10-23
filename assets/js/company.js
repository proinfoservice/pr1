$(document).ready(function () {
  $('.reviews-slider').slick({
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
        breakpoint: 1024,
        settings: {
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          centerMode: false,
          centerPadding: '0px',
          initialSlide: 0,
        }
      }
    ]
  });

  let isSwitchingTab = false;

  // При изменении слайда в слайдере
  $('.reviews-slider').on('afterChange', function(event, slick, currentSlide) {
    if (isSwitchingTab) return;

    const $currentSlide = $(slick.$slides[currentSlide]);
    const subtitle = $currentSlide.data('subtitle');
    const tabId = $currentSlide.data('tab');

    $('#current-subtitle').text(subtitle);

    const $tabLink = $(`a[href="#${tabId}"]`);
    if (!$tabLink.hasClass('active')) {
      isSwitchingTab = true;
      $tabLink.tab('show');
    }
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
    if (isSwitchingTab) {
      isSwitchingTab = false;
      return;
    }

    const tabId = $(this).attr('href').slice(1);
    const $allSlides = $('.reviews-slider .review-card:not(.slick-cloned)');
    const targetIndex = $allSlides.filter(`[data-tab="${tabId}"]`).first().data('slick-index');

    if (typeof targetIndex !== 'undefined') {
      $('.reviews-slider').slick('slickGoTo', targetIndex, true);
    }
  });
});