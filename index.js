const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileREADME = util.promisify(fs.writeFile);

const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "project",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is a description of your project?",
    },
    {
      type: "input",
      name: "install",
      message: "What are the installation instructions for your project?",
    },
    {
      type: "input",
      name: "use",
      message: "What is the usage information for your project?",
    },
    {
      type: "input",
      name: "license",
      message:
        "What licensing are you utilizing for the project? (available choices: ISC, Mozilla, MIT)",
      choices: ["ISC", "Mozilla", "MIT"],
    },
    {
      type: "input",
      name: "contributing",
      message: "What is the overview of contributing guidelines?",
    },
    {
      type: "input",
      name: "contributing1",
      message: "What is the Github flow for pull requests?",
    },
    {
      type: "input",
      name: "contributing2",
      message: "What is the protocol for resolving bugs?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions for your project?",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address.",
    },
  ]);

questions()
  .then((data) => writeFileREADME("README.md", generateMD(data)))
  .then(() => console.log("completed"))
  .catch((err) => console.error(err));

function generateMD(data) {
  return `# ${data.project}
## Description
${data.description}
## Table of Contents

1. [Installation Guidelines](#installation-guidelines)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing to READMEGenerator](#contribute)
5. [Github Flow for Pull Requests](#contribute1)
6. [Resolving Bugs](#contribute2)
7. [Testing](#tests)
8. [Questions](#questions)




### Installation Guidelines <a id="installation-guidelines"></a>
${data.install}


### Description
${data.description}
### Usage <a id="usage"></a>
${data.use}
### License <a id="license"></a>
${data.license}
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
### Contributing to READMEGenerator <a id="contribute"></a>
${data.contributing}
### Github Flow for Pull Requests <a id="contribute1"></a>
${data.contributing1}
### Resolving Bugs <a id="contribute2"></a>
${data.contributing2}
### Testing <a id="tests"></a>
${data.tests}
### Questions <a id="questions"></a>
Github Username: ${data.github}
Email: ${data.email}
`;
}
module.exports = generateMD;
