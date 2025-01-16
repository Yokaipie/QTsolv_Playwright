const { test, expect } = require('@playwright/test');
const { PomManager } = require('../pages/PomManager');
const config = require('../config/dev.config');

test('Navigate to Services page and validate menus', async ({ page }) => {
    const pomManager = new PomManager(page);
    const homePage = pomManager.getHomePage();
    const servicesPage = pomManager.getServicesPage();
    const commonUtils = pomManager.getCommonUtils();

    await commonUtils.navigateToAndValidateURL(config.baseURL);

    await homePage.goToServices();

    await commonUtils.hoverElement(servicesPage.servicesMenu);
    await expect(servicesPage.servicesSubMenu).toBeVisible();

    await commonUtils.hoverElement(servicesPage.industriesMenu);
    await expect(servicesPage.industriesSubMenu).toBeVisible();

    await commonUtils.hoverElement(servicesPage.solutionsMenu);
    await commonUtils.clickElement(servicesPage.solutionsMenu);
    await commonUtils.navigateToAndValidateURL(`${config.SolutionURL}`);

    await commonUtils.hoverElement(servicesPage.aboutUsMenu);
    await expect(servicesPage.aboutUsSubMenu).toBeVisible();
    await commonUtils.clickElement(servicesPage.aboutUsMenu);
    await commonUtils.navigateToAndValidateURL(`${config.AboutUsURL}`);

    await commonUtils.clickElement(servicesPage.careersMenu);
    await commonUtils.navigateToAndValidateURL(`${config.CareerURL}`);
});
