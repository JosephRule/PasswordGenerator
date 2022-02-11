// Assignment code here
var characterTypeDicts = {
  "lowercase": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
                "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "uppercase": ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                "Q","R","S","T","U","V","W","X","Y","Z"],
  "number": ["0","1","2","3","4","5","6","7","8","9"],
  "special": [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*","+",",","-",".","/",
              ":",";","<","=",">","?","@","[","]", "^", "_", "`", "{", "|", "}", "~", "]"]
}

var promptPasswordLength = function() {
  return parseInt(prompt("Enter your password length. Passwords must be between 8 and 128 characters long."));
};

var promptPasswordCharTypes = function() {
  var charSpec = {
    "lowercase": confirm("Include lowercase characters?"),
    "uppercase": confirm("Include uppercase characters?"),
    "number": confirm("Include numbers?"),
    "special": confirm("Include special characters?")
  }

  return charSpec;
};

var createPasswordSpec = function () {
  // recombine these two pieces.
  // this function should return a spec object with true/flase values for each type
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = Math.round(promptPasswordLength())
    if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
      alert("Error: Must enter a number between 8 and 128.")
    }
  };

  var passwordSpec = {
    "lowercase": false,
    "uppercase": false,
    "number": false,
    "confirmSpecial": false
  }
  while (Object.values(passwordSpec).every(v => v===false)) {
    alert("Select what type of characters to include...")
    passwordSpec = promptPasswordCharTypes()
    if (Object.values(passwordSpec).every(v => v===false)) {
      alert("Error: Must select one type of character to include.")
    }
  };
  passwordSpec.length = passwordLength;

  return passwordSpec;
};

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var generatePassword = function() {
  passwordSpec = createPasswordSpec();
  passwordLength = passwordSpec.length;
  password = "";
  delete passwordSpec.length;

  keys = Object.keys(passwordSpec);
  values = Object.values(passwordSpec);
  true_keys = []
  for (i=0; i<keys.length; i++) {
    if (values[i] === true) {
      true_keys.push(keys[i]);
      chars = characterTypeDicts[keys[i]];
      rand_j = randomNumber(0, chars.length-1);
      password = password + chars[rand_j];

      // go to the proper dictionary using key[i]
    }
  };
  // make the rest of the password
  for (i=password.length; i<passwordLength; i++) {
    rand_k = randomNumber(0, true_keys.length-1);
    chars = characterTypeDicts[true_keys[rand_k]];
    rand_j = randomNumber(0, chars.length-1);
    password = password + chars[rand_j];
  }

  return password
};

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
