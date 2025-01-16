class CareersPage {
  constructor(page) {
      this.page = page;
      this.exploreJobsButton = page.getByText('Explore Jobs');
      this.locationDropdown = page.locator('#select2-locationDropdown-container');
      this.loader = page.locator('.loader');
      this.firstJob = page.locator("xpath=//body/main/section[@class='openPosition secondClass']/div[@class='container']/div[@id='openPositionJobRow']/div[@class='jobOpenPosition']/div[@id='all_jobs_div']/div[@class='row']/div[1]/div[1]/div[1]/div[1]").first();
      this.jobTitle = page.locator("xpath=//h4[normalize-space()='React js Fullstack Consultant']");
      this.jobLocation = page.locator("(//label[contains(text(),'Bengaluru')])[1]");
      this.newTitle = page.locator("//h2[normalize-space()='React js Fullstack Consultant']");
      this.jobExperience = page.locator("(//label[normalize-space()='4-7 years'])[1]");
      this.newExperience = page.locator("(//label[normalize-space()='4-7 Years'])")
      this.viewDetailsButton = page.locator(".button_button__3HGS0.job_title_name[href='https://www.qtsolv.com/career-details?jobid=1154']").first();
      this.applyNowButton = page.locator("div[class='innerBox'] button[type='button']");
  }

  async exploreJobs() {
      await this.exploreJobsButton.click();
  }

  async selectLocation(location) {
      await this.locationDropdown.click();
      await this.page.getByRole('option', { name: location }).click();
  }

  async searchJobs() {
      await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async applyForJob() {
      await this.applyNowButton.click();
  }
}

module.exports = { CareersPage };