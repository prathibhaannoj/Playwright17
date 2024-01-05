// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';



test.describe('Example to demonstrate frame', ()=>{


  test('frame example ----- single frame', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe');

    const textArea = await page.frameLocator('#mce_0_ifr').locator('#tinymce')

    await textArea.fill('hello Sanjeev, welcome you in today session!!')

    await page.waitForTimeout(5000)
    
    await expect(textArea).toHaveText('hello Sanjeev, welcome you in today session!!')

    
  })


  test.only('frame example ----- nested frame', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames');


    //total frames
    const allFrames = await page.frames()
    console.log("Number of frames: ", allFrames.length);
    

    const topFrame = await page.frameLocator('[name="frame-top"]')


    //nested frame ------ frame ----- inner frame

    //left frame
    const leftFrameBody = await topFrame.frameLocator('[name="frame-left"]').locator('body')
    await expect(leftFrameBody).toHaveText('LEFT')


    //middle frame
    const middleFrameBody = await topFrame.frameLocator('[name="frame-middle"]').locator('body')
    await expect(middleFrameBody).toHaveText('MIDDLE')


    //right frame
    const rightFrameBody = await topFrame.frameLocator('[name="frame-right"]').locator('body')
    await expect(rightFrameBody).toHaveText('RIGHT')


    //bottom frame
    const bottomFrame = await page.frameLocator('[name="frame-bottom"]').locator('body')
    await expect(bottomFrame).toHaveText('BOTTOM')

  })

  


})