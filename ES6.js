class person {
  constructor(fname, byear) {
    this.fname = fname;
    this.byear = byear;
  }
  calAge() {
    console.log(2024 - this.byear);
  }
  greet() {
    console.log(`hello ${this.fname}`);
  }
  get age() {
    return 2024 - this.byear;
  }
  set fullname(name) {
    console.log(name);
    if (name.include(" ")) this._fullname = name;
    else alert(`${this.fullname} is not a full name`);
  }
  get fullname() {
    return this._fullname;
  }
}

const kri = new person("krishna", 2002);
console.log(kri);
kri.calAge();

console.log(kri.__proto__ === person.prototype);

// person.prototype.greet = function () {
//   console.log(`hello ${this.fname}`);
// };
kri.greet();
console.log(kri.age);
console.log(kri.fullname);
