const cRadioButton = document.getElementById('gridRadios1');
const fRadioButton = document.getElementById('gridRadios2');
const temp = document.getElementById('number');

const printToDOM = (divID, textToPrint) => {
    document.getElementById(divID).innerHTML = textToPrint;
}

const toCelsius =  (temp) => {
    const newTemp = Math.floor(temp * 9 / 5 + 32);
    console.log(newTemp);
    printToDOM('output', newTemp);
}

const toFahrenheit =  (temp) => {
    const newTemp = Math.floor((temp - 32) * 5 / 9);
    printToDOM('output', newTemp);
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("event", e);
  const buttonID = e.target.id;
  if (buttonID === 'converter' && fRadioButton.checked === true) {
    toFahrenheit(temp.value);
  } else if (buttonID === 'converter' && cRadioButton.checked === true) {
      console.log(buttonID);
      toCelsius(temp.value);
  } 
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);