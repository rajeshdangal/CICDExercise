const { test, expect } = require('@playwright/test')

test('front page can be opened', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Pokemon List')).toBeVisible()
})

test('pokemon list is displayed', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Pokemon List' })).toBeVisible()
  const pokemonItems = await page.locator('li').count()
  expect(pokemonItems).toBeGreaterThan(0)
})

test('can navigate to pokemon detail page', async ({ page }) => {
  await page.goto('/')
  const firstPokemon = await page.locator('li a').first()
  const pokemonName = await firstPokemon.textContent()
  await firstPokemon.click()
  await expect(page.getByRole('heading', { name: pokemonName })).toBeVisible()
})

test('can navigate between pokemon pages', async ({ page }) => {
  await page.goto('/pokemon/charizard')
  await expect(page.getByRole('heading', { name: 'charizard' })).toBeVisible()

  const nextLink = page.getByText('Next')
  if (await nextLink.isVisible()) {
    await nextLink.click()
    await expect(page.getByRole('heading')).not.toHaveText('charizard')
  }
})