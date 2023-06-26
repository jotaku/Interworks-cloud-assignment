/// <reference types="cypress" />

import ResellersPage from '../pageObjects/resellersPage';

const targetUrl = 'https://resellers.interworks.cloud/';
const invalidEmail = 'mail-gmail.gr';

describe('Chat Bot Invalid Email Validation', () => {
  const resellersPage = new ResellersPage();

  it.skip('Should validate invalid email', () => {
    resellersPage.visit(targetUrl);
    resellersPage.openChatBot();
    resellersPage.clickResponse(
      'I wanna talk about something else😀 - Reply as a response to Hiya! Nice seeing ya! Wanna find out the benefits of partnering up with us?'
    );
    resellersPage.clickResponse(
      'The weather - Reply as a response to Pick another subject! ☺️'
    );
    resellersPage.clickResponse(
      'I need more info 🤔 - Reply as a response to Hey wanna join me up on the clouds?'
    );
    resellersPage.clickResponse(
      'ok ☺️ - Reply as a response to I can arrange a call from our Partner Account Managers to give you all the insights you need to grow your business! Sounds like a plan?'
    );
    resellersPage.enterEmail(invalidEmail);
    resellersPage.checkFinalResponse();
  });
});
