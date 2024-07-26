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

    await this.buildingPageLocator.addnewBuilding().click();
    await this.buildingPageLocator.surname().fill(SurName);
    await this.buildingPageLocator.federalstate().click();
    await this.buildingPageLocator.optionField().click();
    await this.buildingPageLocator.location().fill(locaTion);
    await this.buildingPageLocator.postalCode().fill(postalCode);
    await this.buildingPageLocator.streetNumber().fill(streetN);
    await this.buildingPageLocator.nummberField().fill(nummBer);
    await this.buildingPageLocator.addButton().click();

}

constructor(public page : Page){
    pageFixture.page = page;
  //this.intenviorment = new IntEnviorment(this.page);
}
}