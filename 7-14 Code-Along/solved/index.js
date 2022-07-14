// Define our required packages
const inquirer = require('inquirer');
const fs = require('fs');
const { layout, csslayout } = require('./utils/literals');
const questions = require('./utils/questions');

inquirer
    .prompt(questions)
    .then(results => {
        console.log(results);
        fs.writeFile('aboutme.html', layout(results), err =>
        err ? console.log(err) : console.log('File created successfully!'))
        fs.writeFile('style.css', csslayout(results), err =>
        err ? console.log(err) : console.log('CSS file created successfully!'))
    });