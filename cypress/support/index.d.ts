/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      HandleUncaughtExp(): Chainable<Element>;
      login(email:string, password: string): Chainable<Element>;
      createWorkSpace(text:string): Chainable<Element>;
      addListA(text:string): Chainable<Element>;
      addListB(text:string): Chainable<Element>;
      addCardToListA(text:string): Chainable<Element>;
      addCardToListB(text:string): Chainable<Element>;
      dragAndDrop(): Chainable<Element>;
      logOut(): Chainable<Element>;
    }
  }