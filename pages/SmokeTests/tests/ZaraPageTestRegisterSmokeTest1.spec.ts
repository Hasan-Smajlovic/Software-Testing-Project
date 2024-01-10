import { test, expect } from '@playwright/test';
import ZaraRegisterPage from "../pages/ZaraRegisterPage1";

test('Zara register test', async ({page}) => {
    const zaraPage = new ZaraRegisterPage(page);
    await zaraPage.openPage();
    await zaraPage.clickLogInButton();
    await zaraPage.clickRegisterButton();
    await zaraPage.inputEmail('faksfakss65@gmail.com');
    await zaraPage.inputPassword('Pasword123456789');
    await zaraPage.fillNameField('Mudja');
    await zaraPage.surname('Cale');
    await zaraPage.phonePrefix('+387');
    await zaraPage.phone('61413138');
    await zaraPage.checkPrivacyCheckbox();
    await zaraPage.clickCreateAccount();
    await zaraPage.waitForPageLoad();
    // await page.pause();

    // Assert that the current URL contains the expected path
    expect(await zaraPage.getCurrentUrl()).toContain('https://www.zara.com/ba/en/error/invalid-session');
})