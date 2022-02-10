// Assignment code here

var promptPsswdLength = function() {
  return parseInt(window.prompt("Enter your password length. Passwords must be between 8 and 128 characters long."));
};

var promptPsswdChars = function() {
  var confirmLowercase = window.confirm("Include lowercase characters?");
  var confirmUppercase = window.confirm("Include uppercase characters?");
  var confirmNumber = window.confirm("Include numbers?");
  var confirmSpecial = window.confirm("Include speical characters?");
  return [confirmLowercase, confirmUppercase, confirmNumber, confirmSpecial];
};


var psswdSpec = function () {
  psswdLength = 0
  while (psswdLength < 8 || psswdLength > 128 || isNaN(psswdLength)) {
    psswdLength = Math.round(promptPsswdLength())
    if (psswdLength < 8 || psswdLength > 128 || isNaN(psswdLength)) {
      window.alert("Error: Must enter a number between 8 and 128.")
    }
  }

  psswdCharArray = [false, false, false, false];
  while (psswdCharArray.every(v => v===false)) {
    window.alert("Select what type of characters to include...")
    psswdCharArray = promptPsswdChars()
    if (psswdCharArray.every(v => v===false)) {
      window.alert("Error: Must select one type of character to include.")
    }
  }

  return psswdCharArray.concat(psswdLength);
};

console.log("psswd spec =" + psswdSpec())


// function that is going to prompt and validate in one
  // set value for psswdLength
  // while psswdLength not between values
    // requst a new password from user

  // initalize zero array
  // while zero array
    // prompt user for new values
    // put values in array

  // combine into array [length, lower, upper, number, special]

/// I want to prompt for all


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
