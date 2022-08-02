// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: "Please enter your project's title:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter a title.'
    }
},
{
    type: 'input',
    name: 'description',
    message: "Please enter your project's description:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter a description.'
    }
},
{
    type: 'input',
    name: 'installation',
    message: "Please enter instructions for installation:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter instructions for installation.'
    }
},
{
    type: 'input',
    name: 'usage',
    message: "Please provide an example of use:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter an example.'
    }
},
{
    type: 'list',
    name: 'license',
    message: 'What license will you be using?',
    choices: [
        'BSD-2',
        'BSD-3',
        'GNU',
        'MIT'
    ],
},
{
    type: 'input',
    name: 'contribution',
    message: "Please describe standards for contribution:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter a description of the standards for contribution.'
    }
},
{
    type: 'input',
    name: 'testing',
    message: "How should users test the program?",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter an example of how to test the program.'
    }
},
{
    type: 'input',
    name: 'github',
    message: "Enter Github U/N:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter your Github Username.'
    }
},
{
    type: 'input',
    name: 'email',
    message: "Enter email address:",
    validate(value) {
        if (value) {
            return true;
        }
        return 'Please enter an email address.'
    }
},];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
        });
}


// Function call to initialize app
init();
