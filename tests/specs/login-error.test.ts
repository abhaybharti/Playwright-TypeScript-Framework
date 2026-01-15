import { test, expect } from '../../src/config/PageSetup';
import { HomePage } from '../../src/pages/HomePage';


test.describe('Example Domain Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ actions }) => {
        homePage = new HomePage(actions);
        await homePage.navigateToHome();
    });

    test('has title', async ({ page }) => {

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/ParaBank/);
    });
});