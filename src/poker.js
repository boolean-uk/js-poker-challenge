/* eslint-disable prettier/prettier */
function winningPair(pair1, pair2) {
  if (pair1[0] === pair1[1] && pair2[0] !== pair2[1]) {
    return pair1;
  } else if (pair2[0] === pair2[1] && pair1[0] !== pair1[1]) {
    return pair2;
  } else if (pair2[0] === pair2[1] && pair1[0] === pair1[1]) {
    if (pair1[0] > pair2[0]) {
      return pair1
    } else {
      return pair2
    }
  } else {
    return [];
  }
}

// Extension criteria

function winningPairFromArray(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (i + 1 < array.length) {
      const pair = winningPair(array[i], array[i + 1]);
      if (pair.length > 0) {
        result.push(pair);
        i++;
      }
    }
  }
  return result;
}
console.log(winningPairFromArray([['K', 'K'], ['A', 'A']])); // Output: [['A', 'A']]
console.log(winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']])); // Output: [['7', '7']]
console.log(winningPairFromArray([['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']])); // Output: []

function winning3CardHand(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].length === 2) {
      return winningPairFromArray(array)
    } else {
      const newarray = array[i]
      const value = newarray[0]
      if (value === newarray[1] && value === newarray[2]) {
        return newarray
      }
    }
  }
}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
