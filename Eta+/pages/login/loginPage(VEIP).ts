import{Page} from "@playwright/test"
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPageVEIPLocators.json"
import { PageElement } from "../resources/interfaces/IpageElements";


let userName ="ETA+ PMO"
let passWord ="Mav34733699"

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
        await this.loginPageLocator.usernameField().fill(userName);
        await this.loginPageLocator.passwordField().fill(passWord);
        await this.loginPageLocator.signinButton().click()
        console.log("username and password is not match")
    }
   

constructor(public page:Page){
    pageFixture.page = page
}
}