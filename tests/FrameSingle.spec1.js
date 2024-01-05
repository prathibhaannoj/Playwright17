// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';



test.describe('Example to demostrate frame', ()=>{


  test('frame example ----- single frame', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const textArea = await page.frameLocator('#mce_0_ifr').locator('#tinymce')

    await textArea.fill('hello Sanjeev, welcome you in today session!!')

    await page.waitForTimeout(5000)
    
    await expect(textArea).toHaveText('hello Sanjeev, welcome you in today session!!')

    
  })

  


})