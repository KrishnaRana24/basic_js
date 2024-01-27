/*const restaurant = {
  name: "classic intalian",
  location: "la intalian resto",
  category: ["abc", "def", "xyz", "pqr"],
  subcategory: ["pizaa", "pasta", "burger", "salad"],
};

const arr=[2,3,4];
const a=arr[0];
const b=arr[1];
const c=arr[2];

const[x,y,z]=arr;
console.log(x,y,z);

let a=111;
let b=523;
let obj={a:23,b:8,c:98};
({a,b}=obj);
console.log(a,b);

//spread operator

const arr=[7,8,9];
const arr1=[1,2,arr[0],arr[1],arr[2]];
console.log(arr1);

const newArr=[1,2,...arr];
console.log(newArr);

const arr3=[...restaurant.subcategory,'ice-cream'];
console.log(arr3);

const newmenu=[...restaurant.category,...restaurant.subcategory];
console.log(newmenu);

const str="krishna";
const letter=[...str];
console.log(letter);

const ing=[
    prompt('let\'s make a pasta ingregidate 1:'),
    prompt('ingrediabt 2:'),
    prompt('ingrediabt 3:'),
];
console.log(ing);

const middleseat=function(seat){
    const s=seat.slice(-1);
    if(s==='b' || s==='c')
        console.log('you got the middle seat');
    else
        console.log('you are lucky');
}

middleseat('11b');
middleseat('12a');
middleseat('10d');
middleseat('9c');

const message="go to gate number 23";
console.log(message.padStart(20,'-'));

let text = "apple, banana, mongo";
let part = text.slice(5, 17);
console.log(part);

console.log(Math.PI);
const sum = Math.round(4.3);
console.log(sum);

const text = "I have done my Work with @8:30 Hours ";
if (text == [abc]) {
  console.log(text);
} else {
  console.log("Do't match a char");
}

let text = "visit LAnet @ 11:00";
let pattern = text.match(/[^0-9]/g);
console.log(pattern);
const arr = new Array(123, 456, 789, "hello", "welcome");
console.log(arr);

const str = "hello , welcome to the LA Net team!!!";
console.log(str);
console.log(str.indexOf("w"));

let a = "hello world";
let b = ["krishna", "aarti", "krish"];
console.log(a.replace("world", b[0]));

class node {
  constructor(element) {
    this.element = element;
    this.next = this.next;
  }
}
class ls {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    var node = new node(element);
    var current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
}
*/
//----------------------------------------------------------------------------

// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
/*
var is_array = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 3, 4]));
console.log(is_array([1, 2, 3, "a", "abc", true]));
*/

//2.Write a JavaScript function to clone an array.
// Test Data:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

/*
var array_Clone = function (arr) {
  return arr.slice(0);
};
// var array_Clone = (arr) => arr.slice(0);
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
*/

// 3.Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

/*
var first = function (arr, n) {
  if (arr == null) {
    return 0;
  }
  if (n == null) {
    return arr[0];
  }
  if (n < 0) {
    return [];
  }
  return arr.slice(0);
};
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));
*/
// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

/*
var last = function (arr, n) {
  if (arr == null) {
    return 0;
  }
  if (n == null) {
    return arr[arr.length - 1];
  }
  return arr.slice(Math.max([arr.length - n], 0));
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));
*/

// 5. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

/*
var myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
*/

//6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.
//For example if you accept 025468 the output should be 0-254-6-8.
/*
function inputN(number) {
  const str = number.toString();
  const res = [0, "-", str[0]];
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      res.push("-", str[i]);
    } else {
      res.push(str[i]);
    }
  }
  console.log(res.join(""));
}
inputN(25468);
*/
// 7. Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
/*
function sorta(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  return arr;
}
const original = [3, -4, -6, -3, 2, 45];
console.log(original);
const sortarr = sorta(original);

console.log(sortarr);
*/

// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

/*
var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      m++;
    }
    if (mf < m) {
      mf = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + " " + mf);
*/

// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character.
//  For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
/*
function swap(str) {
  return str
    .split("")
    .map(function (char) {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}
const input = "The Quick Brown Fox";
console.log(input);
const output = swap(input);
console.log(output);
*/

// Write a JavaScript program that prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"
// ------
// ------

/*
var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];
for (var i in a) {
  console.log("rows :" + i);
  for (var j in a[i]) {
    console.log(" " + a[i][j]);
  }
}
*/

// Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3
/*
function test(arr) {
  return arr.filter((n) => Array.isArray(n)).length;
}
arr = [2, 8, [6], 3, 3, 5, 3, 4, [5, 4]];
console.log(test(arr));
arr = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];
console.log(test(arr));
*/
// Write a JavaScript function to check whether an 'input' is a string or not.
/*
function isString(input) {
  return typeof input === "string";
}
console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));
*/
//Split a string and convert it into an array of words
/*
function splitarr(str) {
  return str.split();
}
console.log(splitarr("Robin Singh"));
console.log(splitarr("heey hello"));
*/

// Write a JavaScript function to extract a specified number of characters from a string.
/*
function fun(input, numChar) {
  return input.slice(0, numChar);
}
console.log(fun("Robin Singh", 4));
*/

//5. Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."
/*
function abStr(str) {
  const word = str.match(/\b\w/g) || [];
  return word.join("").toUpperCase();
}
console.log(abStr("Robin Singh"));
*/

//6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
/*
pro_email = function (u_email) {
  var p1, p2, sp, avg;
  sp = u_email.split("@");
  p1 = sp[0];
  avg = p1.length / 2;
  p1 = p1.substring(0, p1.length - avg);
  p2 = sp[1];
  return p1 + "...@" + p2;
};
console.log(pro_email("robin_singh@example.com"));
*/

// 7. Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
/*
pstring = function (str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/)
    .replace(/\s/g, "-");
};

console.log(pstring("Robin Singh from USA."));
*/

// 8. Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"
/*
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("js string exercises"));
*/
//1. Write a JavaScript program to test whether the first character of a string is uppercase or not.
/*
function upchar(char) {
  regx = /^[A-Z]/;
  if (regx.test(char)) {
    console.log("First char is Uppercase");
  } else {
    console.log("First char is not Uppercase");
  }
}
upchar("jScript");
upchar("Abc");
*/

//Write a JavaScript program to check a credit card number.

//3. Write a pattern that matches e-mail addresses.
// The personal information part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
/*
function valid_e(str) {
  var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.test(str)) {
    console.log("valid email address!!");
  } else {
    console.log("not vaild email address!!");
  }
}
valid_e("me-nfo@example.com");
*/

//4. Write a JavaScript program to search a date within a string.

/*
function str_date(date) {
  var vaild =
    /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
  if (vaild.test(date)) {
    return true;
  } else {
    return false;
  }
}
//MM-DD-YYYY
console.log(str_date("10/12/2024"));
console.log(str_date("18/1/2024"));
console.log(str_date("10/19/2024"));
*/

/*
function word_count(word) {
  return word.match(/[aeiou]/gi).length;
}

console.log(word_count("The quick brown fox jumps over the lazy dog"));
*/

// function cheack(str) {
//   var word = /^[a-zA-Z0-9]+$/;
//   if (word.test(str)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(cheack("EAdawe09876"));
// console.log(cheack("EAdawe0*&%9876"));
// console.log(cheack("EAdawe09876./,"));

function is_bool(value) {
  return (
    value === true ||
    value === false ||
    toString.call(value) === "[object Boolean]"
  );
}
console.log(is_bool(true));
console.log(is_bool("bool"));
console.log(is_bool(false));
console.log(is_bool("Boolean"));
