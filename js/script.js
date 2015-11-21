$('.bxslider').bxSlider({
  nextSelector: '#slider-next',
  prevSelector: '#slider-prev',
  nextText: 'Onward →',
  prevText: '← Go back'
});

    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });
$(window).on('resize', function(){
  var window = $(window).width();
  if( windowWidth < 768){
    gallery.destroy();
  }
  else{}
});





    