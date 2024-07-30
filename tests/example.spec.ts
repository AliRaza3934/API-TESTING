import { test, expect } from '@playwright/test';

test('GET USERS', async ({ request }) => {
  const response = await request.get("http://reqres.in/api/users?pages=2");	
  console.log(await response.json());		
  expect(response.status()).toBe(200);			
			
});


