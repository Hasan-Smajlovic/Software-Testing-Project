import { Page } from "playwright";

class test1 {
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

  async clickDropdown() {
    // Target the button element directly by using its data-qa-id attribute
    const dropdownSelector = 'button[data-qa-id="layout-header-toggle-menu"]';

    await this.page.waitForSelector(dropdownSelector, { state: "visible" });

    const dropdownButton = await this.page.$(dropdownSelector);

    if (dropdownButton) {
      await dropdownButton.click();
      // Optionally, you may want to wait for a specific condition after clicking the button
      await this.page.waitForLoadState("networkidle");
    } else {
      console.error("Dropdown button not found.");
    }
  }

  async clickUnfoldCategory() {
    // Define the selector for the link with the specific data-qa-action attribute
    const unfoldCategorySelector = 'a[data-qa-action="unfold-category"]';

    // Wait for the selector to be present and visible before proceeding
    try {
      await this.page.waitForSelector(unfoldCategorySelector, {
        state: "visible",
        timeout: 30000, // Timeout after 30 seconds
      });

      // Click the link that has the data-qa-action="unfold-category"
      await this.page.click(unfoldCategorySelector, { timeout: 30000 });

      // Optionally, wait for a specific condition after clicking the link
      await this.page.waitForLoadState("networkidle", { timeout: 30000 });
    } catch (e) {
      // If a timeout occurs, it will be caught here
      console.error("Error occurred while clicking on unfold category:", e);
    }
  }

  async clickOnContactUs() {
    const clickOnContactUsSelector =
      'a[href="https://www.zara.com/ba/en/contact?v1=11113"]'; // Selector using ID
    await this.page.waitForSelector(clickOnContactUsSelector, {
      state: "visible",
    }); // Ensure the element is visible before interacting
    const clickOnContactUs = await this.page.$(clickOnContactUsSelector);

    if (clickOnContactUs) {
      await clickOnContactUs.click();
    } else {
      console.error("Email field not found.");
    }
  }

  async clickOnChat() {
    const clickOnChatSelector = ".zds-selection-cell__button-wrapper"; // Adjust this selector
    await this.page.waitForSelector(clickOnChatSelector);
    const clickOnChatField = await this.page.$(clickOnChatSelector);

    if (clickOnChatField) {
      await clickOnChatField.click();
    } else {
      console.error("Password field not found.");
    }
  }
  async waitForPageLoad() {
    await this.page.waitForLoadState("domcontentloaded");
  }
}

export default test1;
