/**
  * Easy access to DOM elements
*/
module.exports = {
  modalContainer: document.querySelector('.modal-bground'),
  modalOpenButton: document.querySelectorAll('.btn-signup'),
  modalCloseButton: document.querySelectorAll('.close-modal'),

  navListButton: document.getElementById('nav-list-btn'),

  formConfirmation: document.getElementById('confirmation'),
  formContainer: document.getElementById('reserve'),
  formData: document.querySelectorAll('.formData'),
  formSubmitButton: document.querySelector('.btn-submit'),

  formInputNameFirst: document.getElementById('first'),
  formInputNameLast: document.getElementById('last'),
  formInputEmail: document.getElementById('email'),
  formInputBirthDate: document.getElementById('birthdate'),
  formInputQttParticipation: document.getElementById('quantity'),
  formInputsRadioLocation: document.querySelectorAll('.location-input'),
  formInputTOS: document.getElementById('checkbox1'),
  formInputNews: document.getElementById('checkbox2'),

  spanVersion: document.getElementById('version')
};
