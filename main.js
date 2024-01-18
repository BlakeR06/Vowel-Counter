const inputBox = document.getElementById('inputBox');  //creates a new const for the input box
const submitButton = document.getElementById('submitButton'); //creates a new const for the submit button

function countVowels(inputText) { //creates a function
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //defines all the different vowels
    let vowelCount = 0; //sets the count of vowles to 0

    for (let i = 0; i < inputText.length; i++) { //starts a for loop. i stands for the amount of characters in the text. it runs through every character before it stops
      if (vowels.includes(inputText[i])) { //checks to see if the current character is a vowel
        vowelCount++; //if it is a vowel it adds 1 to vowel count
      }
    }

    return vowelCount; //just keeps the vowel count updated so it can be used outside of the function
  }

submitButton.addEventListener('click', function() { //checks to see if the submit button has been clicked
  const inputBoxText = inputBox.value; //gets the text from the input box

  const numVowels = countVowels(inputBoxText); //creates a const that runs the function
  alert(`Your text "${inputBoxText}" contains ${numVowels} vowels.`); //displays an alert with the vowel count
    inputBox.value = ''; //clears the input box
});