// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Breifly describe your project. What was your motivation? What problem does your project solve?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? If installation is not needed, type N/A: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use:',
        name: 'usage',
    },
    {
        type: 'checkbox',
        message: 'Choose from the licenses below:',
        name: 'licenses',
        choices: ['Apache', 'GNU (GPL v3)', 'MIT', 'N/A'],
    },
    {
        type: 'checkbox',
        message: 'To build this project, what technologies did you use?',
        name: 'technologies',
        choices: [' HTML', ' CSS', ' JavaScript', ' jQuery', ' Bootstrap', ' Google Font', ' Font Awesome', ' APIs', ' node.js', ' others'],
    },
    {
        type: 'input',
        message: 'Enter the link to the project repository:',
        name: 'repository',
    },
    {
        type: 'checkbox',
        message: 'This README generator automatically includes basic guidelines for other developers to contribute to your project, such as git fork, git branch and link to the repository. would you like to include these guidelines:',
        name: 'contributing',
        choices: ['Yes, sure!', 'No']
    },
    {
        type: 'input',
        message: 'If there are any additional guidelines for contribution, add them here (if none, press Enter key to skip):',
        name: 'extra',
    },
    {
        type: 'input',
        message: 'If there are any commands needed for tests, enter here (optional, press Enter key to skip):',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Add your GitHub username:',
        name: 'user',
    },
    {
        type: 'input',
        message: 'Add your contact info:',
        name: 'questions',
    },

];

// Function to write README file
function writeToFile(data) {
fs.writeFile('./demo/ReadME.md', generateMarkdown(data), (err) =>
err ? console.error(err) : console.log('Success!')
);
}

// Function to initialize app
function init() {
    inquirer
    .prompt(questions)

    .then((data) => {
        console.log(data);
        writeToFile(data);
    }
    );
}

// Function call to initialize app
init();
