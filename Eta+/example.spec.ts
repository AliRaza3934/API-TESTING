import { test, expect } from '@playwright/test';
import{chromium,Page,Browser} from '@playwright/test';
import { IntEnviorment } from './pages/LoginPage';

//let loginFunc = new Login();


test('Int Enviorment', async ({ page }) => {
  const loginPage = new IntEnviorment(page);
  test.setTimeout(30000);
 // await  loginFunc.loginUser("ETA+PMO","Mav34733");
  
// Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Noch Keinen Account?/                        
});
//test.skip('',async ({ page}) => {
 //await  loginFunc.loginUser("ETA+PMO","Mav34733");
//});
