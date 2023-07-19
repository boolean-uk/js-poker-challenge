const points = [
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

function comparePoints(arr1, arr2) {
  return points.indexOf(arr1[0]) - points.indexOf(arr2[0])
}

function isPair(arr) {
  return arr[0] === arr[1]
}

function winningPair(arr1, arr2) {
  // if (arr1.length !== 2 || arr2.length !== 2) return []
  if (!isPair(arr1) || !isPair(arr2)) return []
  else {
    const diff = comparePoints(arr1, arr2)
    if (diff >= 0) return arr1
    else return arr2
  }
}

// Extension criteria

function winningPairFromArray(arrayOfPairs) {
  let winning = []
  for (let i = 0; i < arrayOfPairs.length; i++) {
    if (isPair(arrayOfPairs[i])) {
      if (winning === []) winning = arrayOfPairs[i]
      const currentPair = arrayOfPairs[i]
      const pair = winningPair(currentPair, winning)
      winning = pair
    }
  }
  return winning
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
