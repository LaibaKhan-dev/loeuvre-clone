jQuery(document).ready(function(){
    jQuery('.items').slick({
      dots: true,
      arrows: false,
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      arrows: true,
      autoplay: true,
      responsive: [{
          breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          },
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '30px',
          },
      }],
    }) 
  });