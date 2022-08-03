const licenses = [
  {
    name: 'BSD-2', 
    badge: 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg',
    url: 'https://opensource.org/licenses/BSD-2-Clause'
  },
  {
    name: 'BSD-3', 
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    url: 'https://opensource.org/licenses/BSD-3-Clause'
  },
  {
    name: 'GNU', 
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    url: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    name: 'MIT', 
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    url: 'https://opensource.org/licenses/MIT'
  },
]

function licenseCheck(license) {
  if (license === 'None'){return ''}
  return `7. [License](#license)` 
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'None'){return ''}
const filterLicense = licenses.find(element => element.name === license);
return `[![License](${filterLicense.badge})](${filterLicense.url})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){return '';}
  const filterLicense = licenses.find(element => element.name === license);
  return `[${filterLicense.name}](${filterLicense.url})`;  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){return ''}
  return `
## License  

- ${renderLicenseLink(license)}  

`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}  
${renderLicenseBadge(data.license)}  

## Description  

${data.description}  

## Table of Contents  
1. [Description](#description)  
2. [Installation](#installation)  
3. [Usage](#usage)  
4. [Questions](#questions)  
5. [Contributing](#contributing)  
6. [Tests](#tests)  
${licenseCheck(data.license)}
## Installation  

${data.installation}  

## Usage  

${data.usage}  

## Contributing  

${data.contribution}  

## Tests  

${data.testing}  

## Questions  

If you have any questions, please reach out to me either ong Github or by Email.
  - **Github:** [${data.github}](https://github.com/${data.github})
  - **Email:** [${data.email}](mailto:${data.email})

${renderLicenseSection(data.license)}  
`;
}

module.exports = generateMarkdown;
