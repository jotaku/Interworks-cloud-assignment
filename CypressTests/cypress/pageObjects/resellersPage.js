class ResellersPage {
  constructor() {}

  visit(targetUrl) {
    cy.visit(targetUrl);
  }

  openChatBot() {
    cy.frameLoaded('#drift-frame-controller');
    cy.iframe()
      .find(
        'button[aria-label="Open chat with CloudBot in the Drift Widget messenger - Unread messages: 1"]'
      )
      .click();
  }

  clickResponse(responseName) {
    cy.frameLoaded('iframe[title="Drift Widget Chat Window"]');
    cy.iframe().find(`button[aria-label="${responseName}"]`).click();
  }

  enterEmail(email) {
    cy.frameLoaded('iframe[title="Drift Widget Chat Window"]');
    cy.iframe().find('input[placeholder="Write a reply..."]').type(email);
    cy.iframe().find('button[aria-label="send message"]').click();
  }

  checkFinalResponse() {
    cy.frameLoaded('iframe[title="Drift Widget Chat Window"]');
    cy.iframe()
      .contains(
        "Sorry, I didn't understand that. I need a valid email address."
      )
      .should('be.visible');
  }

  getCookies() {
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
}

export default ResellersPage;
