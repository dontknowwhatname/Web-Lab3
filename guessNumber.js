
var randomIntValue; 
var guesses = []; 

function randomInt() {
    randomIntValue = Math.floor(Math.random() * 100) + 1;
    guesses = []; 
    return randomIntValue;
}
