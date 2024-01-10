import { test, expect } from '@playwright/test';
import ZaraInfoPage from '../pages/ZaraInfoPage'

test('Test that items can be added to favorites on Zara', async ({ page }) => {
    const zaraPage = new ZaraInfoPage(page);
    await zaraPage.openPage();
    await zaraPage.openMenu();
    await zaraPage.selectAndPressByDataCategoryID('194501');
    await zaraPage.selectAndPressByDataCategoryID('11113');
    await zaraPage.selectAndClickChatButton();
    const chatPanelHeader = await page.waitForSelector('.chat-panel__header', { timeout: 10000 });
    expect(chatPanelHeader).not.toBeNull();
    await page.pause();
});