class CommonUtils {
    constructor(page) {
        this.page = page;
    }

    async waitForElementToBeVisible(locator, timeout = 5000) {
        await locator.waitFor({ state: 'visible', timeout });
    }

    async waitForElementToBeHidden(locator, timeout = 5000) {
        await locator.waitFor({ state: 'hidden', timeout });
    }

    async clickElement(locator) {
        await this.waitForElementToBeVisible(locator);
        await locator.click();
    }

    // Hover over an element
    async hoverElement(locator) {
        await this.waitForElementToBeVisible(locator);
        await locator.hover();
    }

    async selectDropdownOption(locator, optionText) {
        await locator.click();
        await this.page.getByRole('option', { name: optionText }).click();
    }

    async validateTextContent(locator, expectedText) {
        const text = await locator.textContent();
        if (!text.includes(expectedText)) {
            throw new Error(`Text validation failed. Expected: ${expectedText}, Found: ${text}`);
        }
    }

    async navigateToAndValidateURL(url, expectedURL) {
        await this.page.goto(url);
        
    }

    async waitForLoaderToDisappear(loaderLocator, timeout = 5000) {
        await this.waitForElementToBeHidden(loaderLocator, timeout);
    }

    async takeScreenshot(fileName) {
        await this.page.screenshot({ path: fileName, fullPage: true });
    }

   
}

module.exports = { CommonUtils };
