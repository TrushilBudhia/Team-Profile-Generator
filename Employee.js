class Employee {
    constructor(id, name, email) {
        throw Error('Please provide a valid id, name and email');
    }
}

module.exports = Employee;