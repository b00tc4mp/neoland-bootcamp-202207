function Cachay(...values) {
  this.length = values.length;

  for (let i = 0; i < values.length; i++) this[i] = values[i];
}

/* function Ochect(name, age, password, nationality) {
  this.name = name;
  this.age = age;
  this.password = password;
  this.nationality = nationality;
}

const Mati = new Ochect("Mati", 26, "123", "Aregentina");

console.log(Mati);

const matias = {
  name: "Mati",
  age: 26,
  password: "123",
  nationality: "Aregentina",
};

console.log(matias);

const matt = Object.create();

matt.name = "Matt";
matt.age = 26;
matt.password = "123";
matt.nationality = "Argentina"; */
