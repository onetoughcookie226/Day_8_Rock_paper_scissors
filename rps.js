$(document).ready(function () {
    //arrays of weapons
    var weapons = ['rock', 'paper', 'scissors'];

    //Apply animated shake class to the fists. declare the functions
    function leftFistShake() {
        $("#left-fist").addClass("animated shake").css('display','none');
        var max = weapons.length;
        console.log("max:",max);
        var randomNum = Math.floor(Math.random()*max);
        $("#result-left-" + weapons[randomNum]).show();
        console.log("weapons:",weapons);
        console.log("randomNum:",randomNum);
        console.log("#result-left-" + weapons[randomNum]);
    }

    function rightFistShake(choice) {
        $("#right-fist").addClass("animated shake").css('display','none');
        $("#result-right-" + choice).show();

    }
    //click on buttons and both fists shake

    $(".weapon").click(function () {
        $(".weapon-image").hide();
        $(".fist-image").show();
        leftFistShake.call(this);
        var choice = this.id;
        rightFistShake(choice);
    });
});