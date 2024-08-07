var randomNum1 = Math.floor((Math.random() * 6) +1);
var randomNum2 = Math.floor((Math.random() * 6) +1);

var randomDice1 = "images/dice" + randomNum1 + ".png";
var randomDice2 = "images/dice" + randomNum2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDice1);
document.querySelector(".img2").setAttribute("src", randomDice2);

var heading = document.querySelector("h1");

if(randomNum1 > randomNum2){
    heading.innerHTML = "🚩Player 1 wins !";
    heading.style.fontSize = "6.5rem";
} 
else if(randomNum1 < randomNum2){
    heading.innerHTML="Player 2 wins 🚩!";
    heading.style.fontSize = "6.5rem";
} 
else {
    heading.innerHTML="🏁 Draw 🏁";
}  