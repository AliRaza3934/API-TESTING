import { test, expect } from '@playwright/test';
import{chromium,Page,Browser} from '@playwright/test';
import { IntEnviorment } from './pages/login/loginPage(VC)';
import { InvalidTestCase } from './pages/login/loginPage(IVC)';
import { ValidEmailInvalidPassword } from './pages/login/loginPage(VEIP)';


//let loginFunc = new Login();

//A2 Login Test case with valid credentials
test('A2 Login Test case with valid credentials', async ({ page }) => {
  
  const intenviorment = new IntEnviorment(page);
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await intenviorment.usernameField();
  await intenviorment.passwordField();
  await intenviorment.signinButton();
 
//await page.waitForTimeout(30000);
  
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
await page.goto('https://int.eta-plus.com/#!/startpage/login');
await invalidtestcase.usernameField();
await invalidtestcase.passwordField();
await invalidtestcase.siginButton();

//await page.waitForTimeout(30000);

});

test('A4 Login Test case with valid email and invalid password credentials',async({page}) =>{
  const validEmailInvalidPassword = new ValidEmailInvalidPassword(page);
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await validEmailInvalidPassword.usernameField();
  await validEmailInvalidPassword.passwordField();
  await validEmailInvalidPassword.siginButton();

})

