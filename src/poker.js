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
  // static scoreBoard = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5,
  //                       6: 6, 7: 7, 8: 8, 9: 9, 10: 10,
  //                       J: 11, Q: 12, K: 13, A: 14 }

  winningPair (hand1, hand2) {
    const hands = this.removeNonPairs(hand1, hand2)
    if (hands.length === 0) return hands

    let biggestPair = hands[0]
    for (let i = 1; i < hands.length; i++) {
      if (scoreBoard[hands[i][0]] > scoreBoard[biggestPair[0]]) {
        biggestPair = hands[i]
      }
    }

    return biggestPair
  }

  winningPairFromArray (arr) {
    const hands = this.removeNonPairsFromArray(arr)
    if (hands.length === 0) return hands

    let biggestPair = hands[0]
    for (let i = 1; i < hands.length; i++) {
      if (scoreBoard[hands[i][0]] > scoreBoard[biggestPair[0]]) {
        biggestPair = hands[i]
      }
    }

    return biggestPair
  }

  isPair (hand) {
    hand = new Set(hand)
    return hand.size === 1
  }

  removeNonPairs (...params) {
    const hands = Array.from(arguments)
    for (let i = hands.length - 1; i >= 0; i--) {
      if (!this.isPair(hands[i])) {
        hands.splice(i, 1)
      }
    }
    return hands
  }

  removeNonPairsFromArray (arr) {
    const hands = arr
    for (let i = hands.length - 1; i >= 0; i--) {
      if (!this.isPair(hands[i])) {
        hands.splice(i, 1)
      }
    }
    return hands
  }
}

module.exports = Poker
