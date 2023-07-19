function calculatePairValue(arr) {
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
  return arr.reduce((sum, card) => sum + cardValues[card], 0)
}

function winningPair(firstPair, secondPair) {
  if (firstPair[0] !== firstPair[1] && secondPair[0] !== secondPair[1])
    return []

  if (firstPair[0] === firstPair[1]) {
    const firstValue = calculatePairValue(firstPair)

    if (secondPair[0] === secondPair[1]) {
      const secondValue = calculatePairValue(secondPair)
      if (secondValue > firstValue) return secondPair
    }
    return firstPair
  }

  return secondPair
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
