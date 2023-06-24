const { test, expect } = require('@playwright/test');
const { ResellersPage } = require('../pageObjects/resellersPage');

test('Chat Bot Invalid Email Validation', async ({ page }) => {
  const resellersPage = new ResellersPage(page);
  await resellersPage.goto();
  await resellersPage.openChatBot();
  await resellersPage.click1stResponse();
  await resellersPage.click2ndResponse();
  await resellersPage.click3rdResponse();
  await resellersPage.click4thResponse();
  await resellersPage.enterEmail('mail-gmail.gr');
  await resellersPage.checkFinalResponse();
});
