; (function () {
  $(document).ready(function () {

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

    $(".navbar-nav .active").removeClass("active");
    $(`.navbar-nav a[href="${location.pathname}"]`).addClass("active");
    const currentYear = new Date().getFullYear();
    document.querySelectorAll('.current-experience').forEach((item) => {
      item.textContent = currentYear - 2009;
    });
    document.getElementById('current-year').textContent = currentYear;
  });
})();