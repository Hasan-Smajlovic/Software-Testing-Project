import {Page} from "playwright"

class ZaraHelp{
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

    async selectItemByHref(href: string) {
        const itemLinkSelector = `a[href="${href}"]`;
    
        try {
            await this.page.waitForSelector(itemLinkSelector, { timeout: 10000 });
            const itemLink = await this.page.$(itemLinkSelector);
    
            if (itemLink) {
                await this.page.keyboard.press("Enter");
                await this.page.waitForLoadState('domcontentloaded');
                console.log(`Clicked item link with href "${href}".`);
            } else {
                console.error(`Item link with href "${href}" not found.`);
            }
        } catch (error) {
            console.error(`Error selecting item by href "${href}": ${error}`);
        }
    }
    async selectAndClickByDataQaId(dataQaId: string) {
        const elementSelector = `[data-qa-id="${dataQaId}"]`;
    
        try {
            await this.page.waitForSelector(elementSelector, { timeout: 10000 });
            const element = await this.page.$(elementSelector);
    
            if (element) {
                await element.click();
                await this.page.waitForLoadState('domcontentloaded');
                console.log(`Clicked element with data-qa-id "${dataQaId}".`);
            } else {
                console.error(`Element with data-qa-id "${dataQaId}" not found.`);
            }
        } catch (error) {
            console.error(`Error selecting and clicking by data-qa-id "${dataQaId}": ${error}`);
        }
    }
    
    async selectAndClickSeeMoreLink() {
        const linkSelector = 'a.help-category-default-link.link[data-qa-id="see-more"]';
    
        try {
            await this.page.waitForSelector(linkSelector, { timeout: 10000 });
            const link = await this.page.$(linkSelector);
    
            if (link) {
                await link.click();
                await this.page.waitForLoadState('domcontentloaded');
                console.log('Clicked the "View more" link.');
            } else {
                console.error('Link with specified selector not found.');
            }
        } catch (error) {
            console.error(`Error selecting and clicking the "View more" link: ${error}`);
        }
    }
    
    async selectAndClickPricingPolicyLink() {
        const linkSelector = 'a.help-category__subcategories-title.link[data-qa-id="article-link"][href="https://www.zara.com/ba/en/help-center/PricesPolicy"]';
    
        try {
            await this.page.waitForSelector(linkSelector, { timeout: 10000 });
            const link = await this.page.$(linkSelector);
    
            if (link) {
                await link.click();
                await this.page.waitForLoadState('domcontentloaded');
                console.log('Clicked the "Pricing Policy" link.');
            } else {
                console.error('Link with specified selector not found.');
            }
        } catch (error) {
            console.error(`Error selecting and clicking the "Pricing Policy" link: ${error}`);
        }
    }
    
};

export default ZaraHelp;