const Employee = require('./Employee.js');
describe(`Employee`, () => {
    // TEST 1 - no properties provided
    it(`An error is thrown if no properties are provided`, () => {
        const result = () => {
            new Employee(undefined, undefined, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 2 - id not an integer
    it(`An error is thrown if id is not an integer`, () => {
        const result = () => {
            new Employee('Bond', undefined, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 3 - id not a positive number
    it(`An error is thrown if id is not a positive number`, () => {
        const result = () => {
            new Employee(-5, undefined, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 4 - name not a string
    it(`An error is thrown if name is not a string`, () => {
        const result = () => {
            new Employee(1, 404, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 5 - name not an empty string
    it(`An error is thrown if name is an empty string`, () => {
        const result = () => {
            new Employee(1, '', undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 6 - email not a string
    it(`An error is thrown if email is not a string`, () => {
        const result = () => {
            new Employee(7, 'James Bond', .007);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 7 - email not an empty string
    it(`An error is thrown if email is an empty string`, () => {
        const result = () => {
            new Employee(7, 'James Bond', '');
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
    // TEST 8 - email not a valid email address
    it(`An error is thrown if email is not a valid email input`, () => {
        const result = () => {
            new Employee(7, 'James Bond', 'licenseToEmail');
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })

})