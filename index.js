
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const emailaddress = document.getElementById('emailaddress');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailaddressValue = emailaddress.value.trim();
    const passwordValue = password.value.trim();

    if (firstnameValue == ''){
        setErrorFor(firstname, 'First Name cannot be empty');
    } else{
        setSuccessFor(firstname);
    }

    if (lastnameValue == ''){
        setErrorFor(lastname, 'Last Name cannot be empty');
    } else{
        setSuccessFor(lastname);
    }

    if (emailaddressValue == ''){
        setErrorFor(emailaddress, 'Email Address cannot be empty');
        setErrorInvalidMail(emailaddress, 'example@gmail.com');
    } else{
        setSuccessFor(emailaddress);
    }

    if (passwordValue == ''){
        setErrorFor(password, 'Password cannot be empty');
    } else{
        setSuccessFor(password);
    }
}

function setErrorFor(input, message){
    const inputCon = input.parentElement;
    const small = inputCon.querySelector('small');

    small.innerText = message;

    inputCon.className = 'inputCon error';
}
function setErrorInvalidMail(input, message1){
    const inputCon = input.parentElement;
    const p = inputCon.querySelector('p');

    p.innerText = message1;
    inputCon.className = 'inputCon error';
}

function isEmail(emailaddress){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\a@"]+)")|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}