
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

    //create the game board 
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++){
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add('tile');
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        

        
        }

    }

    // listen for keyup
    document.addEventListener("keyup", (e) => {
        if (gameOver) return;

        // alert(e.code);
        if("KeyA" <= e.code && e.code <= "KeyZ"){
            if(col < width){
                let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                if(currentTile.innerText == ""){
                    currentTile.innerText = e.code[3];
                    col++; 
                
                
                }
            }
        }
        else if (e.code == "Backspace") {
            if (0 < col && col <= width) {
                col -=1;
            }
            let curentTile = document.getElementById(row.toString() + '-' + col.toString());
            currentTile.innerText = "";
        }
  

            
    })


}