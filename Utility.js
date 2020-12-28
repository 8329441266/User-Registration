class Utility{
     firstName(fname) {
        let FIRST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (FIRST_NAME_PATTERN.test(fname)) {
            console.log("valid First Name");
        }
        else{
            console.log("Invalid First Name");
        }
        return FIRST_NAME_PATTERN;
    }
    lastName(lname) {
        let LAST_NAME_PATTERN = new RegExp("^[A-Z]{1}[a-z]{2,}$");

        if (LAST_NAME_PATTERN.test(lname)) {
            console.log("valid Last Name");
        }
        else{
            console.log("Invalid Last Name");
        }
        return LAST_NAME_PATTERN;
    }
}
module.exports = new Utility();