import { test, expect } from '@playwright/test';
import { ZaraLoginPage } from '../pages/ZaraLoginPage';

test('Log in with invalid email address at Zara', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    // Create an instance of the ZaraLoginPage
    const zaraLoginPage = new ZaraLoginPage(page);

    // Step 1: Navigate to Zara's online page and wait for it to load
    await zaraLoginPage.navigateToZaraHomePage();

    // Step 2: Click on "Log in" button
    await zaraLoginPage.clickLoginButton();

    // Step 3: Enter invalid Email address
    await zaraLoginPage.enterEmail('g@m');

    // Step 4: Enter valid Password
    await zaraLoginPage.enterPassword('Amina123');

    await zaraLoginPage.clickLogin();

    // Check if the error message is available and capture it
    if (await zaraLoginPage.isErrorMessageVisible()) {
        const errorMessage = await zaraLoginPage.getErrorMessageText();
        console.log('Error Message: ', errorMessage);

        // Assertions
        expect(errorMessage).toContain('Enter a valid e-mail address.');
    } else {
        console.log('Error message did not appear');
    }

    // Close context
    await context.close();
});
