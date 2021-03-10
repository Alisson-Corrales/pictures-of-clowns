`use strict`;

$(function(){
    //settings for slide
    let width = 720;
    let animationSpeed = 2000; //two seconds
    let pause = animationSpeed - 500; //1500
    let currentSlide = 1; //keeps track of slides

    //cache DOM elements
    let $slideContainer = $(`.slides`);
    let $slides = $(`.slide`);
    //dollar sign lets others know its a jQuery elements

    //create a variable to store our interval
    let interval;

    //create a function that'll start the slider
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
    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    //create a function that'll stop the slider
    function pauseSlider(){
        clearInterval(interval) //is saved on interval
    }
}
)



$(function(){
    let animationSpeed = 3000;
    let $background = $(body);
    let interval;

    function chameleon(){
        interval = setInterval(function(){
            hold
        })
    }
})