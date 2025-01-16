class ServicesPage {
  constructor(page) {
    this.page = page;
    this.servicesMenu = page.getByRole('link', { name: 'Services', exact: true });
    this.servicesSubMenu = page.locator('.nav-link.dropMenu.practices.openArrow');
    this.industriesMenu = page.getByRole('link', { name: 'Industries', exact: true });
    this.industriesSubMenu = page.locator("//span[normalize-space()='Industries']");
    this.solutionsMenu = page.getByRole('link', { name: 'Solutions', exact: true });
    this.solutionsSubMenu = page.locator("//span[normalize-space()='Solutions']");
    this.aboutUsMenu = page.getByRole('link', { name: 'About Us' });
    this.aboutUsSubMenu = page.locator('.nav-link.dropMenu.aboutUs');
    this.careersMenu = page.locator('#top-menu').getByRole('link', { name: 'Careers' });
  }

  async hoverServicesMenu() {
    await this.servicesMenu.hover();
  }

  async hoverIndustriesMenu() {
    await this.industriesMenu.hover();
  }

  async hoverSolutionsMenu() {
    await this.solutionsMenu.hover();
  }

  async clickSolutionsMenu() {
    await this.solutionsMenu.click();
  }

  async hoverAboutUsMenu() {
    await this.aboutUsMenu.hover();
  }

  async clickAboutUsMenu() {
    await this.aboutUsMenu.click();
  }

  async clickCareersMenu() {
    await this.careersMenu.click();
  }
}

module.exports = { ServicesPage };
