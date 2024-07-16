import{Page} from '@playwright/test'


export class IntEnviorment{

userNameField   = () => this.page.locator("//input[@id='username']")
passwordField   = () => this.page.locator("//input[@placeholder='Passwort']")
siginButton     = () => this.page.locator("//span[@class='p-button-label']")


public async login(){
    await this.page.goto('https://int.eta-plus.com/#!/startpage/login');
    await this.