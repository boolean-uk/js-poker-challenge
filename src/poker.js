/*
I want to be able to take in two arrays with two cards as arguments into a function containing card values:
2 3 4 5 6 7 8 9 10 J Q K A.

My function should evaluate each argument by looking at the arryas two values and assign point to the cards accordingly.

The function then needs to decide which of the two arguments has the most amount of points, and return that function argument.

*/
const highCards = {
  J: '11',
  Q: '12',
  K: '13',
  A: '14'
}
function convertArr(cards) {
  const newCards = [...cards]
  for (let i = 0; i < cards.length; i++) {
    if (Object.keys(highCards).includes(cards[i])) {
      newCards.splice(i, 1, highCards[cards[i]])
    } else {
      newCards[i] = cards[i]
    }
  }
  return newCards.map(Number)
}
function isDoubles(cards) {
  return cards[0] === cards[1]
}
function winningPair(cards1, cards2) {
  if (!isDoubles(cards1) && !isDoubles(cards2)) {
    return []
  }
  const cards1Num = convertArr(cards1)
  const cards2Num = convertArr(cards2)
  if (isDoubles(cards1) && isDoubles(cards2)) {
    if (cards1Num[0] > cards2Num[0]) {
      return cards1
    }
    return cards2
  }
  if (isDoubles(cards1) & !isDoubles(cards2)) {
    return cards1
  }
  if (!isDoubles(cards1) & isDoubles(cards2)) {
    return cards2
  }
}
// Extension criteria
function findDoublesInArr(arr) {
  const doublesArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) {
      doublesArr.push(arr[i])
    }
  }
  return doublesArr
}
function winningPairFromArray(arr) {
  const doublesArr = findDoublesInArr(arr)

  if (doublesArr.length === 0) {
    return []
  }

  let winnerNumber = 0
  let winnerCards
  const doublesArrNum = []

  for (let i = 0; i < doublesArr.length; i++) {
    doublesArrNum.push(convertArr(doublesArr[i]))

    if (winnerNumber < doublesArrNum[i][0]) {
      winnerNumber = doublesArrNum[i][0]
      winnerCards = doublesArr[i]
    }
  }

  return winnerCards
}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
