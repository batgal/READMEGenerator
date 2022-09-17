const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileREADME = util.promisify(fs.writeFile);

const generateMD = ({
  project,
  description,
  use,
  install,
  github,
  linkedin,
  license,
  contributing,
  contributing1,
  contributing2,
  tests,
}) =>
<li class="list-group-item"><a href="#installation">Installation</a></li>
      <li class="list-group-item"><a href="#usage">Usage</a></li>
      <li class="list-group-item"><a href="#license">License</a></li>
      <li class="list-group-item"><a href="#contributing">Contributing to READMEGenerator</a></li> 
      <li class="list-group-item"><a href="#contributing1">Github Flow for Pull Requests</a></li>
      <li class="list-group-item"><a href="#contributing2">Resolving Bugs</a></li>
      <li class="list-group-item"><a href="#test">Testing</a></li>
      <li class="list-group-item"><a href="#questions">Questions</a></li>
      
      
      <li class="list-group-item"><li class="list-group-item" id="installation"><h2>Installation Guidelines</h2>f</li>
      <li class="list-group-item"><li class="list-group-item" id="usage"><h2>Usage</h2>f</li>
      <li class="list-group-item"><li class="list-group-item" id="license"><h2>License</h2> f</a></li>
      <li class="list-group-item"><li class="list-group-item" 
      id="contributing"><h2>Contributing to READMEGenerator</h2>f</li><li class="list-group-item" id="contributing1"><h2>Github Flow for Pull Requests</h2>f</li><li class="list-group-item" id="contributing2"><h2>Resolving Bugs</h2>f</li></li>
      <li class="list-group-item" id="test"><h2>Testing</h2>f</li></li>
      <li class="list-group-item" id="questions"><h2>Questions</h2>My GitHub username is: f</a></li>
      <li class="list-group-item">LinkedIn: f</a></li></li>
   

inquirer
  .prompt([
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
      name: "linkedin",
      message: "Enter your LinkedIn URL.",
    },
  ])
  .then((answers) => {
    const READMEContent = generateMD(answers);

    fs.writeFile("README.md", READMEContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

questions(){
  .then((answers) => writeFileREADME("README.md", generateMD(answers)))
    .then(() => console.log("completed"))
    .catch((err) => console.error(err));
}

module.exports = generateMD;
