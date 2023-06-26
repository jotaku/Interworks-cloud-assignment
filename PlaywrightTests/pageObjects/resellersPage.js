const { expect } = require('@playwright/test');

exports.ResellersPage = class ResellersPagePage {
  constructor(page) {
    this.page = page;

    this.chatBox = page
      .frameLocator('iframe[title="Drift Widget Chat Controller"]')
      .getByRole('button', {
        name: 'Open chat with CloudBot in the Drift Widget messenger - Unread messages: 1',
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

  async selectResponse(response) {
    await this.page
      .frameLocator('iframe[title="Drift Widget Chat Window"]')
      .getByRole('button', {
        name: `${response}`,
      })
      .click();
  }

  async click1stResponse() {
    await this.firstChatOption.click();
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
};
