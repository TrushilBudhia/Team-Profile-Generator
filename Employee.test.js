const Employee = require('./Employee.js');
describe(`Employee`, () => {
    it(`An error is thrown if no properties are provided`, () => {
        const result = () => {
            new Employee(undefined, undefined, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })
})