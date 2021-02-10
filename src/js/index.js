import { init } from './typewriter';
import { http } from './http';
import Login from './login';

// clear inpur field
window.onload = clearInput();

const state = {};

state.login = new Login();

const firstName = document.querySelector('#signupInput');
const lastName = document.querySelector('#signupInput2');
const email = document.querySelector('#email');
firstName.addEventListener('blur', validateFirstName);
lastName.addEventListener('blur', validateLastName);
email.addEventListener('blur', validateEmail);
document.querySelector('#loginbtn').addEventListener('click', getData);

function clearInput() {
    // console.log("yes");
    document.querySelector('#signupInput').value = '';
    document.querySelector('#signupInput2').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#passwd').value = '';
    document.querySelector('#signupInput').style.display = 'none';
    document.querySelector('#signupInput2').style.display = 'none';
}

document.querySelector('#signup').addEventListener('click', signupEvent);

function signupEvent() {
    let txt = document.querySelector('.btn-signup').getAttribute('value');
    // console.log(txt);
    if (txt === 'Sign Up') {
        document.querySelector('#signupInput').style.display = 'block';
        document.querySelector('#signupInput2').style.display = 'block';
        document.querySelector('.btn-login').setAttribute('value', 'Sign Up');
        document.querySelector('.btn-signup').setAttribute('value', 'Login');
        document.querySelector('#txt-data-change-1').textContent = 'Sign Up';
    } else {
        document.querySelector('#signupInput').style.display = 'none';
        document.querySelector('#signupInput2').style.display = 'none';
        document.querySelector('.btn-login').setAttribute('value', 'Login');
        document.querySelector('.btn-signup').setAttribute('value', 'Sign Up');
        document.querySelector('#txt-data-change-1').textContent = 'Login';
    }
}

init();

function validateFirstName() {
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(firstName.value)) {
        firstName.classList.add('is-invalid');
    } else {
        firstName.classList.remove('is-invalid');
    }
}

function validateLastName() {
    const re = /^[a-zA-Z]{2,10}$/;

    if (!re.test(lastName.value)) {
        lastName.classList.add('is-invalid');
    } else {
        lastName.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const re = /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function getData() {
    http
        .get('http://localhost:3000/account')
        .then((data) => {
            // console.log(data);
            state.login.confirmLogin(data);
        })
        .catch((err) => {
            console.log(err);
        });
    console.log('yes');
}