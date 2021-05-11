const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    // TEST 1
    it(`An error is thrown if office number is undefined`, () => {
        const result = () => {
            new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', undefined);
        }
        expect(result).toThrow('Please provide a valid office number');
    })
    // TEST 2
    it(`An error is thrown if office number is not a number`, () => {
        const result = () => {
            new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', 'OO7');
        }
        expect(result).toThrow('Please provide a valid office number');
    })
    // TEST 3
    it(`An error is thrown if office number is not a positive number`, () => {
        const result = () => {
            new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', -7);
        }
        expect(result).toThrow('Please provide a valid office number');
    })
    // TEST 4 - Manager object created when properties provided
    it(`A Manager object is created when the id, name, email and officeNumber properties are provided`, () => {
        const manager = new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', 7);
        expect(manager).toEqual({
            id: 1,
            name: 'Fan Ileming',
            email: 'JamesBond007@jbmail.com',
            officeNumber: 7,
        });
    })
    // TEST 5 - Gets the Manager role when getRole is called
    it(`Returns the Manager role when getRole() is invoked`, () => {
        const manager = new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', 7);
        expect(manager.getRole()).toEqual('Manager');
    })

    it(`Returns the Manager office number when getOfficeNumber() is invoked`, () => {
        const manager = new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', 7);
        expect(manager.getOfficeNumber()).toEqual(7);
    })
})