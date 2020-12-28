class Utility{
     firstName = (fname) => {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(fname)){
            console.log("valid First Name");
        }
        else{
            console.log("Invalid First Name");
        }
        return FIRST_NAME_PATTERN;
    }
    lastName = (lname) => {
        let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (LAST_NAME_PATTERN.test(lname)) {
            console.log("valid Last Name");
        }
        else{
            console.log("Invalid Last Name");
        }
        return LAST_NAME_PATTERN;
    }
    emailAddress = (email) => {
        let EMAIL_PATTERN = new RegExp("^[a-zA-Z0-9]+([.][a-zA-Z0-9]+)?@[a-zA-Z0-9]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})?$");

        if (EMAIL_PATTERN.test(email)) {
            console.log("valid Email");
        }
        else{
            console.log("Invalid Email");
        }
        return EMAIL_PATTERN;
    }
    phoneNumber = (phoneNumber) => {
        let PHONE_NUMBER_PATTERN = new RegExp("^([0-9]{2}[ ]+)?[0-9]{10}$");

        if (PHONE_NUMBER_PATTERN.test(phoneNumber)) {
            console.log("valid Phone Number");
        }
        else{
            console.log("Invalid Phone Number");
        }
        return PHONE_NUMBER_PATTERN;
    }
    password_validation = (password) => {
        let PASSWORD_PATTERN = new RegExp("[a-zA-Z0-9]{8,40}");

        if (PASSWORD_PATTERN.test(password)) {
            console.log("valid Password");
        }
        else{
            console.log("Invalid Password");
        }
        return PASSWORD_PATTERN;
    }
}
module.exports = new Utility();