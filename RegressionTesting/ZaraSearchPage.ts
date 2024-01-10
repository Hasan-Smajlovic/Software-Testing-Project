
import { Page } from 'playwright';

class ZaraSearchPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToZara(): Promise<void> {
        await this.page.goto('https://www.zara.com/ba/en/', { timeout: 60000 });
    }

    async clickSearchBar(): Promise<void> {
        await this.page.click('.layout-search-link__link');
    }

    async clickCategory(category: string): Promise<void> {
        await this.page.click(`button:text("${category}")`);
    }
}

export default ZaraSearchPage;