import {Page} from "@playwright/test"
 let username ="ETA+PMOzz"
 let password ="Mav347336"
export class InvalidTestCase{

public async usernameField(){
 await this.page.locator('#username').fill("username");
}
public async passwordField(){
 await this.page.locator("//input[@placeholder='Passwort']").fill("password");
}
public async siginButton(){
await this.page.locator("//span[@class='p-button-label']").click();
console.log("invalid username and password")
}


    constructor(public page : Page){
        this.page = page
    }
    

}
