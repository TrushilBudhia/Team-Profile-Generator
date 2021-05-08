class Employee {
    constructor(id, name, email) {
        console.log(id, name, email);
        const undefinedInput = id === undefined && name === undefined && email === undefined;
        const validIdInput = Number.isInteger(id) && id > 0;
        const validName = typeof name === 'string' && name.length > 0;

        const validator = require('email-validator');
        const verifyEmail = validator.validate(email);

        const validEmail = typeof email === 'string' && email.length > 0 && verifyEmail === true;
        if(undefinedInput || !validIdInput || !validName || !validEmail) {
            throw Error('Please provide a valid id, name and email');
        }
    }
}

module.exports = Employee;