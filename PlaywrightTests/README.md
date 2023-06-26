# Interworks.cloud Test Challenge Using Playwright JS!

## Description

This project demonstrates how to automate the nterworks.cloud Test Challenge using Playwright JS. Playwright JS is a modern and reliable end-to-end testing library that provides a high-level API to automate web browsers.

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
npm playwright test
```

To run a specific test file (spec file), use the following command, replacing `testname` with the name of your test:

```bash
npx playwright test appsPageTests.spec.js
npx playwright test resellersPageTests.spec.js
```

## Test Files Description

### appsPageTests.spec.js

This script contains two test cases written with the Playwright testing library, both focusing on validating the correct redirection to an expected URL when interacting with certain elements on a webpage.

#### Dependencies and Constants

The test and expect functions from the `@playwright/test` library, and the `AppsPage` class from a local `pageObjects` module are imported. Three constants are defined: `targetUrl`, `searchTerm`, and `expectedHref`, which represent the URL of the page under test, a search term to be used in the tests, and the expected destination URL, respectively.

#### Test Case 1: Correct Redirection for Additional Information (Solution #1 verify the href property)

> The test case function is defined asynchronously, receiving an object argument with the `page` and `context` properties, representing a new browser context and an associated new page instance.
>
> The `AppsPage` instance `appsPage` is constructed, passing the `page` instance, allowing operations on the page. Then the page context is set to include any cookies retrieved by the `getCookies` method.
>
> he test navigates to the `targetUrl`, conducts a search with the `searchTerm`, and triggers a click action on the "View Plans" button. Then it retrieves the `href` attribute from the "Learn More" button on the "Microsoft 365 Business Overview Add-ons" section.
>
> The `expect` assertion verifies that the `href` value matches the `expectedHref`.

#### Test Case 2: Correct Redirection for Additional Information (Solution #2 switch to the new tab, and verify the redirected URL)

> This test case follows a similar flow to the first, initializing an `AppsPage` instance, setting the page context with cookies, navigating to the `targetUrl`, conducting a search, and clicking the "View Plans" button.
>
> It then clicks the "Overview" button and subsequently clicks the "Learn More" button. The latter action should open a new page. This new page opening event and the click action are performed concurrently using `Promise.all`.
>
> The URL of the newly opened page is then compared against the `expectedHref` using an `expect` assertion.
>
> In both test cases, if the actual and expected URLs match, the test will pass, indicating that the page redirects correctly. If they do not match, the test will fail, flagging a potential issue in the redirection functionality.

### resellersPageTests.spec.js

This test case, named 'Chat Bot Invalid Email Validation', is designed to verify whether a chatbot on a webpage correctly handles and validates input of an invalid email address. The engineering breakdown of this script is as follows:

#### Dependencies and Constants

The test and expect functions are imported from the `@playwright/test` module, and the `ResellersPage` class from a local module `pageObjects`. Two constants are defined, `targetUrl` and `invalidEmail`, which represent the URL of the webpage under test and an invalid email string to be used in the test, respectively.

#### Test Case: Chat Bot Invalid Email Validation

> The test case is an asynchronous function that receives an object with a `page` property, representing a new page instance in a new browser context created by Playwright.
>
> An instance of `ResellersPage` is constructed, passing the `page` instance to the constructor, enabling the `ResellersPage` instance to perform operations on the page.
>
> The page is navigated to `targetUrl` by invoking the `goto` method.
>
> The `openChatBot` method is invoked to initiate the chatbot interface on the webpage.
>
> The methods `click1stResponse`, `click2ndResponse`, `click3rdResponse`, and `click4thResponse` are sequentially invoked. These methods likely simulate user interactions with the chatbot, though the specifics of these interactions depend on the implementations of these methods within the `ResellersPage` class.
>
> The `enterEmail` method is invoked with the `invalidEmail` string as an argument, presumably to input this string into an email input field in the chatbot.
>
> Finally, the `checkFinalResponse` method is invoked. This method is verifying the chatbot's final response when provided with an invalid email address. This involves checking whether an appropriate error message is displayed usinf the `expect` function to compare actual and expected outcomes.

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

## License

MIT
