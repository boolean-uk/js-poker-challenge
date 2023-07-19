const arrPoker = [
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

function winningPair(pair1, pair2) {
  let winningCards = []
  if (isIdentical(pair1) || isIdentical(pair2)) {
    let index = -1
    for (let i = 0; i < arrPoker.length; i++) {
      if (arrPoker[i] === pair1[0] && index < i) {
        index = i
        winningCards = pair1
      }
      if (arrPoker[i] === pair2[0] && index < i) {
        index = i
        winningCards = pair2
      }
    }
  }
  return winningCards
}

console.log(winningPair(['J', 'Q'], ['3', '7']))

// Extension criteria

function winningPairFromArray(arrPair) {
  let index = -1
  let winningCards
  if (arrPair.length === 2) {
    return winningPair(arrPair[0], arrPair[1])
  } else {
    for (let i = 0; i < arrPair.length; i++) {
      if (isIdentical(arrPair[i])) {
        for (let p = 0; p < arrPoker.length; p++)
          if (arrPoker[p] === arrPair[i][0]) {
            if (index < p) {
              index = p
              winningCards = arrPair[i]
            }
          }
      }
    }
    if (index > 0) {
      return winningCards
    } else return []
  }
}

function winning3CardHand(arrPair) {
  let index = -1
  let winningCards = []
  if (
    arrPair.length === 2 &&
    arrPair[0].length === 2 &&
    arrPair[1].length === 2
  ) {
    return winningPair(arrPair[0], arrPair[1])
  } else {
    for (let i = 0; i < arrPair.length; i++) {
      for (let pair = 0; pair < arrPair[i].length; pair++) {
        if (isIdentical(arrPair[i])) {
          for (let p = 0; p < arrPoker.length; p++)
            if (arrPoker[p] === arrPair[i][pair][0]) {
              if (index < p || winningCards.length < arrPair[i].length) {
                index = p
                winningCards = arrPair[i]
              }
            }
        }
      }
    }
    return winningCards
  }
}

function isIdentical(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      return false
    }
  }
  return true
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
