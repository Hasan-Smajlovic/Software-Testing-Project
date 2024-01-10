import { test, expect } from '@playwright/test';
import ZaraCheckboxErrorRegression1 from "../pages/ZaraCheckboxErrorRegression1";

test('Zara register test', async ({page}) => {
    const zaraPage = new ZaraCheckboxErrorRegression1(page);
    await zaraPage.openPage();
    await zaraPage.clickLogInButton();
    await zaraPage.clickRegisterButton();
    await zaraPage.inputEmail('faksfakss65@gmail.com');
    await zaraPage.inputPassword('Pasword123456789');
    await zaraPage.fillNameField('Mudja');
    await zaraPage.surname('Cale');
    await zaraPage.phonePrefix('+387');
    await zaraPage.phone('61413138');
    await zaraPage.clickCreateAccount();
    await zaraPage.waitForPageLoad();
    await page.pause();

    // Assertion: Check if the Privacy Policy acceptance warning is visible
  await expect(page.locator('span:has-text("You must accept the Privacy Policy")')).toBeVisible();
});
