$(document).ready(function () {
    console.log("i am about to shake the left-fist");
    //arrays of weapens
    var weapons = ['rock', 'paper', 'scissors'];

        //Apply animated shake class to the fists. declare the functions
    function leftFistShake() {
        $("#left-fist").addClass("animated shake") ;
    };
    function rightFistShake() {
        $("#right-fist").addClass("animated shake");
    };
    //click on buttons and both fists shake
    $(".buttons").click(function() {
        leftFistShake.call(this);
        rightFistShake.call(this);
    });
    // Declaring function to display right-paper, and hide right-fist
    function rightFistResult() {
        $("#right-fist").css('display','none');
    }
    function rightFistResultPaper() {
        $("#result-right-paper").css('display', 'inline-block');
    }

  //when paper is selected, right-fist will shake, then disaper and display rock

    $("#paper").click(function() {
        setTimeout(function () {rightFistResult.call(this)}, 2000);
        setTimeout(function() {rightFistResultPaper.call(this)}, 2000);
    });

    //left fist randomly display a weapon
    var randomNum = Math.floor (Math.random() * weapons.length ) +1;
    console.log(randomNum);




//logic part
//keep the score
// show game over after 3 times lost

//shake fists after clicking the buttons"

    //keep scores of the loses.
    });
