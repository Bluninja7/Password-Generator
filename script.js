// Assignment Code

var specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";

var special = specialCharacters.split("");
var lowerCase = lowerCaseCharacters.split("");
var upperCase = upperCaseCharacters.split("");
var numeric = numer
// Prompts for password criteria.
function getPasswordParameters() {
  var passwordLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters in the password.");

  // This is a length check for password.
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters.");
  return;
  }
 // This is a check for a number.
  if (isNaN(passwordLength)) {
  alert("Password must be a number.");
  return;
  }
  
  
  var lowerCaseConfirm = confirm("Do you want lowercase characters in the password? Press enter for Ok.");

  var upperCaseConfirm = confirm("Do you want uppercase characters in the password? Press enter for Ok.");

  var numericConfirm = confirm("Do you want numeric characters in the password? Press enter for Ok.");

  var specialConfirm = confirm("Do you want special characters in the password? Only !@#$%^&* can be used. Press enter for Ok.");







// if (lowerCaseConfirm !== true) {
//   var lowerCase = [];
// }  

// if (upperCaseConfirm !== true) {
//   var upperCase = [];
// }

if (numericConfirm != true) {
  var numeric = "";
}

// if (specialConfirm !== true) {
//   var special = "";
// }
console.log(passwordLength)

console.log(numericConfirm)



// var emptyArray = ("");
var PWcharPool = special.concat(lowerCase, upperCase, numeric);
console.log(PWcharPool);


console.log(PWcharPool.length);

var passwordOptions = {
  passwordLength: passwordLength,
  PWcharPool: PWcharPool
  // lowerCaseConfirm: lowerCaseConfirm,
  // upperCaseConfirm: upperCaseConfirm,
  // numericConfirm: numericConfirm,
  // specialConfirm: specialConfirm
  
};
return passwordOptions;
}



// // get random character from array
// function getRandomChar(PWcharPool) {
  function generatePassword() {
  var options = getPasswordParameters();
  var passwordLength = options.passwordLength;

  console.log(passwordLength);
  console.log(options);
  console.log(options.PWcharPool);

  var randomPasswordGenerated = "";


  // loop through password length
  for (var i = 0; i < options.passwordLength; i++) {
  var ranIndex = Math.floor(Math.random() * options.PWcharPool.length);
  var ranChar = options.PWcharPool[ranIndex];

  console.log(ranIndex);
  console.log(ranChar);
  console.log(options.passwordLength);

  // add random character to password
  randomPasswordGenerated += ranChar;

  }



  console.log(randomPasswordGenerated);
  // }
  return randomPasswordGenerated;

  // }
  }


// function generatePassword() {
//   var password = "";
//   for (var i = 0; i < passwordLength; i++) {
//     var ranIndex = Math.floor(Math.random() * PWcharPool.length);
//     var ranChar = PWcharPool[ranIndex];
//     password += ranChar;
//   }
//   return password;
// }

// console.log(password);
// for (var i = 0; i < passwordLength; i++) {    
//   var ranIndex = Math.floor(Math.random() * PWcharPool.length);
//   var randompasswordgenerated = PWcharPool[ranIndex];

// //   randompasswordgenerated += ranIndex

//   return randompasswordgenerated;
// // }

// function getrandomchar(PWcharPool) {
//   var ranIndex = Math.floor(Math.random() * PWcharPool.length);
//   var ranChar = PWcharPool[ranIndex];
//   return ranChar;
 
// }
// for (var i = 0; i < passwordLength; i++) {
//   var ranChar = getrandomchar(PWcharPool);
//   console.log(ranChar);
//   return ranChar;
// }
// }
// function getrandomchar(PWcharPool) {
//   var ranIndex = Math.floor(Math.random() * PWcharPool.length);
//   var ranChar = PWcharPool[ranIndex];
//   return ranChar;
//   console.log(ranChar);
// }



// Function to generate password with user input
// function generatePassword() {
//   var options = PWcharPool();
//   var result = [];

// }

// var generatePassword = [PWcharPool]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



   






// public string CreatePassword(int length)
// {
//   const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<>.,/\\@#$%^&*()_+!:";
//   StringBuilder res = new StringBuilder();
//   Random rnd = new Random();
//   while (0 < length--)
//   {
//     res.Append(valid[rnd.Next(valid.Length)]);
//   }
//   return res.ToString();
 