
var height = 6; //number of guesses 
var width = 5; //length of the word

var row = 0; //current guess(attempt #)
var col = 0; //current letter for that attempt 

var gameOver = false;
var word = "SQUID";

window.onload = function(){
    intialize();
}

function intialize() {

    //creat the gae board 
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile);
        }
    }
}