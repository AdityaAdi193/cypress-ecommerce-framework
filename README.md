# Cypress E-Commerce Automation Framework

A beginner-friendly end-to-end UI automation project using **Cypress, JavaScript, TypeScript, Node.js, and npm**. It uses the public SauceDemo demo store for practice.

## Features

- Login tests: valid login, invalid password, missing username
- Shopping cart tests: add item, remove item, continue shopping
- Checkout journey using demo data
- Page Object Model (POM) for reusable login actions
- JavaScript and TypeScript test examples in one project
- Assertions, screenshots, and Cypress video capture in CLI runs
- Separate npm commands to run JavaScript or TypeScript specs

## Tech stack

- Cypress
- JavaScript (CommonJS)
- TypeScript
- Node.js and npm
- Visual Studio Code

## Prerequisites

1. Install the current Node.js LTS release from https://nodejs.org/
2. Install Visual Studio Code from https://code.visualstudio.com/
3. Confirm Node.js and npm are available:

   ```bash
   node -v
   npm -v
   ```

## Setup

1. Download and extract this repository ZIP.
2. Open the extracted `cypress-ecommerce-framework` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Install project dependencies:

   ```bash
   npm install
   ```

5. Verify Cypress:

   ```bash
   npx cypress verify
   ```

## Run the tests

Open Cypress Test Runner:

```bash
npm run cy:open
```

Choose **E2E Testing**, select a browser, and click a spec file.

Run all specs in headless mode:

```bash
npm run cy:run
```

Run JavaScript specs only:

```bash
npm run test:js
```

Run TypeScript specs only:

```bash
npm run test:ts
```

Run in Chrome (Chrome must be installed):

```bash
npm run cy:chrome
```

## Project structure

```text
cypress-ecommerce-framework/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── shopping-cart.cy.js
│   │   └── typescript-login.cy.ts
│   ├── pages/
│   │   └── LoginPage.js
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Demo credentials

For the public demo site https://www.saucedemo.com/:

- Username: `standard_user`
- Password: `secret_sauce`

These are public demo credentials, not personal credentials. The demo site is external and can change, so verify selectors and expected messages if a test fails.

## Screenshots and videos

Cypress saves screenshots for failures during headless runs under `cypress/screenshots/`. Video capture is enabled in the configuration; CLI run videos are saved under `cypress/videos/`. These generated folders are excluded from Git by `.gitignore`.

## Troubleshooting

- **`npm` is not recognized:** install Node.js LTS, restart VS Code, and retry `node -v` and `npm -v`.
- **`Cannot find name 'describe'`:** check that Cypress is installed, the test file ends in `.cy.ts`, `tsconfig.json` includes `cypress/**/*.ts`, and `types` contains `cypress`. Then run **TypeScript: Restart TS Server** from the VS Code Command Palette.
- **Cypress binary missing:** run `npx cypress install` followed by `npx cypress verify`.
- **No tests found:** check the filenames and `specPattern` in `cypress.config.js`.
- **Element not found or assertion fails:** open SauceDemo in a browser, confirm the site is available, and verify the current selector and expected message.

## GitHub upload

From the project folder:

```bash
git init
git add .
git commit -m "Add Cypress e-commerce automation framework"
```

Create an empty repository on GitHub, then follow GitHub's instructions to add the remote and push the project. Do not commit `node_modules`, personal credentials, or generated test artifacts.

## Resume project description

**Cypress E-Commerce Automation Framework | Cypress, JavaScript, TypeScript, Node.js**

- Built a reusable end-to-end automation framework using Cypress and the Page Object Model.
- Automated login, negative authentication, shopping cart, and checkout scenarios.
- Added reusable page methods, assertions, screenshot capture, and separate JavaScript/TypeScript test suites.
- Configured Cypress execution for interactive and headless regression runs.

Only claim features you have run and can explain in an interview.
