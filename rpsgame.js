$(document).ready(function () {
    console.log("i am about to shake the left-fist");

    function leftFistShake() {
        $("#left-fist").addClass("animated shake") ;
    };
    function rightFistShake() {
       $("#right-fist").addClass("animated shake");
    };

    $("#rock").click(function() {
        leftFistShake.call(this);
        rightFistShake.call(this);
    });

    $("#paper").click(function() {
        console.log("test");
        leftFistShake();
    });

    $("#scissors").click(function() {
        leftFistShake();
    });

    //keep scores of the loses.

  /*  $("#rock").click(function myMove () {
     console.log("my move was called");
        var elem = document.getElementById("myAnimation");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            console.log("tick");
            if (pos == 350) {
                clearInterval(id);
            } else {
                /* code to change the element style */
            /*    pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }); */

});

function myFunction () {

    console.log("test");
}