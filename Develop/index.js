// array of questions for user


const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

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
             name: "description"
             
          },
          {
             type: "input",
             message:"How does the user properly launch this app",
             name: "instillation"
          },
          {
             type: "input",
             message:"How would you like your application to be used?",
             name: "usage"
          },
          {
             type: "input",
             message:"Were there any liscenses involved in this project?",
             name: "liscense"
          },
          {
             type: "input",
             message:"We're there other contributers to this project? If so, please include their GitHub usernames.",
             name: "contributing"
          },
          {
            type: "input",
            message:"How does the user test this app?",
            name: "test"
         },
         {
            type: "input",
            message:"Enter your github username and email if users have any questions regarding this application.",
            name: "questions"
         },
        ]);
      }
function generateMarkdown(response, data) {
    return `
# ${response.title}
# ${response.description}
# $ Table of Contents
  -Description
  -Intstilation
# ${response.instillation}
# ${response.usage}
# ${response.liscends}
# ${response.contributing}
# ${response.test}
# ${response.quetions}
`;
}
promptUser()
  .then(function(response) {
    const html = generateHTML(response);

    return writeFileAsync("readme.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to readme.md");
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
