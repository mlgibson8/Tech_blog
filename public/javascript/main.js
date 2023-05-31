
const headerLogoEl = document.getElementById('header-logo');
// Redirects to the homepage when the logo is clicked
headerLogoEl.addEventListener('click', () => {
  document.location.replace('/');
});

// Highlights the active nav item
const navItems = document.querySelectorAll('.navItem');
// If there are only 2 nav items, the user is not logged in
if (navItems.length == 2) {
  if (window.location.pathname == '/') {
    navItems[0].classList.add('active');
  }
  if (window.location.pathname == '/login') {
    navItems[1].classList.add('active');
  }
} else 
// if there are 3 nav items, the user is logged in, shows the dashboard nav item
{
  if (window.location.pathname == '/') {
    navItems[0].classList.add('active');
  }
  if (window.location.pathname == '/dashboard') {
    navItems[1].classList.add('active');
  }
  if (window.location.pathname == '/login') {
    navItems[2].classList.add('active');
  }
}

//changes layout of header if user is logged in
const headerHead = document.getElementById('header-head');

const loggedInActive = document.getElementById('loggedin');
// If the user is logged in, the header is justified to the center
if (loggedInActive) {
  headerHead.style.justifyContent = 'space-between';
} else {
  headerHead.style.justifyContent = 'center';
}
