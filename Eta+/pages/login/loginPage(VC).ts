import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPageVCLocators.json"
import { PageElement } from "../resources/interfaces/IpageElements";

let username ="ETA+PMO"
let password ="Mav34733"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

export class IntEnviorment{
        loginPageLocator ={
            usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
            passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
            signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
        }
        
public async loginUser(){

    await this.loginPageLocator.usernameField().fill("username");
    await this.loginPageLocator.passwordField().fill("password");
    await this.loginPageLocator.signinButton().click()
    console.log("sucessfully login")
}

constructor(public page : Page){
    pageFixture.page = page;
    //this.intenviorment = new IntEnviorment(this.page);
}
}

