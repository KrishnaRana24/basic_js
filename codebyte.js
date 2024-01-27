//First Reverse
//Have the function FirstReverse(str) take the str parameter being passed and return the
//string in reversed order. For example: if the input string is "Hello World and Coders" then your
//program should return the string sredoC dna dlroW olleH.

function FirstReverse(str) {
  return str.split("").reverse().join("");
}
console.log(FirstReverse("Hello World and Coders"));
//op :sredoC dna dlroW olleH

//First Factorial
//Have the function FirstFactorial(num) take the num parameter being passed and return
// the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
// For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) {
  let fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
    //fact *= i;
  }
  return fact;
}

console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
console.log(FirstFactorial(3));

// Longest Word
// Have the function LongestWord(sen) take the sen parameter being passed and return the
// largest word in the string. If there are two or more words that are the same length, return the
// first word from the string with that length. Ignore punctuation and assume sen will not be
// empty.
function long(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  var l = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > l.length) {
      l = str[i];
    }
  }
  return l;
}
function LongestWord(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  var longest = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longest.length) {
      longest = str[i];
    }
  }
  return longest;
  //   str = str.split("");
  //   return str.sort((a, b) => b.length - a.length)[0];
}
console.log(LongestWord("Hello WOrlddddddd"));
console.log(LongestWord("Hellooooooo world"));

// Letter Changes
// Have the function LetterChanges(str) take the str parameter being passed and modify it
// using the following algorithm. Replace every letter in the string with the letter following it in the
// alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i,
// o, u) and finally return this modified string.

function LetterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function (ch) {
    if (ch === "z") {
      return "a";
    } else if (ch === "Z") {
      return "A";
    } else {
      return String.fromCharCode(ch.charCodeAt(0) + 1);
    }
  });
  return str.replace(/[aeiou]/g, function (ch) {
    return ch.toUpperCase();
  });
}
console.log(LetterChanges("hello*3"));
console.log(LetterChanges("fun times!"));

// Simple Adding
// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if
// the input is 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases,
// the parameter num will be any number from 1 to 1000.

function SimpleAdding(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(SimpleAdding(4));
console.log(SimpleAdding(40));
console.log(SimpleAdding(400));
console.log(SimpleAdding(1000));

// Letter Capitalize
// Have the function LetterCapitalize(str) take the str parameter being passed and
// capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str) {
  let newS = "";
  for (let i = 0, newW = true; i < str.length; i++) {
    if (newW) {
      newS += str[i].toUpperCase();
    } else {
      newS += str[i];
    }
    newW = str[i] === "" ? true : false;
  }
  return newS;

  // var strarr = str.split("");
  // for (var i = 0, n = strarr.length; i < n; i++) {
  //   return strarr[i][0].toUpperCase() + strarr[i].slice(1);
  // }
  // str = strarr.join("");
  // return str;
}
console.log(LetterCapitalize("hello world!"));
console.log(LetterCapitalize("i ran there"));

// Simple Symbols
// Have the function SimpleSymbols(str) take the str parameter being passed and determine
// if it is an acceptable sequence by either returning the string true or false. The str parameter
// will be composed of + and = symbols with several characters between them (ie. ++d+===+c+
// +==a) and for the string to be true each letter must be surrounded by a + symbol. So the string
// to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {
  if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
    return false;
  } else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
    return false;
  } else {
    return true;
  }
}
console.log(SimpleSymbols("+d+=3=+s+"));
console.log(SimpleSymbols("+++d+=3=+===s+"));
console.log(SimpleSymbols("+++d+==3=+s+"));

// Check Nums
// Have the function CheckNums(num1,num2) take both parameters being passed and return the
// string true if num2 is greater than num1, otherwise return the string false. If the parameter
// values are equal to each other then return the string -1.

function CheckNums(num1, num2) {
  if (num1 == num2) {
    return "-1";
  } else {
    return num2 > num1;
  }
}

console.log(CheckNums(3, 122));
console.log(CheckNums(3, 3));
console.log(CheckNums(3, -3));

// Time Convert
// Have the function TimeConvert(num) take the num parameter being passed and return the
// number of hours and minutes the parameter converts to (ie. if num = 63 then the output should
// be 1:3). Separate the number of hours and minutes with a colon.
function TimeConvert(num) {
  return Math.floor(num / 60) + ":" + (num % 60);
}
console.log(TimeConvert(63));
console.log(TimeConvert(126));

// Alphabet Soup
// Have the function AlphabetSoup(str) take the str string parameter being passed and
// return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume
// numbers and punctuation symbols will not be included in the string.

function AlphabetSoup(str) {
  var arr = str.split("").sort().join("");
  return arr;
}
console.log(AlphabetSoup("coderbyte"));
console.log(AlphabetSoup("coderbyt-0"));
console.log(AlphabetSoup("coderbyte/*"));

// AB Check
// Have the function ABCheck(str) take the str parameter being passed and return the string
// true if the characters a and b are separated by exactly 3 places anywhere in the string at leastonce (ie. "lane borrowed" would result in true because there is exactly three characters
// between a and b). Otherwise return the string false.

function ABCheck(str) {
  var part = /(a...b|b...a)/;
  return part.test(str);
}

console.log(ABCheck("abc mnbv"));
console.log(ABCheck("Laura sobs"));
console.log(ABCheck("aaab bccca"));
console.log(ABCheck("ab ba"));

// Vowel Count
// Have the function VowelCount(str) take the str string parameter being passed and return
// the number of vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do
// not count y as a vowel for this challenge.

function VowelCount(str) {
  var vowel = str.match(/[aeiou]/gi);
  if (vowel == null) {
    return 0;
  } else {
    return vowel.length;
  }
}
console.log(VowelCount("krishna"));
console.log(VowelCount("aeiou"));

// Word Count
// Have the function WordCount(str) take the str string parameter being passed and return
// the number of words the string contains (e.g. "Never eat shredded wheat or cake" would return
// 6). Words will be separated by single spaces.

function WordCount(str) {
  var test = str.split(" ").length;
  return test;
}

console.log(WordCount("hello world"));

// Ex Oh
// Have the function ExOh(str) take the str parameter being passed and return the
// string true if there is an equal number of x's and o's, otherwise return the string false. Only
// these two letters will be entered in the string, no punctuation or numbers. For example: if str is
// "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function ExOh(str) {
  var xCount = 0;
  var oCount = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      xCount++;
    }
    if (str[i] === "o") {
      oCount++;
    }
  }

  return xCount === oCount ? true : false;
}
console.log(ExOh("xcvofxxx"));
console.log(ExOh("xxoooxxxooo"));
console.log(ExOh("xooxxo"));

// Palindrome
// Have the function Palindrome(str) take the str parameter being passed and return the
// string true if the parameter is a palindrome, (the string is the same forward as it is backward)
// otherwise return the string false. For example: "racecar" is also "racecar" backwards.
// Punctuation and numbers will not be part of the string.

function Palindrome(str) {
  var str1 = str.replace(/^[a-zA-Z]/g, " ").toLowerCase();
  return str1 === str1.split("").reverse().join("");
}

console.log(Palindrome("oho"));
console.log(Palindrome("eye"));
console.log(Palindrome("like"));
console.log(Palindrome("nayan"));

// Arith Geo
// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the
// string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it
// follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An
// arithmetic sequence is one where the difference between each of the numbers is consistent,
// where as in a geometric sequence, each term after the first is multiplied by some constant or
// common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative
// numbers may be entered as parameters, 0 will not be entered, and no array will contain all the
// same elements.

function ArithGeo(arr) {
  var len = arr.length;
  var arith = arr[1] - arr[0];
  var geom = arr[1] / arr[0];

  for (var i = 0; i < len - 1; i++) {
    if (arr[i + 1] - arr[i] !== arith) {
      break;
    } else if (i === len - 2) {
      return "Arithmetic";
    }
  }
  for (var i = 0; i < len - 1; i++) {
    if (arr[i + 1] / arr[i] !== geom) {
      break;
    } else if (i == len - 2) {
      return "Geometric";
    }
  }
  return -1;
}
console.log(ArithGeo([5, 10, 15]));
console.log(ArithGeo([2, 4, 16, 24]));
console.log(ArithGeo([2, 6, 18, 54]));

// Have the function LetterCountI(str) take the str parameter being passed and return the
// first word with the greatest number of repeated letters. For example: "Today, is the greatest day
// ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which
// also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by
//spaces.

function LetterCountI(str) {
  var arr = str.toLowerCase().split("");
  return arr;
}
console.log();

// Third Greatest
// Have the function ThirdGreatest(strArr) take the array of strings stored in strArr and
// return the third largest word within it. So for example: if strArr is ["hello", "world", "before",
// "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" areboth 5, but the output should be world because it appeared as the last 5 letter word in the array.
// If strArr was ["hello", "world", "after", "all"] the output should be after because the first three
// words are all 5 letters long, so return the last one. The array will have at least three strings and
// each string will only contain letters.

function ThirdGreatest(strArr) {
  strArr.sort(function (a, b) {
    return b.length - a.length;
  });
  return strArr[2];
}

console.log(ThirdGreatest(["hello", "world", "before", "all"]));
console.log(ThirdGreatest(["coder", "byte", "code"]));
console.log(ThirdGreatest(["abc", "defg", "z", "hijk"]));

//

function longest(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  var long = " ";
  for (var i = 0; i < str.length; i++) {
    if (str[i].length > long.length) {
      long = str[i];
    }
  }
  return long;
}
console.log(longest("hellooo world"));
console.log(longest("hellooo welcomeeee"));
console.log(longest("hellooo world"));

// Array Matching
// Have the function ArrayMatching(strArr) read the array of strings stored in strArr which
// will contain only two elements, both of which will represent an array of positive integers. For
// example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two
// integer arrays, and your goal for this challenge is to add the elements in corresponding
// locations from both arrays. For the example input, your program should do the following
// additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should
// finally return this resulting array in a string format with each element separated by a hyphen: 6-
// 4-13-17.If the two arrays do not have the same amount of elements, then simply append the remaining
// elements onto the new array (example shown below). Both arrays will be in the format: [e1, e2,
// e3, ...] where at least one element will exist in each array

function ArrayMatching(strArr) {
  const [first, sec] = strArr;
  const arr1 = eval(first);
  const arr2 = eval(sec);
  const add = 0;
  for (var i = 0; i < strArr.length; i++) {
    if (arr1[i] > arr2[i]) {
      add = arr1[i].map((val, index) => {
        return arr2[index] ? arr2[index] + val : val;
      });
      add = arr2[i].map((val, index) => {
        return arr1[index] ? arr1[index] + val : val;
      });
    }
    return add.join("-");
  }
}
console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));

// Even Pairs
// Have the function EvenPairs(str) take the str parameter being passed and determine if a
// pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the
// string true, otherwise return false. For example: if str is "f178svg3k19k46" then there are two
// even numbers at the end of the string, "46" so your program should return the string true.
// Another example: if str is "7r5gg812" then the pair is "812" (8 and 12) so your program should
// return the string true

function EvenPairs(str) {
  var regEx = /[24680]d*[24680]/;
  return regEx.test(str);
}
console.log(EvenPairs("7r5gg812"));
console.log(EvenPairs("f178svg3k19k46"));

// Nonrepeating Character
// Have the function NonrepeatingCharacter(str) take the str parameter being passed,
// which will contain only alphabetic characters and spaces, and return the first non-repeating
// character. For example: if str is "agettkgaeee" then your program should return k. The string
// will always contain at least one character and there will always be at least one non-repeating
// character.

function NonrepeatingCharacter(str) {
  var strObj = {};
  for (var i = 0; i < str.length; i++) {
    if (strObj[str[i]]) {
      strObj[str[i]]++;
    } else {
      strObj[str[i]] = 1;
    }
  }
  for (var j = 0; j < str.length; j++) {
    if (strObj[str[j]] === 1) {
      return str[j];
    }
  }
}
console.log(NonrepeatingCharacter("agettkgaeee"));
console.log(NonrepeatingCharacter("ageottkdkgaeee"));

// Three Numbers
// Have the function ThreeNumbers(str) take the str parameter being passed and determine
// if exactly three unique, single-digit integers occur within each word in the string. The integers
// can appear anywhere in the word, but they cannot be all adjacent to each other. If every word
// contains exactly 3 unique integers somewhere within it, then return the string true, otherwise
// return the string false. For example: if str is "2hell6o3 wor6l7d2" then your program should
// return "true" but if the string is "hell268o w6or2l4d" then your program should return "false"
// because all the integers are adjacent to each other in the first word.

// Triangle Row
// Have the function TriangleRow(num) take num which will be a positive integer representing
// some row from Pascal's triangle. Pascal's triangle starts with a [1] at the 0th row of the triangle.
// Then the first row is [1, 1] and the second row is [1, 2, 1]. The next row begins with 1 and ends
// with 1, and the inside of the row is determined by adding the k-1 and kth elements from the
// previous row. The next row in the triangle would then be [1, 3, 3, 1], and so on. The input will be
// some positive integer and your goal is to return the sum of that row. For example: if num is 4
// then your program should return the sum of 1 + 4 + 6 + 4 + 1 which is 16.

function TriangleRow1(num) {
  return Math.pow(2, num);
}
console.log(TriangleRow1(5));

function TriangleRow(num) {
  let triangle = [];
  // Function to calculate factorial
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }

  // Function to calculate combinations (n choose k)
  function calculateCombination(n, k) {
    return factorial(n) / (factorial(k) * factorial(n - k));
  }

  // Function to generate Pascal's Triangle
  function generatePascalsTriangle(rows) {
    let triangle = [];

    for (let i = 0; i < rows; i++) {
      triangle[i] = [];
      for (let j = 0; j <= i; j++) {
        triangle[i][j] = calculateCombination(i, j);
      }
    }

    return triangle;
  }

  // Function to print Pascal's Triangle
  function printPascalsTriangle(triangle) {
    for (let i = 0; i < triangle.length; i++) {
      console.log(
        " ".repeat((triangle.length - i - 1) * 3) + triangle[i].join(" ")
      );
    }
  }
}

// Number Stream
// Have the function NumberStream(str) take the str parameter being passed which will
// contain the numbers 2 through 9, and determine if there is a consecutive stream of digits of at
// least N length where N is the actual digit value. If so, return the string true, otherwise return the
// string false. For example: if str is "6539923335" then your program should return the
// string true because there is a consecutive stream of 3's of length 3. The input string will always
// contain at least one digit.

function NumberStream(str) {
  for (var i = 2; i < 10; i++) {
    let char = i.toString();
    let n = char.repeat(i);
    if (str.indexOf[n] !== -1) {
      return true;
    }
  }
  return false;
}
console.log(NumberStream("65399233355"));
console.log(NumberStream("55562933835636651"));
console.log(NumberStream("15788888888882339999"));

// Largest Four
// Have the function LargestFour(arr) take the array of integers stored in arr, and find the
// four largest elements and return their sum. For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the
// four largest elements in this array are 6, 6, 4, and 5 and the total sum of these numbers is 21,
// so your program should return 21. If there are less than four numbers in the array your program
// should return the sum of all the numbers in the array.

function LargestFour(arr) {
  let newArr = arr
    .sort((a, b) => {
      return b - a;
    })
    .splice(0, 4);
  return newArr.reduce((a, b) => {
    return b + a;
  }, 0);
}
console.log(LargestFour([4, 5, -2, 3, 1, 2, 6, 6]));
console.log(LargestFour([0, 0, 2, 3, 7, 1]));
console.log(LargestFour([1, 1, 1, -5]));

// Distinct Characters
// Have the function DistinctCharacters(str) take the str parameter being passed and
// determine if it contains at least 10 distinct characters, if so, then your program should return
// the string true, otherwise it should return the string false. For example: if str is
// "abc123kkmmmm?" then your program should return the string false because this string
// contains only 9 distinct characters: a, b, c, 1, 2, 3, k, m, ? adds up to 9.

function DistinctCharacters(str) {
  let set = new Set(str.split(""));
  return set.size >= 10 ? true : false;
}
console.log(DistinctCharacters("12334bbmma:=6"));
console.log(DistinctCharacters("eeeemmmmmmmmm1000"));
console.log(DistinctCharacters("abc123kkmmmm?"));
