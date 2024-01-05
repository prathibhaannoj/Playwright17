// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
import exp from 'constants';


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

  test('handline simple alert - with some validation', async ({page})=>{


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


  test('handline confirm alert - click on Cancel button', async ({page})=>{


    page.on('dialog', async (dialog)=>{

      //validation on alert --- I am a JS Confirm
      expect(dialog.message()).toEqual('I am a JS Confirm');
      expect(dialog.message()).toContain('I am a JS Confirm');
      expect(dialog.type()).toContain('confirm');
      
      // await dialog.accept();        //close by using OK button
      await dialog.dismiss();       //close by using Cancel button

    })


    //using css/xpath
    // await page.locator('[onclick="jsConfirm()"]').click()

    // using text locate 
    await page.locator('text=Click for JS Confirm').click()

    await page.waitForTimeout(5000)

    //validation step

    await expect(page.locator('p#result')).toHaveText('You clicked: Cancel')

    await page.waitForTimeout(5000)

  })




  test('handline confirm alert - click OK button', async ({page})=>{


    page.on('dialog', async (dialog)=>{

      //validation on alert --- I am a JS Confirm
      expect(dialog.message()).toEqual('I am a JS Confirm');
      expect(dialog.message()).toContain('I am a JS Confirm');
      expect(dialog.type()).toContain('confirm');
      
      await dialog.accept();        //close by using OK button
      // await dialog.dismiss();       //close by using Cancel button

    })


    //using css/xpath
    // await page.locator('[onclick="jsConfirm()"]').click()

    // using text locate 
    await page.locator('text=Click for JS Confirm').click()

    await page.waitForTimeout(5000)

    //validation step

    await expect(page.locator('p#result')).toHaveText('You clicked: Ok')

    await page.waitForTimeout(5000)

  })


  test('Prompt Dailog', async ({page})=>{

    var ename;

    page.on('dialog', async (dialog)=>{

      //validation on alert --- I am a JS prompt
      expect(dialog.message()).toEqual('I am a JS prompt');
      expect(dialog.message()).toContain('I am a JS prompt');
      expect(dialog.type()).toContain('prompt');
      
      //enter value into prompt dialog
      ename = "Sanjeev From StripData"
      await dialog.accept(ename);        //close by using OK button
      

    })

    //text locator
    await page.locator('text=Click for JS Prompt').click()

    await page.waitForTimeout(5000)


    await console.log(ename);

    //validation step

    await expect(page.locator('p#result')).toHaveText('You entered: '+ ename)

    await page.waitForTimeout(5000)


  })



})
