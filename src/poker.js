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

const isPair = (pair) => {
  const [c1, c2] = pair
  if (pair.length !== 2 || !isCard(c1) || !isCard(c2)) {
    throw new Error(`Invalid pair: ${pair}`)
  }
  return c1 === c2
}


function winningPair(pair1, pair2) {
  if (isPair(pair1) !== isPair(pair2)) {
    return isPair(pair1) ? pair1 : pair2
  }
  if (isPair(pair1) && isPair(pair2)) {
    const pair1Value = cardValue(pair1[0]) + cardValue(pair1[1])
    const pair2Value = cardValue(pair2[0]) + cardValue(pair2[1])
    return pair1Value > pair2Value ? pair1 : pair2
  }
  return []
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
