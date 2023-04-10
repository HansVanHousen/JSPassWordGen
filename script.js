var generateBtn = document.querySelector("#generate");

// i think having the message read in the passoword text box is visually cleaner then having them in a popup alert. 
function generatePassword() {
    let passwordLength = parseInt (prompt("Please select a password length between 8 and 127 characters"));
    if(passwordLength < 8 || passwordLength > 128){
    return "Sorry! \n Your password needs to be between 8-128 characters in length";
    }
    // four variables establishing the possible character types to be inclided in the password.
    var lowerCase = confirm("Do you want lowercase characters in your password?");
    var upperCase = confirm("Do you want uppercase characters in your password?");
    var numbers = confirm("Do you want number characters in your password?");
    var specialCharacters = confirm("Do you want special characters in your password?");

    //you gotta make sure the user chooses at least one character type. 
    if (!lowerCase && !upperCase && !numbers && !specialCharacters){
    return " Error, invalid! please select at least one optional character type. ";
    }

    // four lists establishing the possible characters to be inclided in the password.
    let passwordCharacters = [];
    const specialCharactersList = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    const numbersList = "0123456789";
    const lowerCaseList = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (specialCharacters) {
        passwordCharacters = passwordCharacters.concat(specialCharactersList.split(""));
    }

    if (numbers) {
        passwordCharacters = passwordCharacters.concat(numbersList.split(""));
    }

    if (upperCase) {
        passwordCharacters = passwordCharacters.concat(upperCaseList.split(""));
    }

    if (lowerCase) {
        passwordCharacters = passwordCharacters.concat(lowerCaseList.split(""));
    }

    let results = "";
    for (var i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        let randomCharacter = passwordCharacters[randomIndex];
        results += randomCharacter;
    }

    return results;
}

function writePassword() {
    console.log("####")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
