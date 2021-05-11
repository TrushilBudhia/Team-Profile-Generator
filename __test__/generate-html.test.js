const generateHtml = require('../lib/generate-html');
const Manager = require('../lib/Manager.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');

describe('generate-html', () => {

    const manager = new Manager(1, 'Fan Ileming', 'JamesBond007@jbmail.com', 7);
    const engineer = new Engineer(2, 'Caniel Draig', 'CasinoRoyale007@jbmail.com', 'CasinoRoyale');
    const intern = new Intern(3, 'Edris Ilba', 'DCIJohnLuther@jbmail.com', 'Skyfall School of Spectres');
    // TEST 1 - if no members in the team
    it('No employee cards are displayed when the team contains 0 members', () => {
        expect(generateHtml([])).toMatchSnapshot();
    });
    // TEST 2 - if only a manager in the team
    it('Returns the Manager card when the team contains a Manager as a member', () => {
        expect(generateHtml([manager])).toMatchSnapshot();
    });
    // TEST 3 - if a manager and engineer in the team
    it('Returns the Manager and Engineer card when the team contains a Manager and an Engineer', () => {
        expect(generateHtml([manager, engineer])).toMatchSnapshot();
    });
    // TEST 4 - if a manager and intern in the team
    it('Returns the Manager and Intern card when the team contains a Manager and an Intern', () => {
        expect(generateHtml([manager, intern])).toMatchSnapshot();
    });
    // TEST 5 - if a manager, engineer and intern in the team
    it('Returns the Manager, Engineer and Intern card when the team contains a Manager, Engineer and an Intern', () => {
        expect(generateHtml([manager, engineer, intern])).toMatchSnapshot();
    });

});