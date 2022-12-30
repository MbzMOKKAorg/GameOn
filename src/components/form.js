import { formSubmitButton } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

formSubmitButton.addEventListener('click', (e) => submitForm(e));

// ##################################### ACTIONS #####################################

/** * submit the registration form */
const submitForm = (e) => {
  e.preventDefault();
};
