import { defineConfig } from 'cypress';
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://trello.com',
    specPattern: '**/e2e/**/*.ts',
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalInteractiveRunEvents: true,
    chromeWebSecurity: true,
    pageLoadTimeout: 180000,
  },
});
