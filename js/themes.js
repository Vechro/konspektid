
/*
// Set theme on page load if it's in localStorage
if (localStorage.getItem('currentTheme')) {
  document.body.classList.add(localStorage.getItem('currentTheme'));
} else {
  setTheme('white-theme');
}
*/

/*
function setTheme(themeName) {

  switch (themeName) {
    case 'white-theme':
      document.body.classList.remove('white-theme');
    case 'solarized-theme':
      document.body.classList.remove('solarized-theme');
    case 'dark-theme':
      document.body.classList.remove('dark-theme');
    case 'black-theme':
      document.body.classList.remove('black-theme');
  }

  switch (themeName) {
    case 'white-theme':
      document.body.classList.add('white-theme');
      localStorage.setItem('currentTheme', themeName);
      break;
    case 'solarized-theme':
      document.body.classList.add('solarized-theme');
      localStorage.setItem('currentTheme', themeName);
      break;
    case 'dark-theme':
      document.body.classList.add('dark-theme');
      localStorage.setItem('currentTheme', themeName);
      break;
    case 'black-theme':
      document.body.classList.add('black-theme');
      localStorage.setItem('currentTheme', themeName);
      break;
  }

  document.body.classList.add('smooth-transition');
}
*/

// When the user clicks on the button, toggle between hiding and showing the dropdown content
function showDropdownMenu() {
  document.getElementById("navDropdown").classList.toggle("show");
}

const themeMenu = document.querySelector('#navDropdown');
const savedTheme = localStorage.getItem('currentTheme');

if (savedTheme && document.querySelector(`[data-theme="${savedTheme}"]`)) {
  setTheme(savedTheme);
} else {
  setTheme('white-theme');
}

function setTheme(themeName, isTransition) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('currentTheme', themeName);
  if (isTransition) {
    document.body.classList.add('smooth-transition');
  }
}

function handleClick(event) {
  const button = event.target;

  if (button.hasAttribute('data-theme')) {
    setTheme(button.getAttribute('data-theme'), true);
  }
}

themeMenu.addEventListener('click', handleClick);

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!(event.target.matches('.theme-indicator') || event.target.matches('.dropdown-content a'))) {

    const dropdowns = document.getElementsByClassName("dropdown-content");

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}