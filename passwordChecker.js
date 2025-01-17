function isValidPassword(password) {

    //Check if the password is less than 8 characters
    if (password.length < 8) {
        return false;
    }

    //Check if the password contains a special character
    const specialCharacters = /[!_-|@#]/;
    if(!specialCharacters.test(password)) {
        return false
    }

    //Check if the password contains a number
    const numbers = /[0-9]/;
    if(!numbers.test(password)) {
        return false;
    }
    return true;
}

module.exports = isValidPassword;