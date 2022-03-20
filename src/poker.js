class Poker {
  constructor() {
    this.cardValue = {
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
    };
  }

  /*------ Basic Criteria ------*/
  winningPair(player1, player2) {
    // If there are no pairs, return an empty array
    return player1[0] !== player1[1] && player2[0] !== player2[1]
      ? []
      : // else if, player 1 has a pair but player 2 not,
      player1[0] === player1[1] && player2[0] !== player2[1]
      ? player1
      : // else if, player 2 has a pair but player 1 not
      player1[0] !== player1[1] && player2[0] === player2[1]
      ? player2
      : // else, return the player that has a bigger number
      this.cardValue[player1[0]] > this.cardValue[player2[0]]
      ? player1
      : player2;
  }

  /*------ Extended Criteria Part 1------*/
  winningPairFromArray(players) {
    const cardsArr = [];
    const cardsCombined = players.flat();
    // Go through the entire array and check if every two cards are a pair
    for (let i = 0; i < cardsCombined.length; i += 2) {
      if (cardsCombined[i] === cardsCombined[i + 1]) {
        cardsArr.push(cardsCombined[i]);
        cardsArr.push(cardsCombined[i + 1]);
      }
    }

    // Sort the cards from the smallest to biggest
    cardsArr.sort((card1, card2) => {
      return this.cardValue[card1] - this.cardValue[card2];
    });

    // Return the last two index as they are the biggest pair
    return cardsArr.slice(cardsArr.length - 2);
  }

  /*------ Extended Criteria Part 2------*/
  winning3CardHand(players) {
    const matchingCards = [];
    const mostCards = [];

    // push the cards array that all cards are the same
    for (let cards of players) {
      if (cards.every((card) => card === cards[0])) matchingCards.push(cards);
    }

    //If there is only one card array, return that array
    if (matchingCards.length === 1) return matchingCards.flat();

    //If not, push the card arrays that has the most amount of cards
    for (let i = 0; i < matchingCards.length - 1; i++) {
      if (matchingCards[i].length >= matchingCards[i + 1].length) {
        mostCards.push(matchingCards[i]);
      }
      mostCards.push(matchingCards[i + 1]);
    }

    // Sort the cards from the smallest to biggest
    mostCards.sort((card1, card2) => {
      return this.cardValue[card1[0]] - this.cardValue[card2[0]];
    });

    //filter the numbers that has the biggest value
    const winning3Cards = mostCards.filter(
      (num) => mostCards[mostCards.length - 1] === num
    );

    return winning3Cards.flat();
  }
}

module.exports = Poker;
