class HomePage {
  constructor(page) {
      this.page = page;
      this.servicesLink = page.getByRole('link', { name: 'Services', exact: true });
  }

  async navigateToHomePage() {
      await this.page.goto('https://www.qtsolv.com/');
  }

  async goToServices() {
      await this.servicesLink.click();
  }
}

module.exports = { HomePage };
