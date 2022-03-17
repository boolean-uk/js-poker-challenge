class Poker {
  constructor() {
    this.pokerRanks = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
  }

  getSumOfNumbers(arr) {
    const valueOfPair = arr.reduce((acc, num) => {
      return acc + this.pokerRanks.indexOf(num);
    }, 0);
    return valueOfPair;
  }

  createDataStructure(pair) {
    const flattenArr = pair.flat();
    let pairs = [];
    if (Array.isArray(flattenArr[0])) {
      pairs = pair.flat();
    } else {
      for (let i = 0; i < pair.length; i++) {
        pairs.push(pair[i]);
      }
    }
    return pairs;
  }

  getOnlyPairsOrTriples(pairsArr) {
    const onlyPairs = pairsArr.filter((pair, i) => {
      const valueOfPair = this.getSumOfNumbers(pair);
      return valueOfPair / pair.length === this.pokerRanks.indexOf(pair[0]);
    });

    return onlyPairs;
  }

  getLengthAndHighestNum(onlyPairs) {
    const highestLength = [];

    onlyPairs.forEach((pair) => {
      highestLength.push(pair.length);
    });

    const getHighestLength = Math.max(...highestLength);
    const highest = [];

    onlyPairs.forEach((pair) => {
      const valueOfPair = this.getSumOfNumbers(pair);
      if (pair.length === getHighestLength) {
        highest.push(valueOfPair);
      }
    });

    return [getHighestLength, highest];
  }

  getWinner(length, highestNum) {
    const winner = [];
    winner.push(Math.max(...highestNum));

    const winnerCards = [];
    for (let i = 0; i < length; i++) {
      winnerCards.push(winner / length);
    }
    const absoluteWinner = winnerCards.map((num) => this.pokerRanks[num]);
    return absoluteWinner;
  }

  winner(...pair) {
    // create the right Data Structure regardless of the input
    const pairsArr = this.createDataStructure(pair);
    // return only the Pairs or Triples
    const onlyPairs = this.getOnlyPairsOrTriples(pairsArr);
    // IF there is no Double or Triple return empty []
    if (onlyPairs.length === 0) return onlyPairs;
    // getting the length and the highest number (higher length always the winner)
    const [getHighestLength, highestNum] =
      this.getLengthAndHighestNum(onlyPairs);
    // return the winner
    return this.getWinner(getHighestLength, highestNum);
  }

  winningPair(...pair) {
    return this.winner(...pair);
  }

  winningPairFromArray(...pair) {
    return this.winner(...pair);
  }

  winning3CardHand(...pair) {
    return this.winner(...pair);
  }
}

module.exports = Poker;
