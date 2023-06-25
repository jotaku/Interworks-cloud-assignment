const { expect } = require('@playwright/test');

exports.ResellersPage = class ResellersPagePage {
  constructor(page) {
    this.page = page;

    this.chatBox = page
      .frameLocator('iframe[title="Drift Widget Chat Controller"]')
      .getByRole('button', {
        name: 'Open chat with CloudBot in the Drift Widget messenger - Unread messages: 1',
      });

    this.firstChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'I wanna talk about something else😀 - Reply as a response to Hiya! Nice seeing ya! Wanna find out the benefits of partnering up with us?',
      });

    this.seconddChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'The weather - Reply as a response to Pick another subject! ☺️',
      });

    this.thirdChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'I need more info 🤔 - Reply as a response to Hey wanna join me up on the clouds?',
      });

    this.fourthChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'ok ☺️ - Reply as a response to I can arrange a call from our Partner Account Managers to give you all the insights you need to grow your business! Sounds like a plan?',
      });

    this.chatBoxTextBox = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByPlaceholder('Write a reply...');

    this.chatBoxSendButton = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', { name: 'send message' });

    this.finalResponse = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByText(
        "Sorry, I didn't understand that. I need a valid email address."
      );
  }

  async goto(targetUrl) {
    await this.page.goto(targetUrl);
  }

  async openChatBot() {
    await this.chatBox.click();
  }

  async click1stResponse() {
    await this.firstChatOption.click();
  }

  async click2ndResponse() {
    await this.seconddChatOption.click();
  }

  async click3rdResponse() {
    await this.thirdChatOption.click();
  }

  async click4thResponse() {
    await this.fourthChatOption.click();
  }

  async enterEmail(email) {
    await this.chatBoxTextBox.fill(email);
    await this.chatBoxSendButton.click();
  }

  async checkFinalResponse() {
    await expect(
      this.finalResponse.getByText(
        "Sorry, I didn't understand that. I need a valid email address.",
        { exact: true }
      )
    ).toBeVisible();
  }

  async getCookies() {
    const cookies = [
      {
        name: 'WCSession_apps.interworkscloud.com_v4_CookieAcceptance',
        value: 'Accepted=1',
        path: '/',
        domain: 'apps.interworkscloud.com',
      },
    ];
    return cookies[0];
  }
};
