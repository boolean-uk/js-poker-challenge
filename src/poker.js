const cardsValues = {
  undefined: 0,
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
  const pom = Array.from(array)
  pom.sort().reverse()
  return pom[0] === pom[1]
}

function isThree(array) {
  return array[0] === array[1] && array[1] === array[2]
}

function winningPair(array1, array2) {
  let result = []
  if (isPair(array1)) result = array1
  if (isPair(array2)) result = array2
  if (isPair(array1) && isPair(array2))
    result = cardsValues[array1[0]] > cardsValues[array2[0]] ? array1 : array2
  return result
}

function winningThree(array1, array2) {
  let result = []
  if (isThree(array1)) result = array1
  if (isThree(array2)) result = array2
  if (isThree(array1) && isThree(array2))
    result = cardsValues[array1[0]] > cardsValues[array2[0]] ? array1 : array2
  return result
}
// Extension criteria

function winning3CardHand(array) {
  let win = []
  let hadThree = false
  for (let i = 0; i < array.length; i++) {
    if (isThree(array[i])) hadThree = true
    if (hadThree) win = winningThree(array[i], win)
    else win = winningPair(array[i], win)
  }
  return win
}

function winningPairFromArray(array) {
  let win = []
  for (let i = 0; i < array.length; i++) {
    win = winningPair(array[i], win)
  }
  return win
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
