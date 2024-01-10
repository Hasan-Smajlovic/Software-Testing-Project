# Software-Testing-Project

Software Testing Project for university subject Software Testing and Requirements

# Zara Automated Tests

## Project's Title

Automated tests for Zara's website using Playwright and TypeScript, organized based on regression and smoke test scenarios.

## Project Description

This project automates regression and smoke tests for Zara's website using Playwright and TypeScript. The tests follow the Page Object Model (POM) design pattern for better maintainability and scalability.

## Table of Contents

- [How to Install and Run the Project](#how-to-install-and-run-the-project)
- [How to Use the Project](#how-to-use-the-project)
- [Credits](#credits)

## How to Install and Run the Project

Ensure you have Node.js and npm installed. Install project dependencies:

```bash
npm i playwright
npm init -y
npx playwright test

##Project Structure
Software-Testing-Project/
├── .github/
├── node_modules/
├── pages/
│   ├── ZaraLoginPage/
│   │   └── ZaraLoginPage.ts
│   ├── ZaraOrderingPage/
│   │   └── ZaraItemOrderPage3.ts
│   └── ZaraRegisterPage/
│       └── ZaraRegisterPage.ts
├── playwright-report/
├── RegressionTests/
│   ├── ZaraCheckboxErrorRegression1.ts
│   ├── ZaraFavouritesPageRegression10.ts
│   ├── ZaraLoginPageRegression3.ts
│   ├── ZaraLoginWithEmailErrorPageRegression4.ts
│   ├── ZaraRegisterDataInvalidRegression2.ts
│   └── ZaraSearchPageRegression7.ts
├── SmokeTests/
│   ├── ZaraFavoritesPageSmokeTest.spec.ts
│   ├── ZaraItemOrderSmokeTest3.spec.ts
│   ├── ZaraLoginPageSmokeTest.spec.ts
│   └── ZaraSearchPageSmokeTest.spec.ts
├── test-results/
├── tests/
│   ├── ZaraFavoritesPageRegression10.spec.ts
│   ├── ZaraItemOrderSmokeTest3.spec.ts
│   ├── ZaraLoginPageRegressionTest.spec.ts
│   ├── ZaraPageRegression1.spec.ts
│   ├── ZaraPageRegression2.spec.ts
│   ├── ZaraPageRegression3.spec.ts
│   ├── ZaraPageRegression4.spec.ts
│   ├── ZaraPageRegression7.spec.ts
│   ├── ZaraPageTest.ts
│   └── ZaraPageTestRegister.spec.ts
├── test-examples/
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
└── README.md
```
