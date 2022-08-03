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
// checks to see if there is a license, if so, adds section to ToC
function licenseCheck(license) {
  if (license === 'None'){return ''}
  return `7. [License](#license)` 
}
// renders license badge pulling from const licenses
function renderLicenseBadge(license) {
  if (license === 'None'){return ''}
  const filterLicense = licenses.find(element => element.name === license);
  return `[![License](${filterLicense.badge})](${filterLicense.url})`
}
// renders license link pulling from const licenses
function renderLicenseLink(license) {
  if (license === 'None'){return '';}
  const filterLicense = licenses.find(element => element.name === license);
  return `[${filterLicense.name}](${filterLicense.url})`;  
}
// renders license section if there is a license
function renderLicenseSection(license) {
  if (license === 'None'){return ''}
  return `
## License  

- ${renderLicenseLink(license)}  

`
}
// generates markdown, inserting passthough data into correct spots
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