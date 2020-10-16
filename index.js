// array of questions for user


const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generate = require("./generateMarkdown.js");
function promptUser() {
  return inquirer.prompt([
    
          {
             type: "input",
             message:"What is the name of your project?",
             name: "title"
          },
          {
             type: "input",
             message:"Give a brief description of your project.",
             name: "Description"
             
          },
          {
             type: "input",
             message:"How does the user properly launch this app",
             name: "Installation"
          },
          {
             type: "input",
             message:"How would you like your application to be used?",
             name: "Usage"
          },
          {
             type: "input",
             message:"Were there any liscenses involved in this project?",
             name: "Liscense"
          },
          {
             type: "input",
             message:"We're there other contributors to this project? If so, please include their GitHub usernames.",
             name: "Contributors"
          },
          {
            type: "input",
            message:"How does the user test this app?",
            name: "Test"
         },
         {
            type: "input",
            message:"Enter your github username",
            name: "Github"
         },
         {
            type: "input",
            message:"Enter your email",
            name: "Email"
         }
        ]);
      }

promptUser()
  .then(function(response) {
    const md = generate(response);

    return writeFileAsync("readme2.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to readme2.md");
  })
  .catch(function(err) {
    console.log(err);
  });


// // function to write README file
// function writeToFile(response, data) {
// }

// // function to initialize program
// async function init() {
//     await 

// }

// // function call to initialize program
// init();
