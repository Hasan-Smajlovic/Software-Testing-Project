import {Page} from "playwright"

class ZaraItemOrderPage{
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

    async selectItem(href: string) {
        const itemLinkSelector = `a[href="${href}"]`;

        await this.page.waitForSelector(itemLinkSelector);
        const itemLink = await this.page.$(itemLinkSelector);

        if (itemLink) {
            await itemLink.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Item link with href "${href}" not found.`);
        }
    }

    async selectItemSize(itemId: string) {
        const listItemSelector = `li[id="${itemId}"]`;

        await this.page.waitForSelector(listItemSelector);
        const listItem = await this.page.$(listItemSelector);

        if (listItem) {
            await listItem.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`List item with id "${itemId}" not found.`);
        }
    }

    async clickAddButton(ariaLabel: string) {
        const buttonSelector = `[aria-label="${ariaLabel}"]`;

        await this.page.waitForSelector(buttonSelector);
        const button = await this.page.$(buttonSelector);

        if (button) {
            await button.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Button with aria-label "${ariaLabel}" not found.`);
        }
    }

    async goToShoppingCart(href: string) {
        const linkSelector = `a[href="${href}"]`;

        await this.page.waitForSelector(linkSelector);
        const link = await this.page.$(linkSelector);

        if (link) {
            await link.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Link with href "${href}" not found.`);
        }
    }

    async clickContinue() {
        const spanSelector = `span:has-text("CONTINUE")`;

        await this.page.waitForSelector(spanSelector);
        const spanElement = await this.page.$(spanSelector);

        if (spanElement) {
            await spanElement.click();
            await this.page.waitForLoadState('domcontentloaded');
        } else {
            console.error(`Span with text "CONTINUE" not found.`);
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

    async fillAddressField(address: string) {
        const addressFieldSelector = 'input[name="addressLines[0]"]';

        await this.page.waitForSelector(addressFieldSelector);
        const addressField = await this.page.$(addressFieldSelector);

        if (addressField) {
            await addressField.fill(address);
        } else {
            console.error('Address field not found.');
        }
    }

    async fillZipCodeField(zipCode: string) {
        const zipCodeFieldSelector = 'input[name="zipCode"]';

        await this.page.waitForSelector(zipCodeFieldSelector);
        const zipCodeField = await this.page.$(zipCodeFieldSelector);

        if (zipCodeField) {
            await zipCodeField.fill(zipCode);
        } else {
            console.error('Zip code field not found.');
        }
    }

    async fillCityField(city: string) {
        const cityFieldSelector = 'input[name="city"]';

        await this.page.waitForSelector(cityFieldSelector);
        const cityField = await this.page.$(cityFieldSelector);

        if (cityField) {
            await cityField.fill(city);
        } else {
            console.error('City field not found.');
        }
    }

    async clickCloseButton() {
        const closeButtonSelector = '[aria-label="close"]';

        await this.page.waitForSelector(closeButtonSelector);
        const closeButton = await this.page.$(closeButtonSelector);

        if (closeButton) {
            await closeButton.click();
        } else {
            console.error('Close button not found.');
        }
    }
}

export default ZaraItemOrderPage;