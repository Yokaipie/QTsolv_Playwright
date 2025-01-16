const { test, expect } = require('@playwright/test');
const { PomManager } = require('../pages/PomManager');
const config = require('../config/dev.config');

test('Search and apply for a job', async ({ page }) => {
    const pomManager = new PomManager(page);
    const homePage = pomManager.getHomePage();
    const servicesPage = pomManager.getServicesPage();
    const careersPage = pomManager.getCareersPage();
    const commonUtils = pomManager.getCommonUtils();

    await commonUtils.navigateToAndValidateURL(config.baseURL);

    await servicesPage.clickCareersMenu();
    await commonUtils.navigateToAndValidateURL(`${config.CareerURL}`);

    await commonUtils.clickElement(careersPage.exploreJobsButton);
    await commonUtils.selectDropdownOption(careersPage.locationDropdown, config.location);
    await commonUtils.validateTextContent(careersPage.locationDropdown, config.location);

    await careersPage.searchJobs();
    await commonUtils.waitForLoaderToDisappear(careersPage.loader);

    const jobTitle = await careersPage.jobTitle.textContent();
    const jobLocation = await careersPage.jobLocation.textContent();
    const jobExperience = await careersPage.jobExperience.textContent();

    await expect(jobTitle).not.toBeNull();
    await expect(jobLocation).toContain('Bengaluru');

    await commonUtils.clickElement(careersPage.firstJob);
    await commonUtils.clickElement(careersPage.viewDetailsButton);

    const redirectedJobLocation = await careersPage.jobLocation.textContent();
    const redirectedJobTitle = await careersPage.newTitle.textContent();

    const redirectedJobExperience = await careersPage.newExperience.textContent();
    const redirectedJobExperienceLowerCase = redirectedJobExperience ? redirectedJobExperience.toLowerCase() : '';

    await expect(redirectedJobLocation).toBe(jobLocation);
    await expect(redirectedJobTitle).toBe(jobTitle);
    await expect(redirectedJobExperienceLowerCase).toBe(jobExperience.toLowerCase());

    await commonUtils.clickElement(careersPage.applyNowButton);
    await commonUtils.navigateToAndValidateURL(`${config.RedirectCareerURL}`);
    await commonUtils.validateTextContent(careersPage.applyNowButton, 'Apply now');
});
