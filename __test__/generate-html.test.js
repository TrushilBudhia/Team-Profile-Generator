const generateHtml = require('../lib/generate-html');

describe('generate-html', () => {
    it('No employee cards are displayed when the team contains 0 members', () => {
        expect(generateHtml([])).toMatchSnapshot();
    });
});