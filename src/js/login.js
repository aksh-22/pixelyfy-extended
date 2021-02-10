export default class Login {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    confirmLogin(data) {
        // console.log(data[0].id);
        const email = document.querySelector('#email').value;
        const passwd = document.querySelector('#passwd').value;
        // console.log(passwd);
        // console.log(data[0].passwd);
        // console.log(firstName);

        if (data[0].email === email && data[0].password === passwd) {
            // console.log('login succesful');
            window.location.href = '/src/home.html';
        }
    }
}