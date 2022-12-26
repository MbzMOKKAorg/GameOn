import { modalBtn, modalCloseBtn, modalContainer, editNavIcon } from './domLinker';

// ##################################### EVENT LISTENERS #####################################

// click to open form modal
modalBtn.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to close form modal
modalCloseBtn.forEach(btn => btn.addEventListener('click', () => toggleModal()));

// click to toggle navigation bar
editNavIcon.addEventListener('click', () => toggleNav());

// ##################################### UTILS #####################################

/** * open or close the navigation bar on small screens */
const toggleNav = () => {
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
