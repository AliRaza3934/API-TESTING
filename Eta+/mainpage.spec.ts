import { test, expect }              from '@playwright/test';
import{chromium,Page,Browser}        from '@playwright/test';
import { ValidTestCase }             from '../Eta+/pages/login/loginPage(VC)';
import { InvalidTestCase }           from '../Eta+/pages/login/loginPage(IVC)';
import { ValidEmailInvalidPassword } from '../Eta+/pages/login/loginPage(VEIP)';
import { InvalidEmailValidPassword } from '../Eta+/pages/login/loginPage(IEVP)';
import { beforeEach }                from 'node:test';
import { CheckBox }                  from './pages/login/loginPage(checkbox)';
import { ForgotPassword }            from './pages/login/loginPage(forgetPassword)';
import {BuildingTestCase}            from '../Eta+/pages/building/BuildingPage';



test.beforeEach('ETA+Page',async({page}) =>{
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
})

test.skip('A2 Login Test case with valid credentials', async ({ page }) => {
  
  const validtestcase = new ValidTestCase(page);
  await validtestcase.loginUser();
  await expect((await page.locator("div[class='px-3 pb-5 ng-star-inserted'] p[class='pb-3 text-2xl capitalize text-primary font-bold']"))).toHaveText('Cluster');
  console.log('text is found')
  //await page.waitForTimeout(150000);
});

//A3 Login Test case with invalid credentials
test.skip('A3 Login Test case with invalid credentials',async ({page}) => {
const invalidtestcase = new InvalidTestCase(page);
await invalidtestcase.loginTest();
});

//A4 Login Test case with valid email and invalid password credentials
test.skip('A4 Login Test case with valid email and invalid password credentials',async({page}) =>{
  const validEmailInvalidPassword = new ValidEmailInvalidPassword(page);
  await validEmailInvalidPassword.loginTestCase();
})

//A5 Login Test case with invalid email and valid password credentials
test.skip('A5 Login Test case with invalid email and valid password credentials',async({page}) =>{
  const invalidEmailValidPassword = new InvalidEmailValidPassword(page);
  //await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await invalidEmailValidPassword.testCases();
})

//A6 Login Test case should check the box and keep login
test.skip('A6 Login Test case should check the box and keep login',async({page}) => {
 const checkBox = new CheckBox(page);
 await checkBox.loggIned();
})

//A7 and A8 Login Test Case should click on the forgot password and send the link
test.skip('A7 and A8 Login Test Case should click on the forgot password and send the link',async({page}) => {
  const forgotPassword = new ForgotPassword(page);
  await forgotPassword.forgot();
  
})

// A2 Building Regression Testcases

test('A2 Building Regression Testcase',async({page})=>{
  const buildingPage = new BuildingTestCase(page);
  await buildingPage.newBuilding();
})


