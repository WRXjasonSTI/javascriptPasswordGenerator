alert("Thank you for using my password generator!");
var characterAmountNumber = prompt("How many characters would you like for your password? (min. 8; max. 128)");
var includeSymbolsElement = confirm("Would you like special characters, like $#%@, in your password? (OK for Yes, Cancel for No)")
var includeNumbersElement = confirm("Would you like numbers, like 1234, in your password? (OK for Yes, Cancel for No)")
var includeUppercaseElement = confirm("Would you like to include UPPER CASE CHARACTERS in your password? (OK for Yes, Cancel for No)");

// testing
// var characterAmountNumber = "20";
// var includeSymbolsElement = true;
// var includeNumbersElement = false;
// var includeUppercaseElement = false;

// Assignment Code
var generateBtn = document.querySelector("#generate");
var passField = document.querySelector("#password");

// Assignment parameters for ASCII characters' number + for loop to call numbers
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Function to generate num for char code as array
function arrayFromLowToHigh(low, high) {
	const array = []
	for (let i = low; i <= high; i++) {
	  array.push(i)
	}
	return array
  }

// Add event listener to generate button
  generateBtn.addEventListener("click", e => {
  e.preventDefault()
    if (parseInt(characterAmountNumber) >= 7 && parseInt(characterAmountNumber) <= 128) {
    const characterAmount = parseInt(characterAmountNumber);
    const includeUppercase = includeUppercaseElement;
    const includeNumbers = includeNumbersElement;
    const includeSymbols = includeSymbolsElement;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passField.innerHTML = password;
    }
    else {
      alert("Please Refresh and enter a character count value between 8 and 128");
    }
  })

// Generate password function that includes checking parameters
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase === true) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols === true) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers === true) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

// Copy to clipboard https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyText() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}