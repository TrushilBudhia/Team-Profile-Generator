const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        const undefinedInput = school === undefined;
        const validSchool = typeof school === 'string' && school.length > 0;
        if(undefinedInput || !validSchool) {
            throw Error('Please provide a valid school');
        }
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;