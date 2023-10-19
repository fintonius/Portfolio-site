// use local storage to save the dark-mode state user has chosen
let darkMode = localStorage.getItem('darkMode');

const darkModeButton = document.querySelector('#dark-mode');

darkModeButton.addEventListener('click', () => {
    console.log('click!');
})