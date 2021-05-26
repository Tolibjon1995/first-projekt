$(document).ready(function(){
    $(".owl-one").owlCarousel({
        loop: true,
        items: 3,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["&#8672;","&#8674;"],
        responsive: {
            0: {
                items: 1.5
            },
            576: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    
    $(".customNextBtn").click(function() {
        carouselEl.trigger('next.owl.carousel');
    });
    
    $(".customPrevBtn").click(function() {
        carouselEl.trigger('prev.owl.carousel', [300]);
    });
});

$(document).ready(function(){
    $(".owl-two").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: true,
        navText: ["&#8672;","&#8674;"],
        
    });
    
    // $(".customNextBtn").click(function() {
    //     carouselEl.trigger('next.owl.carousel');
    // });
    
    // $(".customPrevBtn").click(function() {
    //     carouselEl.trigger('prev.owl.carousel', [300]);
    // });
});