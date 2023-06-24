const { expect } = require('@playwright/test');

exports.AppsPage = class AppsPage {
  constructor(page) {
    this.page = page;
    this.getSearchTextBox = page.locator('#stext1');
    this.getMagnifyingGlass = page.locator(
      '.d-none > .d-flex > .input-group > .input-group-prepend > .input-group-text > .btn > .material-icons'
    );
    this.getMicrosoft365BusinessViewPlansButton = page.locator(
      ':nth-child(1) > .pt-4 > .product > .more-details > .row > .col-auto > .text-nowrap > div'
    );
    this.getMicrosoft365BusinessOverviewSidebarOption = page.locator(
      '[href="#view-overview"] > .d-flex'
    );
    this.getMicrosoft365BusinessOverviewAddonsLearnMoreButton = page.locator(
      ':nth-child(2) > p > a'
    );
  }

  async goto() {
    await this.page.goto('https://apps.interworkscloud.com/');
  }

  async searchForMicrosoft365Business() {
    await this.getSearchTextBox.type(
      'Microsoft 365 Business (New Commerce Experience)'
    );
    await this.getMagnifyingGlass.click();
  }

  async clickViewPlans() {
    await this.getMicrosoft365BusinessViewPlansButton.click();
  }

  async clickOverview() {
    await this.getMicrosoft365BusinessOverviewSidebarOption.click();
  }

  async clickLearnMore() {
    await this.getMicrosoft365BusinessOverviewAddonsLearnMoreButton.click();
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
