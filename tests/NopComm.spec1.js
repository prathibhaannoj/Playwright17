const {test, expect} = require('@playwright/test')


test('verify application title', async ({page})=>{

    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')

    await expect(page).toHaveTitle("Just a moment...");

    await expect(page.locator('#username')).toBeVisible();

})
