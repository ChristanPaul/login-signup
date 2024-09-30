// script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginBox = document.getElementById('login-box');
    const signupForm = document.getElementById('signup-form');
    const showSignupLink = document.getElementById('show-signup');
    const showLoginLink = document.getElementById('show-login');

    // Show the signup form when the link is clicked
    showSignupLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        loginBox.style.display = 'none'; // Hide the login form
        signupForm.style.display = 'block'; // Show the signup form
    });

    // Show the login form when the link is clicked
    showLoginLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        signupForm.style.display = 'none'; // Hide the signup form
        loginBox.style.display = 'block'; // Show the login form
    });
});
