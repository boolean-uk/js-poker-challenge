const cardMap = {
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

function winningPair(pairOne, pairTwo) {
  if (pairOne[0] !== pairOne[1] && pairTwo[0] !== pairTwo[1]) return []

  if (pairOne[0] === pairOne[1] && pairTwo[0] === pairTwo[1]) {
    if (cardMap[pairOne[0]] > cardMap[pairTwo[0]]) return pairOne
    return pairTwo
  }

  if (pairOne[0] === pairOne[1]) return pairOne
  return pairTwo
}

// Extension criteria

function winningPairFromArray(pairArray) {
  const resultArray = []

  for (const i in pairArray) {
    if (pairArray[i][0] === pairArray[i][1]) resultArray.push(pairArray[i][0])
  }

  if (resultArray.length === 0) return []

  let highestString = '3'
  for (const i in resultArray) {
    if (cardMap[resultArray[i]] > cardMap[highestString])
      highestString = resultArray[i]
  }

  return [highestString, highestString]
}

function getHighest(resultArray) {
  let highestString = '3'
  for (const i in resultArray) {
    if (cardMap[resultArray[i]] > cardMap[highestString])
      highestString = resultArray[i]
  }
  return highestString
}

function winning3CardHand(pairArray) {
  const resultArray = []
  const result3Array = []

  for (const i in pairArray) {
    if (
      pairArray[i].length === 3 &&
      pairArray[i][0] === pairArray[i][1] &&
      pairArray[i][0] === pairArray[i][2]
    ) {
      result3Array.push(pairArray[i][0])
    } else if (pairArray[i][0] === pairArray[i][1])
      resultArray.push(pairArray[i][0])
  }

  if (result3Array.length !== 0) {
    const highestString = getHighest(result3Array)
    return [highestString, highestString, highestString]
  }

  if (resultArray.length === 0) return []

  const highestString = getHighest(resultArray)

  return [highestString, highestString]
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
