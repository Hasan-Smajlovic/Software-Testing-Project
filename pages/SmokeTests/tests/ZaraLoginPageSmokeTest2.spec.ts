import { test, expect } from '@playwright/test';
import ZaraLoginPage from "../pages/ZaraLoginPage2";

//test
test('Zara login test', async ({page}) => {
    const zaraPage = new ZaraLoginPage(page);
    await zaraPage.openPage();
    await zaraPage.clickLogInButton();
    await zaraPage.inputEmail('smajlovic.hasan02@gmail.com');
    await zaraPage.inputPassword('Hasan123456789');
    await zaraPage.clickSecondLogInButton();
    await zaraPage.waitForPageLoad();

    await page.pause();

    // Assert that the current URL contains the expected path
    expect(await zaraPage.getCurrentUrl()).toContain('https://www.zara.com/ba/en/error/invalid-session');

    await zaraPage.clickLogInButton();
    await zaraPage.inputEmail('smajlovic.hasan02@gmail.com');
    await zaraPage.inputPassword('Hasan123456789');
    await zaraPage.clickSecondLogInButton();
    await zaraPage.waitForPageLoad();

    await page.pause();

    // Assert that the current URL contains the expected path
    expect(await zaraPage.getCurrentUrl()).toContain('https://www.zara.com/ba/en/error/invalid-session');
})