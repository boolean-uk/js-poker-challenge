Poker = require("../src/poker");
let poker;

describe("Poker", () => {
  it("should return ['A', 'A'] for [['K', 'K'], ['A', 'A']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["K", "K"],
      ["A", "A"],
    ]);

    expect(result).toEqual(["A", "A"]);
  });

  it("should return ['7', '7'] for [['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["4", "3"],
      ["6", "6"],
      ["7", "7"],
      ["3", "3"],
    ]);

    expect(result).toEqual(["7", "7"]);
  });

  it("should return [] for [['4', '3'], ['6', '2'], ['7', '1'], ['3', '9']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["4", "3"],
      ["6", "2"],
      ["7", "1"],
      ["3", "9"],
    ]);

    expect(result).toEqual([]);
  });
});

describe("Poker", () => {
  it("should return ['7', '7', '7'] for [['5', '5', '3'], ['7', '7', '7']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["5", "5", "3"],
      ["7", "7", "7"],
    ]);

    expect(result).toEqual(["7", "7", "7"]);
  });

  it("should return ['7', '7', '7'] for [['5', '5', '3'], ['A', 'A'], ['7', '7', '7'], ['Q', 'J', '9']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["5", "5", "3"],
      ["A", "A"],
      ["7", "7", "7"],
      ["Q", "J", "9"],
    ]);

    expect(result).toEqual(["7", "7", "7"]);
  });

  it("should return ['Q', 'Q'] for [['Q', 'Q'], ['9', '9']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["Q", "Q"],
      ["9", "9"],
    ]);

    expect(result).toEqual(["Q", "Q"]);
  });

  it("should return ['J', 'J'] for [['J', 'J'], ['9', '9'], ['6', '6', '4']]", () => {
    poker = new Poker();

    const result = poker.winningHand([
      ["J", "J"],
      ["9", "9"],
      ["6", "6", "4"],
    ]);

    expect(result).toEqual(["J", "J"]);
  });
});
