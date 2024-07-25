import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/BuildingPageLocators.json";
import { PageElement } from "../resources/interfaces/IpageElements";
import { TIMEOUT } from 'dns';

let userName   ="ETA+ PMO"
let passWord   ="Mav34733"
let SurName    ="Robbert"
let locaTion   ="Berlin"
let postalCode ="13403"
let streetN     ="klix"
let nummBer    ="4" 

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

export class BuildingTestCase{
        buildingPageLocator ={
            usernameField : () => pageFixture.page.locator(getResource('usernameField').selectorValue),
            passwordField : () => pageFixture.page.locator(getResource('passwordField').selectorValue),
            signinButton  : () => pageFixture.page.locator(getResource('siginButton').selectorValue),
            addnewBuilding: () => pageFixture.page.locator(getResource('addnewBuilding').selectorValue),
            surname       : () => pageFixture.page.locator(getResource('nameOwner').selectorValue),
            federalstate  : () => pageFixture.page.locator(getResource('federalState').selectorValue),
            location      : () => pageFixture.page.locator(getResource('Ort').selectorValue),
            postalCode    : () => pageFixture.page.locator(getResource('Postleitzahl').selectorValue),
            streetNumber  : () => pageFixture.page.locator(getResource('straße').selectorValue),
            nummberField  : () => pageFixture.page.locator(getResource('Nummer').selectorValue),
            optionField   : () => pageFixture.page.locator(getResource('selectOption').selectorValue),
            addButton     : () => pageFixture.page.locator(getResource('addButton').selectorValue),
        }
        
public async newBuilding(){

    await this.buildingPageLocator.usernameField().fill(userName);
    await this.buildingPageLocator.passwordField().fill(passWord);
    await this.buildingPageLocator.signinButton().click();
    console.log("sucessfully 