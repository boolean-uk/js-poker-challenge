function winningPair(pair1, pair2) {
  if (pair1[0] === pair1[1]) {
    if (pair2[0] === pair2[1]) {
      const fig = [] // an array that is used to turn figures into numbers
      fig[0] = pair1[0]
      fig[1] = pair2[0]
      for (let i = 0; i < 2; i++) {
        if (fig[i] === 'J') {
          fig[i] = 10
        }
        if (fig[i] === 'Q') {
          fig[i] = 11
        }
        if (fig[i] === 'K') {
          fig[i] = 12
        }
        if (fig[i] === 'A') {
          fig[i] = 13
        }
      }
      if (fig[0] > fig[1]) {
        return pair1
      } else {
        return pair2
      }
    }
  }
  if (pair1[0] === pair1[1] && pair2[0] !== pair2[1]) {
    return pair1
  }
  if (pair1[0] !== pair1[1] && pair2[0] === pair2[1]) {
    return pair2
  } else {
    return []
  }
}

// Extension criteria

function winningPairFromArray(arr) {
  let winner = [0, 0]
  for (let i = 0; i < arr.length; i++) {
    winner = winningPair(arr[i], winner)
  }
  if (winner[0] !== 0 && winner[1] !== 0) {
    return winner
  } else {
    return []
  }
}

function winning3CardHand(arr) {
  const winner = []
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i].length === 3 &&
      arr[i][0] === arr[i][1] &&
      arr[i][0] === arr[i][2]
    ) {
      if (arr[i][0] > winner) {
        winner.push(arr[i][0])
        winner.push(arr[i][0])
        winner.push(arr[i][0])
      }
      return winner
    }
  }
  return winningPairFromArray(arr)
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
