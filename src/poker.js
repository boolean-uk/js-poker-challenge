// input an array with two arrays [['K', '5'], ['3', '7']]
// output is an array
// if neither array has pair return empty array
// if only one pair then that wins
// if two arrays then map score and compare

class Poker {
  constructor(array) {
    this.example = [];
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
    }
    if (array1[0] === array1[1] && array2[0] !== array2[1]) {
      return array1;
    }
    if (
      this.scoreMap[array1[0]] + this.scoreMap[array1[0]] >
      this.scoreMap[array2[0]] + this.scoreMap[array2[0]]
    ) {
      return array1;
    }
    return array2;
  }

  winningPairFromArray(array) {
    let returnArray = [];
    for (let element of array) {
      if (element[0] !== element[1]) {
        returnArray.push(0);
      }
      if (element[0] === element[1]) {
        returnArray.push(this.scoreMap[element[0]] + this.scoreMap[element[1]]);
      }
    }
    if (returnArray.reduce((x, y) => x + y, 0) === 0) {
      return [];
    }
    return array[returnArray.indexOf(Math.max(...returnArray))];
  }

  winning3CardHand(outerArray) {
    let returnArray = [];

    for (let element of outerArray) {
      if (element[0] === element[1] && element[1] === element[2]) {
        return element;
      }
      let score = 0;
      for (let innerElement of element) {
        score += this.scoreMap[innerElement];
      }
      returnArray.push(score);
    }

    return outerArray[returnArray.indexOf(Math.max(...returnArray))];
  }
}
module.exports = Poker;

const hand = new Poker();

hand.winning3CardHand([
  ["5", "5", "3"],
  ["A", "A"],
  ["7", "7", "7"],
  ["Q", "J", "9"]
]);
