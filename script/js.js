

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    Default: ['<i class="bi bi-chevron-left"></i>','<i class="bi bi-chevron-right"></i>'],
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        1000:{
            items:4
        }
    }
})