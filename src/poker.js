const cardScores = {
  1: 1,
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
  A: 14,
}

const scoreCalculator = (pair1, pair2) => {
let scoreArr = []

  if (pair1[0] !== pair1[1]){
  scoreArr.push(0)
  } else {
    scoreArr.push(cardScores[pair1[0]] + cardScores[pair1[1]])
  }

  if (pair2[0] !== pair2[1]){
    scoreArr.push(0)
  } else {
    scoreArr.push(cardScores[pair2[0]] + cardScores[pair2[1]])
  }

return scoreArr
}

const decideWinner = (arr) => {

  if (arr[0] === 0 & arr[1] === 0) {
    return 0
  } else if (arr[0] > arr[1]) {
    return 1
  } else {
    return 2
  }
}

const winningPair = (pair1, pair2) => {

  let totalScoreArr = scoreCalculator(pair1, pair2)
  let winningPair = decideWinner(totalScoreArr)

  if (winningPair === 0) {
    return []
  } else if (winningPair === 1) {
    return pair1
  } else {
    return pair2
  }
}


// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
