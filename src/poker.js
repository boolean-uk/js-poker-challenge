const isCard = (c) => ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'].includes(c)

const pointsMap = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11
}

const cardValue = (card) => {
  if (!isCard(card)) {
    throw new Error(`Invalid card: ${card}`)
  }
  return pointsMap[card] || parseInt(card)
}

const validatePair = (pair) => {
  if (pair.length !== 2 || !isCard(pair[0]) || !isCard(pair[1])) {
    throw new Error(`Invalid pair: ${pair}`)
  }
}

const isPair = (pair) => {
  try {
    validatePair(pair)
  } catch (veryGoodPractice) {
    return false
  }
  const [c1, c2] = pair
  return c1 === c2
}

const pairValue = (pair) => {
  validatePair(pair)
  const [c1, c2] = pair
  return cardValue(c1) + cardValue(c2)
}

function winningPair(pair1, pair2) {
  if (isPair(pair1) !== isPair(pair2)) {
    return isPair(pair1) ? pair1 : pair2
  }
  if (isPair(pair1) && isPair(pair2)) {
    const pair1Value = pairValue(pair1)
    const pair2Value = pairValue(pair2)
    return pair1Value > pair2Value ? pair1 : pair2
  }
  return []
}

// Extension criteria

function winningPairFromArray(pairs) {
  const filtered = pairs.filter(isPair)
  const maxPoints = Math.max(...filtered.map(pairValue))
  return filtered.filter((p) => pairValue(p) === maxPoints)[0] || []
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
