# Interworks.cloud Test Challenge: README 🚀

Welcome! This README file provides an overview, instructions, and guidance on running the automated tests for the Test Challenge using three different testing frameworks: Cypress.io, Playwright JS, and Playwright .NET.

## Overview 🌐

Each testing framework along with its respective instructions can be found inside the relevant subfolders in the README files.

## Solutions 📂

### Playwright JS

The Playwright JS solution meets all the requirements of the assignments:

- Test 1: Chat Bot Invalid Email Validation
- Test 2: Correct Redirection for Additional Information
- An accompanying {document](PlaywrightTests/README.md) offering a concise description of the scenarios, test code, and comprehensive execution instructions.
- Video Capture
- Cross-Browser Testing

### Playwright .NET

The Playwright .NET solution partially fulfills the requirements of the assignments due to Cloudflare protection (`HTTP status code 408, "Request Timeout"`)

- Test 1: Chat Bot Invalid Email Validation
- Test 2: Correct Redirection for Additional Information is skipped. A screenshot of the Cloudflare protection can be found at `PlaywrightTestsNET/CloudflareProtectionScreenshot.png`
- An accompanying [document](PlaywrightTestsNET/README.md) offering a concise description of the scenarios, test code, and comprehensive execution instructions.

### Cypress.io

The Cypress.io solution partially fulfills the requirements of the assignments due to Cloudflare protection (`HTTP status code 408, "Request Timeout"`)

- Test 1: Chat Bot Invalid Email Validation
- Test 2: Correct Redirection for Additional Information is skipped.
- An accompanying [document](CypressTests/README.md) offering a concise description of the scenarios, test code, and comprehensive execution instructions.

## Summary

Playwright is a preferred testing framework for several reasons:

- **Browser Support:** Playwright supports all major web browsers including Chrome, Firefox, Safari, and the new Microsoft Edge. This allows us to test our application across different browsers using the same tool.

- **Mobile View Testing:** Playwright allows emulating mobile devices and testing mobile views, which is critical as mobile users constitute a significant portion of internet users.

- **Interactivity:** Playwright can automate user interactions with the web application such as clicking buttons, entering text, and submitting forms, making it ideal for end-to-end testing.

- **Speed and Efficiency:** Playwright runs tests in parallel and in headless mode, resulting in faster execution of tests.

- **Reliability:** With features such as auto-wait for elements to be ready before executing actions, Playwright reduces the chances of flaky tests and improves reliability.

- **Network Interception:** Playwright's ability to intercept network requests allows us to test different server responses and error conditions.

- **Iframes:** Playwright supports the direct selection of elements within iframes, eliminating the need to switch contexts. This simplifies the selection process, enhancing the readability and maintainability of test scripts. Additionally, Playwright's auto-waiting mechanism ensures that the elements within the iframe are fully loaded before any interactions, greatly increasing the reliability of the tests.

- **Tabs:** Playwright offers a well-defined API that proficiently manages multiple browser contexts and pages, effectively handling various browser tabs. This API facilitates efficient creation, closure, and switching of tabs.
