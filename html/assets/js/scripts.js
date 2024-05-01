const toggleDarkModeButton = document.getElementById('toggleDarkMode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('light');
});

var navOpen = false;

function toggleNav() {
  if (navOpen) {
    closeNav();
  } else {
    openNav();
  }
}

function openNav() {
  document.getElementById("mySidenav").style.right = "0";
  navOpen = true;
}

function closeNav() {
  document.getElementById("mySidenav").style.right = "-281px";
  navOpen = false;
}