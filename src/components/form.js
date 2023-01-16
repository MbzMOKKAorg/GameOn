import { formContainer, formConfirmation, formSubmitButton, formInputNameFirst, formInputNameLast, formInputEmail, formInputBirthDate, formInputQttParticipation, formInputTOS, formInputsRadioLocation } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

// Click to submit the form
formSubmitButton.addEventListener('click', (e) => submitForm(e));

// Individually validate an input when its value changes
formInputNameFirst.addEventListener('input', validateNameFirst);
formInputNameLast.addEventListener('input', validateNameLast);
formInputEmail.addEventListener('input', validateEmail);
formInputBirthDate.addEventListener('blur', validateBirthdate);
formInputQttParticipation.addEventListener('input', validateQttParticipation);
formInputsRadioLocation.forEach((input) => { input.addEventListener('input', validateRadioLocation); });
formInputTOS.addEventListener('input', validateTOS);

// ##################################### ACTIONS #####################################

/**
  * Check if a generic input is valid or not
  * @param {Boolean} validationCondition
  * @param {HTMLElement} inputNode
  * @return {Boolean} Is there an error ?
*/
function validateGenericInput (validationCondition, inputNode) {
  if (validationCondition) {
    formDataSetErrorVisibility(inputNode, false);
    return false;
  } else {
    formDataSetErrorVisibility(inputNode, true);
    return true;
  }
}

/**
  * Shows or hides the error message of a field
  * @param {HTMLElement} inputNode
  * @param {Boolean} isVisible
*/
function formDataSetErrorVisibility (inputNode, isVisible) {
  inputNode.parentElement.setAttribute('data-error-visible', isVisible);
}

/**
  * Checks if every inputs are valid beforehand, submit the form if so
  * @param {Event} e
*/
function submitForm (e) {
  e.preventDefault();
  let errorCount = 0;
  errorCount += validateNameFirst();
  errorCount += validateNameLast();
  errorCount += validateEmail();
  errorCount += validateBirthdate();
  errorCount += validateQttParticipation();
  errorCount += validateRadioLocation();
  errorCount += validateTOS();
  if (errorCount === 0) {
    // The form is valid
    formContainer.style.display = 'none';
    formConfirmation.style.display = 'flex';
  }
};

/**
  * Check if the first name contains at least 2 characters
  * @return {Boolean} Is there an error ?
*/
function validateNameFirst () {
  return validateGenericInput(formInputNameFirst.value.length >= 2, formInputNameFirst);
}

/**
  * Check if the last name contains at least 2 characters
  * @return {Boolean} Is there an error ?
*/
function validateNameLast () {
  return validateGenericInput(formInputNameLast.value.length >= 2, formInputNameLast);
}

/**
  * Check if the email is valid
  * @return {Boolean} Is there an error ?
*/
function validateEmail () {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return validateGenericInput(formInputEmail.value.match(regex) !== null, formInputEmail);
}

/**
  * Check if a birthdate is selected (cannot be in the future)
  * @return {Boolean} Is there an error ?
*/
function validateBirthdate () {
  if (validateGenericInput(formInputBirthDate.value.length >= 1, formInputBirthDate)) {
    return true;
  } else {
    // If date isn't empty, check if the date isn't in the future
    const maxDate = new Date();
    const formDate = new Date(formInputBirthDate.value);
    return validateGenericInput(formDate < maxDate, formInputBirthDate);
  }
}

/**
  * Check if a non-empty positive integer of participation is inputed
  * @return {Boolean} Is there an error ?
*/
function validateQttParticipation () {
  return validateGenericInput(formInputQttParticipation.value.length > 0 && Number.isInteger(Number(formInputQttParticipation.value)) === true && Number(formInputQttParticipation.value) >= 0, formInputQttParticipation);
}

/**
  * Check if a location is selected
  * @return {Boolean} Is there an error ?
*/
function validateRadioLocation () {
  let error = true;
  for (const input of formInputsRadioLocation) {
    if (input.checked) {
      error = false;
      formDataSetErrorVisibility(input, false);
      break;
    } else {
      formDataSetErrorVisibility(input, true);
    }
  }
  return error;
}

/**
  * Check if the Terms Of Service are agreed
  * @return {Boolean} Is there an error ?
*/
function validateTOS () {
  return validateGenericInput(formInputTOS.checked, formInputTOS);
}

/**
  * Reset the form values when the form is opened
*/
export function resetForm () {
  formContainer.reset();
  formDataSetErrorVisibility(formInputNameFirst, false);
  formDataSetErrorVisibility(formInputNameLast, false);
  formDataSetErrorVisibility(formInputEmail, false);
  formDataSetErrorVisibility(formInputBirthDate, false);
  formDataSetErrorVisibility(formInputQttParticipation, false);
  formInputsRadioLocation.forEach(input => formDataSetErrorVisibility(input, false));
  formDataSetErrorVisibility(formInputTOS, false);
}
