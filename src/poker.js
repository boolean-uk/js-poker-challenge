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
    const hands = this.removeNonPairsOrTriosFromArray(arr)
    if (hands.length === 0) return hands

    let biggestPair = hands[0]
    for (let i = 1; i < hands.length; i++) {
      if (scoreBoard[hands[i][0]] > scoreBoard[biggestPair[0]]) {
        biggestPair = hands[i]
      }
    }

    return biggestPair
  }

  winning3CardHand (arr) {
    const hands = this.removeNonPairsOrTriosFromArray(arr)
    if (hands.length === 0) return hands

    const pairs = []
    const trios = []
    for (let i = 0; i < hands.length; i++) {
      if (hands[i].length === 2) {
        pairs.push(hands[i])
        continue
      }
      if (hands[i].length === 3) {
        trios.push(hands[i])
        continue
      }
    }

    let biggestHand
    if (trios.length > 0) {
      biggestHand = trios[0]
      for (let i = 1; i < trios.length; i++) {
        if (scoreBoard[trios[i][0]] > scoreBoard[biggestHand[0]]) {
          biggestHand = trios[i]
        }
      }
      return biggestHand
    }

    biggestHand = pairs[0]
    for (let i = 1; i < pairs.length; i++) {
      if (scoreBoard[pairs[i][0]] > scoreBoard[biggestHand[0]]) {
        biggestHand = pairs[i]
      }
    }
    return biggestHand
  }

  isPairOrTrio (hand) {
    hand = new Set(hand)
    return hand.size === 1
  }

  removeNonPairs (...params) {
    const hands = Array.from(arguments)
    for (let i = hands.length - 1; i >= 0; i--) {
      if (!this.isPairOrTrio(hands[i])) {
        hands.splice(i, 1)
      }
    }
    return hands
  }

  removeNonPairsOrTriosFromArray (arr) {
    const hands = arr
    for (let i = hands.length - 1; i >= 0; i--) {
      if (!this.isPairOrTrio(hands[i])) {
        hands.splice(i, 1)
      }
    }
    return hands
  }
}
module.exports = Poker
