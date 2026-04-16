# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pokedex.spec.js >> can navigate between pokemon pages
- Location: e2e-tests/pokedex.spec.js:23:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'charizard' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('heading', { name: 'charizard' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link "Previous" [ref=e4] [cursor=pointer]:
        - /url: /pokemon/charmeleon
      - link "Home" [ref=e5] [cursor=pointer]:
        - /url: /
      - link "Next" [ref=e6] [cursor=pointer]:
        - /url: /pokemon/squirtle
    - generic [ref=e9]:
      - generic [ref=e10]: charizard
      - table [ref=e12]:
        - rowgroup [ref=e13]:
          - row "speed 100" [ref=e14]:
            - cell "speed" [ref=e15]
            - cell "100" [ref=e16]
          - row "special defense 85" [ref=e17]:
            - cell "special defense" [ref=e18]
            - cell "85" [ref=e19]
          - row "special attack 109" [ref=e20]:
            - cell "special attack" [ref=e21]
            - cell "109" [ref=e22]
          - row "defense 78" [ref=e23]:
            - cell "defense" [ref=e24]
            - cell "78" [ref=e25]
          - row "attack 84" [ref=e26]:
            - cell "attack" [ref=e27]
            - cell "84" [ref=e28]
          - row "hp 78" [ref=e29]:
            - cell "hp" [ref=e30]
            - cell "78" [ref=e31]
      - generic [ref=e32]:
        - generic [ref=e33]:
          - generic [ref=e34]: Hidden ability
          - generic [ref=e35]: blaze
        - generic [ref=e36]:
          - generic [ref=e37]: Hidden ability
          - generic [ref=e38]: solar power
  - contentinfo [ref=e39]: Pokémon and Pokémon character names are trademarks of Nintendo.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test')
  2  | 
  3  | test('front page can be opened', async ({ page }) => {
  4  |   await page.goto('/')
  5  |   await expect(page.getByText('Pokemon List')).toBeVisible()
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
> 25 |   await expect(page.getByRole('heading', { name: 'charizard' })).toBeVisible()
     |                                                                  ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 |   const nextLink = page.getByText('Next')
  28 |   if (await nextLink.isVisible()) {
  29 |     await nextLink.click()
  30 |     await expect(page.getByRole('heading')).not.toHaveText('charizard')
  31 |   }
  32 | })
```