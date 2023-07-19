/* eslint-disable no-const-assign */
function getCardValue(card) {
  if (card === 'A') {
    return 14
  } else if (card === 'K') {
    return 13
  } else if (card === 'Q') {
    return 12
  } else if (card === 'J') {
    return 11
  }
  return card
}

function winningPair(pair1, pair2) {
  if (pair1[0] === pair1[1]) {
    if (pair2[0] === pair2[1]) {
      const value1 = getCardValue(pair1[0])
      const value2 = getCardValue(pair2[0])
      return value1 > value2 ? pair1 : pair2
    } else {
      return pair1
    }
  } else if (pair2[0] === pair2[1]) {
    return pair2
  }
  return []
}

function winningPairFromArray(arr) {
  return arr.reduce((winner, pair) => {
    const currentPair = winningPair(winner, pair)
    return currentPair
  }, [])
}

function threeCards(hand) {
  return hand.length === 3 && hand[0] === hand[1] && hand[1] === hand[2]
}

function winningTriplets(triple1, triple2) {
  if (threeCards(triple1) && threeCards(triple2)) {
    const value1 = getCardValue(triple1[0])
    const value2 = getCardValue(triple2[0])
    return value1 > value2 ? triple1 : triple2
  } else if (threeCards(triple1)) {
    return triple1
  } else {
    return triple2
  }
}

function winning3CardHand(hand) {
  const triplets = hand.filter((hand) => {
    if (hand.length === 3) {
      return threeCards(hand)
    }
  })
  if (triplets.length === 0) {
    return winningPairFromArray(hand.filter((hand) => hand.length === 2))
  }
  let currentWinningHand = triplets[0]

  for (let i = 1; i < triplets.length; i++) {
    currentWinningHand = winningTriplets(currentWinningHand, triplets[i])
  }
  return currentWinningHand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
