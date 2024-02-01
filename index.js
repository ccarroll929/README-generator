// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
        validate: descriptInput => {
            if (descriptInput) {
                return true;
            } else {
                console.log('Please enter a description!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "How can others use this project?",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter your use instructions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter software installation info or commands needed to access your project",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
                return false;
            }
        }

    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project?",
        validate: contributerInput => {
            if (contributerInput) {
                return true;
            } else {
                console.log('Please enter contributer guidelines!');
                return false;
            }
        }
    },

    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter your use test instructions!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },

    // QUESTIONS section -- email address
    {
        type: "input",
        name: "email",
        message: "What is your GitHub email address that contributors may contact?",
        validate: function (value) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true;
            } else {
                return "Not a valid email address. Please enter a valid email address.";
            }
        },
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);

        console.log("Readme Generated! Go to readme.md to see it!")
    })
};

// TODO: Create a function to initialize app
function init() {console.log(`
=================
Welcome to the ReadMe Generator! 
Answer the following question prompts to feed information to the generator.
=================
`);

inquirer.prompt(questions)
.then(readmeData => {
    // console.log(readmeData);
    writeToFile("./utils/readme.md", generateMarkdown(readmeData))
})}

// Function call to initialize app
init();
