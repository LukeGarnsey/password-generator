// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz";
// var size = 8;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  let size = GetPasswordSize();
  password = "";
  while(password.length < size){
    password += letters[Math.floor(Math.random() * letters.length)];
  }
  return password;
}
function GetPasswordSize(){
  let size = parseInt(prompt("How long should the password be? (8 - 128)"), 0);
  // console.log(size);
  if(Number.isNaN(size) || size < 8 || size > 128){
    size = GetPasswordSize();
  }
  
  return size;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
