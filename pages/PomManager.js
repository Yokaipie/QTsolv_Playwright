const { HomePage } = require('../pages/HomePage');
const { ServicesPage } = require('../pages/ServicesPage');
const { CareersPage } = require('../pages/CareersPage');
const { CommonUtils } = require('../utils/CommonUtils');

class PomManager {
    constructor(page) {
        this.page = page;
        this.homePage = new HomePage(page);
        this.servicesPage = new ServicesPage(page);
        this.careersPage = new CareersPage(page);
        this.commonUtils = new CommonUtils(page);
    }

    getHomePage() {
        return this.homePage;
    }

    getServicesPage() {
        return this.servicesPage;
    }
 
    getCareersPage() {
        return this.careersPage;
    }

   
    getCommonUtils() {
        return this.commonUtils;
    }
}

module.exports = { PomManager };
