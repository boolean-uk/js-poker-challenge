// input an array with two arrays [['K', '5'], ['3', '7']]
// output is an array
// if neither array has pair return empty array
// if only one pair then that wins
// if two arrays then map score and compare

class Poker {
  constructor(array) {
    this.array = array;
    this.scoreMap = {
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
      A: 14
    };
  }

  winningPair(array1, array2) {
    if (array1[0] !== array1[1] && array2[0] !== array2[1]) {
      return [];
    } else if (array1[0] === array1[1] && array2[0] !== array2[1]) {
      return array1;
    } else if (array1[0] !== array1[1] && array2[0] === array2[1]) {
      return array2;
    } else if (
      this.scoreMap[array1[0]] + this.scoreMap[array1[0]] >
      this.scoreMap[array2[0]] + this.scoreMap[array2[0]]
    ) {
      return array1;
    } else {
      return array2;
    }
  }

  winningPairFromArray(array) {
    let returnArray = [];
    for (let element of array) {
      if (element[0] !== element[1]) {
        returnArray.push(0);
      } else if (element[0] === element[1]) {
        returnArray.push(this.scoreMap[element[0]] + this.scoreMap[element[1]]);
      }
    }
    if (returnArray.reduce((x, y) => x + y, 0) === 0) {
      return [];
    } else {
      return array[returnArray.indexOf(Math.max(...returnArray))];
    }
  }
}
module.exports = Poker;

const hand = new Poker();
console.log(
  hand.winningPairFromArray([
    ["4", "3"],
    ["6", "6"],
    ["7", "7"],
    ["3", "3"]
  ])
);

// console.log("returnArray.....", returnArray);
//     console.log(
//       "index of winner......",
//       returnArray.indexOf(Math.max(...returnArray))
//     );

// if (Array.isArray(array) && array.length === 1) {
//   if (array[0][0] !== array[0][1] && array[1][0] !== array[1][1]) {
//     return [];
//   }
// } else {
//   return [];
// }
// }

// winningPairFromArray(array) {
//   if (array[0][0] !== array[0][1] && array[1][0] !== array[1][1]) {
//     return [];
//   } else if (array[0][0] === array[0][1] && array[1][0] !== array[1][1]) {
//     return array[1];
//   } else if (array[0][0] !== array[0][1] && array[1][0] === array[1][1]) {
//     return array[0];
//   }
// }
