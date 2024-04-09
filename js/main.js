// Carousel

const owl = $('.owl-carousel');
owl.owlCarousel({
        center: true,
        loop: true,
        margin: 20,
        startPosition: 0,
        items: 1,
        responsive : {
            540 : {
                items: 3,
                startPosition: 1,
            },

            1200 : {
                margin: 30,
                items: 3,
            },
        }
});

// Go to the previous item
$('.slider__btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})
// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})


// Nav icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
    document.body.classList.toggle('no-scroll');
}