const { expect } = require('@playwright/test');

exports.AppsPage = class AppsPage {
  constructor(page) {
    this.page = page;
    this.searchTextBox = page.locator('#stext1');
    this.magnifyingGlass = page.locator(
      '.d-none > .d-flex > .input-group > .input-group-prepend > .input-group-text > .btn > .material-icons'
    );
    this.microsoft365BusinessViewPlansButton = page.locator(
      ':nth-child(1) > .pt-4 > .product > .more-details > .row > .col-auto > .text-nowrap > div'
    );
    this.microsoft365BusinessOverviewSidebarOption = page.locator(
      '[href="#view-overview"] > .d-flex'
    );
    this.microsoft365BusinessOverviewAddonsLearnMoreButton = page.locator(
      ':nth-child(2) > p > a'
    );
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async searchForMicrosoft365Business(searchString) {
    await this.searchTextBox.type(searchString);
    await this.magnifyingGlass.click();
  }

  async clickViewPlans() {
    await this.microsoft365BusinessViewPlansButton.click();
  }

  async clickOverview() {
    await this.microsoft365BusinessOverviewSidebarOption.click();
  }

  async clickLearnMore() {
    await this.microsoft365BusinessOverviewAddonsLearnMoreButton.click();
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
