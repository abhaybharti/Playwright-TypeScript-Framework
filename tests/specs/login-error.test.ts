import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { LoginTestData } from '../../src/test-data/LoginTestData';

test.describe('Login validation', () => {
    test('should show error for invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigateToLogin();
        await loginPage.login(
            LoginTestData.INVALID_USER.username,
            LoginTestData.INVALID_USER.password
        );
        await loginPage.verifyLoginError(
            'An internal error has occurred and has been logged.'
        );
    });
});