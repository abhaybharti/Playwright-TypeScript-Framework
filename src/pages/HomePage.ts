import { HomePageLocators } from '../support/locators/HomePageLocators';
import { UIActions } from '../helper/actions/UIActions';
import { ExpectUtils } from '../helper/asserts/ExpectUtils';
import { PageActions } from '../helper/actions/PageActions';

export class HomePage {
    private uiActions: UIActions;
    private expectUtils: ExpectUtils;

    constructor(actions: PageActions) {
        this.uiActions = new UIActions(actions);
        this.expectUtils = new ExpectUtils(this.uiActions.getPageActions());
    }
    public async navigateToHome(): Promise<void> {
        await this.uiActions.getPageActions().gotoURL('index', 'Home Page');
        await this.uiActions.getPageActions().waitForLoadState('load');
    }

    public async isLogoVisible(): Promise<void> {
        const logoLocator = this.uiActions.element(HomePageLocators.PARABANK_LOGO, 'ParaBank Logo');
        await logoLocator.waitFor({ state: 'visible', timeout: 10000 });
        await this.expectUtils.expectElementToBeVisible(logoLocator, 'Logo is not visible');
    }
}