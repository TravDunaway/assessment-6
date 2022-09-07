const {shuffleArray} = require('./utils')
const arrayTesting = [9, 0, 1]
const arrayTestingVersionTwp =[]
const arrayTestingTwo = ['nine', 'zero', 'one']


describe('shuffleArray should', () => {
test('checks array answers', () => {
    expect(Array.isArray(shuffleArray(arrayTesting))).toBe(!false)
    expect(Array.isArray(shuffleArray(arrayTestingVersionTwp))).toBe(!false)
    expect(Array.isArray(shuffleArray(arrayTestingTwo))).toBe(!false)
})
test('We can check for size, or length = same or check for if its true', () => {


    expect(shuffleArray(arrayTesting)).toHaveLength(arrayTesting.length)
    // expect(shuffleArray(arrayTesting).length).toBe(arrayTesting)
    expect(shuffleArray(arrayTestingVersionTwp)).toHaveLength(arrayTestingVersionTwp.length)
    // expect(shuffleArray(arrayTestingVersionTwp).length).toBe(arrayTestingVersionTwp)
    expect(shuffleArray(arrayTestingTwo)).toHaveLength(arrayTestingTwo.length)
    // expect(shuffleArray(arrayTestingTwo).length).toBe(arrayTestingTwo)
    expect(shuffleArray(arrayTesting)).toBeTruthy()

}
)
})