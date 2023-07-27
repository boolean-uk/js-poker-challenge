const cardValue = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}

function getCardValue(card) {
  return cardValue[card] || card
}

function isPair(hand) {
  return hand.length === 2 && getCardValue(hand[0]) === getCardValue(hand[1])
}

function getHandValue(hand) {
  return parseInt(getCardValue(hand[0]))
}

function winningPair(pair1, pair2) {
  if (isPair(pair1) && isPair(pair2)) {
    return getHandValue(pair1) < getHandValue(pair2) ? pair2 : pair1
  } else if (isPair(pair1) || isPair(pair2)) {
    return isPair(pair1) ? pair1 : pair2
  } else {
    return []
  }
}

// Extension criteria

function winningPairFromArray(pairs) {
  if (pairs.length === 0) {
    return []
  }

  let bestPair = []

  for (let i = 0; i < pairs.length; i++) {
    bestPair = winningPair(bestPair, pairs[i])
  }

  return bestPair
}

function isHandATriple(hand) {
  const value = getCardValue(hand[0])
  return (
    hand.length === 3 &&
    getCardValue(hand[1]) === value &&
    getCardValue(hand[2]) === value
  )
}

function winningHand(hand1, hand2) {
  if (isHandATriple(hand1) && isHandATriple(hand2)) {
    return getHandValue(hand1) < getHandValue(hand2) ? hand2 : hand1
  } else if (isHandATriple(hand1) || isHandATriple(hand2)) {
    return isHandATriple(hand1) ? hand1 : hand2
  } else {
    return winningPair(hand1, hand2)
  }
}

function winning3CardHand(hands) {
  if (hands.length === 0) {
    return []
  }

  let bestHand = []

  for (let i = 0; i < hands.length; i++) {
    bestHand = winningHand(bestHand, hands[i])
  }

  return bestHand
}

module.exports = {
  getCardValue,
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
