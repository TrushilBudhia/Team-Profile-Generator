const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        const undefinedInput = github === undefined;
        const validGitHub = typeof github === 'string' && github.length > 0;
        if (undefinedInput || !validGitHub) {
            throw Error('Please provide a valid GitHub username');
        }
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;