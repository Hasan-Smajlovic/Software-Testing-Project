import { test, expect } from '@playwright/test';
import ZaraLoginPage from '../pages/ZaraSearchPageRegression7';

test('Test that searching items on Zara webpage works', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const zaraSearchPage = new ZaraLoginPage(page);

    await zaraSearchPage.navigateToZara();
    await zaraSearchPage.clickSearchBar();

    // Click "Man" category
    await zaraSearchPage.clickCategory('Man');

    // Assert that the "Man" category is selected
    const isManCategorySelected = await page.locator('button:has-text("Man").search-products-sections-bar__section-button--selected').isVisible();
    expect(isManCategorySelected).toBeTruthy(); // Verify Man category is selected

    // Click "Woman" category
    await zaraSearchPage.clickCategory('Woman');

    // Assert that the "Woman" category is selected
    const isWomanCategorySelected = await page.locator('button:has-text("Woman").search-products-sections-bar__section-button--selected').isVisible();
    expect(isWomanCategorySelected).toBeTruthy(); // Verify Woman category is selected

    // Click "Kids" category
    await zaraSearchPage.clickCategory('Kids');

    // Assert that the "Kids" category is selected
    const isKidsCategorySelected = await page.locator('button:has-text("Kids").search-products-sections-bar__section-button--selected').isVisible();
    expect(isKidsCategorySelected).toBeTruthy(); // Verify Kids category is selected

    await context.close();
});
