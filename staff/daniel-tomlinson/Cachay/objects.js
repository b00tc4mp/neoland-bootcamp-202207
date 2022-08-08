function Person(name, surname, age, password, nationality) {
  //"use strict";
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.password = password;
  this.nationality = nationality;

  this.fullName = completeName.call(this);

  // In this case can als writ the following:
  // this.fullName = this.name + " " + this.surname
  this.fullName1 = `${this.name} ${this.surname}`;
}

function completeName() {
  debugger;
  const fullname = this.name + " " + this.surname;

  return fullname;
}

const person = new Person("Charly", "Brown", undefined, "123", "American");

console.log(person);
