//binary convvertere
function binary(str) {
  const decimal = 0;
  for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
    decimal += parseInt(str[i]) * Math.pow(2, j);
  }
  return decimal;
}
console.log(binary(1));

// function BinaryReversal(str) {
//   // step 1
//   const binaryValue = Number(str).toString(2);

//   // step 2
//   const paddingLength =
//     binaryValue.length % 8 === 0 ? 0 : 8 - (binaryValue.length % 8);
//   const paddedBinaryStr = [
//     ...Array(paddingLength).fill(0),
//     ...binaryValue,
//   ].join("");

//   // step 3
//   const ReversedBinaryStr = paddedBinaryStr.split("").reverse().join("");

//   // step 4
//   const reversedBinary2Decimal = parseInt(ReversedBinaryStr, 2);

//   // step 5
//   return reversedBinary2Decimal;
// }
// console.log(BinaryReversal("1"));

function swap(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    }
  }
  return result;
}
console.log(swap("KWEwfsdf"));

function arrayRotation(arr) {
  let rotation = arr[0];
  let newArr = arr.slice(rotation).concat(arr.slice(0, rotation));
  return newArr.join("");
}

console.log(arrayRotation([5, 2, 1, 4, 7, 8, 6, 32]));
//====================================================================================
// function lineOrdering(strArr) {
//   // Unique people
//   const people = Array.from(new Set(strArr.join(",").match(/[A-Z]+/g)));

//   // Brute-force all permutations
//   const peoplePermutations = permute(people);
//   const validPermutations = [];

//   peoplePermutations.forEach((permutation) => {
//     const permutationValid = relationsPossible(permutation, strArr);
//     if (permutationValid) {
//       validPermutations.push(permutation);
//     }
//   });
//   return people;
// }
// function relationsPossible(people, relations) {
//   for (let i = 0; i < relations.length; i++) {
//     let [personA, relationship, personB] = relations[i].split("");
//     // Switch everything to A > B
//     if (relationship === "<") {
//       [personB, personA] = [personA, personB];
//     }

//     const indexPersonA = people.indexOf(personA);
//     const indexPersonB = people.indexOf(personB);

//     if (indexPersonA <= indexPersonB) {
//       return false;
//     }
//   }
//   return true;
// }

// function permute(arr) {
//   let count = Array(arr.length).fill(0);

//   const results = [arr.slice()];

//   let i = 0;
//   while (i < arr.length) {
//     if (count[i] < i) {
//       if (i % 2 === 0) {
//         const temp = arr[0];
//         arr[0] = arr[i];
//         arr[i] = temp;
//       } else {
//         const temp = arr[count[i]];
//         arr[count[i]] = arr[i];
//         arr[i] = temp;
//       }
//       results.push(arr.slice());
//       count[i]++;
//       i = 0;
//     } else {
//       count[i] = 0;
//       i++;
//     }
//   }
//   return results;
// }

// console.log(lineOrdering(["A>B", "A<C", "C<Z"]));
// console.log(lineOrdering(["A>B", "B<R", "R<G"]));
// console.log(lineOrdering(["J>B", "B<S", "D>J"]));

function longest(str) {
  str = str.match(/[a-zA-Z0-9]+/gi);
  let long = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > long.length) {
      long = str[i];
    }
  }
  return long;
}
console.log(longest("Krishandasd weoldf"));

function prime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(11));

// Triangle Row
// Have the function TriangleRow(num) take num which will be a positive integer representing
// some row from Pascal's triangle. Pascal's triangle starts with a [1] at the 0th row of the triangle.
// Then the first row is [1, 1] and the second row is [1, 2, 1]. The next row begins with 1 and ends
// with 1, and the inside of the row is determined by adding the k-1 and kth elements from the
// previous row. The next row in the triangle would then be [1, 3, 3, 1], and so on. The input will be
// some positive integer and your goal is to return the sum of that row. For example: if num is 4
// then your program should return the sum of 1 + 4 + 6 + 4 + 1 which is 16.

function TriangleRow(num) {
  return Math.pow(2, num);
}
console.log(TriangleRow(5));
console.log(TriangleRow(4));
function pasacl(num) {
  if (num === 0) {
    return [];
  }
  if (num === 1) {
    return [[1]];
  }
  let result = [];
  for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = 0; j < i; j++) {
      if (j === 0 || j === i - 1) {
        arr.push(1);
      } else {
        arr.push(result[i - 2][j - 1] + result[i - 2][j]);
      }
    }
    result.push(arr);
  }
  return result;
}
console.log(pasacl(4));

//========================================================================================
function short(grid) {}
function shortestClearPath(grid) {
  const n = grid.length;

  if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
    // Check if the start or end cell is blocked
    return -1;
  }

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  const queue = [[0, 0, 1]]; // [row, column, pathLength]
  grid[0][0] = 1; // Mark the starting cell as visited

  while (queue.length > 0) {
    const [row, col, pathLength] = queue.shift();

    if (row === n - 1 && col === n - 1) {
      // Reached the bottom-right cell
      return pathLength;
    }

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      if (
        newRow >= 0 &&
        newRow < n &&
        newCol >= 0 &&
        newCol < n &&
        grid[newRow][newCol] === 0
      ) {
        // Valid neighbor cell
        queue.push([newRow, newCol, pathLength + 1]);
        grid[newRow][newCol] = 1; // Mark the neighbor cell as visited
      }
    }
  }

  // No clear path found
  return -1;
}

// Example usage:
const grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];

const result = shortestClearPath(grid);
console.log(result);

function palindrome(str) {
  let rev = str.split("").reverse().join("");
  if (str === rev) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("nayan"));
console.log(palindrome("narayan"));

function switchSOrt(arr) {
  function sort(arr) {
    const n = arr.length;
    let step = 0;
    for (let i = 0; i < n; i++) {
      let current = i + 1;
      while (current !== arr[i]) {
        let temp = arr.indexOf(current);
        [arr[i], arr[temp]] = [arr[temp], arr[i]];
        step++;
      }
    }
    return step;
  }
  return sort(arr);
}
console.log(switchSOrt([1, 3, 4, 2]));

// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain
// single digit numbers, letters, and question marks, and check if there are exactly 3 question
// marks between every pair of two numbers that add up to 10. If so, then your program should
// return the string true, otherwise it should return the string false. If there aren't any two numbers
// that add up to 10 in the string, then your program should return false as well.
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because
// there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at
// the end of the string.

function QuestionsMarks(str) {
  res = true;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number[i] + Number[j] === 10) {
        res = false;
        if (str.slice(i, j).split("?").length < 3) {
          return false;
        }
      }
    }
  }
  return true;
}
console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));

// Have the function ASCIIConversion(str) take the str parameter being passed and return a new string where
// every character, aside from the space character, is replaced with its corresponding decimal character code .
// For example: if str is "dog" then your program should return the string 100111103 because d = 100, o = 111,
// g = 103. explain program in javascript

function conversion(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "") {
      result += "";
    } else {
      let charcode = char.charCodeAt(0);
      result += charcode.toString();
    }
  }
  return result;
}
console.log(conversion("krishna"));
console.log(conversion("mehul"));
console.log(conversion("dog"));

function rotation(arr) {
  const rotation = arr[0];
  const newArr = arr.slice(rotation).concat(arr.slice(0, rotation));
  return newArr.join("");
}

console.log(rotation([2, 3, 4, 1, 6, 10]));

// Letter Changes
// Have the function LetterChanges(str) take the str parameter being passed and modify it
// using the following algorithm. Replace every letter in the string with the letter following it in the
// alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i,
// o, u) and finally return this modified string.

function LetterChanges(str) {
  str = str.replace(/[a-zA-Z]/g, function (ch) {
    if (ch === "z") return "a";
    if (ch === "Z") return "A";
    return String.fromCharCode(ch.charCodeAt(0) + 1);
  });
  return str.replace(/[aeiou]/g, function (ch) {
    return ch.toUpperCase();
  });
}
console.log(LetterChanges("Krishna%$#"));
