cosnt signupForm = document.getElementById('signup-form');

async function signupFormTrigger(event) {
    event.preventDefault();

    const username = document.getElementById('username-signup').value;
    const email = document.getElementById('email-signup').value;
    const password = document.getElementById('password-signup').value;
    const signupStatusEl = document.getElementById('signup-status');
    if (username.length <= 3 || email.length <= 3 || password.length <= 3) {
        signupStatusEl.textContent = 'Username, email, and password must be at least 4 characters long.';
      setTimeout(() => {
        signupStatusEl.textContent = 'fill out the form to sign up';
      }, 3600);
    } else {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                email,
                password
    }),
    headers: { 'Content-Type': 'application/json', },
});

if (response.ok) {
    signupStatusEl.textContent = 'Sign up successful! Redirecting to dashboard...';
    setTimeout(() => {
    document.location.replace('../dashboard');
}, 3600);
} else {
    console.log(response.statusText);
}
    }
}

signupForm.addEventListener('submit', signupFormTrigger);