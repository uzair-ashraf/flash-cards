console.log('main.js hit')

const initializeApp = () => {
  console.log('app loading...');
  eventListeners();
}

const eventListeners = () => {
  const loginButton = document.querySelector('.login-button');
  const loginForm = document.querySelector('.sign-up-form')
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginButton.textContent = 'Sign In'
    loginForm =
  })
}

const createSignUpForm = () => {
  const form = document.createElement('form');
  const username = document.createElement('input');
}

document.addEventListener('DOMContentLoaded', initializeApp);
