function winningPair(pair1, pair2) {
  let result = []
  let firstIsPair = false
  if (pair1[0] === pair1[1]) {
    result = pair1
    firstIsPair = true
  }
  if (pair2[0] === pair2[1]) {
    if (firstIsPair && pair1[0] > pair2[0]) result = pair1
    else result = pair2
  }
  return result
}

// Extension criteria

function winningPairFromArray(hand) {
  const array = []
  let unAssigned = true
  for (let i = 0; i < hand.length; i++) {
    if (hand[i][0] === hand[i][1]) {
      if (unAssigned || cartvalue[hand[i][0]] > cartvalue[array[0]]) {
        array[0] = hand[i][0]
        array[1] = hand[i][1]
        unAssigned = false
      }
    }
  }
  return array
}

function winningTripleFromArray(hand) {
  const array = []
  let unAssigned = true
  for (let i = 0; i < hand.length; i++) {
    if (hand[i][0] === hand[i][1] && hand[i][1] === hand[i][2]) {
      if (unAssigned || cartvalue[hand[i][0]] > cartvalue[array[0]]) {
        array[0] = hand[i][0]
        array[1] = hand[i][1]
        array[2] = hand[i][2]
        unAssigned = false
      }
    }
  }
  return array
}

const cartvalue = {
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

function winning3CardHand(hand) {
  const doubles = []
  const triples = []
  for (let i = 0; i < hand.length; i++) {
    if (hand[i].length === 2) {
      doubles.push(hand[i])
    } else if (hand[i].length === 3) {
      triples.push(hand[i])
    }
  }
  const highestDouble = winningPairFromArray(doubles)
  const highestTriple = winningTripleFromArray(triples)
  if (highestTriple.length > 0) return highestTriple
  if (highestDouble.length > 0) return highestDouble
  return []
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
