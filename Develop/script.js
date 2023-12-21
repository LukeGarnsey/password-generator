// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "1234567890";
var special = "!@#$%^&*()[]{}";
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
  let size = getPasswordSize();
  characters = buildCharacterString();
  password = "";
  while(password.length < size){
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}
function getPasswordSize(){
  let size = parseInt(prompt("How long should the password be? (8 - 128)"), 0);
  // console.log(size);
  if(Number.isNaN(size) || size < 8 || size > 128){
    size = getPasswordSize();
  }
  
  return size;
}
function buildCharacterString(){
  let useLowercase = false;
  let useUppercase = false;
  let useNumerics = false;
  let useSpecialCharacters = false;
  let notFirstTime = false;
  while(!useLowercase && !useUppercase && !useNumerics && !useSpecialCharacters){
    if(notFirstTime){
      prompt("You cannot say 'No' to all choices.");
    }
    useLowercase = yesNoPrompt("Should the password contain: Lowercase?");
    useUppercase = yesNoPrompt("Should the password contain: Uppercase?");
    useNumerics = yesNoPrompt("Should the password contain: Numerics?");
    useSpecialCharacters = yesNoPrompt("Should the password contain: Special Characters?");
    notFirstTime = true;
  }
  
  characters = "";
  if(useLowercase)
    characters += lowercase;
  if(useUppercase)
    characters += uppercase;
  if(useNumerics)
    characters += numeric;
  if(useSpecialCharacters)
    characters += special;

  return characters;
}
function yesNoPrompt(text, showExplainText){
  
  let promptText = prompt((showExplainText?"(Invalid Entry) ":"") + text + " (Y/N)").toLowerCase();

  if(promptText != "y" && promptText != "n")
    promptText = yesNoPrompt(text, true);

  return promptText == "y";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
