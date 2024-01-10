import { test, expect } from '@playwright/test';
import ZaraHelp from '../pages/ZaraHelp';

test('Test that items can be added to favorites on Zara', async ({ page }) => {
    const zaraPage = new ZaraHelp(page);
    await zaraPage.openPage();
    await zaraPage.selectAndClickByDataQaId('notify-help-center-click');
    await zaraPage.selectAndClickSeeMoreLink();
    await zaraPage.selectAndClickPricingPolicyLink();
    const pageTitle = await page.textContent('.content-header__title');
    await expect(pageTitle).toBe('PRICING POLICY');
    await page.pause();
});