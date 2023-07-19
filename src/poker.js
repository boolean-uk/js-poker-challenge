const cardsValues = {
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

function isPair(array) {
  return array[0] === array[1]
}

function winningPair(array1, array2) {
  let result = []
  if (isPair(array1)) result = array1
  if (isPair(array2)) result = array2
  if (isPair(array1) && isPair(array2))
    result = cardsValues[array1[0]] > cardsValues[array2[0]] ? array1 : array2
  return result
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
