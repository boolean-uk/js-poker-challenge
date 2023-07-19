function calculateCardsValue(cards) {
  const cardValues = {
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
  return cards.reduce((sum, card) => sum + cardValues[card], 0)
}

function isBothEqual(twoCards) {
  return (
    Array.isArray(twoCards) &&
    twoCards.length === 2 &&
    twoCards[0] === twoCards[1]
  )
}

function winningPair(firstPair, secondPair) {
  if (!isBothEqual(firstPair) && !isBothEqual(secondPair)) return []

  if (isBothEqual(firstPair)) {
    if (isBothEqual(secondPair)) {
      const firstValue = calculateCardsValue(firstPair)
      const secondValue = calculateCardsValue(secondPair)
      if (secondValue > firstValue) return secondPair
    }
    return firstPair
  }
  return secondPair
}

// Extension criteria

function winningPairFromArray(pokerHand) {
  const winningPair = {
    score: 0,
    set: []
  }

  for (const pair of pokerHand) {
    if (isBothEqual(pair)) {
      const pairScore = calculateCardsValue(pair)
      if (pairScore > winningPair.score) {
        winningPair.score = pairScore
        winningPair.set = pair
      }
    }
  }
  return winningPair.set
}

function isThreeEqual(threeCards) {
  return (
    Array.isArray(threeCards) &&
    threeCards.length === 3 &&
    threeCards[0] === threeCards[1] &&
    threeCards[1] === threeCards[2]
  )
}

function winning3CardHand(pokerHand) {
  const winningHand = {
    score: 0,
    set: []
  }

  for (const cards of pokerHand) {
    if (isThreeEqual(cards)) {
      const tripleScore = calculateCardsValue(cards)
      if (winningHand.set.length !== 3 || tripleScore > winningHand.score) {
        winningHand.score = tripleScore
        winningHand.set = cards
      }
    }
    if (isBothEqual(cards)) {
      const pairScore = calculateCardsValue(cards)
      if (pairScore > winningHand.score && winningHand.set.length !== 3) {
        winningHand.score = pairScore
        winningHand.set = cards
      }
    }
  }

  return winningHand.set
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
