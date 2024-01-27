/*const e1 = document.createElement("this is a para");
const e2 = document.createTextNode("this is new para");
console.log(e1.appendChild(e2));

const greet = function () {
  console.log("welcome to JS");
};
console.log(greet());
const sum = (num, target, result) => {
  this.num = [2, 11, 7, 15];
  this.target = 9;
  for (let i = 0; i < num.size() - 1; i++) {
    for (let j = i + 1; i < num.size(); j++) {
      if (num[i] + num[j] == target) {
        result[0] = i;
        result[1] = j;
        result = 1;
        console.log(result);
      }
    }
  }
  //const add = num[0] + num[1];
};

var canada = () => {
  console.log("cold");
};
function india() {
  console.log("warm");
}
canada();
india();

function marry(p1, p2) {
  console.log("arguments", arguments);
  console.log(`${p1} is now marry to ${p2}`);
}
marry("tin", "tina");

function marry2(...args) {
  console.log("arguments", args);
  console.log(Array.from(arguments));
  console.log(`${args[0]} is now marry to ${args[1]}`);
}
marry2("tin", "tina");

function one() {
  var isvalid;
}

function two() {
  var isvalid = true;
  one();
}

var isvaild = false;
two();
function sayName() {
  var a = "a";
  console.log(function findName() {
    var b = "b";
    console.log(function myName() {
      var c = "c";
      console.log("Krishna Rana");
    });
  });
}

sayName()()();
"use strick";
function detail() {
  var height = 50;
  console.log(height);
}
detail();
if (5 > 4) {
  var res = "123654";
}
console.log(res);

const obj = {
  name: "RIyu",
  sing() {
    return "lalala" + "  " + this.name;
  },
  singAgain() {
    return this.sing() + " " + "!!!";
  },
};
console.log(obj.singAgain());
function importPerson() {
  console.log(this.name);
}
const name = "sunny";
const obj1 = {
  name: "jojo",
  importPerson: importPerson,
};
const obj2 = {
  name: "yojo",
  importPerson: importPerson,
};
importPerson();
obj1.importPerson();
obj2.importPerson();
function a() {
  console.log("heyyyyy");
}
// a.call();
// a.bind();
a.apply();

function multiply(a, b) {
  return a * b;
}
let mulintoTwo = multiply.bind(this, 2);
console.log(mulintoTwo(10000));

const s = typeof "hello";
console.log(s);

function a() {
  return 5;
}
a.hey = "hellooooo";
console.log(a.hey);

var s = Array.isArray([1, 2, 3]);
console.log(s);

let obj1 = { name: "jojo", pwd: "123" };
let obj2 = obj1;

obj2.pwd = "la net";
console.log(obj1);
console.log(obj2);

let obj = { a: "a", b: "b", c: { kri: "hello,Welcome!!!!" } };
let colne = Object.assign({}, obj);
let colne2 = { ...obj };
let supercolne = JSON.parse(JSON.stringify(obj));

obj.c.kri = "welcome to the lanet";
console.log(obj);
console.log(colne);
console.log(colne2);
console.log(supercolne);

const number = 100;
const string = "joy";
const obj1 = {
  value: "a",
};
const obj2 = {
  value: "b",
};
const obj3 = obj2;

function change(number, string, obj1, obj2) {
  number = number * 10;
  string = "jojo";
  obj1 = obj2;
  obj2.value = "c";
}

change(number, string, obj1, obj2);

console.log(number);
console.log(string);
console.log(obj1.value);
console.log(obj2);

const four = new Function("return 4");
console.log(four());

var stuff = function () {};
function a(fn) {
  fn();
}
a(function () {
  console.log("hey there");
});
function b() {
  return function c() {
    console.log("hello tata bye bye");
  };
}
var d = b();
console.log(d);
const accessTo = (name) => {
  console.log("Access Greanted to" + " " + name);
};

function verify(user) {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return true;
}
function loginfo(person, fn) {
  if (person.level === "admin") {
    fn(500000);
  } else if (person.level === "user") {
    fn(100000);
  }
  return accessTo(person.name);
}
loginfo({ level: "admin", name: "sally" }, verify);

const multi = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const mul8 = multi(8);
console.log(mul8(8));

const multiply = (num1) => (num2) => num1 * num2;
console.log(multiply(5)(8));

function a() {
  let gf = "grandFather";
  return function b() {
    let f = "father";
    return function c() {
      let s = "son";
      return `${gf} < ${f} < ${s}`;
    };
  };
}
console.log(a()()());

function callme() {
  const str = "hello ! my name is tom";
  setTimeout(function () {
    console.log(str);
  }, 4000);
}
console.log(callme());

let view;
function int() {
  view = "*************";
  console.log("view has been shown!!!");
}

int();
int();
int();
console.log(view);

const str = "HEllo welcome,tata,bte bye";
console.log(str.charAt(5));
const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

areEqualInUpperCase("ß", "ss"); // true; should be false
areEqualInLowerCase("ı", "I"); // false; should be true

const str = "foo"; // A literal is a string primitive
const str2 = String(1); // Coerced into the string primitive "1"
const str3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(str); // String with new returns a string wrapper object.

console.log(typeof str); // "string"
console.log(typeof str2); // "string"
console.log(typeof str3); // "string"
console.log(typeof strObj); // "object"
console.log(str.fromCharCode());
console.log(String.fromCharCode(189, 93, 789, 45));

function a(num1, num2) {
  return num1 * num2;
}
function b(num) {
  return num + 3;
}
console.log(b(12));

const a = () => {
  const b = () => {
    console.log("456");
  };
  b();
};
console.log(a());

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;
  if (x == 0) {
    myResolve("Welcome");
  } else {
    myReject("error");
  }
});
let promise2 = new Promise(function (myResolve, MyReject) {
  setTimeout(myResolve, 100, "hiiiiiiiii");
});
let promise3 = new Promise(function (myResolve, myReject) {
  setTimeout(myResolve, 1000, "heyyyyyyy");
});
let promise4 = new Promise(function (myResolve, myReject) {
  setTimeout(myResolve, 3000, "Helloooooo");
});
Promise.all([promise2, promise3, promise4]).then((value) => {
  console.log(value);
});
myPromise.then((result) => console.log(result));

const getData = async () => {
  const data = "HEllo Welcome!!!";
  console.log(data);
};
getData().then((data) => console.log(data));

const getData = async () => {
  let y = await "hello world";
  console.log(y);
};

console.log(1);
getData();
console.log(2);
const a = () => promisify("a", 10);
const b = () => promisify("b", 0);
const c = () => promisify("c", 100);
async function sequence() {
  const op1 = await a();
  const op2 = await b();
  const op3 = await c();
  return `sequence is done using ${op1} ${op2} ${op3}`;
}
sequence().then(console.log);

const { spaws } = require("child_process");
spaws("git", ["stuff"]);

const a = () => {
  const b = () => {
    const c = () => {
      console.log("heyyy");
    };
  };
};
console.log(a()());

function fail() {
  try {
    cosole.log("heyyyyyyyyyyyyyy");
  } catch (error) {
    console.log("this is an error");
  }
}
console.log(fail());

Promise.resolve("asyncFail")
  .then((response) => {
    throw new Error("#1 failed");
    return response;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match(/ain/gi));

const person = {
  name: "jojo",
  age: "31",
  city: "NY",
  country: "US",
  today: new Date(),
};
const obj = Object.values(person);
const obj1 = JSON.stringify(person);
console.log(obj);
console.log(obj1);

const color = ["red", "yellow", "green", "pink", "blue", "black"];
for (var i = 0; i < color.length; i++) {
  console.log(color[i]);
}
color.forEach(function (color) {
  console.log(color);
});

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var doubleNum = [];
for (var i = 0; i < num.length; i++) {
  doubleNum.push(num[i] * 2);
}
var double = num.map(function (number) {
  return number * 2;
});
console.log(double);
console.log(doubleNum);
num.forEach(function (number) {
  sum += number;
});
console.log(sum);

const product = [
  { items: "laptop", price: "70000", type: "electonic" },
  { item: "banana", price: "50", type: "fruit" },
  { items: "keyboard", price: "9000", type: "electonic" },
  { item: "apple", price: "100", type: "fruit" },
];
const price = product.map(function (p1) {
  return p1.price;
});
console.log(product);
console.log(price);

var fruitfilter = [];
for (var i = 0; i < product.length; i++) {
  if (product[i].type === "fruit") {
    fruitfilter.push(product[i]);
  }
}
//console.log(fruitfilter);

const p1 = product.filter(function (pro) {
  if (pro.price > 10000 && pro.type === "electonic") {
    return pro.type === "electonic";
  }
});
console.log(p1);

var post = { id: 4, title: "new post" };
var comment = [
  { pid: 4, content: "heyyyyyyyyyyyyyy" },
  { pid: 3, content: "hiiiiiiiiii" },
  { pid: 4, content: "hellooooooo" },
];
function comForPost(post, comment) {
  return comment.filter(function (comm) {
    return comm.pid === post.id;
  });
}
console.log(comForPost(post, comment));

var users = [{ name: "bob" }, { name: "joy" }, { name: "jojo" }];
var user;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "joy") {
    user = users[i];
  }
}

const user = users.find(function (user) {
  return user.name === "bob";
});
console.log(user);


var computres = [
  { name: "apple", ram: 12 },
  { name: "sam", ram: 36 },
  { name: "lenovo", ram: 16 },
];

var allComputerCanRunPro = true;
var someComputerCanRunPro = false;

for (var i = 0; i < computres.length; i++) {
  var computer = computres[i];
  if (computres[i].ram > 12) {
    allComputerCanRunPro = false;
  } else {
    someComputerCanRunPro = true;
  }
}
console.log(allComputerCanRunPro);
console.log(someComputerCanRunPro);


var names = ["jojo", "alex", "sallly", "bob"];
var a = names.every(function (name) {
  return name.length > 4;
});
var b = names.some(function (name) {
  return name.length > 4;
});
console.log(a);
console.log(b);



function balance(string) {
  return !string.split("").reduce(function (prev, next) {
    if (prev < 0) {
      return prev;
    }
    if (next === "(") {
      return ++prev;
    }
    if (next === ")") {
      return --prev;
    }
    return prev;
  }, 0);
}
console.log(balance("((()))))"));


function getYear() {
  var year = new Date().getFullYear();
  console.log("this is Year of " + year);
}

console.log(getYear());

const c = prompt("enter celsius");
const f = c * 1.8 + 32;
console.log(`${c} celsius is equal to ${f} fahrenheit`);

const f = prompt("enter fahrenheit");
const c = (f - 32) / 1.8;
console.log(`${f} fahrenheit is equal to ${c} celsius`);


const a = parseInt(prompt("enter size one : "));
const b = parseInt(prompt("enter size two : "));
const c = parseInt(prompt("enter size three : "));

const s = (a + b + c) / 2;
console.log(s);
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(area);



let a = prompt("enter num1:");
let b = prompt("enter num2:");

console.log(`the value of a before swapping ${a}`);
console.log(`the value of b before swapping ${b}`);
let temp;
temp = a;
a = b;
b = temp;
console.log(`the value of a after swapping ${a}`);
console.log(`the value of b after swapping ${b}`);


const kilo = prompt("enter kilometer values");
const f = kilo * 0.63245;
console.log(`${kilo} kilometer is equal to ${f} melies`);


const entity = [
  ["fname", "jonh"],
  ["lname", "doe"],
];
const obj = Object.fromEntries(entity);
console.log(obj);


function volve(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}
const str = prompt("enter a string");
const result = volve(str);
console.log(result);


function addNum(...number) {
  return number.reduce((sum, num) => {
    return num + sum;
  });
}

console.log(addNum(7, 8));


let a, b, c;
[a, b] = [20, 30];
console.log(a);
console.log(b);
[a, b, ...c] = [10, 20, 30, 40, 50];
console.log(c);


var saveFiles = {
  name1: "ES6",
  type: "Image",
  extension: ".jpeg",
  size: "40000",
};

function report(file) {
  console.log(
    `the ${file.name1} of the ${file.type} type ${file.extension},n size is ${file.size}`
  );
}

report(saveFiles);

const comp = ["Apple", "Google", "Yahoo", "Uber"];

const { ...rest } = comp;
// console.log(name);
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
console.log(rest);

const google = {
  location: ["NY", "NJ", "canada", "indai"],
};

const { location } = google;
console.log(location[0]);


const point = [
  [4, 5],
  [9, 3],
  [11, 0],
];

const res = point.map(([x, y]) => {
  return { x, y };
});

console.log(res);


function Car(options) {
  this.title = options.titel;
}
Car.prototype.drive = function () {
  console.log("voooh");
};
const car = new Car({ titel: "focus" });
car.drive();
console.log(car);


class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    console.log("voooh");
  }
}

class Toyota extends Car {
  constructor({ options }) {
    super(options);
    this.color = options.color;
  }
  honk() {
    console.log("boooh");
  }
}

const car = new Car({ title: "toyota" });
const toyota = new Toyota({ color: "red", drive: "hellooooo" });
console.log(car);
console.log(toyota);
car.drive();
toyota.honk();

// genreator
function* gen() {
  yield 10;
  yield 20;
  yield 30;
  yield 40;
}

let fun = gen();
console.log(fun.next().value);
console.log(fun.next().value);
console.log(fun.next().value);
console.log(fun.next().value);

function* numbers() {
  let num = 1;
  while (true) {
    yield num++;
  }
}
let gen = numbers();
for (var i = 0; i < 10; i++) {
  console.log(gen.next().value);
}

let arr1 = ["a", "b", "c", "d"];
function* array(arr) {
  yield 1;
  yield* arr1;
  yield 2;
}
for (let values of array()) {
  console.log(values);
}

function* one() {
  yield 1;
  yield 2;
  yield 3;
}
function* b() {
  yield* one();
  yield 4;
  yield 5;
}
for (let value of b()) {
  console.log(value);
}


const onep = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 5000);
  });
};

const secondp = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 3000);
  });
};

async function* gen() {
  const res1 = await onep();
  yield res1;
  const res2 = await secondp();
  yield res2;
}

let it = gen();
for await (let values of it) {
  console.log(values);
}

class Fruit {
  constructor(fname) {
    this.fruit1 = fname;
  }
  present() {
    return "My favourite fruit is " + this.fruit1;
  }
}
class Healthy extends Fruit {
  constructor(fname, mod) {
    super(fname);
    this.healthy = mod;
  }
  show() {
    return this.present() + ", it is very " + this.healthy;
  }
}

fru = new Healthy("Mango", "healthy");
console.log(fru.show());

class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    console.log("voooh");
  }
}

class Toyota extends Car {
  constructor({ options }) {
    super(options);
    this.color = options.color;
  }
  honk() {
    console.log("boooh");
  }
}

const car = new Car({ title: "toyota" });
const toyota = new Toyota({ color: "red", drive: "hellooooo" });
console.log(car);
console.log(toyota);
car.drive();
toyota.honk();


function getPattern(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*".padStart(2) + "";
    }
    console.log(row);
  }
}
getPattern(10);

function pattern(m) {
  for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = 1; j <= m - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
pattern(5);

function p1(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += k.toString().padStart(2);
    }
    console.log(row);
  }
}
p1(5);

function p2(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    for (let k = 0; k < i; k++) {
      row += "*".padStart(2);
    }
    console.log(row);
  }
}
p2(6);


const compose = (f, g) => (a) => f(7);

const sum = (num) => num + 1;

compose(sum, sum)(5);

const num = [1, 2, 5, 4, 7, 8, 6, 4, 14, 19];
for (var i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log("Even nums:" + num[i]);
  } else {
    console.log("Odd NumS:" + num[i]);
  }
}

//. Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDate();
var dayArr = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

console.log("Today is " + dayArr[day] + ".");
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

var prepand = hour >= 12 ? "Pm" : "Am";
// hour(hour >= 12) ? hour - 12 : hour;

if (hour === 0 && prepand === 0) {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "Pm";
  }
}

if (hour === 0 && prepand == 0) {
  if (min === 0 && sec === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "Am";
  }
}
console.log("Current time is :" + hour + prepand + " " + min + " " + sec);


function print_current_page() {
  window.print();
}

//Write a JavaScript program to get the current date.  
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
const todays = dd + "/" + mm + "/" + yy;
console.log(todays);

//Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
const s1 = 5;
const s2 = 6;
const s3 = 7;

const s = (s1 + s2 + s3) / 2;
const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
console.log(area);

//Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.  
function leapYear(year) {
  if (year % 4 === 0) {
    console.log("year is a leapYear");
  } else {
    console.log("year is not leapYear");
  }
}
leapYear(2025);

//Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050. 

for (var year = 2014; year <= 2050; year++) {
  var dd = new Date(year, 0, 1);
  if (dd.getDate() === 0) {
    console.log("1st january is being a sunday" + year);
  }
}

// Write a JavaScript program where the program takes a random integer between 1 and 10, and the user is
//then prompted to input a guess number. The program displays a message "Good Work" if the input matches the guess number otherwise "Not matched". 

var num = Math.ceil(Math.random() * 10);
console.log(num);
var gnum = prompt("Guess the number between 0 to 10");
if (gnum == num) {
  console.log("current Guess");
} else {
  console.log("guessing Number was not current,Number was" + gnum);
}


function mulNum() {
  num1 = document.getElementById(num1).value;
  num2 = document.getElementById(num2).value;
  alert(num1 * num2);
}
function divNum() {
  num1 = document.getElementById(num1).value;
  num2 = document.getElementById(num2).value;
  alert(num1 / num2);
}

//Write a JavaScript exercise to create a variable using a user-defined name.  
var a = "abcd";
var n = 1234;
this[a] = n;
console.log(this[a]);

//Write a JavaScript exercise to get the filename extension.
const fname = "system.js";
console.log(fname.split(".").pop());

// Write a JavaScript program to get the difference between a given number and 13, if the number is broader than 13 return double the absolute difference. 
function diff(n) {
  if (n <= 13) {
    return 13 - n;
  } else {
    return (n - 13) * 2;
  }
}
console.log(diff(19));

//Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum. 
function sumt(x, y) {
  if (x == y) {
    return 3 * (x + y);
  } else {
    return x + y;
  }
}
console.log(sumt(10, 10));
console.log(sumt(10, 20));

//Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19.
function diff3(n) {
  if (n >= 19) {
    return 3 * n;
  } else {
    return 19 - n;
  }
}
console.log(diff3(10));
console.log(diff3(20));


//Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50. 
function fun(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}

console.log(fun(20, 30));
console.log(fun(50, 30));
console.log(fun(20, 50));
console.log(fun(20, 90));


//Write a JavaScript program to check two given integers whether one is positive and another one is negative.
function pn(x, y) {
  if (x > 0 || y < 0) {
    console.log(x + "x is positive and " + y + "y is negative");
  } else {
    console.log(x, y);
  }
}
pn(47, -9);
pn(23, 56);


// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function fun(x) {
  return Math.abs(100 - x) <= 20 || Math.abs(400 - x) <= 20;
}

console.log(fun(90));
console.log(fun(20));


//Write a JavaScript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.
function strcheck(str) {
  if (str.substring(0, 2) == "py") {
    return str;
  } else {
    return "py" + str;
  }
}
console.log(strcheck("python"));
console.log(strcheck("thon"));


//Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.

function char(str, pos) {
  const s1 = str.substring(0, pos);
  const s2 = str.substring(pos + 1, str.length);
  console.log(s1 + s2);
}
char("hello,world", 0);
char("hello,world", 1);
char("hello,world", 2);


//Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters. The string length must be broader than or equal to 1.

function newStr(str) {
  if (str.length <= 1) {
    return str;
  }
  m_char = str.substring(1, str.length - 1);
  return str.charAt(str.length - 1) + m_char + str.charAt(0);
}

console.log(newStr("a"));
console.log(newStr("abc"));
console.log(newStr("abcd"));


//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
function mul(n) {
  if (n % 3 == 0 || n % 7 == 0) {
    return true;
  } else {
    return "Given num is not multiply by 3 or 7!!!!";
  }
}

console.log(mul(21));
console.log(mul(8));


//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

function str1(str) {
  if (str.length >= 3) {
    str_len = 3;
    back = str.substring(str.length - 3);
    return back + str + back;
  } else {
    return false;
  }
}
console.log(str1("abc"));
console.log(str1("ad"));
console.log(str1("adbc"));


//Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

function checkstr(str) {
  front = str.substring(0, 4);
  if (front == "java") {
    return true;
  } else {
    return false;
  }
}

console.log(checkstr("javaScript"));
console.log(checkstr("jav"));
console.log(checkstr("java"));

//Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within the range.

function range(x, y) {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99)) {
    console.log(x, y);
  } else {
    return false;
  }
}
console.log(range(80, 60));
console.log(range(20, 30));
console.log(range(60, 30));


// Write a JavaScript program to check whether a string "Script" appears at the 5th (index 4) position in a given string. If "Script" appears in the string, return the string without "Script" otherwise return the original one.

function checkstr(str) {
  if (str.length < 6) {
    return str;
  }
  let res_str = str;
  if (str.substring(10, 4) == "script") {
    return (res_str = str.substring(0, 4) + str.substring(10, str.length));
  } else {
    return res_str;
  }
}
console.log(checkstr("javascript"));
console.log(checkstr("script"));
console.log(checkstr("abcdscript"));


//Write a JavaScript program to find the largest of three given integers.

function large(a, b, c) {
  if (a > b) {
    console.log("largest num is " + a);
  } else if (b > c) {
    console.log("largest num is " + b);
  } else {
    console.log("largest num is " + c);
  }
}
large(5, 6, 7);
large(5, 5, 5);

// Write a JavaScript program to find the closest value to 100 from two numerical values.

function near(x, y) {
  if (x != y) {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);
    if (x1 < y1) {
      console.log(x);
    }
    if (y1 < x1) {
      console.log(y);
    }
  } else {
    return false;
  }
}
near(89, 99);
near(8, 9);
near(-89, 0);


// Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.
function betn(x, y) {
  if (
    (x >= 40 && x <= 60 && x >= 40 && x <= 60) ||
    (y >= 70 && y <= 100 && y >= 70 && y <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(betn(10, 50));
console.log(betn(42, 80));
console.log(betn(10, 90));
console.log(betn(30, 60));
console.log(betn(10, 20));


//Write a JavaScript program to find the largest number from the two given positive integers. 
The two numbers are in the range 40..60 inclusive.

function large(x, y) {
  if ((x >= 40 && x <= 60) || (y >= 40 && y <= 60)) {
    if (x === y) {
      console.log("x & Y both are equals");
    }
    if (x < y) {
      console.log("largest num is y =" + y);
    }
    console.log("largest num is x =" + x);
  }
}

function generatePascalsTriangle(rows) {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    triangle[i] = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        triangle[i][j] = 1;
      } else {
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
      }
    }
  }

  return triangle;
}

function printPascalsTriangle(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    console.log(
      " ".repeat((triangle.length - i - 1) * 3) + triangle[i].join(" ")
    );
  }
}

const numberOfRows = 5;
const pascalsTriangle = generatePascalsTriangle(numberOfRows);
printPascalsTriangle(pascalsTriangle);


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

// Set the number of rows for Pascal's Triangle
const numberOfRows = 6;

// Generate and print Pascal's Triangle
const pascalsTriangle = generatePascalsTriangle(numberOfRows);
printPascalsTriangle(pascalsTriangle);


//Function to find the next element in Pascal's Triangle
function findNextElement(row, index) {
  if (index === 0 || index === row.length - 1) {
    return 1;
  } else {
    return findNextElement(row, index - 1) + findNextElement(row, index);
  }
}
const row = [1, 3];
const index = 4;
const nextElement = findNextElement(row.length - 1, index);

console.log(`${row.join(",")} index ${index} is: ${nextElement}`);


function ptriangle(r) {
  for (var i = 1; i <= r; i++) {
    let rows = "";
    for (var j = 1; j <= i; j++) {
      rows += " ";
    }
    for (k = 1; k <= i * 2; k++) {
      rows += k.toString();
    }
    console.log(rows);
  }
}
ptriangle(5);

//Write a JavaScript program that checks whether the last digit of 
three positive integers is the same.
function last(x, y, z) {
  if (x > 0 && y > 0 && z > 0) {
    return x % 10 == y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
  } else {
    return false;
  }
}
console.log(last(10, 20, 30));
console.log(last(10, 20, 39));
console.log(last(14, 20, 39));
console.log(last(15, 25, 35));


//Write a JavaScript program to produce a new string that has the first 3 characters in lower case
 from a given string. If the string length is less than 3 convert all the characters to upper case.

function js(str) {
  if (str.length <= 3) {
    return str.toUpperCase();
  }
  fpart = str.substring(0, 3).toLowerCase();
  bpart = str.substring(3, str.length);
  return fpart + bpart;
}

console.log(js("JAVAScript"));
console.log(js("javaScript"));
console.log(js("JAVA"));
console.log(js("java"));
*/

//Write a JavaScript program to compute the sum of the two given integers. If the sum is in the range 50..80 return 65 otherwise return 80.

function sum(x, y) {
  var s = x + y;
  if (s >= 50 && s <= 80) {
    return 65;
  } else {
    return 80;
  }
}
console.log(sum(25, 46));
console.log(sum(20, 30));
console.log(sum(20, 20));
