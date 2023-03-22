export const trelloLocators:{ [key: string]: string } = {
   loginButton: 'a[href="/login"]',
   inputEmailId: 'input[id="user"]',
   continueButton: 'input[id="login"]',
   CreateButton: 'button[aria-label="Create board or Workspace"]',
   createBoard: 'button[data-testid="header-create-board-button"]',
   nameBoard: 'input[data-testid="create-board-title-input"]',
   createSubmitButton: 'button[data-testid="create-board-submit-button"]',
   listA: 'input[class="list-name-input"]',
   addList: 'input[value="Add list"]',
   cancelList:'a[aria-label="Cancel list editing"]',
   addAcard: 'span[class="js-add-a-card',
   textArea1: 'textarea[class="list-card-composer-textarea js-card-title"]',
   addCard1: 'input[value="Add card"]',
   textArea2: 'div[class="list-card-details u-clearfix"] textarea',
   addCard2: 'div[class="cc-controls-section"] input',
   dragCard: ':nth-child(1) > .list > .list-cards > .list-card > .list-card-details > .list-card-title',
   dropCard: ':nth-child(2) > .list > .list-cards',
   accountButton: 'button[aria-label="Open member menu"] span',
   logoutButton: 'button[data-testid="account-menu-logout"]'
  };
  