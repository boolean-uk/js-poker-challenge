class Poker {
  //convert the letters (J, Q, K, A) to numbers and make all strings to numbers
  // When there are multiple arrays in an array, combine it into one array
  lettersToNumbers(cards) {
    const cardsCombined = cards.flat();
    const cardsInNumbers = [];
    for (let card of cardsCombined) {
      if (Number(card)) {
        cardsInNumbers.push(Number(card));
      } else {
        switch (card) {
          case "J":
            cardsInNumbers.push(11);
            break;
          case "Q":
            cardsInNumbers.push(12);
            break;
          case "K":
            cardsInNumbers.push(13);
            break;
          case "A":
            cardsInNumbers.push(14);
            break;
        }
      }
    }
    return cardsInNumbers;
  }

  //convert the numbers back to letters and make them into strings
  numbersToLetters(cards) {
    const cardsInLetters = [];

    for (let card of cards) {
      switch (card) {
        case 11:
          cardsInLetters.push("J");
          break;
        case 12:
          cardsInLetters.push("Q");
          break;
        case 13:
          cardsInLetters.push("K");
          break;
        case 14:
          cardsInLetters.push("A");
          break;
        default:
          cardsInLetters.push(card.toString());
      }
    }
    return cardsInLetters;
  }

  winningPair(player1, player2) {
    const convertedPlayer1 = this.lettersToNumbers(player1);
    const convertedPlayer2 = this.lettersToNumbers(player2);

    // If there are no pairs, return an empty array
    return convertedPlayer1[0] !== convertedPlayer1[1] &&
      convertedPlayer2[0] !== convertedPlayer2[1]
      ? []
      : // else if, player 1 has a pair but player 2 not,
      convertedPlayer1[0] === convertedPlayer1[1] &&
        convertedPlayer2[0] !== convertedPlayer2[1]
      ? player1
      : // else if, player 2 has a pair but player 1 not
      convertedPlayer1[0] !== convertedPlayer1[1] &&
        convertedPlayer2[0] === convertedPlayer2[1]
      ? player2
      : // else, return the player that has a bigger number
      convertedPlayer1[0] > convertedPlayer2[0]
      ? player1
      : player2;
  }

  winningPairFromArray(players) {
    const convertedPlayers = this.lettersToNumbers(players);
    const cardsArr = [];
    // Go through the entire array and check if every two cards are a pair
    for (let i = 0; i < convertedPlayers.length; i += 2) {
      if (convertedPlayers[i] === convertedPlayers[i + 1]) {
        cardsArr.push(convertedPlayers[i]);
        cardsArr.push(convertedPlayers[i + 1]);
      }
    }
    // Sort the cards from the smallest to biggest
    cardsArr.sort((a, b) => {
      return a - b;
    });

    // Return the last two index as they are the biggest pair and convert them into string
    const winningPair = cardsArr.slice(cardsArr.length - 2);
    return this.numbersToLetters(winningPair);
  }

  winning3CardHand(players) {
    const cardsArr = [];

    // push the cards array if all the elements are the same
    for (let cards of players) {
      if (cards.every((card) => card === cards[0])) cardsArr.push(cards);
    }

    // combine the arrays and convert letters to numbers
    const cardsCombined = cardsArr.flat();
    const convertedCards = this.lettersToNumbers(cardsCombined);

    // Sort the cards from the smallest to biggest
    convertedCards.sort((a, b) => {
      return a - b;
    });

    //filter the numbers that has the biggest value
    const winning3Cards = convertedCards.filter(
      (num) => convertedCards[convertedCards.length - 1] === num
    );

    return this.numbersToLetters(winning3Cards);
  }
}

// module.exports = Poker;

const poker = new Poker();
console.log(
  poker.winning3CardHand([
    ["5", "5", "3"],
    ["A", "A"],
    ["7", "7", "7"],
    ["Q", "J", "9"],
  ])
);
