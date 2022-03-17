const scoreBoard = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

class Poker {
  winningPair (...params) {
    const hands = this.removeNonPairsOrTrios(...params)
    if (hands.length === 0) return hands

    return this.findBest(hands)
  }

  winningPairFromArray (arr) {
    return this.winningPair(...arr)
  }

  winning3CardHand (arr) {
    const hands = this.removeNonPairsOrTrios(...arr)
    if (hands.length === 0) return hands

    const pairs = []
    const trios = []
    for (const hand of hands) {
      hand.length === 2 ? pairs.push(hand) : trios.push(hand)
    }

    if (trios.length > 0) return this.findBest(trios) // If there are trios, return the best.

    return this.findBest(pairs) // Otherwise return the best pair.
  }

  isPairOrTrio (hand) {
    hand = new Set(hand)
    return hand.size === 1
  }

  removeNonPairsOrTrios (...params) {
    const hands = params
    for (let i = hands.length - 1; i >= 0; i--) {
      if (!this.isPairOrTrio(hands[i])) hands.splice(i, 1)
    }
    return hands
  }

  findBest (arr) {
    let best = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (scoreBoard[arr[i][0]] > scoreBoard[best[0]]) best = arr[i]
    }
    return best
  }
}
module.exports = Poker
