/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      HandleUncaughtExp(): Chainable<Element>;
      Login(email:string, password: string): Chainable<Element>;
      CreateWorkSpace(text:string): Chainable<Element>;
      AddListA(text:string): Chainable<Element>;
      AddListB(text:string): Chainable<Element>;
      AddCardToListA(text:string): Chainable<Element>;
      AddCardToListB(text:string): Chainable<Element>;
      dragAndDrop(): Chainable<Element>;
      logOut(): Chainable<Element>;
    }
  }