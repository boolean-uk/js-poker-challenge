 function isPair(cards) {
  return cards.length === 2 && cards[0] === cards[1]
}

function isThreeOfAKind(cards) {
  return cards.length === 3 && cards[0] === cards[1] && cards[1] === cards[2]
}

function winningPair(pair1, pair2) {
  if (!isPair(pair1) && !isPair(pair2)) {
    return []
  }

  const getValue = (card) => {
    const values = { A: 14, K: 13, Q: 12, J: 11 }
    return isNaN(card) ? values[card] : parseInt(card, 10)
  }

  const pair1Value = isPair(pair1) ? getValue(pair1[0]) : 0
  const pair2Value = isPair(pair2) ? getValue(pair2[0]) : 0

  return pair1Value >= pair2Value ? pair1 : pair2
}

// Extension criteria
function winningPairFromArray(pairsArray) {
  if (!Array.isArray(pairsArray) || pairsArray.length === 0) {
    return []
  }

  return pairsArray.reduce((currentWinningPair, pair) => {
    const currentPair = winningPair(currentWinningPair, pair)
    return currentPair
  }, [])
}

function winning3CardHand(hands) {
  if (!Array.isArray(hands) || hands.length === 0) {
    return []
  }

  const getValue = (card) => {
    const values = { A: 14, K: 13, Q: 12, J: 11 }
    return isNaN(card) ? values[card] : parseInt(card, 10)
  }

  const hasThreeOfAKind = hands.some(isThreeOfAKind)
  if (hasThreeOfAKind) {
    const threeOfAKindHands = hands.filter(isThreeOfAKind)
    return threeOfAKindHands[0]
  }

  let highestCardValue = 0
  let winningHands = []

  for (const hand of hands) {
    const currentCardValue = Math.max(...hand.map((card) => getValue(card)))

    if (currentCardValue > highestCardValue) {
      winningHands = [hand]
      highestCardValue = currentCardValue
    } else if (currentCardValue === highestCardValue) {
      winningHands.push(hand)
    }
  }

  if (winningHands.length === 0) {
    return []
  }

  // If there's no three of a kind, find the best hand based on the highest non-pair card value
  let bestHand = winningHands[0]
  for (const hand of winningHands) {
    const nonPairCards = hand.filter((card) => !isPair([card]) && !isThreeOfAKind([card]))
    const maxNonPairValue = Math.max(...nonPairCards.map((card) => getValue(card)))
    const bestHandNonPairValue = Math.max(...bestHand.filter((card) => !isPair([card]) && !isThreeOfAKind([card])).map((card) => getValue(card)))

    if (maxNonPairValue > bestHandNonPairValue) {
      bestHand = hand
    }
  }

  return bestHand
}



module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
