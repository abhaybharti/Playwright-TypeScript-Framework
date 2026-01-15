import { Locator, selectors } from '@playwright/test';
import { pageFixture } from '../../support/PageFixture';

export class LocatorFactory {

    public static getLocator(input: string | Locator): Locator {
        return typeof input === 'string' ? pageFixture.page.locator(input) : input;
    }

    public static getLocatorByTestId(testId: string | RegExp, attributeName?: string): Locator {
        if (attributeName) {
            selectors.setTestIdAttribute(attributeName);
        }
        return pageFixture.page.getByTestId(testId);
    }

    public static getLocatorByText(text: string | RegExp): Locator {
        return pageFixture.page.getByText(text);
    }

    public static getLocatorByLabel(text: string | RegExp): Locator {
        return pageFixture.page.getByLabel(text);
    }

    public static getLocatorByPlaceholder(text: string | RegExp): Locator {
        return pageFixture.page.getByPlaceholder(text);
    }

    public static getLocatorByTitle(text: string | RegExp): Locator {
        return pageFixture.page.getByTitle(text);
    }

    public static getLocatorByAltText(text: string | RegExp): Locator {
        return pageFixture.page.getByAltText(text);
    }

    public static async getAllLocators(input: string | Locator): Promise<Locator[]> {
        return typeof input === 'string'
            ? await pageFixture.page.locator(input).all()
            : await input.all();
    }
}