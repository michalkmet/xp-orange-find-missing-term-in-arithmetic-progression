# Find the missing term in an Arithmetic Progression

An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.

Example
findMissing([1, 3, 5, 9, 11]) == 7
PS: This is a sample question of the facebook engineer challenge on interviewstreet. I found it quite fun to solve on paper using math, derive the algo that way. Have fun!

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Examples

Example 1:
findMissing([1, 2, 4]) == 3

Example 2:
findMissing([1, 5, 7]) == 3

Example 3:
findMissing([1, 4, 10]) == 7

Example 4:
findMissing([1, 3, 4]) == 2

Example 5:
findMissing([2, 3, 4, 6]) == 5

Example 6:
findMissing([2, 4, 6, 10]) == 8

Example 7:
findMissing([1, 4, 7, 13]) == 10

Example 8:
findMissing([1, 2, 3, 5]) == 4

Example 9:
findMissing([1, 3, 5, 9, 11]) == 7

Example 10:
findMissing([1, 3, 7, 9, 11, 14]) == 5

Example 11:
findMissing([-4, -3, -1]) == -2

Example 12:
findMissing([-8, -4, -2]) == -6

Example 13:
findMissing([-13, -10 , -7, -1]) == -4

Example 14:
findMissing([-1, 0, 2]) == 1

Example 15:
findMissing([-2, 0, 4]) == 2

Example 16:
findMissing([-2, -1, 1]) == 0

Example 17:
findMissing([-8, 0, 4]) == -4

Example 18:
findMissing([-6, -20, -27]) == -13

Example 19:
findMissing([-7, -8, -9, -10, -11, -12, -13, -14, -15, -17, -18, -19, -20]) == -16

Example 20:
findMissing([ 8, 16, 20 ]) == 12

Example 21:
findMissing([ 3, 23, 33 ]) == 13

Example 21:
findMissing([ 16, 33, 50, 67, 84, 101, 118, 152, 169, 186, 203, 220, 237 ]) == 135

Example 22:
findMissing([ 14, 34, 54, 74, 94, 114, 134, 154, 174, 194, 234 ]) == 214

Example 23:
findMissing([ 37, 47, 52 ]) == 42

Example 24:
findMissing([ 45, 58, 71, 84, 97, 110, 123, 149, 162, 175, 188 ]) == 136

Example 25:
findMissing([ 40, 34, 22 ]) == 28
