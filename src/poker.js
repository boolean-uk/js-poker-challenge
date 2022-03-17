class Poker {
  winningPair (arr1, arr2) {
    // here i check for no matches.
    if (arr1[0] !== arr1[1] && arr2[0] !== arr2[1]) {
      return []
    }
    // i used these objects for storing values, and i am going to compare them later.
    const firstSet = {
      values: [],
      match: false,
      rank: 0
    }
    const secondSet = {
      values: [],
      match: false,
      rank: 0
    }
    const ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A'
    ]
    // here i am checking if the pair is in arr1 or arr2 and updating the objects above
    if (arr1[0] === arr1[1]) {
      firstSet.values = arr1
      firstSet.match = true
      firstSet.rank = ranks.indexOf(arr1[0])
    }

    if (arr2[0] === arr2[1]) {
      secondSet.values = arr2
      secondSet.match = true
      secondSet.rank = ranks.indexOf(arr2[0])
    }
    // here i am comparing the two objects and return the value of that object
    if (firstSet.match === true && secondSet.match === false) {
      return firstSet.values
    }

    if (firstSet.match === false && secondSet.match === true) {
      return secondSet.values
    }
    // if both arrays have pairs then the greatest wins.
    if (firstSet.rank > secondSet.rank) {
      return firstSet.values
    }

    if (secondSet.rank > firstSet.rank) {
      return secondSet.values
    }
  }
}

module.exports = Poker
