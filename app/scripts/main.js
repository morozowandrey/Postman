$(document).ready(function(){
  
  $('.dark-block__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });

  $('.white-block__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false
  });

  // $(".preview__image").mouseover(function(e){
  //       $(".preview-video-box").addClass("flex");  
  //   })

  // $(".preview__image").mouseout(function(e){
  //     $(".preview-video-box").removeClass("flex");  
  // })

  // $(".preview__image").mouseover(function(e){
  //       $(".preview-video-box").removeClass("hidden");  
  //   })

  // $(".preview__image").mouseout(function(e){
  //     $(".preview-video-box").addClass("hidden");  
  // })

  // ANKERS
    $('li[href^="#"]').on("click", function (e) {
        e.preventDefault();

        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;

        $('body').animate(1000 );
    });

});