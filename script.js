// Assignment code here

//Definining variables for what is needed in the password.
var characterlength = 9;
var allArr = "";
var specialcharsArr = ["!", "#" ,"$" ,"&" ,"@" ,"%" ,"(" ,")" ,"+" ,"*" ,"/" ,"<" ,"=" ,];
var lowArr = ["a", "b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" , "l", "m" ,"n" ,"o" ,"p" ,"u" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z"];
var upArr = ["A", "B" ,"C" ,"D" ,"E" ,"F" ,"G" ,"H" ,"I" ,"J" ,"K" ,"L" ,"M" , "N", "P" ,"o" ,"P" ,"Q" ,"R" ,"S" ,"T" ,"U" ,"V" ,"W" ,"X" ,"Y" ,"Z"];
var numArr =["1" ,"2" ,"3" ,"4" ,"5" ,"6" ,"7" ,"8" ,"9" ,];


function myPrompts() {
    allArr = "";
//setting the conditions for the password and questions that will appear on the prompt.
    characterlength = (prompt("How many characters do you want your passord to be? (8 - 128 characters"));
    if(isNaN(characterlength) || characterlength < 8 || characterlength > 128) {
        alert("Password has to be a number between 8 and 128. Please try again");
        return false;

    }
    
    if (confirm("would you like lowercase letters in your password?")) {
        allArr = allArr.concat(lowArr);
    }
    if (confirm("would you like uppercase letters in your password?")) {
        allArr = allArr.concat(upArr);
    }
    if (confirm("would you like special characters  in your password?")) {
        allArr = allArr.concat(specialcharsArr);
    }
    if (confirm("would you like numbers in your password?")) {
        allArr = allArr.concat(numArr);
    }
    return true;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);