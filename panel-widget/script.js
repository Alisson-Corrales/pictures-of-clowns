"use strict";

$(function(){
    $('.tabs-panels .tabs li').on('click', function(){



        //~~~~~~~~~ TABS ~~~~~~~~~//
        //create a variable to store the list we are in
        let $panel = $(this).closest('.tabs-panels');

        //remove the active from the old one
        $panel.find('.tabs li.active').removeClass('active');
        //add the active class to the li that you clicked on
        $(this).addClass('active')



        //~~~~~~~~~ PANELS ~~~~~~~~~//

        //figure out which panel we want to show
        let $panelToShow = $(this).attr('rel');

        //hide the current panel
        $panel.find('.panel.active').slideUp(500, showNextPanel);
    
        //find the next and display it
        function showNextPanel(){
            $(this).removeClass('active');
            $(`#${$panelToShow}`).slideDown(500, function(){
                $(this).addClass('active');
            })
        }

    })
})