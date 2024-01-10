import { test, expect } from '@playwright/test';
import test6 from "../RegressionTesting/test6";

test('Zara register test', async ({page}) => {
    const zaraPage = new test6(page);
    await zaraPage.openPage();
    await zaraPage.clickDropdown();
    await zaraPage.clickUnfoldCategory();
    await zaraPage.clickOnContactUs();
    await zaraPage.clickOnChat();
    await zaraPage.waitForPageLoad();
    await page.pause();

    // Assert that the current URL contains the expected path
    expect(await zaraPage.getCurrentUrl()).toContain('https://www.zara.com/ba/en/error/invalid-session');
})