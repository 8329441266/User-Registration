console.log("---Welcome to User Registration---");
var readlineSync = require('readline-sync');
const util = require("./Utility");
var fName = readlineSync.question( "Enter First name : ");
util.firstName(fName);
var lName = readlineSync.question( "Enter Last name : ");
util.firstName(lName);