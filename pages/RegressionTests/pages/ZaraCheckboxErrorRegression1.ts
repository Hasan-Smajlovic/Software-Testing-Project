import { Page } from "playwright";

class ZaraCheckBoxErrorRegression1 {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async openPage() {
    await this.page.goto("https://www.zara.com/ba/en/");
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
      console.error("Log In button not found.");
    }
  }

  async clickRegisterButton() {
    // Define the selector using the data-qa-action attribute for precision
    const RegisterButtonSelector =
      '[data-qa-action="logon-view-alternate-button"]';

    await this.page.waitForSelector(RegisterButtonSelector, {
      state: "visible",
    });

    // Click the button, no need to retrieve it first
    await this.page.click(RegisterButtonSelector, { force: true });
    // Optionally, you may want to wait for a specific condition after clicking the button
    await this.page.waitForLoadState("networkidle");
  }

  async inputEmail(email: string) {
    const emailIdSelector = "#email63"; // Selector using ID
    await this.page.waitForSelector(emailIdSelector, { state: "visible" }); // Ensure the element is visible before interacting
    const emailField = await this.page.$(emailIdSelector);

    if (emailField) {
      await emailField.fill(email);
    } else {
      console.error("Email field not found.");
    }
  }

  async inputPassword(password: string) {
    const passwordIdSelector = "#password67"; // Adjust this selector
    await this.page.waitForSelector(passwordIdSelector);
    const passwordField = await this.page.$(passwordIdSelector);

    if (passwordField) {
      await passwordField.fill(password);
    } else {
      console.error("Password field not found.");
    }
  }

  async fillNameField(firstName: string) {
    // Define the selector to use the ID of the input field
    const nameIdSelector = "#firstName71";

    await this.page.waitForSelector(nameIdSelector);
    const nameField = await this.page.$(nameIdSelector);

    if (nameField) {
      await nameField.fill(firstName);
    } else {
      console.error("Name field not found.");
    }
  }

  async surname(surname: string) {
    const surnameIdSelector = "#lastName75"; // Corrected to use the right variable name and removed unnecessary quotes
    await this.page.waitForSelector(surnameIdSelector);
    const surnameField = await this.page.$(surnameIdSelector);

    if (surnameField) {
      await surnameField.fill(surname);
    } else {
      console.error("Surname field not found.");
    }
  }

  async phonePrefix(prefix: string) {
    const prefixIdSelector = "#phone\\.prefix79"; // Correctly escaped period in the ID
    await this.page.waitForSelector(prefixIdSelector, { state: "visible" }); // Ensure the element is visible
    const prefixField = await this.page.$(prefixIdSelector);

    if (prefixField) {
      await prefixField.fill(prefix);
    } else {
      console.error("Prefix field not found.");
    }
  }

  async phone(number: string) {
    const phoneNumberIdSelector = "#phone\\.number83"; // Correctly escaped period in the ID
    await this.page.waitForSelector(phoneNumberIdSelector, {
      state: "visible",
    }); // Ensure the element is visible
    const phoneNumberField = await this.page.$(phoneNumberIdSelector);

    if (phoneNumberField) {
      await phoneNumberField.fill(number);
    } else {
      console.error("Phone number field not found.");
    }
  }

  async clickCreateAccount() {
    // Use the data-qa-action attribute to find the Create Account button
    const createAccountButtonSelector = '[data-qa-action="sign-up-submit"]';

    await this.page.waitForSelector(createAccountButtonSelector);
    const createAccountButton = await this.page.$(createAccountButtonSelector);

    if (createAccountButton) {
      await createAccountButton.click();
      // Wait for the next network request to finish after clicking the button
      await this.page.waitForLoadState("networkidle");
    } else {
      console.error("Create Account button not found.");
    }
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState("domcontentloaded");
  }
}

export default ZaraCheckBoxErrorRegression1;
