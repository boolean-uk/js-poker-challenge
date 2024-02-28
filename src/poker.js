const cardScores = {
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

// Extension 1 criteria

const winningPairFromArray = (rawArr) => {
let scoredArr = scorePairsInNewArr(rawArr)
let winningIndex = getHighestScoreIndex(scoredArr)
let noPairs = determineIfPairsExist(scoredArr)

  if (noPairs) { //No winner, so return nothing
    return []
  } else {
    return rawArr[winningIndex] //Determines the best of the pairs
  }
}

const scorePairsInNewArr = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] !== arr[i][1]) {
      newArr.push(0)
    } else {
    newArr.push(cardScores[arr[i][0]] + cardScores[arr[i][1]])
    }
  }
  return newArr
} 

const getHighestScoreIndex = (arr) => {
  let winningScore = Math.max(...arr)
  return arr.indexOf(winningScore)
}

const determineIfPairsExist = (arr) => {
   return arr.every((element) => element === 0) 
   }

// Extension 2 criteria

const winning3CardHand = (arr) => {
  let twoCardHandArr = getTwoCardHands(arr)
  let threeCardHandArr = getThreeCardHands(arr)
  let pairsArray = findAllPairHands(twoCardHandArr, threeCardHandArr)
  let tripsArray = findAllTripHands(threeCardHandArr)

  if (tripsArray.length > 0) {  // If there are trips, they will beat any other hand. This finds the winner of all the trips (if any trips exist).
    let tripsScoredArr = scoreArr(tripsArray)
    let tripsHighScoreIndex = getHighestScoreIndex(tripsScoredArr)
    return(tripsArray[tripsHighScoreIndex])
  }

  if (pairsArray.length > 0) { // There aren't any trips, so we'll check the pairs next, but first we need to remove the superfluous third card in order to score them
    let pairsArray3rdRemoved = remove3rdNo(pairsArray)
    let pairsScoredArr = scoreArr(pairsArray3rdRemoved)
    let pairsHighScoreIndex = getHighestScoreIndex(pairsScoredArr)
    return (pairsArray[pairsHighScoreIndex])

  } else { // no pairs, no trips, no winners!
    return [] 
  }
}

const remove3rdNo = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 2) {
      newArr.push(arr[i])
    } else if (arr[i][0] === arr[i][1]) {
      newArr.push(arr[i].toSpliced(2, 1))
    } else if (arr[i][1] === arr[i][2]) {
      newArr.push(arr[i].toSpliced(0, 1))
    } else {
      newArr.push(arr[i].toSpliced(1, 1))
    }
  }
  return newArr
}

const scoreArr = (arr) => {
  let newArr = []
  let scoreCount = 0

 for (let i = 0; i < arr.length; i++) {
  scoreCount = 0
  for (let j = 0; j < arr[i].length; j++){
    scoreCount += cardScores[arr[i][j]]
  }
  newArr.push(scoreCount)
 }
 return newArr
}

const findAllTripHands = (arr) => {
 let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const findAllPairHands = (twoCardArr, threeCardArr) => {
  let newArr = []
  for (let i = 0; i < twoCardArr.length; i++) {
    if (twoCardArr[i][0] === twoCardArr[i][1]) {
      newArr.push(twoCardArr[i])
    }
  }
  let duplicateCounter = new Set()
  for (let i = 0; i < threeCardArr.length; i++) {
    for (let j = 0; j < 3; j++) {
      duplicateCounter.add(threeCardArr[i][j])
    }
      if (duplicateCounter.size === 2) {
        newArr.push(threeCardArr[i])
        duplicateCounter.clear()
      } else {
        continue
      }
  }
  return newArr
}

const getTwoCardHands = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 2) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

const getThreeCardHands = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 3) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
