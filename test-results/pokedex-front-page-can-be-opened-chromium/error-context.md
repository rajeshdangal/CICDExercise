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
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Pokemon List')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - link "bulbasaur" [ref=e4] [cursor=pointer]:
      - /url: /pokemon/bulbasaur
      - generic [ref=e5]: bulbasaur
    - link "ivysaur" [ref=e6] [cursor=pointer]:
      - /url: /pokemon/ivysaur
      - generic [ref=e7]: ivysaur
    - link "venusaur" [ref=e8] [cursor=pointer]:
      - /url: /pokemon/venusaur
      - generic [ref=e9]: venusaur
    - link "charmander" [ref=e10] [cursor=pointer]:
      - /url: /pokemon/charmander
      - generic [ref=e11]: charmander
    - link "charmeleon" [ref=e12] [cursor=pointer]:
      - /url: /pokemon/charmeleon
      - generic [ref=e13]: charmeleon
    - link "charizard" [ref=e14] [cursor=pointer]:
      - /url: /pokemon/charizard
      - generic [ref=e15]: charizard
    - link "squirtle" [ref=e16] [cursor=pointer]:
      - /url: /pokemon/squirtle
      - generic [ref=e17]: squirtle
    - link "wartortle" [ref=e18] [cursor=pointer]:
      - /url: /pokemon/wartortle
      - generic [ref=e19]: wartortle
    - link "blastoise" [ref=e20] [cursor=pointer]:
      - /url: /pokemon/blastoise
      - generic [ref=e21]: blastoise
    - link "caterpie" [ref=e22] [cursor=pointer]:
      - /url: /pokemon/caterpie
      - generic [ref=e23]: caterpie
    - link "metapod" [ref=e24] [cursor=pointer]:
      - /url: /pokemon/metapod
      - generic [ref=e25]: metapod
    - link "butterfree" [ref=e26] [cursor=pointer]:
      - /url: /pokemon/butterfree
      - generic [ref=e27]: butterfree
    - link "weedle" [ref=e28] [cursor=pointer]:
      - /url: /pokemon/weedle
      - generic [ref=e29]: weedle
    - link "kakuna" [ref=e30] [cursor=pointer]:
      - /url: /pokemon/kakuna
      - generic [ref=e31]: kakuna
    - link "beedrill" [ref=e32] [cursor=pointer]:
      - /url: /pokemon/beedrill
      - generic [ref=e33]: beedrill
    - link "pidgey" [ref=e34] [cursor=pointer]:
      - /url: /pokemon/pidgey
      - generic [ref=e35]: pidgey
    - link "pidgeotto" [ref=e36] [cursor=pointer]:
      - /url: /pokemon/pidgeotto
      - generic [ref=e37]: pidgeotto
    - link "pidgeot" [ref=e38] [cursor=pointer]:
      - /url: /pokemon/pidgeot
      - generic [ref=e39]: pidgeot
    - link "rattata" [ref=e40] [cursor=pointer]:
      - /url: /pokemon/rattata
      - generic [ref=e41]: rattata
    - link "raticate" [ref=e42] [cursor=pointer]:
      - /url: /pokemon/raticate
      - generic [ref=e43]: raticate
    - link "spearow" [ref=e44] [cursor=pointer]:
      - /url: /pokemon/spearow
      - generic [ref=e45]: spearow
    - link "fearow" [ref=e46] [cursor=pointer]:
      - /url: /pokemon/fearow
      - generic [ref=e47]: fearow
    - link "ekans" [ref=e48] [cursor=pointer]:
      - /url: /pokemon/ekans
      - generic [ref=e49]: ekans
    - link "arbok" [ref=e50] [cursor=pointer]:
      - /url: /pokemon/arbok
      - generic [ref=e51]: arbok
    - link "pikachu" [ref=e52] [cursor=pointer]:
      - /url: /pokemon/pikachu
      - generic [ref=e53]: pikachu
    - link "raichu" [ref=e54] [cursor=pointer]:
      - /url: /pokemon/raichu
      - generic [ref=e55]: raichu
    - link "sandshrew" [ref=e56] [cursor=pointer]:
      - /url: /pokemon/sandshrew
      - generic [ref=e57]: sandshrew
    - link "sandslash" [ref=e58] [cursor=pointer]:
      - /url: /pokemon/sandslash
      - generic [ref=e59]: sandslash
    - link "nidoran-f" [ref=e60] [cursor=pointer]:
      - /url: /pokemon/nidoran-f
      - generic [ref=e61]: nidoran-f
    - link "nidorina" [ref=e62] [cursor=pointer]:
      - /url: /pokemon/nidorina
      - generic [ref=e63]: nidorina
    - link "nidoqueen" [ref=e64] [cursor=pointer]:
      - /url: /pokemon/nidoqueen
      - generic [ref=e65]: nidoqueen
    - link "nidoran-m" [ref=e66] [cursor=pointer]:
      - /url: /pokemon/nidoran-m
      - generic [ref=e67]: nidoran-m
    - link "nidorino" [ref=e68] [cursor=pointer]:
      - /url: /pokemon/nidorino
      - generic [ref=e69]: nidorino
    - link "nidoking" [ref=e70] [cursor=pointer]:
      - /url: /pokemon/nidoking
      - generic [ref=e71]: nidoking
    - link "clefairy" [ref=e72] [cursor=pointer]:
      - /url: /pokemon/clefairy
      - generic [ref=e73]: clefairy
    - link "clefable" [ref=e74] [cursor=pointer]:
      - /url: /pokemon/clefable
      - generic [ref=e75]: clefable
    - link "vulpix" [ref=e76] [cursor=pointer]:
      - /url: /pokemon/vulpix
      - generic [ref=e77]: vulpix
    - link "ninetales" [ref=e78] [cursor=pointer]:
      - /url: /pokemon/ninetales
      - generic [ref=e79]: ninetales
    - link "jigglypuff" [ref=e80] [cursor=pointer]:
      - /url: /pokemon/jigglypuff
      - generic [ref=e81]: jigglypuff
    - link "wigglytuff" [ref=e82] [cursor=pointer]:
      - /url: /pokemon/wigglytuff
      - generic [ref=e83]: wigglytuff
    - link "zubat" [ref=e84] [cursor=pointer]:
      - /url: /pokemon/zubat
      - generic [ref=e85]: zubat
    - link "golbat" [ref=e86] [cursor=pointer]:
      - /url: /pokemon/golbat
      - generic [ref=e87]: golbat
    - link "oddish" [ref=e88] [cursor=pointer]:
      - /url: /pokemon/oddish
      - generic [ref=e89]: oddish
    - link "gloom" [ref=e90] [cursor=pointer]:
      - /url: /pokemon/gloom
      - generic [ref=e91]: gloom
    - link "vileplume" [ref=e92] [cursor=pointer]:
      - /url: /pokemon/vileplume
      - generic [ref=e93]: vileplume
    - link "paras" [ref=e94] [cursor=pointer]:
      - /url: /pokemon/paras
      - generic [ref=e95]: paras
    - link "parasect" [ref=e96] [cursor=pointer]:
      - /url: /pokemon/parasect
      - generic [ref=e97]: parasect
    - link "venonat" [ref=e98] [cursor=pointer]:
      - /url: /pokemon/venonat
      - generic [ref=e99]: venonat
    - link "venomoth" [ref=e100] [cursor=pointer]:
      - /url: /pokemon/venomoth
      - generic [ref=e101]: venomoth
    - link "diglett" [ref=e102] [cursor=pointer]:
      - /url: /pokemon/diglett
      - generic [ref=e103]: diglett
  - contentinfo [ref=e104]: Pokémon and Pokémon character names are trademarks of Nintendo.
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