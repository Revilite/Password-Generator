// Assignment Code
var generateBtn = document.querySelector("#generate");

//declaration of characters
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
var special = ["~", "`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", "/", ".", ",", ";", ":", "\"", "'", "<", ">", "?",]
var lowerBool = false;
var upperBool = false;
var numberBool = false;
var specialBool = false;

var generatePassword = function () {

  // save for later 
  var numOfCharacters = window.prompt("How many characters?");
  // var typeCheck = Math.floor(numOfCharacters);
  // if (numOfCharacters < 8){
  //    window.alert("Your number cannot be less than 8 characters");
  // }
  // else if (numOfCharacters > 128){
  //   window.alert("Your number cannot be more than 128 characters");
  // }
  // else if (typeCheck === NaN){
  //   window.alert("Your answer has to be a number");
  // }
  if (true) {

    lowerBool = window.confirm("Would you like to use Lowercase Characters?");
   

    upperBool = window.confirm("Would you like to use Uppercase Characters?");
 

    numberBool = window.confirm("Would you like to use Numbers?");

 
    specialBool = window.confirm("Would you like to use Special Characters?");

  
    if (!lowerBool && !upperBool){
      if(!numberBool && !specialBool){
        window.alert("You have to allow at least 1 type of character");
      }
    }
    else{
      var finalPassword = "";

      for(var i = 0; i < numOfCharacters; i++){
        var arrayChoice = Math.floor(Math.random() * 4)
        if (arrayChoice == 0 && lowerBool){
          finalPassword = finalPassword + lowercase[Math.floor(Math.random()*27)]
        }
        
        if (arrayChoice == 1 && upperBool){
          finalPassword = finalPassword + uppercase[Math.floor(Math.random()*27)]
        }
        if (arrayChoice == 2 && numberBool){
          finalPassword = finalPassword + numbers[Math.floor(Math.random()*10)]
        }
        if (arrayChoice == 3 && specialBool){
          finalPassword = finalPassword + special[Math.floor(Math.random()*31)]
        }





      }

    }
    


  }




  return finalPassword;
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


