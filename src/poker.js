class Poker {
 constructor(poker) {
    this.card1 = card1;
    this.card2= card2;
  }


let poker = new Poker()
poker.winningPair(['Q', '6'], ['J', 'K']) // => []

let poker = new Poker()
poker.winningPair(['9', '9'], ['7', '7']) // => ['9', '9']

let poker = new Poker()
poker.winningPair(['K', '3'], ['K', 'K']) // => ['K', 'K']
  


module.exports = Poker;
