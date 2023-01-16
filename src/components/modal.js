import { modalOpenButton, modalCloseButton, modalContainer, navListButton, formContainer, formConfirmation } from './domLinker';
import { resetForm } from './form';

// ##################################### EVENT LISTENERS #####################################

// Click to open form modal
modalOpenButton.forEach(btn => btn.addEventListener('click', toggleModal));

// Click to close form modal
modalCloseButton.forEach(btn => btn.addEventListener('click', toggleModal));

// Click to toggle navigation bar
navListButton.addEventListener('click', (e) => toggleNav(e));

// ##################################### ACTIONS #####################################

/**
  * Open or close the navigation bar on small screens
  * @param {Event} e
*/
function toggleNav (e) {
  e.preventDefault();
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    // Open
    x.className += ' responsive';
  } else {
    // Close
    x.className = 'topnav';
  }
};

/**
  * Open or close the form modal
*/
function toggleModal () {
  if (modalContainer.style.display === 'flex') {
    // Close
    modalContainer.style.display = 'none';
  } else {
    // Open
    modalContainer.style.display = 'flex';
    formContainer.style.display = 'flex';
    formConfirmation.style.display = 'none';
    resetForm();
  }
};
