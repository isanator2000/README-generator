// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Name your project.",
      },
      {
        type: "input",
        name: "description",
        message: "Describe the functionality of your project and why it's being created.",
      },
      {
        type: "input",
        name: "screenshot",
        message: "Provide the path of the image you want to use as a screenshot."
      },
      {
        type: "input",
        name: "link",
        message: "Provide a URL where your deployed application can be seen."
      },
      {
        type: "checkbox",
        name: "license",
        message: "Select a license for this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
      },
      {
        type: "input",
        name: "features",
        message: "Specify the features your project has (if any).",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Specify the languages or technologies used in this project.",
      },
      {
        type: "input",
        name: "creator",
        message: "Write your GitHub username.",
      },
      {
        type: "input",
        name: "email",
        message: "Write an email address.",
      },
      {
        type: "input",
        name: "contributors",
        message: "List all contributors. (Use GitHub usernames)",
        default: "",
      },
      {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
  }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("/dist/README.md", generateMarkdown({ ...responses }));
    });
  } 
  
// Function call to initialize app
init();
