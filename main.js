const printToDOM = (divID, textToPrint) => {
    document.getElementById(divID).innerHTML = textToPrint;
}

const cRadioButton = document.getElementById('gridRadios1').checked;
const fRadioButton = document.getElementById('gridRadios2').checked;
const temp = document.getElementById('number').value;

const toCelsius =  () => {
    if (cRadioButton === 'true') {
        const newTemp = Math.floor(temp * 9 / 5 + 32);
    }
    printToDOM('output', newTemp);
}

const toFahrenheit =  () => {
    if (fRadioButton === 'true') {
        const newTempF = Math.floor((temp - 32) * 5 / 9);
    }
    printToDOM('output', newTempF);
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  console.log("event", e);
  const buttonID = e.target.id;
  if (buttonID === 'convert'&& fRadioButton === 'true') {
    toFahrenheit();
  } else if (buttonID === 'convert' && cRadioButton === 'true') {
      toCelsius();
  }
}

// Assign a function to be executed when the button is clicked
document.getElementById('convert').addEventListener("click", determineConverter);