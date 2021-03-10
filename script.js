"use strict";



$(function(){
    $(".links").slideDown(700)
})


$(function(){
    //slide settings
    let width = 720;
    let animationSpeed = 2500;
    let pause = animationSpeed + 3000;
    let currentSlide = 1;

    //cache DOM elements
    let $slideContainer = $(`.slides`);
    let $slides = $(`.slide`);

    let interval;

    function startSlider(){
        interval = setInterval(function(){
            $slideContainer.animate({'margin-left': `-=${width}`},
                animationSpeed,
                function(){
                    currentSlide++;
                    if(currentSlide == $slides.length){
                        currentSlide = 1;
                        $slideContainer.css('margin-left', 0)
                    }
                }
            )
        }, pause)
    }
    startSlider();
}
)