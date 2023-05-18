// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
}

// TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title} 
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed application
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Contents
  * [Features](#features)
  * [Languages and technologies](#languagesandtechnologies)
  * [How to use](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages and technologies
  ${data.require}
  ## How to use
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  If you have a question, send it [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  `;
  }

module.exports = generateMarkdown;
