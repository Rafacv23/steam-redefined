export async function acceptCookiesIfPresent(page: any) {
  const acceptButton = await page.$('#acceptAllButton')
  if (acceptButton) {
    await acceptButton.click()
    console.log('✅ Cookies accepted')
    await page.waitForTimeout(1000)
  }
}

export async function bypassAgeCheckIfPresent(page: any) {
  if (page.url().includes('/agecheck/')) {
    console.log('🔞 Age check detected')
    await page.selectOption('#ageYear', '1990')
    await page.click('#view_product_page_btn')
    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1000)
  }
}

export async function scrapeGameDetails(page: any, url: string) {
  await page.goto(url, { waitUntil: 'domcontentloaded' })

  await acceptCookiesIfPresent(page)
  await bypassAgeCheckIfPresent(page)

  await page.waitForSelector('.apphub_AppName', { timeout: 10000 })

  const title: string = await page.$eval(
    '.apphub_AppName',
    (el: Element) => el.textContent?.trim() ?? '',
  )
  const description = await page
    .$eval('.game_description_snippet', (el: Element) => el.textContent?.trim())
    .catch(() => 'No description')
  const price = await page
    .$eval('.game_purchase_price, .discount_final_price', (el: Element) =>
      el.textContent?.trim(),
    )
    .catch(() => 'No price listed')

  const poster = await page
    .$eval('.game_header_image_full', (el: Element) => el.getAttribute('src'))
    .catch(() => 'No poster image')

  const developer = await page
    .$eval('#developers_list a', (el: Element) => el.textContent?.trim())
    .catch(() => 'No developer listed')

  const publisher = await page
    .$eval('#publisher_list a', (el: Element) => el.textContent?.trim())
    .catch(() => 'No publisher listed')

  const tags = await page
    .$eval('.glance_tags popular_tags', (el: Element) => {
      const tagElements = Array.from(el.querySelectorAll('a'))
        .map((el: Element) => el.textContent?.trim())
        .filter((tag): tag is string => !!tag && tag !== '')
        .map((tag: string) => tag.toLowerCase())
        .filter((tag: string) => tag !== '')
      return tagElements
    })
    .catch(() => [])

  const features = await page
    .$eval('.game_area_features_list_ctn', (el: Element) => {
      const featureElements = Array.from(el.querySelectorAll('a'))
        .map((el: Element) => el.textContent?.trim())
        .filter((tag): tag is string => !!tag && tag !== '')
        .map((tag: string) => tag.toLowerCase())
        .filter((tag: string) => tag !== '')
      return featureElements
    })
    .catch(() => [])

  const languages = await page
    .$eval('.game_language_options', (el: Element) => {
      const languageElements = Array.from(el.querySelectorAll('span'))
        .map((el: Element) => el.textContent?.trim())
        .filter((tag): tag is string => !!tag && tag !== '')
        .map((tag: string) => tag.toLowerCase())
        .filter((tag: string) => tag !== '')
      return languageElements
    })
    .catch(() => [])

  const gameVersions: { title: string; price: string }[] = []
  const dlcs: { title: string; price: string }[] = []

  // Scrape Game Versions
  const gameVersionsData: { title: string; price: string }[] =
    await page.$$eval(
      '.game_area_purchase_game_wrapper',
      (wrappers: Element[]) => {
        return wrappers
          .map((wrapper) => {
            const title = (
              wrapper.querySelector('h2.title')?.textContent ?? ''
            ).trim()
            const price = (
              wrapper.querySelector('.game_purchase_price')?.textContent ?? ''
            ).trim()
            if (title && price) {
              return { title, price }
            }
            return null
          })
          .filter((item): item is { title: string; price: string } => !!item)
      },
    )
  gameVersions.push(...gameVersionsData)

  // Scrape DLCs
  const dlcsData: { title: string; price: string }[] = await page.$$eval(
    '#gameAreaDLCSection .game_area_dlc_row',
    (dlcRows: Element[]) => {
      return dlcRows
        .map((row) => {
          const title = (
            row.querySelector('.game_area_dlc_name')?.textContent ?? ''
          ).trim()
          const price = (
            row.querySelector('.game_area_dlc_price')?.textContent ?? ''
          ).trim()
          if (title && price) {
            return { title, price }
          }
          return null
        })
        .filter((item): item is { title: string; price: string } => !!item)
    },
  )
  dlcs.push(...dlcsData)

  return {
    title,
    description,
    price,
    url,
    poster,
    developer,
    publisher,
    tags,
    features,
    languages,
    gameVersions,
    dlcs,
  }
}
