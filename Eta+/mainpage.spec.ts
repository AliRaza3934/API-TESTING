import { test, expect } from '@playwright/test';
import{chromium,Page,Browser} from '@playwright/test';
import { IntEnviorment } from './pages/loginPage';

//let loginFunc = new Login();

//A2 Fist Login Test case
test('Int Enviorment', async ({ page }) => {
  
  const intenviorment = new IntEnviorment(page);
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await intenviorment.usernameField();
  await intenviorment.passwordField();
  await intenviorment.signinButton();
 
  await page.waitForTimeout(50000)
  
  //test.setTimeout(30000);
 // await  loginFunc.loginUser("ETA+PMO","Mav34733");
  
// Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Noch Keinen Account?/                        
});
//test.skip('',async ({ page}) => {
 //await  loginFunc.loginUser("ETA+PMO","Mav34733");
//});
