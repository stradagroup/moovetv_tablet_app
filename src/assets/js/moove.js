MyBanners=new Array('assets/images/bg-left.jpg','assets/images/bg-left.jpg','assets/images/bg-left.jpg','assets/images/bg-left.jpg')
	MyBannerLinks=new Array('#/','#/','#/','#/')
	banner=0
	function ShowLinks(){
	document.location.href="http://www."+MyBannerLinks[banner]
	}function ShowBanners()
	{ if (document.images)
	{ banner++
	if (banner==MyBanners.length) {
	banner=0}
	document.ChangeBanner.src=MyBanners[banner]
	setTimeout("ShowBanners()",5000)
	}
	}


$("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 20,
   /*
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  */
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});


// Photo Gallery start
$(document).ready(function(){
    $grid = $('.list').isotope({
        // options
        itemSelector: '.list__item',
        layoutMode: 'masonry',
        masonry: {
            gutter: 0
        }
    });
    // filter items on button click
    $('.js-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $( '.js-filter button' ).removeClass( 'is-active' );
        $( this ).addClass( 'is-active' );
    });
});
// Photo Gallery end

// <script>
$(document).ready(function(){
    $('#show').click(function() {
        $('.menu2').toggle("slide");
    });
});
// </script>