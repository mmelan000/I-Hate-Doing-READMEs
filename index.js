// TODO: Include packages needed for this application
const fs = require('fs/promises');
const inquirer = require('inquirer');
const generateMD = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = ['Please enter a project title:', ''];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    // Title 
        // Question
        // Apply

    // Description
        // Question
        // Apply
    
    // Table of Contents
        // Apply
    
    // Installation
        // Question
        // Apply

    // Usage
    
    // License
        // List
        inquirer
        .prompt([
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
        ])
        .then((answers) => {
            console.log(answers.license);
        });
        // Add Badge
        // Apply - a notice is added to the section of the README entitled License that explains which license the application is covered under
    
    // Contributing
    
    // Tests
    
    // Questions
        // query Github U/N
            // apply
        // query email
            //apply
}


// Function call to initialize app
init();
