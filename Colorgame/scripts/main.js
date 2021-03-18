var numCards = 9;
var currMode = 1;
var gameOver = false;
var colors = [];
var pickedColor;
var body = document.querySelector("body");
var modes = document.querySelectorAll(".mode");
var cards = document.querySelectorAll(".card");
var colorDisplay = document.getElementById("color-picked");
var messageDisplay = document.querySelector("#message");
var timeDisplay = document.querySelector("#time-left");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var resetDisplay = document.querySelector("#reset span");
var countdownInterval;
var flashInterval;
var timeLeft;

function init() {
    setDifficulty();
    initCards();
    reset();
}

function setDifficulty(){
    if(currMode == 0) numCards = 3;
    else numCards = 6;
    for(var i = 0; i < modes.length; i++){
        if(i != currMode){
            modes[i].style.backgroundColor = "white";
            modes[i].style.color = "#484848";
        }
        else{
            modes[currMode].style.backgroundColor = "steelblue";
            modes[currMode].style.color = "white";
        }
    }
}

function initCards() {
    for (var i = 0; i < cards.length; i++) {
        //add click listeners to cards
        cards[i].addEventListener("click", function() {
            if (gameOver)
                return;
            //grab color of clicked card
            var clickedColor = this.style.backgroundColor;
            // alert(this.style.backgroundColor);
            //compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetDisplay.textContent = "Play Again"
                timeDisplay.textContent = null;
                changeColors("#FFF");
                body.style.backgroundColor = clickedColor;
                gameOver = true;
                resetButton.style.display = "block";
                clearInterval(countdownInterval);
                clearInterval(flashInterval);
            } else {
                this.style.opacity = 0;
                messageDisplay.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    gameOver = false;
    colors = generateRandomColors(numCards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    resetDisplay.textContent = "New Color"
    messageDisplay.textContent = "What's the Color?";
    timeDisplay.textContent = "";
    resetButton.style.display = "block";
    if(countdownInterval != null) clearInterval(countdownInterval);
    if(flashInterval != null) clearInterval(flashInterval);
    //change colors of cards
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.opacity = 1;
        if (colors[i]) {
            cards[i].style.display = "block";
            cards[i].style.backgroundColor = colors[i];
        } else {
            cards[i].style.display = "none";
        }
    }
    body.style.backgroundColor = "#232323";
    if(currMode == 2){
        timeLeft = 5;
        timeDisplay.textContent = " 5";
        resetButton.style.display = "none";
        countdownInterval = setInterval(function(){
            if(gameOver) return;
            // flash part
            body.style.backgroundColor = "#888888";
            flashInterval = setTimeout(function(){
                if(timeLeft == 0) body.style.backgroundColor = pickedColor;
                else body.style.backgroundColor = "#232323";
            }, 150);
            timeLeft--;
            timeDisplay.textContent = " "+timeLeft;
            // if time out
            if(timeLeft == 0){
                gameOver = true;
                messageDisplay.textContent = "Timeout!";
                timeDisplay.textContent = null;
                resetDisplay.textContent = "Try Again";

                body.style.backgroundColor = pickedColor;
                changeColors("#FFF");
                clearInterval(countdownInterval);
                resetButton.style.display = "block";
            }
        }, 1000);
    }
}

function changeColors(color) {
    //loop through all cards
    for (var i = 0; i < cards.length; i++) {
        //change each color to match given color
        cards[i].style.opacity = 1;
        cards[i].style.backgroundColor = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    //make an array
    var arr = []
    //repeat num times
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}
function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from  0 -255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from  0 -255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

window.onload = function() {
    init();
    resetButton.addEventListener("click", function() {
        reset();
    })
    function setMode(i) {
        return function(){
            console.log(i);
            currMode = i;
            init();
        }
    }
    for(var i = 0; i < modes.length; i++){
        modes[i].addEventListener("click", setMode(i));
    }
};
