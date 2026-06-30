// document.body.querySelector(".img1").setAttribute("src", "./images/dice1.png") 
// document.body.querySelector(".img1").setAttribute("src", "./images/dice2.png")
// document.body.querySelector(".img1").setAttribute("src", "./images/dice3.png")
// document.body.querySelector(".img1").setAttribute("src", "./images/dice4.png")
// document.body.querySelector(".img1").setAttribute("src", "./images/dice5.png")
// document.body.querySelector(".img1").setAttribute("src", "./images/dice6.png")

// var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// document.body.querySelector(".img1").setAttribute("src", `./images/dice2${randomNumber1}.png`) 
// console.log(randomNumber1)

function start(){
var randomNumber1   = Math.floor(Math.random() * 6) + 1; //1-6 numbers
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1 - dice6
var randomImageSource = "images/" + randomDiceImage; // images/ dice1 - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; //image 1
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

//if player 1 wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Durgesh Wins";
}

//palyer 2 wins
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Atharva Wins";
}

else{
    document.querySelector("h1").innerHTML = "Draw!!";
}
}