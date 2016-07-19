$(document).ready(function () {
    console.log("i am about to shake");


    function myMove () {

        var elem = document.getElementById("myAnimation");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                /* code to change the element style */
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }

    }




});

