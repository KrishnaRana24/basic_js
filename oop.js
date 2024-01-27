// const person = function (firstname, birthyear) {
//   this.firstname = firstname;
//   this.birthyear = birthyear;
// };

// const kri = new person("krishna", 2002);
// const arti = new person("Aarti", 2001);
// console.log(kri, arti);

// person.prototype.calage = function () {
//   console.log(2024 - this.birthyear);
// };

// kri.calage();

// const arr = [1, 2, 2, 4, 2, 6, 2, 8];
// //console.log(arr.__proto___);
// // console.log(arr.__proto___ === Array.prototype);
// // console.log(arr.__proto___.__proto___);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.acceletor = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going on ${this.speed} km/h`);
// };

// car.prototype.break = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going on ${this.speed} km/h`);
// };

// const bmw = new car("bmw", 120);
// const mercedes = new car("mercedes", 95);

// bmw.acceletor();
// bmw.acceletor();
// bmw.break();
// bmw.acceletor();

class car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acceletor() {
    this.speed += 10;
    console.log(`${this.make} is going on ${this.speed} km/h`);
  }
  break() {
    this.speed -= 5;
    console.log(`${this.make} is going on ${this.speed} km/h`);
  }
  get speedus() {
    return this.speed / 1.6;
  }
  set speedus(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new car("ford", 120);
console.log(ford.speed);
ford.acceletor();
ford.acceletor();
ford.break();
ford.speedus = 50;
console.log(ford);
