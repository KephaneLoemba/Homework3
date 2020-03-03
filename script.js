// Javascript for my password Generator!



// First, we link the generate button from our HTML to our Javascript..
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button, for click events.
generateBtn.addEventListener("click", function() {

  
  // ***Between these curly brackets, add the entire password generating function.***



  // First, we prompt the user to pick a password lenght between 8 and 128 characters.
  
  let pLength = prompt("Enter a length for your password. Length must be a minimum of 8, and maximum of 128 characters.")
  
  if (pLength < 8 || pLength > 128) {
    alert("Your password's length is invalid. Please click 'generate password' to try again.");

//If the password length is valid, the user is prompted to select one to four criteria for their password.    
   } 
    else {
      
      let lower = confirm("Do you want lowercase characters in your password?");
      let upper = confirm("Do you want uppercase characters in your password?");
      let symb = confirm("Do you want symbol characters in your password?");
      let numb = confirm("Do you want numeric characters in your password?");

//I create some arays, which will contain all the different possible characters for the user's password.

      let lowerBank = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
      let upperBank = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
      let symBank = ['~','!','@','#','$','%','^','&','*','-','_','+','=']
      let numBank = ['0','1','2','3','4','5','6','7','8','9']

//I create an array for our generated password.
let pass = [];

let x = 0;

//I create some functions, which will be used in our password generator.
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}

function getRdmCharacter(low = 9) {
  if (low === 3 ) {
    return Math.floor(Math.random() * lowerBank.length);
  }
  // else if (upp === x){
  //   return Math.floor(Math.random() * upperBank.length);
  // }
  // else if (sum === x){
  //   return Math.floor(Math.random() * symBank.length);
  // }
  // else if (num === x){
  //   return Math.floor(Math.random() * numBank.length);
  // }
   
}


//If 0 of 4 criteria are selected, alert he user that their character selection is invalid.
if (lower === false && upper === false && symb === false && numb === false){
  alert("You must select at least one character criteria. Please click 'generate password' to try again.");
}


//If all 4 criteria are selected, run these lines of code to generate the password.
else {

  
  
  

  if (lower && upper && symb && numb){
    let i = 0;
    while (i < pLength) {

      // let x = getRandomInt(4);

      // let nextChar = lowerBank[getRdmCharacter(3)];

      let nextChar = lowerBank[getRdmCharacter(3)];

      pass.push(nextChar);

      console.log(pass)

      i++;
      
    }
  }
  
  //If 3 of 4 criteria are selected, run one of these:
  else if (lower && upper && symb && numb === false){
    
  }
  
  else if (lower && upper && symb === false && numb){
   
}

else if (lower && upper === false && symb && numb){
  
}

else if (lower === false && upper && symb && numb){
  
}




//If 2 of 4 criteria are selected, run one of these:
else if (lower && upper && symb === false && numb === false){
  
}

else if (lower === false && upper && symb && numb === false){
  
}

else if (lower === false && upper && symb === false && numb){
  
}

else if (lower && upper === false && symb === false && numb){
  
}

else if (lower && upper === false && symb && numb === false){
  
}

else if (lower === false && upper === false && symb && numb){
  
}


//If 1 of 4 criteria are selected, run one of these:
else if (lower && upper === false && symb === false && numb === false){
  
}

else if (lower === false && upper && symb === false && numb === false){
  
}

else if (lower === false && upper === false && symb && numb === false){
  
}

else if (lower === false && upper === false && symb === false && numb){
  
}



function writePassword() {
  let password = pass
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

writePassword();









//This next Curly bracket closes the 'else' section, after the first character selection gate.
}

//***don't write anything in between these two/three brackets sections:***
}


})



// Write password to the #password input
