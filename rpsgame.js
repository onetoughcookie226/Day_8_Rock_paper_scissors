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
    // if you select rock, right-fist will shake and display rock
    function rightFistResultPaper() {
        $("#result-right-paper").css('display', 'inline-block');
    }
    function rightFistResult() {
        $("#right-fist").css('display','none');
    }

  //

    $("#paper").click(function() {
        setTimeout(function () {rightFistResult.call(this)}, 2000);
        setTimeout(function() {rightFistResultPaper.call(this)}, 2000);

        //  rightFistResultPaper.call(this); 2000);

        //  $("#right-fist").hide(1000).delay(100);
        //rightFistResultPaper.call(this);
        //rightFistResult.call(this);
        //rightFistResultPaper.call(this);});
    });


//right fist show the selected weapon
//left fist randomly display a weapon
//logic part
//keep the score
// show game over after 3 times lost

//shake fists after clicking the buttons"

    //keep scores of the loses.
    });
