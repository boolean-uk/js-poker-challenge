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

function winningPair(hand1, hand2) {
  const pair1Card = hand1[0] === hand1[1] ? hand1[0] : undefined
  const pair2Card = hand2[0] === hand2[1] ? hand2[0] : undefined
  if (pair1Card !== undefined && pair2Card !== undefined) {
    return cardValues[pair1Card] > cardValues[pair2Card] ? hand1 : hand2
  } else if (pair1Card !== undefined) {
    return hand1
  } else if (pair2Card !== undefined) {
    return hand2
  } else {
    return []
  }
}

// Extension criteria

function winningPairFromArray(hands) {
  let maxScore = 0
  let winningPair = []

  for (const hand of hands) {
    if (hand[0] === hand[1]) {
      const handScore = cardValues[hand[0]]
      if (handScore > maxScore) {
        maxScore = handScore
        winningPair = hand
      }
    }
  }
  return winningPair
}

function winning3CardHand(hands) {
  let maxScore = 0
  let winningPair = []

  for (const hand of hands) {
    const handScore = checkIfIsWinningPair(hand)
    if (handScore > maxScore) {
      maxScore = handScore
      winningPair = hand
    }
  }

  return winningPair
}

function checkIfIsWinningPair(hand) {
  const bonusForTrippleCard = 100
  const counter = hand.reduce(function (counter, element) {
    counter[element] = (counter[element] || 0) + 1
    return counter
  }, {})

  const maxReps = Math.max(...Object.values(counter))
  const maxCard = Object.keys(counter).find(function (key) {
    return counter[key] === maxReps
  })
  
  if (maxReps > 2){
    return cardValues[maxCard] + bonusForTrippleCard
  }
  else if (maxReps > 1){
    return cardValues[maxCard]
  }
  else return 0
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
