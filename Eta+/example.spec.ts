import { test, expect } from '@playwright/test';
import{chromium,Page,Browser} from '@playwright/test';
import { Login } from './pages/EtaLoginPage';
import { pageFixture } from './hooks/pageFixture';

let loginFunc = new Login();

test('Int Enviorment', async ({ page }) => {
  await page.goto('https://int.eta-plus.com/#!/startpage/login');
  await  loginFunc.loginUser("ETA+PMO","Mav34733");
  
// Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/Noch Keinen Account?/                        
});
//test.skip('',async ({ page}) => {
 //await  loginFunc.loginUser("ETA+PMO","Mav34733");
//});
