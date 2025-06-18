import { chromium } from 'playwright'
import { acceptCookiesIfPresent, scrapeGameDetails } from './utils'
;(async () => {
  const browser = await chromium.launch({ headless: false })
  const context = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
    locale: 'en-US',
  })

  const page = await context.newPage()
  await page.goto('https://store.steampowered.com/charts/topselling?cc=us', {
    waitUntil: 'domcontentloaded',
  })

  await acceptCookiesIfPresent(page)

  await page.waitForSelector('tbody tr a._2C5PJOUH6RqyuBNEwaCE9X')
  const gameLinks = await page.$$eval(
    'tbody tr a._2C5PJOUH6RqyuBNEwaCE9X',
    (anchors) => anchors.slice(0, 10).map((a) => (a as HTMLAnchorElement).href),
  )

  const results = []
  for (const gameUrl of gameLinks) {
    console.log(`\n🔗 Visiting ${gameUrl}`)
    const gamePage = await context.newPage()
    const data = await scrapeGameDetails(gamePage, gameUrl)
    console.log('🎮', data)
    results.push(data)
    await gamePage.close()
  }

  await browser.close()

  console.log('\n📦 Scraped Games:')
  console.log(JSON.stringify(results, null, 2))
})()
