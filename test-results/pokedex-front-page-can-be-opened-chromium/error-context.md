# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokedex.spec.js >> front page can be opened
- Location: e2e-tests/pokedex.spec.js:3:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Pokemon List')
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Pokemon List')

```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('front page can be opened', async ({ page }) => {
  4  |   await page.goto('/')
> 5  |   await expect(page.getByText('Pokemon List')).toBeVisible()
     |                                                ^ Error: expect(locator).toBeVisible() failed
  6  | })
  7  | 
  8  | test('pokemon list is displayed', async ({ page }) => {
  9  |   await page.goto('/')
  10 |   await expect(page.getByRole('heading', { name: 'Pokemon List' })).toBeVisible()
  11 |   const pokemonItems = await page.locator('li').count()
  12 |   expect(pokemonItems).toBeGreaterThan(0)
  13 | })
  14 | 
  15 | test('can navigate to pokemon detail page', async ({ page }) => {
  16 |   await page.goto('/')
  17 |   const firstPokemon = await page.locator('li a').first()
  18 |   const pokemonName = await firstPokemon.textContent()
  19 |   await firstPokemon.click()
  20 |   await expect(page.getByRole('heading', { name: pokemonName })).toBeVisible()
  21 | })
  22 | 
  23 | test('can navigate between pokemon pages', async ({ page }) => {
  24 |   await page.goto('/pokemon/charizard')
  25 |   await expect(page.getByRole('heading', { name: 'charizard' })).toBeVisible()
  26 | 
  27 |   const nextLink = page.getByText('Next')
  28 |   if (await nextLink.isVisible()) {
  29 |     await nextLink.click()
  30 |     await expect(page.getByRole('heading')).not.toHaveText('charizard')
  31 |   }
  32 | })
```