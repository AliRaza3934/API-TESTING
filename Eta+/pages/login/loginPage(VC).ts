import{Page} from '@playwright/test'

let username ="ETA+PMO"
let password ="Mav34733"

export class IntEnviorment{

public async usernameField(){

    await this.page.locator("#username").fill("username");
}
public async passwordField(){
    await this.page.locator("//input[@placeholder='Passwort']").fill("password");
}
public async signinButton(){

    await this.page.locator("//span[@class='p-button-label']").click()
    console.log("sucessfully login")
}



    

//intenviorment: IntEnviorment;
constructor(public page : Page){
    this.page = page;
    //this.intenviorment = new IntEnviorment(this.page);
}

}