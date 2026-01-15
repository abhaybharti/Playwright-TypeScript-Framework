import { test as base } from '@playwright/test';
import { PageActions } from '../helper/actions/PageActions';

type FrameworkFixtures = {
    actions: PageActions;
};

export const test = base.extend<FrameworkFixtures>({
    actions: async ({ page, context }, use) => {
        const actions = new PageActions(page, context);
        await use(actions);
    }
});

export { expect } from '@playwright/test';