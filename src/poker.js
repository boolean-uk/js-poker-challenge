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

function isValidFigure(arr) {
  return arr.every((e) => e === arr[0])
}

function winningPair(arr1, arr2) {
  return winningFigure(arr1, arr2)
}

function winningFigure(arr1, arr2) {
  if (!isValidFigure(arr1) && !isValidFigure(arr2)) return []
  else if (!isValidFigure(arr1)) return arr2
  else if (!isValidFigure(arr2)) return arr1
  else {
    const diff = comparePoints(arr1, arr2)
    if (diff >= 0) return arr1
    else return arr2
  }
}

function winningPairFromArray(arrayOfPairs) {
  let winning = []
  for (let i = 0; i < arrayOfPairs.length; i++) {
    if (isValidFigure(arrayOfPairs[i])) {
      if (winning === []) winning = arrayOfPairs[i]
      const currentPair = arrayOfPairs[i]
      const pair = winningFigure(currentPair, winning)
      winning = pair
    }
  }
  return winning
}

function winningThreeFromArray(arrayOfFigures) {
  let winning = []
  for (let i = 0; i < arrayOfFigures.length; i++) {
    if (isValidFigure(arrayOfFigures[i]) && arrayOfFigures[i].length === 3) {
      if (winning === []) winning = arrayOfFigures[i]
      const currentThree = arrayOfFigures[i]
      const three = winningFigure(currentThree, winning)
      winning = three
    }
  }
  return winning
}

function winning3CardHand(arrayOfFigures) {
  let winning = []
  winning = winningThreeFromArray(arrayOfFigures)
  if (winning.length === 0) {
    winning = winningPairFromArray(arrayOfFigures)
  }
  return winning
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
