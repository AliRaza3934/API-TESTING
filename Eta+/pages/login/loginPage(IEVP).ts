import{Page} from '@playwright/test'

let username ="ETA+PMOzz"
let password ="Mav34733"
export class InvalidEmailValidPassword{

public async usernameField(){
    await this.page.locator('#username').fill("username");
}

public async passwordField(){
    await this.page.locator("//input[@placeholder='Passwort']").fill("password");
}

public async siginButton(){
    await this.page.locator("//span[@class='p-button-label']").click();
    console.log("username and password is not match")
}

constructor(public page:Page){
this.page = page;
}
}