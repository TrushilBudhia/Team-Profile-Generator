const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const generateHtml = require("./generate-html.js");

let team = [];
// Function to validate user input is not an empty string
const answerValidator = async (input) => {
    return (input === '' ? 'Invalid value' : true);
}
// The next step question
const nextStepsQuestion = {
    type: 'list',
    message: 'How do you wish to proceed?',
    name: 'menu',
    choices: [
        'Add an Engineer',
        'Add an Intern',
        'Finish building my team',
    ],
}
// The Manager questions that the user must answer first
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team manager\'s name?',
        name: 'name',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: 'What is the team manager\'s employee ID?',
        name: 'id',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: 'What is the team manager\'s email address?',
        name: 'email',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: 'What is the team manager\'s office number?',
        name: 'officeNumber',
        validate: answerValidator,
    },
];
// The main questions to answer for the engineer and intern
const mainQuestions = [
    {
        type: 'input',
        message: `What is the employee's name?`,
        name: 'name',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: `What is the employee's employee ID?`,
        name: 'id',
        validate: answerValidator,
    },
    {
        type: 'input',
        message: `What is the employee's email address?`,
        name: 'email',
        validate: answerValidator,
    },
]
// Adding the engineer questions and pushing the result to the team array
function addEngineer() {
    const engineerQuestions = Array.from(mainQuestions);
    engineerQuestions.push({
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'githubUsername',
        validate: answerValidator,
    },);
    inquirer.prompt(engineerQuestions)
    .then((response) => {
        let id = Number(response.id);
        let name = response.name;
        let email = response.email;
        let githubUsername = response.githubUsername;
        const engineer = new Engineer(id, name, email, githubUsername);
        team.push(engineer);
        nextStepsPrompt();
    })

}
// Adding the intern questions and pushing the result to the team array
function addIntern() {
    let internQuestions = Array.from(mainQuestions);
    internQuestions.push({
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
        validate: answerValidator,
    },);
    inquirer.prompt(internQuestions)
    .then((response) => {
        let id = Number(response.id);
        let name = response.name;
        let email = response.email;
        let school = response.school;
        const intern = new Intern(id, name, email, school);
        team.push(intern);
        nextStepsPrompt();
    })
}
// Generating the report-sample.html file
function generateHtmlFile() {
    const filename = "report-sample.html";
    const outputPath = path.resolve('dist', filename);
    // Writing the information received to a file called report-sample.html which will be stored in the dist folder
    fs.writeFile(outputPath, generateHtml(team), (err) =>
        err ? console.error(err) : console.log(`${filename} created successfully!`)
    );
}
// Determining what function to call when the user decides what the next step in the process is
function menuResponse(nextStep) {
    switch (nextStep) {
        case 'Add an Engineer':
            addEngineer();
            break;
        case 'Add an Intern':
            addIntern();
            break;
        default:
            generateHtmlFile();
            break;
    }
}
// Prompting the user for the next step
function nextStepsPrompt() {
    inquirer.prompt(nextStepsQuestion)
        .then((response) => {
            let nextStep = response.menu;
            menuResponse(nextStep);
        })
}

// Function prompting user to answer questions for creating the HTML file
function promptInquirer() {
    return inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let id = Number(response.id);
            let name = response.name;
            let email = response.email;
            let officeNumber = Number(response.officeNumber);
            const manager = new Manager(id, name, email, officeNumber);
            // Pushing the manager value with the manager information to team array
            team.push(manager);

            nextStepsPrompt();
        })
        .catch(error => {
            console.error(`Inquirer has failed: ${error}`);
        })
}
// Exporting the promptInquirer function
module.exports = {
    promptInquirer
}