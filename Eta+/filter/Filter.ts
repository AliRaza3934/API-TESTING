import{Page} from "@playwright/test"
import { pageFixture } from "../pages/hooks/PageFixture"
import * as loginPageResources from "../pages/resources/FilterPageLocators.json"
import { PageElement } from "../pages/resources/interfaces/IpageElements"

function getResource(resourceName: string) {
    return loginPageResources.webElements.find((element: PageElement) => element.elementName == resourceName) as PageElement
    }

    export class FilterTestCase{
        filterLocator ={
            filterOption: () => pageFixture.page.locator(getResource('filterOption').selectorValue),
            facilityMang: () => pageFixture.page.locator(getResource('').selectorValue)
        
        }

    public async filterOption(){
        await this.filterLocator.filterOption().click();
    }
    constructor(public page:Page){
        pageFixture.page = page;
    }
    }