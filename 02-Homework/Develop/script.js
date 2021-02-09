// Assignment Code
var generateBtn = document.querySelector("#generate");
function getRandomInt(max){
  return Math.floor(Math.random() *Math.floor(max));
}
var specialChar = getRandomInt(33);
var number = getRandomInt(10);
var letter = getRandomInt(26);
var refresh = document.querySelector("#refresh")
function generatePassword(){
  return number
}
// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var numbers = confirm("Include Numbers?");
  var special = confirm("Include Special Characters?");
  var character
  var length = prompt("Length of password min-4 to max-26");
  var x = length      
  if (x < 4 || x > 26){
    alert("Invalid Input")
      location.reload();
      stop
  }else{

console.log(numbers);
console.log(special);
  if (numbers === true && special === false){
    character = confirm("Only numbers for password?");
    console.log(character);
    if (character === true){
      console.log(length);
      passwordText
      var text = 0
      // password:
      if (text <= x) {
        passwordText.textContent = number;
        text++;
        }
      } else{

      }
      
  }else if(numbers === true){


}

}  
passwordText.value = password;
}

// do {
// var x = 1;
// var y = 10;
// x++;
// console.log(getRandomInt(26));
// } 
// while (x <= y)
// if(x===y+1){
//   clearInterval(x)
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

