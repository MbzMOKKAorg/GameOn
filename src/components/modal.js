import { modalOpenButton, modalCloseButton, modalContainer, navListButton, formContainer, formConfirmation } from './domLinker';
import { resetForm } from './form';

// ##################################### EVENT LISTENERS #####################################

// click to open form modal
modalOpenButton.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to close form modal
modalCloseButton.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to toggle navigation bar
navListButton.addEventListener('click', (e) => toggleNav(e));

// ##################################### ACTIONS #####################################

/** * open or close the navigation bar on small screens */
function toggleNav (e) {
  e.preventDefault();
  const x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    // open
    x.className += ' responsive';
  } else {
    // close
    x.className = 'topnav';
  }
};

/** * open or close the form modal */
function toggleModal () {
  if (modalContainer.style.display === 'flex') {
    // close
    modalContainer.style.display = 'none';
  } else {
    // open
    modalContainer.style.display = 'flex';
    formContainer.style.display = 'flex';
    formConfirmation.style.display = 'none';
    resetForm();
  }
};
