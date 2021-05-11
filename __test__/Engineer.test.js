const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    // TEST 1
    it(`An error is thrown if github is undefined`, () => {
        const result = () => {
            new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', undefined);
        }
        expect(result).toThrow('Please provide a valid GitHub username');
    })
    // TEST 2
    it(`An error is thrown if github is not a string`, () => {
        const result = () => {
            new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', 7);
        }
        expect(result).toThrow('Please provide a valid GitHub username');
    })
    // TEST 3
    it(`An error is thrown if github is an empty string`, () => {
        const result = () => {
            new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', '');
        }
        expect(result).toThrow('Please provide a valid GitHub username');
    })
    // TEST 4 - Engineer object created when properties provided
    it(`An Engineer object is created when the id, name, email and github properties are provided`, () => {
        const engineer = new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', 'CasinoRoyale');
        expect(engineer).toEqual({
            id: 7,
            name: 'Caniel Draig',
            email: 'CasinoRoyale007@jbmail.com',
            github: 'CasinoRoyale',
        });
    })
    // TEST 5 - Gets the Engineer github link when getGithub is called
    it(`Returns the Engineer role when getGithub() is invoked`, () => {
        const engineer = new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', 'CasinoRoyale');
        expect(engineer.getGithub()).toEqual('CasinoRoyale');
    })
    // TEST 6 - Gets the Engineer role when getRole is called
    it(`Returns the Engineer role when getRole() is invoked`, () => {
        const engineer = new Engineer(7, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', 'CasinoRoyale');
        expect(engineer.getRole()).toEqual('Engineer');
    })
})