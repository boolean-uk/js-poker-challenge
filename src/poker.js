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
  let index = -1
  let winningCards
  if (arrPair.length === 2) {
    return winningPair(arrPair[0], arrPair[1])
  } else {
    for (let i = 0; i < arrPair.length; i++) {
      if (arrPair[i][0] === arrPair[i][1]) {
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

console.log(winningPairFromArray([['Q', 'Q'], ['9', '9']]))

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
