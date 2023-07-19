function isPair(cards) {
  return cards.length === 2 && cards[0] === cards[1]
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

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
