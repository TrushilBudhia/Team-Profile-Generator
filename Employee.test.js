describe(`Employee`, () => {
    it(`An error is thrown if no properties are provided`, () => {
        expect(() => {
            new Employee(undefined, undefined, undefined);
        }).toThrow('Please provide a valid id, name and email');
    })
})