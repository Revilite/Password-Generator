// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function(){
  var numOfCharacters = window.prompt("How many characters?");

  if (numOfCharacters >= 8 && numOfCharacters <= 128){
     window.alert("yay");
  }
  else{
    window.alert("noooo");
  }
  



  return typeof(numOfCharacters);
}



















// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Create generatePassword function and put code in there


