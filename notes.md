I'm going to be given inputs like this:

['K', '3'], ['A', 'A']


- If neither hand is a pair, there is no winner, and it should return an empty array
- Otherwise it should return the highest scoring pair


for extension:

- Take in an array of pairs
- Calculate the total score of each of those pairs (as long as they're a pair!)
- Find the highest-scoring pair
- Return that pair


1) Take the array and iterate over it, pushing the results of each pair's total into a new array
2) I need to find the index of the highest scoring array 
3) Use that index to return the correct hand from the original input array


Function 1 - Creates a new array with totalled scores
Function 2 - returns the index of the highest score in the array
Function 3 - 


for extension 2