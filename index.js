//DADO 1------------------------------------------------------------------------------------------------
//Gerando numero aleatorio
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

//colocando aleatorio no link
var diceRandom1 = "images/dice"+ randomNumber1 +".png";

//trocando o link
var dc1 = document.querySelector("img").setAttribute("src", diceRandom1);

//DADO 2------------------------------------------------------------------------------------------------
//numero aleatorio
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

//colocando numero no link
var diceRandom2 = "images/dice" + randomNumber2 + ".png"

//trocando link
var dc2 = document.getElementsByClassName("img2")[0].setAttribute("src", diceRandom2);

//Alertando o maior-------------------------------------------------------------------------------------
var titulo = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    titulo.textContent = "🚩Player 1 WINS!!!";
}
else if(randomNumber2 > randomNumber1){
    titulo.textContent = "Player 2🚩 WINSS!!!";
}
else if(randomNumber1 === 6 && randomNumber2 === 6){
    titulo.textContent = " Refresh Me ";
}

else if(randomNumber1 === randomNumber2){
    titulo.textContent = "DRAWN *---*";
}
