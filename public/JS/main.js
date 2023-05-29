const headerLogoEl = document.getElementById('header-logo');
headerLogoEl.addEventListener('click', () => {
    document.location.replace('/');
});

const navItems = document.querySelectorAll('.nav-item');
if (navItems.length == 2) {
    if (window.location.pathname == '/') {
        navItems[0].classList.add('active');
    }
    if (window.location.pathname == '/login') {
        navItems[1].classList.add('active');
    }
} else {
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

const headerHead = document.getElementById('header-head');
const loggedInActive = document.getElementById('logged-in');
if (loggedInActive) {
    headerHead.style.justifyContent = 'space-between';

} else {
    headerHead.style.justifyContent = 'center';
}