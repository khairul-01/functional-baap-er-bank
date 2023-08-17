
function getInputValueById(inputId) {
   const inputField = document.getElementById(inputId);
   const inputFieldValueString = inputField.value;
   const inputFieldValue = parseFloat(inputFieldValueString);
   inputField.value = '';
   return inputFieldValue;
}

function getElementValueById(elementId) {
   const element = document.getElementById(elementId);
   const elementValueString = element.innerText;
   const elementValue = parseFloat(elementValueString);
   return elementValue;
}

function setTextValueById(elementId, newValue){
   const textElement = document.getElementById(elementId);
   textElement.innerText = newValue;
}