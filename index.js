const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = ({
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
}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Project Title: ${project}</h1>
    <p class="lead">Description: ${description}</p>
    <h3>README <span class="badge badge-secondary">Generator</span></h3>
    <ul class="list-group"> <h2>Table of Contents</h2>
      <li class="list-group-item"><a href="#installation">Installation</a></li>
      <li class="list-group-item"><a href="#usage">Usage</a></li>
      <li class="list-group-item"><a href="#license">License</a></li>
      <li class="list-group-item"><a href="#contributing">Contributing to READMEGenerator</a></li> 
      <li class="list-group-item"><a href="#contributing1">Github Flow for Pull Requests</a></li>
      <li class="list-group-item"><a href="#contributing2">Resolving Bugs</a></li>
      
      
      <li class="list-group-item"><li class="list-group-item" id="installation"><h2>Installation Guidelines</h2>${install}</li>
      <li class="list-group-item"><li class="list-group-item" id="usage"><h2>Usage</h2>${use}</li>
      <li class="list-group-item"><li class="list-group-item" id="license"><h2>License</h2> ${license}</a></li>
      <li class="list-group-item"><li class="list-group-item" 
      id="contributing"><h2>Contributing to READMEGenerator</h2>${contributing}</li><li class="list-group-item" id="contributing1"><h2>Github Flow for Pull Requests</h2>${contributing1}</li><li class="list-group-item" id="contributing2"><h2>Resolving Bugs</h2>${contributing2}</li></li>
      <li class="list-group-item"><a href="#github">My GitHub username is ${github}</a></li>
      <li class="list-group-item"><a href="#linkedin">LinkedIn: ${linkedin}</a></li>
   
    </ul>
  </div>
</div>
</body>
</html>`;

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
      message: "What is the protocol for resolving bugs?",
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
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
