const { test, expect } = require('@playwright/test');
const { AppsPage } = require('../pageObjects/appsPage');

const targetUrl = 'https://apps.interworkscloud.com/';
const searchTerm = 'Microsoft 365 Business (New Commerce Experience)';
const expectedHref =
  'https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9';

test('Correct Redirection for Additional Information (Solution #1 verify the href property)', async ({
  page,
  context,
}) => {
  const appsPage = new AppsPage(page);

  await context.addCookies([await appsPage.getCookies()]);
  await appsPage.goto(targetUrl);
  await appsPage.searchForMicrosoft365Business(searchTerm);
  await appsPage.clickViewPlans();
  const href =
    await appsPage.microsoft365BusinessOverviewAddonsLearnMoreButton.getAttribute(
      'href'
    );

  expect(href).toBe(expectedHref);
});

test('Correct Redirection for Additional Information (Solution #2 switch to the new tab, and verify the redirected URL)', async ({
  page,
  context,
}) => {
  const appsPage = new AppsPage(page);

  await context.addCookies([await appsPage.getCookies()]);
  await appsPage.goto(targetUrl);
  await appsPage.searchForMicrosoft365Business(searchTerm);
  await appsPage.clickViewPlans();
  await appsPage.clickOverview();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await appsPage.clickLearnMore(),
  ]);

  expect(newPage.url()).toBe(expectedHref);
});
