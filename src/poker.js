class Poker {
  winningPair (arr1, arr2) {
    const cardA = arr1[0]
    const cardB = arr1[1]
    const cardC = arr2[0]
    const cardD = arr2[1]
    const ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ]
    // if no pair return empty array
    if (cardA !== cardB && cardC !== cardD) {
      return []
    }
    // if pair in arr1 then return arr1
    if (cardA === cardB) {
      return arr1
    }
    // if pair in arr2 then return arr2
    if (cardC === cardD) {
      return arr2
    }
    // if both arrays are a pair then return the highest one
    const cardArank = ranks.indexOf(cardA)
    const cardCrank = ranks.indexOf(cardC)

    if (cardA === cardB && cardC === cardD) {
      if (cardArank > cardCrank) {
        return cardA
      } else {
        return cardC
      }
    }
  }
}

module.exports = Poker
