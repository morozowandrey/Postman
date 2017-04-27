$(document).ready(function(){

  //POPUPS
  $('.preview-video__play').magnificPopup();

  // MOBILE MENU
    $(".menu").on("click", function(e){
        $("#header-menu").toggleClass("hidden");
        $(".menu-global").toggleClass("menu-global_white");
    })

  
  // MOBILE MENU BUTTON
    var Menu = {
      
    el: {
      ham: $('.menu'),
      menuTop: $('.menu-top'),
      menuMiddle: $('.menu-middle'),
      menuBottom: $('.menu-bottom')
    },
    
    init: function() {
      Menu.bindUIactions();
    },
    
    bindUIactions: function() {
      Menu.el.ham
          .on(
            'click',
          function(event) {
          Menu.activateMenu(event);
          event.preventDefault();
        }
      );
    },
    
    activateMenu: function() {
      Menu.el.menuTop.toggleClass('menu-top-click');
      Menu.el.menuMiddle.toggleClass('menu-middle-click');
      Menu.el.menuBottom.toggleClass('menu-bottom-click'); 
    }
  };

  Menu.init();

    /////////////////////////////////

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
    $('.navigation-list a[href^="#"]').on("click", function (e) {
        e.preventDefault();

        var elementClick = $(this).attr("href"); 
        var destination = $(elementClick).offset().top;
        console.log(this);

        $('html,body').animate({
          scrollTop:destination
        }, 1000 );
        
    });

  //NAV
  $('.navigation-list__link').on('mouseenter', function(e){

    var coordLink =  $(this).position();
    var dot = $('.navigation-slider__dot');
    var linkHeight = parseInt($(e.target).height());
    var dotHeight = parseInt(dot.height());
    var moveTop = coordLink.top;
    
    $(dot).css('top', moveTop);

  })

});

  // loading preview image for video boxes
  ( function() {
    var wakeupBox = $('.wakeup-video__box, .cases-video__box');
    
    for(var i = 0; i < wakeupBox.length; i++) {

        var watchButton = $('.wakeup-video, .preview-video-box').children('.preview-video__play');
        var videoData = $(watchButton[i]).data('embed');
        var source = "https://img.youtube.com/vi/"+ videoData +"/sddefault.jpg";
        var image = new Image();

        image.src = source;
        $(wakeupBox[i]).prepend( image );

        if($('body').hasClass('.wake-up')){
          $(image).addClass('wakeup-video__img');
        }
    }

  } )();


  // YOU-TUBE videos on team page
( function() {
			$('.preview-video__play').on( "click", function() {

        // find pop-up
        var videoPopup = $("#video-popup").children(".video-popup")[0]

        // clear pop-up from the iframe
           if(videoPopup.children){
              videoPopup.innerHTML = "";
            }
            
        // iframe settins
        var iframe = document.createElement( "iframe" );
            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=0" );
          
        // creating iframe with wrapper and push it in inited pop-up
        var div = document.createElement( "div" );
            div.setAttribute('class', 'youtube')
            $(div).append( iframe );
            $(videoPopup).append( div );
      });
} )();