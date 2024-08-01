import { test, expect } from '@playwright/test';

var userId;
test("GET USERS", async ({ request }) => {
  const response = await request.get('https://fakestoreapi.com/products')
  console.log(await response.json())
  expect(response.status()).toBe(200)		
			
});

test("Create user",async ({request})=>{
    const response = await request.post('https://fakestoreapi.com/products',
              {
                  data:{ title: 'test product',
                  price: 13.5,
                  description: 'lorem ipsum set',
                  image: 'https://i.pravatar.cc',
                  category: 'electronic'
          },
                  headers:{"Accept":"Application/json"}
              });
  console.log(await response.json());
  expect(response.status()).toBe(200);

  var idResponse = await response.json();
  userId = idResponse.id;
});

test("update user",async({request})=>{
  const response = await request.put('https://fakestoreapi.com/products/21',
    { 
      data:{
        
        price: 25,
        }
    });
    console.log(await response.json());
    console.log('price is updated');
    expect(response.status()).toBe(200);
});
test("Delete user",async({request})=>{
  const response = await request.delete('https://fakestoreapi.com/products/21')
  console.log('user is deleted');
  //expect(response.status()).toBe(204);
})
