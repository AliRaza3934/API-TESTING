import {Page} from "@playwright/test"
import { PageElement } from "../resources/interfaces/IpageElements";
import { pageFixture } from "../hooks/PageFixture";
import * as loginPageResources from "../resources/LoginPageIVCLocators.json"

 let username ="ETA+PMOzz"
 let password ="Mav347336"

 function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

export class InvalidTestCase{

    loginPageLocator = { 
        usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
        signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
    }
    
public async loginTest(){
    await this.loginPageLocator.usernameField().fill("username");
    await this.loginPageLocator.passwordField().fill("password");
    await this.loginPageLocator.signinButton().click()
    console.log("invalid username and password")
}



    constructor(public page : Page){
        pageFixture.page = page
    }
    

}
