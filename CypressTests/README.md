# Interworks.cloud Test Challenge Using Cypress 🚀

Welcome! This README file gives you an overview, instructions, and tips on running Cypress UI tests for the www-ui application.

## Overview 🌐

Cypress is a popular end-to-end testing framework for web applications. It allows developers to write, run, and debug tests for frontend code easily and efficiently. Cypress provides a set of APIs and tools to support browser automation, real-time reloading, and time-traveling, making UI testing a breeze.

## Prerequisites 💻

Before running the tests, make sure your system meets the following requirements:

- Node.js 12+ (preferably the latest LTS version)
- npm
- Operating System: Cypress is compatible with macOS, Linux, and Windows.

## Setup 📦

To start using this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/jotaku/Interworks-cloud-assignment.git
cd Interworks-cloud-assignment/CypressTests/
npm install
```

## Running Tests

1. To run all tests in Headless mode, use the following command:

   ```
   npx cypress run
   ```

2. To run a specific test file in Headless mode, use the follow command:
   ```
   npx cypress run  --spec cypress/e2e/appsPageTests.js
   npx cypress run  --spec cypress/e2e/resellersPageTests.js
   ```

## Tips for Cypress 🖋️

- Tests are organized under `e2e` directory as `cy.js` test files.
