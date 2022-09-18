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
      message: "What licensing are you utilizing for the project?",
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
## Installation Guidelines
${data.install}
## Usage
${data.use}
## License
${data.license}
## Contributing to READMEGenerator
${data.contributing}
## Github Flow for Pull Requests
${data.contributing1}
## Resolving Bugs
${data.contributing2}
## Testing
${data.tests}
## Questions
Github Username: ${data.github}
Email: ${data.email}
`;
}
module.exports = generateMD;
