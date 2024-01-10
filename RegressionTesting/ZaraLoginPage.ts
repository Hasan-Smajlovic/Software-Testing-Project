import { Page } from 'playwright';

export class ZaraLoginPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToZaraHomePage() {
        await this.page.goto('https://www.zara.com/ba/en/', { waitUntil: 'domcontentloaded' });
    }

    async clickLoginButton() {
        await this.page.click('text=LOG IN');
    }

    async enterEmail(email: string) {
        await this.page.fill('input.zds-input-base__input[name="logonId"][type="text"]', email);
    }

    async enterPassword(password: string) {
        await this.page.fill('input.zds-input-base__input[name="password"][type="password"]', password);
    }

    async clickLogin() {
        await this.page.click('div.zds-button__lines-wrapper >> text=LOG IN');
    }

    async isErrorMessageVisible() {
        return await this.page.isVisible('span:text("Enter a valid e-mail address.")');
    }

    async getErrorMessageText() {
        return await this.page.innerText('span:text("Enter a valid e-mail address.")');
    }
}
