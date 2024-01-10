import { test, expect } from '@playwright/test';
import ZaraLoginPage from '../pages/ZaraLoginPage';

test('Zara login test', async ({page}) => {
    const zaraPage = new ZaraLoginPage(page);
    await zaraPage.openPage();
    await zaraPage.clickLogInButton();
    await zaraPage.inputEmail('smajlovic.hasan02@gmail.com');
    await zaraPage.inputPassword('Hasan123456789');
    await zaraPage.clickSecondLogInButton();
    await zaraPage.waitForPageLoad();

    // Add a small delay before making the assertion
    await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay as needed

    // Confirm the user is redirected to the correct page
    expect(await zaraPage.getCurrentUrl()).toContain('https://www.zara.com/ba/en/user/order');
    
})