const inquirer = require('inquirer');
const fs = require('fs');


const questions = [{
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'A description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'List installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'List usage instructions.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'What license is this project covered by?',
        choices: ['Apache License 2.0', 'MIT License'],
        name: 'license'
    },
];

function writeToFile(fileName, data) {

    fs.writeFile(`${fileName}.md`,
        `# ${data.title}
![](https://img.shields.io/badge/license-${data.license}-green?style=for-the-badge&logo=github)
## Description
${data.description}
## Table of Contents
[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Questions](#Questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
This project is covered under the ${data.license}.
## Contact
If you have any additional questions, contact me by email or GitHub.

Email: ${data.email}

GitHub: https://github.com/${data.github}`,
        (err) => err ? console.error(err) : console.log("Thanks you for your information, your README has been generated!")
    );
}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile(answers.title, answers);
    });
}
init();