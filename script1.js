//$(function(){
    //$("#panel1").hide(1000) //grabs the things with #panel-1, 'hide' hides it, and '1000' does in 1000 miliseconds
    //$('#panel1').toggle(1000).toggle(1000).toggle(1000)
    //$("#panel1").hide(3000).toggle(2000)
    //$("#panel2").fadeTo(1000, 0.0).fadeTo(2000, 0.8)
    //$("#panel3").slideUp(1000).hide(1000).slideDown(1500)
    //$("#panel4").fadeTo(1000, 0.3).slideUp(2000).slideDown(2000).fadeTo(2000, 0.1).fadeTo(2000, 1.0)
//});


$("#panel1-content").html("the background is blue and the text is white")
$("#panel1").css({
    "background-color": 'blue',
    'color': 'white'
});

$("#panel2-content").html("the background is green and the text is white")
$("#panel2").css({
    "background-color": 'green',
    'color': 'white'
});

$("#panel3-content").html("the background is blue and the text is white")
$("#panel3").css({
    "background-color": 'grey',
    'color': 'white'
});

$("#panel4-content").html("the background is blue and the text is white")
$("#panel4-content").css({
    "background-color": 'red',
    'color': 'white'
})


//$("#button1").on("click", function(){
//    $('#panel1').fadeToggle(1000);
//})

//my version, which works :D
//$('#button2').on("click", function(){
//    randoNum = Math.floor(Math.random()*3.5);
//    if(randoNum <= 6 && randoNum>= 1){
//        $('#panel2').hide('randoNum').toggle('randomNum');
//    }
//    console.log(randoNum)
//})
//teacher's. which works better
//$("#button2").on('click',function(){
//    let randy = Math.floor(Math.random()*(6000-1000)+1000); //max-min
//    $('#panel2').hide(500).delay(randy).show(500);
//    $('#panel2-heading').html(`${randy} milliseconds`)
//})

//$('#button3').on('mouseover', function(){
//    $('#panel3').fadeOut(1000);
//    $('#panel4').fadeOut(1000);
//})
//$('#button4').on('mouseover', function(){
//    $('#panel3').fadeIn(1000);
//    $('#panel4').fadeIn(1000);
//})

//$("h1").html("turn them all off!")
//$('#button1').on('click',function(){
//    $('#panel1').toggle(1000);
//    $('#panel4').toggle(1000);
//})
//$('#button2').on('click',function(){
//    $('#panel2').toggle(1000);
//    $('#panel3').toggle(1000);
//    $('#panel4').toggle(1000);
//})
//$('#button3').on('click',function(){
//    $('#panel1').toggle(1000);
//    $('#panel3').toggle(1000);
//})
//$('#button4').on('click',function(){
//    $('#panel1').toggle(1000);
//    $('#panel2').toggle(1000);
//})

//$('button').on('click', function(){
//    let panelId = $(this).attr('panelid');
//    $('#panel'+ panelId).toggle(1000);
//    $(`#panel ${panelid} .panel-heading`).html(`this changed`)
//})
//


$('#button1').html('click me for panel 1');
$('#panel1').hide(0000);
$('#panel2').hide(0000);
$('#panel3').hide(0000);
$('#panel4').hide(0000);
$('#button2').hide(0000);
$('#button3').hide(0000);
$('#button4').hide(0000);

$('#button1').on('click', function(){
    $('#panel1-heading').html("click the second button for the third panel");
    $('#panel1').slideDown(1000);
    $('#button2').toggle(1000);
})
$('#button2').on('click', function(){
    $('#panel2-heading').html("click the second button for the third panel");
    $('#panel2').slideDown(1000);
    $('#button3').toggle(1000);
})
$('#button3').on('click', function(){
    $('#panel3-heading').html("click the second button for the third panel");
    $('#panel3').slideDown(1000);
    $('#button4').toggle(1000);
})
$('#button4').on('click', function(){
    $('#panel4-heading').html("das it. thank you");
    $('#panel4').slideDown(1000);
})


//$('button').on('click', function(){
//    let panelid = $(this).attr('panelid'); //1, 2, 3, 4
//    $('#pane2' + panelid).slideDown(1000);
//    $(`#panel${panelid} .panel-heading`).html(`click on button 3 for panel 3`)
//
//    $('#pane3' + panelid).slideDown(1000);
//    $(`#panel${panelid} .panel-heading`).html(`click on button 4 for panel 4`)
//
//    $('#pane4' + panelid).slideDown(1000);
//    $(`#panel${panelid} .panel-heading`).html(`click on button 3 for panel 3`)
//})

//$(`li`).on(`click`, function(){
//    $(this).next().toggle(3000)
//})
//makes it to where list items close when clicked on

//$(`li`).on(`click`, function(){
//    $(`.highlight`).removeClass(`highlight`);
//    $(this).addClass('highlight');
//})

$(`li`).on(`click`, function(){
    $(this).closest(`.list`).find(`li`).filter(`.highlight`).removeClass(`highlight`);
    $(this).addClass('highlight');
})