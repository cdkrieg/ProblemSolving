"use strict"
//Reverse a string
function reverseString(string){
    let newString = "";
    for(let i = string.length-1; i>=0; i-- ){
        newString += string[i];
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
        newString += array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
    }

    return newString;
}
let userInput = prompt("enter a sentence")
let splitString = splitStringIntoWords(userInput);
let capitalizedWords = capitalizeFirstLetterOfWord(splitString);
alert(capitalizedWords);

//Compress a string of characters
function compressString(string) {
    let newString = '';
    let count = 1;
    for(let i = 0; i < string.length; i++){
       if(string[i] === string[i+1]){
          count++;
       }else{
          newString += count.toString() + string[i];
          count = 1;
       };
    }
    return newString;
 };

let userInputChar = prompt("enter a string of letters (a-z. Multiple copies of each letter at a time are encouraged. No spaces!");
let compressedString = compressString(userInputChar);
alert(compressedString);