import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/LoginPahe(forgetPassword).json"
import { PageElement } from "../resources/interfaces/IpageElements";

let emailAddress = "arqureshi.3934@gmail.com"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

    export class ForgotPassword{
        loginPageLocator ={
            forgotpasswordField : () => pageFixture.page.locator(getResource('forgotpasswordField').selectorValue),
            emailField          : () => pageFixture.page.locator(getResource('emailField').selectorValue),
            sendbutton          : () => pageFixture.page.locator(getResource('sendButton').selectorValue),
        }
    public async forgot(){
        await this.loginPageLocator.forgotpasswordField().click();
        await this.loginPageLocator.emailField().fill('emailAddress');
        await this.loginPageLocator.sendbutton().click()
        console.log("user can clcik on forgot password option and send to the link in the provided email address")
    }
    
    
    constructor(public page:Page){
        pageFixture.page = page;
    }
    }