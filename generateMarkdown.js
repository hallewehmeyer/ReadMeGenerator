// function to generate markdown for README

function generateMarkdown(response) {
  console.log(response);
  
  return `# ${response.title}
  [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)


  ### $ Table of Contents
  ### Description
    -${response.Description}
  ### Installation
    -${response.Installation}
  #### Usage
    -${response.Usage}
  #### Contributors
    -${response.Contributors}
  #### Test
    -${response.Test}
  ### Questions?
  -If you have any questions, you can reach me here:
  -GitHub: <https://github.com/${response.Github}>
  -Email: <a href="mailto:${response.Email}" target="_blank">${response.Email}</a>
  
`;
}

module.exports = generateMarkdown;
