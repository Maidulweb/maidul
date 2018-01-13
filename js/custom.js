$('.menu a').click(function(){
	$('.menu a').removeClass('current');
	$(this).addClass('current');
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    slideSpeed : 100,
    autoplayTimeout:4000,
    dots:true,
    animateIn:'zoomIn',
    navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:false
        },
        600:{
            items:1,
            nav:true,
            loop:true,
            center:true,
            autoHeight:true,
            dots:false
        },

      

         900:{
            items:1,
            nav:true,
            loop:true,
            center:true,
            autoHeight:true,
        },
        1000:{
            items:1,
            nav:true,
            loop:true
        }
    }
})