const { expect } = require('@playwright/test');

exports.ResellersPage = class ResellersPagePage {
  constructor(page) {
    this.page = page;

    this.getChatBox = page
      .frameLocator('iframe[title="Drift Widget Chat Controller"]')
      .getByRole('button', {
        name: 'Open chat with CloudBot in the Drift Widget messenger - Unread messages: 1',
      });

    this.get1stChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'I wanna talk about something else😀 - Reply as a response to Hiya! Nice seeing ya! Wanna find out the benefits of partnering up with us?',
      });

    this.get2ndChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'The weather - Reply as a response to Pick another subject! ☺️',
      });

    this.get3rdChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'I need more info 🤔 - Reply as a response to Hey wanna join me up on the clouds?',
      });

    this.get4thChatOption = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: 'ok ☺️ - Reply as a response to I can arrange a call from our Partner Account Managers to give you all the insights you need to grow your business! Sounds like a plan?',
      });

    this.getChatBoxTextBox = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByPlaceholder('Write a reply...');

    this.getChatBoxSendButton = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', { name: 'send message' });

    this.getFinalResponse = page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByText(
        "Sorry, I didn't understand that. I need a valid email address."
      );
  }

  async goto() {
    await this.page.goto('https://resellers.interworks.cloud/');
  }

  async openChatBot() {
    await this.getChatBox.click();
  }

  async click1stResponse() {
    await this.get1stChatOption.click();
  }

  async click2ndResponse() {
    await this.get2ndChatOption.click();
  }

  async click3rdResponse() {
    await this.get3rdChatOption.click();
  }

  async click4thResponse() {
    await this.get4thChatOption.click();
  }

  async enterEmail(email) {
    await this.getChatBoxTextBox.fill(email);
    await this.getChatBoxSendButton.click();
  }

  async checkFinalResponse() {
    await expect(
      this.getFinalResponse.getByText(
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
