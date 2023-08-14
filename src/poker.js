/* eslint-disable prettier/prettier */
function winningPair(pair1, pair2) {

  const hand1IsPair = pair1[0] === pair1[1]
  const hand2IsPair = pair2[0] === pair2[1]

  if (hand1IsPair && !hand2IsPair) {
    return pair1
  } else if (hand2IsPair && !hand1IsPair) {
    return pair2
  } else if (hand1IsPair && hand2IsPair) {
    if (pair1[0] === 'A') {
      return pair1
    }
    else if (pair2[0] === 'A') {
      return pair2
    } else {
      if (pair1[0] > pair2[0]) {
        return pair1
      } else {
        return pair2
      }
    }
  } else {
    return [];
  }
}

// Extension criteria

function winningPairFromArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i + 1 < array.length) {
      const pair = winningPair(array[i], array[i + 1]);
      if (pair.length > 0) {
        result.push(pair);
        i++;
      }
    }
  }
  if (result.length > 1) {
    for (let j = 0; j < result.length; j++) {
      if (j + 1 < result.length) {
        result = winningPair(result[j], result[j + 1])
      }
    }
  }
  return result.length === 1 ? result[0] : result;
}

function winning3CardHand(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 2 && !result.includes(winningPairFromArray(array))) {
      result.push(winningPairFromArray(array))
    } else {
      const newarray = array[i]
      const value = newarray[0]
      if (value === newarray[1] && value === newarray[2]) {
        result.push(newarray)
      }
    }
  }
  if (result.length > 1) {
    for (let j = 0; j < result.length; j++) {
      if (result[j].length === 3) {
        result = result[j]
      }
    }
  }
  return result.length === 1 ? result[0] : result;
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
