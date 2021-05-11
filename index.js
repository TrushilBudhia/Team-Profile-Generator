const questions = require("./lib/questions.js");

// A function to invoke the promptInquirer function in the questions file
function init() {
    questions.promptInquirer();
}
// Initiating the process to begin inquirer prompting the user for answers to its questions
init();
