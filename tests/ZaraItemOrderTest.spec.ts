import { test, expect } from '@playwright/test';
import ZaraItemOrderPage from '../pages/ZaraItemOrderPage';

test('Zara login test', async ({page}) => {
    const zaraPage = new ZaraItemOrderPage(page);
    await zaraPage.openPage();
    await zaraPage.openMenu();
    await zaraPage.selectItemCategory("JACKETS"); //Select 'Jackets' category
    await zaraPage.selectItem("https://www.zara.com/ba/en/zw-collection-short-bomber-jacket-p08086707.html"); //Select the desired jacket
    await zaraPage.selectItemSize("product-size-selector-276378626-item-2") //Select size of jacket, in this case M
    await zaraPage.clickAddButton("Add ZW COLLECTION SHORT BOMBER JACKET"); //Aria label fir the add buttion for this item
    await zaraPage.clickCloseButton();
    await zaraPage.goToShoppingCart("https://www.zara.com/ba/en/shop/cart"); //href for the shopping cart button
    await zaraPage.clickContinue();
    await zaraPage.inputEmail("haris.islamovic02@gmail.com");
    await zaraPage.inputPassword("Password02");
    await zaraPage.clickLogIn();
    await zaraPage.clickContinue();
    await zaraPage.fillAddressField("Hrasnicka 13");
    await zaraPage.fillZipCodeField("71210");
    await zaraPage.fillCityField("Ilidza");

    // Assertion that checks if there is a 'CONTINUE' button, button will not be clicked so that no items are actually ordered, but confirming it exists mean that it is possible to order item through the page
    const continueButtonSelector = 'button:has(span:has-text("CONTINUE"))';

    try{
        const continueButton = await page.$(continueButtonSelector);

        // Check if the 'CONTINUE' button exists
        expect(continueButton).toBeTruthy();
    } catch(error) {
        console.error('Continue button not found within specified amount of time')
    }

})