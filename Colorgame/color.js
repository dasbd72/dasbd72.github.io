var button = document.getElementById("color-change-btn");
var colortext = document.getElementById("color-text");
var responsetext = document.getElementById("response-text");
var colorbox = [document.getElementById("color-box-0"), document.getElementById("color-box-1"), document.getElementById("color-box-2")];
var background = document.getElementsByTagName("body")[0];
var correctIdx = 0, correctColor;

function randomColor(){
    function randomNum(){
        return String(Math.floor(Math.random() * 256 + 0));
    }
    return "RGB(" + randomNum() + "," + randomNum() + "," + randomNum() + ")";
}
function reset(){
    background.style.backgroundColor = "RGB(20,20,20)"
    colortext.innerText = correctColor = randomColor();
    responsetext.innerText = "";
    correctIdx = Math.floor(Math.random() * 3 + 0);
    for(var i = 0; i < 3; i++){
        if(i == correctIdx)
            colorbox[i].style.backgroundColor = correctColor;
        else
            colorbox[i].style.backgroundColor = randomColor();
    }
    console.log("reset");
}
function answer(idx){
    console.log("clicked "+idx);
    if(idx == correctIdx){
        responsetext.innerText = "Congratulations!";
        background.style.backgroundColor = correctColor;
    }
    else
        responsetext.innerText = "Try Again...";
}

reset();
button.onclick = reset;
colorbox[0].onclick = function(){answer(0)};
colorbox[1].onclick = function(){answer(1)};
colorbox[2].onclick = function(){answer(2)};