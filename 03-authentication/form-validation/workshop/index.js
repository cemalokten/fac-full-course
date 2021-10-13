const form = document.querySelector('form');
const email = document.getElementById('email')
const password = document.getElementById('password')
form.setAttribute('novalidate', '');

form.addEventListener('submit', (e) => {
    if (!e.target.checkValidity()) {
        e.preventDefault()
        console.log('ERROR ALL');
    }
})

password.addEventListener('invalid', (e) => {
    console.log(password.validationMessage);
    password.setAttribute('aria-invalid', true); 
})

email.addEventListener('invalid', (e) => {
    console.error(email.validationMessage);
    email.setAttribute('aria-invalid', true); 
})