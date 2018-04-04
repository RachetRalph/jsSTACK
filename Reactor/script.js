var start = performance.now();

// Function that generates random hexadecimal combo 
function randoColor() {
    var hex = "023456789ABCDEF"
    var color = "#"

    for (var i = 0; i < 6; i++) {

        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;

    
}

// Function that makes the shape appear 
function shapeAppear() {

    var top = Math.random() * 420;
    var left = Math.random() * 420;
    var right = Math.random() * 420;
    var width = (Math.random() * 420) + 100;

    if (Math.random( ) > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = 0;
    }

    document.getElementById("shape").style.backgroundColor = randoColor();

    document.getElementById("shape").style.top = top + "px";

    document.getElementById("shape").style.left = left + "px";

    document.getElementById("shape").style.width = width + "px";

    document.getElementById("shape").style.height = width + "px";

    document.getElementById("shape").style.display = "block";
    start = performance.now();

}




// Delays the appearance of shapes 
function delayAppear() {
    setTimeout(shapeAppear, Math.random() * 2000);
}

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = performance.now();

    var timeTaken = (end - start) / 1000;

    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";

    delayAppear();
}