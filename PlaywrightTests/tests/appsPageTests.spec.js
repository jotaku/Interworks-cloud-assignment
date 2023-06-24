const { test, expect } = require('@playwright/test');
const { AppsPage } = require('../pageObjects/appsPage');

test('Correct Redirection for Additional Information (Solution #1 verify the href property)', async ({
  page,
  context,
}) => {
  const appsPage = new AppsPage(page);

  await context.addCookies([await appsPage.getCookies()]);
  await appsPage.goto();
  await appsPage.searchForMicrosoft365Business();
  await appsPage.clickViewPlans();
  const href =
    await appsPage.getMicrosoft365BusinessOverviewAddonsLearnMoreButton.getAttribute(
      'href'
    );

  expect(href).toBe(
    'https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9'
  );
});

test('Correct Redirection for Additional Information (Solution #2 switch to the new tab, and verify that the redirected URL)', async ({
  page,
  context,
}) => {
  const appsPage = new AppsPage(page);

  await context.addCookies([await appsPage.getCookies()]);
  await appsPage.goto();
  await appsPage.searchForMicrosoft365Business();
  await appsPage.clickViewPlans();
  await appsPage.clickOverview();

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await appsPage.clickLearnMore(),
  ]);

  expect(newPage.url()).toBe(
    'https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9'
  );
});
