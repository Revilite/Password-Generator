// Assignment Code
var generateBtn = document.querySelector("#generate");



var generatePassword = function () {

  //declaration of characters
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",]
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  var special = ["~", "`", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", "/", ".", ",", ";", ":", "\"", "'", "<", ">", "?",]
  var lowerBool = false;
  var upperBool = false;
  var numberBool = false;
  var specialBool = false;


  var numOfCharacters = window.prompt("How many characters?");
  var typeCheck = parseInt(numOfCharacters);



  // character limiter
  if (numOfCharacters < 8) {
    window.alert("Your number cannot be less than 8 characters");
  }
  else if (numOfCharacters > 128) {
    window.alert("Your number cannot be more than 128 characters");
  }
  else if (isNaN(typeCheck)) {
    window.alert("Your answer has to be a number");
  }

  else {

    lowerBool = window.confirm("Would you like to use Lowercase Characters?");


    upperBool = window.confirm("Would you like to use Uppercase Characters?");


    numberBool = window.confirm("Would you like to use Numbers?");


    specialBool = window.confirm("Would you like to use Special Characters?");


    if (!lowerBool && !upperBool && !numberBool && !specialBool) {
      window.alert("You have to allow at least 1 type of character");

    }
    else {
      var finalPassword = "";
      //generation process
      for (var i = 0; i < numOfCharacters; i++) {
        var arrayChoice = Math.floor(Math.random() * 4);
        var check = true;
        // console.log(arrayChoice + "this is array choice");

        while (check) {
          arrayChoice = Math.floor(Math.random() * 4);
          if (arrayChoice == 0 && lowerBool) {
            finalPassword = finalPassword + lowercase[Math.floor(Math.random() * 26)];
            // console.log(0);
            check = false;
          }

          else if (arrayChoice == 1 && upperBool) {
            finalPassword = finalPassword + uppercase[Math.floor(Math.random() * 26)];
            // console.log(1);
            check = false;
          }
          else if (arrayChoice == 2 && numberBool) {
            finalPassword = finalPassword + numbers[Math.floor(Math.random() * 10)];
            // console.log(2);
            check = false;
          }
          else if (arrayChoice == 3 && specialBool) {
            finalPassword = finalPassword + special[Math.floor(Math.random() * 30)];
            // console.log(3);
            check = false;
          }
        }
      }
    }
  }

  //Final Return
  if (finalPassword !== undefined) {
    return finalPassword;
  }
  else {
    return "";
  }
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


