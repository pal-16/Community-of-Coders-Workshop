var x = document.getElementById("myAudio1");

function playAudio1() {

    x.play();
}

var y = document.getElementById("myAudio2");

function playAudio2() {

    y.play();
}

var z = document.getElementById("myAudio3");

function playAudio3() {

    z.play();
}

// A Sample function to show how it could have been done without using DOM as well 
function playAudio(id) {
    id.play();
}


function display() {
    alert('By the seniors,for the juniors!');
}