$(document).ready(function(){

  //POPUPS
  $('.preview-video__play').magnificPopup();

  //SLIDERS
  $('.dark-block__slider, .white-block__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });

  //ANKERS
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var elementClick = $(this).attr("href"); 
        var destination = $(elementClick).offset().top;

        $('body').animate({
          scrollTop:destination
        }, 1000 );
    });

  //NAV
  $('.navigation-list__link').hover(function(e){
    // e.preventDefault();

    var coordLink =  $(this).position();
    var linkHeight = e.target.getBoundingClientRect().height;
    var dotHeight = $('.navigation-slider__dot')[0].getBoundingClientRect().height;
    var dot = $('.navigation-slider__dot');
    var moveTop = coordLink.top

    dot.css('top', moveTop);

  })

});