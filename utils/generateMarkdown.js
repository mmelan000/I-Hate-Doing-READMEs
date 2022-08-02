// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log('renderLicenseBadge called')
  if (license === 'BSD-2'){return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'};
  if (license === 'BSD-3'){return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'};
  if (license === 'GNU'){return '[![License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'};
  if (license === 'MIT'){return '[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'};
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('renderLicenseLink called')
  if (license === 'BSD-2'){return '[BSD-2](https://opensource.org/licenses/BSD-2-Clause)'};
  if (license === 'BSD-3'){return '[BSD-3](https://opensource.org/licenses/BSD-3-Clause)'};
  if (license === 'GNU'){return '[GNU](https://www.gnu.org/licenses/gpl-3.0)'};
  if (license === 'MIT'){return '[MIT](https://opensource.org/licenses/MIT)'};
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 'blue'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data);
  const licenseSection = renderLicenseSection(data);
  console.log(`this is a test of ${badge} and ${licenseSection}`)

  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
