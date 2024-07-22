import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPage(checkbox)Locators.json"
import { PageElement } from "../resources/interfaces/IpageElements";


let userName ="ETA+PMOzz"
let passWord ="Mav34733"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }
export class CheckBox{
    loginPageLocator ={
        usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
        signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
        checkBox      : () => pageFixture.page.locator(getResource('checkBox').selectorValue),
    }
public async loggIned(){
    await this.loginPageLocator.usernameField().fill(userName);
    await this.loginPageLocator.passwordField().fill(passWord);
    await this.loginPageLocator.checkBox().click();
    await this.loginPageLocator.signinButton().click()
    console.log("user is keep logined")
}


constructor(public page:Page){
    pageFixture.page = page;
}
}