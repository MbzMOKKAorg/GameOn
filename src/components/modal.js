import { modalOpenButton, modalCloseButton, modalContainer, navListButton } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

// click to open form modal
modalOpenButton.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to close form modal
modalCloseButton.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to toggle navigation bar
navListButton.addEventListener('click', (e) => toggleNav(e));

// ##################################### ACTIONS #####################################

/** * open or close the navigation bar on small screens */
const toggleNav = (e) => {
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
const toggleModal = () => {
  if (modalContainer.style.display === 'block') {
    // close
    modalContainer.style.display = 'none';
  } else {
    // open
    modalContainer.style.display = 'block';
  }
};
