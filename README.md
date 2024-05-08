# Final Project

Your README.md file should have:

This project uses the [ The Harvard Art Museums API](https://harvardartmuseums.org/collections/api) The Harvard Art Museums API

Technical documentation is here: [The Harvard Art Museums API Docs](https://github.com/harvardartmuseums/api-docs)

To obtain and apikey: [API Key](https://docs.google.com/forms/d/e/1FAIpQLSfkmEBqH76HLMMiCC-GPPnhcvHC9aJS86E32dOd0Z8MpY2rvQ/viewform)

Using a .env file paste your API key value using the following stucture:
```
HARVARD_API_KEY = "YOUR KEY HERE"

```

Clone this repository using SSH to your local source folder:
git@github.com:cscie114/csci-e-114-final-project-jsanta-cruz.git

Production site:
**https://josh-final.netlify.app/**

To run the project:
- Install the project using **npm install**
- If you do not have gatsby installed run: **npm install -g gatsby-cli**
- At the root level of the assignment directory, type the following at the command prompt:
**gatsby develop**

To ensure that GitHub actions are set up
- Review the node.js.yml file to see if you can run the commands
- The package.JSON has the commands included to build the project
- Ensure that your API Key that you are using to call the The Harvard Art Museums API is configured as a GitHub secret along with your NETLIFY_AUTH_TOKEN and NETLIFY_SITE_ID

Package.json includes these dependencies for the SlickJS carousel packages.
```
    "react-router-dom": "^6.23.0",
    "react-slick": "^0.30.2",
    "slick-carousel": "^1.8.1"
```
To run CI tests using Jest and ESLINT
- Install jest so that you can run the unit test locally
- Install eslint
- Install @testing-library/react
- Install @testing-library/jest-dom

To run Netlify CLI locally to see the serverless function
- Install  **npm install netlify-cli --save-dev**
- Login **npx netlify login** using your Netlify account
- Link Netlify CLI to your project **npx netlify link** as an authorized app
