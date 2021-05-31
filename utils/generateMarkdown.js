// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license == "Mozilla Public License") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
   } else if (license == "Apache") {
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
   } else if (license == "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
   } else if (license == "Boost Software License") {
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
   } else if (license == "Unlicense") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
   }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return ` 
#  ${data.title}

### Project Created By: ${data.name}
## **Description**
${data.description}  
  
***
## **Table of Contents**
* [Installation](#installation)
* [Usage](#usage)
* [License](#license) 
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
***
  
## Installation 
${data.install}
  
## Usage
${data.usage}
  
## Configuring
${data.config}
  
## Contributing
${data.contrib}
If you would like to add to this project, you can [follow me on GitHub](https://github.com/${data.username}).  
  
## Tests
${data.testing}
  
## Questions:
If you have any questions about this project, you can reach me [on GitHub](https://github.com/${data.username})
or via email at ${data.email}.
  
## License
${data.license}
${renderLicenseBadge(data.license)}
  
**${data.title} created ${data.date}, by ${data.name}.** 
  `;
}

module.exports = generateMarkdown;
