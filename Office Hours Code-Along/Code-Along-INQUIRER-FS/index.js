// We are using inquirer and FS, so we are telling the computer that they are required for this code.
const inquirer = require('inquirer');
const fs = require('fs');

// Inquirer prompt questions
var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['HTML', 'CSS', 'JavaScript', 'MySQL']
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'contact',
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
    }
];

//This is our page layout. We are using a template literal in order to easily input our data!
function layout(data) {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello, my name is: ${data.name}</h1>

    <section>
    <h1>Here is my stack:</h1>
    <p>${data.stack}</p>
    </section>

    <footer>
    <h1>Contact Me</h1>
        <ul>
        <li>${data.contact}</li>
        <li>${data.github}</li>
        </ul>
    </footer>
</body>
</html>`

}

// This is where the magic happens. 
// We user inquirer to run our prompt for our questions
// then we take the data contain the answers and seed it into our HTML template literal.
inquirer
    .prompt(questions)
    .then(data => {
        const filename = `${data.name
            .toLowerCase()
            .split(' ')
            .join('')}.html`;

        fs.writeFile(filename, layout(data), err =>
            err ? console.log(err) : console.log('Success!')
        );
    });