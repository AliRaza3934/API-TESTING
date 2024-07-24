import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/BuildingPageLocators.json";
import { PageElement } from "../resources/interfaces/IpageElements";

let userName ="ETA+ PMO"
let passWord ="Mav34733"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

export class BuildingTestCase{
        loginPageLocator ={
            usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
            passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
            signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
            addnewBuilding: () => pageFixture.page.locator(getResource('addnewBuilding').selectorValue),
        }
        
public async newBuilding(){

    await this.loginPageLocator.usernameField().fill(userName);
    await this.loginPageLocator.passwordField().fill(passWord);
    await this.loginPageLocator.signinButton().click();
    console.log("sucessfully login")
    await this.loginPageLocator.addnewBuilding().click();
    
    
    
}

constructor(public page : Page){
    pageFixture.page = page;
    //this.intenviorment = new IntEnviorment(this.page);
}
}