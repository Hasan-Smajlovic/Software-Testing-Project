import {Page } from "playwright"

class ZaraLoginPage {
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

export default ZaraLoginPage;