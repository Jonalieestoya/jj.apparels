
// documents.forms - is an object containing all of the forms for that HTML document.
// It will return a collection of all the forms within a particular page. 
// It will provide the value for the form element with the name ‘form’ with the name ‘email’
// It will provide the value for the form element with the name ‘form’ with the name 
// ‘password’

var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

// The document.getElementById() method returns the element of specified id.

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

// The addEventListener() and onclick both listen for an event. Both can execute a callback function when a button is clicked.
// The addEventListener() method can have multiple event handlers applied to the same element. It doesn’t overwrite other event handlers.

email.addEventListener('input', email_Verify);
password.addEventListener('input', pass_Verify);
// Create function for email and password errors.

function validated(){
    if (email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        password.focus();
        return false;
    }
}

// Create function for email and password to validate.

function email_Verify(){
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass_Verify () {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        pass_error.style.color ="none";
        return true;
    }
}