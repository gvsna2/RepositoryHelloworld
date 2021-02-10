const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://www.aymen-loukil.com/en/blog-en/google-puppeteer-tutorial-with-examples/')
  
  await page.setViewport({ width: 1366, height: 678 })
  
  await page.waitForSelector('.inside-navigation > #primary-menu > #menu-menu-1 > #menu-item-655 > a')
  await page.click('.inside-navigation > #primary-menu > #menu-menu-1 > #menu-item-655 > a')
  
  await navigationPromise
  console.log("testing");
  await page.waitForSelector('.inside-navigation > #primary-menu > #menu-menu-1 > #menu-item-656 > a')
  await page.click('.inside-navigation > #primary-menu > #menu-menu-1 > #menu-item-656 > a')
  
  await navigationPromise
  
  await browser.close()
})()