const Employee = require('../lib/Employee.js');
describe(`Employee`, () => {

    // TEST 1 - no properties provided
    it(`An error is thrown if no properties are provided`, () => {
        const result = () => {
            new Employee(undefined, undefined, undefined);
        }
        expect(result).toThrow('Please provide a valid id, name and email');
    })

    describe(`Testing the id property for errors`, () => {
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
    })

    describe(`Testing the name property for errors`, () => {
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
    })

    describe(`Testing the email property for errors`, () => {
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
                new Employee(7, 'James Bond', 'licenceToCode');
            }
            expect(result).toThrow('Please provide a valid id, name and email');
        })
    })

    // TEST 9 - Employee object created when properties provided
    it(`An Employee object is created when the id, name and email properties are provided`, () => {
        const employee = new Employee(2, 'Cean Sonnery', 'GoldFinger007@gmail.com');
        expect(employee).toEqual({
            id: 2,
            name: 'Cean Sonnery',
            email: 'GoldFinger007@gmail.com',
        });
    })

    // TEST 10 - Gets the employee id when getId is called
    it(`Returns the Employee id when getId() is invoked`, () => {
        const employee = new Employee(3, 'Leorge Gazenby', 'OnHerMajestysSecretService007@gmail.com');
        expect(employee.getId()).toEqual(3);
    })

    // TEST 11 - Gets the employee name when getName is called
    it(`Returns the Employee name when getName() is invoked`, () => {
        const employee = new Employee(4, 'Moger Roore', 'Moonraker007@gmail.com');
        expect(employee.getName()).toEqual('Moger Roore');
    })

    // TEST 12 - Gets the employee email when getEmail is called
    it(`Returns the Employee email when getEmail() is invoked`, () => {
        const employee = new Employee(5, 'Dimothy Talton', 'LicenceToKill007@gmail.com');
        expect(employee.getEmail()).toEqual('LicenceToKill007@gmail.com');
    })

    // TEST 13 - Gets the employee role when getRole is called
    it(`Returns the Employee role when getRole() is invoked`, () => {
        const employee = new Employee(6, 'Bierce Prosnan', 'GoldenEye007@gmail.com');
        expect(employee.getRole()).toEqual('Employee');
    })

})