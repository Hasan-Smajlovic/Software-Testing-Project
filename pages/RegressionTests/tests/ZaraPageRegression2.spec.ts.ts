import { test, expect } from '@playwright/test';
import test2 from "../RegressionTesting/ZaraRegisterDataInvalidRegression2";

test('Verify Register with data that is invalid', async ({page}) => {
    const zaraPage = new test2(page);
    await zaraPage.openPage();
    await zaraPage.clickLogInButton();
    await zaraPage.clickRegisterButton();
    await zaraPage.inputEmail('faksfakss65LudoAmudja.com');
    await zaraPage.inputPassword('.-,$password#!"$');
    await zaraPage.fillNameField('Mudja');
    await zaraPage.surname('Cale');
    await zaraPage.phonePrefix('+387');
    await zaraPage.phone('61413138');
    await zaraPage.checkPrivacyCheckbox();
    await zaraPage.clickCreateAccount();
    await zaraPage.waitForPageLoad();
    await page.pause();

    // Assertion for the email validation error message
  const emailErrorMessage = page.locator('div[data-name="email"] .form-input-error');
  await expect(emailErrorMessage).toContainText('Enter a valid e-mail address.');

  // Assertion for the password validation error message
  const passwordErrorMessage = page.locator('div[data-name="password"] .form-input-error');
  await expect(passwordErrorMessage).toContainText('Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers.');

})