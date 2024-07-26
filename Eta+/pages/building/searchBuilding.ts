import{Page} from '@playwright/test'
import{pageFixture} from "../hooks/PageFixture"
import * as loginPageResources from "../resources/SearchBuildingLocators.json";
import { PageElement } from "../resources/interfaces/IpageElements";

let userName   ="ETA+ PMO"
let passWord   ="Mav34733"
let buildingName ="Robbert"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

export class BuildingSearchTestCase{
    buildingPageLocator ={
        searchbarField : () => pageFixture.page.locator(getResource('searchBar').selectorValue),
        findBuilding   : () => pageFixture.page.locator(getResource('findBuilding').selectorValue),
        searchbutton   : () => pageFixture.page.locator(getResource('searchButton').selectorValue),
    }

public async buildingSearch(){

await this.buildingPageLocator.searchbutton().click();
await this.buildingPageLocator.searchbarField().fill(buildingName);
await this.buildingPageLocator.findBuilding().click();



}

constructor(public page : Page){
    pageFixture.page = page;
  //this.intenviorment = new IntEnviorment(this.page);
}

}