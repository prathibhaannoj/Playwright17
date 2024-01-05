// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';

test.describe('Example to Capture Screenshot', ()=>{

  //reference link : https://playwright.dev/docs/screenshots

  test.skip('page screenshot', async ({page})=>{

    await page.goto('https://demo.opencart.com/');

    await page.waitForTimeout(5000)

    await page.screenshot({path: 'tests/screenshotExample/' + Date.now()+'_HomePage.png'})

    
  })


  test.skip('full page screenshot', async ({page})=>{

    //Full page screenshot is a screenshot of a full scrollable page, 
    //as if you had a very tall screen and the page could fit it entirely

    await page.goto('https://demo.opencart.com/');
    await page.screenshot({path: 'tests/screenshotExample/' + Date.now()+'_FullPage.png', fullPage: true})



    await page.goto('https://demo.opencart.com/');


    
  })


  test.only('element screenshot', async ({page})=>{

    await page.goto('https://demo.opencart.com/');


    await page.locator('//*[@id="content"]/div[2]/div[1]').screenshot({path: 'tests/screenshotExample/' + Date.now()+'_Mackbook.png'})
    await page.locator('//*[@id="content"]/div[2]/div[2]').screenshot({path: 'tests/screenshotExample/' + Date.now()+'_Iphone.png'})


    
  })
  


})



