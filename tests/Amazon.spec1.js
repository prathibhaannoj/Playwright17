const {test, expect} = require('@playwright/test')


test('verify application title', async ({page})=>{

    await page.goto('https://www.amazon.in/')

    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");

})
