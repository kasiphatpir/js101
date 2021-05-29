/*
Write out pseudocode (both casual and formal) that does the following:

1. a function that returns the sum of two numbers
**************************
Given two numbers:
  - Return the result of adding the two numbers
**************************
START

# Given two numbers called "number1" and "number2"
PRINT number1 + number 2

END


2. a function that takes an array of strings, and returns a string
that is all those strings concatenated together
**************************
Given a collection of strings:

Create an accumulator.
Iterate through the strings one by one.
  - Add the current string to the accumulator

After iterating through the collection, return the accumulator.
**************************
START

# Given a collection of strings called "strings"

SET iterator = 0
SET accumulator = ''

WHILE iterator < length of strings
  SET currentString = value within strings collection at space "iterator"
  accumulator = accumulator + currentString
  iterator = iterator + 1

PRINT accumulator

END


3. a function that takes an array of integers, and returns a
new array with every other element
**************************
Given a collection of numbers

Create an accumulator.
Iterate through the integers one by one.
  - if the index position of the current integer is even
    - Add it to the accumulator

After iterating through the collection, return the accumulator.
**************************

START

# Given a collection of integers called "numbers"

SET iterator = 0
SET accumulator = []

WHILE iterator < length of numbers
  SET currentNumber = value within numbers collection at space "iterator"
  IF iterator mod 2 == 0
    accumulator.push(currentNumber)
  iterator = iterator + 1

PRINT accumulator

END
*/