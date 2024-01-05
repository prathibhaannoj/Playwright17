// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';


test.describe('Example to demostrate handling Alert', ()=>{


  //hooks example in playwright
  test.beforeEach(async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  })

  test('bydefault handline simple alert by Playwright', async ({page})=>{


    //By default, dialogs are auto-dismissed by Playwright

    //using css selector
    await page.locator('[onclick="jsAlert()"]').click()

    await page.waitForTimeout(5000)


  })

  test.only('handline simple alert - with some validation', async ({page})=>{


    //By default, dialogs are auto-dismissed by Playwright

    //using css selector


    //dialog handler event
    page.on('dialog', async (dialog)=>{

      //validation on alert --- I am a JS Alert
      expect(dialog.message()).toEqual('I am a JS Alert');
      expect(dialog.message()).toContain('I am a JS Alert');
      expect(dialog.type()).toContain('alert');
      
      await dialog.accept();

    })

    await page.locator('[onclick="jsAlert()"]').click()

    await page.waitForTimeout(5000)


  })


  test('handline confirm alert', ({page})=>{


  })



  test('handline prompt alert', ({page})=>{


  })



})
