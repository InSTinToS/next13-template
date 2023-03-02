import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    }
  },

  component: {
    specPattern: [
      './src/**/cy.{js,jsx,ts,tsx}',
      './src/**/*.cy.{js,jsx,ts,tsx}'
    ],
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
