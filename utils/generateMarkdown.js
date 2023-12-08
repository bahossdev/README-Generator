// Function that returns a license badge based on which license is passed in
// If N/A is selected, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if (license == 'GNU (GPL v3)') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  } else if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  } else {
    return '';
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license == 'Apache') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if (license == 'GNU (GPL v3)') {
    return '(https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'MIT') {
    return '(https://opensource.org/licenses/MIT)'
  } else {
    return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {

  // Function to capitalize words
  const capKey = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const licenseDetails = data.licenses.map(license => {
    return {
      badge: renderLicenseBadge(license),
      link: renderLicenseLink(license),
    }
  })

  //Creating the README content:
  return `${licenseDetails.map(license => `${license.badge}${license.link}`).join(' ')}
# ${data.title} \n

## Description:
${data.description}

## Table of Contents:
${Object.keys(data)
      .filter(key => (key !== 'title' && key !== 'extra' && key !== 'user' && data[key]))
      .map(key => `- [${capKey(key)}](#${key})  \n`)
      .join('')}

## Installation
${data.installation}

## Usage:
${data.usage}

## Licenses:
${data.licenses.includes('N/A') ? "This project is unlicensed." : "This project is licensed under the following:"}

${data.licenses
      .filter(license => license !== 'N/A')
      .map(license => `- [${license}]${renderLicenseLink(license)}`).join('\n')}

${data.technologies.length !== 0 ? `
## Technologies:
To create this app, I used the following technologies:
${data.technologies.map(tech => `- ${tech}`).join('\n')}
` : ``}

## Repository:
Here is the [link](${data.repository}) to the repository of this project:\n
- [${data.repository}](${data.repository})

${data.contributing.includes('Yes, sure!') ? `

## Contributing

Your contributions are always welcome! To get started, follow these steps:

1. Fork the repository to your GitHub account.

2. Clone your forked repository to your local machine, 
<pre>
  - git clone ${data.repository}
  - git checkout -b feature-name
  - git commit -m "Brief description of your changes"
  - git push origin feature-name
</pre>` : ``}

${data.extra !== '' ? `**Note:** ${data.extra}` : ``}


${data.tests !== '' ? `## Test:
To run tests, run the command: \n
 ${data.tests}` : ``}


${data.user !== '' ? `## Questions:
**My GitHub Profile:**  \n
https://github.com/${data.user}` : ``}

${data.questions !== '' ? `
If you have any questions, you can reach me @[${data.questions}](mailto:${data.questions})

Thank you! :)

` : ``}`
}

module.exports = generateMarkdown;


