export class AppsPage {
  visit() {
    cy.visit('https://apps.interworkscloud.com/');
  }

  getSearchTextBox() {
    return cy.get('#stext1');
  }

  getMagnifyingGlass() {
    return cy.get(
      '.d-none > .d-flex > .input-group > .input-group-prepend > .input-group-text > .btn > .material-icons'
    );
  }

  getMicrosoft365BusinessViewPlansButton() {
    return cy.get(
      ':nth-child(1) > .pt-4 > .product > .more-details > .row > .col-auto > .text-nowrap > div'
    );
  }

  getMicrosoft365BusinessOverviewSidebarOption() {
    return cy.get('[href="#view-overview"] > .d-flex');
  }

  getMicrosoft365BusinessOverviewAddonsLearnMoreButton() {
    return cy.get(':nth-child(2) > p > a');
  }
}
