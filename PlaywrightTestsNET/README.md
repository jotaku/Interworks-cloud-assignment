# Interworks.cloud Test Challenge Using Playwright .NET!

## Description

This project demonstrates the automation of the Interworks.cloud Test Challenge using Playwright .NET, a modern and reliable end-to-end testing library designed for .NET applications. It provides a high-level API to automate web browsers, bringing all benefits of the Playwright JavaScript library to the .NET ecosystem.

## Prerequisites 💻

Before running the tests, make sure your system meets the following requirements:

- .NET 7.0 12+ (preferably the latest LTS version)

## Setup

To start using this project, clone the repository and restore the dependencies:

```bash
git clone https://github.com/jotaku/Interworks-cloud-assignment.git
cd Interworks-cloud-assignment/PlaywrightTestsNET/
dotnet restore
```

## Running the Tests

To run all tests, use the command:

```bash
dotnet test
```

To run a specific `test class`, use the following command, replacing TestClass with the `name` of your test class:

```bash
dotnet test --filter appsPageTests.cs
dotnet test --filter resellerPageTests.cs
```

## Test Files Description

### AppsPageTests.cs

This script contains two test cases written with the Playwright .NET testing library, both focusing on validating the correct redirection to an expected URL when interacting with certain elements on a webpage.

#### Dependencies and Constants]

The `AppsPage` class, `IPlaywright`, `IBrowser`, `IBrowserContet`, and `IPage` interfaces from the Microsoft.Playwright namespace, and the `TestInitialize` and `TestMethod` attributes from `Microsoft.VisualStudio.TestTools.UnitTesting` are used. Three constants are defined: targetUrl, searchTerm, and expectedHref, which represent the URL of the page under test, a search term to be used in the tests, and the expected destination URL, respectively.

#### Test Case 1: VerifyHrefProperty

> This test navigates to the targetUrl, conducts a search with the searchTerm, and triggers a click action on the "View Plans" button. It then retrieves the href attribute from the "Learn More" button on the "Microsoft 365 Business Overview Add-ons" section. The Assert assertion verifies that the href value matches the expectedHref.

#### Test Case 2: VerifyRedirectedUrl

> This test case follows a similar flow to the first, navigating to the targetUrl, conducting a search, and clicking the "View Plans" button. It then clicks the "Overview" button and subsequently clicks the "Learn More" button. The latter action should open a new page. This new page opening event and the click action are performed concurrently using Promise.all. The URL of the newly opened page is then compared against the expectedHref using an Assert assertion.

### ResellersPageTests.cs

This test case, named 'ChatBotInvalidEmailValidationTest', is designed to verify whether a chatbot on a webpage correctly handles and validates the input of an invalid email address. The engineering breakdown of this script is as follows:

#### Dependencies and Constants

The `ResellersPage` class, `IBrowser`, and `IPage` interfaces from the `Microsoft.Playwright` namespace, `TestInitialize`, `TestMethod`, and `Ignore` attributes from Microsoft.VisualStudio.TestTools.UnitTesting are used. Two constants are defined, `TargetUrl` and `InvalidEmail`, which represent the URL of the webpage under test and an invalid email string to be used in the test, respectively.

#### Test Case: ChatBotInvalidEmailValidationTest

> This test case is an asynchronous function that creates a new page instance in a new browser context created by Playwright. It navigates to TargetUrl by invoking the Goto method. The methods ClickResponse are sequentially invoked. These methods simulate user interactions with the chatbot. The EnterEmail method is invoked with the InvalidEmail string as an argument, presumably to input this string into an email input field in the chatbot. The CheckFinalResponse method is invoked, which verifies the chatbot's final response when provided with an invalid email address. This involves checking whether an appropriate error message is displayed using the Assert function to compare actual and expected outcomes.

## Test Results

The results of the tests are shown in the console output. If a test fails, the console will display information about the failure.

## Why Playwright .NET?

Playwright .NET is a testing framework of choice for several reasons:

- It brings all the benefits of the Playwright JavaScript library to the .NET ecosystem, providing seamless integration with .NET applications.

- It supports all major web browsers, including Chrome, Firefox, Safari, and the new Microsoft Edge. This allows us to test our application across different browsers using the same tool.

- Playwright .NET supports mobile view testing, which is crucial as mobile users make up a significant portion of internet users.

- It can automate user interactions with the web application such as clicking buttons, entering text, and submitting forms, making it excellent for end-to-end testing.

- Playwright .NET runs tests efficiently and provides auto-wait for elements to be ready before executing actions, reducing the chances of flaky tests and improving reliability.

- It also supports testing different server responses and error conditions by intercepting network requests, and efficiently manages multiple browser contexts and pages, effectively handling various browser tabs.

- It supports iframe interactions, eliminating the need to switch contexts. This simplification of the selection process enhances the readability and maintainability of test scripts. Moreover, Playwright's auto-waiting mechanism ensures that the elements within the iframe are fully loaded before any interactions, greatly increasing the reliability of the tests.

## License

MIT
