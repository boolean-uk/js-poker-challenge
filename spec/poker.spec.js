const { winningPair } = require('../src/poker')

describe('Poker', () => {
  it("should return ['A', 'A'] for [['K', 'K'], ['A', 'A']]", () => {
    const result = winningPair(['K', 'K'], ['A', 'A'])
    expect(result).toEqual([])
  })

  it("should return [] for ['J', 'Q'] and ['3', '7']", () => {
    const result = winningPair(['J', 'Q'], ['3', '7'])
    expect(result).toEqual([])
  })

  it("should return ['9', '9'] for ['9', '9'] and ['7', '7']", () => {
    const result = winningPair(['9', '9'], ['7', '7'])
    expect(result).toEqual([])
  })
})
