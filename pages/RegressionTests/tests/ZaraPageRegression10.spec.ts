import { test, expect } from '@playwright/test';
import ZaraFavouritesPage from '../RegressionTesting/ZaraFavouritesPageRegressio10';

test('Test that items can be added to favorites on Zara', async ({ page }) => {
    const zaraPage = new ZaraFavouritesPage(page);
    await zaraPage.openPage();
    await zaraPage.openMenu();
    await zaraPage.selectItemCategory("JACKETS");
    await zaraPage.selectItemByAlt("ZW COLLECTION SHORT BOMBER JACKET - Stone by Zara - Image 0");
    await zaraPage.selectButton("Add item to the wish list");
    //await zaraPage.clickLogInButton();
    await zaraPage.inputEmail('kerim.veladzic1312@gmail.com');
    await zaraPage.inputPassword('Sarajevo1');
    await zaraPage.clickSecondLogInButton();
    await zaraPage.waitForPageLoad();
    const divText = await page.innerText('div:has-text("Item saved in Kerim\'s list")');
    expect(divText).toBe('Item saved in Kerim\'s list');
    await page.pause();
});
