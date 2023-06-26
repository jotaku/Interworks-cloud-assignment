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

test('Chat Bot Invalid Email Validation2', async ({ page }) => {
  const resellersPage = new ResellersPage(page);

  await resellersPage.goto(targetUrl);
  await resellersPage.openChatBot();
  await resellersPage.selectResponse(
    'I wanna talk about something else😀 - Reply as a response to Hiya! Nice seeing ya! Wanna find out the benefits of partnering up with us?'
  );
  await resellersPage.selectResponse(
    'The weather - Reply as a response to Pick another subject! ☺️'
  );
  await resellersPage.selectResponse(
    'I need more info 🤔 - Reply as a response to Hey wanna join me up on the clouds?'
  );
  await resellersPage.selectResponse(
    'ok ☺️ - Reply as a response to I can arrange a call from our Partner Account Managers to give you all the insights you need to grow your business! Sounds like a plan?'
  );
  await resellersPage.enterEmail(invalidEmail);
  await resellersPage.checkFinalResponse();
});
