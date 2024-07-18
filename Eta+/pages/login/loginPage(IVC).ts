import {Page} from "@playwright/test"

export class InvalidTestCase{

public async usernameField(){
 await this.page.locator('#username').fill("ETA+ PMOzz");
}
public async passwordField(){
 await this.page.locator("//input[@placeholder='Passwort']").fill("Mav347336");
}
public async siginButton(){
await this.page.locator("//span[@class='p-button-label']").click();
console.log("invalid username and password")
}


    constructor(public page : Page){
        this.page = page
    }
    

}
