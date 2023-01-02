import { formContainer, formConfirmation, formSubmitButton, formInputNameFirst, formInputNameLast, formInputEmail, formInputBirthDate, formInputQttParticipation, formInputTOS, formInputsRadioLocation } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

formSubmitButton.addEventListener('click', (e) => submitForm(e));

// ##################################### ACTIONS #####################################

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
  // if (errorCount === 0) {
  // the form is valid
  formContainer.style.display = 'none';
  formConfirmation.style.display = 'flex';
  resetForm();
  // }
};

/** * check if the first name contains at least 2 characters */
function validateNameFirst () {
  if (formInputNameFirst.value.length < 2) {
    formDataSetErrorVisibility(formInputNameFirst, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputNameFirst, false);
    return false;
  }
}

/** * check if the last name contains at least 2 characters */
function validateNameLast () {
  if (formInputNameLast.value.length < 2) {
    formDataSetErrorVisibility(formInputNameLast, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputNameLast, false);
    return false;
  }
}

/** * check if the email is valid */
function validateEmail () {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (formInputEmail.value.match(regex) == null) {
    formDataSetErrorVisibility(formInputEmail, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputEmail, false);
    return false;
  }
}

/** * check if a birthdate is selected */
function validateBirthdate () {
  if (formInputBirthDate.value.length < 1) {
    formDataSetErrorVisibility(formInputBirthDate, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputBirthDate, false);
    return false;
  }
}

/** * check if a whole number of participation is inputed */
function validateQttParticipation () {
  // must be a non-empty positive integer
  if (formInputQttParticipation.value.length < 1 || Number.isInteger(Number(formInputQttParticipation.value)) === false || Number(formInputQttParticipation.value) < 0) {
    formDataSetErrorVisibility(formInputQttParticipation, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputQttParticipation, false);
    return false;
  }
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
  if (formInputTOS.checked === false) {
    formDataSetErrorVisibility(formInputTOS, true);
    return true;
  } else {
    formDataSetErrorVisibility(formInputTOS, false);
    return false;
  }
}

/** * reset the form values after the form is sent */
function resetForm () {
  formContainer.reset();
  formDataSetErrorVisibility(formInputNameFirst, false);
  formDataSetErrorVisibility(formInputNameLast, false);
  formDataSetErrorVisibility(formInputEmail, false);
  formDataSetErrorVisibility(formInputBirthDate, false);
  formDataSetErrorVisibility(formInputQttParticipation, false);
  formInputsRadioLocation.forEach(input => formDataSetErrorVisibility(input, false));
  formDataSetErrorVisibility(formInputTOS, false);
}
