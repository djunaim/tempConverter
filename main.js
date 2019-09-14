const cRadioButton = document.getElementById('gridRadios1');
const fRadioButton = document.getElementById('gridRadios2');
const temp = document.getElementById('number');

const printToDOM = (divID, textToPrint) => {
    document.getElementById(divID).innerHTML = textToPrint;
}

const toCelsius =  (temp) => {
    const newTemp = Math.floor((temp - 32) * 5 / 9);
    if (newTemp >= 32) {
        document.getElementById('output').style.color = 'red';
    } else if (newTemp <= 0 ) {
        document.getElementById('output').style.color = 'blue';
    } else if (newTemp > 0 && newTemp < 32) {
        document.getElementById('output').style.color = 'green';
    }
    printToDOM('output', newTemp);
}

const toFahrenheit =  (temp) => {
    const newTemp = Math.floor(temp * 9 / 5 + 32);
    if (newTemp >= 90) {
        document.getElementById('output').style.color = 'red';
    } else if (newTemp <= 32 ) {
        document.getElementById('output').style.color = 'blue';
    } else if (newTemp > 32 && newTemp < 90) {
        document.getElementById('output').style.color = 'green';
    }
    printToDOM('output', newTemp);
}

// Get a reference to the button element in the DOM
const button = document.getElementById("converter");
const clearButton = document.getElementById('clear');

// This function should determine which conversion should
// happen based on which radio button is selected.
const determineConverter = (e) => {
  const buttonID = e.target.id;
  if (buttonID === 'converter' && fRadioButton.checked === true) {
    toFahrenheit(temp.value);
  } else if (buttonID === 'converter' && cRadioButton.checked === true) {
      toCelsius(temp.value);
  } 
}

const enterFunction = (e) => { 
    const key = e.keyCode; 
    if (key === 13 && fRadioButton.checked === true) {
        e.preventDefault();
        toFahrenheit(temp.value);
    } else if (key === 13 && cRadioButton.checked === true) {
        e.preventDefault();
        toCelsius(temp.value);
    }
}

const clearClick = (e) => {
    const clearButtonID = e.target.id; 
    if (clearButtonID === 'clear') {
        temp.value = '';
        printToDOM('output', temp.value);
    }
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
temp.addEventListener('keypress', enterFunction);
clearButton.addEventListener('click', clearClick);