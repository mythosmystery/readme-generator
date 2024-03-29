// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const README_LINK = process.argv[2] || "output/README.md";
// TODO: Create an array of questions for user input
const questions = [
   "What is your name?",
   "What is your Github username?",
   "What is the title of your project?",
   "Please enter a description of your project: ",
   "Enter installation instructions for your project: ",
   "Enter usage information about your project: ",
   "Enter information about how to configure your project: ",
   "List the technologies used in your project: ",
   "Enter the guidelines for contributing to your project: ",
   "Enter guidelines for how to test your project: ",
   "What is your email?",
   "When was this project created?"
];
const names = ["name", "username", "title", "description", "install", "usage", "config", "tech", "contrib", "testing", "email", "date"];
const types = ["input", "input", "input", "input", "editor", "editor", "editor", "editor", "input", "input", "input", "input"];
const licenses =
{
   type: "list",
   message: "Choose the license for your project:",
   choices: ["Mozilla Public License", "Apache", "MIT", "Boost Software License", "Unlicense"],
   name: "license",
};

function getUserInput() {
   const prompts = [];
   for (let i = 0; i < questions.length; i++) {
      prompts.push({
         type: types[i],
         message: questions[i],
         name: names[i],
      });
   }
   prompts.push(licenses);
   inquirer.prompt(prompts).then((res) => {
      console.log(res);
      generateReadme(res);
   });
}
function generateReadme(data) {
   const readme = generateMarkdown(data);
   console.log(readme);
   writeFileAsync(README_LINK, readme)
      .then(() => console.log("write ok"))
      .catch((err) => console.error(err));
}
// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create a function to initialize app
function init() {
   getUserInput();
}
// Function call to initialize app
init();
