import{Page} from "@playwright/test"
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPageVEIPLocators.json"
import { PageElement } from "../resources/interfaces/IpageElements";


let username ="ETA+PMO"
let password ="Mav34733699"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }
export class ValidEmailInvalidPassword{

    loginPageLocator ={
        usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
        passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
        signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
    }

    public async loginTestCase(){
        await this.loginPageLocator.usernameField().fill("username");
        await this.loginPageLocator.passwordField().fill("password");
        await this.loginPageLocator.signinButton().click()
        console.log("username and password is not match")
    }
   

constructor(public page:Page){
    pageFixture.page = page
}
}