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

function isPair(arr) {
  if (arr.length === 2) {
    if (arr[0] === arr[1]) {
      return [arr[0], arr[1]]
    } else {
      return false
    }
  } else if (arr.length === 3) {
    if (arr[0] === arr[1]) {
      return [arr[0], arr[1]]
    } else if (arr[0] === arr[2]) {
      return [arr[0], arr[2]]
    } else if (arr[1] === arr[2]) {
      return [arr[1], arr[2]]
    } else {
      return false
    }
  }
}

function isThree(arr) {
  return arr.length === 3 && arr[0] === arr[1] && arr[1] === arr[2]
}

function winningPair(arr1, arr2) {
  const isPair1 = isPair(arr1)
  const isPair2 = isPair(arr2)

  let pair1Value = 0
  let pair2Value = 0

  if (isPair1) {
    pair1Value = calculatePairValue(arr1)
  }

  if (isPair2) {
    pair2Value = calculatePairValue(arr2)
  }

  if (pair1Value === pair2Value) {
    return []
  } else if (pair1Value > pair2Value) {
    return arr1
  } else {
    return arr2
  }
}

// Extension criteria

function winningPairFromArray(arr) {
  let maxPairValue = 0
  let winningPair = []
  for (const pair of arr) {
    const arrPair = isPair(pair)
    if (arrPair) {
      const arrPairValue = calculatePairValue(pair)
      if (arrPairValue > maxPairValue) {
        maxPairValue = arrPairValue
        winningPair = pair
      }
    }
  }
  return winningPair
}

function winning3CardHand(arr) {
  let maxHandValue = 0
  let winningHand = []
  for (const hand of arr) {
    const arrThree = isThree(hand)
    if (arrThree) {
      const arrThreeValue = calculatePairValue(hand)
      if (arrThreeValue > maxHandValue) {
        maxHandValue = arrThreeValue
        winningHand = hand
      }
    }
    const arrPair = isPair(hand)
    if (arrPair) {
      const arrPairValue = calculatePairValue(hand)
      if (arrPairValue > maxHandValue && winningHand.length !== 3) {
        maxHandValue = arrPairValue
        winningHand = hand
      }
    }
  }
  return winningHand
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
