// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('Example to Capture Screenshot', ()=>{

  //reference link : https://playwright.dev/docs/screenshots

  
  test.only('element screenshot', async ({page})=>{

    await page.goto('https://demo.opencart.com/');

    await page.click('text=MacBook')


    //expect ---- fail test

    await page.waitForTimeout(5000)
    
  })
  


})

