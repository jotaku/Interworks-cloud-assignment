export class ResellersPage {
  visit() {
    cy.visit('https://resellers.interworks.cloud/');
  }

  getChatBot() {
    return cy.get('//*[@id="root"]/main/div[3]/div[1]/div[1]/div/div');
  }
}
