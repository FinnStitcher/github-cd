// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Establish the length of Password or return a false value
  const length = getLength();

  //   if false, exit the function
  if (!length) return;

  // Else grab all the criteria that user chooses
  const lcConfirm = criteria("lowercase letters");
  const upConfirm = criteria("uppercase letters");
  const numsConfirm = criteria("numbers");
  const specialsConfirm = criteria("special characters");

  // Generate the password
  const password = generatePassword(length, lcConfirm, upConfirm, numsConfirm, specialsConfirm);

  // Select the display pw HTML Element
  const passwordText = document.querySelector("#password");

  // Set that display to be the value of the generate password
  passwordText.value = password;
}

// Prompts the user and get either returns a number or returns false
function getLength() {
  const pwLength = prompt("How long do you want your Password to be?");

  // Set to parseInt just so that we are evaluating integers against integers
  // rather than strings against integers
  if (parseInt(pwLength) > 7 && parseInt(pwLength) < 128) {
    return parseInt(pwLength);
  } else {
    window.alert("Please restart and choose an actual numeric number");
    return false;
  }
}

// Confirms if the user wants the specific criteria chosen
function criteria(option) {
  const userAnswer = confirm(`Do you want ${option} in your password?`);
  return userAnswer;
}

// Based on the avaliable choices, generates the passsword
function generatePassword(length, lowercase, uppercase, numbers, specials) {
  // All of the data to the characters from
  const lcChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const upChoices = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const numChoices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specChoices = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  //   Master list to contain all the avaliable choices
  const allChoices = [];

  // insert into the Master List all the other choices that the user said Yes to having in their password
  if (lowercase) allChoices.push(lcChoices);
  if (uppercase) allChoices.push(upChoices);
  if (numbers) allChoices.push(numChoices);
  if (specials) allChoices.push(specChoices);

  //   This is going to be the value that will be returned
  let finalpw = "";

  //   Loop to concatenate the eventual return string value with the character values that are chosen
  for (let i = 0; i < length; i++) {
    const whichArr = Math.floor(Math.random() * allChoices.length);
    finalpw += chooseChar(i, allChoices, whichArr);
  }

  //   finally return the string value
  return finalpw;
}

// Reiterative code that I compiled, but basically randomly chooses the characters from the lists avaliable
function chooseChar(i, wholeList, specificList) {
  if (wholeList[i]) {
    return wholeList[i][Math.floor(Math.random() * wholeList[i].length)];
  } else {
    return wholeList[specificList][Math.floor(Math.random() * wholeList[specificList].length)];
  }
}

/*
    Juno's and My code are achieving similar results. See if you can spot the differences in the results!
    Otherwise feel free to ask us what the differences is!

    ALSO --> This is my refactored version
*/