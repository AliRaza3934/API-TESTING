import { test, expect } from '@playwright/test';
import{chromium,Page,Browser} from '@playwright/test';
import { ValidTestCase } from '../Eta+/pages/login/loginPage(VC)';
import { InvalidTestCase } from '../Eta+/pages/login/loginPage(IVC)';
import { ValidEmailInvalidPassword } from '../Eta+/pages/login/loginPage(VEIP)';
import { InvalidEmailValidPassword } from '../Eta+/pages/login/loginPage(IEVP)';
import { beforeEach } from 'node:test';
import { CheckBox } from './pages/login/loginPage(checkbox)';
import { ForgotPassword } from './pages/login/loginPage(forgetPassword)';


//let loginFunc = new Login();

//A2 Login Test case with valid credentials
test.beforeEach('ETA+Page',async({page}) =>{
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
})
test('A2 Login Test case with valid credentials', async ({ page }) => {
  
  const validtestcase = new ValidTestCase(page);
  await validtestcase.loginUser();
  await page.waitForTimeout(30000);
  
//test.setTimeout(30000);
 // await  loginFunc.loginUser("ETA+PMO","Mav34733");
  
// Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Noch Keinen Account?/                        
});
//test.skip('',async ({ page}) => {
 //await  loginFunc.loginUser("ETA+PMO","Mav34733");
//});

//A3 Login Test case with invalid credentials
test('A3 Login Test case with invalid credentials',async ({page}) => {
const invalidtestcase = new InvalidTestCase(page);
//await page.goto('https://int.eta-plus.com/#!/startpage/login');
await invalidtestcase.loginTest();

//await page.waitForTimeout(30000);

});

test('A4 Login Test case with valid email and invalid password credentials',async({page}) =>{
  const validEmailInvalidPassword = new ValidEmailInvalidPassword(page);
  //await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await validEmailInvalidPassword.loginTestCase();
})

test('A5 Login Test case with invalid email and valid password credentials',async({page}) =>{
  const invalidEmailValidPassword = new InvalidEmailValidPassword(page);
  //await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await invalidEmailValidPassword.testCases();
})

test('A6 Login Test case should check the box and keep login',async({page}) => {
 const checkBox = new CheckBox(page);
 await checkBox.loggIned();
})

test('A7 and A8 Login Test Case should click on the forgot password and send the link',async({page}) => {
  const forgotPassword = new ForgotPassword(page);
  await forgotPassword.forgot();
  
})

