var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: (answer) => {
            if (answer !== "") {
                return true;
            }
            return 'Please type in atleast one letter!';
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: (answer) => {
            const pass = answer.match(/\S+@\S+\.\S+/);
            if(pass) {
                return true;
            }
            return "Please enter a valid email address!";
        }
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