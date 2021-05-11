class Employee {
    constructor(id, name, email) {
        const undefinedInput = id === undefined && name === undefined && email === undefined;
        const validIdInput = Number.isInteger(id) && id > 0;
        const validName = typeof name === 'string' && name.length > 0;

        const validator = require('email-validator');
        const verifyEmail = validator.validate(email);

        const validEmail = typeof email === 'string' && email.length > 0 && verifyEmail === true;
        if (undefinedInput || !validIdInput || !validName || !validEmail) {
            throw Error('Please provide a valid id, name and email');
        }

        this.id = id;
        this.name = name;
        this.email = email;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;