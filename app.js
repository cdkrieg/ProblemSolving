"use strict"
//Reverse a string
function reverseString(string){
    let newString = "";
    for(let i = string.length-1; i>=0; i-- ){
        newString += string[i];
    }
    return newString;
}
let stringReversed = reverseString(prompt("Enter a string to reverse"));
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
let capitalizedWords = capitalizeFirstLetterOfWord(splitStringIntoWords(prompt("enter a sentence")));
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
 }
let compressedString = compressString(prompt("enter a string of letters (a-z. Multiple copies of each letter at a time are encouraged. No spaces!"));
alert(compressedString);

//Palindrome
function palindrome(string){
    let half = 0;
    if(string.length % 2 === 0){
        half = string.length / 2;
    } else {
        half = string.length / 2 + 0.5;
    }
    for(let i = 0; i < half; i++){
        if(string[i] === string[string.length - 1 - i]){
        } else {
            return "is NOT";
        }
    }
    return "IS";
}
let stringInput = prompt("Enter a word to see if it is a Palindrome");
let isPalindrome = palindrome(stringInput);
alert(`${stringInput} ${isPalindrome} a Palindrome!`)