// Numbers and Math

function add(a, b) {
  // Return the sum of two numbers
  return a + b
}

function square(n) {
  // Return the square of a number
  return n**2
}
function evenOrOdd(n) {
  // Return "even" if n is even, otherwise "odd"
  return n%2 == 0 ? true : false;
}
function maxOfTwo(a, b) {
  // Return the larger of two numbers
  return a>b ? a : b;
}

function multiplyList(numbers) {
  // Multiply all numbers in a list and return the result
  let res = 1
  for (let num of numbers){
    res *= num
  }
  return res
}


// Strings

function greet(name) {
  // Return "Hello, <name>!"
  return (`Hello, ${name}`)
}

function countLetters(word) {
  // Return the number of letters in the word
  return word.length
}

function makeUppercase(s) {
  // Return the string in all uppercase letters
  return s.toUpperCase()
}

function repeatWord(word, times) {
  // Return the word repeated 'times' times
  res = ''
  for (let i=0; i<times; i++){
    res += word + ' '
  }
  return res
}

function firstAndLast(s) {
  // Return the first and last character of the string
  return [s[0], s[s.length-1]]
}


// Lists

function firstItem(lst) {
  // Return the first item in the list
  return lst[0]
}

function lastItem(lst) {
  // Return the last item in the list
  return lst[lst.length-1]
}

function sumList(lst) {
  // Return the sum of all numbers in the list
  res = 0
  for(let num of lst){
    res += num
  }
  return res
}

function listLength(lst) {
  // Return how many items are in the list
  return lst.length
}

function containsItem(lst, item) {
  // Return true if item is in the list
  for(let char of lst){
    if (char == item){
      return true
    }
  }
  return false
}


// Logic and Conditions

function isPositive(n) {
  // Return true if n is positive
  return n>=0 ? true : false;
}

function canVote(age) {
  // Return true if age is 18 or older
  return age>=18 ? true : false;
}

function isWeekend(day) {
  // Return true if day is "Saturday" or "Sunday"
  return (day === 'Saturday' || day === 'Sunday') ? true : false;
}

function isEmpty(s) {
  // Return true if the string is empty
  return s.length ==0 ? true : false
}

function sameNumber(a, b) {
  // Return true if a and b are the same number
  return a==b ? true : false
}
