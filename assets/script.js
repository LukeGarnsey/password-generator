var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase();
var numeric = "1234567890";
var special = "!@#$%^&*()[]{}";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function starts the flow for generating a password
function generatePassword(){
  let size = getPasswordSize();
  if(size == null)
    return "'password generation canceled'";

  characters = buildCharacterString();
  if(characters == null)
    return "'password generation canceled'";

  password = "";
  while(password.length < size){
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  return password;
}

//Returns a number value to indicate length of password, returning null will indicate application to quit flow.
function getPasswordSize(){
  let size = 0;
  promptText = prompt("How long should the password be? (8 - 128)");
  if(promptText == null){
    //Cancel pressed
    return null;
  }

  size = parseInt(promptText, 0);
  
  if(Number.isNaN(size) || size < 8 || size > 128){
    size = getPasswordSize();
  }
  
  return size;
}
//Returns a string with valid characters for the password, returning null will indicate application to quit flow.
function buildCharacterString(){
  let useLowercase = false;
  let useUppercase = false;
  let useNumerics = false;
  let useSpecialCharacters = false;
  let notFirstTime = false;
  while(!useLowercase && !useUppercase && !useNumerics && !useSpecialCharacters){
    if(notFirstTime){
      const cancel = prompt("You cannot say 'No' to all choices.") == null;
      if(cancel)
        return null;
    }

    //Ask user if they want to include different characters.
    useLowercase = prompt("Should the password contain: Lowercase?") != null;
    useUppercase = prompt("Should the password contain: Uppercase?") != null;
    useNumerics = prompt("Should the password contain: Numerics?") != null;
    useSpecialCharacters = prompt("Should the password contain: Special Characters?") != null;
    
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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
