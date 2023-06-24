/// <reference types="cypress" />

import { AppsPage } from '../pageObjects/appsPage';

describe('Apps page tests', () => {
  const appsPage = new AppsPage();

  beforeEach(() => {
    appsPage.visit();
  });

  it('Correct Redirection for Additional Information (Solution #1 verify the href property) ', () => {
    appsPage
      .getSearchTextBox()
      .type('Microsoft 365 Business (New Commerce Experience)');

    appsPage.getMagnifyingGlass().click();

    appsPage.getMicrosoft365BusinessViewPlansButton().click();

    appsPage.getMicrosoft365BusinessOverviewSidebarOption().click();

    appsPage
      .getMicrosoft365BusinessOverviewAddonsLearnMoreButton()
      .should(
        'have.have.attr',
        'href',
        'https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9'
      );
  });

  it('Correct Redirection for Additional Information (Solution #2 request its contents)', () => {
    appsPage
      .getSearchTextBox()
      .type('Microsoft 365 Business (New Commerce Experience)');

    appsPage.getMagnifyingGlass().click();

    appsPage.getMicrosoft365BusinessViewPlansButton().click();

    appsPage.getMicrosoft365BusinessOverviewSidebarOption().click();

    appsPage
      .getMicrosoft365BusinessOverviewAddonsLearnMoreButton()
      .then(function ($a) {
        const href = $a.prop('href');

        // request the contents of https://www.google.com/
        cy.request(href)

          // drill into the response body
          .its('body')

          // Because we don't control this site - I don't feel
          // comfortable making any kind of assertions
          // on the response body other than site having a closing <html> tag.
          //
          // You will notice that this test still goes much
          // slower than the others and it requires internet access.
          .should('include', '</html>');
      });
  });

  // it('Correct Redirection for Additional Information (Solution #3 remove attribute target="_blank" and click through to the external domain) ', () => {
  //   appsPage
  //     .getSearchTextBox()
  //     .type('Microsoft 365 Business (New Commerce Experience)');

  //   appsPage.getMagnifyingGlass().click();

  //   appsPage.getMicrosoft365BusinessViewPlansButton().click();

  //   appsPage.getMicrosoft365BusinessOverviewSidebarOption().click();

  //   appsPage
  //     .getMicrosoft365BusinessOverviewAddonsLearnMoreButton()
  //     .invoke('removeAttr', 'target')
  //     .click();

  //   cy.url().should(
  //     'include',
  //     'https://www.microsoft.com/en-us/microsoft-teams/microsoft-teams-phone#office-StandaloneSKU-pkdogb9'
  //   );
  // });
});
