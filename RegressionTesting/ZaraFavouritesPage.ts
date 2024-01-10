import {Page} from "playwright"

class ZaraFavouritesPage{
    click(arg0: string) {
        throw new Error('Method not implemented.');
    }
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async openPage(){
        await this.page.goto('https://www.zara.com/ba/en/');
        await this.page.waitForLoadState("domcontentloaded");
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    async openMenu() {
        const buttonSelector = '[aria-label="Open menu"]';

        await this.page.waitForSelector(buttonSelector);
        const button = await this.page.$(buttonSelector);

        if (button) {
            // Add a small timeout before clicking the button
            await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay as needed

            await button.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Button for menu not found.`);
        }
    }

    async selectItemCategory(text: string) {
        const linkSelector = `a span:has-text("${text}")`;
    
        await this.page.waitForSelector(linkSelector);
        const category = await this.page.$(linkSelector);
    
        if (category) {
            await category.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Link containing span with text "${text}" not found.`);
        }
    }

    async openSearchOption() {
        const itemLinkSelector = `a[href="https://www.zara.com/ba/en/search"]`;

        await this.page.waitForSelector(itemLinkSelector);
        const itemLink = await this.page.$(itemLinkSelector);

        if (itemLink) {
            await itemLink.click();
            await this.page.waitForLoadState('domcontentloaded');
            console.log(`Clicked item link with href "https://www.zara.com/ba/en/search".`);
            await this.page.keyboard.press('Enter');
        await this.page.waitForLoadState('domcontentloaded');
        console.log('Pressed Enter key.');
        } else {
            console.error(`Item link with href "https://www.zara.com/ba/en/search" not found.`);
        }
    }

    async selectItemByAlt(altText: string) {
        const itemSelector = `img[alt="${altText}"]`;
        const timeout = 10000;
    
        try {
            await this.page.waitForSelector(itemSelector, { timeout });
            const item = await this.page.$(itemSelector);
    
            if (item) {
                await item.click();
                await this.page.waitForLoadState('domcontentloaded');
                console.log(`Clicked item with alt "${altText}".`);
    
                // Delay the closing of the browser for 5 seconds (adjust as needed)
                await new Promise(resolve => setTimeout(resolve, 5000));
            } else {
                console.error(`Item with alt "${altText}" found, but unable to click.`);
            }
        } catch (error) {
            console.error(`Item with alt "${altText}" not found within the specified timeout.`);
        }
    }
    
    
    async selectButton(ariaLabelText: string) {
        const elementSelector = `[aria-label="${ariaLabelText}"]`;
    
        try {
            await this.page.waitForSelector(elementSelector);
            const element = await this.page.$(elementSelector);
    
            if (element) {
                await element.click();
                await this.page.waitForLoadState('domcontentloaded');
                console.log(`Clicked element with aria-label "${ariaLabelText}".`);
            } else {
                console.error(`Element with aria-label "${ariaLabelText}" found, but unable to click.`);
            }
        } catch (error) {
            console.error(`Element with aria-label "${ariaLabelText}" not found within the specified timeout.`);
        }
    }
    
    async inputEmail(email: string) {
        const emailLabelSelector = 'label:has-text("E-mail")';  // Adjust this selector
        await this.page.waitForSelector(emailLabelSelector);
        const emailField = await this.page.$(emailLabelSelector);

        if (emailField) {
            await emailField.fill(email);
        } else {
            console.error('Email field not found.');
        }
    }

    async inputPassword(password: string) {
        const passwordLabelSelector = 'label:has-text("Password")';  // Adjust this selector
        await this.page.waitForSelector(passwordLabelSelector);
        const passwordField = await this.page.$(passwordLabelSelector);

        if (passwordField) {
            await passwordField.fill(password);
        } else {
            console.error('Password field not found.');
        }
    }

    async clickLogIn() {
        const buttonSelector = `[data-qa-action="logon-form-submit"]`;

        await this.page.waitForSelector(buttonSelector);
        const buttonElement = await this.page.$(buttonSelector);

        if (buttonElement) {
            await buttonElement.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Button with data-qa-action "logon-form-submit" not found.`);
        }
    }

    async clickLogInButton() {
    
        const logInButtonSelector = 'a[href="https://www.zara.com/ba/en/logon"]';

        await this.page.waitForSelector(logInButtonSelector);

        const logInButton = await this.page.$(logInButtonSelector);

        if (logInButton) {
            await logInButton.click();
            // Optionally, you may want to wait for a specific condition after clicking the button
            await this.page.waitForLoadState("networkidle");
        } else {
            console.error('Log In button not found.');
        }
    }

    async clickSecondLogInButton() {
        // Use the class selector to find the second login button
        const secondLogInButtonSelector = '.zds-button.zds-button--secondary.zds-button--small';

        await this.page.waitForSelector(secondLogInButtonSelector);
        const secondLogInButton = await this.page.$(secondLogInButtonSelector);

        if (secondLogInButton) {
            await secondLogInButton.click();
            await this.page.waitForLoadState("networkidle");
        } else {
            console.error('Second Log In button not found.');
        }
    }
    
    async waitForPageLoad() {
        await this.page.waitForLoadState("domcontentloaded");
        
    }
}
export default ZaraFavouritesPage;
