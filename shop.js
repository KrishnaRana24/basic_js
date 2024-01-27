// const user = {
//   name: "kim",
//   active: true,
//   cart: [],
//   buy: [],
// };
// let tax = 20;
// function gst(price) {
//   return price * (tax / 100) + price;
// }
// console.log(gst(15));

let x = 10;
let y = 20;
let sum = "x*y";
console.log(eval(sum));

// ASCII Conversion
// Have the function ASCIIConversion(str) take the str parameter being passed and return
// a new string where every character, aside from the space character, is replaced with its
// corresponding decimal character code . For example: if str is "dog" then your program should
// return the string 100111103 because d = 100, o = 111, g = 103.

function ASCIIConversion(str) {
  let myarr = str
    .split("")
    .map((val) => {
      return val
        .split("")
        .map((val2) => {
          return val2.charCodeAt(0);
        })
        .join("");
    })
    .join("");
  return myarr;
}
console.log(ASCIIConversion("hello world"));

// Questions Marks
// Have the function QuestionsMarks(str) take the str string parameter, which will contain
// single digit numbers, letters, and question marks, and check if there are exactly 3 question
// marks between every pair of two numbers that add up to 10. If so, then your program should
// return the string true, otherwise it should return the string false. If there aren't any two numbers
// that add up to 10 in the string, then your program should return false as well.
// For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because
// there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at
// the end of the string.

// function QuestionsMarks(str) {
//   var res = false;
//   for (var i = 0; i < str.length; i++) {
//     for (var j = i + 1; j < str.length; j++) {
//       if (Number(str[i]) + Number(str[j]) === 10) {
//         res = true;
//         if (str.slice(i, j).split("?").length < 3) {
//           return false;
//         }
//       }
//     }
//   }
//   return res;
// }
// console.log(QuestionsMarks("arrb6???4xxbl5???eee5"));
// console.log(QuestionsMarks("a??dsa???"));

// Have the function SwitchSort(arr) take arr which will be an an array consisting of integers 1...size(arr)
// and determine what the fewest number of steps is in order to sort the array from least to greatest using
// the following technique: Each element E in the array can swap places with another element that is E spaces
// to the left or right the chosen element. You can loop from one end of the array to the other. For example:
// if arr is the array [1, 3, 4, 2] then you can choose the second element which is the number 3, and if you
// count 3 places to the left you'll loop around the array and end up at the number 4. Then you swap these
// elements and arr is then [1, 4, 3, 2]. From here only one more step is required, you choose the last
// element which is the number 2, count 2 places to the left and you'll reach the number 4, then you swap
// these elements and you end up with a sorted array [1, 2, 3, 4]. Your program should return an integer
// that specifies the least amount of steps needed in order to sort the array using the following switch
// sort technique.

function switchs(arr) {
  function sort(arr) {
    const n = arr.length;
    var step = 0;
    for (var i = 0; i < n; i++) {
      const current = i + 1;
      while (current !== arr[i]) {
        const temp = arr.indexOf(current);
        [arr[i], arr[temp]] = [arr[temp], arr[i]];
        step++;
      }
    }
    return step;
  }
  return sort(arr);
}
console.log(switchs([1, 3, 4, 2]));
console.log(switchs([1, 4, 3, 2]));
console.log(switchs([4, 1, 2, 3]));
// function SwitchSort(arr) {
//   function minSort(arr) {
//     const n = arr.length;
//     let step = 0;

//     for (var i = 0; i < n; i++) {
//       let curr = i + 1;
//       while (curr !== arr[i]) {
//         const target = arr.indexOf(curr);
//         [arr[target], arr[i]] = [arr[i], arr[target]];
//         step++;
//       }
//     }
//     return step;
//   }
//   return minSort(arr);
// }
// console.log(SwitchSort([1, 3, 4, 2]));
// console.log(SwitchSort([1, 4, 3, 2]));
// console.log(SwitchSort([4, 1, 2, 3]));
//---------------------------------------------------------------------------------------
//triplet sum

function tripletss(arr, sum) {
  //let sum = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] + arr[k] == sum) {
          //console.log(arr[i], arr[j], arr[k]);
          return true;
        }
      }
    }
  }
  return false;
}

console.log(tripletss([1, 4, 45, 6, 10, 8], 22));
console.log(tripletss([1, 4, 45, 6, 10, 8], 5));

function twoSum(sum, S) {
  let arr = [];
  for (let i = 0; i < sum.length; i++) {
    for (let j = i + 1; j < sum.length; j++) {
      if (sum[i] + sum[j] === S) {
        arr.push(sum[i], sum[j]);
      }
    }
    return arr;
  }
}
console.log(twoSum([2, 4, 6, 8], 22));
//--------------------------------------------------------------------------------------------

//Pair searching

// function pairSearch(arr, n) {
//   let i = 0;
//   let j = 1;

//   while (i < arr.length && j < arr.length) {
//     if (i != j && arr[j] - arr[i] == n) {
//       console.log(arr[i], arr[j]);
//       return true;
//     } else if (arr[j] - arr[i] < n) {
//       j++;
//     } else {
//       i--;
//     }
//   }
//   return false;
// }
// console.log(pairSearch([1, 8, 30, 40, 100], 60));

function que(str) {
  var res = false;
  for (var i = 0; i < str.length; i++) {
    for (var j = j + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = ture;
        if (str.slice(i, j).split("?").length < 3) {
          return false;
        }
      }
    }
  }
  return res;
}
console.log(que("arrb6???4xxbl5???eee5"));
function palindrome(str) {
  let rev = str.split("").reverse().join("");
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome("nitin"));
console.log(palindrome("nayan"));
console.log(palindrome("abc"));

function palin(str) {
  let str1 = str.split("").reverse().join("");
  if (str1 === str) {
    return true;
  } else {
    return false;
  }
}
// function pascals(numRows) {
//   if (numRows === 0) return [];
//   if (numRows === 1) return [[1]];
//   let result = [];
//   for (let row = 1; row <= numRows; row++) {
//     let arr = [];
//     for (let col = 0; col < row; col++) {
//       if (col === 0 || col === row - 1) {
//         arr.push(1);
//       } else {
//         arr.push(result[row - 2][col - 1] + result[row - 2][col]);
//       }
//     }
//     result.push(arr);
//   }
//   return result;
// }
// console.log(pascals(6));
function pascal(num) {
  if (num === 0) return [];
  if (num === 1) return [[1]];
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
console.log(pascal(5));
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

function trow(num) {
  return Math.pow(2, num);
}
console.log(trow(4));

function dash(str) {
  let nstr = str[0];
  for (let i = 1, last = str[0] % 2; i < str.length; i++) {
    if (str[i] % 2 === 1 && last === 1) {
      nstr += "-" + str[i];
    } else {
      nstr += str[i];
    }
    last = str[i] % 2;
  }
  return nstr;
}
console.log(dash("454793"));

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

//-----------------------------------------------------------------------------
function lineOrdering(strArr) {
  const relations = strArr.map((relation) => [relation[0], relation[2]]);
  const people = Array.from(new Set(relations.flat()));

  function generatePermutations(arr, result) {
    if (arr.length === 0) {
      if (isValidOrder(result)) {
        validOrderings.push(result.join(""));
      }
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const currentPerson = arr[i];
      const remainingPeople = [...arr.slice(0, i), ...arr.slice(i + 1)];
      generatePermutations(remainingPeople, [...result, currentPerson]);
    }
  }

  function isValidOrder(order) {
    for (const [first, second] of relations) {
      const firstIndex = order.indexOf(first);
      const secondIndex = order.indexOf(second);

      if (firstIndex === -1 || secondIndex === -1 || firstIndex > secondIndex) {
        return false;
      }
    }
    return true;
  }

  const validOrderings = [];
  generatePermutations(people, []);

  return validOrderings.length;
}

// Example usage:
const result = lineOrdering(["J>B", "B<S", "D>J"]);
console.log(result); // Output: 3

function arrayChallenge(strArr) {
  // Function to generate all permutations of a given array
  function generatePermutations(arr) {
    if (arr.length <= 1) {
      return [arr];
    } else {
      const perms = [];
      for (let i = 0; i < arr.length; i++) {
        const first = arr[i];
        const rest = arr.slice(0, i).concat(arr.slice(i + 1));
        for (const p of generatePermutations(rest)) {
          perms.push([first].concat(p));
        }
      }
      return perms;
    }
  }

  // Split the input into relations
  const relations = strArr[0].split(">");
  const people = new Set([...relations.join("")]);

  // Generate all permutations of the people
  const allPerms = generatePermutations([...people]);

  // Check each permutation against the given relations
  let validPerms = 0;
  for (const perm of allPerms) {
    let valid = true;
    for (const rel of relations) {
      const a = rel[0];
      const b = rel[1];
      if (perm.indexOf(a) > perm.indexOf(b)) {
        valid = false;
        break;
      }
    }
    if (valid) {
      validPerms++;
    }
  }

  return validPerms;
}

// Test cases
console.log(arrayChallenge(["J>BB<SD>J"])); // Output: 0
console.log(arrayChallenge(["J>B", "B<S", "D>J"]));

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
console.log(long("hello ever !"));
console.log(long("krishna rana !"));
//----------------------------------------------------------------------------------------------------------
function lineOrdering(strArr) {
  // Unique people
  const people = Array.from(new Set(strArr.join(",").match(/[A-Z]+/g)));

  // Brute-force all permutations
  const peoplePermutations = permute(people);
  // const validPermutations = [];

  // peoplePermutations.forEach(permutation => {
  //     const permutationValid = relationsPossible(permutation, strArr);
  //     if (permutationValid) {
  //         validPermutations.push(permutation);
  //     }
  // });
  return people;
}

function relationsPossible(people, relations) {
  for (let i = 0; i < relations.length; i++) {
    let [personA, relationship, personB] = relations[i].split("");
    // Switch everything to A > B
    if (relationship === "<") {
      [personB, personA] = [personA, personB];
    }

    const indexPersonA = people.indexOf(personA);
    const indexPersonB = people.indexOf(personB);

    if (indexPersonA <= indexPersonB) {
      return false;
    }
  }
  return true;
}

function permute(arr) {
  let count = Array(arr.length).fill(0);

  const results = [arr.slice()];

  let i = 0;
  while (i < arr.length) {
    if (count[i] < i) {
      if (i % 2 === 0) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
      } else {
        const temp = arr[count[i]];
        arr[count[i]] = arr[i];
        arr[i] = temp;
      }
      results.push(arr.slice());
      count[i]++;
      i = 0;
    } else {
      count[i] = 0;
      i++;
    }
  }
  return results;
}

console.log(lineOrdering(["A>B", "A<C", "C<Z"]));
console.log(lineOrdering(["A>B", "B<R", "R<G"]));
console.log(lineOrdering(["J>B", "B<S", "D>J"]));

// Array Rotation
/*
 * have the function ArrayRotation(arr)
take the arr parameter being passed which will be an array of
non-negative integers and circularly rotate the array starting
from the Nth element where N is equal to the first integer in
the array. For example: if arr is [2, 3, 4, 1, 6, 10] then your
program should rotate the array starting from the 2nd position
because the first element in the array is 2. The final array will
therefore be [4, 1, 6, 10, 2, 3], and your program should return
the new array as a string, so for this example your program would
return 4161023. The first element in the array will always be an
integer greater than or equal to 0 and less than the size of the array

*/
function ArrayRotation(arr) {
  let root = arr[0];
  let newArr = arr.slice(root).concat(arr.slice(0, root));
  return newArr.join("");
}
console.log(ArrayRotation([2, 3, 4, 1, 6, 10]));

function swap(str) {
  let result = " ";
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= "a" && ch <= "z") {
      result += ch.toUpperCase();
    } else if (ch >= "A" && ch <= "Z") {
      result += ch.toLowerCase();
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(swap("KrIshna"));

function twoSum(sum, S) {
  let arr = [];
  for (let i = 0; i < sum.length; i++) {
    for (let j = i + 1; j < sum.length; j++) {
      if (sum[i] + sum[j] === S) {
        arr.push(sum[i], sum[j]);
      }
    }
    return arr;
  }
}
console.log(twoSum([2, 4, 6, 8], 10));
function seatA(arr) {
  const k = arr[0];
  const occ = new Set(arr.slice(1));
  let count = 0;

  for (let i = 1; i <= k; i++) {
    if (!occ.has(i)) {
      if (i % 2 == 1 && !occ.has(i + 1) && i + 1 <= k) {
        count++;
      }
      if (i < k - 1 && !occ.has(i + 2)) {
        count++;
      }
    }
  }
  return count;
}
console.log(seatA([8, 1, 8]));
function seat(arr) {
  const k = arr[0];
  const occupied = new Set(arr.slice(1));

  let count = 0;
  for (let i = 1; i <= k; i++) {
    if (!occupied.has(i)) {
      if (i % 2 == 1 && !occupied.has(i + 1) && i + 1 <= k) {
        count++;
      }
      if (i < k - 1 && !occupied.has(i + 2)) {
        count++;
      }
    }
  }
  return count;
}
console.log(seat([6, 4]));

function seatarrange(arr) {
  const k = arr[0];
  const o = new Set(arr.slice(1));
  let count = 0;

  for (let i = 1; i <= k; i++) {
    if (!o.has(i)) {
      if (i % 2 == 1 && !o.has(i + 1) && i + 1 <= k) {
        count++;
      }
      if (i < k - 1 && !o.has(i + 2)) {
        count++;
      }
    }
  }
  return count;
}
console.log(seatarrange([6, 4]));
console.log(seatarrange([8, 1, 8]));

// function lineOrdering(strArr) {}

// Array Rotation
/**
 * have the function ArrayRotation(arr)
take the arr parameter being passed which will be an array of
non-negative integers and circularly rotate the array starting
from the Nth element where N is equal to the first integer in
the array. For example: if arr is [2, 3, 4, 1, 6, 10] then your
program should rotate the array starting from the 2nd position
because the first element in the array is 2. The final array will
therefore be [4, 1, 6, 10, 2, 3], and your program should return
the new array as a string, so for this example your program would
return 4161023. The first element in the array will always be an
integer greater than or equal to 0 and less than the size of the array. 


Input:3,2,1,6
Output:6321

Input:4,3,4,3,1,2
Output:124343
*/
function ra(arr) {
  let rotation = arr[0];
  const newA = arr.slice(rotation).concat(arr.slice(0, rotation));
  return newA.join("");
}
console.log(ra([2, 3, 4, 1, 6, 10]));

function ArrayRotation(arr) {
  const rotation = arr[0];
  let newArr = arr.slice(rotation).concat(arr.slice(0, rotation));
  return newArr.join("");
}
console.log(ArrayRotation([3, 4, 1, 5, 0, 8, 6, 7]));

// Using the JavaScript language, have the function lineOrdering(strArr) read the strArr parameter being passed
// which will represent the relations amongpeople standing in a line. The structure of the input will be
// ["A>B","B>C","A<D",etc..]. The letters stand for different people and the greater than and less than signs
// stand for a person being in front of someone or behind someone. A>B means A is in front of B and B<C
// means that B is behind C in line. For example if strArr is: ["J>B","B<S","D>J"], these are the following
// ways you can arrange the people in line: DSJB, SDJB and DJSB. Your program will determine the number of
// ways people can be arranged in line. So for this example your program should return the number 3. It also
// may be the case that the relations produce an impossible line ordering, resulting in zero as the answer.
// Only the symbols <, >, and the uppercase letters A...Z will be used.The maximum number of relations
// strArr will contain is ten.

function lineOrdering(strArr) {
  const relations = strArr.map((relation) => [
    relation[0],
    relation[2],
    relation[1],
  ]);
  const people = [...new Set(relations.flat())];
  const permutations = generatePermutations(people);

  let count = 0;

  for (const perm of permutations) {
    if (isValidOrdering(perm, relations)) {
      count++;
    }
  }

  return count;
}

function isValidOrdering(ordering, relations) {
  for (const relation of relations) {
    const idx1 = ordering.indexOf(relation[0]);
    const idx2 = ordering.indexOf(relation[1]);

    if (relation[2] === "<" && idx1 > idx2) {
      return false;
    } else if (relation[2] === ">" && idx1 < idx2) {
      return false;
    }
  }

  return true;
}

function generatePermutations(arr) {
  const result = [];

  function permute(arr, start = 0) {
    if (start === arr.length - 1) {
      result.push([...arr]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      permute(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // backtrack
    }
  }

  permute(arr);
  return result;
}

// Example usage:
const strArr = ["J>B", "B<S", "D>J"];
const results = lineOrdering(strArr);
console.log(results);
