const { winningPair, getCardValue } = require('../src/poker')

describe('Poker', () => {
  it("should return ['A', 'A'] for ['K', '3'] and ['A', 'A']", () => {
    const result = winningPair(['K', '3'], ['A', 'A'])

    expect(result).toEqual(['A', 'A'])
  })

  it("should return [] for ['J', 'Q'] and ['3', '7']", () => {
    const result = winningPair(['J', 'Q'], ['3', '7'])

    expect(result).toEqual([])
  })

  it("should return ['9', '9'] for ['9', '9'] and ['7', '7']", () => {
    const result = winningPair(['9', '9'], ['7', '7'])

    expect(result).toEqual(['9', '9'])
  })

  it("should return '14' for 'A'", () => {
    const result = getCardValue('A')

    expect(result).toEqual('14')
  })
})
