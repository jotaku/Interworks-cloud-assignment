const { test, expect } = require('@playwright/test');
const { ResellersPage } = require('../pageObjects/resellersPage');

const targetUrl = 'https://resellers.interworks.cloud/';
const invalidEmail = 'mail-gmail.gr';

test('Chat Bot Invalid Email Validation', async ({ page }) => {
  const resellersPage = new ResellersPage(page);

  await resellersPage.goto(targetUrl);
  await resellersPage.openChatBot();
  await resellersPage.click1stResponse();
  await resellersPage.click2ndResponse();
  await resellersPage.click3rdResponse();
  await resellersPage.click4thResponse();
  await resellersPage.enterEmail(invalidEmail);
  await resellersPage.checkFinalResponse();
});
