//Code to add a darkmode feature
// use local storage to save the dark-mode state user has chosen
let darkMode = localStorage.getItem('darkMode');

const darkModeButton = document.querySelector('#dark-mode');
const darkModeButtonImage = document.querySelector('#dark-mode__image');
darkModeButton.style.backgroundImage = "url('/media/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg')";

const enableDarkMode = () => {
    //add the class darkmode to the body
    document.body.classList.add('darkmode');
    //update darkmode in local storage
    localStorage.setItem('darkMode', 'on');
    darkModeButton.style.backgroundImage = 'url("/media/icons/moon.svg")';
}

const disableDarkMode = () => {
    //remove darkmode class from the body
    document.body.classList.remove('darkmode');
    //update darkmode in local storage
    localStorage.setItem('darkMode', null);
    darkModeButton.style.backgroundImage = 'url("/media/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg")';
}

if (darkMode === 'on') {
    //turns on darkMode if it was enabled in previous visit
    enableDarkMode();
}

darkModeButton.addEventListener('click', () => {
    //set darkMode to current state in localStorage as darkMode 
    //doesn't update itself after page load
    darkMode = localStorage.getItem('darkMode');

    if (darkMode !== 'on') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

//code for the scrolling banner feature

const scrollers = document.querySelectorAll('.banner');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addScrolling();
}

function addScrolling() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        //duplicates current content to allow smooth endless scrolling
        const bannerScroll = scroller.querySelector('.banner__scroll');
        const bannerContent = Array.from(bannerScroll.children);

        bannerContent.forEach(item => {
            let duplicatedItem = item.cloneNode(true);
            //ensures duplicated content is not read twice
            duplicatedItem.setAttribute('aria-hidden', true);
            bannerScroll.appendChild(duplicatedItem);
        })
    })
}

//for the menu open 
const menuButton = document.querySelector('.open-menu');

menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-pressed');
    if (isOpen === 'false') {
        menuButton.setAttribute('aria-pressed', 'true');
    } else {
        menuButton.setAttribute('aria-pressed', 'false');
    }
})