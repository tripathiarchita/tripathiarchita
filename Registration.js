const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm_password');
const usernameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const confirmPasswordError = document.getElementById('confirm-password-error');
const passwordStrength = document.getElementById('password-strength');
const form = document.getElementById('reg_form');

const usernameRegex = /^[a-zA-Z0-9_]{5,}$/;
username.addEventListener('input', () => {
  if (!usernameRegex.test(username.value)) {
    usernameError.textContent = 'Username must be at least 5 characters long and contain only letters, numbers, and underscores.';
  } else {
    usernameError.textContent = '';
  }
});


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
email.addEventListener('input', () => {
  if (!emailRegex.test(email.value)) {
    emailError.textContent = 'Please enter a valid email address.';
  } else {
    emailError.textContent = '';
  }
});


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

password.addEventListener('input', () => {
  
  if (!passwordRegex.test(password.value)) {
    passwordError.textContent = 'Password should be at least 6 characters long and include at least one lowercase letter, uppercase letter, number, and special symbols.';
  } else {
    passwordError.textContent = '';
    checkPasswordStrength(); 
  }
});


function checkPasswordStrength() {
  const characters = password.value.length;
  let strength = 0;


  if (/[a-z]/.test(password.value)) {
    strength++;
  }
  if (/[A-Z]/.test(password.value)) {
    strength++;
  }
  if (/\d/.test(password.value)) {
    strength++;
  }
  if (/[@$!%*?&]/.test(password.value)) {
    strength++;
  }
  if (characters >= 12) {
    strength++; 
  }

  
  passwordStrength.classList.remove('weak', 'medium', 'strong'); 
  switch (strength) {
    case 1:
    case 2:
      passwordStrength.textContent = 'Weak';
      passwordStrength.classList.add('weak');
      break;
    case 3:
    case 4:
      passwordStrength.textContent = 'Medium';
      passwordStrength.classList.add('medium');
      break;
    default:
      passwordStrength.textContent = 'Strong';
      passwordStrength.classList.add('strong');
  }
}
form.addEventListener('submit', (event) => {
 event.preventDefault();
  swal.fire({
    title: "Good Job",
    text: "Your form has been submitted",
    icon: "success",
  });
});
