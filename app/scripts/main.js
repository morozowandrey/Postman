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

        $('body').animate({
          scrollTop:destination
        }, 1000 );
    });

  //NAV
  $('.navigation-list__link').hover(function(e){

    var coordLink =  $(this).position();
    var linkHeight = e.target.getBoundingClientRect().height;
    var dotHeight = $('.navigation-slider__dot')[0].getBoundingClientRect().height;
    var dot = $('.navigation-slider__dot');
    var moveTop = coordLink.top

    dot.css('top', moveTop);

  })
  
  $('.video-popup').on("click", function(){
    console.log(this);
  })

});


//   // YOU-TUBE
// ( function() {
// 			$('.preview-video__play_team').on( "click", function() {
//         var iframe = document.createElement( "iframe" );
//             console.log($(this).find('.youtube'));
//             iframe.setAttribute( "frameborder", "0" );
//             iframe.setAttribute( "allowfullscreen", "" );
//             iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=0" );

//             this.innerHTML = "";
//             this.append( iframe );
//       } );
// } )();


  // YOU-TUBE
( function() {
  
	var youtube = document.querySelectorAll( ".youtube" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );
	};

} )();