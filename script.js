// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = "!@#$%^&*";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// ["!", "@", "#", "$", "%", "^", "&","*"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Prompts for password criteria.
function generatePassword() {
  var passwordLength = prompt("Please choose a length of at least 8 characters and no more than 128 characters in the password.");

  // This is a length check for password.
  if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 characters.");
  return;
  }
  
  var lowerCase = confirm("Do you want lowercase characters in the password? Press enter for Ok.");

  // var upperCase = confirm("Do you want uppercase characters in the password? Press enter for Ok.");

  var numeric = confirm("Do you want numeric characters in the password? Press enter for Ok.");

  var special = confirm("Do you want special characters in the password? Only !@#$%^&* can be used. Press enter for Ok.");

  var minimumCount = 0;
    var minimumNumbers = "";



  
    var randomPasswordGenerated = "";

    // var randomTypePicked = {
      
    var randomTypePicked = {
      // for (var i = 0; i < passwordLength; i++) {  
      //    var passwordchar = Math.floor(Math.random() * 10);
      //   return passwordchar;        
      // }  
      getLowerCase: function() {
     //  for (var i = 0; i < passwordLength; i++) {
        var passwordchar = lowerCaseCharacters [ Math.floor(Math.random() * lowerCaseCharacters.length)];
      //  return passwordchar;
        },
     
        getSpecial: function() {
       //for (var i = 0; i < passwordLength; i++) {
        var passwordchar = specialCharacters [ Math.floor(Math.random() * specialCharacters.length)];
        // return passwordchar;
        }
    }

var minimumSpecial = "";
var minimumLowerCase = "";

   if (special === true) {
    minimumSpecial = randomTypePicked.getSpecial();
    minimumCount++;
    }

    if (lowerCase === true) {
      minimumLowerCase = randomTypePicked.getLowerCase();
      minimumCount++;
    }
 

  //  for (var i = 0; i < passwordLength; i++) {
   var typePicked = Math.floor(Math.random() * 2);

   for (var i = 0; i < passwordLength; i++) {
    var passwordchar = randomTypePicked[typePicked];
   
console.log(passwordchar);

  //    var randomNumberPicked = randomTypePicked [ Math.floor(Math.random() * randomTypePicked.length)];

    randomPasswordGenerated += passwordchar;

   }

 return randomPasswordGenerated;

}





   






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
 