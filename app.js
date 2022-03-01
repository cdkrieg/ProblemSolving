"use strict"
// //Reverse a string
// function reverseString(string){
//     let newString = "";
//     for(let i = string.length-1; i>=0; i-- ){
//         newString = newString + string[i];
//     }
//     return newString;
// }
// let userString = prompt("Enter a string to reverse");
// let stringReversed = reverseString(userString);
// alert(stringReversed);

// //Capitalize a letter
// function splitStringIntoWords(string){
//     let myArrayOfWords = string.split(" ");
//     console.log(myArrayOfWords);
//     return myArrayOfWords;
// }
// function capitalizeFirstLetterOfWord(array){
//     let newString = "";
//     for(let i = 0; i < array.length; i++){
//         newString = newString + array[i].charAt(0).toUpperCase() + array[i].slice(1) + " ";
//     }

//     return newString;
// }
// let userInput = prompt("enter a sentence")
// let splitString = splitStringIntoWords(userInput);
// let capitalizedWords = capitalizeFirstLetterOfWord(splitString);
// alert(capitalizedWords);

//Compress a string of characters
function splitStringIntoArrayByCharacters(string){
    let arrayOfCharacters = [];
    for(let i = 0; i < string.length; i++){
        arrayOfCharacters.push(string[i]);
 
    }
    return arrayOfCharacters;
}
function reduceArrayToUniqueChar(array){
    let uniqueArray = [];
    for(let i = 0; i < array.length; i++){
        if(!uniqueArray.includes(array[i])){
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}
function countRepetitiveCharInArray(characterArray, uniqueArray){
    for
}

let userInputChar = prompt("enter a string of letters (a-z. Multiple copies of each letter at a time are encouraged. No spaces!");
let characterArray = splitStringIntoArrayByCharacters(userInputChar);
let uniqueArray = reduceArrayToUniqueChar(characterArray);
alert(uniqueArray);