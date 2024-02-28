# Poker Challenge

Welcome to the Poker challenge!

## Learning Objectives
- Build a simple program using functions, loops, and flow control
- Use `git` & GitHub to commit work and open a Pull Request

## Instructions

1. Fork this repository and then:
```sh
git clone [your repo] && cd js-poker-challenge
npm ci # installs dependencies listed in package.json
```
2. Run the tests from your project root directory. There should be a lot of failures to begin with. You can run your test suite in a few ways:
```sh
$ npm test # run the full test suite
$ npm run test-main # run only the tests for the main exercise
$ npm run test-extension1 # run only the tests for extension 1
$ npm run test-extension2 # run only the tests for extension 2
```
3. In GitHub, [open a Pull Request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) from your forked repository to the challenge repository.
4. Implement the criteria below locally and [push your code](https://docs.github.com/en/github/managing-files-in-a-repository/adding-a-file-to-a-repository-using-the-command-line) to your repository! Every push to a branch that has an open Pull Request will update it automatically with your changes.
5. Check the status of the automated tests on the Pull Request - update your implementation if needed.

# Main Task

Given two pairs of cards, calculate the winning pair.

## Acceptance Criteria

```js
winningPair(['Q', '6'], ['J', 'K']) // => []

winningPair(['9', '9'], ['7', '7']) // => ['9', '9']

winningPair(['K', '3'], ['K', 'K']) // => ['K', 'K']
```

## Extended Acceptance Criteria

For the extended criteria, you may need to look up functions and techniques you have not used before. Pay special attention to the available Array functions as detailed in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Array of Pairs

The `winningPairFromArray` function should accept an array of arrays, each of which contain a pair of cards, and calculate the winning pair from that. For example, the function should be able to take in `[['A', 'A'], ['3', '7'], ['K', 'K']]` and return `['A', 'A']`.

This is known as a two dimensional array. There is no limit to the amount of arrays contained within the array.

**Example**
```js
winningPairFromArray([['K', '5'], ['3', '7']]) // => []

winningPairFromArray([['K', 'K'], ['A', 'A']]) // => ['A', 'A']

winningPairFromArray([['4', '3'], ['6', '6'], ['7', '7'], ['3', '3']]) // => ['7', '7']
```

### Three of a Kind

Similar to the above, the `winning3CardHand` function should calculate the winning hand from an array that can contain both pairs *and* three of a kind. Each hand may contain either two or three cards.

**Example**
```js
winning3CardHand([['K', '5'], ['3', '7'], ['K', 'J', '4']]) // => []

winning3CardHand([['5', '5', '3'], ['7', '7', '7']]) // => ['7', '7', '7']

winning3CardHand([['J', 'J'], ['9', '9'], ['6', '6', '4']]) // => ['J', 'J']
```

Things to remember:
- Any 3 of a kind beats any pair
- Can we sort them into different arrays? A 3 of a kind array and a pair array? IF 3 of a kind array.length > 1, we find the winner there. If not, does pair array have anything? If so, find the winner there. If not, return []

First, sort the hadns into 2 arrays:
array 1: 3-card hands
array 2: 2-card hands

Second, sort them into trips arrays, and pairs arrays


### Concise Code
Split up your functions in to multiple smaller functions that do one thing only. Read this [article on Clean Functions](https://github.com/ryanmcdermott/clean-code-javascript#functions) and apply the principles you think are relevant.
