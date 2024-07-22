import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPageIEVPLocators.json"
import { PageElement } from "../resources/interfaces/IpageElements";


let userName ="ETA+PMOzz"
let password ="Mav34733"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }
export class InvalidEmailValidPassword{
    loginPageLocator ={
        usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
        signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
    }
public async testCases(){
    await this.loginPageLocator.usernameField().fill(userName);
    await this.loginPageLocator.passwordField().fill(password);
    await this.loginPageLocator.signinButton().click()
    console.log("username and password is not match")
}


constructor(public page:Page){
    pageFixture.page = page;
}
}