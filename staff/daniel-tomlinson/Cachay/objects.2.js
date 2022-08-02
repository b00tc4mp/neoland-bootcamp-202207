/* function Person(name, surname, age, password, nationality) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.password = password;
  this.nationality = nationality;

  this.fullName = fullName(this.name, this.surname);
}

function fullName(firstName, surname) {
  firstName + " " + surname;
}

const Mati = new Person("Mati", "Bua", undefined, "123", "Aregentina");

console.log(Mati); */

function Person(name, surname, age, password, nationality) {
  //   "use strict";
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.password = password;
  this.nationality = nationality;

  //   this.fullName = fullName();
  // this.nameFull = this.name + " " + this.surname;
  this.fullName = completeName();

  // this.completeName = null;

  // this.fullName2 = function () {
  //   return this.firstName + " " + this.lastName;
  // };

  // this.fullName3 = () => {
  //   return this.firstName + " " + this.lastName;
  // };

  // this.fullName4 = Person.fullName1;
}

Person.prototype.fullName = function () {
  const fullname = this.name + " " + this.surname;

  return fullname;
};

Person.prototype.fullName1 = function () {
  const fullname = this.name + " " + this.surname;

  return fullname;
};

function completeName() {
  debugger;
  const fullname = this.name + " " + this.surname;

  return fullname;
}

Person.completeName = completeName();

const mati = new Person("Mati", "Bua", undefined, "123", "Aregentina");

mati.completeName = completeName();

const matiFullName = mati.fullName();

console.log(mati);

console.log(matiFullName);

console.log(mati.fullName());

console.log(mati.fullName2());

/* const matias = {
  name: "Mati",
  age: 26,
  password: "123",
  nationality: "Aregentina",
};

console.log(matias); */

/* const matt = Object.create();

matt.name = "Matt";
matt.age = 26;
matt.password = "123";
matt.nationality = "Argentina"; */
