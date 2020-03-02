// Javascript for my password Generator!



// First, we link the generate button from our HTML to our Javascript..
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button, for click events.
generateBtn.addEventListener("click", function() {

  
  // Between these curly brackets, add the entire password generating function.
  // First, we prompt the user to pick a password lenght between 8 and 128 characters.
  
  
  let pLength = prompt("Enter a length for your password. Length must be a minimum of 8, and maximum of 128 characters.")
  
  if (pLength < 8 || pLength > 128) {
    alert("Your password's length is invalid.");

//If the password length is valid, the user is prompted to select one to four criteria for their password.    
   } 
    else {
      
      let lower = confirm("Do you want uppercase characters in your password?");
      let upper = confirm("Do you want uppercase characters in your password?");
      let symb = confirm("Do you want symbol characters in your password?");
      let numb = confirm("Do you want numeric characters in your password?");

//I create some arays, which will contain all the different possible characters for the user's password.

      let lowerBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
      let upperBank = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
      let symBank = ['~','!','@','#','$','%','^','&','*','-','_','+','=']
      let numBank = ['0','1','2','3','4','5','6','7','8','9']

    
    
  }
  
  
})

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

