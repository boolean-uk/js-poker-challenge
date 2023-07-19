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
  if (pair1[0] === pair1[1] && pair2[0] === pair2[1]) {
    let index1 = 0
    let index2 = 0
    for (let i = 0; i < arrPoker.length; i++) {
      if (arrPoker[i] === pair1[0]) {
        index1 = i
      }
      if (arrPoker[i] === pair2[0]) {
        index2 = i
      }
    }
    if (index1 < index2) {
      return pair2
    } else return pair1
  } else if (pair1[0] !== pair1[1] && pair2[0] !== pair2[1]) {
    return []
  } else if (pair1[0] !== pair1[1] || pair2[0] !== pair2[1]) {
    if (pair1[0] !== pair1[1]) return pair2
    else return pair1
  }
}

// Extension criteria

function winningPairFromArray(arrPair) {
  if (arrPair.length === 2) {
    return winningPair(arrPair[0], arrPair[1])
  }
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
