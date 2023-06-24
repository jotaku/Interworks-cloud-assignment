/// <reference types="cypress" />

import { ResellersPage } from '../pageObjects/resellersPage';

describe('Resellers page tests', () => {
  const resellersPage = new ResellersPage();

  beforeEach(() => {
    resellersPage.visit();
  });

  it('should have chatbot option', () => {});
});
