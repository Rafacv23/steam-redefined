import { chromium } from 'playwright'
;(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    locale: 'en-US',
  })

  const page = await context.newPage()
  const url = 'https://store.steampowered.com/agecheck/app/381210/'
  await page.goto(url, { waitUntil: 'domcontentloaded' })

  // Step 1: Accept Cookies
  const acceptButton = await page.$('#acceptAllButton')
  if (acceptButton) {
    await acceptButton.click()
    console.log('✅ Cookies accepted')
    await page.waitForTimeout(1000)
  }

  // Step 2: Age Check Handling
  if (page.url().includes('/agecheck/')) {
    console.log('🔞 Age check detected, submitting birthdate...')
    await page.selectOption('#ageYear', '1990')
    await page.click('#view_product_page_btn')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1000)
  }

  // Step 3: Grab game title from final page
  await page.waitForSelector('.apphub_AppName', { timeout: 10000 })
  const title = await page.$eval('.apphub_AppName', (el) =>
    el.textContent?.trim(),
  )
  console.log('🎮 Game title:', title)

  await browser.close()
})()
