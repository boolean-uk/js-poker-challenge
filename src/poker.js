function winningPair(
  [pairOneValueOne, pairOneValueTwo],
  [pairTwoValueOne, pairTwoValueTwo]
) {
  const cardValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]

  if (
    pairOneValueOne !== pairOneValueTwo &&
    pairTwoValueOne !== pairTwoValueTwo
  )
    return []
  if (
    pairOneValueOne === pairOneValueTwo &&
    pairTwoValueOne === pairTwoValueTwo
  ) {
    if (
      cardValues.indexOf(pairOneValueOne) > cardValues.indexOf(pairTwoValueOne)
    )
      return [pairOneValueOne, pairOneValueTwo]
    return [pairTwoValueOne, pairTwoValueTwo]
  }
  if (
    pairOneValueOne === pairOneValueTwo &&
    pairTwoValueOne !== pairTwoValueTwo
  )
    return [pairOneValueOne, pairOneValueTwo]
  if (
    pairOneValueOne !== pairOneValueTwo &&
    pairTwoValueOne === pairTwoValueTwo
  )
    return [pairTwoValueOne, pairTwoValueTwo]
}

// Extension criteria

function winningPairFromArray(pairsOfCards) {
  const highestPair = [0, 0]
  const cardValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]

  pairsOfCards.forEach(([valueOne, valueTwo]) => {
    if (valueOne === valueTwo) {
      if (cardValues.indexOf(valueOne) > cardValues.indexOf(highestPair[0])) {
        highestPair[0] = valueOne
        highestPair[1] = valueTwo
      }
    }
  })

  if (highestPair[0] === 0) highestPair.length = 0

  return highestPair
}

function winning3CardHand(arraysOfCards) {
  const cardValues = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ]

  let maxIndex = -1
  let maxValue = cardValues.indexOf('2')
  arraysOfCards.forEach((arrayOfCards, index) => {
    if (
      arrayOfCards.length === 3 &&
      arrayOfCards[0] === arrayOfCards[1] &&
      arrayOfCards[1] === arrayOfCards[2]
    ) {
      const current = cardValues.indexOf(arrayOfCards[0])
      if (current >= maxValue) {
        maxValue = current
        maxIndex = index
      }
    }
  })

  if (maxIndex !== -1) return arraysOfCards[maxIndex]

  arraysOfCards.forEach((arrayOfCards, index) => {
    if (arrayOfCards.length === 2 && arrayOfCards[0] === arrayOfCards[1]) {
      const current = cardValues.indexOf(arrayOfCards[0])
      if (current >= maxValue) {
        maxValue = current
        maxIndex = index
      }
    }
  })

  if (maxIndex !== -1) return arraysOfCards[maxIndex]

  return []
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
