import { Page, expect } from '@playwright/test';
import { PageElement } from '../resources/interfaces/iPageElement';
import * as loginPageResources from "../resources/LoginPageLocators.json";
import { pageFixture } from '../hooks/pageFixture';
//let userName="ETA+ PMO"
//let passWord="Mav34733"
function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
 };
export class Login {
    loginPageLocators ={
        usernameField :() => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passworfField :() => pageFixture.page.locator(getResource('passwordField').selectorValue),
        signinButton  :() => pageFixture.page.locator(getResource('siginButton').selectorValue),
    }

public async loginUser(userName: any ,passWord:any):Promise<void>{
        await this.loginPageLocators.usernameField().fill(userName);
        await this.loginPageLocators.passworfField().fill(passWord);
        await this.loginPageLocators.signinButton().click(); 
}
};