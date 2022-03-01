"use strict"
//Reverse a string
function reverseString(string){
    let newString = "";
    for(let i = string.length-1; i>=0; i-- ){
        newString = newString + string[i];
    }
    return newString;
}
let userString = prompt("Enter a string to reverse");
let stringReversed = reverseString(userString);
alert(stringReversed);

//Capitalize a letter
function splitStringIntoWords(string){
    let myArrayOfWords = string.split(" ");
}