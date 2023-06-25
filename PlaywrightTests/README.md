# Project Title: Automated Testing Using Playwright JS

## Description

This project demonstrates how to automate the testing process of a web application using Playwright JS. Playwright JS is a modern and reliable end-to-end testing library that provides a high-level API to automate web browsers.

## Setup

To start using this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/jotaku/Interworks-cloud-assignment.git
cd Interworks-cloud-assignment/PlaywrightTests/
npm install
```

## Running the Tests

To run all tests, use the command:

```bash
npm test
```

To run a specific test file (spec file), use the following command, replacing `testname` with the name of your test:

```bash
npx playwright test appsPageTests.spec.js
npx playwright test resellersPageTests.spec.js
```

## Test Results and Videos

The results of the tests are stored in the `test-results` directory. If a test fails, a screenshot of the state at the failure point is saved in this directory.

Recorded videos of test runs can be found in the `test-videos` directory. These are particularly useful for understanding what happened in a test run when debugging.

## Why Playwright?

We chose Playwright as our testing framework for several reasons:

- Browser Support: Playwright supports all major web browsers including Chrome, Firefox, Safari and the new Microsoft Edge. This allows us to test our application across different browsers using the same tool.

- Mobile View Testing: Playwright allows emulating mobile devices and testing mobile views, which is critical as mobile users make up a large portion of internet users.

- Interactivity: Playwright can automate user interactions with the web application such as clicking buttons, entering text, and submitting forms, making it great for end-to-end testing.

- Speed and Efficiency: Playwright runs tests in parallel and in headless mode, leading to faster execution of tests.

- Reliability: With features such as auto-wait for elements to be ready before executing actions, Playwright reduces the chances of flaky tests and improves reliability.

- Network Interception: Playwright's ability to intercept network requests provides us the capability to test different server responses and error conditions.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
