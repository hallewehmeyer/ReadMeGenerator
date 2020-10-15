// function to generate markdown for README

function generateMarkdown(response) {
  return `# ${response.title}
  [![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)
  ### $ Table of Contents
    -[Description](#description)
    -[Intstilation](#instilation)
    -[Usage](#usage)
    -[Contributors](#contributors)
    -[Test](#test)
    -[Questions](#questions)
  ### Description
    -${response.Description}
  ### Instilation
    -${response.Instilation}
  #### Usage
    -${response.Usage}
  #### Contributors
    -${response.Contributors}
  #### Test
    -${response.Test}
  ### Questions?
  If you have
    -${response.Questions}
  
`;
}

module.exports = generateMarkdown;
