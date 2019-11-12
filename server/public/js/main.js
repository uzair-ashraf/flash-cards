console.log('main.js hit')
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  console.log('app loading...');
  eventListeners();
}

function eventListeners() {
  const loginButton = document.querySelector('.login-button');
  loginButton.addEventListener('click', triggerForm);

  function triggerForm(e) {
    e.preventDefault();
    loginButton.textContent = 'Sign In'
    createSignUpForm()
    loginButton.removeEventListener('click', triggerForm);
  }
}

function createSignUpForm(){
  const form = document.createElement('form');
  const loginButton = document.querySelector('.login-button');
  const username = document.createElement('input');
  const password = document.createElement('input');
  form.className = "sign-in";
  form.addEventListener("submit", submitForm);
  username.className = "username";
  username.placeholder = "username"
  password.className = "password";
  password.placeholder = "password";
  password.type = "password";
  form.appendChild(username)
  form.appendChild(password);
  form.appendChild(loginButton);
  document.querySelector('.sign-in-form').prepend(form);
  loginButton.setAttribute("type", "submit");
}

function submitForm(e) {
  e.preventDefault();
  const username = document.querySelector('.username').value;
  const password = document.querySelector('.password').value;
  console.log(`username: ${username}`);
  console.log(`password: ${password}`);
}
