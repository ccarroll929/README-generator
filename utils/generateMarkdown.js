// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badgeLabel = license.replace(" ", "&ensp;");
  return `
  [![Generic badge](https://img.shields.io/badge/License-${badgeLabel}-green.svg)](${renderLicenseLink(license)})
  `
};

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  let linkUrl = license.toLowerCase().replace(" ", "-");
  return `https://choosealicense.com/licenses/${linkUrl}/.`
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ''; 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license === "None") {
    return "";
  } else {

    return `
  ### Licensing 
  ${license}
  ${renderLicenseBadge(license)}
  `
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Title: ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 

## Description
  ${data.description}

## Installation
  ${data.installation}

## Usage
  ${data.usage}


##
${renderLicenseSection(data.license)}

## Contributing
  ${data.contributing}

  ## Questions
  Contact info:
  [GitHub Username](https://github.com/${data.username}) 
  </br>
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
