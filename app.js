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
    console.log(myArrayOfWords);
    return myArrayOfWords;
}
function capitalizeFirstLetterOfWord(array){
    let newString = "";
    for(let i = 0; i < array.length; i++){
        newString = newString + array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
    }

    return newString;
}
let userInput = prompt("enter a sentence")
let splitString = splitStringIntoWords(userInput);
let capitalizedWords = capitalizeFirstLetterOfWord(splitString);
alert(capitalizedWords);

