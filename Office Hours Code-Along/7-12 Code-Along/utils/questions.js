var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'checkbox',
        name: 'skills',
        message: 'What are your current skills?',
        choices: ['HTML', 'CSS', 'JavaScript', 'Server-side APIs']
    },
    {
        type: 'list',
        name: 'pagecolor',
        message: 'What color would you like your page to be?',
        choices: ['black','purple','yellow','cyan','red']
    }
];

module.exports = questions;