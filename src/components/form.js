import { formContainer, formConfirmation, formSubmitButton, formInputNameFirst, formInputNameLast, formInputEmail, formInputBirthDate, formInputQttParticipation, formInputTOS, formInputsRadioLocation } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

formSubmitButton.addEventListener('click', (e) => submitForm(e));

formInputNameFirst.addEventListener('change', () => validateNameFirst());
formInputNameLast.addEventListener('change', () => validateNameLast());
formInputEmail.addEventListener('change', () => validateEmail());
formInputBirthDate.addEventListener('blur', () => validateBirthdate());
formInputQttParticipation.addEventListener('change', () => validateQttParticipation());
formInputsRadioLocation.forEach((input) => { input.addEventListener('change', () => validateRadioLocation()); });
formInputTOS.addEventListener('change', () => validateTOS());

// ##################################### ACTIONS #####################################

/** * shows or hides the error message of a field */
function validateGenericInput (validationCondition, inputNode) {
  if (validationCondition) {
    formDataSetErrorVisibility(inputNode, false);
    return false;
  } else {
    formDataSetErrorVisibility(inputNode, true);
    return true;
  }
}

/** * shows or hides the error message of a field */
function formDataSetErrorVisibility (inputNode, isVisible) {
  inputNode.parentElement.setAttribute('data-error-visible', isVisible);
}

/** * submit the registration form */
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
    // the form is valid
    formContainer.style.display = 'none';
    formConfirmation.style.display = 'flex';
  }
};

/** * check if the first name contains at least 2 characters */
function validateNameFirst () {
  return validateGenericInput(formInputNameFirst.value.length >= 2, formInputNameFirst);
}

/** * check if the last name contains at least 2 characters */
function validateNameLast () {
  return validateGenericInput(formInputNameLast.value.length >= 2, formInputNameLast);
}

/** * check if the email is valid */
function validateEmail () {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return validateGenericInput(formInputEmail.value.match(regex) !== null, formInputEmail);
}

/** * check if a birthdate is selected */
function validateBirthdate () {
  return validateGenericInput(formInputBirthDate.value.length >= 1, formInputBirthDate);
}

/** * check if a non-empty positive integer of participation is inputed */
function validateQttParticipation () {
  return validateGenericInput(formInputQttParticipation.value.length > 0 && Number.isInteger(Number(formInputQttParticipation.value)) === true && Number(formInputQttParticipation.value) >= 0, formInputQttParticipation);
}

/** * check if a location is selected */
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

/** * check if the Terme Of Service are agreed */
function validateTOS () {
  return validateGenericInput(formInputTOS.checked, formInputTOS);
}

/** * reset the form values when the form is opened */
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
