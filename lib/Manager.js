const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        const undefinedInput = officeNumber === undefined;
        const validOfficeNumber = Number.isInteger(officeNumber) && officeNumber > 0;
        if (undefinedInput || !validOfficeNumber) {
            throw Error('Please provide a valid office number');
        }
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;