const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    // TEST 1
    it(`An error is thrown if school is undefined`, () => {
        const result = () => {
            new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', undefined);
        }
        expect(result).toThrow('Please provide a valid school');
    })
    // TEST 2
    it(`An error is thrown if school is not a string`, () => {
        const result = () => {
            new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', 72);
        }
        expect(result).toThrow('Please provide a valid school');
    })
    // TEST 3
    it(`An error is thrown if school is an empty string`, () => {
        const result = () => {
            new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', '');
        }
        expect(result).toThrow('Please provide a valid school');
    })
    // TEST 4 - Intern object created when properties provided
    it(`An Intern object is created when the id, name, email and school properties are provided`, () => {
        const intern = new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', 'Skyfall School of Spectres');
        expect(intern).toEqual({
            id: 8,
            name: 'Edris Ilba',
            email: 'DCIJohnLuther@jbmail.com',
            school: 'Skyfall School of Spectres',
        });
    })
    // TEST 5 - Gets the Intern school when getSchool is called
    it(`Returns the Intern role when getSchool() is invoked`, () => {
        const intern = new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', 'Skyfall School of Spectres');
        expect(intern.getSchool()).toEqual('Skyfall School of Spectres');
    })
    // TEST 6 - Gets the Intern role when getRole is called
    it(`Returns the Intern role when getRole() is invoked`, () => {
        const intern = new Intern(8, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', 'Skyfall School of Spectres');
        expect(intern.getRole()).toEqual('Intern');
    })
})