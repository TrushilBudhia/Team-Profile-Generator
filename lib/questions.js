const inquirer = require('inquirer');

// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}

const mainQuestions = [
    {
        type: 'input',
        message: 'What is team manager\'s name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is team manager\'s employee ID?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is team manager\'s email address?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is team manager\'s office number?',
        name: 'managerOfficeNumber',
    },
    {
        type: 'list',
        message: 'How do you wish to proceed?',
        name: 'menu',
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Finish building my team',
        ],
    },
];

// Function prompting user to answer questions for creating the HTML file
function promptInquirer() {
    return inquirer
    .prompt(mainQuestions)
    .then((response) => {
        console.log(response);
    })
}

module.exports = {
    promptInquirer
}