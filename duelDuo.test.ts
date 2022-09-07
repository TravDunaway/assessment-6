
import { Builder, Capabilities, By, Button } from "selenium-webdriver"
import { isExpressionStatement } from "typescript"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

// test('clickable character-all button', async () => {
//     const button = await driver.findElement(By.id('see-all'))
//     const displayed = await button.isDisplayed()
//     expect(displayed).toBe(true)
// })

test('See the character button', async () => {
    await driver.findElement(By.id('see-all')).click()
    const characterButton = await driver.findElement(By.css('choices'))
    const displayed = await characterButton.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(8000)
})

// test('draw-action button', async () => {
//     await driver.findElement(By.id('draw')).click()
//     // await driver.sleep(8000)
// })