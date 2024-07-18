import{Page} from '@playwright/test'


export class IntEnviorment{

public async usernameField(){

    await this.page.locator("#username").fill("ETA+ PMO");
}
public async passwordField(){
    await this.page.locator("//input[@placeholder='Passwort']").fill("Mav34733");
}
public async signinButton(){

    await this.page.locator("//span[@class='p-button-label']").click()
}



    

//intenviorment: IntEnviorment;
constructor(public page : Page){
    this.page = page;
    //this.intenviorment = new IntEnviorment(this.page);
}

}